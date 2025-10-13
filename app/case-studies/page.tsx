import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRightIcon,
  ChartBarIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "E-commerce AI Optimization",
      client: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Low conversion rates and high cart abandonment",
      solution: "AI-powered recommendation engine and personalized shopping experience",
      results: [
        "40% increase in conversion rates",
        "25% reduction in cart abandonment",
        "60% improvement in customer engagement"
      ],
      icon: CpuChipIcon
    },
    {
      title: "Cloud Migration & Security",
      client: "FinanceCorp",
      industry: "Financial Services",
      challenge: "Legacy system migration and compliance requirements",
      solution: "Secure cloud migration with automated compliance monitoring",
      results: [
        "50% reduction in infrastructure costs",
        "99.9% uptime achieved",
        "Full compliance with financial regulations"
      ],
      icon: CloudIcon
    },
    {
      title: "AI-Powered Analytics Dashboard",
      client: "ManufacturingPro",
      industry: "Manufacturing",
      challenge: "Manual data analysis and poor operational visibility",
      solution: "Real-time AI analytics platform with predictive insights",
      results: [
        "30% improvement in operational efficiency",
        "20% reduction in downtime",
        "15% increase in production output"
      ],
      icon: ChartBarIcon
    },
    {
      title: "Cybersecurity Enhancement",
      client: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Increasing cyber threats and compliance requirements",
      solution: "Comprehensive security suite with AI threat detection",
      results: [
        "95% reduction in security incidents",
        "100% compliance with HIPAA",
        "24/7 automated threat monitoring"
      ],
      icon: ShieldCheckIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful client projects and see how we've helped businesses transform with AI and technology solutions." />
        <meta name="keywords" content="case studies, client success, AI projects, technology solutions, business transformation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Real results from real clients
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries transform their operations 
              and achieve remarkable results with our AI and technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our solutions have transformed businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <div className="flex items-center gap-4 text-gray-400">
                        <span>{study.client}</span>
                        <span>•</span>
                        <span>{study.industry}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-green-400 flex items-center">
                          <ArrowRightIcon className="w-4 h-4 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "25+", label: "Happy Clients" },
              { number: "99%", label: "Success Rate" },
              { number: "40%", label: "Average ROI" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how we can help transform your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}