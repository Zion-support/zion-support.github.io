// Next.js type definitions
declare module 'next' {
  interface NextPageContext {
    query: { [key: string]: string | string[] | undefined }
    pathname: string
    asPath: string
  }
}

// Global type definitions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

export {}