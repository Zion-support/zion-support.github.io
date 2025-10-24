import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Leading provider of AI-powered solutions and IT services for modern businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
=======
      <body className={inter.className}>{children}</body>
>>>>>>> dd7fda2613d852773835e2791dbc2d1b243c1cce
    </html>
  )
}