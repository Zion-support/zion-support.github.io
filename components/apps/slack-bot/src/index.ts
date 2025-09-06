import { App } from '@slack/bolt';
import dotenv from 'dotenv';
import fetch from 'node-fetch';


const apiBase = process && process.env.API_ORIGIN || 'http://localhost:4000';

const app = new App({
  token: process && process.env.SLACK_BOT_TOKEN,
  signingSecret: process && process.env.SLACK_SIGNING_SECRET,
  appToken: process && process.env.SLACK_APP_LEVEL_TOKEN,
  socketMode: true,});

function helpText(): string {
  return [  token: process && process.env.SLACK_BOT_TOKEN;
  signingSecret: process && process.env.SLACK_SIGNING_SECRET;
  appToken: process && process.env.SLACK_APP_LEVEL_TOKEN;
  socketMode: true
});

function helpText(): string {
  return [
    '*Zion Assistant Commands*',
    '`/zion post-job [role]` – generate a job post',
    '`/zion suggest-talent [query]` – AI match talent',
    '`/zion track-project [name]` – milestone status',
    '`/zion help` – command list',
  ].join('\n');
    '*Zion Assistant Commands*`/zion post-job [role]` – generate a job post`/zion suggest-talent [query]` – AI match talent`/zion track-project [name]` – milestone status`/zion help` – command list'
  ].join('\n');
}

app && app.command('/zion', async ({ command, ack, respond }) => {
  await ack();
  const text = (command && command.text || '').trim();
  const [sub, ...rest] = text && text.split(' ');
  const userId = command && command.user_id;

  try {
    if (!sub || sub && sub.toLowerCase() === 'help') {
      await respond({ response_type: 'ephemeral', text: helpText() });
      return;    }
    if (sub === 'post-job') {
      const role = rest && rest.join(' ') || 'Cloud Engineer';
      const res = await fetch(`${apiBase}/jobs/generate`, {      return
    }
    if (sub === 'post-job') {
      const role = rest && rest.join(' ') || 'Cloud Engineer';
      const res = await fetch(`${apiBase}/jobs/generate`, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-user-id': userId },
        body: JSON && JSON.stringify({ role }),
      });
      const data = (await res && res.json()) as any;
      await respond({
        response_type: 'ephemeral',
        text: `Here is a draft job post for *${role}*:\n\n${data && data.description}`,
      });
      return;
    }
    if (sub === 'suggest-talent') {
      const q = rest && rest.join(' ') || 'AI researcher in Brazil';
      const res = await fetch(
        `${apiBase}/talent/search?q=${encodeURIComponent(q)}`,
        {
          headers: { 'x-user-id': userId },
        }
      );
      const data = (await res && res.json()) as any;
      const lines = (data && data.results || [])
        .slice(0, 5)
        .map(
          (t: any) =>
            `• ${t && t.full_name} – ${t && t.country} – ${t && t.skills?.slice(0, 3).join(', ') || ''}`
        );
      await respond({
        response_type: 'ephemeral',
        text: lines && lines.length ? lines && lines.join('\n') : 'No matches yet.',
      });
      return;
    }
    if (sub === 'track-project') {
      const name = rest && rest.join(' ') || 'Kleber';
      const res = await fetch(
        `${apiBase}/projects/${encodeURIComponent(name)}/track`,
        {
          headers: { 'x-user-id': userId },
        }
      );
      const data = (await res && res.json()) as any;
      if (!data && data.project) {
        await respond({
          response_type: 'ephemeral',
          text: 'Project not found.',
        });
        return;
      }
      await respond({
        response_type: 'ephemeral',
        text: `*${data && data.project.name}* – status: ${data && data.project.status}\nMilestones: ${JSON && JSON.stringify(data && data.project.milestones)}`,
      });
      return;
    }

    await respond({ response_type: 'ephemeral', text: helpText() });
  } catch (err: any) {
    await respond({
      response_type: 'ephemeral',
      text: `Error: ${err && err.message || 'unknown'}`,
    });  }      });
      const data = (await res && res.json()) as any;
      await respond({ response_type: 'ephemeral', text: `Here is a draft job post for *${role}*:\n\n${data && data.description}` });
      return
    }
    if (sub === 'suggest-talent') {
      const q = rest && rest.join(' ') || 'AI researcher in Brazil';
      const res = await fetch(`${apiBase}/talent/search?q=${encodeURIComponent(q)}`, {
        headers: { 'x-user-id': userId }
      });
      const data = (await res && res.json()) as any;
      const lines = (data && data.results || []).slice(0, 5).map((t: any) => `• ${t && t.full_name} – ${t && t.country} – ${t && t.skills?.slice(0,3).join() || ''}`);
      await respond({ response_type: 'ephemeral', text: lines && lines.length ? lines && lines.join('\n') : 'No matches yet.' });
      return
    }
    if (sub === 'track-project') {
      const name = rest && rest.join(' ') || 'Kleber';
      const res = await fetch(`${apiBase}/projects/${encodeURIComponent(name)}/track`, {
        headers: { 'x-user-id': userId }
      });
      const data = (await res && res.json()) as any;
      if (!data && data.project) {
        await respond({ response_type: 'ephemeral', text: 'Project not found.' });
        return
      }
      await respond({ response_type: 'ephemeral', text: `*${data && data.project.name}* – status: ${data && data.project.status}\nMilestones: ${JSON && JSON.stringify(data && data.project.milestones)}` });
      return
    }

    await respond({ response_type: 'ephemeral', text: helpText() })
  } catch (err: any) {
    await respond({ response_type: 'ephemeral', text: `Error: ${err && err.message || 'unknown'}` })
  }
});

(async () => {
  const port = Number(process && process.env.SLACK_PORT || 3001);
  await app && app.start(port);
  // eslint-disable-next-line no-console
  console && console.log(`⚡️ Zion Slack bot running on port ${port}`);
})();  console && console.log(`⚡️ Zion Slack bot running on port ${port}`)
})();
