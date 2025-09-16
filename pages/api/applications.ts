import { v4 as uuidv4 } from 'uuid',;
import { readJsonFile, writeJsonFile } from '../../utils/db',;
import type { Application } from '../../utils/types',;
import { rateLimit } from '../../utils/rateLimit',;
    return
  }

  if (req.method === 'POST') {
      return
    }

    const app: Application = {
    return
  }
  res.setHeader('AllowGET, POST')
  res.status(405).end('Method Not Allowed')

