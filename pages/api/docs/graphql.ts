import type {_NextApiRequest, _NextApiResponse} from 'next';
import v1 from '../../../data/api-docs/v1';

function toSDL() {_const _typedefs = [`schema { query: Query, _mutation: Mutation}`, 'type Query {_placeholder: String}', 'type Mutation {_placeholder: String}'];
  // Simple mapping: create types per section for illustration
  v1.sections.forEach(_(section) => {_const _typeName = section.title.replace(/[^a-zA-Z0-9]/g, _'') + 'Type';
    typedefs.push(`type ${typeName} {_id: ID, _title: String, _description: String}`);
  });
  return typedefs.join('\n');
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_res.setHeader('Content-Type', _'text/plain');
  res.status(200).send(toSDL());}