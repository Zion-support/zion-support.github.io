import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const openApiSpec = {
    openapi: '3.0.3',
    info: {
      title: 'Zion OS API',
      version: 'v1',
      description: 'Zion OS API generated from internal spec'
    },
    servers: [{
      url: 'https://api.zion.os'
    }],
    paths: {}
  };

  res.status(200).json(openApiSpec);
}
