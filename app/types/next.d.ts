// Next.js type definitions

import { NextRequest, NextResponse } from 'next/server';

export interface ApiRoute {
  GET?: (req: NextRequest) => Promise<NextResponse>;
  POST?: (req: NextRequest) => Promise<NextResponse>;
  PUT?: (req: NextRequest) => Promise<NextResponse>;
  DELETE?: (req: NextRequest) => Promise<NextResponse>;
  PATCH?: (req: NextRequest) => Promise<NextResponse>;
}