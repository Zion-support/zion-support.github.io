import React from 'react';
import { Shield, CheckCircle, Target, Zap, BarChart, Settings, Users, FileText, AlertTriangle, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIQualityAssurancePage: React.FC = () => {
  const features = [
    'Automated Testing',
    'Defect Detection',
    'Quality Metrics',
    'Process Optimization',
    'Compliance Monitoring',
    'Performance Analysis',
    'Risk Assessment',
    'Continuous Monitoring',
    'Predictive Quality',
    'Real-time Alerts'
  ];

  const benefits = [
    '90% defect reduction',
    'Faster testing',
    'Cost savings',
    'Quality improvement',
    'Automated processes',
    'Better compliance'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Quality Assurance - Zion Tech Group"
        description="Automated quality control and testing with AI-powered defect detection, process optimization, and compliance monitoring."
        keywords={['AI quality assurance', 'automated testing', 'defect detection', 'quality control', 'compliance monitoring', 'process optimization']}
        canonicalUrl="https://ziontechgroup.com/ai-quality-assurance"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              AI Quality Assurance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Automated quality control and testing with AI-powered defect detection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>+1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing</h2>
            <div className="max-w-4xl mx-auto">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">AI Quality Assurance</h3>
                <div className="text-4xl font-bold text-red-400 mb-6">$2,800/month</div>
                <p className="text-gray-300 mb-8">
                  Automated quality control and testing with AI-powered defect detection
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Features Included:</h4>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Automated Testing
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Defect Detection
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Quality Metrics
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Process Optimization
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Benefits:</h4>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        90% defect reduction
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Faster testing
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Cost savings
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Quality improvement
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIQualityAssurancePage;