import { ArrowRight, CheckCircle, Star, ImageIcon, Upload, Zap, Download, Clock, X, Circle } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
&apos;use client&apos;;

import Footer from &apos;../components/Footer&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import { ArrowRight } from &apos;lucide-react&apos;;

export default function AiTelepathicInterfacePage() {
  return (
    <>
      <Head>
        <title>Ai Telepathic Interface - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Professional services by Zion Tech Group.&quot; />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center&quot;></div>
          <h1>Ai Telepathic Interface - Zion Tech Group</h1>
          <p>Professional ai telepathic interface - zion tech group services coming soon.</p>
          <Link href=&quot;/contact&quot;
            className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit&quot;
          >
            Contact Us
            <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )}