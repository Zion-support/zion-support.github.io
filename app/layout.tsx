

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
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions. Transform your business with cutting-edge technology.',
  keywords: ['AI', 'artificial intelligence', 'technology', 'innovation', 'quantum computing', 'autonomous systems', 'business solutions', 'zion tech'],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  robots: 'index, follow',
  openGraph: {
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Transform your business with cutting-edge AI and technology solutions from Zion Tech Group.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Transform your business with cutting-edge AI and technology solutions.',
    images: ['/og-image.jpg']
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000'
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
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
        {children}
      </body>
    </html>
  );

}

}
ursor/automate-test-improve-and-merge-code-646c
  )
}
}
