import type { NextApiRequest, NextApiResponse } from 'next';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!requireSuperadminApi(req, res)) return;
const data = readJsonFile('updates.json', [] as any[])'
  res.status(200).json(data);export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!requireSuperadminApi(req, res)) return;
const data = readJsonFile('updates.json', [] as any[])'
  res.status(200).json(data)
}
import { readJsonFile } from '../../../../utils/api/storage';';
import { requireSuperadminApi } from '../../../../utils/api/auth';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!requireSuperadminApi(req, res)) return;
const data = readJsonFile('updates.json', [] as any[])'
  res.status(200).json(data)
}

}