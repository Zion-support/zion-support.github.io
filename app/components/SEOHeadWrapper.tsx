import { Link } from 'lucide-react;'
"use client";""
import React from "react";"
import Footer from '../components/Footer;'
import Head from "next/head";"
import Link from "next/link";"
import { ArrowRight } from "lucide-react";"

export default function ServicePage() {
  return ()
    <Head>
        <title>SEOHeadWrapper | Zion Tech Group</title>
        <meta name="description" content="Professional SEOHeadWrapper services and solutions for modern businesses." />""
        <meta name="robots" content="index, follow" />""
        <meta name="viewport" content="width=device-width, initial-scale=1" />""
        <meta property="og:title" content="SEOHeadWrapper | Zion Tech Group" />""
        <meta property="og:description" content="Professional SEOHeadWrapper services and solutions for modern businesses." />""
        <meta property="og:type" content="website" />""
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>""
        <div className="container mx-auto px-4 py-16"></div>""
          <div className="text-center"></div>""
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">""
              SEOHeadWrapper
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">""
              Professional SEOHeadWrapper services and solutions for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>""
              <Link,
href="/contact""
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors""
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />""
              </Link>
              <Link,
href="/about""
                className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors""
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}