"use client";
import React from "react";
import Head from "next/head";
import PerformanceMonitor from "./components/PerformanceMonitor";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

export default function Page() {
  return (
    <ErrorBoundary>
      <>
        <Head>
          <title>Zion Tech Group - AI & IT Solutions</title><meta name="description" content="Leading provider of AI and IT solutions for businesses worldwide." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
          <meta property="og:description" content="Advanced AI and IT solutions for modern businesses" />
          <meta property="og:image" content="/og-image.jpg" />
        </Head><div className="App">
          <PerformanceMonitor />
          <Navigation />
          <main>
            {/* Main content will be handled by Next.js routing */}
          </main><Footer />
        </div>
      </>
    </ErrorBoundary>
  );
}