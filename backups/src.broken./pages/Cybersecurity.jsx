import React from 'react';
import { CheckCircle, Zap, Target, BarChart3 } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Cybersecurity() {
  const securityFeatures = [
    { icon: CheckCircle, title: "24/7 Monitoring", description: "Continuous security monitoring and threat detection" },
    { icon: Zap, title: "Real-time Response", description: "Instant automated response to security incidents" },
    { icon: Target, title: "Proactive Defense", description: "Predictive security using AI and machine learning" },
    { icon: BarChart3, title: "Comprehensive Reporting", description: "Detailed security analytics and compliance reporting" }
  ];

  return (
    <>
      <SEO
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Comprehensive cybersecurity solutions including threat detection, compliance automation, zero trust architecture, and advanced security services from Zion Tech Group."
        keywords="cybersecurity, threat detection, SOC2 compliance, zero trust, network security, data protection"
        canonical="https://ziontechgroup.com/cybersecurity"
      />
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Cybersecurity Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your business with our comprehensive cybersecurity services and advanced threat detection systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}