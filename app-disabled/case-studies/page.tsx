import React from 'react';
import react;

import from  from 'react;

import from 'react&apos;;
import { Helmet } from 'react-helmet-async';
import { } from 'react-router-dom';
import { Right, Star, } from 'lucide-react';
    {
      id: &apos;1,
      title: 'AI-Powered Customer Service Transformation,
      client: 'TechCorp Solutions,
      industry: &apos;Technology,
      challenge: &apos;High customer service costs and long response times affecting customer satisfaction.,
      solution: &apos;Implemented AI-powered chatbots and automated ticket routing system.,
      results: [
        &apos;Reduced response time by 80%,
        &apos;Cut customer service costs by 60%,
        &apos;Improved customer satisfaction by 45%,
        Handled 10x more inquiries with same team size
    {
      id: &apos;2,
      title: 'Cybersecurity Infrastructure Overhaul,
      client: 'Financial Services Company,
      industry: &apos;Finance,
      challenge: &apos;Outdated security systems vulnerable to modern cyber threats.,
      solution: &apos;Complete security infrastructure redesign with AI-powered threat detection.,
      results: [
        &apos;Zero security breaches in 12 months,
        &apos;99.9% threat detection accuracy,
        &apos;Reduced false positives by 70%,
        Compliance with all regulatory requirements
    {
      id: &apos;3,
      title: &apos;Migration & Optimization,
      client: &apos;Manufacturing Corporation,
      image: &apos;/images/case-studies/ai-customer-service.jpg,
      duration: &apos;3 months,
      team: &apos;8 specialists
      imag,
    e: /api/placeholder/600
      image: &apos;/images/case-studies/ai-customer-service.jpg&apos;,      challenge: &apos;High customer service costs and long response times,
      solution: &apos;Implemented AI chatbot and automated ticketing system,
      results: [
        &apos;60% reduction in response time,
        &apos;40% cost savings,
        95% customer satisfaction rate
      team: &apos;8 specialists});)},
    {
      id: 2,
      title: 'Migration for Financial Services,
      company: 'FinanceFlow Ltd.,
      industry: &apos;Financial Services,
      challenge: &apos;Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.,
      solution: &apos;Complete cloud migration to AWS with microservices architecture and automated scaling.,
      challenge: &apos;Legacy systems causing performance issues and security concerns,
      solution: &apos;Complete cloud migration with enhanced security measures,
      results: [
        &apos;50% improvement in system performance,
        &apos;99.9% uptime achieved,
        30% reduction in operational costs
      challenge: &apos;Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.&apos;,
      solution: &apos;Complete cloud migration to AWS with microservices architecture and automated scaling.&apos;,
      challenge: &apos;Legacy systems causing performance issues and security concerns&apos;,
      solution: &apos;Complete cloud migration with enhanced security measures&apos;,
      results: []
        &apos;50% improvement in system performance&apos;,
        &apos;99.9% uptime achieved&apos;,
        &apos;30% reduction in operational costs&apos;
      ],
      image: &apos;/images/case-studies/cloud-migration.jpg,
      duration: &apos;6 months,
      team: &apos;12 specialists
      id: &apos;3,
      title: 'Cybersecurity Enhancement for Healthcare,
      client: 'MediCare Plus,
      industry: &apos;Healthcare,
      challenge: &apos;Increasing cyber threats and need for HIPAA compliance in patient data protection.,
      solution: &apos;Comprehensive security audit and implementation of zero-trust architecture with advanced threat detection.,
      results: [
        &apos;100% HIPAA compliance achieved,
        &apos;Zero security breaches in 12 months,
        &apos;Real-time threat detection and response,
        Automated compliance reporting
      ],
      image: &apos;/images/case-studies/cybersecurity-healthcare.jpg,
      duration: &apos;4 months,
      team: &apos;10 specialists});)
},
    {
      id: &apos;4,
      title: 'Machine Learning for Predictive Analytics,
      client: 'RetailMax,
      industry: &apos;Retail,
      challenge: &apos;Inventory management inefficiencies leading to stockouts and overstock situations.,
      solution: &apos;ML-powered demand forecasting system with real-time inventory optimization.,
      results: [
        &apos;40% reduction in stockouts,
        &apos;25% decrease in excess inventory,
        &apos;15% increase in revenue,
        Real-time demand prediction accuracy of 92%
    {
      id: &apos;5,
      title: 'Digital Transformation for Manufacturing,
      client: 'ManufacturingPro,
      industry: &apos;Manufacturing,
      challenge: &apos;Legacy systems causing operational inefficiencies and high maintenance costs.,
      solution: &apos;Complete cloud migration with microservices architecture and AI optimization.,
      results: [
        &apos;50% reduction in infrastructure costs,
        &apos;99.9% uptime achieved,
        &apos;3x faster application deployment,
        Scalable infrastructure for future growth
      ],
      image: &apos;/images/case-studies/digital-transformation.jpg,
      duration: &apos;8 months,
      team: &apos;15 specialists    },
    {
      id: &apos;6,
      title: 'Blockchain Integration for Supply Chain,
      client: 'GlobalLogistics,
      industry: &apos;Logistics,
      challenge: &apos;Lack of transparency and traceability in complex supply chain operations.,
      solution: &apos;Blockchain-based supply chain tracking system with smart contracts and real-time verification.,
      results: [
        &apos;Complete supply chain transparency,
        &apos;60% reduction in disputes,
        &apos;Real-time shipment tracking,
        &apos;Automated compliance verification
      ],
      image: &apos;/images/case-studies/blockchain-supply-chain.jpg,
      duration: &apos;7 months,
      team: &apos;11 specialists    }

  const stats = [;
    { label: &apos;Projects Completed&apos;, value: &apos;150+, icon: Circle },
    { label: &apos;Client Satisfaction&apos;, value: &apos;98%, icon: User,
    { label: &apos;Team Members&apos;, value: &apos;50+, icon: User,
    { label: &apos;Industry s&apos;, value: &apos;25+, icon: User  ];
{/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
    <>
  </>
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies. See how we've helped businesses transform their operations and achieve remarkable results. />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT transformation, business results, client testimonials />
        <meta property="og:title" content="Case Studies - Zion Tech Group />
        <meta property="og:description" content="Success stories from our AI and IT solutions />
        <meta property="og:type" content="website />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}

        <section className="py-20 px-4>
          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400>Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12>
              Discover how weve helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
          </div>
        </section>

        {/* Stats Section */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <span className="block">Team: {study.teamSize}</span>
                      <span className="block">Duration: {study.duration}</span>
                    </div>
                    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors">
                      View Details
                      <Right className="w-4 h-4" />
                    </button>
                  </div>
                </div>
<div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
                    <div className="text-center text-white">
                      <div className="text-6xl font-bold mb-4">{study.results.roi}</div>
                      <div className="text-2xl font-semibold mb-2">Return on Investment</div>
                      <div className="text-lg opacity-75 mb-8">{study.company}</div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                          <div className="text-xl font-bold">{study.results.conversion}</div>
                          <div className="text-sm opacity-75">Conversion Rate</div>
                        </div>
                        <div className="text-center">
                          <className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                          <div className="text-xl font-bold">{study.results.revenue}</div>
                          <div className="text-sm opacity-75">Revenue Increase</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (

                <div key={index} className="text-center>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4>
                    <stat.icon className="w-8 h-8 text-white />
        {/* Case Studies Grid */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8>
              {caseStudies.map((study) => (

                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 group>
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 relative>
                    <div className="absolute inset-0 bg-black/20></div>
                    <div className="absolute bottom-4 left-4 right-4>
                      <div className="flex items-center gap-2 text-white text-sm>
                        <span className="bg-purple-500 px-3 py-1 rounded-full>{study.industry}</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full>{study.duration}</span>
                      </div>                    </div>
                    <div className="mb-6>
                      <h4 className="text-lg font-semibold text-white mb-3>Results</h4>
                      <ul className="space-y-2>
                        {study.results.map((result, index) => (

                          <li key={index} className="flex items-center text-gray-300 text-sm>
                            <Circle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 />

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20>
              <h2 className="text-3xl font-bold text-white mb-6>
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8>
                Lets discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <to="/contact
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105
                >
                  Get Started Today
                  <className="w-5 h-5 />
                </>
                <to="/services
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300
                >
                  Explore Our Services
                </>
              </div>
            </div>
          </div>

  );  ));)
export default CaseStudiesPage;
