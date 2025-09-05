import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Globe, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Building,
  Zap,
  Shield,
  Cloud,
  Brain,
  Phone,
  Mail,
  Calendar,
  ExternalLink
} from 'lucide-react';

const partnerCategories = [
  {
    name: 'Technology Partners',
    description: 'Leading technology companies that provide the tools and platforms we use',
    icon: Zap,
    color: 'blue'
  },
  {
    name: 'Cloud Partners',
    description: 'Cloud infrastructure providers that enable our scalable solutions',
    icon: Cloud,
    color: 'purple'
  },
  {
    name: 'Security Partners',
    description: 'Cybersecurity experts who help us maintain the highest security standards',
    icon: Shield,
    color: 'green'
  },
  {
    name: 'AI Partners',
    description: 'AI and machine learning companies that enhance our capabilities',
    icon: Brain,
    color: 'orange'
  }
];

const partners = [
  {
    name: 'Microsoft',
    category: 'Technology Partners',
    type: 'Strategic Partner',
    description: 'Microsoft Azure cloud platform and enterprise solutions',
    logo: '/api/placeholder/200/100',
    website: 'https://microsoft.com',
    benefits: [
      'Azure cloud infrastructure',
      'Office 365 integration',
      'Enterprise security solutions',
      'AI and ML services'
    ],
    featured: true
  },
  {
    name: 'Amazon Web Services',
    category: 'Cloud Partners',
    type: 'Cloud Infrastructure',
    description: 'Leading cloud computing platform for scalable solutions',
    logo: '/api/placeholder/200/100',
    website: 'https://aws.amazon.com',
    benefits: [
      'Scalable cloud infrastructure',
      'AI and ML services',
      'Global data centers',
      'Enterprise-grade security'
    ],
    featured: true
  },
  {
    name: 'Google Cloud',
    category: 'Cloud Partners',
    type: 'Cloud Platform',
    description: 'Advanced cloud platform with AI and analytics capabilities',
    logo: '/api/placeholder/200/100',
    website: 'https://cloud.google.com',
    benefits: [
      'Google Cloud Platform',
      'AI and ML tools',
      'Data analytics services',
      'Global network infrastructure'
    ],
    featured: true
  },
  {
    name: 'IBM',
    category: 'AI Partners',
    type: 'AI Solutions',
    description: 'Enterprise AI and cognitive computing solutions',
    logo: '/api/placeholder/200/100',
    website: 'https://ibm.com',
    benefits: [
      'Watson AI platform',
      'Enterprise AI solutions',
      'Cognitive computing',
      'Industry expertise'
    ],
    featured: false
  },
  {
    name: 'Cisco',
    category: 'Security Partners',
    type: 'Network Security',
    description: 'Network security and infrastructure solutions',
    logo: '/api/placeholder/200/100',
    website: 'https://cisco.com',
    benefits: [
      'Network security solutions',
      'Infrastructure management',
      'Threat detection',
      'Compliance tools'
    ],
    featured: false
  },
  {
    name: 'Salesforce',
    category: 'Technology Partners',
    type: 'CRM Platform',
    description: 'Customer relationship management and business solutions',
    logo: '/api/placeholder/200/100',
    website: 'https://salesforce.com',
    benefits: [
      'CRM platform',
      'Marketing automation',
      'Sales analytics',
      'Custom integrations'
    ],
    featured: false
  },
  {
    name: 'Oracle',
    category: 'Technology Partners',
    type: 'Database Solutions',
    description: 'Enterprise database and cloud solutions',
    logo: '/api/placeholder/200/100',
    website: 'https://oracle.com',
    benefits: [
      'Enterprise databases',
      'Cloud infrastructure',
      'Business applications',
      'Data management'
    ],
    featured: false
  },
  {
    name: 'NVIDIA',
    category: 'AI Partners',
    type: 'AI Hardware',
    description: 'AI computing and GPU solutions for machine learning',
    logo: '/api/placeholder/200/100',
    website: 'https://nvidia.com',
    benefits: [
      'GPU computing',
      'AI acceleration',
      'Deep learning platforms',
      'High-performance computing'
    ],
    featured: false
  }
];

const partnershipBenefits = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Access to worldwide markets and customers through our partner network'
  },
  {
    icon: Award,
    title: 'Certified Expertise',
    description: 'Certified professionals with deep knowledge of partner technologies'
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    description: 'Work closely with partners to deliver the best solutions for clients'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Maintain the highest security standards through partner best practices'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Access to cutting-edge technologies and innovative solutions'
  },
  {
    icon: Star,
    title: 'Quality Assurance',
    description: 'Rigorous quality standards and continuous improvement processes'
  }
];

const partnershipTypes = [
  {
    name: 'Technology Partnership',
    description: 'Integrate our solutions with leading technology platforms',
    requirements: [
      'Proven technology platform',
      'API integration capabilities',
      'Enterprise-grade security',
      'Global support network'
    ]
  },
  {
    name: 'Channel Partnership',
    description: 'Resell and implement our solutions through your network',
    requirements: [
      'Established customer base',
      'Technical implementation team',
      'Sales and marketing capabilities',
      'Industry expertise'
    ]
  },
  {
    name: 'Strategic Alliance',
    description: 'Joint go-to-market strategies and co-innovation',
    requirements: [
      'Complementary solutions',
      'Shared market vision',
      'Joint development capabilities',
      'Long-term commitment'
    ]
  }
];

export default function PartnersPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPartners = selectedCategory === 'All' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  const categories = ['All', ...partnerCategories.map(cat => cat.name)];

  return (
    <>
      <Head>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Learn about our partner ecosystem and how we work together to deliver exceptional solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, cloud partners, AI partners, technology alliances" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic technology partnerships that enhance our capabilities." />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Partners
                <span className="block text-blue-400">Strategic Technology Alliances</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We work with industry-leading technology companies to deliver comprehensive solutions that drive business success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With Us?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our strategic partnerships enable us to deliver exceptional value to our clients through combined expertise and resources.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with different types of partners to provide comprehensive technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    category.color === 'blue' ? 'bg-blue-100' :
                    category.color === 'purple' ? 'bg-purple-100' :
                    category.color === 'green' ? 'bg-green-100' : 'bg-orange-100'
                  }`}>
                    <category.icon className={`w-8 h-8 ${
                      category.color === 'blue' ? 'text-blue-600' :
                      category.color === 'purple' ? 'text-purple-600' :
                      category.color === 'green' ? 'text-green-600' : 'text-orange-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{category.name}</h3>
                  <p className="text-gray-600 text-center">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Partners</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Industry leaders who trust us to deliver exceptional technology solutions.
              </p>
              
              {/* Category Filter */}
              <div className="flex justify-center">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                    partner.featured ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {partner.featured && (
                    <div className="flex justify-end mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Building className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{partner.type}</p>
                    <p className="text-gray-600 text-sm">{partner.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Website
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnership Types</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer different types of partnerships to meet various business needs and objectives.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">{type.name}</h3>
                  <p className="text-gray-600 mb-6 text-center">{type.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {type.requirements.map((requirement, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Become a Partner
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join our partner ecosystem and help us deliver exceptional technology solutions to clients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Partner With Us
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Partnership Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}