'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  Users,
  TrendingUp,
  CheckCircle
} from 'lucide-react'
const ItServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const itServices = [
    {
      id: 1,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP migration and management',
      icon: Cloud,
      category: 'Cloud',
      price: 'Starting at $2,500/month',
      features: ['Cloud architecture design', 'Migration planning & execution', 'Cost optimization', 'Security compliance', '24/7 monitoring', 'Disaster recovery']
    },
    {
      id: 2,
      title: 'DevOps & CI/CD Pipeline',
      description: 'Automated development workflows and deployment pipelines for faster delivery',
      icon: Settings,
      category: 'DevOps',
      price: 'Starting at $3,000/month',
      features: ['CI/CD pipeline setup', 'Container orchestration', 'Infrastructure as Code', 'Automated testing', 'Deployment automation', 'Performance monitoring']
    },
    {
      id: 3,
      title: 'Database Management',
      description: 'Comprehensive database services including design, optimization, and maintenance',
      icon: Database,
      category: 'Database',
      price: 'Starting at $1,800/month',
      features: ['Database design & architecture', 'Performance optimization', 'Backup & recovery', 'Security hardening', 'Migration services', '24/7 support']
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions to protect your digital assets and ensure compliance',
      icon: Shield,
      category: 'Security',
      price: 'Starting at $4,000/month',
      features: ['Security assessment', 'Threat detection', 'Vulnerability management', 'Compliance auditing', 'Incident response', 'Security training']
    },
    {
      id: 5,
      title: 'Managed IT Services',
      description: 'Complete IT management including helpdesk, monitoring, and maintenance',
      icon: Settings,
      category: 'Managed',
      price: 'Starting at $2,200/month',
      features: ['24/7 helpdesk support', 'Proactive monitoring', 'Patch management', 'Asset management', 'User training', 'Vendor management']
    },
    {
      id: 6,
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting to align technology with business objectives',
      icon: Globe,
      category: 'Consulting',
      price: 'Starting at $1,500/month',
      features: ['Technology roadmap', 'Vendor evaluation', 'Cost analysis', 'Digital transformation', 'Change management', 'Training programs']
    },
    {
      id: 7,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: Smartphone,
      category: 'Development',
      price: 'Starting at $8,000/project',
      features: ['Native iOS/Android apps', 'Cross-platform development', 'UI/UX design', 'API integration', 'App store deployment', 'Maintenance & updates']
    },
    {
      id: 8,
      title: 'Web Application Development',
      description: 'Custom web applications and e-commerce solutions built with modern technologies',
      icon: Globe,
      category: 'Development',
      price: 'Starting at $6,000/project',
      features: ['Custom web applications', 'E-commerce solutions', 'API development', 'Responsive design', 'Performance optimization', 'SEO optimization']
    }
  ]
  const categories = ['all', 'Cloud', 'DevOps', 'Database', 'Security', 'Managed', 'Consulting', 'Development']
  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '500+', label: 'Projects Completed' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '50%', label: 'Cost Reduction' }
  ]
  return (
    <div> </div><Helmet> </Helmet><title>IT Services - Zion Tech Group | Comprehensive Information Technology Solutions</title>
        <meta> </meta><meta> </meta></Helmet>

      {/* Hero Section */}
      <section> </section><div> </div><h1>IT Services
            </h1><span>& Solutions
            </span></span>
          </h1>
          <p>Comprehensive IT services to support your business growth. From cloud migration to cybersecurity, we've got you covered.
          </p></p>
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
      <section> </section><div> </div><div> </div><div> </div><div> </div><input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
                <div> </div><svg> </svg><path> </path></svg>
                </div>
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

      {/* CTA Section */}
      <section> </section><div> </div><div> </div><h2>Ready to Transform Your IT Infrastructure?
            </h2></h2>
            <p>Let our expert team help you build a robust, scalable, and secure IT environment that supports your business goals.
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
export default ItServicesPage