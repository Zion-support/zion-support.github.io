'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Brain, Cloud, Shield, Database, Code, Users, Target, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ITConsultingPage: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Strategy & Implementation',
      description: 'Develop and implement AI strategies that align with your business goals and drive real value.',
      features: ['AI readiness assessment', 'Strategy development', 'Implementation planning', 'Change management']
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Migration & Architecture',
      description: 'Design and execute cloud migration strategies for improved scalability and cost efficiency.',
      features: ['Cloud assessment', 'Migration planning', 'Architecture design', 'Security implementation']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Consulting',
      description: 'Strengthen your security posture with comprehensive cybersecurity assessments and implementations.',
      features: ['Security audits', 'Risk assessment', 'Compliance consulting', 'Incident response']
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Strategy & Analytics',
      description: 'Transform your data into a strategic asset with comprehensive data management and analytics.',
      features: ['Data governance', 'Analytics strategy', 'BI implementation', 'Data quality improvement']
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation with proven methodologies and best practices.',
      features: ['Process optimization', 'Technology selection', 'Change management', 'ROI measurement']
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: 'IT Team Augmentation',
      description: 'Enhance your existing team with experienced IT professionals and specialized expertise.',
      features: ['Staff augmentation', 'Skills assessment', 'Training programs', 'Mentoring']
    }
  ];

  const industries = [
    'Healthcare',
    'Financial Services',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Technology',
    'Non-Profit'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We begin by understanding your current state, challenges, and objectives through comprehensive analysis.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Based on our findings, we develop a tailored strategy that aligns with your business goals.'
    },
    {
      step: '03',
      title: 'Implementation Planning',
      description: 'We create detailed implementation plans with timelines, resources, and success metrics.'
    },
    {
      step: '04',
      title: 'Execution & Support',
      description: 'We execute the plan with ongoing support and monitoring to ensure successful outcomes.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Enterprise Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Consulting - Zion Tech Group</title>
        <meta name="description" content="Expert IT consulting services to help your business leverage technology for growth. AI, cloud, cybersecurity, and digital transformation consulting." />
        <meta name="keywords" content="IT consulting, technology consulting, digital transformation, AI consulting, cloud consulting, cybersecurity consulting" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Consulting</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with expert IT consulting services. We help you leverage technology 
            to drive growth, efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT consulting services to help your business succeed in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project outcomes and maximum value delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our consulting expertise spans across various industries, delivering tailored solutions for each sector.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <p className="text-gray-300">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Strategy?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our expert consultants help you leverage technology to achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITConsultingPage;