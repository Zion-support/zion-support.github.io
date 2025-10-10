        description: 'Transform your business with cutting-edge artificial intelligence technologies',
        features: [
          { name: 'Machine Learning Models', description: 'Custom ML models for your specific needs', icon: '🧠' },
          { name: 'Natural Language Processing', description: 'Advanced text analysis and understanding', icon: '💬' },
          { name: 'Computer Vision', description: 'Image and video analysis capabilities', icon: '👁️' },
          { name: 'Predictive Analytics', description: 'Forecast trends and make data-driven decisions', icon: 'bar-chart' }
        ],
        stats: [
          { label: 'Accuracy', value: '99.5%', icon: TrendingUp },
          { label: 'Processing Speed', value: '10 x Faster', icon: Zap },
          { label: 'Cost Reduction', value: '60%', icon: TrendingUp }
        ]
      }
    },
    {
        description: 'Comprehensive IT services to keep your business running smoothly',
        features: [
          { name: 'Cloud Infrastructure', description: 'Scalable and secure cloud solutions', icon: '☁️' },
          { name: 'Cybersecurity', description: 'Advanced security measures and monitoring', icon: 'lock' },
          { name: 'Network Management', description: 'Optimized network performance and reliability', icon: 'globe' },
          { name: '24/7 Support', description: 'Round-the-clock technical assistance', icon: '🛠️' }
        ],
        stats: [
          { label: 'Uptime', value: '99.9%', icon: Clock },
          { label: 'Response Time', value: '< 1 min', icon: Zap },
          { label: 'Client Satisfaction', value: '98%', icon: Star }
        ]
      }
    },
    {
        description: 'Modernize your business processes with our digital transformation services',
        features: [
          { name: 'Process Automation', description: 'Streamline workflows with intelligent automation', icon: '⚙️' },
          { name: 'Legacy Modernization', description: 'Update outdated systems and technologies', icon: '🔄' },
          { name: 'Data Migration', description: 'Secure and efficient data transfer solutions', icon: '📦' },
          { name: 'Change Management', description: 'Support your team through digital transitions', icon: 'users' }
        ],
        stats: [
          { label: 'Efficiency Gain', value: '300%', icon: TrendingUp },
          { label: 'Time Saved', value: '40 hrs/week', icon: Clock },
          { label: 'ROI', value: '250%', icon: TrendingUp }
        ]
      }
    }
  ],

const currentTab = tabs[activeTab],

                    ? `${tab.bgColor} ${tab.color} border-2 border-current`
                    : 'bg-gray-800 text-gray-300 hover: bg-gray-700 hover:text-white',
                }`}
                aria-selected={activeTab === index}
                role="tab"</button>
              ></button>
                <tab.icon className="w-5 h-5" /></ta>
                <span className="font-medium">{tab.title}</spa>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 cyber-card"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">{/* Content */}</div>
              <div></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{currentTab.content.title}</h3><p className="text-gray-300 text-lg mb-8 leading-relaxed">{currentTab.content.description}</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{currentTab.content.features.map((feature, index) => (</div>
                    <div key={index} className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-colors"></div>
                      <div className="flex items-start space-x-3"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                        <span className="text-2xl">{feature.icon}</span>
                        <div></div>
                          <h4 className="font-semibold text-white mb-1">{feature.name}<p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-6"></div>
                <h4 className="text-xl font-semibold text-white mb-6">Key Metrics<div className="space-y-4">{currentTab.content.stats.map((stat, index) => (</div>
                    <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded-lg p-4"></div>
                      <div className="flex items-center space-x-3"></div>
                        <stat.icon className={`w-6 h-6 ${currentTab.color}`} />
                        <span className="text-gray-300">{stat.label}</span><span className={`text-2xl font-bold ${currentTab.color}`}>{stat.value}</span>
                      </span>
                    </div>
                  ))}
                </div>

                    href={`/${currentTab.id}`}
                    className={`inline-flex items-center space-x-2 ${currentTab.color} hover:opacity-80 transition-opacity font-medium`}
                  ></a>
                    <<<<span>Learn</span></<<span>More</span></span>
                    <ArrowRight className="w-4 h-4" /></ArrowRigh>
                  </a>
                </div>
              </div>
            </div>
          </div>
import React from 'react';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react',

const DynamicContentShowcase: React.FC = () => {
const technologies = [
    {
      title: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence solutions for business automation and insights',
      icon: Brain,
      color: 'text-purple-400',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      icon: Cloud,
      color: 'text-blue-400',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Computing', 'Auto-scaling']
    },
    {
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions to protect your digital assets',
      icon: Shield,
      color: 'text-green-400',
      features: ['Threat Detection', 'Zero Trust Architecture', 'Compliance Management', 'Incident Response']
    },
    {
      title: 'Process Automation',
      description: 'Intelligent automation to streamline business operations',
      icon: Zap,
      color: 'text-yellow-400',
      features: ['Workflow Automation', 'RPA Solutions', 'Smart Scheduling', 'Task Optimization']
    }
  ],

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 cyber-text neon-pulse">
            Cutting-Edge Technologies
          </h2>
          <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
            We leverage the latest technologies to deliver innovative solutions that drive business growth and efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="cyber-card hologram-card p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <tech.icon className={`w-12 h-12 ${tech.color} mr-4`} />
                <h3 className="text-2xl font-bold text-white">{tech.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg">{tech.description}</p>
              
              <ul className="space-y-3 mb-8">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
        </div>
      </div>
    </section>
  ),
},

