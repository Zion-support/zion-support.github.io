import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React from 'react';

interface NextPageWithLayout<P = {}, IP = P> extends NextPage<P, IP> {
  getLayout?: (_page: React.ReactElement) => React.ReactNode;
}

declare module 'next' {
  interface NextPageWithLayout<P = {}, IP = P> extends NextPage<P, IP> {
    getLayout?: (_page: React.ReactElement) => React.ReactNode;
  }
}

declare module 'next/app' {
  interface AppPropsWithLayout extends AppProps {
    Component: NextPageWithLayout;
  }
}