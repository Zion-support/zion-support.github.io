import React from 'react'
const Footer: React.FC = () => {,
  const currentYear = new Date().getFullYear(),

  const serviceCategories = [
    {
      title: "AI & Automation",
      icon: Brain,"
      color: "text-blue-400",
      services: [',
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },'
        { name: 'AI Video Editor Pro', href: '/services/ai-video-editor' },'
        { name: 'Smart Contract Auditor', href: '/services/smart-contract-auditor' },'
        { name: 'AI Code Reviewer Pro', href: '/services/ai-code-reviewer' },'
        { name: 'AI Customer Insights', href: '/services/ai-customer-insights' },'
        { name: 'AI Translation Platform', href: '/services/ai-translation-platform' },'
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },'
        { name: 'AI Data Visualization', href: '/services/ai-data-visualization' },'
        { name: 'AI Social Listening', href: '/services/ai-social-listening' },'
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance' },'
        { name: 'AI Email Responder Pro', href: '/services/ai-email-responder' },'
        { name: 'Mobile Survey Platform', href: '/services/mobile-survey-platform' },'
        { name: 'Event Management Dashboard', href: '/services/event-management-dashboard' },'
        { name: 'AI SEO Optimizer', href: '/services/ai-seo-optimizer' },'
        { name: 'AI Talent Matching', href: '/services/ai-talent-matching' },'
        { name: 'AI Recruiting Platform', href: '/services/ai-recruiting-platform' },'
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions' },'
        { name: 'Project Management Suite', href: '/services/project-management-suite' },'
        { name: 'Social Media Scheduler', href: '/services/social-media-scheduler' },'
        { name: 'Expense Tracker', href: '/services/expense-tracker' },'
        { name: 'Lead Scoring Platform', href: '/services/lead-scoring-platform' },'
        { name: 'Time Tracking Analytics', href: '/services/time-tracking-analytics' },'
        { name: 'Email Marketing Automation', href: '/services/email-marketing-automation' },'
        { name: 'Website Speed Optimizer', href: '/services/website-speed-optimizer' },
      ]
    },
    {"
      title: "Cloud & Infrastructure",
      icon: Cloud,"
      color: "text-green-400",
      services: [',
        { name: 'Cloud Migration', href: '/services/cloud-migration' },'
        { name: 'Cloud-Native Transformation', href: '/services/cloud-native-transformation' },'
        { name: 'Cybersecurity Operations Center', href: '/services/cyber-security-operations-center' },'
        { name: 'Data Lake & Analytics', href: '/services/data-lake-architecture' },'
        { name: 'IoT Platform Development', href: '/services/iot-platform-development' },'
        { name: 'API-First Architecture', href: '/services/api-first-architecture' },'
        { name: 'Hybrid Cloud Strategy', href: '/services/hybrid-cloud-strategy' },'
        { name: 'Digital Workplace Solutions', href: '/services/digital-workplace-solutions' },'
        { name: 'Compliance Automation', href: '/services/compliance-automation' },'
        { name: 'Performance Engineering', href: '/services/performance-engineering' },'
        { name: 'Edge Computing Solutions', href: '/services/edge-computing-solutions' },'
        { name: 'Blockchain Infrastructure', href: '/services/blockchain-infrastructure' },'
        { name: 'Zero Trust Security', href: '/services/zero-trust-security' },'
        { name: '5G Network Implementation', href: '/services/5g-network-implementation' },'
        { name: 'Hyperautomation Platform', href: '/services/hyperautomation-platform' },'
        { name: 'Kubernetes Orchestration', href: '/services/kubernetes-orchestration' },'
        { name: 'API Gateway Setup', href: '/services/api-gateway-setup' },'
        { name: 'Database Optimization', href: '/services/database-optimization' },'
        { name: 'Network Security Audit', href: '/services/network-security-audit' },'
        { name: 'Disaster Recovery Planning', href: '/services/disaster-recovery-planning' },'
        { name: 'Microservices Architecture', href: '/services/microservices-architecture' },'
        { name: 'Performance Monitoring', href: '/services/performance-monitoring' },
      ]
    },
    {"
      title: "Data & Analytics",
      icon: Database,"
      color: "text-purple-400",
      services: [',
        { name: 'AI Drug Discovery', href: '/services/ai-drug-discovery' },'
        { name: 'AI Autonomous Systems', href: '/services/ai-autonomous-systems' },'
        { name: 'AI Personalized Medicine', href: '/services/ai-personalized-medicine' },'
        { name: 'AI Cyber Threat Intelligence', href: '/services/ai-cyber-threat-intelligence' },'
        { name: 'AI Energy Optimization', href: '/services/ai-energy-optimization' },'
        { name: 'AI Agricultural Intelligence', href: '/services/ai-agricultural-intelligence' },'
        { name: 'AI Mental Health Support', href: '/services/ai-mental-health-support' },'
        { name: 'AI Educational Personalization', href: '/services/ai-educational-personalization' },'
        { name: 'AI Creative Content Generation', href: '/services/ai-creative-content-generation' },'
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-document-analysis' },'
        { name: 'AI Climate Modeling', href: '/services/ai-climate-modeling' },'
        { name: 'AI Space Exploration', href: '/services/ai-space-exploration' },'
        { name: 'AI Neuroscience Research', href: '/services/ai-neuroscience-research' },'
        { name: 'AI Robotics & Automation', href: '/services/ai-robotics-automation' },'
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading' },'
        { name: 'Custom AI Models', href: '/services/custom-ai-models' },'
        { name: 'Computer Vision Solutions', href: '/services/computer-vision-solutions' },'
        { name: 'Natural Language Processing', href: '/services/natural-language-processing' },'
        { name: 'Predictive Analytics', href: '/services/predictive-analytics' },'
        { name: 'Recommendation Engine', href: '/services/recommendation-engine' },'
        { name: 'AI-Powered Search', href: '/services/ai-powered-search' },'
        { name: 'AI Content Moderation', href: '/services/ai-content-moderation' },'
        { name: 'AI Fraud Detection', href: '/services/ai-fraud-detection' },;
      ];
    };
  ];

  const quickLinks = ["
    { name: "About Us", href: "/about" },"
    { name: "Our Team", href: "/team" },"
    { name: "Careers", href: "/careers" },"
    { name: "Case Studies", href: "/case-studies" },"
    { name: "Blog", href: "/blog" },"
    { name: "White Papers", href: "/white-papers" },";
    { name: "Webinars", href: "/webinars" },";
    { name: "Pricing", href: "/pricing" };
  ];

  const legalLinks = ["
    { name: "Privacy Policy", href: "/privacy" },"
    { name: "Terms of Service", href: "/terms" },";
    { name: "Cookie Policy", href: "/cookies" },";
    { name: "Sitemap", href: "/sitemap" };
  ];

  const socialLinks = ["
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },"
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },"
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },";
    { name: "YouTube", href: "https://youtube.com/ziontechgroup", icon: Youtube },";
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram };
  ];

  const contactInfo = {"
    email: "contact@ziontechgroup.com",";
    phone: "+1 (555) 123-4567",";
    address: "123 Technology Drive, San Francisco, CA 94105";
  };

  return ("
    <footer className = "bg-slate-900 border-t border-slate-700">
      {/* Main Footer Content */}"
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">"
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">,
          {/* Company Info */}"
          <div className="lg: col-span-1">"
            <Link to="/" className="flex items-center space-x-2 mb-6">"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">"
                <Brain className="w-6 h-6 text-white" />
              </div>"
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </Link>
            "
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions and technology services. 
              We help businesses transform and innovate with cutting-edge artificial intelligence.
            </p>
"
            <div className="space-y-3 mb-6">"
              <div className="flex items-center text-gray-300">"
                <Mail className="w-4 h-4 mr-3 text-blue-400" />",
                <a href="{`mailto:${contactInfo.email}`}" className="hover: text-white transition-colors">,
                  {contactInfo.email}
                </a>
              </div>"
              <div className="flex items-center text-gray-300">"
                <Phone className="w-4 h-4 mr-3 text-blue-400" />"
                <a href="{`tel:${contactInfo.phone}`}" className="hover: text-white transition-colors">,
                  {contactInfo.phone}
                </a>
              </div>"
              <div className="flex items-center text-gray-300">"
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}"
            <div className="flex space-x-4">
              {socialLinks.map((social) => ("
                <a key="{social.name}""
                  href="{social.href}""
                  target="_blank""
                  rel="noopener noreferrer""
                  className="p-2 rounded-lg bg-slate-800 hover: bg-slate-700 text-gray-400 hover:text-white transition-colors"">
                  aria-label="{social.name}"
                >"
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}"
          <div className="lg: col-span-2">"
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategories.map((category) => (",
                <div key="{category.title}">"
                  <div className="flex items-center mb-4">"
                    <category.icon className="{`w-5" h-5 mr-2 ${category.color}`} />"
                    <h4 className="text-white font-semibold">{category.title}</h4>
                  </div>"
                  <ul className="space-y-2">
                    {category.services.map((service) => ("
                      <li key="{service.name}">"
                        <Link to="{service.href}""
                          className="text-gray-300 hover: text-white transition-colors text-sm flex items-center group"
                        >"
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />,
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Newsletter */}"
          <div className="lg: col-span-1">"
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>"
            <div className="grid grid-cols-2 gap-4 mb-8">
              {quickLinks.map((link) => (",
                <Link key="{link.name}""
                  to="{link.href}""
                  className="text-gray-300 hover: text-white transition-colors text-sm"
                >,
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Newsletter Signup */}"
            <div className="bg-slate-800 rounded-lg p-6">"
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>"
              <p className="text-gray-300 text-sm mb-4">
                Get the latest AI insights and technology trends delivered to your inbox.
              </p>"
              <div className="space-y-3">"
                <input type="email""
                  placeholder="Enter your email""
                  className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />"
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  Subscribe,
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
,
      {/* Stats Section */}"
      <div className="border-t border-slate-700 py-8">"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>"
              <div className="text-3xl font-bold text-white mb-2">200+</div>"
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div>"
              <div className="text-3xl font-bold text-white mb-2">50+</div>"
              <div className="text-gray-400 text-sm">Expert Team Members</div>
            </div>
            <div>"
              <div className="text-3xl font-bold text-white mb-2">95%</div>"
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div>"
              <div className="text-3xl font-bold text-white mb-2">24/7</div>"
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
,
      {/* Bottom Footer */}"
      <div className="border-t border-slate-700 py-6">"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
          <div className="flex flex-col md:flex-row items-center justify-between">"
            <div className="flex items-center space-x-6 mb-4 md:mb-0">"
              <p className="text-gray-400 text-sm">,
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>"
              <div className="flex items-center space-x-4">
                {legalLinks.map((link) => ("
                  <Link key="{link.name}""
                    to="{link.href}""
                    className="text-gray-400 hover: text-white transition-colors text-sm"
                  >,
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            "
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>"
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Zion Tech Group</span>
            </div>
          </div>
        </div>
      </div>;
    </footer>;
  );
};
"'
export default Footer;