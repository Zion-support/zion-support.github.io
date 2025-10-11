// Type definitions for Next.js

declare module 'next' {
  interface NextRequest {
    user?: {
      id: string
      email: string
      name: string
    }
  }
}

export {}