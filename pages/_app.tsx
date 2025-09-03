import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navigation from '../src/components/Navigation'
import Footer from '../src/components/Footer'
import ErrorBoundary from '../src/components/ErrorBoundary'
import '../src/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zion Tech Group — AI, IT & Micro SaaS</title>
        <meta name="theme-color" content="#3B82F6" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}