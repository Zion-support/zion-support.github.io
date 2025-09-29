import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, DollarSign, Clock, Users, Award, Target } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CaseStudies(): React.JSX.Element {
  const caseStudies = [
    {
      id: "fintech-ai-automation",
      title: "Fortune 500 Fintech: 40% Cost Reduction with AI Automation",
      company: "Global Financial Services",
      industry: "Financial Technology",
      challenge: "Manual document processing was taking 40+ hours per week and causing delays in loan approvals.",
      solution: "Implemented AI-powered document processing and automated workflow systems.",
      results: {
        costReduction: "40%",
        timeSaved: "35 hours/week",
        accuracy: "99.2%",
        roi: "300%"
      },
      category: "AI Automation",
      duration: "3 months",
      teamSize: "8 engineers"
    },
    {
      id: "ecommerce-cloud-migration",
      title: "E-commerce Platform: Seamless Cloud Migration with Zero Downtime",
      company: "RetailTech Solutions",
      industry: "E-commerce",
      challenge: "Legacy on-premises infrastructure couldn't handle Black Friday traffic spikes.",
      solution: "Migrated to AWS with auto-scaling, CDN implementation, and database optimization.",
      results: {
        performance: "300% faster",
        uptime: "99.99%",
        scalability: "10x capacity",
        costSavings: "25%"
      },
      category: "Cloud Migration",
      duration: "6 months",
      teamSize: "12 engineers"
    },
    {
      id: "healthcare-cybersecurity",
      title: "Healthcare Provider: Zero-Trust Security Implementation",
      company: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "HIPAA compliance gaps and increasing cybersecurity threats.",
      solution: "Implemented comprehensive zero-trust architecture with continuous monitoring.",
      results: {
        securityScore: "95%",
        incidentsReduced: "90%",
        complianceScore: "100%",
        responseTime: "2 minutes"
      },
      category: "Cybersecurity",
      duration: "4 months",
      teamSize: "6 engineers"
    },
    {
      id: "manufacturing-iot-analytics",
      title: "Manufacturing: IoT Analytics for Predictive Maintenance",
      company: "Industrial Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Unexpected equipment failures causing production delays and high maintenance costs.",
      solution: "Deployed IoT sensors with machine learning for predictive maintenance.",
      results: {
        downtimeReduced: "60%",
        maintenanceCosts: "35% savings",
        efficiency: "25% improvement",
        predictionAccuracy: "92%"
      },
      category: "IoT & Analytics",
      duration: "5 months",
      teamSize: "10 engineers"
    },
    {
      id: "saas-platform-optimization",
      title: "SaaS Platform: Performance Optimization and Cost Reduction",
      company: "Cloud Software Inc",
      industry: "SaaS",
      challenge: "High infrastructure costs and slow application performance affecting user experience.",
      solution: "Database optimization, caching strategies, and Kubernetes deployment.",
      results: {
        performance: "400% faster",
        costs: "50% reduction",
        userSatisfaction: "4.8/5 stars",
        scalability: "Unlimited"
      },
      category: "Performance Optimization",
      duration: "2 months",
      teamSize: "5 engineers"
    },
    {
      id: "logistics-data-platform",
      title: "Logistics Company: Real-time Data Platform for Operations",
      company: "Global Logistics Ltd",
      industry: "Logistics",
      challenge: "Fragmented data systems making real-time decision making impossible.",
      solution: "Built unified data platform with real-time analytics and machine learning.",
      results: {
        decisionTime: "80% faster",
        accuracy: "98% improvement",
        costSavings: "30%",
        efficiency: "45% boost"
      },
      category: "Data Platform",
      duration: "7 months",
      teamSize: "15 engineers"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Projects Completed" },
    { icon: Award, value: "99%", label: "Client Satisfaction" },
    { icon: DollarSign, value: "$50M+", label: "Cost Savings Delivered" },
    { icon: TrendingUp, value: "300%", label: "Average ROI" },
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Client Success Stories</title>
        <meta
          name="description"
          content="Explore our successful client implementations across AI automation, cloud migration, cybersecurity, and digital transformation."
        />
        <meta
          name="keywords"
          content="case studies, client success, AI implementation, cloud migration, cybersecurity, digital transformation"
        />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta
          property="og:description"
          content="Client success stories and implementation results"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies - Zion Tech Group" />
        <meta
          name="twitter:description"
          content="Client success stories and implementation results"
        />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 border border-zion-cyan/30">
              <Award className="w-4 h-4 mr-2" />
              Proven Results
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Real results from real clients. See how we've helped companies across industries 
              transform their operations with cutting-edge technology solutions.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <stat.icon className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-zion-slate-light text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-zion-cyan bg-zion-cyan/20 px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                    <div className="flex items-center text-xs text-zion-slate-light">
                      <Clock className="w-3 h-3 mr-1" />
                      {study.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="text-sm text-zion-slate-light mb-1">Company:</div>
                    <div className="text-sm text-white font-medium">{study.company}</div>
                    <div className="text-xs text-zion-slate">{study.industry}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-zion-slate-light mb-1">Challenge:</div>
                    <p className="text-sm text-white/80 line-clamp-2">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-zion-slate-light mb-1">Solution:</div>
                    <p className="text-sm text-white/80 line-clamp-2">{study.solution}</p>
                  </div>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {Object.entries(study.results).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-zion-cyan">{value}</div>
                        <div className="text-xs text-zion-slate-light capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-zion-slate">
                      Team: {study.teamSize}
                    </div>
                    <button className="text-zion-cyan hover:text-white transition-colors text-sm group">
                      Read Full Case Study
                      <ArrowRight className="w-3 h-3 ml-1 inline group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-zion-slate-light mb-8 text-lg">
                Let's discuss how we can help you achieve similar results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}