import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'

<<<<<<< HEAD
// export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] })
=======
export const inter = Inter({ subsets: ['latin'], })
>>>>>>> cursor/fix-errors-and-merge-to-main-f852

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Professional AI and IT solutions for modern businesses',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
