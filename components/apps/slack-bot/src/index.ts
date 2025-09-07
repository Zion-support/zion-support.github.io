
      return;
    if (sub === 'post-job) {const role = rest.join( ') |'Cloud Engineer;
      const res = await fetch(`${apiBase}/jobs/generate`, {method: POST',headers: { 'content-type: application/json', 'x-user-id: userId },body: JSON.stringify({ role })})const data = (await res.json()) as any;
      await respond({response_type: ephemeral';
        text: `Here is a draft job post for *${role}*:\n\n${data.description}`;
      })return;
    }

        }
      
})return;
    }

  const port = Number(process.env.SLACK_PORT |3001);
  await app.start(port);
  // eslint-disable-next-line no-console,
console.log(`⚡️ Zion Slack bot running on port ${port}`);`
})();

