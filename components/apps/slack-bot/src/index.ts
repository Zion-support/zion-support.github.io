import { App } from '@slack/bolt';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
dotenv.config();

const apiBase = process.env.API_ORIGIN || 'http://localhost:4000';

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_LEVEL_TOKEN,
  socketMode: true,});

function helpText(): string {
  return [
=======
  token: process.env.SLACK_BOT_TOKEN;
  signingSecret: process.env.SLACK_SIGNING_SECRET;
  appToken: process.env.SLACK_APP_LEVEL_TOKEN;
  socketMode: true
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
});

function helpText(): string {
  return [
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    '*Zion Assistant Commands*',
    '`/zion post-job [role]` – generate a job post',
    '`/zion suggest-talent [query]` – AI match talent',
    '`/zion track-project [name]` – milestone status',
    '`/zion help` – command list',
  ].join('\n');
<<<<<<< HEAD
=======
    '*Zion Assistant Commands*`/zion post-job [role]` – generate a job post`/zion suggest-talent [query]` – AI match talent`/zion track-project [name]` – milestone status`/zion help` – command list'
  ].join('\n');
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
=======
      return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
    if (sub === 'post-job') {
      const role = rest.join(' ') || 'Cloud Engineer';
      const res = await fetch(`${apiBase}/jobs/generate`, {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-user-id': userId },
        body: JSON.stringify({ role }),
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      });
      const data = (await res.json()) as any;
      await respond({
        response_type: 'ephemeral',
        text: `Here is a draft job post for *${role}*:\n\n${data.description}`,
      });
      return;
    }
    if (sub === 'suggest-talent') {
      const q = rest.join(' ') || 'AI researcher in Brazil';
      const res = await fetch(
        `${apiBase}/talent/search?q=${encodeURIComponent(q)}`,
        {
          headers: { 'x-user-id': userId },
        }
      );
      const data = (await res.json()) as any;
      const lines = (data.results || [])
        .slice(0, 5)
        .map(
          (t: any) =>
            `• ${t.full_name} – ${t.country} – ${t.skills?.slice(0, 3).join(', ') || ''}`
        );
      await respond({
        response_type: 'ephemeral',
        text: lines.length ? lines.join('\n') : 'No matches yet.',
      });
      return;
    }
    if (sub === 'track-project') {
      const name = rest.join(' ') || 'Kleber';
      const res = await fetch(
        `${apiBase}/projects/${encodeURIComponent(name)}/track`,
        {
          headers: { 'x-user-id': userId },
        }
      );
      const data = (await res.json()) as any;
      if (!data.project) {
        await respond({
          response_type: 'ephemeral',
          text: 'Project not found.',
        });
        return;
      }
      await respond({
        response_type: 'ephemeral',
        text: `*${data.project.name}* – status: ${data.project.status}\nMilestones: ${JSON.stringify(data.project.milestones)}`,
      });
      return;
    }

    await respond({ response_type: 'ephemeral', text: helpText() });
  } catch (err: any) {
    await respond({
      response_type: 'ephemeral',
      text: `Error: ${err.message || 'unknown'}`,
    });  }
=======
    await respond({ response_type: 'ephemeral', text: `Error: ${err.message || 'unknown'}` })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
});

(async () => {
  const port = Number(process.env.SLACK_PORT || 3001);
  await app.start(port);
  // eslint-disable-next-line no-console
  console.log(`⚡️ Zion Slack bot running on port ${port}`);
})();
=======
  console.log(`⚡️ Zion Slack bot running on port ${port}`)
})();
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
