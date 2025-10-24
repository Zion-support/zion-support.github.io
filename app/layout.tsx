import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'

export const inter = Inter({ subsets: ['latin'], })

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Advanced AI and IT solutions for modern businesses',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'></html>
      <body className={inter.className}>{ childr, e, n }</body>
    </html>
  )
};