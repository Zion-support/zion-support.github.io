<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn more about Zion Tech Group, our mission, and our vision for the future of technology." />
      </Head>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-12">
        <main className="text-center max-w-4xl px-4">
          <h1 className="text-5xl font-bold mb-6 gradient-text">About Zion Tech Group</h1>
          <p className="text-xl text-gray-300 mb-8">
            We are a pioneering technology company dedicated to delivering advanced IT solutions and cutting-edge AI services. Our mission is to empower businesses with innovative technology that drives growth, efficiency, and competitive advantage.
          </p>
          <div className="card p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-purple-400">Our Vision</h2>
            <p className="text-lg text-gray-200">
              To be a global leader in technological innovation, creating a future where AI and advanced IT seamlessly integrate to solve complex challenges and unlock unprecedented opportunities for humanity.
=======
<<<<<<< HEAD
import React from 'react',
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
const AboutPage: React.FC;
=======
import React from "react";
import Layout from "../components/Layout";
export default function About() {
  return (
    <Layout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group, our mission, team, and commitment to delivering cutting-edge technology solutions."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading technology solutions provider specializing in AI
              cybersecurity, and digital transformation.
>>>>>>> f38908027c6fb310e108d8eef8d480933f0e20c4
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Join Our Journey
          </Link>
        </main>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
>>>>>>> f38908027c6fb310e108d8eef8d480933f0e20c4
