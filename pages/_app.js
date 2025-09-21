// AppProps type removed for JavaScript compatibility
import { ThemeProvider } from '../ThemeProvider'
// import { Toaster } from '../components/ui/toaster'
// import { Toaster as SonnerToaster } from '../components/ui/sonner'
import Header from '../Header'
import Footer from '../Footer'
// import '../src/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="zion-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      {/* <Toaster /> */}
      {/* <SonnerToaster /> */}
    </ThemeProvider>
  )
}