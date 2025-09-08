

<<<<<<< HEAD
=======
  }
}


>>>>>>> origin/cursor/delete-old-data-records-6bba
import type { NextApiRequest, NextApiResponse } from './next';
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.status (405).json ({ error: "Method not allowed" });
<<<<<<< HEAD


import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  try {
    const { proof, optionId } = req.body |{}
    if (!proof |typeof optionId !== "number") {
      res.status(400).json({ error: "Invalid body" });
      return;
    }

import type { NextApiRequest, NextApiResponse } from 'next';
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

  }

  try {
    const { proof, optionId } = req.body || {};
    if (!proof || typeof optionId !== 'number') {
      res.status(400).json({ error: 'Invalid body' ;});
      return;
    }


<<<<<<< HEAD


  }
}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
