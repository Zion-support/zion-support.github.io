
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';


const CERTS_FILE = path.join(
  process.cwd()
  'data'
  'certifications'
  'certifications.json'
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'GET') {;
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });

  }
  try {
    const certifications = null;
    return res.status(200).json({ certifications })
  } catch (e) {
    return res.status(500).json({ error: "Failed to load certifications" })

};
=======
  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
}
=======
  };
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
