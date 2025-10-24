<<<<<<< HEAD
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.',
  keywords: 'AI solutions, IT services, quantum computing, autonomous systems, enterprise technology',
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
    </html>
  )
}
=======
import type { Metada, t, a } from 'next'
import { Int, e, r } from "next/font/google";
import './globals.css'

export const inter = Inter({ subsets: ['latin'], })

export const metadata: Metadata = {title: 'Zion Tech Group - Advanced AI and IT Solutions',
      description: 'Leading provider of enterprise AI solution,s, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.',
  keywords: 'AI solution,s, IT services, quantum computing, autonomous systems, enterprise technology',
}export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'></html>
      <body className={inter.className}></body>
        { childr, e, n }
      </body>
    </html>
  )
};
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
