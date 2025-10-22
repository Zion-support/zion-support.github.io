import { NextPage, NextComponentType } from 'next'
import { AppProps } from 'next/app'

// Extend Next.js types
declare module 'next' {
  interface NextPageProps {
    [key: string]: any
  }
}

declare module 'next/app' {
  interface AppProps {
    [key: string]: any
  }
}

// Custom page component type
export type CustomPage = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

// Custom app component type
export type CustomApp = NextComponentType<AppProps> & {
  getInitialProps?: (context: any) => Promise<any>
}