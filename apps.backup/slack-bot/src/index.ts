<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { App } from '@slack/bolt';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
<<<<<<< HEAD
dotenv.config();
const apiBase = process.env.API_ORIGIN || 'http: //localhost:4000';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

import fetch from 'node - fetch';
dotenv.config (),'
const api_base = process.env.API_ORIGIN || 'http: //localhost:4000';
const app = new App ({}
  token: process.env.SLACK_BOT_TOKEN,
  signing_secret: process.env.SLACK_SIGNING_SECRET,
  app_token: process.env.SLACK_APP_LEVEL_TOKEN,
  socket_mode: true;
}),
function help_text (): string {}
  return [;'
    '*Zion Assistant Commands*`/zion post - job [role]` – generate a job post`/zion suggest - talent [query]` – AI match talent`/zion track - project [name]` – milestone status`/zion help` – command list';'
  ].join ('\n');
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
app.command ('/zion', async ({ command, ack, respond }) => {
  await ack (),
  const text = (command.text || '').trim (),
=======



}'
app.command ('/zion', async ({ command, ack, respond }) => {}
  await ack (),'
  const text = (command.text || '').trim (),'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [sub, ...rest] = text.split (' '),
  const user_id = command.user_id,
  try {}
    // Check condition'
if (=== 'help') {) {}
  $2;
}'
      await respond ({ response_type: 'ephemeral', text: help_text () }),
      return;
    }
    // Check condition;
if ( {) {}
  $2;
}'
      const role = rest.join (' ') || 'Cloud Engineer',`
      const res = await fetch (`${api_base}/jobs / generate`, {'
        method: 'POST','
        headers: { 'content - type': 'application / jsonx - user - id': user_id },
        body: JSON.stringify ({ role });
      }),
      const data = (await res.json ()) as any,'`
      await respond ({ response_type: 'ephemeral', text: `Here is a draft job post for *${role}*:\n\n${data.description}` }),
      return;
    }
    // Check condition;
if ( {) {}
  $2;
}'
      const q = rest.join (' ') || 'AI researcher in Brazil',`
      const res = await fetch (`${api_base}/talent / search?q=${encodeURIComponent (q)}`, {'
        headers: { 'x - user - id': user_id }
      }),
      const data = (await res.json ()) as any,'`
      const lines = (data.results || []).slice (0, 5).map ((t: any) => `• ${t.full_name} – ${t.country} – ${t.skills?.slice (0, 3).join () || ''}`),'
      await respond ({ response_type: 'ephemeral', text: lines.length ? lines.join ('\n') : 'No matches yet.' }),
      return;
    }
    // Check condition;
if ( {) {}
  $2;
}'
      const name = rest.join (' ') || 'Kleber',`
      const res = await fetch (`${api_base}/projects/${encodeURIComponent (name)}/track`, {'
        headers: { 'x - user - id': user_id }
      }),
      const data = (await res.json ()) as any,
      // Check condition;
if ( {) {}
  $2;
}'
        await respond ({ response_type: 'ephemeral', text: 'Project not found.' }),
        return;
      }'`
      await respond ({ response_type: 'ephemeral', text: `*${data.project.name}* – status: ${data.project.status}\n_milestones: ${JSON.stringify (data.project.milestones)}` }),
      return;
    }'
    await respond ({ response_type: 'ephemeral', text: help_text () });
  } catch (err: any) {'`
    await respond ({ response_type: 'ephemeral', text: `Error: ${err.message || 'unknown'}` });
  }
}),
(async () => {}
  const port = Number (process.env.SLACK_PORT || 3001),
  await app.start (port),
  // eslint - disable - next - line no - console;`
  console.log (`⚡️ Zion Slack bot running on port ${port}`);
})(),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934






