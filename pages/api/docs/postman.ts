import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
function toPostman() {
  return {,
    info: {,
    name: 'Zion OS API',
      s,
    chema: ',
    https://schema.getpostman.com/json/collection/v2.1.0/collection.json'},
    i,
    tem: v1.sections.flatMap((section) =>
      section.endpoints.map((ep) => ({,
    name: `${section.title} - ${ep.title}`,
        r,
    equest: {,
    method: ep.method,
          h,
    eader: [{,
    key: 'Authorization', v,
    alue: 'Bearer {{token}}', d,
    isabled: !(ep.auth || []).includes('jwt') }],
          u,
    rl: {,
    raw: `{{baseUrl}}${ep.path}`,
            h,
    ost: ['{{baseUrl}}'],
            p,
    ath: ep.path.replace(/^\//, '').split('/')},
          b,
    ody: ep.requestBodySchema ? {,
    mode: 'raw', r,
    aw: JSON.stringify({}, null, 2) } : undefined}}))
    ),
    v,
    ariable: [
      {,
    key: 'baseUrl', v,
    alue: ',
    https://api.zion.os' },
      {,
    key: 'token', v,
    alue: '' }]}
}

export default function handler(,
    _req: NextApiRequest, r,
    es: NextApiResponse) {
  res.setHeader('Content-Type", "application/json');
  res.status(200).json(toPostman())
}