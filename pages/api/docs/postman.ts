import type { NextApiRequest, NextApiResponse } from 'next',
import v1 from '../../../data/api-docs/v1'
function toPostman() {
  return {
import type {_NextApiRequest, _NextApiResponse} from 'next';
import v1 from '../../../data/api-docs/v1';

function toPostman() {_return {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    info: {
      name: 'Zion OS API', _schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'},
    item: v1.sections.flatMap(_(section) =>
      section.endpoints.map(_(ep) => ({_name: `${section.title} - ${_ep.title}`,
        request: {_method: ep.method, _header: [{ key: 'Authorization', _value: 'Bearer {{token}}', disabled: !(ep.auth || []).includes('jwt') }],
          url: {_raw: `{{baseUrl}}${_ep.path}`,
            host: ['{_{baseUrl}}'],
            path: ep.path.replace(/^\//, '').split('/')},
          body: ep.requestBodySchema ? {_mode: 'raw', _raw: JSON.stringify({}, null, 2) } : undefined}}))
    ),
    variable: [
      { key: 'baseUrl', value: 'https://api.zion.os' },
      { key: 'token', value: '' }]}
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Typeapplication/json'),
  res.status(200).json(toPostman())
