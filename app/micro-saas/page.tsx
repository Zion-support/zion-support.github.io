'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react'
interface MicroSaasProduct {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
  price: string
  users: string
  popular: boolean
  category: string
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const products: MicroSaasProduct[] = [
    {
      id: '1',
      icon: '📊',
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights',
      features: [
        'Real-time data visualization',
        'Custom dashboard builder',
        'AI-powered insights',
        'Advanced reporting',
        'API integration',
        'Mobile-responsive dashboard'
      ],
      price: '$89/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '💬',
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis',
      features: [
        'Advanced AI chatbot with natural language processing',
        'Multi-channel support (web, mobile, social)',
        'Sentiment analysis and mood tracking',
        'Live chat integration',
        'Knowledge base management',
        'Performance analytics'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Communication'
    },
    {
      id: '3',
      icon: '🔐',
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection and automated response',
      features: [
        'Real-time threat monitoring',
        'AI-powered threat detection',
        'Automated incident response',
        'Compliance reporting',
        'Vulnerability scanning',
        'Security analytics dashboard'
      ],
      price: '$299/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization',
      features: [
        'Automated cloud backup',
        'Disaster recovery planning',
        'Version control and file history',
        'AI-powered storage optimization',
        'Cross-platform sync',
        'Advanced encryption'
      ],
      price: '$79/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Storage'
    },
    {
      id: '5',
      icon: '📈',
      title: 'Zion Performance AI',
      description: 'Advanced application performance monitoring with AI-powered optimization recommendations',
      features: [
        'Real-time performance monitoring',
        'AI-powered optimization suggestions',
        'Error tracking and alerting',
        'User experience analytics',
        'Database performance insights',
        'Mobile app performance tracking'
      ],
      price: '$129/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Monitoring'
    },
    {
      id: '6',
      icon: '🤖',
      title: 'Zion AI Workflow',
      description: 'Intelligent business process automation with custom AI models and workflow optimization',
      features: [
        'Visual workflow builder',
        'AI-powered process optimization',
        'Custom automation rules',
        'Integration with 200+ tools',
        'Advanced analytics',
        'Multi-tenant architecture'
      ],
      price: '$199/month',
      users: 'Up to 75 users',
      popular: true,
      category: 'AI'
    },
    {
      id: '7',
      icon: '📧',
      title: 'Zion Email Marketing AI',
      description: 'AI-powered email marketing platform with advanced segmentation and personalization',
      features: [
        'AI-powered content generation',
        'Advanced audience segmentation',
        'Automated campaign optimization',
        'A/B testing and analytics',
        'Template library',
        'Deliverability optimization'
      ],
      price: '$99/month',
      users: 'Up to 60 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '8',
      icon: '💰',
      title: 'Zion Finance AI',
      description: 'Intelligent financial management and accounting automation platform',
      features: [
        'Automated bookkeeping',
        'AI-powered expense categorization',
        'Financial forecasting',
        'Invoice generation and tracking',
        'Tax preparation assistance',
        'Multi-currency support'
      ],
      price: '$179/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Finance'
    }
  ]
  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Marketing', 'Finance']
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory)
  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '10K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ]
  return (
    <div> </div><Helmet> </Helmet><title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta> </meta><meta> </meta></Helmet>

      {/* Hero Section */}
      <section> </section><div> </div><h1>Micro SaaS
            </h1><span>Solutions
            </span></span>
          </h1>
          <p>Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful solutions that work.
          </p></p>
          
          {/* Stats */}
          <div>{stats.map((stat, index) => (
              </div><div> </div><div>{stat.icon}
                </div></div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section> </section><div> </div><div>{categories.map((category) => (
              </div><button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section> </section><div> </div><div>{filteredProducts.map((product) => (
              </div><div>{product.popular && (
                  </div><div> </div><span> </span><Star>Most Popular
                    </Star></span>
                  </div>
                )}
                
                <div> </div><div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div> </div><span>{product.users}</span>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mt-4">{product.price}</div>
                </div>
                
                <ul>{product.features.map((feature, index) => (
                    </ul><li> </li><CheckCircle> </CheckCircle><span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div> </div><Link>Get Started
                  </Link></Link>
                  <button>Learn More
                  </button></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section> </section><div> </div><div> </div><h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
            <p>Our micro SaaS products are designed for quick deployment, easy integration, and immediate value.
            </p></p>
          </div>
          
          <div> </div><div> </div><div> </div><Zap> </Zap></div>
              <h3 className="text-xl font-semibold text-white mb-4">Quick Setup</h3>
              <p className="text-gray-300">Get up and running in minutes with our streamlined onboarding process.</p>
            </div>
            
            <div> </div><div> </div><Shield> </Shield></div>
              <h3 className="text-xl font-semibold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security and 99.9% uptime guarantee for all our solutions.</p>
            </div>
            
            <div> </div><div> </div><Cloud> </Cloud></div>
              <h3 className="text-xl font-semibold text-white mb-4">Scalable</h3>
              <p className="text-gray-300">Grow with confidence - our solutions scale with your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section> </section><div> </div><div> </div><h2>Ready to Get Started?
            </h2></h2>
            <p>Choose from our collection of micro SaaS solutions or contact us for a custom solution tailored to your needs.
            </p></p>
            <div> </div><Link> </Link><span>Contact Us</span>
                <ArrowRight> </ArrowRight></Link>
              <Link> </Link><span>View Pricing</span>
                <ArrowRight> </ArrowRight></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default MicroSaasPage