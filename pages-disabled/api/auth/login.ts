import { NextApiRequest, NextApiResponse } from 'next';
import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth',;
import { UserRole } from '../../../utils/messaging/types',;

export default function handler(req: NextApiRequest, res: NextApiResponse) {