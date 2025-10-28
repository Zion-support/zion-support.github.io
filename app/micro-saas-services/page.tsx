<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page - Zion Tech Group',
  description: 'Professional services and solutions by Zion Tech Group.',
  keywords: 'technology, services, solutions',
  openGraph: {
    title: 'Page - Zion Tech Group',
    description: 'Professional services and solutions by Zion Tech Group.',
>>>>>>> 9d27805b410bab1ceb410b64b65ce66c1275b73a
    type: 'website',
  }};

<<<<<<< HEAD
    </ErrorBoundary>
  );
}
=======
function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Service Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional services and solutions tailored to your needs.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
>>>>>>> 9d27805b410bab1ceb410b64b65ce66c1275b73a
=======
import React from "react";
import { ErrorBoundary } from '../components/ErrorBoundary';

export const metadata = {
  title: "Micro SaaS Services | Zion Tech Group",
  description: "Professional micro SaaS services by Zion Tech Group",
  keywords: "micro SaaS services, technology, services",
  openGraph: {
    title: "Micro SaaS Services | Zion Tech Group",
    description: "Professional micro SaaS services by Zion Tech Group",
    type: "website",
  },
};

export default function MicroSaaSServices() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Micro SaaS Services</h1>
        <p>Professional micro SaaS services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}
>>>>>>> b61118d6144fdc99f32acbc26a83c9d4d1af6611
