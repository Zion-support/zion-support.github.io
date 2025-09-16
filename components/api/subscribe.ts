import type { NextApiRequest, NextApiResponse } from 'next';
      .select('*')
      .single();

    if (error) {
