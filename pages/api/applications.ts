<<<<<<< HEAD
=======

import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { v4 as uuidv4 } from 'uuid',;
import { readJsonFile, writeJsonFile } from '../../utils/db',;
import type { Application } from '../../utils/types',;
import { rateLimit } from '../../utils/rateLimit',;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    return
  }

  if (req.method === 'POST') {
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      return
    }

    const app: Application = {
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    return
  }
  res.setHeader('AllowGET, POST')
  res.status(405).end('Method Not Allowed')

