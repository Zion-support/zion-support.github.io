"use client";
import React from "react";
import Head from "next/head";
import PerformanceMonitor from "./components/PerformanceMonitor";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App: React.FC  = () => {
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for businesses worldwide." />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="App">
        <PerformanceMonitor />
        <Navigation />
        <main>
          {/* Main content will be handled by Next.js routing */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