'
import { App } from '@slack/bolt',;'
import dotenv from 'dotenv',;'
import fetch from 'node-fetch',;
dotenv.config(),;'
const apiBase = process.env.API_ORIGIN || 'http: //localhost:4000',;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const app = new App({;
  token: process.env.SLACK_BOT_TOKEN;
  signingSecret: process.env.SLACK_SIGNING_SECRET;
  appToken: process.env.SLACK_APP_LEVEL_TOKEN;
  socketMode: true;
});
function helpText(): string {;
  return [;'`
    '*Zion Assistant Commands*`/zion post-job [role]` – generate a job post`/zion suggest-talent [query]` – AI match talent`/zion track-project [name]` – milestone status`/zion help` – command list';'
  ].join('\n');
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
;
app.command('/zion', async ({ command, ack, respond }) => {;
=======

dotenv.config();

const apiBase = process.env.API_ORIGIN || 'http://localhost:4000';

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_LEVEL_TOKEN,
  socketMode: true,
});

function helpText(): string {
  return [
    '*Zion Assistant Commands*',
    '`/zion post-job [role]` – generate a job post',
    '`/zion suggest-talent [query]` – AI match talent',
    '`/zion track-project [name]` – milestone status',
    '`/zion help` – command list',
  ].join('\n');
}

app.command('/zion', async ({ command, ack, respond }) => {
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
  await ack();
  const text = (command.text || '').trim();
  const [sub, ...rest] = text.split(' ');
  const userId = command.user_id;
<<<<<<< HEAD
  try {;
    if (!sub || sub.toLowerCase() === 'help') {;
      await respond({ response_type: 'ephemeral', text: helpText() });
      return;
    }
    if (sub === 'post-job') {;
      const role = rest.join(' ') || 'Cloud Engineer';
      const res = await fetch(`${apiBase}/jobs/generate`, {;
        method: 'POST';
        headers: { 'content-type': 'application/jsonx-user-id': userId };
        body: JSON.stringify({ role });
      });
      const data = (await res.json()) as any;
      await respond({ response_type: 'ephemeral', text: `Here is a draft job post for *${role}*:\n\n${data.description}` });
      return;
    }
    if (sub === 'suggest-talent') {;
      const q = rest.join(' ') || 'AI researcher in Brazil';
      const res = await fetch(`${apiBase}/talent/search?q=${encodeURIComponent(q)}`, {;
        headers: { 'x-user-id': userId }
      });
      const data = (await res.json()) as any;
      const lines = (data.results || []).slice(0, 5).map((t: any) => `• ${t.full_name} – ${t.country} – ${t.skills?.slice(0,3).join() || ''}`);
      await respond({ response_type: 'ephemeral', text: lines.length ? lines.join('\n') : 'No matches yet.' });
      return;
    }
    if (sub === 'track-project') {;
      const name = rest.join(' ') || 'Kleber';
      const res = await fetch(`${apiBase}/projects/${encodeURIComponent(name)}/track`, {;
        headers: { 'x-user-id': userId }
      });
      const data = (await res.json()) as any;
      if (!data.project) {;
        await respond({ response_type: 'ephemeral', text: 'Project not found.' });
        return;
      }
      await respond({ response_type: 'ephemeral', text: `*${data.project.name}* – status: ${data.project.status}\nMilestones: ${JSON.stringify(data.project.milestones)}` });
=======






}
;'
app.command('/zion', async ({ command, ack, respond }) => {;
  await ack(),;'
  const text = (command.text || '').trim(),;'
  const [sub, ...rest] = text.split(' '),;
  const userId = command.user_id,;
  try {;'
    if (!sub || sub.toLowerCase() === 'help') {;'
      await respond({ response_type: 'ephemeral', text: helpText() }),;
      return;
    }'
    if (sub === 'post-job') {;'
      const role = rest.join(' ') || 'Cloud Engineer',;`
      const res = await fetch(`${apiBase}/jobs/generate`, {;'
        method: 'POST',;'
        headers: { 'content-type': 'application/jsonx-user-id': userId },;
        body: JSON.stringify({ role });
      }),;
      const data = (await res.json()) as any,;'`
      await respond({ response_type: 'ephemeral', text: `Here is a draft job post for *${role}*:\n\n${data.description}` }),;
      return;
    }'
    if (sub === 'suggest-talent') {;'
      const q = rest.join(' ') || 'AI researcher in Brazil',;`
      const res = await fetch(`${apiBase}/talent/search?q=${encodeURIComponent(q)}`, {;'
        headers: { 'x-user-id': userId }
      }),;
      const data = (await res.json()) as any,;'`
      const lines = (data.results || []).slice(0, 5).map((t: any) => `• ${t.full_name} – ${t.country} – ${t.skills?.slice(0,3).join() || ''}`),;'
      await respond({ response_type: 'ephemeral', text: lines.length ? lines.join('\n') : 'No matches yet.' }),;
      return;
    }'
    if (sub === 'track-project') {;'
      const name = rest.join(' ') || 'Kleber',;`
      const res = await fetch(`${apiBase}/projects/${encodeURIComponent(name)}/track`, {;'
        headers: { 'x-user-id': userId }
      }),;
      const data = (await res.json()) as any,;
      if (!data.project) {;'
        await respond({ response_type: 'ephemeral', text: 'Project not found.' }),;
        return;
      }'`
      await respond({ response_type: 'ephemeral', text: `*${data.project.name}* – status: ${data.project.status}\nMilestones: ${JSON.stringify(data.project.milestones)}` }),;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return;
    }
;'
    await respond({ response_type: 'ephemeral', text: helpText() });
  } catch (err: any) {;'`
    await respond({ response_type: 'ephemeral', text: `Error: ${err.message || 'unknown'}` });


  }
<<<<<<< HEAD
}),
=======
})
<<<<<<< HEAD
(async () => {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

(async () => {
  const port = Number(process.env.SLACK_PORT || 3001),
  await app.start(port),
  // eslint-disable-next-line no-console
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  // // // console.log(`⚡️ Zion Slack bot running on port ${port}`)
})(),
});
=======
  console.log(`⚡️ Zion Slack bot running on port ${port}`)
})(),;
  // // // console.log(`⚡️ Zion Slack bot running on port ${port}`)
})(),


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import { App } from '@slack/bolt',;
import dotenv from 'dotenv',;
import fetch from 'node-fetch',;
dotenv.config(),;
const apiBase = process.env.API_ORIGIN || 'http: //localhost:4000',;
const app = new App({;
  token: process.env.SLACK_BOT_TOKEN,;
  signingSecret: process.env.SLACK_SIGNING_SECRET,;
  appToken: process.env.SLACK_APP_LEVEL_TOKEN,;
  socketMode: true;
}),;
function helpText(): string {;
  return [;
    '*Zion Assistant Commands*`/zion post-job [role]` – generate a job post`/zion suggest-talent [query]` – AI match talent`/zion track-project [name]` – milestone status`/zion help` – command list';
  ].join('\n');


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
;
app.command('/zion', async ({ command, ack, respond }) => {;
  await ack(),;
  const text = (command.text || '').trim(),;
  const [sub, ...rest] = text.split(' '),;
  const userId = command.user_id,;
  try {;
    if (!sub || sub.toLowerCase() === 'help') {;
      await respond({ response_type: 'ephemeral', text: helpText() }),;
      return;
    }
    if (sub === 'post-job') {;
      const role = rest.join(' ') || 'Cloud Engineer',;
      const res = await fetch(`${apiBase}/jobs/generate`, {;
        method: 'POST',;
        headers: { 'content-type': 'application/jsonx-user-id': userId },;
        body: JSON.stringify({ role });
      }),;
      const data = (await res.json()) as any,;
      await respond({ response_type: 'ephemeral', text: `Here is a draft job post for *${role}*:\n\n${data.description}` }),;
      return;
    }
    if (sub === 'suggest-talent') {;
      const q = rest.join(' ') || 'AI researcher in Brazil',;
      const res = await fetch(`${apiBase}/talent/search?q=${encodeURIComponent(q)}`, {;
        headers: { 'x-user-id': userId }
      }),;
      const data = (await res.json()) as any,;
      const lines = (data.results || []).slice(0, 5).map((t: any) => `• ${t.full_name} – ${t.country} – ${t.skills?.slice(0,3).join() || ''}`),;
      await respond({ response_type: 'ephemeral', text: lines.length ? lines.join('\n') : 'No matches yet.' }),;
      return;
    }
    if (sub === 'track-project') {;
      const name = rest.join(' ') || 'Kleber',;
      const res = await fetch(`${apiBase}/projects/${encodeURIComponent(name)}/track`, {;
        headers: { 'x-user-id': userId }
      }),;
      const data = (await res.json()) as any,;
      if (!data.project) {;
        await respond({ response_type: 'ephemeral', text: 'Project not found.' }),;
        return;
      }
      await respond({ response_type: 'ephemeral', text: `*${data.project.name}* – status: ${data.project.status}\nMilestones: ${JSON.stringify(data.project.milestones)}` }),;
      return;
    }
;
    await respond({ response_type: 'ephemeral', text: helpText() });
  } catch (err: any) {;
    await respond({ response_type: 'ephemeral', text: `Error: ${err.message || 'unknown'}` });
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  }
})
(async () => {

<<<<<<< HEAD
<<<<<<< HEAD
=======
}),;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
(async () => {;
  const port = Number(process.env.SLACK_PORT || 3001);
  await app.start(port);
  // eslint-disable-next-line no-console;
  // // // console.log(`⚡️ Zion Slack bot running on port ${port}`);
<<<<<<< HEAD
=======
})();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  const port = Number(process.env.SLACK_PORT || 3001),
  await app.start(port),
  // eslint-disable-next-line no-console

<<<<<<< HEAD
  try {
    if (!sub || sub.toLowerCase() === 'help') {
      await respond({ response_type: 'ephemeral', text: helpText() });
      return;
    }
    if (sub === 'post-job') {
      const role = rest.join(' ') || 'Cloud Engineer';
      const res = await fetch(`${apiBase}/jobs/generate`, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-user-id': userId },
        body: JSON.stringify({ role }),
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
    });
  }
});

