import React from "react"
import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive technology services including AI development, cloud architecture, cybersecurity, and more."  />
      </Head>
      <Navigation  />
      
      <main className="min-h-screen bg-gray-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
        </div>
        <ServicesSection  />
      </main>
      <Footer  />
    </>
  );
};
export default Services;