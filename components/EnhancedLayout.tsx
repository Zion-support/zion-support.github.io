import Head from "next/head";
import React, { ReactNode } from "react";
import Navigation from "../src/components/Navigation";
import Footer from "./Footer";

interface EnhancedLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export default function EnhancedLayout({
  children,
  title = "Zion Tech Group - AI & Technology Solutions",
  description = "Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.",
  className = ""
}: EnhancedLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`min-h-screen flex flex-col ${className}`}>
        <Navigation />
        
        <main className="flex-grow pt-16">
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
}