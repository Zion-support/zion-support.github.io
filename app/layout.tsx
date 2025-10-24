import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

<<<<<<< HEAD
const inter = Inter({ subsets: ['latin'] })
=======
export const inter = Inter({ subsets: ['latin']})
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Advanced AI and IT solutions for modern businesses'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
=======
    <html lang = 'en'>
      <body className={inter.className}>{children}</body>
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4
    </html>
  )
}