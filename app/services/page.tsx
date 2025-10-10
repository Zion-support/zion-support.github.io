'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Zap,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Settings,
  Calendar,
  CheckSquare,
  FileText,
  Search,
  Filter
} from 'lucide-react'
const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const services = [
    {
      id: 1,
      name: 'AI Strategy & Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and develop a comprehensive AI roadmap.',
      category: 'ai',
      icon: Brain,
      features: ['AI Roadmap Development', 'Technology Assessment', 'Implementation Planning', 'ROI Analysis']
    },
    {
      id: 2,
      name: 'Machine Learning Solutions',
      description: 'Custom machine learning models tailored to your specific business needs and data.',
      category: 'ai',
      icon: Brain,
      features: ['Custom ML Models', 'Data Preprocessing', 'Model Training', 'Performance Optimization']
    },
    {
      id: 3,
      name: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions for your business operations.',
      category: 'it',
      icon: Cloud,
      features: ['Cloud Migration', 'Auto-scaling', 'Security Implementation', '24/7 Monitoring']
    },
    {
      id: 4,
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      category: 'security',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response']
    },
    {
      id: 5,
      name: 'Custom Development',
      description: 'Bespoke software solutions designed to meet your unique business requirements.',
      category: 'development',
      icon: Code,
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      id: 6,
      name: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      category: 'analytics',
      icon: BarChart,
      features: ['Data Visualization', 'Real-time Dashboards', 'Predictive Modeling', 'Custom Reports']
    },
    {
      id: 7,
      name: 'IT Consulting',
      description: 'Strategic technology consulting to optimize your IT infrastructure and processes.',
      category: 'consulting',
      icon: Users,
      features: ['Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Change Management']
    },
    {
      id: 8,
      name: 'Automation Solutions',
      description: 'Streamline your operations with intelligent automation and workflow optimization.',
      category: 'automation',
      icon: Zap,
      features: ['Process Automation', 'Workflow Optimization', 'RPA Implementation', 'Integration Services']
    },
    {
      id: 9,
      name: 'Database Management',
      description: 'Optimize your database performance and ensure data integrity and security.',
      category: 'database',
      icon: Database,
      features: ['Performance Tuning', 'Data Migration', 'Backup Solutions', 'Security Hardening']
    }
  ]
  const categories = ['all', 'ai', 'it', 'security', 'development', 'analytics', 'consulting', 'automation', 'database']
  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })
  return (
    <>
      <Helmet> </Helmet><title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta> </meta><meta> </meta></Helmet>

      <Navigation> </Navigation><main>{/* Hero Section */}
        </main><section> </section><div> </div><div> </div><div> </div><h1>Our </h1><span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Services</span>
              </h1>
              <p>Comprehensive AI and IT solutions designed to accelerate your digital transformation 
                and drive business growth. From strategy to implementation, we're your technology partner.
              </p></p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section> </section><div> </div><div> </div><div> </div><Search> </Search><input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-slate-800 border border-cyan-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              
              <div> </div><Filter> </Filter><select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-slate-800 border border-cyan-500/20 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
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
                    <h3>{service.name}
                    </h3></h3>
                  </div>
                  
                  <p>{service.description}
                  </p></p>
                  
                  <ul>{service.features.map((feature, index) => (
                      </ul><li> </li><CheckSquare>{feature}
                      </CheckSquare></li>
                    ))}
                  </ul>
                  
                  <button>Learn More
                  </button></button>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div> </div><div> </div><Search> </Search></div>
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section> </section><div> </div><h2>Ready to Transform Your Business?
            </h2></h2>
            <p>Let's discuss how our services can help you achieve your technology goals.
            </p></p>
            <div> </div><a> </a><span className="relative z-10">Get Started Today</span>
                <div> </div></a>
              <a>View Pricing
              </a></a>
            </div>
          </div>
        </section>
      </main>

      <Footer> </Footer></>
  )
}
export default ServicesPage