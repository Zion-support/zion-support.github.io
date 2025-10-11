<<<<<<< HEAD
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
=======
'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {ArrowRight} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
>>>>>>> cursor/fix-errors-and-merge-to-main-14e6

const LayoutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Layout - Zion Tech Group</title>
        <meta name="description" content="Professional layout services and solutions." />
        <meta name="keywords" content="layout, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Layout</h1>
            <p className="text-gray-300 mb-8">This page is under construction.</p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center mx-auto">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

<<<<<<< HEAD
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, artificial intelligence, business automation, technology consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`}>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
=======
export default LayoutPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-14e6
