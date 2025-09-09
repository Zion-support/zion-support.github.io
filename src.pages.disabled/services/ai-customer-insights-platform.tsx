import: React { useState, useEffect } from 'react';';
import: { motion } from 'framer-motion';';
import: {
  Users,
  Bot,
  Zap,
  BarChart3,
  Shield,
  Clock,
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
  PieChart,
  LineChart,
  Activity,
  UserCheck,
  Heart,
  ThumbsUp,
  MessageCircle,
  Hash,
  Calendar,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Square,
  Edit,
  Copy,
  ExternalLink,
  Database,
  Cpu,
  Network,

      icon: <Brain className='w-6 h-6' />,
      title: 'AI-Powered Customer Segmentation',
      description: 'Automatically segment customers using advanced machine learning algorithms based on behavior, preferences, and value.'}, {'
      icon: <BarChart3 className='w-6 h-6' />,
      title: 'Predictive Analytics',
      description: 'Forecast customer lifetime value, churn probability, and purchase likelihood with 95% accuracy.'}, {'
      icon: <MessageSquare className='w-6 h-6' />,
      title: 'Sentiment Analysis',
      description: 'Real-time analysis of customer feedback, reviews, and social media mentions across all channels.'}, {'
      icon: <Target className='w-6 h-6' />,
      title: 'Personalization Engine',
      description: 'Create hyper-personalized experiences and recommendations based on individual customer profiles.'}, {'
      icon: <Activity className='w-6 h-6' />,
      title: 'Real-Time Insights',
      description: 'Monitor customer behavior and engagement patterns in real-time with instant alerts and notifications.'}, {'
      icon: <Shield className='w-6 h-6' />,
      title: 'Privacy-First Analytics',
      description: 'GDPR-compliant data processing with advanced privacy protection and consent management.'}
  ];

      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 customers,Basic segmentation,Standard analytics,Email support,Basic integrations,Monthly reports'],
      popular: false}, {'
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 customers,Advanced segmentation,Predictive analytics,Priority support,Advanced integrations,Real-time insights,Custom dashboards'],
      popular: true}, {'
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [],
      popular: fals,e}
  ]

      title: 'Customer Segmentation',
      icon: <Users className='w-8 h-8 text-blue-500' />,
      description: 'AI-powered customer segmentation with behavioral, demographic, and psychographic analysis'}, {'
      title: 'Predictive Analytics',
      icon: <TrendingUp className='w-8 h-8 text-green-500' />,
      description: 'Forecast customer behavior, lifetime value, and churn probability with machine learning'}, {'
      title: 'Sentiment Analysis',
      icon: <Heart className='w-8 h-8 text-red-500' />,
      description: 'Real-time sentiment analysis across all customer touchpoints and communication channels'}, {'
      title: 'Personalization',
      icon: <Target className='w-8 h-8 text-purple-500' />,
      description: 'Hyper-personalized experiences and recommendations based on individual customer profiles'}, {'
      title: 'Real-Time Monitoring',
      icon: <Activity className='w-8 h-8 text-orange-500' />,
      description: 'Live customer behavior tracking with instant alerts and automated responses'}, {'
      title: 'Data Integration',
      icon: <Database className='w-8 h-8 text-indigo-500' />,
      description: 'Seamless integration with CRM, marketing, and sales platforms for unified customer view'}
  ]
  const useCases = [

      title: 'E-commerce Personalization',
      description: 'Increase conversion rates by 40% with AI-powered product recommendations and personalized shopping experiences.',
      icon: <ShoppingCart className='w-8 h-8 text-blue-500' />
    }, {'
      title: 'Customer Retention',
      description: 'Reduce churn by 60% with predictive analytics and proactive customer success interventions.',
      icon: <UserCheck className='w-8 h-8 text-green-500' />
    }, {'
      title: 'Marketing Optimization',
      description: 'Improve campaign ROI by 85% with AI-driven customer segmentation and targeted messaging.',
      icon: <Target className='w-8 h-8 text-purple-500' />
    }
  ]
  return('
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50'>
      {/* Header Section */}
      <div className='bg-gradient-to-r from-green-600 via-emerald-700 to-teal-800 text-white>
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
                <Users className='w-12 h-12 text-white' />
              </div>
            </div>'
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              AI Customer Insights Platform
            </h1>'
            <p className='text-xl m,
    d:text-2xl text-green-100 mb-8 max-w-3xl mx-auto'>
              Transform customer data into actionable insights with AI-powered analytics, predictive modeling, and real-time personalization
            </p>'
            <div className='flex flex-col sm: flex-row gap-4 justify-center>
              <button className='bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center>
                <Play className='w-5 h-5 mr-2' />
                Start Free Trial
              </button>'
              <button className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hove,
    r:bg-white hove,
    r:text-green-600 transition-colors flex items-center justify-center>
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

                    ? 'border-green-500 text-green-600'
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


