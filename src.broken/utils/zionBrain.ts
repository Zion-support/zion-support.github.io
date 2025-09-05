export type ZionChain = 'resumeBuilder' | 'daoExplainer' | 'tokenomicsSimulator' | 'governanceSummarizer' | 'nationAssistant',

<<<<<<< HEAD
export interface RouterResult {
  intent: ZionChain,
  confidence: number,
  notes?: string
}

export interface ReflexMetrics {
  signupsLastHour?: number,
  disputeFlagsLastHour?: number,
  zionVelocity?: number, // tokens/min
  baselineSignups?: number,
  baselineDisputeFlags?: number,
  baselineVelocity?: number
}

export interface ReflexTrigger {
  action: 'launchRewardPopup' | 'escalateSupport' | 'notifyAdmin',
  reason: string,
  severity: 'low' | 'medium' | 'high'
}

export interface LogEntry {
  id: string,
  timestamp: string,
  module: 'router' | 'reflex' | 'optimizer' | 'admin',
  type: ZionChain | 'metrics' | 'optimize' | 'deploy' | 'suspend' | 'audit' | 'stuck',
  status: 'ok' | 'laggy' | 'error' | 'stuck',
  latencyMs?: number,
  payload?: Record<string unknown>
}

import fs from 'fs',
import path from 'path',
import { randomUUID } from 'uuid',
const dataDir = path.resolve(process.cwd(), 'datazion-brain'),
const logsPath = path.join(dataDir, 'logs.json'),
const statePath = path.join(dataDir, 'state.json'),

function ensureDataFiles(): void {
  try {
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true }),
    if (!fs.existsSync(logsPath)) fs.writeFileSync(logsPath, JSON.stringify({ entries: [] }, null, 2)),
    if (!fs.existsSync(statePath)) fs.writeFileSync(statePath, JSON.stringify({ metrics: {} }, null, 2))
  } catch {
    // In serverless environments, filesystem may be read-only, ignore errors gracefully
  }
}

export function detectIntent(text: string): RouterResult {
  const lower = (text || '').toLowerCase(),
  const rules: Array<{ chain: ZionChain, keywords: string[] }> = [
    { chain: 'resumeBuilder', keywords: ['resumecvcurriculumjob'] },
    { chain: 'daoExplainer', keywords: ['daogovernance tokenproposaltreasury'] },
    { chain: 'tokenomicsSimulator', keywords: ['tokenomicssupplyemissionvestingcirculating'] },
    { chain: 'governanceSummarizer', keywords: ['governancevotesnapshotsummaryforum'] },
    { chain: 'nationAssistant', keywords: ['nationcitizenconstitutioncharterpolicy'] }],

  for (const rule of rules) {
    if (rule.keywords.some((k) => lower.includes(k))) {
      return { intent: rule.chain, confidence: 0.9, notes: 'Keyword match' }
    }
  }
  // Fallback simple heuristic
  return { intent: 'nationAssistant', confidence: 0.5, notes: 'Default fallback' }
}

export async function routeToChain(intent: ZionChain, payload: Record<string unknown>): Promise<{ routed: boolean, message: string }> {
  // Placeholder for real chain invocations
  return { routed: true, message: `Routed to ${intent}` }
}

