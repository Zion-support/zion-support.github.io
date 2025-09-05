import type {_AppProps} from 'next/app'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

export default function App(_{_Component, _pageProps}: AppProps) {_return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
