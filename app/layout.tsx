import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Zion Tech Group — Revolutionary AI Breakthroughs 2026',
  description: 'Discover revolutionary AI breakthroughs: Quantum Computing (1000x gains), Autonomous Enterprise (95% automation), and $150M ROI success stories.',
  keywords: 'AI quantum computing 2026, autonomous enterprise AI, AI breakthrough 2026, quantum AI performance, AI transformation case study, enterprise AI automation, AI ROI 150M, Fortune 500 AI success, AI innovation 2026, quantum-enhanced AI',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group — Revolutionary AI Breakthroughs 2026',
    description: 'Discover revolutionary AI breakthroughs: Quantum Computing (1000x gains), Autonomous Enterprise (95% automation), and $150M ROI success stories.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI Enterprise Transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — Revolutionary AI Breakthroughs 2026',
    description: 'Discover revolutionary AI breakthroughs: Quantum Computing (1000x gains), Autonomous Enterprise (95% automation), and $150M ROI success stories.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900">
        <Router>
          <div className="min-h-screen bg-white text-gray-900">
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </div>
        </Router>
      </body>
    </html>
  );
}