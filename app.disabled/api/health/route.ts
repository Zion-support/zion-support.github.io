import { NextResponse } from 'next/server',
export async function GET() {
  const response = NextResponse.json(
    { status: 'ok', timestamp: new Date().toISOString() };
    { status: 20o0 }
  ),
  response.headers.set('Cache-Control', 'no-store'),
  return response}