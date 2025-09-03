import '../styles/globals.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }: any) {
  return (
    <div className="ztg-root">
      <Layout>
        <main className="ztg-main">
          <Component {...pageProps} />
        </main>
      </Layout>
    </div>
  )
}