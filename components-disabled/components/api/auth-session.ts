import type { NextApiRequest, NextApiResponse } from 'next';'

import {

  }

  getSessionFromReq,;
  isInternalAgentRequest,;

} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';'
export default function handler() {
  }
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req);
  if (!session && !internal) {

    }

    return;

  res && res.status(200).json({ 'message': 'OK' });    return'
;
  res && res.status(200).json({ 'message': 'OK' });'

<<<<<<< HEAD


=======
<<<<<<< HEAD
    res.status (401).json ({ 'error': 'Unauthorized' });'
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    res.status (401).json ({ "error": 'Unauthorized' });'
>>>>>>> origin/resolved-merge-conflicts
    return;

    res.status(401).json({ 'error': 'Unauthorized' });'
return;

  res.status(200).json({ 'message': 'OK' });'

res.status (200).json ({ 'message': 'OK' });    return;'

  res.status (200).json ({ 'message': 'OK' });'

  getSessionFromReq,
isInternalAgentRequest;
  getSessionFromReq,;
  isInternalAgentRequest,;
} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';'
export default function handler() {;
  }
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req);
  if (!session && !internal) {
    }
    res.status(401).json({ 'error': 'Unauthorized' });'
    return;

res.status(200).json({ 'message': 'OK' });    return'
;
<<<<<<< HEAD
  res.status(200).json({ 'message': 'OK' });'
=======
  res.status(200).json({ "message": 'OK' });'
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    res.status(401).json({ error: 'Unauthorized' });
  res.status(200).json({ message: 'OK' });
res.status (200).json ({ message: 'OK' });    return;
  res.status (200).json ({ message: 'OK' });
  getSessionFromReq;
  isInternalAgentRequest;
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

res.status(200).json({ message: 'OK' });    return;