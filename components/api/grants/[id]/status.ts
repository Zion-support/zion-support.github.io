

function readGrant("id": string): GrantApplication | null {
  }
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { "recursive": true
});
return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;'





    token &&
    process && process.env.ZION_ADMIN_TOKEN &&
    token === process && process.env.ZION_ADMIN_TOKEN
  );

  }
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
const payload = req.body as StatusUpdatePayload;
  existing.status = payload.status;
  existing.updatedAt = new Date().toISOString();
  writeGrant(existing);

