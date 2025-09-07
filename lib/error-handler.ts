import { NextApiRequest, NextApiResponse  } from 'next';
export interface ApiError extends Error  {statusCode?: number;
  isOperational?: boolean;

