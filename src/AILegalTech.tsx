import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Scale, 
  FileText, 
  Search, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Clock 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function AILegalTech() {
  return (
    <>
      <SEOHead
        title="AI Legal Tech - Zion Tech Group"
        description="Revolutionary AI-powered legal technology platform that automates legal processes, document analysis, and case management."
        keywords="AI legal tech, legal automation, document analysis, case management, legal AI"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-indigo-800/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-6 py-3 mb-6">
                <Scale className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-medium">AI Legal Tech</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Intelligent
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent block">
                  Legal Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Revolutionary AI-powered legal technology platform that automates legal processes, 
                document analysis, and case management with unprecedented efficiency.
              </p>
            </div>
        </div>
      </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Legal Tech Features</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Advanced AI capabilities that transform legal practice and case management
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: FileText,
                  title: 'Document Analysis',
                  description: 'AI-powered analysis of legal documents with 99.5% accuracy',
                },
                {
                  icon: Search,
                  title: 'Case Research',
                  description: 'Intelligent case research and precedent identification',
                },
                {
                  icon: Brain,
                  title: 'Legal AI Assistant',
                  description: 'AI assistant for legal research and case preparation',
                },
                {
                  icon: Shield,
                  title: 'Compliance Monitoring',
                  description: 'Automated compliance monitoring and risk assessment',
                },
                {
                  icon: Clock,
                  title: 'Time Tracking',
                  description: 'Automated time tracking and billing management',
                },
                {
                  icon: CheckCircle,
                  title: 'Quality Control',
                  description: 'Ensure accuracy and consistency in legal work',
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 hover:border-purple-500/50 transition-colors">
                  <feature.icon className="w-12 h-12 text-purple-500 mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI Legal Tech platform and streamline your legal operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all">
                Schedule Demo
              </button>
            </div>
          </motion.div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of legal professionals who have already revolutionized their practice with AI technology.
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-gray-400">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <$2 />
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </>
  );
}
