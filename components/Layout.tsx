import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <Head>
          <title>{title || 'Zion Tech Group'}</title>
          <meta name="description" content={description || 'Leading provider of micro SaaS products, AI services, and IT solutions.'} />
        </Head>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}