import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FuturisticBackground from './components/FuturisticBackground';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Leading provider of AI and IT solutions for businesses worldwide.',
  keywords: 'AI solutions, IT services, cloud computing, cybersecurity, 5G solutions',
  authors: [{ name: 'Zion Tech Group' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Zion Tech Group - AI & IT Solutions',
    description: 'Leading provider of AI and IT solutions for businesses worldwide.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <FuturisticBackground />
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
          <PerformanceMonitor />
          <AccessibilityEnhancer />
        </div>
      </body>
    </html>
  );
}