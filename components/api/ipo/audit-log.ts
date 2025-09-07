import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler() {if (!requireSuperadminApi(req, res)) return;

