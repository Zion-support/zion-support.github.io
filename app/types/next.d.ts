// Next.js type definitions

import { NextRequest, NextResponse } from 'next/server';

export interface ApiRoute {
  GET?: (_req: NextRequest) => Promise<NextResponse>;
  POST?: (_req: NextRequest) => Promise<NextResponse>;
  PUT?: (_req: NextRequest) => Promise<NextResponse>;
  DELETE?: (_req: NextRequest) => Promise<NextResponse>;
  PATCH?: (_req: NextRequest) => Promise<NextResponse>;
}