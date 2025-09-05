import React, { useState } from 'react'
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
interface LayoutProps {;
  children: React.ReactNode
  title?: string
  description?: string
  keywords?: string
  showSidebar?: boolean
};
export default function MainLayout({
  children
  title = "Zion Tech Group - Leading AI & Technology Solutions"
  description = "Transform your business with cutting-edge AI solutions, cloud services, and technology consulting."
  keywords = "AI solutions, cloud services, technology consulting, digital transformation"
  showSidebar = false
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og: title" content={title} />
        <meta property="og: description" content={description} />
        <meta property="og: type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter: description" content={description} />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20">
          {showSidebar && (
            <div className="flex">
              <Sidebar
                isOpen={sidebarOpen};
                onClose={() => setSidebarOpen(false)};
              />;
              <div className="flex-1 ml-80">;
                {children};
              </div>;
            </div>;
          )};
          {!showSidebar && children};
        </main>;
        <Footer />;
      </div>;
    </>;
  );
};