(async () => {
  const port = Number(process.env.SLACK_PORT || 3001);
  await app.start(port);
  // eslint-disable-next-line no-console
  console.log(`⚡️ Zion Slack bot running on port ${port}`);
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
})();
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { App } from '@slack/bolt',;
import dotenv from 'dotenv',;
=======
(async () => {}
  const port = Number(process.env.SLACK_PORT || 3001),
  await app.start(port),
  // eslint-disable-next-line no-console;
'
import { App } from '@slack/bolt',;'
import dotenv from 'dotenv',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import fetch from 'node-fetch',;
dotenv.config(),;'
const apiBase = process.env.API_ORIGIN || 'http: //localhost:4000',;
const app = new App({;
  token: process.env.SLACK_BOT_TOKEN,;
  signingSecret: process.env.SLACK_SIGNING_SECRET,;
  appToken: process.env.SLACK_APP_LEVEL_TOKEN,;
  socketMode: true;
}),;
function helpText(): string {;
  return [;'`
    '*Zion Assistant Commands*`/zion post-job [role]` – generate a job post`/zion suggest-talent [query]` – AI match talent`/zion track-project [name]` – milestone status`/zion help` – command list';'
  ].join('\n');
}
;'
app.command('/zion', async ({ command, ack, respond }) => {;
  await ack(),;'
  const text = (command.text || '').trim(),;'
  const [sub, ...rest] = text.split(' '),;
  const userId = command.user_id,;
  try {;'
    if (!sub || sub.toLowerCase() === 'help') {;'
      await respond({ response_type: 'ephemeral', text: helpText() }),;
      return;
    }'
    if (sub === 'post-job') {;'
      const role = rest.join(' ') || 'Cloud Engineer',;`
      const res = await fetch(`${apiBase}/jobs/generate`, {;'
        method: 'POST',;'
        headers: { 'content-type': 'application/jsonx-user-id': userId },;
        body: JSON.stringify({ role });
      }),;
      const data = (await res.json()) as any,;'`
      await respond({ response_type: 'ephemeral', text: `Here is a draft job post for *${role}*:\n\n${data.description}` }),;
      return;
    }'
    if (sub === 'suggest-talent') {;'
      const q = rest.join(' ') || 'AI researcher in Brazil',;`
      const res = await fetch(`${apiBase}/talent/search?q=${encodeURIComponent(q)}`, {;'
        headers: { 'x-user-id': userId }
      }),;
      const data = (await res.json()) as any,;'`
      const lines = (data.results || []).slice(0, 5).map((t: any) => `• ${t.full_name} – ${t.country} – ${t.skills?.slice(0,3).join() || ''}`),;'
      await respond({ response_type: 'ephemeral', text: lines.length ? lines.join('\n') : 'No matches yet.' }),;
      return;
    }'
    if (sub === 'track-project') {;'
      const name = rest.join(' ') || 'Kleber',;`
      const res = await fetch(`${apiBase}/projects/${encodeURIComponent(name)}/track`, {;'
        headers: { 'x-user-id': userId }
      }),;
      const data = (await res.json()) as any,;
      if (!data.project) {;'
        await respond({ response_type: 'ephemeral', text: 'Project not found.' }),;
        return;
      }'`
      await respond({ response_type: 'ephemeral', text: `*${data.project.name}* – status: ${data.project.status}\nMilestones: ${JSON.stringify(data.project.milestones)}` }),;
      return;
    }
;'
    await respond({ response_type: 'ephemeral', text: helpText() });
  } catch (err: any) {;'`
    await respond({ response_type: 'ephemeral', text: `Error: ${err.message || 'unknown'}` });
  }
})
(async () => {'
import { App } from '@slack / bolt';'
import dotenv from 'dotenv';
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
