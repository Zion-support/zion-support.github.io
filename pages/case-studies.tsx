import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle, Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Healthcare AI Platform Transformation",
      client: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Manual patient data analysis was taking 40+ hours per week, leading to delayed diagnoses and treatment plans.",
      solution: "Developed an AI-powered diagnostic platform that analyzes medical images and patient data in real-time.",
      results: [
        "95% reduction in analysis time",
        "40% improvement in diagnostic accuracy",
        "$2.3M annual cost savings",
        "99.9% system uptime"
      ],
      technologies: ["Machine Learning", "Computer Vision", "Cloud Computing", "API Integration"],
      duration: "6 months",
      team: "8 specialists",
      image: "/case-studies/healthcare-ai.jpg",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Platform Migration to Cloud",
      client: "RetailMax",
      industry: "E-commerce",
      challenge: "Legacy on-premise infrastructure couldn't handle peak traffic, causing frequent downtime and lost sales.",
      solution: "Migrated entire platform to AWS with auto-scaling capabilities and implemented microservices architecture.",
      results: [
        "300% increase in peak traffic capacity",
        "99.99% uptime achieved",
        "60% reduction in infrastructure costs",
        "50% faster page load times"
      ],
      technologies: ["AWS", "Kubernetes", "Docker", "Microservices"],
      duration: "4 months",
      team: "12 specialists",
      image: "/case-studies/ecommerce-cloud.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Financial Services Cybersecurity Overhaul",
      client: "SecureBank",
      industry: "Financial Services",
      challenge: "Multiple security breaches exposed vulnerabilities in their legacy security infrastructure.",
      solution: "Implemented zero-trust security architecture with advanced threat detection and response systems.",
      results: [
        "100% security incident prevention",
        "Real-time threat detection",
        "Compliance with all regulations",
        "24/7 security monitoring"
      ],
      technologies: ["Zero Trust", "SIEM", "AI Security", "Blockchain"],
      duration: "8 months",
      team: "15 specialists",
      image: "/case-studies/cybersecurity.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Manufacturing IoT Integration",
      client: "SmartManufacturing Co.",
      industry: "Manufacturing",
      challenge: "Manual production monitoring led to inefficiencies and quality control issues.",
      solution: "Deployed IoT sensors and AI analytics to create a smart manufacturing ecosystem.",
      results: [
        "25% increase in production efficiency",
        "90% reduction in quality defects",
        "Predictive maintenance capabilities",
        "$1.8M annual savings"
      ],
      technologies: ["IoT", "Edge Computing", "Predictive Analytics", "Machine Learning"],
      duration: "5 months",
      team: "10 specialists",
      image: "/case-studies/manufacturing-iot.jpg",
      featured: false
    },
    {
      id: 5,
      title: "SaaS Platform Development",
      client: "TechStartup Inc.",
      industry: "Technology",
      challenge: "Needed a scalable SaaS platform to serve 100,000+ users with complex workflow management.",
      solution: "Built a cloud-native SaaS platform with advanced workflow automation and real-time collaboration features.",
      results: [
        "150,000+ active users",
        "99.95% uptime",
        "Sub-second response times",
        "$5M ARR achieved"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      duration: "10 months",
      team: "20 specialists",
      image: "/case-studies/saas-platform.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Data Analytics Platform for Retail",
      client: "RetailChain",
      industry: "Retail",
      challenge: "Lack of real-time insights into customer behavior and inventory management.",
      solution: "Developed a comprehensive data analytics platform with predictive modeling and real-time dashboards.",
      results: [
        "35% increase in sales",
        "20% reduction in inventory costs",
        "Real-time customer insights",
        "Automated demand forecasting"
      ],
      technologies: ["Big Data", "Machine Learning", "Data Visualization", "Cloud Computing"],
      duration: "7 months",
      team: "14 specialists",
      image: "/case-studies/retail-analytics.jpg",
      featured: false
    }
  ];

  const featuredCaseStudy = caseStudies.find(study => study.featured);
  const regularCaseStudies = caseStudies.filter(study => !study.featured);

  const stats = [
    { number: "500+", label: "Projects Completed", icon: TrendingUp },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Industries Served", icon: Users },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful technology implementations and digital transformation projects. Real results from real clients across various industries."
      keywords="case studies, technology projects, digital transformation, AI implementation, cloud migration, cybersecurity"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Real results from real clients. Discover how we've helped businesses 
              transform their operations with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {featuredCaseStudy && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Study</h2>
                <p className="text-xl text-gray-600">Our most impactful project to date</p>
              </div>

              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">Featured Project Image</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {featuredCaseStudy.industry}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredCaseStudy.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    <strong>Client:</strong> {featuredCaseStudy.client}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-600 mb-6">{featuredCaseStudy.challenge}</p>
                      
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Solution</h4>
                      <p className="text-gray-600">{featuredCaseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="space-y-2">
                        {featuredCaseStudy.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap gap-4 mb-4">
                      {featuredCaseStudy.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredCaseStudy.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {featuredCaseStudy.team}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Case Studies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">All Case Studies</h2>
              <p className="text-xl text-gray-600">Explore our complete portfolio of successful projects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularCaseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                    <span className="text-white font-semibold">Project Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-4">
                      <strong>Client:</strong> {study.client}
                    </p>
                    <p className="text-gray-600 mb-4 line-clamp-3">{study.challenge}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="text-gray-500 text-xs">+{study.technologies.length - 3} more</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {study.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {study.team}
                        </div>
                      </div>
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                      >
                        Read More
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the ranks of successful businesses that have transformed their operations 
              with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default CaseStudies;