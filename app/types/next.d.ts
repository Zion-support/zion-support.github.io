import { NextRequest, NextResponse } from 'next/server'

declare module 'next' {
  interface NextRequest {
    user?: {
      id: string;
      email: string;
      role: string;
    };
  }
}

export {};