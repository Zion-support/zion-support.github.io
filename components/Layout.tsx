import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Enterprise AI & IT Solutions'} />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}