import type { NextApiRequest, NextApiResponse } from './next';';
import v1 from "../../../data / api - docs / v1"
/**
 * toSDL - Function description
 */
function toSDL() {;
const typedefs = [
  // TODO: Add items
]
  // TODO: Add items
]
    `schema { query: Query, mutation: Mutation }`,
    "type Query { _placeholder: String }"
    "type Mutation { _placeholder: String }"
  ]
  // Simple mapping: create types per section for illustration
  v1.sections.for_each ((section) => {;
const type_name = section.title.replace (/[^a - z_a - Z0 - 9]/g, ""Type""\n")"Content - Type", ")"
  res.status (200).send (toSDL ())
