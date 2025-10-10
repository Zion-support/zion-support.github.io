// Next.js type definitions

import { NextRequest, NextResponse } from 'next/server';

declare module 'next' {
  interface NextRequest {
    // Add any custom properties if needed
  }
  
  interface NextResponse {
    // Add any custom properties if needed
  }
}

// Export an empty object to make this a module
export {};