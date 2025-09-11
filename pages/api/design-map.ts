import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {
  getZionDesignMap,
  buildTokenSet,
  fetchLovableTokens,
} from '../../utils/design-map';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

import { getZionDesignMap, buildTokenSet, fetchLovableTokens } from '../../utils/design-map';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {try {;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  try {;
=======
==============

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  try {;

=======
    const base = getZionDesignMap();
    const [localTokens, cmsTokens] = await Promise.all([;
      buildTokenSet();
      fetchLovableTokens()]);
    const tokens = {;

  }
}<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
