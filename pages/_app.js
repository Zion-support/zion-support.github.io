<<<<<<< HEAD
// AppProps type removed for JavaScript compatibility
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import '../src/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
=======
// Minimal working App component
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a0e0
    </div>
  )
}