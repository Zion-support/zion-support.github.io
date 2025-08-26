import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Zion Tech Group" description="Zion Tech Group - Modern AI and Cloud Solutions">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div style={{ display: 'flex', minHeight: '70vh' }}>
        <aside style={{ width: 240 }}>
          <Sidebar />
        </aside>
        <section style={{ flex: 1 }}>
          <Component {...pageProps} />
        </section>
      </div>
      <Footer />
    </Layout>
  )
}