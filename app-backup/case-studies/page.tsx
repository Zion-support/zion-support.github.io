import React from 'react';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform Transformation",
      client: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Legacy system struggling with inventory management and customer personalization",
      solution: "Implemented AI-driven inventory optimization and personalized recommendation engine",
      results: [
        "40% increase in conversion rates",
        "60% reduction in inventory costs",
        "85% improvement in customer satisfaction"
      ],
      technologies: ["Machine Learning", "React", "Node.js", "AWS"],
      image: "🛒",
      duration: "6 months"
    },
    {
      id: 2,
      title: "Cloud Migration for Financial Services",
      client: "SecureBank",
      industry: "Financial Services",
      challenge: "On-premises infrastructure limiting scalability and increasing operational costs",
      solution: "Complete cloud migration with enhanced security and compliance measures",
      results: [
        "50% reduction in infrastructure costs",
        "99.9% uptime achieved",
        "3x faster deployment cycles"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "🏦",
      duration: "8 months"
    },
    {
      id: 3,
      title: "Cybersecurity Enhancement for Healthcare",
      client: "MediCare Systems",
      industry: "Healthcare",
      challenge: "Increasing cyber threats and compliance requirements for patient data",
      solution: "Comprehensive security audit and implementation of advanced threat detection",
      results: [
        "Zero security breaches in 12 months",
        "100% compliance with HIPAA regulations",
        "75% faster incident response time"
      ],
      technologies: ["SIEM", "Penetration Testing", "Compliance", "Monitoring"],
      image: "🏥",
      duration: "4 months"
    },
    {
      id: 4,
      title: "Digital Transformation for Manufacturing",
      client: "AutoParts Manufacturing",
      industry: "Manufacturing",
      challenge: "Manual processes causing inefficiencies and quality control issues",
      solution: "IoT integration and automated quality control systems",
      results: [
        "30% increase in production efficiency",
        "45% reduction in defects",
        "25% cost savings in quality control"
      ],
      technologies: ["IoT", "Machine Learning", "Cloud Computing", "Analytics"],
      image: "🏭",
      duration: "10 months"
    },
    {
      id: 5,
      title: "Data Analytics Platform for Marketing",
      client: "Digital Marketing Pro",
      industry: "Marketing",
      challenge: "Fragmented data sources and lack of actionable insights",
      solution: "Unified data platform with real-time analytics and predictive modeling",
      results: [
        "200% improvement in campaign ROI",
        "50% reduction in data processing time",
        "90% increase in data accuracy"
      ],
      technologies: ["Big Data", "Python", "Apache Spark", "Machine Learning"],
      image: "📊",
      duration: "5 months"
    },
    {
      id: 6,
      title: "Mobile App Development for Logistics",
      client: "FastLogistics",
      industry: "Logistics",
      challenge: "Outdated tracking system and poor driver communication",
      solution: "Modern mobile app with real-time tracking and communication features",
      results: [
        "60% improvement in delivery efficiency",
        "80% increase in customer satisfaction",
        "35% reduction in operational costs"
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "Real-time APIs"],
      image: "🚚",
      duration: "7 months"
    }
  ];

  const industries = [
    "All",
    "E-commerce",
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Marketing",
    "Logistics"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses 
            across various industries achieve their digital transformation goals.
          </p>
        </div>

        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                industry === "All"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{study.image}</span>
                  <div>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                      {study.industry}
                    </span>
                    <div className="text-sm text-gray-500 mt-1">{study.duration}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {study.title}
                </h3>
                
                <p className="text-blue-600 font-medium mb-3">{study.client}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-1">Challenge:</h4>
                  <p className="text-gray-600 text-sm mb-3">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-700 mb-1">Solution:</h4>
                  <p className="text-gray-600 text-sm mb-3">{study.solution}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Full Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-blue-100 mb-6">
            Let's discuss how we can help transform your business with our proven solutions.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Get Started
            </Link>
            <Link 
              href="/services" 
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors inline-block"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}