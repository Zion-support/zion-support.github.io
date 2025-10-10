'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart, 
  Box, 
  Mic, 
  Shield, 
  TrendingUp, 
  Target, 
  FileText, 
  Search, 
  Phone, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Globe, 
  Database, 
  Users, 
  Settings 
} from 'lucide-react'
const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const aiServices = [
    {
      id: 1,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI that understands context and provides human-like responses',
      icon: MessageSquare,
      category: 'Customer Service',
      price: 'Starting at $2,999/month',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis', '24/7 availability', 'Custom training', 'Analytics dashboard']
    },
    {
      id: 2,
      title: 'Content Generation AI',
      description: 'Automated content creation for blogs, social media, marketing materials, and more',
      icon: FileText,
      category: 'Content',
      price: 'Starting at $1,999/month',
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'Product descriptions', 'SEO optimization', 'Brand voice consistency']
    },
    {
      id: 3,
      title: 'Predictive Analytics',
      description: 'Advanced data analysis and forecasting to drive business decisions',
      icon: BarChart,
      category: 'Analytics',
      price: 'Starting at $4,999/month',
      features: ['Sales forecasting', 'Customer behavior analysis', 'Risk assessment', 'Market trends', 'Real-time insights', 'Custom dashboards']
    },
    {
      id: 4,
      title: 'Computer Vision',
      description: 'Image and video analysis for quality control, security, and automation',
      icon: Eye,
      category: 'Computer Vision',
      price: 'Starting at $3,999/month',
      features: ['Object detection', 'Image classification', 'Quality inspection', 'Facial recognition', 'OCR processing', 'Real-time analysis']
    },
    {
      id: 5,
      title: 'Voice AI Solutions',
      description: 'Speech recognition and voice-enabled applications for enhanced user experience',
      icon: Mic,
      category: 'Voice AI',
      price: 'Starting at $2,499/month',
      features: ['Speech-to-text', 'Text-to-speech', 'Voice commands', 'Multi-language support', 'Noise cancellation', 'Custom voice models']
    },
    {
      id: 6,
      title: 'Process Automation',
      description: 'Intelligent automation of repetitive tasks and workflows',
      icon: Zap,
      category: 'Automation',
      price: 'Starting at $3,499/month',
      features: ['Workflow automation', 'Document processing', 'Data extraction', 'Email automation', 'Task scheduling', 'Error handling']
    },
    {
      id: 7,
      title: 'AI Security Solutions',
      description: 'Advanced threat detection and security monitoring using AI',
      icon: Shield,
      category: 'Security',
      price: 'Starting at $4,499/month',
      features: ['Threat detection', 'Anomaly detection', 'Fraud prevention', 'Access control', 'Incident response', 'Compliance monitoring']
    },
    {
      id: 8,
      title: 'Mobile AI Integration',
      description: 'AI-powered mobile applications with intelligent features',
      icon: Box,
      category: 'Mobile',
      price: 'Starting at $5,999/project',
      features: ['Mobile app AI', 'Offline processing', 'Real-time inference', 'Cross-platform support', 'Performance optimization', 'User personalization']
    }
  ]
  const categories = ['all', 'Customer Service', 'Content', 'Analytics', 'Computer Vision', 'Voice AI', 'Automation', 'Security', 'Mobile']
  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '500+', label: 'AI Models Deployed' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '95%', label: 'Accuracy Rate' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '60%', label: 'Cost Reduction' }
  ]
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]
  return (
    <div> </div><Helmet> </Helmet><title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta> </meta><meta> </meta></Helmet>

      {/* Hero Section */}
      <section> </section><div> </div><h1>AI Services
            </h1><span>& Solutions
            </span></span>
          </h1>
          <p>Transform your business with cutting-edge artificial intelligence solutions. From chatbots to computer vision, we deliver AI that drives real results.
          </p></p>
          <div> </div><Link> </Link><span>Get Started</span>
              <ArrowRight> </ArrowRight></Link>
            <Link> </Link><span>Free Consultation</span>
              <ArrowRight> </ArrowRight></Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section> </section><div> </div><div>{stats.map((stat, index) => (
              </div><div> </div><div>{stat.icon}
                </div></div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section> </section><div> </div><div> </div><div> </div><div> </div><Search> </Search><input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>
            <div> </div><select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              >
                {categories.map((category) => (
                  <option>{category === 'all' ? 'All Services' : category}
                  </option></option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section> </section><div> </div><div>{filteredServices.map((service) => (
              </div><div> </div><div> </div><div> </div><service> </service></div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div> </div><h4 className="text-sm font-medium text-gray-400 mb-3">Key Features:</h4>
                  <ul>{service.features.slice(0, 4).map((feature, index) => (
                      </ul><li> </li><CheckCircle>{feature}
                      </CheckCircle></li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 text-sm">+{service.features.length - 4} more features</li>
                    )}
                  </ul>
                </div>
                
                <div> </div><div className="text-lg font-semibold text-cyan-400">{service.price}</div>
                </div>
                
                <div> </div><Link>Get Quote
                  </Link></Link>
                  <button>Learn More
                    </button><ArrowRight> </ArrowRight></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section> </section><div> </div><div> </div><h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
            <p>Our AI solutions are designed to deliver measurable results and drive business growth.
            </p></p>
          </div>
          
          <div>{benefits.map((benefit, index) => (
              </div><div> </div><CheckCircle> </CheckCircle><span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section> </section><div> </div><div> </div><h2>Ready to Transform Your Business with AI?
            </h2></h2>
            <p>Contact our AI experts to discuss your requirements and get a customized solution that drives real results.
            </p></p>
            <div> </div><Link> </Link><span>Contact Us</span>
                <ArrowRight> </ArrowRight></Link>
              <Link> </Link><span>Free Consultation</span>
                <ArrowRight> </ArrowRight></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AIServicesPage