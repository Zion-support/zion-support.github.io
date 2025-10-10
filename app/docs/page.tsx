'use client'
import React, { useState } from 'react'
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight, Globe, Brain, Cloud, Shield, Settings, Users, Database, Zap, Eye, Sparkles } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const docCategories = [
    {
      title: 'Getting Started',
      icon: 'rocket',
      description: 'Quick start guides and basic setup instructions',
      docs: [}
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', link: '/docs/quick-start' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', link: '/docs/installation' },
        { title: 'Configuration', description: 'Configure your environment', link: '/docs/configuration' }
      ]
    },
    {
      title: 'API Reference',
      icon: 'code',
      description: 'Complete API documentation and endpoints',
      docs: [}
        { title: 'Authentication', description: 'API authentication methods', link: '/docs/api/auth' },
        { title: 'Endpoints', description: 'All available API endpoints', link: '/docs/api/endpoints' },
        { title: 'SDKs', description: 'Client SDKs and libraries', link: '/docs/api/sdks' }
      ]
    },
    {
      title: 'AI Solutions',
      icon: 'brain',
      description: 'AI and machine learning documentation',
      docs: [}
        { title: 'AI Models', description: 'Available AI models and capabilities', link: '/docs/ai/models' },
        { title: 'Training Data', description: 'Data preparation and training', link: '/docs/ai/training' },
        { title: 'Deployment', description: 'Deploying AI models to production', link: '/docs/ai/deployment' }
      ]
    },
    {
      title: 'Cloud Services',
      icon: 'cloud',
      description: 'Cloud infrastructure and services',
      docs: [}
        { title: 'Infrastructure', description: 'Cloud infrastructure setup', link: '/docs/cloud/infrastructure' },
        { title: 'Security', description: 'Cloud security best practices', link: '/docs/cloud/security' },
        { title: 'Monitoring', description: 'Monitoring and logging', link: '/docs/cloud/monitoring' }
      ]
    }
  ]

  const popularDocs = [
    { title: 'Quick Start Guide', description: 'Get started in minutes', category: 'Getting Started', link: '/docs/quick-start' },
    { title: 'API Authentication', description: 'Learn how to authenticate', category: 'API Reference', link: '/docs/api/auth' },
    { title: 'AI Model Training', description: 'Train your own models', category: 'AI Solutions', link: '/docs/ai/training' },
    { title: 'Cloud Security', description: 'Secure your cloud infrastructure', category: 'Cloud Services', link: '/docs/cloud/security' }
  ]

  const filteredDocs = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    );}
  })).filter(category => category.docs.length > 0)

  return (</div></$1></$1></$1></$1>
      {/* Popular Docs */}
      <section className="py-16 px-4"></section></div>Popular Documentation</h2></div>
            {popularDocs.map((doc, index) => (;}
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"></div></div></div></$1>{doc.category}</span></$1>
                  {doc.title}
                </h3>{doc.description}</p>
                  Read More</$1></$1>
            ))}
          </div></$1></$1>
      {/* Documentation Categories */}
      <section className="py-16 px-4"></section></div>Browse by Category</h2></div>
            {filteredDocs.map((category, index) => (;}
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"></div></div></div></$1></div>{category.title}</h3>{category.description}</p></$1></$1></div>
                  {category.docs.map((doc, docIndex) => (</div></div>
                            {doc.title}
                          </h4>{doc.description}</p></$1></$1></$1>
                  ))}
                </div></$1>
            ))}
          </div></$1></$1>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700"></section></div>
            Need Help?</$1>
            Can't find what you're looking for? Our support team is here to help.</$1></div>
              Contact Support</$1>
              Join Community</$1></$1></$1></$1></$1>
  )
}