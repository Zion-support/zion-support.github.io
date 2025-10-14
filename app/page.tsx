import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions, empowering businesses to transform and scale through innovative technology." />
        <meta name="keywords" content="AI solutions, IT services, cloud infrastructure, digital transformation, technology consulting" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions, empowering businesses to transform and scale through innovative technology." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI and IT solutions, empowering businesses to transform and scale through innovative technology." />
      </Helmet>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};
export default HomePage;