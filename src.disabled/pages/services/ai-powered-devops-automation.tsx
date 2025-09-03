import: React { useState, useEffect } from 'react';';
import: { motion } from 'framer-motion';';
import: {
  Server,
  Bot,
  Zap,
  BarChart3,
  Shield,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail as MailIcon,
  MapPin,
  DollarSign,
  Award,
  Target,
  Brain,
  Settings,
  FileText,
  Send,
  Inbox,
  Filter,
  Search,
  MessageSquare,
  Eye,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Code,
  Database,
  Network,
  Cpu,
  HardDrive,
  Wifi,
  Cloud,
  GitBranch,
  Terminal,
  Package,
  Layers,
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Play,
  Pause,
  Square,
  Download,
  Upload,
  Trash2,
  Edit,
  Copy,

      icon: <Bot className='w-6 h-6' />,
      title: 'AI-Powered CI/CD Pipeline',
      description: 'Intelligent build, test, and deployment automation with self-healing capabilities and predictive failure detection.'}, {'
      icon: <Shield className='w-6 h-6' />,
      title: 'Automated Security Scanning',
      description: 'Continuous security vulnerability scanning, dependency analysis, and compliance checking with AI-driven threat detection.'}, {'
      icon: <BarChart3 className='w-6 h-6' />,
      title: 'Intelligent Monitoring & Alerting',
      description: 'AI-powered infrastructure monitoring with predictive analytics, anomaly detection, and automated incident response.'}, {'
      icon: <Zap className='w-6 h-6' />,
      title: 'Auto-Scaling & Resource Optimization',
      description: 'Dynamic resource allocation based on real-time demand patterns with cost optimization and performance tuning.'}, {'
      icon: <Code className='w-6 h-6' />,
      title: 'Infrastructure as Code (IaC),
      description: 'Automated infrastructure provisioning and management using Terraform, Ansible, and custom AI-generated configurations.'}, {'
      icon: <Users className='w-6 h-6' />,
      title: 'Team Collaboration Tools',
      description: 'Integrated collaboration platform with role-based access, approval workflows, and automated documentation generation.'}
  ];

      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small development teams',
      features: [
        'Up to 5 applications,Basic CI/CD pipelines,Standard monitoring,Email support,Basic security scanning,GitHub/GitLab integration'],
      popular: false}, {'
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing development teams',
      features: [
        'Up to 25 applications,Advanced CI/CD with AI,Comprehensive monitoring,Priority support,Advanced security scanning,Multi-cloud support,Team collaboration tools'],
      popular: true}, {'
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [],
      popular: fals,e}
  ]

      title: 'Continuous Integration',
      icon: <GitBranch className='w-8 h-8 text-blue-500' />,
      description: 'Automated code integration with intelligent conflict resolution and quality gates'}, {'
      title: 'Continuous Deployment',
      icon: <Rocket className='w-8 h-8 text-green-500' />,
      description: 'Zero-downtime deployments with automated rollback capabilities and canary releases'}, {'
      title: 'Infrastructure Management',
      icon: <Server className='w-8 h-8 text-purple-500' />,
      description: 'Automated provisioning, configuration, and lifecycle management of cloud infrastructure'}, {'
      title: 'Security & Compliance',
      icon: <Shield className='w-8 h-8 text-red-500' />,
      description: 'Automated security scanning, compliance checking, and vulnerability management'}, {'
      title: 'Monitoring & Observability',
      icon: <Activity className='w-8 h-8 text-orange-500' />,
      description: 'Comprehensive monitoring with AI-powered anomaly detection and predictive alerting'}, {'
      title: 'Cost Optimization',
      icon: <DollarSign className='w-8 h-8 text-green-600' />,
      description: 'Intelligent resource optimization and cost management with automated scaling'}
  ]
  const useCases = [

      title: 'Startup Development Teams',
      description: 'Accelerate development cycles with automated CI/CD and intelligent deployment strategies.',
      icon: <Rocket className='w-8 h-8 text-blue-500' />
    }, {'
      title: 'Enterprise DevOps',
      description: 'Scale DevOps practices across large organizations with enterprise-grade automation and governance.',
      icon: <Building className='w-8 h-8 text-green-500' />
    }, {'
      title: 'Cloud Migration Projects',
      description: 'Streamline cloud migration with automated infrastructure provisioning and application deployment.',
      icon: <Cloud className='w-8 h-8 text-purple-500' />
    }
  ]
  return('
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50'>
      {/* Header Section */}
      <div className='bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white>
        <div className='max-w-7xl mx-auto px-4 sm: px-6 l,
    g:px-8 py-16'>
          <motion.div
            initial={{ opacit,
    y: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className='text-center>
            <div className='flex justify-center mb-6>
              <div className='p-4 bg-white/10 rounded-2xl backdrop-blur-sm>
                <Server className='w-12 h-12 text-white' />
              </div>
            </div>'
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              AI-Powered DevOps Automation
            </h1>'
            <p className='text-xl m,
    d:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto'>
              Transform your development workflow with intelligent automation, predictive analytics, and self-healing infrastructure
            </p>'
            <div className='flex flex-col sm: flex-row gap-4 justify-center>
              <button className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center>
                <Play className='w-5 h-5 mr-2' />
                Start Free Trial
              </button>'
              <button className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hove,
    r:bg-white hove,
    r:text-blue-600 transition-colors flex items-center justify-center>
                <Calendar className='w-5 h-5 mr-2' />
                Schedule Demo

              </button>
            </div>
          </motion.div>
        </div>
      </div>

              <button;
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap capitalize ${

                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >{tab.replace('-, ')}


              </button>
            ))}
          </nav>
        </div>
      </div>

                  </div>
                </div>
              </div>
            </div>

                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

                  >
                    Get: Started
                  </button>
                </motion.div>
              ))}

                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        ,)}
      </div>
      {/* CTA Section */}

            </button>
          </div>
        </div>
      </div>
    </div>


