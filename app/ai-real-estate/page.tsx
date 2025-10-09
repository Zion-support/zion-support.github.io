'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Home, DollarSign, BarChart, Users, Clock, Shield, Brain, Zap, Target, Star, ArrowRight } from 'lucide-react';

const AIRealEstatePage: React.FC = () => {
  const realEstateServices = [
    {
      title: 'AI Property Valuation Pro',
      description: 'Advanced AI-powered property valuation with market analysis, price prediction, and investment opportunity identification.',
      icon: '🏠',
      price: '$199/month',
      features: [
        'Automated Property Valuation',
        'Market Trend Analysis',
        'Investment ROI Calculator',
        'Neighborhood Analysis',
        'Price Prediction Models',
        'Comparative Market Analysis',
        'Risk Assessment',
        'Investment Recommendations'
      ],
      benefits: [
        'Accurate valuations within 3%',
        'Identify undervalued properties',
        'Maximize investment returns',
        'Reduce appraisal costs by 70%',
        'Save 20+ hours per week'
      ],
      marketPrice: '$300-800/month',
      category: 'Real Estate Technology',
      technologies: ['Machine Learning', 'Computer Vision', 'Geospatial Analysis', 'Python', 'React', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-property-valuation',
      popular: true,
      stats: {
        propertiesAnalyzed: '100,000+',
        accuracy: '97.2%',
        clients: '1,200+',
        timeSaved: '20+ hours/week'
      }
    },
    {
      title: 'Smart Property Management AI',
      description: 'Comprehensive property management solution with tenant screening, maintenance prediction, and automated rent collection.',
      icon: '🏢',
      price: '$149/month',
      features: [
        'Tenant Screening & Verification',
        'Maintenance Prediction',
        'Rent Collection Automation',
        'Lease Management',
        'Financial Reporting',
        'Property Performance Analytics',
        'Tenant Communication',
        'Maintenance Scheduling'
      ],
      benefits: [
        'Reduce vacancy rates by 40%',
        'Improve tenant satisfaction',
        'Automate 80% of tasks',
        'Increase rental income by 15%'
      ],
      marketPrice: '$200-600/month',
      category: 'Property Management',
      technologies: ['AI/ML', 'IoT Sensors', 'Mobile Apps', 'Cloud Computing', 'React Native'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/smart-property-management'
    },
    {
      title: 'AI Real Estate Marketing Suite',
      description: 'AI-powered marketing automation for real estate with virtual tours, lead generation, and personalized content.',
      icon: '📱',
      price: '$99/month',
      features: [
        'Virtual Property Tours',
        'AI-Generated Listings',
        'Lead Scoring & Nurturing',
        'Social Media Automation',
        'Email Marketing Campaigns',
        'Market Analysis Reports',
        'Client Communication',
        'Performance Analytics'
      ],
      benefits: [
        'Generate 3x more leads',
        'Increase conversion rates by 60%',
        'Save 25+ hours per week',
        'Improve client engagement'
      ],
      marketPrice: '$150-500/month',
      category: 'Real Estate Marketing',
      technologies: ['Virtual Reality', 'AI Content Generation', 'Marketing Automation', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-real-estate-marketing'
    },
    {
      title: 'Real Estate Investment Analyzer',
      description: 'Advanced investment analysis with cash flow projections, risk assessment, and portfolio optimization.',
      icon: '💰',
      price: '$299/month',
      features: [
        'Cash Flow Analysis',
        'ROI Calculations',
        'Risk Assessment Models',
        'Portfolio Optimization',
        'Market Timing Analysis',
        'Tax Optimization',
        'Exit Strategy Planning',
        'Investment Recommendations'
      ],
      benefits: [
        'Maximize investment returns',
        'Minimize investment risks',
        'Optimize portfolio performance',
        'Make data-driven decisions'
      ],
      marketPrice: '$400-1,000/month',
      category: 'Investment Analysis',
      technologies: ['Financial Modeling', 'Risk Analysis', 'Portfolio Theory', 'Python', 'React'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/real-estate-investment-analyzer'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Real Estate Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered real estate solutions including property valuation, smart property management, and investment analysis. Transform your real estate business with cutting-edge technology." />
        <meta name="keywords" content="AI real estate, property valuation, property management, real estate marketing, investment analysis, real estate technology" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-real-estate" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Real Estate Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Revolutionize Your Real Estate Business with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Advanced AI-powered real estate solutions that automate property valuation, 
              management, and marketing. Maximize profits and streamline operations with cutting-edge technology.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400">100K+</div>
                <div className="text-gray-300">Properties Analyzed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400">97.2%</div>
                <div className="text-gray-300">Valuation Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400">1,200+</div>
                <div className="text-gray-300">Real Estate Professionals</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-400">40%</div>
                <div className="text-gray-300">Reduced Vacancy Rates</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our AI Real Estate Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {realEstateServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-6xl mb-6 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-cyan-400 text-center mb-2">
                      {service.price}
                    </div>
                    <div className="text-gray-400 text-center text-sm">
                      Market Price: {service.marketPrice}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <TrendingUp className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <a
                      href={service.link}
                      className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Transform Your Real Estate Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today for a free consultation and see how AI can revolutionize your real estate operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center text-white">
                <Phone className="w-6 h-6 mr-2 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-white">
                <Mail className="w-6 h-6 mr-2 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="w-6 h-6 mr-2 text-cyan-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIRealEstatePage;