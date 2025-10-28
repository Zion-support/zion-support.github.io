import { NextRequest } from 'next/server';

declare module 'next' {
  interface NextRequest {
    user?: {
      id: string;
      email: string;
    };
  }
}

export {};