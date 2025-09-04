import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Users, MapPin, Clock, Briefcase, Heart, Zap, Brain, Shield, Cloud, Rocket } from 'lucide-react';

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and help build the future of AI, Micro SaaS, and IT solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Join Our Team</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            We're always looking for talented individuals to join our mission of transforming businesses through technology.
          </p>
          <div className="text-center">
            <a href="mailto:careers@ziontechgroup.com" className="inline-block border border-gray-300 px-6 py-3 rounded-lg">careers@ziontechgroup.com</a>
          </div>
        </div>
      </main>
    </>
  )
}