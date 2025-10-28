import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
export const metadata = {
  title: 'Cybersecurity Audit | Zion Tech Group',
  description: 'Professional cybersecurity audit services by Zion Tech Group. Advanced AI and technology solutions.',
  keywords: 'cybersecurity audit, technology, services, AI, automation',
  openGraph: {
    title: 'Cybersecurity Audit | Zion Tech Group',
    description: 'Professional cybersecurity audit services by Zion Tech Group.',
    type: 'website',
  },
};

function CybersecurityauditPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Audit
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional cybersecurity audit services by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CybersecurityauditPage;