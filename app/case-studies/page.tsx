<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function caseStudies() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Case Studies solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Advanced case studies solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function CasestudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
=======
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedAccessibility from '../components/EnhancedAccessibility';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import { ArrowRight, CheckCircle, Star, Building, Calendar, Users } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform AI Transformation",
      company: "TechStart Inc.",
      industry: "E-commerce",
      challenge: "Manual inventory management and customer service bottlenecks",
      solution: "AI-powered inventory optimization and automated customer support",
      results: [
        "60% reduction in inventory costs",
        "40% increase in customer satisfaction",
        "80% faster response times",
        "35% increase in sales"
      ],
      image: "/images/case-studies/ecommerce-ai.jpg",
      duration: "6 months",
      services: ["AI Analytics", "AI Customer Support", "Data Analytics"],
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Implementation",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Fragmented patient data and inefficient treatment planning",
      solution: "Comprehensive data analytics platform with predictive modeling",
      results: [
        "50% improvement in treatment outcomes",
        "30% reduction in readmission rates",
        "25% cost savings in operations",
        "90% faster diagnosis times"
      ],
      image: "/images/case-studies/healthcare-analytics.jpg",
      duration: "8 months",
      services: ["Data Analytics", "AI Predictions", "Cloud Infrastructure"],
      featured: true
    },
    {
      id: 3,
      title: "Financial Services AI Integration",
      company: "FinanceCorp",
      industry: "Financial Services",
      challenge: "Manual fraud detection and compliance reporting",
      solution: "AI-powered fraud detection and automated compliance systems",
      results: [
        "95% accuracy in fraud detection",
        "70% reduction in false positives",
        "60% faster compliance reporting",
        "40% cost reduction in operations"
      ],
      image: "/images/case-studies/finance-ai.jpg",
      duration: "4 months",
      services: ["AI Security", "Compliance Automation", "Risk Management"],
      featured: false
    },
    {
      id: 4,
      title: "Manufacturing IoT Implementation",
      company: "ManufacturingPro",
      industry: "Manufacturing",
      challenge: "Inefficient production monitoring and maintenance scheduling",
      solution: "IoT sensors and AI-powered predictive maintenance",
      results: [
        "45% reduction in downtime",
        "30% increase in production efficiency",
        "50% reduction in maintenance costs",
        "25% improvement in product quality"
      ],
      image: "/images/case-studies/manufacturing-iot.jpg",
      duration: "10 months",
      services: ["IoT Development", "AI Analytics", "Predictive Maintenance"],
      featured: false
    },
    {
      id: 5,
      title: "Retail Customer Experience Enhancement",
      company: "RetailMax",
      industry: "Retail",
      challenge: "Poor customer experience and low conversion rates",
      solution: "AI-powered personalization and customer journey optimization",
      results: [
        "55% increase in conversion rates",
        "40% improvement in customer satisfaction",
        "35% increase in average order value",
        "50% reduction in cart abandonment"
      ],
      image: "/images/case-studies/retail-ai.jpg",
      duration: "5 months",
      services: ["AI Personalization", "Customer Analytics", "E-commerce Optimization"],
      featured: false
    },
    {
      id: 6,
      title: "Education Technology Platform",
      company: "EduTech Solutions",
      industry: "Education",
      challenge: "Ineffective learning management and student engagement",
      solution: "AI-powered learning platform with personalized content delivery",
      results: [
        "60% improvement in student engagement",
        "45% increase in learning outcomes",
        "50% reduction in administrative workload",
        "35% improvement in course completion rates"
      ],
      image: "/images/case-studies/education-ai.jpg",
      duration: "7 months",
      services: ["AI Learning", "Content Personalization", "Analytics Platform"],
      featured: false
    }
  ];

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Case Studies - Zion Tech Group | Success Stories"
            description="Explore our success stories and case studies showcasing how Zion Tech Group has helped businesses transform with AI, data analytics, and digital solutions."
            keywords="case studies, success stories, AI implementation, digital transformation, business solutions"
            canonical="https://ziontechgroup.com/case-studies"
          />
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                  <Building className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">Success Stories</span>
                </div>
                
                <FuturisticTextEnhanced
                  variant="display"
                  size="5xl"
                  gradient={true}
                  glow={true}
                  className="mb-6 leading-tight">
                  Case Studies
                </FuturisticTextEnhanced>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Discover how we've helped businesses transform with AI, data analytics, 
                  and digital solutions. Real results from real clients.
                </p>
              </ResponsiveContainer>
            </section>

            {/* Featured Case Studies */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Featured Success Stories
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Explore our most impactful client transformations and the results we've achieved together.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                  {caseStudies.filter(study => study.featured).map((study) => (
                    <FuturisticCardEnhanced
                      key={study.id}
                      className="group hover:scale-105 transition-transform duration-300">
                      <div className="relative overflow-hidden rounded-lg mb-6">
                        <div className="w-full h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                          <Building className="w-16 h-16 text-blue-400" />
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {study.title}
                          </h3>
                          <div className="flex items-center text-gray-400 text-sm mb-2">
                            <Building className="w-4 h-4 mr-2" />
                            {study.company} • {study.industry}
                          </div>
                          <div className="flex items-center text-gray-400 text-sm mb-4">
                            <Calendar className="w-4 h-4 mr-2" />
                            {study.duration}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                          <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, index) => (
                              <li key={index} className="flex items-center text-gray-300 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-4">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {study.services.map((service, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* All Case Studies */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    All Case Studies
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Browse our complete portfolio of successful client transformations
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {caseStudies.map((study) => (
                    <FuturisticCardEnhanced
                      key={study.id}
                      className="group hover:scale-105 transition-transform duration-300">
                      <div className="relative overflow-hidden rounded-lg mb-4">
                        <div className="w-full h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                          <Building className="w-12 h-12 text-blue-400" />
                        </div>
                        {study.featured && (
                          <div className="absolute top-2 right-2">
                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                          {study.title}
                        </h3>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Building className="w-4 h-4 mr-2" />
                          {study.company}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {study.duration}
                        </div>
                        <p className="text-gray-300 text-sm line-clamp-3">
                          {study.challenge}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {study.services.slice(0, 2).map((service, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                              {service}
                            </span>
                          ))}
                          {study.services.length > 2 && (
                            <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
                              +{study.services.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Create Your Success Story?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join the companies that have transformed their business with Zion Tech Group. 
                  Let's discuss how we can help you achieve similar results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right">
                    Start Your Project
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="/services"
                    variant="outline"
                    size="lg"
                    icon={Building}
                    iconPosition="right">
                    View Our Services
                  </FuturisticButtonEnhanced>
                </div>
              </div>
            </section>
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  );
}