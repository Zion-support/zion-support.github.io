import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Brain, Cloud, Shield, Zap, ArrowRight, Star, Award, Target, Users, Globe, Database, Code, BarChart, Clock } from 'lucide-react';

export default function AIServicesPage() {
  const aiServices = [
    {
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: BarChart,
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Automated reporting'],
      price: 'Starting at $2,999/month'
    },
    {
      title: 'AI Customer Support',
      description: 'Deploy intelligent chatbots and virtual assistants for 24/7 customer service.',
      icon: Users,
      features: ['Natural language processing', 'Multi-language support', 'Integration with CRM', 'Performance analytics'],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our AI-powered content generation tools.',
      icon: Code,
      features: ['Blog posts & articles', 'Social media content', 'Product descriptions', 'SEO optimization'],
      price: 'Starting at $999/month'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent automation solutions.',
      icon: Zap,
      features: ['Process optimization', 'Task automation', 'Error reduction', 'Cost savings'],
      price: 'Starting at $3,999/month'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered threat detection and prevention.',
      icon: Shield,
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring'],
      price: 'Starting at $4,999/month'
    },
    {
      title: 'AI Cloud Infrastructure',
      description: 'Optimize your cloud resources with AI-driven infrastructure management.',
      icon: Cloud,
      features: ['Auto-scaling', 'Cost optimization', 'Performance monitoring', 'Predictive maintenance'],
      price: 'Starting at $2,499/month'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '300% Average ROI',
      description: 'Our clients see significant returns on their AI investments within the first year.'
    },
    {
      icon: Clock,
      title: '70% Time Savings',
      description: 'Automate repetitive tasks and focus on strategic initiatives that drive growth.'
    },
    {
      icon: Target,
      title: '90% Accuracy Rate',
      description: 'Our AI solutions deliver consistent, accurate results across all applications.'
    },
    {
      icon: Award,
      title: 'Enterprise Security',
      description: 'ISO 27001 certified with enterprise-grade security and compliance standards.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI solutions. From machine learning to 
              natural language processing, we deliver intelligent systems that drive real results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/10 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Advanced AI Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/10 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">300% Average ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve real business challenges and drive measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-900/50 rounded-2xl p-8 cyber-card hover:bg-slate-900/70 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="text-cyan-400 font-bold text-lg mb-4">{service.price}</div>
                    <button className="w-full cyber-button inline-flex items-center justify-center px-6 py-3">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We don't just implement AI solutions – we ensure they deliver measurable business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl cyber-card">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">Our AI Implementation Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful AI implementation and maximum ROI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Discovery & Analysis</h3>
                <p className="text-gray-300">We analyze your business processes and identify AI opportunities.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-400">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Strategy & Planning</h3>
                <p className="text-gray-300">We develop a comprehensive AI strategy tailored to your needs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Development & Testing</h3>
                <p className="text-gray-300">We build and rigorously test your AI solutions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-400">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Deployment & Support</h3>
                <p className="text-gray-300">We deploy your AI solutions and provide ongoing support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss how our AI solutions can drive your success and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}