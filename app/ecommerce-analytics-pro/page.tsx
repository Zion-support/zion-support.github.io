<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ecommerce Analytics Pro
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional ecommerce analytics pro services powered by advanced AI and technology.
import { Metadata } from 'next';
=======
import React from "react";
import { ErrorBoundary } from '../components/ErrorBoundary';
>>>>>>> b61118d6144fdc99f32acbc26a83c9d4d1af6611

export const metadata = {
  title: "E-commerce Analytics Pro | Zion Tech Group",
  description: "Professional e-commerce analytics pro services by Zion Tech Group",
  keywords: "e-commerce analytics, technology, services",
  openGraph: {
<<<<<<< HEAD
    title: 'E-commerce Analytics Pro - Zion Tech Group',
    description: 'Advanced e-commerce analytics and insights platform for data-driven business growth.',
    type: 'website',
  },
};

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              E-commerce Analytics Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advanced analytics and insights platform for data-driven e-commerce growth.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Transform your business with our cutting-edge ecommerce analytics pro solutions. 
              We provide comprehensive services to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}

  );
}

export default function Wrapped(props: any) {
  return (
    <ErrorBoundary>
      <EcommerceAnalyticsProPage {...props} />
    </ErrorBoundary>
  );
}
export default Page;
=======
    title: "E-commerce Analytics Pro | Zion Tech Group",
    description: "Professional e-commerce analytics pro services by Zion Tech Group",
    type: "website",
  },
};

export default function EcommerceAnalyticsPro() {
  return (
    <ErrorBoundary>
      <div>
        <h1>E-commerce Analytics Pro</h1>
        <p>Professional e-commerce analytics pro services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}
>>>>>>> b61118d6144fdc99f32acbc26a83c9d4d1af6611
