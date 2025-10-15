import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const CybersecurityPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Cybersecurity Solutions - Advanced Security Protection"
        description="Comprehensive cybersecurity solutions with AI-powered threat detection, data encryption, and 24/7 monitoring. Protect your business with enterprise-grade security."
        keywords="cybersecurity, security solutions, threat detection, data encryption, security auditing, incident response"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cybersecurity Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your business with advanced cybersecurity solutions. AI-powered threat detection, 
                data encryption, and 24/7 monitoring to keep your digital assets secure.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;
