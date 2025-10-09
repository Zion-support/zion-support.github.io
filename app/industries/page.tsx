'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Building, Heart, DollarSign, Car, GraduationCap, ShoppingCart, Factory, Plane, Shield, Zap, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';

const IndustriesPage: React.FC = () => {
  const industries = [
    {
      icon: Building,
      title: 'Financial Services',
      description: 'AI-powered trading, fraud detection, risk management, and regulatory compliance solutions',
      solutions: [
        'Algorithmic Trading Platforms',
        'AI Fraud Detection',
        'Credit Scoring & Risk Assessment',
        'Regulatory Compliance',
        'Wealth Management AI',
        'Payment Processing Optimization'
      ],
      color: 'from-green-500 to-emerald-600',
      stats: '40% increase in trading profits'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Medical AI solutions for diagnosis, drug discovery, and personalized medicine',
      solutions: [
        'Medical Imaging AI',
        'Drug Discovery Platforms',
        'Personalized Medicine',
        'Electronic Health Records',
        'Telemedicine Solutions',
        'Clinical Decision Support'
      ],
      color: 'from-red-500 to-pink-600',
      stats: '60% faster diagnosis'
    },
    {
      icon: Car,
      title: 'Automotive',
      description: 'Autonomous vehicles, predictive maintenance, and smart manufacturing solutions',
      solutions: [
        'Autonomous Vehicle Systems',
        'Predictive Maintenance',
        'Smart Manufacturing',
        'Supply Chain Optimization',
        'Quality Control AI',
        'Connected Vehicle Services'
      ],
      color: 'from-blue-500 to-cyan-600',
      stats: '50% reduction in maintenance costs'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'AI-powered learning platforms, personalized education, and administrative automation',
      solutions: [
        'Personalized Learning AI',
        'Intelligent Tutoring Systems',
        'Administrative Automation',
        'Student Performance Analytics',
        'Virtual Classrooms',
        'Curriculum Optimization'
      ],
      color: 'from-purple-500 to-indigo-600',
      stats: '35% improvement in learning outcomes'
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-commerce',
      description: 'AI-driven personalization, inventory optimization, and customer experience enhancement',
      solutions: [
        'AI-Powered Personalization',
        'Inventory Optimization',
        'Demand Forecasting',
        'Customer Service AI',
        'Price Optimization',
        'Supply Chain Management'
      ],
      color: 'from-orange-500 to-red-600',
      stats: '45% increase in conversion rates'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Smart manufacturing, quality control, and predictive maintenance solutions',
      solutions: [
        'Smart Manufacturing Systems',
        'Quality Control AI',
        'Predictive Maintenance',
        'Supply Chain Optimization',
        'Robotic Process Automation',
        'Energy Management'
      ],
      color: 'from-gray-500 to-slate-600',
      stats: '30% increase in production efficiency'
    },
    {
      icon: Plane,
      title: 'Transportation & Logistics',
      description: 'Route optimization, fleet management, and supply chain visibility solutions',
      solutions: [
        'Route Optimization AI',
        'Fleet Management Systems',
        'Supply Chain Visibility',
        'Demand Forecasting',
        'Warehouse Automation',
        'Last-Mile Delivery Optimization'
      ],
      color: 'from-cyan-500 to-blue-600',
      stats: '25% reduction in logistics costs'
    },
    {
      icon: Shield,
      title: 'Government & Public Sector',
      description: 'Smart city solutions, citizen services, and administrative automation',
      solutions: [
        'Smart City Platforms',
        'Citizen Service AI',
        'Administrative Automation',
        'Public Safety Systems',
        'Resource Optimization',
        'Digital Government Services'
      ],
      color: 'from-indigo-500 to-purple-600',
      stats: '40% improvement in citizen satisfaction'
    }
  ];

  const benefits = [
    {
      title: 'Industry Expertise',
      description: 'Deep understanding of industry-specific challenges and requirements'
    },
    {
      title: 'Proven Solutions',
      description: 'Battle-tested AI and IT solutions with measurable results'
    },
    {
      title: 'Compliance Ready',
      description: 'Built-in compliance with industry regulations and standards'
    },
    {
      title: 'Scalable Architecture',
      description: 'Solutions that grow with your business and adapt to changing needs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Industries - Zion Tech Group"
        description="AI and IT solutions tailored for specific industries including financial services, healthcare, automotive, education, retail, manufacturing, and more."
        keywords={['industry solutions', 'financial services AI', 'healthcare AI', 'manufacturing AI', 'retail AI', 'education technology']}
        canonicalUrl="https://ziontechgroup.com/industries"
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Industry Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Specialized AI and IT solutions designed for your industry's unique challenges and opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Get Industry Consultation
            </a>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-6`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <div className="mb-4">
                  <div className="text-cyan-400 font-semibold mb-2">{industry.stats}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {industry.solutions.slice(0, 4).map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                  {industry.solutions.length > 4 && (
                    <li className="text-sm text-cyan-400">
                      +{industry.solutions.length - 4} more solutions
                    </li>
                  )}
                </ul>
                <a
                  href="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Industry-Specific Solutions Matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Industry Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
                <div className="text-gray-300 mb-2">Annual Savings</div>
                <div className="text-sm text-gray-400">Delivered across all industries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300 mb-2">Industry Projects</div>
                <div className="text-sm text-gray-400">Successfully completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300 mb-2">Client Satisfaction</div>
                <div className="text-sm text-gray-400">Across all industries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Industry-Specific Solutions?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our industry experts for a free consultation and discover how our specialized solutions can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              ✉️ Email Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndustriesPage;