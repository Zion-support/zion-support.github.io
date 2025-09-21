// AppProps type removed for JavaScript compatibility
import { ThemeProvider } from '../components/ThemeProvider'
// import { Toaster } from '../components/ui/toaster' // Temporarily disabled for build fix
// import { Toaster as SonnerToaster } from '../components/ui/sonner' // Temporarily disabled for build fix
import Header from '../components/Header'
import { Footer } from '../components/Footer'
// import '../src/styles/globals.css' // Temporarily disabled for build fix

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