/**
 * Next.js type definitions
 */

import { NextPage } from 'next';
import { AppProps } from 'next/app';

declare module 'next' {
  interface NextPageProps {
    [key: string]: any;
  }
}

declare module 'next/app' {
  interface AppProps {
    [key: string]: any;
  }
}