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
      title: 'AI-Powered E-commerce Transformation',
      client: 'TechRetail Corp',
      industry: 'E-commerce',
      duration: '6 months',
      challenge: 'Low conversion rates and poor customer experience on their online platform',
      solution: 'Implemented AI-powered recommendation engine, automated customer service, and personalized shopping experience',
      results: [
        'Increased conversion rates by 45%',
        'Reduced customer service costs by 60%',
        'Improved customer satisfaction scores by 35%',
        'Generated $2.3M additional revenue'
      ],
      technologies: ['React', 'Node.js', 'TensorFlow', 'MongoDB', 'AWS']
    },
    {
      id: '2',
      title: 'Enterprise Cybersecurity Overhaul',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      duration: '4 months',
      challenge: 'Outdated security infrastructure vulnerable to modern cyber threats',
      solution: 'Deployed comprehensive cybersecurity suite with AI-powered threat detection and automated response systems',
      results: [
        'Eliminated 99.9% of security incidents',
        'Reduced response time to threats by 85%',
        'Achieved SOC 2 Type II compliance',
        'Saved $1.8M in potential breach costs'
      ],
      technologies: ['Python', 'Docker', 'Kubernetes', 'Elasticsearch', 'Azure']
    },
    {
      id: '3',
      title: 'Cloud Migration & Optimization',
      client: 'ManufacturingPlus Inc',
      industry: 'Manufacturing',
      duration: '8 months',
      challenge: 'Legacy on-premise systems causing operational inefficiencies and high maintenance costs',
      solution: 'Migrated entire infrastructure to cloud with microservices architecture and automated CI/CD pipelines',
      results: [
        'Reduced infrastructure costs by 40%',
        'Improved system reliability by 95%',
        'Decreased deployment time by 80%',
        'Enhanced scalability for future growth'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins']
    },
    {
      id: '4',
      title: 'AI-Driven Healthcare Analytics',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      duration: '5 months',
      challenge: 'Manual data analysis processes causing delays in patient care and research',
      solution: 'Developed AI-powered analytics platform for real-time patient monitoring and predictive healthcare insights',
      results: [
        'Reduced diagnosis time by 50%',
        'Improved patient outcomes by 30%',
        'Enhanced research capabilities by 200%',
        'Achieved HIPAA compliance'
      ],
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'React', 'Docker']
    },
    {
      id: '5',
      title: '5G Network Implementation',
      client: 'SmartCity Corp',
      industry: 'Smart Cities',
      duration: '12 months',
      challenge: 'Need for ultra-fast, low-latency connectivity for smart city infrastructure',
      solution: 'Designed and implemented comprehensive 5G network infrastructure with edge computing capabilities',
      results: [
        'Achieved 10x faster data speeds',
        'Reduced latency to under 1ms',
        'Enabled real-time IoT applications',
        'Supported 100,000+ connected devices'
      ],
      technologies: ['5G', 'Edge Computing', 'IoT', 'Python', 'Kubernetes']
    },
    {
      id: '6',
      title: 'Blockchain Supply Chain Solution',
      client: 'GlobalLogistics Ltd',
      industry: 'Logistics',
      duration: '7 months',
      challenge: 'Lack of transparency and traceability in global supply chain operations',
      solution: 'Implemented blockchain-based supply chain tracking system with smart contracts and real-time monitoring',
      results: [
        'Achieved 100% supply chain transparency',
        'Reduced fraud incidents by 90%',
        'Improved delivery accuracy by 25%',
        'Enhanced customer trust and satisfaction'
      ],
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'Node.js', 'MongoDB']
    }
  ];

  const industries = [
    "All Industries",
    "E-commerce",
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Education",
    "Technology",
    "Energy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta
          name="description"
          content="Explore our successful case studies and client transformations. See how Zion Tech Group has helped businesses achieve digital transformation with AI, cloud, and emerging technologies."
        />
        <meta
          name="keywords"
          content="case studies, success stories, client results, digital transformation, AI solutions, cloud migration, cybersecurity"
        />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Target className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Proven Success Stories</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Case Studies
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              {" "}
              & Success Stories
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their operations with cutting-edge technology solutions. 
            From AI implementations to cloud migrations, see the real impact of our work.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <span className="flex items-center">
                        <Globe className="w-4 h-4 mr-1" />
                        {study.client}
                      </span>
                      <span className="flex items-center">
                        <Shield className="w-4 h-4 mr-1" />
                        {study.industry}
                      </span>
                      <span>{study.duration}</span>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                    <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the ranks of successful businesses that have transformed their operations with our technology solutions. 
            Let's discuss how we can help you achieve similar results.
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
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Explore Our Services
              <Target className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;