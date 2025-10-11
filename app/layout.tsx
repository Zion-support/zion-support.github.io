import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Professional AI and IT solutions for modern businesses',
}

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout