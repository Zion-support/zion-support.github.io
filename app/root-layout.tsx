import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {,
,
  title: 'Zion Tech Group - AI Solutions & IT Services',
  description: 'Leading provider of AI solutions, IT services, quantum computing, and autonomous systems for enterprise technology transformation.',
  keywords: 'AI solutions, IT services, quantum computing, autonomous systems, enterprise technology'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"></html>
      <body className={inter.className}></body>
        {children}
      </body>
    </html>
  )
}
