import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'
import { Toaster as SonnerToaster } from 'sonner'
import Header from '../src/components/Header'
import { Footer } from '../src/components/Footer'
// import './globals.css'
import '../src/app/globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zion Tech Group - Innovative Technology Solutions",
  description: "Leading provider of AI, cloud, cybersecurity, and digital transformation solutions. Transform your business with cutting-edge technology.",
  keywords: "AI solutions, cloud computing, cybersecurity, digital transformation, technology consulting",
  authors: [{ name: "Zion Tech Group" }],
  creator: "Zion Tech Group",
  publisher: "Zion Tech Group",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ziontechgroup.com",
    title: "Zion Tech Group - Innovative Technology Solutions",
    description: "Leading provider of AI, cloud, cybersecurity, and digital transformation solutions.",
    siteName: "Zion Tech Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Tech Group - Innovative Technology Solutions",
    description: "Leading provider of AI, cloud, cybersecurity, and digital transformation solutions.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0ea5e9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="zion-theme">
          <div className="min-h-screen bg-background">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <ToastContainer />
          <SonnerToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}