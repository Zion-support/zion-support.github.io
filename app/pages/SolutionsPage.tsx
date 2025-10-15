import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Brain, Cpu, Cloud, Shield, BarChart3, Target, Rocket, Users, Globe, TrendingUp } from 'lucide-react';const SolutionsPage: React.FC = () => {
  const industrySolutions = [
    {
      title: 'Healthcare',
      description: 'AI-powered healthcare solutions for improved patient care and operational efficiency.',
      icon: Users,
      features: [
        'AI Medical Diagnosis',
        'Patient Data Analytics',
        'Telemedicine Platforms',
        'Drug Discovery AI',
        'Medical Imaging Analysis',
        'Health Monitoring Systems'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Finance',
      description: 'Advanced fintech solutions for secure, efficient financial operations.',
      icon: TrendingUp,
      features: [
        'Fraud Detection AI',
        'Algorithmic Trading',
        'Risk Assessment Models',
        'Digital Banking Solutions',
        'Payment Processing',
        'Regulatory Compliance'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'E-commerce',
      description: 'Comprehensive e-commerce solutions to boost sales and customer experience.',
      icon: Globe,
      features: [
        'AI Product Recommendations',
        'Dynamic Pricing',
        'Inventory Optimization',
        'Customer Analytics',
        'Chatbot Support',
        'Personalized Shopping'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Manufacturing',
      description: 'Smart manufacturing solutions for increased productivity and quality.',
      icon: Cpu,
      features: [
        'Predictive Maintenance',
        'Quality Control AI',
        'Supply Chain Optimization',
        'IoT Integration',
        'Production Analytics',
        'Automated Workflows'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Education',
      description: 'Innovative educational technology solutions for modern learning.',
      icon: Brain,
      features: [
        'Personalized Learning',
        'AI Tutoring Systems',
        'Learning Analytics',
        'Virtual Classrooms',
        'Assessment Automation',
        'Content Generation'
      ],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Real Estate',
      description: 'Smart real estate solutions for property management and transactions.',
      icon: Home,
      features: [
        'Property Valuation AI',
        'Virtual Tours',
        'Market Analysis',
        'Tenant Screening',
        'Maintenance Automation',
        'Investment Analytics'
      ],
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const technologySolutions = [
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions that transform data into actionable insights.',
      icon: Brain,
      solutions: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Recommendation Engines',
        'Chatbots & Virtual Assistants',
        'Automated Decision Making'
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions that grow with your business.',
      icon: Cloud,
      solutions: [
        'Cloud Migration',
        'Multi-cloud Strategy',
        'Container Orchestration',
        'Serverless Architecture',
        'Edge Computing',
        'Disaster Recovery'
      ]
    },
    {
      title: 'Data & Analytics',
      description: 'Transform raw data into strategic business intelligence.',
      icon: BarChart3,
      solutions: [
        'Data Warehousing',
        'Real-time Analytics',
        'Business Intelligence',
        'Data Visualization',
        'Predictive Modeling',
        'Data Governance'
      ]
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      solutions: [
        'Security Audits',
        'Threat Detection',
        'Identity Management',
        'Data Encryption',
        'Compliance Management',
        'Incident Response'
      ]
    }
  ];

  const microSaaSSolutions = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered insights and automation.',
      features: ['Smart Task Assignment', 'Progress Prediction', 'Resource Optimization', 'Risk Analysis'],
      path: '/micro-saas/ai-project-manager-pro'
    },
    {
      title: 'AI Content Writer Pro',
      description: 'Advanced content creation tool with AI-powered writing assistance.',
      features: ['SEO Optimization', 'Multi-language Support', 'Brand Voice Matching', 'Content Planning'],
      path: '/micro-saas/ai-content-writer-pro'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive analytics platform with real-time insights and reporting.',
      features: ['Custom Dashboards', 'Real-time Data', 'Predictive Analytics', 'Automated Reports'],
      path: '/micro-saas/analytics-dashboard'
    },
    {
      title: 'AI Email Marketing',
      description: 'Intelligent email marketing platform with personalization and automation.',
      features: ['Smart Segmentation', 'A/B Testing', 'Send Time Optimization', 'Performance Analytics'],
      path: '/micro-saas/ai-email-marketing'
    }
  ];

  const caseStudies = [
    {
      title: 'Healthcare AI Implementation',
      client: 'MedTech Solutions',
      challenge: 'Reduce diagnostic time and improve accuracy',
      solution: 'AI-powered medical imaging analysis system',
      results: [
        '40% reduction in diagnostic time',
        '95% accuracy in image analysis',
        '60% improvement in patient satisfaction'
      ],
      industry: 'Healthcare'
    },
    {
      title: 'E-commerce Personalization',
      client: 'RetailMax',
      challenge: 'Increase conversion rates and customer engagement',
      solution: 'AI-driven recommendation engine',
      results: [
        '35% increase in conversion rates',
        '50% improvement in customer engagement',
        '25% boost in average order value'
      ],
      industry: 'E-commerce'
    },
    {
      title: 'Manufacturing Optimization',
      client: 'AutoParts Inc',
      challenge: 'Optimize production efficiency and reduce downtime',
      solution: 'IoT and AI-powered predictive maintenance',
      results: [
        '30% reduction in downtime',
        '20% increase in production efficiency',
        '15% decrease in maintenance costs'
      ],
      industry: 'Manufacturing'
    }
  ];

  return (<>
      <Helmet</Helmet>>
        <titl</titl>e>Solutions - Zion Tech Group | Industry-Specific AI & IT Solutions</title>
        <meta name="description" content="Discover our comprehensive solutions for healthcare, finance, _e-commerce, _manufacturing, _education, and real estate industries. AI-powered technology solutions." /</meta name="description" content="Discover our comprehensive solutions for healthcare, finance, _e-commerce, _manufacturing, _education, and real estate industries. AI-powered technology solutions." />>
        <meta name="keywords" content="industry solutions, _healthcare AI, _fintech, _e-commerce solutions, _manufacturing AI, _education technology, real estate tech" /</meta name="keywords" content="industry solutions, _healthcare AI, _fintech, _e-commerce solutions, _manufacturing AI, _education technology, real estate tech" />>
        <link rel="canonical" href="https://ziontechgroup.com/solutions" /</link rel="canonical" href="https://ziontechgroup.com/solutions" />>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16"</section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">>
        <div className="absolute inset-0 overflow-hidden"</div className="absolute inset-0 overflow-hidden">>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"</div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse">></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"</div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse">></div>
        </div>

        <div className="container mx-auto px-4 relative z-10"</div className="container mx-auto px-4 relative z-10">>
          <div className="text-center max-w-4xl mx-auto"</div className="text-center max-w-4xl mx-auto">>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"</h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">>
              Industry
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"</span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">>
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">>
              Tailored AI and IT solutions designed specifically for your industry. 
              We understand the unique challenges and opportunities in each sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"</div className="flex flex-col sm:flex-row gap-4 justify-center items-center">>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              </Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >>
                Get Custom Solution
                <ArrowRight className="w-5 h-5 ml-2" /</ArrowRight className="w-5 h-5 ml-2" />>
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              </Link
                to="/case-studies"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >>
                <Rocket className="w-5 h-5 mr-2" /</Rocket className="w-5 h-5 mr-2" />>
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-slate-800"</section className="py-20 bg-slate-800">>
        <div className="container mx-auto px-4"</div className="container mx-auto px-4">>
          <div className="text-center mb-16"</div className="text-center mb-16">>
            <h2 className="text-4xl font-bold text-white mb-4"</h2 className="text-4xl font-bold text-white mb-4">>Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"</p className="text-xl text-gray-300 max-w-3xl mx-auto">>
              We specialize in delivering technology solutions that address the unique needs of different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">>
            {industrySolutions.map((solution, index) => (<div key={index} className="group bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"</div key={index} className="group bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">>
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}</div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>>
                  <solution.icon className="w-8 h-8 text-white" /</solution.icon className="w-8 h-8 text-white" />>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4"</h3 className="text-2xl font-semibold text-white mb-4">>{solution.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed"</p className="text-gray-300 mb-6 leading-relaxed">>{solution.description}</p>
                
                <ul className="space-y-2 mb-8"</ul className="space-y-2 mb-8">>
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm"</li key={featureIndex} className="flex items-center text-gray-300 text-sm">>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" /</CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="group/link inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                </Link
                  to="/contact"
                  className="group/link inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" /</ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900"</section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">>
        <div className="container mx-auto px-4"</div className="container mx-auto px-4">>
          <div className="text-center mb-16"</div className="text-center mb-16">>
            <h2 className="text-4xl font-bold text-white mb-4"</h2 className="text-4xl font-bold text-white mb-4">>Technology Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"</p className="text-xl text-gray-300 max-w-3xl mx-auto">>
              Comprehensive technology solutions powered by the latest innovations in AI, cloud, and data science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"</div className="grid grid-cols-1 md:grid-cols-2 gap-8">>
            {technologySolutions.map((solution, index) => (<div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300"</div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300">>
                <div className="flex items-center mb-6"</div className="flex items-center mb-6">>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4"</div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">>
                    <solution.icon className="w-6 h-6 text-white" /</solution.icon className="w-6 h-6 text-white" />>
                  </div>
                  <div</div>>
                    <h3 className="text-2xl font-semibold text-white mb-2"</h3 className="text-2xl font-semibold text-white mb-2">>{solution.title}</h3>
                    <p className="text-gray-300"</p className="text-gray-300">>{solution.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"</div className="grid grid-cols-1 sm:grid-cols-2 gap-3">>
                  {solution.solutions.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-gray-300 text-sm"</div key={itemIndex} className="flex items-center text-gray-300 text-sm">>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" /</CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Solutions */}
      <section className="py-20 bg-slate-800"</section className="py-20 bg-slate-800">>
        <div className="container mx-auto px-4"</div className="container mx-auto px-4">>
          <div className="text-center mb-16"</div className="text-center mb-16">>
            <h2 className="text-4xl font-bold text-white mb-4"</h2 className="text-4xl font-bold text-white mb-4">>Micro SAAS Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"</p className="text-xl text-gray-300 max-w-3xl mx-auto">>
              Ready-to-use software solutions that can be deployed quickly and scaled as your business grows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"</div className="grid grid-cols-1 md:grid-cols-2 gap-8">>
            {microSaaSSolutions.map((solution, index) => (<Link
                key={index}
                to={solution.path}
                className="group bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              </Link
                key={index}
                to={solution.path}
                className="group bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors"</h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">>
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors"</p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">>
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6"</ul className="space-y-2 mb-6">>
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm"</li key={featureIndex} className="flex items-center text-gray-300 text-sm">>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" /</CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors"</div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">>
                  Explore Solution
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /</ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900"</section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">>
        <div className="container mx-auto px-4"</div className="container mx-auto px-4">>
          <div className="text-center mb-16"</div className="text-center mb-16">>
            <h2 className="text-4xl font-bold text-white mb-4"</h2 className="text-4xl font-bold text-white mb-4">>Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"</p className="text-xl text-gray-300 max-w-3xl mx-auto">>
              Real results from real clients. See how our solutions have transformed businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"</div className="grid grid-cols-1 lg:grid-cols-3 gap-8">>
            {caseStudies.map((study, index) => (<div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300"</div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300">>
                <div className="flex items-center justify-between mb-4"</div className="flex items-center justify-between mb-4">>
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium"</span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">>
                    {study.industry}
                  </span>
                  <Star className="w-5 h-5 text-yellow-400 fill-current" /</Star className="w-5 h-5 text-yellow-400 fill-current" />>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2"</h3 className="text-xl font-semibold text-white mb-2">>{study.title}</h3>
                <p className="text-cyan-400 font-medium mb-4"</p className="text-cyan-400 font-medium mb-4">>{study.client}</p>
                <div className="mb-6"</div className="mb-6">>
                  <h4 className="text-white font-medium mb-2"</h4 className="text-white font-medium mb-2">>Challenge:</h4>
                  <p className="text-gray-300 text-sm mb-3"</p className="text-gray-300 text-sm mb-3">>{study.challenge}</p>
                  <h4 className="text-white font-medium mb-2"</h4 className="text-white font-medium mb-2">>Solution:</h4>
                  <p className="text-gray-300 text-sm"</p className="text-gray-300 text-sm">>{study.solution}</p>
                </div>
                <div</div>>
                  <h4 className="text-white font-medium mb-3"</h4 className="text-white font-medium mb-3">>Results:</h4>
                  <ul className="space-y-2"</ul className="space-y-2">>
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-green-400 text-sm"</li key={resultIndex} className="flex items-center text-green-400 text-sm">>
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" /</CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600"</section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">>
        <div className="container mx-auto px-4 text-center"</div className="container mx-auto px-4 text-center">>
          <h2 className="text-4xl font-bold text-white mb-4"</h2 className="text-4xl font-bold text-white mb-4">>Ready for Your Custom Solution?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto"</p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">>
            Let's discuss your specific industry needs and create a tailored solution that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"</div className="flex flex-col sm:flex-row gap-4 justify-center items-center">>
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            </Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >>
              <Target className="w-5 h-5 mr-2" /</Target className="w-5 h-5 mr-2" />>
              Get Custom Solution
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            </Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >>
              <Rocket className="w-5 h-5 mr-2" /</Rocket className="w-5 h-5 mr-2" />>
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsPage;
""'"'