"use client";
import React from "react";
import Head from "next/head";
import PerformanceMonitor from "./components/PerformanceMonitor";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Head><>
</Head>
<title>Zion Tech Group - AI & IT Solutions</title><>
<//title>
<meta name="description" content="Leading provider of AI and IT solutions for businesses worldwide." /><>
</meta name="description" content="Leading provider of AI and IT solutions for businesses worldwide." />
<meta property="og:type" content="website" /><>
</meta property="og:type" content="website" />
</Head><>
<//Head>
<div className="App"><>
</div className="App">
<PerformanceMonitor /><>
</PerformanceMonitor />
<Navigation /><>
</Navigation />
<main></main>
          {/* Main content will be handled by Next.js routing */}
        </main><>
<//main>
<Footer /><>
</Footer />
</div><>
<//div>
</><//>
  );
};

export default App;
