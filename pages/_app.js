// AppProps type removed for JavaScript compatibility
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import '../app/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}