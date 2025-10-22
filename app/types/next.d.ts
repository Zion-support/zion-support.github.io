import { NextPage } from 'next'
import { AppProps } from 'next/app'

// Next.js specific type definitions
declare module 'next' {
  interface NextPageContext {
    query: { [key: string]: string | string[] | undefined }
    pathname: string
    asPath: string
  }
}

declare module 'next/app' {
  interface AppProps {
    Component: NextPage
    pageProps: any
  }
}

// Next.js Image component props
declare module 'next/image' {
  interface ImageProps {
    src: string
    alt: string
    width?: number
    height?: number
    fill?: boolean
    priority?: boolean
    placeholder?: 'blur' | 'empty'
    blurDataURL?: string
    quality?: number
    sizes?: string
    className?: string
    style?: React.CSSProperties
    onLoad?: () => void
    onError?: () => void
  }
}

// Next.js Link component props
declare module 'next/link' {
  interface LinkProps {
    href: string
    as?: string
    replace?: boolean
    scroll?: boolean
    shallow?: boolean
    passHref?: boolean
    prefetch?: boolean
    locale?: string | false
    className?: string
    style?: React.CSSProperties
    children: React.ReactNode
  }
}

// Next.js Head component props
declare module 'next/head' {
  interface HeadProps {
    children: React.ReactNode
  }
}

// Next.js Router types
declare module 'next/router' {
  interface NextRouter {
    route: string
    pathname: string
    query: { [key: string]: string | string[] | undefined }
    asPath: string
    basePath: string
    locale?: string
    locales?: string[]
    defaultLocale?: string
    isLocaleDomain: boolean
    isReady: boolean
    isPreview: boolean
    push: (url: string, as?: string, options?: any) => Promise<boolean>
    replace: (url: string, as?: string, options?: any) => Promise<boolean>
    reload: () => void
    back: () => void
    prefetch: (url: string) => Promise<void>
    beforePopState: (cb: (state: any) => boolean) => void
    events: {
      on: (event: string, handler: (...args: any[]) => void) => void
      off: (event: string, handler: (...args: any[]) => void) => void
      emit: (event: string, ...args: any[]) => void
    }
  }
}