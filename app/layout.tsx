

import React from 'react';
import Link from 'next/link';
import './globals.css';
import React from "react";
import Link from "next/link";
import "./globals.css";
ursor/automate-test-improve-and-merge-code-646c

export const metadata = {
  title: "Zion Tech Group — AI, Micro SaaS, and IT Services",
  description:
    "Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.",
  keywords:
    "AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software",
  authors: [{ name: "Zion Tech Group" }],
  openGraph: {
    title: "Zion Tech Group — AI, Micro SaaS, and IT Services",
    description:
      "Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.",
    url: "https://ziontechgroup.com",
    siteName: "Zion Tech Group",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Tech Group — AI, Micro SaaS, and IT Services",
    description:
      "Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI-Powered Solutions',
  description: 'Leading provider of AI-powered business solutions, automation tools, and digital transformation services.',
  keywords: 'AI solutions, business automation, digital transformation, software development, tech consulting'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );

}

}
ursor/automate-test-improve-and-merge-code-646c
  )
}
