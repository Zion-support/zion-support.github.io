import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: "AI-Powered E-commerce Optimization",
      client: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Low conversion rates and high cart abandonment",
      solution: "Implemented AI recommendation engine and personalized shopping experience",
      results: [
        "45% increase in conversion rates",
        "30% reduction in cart abandonment",
        "60% improvement in customer engagement",
        "$2.3M additional revenue in 6 months"
      ],
      duration: "6 months",
      investment: "$150,000",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Cybersecurity Transformation",
      client: "FinanceCorp",
      industry: "Financial Services",
      challenge: "Multiple security breaches and compliance issues",
      solution: "Comprehensive cybersecurity overhaul with AI threat detection",
      results: [
        "Zero security incidents in 12 months",
        "100% compliance with industry standards",
        "50% reduction in security response time",
        "40% cost savings on security operations"
      ],
      duration: "8 months",
      investment: "$300,000",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Manufacturing Process Automation",
      client: "AutoParts Manufacturing",
      industry: "Manufacturing",
      challenge: "Manual processes causing delays and errors",
      solution: "AI-powered automation and predictive maintenance system",
      results: [
        "70% reduction in manual processes",
        "25% increase in production efficiency",
        "90% reduction in equipment downtime",
        "$1.8M annual cost savings"
      ],
      duration: "10 months",
      investment: "$250,000",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Healthcare Data Analytics",
      client: "MedCenter Health",
      industry: "Healthcare",
      challenge: "Inefficient patient data analysis and treatment optimization",
      solution: "AI-powered analytics platform for patient insights and treatment recommendations",
      results: [
        "35% improvement in treatment outcomes",
        "50% faster diagnosis times",
        "40% reduction in readmission rates",
        "60% increase in operational efficiency"
      ],
      duration: "12 months",
      investment: "$400,000",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Supply Chain Optimization",
      client: "Global Logistics Co.",
      industry: "Logistics",
      challenge: "Inefficient supply chain management and high costs",
      solution: "AI-driven supply chain optimization and predictive analytics",
      results: [
        "30% reduction in logistics costs",
        "45% improvement in delivery times",
        "25% increase in customer satisfaction",
        "$3.2M annual savings"
      ],
      duration: "9 months",
      investment: "$200,000",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Customer Service Automation",
      client: "ServicePro Solutions",
      industry: "Professional Services",
      challenge: "High customer service costs and long response times",
      solution: "AI chatbot and automated customer service platform",
      results: [
        "80% reduction in response time",
        "50% decrease in service costs",
        "90% customer satisfaction rate",
        "24/7 automated support coverage"
      ],
      duration: "4 months",
      investment: "$100,000",
      image: "/api/placeholder/600/400"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "$50M+", label: "Client Savings" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI and IT solutions that transformed businesses across various industries." />
        <meta name="keywords" content="case studies, AI solutions, IT services, success stories, business transformation, client results" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions. 
              Real results from real clients.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all duration-300 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-purple-400 font-medium">{study.industry}</span>
                    <div className="flex items-center text-sm text-gray-400">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-400 mb-2"><strong>Client:</strong> {study.client}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <div className="flex items-center text-sm text-gray-400">
                      <CurrencyDollarIcon className="w-4 h-4 mr-1" />
                      Investment: {study.investment}
                    </div>
                    <Link 
                      to="/contact"
                      className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
