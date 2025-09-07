import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor($2) {
    super(props)
    this.state = { hasError: false }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  componentDidCatch($2) {
    console.error('Error caught by boundary:', error, errorInfo)
  render($2) {
  if($2) {
      return <div>Something went wrong.</div>
    return this.props.children
export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonical && <link rel="canonical" href={canonical} />}
        {noIndex && <meta name="robots" content="noindex,nofollow" />}
        {/* Open Graph */}
        <meta property="og:title" content={ogTitle |title} />
        <meta
          property="og:description"
          content={ogDescription |description}
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle |title} />
        <meta
          name="twitter:description"
          content={ogDescription |description}
        />
        <meta name="twitter:image" content={ogImage} />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
  );
};
export default Layout;
