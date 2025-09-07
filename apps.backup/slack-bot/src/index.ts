import { App } from '@slack/bolt';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config($2);
const apiBase = $2;
const app = new App($2);
function helpText(): string {
  return [
    '*Zion Assistant Commands*`/zion post-job [role]` – generate a job post`/zion suggest-talent [query]` – AI match talent`/zion track-project [name]` – milestone status`/zion help` – command list'
  ].join('\n')
}
app.command('/zion', async ({ command, ack, respond }) => {
  await ack($2);
  const text = (command.text || '').trim($2);
  const [sub, ...rest] = text.split($2);
  const userId = $2;
  try {
    if (!sub || sub.toLowerCase() === 'help') {
      await respond({ response_type: 'ephemeral', text: helpText() }),
      return
    }
    if (sub = $2;
      const res = await fetch(`${apiBase}/jobs/generate`, {
        method: 'POST',
        headers: { 'content-type': 'application/jsonx-user-id': userId },
        body: JSON.stringify({ role })
      }),
      const data = $2;
      await respond($2);
      return
    }
    if (sub = $2;
      const res = await fetch(`${apiBase}/talent/search?q=${encodeURIComponent(q)}`, {
        headers: { 'x-user-id': userId }
      }),
      const data = $2;
      const lines = (data.results || []).slice(0, 5).map((t: any) => `• ${t.full_name} – ${t.country} – ${t.skills?.slice(0,3).join() || ''}`),
      await respond({ response_type: 'ephemeral', text: lines.length ? lines.join('\n') : 'No matches yet.' }),
      return
    }
    if (sub = $2;
      const res = await fetch(`${apiBase}/projects/${encodeURIComponent(name)}/track`, {
        headers: { 'x-user-id': userId }
      }),
      const data = $2;
      if (!data.project) {
        await respond($2);
        return
      }
      await respond({ response_type: 'ephemeral', text: `*${data.project.name}* – status: ${data.project.status}\nMilestones: ${JSON.stringify(data.project.milestones)}` }),
      return
    }

    await respond({ response_type: 'ephemeral', text: helpText() })
  } catch (err: any) {
    await respond({ response_type: 'ephemeral', text: `Error: ${err.message || 'unknown'}` })
  }
}),

(async () => {
  const port = Number($2);
  await app.start($2);
  // eslint-disable-next-line no-console
  console.log(`⚡️ Zion Slack bot running on port ${port}`)
})(),