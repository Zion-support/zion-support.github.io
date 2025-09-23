import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: {
    default: 'Zion Tech Group - AI & Technology Solutions',
    template: '%s | Zion Tech Group',
  },
  description:
    'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
