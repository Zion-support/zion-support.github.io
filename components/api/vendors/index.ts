import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler() {const vendors = listVendors()res.status(200).json({ vendors })