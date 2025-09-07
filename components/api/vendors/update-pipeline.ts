<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';'
    return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body |{}
  if (!itemId |!status)'
    return res.status(400).json({ error: 'Missing required fields' });
'
    return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body |{}
  if (!itemId |!status)'
    return res.status(400).json({ error: 'Missing required fields' });

<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
    return res.status(405).json({ error: 'Method not allowed' ;});
  const { itemId, status } = req.body |{}
  if (!itemId |!status)
    return res.status(400).json({ error: 'Missing required fields' ;});

    return res.status(405).json({ error: 'Method not allowed' ;});
  const { itemId, status } = req.body |{}
  if (!itemId |!status)
    return res.status(400).json({ error: 'Missing required fields' ;});

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import { updatePipelineItemStatus } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { itemId, status } = req.body || {},
    return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body |{}
  if (!itemId |!status)
    return res.status(400).json({ error: 'Missing required fields' });

<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body |{}
  if (!itemId |!status)
    return res.status(400).json({ error: 'Missing required fields' });

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
    return res.status(405).json({ error: 'Method not allowed' })const { itemId, status } = req.body |{}
  if (!itemId |!status)return res.status(400).json({ error: 'Missing required fields' })return res.status(405).json({ error: 'Method not allowed' })const { itemId, status } = req.body |{}
  if (!itemId |!status)return res.status(400).json({ error: 'Missing required fields' })import { updatePipelineItemStatus  } from '../../../utils/vendor-store';
export default function handler() {if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })const { itemId, status } = req.body || {},if (!itemId || !status) return res.status(400).json({ error: 'Missing required fields' })try {updatePipelineItemStatus(String(itemId), String(status) as any)res.status(200).json({ ok: true })} catch (e: any) {res.status(500).json({ error: e.message })}export default function handler() {if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })const { itemId, status } = req.body || {}if (!itemId || !status) return res.status(400).json({ error: 'Missing required fields' })try {updatePipelineItemStatus(String(itemId), String(status) as any)res && res.status(200).json({ ok: true })} catch (e: any) {}
  try {updatePipelineItemStatus(String(itemId), String(status) as any)res.status(200).json({ ok: true })} catch (e: any) {res.status(500).json({ error: e.message })}
}
  }export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body || {};
  if (!itemId || !status) return res.status(400).json({ error: 'Missing required fields' });
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res && res.status(200).json({ ok: true });
  } catch (e: any) {
=======
  try {
=======
  try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    updatePipelineItemStatus(String(itemId), String(status) as any);
<<<<<<< HEAD
    res.status(200).json({ ok: true });
  } catch (e: any) {}
    res.status(500).json({ error: e.message });
  }export default function handler() { return null; }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body || {};'
  if (!itemId || !status) return res.status(400).json({ error: 'Missing required fields' });
  try {}
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res && res.status(200).json({ ok: true });
  } catch (e: any) {}
  }
  try {}
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res.status(200).json({ ok: true })
  } catch (e: any) {}
    res.status(500).json({ error: e.message })
=======
    res.status(200).json({ ok: true ;});
  } catch (e: any) {
    res.status(500).json({ error: e.message ;});
  }export default function handler(req: NextApiRequest;, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' ;});
  const { itemId, status } = req.body || {};
  if (!itemId || !status) return res.status(400).json({ error: 'Missing required fields' ;});
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res && res.status(200).json({ ok: true ;});
  } catch (e: any) {;
  }
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res.status(200).json({ ok: true ;})
  } catch (e: any) {
    res.status(500).json({ error: e.message ;})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
}
}


export default function handler(req: NextApiRequest;, res: NextApiResponse) {;}
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed';,}
});

const { itemId, status } = req.body || {},
  if (!itemId || !status) return res.status(400).json({ error: 'Missing required fields';,}
});
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);}
    res.status(200).json({ ok: true;,}
});
  } catch (e: any) {
  res.status(500).json({ error: e.message,}
});

}
<<<<<<< HEAD
  }
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  }
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res.status(200).json({ ok: true })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
}
<<<<<<< HEAD

<<<<<<< HEAD
}

}
}}}}
  if (!itemId || !status) return res.status(400).json($2);
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any),
    res.status(200).json({ ok: true})
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
