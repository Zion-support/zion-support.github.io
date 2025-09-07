



    token &&
    process && process.env.ZION_ADMIN_TOKEN &&
    token === process && process.env.ZION_ADMIN_TOKEN
  );

export default function handler() {
  }
  if (!isAuthorized(req)) {

});
return;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  }

=======
  const { id, milestoneId } = req.query as { id: string; milestoneId: string }
  if (!id |!milestoneId) {
    res.status(400).json({ error: 'Missing id or milestoneId });
    return;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
=======
  }
  if (req.method !== POST') {
    res.setHeader('Allow, POST');
    res.status(405).end('Method Not Allowed);
    return;
  }
  const existing = readGrant(id);
  if (!existing) return res.status(404).json({ error: Not found' });

  const ms = existing.milestones || [];
const idx = ms.findIndex(m => m.id === milestoneId);
  if (idx === -1) return res.status(404).json({ error: 'Milestone not found });
origin/cursor/automate-test-improve-and-merge-code-2533
  ms[idx].completed = true;
  ms[idx].completedAt = new Date().toISOString();
  const tranche = ms[idx].trancheAmount || 0;
  existing && existing.fundsReleased = (existing && existing.fundsReleased || 0) + tranche;
  existing && existing.milestones = ms;
  existing && existing.updatedAt = new Date().toISOString();
}

  res.status(200).json({ record: existing })
}
  fs.writeFileSync (grant_path (record.id), JSON.stringify (record, null, 2), 'utf8');
}
/**
 * is_authorized - Function description;
 */
function is_authorized() { return null; }
function handler() {}
  if () {) {}
  $2;
}
    res.status (401).json ({ error: Unauthorized' });
    return;  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN;
}
export default /**;
 * handler - Function description;
 */
  if () {) {}
  $2;
}'
    res.status (401).json ({ error: Unauthorized });
    return;
  }
  const { id, milestone_id } = req.query as { id: string; milestone_id: string }
  // Check condition;
if ( {) {}
  $2;
}'
    res.status (400).json ({ error: 'Missing id or milestone_id });
    return;
  }
  // Check condition;
if ( {) {}
  $2;
}
    res.set_header ('Allow', POST);'
    res.status (405).end ('Method Not Allowed);
    return;  }  }
  }
  const { id, milestone_id } = req.query as { id: string, milestone_id: string }
  // Check condition;
if ( {) {}
  $2;
}
    res.status (400).json ({ error: 'Missing id or milestone_id' });
    return;
  }
  // Check condition;
if ( {) {}
  $2;
}
    res.set_header (AllowPOST');'
    res.status (405).end (Method Not Allowed);
    return;
  }
  const existing = read_grant (id);'
  if (return res.status (404).json ({ error: 'Not found })) {}
  $2;
}
  const idx = ms.find_index (m => m.id === milestone_id);  if (return res.status (404).json ({ error: 'Milestone not found' })) {}
  $2;
}  const idx = ms.find_index ((m) => m.id === milestone_id);
  if (return res.status (404).json ({ error: Milestone not found' })) {}
  $2;
}
  ms[idx].completed = true;
  ms[idx].completed_at = new Date ().toISOString ();
  const tranche = ms[idx].tranche_amount || 0;
  existing.funds_released = (existing.funds_released || 0) + tranche;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  existing.milestones = ms;
  existing.updated_at = new Date ().toISOString ();
write_grant (existing);
  res.status (200).json ({ record: existing });  res.status (200).json ({ record: existing });

  existing.fundsReleased = (existing.fundsReleased || 0) + tranche,
  existing.milestones = ms,
  existing.updatedAt = new Date().toISOString(),

writeGrant(existing);
  res.status(200).json({ record: existing });  res.status(200).json({ record: existing })
}

