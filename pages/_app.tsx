import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import '../styles/globals.css'
import AnimatedBackground from '../components/AnimatedBackground'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}