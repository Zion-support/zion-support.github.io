import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Star, Globe, Shield, CheckCircle } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

const CaseStudiesPage = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'Global E-commerce Giant',
      industry: 'E-commerce',
      duration: '6 months',
      challenge: 'High customer service volume with inconsistent response quality and long wait times.',
      solution: 'Implemented AI-powered chatbots and intelligent routing system with natural language processing.',
      results: [
        '85% reduction in response time',
        '90% customer satisfaction improvement',
        '60% cost reduction in support operations',
        '24/7 multilingual support capability'
      ],
      technologies: ['AI/ML', 'Natural Language Processing', 'Cloud Infrastructure', 'API Integration']
    },
    {
      id: '2',
      title: 'Cloud Migration and Digital Transformation',
      client: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      duration: '12 months',
      challenge: 'Legacy systems causing operational inefficiencies and scalability limitations.',
      solution: 'Complete cloud migration with modern microservices architecture and real-time analytics.',
      results: [
        '99.9% system uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster data processing',
        'Seamless remote work capabilities'
      ],
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Microservices', 'Real-time Analytics']
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement and Compliance',
      client: 'Financial Services Leader',
      industry: 'Financial Services',
      duration: '8 months',
      challenge: 'Increasing cyber threats and regulatory compliance requirements.',
      solution: 'Comprehensive security framework with AI-powered threat detection and automated compliance monitoring.',
      results: [
        'Zero security breaches since implementation',
        '100% compliance with industry regulations',
        '75% faster threat detection',
        'Automated compliance reporting'
      ],
      technologies: ['AI Security', 'Zero Trust Architecture', 'SIEM', 'Compliance Automation']
    },
    {
      id: '4',
      title: 'Data Analytics and Business Intelligence Platform',
      client: 'Healthcare Technology Company',
      industry: 'Healthcare',
      duration: '10 months',
      challenge: 'Fragmented data sources preventing effective decision-making and patient care optimization.',
      solution: 'Integrated data platform with advanced analytics and predictive modeling capabilities.',
      results: [
        '40% improvement in patient outcomes',
        'Real-time data insights across all departments',
        'Predictive analytics for patient care',
        'Streamlined reporting and compliance'
      ],
      technologies: ['Big Data', 'Machine Learning', 'Data Visualization', 'Predictive Analytics']
    },
    {
      id: '5',
      title: '5G Network Implementation for Smart City',
      client: 'Municipal Government',
      industry: 'Government',
      duration: '18 months',
      challenge: 'Need for high-speed connectivity to support smart city initiatives and IoT infrastructure.',
      solution: 'Comprehensive 5G network deployment with edge computing and IoT integration.',
      results: [
        '10x faster data transmission',
        'Support for 100,000+ IoT devices',
        'Real-time city monitoring capabilities',
        'Enhanced public services delivery'
      ],
      technologies: ['5G', 'Edge Computing', 'IoT', 'Smart City Solutions']
    },
    {
      id: '6',
      title: 'Micro SAAS Platform Development',
      client: 'Growing Tech Startup',
      industry: 'Technology',
      duration: '4 months',
      challenge: 'Need for rapid deployment of specialized business tools without extensive development time.',
      solution: 'Custom micro SAAS platform with modular architecture and rapid deployment capabilities.',
      results: [
        '80% faster time-to-market for new features',
        'Scalable architecture supporting 10x growth',
        'Reduced development costs by 60%',
        'Easy integration with existing systems'
      ],
      technologies: ['Microservices', 'API Gateway', 'Containerization', 'Cloud Native']
    }
  ];

  const industries = [
    "E-commerce",
    "Manufacturing", 
    "Financial Services",
    "Healthcare",
    "Government",
    "Education",
    "Technology",
    "Energy"
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta
          name="description"
          content="Explore our successful case studies and client transformations. Real results from AI implementation, cloud migration, cybersecurity, and digital transformation projects."
        />
        <meta
          name="keywords"
          content="case studies, success stories, AI implementation, cloud migration, cybersecurity, digital transformation, client results, technology solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Case Studies
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Real success stories from our technology implementations. See how we've helped businesses transform their operations with cutting-edge solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our technology solutions have transformed businesses across various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{study.client} • {study.industry}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Duration: {study.duration}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>Success</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expertise spans across multiple industries, delivering tailored solutions for each sector's unique challenges.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Shield className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;