export function evaluateReflexes(metrics: ReflexMetrics): ReflexTrigger[] {
  const baselineSignups = metrics.baselineSignups ?? 20,
  const baselineDisputes = metrics.baselineDisputeFlags ?? 2,
  const baselineVelocity = metrics.baselineVelocity ?? 100, // tokens/min
=======
export interface RouterResult {_intent: ZionChain;
  confidence: number;
  notes?: string;}

export interface ReflexMetrics {_signupsLastHour?: number;
  disputeFlagsLastHour?: number;
  zionVelocity?: number; // tokens/min
  baselineSignups?: number;
  baselineDisputeFlags?: number;
  baselineVelocity?: number;}

export interface ReflexTrigger {_action: 'launchRewardPopup' | 'escalateSupport' | 'notifyAdmin';
  reason: string;
  severity: 'low' | 'medium' | 'high';}

export interface LogEntry {_id: string;
  timestamp: string;
  module: 'router' | 'reflex' | 'optimizer' | 'admin';
  type: ZionChain | 'metrics' | 'optimize' | 'deploy' | 'suspend' | 'audit' | 'stuck';
  status: 'ok' | 'laggy' | 'error' | 'stuck';
  latencyMs?: number;
  payload?: Record<string, _unknown>;}

import fs from 'fs';
import path from 'path';

const _dataDir = path.resolve(process.cwd(), 'data', 'zion-brain');
const _logsPath = path.join(dataDir, 'logs.json');
const _statePath = path.join(dataDir, 'state.json');

function ensureDataFiles(): void {_try {
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, _{ recursive: true});
    if (!fs.existsSync(logsPath)) fs.writeFileSync(logsPath, JSON.stringify({_entries: []}, null, 2));
    if (!fs.existsSync(statePath)) fs.writeFileSync(statePath, JSON.stringify({_metrics: {} }, null, 2));
  } catch {_// In serverless environments, _filesystem may be read-only; ignore errors gracefully}
}

export function detectIntent(_text: string): RouterResult {_const _lower = (text || '').toLowerCase();
  const rules: Array<{ chain: ZionChain; keywords: string[]}> = [
    {_chain: 'resumeBuilder', _keywords: ['resume', _'cv', _'curriculum', _'job']},
    {_chain: 'daoExplainer', _keywords: ['dao', _'governance token', _'proposal', _'treasury']},
    {_chain: 'tokenomicsSimulator', _keywords: ['tokenomics', _'supply', _'emission', _'vesting', _'circulating']},
    {_chain: 'governanceSummarizer', _keywords: ['governance', _'vote', _'snapshot', _'summary', _'forum']},
    {_chain: 'nationAssistant', _keywords: ['nation', _'citizen', _'constitution', _'charter', _'policy']}];

  for (const rule of rules) {_if (_rule.keywords.some((k) => lower.includes(k))) {
      return { intent: rule.chain, _confidence: 0.9, _notes: 'Keyword match'};
    }
  }
  // Fallback simple heuristic
  return {_intent: 'nationAssistant', _confidence: 0.5, _notes: 'Default fallback'};
}

export async function routeToChain(_intent: ZionChain, _payload: Record<string, _unknown>): Promise<{_routed: boolean; message: string}> {_// Placeholder for real chain invocations
  return { routed: true, _message: `Routed to ${intent}` };
}

export function evaluateReflexes(_metrics: ReflexMetrics): ReflexTrigger[] {_const _baselineSignups = metrics.baselineSignups ?? 20;
  const _baselineDisputes = metrics.baselineDisputeFlags ?? 2;
  const _baselineVelocity = metrics.baselineVelocity ?? 100; // tokens/min
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const triggers: ReflexTrigger[] = [],

  if ((metrics.signupsLastHour ?? 0) > baselineSignups * 1.8) {
<<<<<<< HEAD
    triggers.push({ action: 'launchRewardPopup', reason: 'Surge in signups detected', severity: 'medium' })
  }
  if ((metrics.disputeFlagsLastHour ?? 0) > baselineDisputes * 2) {
    triggers.push({ action: 'escalateSupport', reason: 'Spike in dispute flags', severity: 'high' })
  }
  if ((metrics.zionVelocity ?? baselineVelocity) < baselineVelocity * 0.6) {
    triggers.push({ action: 'notifyAdmin', reason: 'Drop in ZION$ velocity', severity: 'high' })
=======
    triggers.push({ action: 'launchRewardPopup', _reason: 'Surge in signups detected', _severity: 'medium'});
  }
  if ((metrics.disputeFlagsLastHour ?? 0) > baselineDisputes * 2) {_triggers.push({ action: 'escalateSupport', _reason: 'Spike in dispute flags', _severity: 'high'});
  }
  if ((metrics.zionVelocity ?? baselineVelocity) < baselineVelocity * 0.6) {_triggers.push({ action: 'notifyAdmin', _reason: 'Drop in ZION$ velocity', _severity: 'high'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  return triggers
}

<<<<<<< HEAD
export async function optimizePrompt(original: string, userIntent?: string): Promise<{ optimized: string, suggestions: string[] }> {
  const apiKey = process.env.OPENAI_API_KEY,
  const targetInstruction = 'Review this prompt and rewrite it to be 30% faster and more specific to user intent.',

  // Heuristic fast path if no API key
  if (!apiKey) {
    const tightened = heuristicTighten(original, userIntent),
    return {
      optimized: tightened,
      suggestions: [
        'Removed vague qualifiers and redundant phrasesAdded explicit constraints and output format',
        userIntent ? `Anchored to intent: ${userIntent}` : 'Added a brief intent anchor']}
  }

  try {
    const { OpenAI } = await import('openai'),
    const openai = new OpenAI({ apiKey }),
    const system = 'You optimize prompts for speed and specificity. Prefer precise constraints, avoid open-ended wording. Reduce token count while improving clarity. Return only the rewritten prompt.',
    const user = `${targetInstruction}\n\nUser intent: ${userIntent || 'unknown'}\n\nPrompt to optimize:\n${original}`,
=======
export async function optimizePrompt(_original: string, _userIntent?: string): Promise<{_optimized: string; suggestions: string[]}> {_const _apiKey = process.env.OPENAI_API_KEY;
  const _targetInstruction = 'Review this prompt and rewrite it to be 30% faster and more specific to user intent.';

  // Heuristic fast path if no API key
  if (!apiKey) {
    const _tightened = heuristicTighten(original, _userIntent);
    return {
      optimized: tightened, _suggestions: [
        'Removed vague qualifiers and redundant phrases', _'Added explicit constraints and output format', _userIntent ? `Anchored to intent: ${userIntent}` : 'Added a brief intent anchor']};
  }

  try {_const { OpenAI} = await import('openai');
    const _openai = new OpenAI({_apiKey});
    const _system = 'You optimize prompts for speed and specificity. Prefer precise constraints, avoid open-ended wording. Reduce token count while improving clarity. Return only the rewritten prompt.';
    const _user = `${_targetInstruction}\n\nUser intent: ${_userIntent || 'unknown'}\n\nPrompt to optimize:\n${_original}`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const _resp = await openai.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
        { role: 'system', _content: system},
        {_role: 'user', _content: user}],
      temperature: 0.2,
<<<<<<< HEAD
      max_tokens: 400}),
    const optimized = resp.choices?.[0]?.message?.content?.trim() || heuristicTighten(original, userIntent),
    return { optimized, suggestions: ['Used OpenAI optimization for speed and specificity'] }
  } catch {
    const tightened = heuristicTighten(original, userIntent),
    return { optimized: tightened, suggestions: ['OpenAI not available at runtime, applied heuristic tightening'] }
  }
}

function heuristicTighten(text: string, userIntent?: string): string {
  const trimmed = (text || '').replace(/\s+/g, ' ').trim(),
  const withoutFillers = trimmed
    .replace(/please\s+/gi, '')
    .replace(/could you\s+/gi, '')
    .replace(/basically\s+/gi, '')
    .replace(/kind of\s+/gi, '')
    .replace(/sort of\s+/gi, '')
    .replace(/very\s+/gi, '')
    .replace(/really\s+/gi, ''),
  const withConstraints = `${withoutFillers}\n\nConstraints: respond in under 6 bullets, include only actionable steps, max 120 words, avoid repetition.${userIntent ? ` Intent: ${userIntent}.` : ''}`,
  return withConstraints
}

export function readLogs(): { entries: LogEntry[] } {
  ensureDataFiles(),
  try {
    const raw = fs.readFileSync(logsPath, 'utf8'),
    return JSON.parse(raw)
  } catch {
    return { entries: [] }
  }
}

export function appendLog(entry: Omit<LogEntry 'id' | 'timestamp'>): void {
  ensureDataFiles(),
  try {
    const current = readLogs(),
    const enriched: LogEntry = {
      id: randomUUID(),
      timestamp: new Date().toISOString(),
      ...entry},
    current.entries.push(enriched),
    fs.writeFileSync(logsPath, JSON.stringify(current, null, 2))
  } catch {
    // ignore
  }
}

export function readState<T = unknown>(): T {
  ensureDataFiles(),
  try {
    const raw = fs.readFileSync(statePath, 'utf8'),
    return JSON.parse(raw) as T
  } catch {
    return {} as unknown as T
  }
}

export function writeState<T = unknown>(state: T): void {
  ensureDataFiles(),
  try {
    fs.writeFileSync(statePath, JSON.stringify(state, null, 2))
  } catch {
    // ignore
  }
=======
      max_tokens: 400});
    const _optimized = resp.choices?.[0]?.message?.content?.trim() || heuristicTighten(original, userIntent);
    return {_optimized, _suggestions: ['Used OpenAI optimization for speed and specificity']};
  } catch {_const _tightened = heuristicTighten(original, _userIntent);
    return { optimized: tightened, _suggestions: ['OpenAI not available at runtime; applied heuristic tightening']};
  }
}

