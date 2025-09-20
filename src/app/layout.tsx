
<<<<<<< HEAD
import React from "react";
import type { Metadata } from "next";
=======
import type { Metadata, Viewport } from "next";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
<<<<<<< HEAD
import Footer from "@/components/Footer";
=======
import { Footer } from "@/components/Footer";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

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
<<<<<<< HEAD
  viewport: "width=device-width, initial-scale=1",
=======
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a
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
          <Toaster />
          <SonnerToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

