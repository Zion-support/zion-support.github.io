import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export default function Layout({
  children,
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions",
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses.",
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation",
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  noIndex = false
}: LayoutProps) {
  // Suppress unused variable warnings for props that might be used in the future
  void title;
  void description;
  void keywords;
  void canonical;
  void ogTitle;
  void ogDescription;
  void ogImage;
  void noIndex;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}