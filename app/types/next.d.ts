// Next.js type definitions
import { NextPage } from 'next';

declare module 'next' {
  interface NextPageProps {
    params?: Record<string, string>;
    searchParams?: Record<string, string | string[] | undefined>;
  }
}

export {};