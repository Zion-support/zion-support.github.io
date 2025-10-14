

import React from "react";
import { Link } from "react-router-dom";
import { CpuChipIcon, 
  CloudIcon,
  ShieldCheckIcon,
  CloudIcon,
  GlobeAltIcon,
  SignalIcon,
  BriefcaseIcon,
  ArrowRightIcon,
  CheckIcon";
} from "@heroicons/react/24/outline;";

const SolutionsPage: React.FC = () => {
  const solutions = [
    {'
      title: 'AI-Powered Solutions','
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.','
      icon: CpuChipIcon,
      features: ['
        'Machine Learning Models','
        'Natural Language Processing','
        'Computer Vision','
        'Predictive Analytics','
        'Automated Decision Making','
        'Intelligent Automation'
      ],'
      href: '/ai-solutions'
    },
    {'
      title: 'Cybersecurity Solutions','
      description: 'Protect your digital assets with comprehensive security solutions and threat detection systems.','
      icon: ShieldCheckIcon,
      features: ['
        'Threat Detection & Response','
        'Vulnerability Assessment','
        'Security Monitoring','
        'Compliance Management','
        'Incident Response','
        'Security Training'
      ],'
      href: '/cybersecurity'
    },
    {'
      title: 'Cloud Infrastructure','
      description: 'Build scalable, secure, and reliable cloud infrastructure for your business needs.','
      icon: CloudIcon,
      features: ['
        'Cloud Migration','
        'Infrastructure as Code','
        'Auto-scaling','
        'Disaster Recovery','
        'Cost Optimization','
        'Multi-cloud Strategy'
      ],'
      href: '/cloud-infrastructure'
    },
    {'
      title: 'Micro SaaS Solutions','
      description: 'Custom micro SaaS applications tailored to your specific business requirements.','
      icon: GlobeAltIcon,
      features: ['
        'Custom Development','
        'API Integration','
        'Scalable Architecture','
        'User Management','
        'Payment Processing','
        'Analytics & Reporting'
      ],'
      href: '/micro-saas-solutions'
    },
    {'
      title: '5G Technology','
      description: 'Leverage next-generation 5G technology for ultra-fast connectivity and IoT solutions.','
      icon: SignalIcon,
      features: ['
        '5G Network Implementation','
        'IoT Device Management','
        'Edge Computing','
        'Real-time Data Processing','
        'Low Latency Applications','
        'Network Optimization'
      ],'
      href: '/5g-solutions'
    },
    {'
      title: 'IT Services','
      description: 'Complete IT infrastructure management and support services for your business.','
      icon: BriefcaseIcon,
      features: ['
        'IT Infrastructure Management','
        'Help Desk Support','
        'System Administration','
        'Network Management','
        'Software Deployment','
        'Technical Consulting'
      ],'
      href: '/it-solutions'
    }
  ];
  return (
    <></>
      <Helmet />
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions including AI, cybersecurity, cloud infrastructure, micro SaaS, 5G technology, and IT services." /></meta>"
        <meta name="keywords" content="technology solutions, AI solutions, cybersecurity, cloud computing, micro SaaS, 5G technology, IT services" /></meta>"
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden"></section>"
        <div className="absolute inset-0 opacity-20"></div>"
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>"
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center"></div>"
          <div className="max-w-4xl mx-auto"></div>"
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"></h1>"
              Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"></p>"
              Comprehensive Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"></p>"
              From AI and cybersecurity to cloud infrastructure and 5G technology, 
              we provide end-to-end solutions that drive digital transformation and business growth.
            </p>
            <Link;
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
            ></Link>
              Get Started
              <ArrowRightIcon className="w-5 h-5" /></ArrowRightIcon>"
            </Link>
          </div>
        </div>
      </section>
      {/* Solutions Grid */}
      <section className="py-20 bg-slate-900"></section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text"></h2>"
              Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>"
              Comprehensive technology solutions designed to meet your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group"></div>"
                <div className="flex items-center mb-6"></div>"
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform"></div>"
                    <solution.icon className="w-8 h-8 text-white" /></solution>"
                  </div>
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>"
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed"></p>"
                  {solution.description}
                </p>
                
                <ul className="space-y-3 mb-6"></ul>"
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>"
                      <CheckIcon className="w-5 h-5 text-green-400 mr-3" /></CheckIcon>"
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={solution.href;
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all"
                ></Link>
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></ArrowRightIcon>"
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900"></section>"
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>"
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>"
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p>'
            Let's discuss how our solutions can help you achieve your business goals'
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            ></Link>
              Get Started Today
            </Link>
            <Link;
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            ></Link>
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsPage;
'