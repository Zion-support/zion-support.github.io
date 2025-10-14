import { NextPage } from 'next';
import { AppProps } from 'next/app';

declare module 'next' {
  interface NextPageProps {
    title?: string;
    description?: string;
    keywords?: string;
  }
}

declare module 'next/app' {
  interface AppProps {
    Component: NextPage;
  }
}