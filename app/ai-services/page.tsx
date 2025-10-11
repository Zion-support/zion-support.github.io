import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, Cloud, Shield, BarChart, Code, Smartphone, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react'
'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, Zap, Shield, BarChart, Users, ArrowRight, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'analytics', name: 'Data Analytics', icon: BarChart },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'mobile', name: 'Mobile', icon: Smartphone }
  ]

  const services = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom AI Models', 'Data Visualization'],
      price: 'From $2,999/month',
      rating: 4.9,
      reviews: 127,
      icon: Brain
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Management',
      description: 'Scalable, secure cloud solutions with 99.9% uptime guarantee.',
      category: 'cloud',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Security Monitoring', '24/7 Support'],
      price: 'From $1,999/month',
      rating: 4.8,
      reviews: 89,
      icon: Cloud
    },
    {
      id: 3,
      title: 'Advanced Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your digital assets.',
      category: 'security',
      features: ['Threat Detection', 'Penetration Testing', 'Compliance Audit', 'Incident Response'],
      price: 'From $3,999/month',
      rating: 4.9,
      reviews: 156,
      icon: Shield
    },
    {
      id: 4,
      title: 'Data Analytics & Visualization',
      description: 'Turn your data into powerful business insights with our analytics platform.',
      category: 'analytics',
      features: ['Real-time Analytics', 'Custom Reports', 'Data Integration', 'Machine Learning'],
      price: 'From $2,499/month',
      rating: 4.7,
      reviews: 98,
      icon: BarChart
    },
    {
      id: 5,
      title: 'Custom Web Development',
      description: 'Modern, responsive web applications built with the latest technologies.',
      category: 'development',
      features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'API Development'],
      price: 'From $4,999/project',
      rating: 4.8,
      reviews: 203,
      icon: Code
    },
    {
      id: 6,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      category: 'mobile',
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development'],
      price: 'From $6,999/project',
      rating: 4.9,
      reviews: 145,
      icon: Smartphone
    }
  ]

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory)

  return (
    <></><Helmet>
<title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and business intelligence solutions." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, business intelligence, AI consulting" />
      </Helmet>

<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        </div><section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
Advanced <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions. From machine learning to natural language processing, we deliver intelligent solutions that drive real results.
            </p>
            </div>
<div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="flex flex-wrap justify-center gap-4">
{categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {category.name}
                  </button>
                )
              })

            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{filteredServices.map((service) => {
                const Icon = service.icon
                return (
                  </div>
<div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300">
                    </div>
<div className="flex items-center mb-4">
                      </div>
<div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
<div>
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                        </div>
<div className="flex items-center mt-1">
                          </div>
<div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(service.rating)
                                    ? 'text-yellow-400'
                                    : 'text-gray-400'
                                }`}
                                fill="currentColor"
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-300 ml-2">
                            {service.rating} ({service.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )
              })
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver AI solutions that actually work.
              </p>
            </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              </div>
<div className="text-center">
                </div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />

                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">
                  Our AI solutions have helped clients achieve 300% average ROI and 50% reduction in operational costs.
                </p>
              </div>
<div className="text-center">
                </div>
<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">
                  Our team includes PhD-level AI researchers and engineers with decades of combined experience.
                </p>
              </div>
<div className="text-center">
                </div>
<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">
                  All our solutions are built with enterprise-grade security and compliance standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
<section className="py-20 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
            </p>
            </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
</div>
      
      <Footer />
    </>
  )
}

export default AiServicesPage