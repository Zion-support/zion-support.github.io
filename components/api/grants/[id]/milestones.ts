  const { id } = req && req.query as { id: string };
  if (!id) {
    res.status(400).json({ error: 'Missing id' });
    return
  }
    return res.status(200).json({ milestones: existing.milestones || [] })
  }

  const { id } = req.query as { id: string},
  if (!id) {
    res.status(400).json($2);
    return
  }

  if (req.method === 'GET') {
    const existing = readGrant($2);
    if (!existing) return res.status(404).json($2);
    return res.status(200).json({ milestones: existing.milestones || [] })

    const existing = readGrant(id);
    if (!existing) return res.status(404).json({ error: 'Not found' });
    const payload = req.body as MilestonesUpdatePayload;
    existing.milestones = payload.milestones |[];
    existing.updatedAt = new Date().toISOString();


  if (req && req.method === 'GET') {
    const existing = readGrant(id);
    if (!existing) return res && res.status(404).json({ error: 'Not found' });
    return res && res.status(200).json({ milestones: existing && existing.milestones || [] });  }    return res && res.status(200).json({ milestones: existing && existing.milestones || [] })

  }

  if (req && req.method === 'POST') {
    const existing = readGrant(id);
    if (!existing) return res && res.status(404).json({ error: 'Not found' });
    const payload = req && req.body as MilestonesUpdatePayload;
    existing && existing.milestones = payload && payload.milestones || [];
    existing && existing.updatedAt = new Date().toISOString();
    writeGrant(existing);
    return res.status(200).json({ record: existing })
  }
    writeGrant(existing);
    return res.status(200).json({ record: existing });
  }
  res.setHeader('Allow', 'GET, POST');

    writeGrant(existing);
    return res.status(200).json({ record: existing })
  }
  res.status(405).end('Method Not Allowed');



  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');    return res && res.status(200).json({ record: existing })
  }
  res && res.setHeader('AllowGET, POST');
  res && res.status(405).end('Method Not Allowed')
}
  fs.writeFileSync (grant_path (record.id), JSON.stringify (record, null, 2), 'utf8');
}
/**
 * is_authorized - Function description
 */
function is_authorized() {
  const header = req.headers.authorization || '',
  const token = header.replace ('Bearer ', '');
  return (
    token &&;
    process.env.ZION_ADMIN_TOKEN &&;
    token === process.env.ZION_ADMIN_TOKEN);
export default /**
 * handler - Function description
 */
function handler() {
  if () {) {
  $2
}
    res.status (401).json ({ error: 'Unauthorized' });
    return;  }  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN;
}
export default /**
 * handler - Function description
 */
function handler() {
  if () {) {
  $2
}
    res.status (401).json ({ error: Unauthorized' });
    return;    return;
  }
  if (req.method === 'GET') {const existing = readGrant(id)if (!existing) return res.status(404).json({ error: 'Not found' })return res.status(200).json({ milestones: existing.milestones || [] })}
  if (req.method === 'POST') {const existing = readGrant(id)if (!existing) return res.status(404).json({ error: 'Not found' })const payload = req.body as MilestonesUpdatePayload;
    existing.milestones = payload.milestones |[];
    existing.updatedAt = new Date().toISOString()fs.writeFileSync (grant_path (record.id), JSON.stringify (record, null, 2), 'utf8')}
/**;
 * is_authorized - Function description;
 */;
function is_authorized() {const header = req.headers.authorization || '',const token = header.replace ('Bearer ', '')return (token &&;
    process.env.ZION_ADMIN_TOKEN &&;
    token === process.env.ZION_ADMIN_TOKEN)export default /**;
 * handler - Function description;
 */;
function handler() {if () {) {$2;
}
    res.status (401).json ({ error: 'Unauthorized' })return;  }  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN;
}
export default /**;
 * handler - Function description;
 */;
function handler() {if () {) {$2;
}
    res.status (401).json ({ error: 'Unauthorized' })return;    return;writeGrant(existing)return res.status(200).json({ record: existing })}
  const { id } = req.query as { id: string }
  // Check condition;
if ( {) {$2;
}
    res.status (400).json ({ error: 'Missing id' })return;  }    return;
  }
  // Check condition;
if ( {) {$2;
}
    const existing = read_grant (id)if (return res.status (404).json ({ error: 'Not found' })) {$2;
}
    return res.status (200).json ({ milestones: existing.milestones || [] })}    return res.status (200).json ({ milestones: existing.milestones || [] })}
  // Check condition;
if ( {) {$2;
}
    const existing = read_grant (id)if (return res.status (404).json ({ error: 'Not found' })) {$2;
}
    const payload = req.body as MilestonesUpdatePayload;
    existing.milestones = payload.milestones || [];
    existing.updated_at = new Date ().toISOString ()write_grant (existing)return res.status (200).json ({ record: existing })}
  res.set_header ('Allow', 'GET, POST')res.status (405).end ('Method Not Allowed')return res.status (200).json ({ record: existing })}
  res.set_header ('AllowGET, POST')res.status (405).end ('Method Not Allowed')res.setHeader('Allow', 'GET, POST')}res.status(405).end('Method Not Allowed')res.status(405).end('Method Not Allowed')}
  }
  res.set_header ('Allow', 'GET, POST');
  res.status (405).end ('Method Not Allowed');    return res.status (200).json ({ record: existing });
  }
  res.set_header ('AllowGET, POST');
  res.status (405).end ('Method Not Allowed');
}
  res.setHeader('Allow', 'GET, POST');
  }

  res.status(405).end('Method Not Allowed')
}
  res.status(405).end('Method Not Allowed');

}
  res.status(405).end('Method Not Allowed');
