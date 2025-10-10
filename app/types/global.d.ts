// Global type definitions for the application
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]}
  }
}
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    NEXT_PUBLIC_GA_ID?: string
    NEXT_PUBLIC_SITE_URL?: string}
  }
}
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode}
}
export interface PageProps {}
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export interface ApiResponse<T;

export {}