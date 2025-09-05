import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../src/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Advanced AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Leading provider of innovative AI solutions, IT services, and micro SaaS applications. Transform your business with cutting-edge technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}