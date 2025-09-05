<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import v1 from '../../../data/api-docs/v1',
import { EndpointSpec } from '../../../data/api-docs/types',
function toOpenApi() {
  const paths: Record<string any> = {},
  v1.sections.forEach((section) => {
    section.endpoints.forEach((ep: EndpointSpec) => {
      paths[ep.path] = paths[ep.path] || {},
      paths[ep.path][ep.method.toLowerCase()] = {
        tags: [section.title],
        summary: ep.title,
        description: ep.description,
        parameters: [
          ...(ep.params ? Object.entries(ep.params).map(([name, desc]) => ({ in: 'path', name, required: true, schema: { type: 'string' }, description: desc })) : []),
          ...(ep.query ? Object.entries(ep.query).map(([name, desc]) => ({ in: 'query', name, required: false, schema: { type: 'string' }, description: desc })) : [])],
        requestBody: ep.requestBodySchema ? { content: { 'application/json': { schema: ep.requestBodySchema } } } : undefined,
        responses: {
          '200': { description: 'OK', content: { 'application/json': { schema: ep.responseBodySchema || { type: 'object' } } } }},
        security: ep.auth && ep.auth.length > 0 && !ep.auth.includes('none') ? [{ bearerAuth: [] }] : []}
    })
  }),
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import v1 from '../../../data/api-docs/v1';

function toOpenApi() {_const paths: Record<string, _any> = {};
  v1.sections.forEach(_(section) => {_section.endpoints.forEach(_(ep: EndpointSpec) => {
      paths[ep.path] = paths[ep.path] || {};
      paths[ep.path][ep.method.toLowerCase()] = {_tags: [section.title], _summary: ep.title, _description: ep.description, _parameters: [
          ...(ep.params ? Object.entries(ep.params).map(_([name, _desc]) => ({ in: 'path', _name, _required: true, _schema: { type: 'string'}, description: desc })) : []),
          ...(ep.query ? Object.entries(ep.query).map(_([name, _desc]) => ({_in: 'query', _name, _required: false, _schema: { type: 'string'}, description: desc })) : [])],
        requestBody: ep.requestBodySchema ? {_content: { 'application/json': { schema: ep.requestBodySchema} } } : undefined,
        responses: {_'200': { description: 'OK', _content: { 'application/json': { schema: ep.responseBodySchema || { type: 'object'} } } }},
        security: ep.auth && ep.auth.length > 0 && !ep.auth.includes('none') ? [{_bearerAuth: []}] : []};
    });
  });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return {_openapi: '3.0.3', _info: { title: 'Zion OS API', _version: 'v1', _description: 'Zion OS API generated from internal spec'},
    servers: [{_url: 'https://api.zion.os'}],
    paths,
<<<<<<< HEAD
    components: { securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } } }}
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Typeapplication/json'),
  res.status(200).json(toOpenApi())
}
=======
    components: {_securitySchemes: { bearerAuth: { type: 'http', _scheme: 'bearer', _bearerFormat: 'JWT'} } }};
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_res.setHeader('Content-Type', _'application/json');
  res.status(200).json(toOpenApi());}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
