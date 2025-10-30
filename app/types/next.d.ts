// Next.js type definitions
import type React from 'react';
import type { NextPage } from 'next';

export interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};