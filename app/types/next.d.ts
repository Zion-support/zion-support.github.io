import { NextPage } from 'next';

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