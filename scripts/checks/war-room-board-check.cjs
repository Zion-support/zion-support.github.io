#!/usr/bin/env node
/**
 * Guard the war-room board so agents are not sent to satellite TLS-fail
 * hosts or told to wait for Pulse spam.
 */
'use strict';
const fs = require('fs');
const path = require('path');

let errors = 0;
function fail(msg) {
  console.error('ERROR ' + msg);
  errors++;
}

const htmlPath = path.join(process.cwd(), 'public/ops/comms/index.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const promptMatch = html.match(/<textarea id="prompt"[^>]*>([\s\S]*?)<\/textarea>/);
if (!promptMatch) fail('index.html missing #prompt textarea');
const prompt = promptMatch ? promptMatch[1] : '';

if (!prompt.includes('https://ziontechgroup.com/en/plans/')) fail('prompt missing /en/plans/');
if (!prompt.includes('https://ziontechgroup.com/discovery/')) fail('prompt missing /discovery/');
if (/https:\/\/plans\.ziontechgroup\.com/.test(prompt)) fail('prompt must not sell plans.ziontechgroup.com');
if (/https:\/\/discovery\.ziontechgroup\.com/.test(prompt)) fail('prompt must not sell discovery.ziontechgroup.com');
if (!prompt.includes('Do not sit in STANDBY')) fail('prompt must tell agents not to sit in STANDBY');
if (!prompt.includes('Claim one OPEN lane')) fail('prompt must tell agents to claim an OPEN lane');
if (!/setInterval\(loadLog,\s*10000\)/.test(html)) fail('board must poll comments every 10s');
if (!html.includes('war-room-standing:v1')) fail('board must look for standing Pulse marker');
if (!html.includes('Keep Carlos') && !html.includes('Help Carlos')) fail('board must say Help Carlos');
if (!html.includes('id="lanes"')) fail('board must show live lanes');
if (!html.includes('id="join"')) fail('board must ship a paste-ready JOIN box');
if (!html.includes('id="slack"')) fail('board must ship a paste-ready Slack keep-running line');
if (/Standby until assigned/i.test(html)) fail('board must not tell agents to standby');
if (/Status:\s*ONLINE\/OFFLINE\/STANDBY/.test(html)) fail('JOIN box must not offer STANDBY status');

const protocol = fs.readFileSync(path.join(process.cwd(), 'ops/comms/PROTOCOL.md'), 'utf8');
if (/Status:\s*ONLINE\/OFFLINE\/STANDBY/.test(protocol)) fail('PROTOCOL check-in must not offer STANDBY');
if (!protocol.includes('| YOUR_NAME | JOIN')) fail('PROTOCOL must ship a paste-ready JOIN');
if (/Assigns lanes/.test(protocol)) fail('PROTOCOL must not tell agents to wait for Grok to assign lanes');

const py = fs.readFileSync(path.join(process.cwd(), '.github/scripts/war_room_pulse.py'), 'utf8');
if (!py.includes('<!-- war-room-standing:v1 -->')) fail('pulse.py missing standing marker');
if (/open\(LOG_JSON/.test(py) || /git commit/.test(py)) fail('pulse.py must not write/commit log.json');

const pulseYml = fs.readFileSync(path.join(process.cwd(), '.github/workflows/war-room-pulse.yml'), 'utf8');
if (/contents:\s*write/.test(pulseYml)) fail('pulse workflow must not request contents: write');
if (!pulseYml.includes("github-actions[bot]")) fail('pulse workflow must skip github-actions[bot]');
if (/^\s*needs:\s*test\s*$/m.test(pulseYml)) fail('pulse cron must not wait on unit tests');
if (!py.includes('LANES') || !py.includes('Do not sit in STANDBY')) fail('pulse.py must publish keep-running lanes');
if (!py.includes('war-room-issue:v1')) fail('pulse.py must keep the issue body moving');
if (!py.includes('def join_snippet')) fail('pulse.py must publish a paste-ready JOIN');
if (!py.includes('def slack_keepalive_text')) fail('pulse.py must publish a Slack keep-running line');
if (py.includes('all named agents OFFLINE')) fail('pulse Slack must not declare the room dead');
if (py.includes('OFFLINE — restart now')) fail('pulse must not tell agents to restart OFFLINE peers');

const rulePath = path.join(process.cwd(), '.cursor/rules/war-room.mdc');
if (!fs.existsSync(rulePath)) fail('missing .cursor/rules/war-room.mdc boot rule');
else {
  const rule = fs.readFileSync(rulePath, 'utf8');
  if (!rule.includes('alwaysApply: true')) fail('war-room rule must alwaysApply so new agents boot');
  if (!rule.includes('| YOUR_NAME | JOIN') && !rule.includes('First comment')) fail('war-room rule must tell agents to JOIN');
  if (!rule.includes('Do not sit in STANDBY')) fail('war-room rule must forbid STANDBY');
  if (!rule.includes('https://ziontechgroup.com/en/plans/')) fail('war-room rule must sell /en/plans/');
}

const deploy = fs.readFileSync(path.join(process.cwd(), '.github/workflows/static-deploy.yml'), 'utf8');
if (!/cancel-in-progress:\s*false/.test(deploy)) fail('static-deploy must not cancel in-flight Pages');
if (!deploy.includes('ops/comms/PROTOCOL.md')) fail('static-deploy must ignore PROTOCOL.md');

const watchdog = fs.readFileSync(path.join(process.cwd(), '.github/workflows/agent-presence-watchdog.yml'), 'utf8');
if (/cron:/.test(watchdog)) fail('watchdog must not run on a cron (Pulse owns the roster)');

console.log(errors ? `war-room board check failed: ${errors} error(s)` : 'war-room board check ok');
process.exit(errors > 0 ? 1 : 0);
