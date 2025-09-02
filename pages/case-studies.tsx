import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Enterprise Cloud Migration: 50% Cost Reduction",
      client: "Fortune 500 Manufacturing Company",
      industry: "Manufacturing",
      challenge: "Legacy on-premise infrastructure causing high maintenance costs and scalability issues",
      solution: "Complete cloud migration with microservices architecture and automated scaling",
      results: [
        "50% reduction in infrastructure costs",
        "99.9% uptime achieved",
        "3x faster deployment cycles",
        "40% improvement in system performance"
      ],
      image: "/images/case-studies/cloud-migration.jpg",
      duration: "6 months",
      teamSize: "12 engineers",
      technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins"]
    },
    {
      id: 2,
      title: "AI-Powered Customer Service Automation",
      client: "Leading E-commerce Platform",
      industry: "E-commerce",
      challenge: "High customer service costs and inconsistent response times",
      solution: "Custom AI chatbot with natural language processing and human escalation",
      results: [
        "70% reduction in support tickets",
        "24/7 customer service availability",
        "85% customer satisfaction rate",
        "60% cost savings on support operations"
      ],
      image: "/images/case-studies/ai-customer-service.jpg",
      duration: "4 months",
      teamSize: "8 engineers",
      technologies: ["Python", "TensorFlow", "NLP", "React", "Node.js"]
    },
    {
      id: 3,
      title: "Cybersecurity Transformation for Financial Services",
      client: "Regional Bank",
      industry: "Financial Services",
      challenge: "Outdated security infrastructure vulnerable to modern cyber threats",
      solution: "Comprehensive security overhaul with zero-trust architecture",
      results: [
        "100% compliance with financial regulations",
        "Zero security incidents post-implementation",
        "50% faster threat detection",
        "Automated compliance reporting"
      ],
      image: "/images/case-studies/cybersecurity-bank.jpg",
      duration: "8 months",
      teamSize: "15 engineers",
      technologies: ["SIEM", "Zero Trust", "Multi-factor Auth", "Encryption", "Monitoring"]
    },
    {
      id: 4,
      title: "Micro SaaS Platform for Small Businesses",
      client: "Local Business Network",
      industry: "Business Services",
      challenge: "Need for affordable, scalable business management tools",
      solution: "Custom micro SaaS platform with modular architecture",
      results: [
        "500+ active users in first year",
        "95% user retention rate",
        "$2M ARR achieved",
        "Scalable to 10,000+ users"
      ],
      image: "/images/case-studies/micro-saas.jpg",
      duration: "5 months",
      teamSize: "6 engineers",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"]
    },
    {
      id: 5,
      title: "Data Analytics Dashboard for Healthcare",
      client: "Regional Healthcare System",
      industry: "Healthcare",
      challenge: "Fragmented data systems preventing effective patient care insights",
      solution: "Unified data platform with real-time analytics and predictive modeling",
      results: [
        "30% improvement in patient outcomes",
        "Real-time data insights",
        "Predictive analytics for patient care",
        "HIPAA compliant data handling"
      ],
      image: "/images/case-studies/healthcare-analytics.jpg",
      duration: "7 months",
      teamSize: "10 engineers",
      technologies: ["Python", "Tableau", "Apache Kafka", "Machine Learning", "HIPAA Compliance"]
    },
    {
      id: 6,
      title: "DevOps Automation for Software Company",
      client: "Growing Software Startup",
      industry: "Software Development",
      challenge: "Manual deployment processes causing delays and errors",
      solution: "Complete CI/CD pipeline with automated testing and deployment",
      results: [
        "90% reduction in deployment time",
        "Zero downtime deployments",
        "Automated testing coverage",
        "10x faster feature delivery"
      ],
      image: "/images/case-studies/devops-automation.jpg",
      duration: "3 months",
      teamSize: "5 engineers",
      technologies: ["Jenkins", "Docker", "Kubernetes", "GitLab CI", "Monitoring"]
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "150+", icon: CheckCircle },
    { label: "Client Satisfaction", value: "98%", icon: TrendingUp },
    { label: "Team Members", value: "50+", icon: Users },
    { label: "Years Experience", value: "10+", icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful technology implementations and client results. See how Zion Tech Group delivers measurable business value through innovative solutions." />
        <meta name="keywords" content="case studies, client success, technology implementation, business results, project outcomes" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories & Client Results
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-2">{study.industry}</div>
                    <div className="text-sm opacity-90">{study.client}</div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{study.teamSize}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;