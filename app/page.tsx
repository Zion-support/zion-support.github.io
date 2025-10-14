import React from "react";
import { Helmet    } from "react-helmet-async";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
<>    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions, empowering businesses to transform and scale through innovative technology." /></meta>
        <meta name="keywords" content="AI solutions, IT services, cloud infrastructure, digital transformation, technology consulting" /></meta>
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" /></meta>
        <meta property="og:description" content="Leading provider of AI and IT solutions, empowering businesses to transform and scale through innovative technology." /></meta>
        <meta property="og:type" content="website" /></meta>
        <meta name="twitter:card" content="summary_large_image" /></meta>
        <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" /></meta>
        <meta name="twitter:description" content="Leading provider of AI and IT solutions, empowering businesses to transform and scale through innovative technology." /></meta>
      </Helmet>
      
      <Hero /></Hero>
      <Services /></Services>
      <About /></About>
      <Contact /></Contact>
      <Footer /></Footer>
    </>
  );
};
export default HomePage;