function heuristicTighten(_text: string, _userIntent?: string): string {_const _trimmed = (text || '').replace(/\s+/g, _' ').trim();
  const _withoutFillers = trimmed
    .replace(/please\s+/gi, _'')
    .replace(/could you\s+/gi, _'')
    .replace(/basically\s+/gi, _'')
    .replace(/kind of\s+/gi, _'')
    .replace(/sort of\s+/gi, _'')
    .replace(/very\s+/gi, _'')
    .replace(/really\s+/gi, _'');
  const _withConstraints = `${withoutFillers}\n\nConstraints: respond in under 6 bullets; include only actionable steps; max 120 words; avoid repetition.${_userIntent ? ` Intent: ${userIntent}.` : ''}`;
  return withConstraints;
}

export function readLogs(): {_entries: LogEntry[]} {_ensureDataFiles();
  try {
    const _raw = fs.readFileSync(logsPath, _'utf8');
    return JSON.parse(raw);} catch {_return { entries: []};
  }
}

export function appendLog(_entry: Omit<LogEntry, _'id' | 'timestamp'>): void {_ensureDataFiles();
  try {
    const _current = readLogs();
    const enriched: LogEntry = {
      id: randomUUID(), _timestamp: new Date().toISOString(), _...entry};
    current.entries.push(enriched);
    fs.writeFileSync(logsPath, JSON.stringify(current, null, 2));
  } catch {_// ignore}
}

export function readState<T = unknown>(): T {_ensureDataFiles();
  try {
    const _raw = fs.readFileSync(statePath, _'utf8');
    return JSON.parse(raw) as T;} catch {_return {} as unknown as T;
  }
}

export function writeState<T = unknown>(_state: T): void {_ensureDataFiles();
  try {
    fs.writeFileSync(statePath, _JSON.stringify(state, _null, _2));} catch {_// ignore}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}