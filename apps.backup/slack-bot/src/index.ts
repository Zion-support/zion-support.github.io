<<<<<<< HEAD
import { App } from '@slack/bolt';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config($2);
const apiBase = $2;
const app = new App($2);
=======
<<<<<<< HEAD
import { App } from '@slack/bolt';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config()
const apiBase = process.env.API_ORIGIN |'http: //localhost:4000';
const app = new App({
  token: process.env.SLACK_BOT_TOKEN
  signingSecret: process.env.SLACK_SIGNING_SECRET
  appToken: process.env.SLACK_APP_LEVEL_TOKEN
  socketMode: true
})
>>>>>>> merged-prs-20250907-203621
function helpText(): string {
  return [
    '*Zion Assistant Commands*`/zion post-job [role]` – generate a job post`/zion suggest-talent [query]` – AI match talent`/zion track-project [name]` – milestone status`/zion help` – command list'
  ].join('\n')
<<<<<<< HEAD
}
app.command('/zion', async ({ command, ack, respond }) => {
  await ack($2);
  const text = (command.text || '').trim($2);
  const [sub, ...rest] = text.split($2);
  const userId = $2;
=======
}
app.command('/zion', async ({ command, ack, respond }) => {
  await ack()
  const text = (command.text |'').trim()
  const [sub, ...rest] = text.split(' ')
  const userId = command.user_id
  try {
    if (!sub |sub.toLowerCase() === 'help') {
      await respond({ response_type: 'ephemeral', text: helpText() })
      return
    }
    if (sub === 'post-job') {
      const role = rest.join(' ') |'Cloud Engineer'
      const res = await fetch(`${apiBase}/jobs/generate`, {
        method: 'POST'
        headers: { 'content-type': 'application/jsonx-user-id': userId }
        body: JSON.stringify({ role })
      })
      const data = (await res.json()) as any
      await respond({ response_type: 'ephemeral', text: `Here is a draft job post for *${role}*:\n\n${data.description}` })
      return
    }
    if (sub === 'suggest-talent') {
      const q = rest.join(' ') |'AI researcher in Brazil'
      const res = await fetch(`${apiBase}/talent/search?q=${encodeURIComponent(q)}`, {
        headers: { 'x-user-id': userId }
      })
      const data = (await res.json()) as any
      const lines = (data.results |[]).slice(0, 5).map((t: any) => `• ${t.full_name} – ${t.country} – ${t.skills?.slice(0,3).join() |''}`)
      await respond({ response_type: 'ephemeral', text: lines.length ? lines.join('\n') : 'No matches yet.' })
      return
    }
    if (sub === 'track-project') {
      const name = rest.join(' ') |'Kleber'
      const res = await fetch(`${apiBase}/projects/${encodeURIComponent(name)}/track`, {
        headers: { 'x-user-id': userId }
      })
      const data = (await res.json()) as any
      if (!data.project) {
        await respond({ response_type: 'ephemeral', text: 'Project not found.' })
        return
      }
      await respond({ response_type: 'ephemeral', text: `*${data.project.name}* – status: ${data.project.status}\nMilestones: ${JSON.stringify(data.project.milestones)}` })
      return
    }
    await respond({ response_type: 'ephemeral', text: helpText() })
  } catch (err: any) {
    await respond({ response_type: 'ephemeral', text: `Error: ${err.message |'unknown'}` })
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
  }
})
(async () => {
  const port = Number(process.env.SLACK_PORT |3001)
  await app.start(port)
  // eslint-disable-next-line no-console
  console.log(`⚡️ Zion Slack bot running on port ${port}`)
})();

  const port = Number(process.env.SLACK_PORT || 3001),
  await app.start(port),
  // eslint-disable-next-line no-console
  console.log(`⚡️ Zion Slack bot running on port ${port}`)
})(),;
  // // // console.log(`⚡️ Zion Slack bot running on port ${port}`)
})(),


=======

;
import fetch from 'node - fetch';'
dotenv.config (),const api_base = process.env.API_ORIGIN || ''http': //'localhost':4000';'

