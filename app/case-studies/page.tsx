'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Phone, Mail, MapPin, TrendingUp, Users, Award, Globe } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  team: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Inefficient supply chain management leading to 30% inventory waste and delayed deliveries.',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management system.',
      results: [
        'Reduced inventory waste by 45%',
        'Improved delivery times by 60%',
        'Saved $2.5M annually',
        'Increased customer satisfaction by 35%'
      ],
      image: '🏭',
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Healthcare AI Diagnosis System',
      client: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'Manual diagnosis processes causing delays and inconsistent accuracy in patient care.',
      solution: 'Developed AI-powered medical imaging analysis and diagnostic assistance platform.',
      results: [
        'Improved diagnosis accuracy by 40%',
        'Reduced diagnosis time by 50%',
        'Enhanced patient outcomes',
        'Saved 200+ hours monthly'
      ],
      image: '🏥',
      duration: '8 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Financial Fraud Detection Platform',
      client: 'National Bank',
      industry: 'Financial Services',
      challenge: 'Increasing fraud incidents with traditional detection methods missing 25% of cases.',
      solution: 'Built advanced AI fraud detection system with real-time monitoring and machine learning.',
      results: [
        'Detected 95% of fraud attempts',
        'Reduced false positives by 70%',
        'Saved $15M in prevented fraud',
        'Improved customer trust'
      ],
      image: '🏦',
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'Smart City IoT Integration',
      client: 'Metropolitan City',
      industry: 'Government',
      challenge: 'Fragmented city services and inefficient resource management across departments.',
      solution: 'Created integrated IoT platform connecting all city services with AI analytics.',
      results: [
        'Improved service efficiency by 55%',
        'Reduced operational costs by 30%',
        'Enhanced citizen satisfaction',
        'Optimized resource allocation'
      ],
      image: '🏙️',
      duration: '12 months',
      team: '15 specialists'
    },
    {
      id: '5',
      title: 'E-commerce Personalization Engine',
      client: 'Online Retail Giant',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience due to generic recommendations.',
      solution: 'Implemented AI-powered personalization engine with real-time customer behavior analysis.',
      results: [
        'Increased conversion rates by 65%',
        'Improved customer engagement by 80%',
        'Boosted average order value by 45%',
        'Enhanced customer retention'
      ],
      image: '🛒',
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: '6',
      title: 'Manufacturing Quality Control AI',
      client: 'Automotive Parts Manufacturer',
      industry: 'Automotive',
      challenge: 'Manual quality inspection missing 15% of defects and causing production delays.',
      solution: 'Deployed computer vision AI system for automated quality inspection and defect detection.',
      results: [
        'Achieved 99.5% defect detection rate',
        'Reduced inspection time by 75%',
        'Eliminated production delays',
        'Improved product quality'
      ],
      image: '🚗',
      duration: '3 months',
      team: '7 specialists'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered solutions'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Client Satisfaction',
      description: 'Highly satisfied customers'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Industry Awards',
      description: 'Recognition for excellence'
    },
    {
      icon: Globe,
      value: '25+',
      label: 'Countries Served',
      description: 'Global reach and impact'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT projects, client results, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform with our AI and IT solutions. 
              Real results, real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#case-studies"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Case Studies
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Case Studies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped businesses achieve their goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{study.image}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{study.title}</h3>
                        <p className="text-cyan-400 font-medium">{study.client}</p>
                        <p className="text-gray-400 text-sm">{study.industry}</p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <p>{study.duration}</p>
                      <p>{study.team}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-white font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your project and see how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Start Your Project
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Get Consultation
                </Link>
              </div>
              
              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">+1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Middletown, DE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;