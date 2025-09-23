import type { NextPage } from 'next';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

  return (
    <EnhancedLayout>
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p className="text-gray-70o0 mb-6">Comprehensive solutions across software, cloud, and AI.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/services/web-application-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition">
          Web Application Development
        </Link>
        <Link href="/services/mobile-app-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition">
          Mobile App Development
        </Link>
        <Link href="/services/cloud-migration-services-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition">
          Cloud Migration
        </Link>
        <Link href="/services/ai-model-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition">
          AI Model Development
        </Link>
        <Link href="/services/performance-optimization-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition">
          Performance Optimization
        </Link>
        <Link href="/services/security-auditing-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition">
          Security Auditing
        </Link>
      </div>
    </EnhancedLayout>
  );
};

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-60o0 to-cyan-50o0 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="ml-3">
                  <h1 className="text-xl font-bold text-gray-90o0">Zion Tech Group</h1>
                  <p className="text-xs text-gray-60o0">Innovation & Technology</p>
                </div>
              </div>
              <nav className="hidden md: flex space-x-8">
                <Link href="/" className="text-gray-70o0 hover: tex t-blue-60o0">Home</Link>
                <Link href="/services" className="text-blue-60o0">Services</Link>
                <Link href="/about" className="text-gray-70o0 hover: tex t-blue-60o0">About</Link>
                <Link href="/contact" className="text-gray-70o0 hover: tex t-blue-60o0">Contact</Link>
              </nav>
              <Link href="/contact" className="bg-blue-60o0 text-white px-6 py-2 rounded-lg hover: b g-blue-70o0 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-gradient-to-br from-indigo-50o0 via-blue-50o0 to-cyan-50o0 py-20 text-center">
          <div className="max-w-5xl mx-auto px-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Layers className="w-4 h-4 mr-2"   />
              Comprehensive Technology Solutions
            </div>
            <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-indigo-10o0 text-xl">
              Transform your business with cutting-edge AI, micro SaaS, and technology solutions that drive growth and efficiency.
            </p>
          </div>
        </section>

        <section className="py-16 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-90o0 text-center mb-12">Our Service Portfolio</h2>
          <div className="grid md: gri d-cols-2 lg: gri d-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white border border-gray-20o0 rounded-xl p-6 shadow-lg hover: shado w-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-50o0 to-blue-50o0 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white"   />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-90o0">{service.name}</h3>
                  </div>
                  <p className="text-gray-60o0 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-60o0">
                        <Check className="w-3 h-3 text-green-50o0 mr-2 flex-shrink-0"   />
