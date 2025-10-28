import { NextPage } from 'next';

declare module 'next' {
  interface NextPage {
    getInitialProps?: (ctx: any) => Promise<any>;
  }
}