import type { NextPage } from 'next';
import Head from 'next/head';
import { Users, Target, Award, Globe, Zap, Shield, Brain, Rocket } from 'lucide-react';

const About: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>About Us | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through AI, quantum computing, and autonomous systems." />
      </Head>
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading the future with revolutionary AI consciousness, quantum computing, and autonomous business systems.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
