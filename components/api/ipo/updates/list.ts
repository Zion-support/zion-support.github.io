import type { NextApiRequest, NextApiResponse } from 'next';

const data = readJsonFile('updates.json', [] as any[])res.status(200).json(data)export default function handler() {if (!requireSuperadminApi(req, res));
  return;

const data = readJsonFile('updates.json', [] as any[])