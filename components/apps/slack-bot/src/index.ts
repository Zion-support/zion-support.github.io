import { App } from '@slack/bolt';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const apiBase = process.env.API_ORIGIN || 'http://localhost:4000';

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_LEVEL_TOKEN,
  socketMode: true,});

function helpText(): string {
  return [

});

function helpText(): string {
  return [

app.command('/zion', async ({ command, ack, respond }) => {
  await ack();
  const text = (command.text || '').trim();
  const [sub, ...rest] = text.split(' ');
  const userId = command.user_id;

  try {
    if (!sub || sub.toLowerCase() === 'help') {
      await respond({ response_type: 'ephemeral', text: helpText() });
      return;    }
    if (sub === 'post-job') {
      const role = rest.join(' ') || 'Cloud Engineer';
      const res = await fetch(`${apiBase}/jobs/generate`, {

    }
    if (sub === 'post-job') {
      const role = rest.join(' ') || 'Cloud Engineer';
      const res = await fetch(`${apiBase}/jobs/generate`, {

        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-user-id': userId },
        body: JSON.stringify({ role }),

  }

});

(async () => {
  const port = Number(process.env.SLACK_PORT || 3001);
  await app.start(port);
  // eslint-disable-next-line no-console
  console.log(`⚡️ Zion Slack bot running on port ${port}`);
})();