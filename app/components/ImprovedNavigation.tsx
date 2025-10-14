import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom;
import { ArrowRight, 
  ChevronDown, 
  Menu, 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Cloud, 
  Sparkles,
  Search,
  User,
  Settings,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  TrendingUp,
  Users,
  Award,
  Clock,
  CheckCircle,
  DollarSign,
  Play'
} from 'lucide-react;

const ImprovedNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)'
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsSidebarOpen(false);
  }, [location]);

  const navigationItems = [
    {'
      label: 'AI Services','
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />'
          description: 'Advanced AI Solutions'
  },'
      color: 'from-blue-500 to-cyan-500',
      dropdown: [
        { '
          label: 'AI Analytics Dashboard Pro', '
          href: '/ai-analytics-dashboard-pro','
              description: 'Real-time business intelligence'
  },
          icon: <BarChart3 />
        },
        { '
          label: 'AI Cybersecurity Suite Pro', '
          href: '/ai-cybersecurity-suite-pro','
              description: 'Advanced threat protection'
  },
          icon: <Shield />
        },
        { '
          label: 'AI Content Generation Pro', '
          href: '/ai-content-generation-pro','
              description: 'Automated content creation'
  },
          icon: <Sparkles />
        },
        { '
          label: 'AI Customer Support Chatbot', '
          href: '/ai-customer-support-chatbot','
              description: 'Intelligent customer service'
  },
          icon: <Users />
        },
        { '
          label: 'AI Code Assistant Pro', '
          href: '/ai-code-assistant-pro','
              description: 'AI-powered development'
  },
          icon: <Settings />
        },
        { '
          label: 'AI Business Intelligence Pro', '
          href: '/ai-business-intelligence-pro','
              description: 'Data-driven insights'
  },
          icon: <TrendingUp />
        },
        { '
          label: 'AI Automation Platform', '
          href: '/ai-automation-platform','
              description: 'Workflow automation'
  },
          icon: <Zap />
        },
        { '
          label: 'AI Data Analytics Pro', '
          href: '/ai-data-analytics-pro','
              description: 'Advanced data analysis'
  },
          icon: <BarChart3 />
        },
        { '
          label: 'AI Marketing Automation', '
          href: '/ai-marketing-automation','
              description: 'Smart marketing campaigns'
  },
          icon: <TrendingUp />
        },
        { '
          label: 'AI HR & Recruitment Pro', '
          href: '/ai-hr-recruitment-pro','
              description: 'Intelligent talent management'
  },
          icon: <Users />
        },
        { '
          label: 'AI Financial Analysis', '
          href: '/ai-financial-analysis','
              description: 'Financial forecasting'
  },
          icon: <BarChart3 />
        },
        { '
          label: 'AI Supply Chain Optimizer', '
          href: '/ai-supply-chain-optimizer','
              description: 'Supply chain intelligence'
  },
          icon: <Globe />
        },
        { '
          label: 'AI Voice Assistant Pro', '
          href: '/ai-voice-assistant-pro','
              description: 'Voice-activated AI'
  },
          icon: <User />
        },
        { '
          label: 'AI Image Recognition Pro', '
          href: '/ai-image-recognition-pro','
              description: 'Computer vision solutions'
  },
          icon: <Settings />
        },
        { '
          label: 'AI Predictive Maintenance', '
          href: '/ai-predictive-maintenance','
              description: 'Predictive analytics'
  },
          icon: <Clock />
        },
        { '
          label: 'AI Sentiment Analysis Pro', '
          href: '/ai-sentiment-analysis-pro','
              description: 'Customer sentiment tracking'
  },
          icon: <TrendingUp />
        },
        { '
          label: 'AI Recommendation Engine', '
          href: '/ai-recommendation-engine','
              description: 'Personalized recommendations'
  },
          icon: <Star />
        },
        { '
          label: 'AI Fraud Detection Pro', '
          href: '/ai-fraud-detection-pro','
              description: 'Advanced fraud prevention'
  },
          icon: <Shield />
        },
        { '
          label: 'AI Language Translation', '
          href: '/ai-language-translation','
              description: 'Real-time translation'
  },
          icon: <Globe />
        },
        { '
          label: 'AI Chatbot Enterprise', '
          href: '/ai-chatbot-enterprise','
              description: 'Enterprise chatbot solutions'
  },
          icon: <Users />
        },
        { '
          label: 'AI Data Mining Pro', '
          href: '/ai-data-mining-pro','
              description: 'Data extraction & analysis'
  },
          icon: <BarChart3 />
        },
        { '
          label: 'AI Video Analysis', '
          href: '/ai-video-analysis','
              description: 'Video content analysis'
  },
          icon: <Settings />
        },
        { '
          label: 'AI Time Series Forecasting', '
          href: '/ai-time-series-forecasting','
              description: 'Time-based predictions'
  },
          icon: <TrendingUp />
        },
        { '
          label: 'AI NLP Text Analysis', '
          href: '/ai-nlp-text-analysis','
              description: 'Natural language processing'
  },
          icon: <Settings />
        },
        { '
          label: 'View All AI Services', '
          href: '/ai-services','
              description: 'Explore all AI solutions'
  },
          icon: <ArrowRight />
        }
      ]
    },
    {'
      label: 'IT Services','
      href: '/services',
      icon: <Shield className="w-4 h-4" />'
          description: 'Comprehensive IT Solutions'
  },'
      color: 'from-green-500 to-emerald-500',
      dropdown: [
        { '
          label: 'Cloud Infrastructure', '
          href: '/cloud-infrastructure','
              description: 'Scalable cloud solutions'
  },
          icon: <Cloud />
        },
        { '
          label: 'Blockchain Development', '
          href: '/blockchain-development','
              description: 'Blockchain technology'
  },
          icon: <Settings />
        },
        { '
          label: 'IoT Solutions', '
          href: '/iot-solutions','
              description: 'Internet of Things'
  },
          icon: <Globe />
        },
        { '
          label: 'AR/VR Development', '
          href: '/ar-vr-development','
              description: 'Immersive experiences'
  },
          icon: <Settings />
        },
        { '
          label: 'DevOps Solutions', '
          href: '/devops-solutions','
              description: 'Development operations'
  },
          icon: <Settings />
        },
        { '
          label: 'Mobile Development', '
          href: '/mobile-development','
              description: 'Mobile applications'
  },
          icon: <Settings />
        },
        { '
          label: 'Web Development', '
          href: '/web-development','
              description: 'Web applications'
  },
          icon: <Settings />
        },
        { '
          label: 'IT Support', '
          href: '/it-support','
              description: 'Technical support'
  },
          icon: <HelpCircle />
        },
        { '
          label: 'Network Infrastructure', '
          href: '/network-infrastructure','
              description: 'Network solutions'
  },
          icon: <Globe />
        },
        { '
          label: 'IT Consulting', '
          href: '/it-consulting','
              description: 'Technology consulting'
  },
          icon: <Users />
        },
        { '
          label: 'Cybersecurity Audit', '
          href: '/cybersecurity-audit','
              description: 'Security assessments'
  },
          icon: <Shield />
        },
        { '
          label: 'Data Center Services', '
          href: '/data-center-services','
              description: 'Data center solutions'
  },
          icon: <Settings />
        },
        { '
          label: 'Asset Management', '
          href: '/asset-management','
              description: 'IT asset tracking'
  },
          icon: <BarChart3 />
        },
        { '
          label: 'View All IT Services', '
          href: '/services','
              description: 'Explore all IT solutions'
  },
          icon: <ArrowRight />
        }
      ]
    },
    {'
      label: 'Micro SAAS','
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />'
          description: 'Ready-to-Use Solutions'
  },'
      color: 'from-purple-500 to-pink-500',
      dropdown: [
        { '
          label: 'Zion Analytics Pro', '
          href: '/zion-analytics-pro','
              description: 'Business intelligence platform'
  },
          icon: <BarChart3 />
        },
        { '
          label: 'Zion Security Shield', '
          href: '/zion-security-shield','
              description: 'Advanced security protection'
  },
          icon: <Shield />
        },
        { '
          label: 'Zion Cloud Vault', '
          href: '/zion-cloud-vault','
              description: 'Secure cloud storage'
  },
          icon: <Cloud />
        },
        { '
          label: 'Zion AI Inventory Manager', '
          href: '/zion-ai-inventory-manager','
              description: 'Smart inventory tracking'
  },
          icon: <BarChart3 />
        },
        { '
          label: 'Zion HR Assistant Pro', '
          href: '/zion-hr-assistant-pro','
              description: 'Human resources automation'
  },
          icon: <Users />
        },
        { '
          label: 'Zion AI Accounting Suite', '
          href: '/zion-ai-accounting-suite','
              description: 'Automated accounting'
  },
          icon: <BarChart3 />
        },
        { '
          label: 'Zion E-commerce Optimizer', '
          href: '/zion-ecommerce-optimizer','
              description: 'E-commerce optimization'
  },
          icon: <TrendingUp />
        },
        { '
          label: 'Zion AI Customer Insights', '
          href: '/zion-ai-customer-insights','
              description: 'Customer analytics'
  },
          icon: <Users />
        },
        { '
          label: 'Zion AI Lead Scoring', '
          href: '/zion-ai-lead-scoring','
              description: 'Lead qualification'
  },
          icon: <Star />
        },
        { '
          label: 'Zion AI Document Processor', '
          href: '/zion-ai-document-processor','
              description: 'Document automation'
  },
          icon: <Settings />
        },
        { '
          label: 'Zion AI Social Listener', '
          href: '/zion-ai-social-listener','
              description: 'Social media monitoring'
  },
          icon: <Globe />
        },
        { '
          label: 'Zion AI Email Optimizer', '
          href: '/zion-ai-email-optimizer','
              description: 'Email marketing optimization'
  },
          icon: <Mail />
        },
        { '
          label: 'Zion AI Meeting Assistant', '
          href: '/zion-ai-meeting-assistant','
              description: 'Meeting automation'
  },
          icon: <Users />
        },
        { '
          label: 'Zion AI Expense Tracker', '
          href: '/zion-ai-expense-tracker','
              description: 'Expense management'
  },
          icon: <BarChart3 />
        },
        { '
          label: 'Zion AI Survey Builder', '
          href: '/zion-ai-survey-builder','
              description: 'Survey creation tool'
  },
          icon: <Settings />
        },
        { '
          label: 'Zion AI Chatbot Builder', '
          href: '/zion-ai-chatbot-builder','
              description: 'No-code chatbot creation'
  },
          icon: <Users />
        },
        { '
          label: 'Zion AI Workflow Automation', '
          href: '/zion-ai-workflow-automation','
              description: 'Process automation'
  },
          icon: <Zap />
        },
        { '
          label: 'Zion AI SEO Optimizer', '
          href: '/zion-ai-seo-optimizer','
              description: 'SEO optimization tool'
  },
          icon: <TrendingUp />
        },
        { '
          label: 'Zion AI Data Warehouse', '
          href: '/zion-ai-data-warehouse','
              description: 'Data storage solution'
  },
          icon: <Cloud />
        },
        { '
          label: 'Zion AI Mobile App Builder', '
          href: '/zion-ai-mobile-app-builder','
              description: 'Mobile app creation'
  },
          icon: <Settings />
        },
        { '
          label: 'Zion AI API Manager', '
          href: '/zion-ai-api-manager','
              description: 'API management platform'
  },
          icon: <Settings />
        },
        { '
          label: 'Zion AI Backup Manager', '
          href: '/zion-ai-backup-manager','
              description: 'Automated backup solution'
  },
          icon: <Cloud />
        },
        { '
          label: 'Zion AI Testing Automation', '
          href: '/zion-ai-testing-automation','
              description: 'Automated testing'
  },
          icon: <CheckCircle />
        },
        { '
          label: 'View All Micro SAAS', '
          href: '/micro-saas','
              description: 'Explore all micro SAAS'
  },
          icon: <ArrowRight />
        }
      ]
    },
    {'
      label: '5G Solutions','
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />'
          description: 'Next-Gen Connectivity'
  },'
      color: 'from-orange-500 to-red-500',
      dropdown: [
        { '
          label: '5G Data Analytics', '
          href: '/5g-data-analytics','
              description: 'High-speed data analysis'
  },
          icon: <BarChart3 />
        },
        { '
          label: '5G Edge Computing', '
          href: '/5g-edge-computing','
              description: 'Edge computing solutions'
  },
          icon: <Settings />
        },
        { '
          label: '5G Implementation', '
          href: '/5g-implementation','
              description: '5G network deployment'
  },
          icon: <Settings />
        },
        { '
          label: '5G Mobile Applications', '
          href: '/5g-mobile-applications','
              description: '5G-enabled mobile apps'
  },
          icon: <Settings />
        },
        { '
          label: '5G Network Infrastructure', '
          href: '/5g-network-infrastructure','
              description: '5G network architecture'
  },
          icon: <Globe />
        },
        { '
          label: '5G Private Networks', '
          href: '/5g-private-networks','
              description: 'Private 5G networks'
  },
          icon: <Shield />
        },
        { '
          label: '5G Smart City Solutions', '
          href: '/5g-smart-city-solutions','
              description: 'Smart city infrastructure'
  },
          icon: <Globe />
        },
        { '
          label: 'View All 5G Solutions', '
          href: '/5g-solutions','
              description: 'Explore all 5G solutions'
  },
          icon: <ArrowRight />
        }
      ]
    },
    {'
      label: 'Company','
      href: '/about',
      icon: <BarChart3 className="w-4 h-4" />'
          description: 'About Zion Tech Group'
  },'
      color: 'from-cyan-500 to-blue-500',
      dropdown: [
        { '
          label: 'About Us', '
          href: '/about','
              description: 'Our story and mission'
  },
          icon: <Users />
        },
        { '
          label: 'Our Team', '
          href: '/team','
              description: 'Meet our experts'
  },
          icon: <Users />
        },
        { '
          label: 'Careers', '
          href: '/careers','
              description: 'Join our team'
  },
          icon: <Award />
        },
        { '
          label: 'Case Studies', '
          href: '/case-studies','
              description: 'Success stories'
  },
          icon: <Star />
        },
        { '
          label: 'Blog', '
          href: '/blog','
              description: 'Latest insights'
  },
          icon: <Settings />
        },
        { '
          label: 'News', '
          href: '/news','
              description: 'Company news'
  },
          icon: <Settings />
        },
        { '
          label: 'Press', '
          href: '/press','
              description: 'Press releases'
  },
          icon: <Settings />
        },
        { '
          label: 'Partners', '
          href: '/partners','
              description: 'Our partners'
  },
          icon: <Users />
        }
      ]
    }
  ];

  const quickLinks = ['
    { label: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4"> },'
    { label: 'Demo', href: '/demo', icon: <Play className="w-4 h-4"> },'
    { label: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4"> },'
    { label: 'Consultation', href: '/consultation', icon: <Users className="w-4 h-4"> }
  ];

  const contactInfo = {'
    phone: '+1 302 464 0950','
    email: 'kleber@ziontechgroup.com','
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const Sidebar = () => ('
    <div>
    <div className="fixed inset-0 bg-black/50"> setIsSidebarOpen(false)} />
      <div>
    <div />
          <div>
    <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-400 hover:text-white transition-colors">
              <X />
            </button>
          </div>

          {/* Search */}
          <div>
    <div />
              <Search />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery;
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500">

            </div>
          </div>

          {/* Navigation Items */}
          <div />
            {navigationItems.map((item) => (
              <div>
    <Link
                  to={item.href;
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"> setIsSidebarOpen(false)}
                >
                  <div />
                    {item.icon}
                  </div>
                  <div />
                    <div className="text-white font-medium">{item.label}</div>
                    <div className="text-gray-400 text-sm">{item.description}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
    <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <div />
              {quickLinks.map((link) => (
                <Link
                  key={link.href;
                  to={link.href;
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"> setIsSidebarOpen(false)}
                >
                  {link.icon;
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
    <h3 className="text-white font-medium mb-4">Contact</h3>
            <div>
    <div />
                <Phone />
                <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
              </div>
              <div>
    <Mail />
                <span className="text-gray-300 text-sm">{contactInfo.email}</span>
              </div>
              <div>
    <MapPin />
                <span className="text-gray-300 text-sm">{contactInfo.address}</span>
              </div>
          </div>
        </div>
      </div>
        </div>
      </div>
  );

  return (
    
    <div>
    <Helmet />
        <title>Improved - Zion Tech Group</title>
        <meta />
      </Helmet>
      {/* Hero Section */}
      <section>
        <div>
    <h1>Improved </h1></h1>
          <p />
            Professional improved navigation services;
            designed to help your business grow and succeed.;
          </p>
        </div>
      </section>;
      {/* Content Section */}
            Professional improved navigation services
            designed to help your business grow and succeed.</p></div>
      </section>{/* Content Section */}
      <section>
        <div>
    <div />
            <div />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p />
                We provide comprehensive improved navigation;
                solutions tailored to your specific needs and requirements.</p>
              <ul />
                <li />
                  <span />
                  Custom solutions;
                </li>"
                <li />
                  <span />"
                  Expert consultation;
                </li>"
                <li />
                  <span />"
                  Ongoing support;
                </li>
              </ul>
            </div>"
            <div>
    <h3 className="text-2xl font-bold mb-4">Get Started</h3>
              <p>"
                Ready to transform your business with our improved navigation services?;
              </p>;
              <a />
                href="/contact";
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">;
                Contact Us;
              </a>
            </div>
        </div>
      </div>
      </section>;
            Ready to Get Started?;
          </h2>;
          <p className="text-xl text-blue-100 mb-8">'
            Let's discuss how our improved navigation';
            services can help you achieve your goals.;
          </p>;
          <a />
            href="/contact";
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">;
            Get Started Today;
          </a>;
        </div>
      </section>;
    </div>
  );
};

      { /* CTA Section */ }'';
      <section className="py-16 px-4 bg-blue-600'>';">
    <h2 className="text-3xl font-bold text-white mb-6'>';

            Ready to Get Started?;
          </h2>
          <p />
            Let&apos;s discuss how our improved navigation 
            services can help you achieve your goals.
          </p>
          <a />
            Get Started Today;
          </a>
        </div>
      </section>
    </div>
  )
}
                We provide comprehensive improved navigation
                solutions tailored to your specific needs and requirements.</p>
              <ul />
                <li />
                  <span />
                  Custom solutions</li>
                <li />
                  <span />
                  Expert consultation</li>
                <li />
                  <span />
                  Ongoing support</li></ul></div>
            <div>
    <h3 className="text-2xl font-bold mb-4">Get Started</h3>
              <p />
                Ready to transform your business with our improved navigation services?</p>
              <a />
                Contact Us</a></div>
        </div>
      </div>
      </section>{/* CTA Section */}
      <section>
        <div>
    <h2 />
            Ready to Get Started?</h2>
          <p />'
            Let's discuss how our improved navigation'
            services can help you achieve your goals.</p>
          <a />
            Get Started Today</a></div>
      </section></div>
export default ImprovedNavigation
'