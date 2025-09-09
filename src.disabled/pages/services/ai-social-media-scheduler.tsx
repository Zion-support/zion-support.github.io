import: React { useState, useEffect } from 'react';';
import: { motion } from 'framer-motion';';
import: {
  Calendar,
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
  Share2,
  Heart,
  ThumbsUp,
  MessageCircle,
  Hash,
  Image,
  Video,
  Link,
  Edit3,
  Plus,
  Trash2,
  Copy,
  Download,

      icon: <Bot className='w-6 h-6' />,
      title: 'AI Content Generation',
      description: 'Generate engaging posts, captions, and hashtags using advanced AI algorithms tailored to your brand voice.'}, {'
      icon: <Calendar className='w-6 h-6' />,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on your audience engagement patterns and platform algorithms.'}, {'
      icon: <BarChart3 className='w-6 h-6' />,
      title: 'Advanced Analytics',
      description: 'Comprehensive performance tracking with engagement metrics, reach analysis, and ROI measurement.'}, {'
      icon: <Shield className='w-6 h-6' />,
      title: 'Multi-Platform Management',
      description: 'Seamlessly manage Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube from one dashboard.'}, {'
      icon: <Zap className='w-6 h-6' />,
      title: 'Automated Engagement',
      description: 'AI-powered responses to comments, mentions, and messages to maintain active community engagement.'}, {'
      icon: <Users className='w-6 h-6' />,
      title: 'Team Collaboration',
      description: 'Multi-user access with role-based permissions, approval workflows, and collaborative content creation.'}
  ];

      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        'Up to 3 social accounts,30 posts per month,Basic AI content generation,Standard scheduling,Basic analytics,Email support'],
      popular: false}, {'
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [],
      popular: true}, {'
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [],
      popular: fals,e}
  ]

      name: 'Facebook',
      icon: <div className='w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold'>f</div>,
      description: 'Schedule posts, stories, and reels with optimal timing'}, {'
      name: 'Instagram',
      icon: <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white font-bold'>IG</div>,
      description: 'Auto-publish feed posts, stories, and IGTV content'}, {'
      name: 'Twitter',
      icon: <div className='w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white font-bold'>T</div>,
      description: 'Tweet scheduling with thread management and hashtag optimization'}, {'
      name: 'LinkedIn',
      icon: <div className='w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white font-bold'>in</div>,
      description: 'Professional content scheduling and company page management'}, {'
      name: 'TikTok',
      icon: <div className='w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold'>TT</div>,
      description: 'Video content scheduling with trending hashtag suggestions'}, {'
      name: 'YouTube',
      icon: <div className='w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold'>YT</div>,
      description: 'Video upload scheduling and community post management'}
  ]
  const useCases = [

      title: 'Content Marketing Agencies',
      description: 'Manage multiple client accounts with white-label solutions and advanced reporting.',
      icon: <Users className='w-8 h-8 text-blue-500' />
    }, {'
      title: 'E-commerce Brands',
      description: 'Automate product promotion across all platforms with AI-generated product descriptions.',
      icon: <ShoppingCart className='w-8 h-8 text-green-500' />
    }, {'
      title: 'Personal Brands',
      description: 'Maintain consistent online presence with AI-assisted content creation and scheduling.',
      icon: <Star className='w-8 h-8 text-purple-500' />
    }
  ]
  return('
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50'>
      {/* Header Section */}
      <div className='bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-800 text-white>
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
                <Share2 className='w-12 h-12 text-white' />
              </div>
            </div>'
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              AI Social Media Scheduler
            </h1>'
            <p className='text-xl m,
    d:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto'>
              Automate your social media presence with AI-powered content creation, smart scheduling, and advanced analytics
            </p>'
            <div className='flex flex-col sm: flex-row gap-4 justify-center>
              <button className='bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center>
                <Calendar className='w-5 h-5 mr-2' />
                Start Free Trial
              </button>'
              <button className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hove,
    r:bg-white hove,
    r:text-purple-600 transition-colors flex items-center justify-center>
                <Play className='w-5 h-5 mr-2' />
                Watch Demo

              </button>
            </div>
          </motion.div>
        </div>
      </div>

              <button;
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap capitalize ${

                    ? 'border-purple-500 text-purple-600'
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


