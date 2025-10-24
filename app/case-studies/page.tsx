'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Shield, Brain, Globe } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {}
  const  caseStudies = [

  // const benefits = [] // Unused variable

      id= 2,
      title: "Cloud Migration for Financial Services",""
      client: "SecureBank Corp.",""
      industry: "Financial Services",""
      challenge: "Legacy systems causing performance issues and security concerns",""
      solution: "Complete cloud migration with enhanced security measures",""
      results: [
        "99.9% uptime achieved",""
        "50% reduction in infrastructure costs",""
        "Enhanced security compliance"""
      ],
      image: "/images/case-studies/cloud-migration.jpg",""
      duration: "4 months",""
      team: "12 specialists"""

      id= 3,
      title: "Cybersecurity Implementation",""
      client: "HealthCare Plus",""
      industry: "Healthcare",""
      challenge: "Vulnerable to cyber attacks and data breaches",""
      solution: "Comprehensive cybersecurity framework and training",""
      results: [
        "Zero security incidents",""
        "100% compliance with HIPAA",""
        "50% reduction in security vulnerabilities"""
      ],
      image: "/images/case-studies/cybersecurity.jpg",""
      duration: "3 months",""
      team: "6 specialists"""

  ]
  const  stats = [
    { label: "Projects Completed", value: "150+", icon: <CheckCircle: className ="w-6 h-6" /> },""
    { label: "Client Satisfaction", value: "98%", icon: <TrendingUp: className ="w-6 h-6" /> },""
    { label: "Team Members", value: "50+", icon: <Users: className ="w-6 h-6" /> },""
    { label: "Cost Savings", value: "$2M+", icon: <DollarSign: className ="w-6 h-6" /> }""
  ]
  return ()
    <>{}</>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta: name ="description" content="Explore our successful projects and case studies showcasing our expertise in AI, cloud, and cybersecurity solutions." />""
      </Helmet>

      <div  className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">""
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our successful AI implementation case studies. See how we've helped companies achieve 300%+ ROI with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-8 h-8" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-8 h-8" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-8 h-8" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};