const app = new App ({'token': process.env.SLACK_BOT_TOKEN,'signing_secret': process.env.SLACK_SIGNING_SECRET,'app_token': process.env.SLACK_APP_LEVEL_TOKEN,'socket_mode': true;
}),function help_text (): string {return [;
    '*Zion Assistant Commands*`/zion post - job [role]` – generate a job post`/zion suggest - talent [query]` – AI match talent`/zion track - project [name]` – milestone status`/zion help` – command list';'  ].join ('\n')}'
app.command ('/zion', async ({ command, ack, respond    }) => {'


}


await ack (),const text = (command.text || '').trim (),const [sub, ...rest] = text.split (' ');'
  const user_id = command.user_id,try {// Check condition;
}
if (=== 'help') {) {$2;'
}
      await respond ({ 'response_type': 'ephemeral', 'text': help_text (),'
}),return;
    }
    // Check condition;
if ( {) {$2;
}

const role = rest.join (' ') || 'Cloud Engineer',const res = await fetch (`${api_base}/jobs / generate`, {'method': 'POST','headers': { 'content - type': 'application / jsonx - user - id': user_id,;'},'body': JSON.stringify ({ role }
});
  const data = (await res.json ()) as any,await respond ({ 'response_type': 'ephemeral', 'text': `Here is a draft job post for *${role}*:\n\n${data.description}`,`});
  return;
    }
    // Check condition;
if ( {) {$2;
}

const q = rest.join (' ') || 'AI researcher in Brazil',const res = await fetch (`${api_base}/talent / search?q=${encodeURIComponent (q)}`, {'headers': { 'x - user - id': user_id }'     
}),const data = (await res.json ()) as any;
  const lines = (data.results || []).slice (0, 5).map (('t': any) => `• ${t.full_name} – ${t.countr,`} – ${t.skills?.slice (0, 3).join () || ''}`),await respond ({ 'response_type': 'ephemeral', 'text': lines.length ? lines.join ('\n') : 'No matches yet.','
});
  return;
    }
    // Check condition;
if ( {) {$2;
}

const name = rest.join (' ') || 'Kleber',const res = await fetch (`${api_base}/projects/${encodeURIComponent (name)}/track`, {'headers': { 'x - user - id': user_id }'     
});
  const data = (await res.json ()) as any,// Check condition;
if ( {) {$2;
}
        await respond ({ 'response_type': 'ephemeral', 'text': 'Project not found.','
}),return;
      }
      await respond ({ 'response_type': 'ephemeral', 'text': `*${data.project.name}* – 'status': ${data.project.status}\'n_milestones': ${JSON.stringify (data.project.milestones)}`,`}),return;
    }
    await respond ({ 'response_type': 'ephemeral', 'text': help_text () },'
} catch ('err': any) {await respond ({ 'response_type': 'ephemeral', 'text': `'Error': ${err.message || 'unknown'}` })},`}),(async () => {const port = Number (process.env.SLACK_PORT || 3001),await app.start (port),// eslint - disable - next - line no - console;
  }
  console.log (`⚡️ Zion Slack bot running on port ${port}`)})(),import { App } from '@slack/bolt',import dotenv from 'dotenv',import fetch from 'node-fetch',dotenv.config(),const apiBase = process.env.API_ORIGIN || ''http': //'localhost':4000';'
const apiBase = process.env.API_ORIGIN || ''http': //'localhost':4000';'

const app = new App({'token': process.env.SLACK_BOT_TOKEN,'signingSecret': process.env.SLACK_SIGNING_SECRET,'appToken': process.env.SLACK_APP_LEVEL_TOKEN,'socketMode': true;
}),function helpText(): string {return [;
    '*Zion Assistant Commands*`/zion post-job [role]` – generate a job post`/zion suggest-talent [query]` – AI match talent`/zion track-project [name]` – milestone status`/zion help` – command list';'  ].join('\n')}app.command('/zion', async ({ command, ack, respond    }) => {'


}


await ack(),const text = (command.text || '').trim()const [sub, ...rest] = text.split(' ');'
  const userId = command.user_id;
  try {if (!sub || sub.toLowerCase() === 'help') {await respond({ 'response_type': 'ephemeral', 'text': helpText(),'
}),return;
    }
    if (sub = == 'post-job') {const role = rest.join(' ') || 'Cloud Engineer',const res = await fetch(`${apiBase}/jobs/generate`, {'method': 'POST','headers': { 'content-type': 'application/jsonx-user-id': userId,'},'body': JSON.stringify({ role }
});
  const data = (await res.json()) as any,await respond({ 'response_type': 'ephemeral', 'text': `Here is a draft job post for *${role}*:\n\n${data.description}`,`});
  return;
    }
    if (sub = == 'suggest-talent') {const q = rest.join(' ') || 'AI researcher in Brazil',const res = await fetch(`${apiBase}/talent/search?q=${encodeURIComponent(q)}`, {'headers': { 'x-user-id': userId }'     
}),const data = (await res.json()) as any;
  const lines = (data.results || []).slice(0, 5).map(('t': any) => `• ${t.full_name} – ${t.countr,`} – ${t.skills?.slice(0,3).join() || ''}`),await respond({ 'response_type': 'ephemeral', 'text': lines.length ? lines.join('\n') : 'No matches yet.','
});
  return;
    }
    if (sub = == 'track-project') {const name = rest.join(' ') || 'Kleber',const res = await fetch(`${apiBase}/projects/${encodeURIComponent(name)}/track`, {'headers': { 'x-user-id': userId }'     
});
  const data = (await res.json()) as any,if (!data.project) {await respond({ 'response_type': 'ephemeral', 'text': 'Project not found.','
});
  return;
      }
      await respond({ 'response_type': 'ephemeral', 'text': `*${data.project.name}* – 'status': ${data.project.status}\'nMilestones': ${JSON.stringify(data.project.milestones)}`,`}),return;
    }await respond({ 'response_type': 'ephemeral', 'text': helpText() },'
} catch ('err': any) {await respond({ 'response_type': 'ephemeral', 'text': `'Error': ${err.message || 'unknown'}` })}`})(async () => 
}),(async () => {const port = Number(process.env.SLACK_PORT || 3001),await app.start(port),// eslint-disable-next-line no-console;
  // // // console.log(`⚡️ Zion Slack bot running on port ${port}`)})()}`})(async () => {const port = Number(process.env.SLACK_PORT || 3001),await app.start(port),// eslint-disable-next-line no-console;
}
dotenv.config(),const apiBase = process.env.API_ORIGIN || '"http": //"localhost":4000';'
}),function helpText(): string {return [;
    '*Zion Assistant Commands*`/zion post-job [role]` – generate a job post`/zion suggest-talent [query]` – AI match talent`/zion track-project [name]` – milestone status`/zion help` – command list';'  ].join('\n')}app.command('/zion', async ({ command, ack, respond    }) => {'


}


await ack(),const text = (command.text || '').trim(),const [sub, ...rest] = text.split(' ');'
  const userId = command.user_id,try {if (!sub || sub.toLowerCase() === 'help') {await respond({ 'response_type': 'ephemeral', 'text': helpText(),'
});
  return;
    }
    if (sub = == 'post-job') {const role = rest.join(' ') || 'Cloud Engineer',const res = await fetch(`${apiBase}/jobs/generate`, {'method': 'POST','headers': { 'content-type': 'application/jsonx-user-id': userId,'},'body': JSON.stringify({ role }
});
  return;
    }
    if (sub = == 'suggest-talent') {const q = rest.join(' ') || 'AI researcher in Brazil',const res = await fetch(`${apiBase}/talent/search?q=${encodeURIComponent(q)}`, {'headers': { 'x-user-id': userId }'     
}),const data = (await res.json()) as any;
});
  return;
    }
    if (sub = == 'track-project') {const name = rest.join(' ') || 'Kleber',const res = await fetch(`${apiBase}/projects/${encodeURIComponent(name)}/track`, {'headers': { 'x-user-id': userId }'     
});
});
  return;
      }
      await respond({ 'response_type': 'ephemeral', 'text': `*${data.project.name}* – 'status': ${data.project.status}\'nMilestones': ${JSON.stringify(data.project.milestones)}`,`}),return;
    }await respond({ 'response_type': 'ephemeral', 'text': helpText() },'
} catch ('err': any) {await respond({ 'response_type': 'ephemeral', 'text': `'Error': ${err.message || 'unknown'}` })}`})(async () => {import { App 
} from '@slack / bolt';'
import dotenv from 'dotenv';'
dotenv.config (),
const api_base = process.env.API_ORIGIN || ''http': //'localhost':4000';'

const app = new App ({
  }
  'token': process.env.SLACK_BOT_TOKEN,
  'signing_secret': process.env.SLACK_SIGNING_SECRET,
  'app_token': process.env.SLACK_APP_LEVEL_TOKEN,
  'socket_mode': true;
}),
function help_text (): string {
  }
  return [;
    '*Zion Assistant Commands*`/zion post - job [role]` – generate a job post`/zion suggest - talent [query]` – AI match talent`/zion track - project [name]` – milestone status`/zion help` – command list';'  ].join ('\n');'
}
app.command ('/zion', async ({ command, ack, respond    }) => {'



  }



  await ack (),
const text = (command.text || '').trim (),;'
const [sub, ...rest] = text.split (' '),;'
 ;
const user_id = command.user_id,;
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
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
=======
    // Check condition,
if ( {) {
  $2
}

const q = rest.join (' ') || 'AI researcher in Brazil',;'
      const res = await fetch (`${api_base}/talent / search?q=${encodeURIComponent (q)}`, {`        }
        'headers': { 'x - user - id': user_id }'
     
}),
     ;
  const lines = (data.results || []).slice (0, 5).map (('t': any) => `• ${t.full_name} – ${t.countr,`} – ${t.skills?.slice (0, 3).join () || ''}`),`      await respond ({ 'response_type': 'ephemeral', 'text': lines.length ? lines.join ('\n') : 'No matches yet.','
}),
     ;
  return;
    }
    // Check condition,
if ( {) {
  $2
}

const name = rest.join (' ') || 'Kleber',;'
      const res = await fetch (`${api_base}/projects/${encodeURIComponent (name)}/track`, {`        }
        'headers': { 'x - user - id': user_id }'
     
}),
     ;
      // Check condition,
if ( {) {
  $2
}
        await respond ({ 'response_type': 'ephemeral', 'text': 'Project not found.','
}),
       ;
  return;
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
  const port = Number($2);
  await app.start($2);
  // eslint-disable-next-line no-console
  console.log(`⚡️ Zion Slack bot running on port ${port}`)
})(),
=======
}
const port = Number (process.env.SLACK_PORT || 3001),;
  await app.start (port),
  // eslint - disable - next - line no - console;
  console.log (`⚡️ Zion Slack bot running on port ${port}`);`})(),


<<<<<<< HEAD



import { App } from '@slack/bolt',;'
import dotenv from 'dotenv',;'
import fetch from 'node-fetch',;'
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { App } from '@slack/bolt',;
import dotenv from 'dotenv',;
import fetch from 'node-fetch',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
dotenv.config(),;


const app = new App({;
  }
  'token': process.env.SLACK_BOT_TOKEN,;
  'signingSecret': process.env.SLACK_SIGNING_SECRET,;
  'appToken': process.env.SLACK_APP_LEVEL_TOKEN,;
  'socketMode': true;
}),;
function helpText(): string {;
  }
  return [;
    '*Zion Assistant Commands*`/zion post-job [role]` – generate a job post`/zion suggest-talent [query]` – AI match talent`/zion track-project [name]` – milestone status`/zion help` – command list';'  ].join('\n')'
};

app.command('/zion', async ({ command, ack, respond    }) => {'


<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
  }
  await ack(),;

const text = (command.text || '').trim(),;'

const [sub, ...rest] = text.split(' '),;'

const userId = command.user_id,;
  try {;
    }
    if (!sub || sub.toLowerCase() === 'help') {;'
      }
      await respond({ 'response_type': 'ephemeral', 'text': helpText(),'
}),;
      return;
    }
    if (sub === 'post-job') {;'

}

const role = rest.join(' ') || 'Cloud Engineer',;'

const res = await fetch(`${apiBase}/jobs/generate`, {;`        }
        'method': 'POST',;'
        'headers': { 'content-type': 'application/jsonx-user-id': userId,'
},;
        'body': JSON.stringify({ role
});
      }),;

const data = (await res.json()) as any,;
      await respond({ 'response_type': 'ephemeral', 'text': `Here is a draft job post for *${role}*:\n\n${data.description}`,`}),;
      return;
    }
    if (sub === 'suggest-talent') {;'

}

const q = rest.join(' ') || 'AI researcher in Brazil',;'

const res = await fetch(`${apiBase}/talent/search?q=${encodeURIComponent(q)}`, {;`        }
        'headers': { 'x-user-id': userId }'
     
}),;


const lines = (data.results || []).slice(0, 5).map(('t': any) => `• ${t.full_name} – ${t.countr,`} – ${t.skills?.slice(0,3).join() || ''}`),;`      await respond({ 'response_type': 'ephemeral', 'text': lines.length ? lines.join('\n') : 'No matches yet.','
}),;
      return;
    }
    if (sub === 'track-project') {;'

}

const name = rest.join(' ') || 'Kleber',;'

const res = await fetch(`${apiBase}/projects/${encodeURIComponent(name)}/track`, {;`        }
        'headers': { 'x-user-id': userId }'
     
}),;

      if (!data.project) {;
        }
        await respond({ 'response_type': 'ephemeral', 'text': 'Project not found.','
}),;
        return;
      }
      await respond({ 'response_type': 'ephemeral', 'text': `*${data.project.name}* – 'status': ${data.project.status}\'nMilestones': ${JSON.stringify(data.project.milestones)}`,`}),;
return;
};

    await respond({ 'response_type': 'ephemeral', 'text': helpText(),'
});
  } catch ('err': any) {;
    }
<<<<<<< HEAD
    await respond({ "response_type": 'ephemeral', "text": `"Error": ${err.message || 'unknown'}`,`});

=======
;
    await respond({ response_type: 'ephemeral', text: helpText() });
  } catch (err: any) {;
    await respond({ response_type: 'ephemeral', text: `Error: ${err.message || 'unknown'}` });
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
})
(async () => {

<<<<<<< HEAD
}

const port = Number(process.env.SLACK_PORT || 3001),;
  await app.start(port),
  // eslint-disable-next-line no-console,
dotenv.config(),;

const apiBase = process.env.API_ORIGIN || ''http': //'localhost':4000',;'

  }
  'token': process.env.SLACK_BOT_TOKEN,;
  'signingSecret': process.env.SLACK_SIGNING_SECRET,;
  'appToken': process.env.SLACK_APP_LEVEL_TOKEN,;
  'socketMode': true;
}),;
function helpText(): string {;
  }
  return [;
    '*Zion Assistant Commands*`/zion post-job [role]` – generate a job post`/zion suggest-talent [query]` – AI match talent`/zion track-project [name]` – milestone status`/zion help` – command list';'  ].join('\n')'
};

app.command('/zion', async ({ command, ack, respond    }) => {'


;
  }
  await ack(),;



  try {;
    }
    if (!sub || sub.toLowerCase() === 'help') {;'
      }
      await respond({ 'response_type': 'ephemeral', 'text': helpText(),'
}),;
      return;
    }
    if (sub === 'post-job') {;'

}


        "method": 'POST',;'
        "headers": { 'content-type': 'application/jsonx-user-id': userId,'
},;
        'body': JSON.stringify({ role
});
      }),;

      await respond({ "response_type": 'ephemeral', "text": `Here is a draft job post for *${role}*:\n\n${data.description}`,`}),;
      return;
    }
    if (sub === 'suggest-talent') {;'

}


        "headers": { 'x-user-id': userId }'
     
}),;


}),;
      return;
    }
    if (sub === 'track-project') {;'

}


        "headers": { 'x-user-id': userId }'
     
}),;

      if (!data.project) {;
        }
        await respond({ 'response_type': 'ephemeral', 'text': 'Project not found.','
}),;
        return;
      }
      await respond({ 'response_type': 'ephemeral', 'text': `*${data.project.name}* – 'status': ${data.project.status}\'nMilestones': ${JSON.stringify(data.project.milestones)}`,`}),;
return;
};

    await respond({ 'response_type': 'ephemeral', 'text': helpText(),'
});
  } catch ('err': any) {;
    }
    await respond({ 'response_type': 'ephemeral', 'text': `'Error': ${err.message || 'unknown'}`,`
});
  }
})
(async () => {
}
import { App } from '@slack / bolt';'
=======
<<<<<<< HEAD
}),;
(async () => {;
  const port = Number(process.env.SLACK_PORT || 3001),;
  await app.start(port),;
  // eslint-disable-next-line no-console;
  // // // console.log(`⚡️ Zion Slack bot running on port ${port}`);
})();
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const port = Number(process.env.SLACK_PORT || 3001),
  await app.start(port),
  // eslint-disable-next-line no-console

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
