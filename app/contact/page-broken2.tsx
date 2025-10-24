"use client"
import React from "react";
import Head from "next/head";
import { Head  } from "next/head";
import { Link  } from "next/link";
const WorkingPage = () => {
  return (
    <>
      <Head>
        <title>{title) => {

} | Zion Tech Group</title>
        <meta name="description" content="Professional services and solutions for modern businesses." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="{title) => {

} | Zion Tech Group" />
        <meta property="og:description" content="Professional services and solutions for modern businesses." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
          <p className="text-lg text-gray-300 mb-8">{description}</p>
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>)
  )

export interface PageBroken2Props {
   className = '', children 
}
const PageBroken2: React.FC<PageBroken2Props> = ({  className = '', children  }) => {
  return (
    <div className={`pagebroken2 ${className}`}>
      {children}
    </div>
  );
};

export default PageBroken2;
"