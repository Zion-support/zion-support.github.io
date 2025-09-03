import React from "react"
import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI-Powered Technology Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge AI, cloud architecture, and innovative development services. Leading technology solutions provider with 500+ completed projects."  />
        <meta name="keywords" content="AI development, cloud architecture, cybersecurity, data analytics, DevOps, technology solutions, digital transformation"  />
        <meta name="viewport" content="width=device-width, initial-scale=1"  />
        <meta property="og:title" content="Zion Tech Group - AI-Powered Technology Solutions"  />
        <meta property="og:description" content="Transform your business with cutting-edge AI, cloud architecture, and innovative development services."  />
        <meta property="og:type" content="website"  />
        <meta property="og:url" content="https://ziontechgroup.com"  />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg"  />
        <meta name="twitter:card" content="summary_large_image"  />
        <meta name="twitter:title" content="Zion Tech Group - AI-Powered Technology Solutions"  />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI, cloud architecture, and innovative development services."  />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg"  />
        <link rel="canonical" href="https://ziontechgroup.com"  />
        <link rel="icon" href="/favicon.ico"  />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"  />
        <meta name="theme-color" content="#1a1a2e"  />
      </Head>
      <Navigation  />
      <HeroSection  />
      <ServicesSection  />
      <Footer  />
    </>
  );
};
export default Home;