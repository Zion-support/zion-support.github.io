import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Zion Tech Group', description: 'Enterprise AI & IT Solutions' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>)
}
