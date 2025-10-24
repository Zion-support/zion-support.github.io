'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

<<<<<<< HEAD
export default function AiautomationplatformPage() {
  return (
    <>
      <Head>
        <title>Ai Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Professional ai-automation-platform services by Zion Tech Group. Transform your business with our expert solutions." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Automation Platform
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional ai-automation-platform services coming soon.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
=======
const AiAutomationPlatformPage: React.FC = () => {,
  return (
    <>
      
    </>
      <Helmet> </Helmet><title>AI Automation Platform - Intelligent Process Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions" /> </meta></Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16"> </div><div className="text-center"> </div><h1AI Automation Platform
            </h1>
            <pTransform your business with intelligent process automation
            </p>
            <div className="grid md: grid-cols-2 gap-8 mt-12">,
              <div className="bg-white p-6 rounded-lg shadow-md"> </div><h3 className="text-xl font-semibold mb-4">Process Automation</h3>
                <p className="text-gray-600">Automate complex business processes with AI</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md"> </div><h3 className="text-xl font-semibold mb-4">Workflow Optimization</h3>
                <p className="text-gray-600">Optimize workflows for maximum efficiency</p>
              </div>
            </div>
            <div className="mt-8"> </div><button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover: bg-blue-700 transition-colors">,
                Watch Demo
              </button>
            </div>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
        </div>
      </div>
      <Footer />
    </>
  );
}