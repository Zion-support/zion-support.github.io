import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

const cybersecurity: React.FC = () => {
=======
import Head from 'next/head';
import Link from 'next/link';

export default function Cybersecurity() {
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>cybersecurity | Zion Tech Group</title>
        <meta name="description" content="cybersecurity - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">cybersecurity</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default cybersecurity;