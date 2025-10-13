import Link from 'next/link';
import { ArrowLeft, TrendingUp, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case <span className="text-cyan-400">Studies</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-world success stories from our clients.
          </p>
        </div>
      </div>
    </div>
  );
};
import { ArrowRight, CheckCircle, Star, Building, Target, Award, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

import { Helmet } from 'react-helmet-async;

import { Link } from 'react-router-dom;

import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award } from 'lucide-react;

interface CaseStudy {}
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

const CaseStudiesPage: React.FC = () => {}
  const caseStudies: CaseStudy[] = [
    {
      id: '1,
      title: 'AI-Powered Customer Service Transformation,
      client: 'TechCorp Solutions,
      industry: 'Technology,
      challenge: 'High customer service costs and long response times affecting customer satisfaction.,
      solution: 'Implemented AI-powered chatbots and automated ticket routing system.,
      results: [
        'Reduced response time by 80%,
        'Cut customer service costs by 60%,
        'Improved customer satisfaction by 45%,
        Handled 10x more inquiries with same team size
      ],
      image: '/images/case-studies/customer-service.jpg,
      duration: '6 months,
      team: AI & Customer Experience Team
    },
    {
      id: '2,
      title: 'Cybersecurity Infrastructure Overhaul,
      client: 'Financial Services Company,
      industry: 'Finance,
      challenge: 'Outdated security systems vulnerable to modern cyber threats.,
      solution: 'Complete security infrastructure redesign with AI-powered threat detection.,
      results: [
        'Zero security breaches in 12 months,
        '99.9% threat detection accuracy,
        'Reduced false positives by 70%,
        Compliance with all regulatory requirements
      ],
      image: '/images/case-studies/cybersecurity.jpg,
      duration: '8 months,
      team: Cybersecurity & Compliance Team
    },
    {
      id: '3,
      title: 'Cloud Migration & Optimization,
      client: 'Manufacturing Corporation,
      image: '/images/case-studies/ai-customer-service.jpg,
      duration: '3 months,
      team: '8 specialists
      imag,
    e: /api/placeholder/600
      image: '/images/case-studies/ai-customer-service.jpg',      challenge: 'High customer service costs and long response times,
      solution: 'Implemented AI chatbot and automated ticketing system,
      results: [
        '60% reduction in response time,
        '40% cost savings,
        95% customer satisfaction rate
      ],
      duration: '3 months,
      team: '5 specialists
      image: '/images/case-studies/ecommerce-ai.jpg
    },
      team: '8 specialists});)},
    {
      id: 2,
      title: 'Cloud Migration for Financial Services,
      company: 'FinanceFlow Ltd.,
      industry: 'Financial Services,
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.,
      solution: 'Complete cloud migration to AWS with microservices architecture and automated scaling.,
      challenge: 'Legacy systems causing performance issues and security concerns,
      solution: 'Complete cloud migration with enhanced security measures,
      results: [
        '50% improvement in system performance,
        '99.9% uptime achieved,
        30% reduction in operational costs
      id: 2,
      title: 'Cloud Migration for Financial Services',
      company: 'FinanceFlow Ltd.',
      industry: 'Financial Services',
      ],
      image: '/images/case-studies/cloud-migration.jpg,
      duration: '6 months,
      team: '12 specialists
    },
      team: '12 specialists});)},
    {
      id: '3,
      title: 'Cybersecurity Enhancement for Healthcare,
      client: 'MediCare Plus,
      industry: 'Healthcare,
      challenge: 'Increasing cyber threats and need for HIPAA compliance in patient data protection.,
      solution: 'Comprehensive security audit and implementation of zero-trust architecture with advanced threat detection.,
      results: [
        '100% HIPAA compliance achieved,
        'Zero security breaches in 12 months,
        'Real-time threat detection and response,
        Automated compliance reporting
      ],
      image: '/images/case-studies/cybersecurity-healthcare.jpg,
      duration: '4 months,
      team: '10 specialists});)
},
    {
      id: '4,
      title: 'Machine Learning for Predictive Analytics,
      client: 'RetailMax,
      industry: 'Retail,
      challenge: 'Inventory management inefficiencies leading to stockouts and overstock situations.,
      solution: 'ML-powered demand forecasting system with real-time inventory optimization.,
      results: [
        '40% reduction in stockouts,
        '25% decrease in excess inventory,
        '15% increase in revenue,
        Real-time demand prediction accuracy of 92%
      ],
      image: '/images/case-studies/ml-predictive-analytics.jpg,
      duration: '5 months,
      team: '6 specialists});)
},
    {
      id: '5,
      title: 'Digital Transformation for Manufacturing,
      client: 'ManufacturingPro,
      industry: 'Manufacturing,
      challenge: 'Legacy systems causing operational inefficiencies and high maintenance costs.,
      solution: 'Complete cloud migration with microservices architecture and AI optimization.,
      results: [
        '50% reduction in infrastructure costs,
        '99.9% uptime achieved,
        '3x faster application deployment,
        Scalable infrastructure for future growth
      ],
      image: '/images/case-studies/digital-transformation.jpg,
      duration: '8 months,
      team: '15 specialists    },
    {
      id: '6,
      title: 'Blockchain Integration for Supply Chain,
      client: 'GlobalLogistics,
      industry: 'Logistics,
      challenge: 'Lack of transparency and traceability in complex supply chain operations.,
      solution: 'Blockchain-based supply chain tracking system with smart contracts and real-time verification.,
      results: [
        'Complete supply chain transparency,
        '60% reduction in disputes,
        'Real-time shipment tracking,
        'Automated compliance verification
      ],
      image: '/images/case-studies/blockchain-supply-chain.jpg,
      duration: '7 months,
      team: '11 specialists    }

    }
  ];

  const stats = [;
    { label: 'Projects Completed', value: '150+, icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%, icon: TrendingUp },
    { label: 'Team Members', value: '50+, icon: Users },
    { label: 'Industry Awards', value: '25+, icon: Award }  ];

  return (

    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, business transformation, Zion Tech Group" />
      </Helmet>

      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies. See how we've helped businesses transform their operations and achieve remarkable results. />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT transformation, business results, client testimonials />
        <meta property="og:title" content="Case Studies - Zion Tech Group />
        <meta property="og:description" content="Success stories from our AI and IT solutions />
        <meta property="og:type" content="website />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}

        <section className="py-20 px-4>
          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400>Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12>
              Discover how weve helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8>
                        </li>
                      ))}
                    </ul>
                  </div>

              {stats.map((stat, index) => (

                <div key={index} className="text-center>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4>
                    <stat.icon className="w-8 h-8 text-white />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2>{stat.value}</div>
                  <div className="text-gray-400>{stat.label}</div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Case Studies Grid */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8>
              {caseStudies.map((study) => (

                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 group>
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 relative>
                    <div className="absolute inset-0 bg-black/20></div>
                    <div className="absolute bottom-4 left-4 right-4>
                      <div className="flex items-center gap-2 text-white text-sm>
                        <span className="bg-purple-500 px-3 py-1 rounded-full>{study.industry}</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full>{study.duration}</span>
                      </div>                    </div>
                  </div>
                  
                  <div className="p-8>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors>
                      {study.title}

                    </h3>
                    
                    <div className="mb-6>
                      <h4 className="text-lg font-semibold text-purple-400 mb-2>Client: {study.client}</h4>
                      <p className="text-gray-300 text-sm mb-4>{study.team}</p>
                    </div>

                    <div className="mb-6>
                      <h4 className="text-lg font-semibold text-white mb-2>Challenge</h4>
                      <p className="text-gray-300 text-sm mb-4>{study.challenge}</p>
                    </div>

                    <div className="mb-6>
                      <h4 className="text-lg font-semibold text-white mb-2>Solution</h4>
                      <p className="text-gray-300 text-sm mb-4>{study.solution}</p>
                    </div>

                    <div className="mb-6>
                      <h4 className="text-lg font-semibold text-white mb-3>Results</h4>
                      <ul className="space-y-2>
                        {study.results.map((result, index) => (

                          <li key={index} className="flex items-center text-gray-300 text-sm>
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 />
                            {result}

                          </li>
                        ))}

                      </ul>
                    </div>

                    <div className="flex items-center justify-between>
                      <Link
                        to={`/case-studies/${study.id}}

                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 />
                      </Link>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors>
                        <ExternalLink className="w-4 h-4 />
                        Share
                      </button>
                    </div>                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20>
              <h2 className="text-3xl font-bold text-white mb-6>
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8>
                Lets discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <Link
                  to="/contact
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105
                >
                  Get Started Today
                  <ExternalLink className="w-5 h-5 />
                </Link>
                <Link
                  to="/services
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card hologram-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of satisfied clients who have transformed their businesses with our AI and IT solutions. 
                Let's discuss how we can help you achieve similar results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );

  );  ));)
};

};
export default CaseStudiesPage;
