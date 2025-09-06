import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
import { EndpointSpec } from '../../../data/api-docs/types';
function toOpenApi() {
  const,
    paths: Record<string, any> = {};
  v1.sections.forEach((section) => {
    section.endpoints.forEach((,
    ep: EndpointSpec) => {
      paths[ep.path] = paths[ep.path] || {};
      paths[ep.path][ep.method.toLowerCase()] = {,
    tags: [section.title];,
    summary: ep.title,
        d,
    escription: ep.description,
        p,
    arameters: [
          ...(ep.params ? Object.entries(ep.params).map(([name, desc]) => ({,
    in: 'path', name, r,
    equired: true, s,
    chema: {,
    type: 'string' }, d,
    escription: desc })) : []),
          ...(ep.query ? Object.entries(ep.query).map(([name, desc]) => ({,
    in: 'query', name, r,
    equired: false, s,
    chema: {,
    type: 'string' }, d,
    escription: desc })) : [])],
        r,
    equestBody: ep.requestBodySchema ? {,
    content: { 'application/json': {,
    schema: ep.requestBodySchema } } } : undefined,
        r,
    esponses: {
          '200': {,
    description: 'OK', c,
    ontent: { 'application/json': {,
    schema: ep.responseBodySchema || {,
    type: 'object' } } } }},
        s,
    ecurity: ep.auth && ep.auth.length > 0 && !ep.auth.includes('none') ? [{,
    bearerAuth: [] }] : []}
    })
  });
  return {,
    openapi: '3.0.3',
    i,
    nfo: {,
    title: 'Zion OS API', v,
    ersion: 'v1', d,
    escription: 'Zion OS API generated from internal spec' },
    s,
    ervers: [{,
    url: ',
    https://api.zion.os' }],
    paths,
    c,
    omponents: {,
    securitySchemes: {,
    bearerAuth: {,
    type: 'http', s,
    cheme: 'bearer', b,
    earerFormat: 'JWT' } } }}
}

export default function handler(,
    _req: NextApiRequest, r,
    es: NextApiResponse) {
  res.setHeader('Content-Type", "application/json');
  res.status(200).json(toOpenApi())
}