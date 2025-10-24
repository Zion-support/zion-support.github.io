import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'

export const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Professional AI and IT solutions for modern businesses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}