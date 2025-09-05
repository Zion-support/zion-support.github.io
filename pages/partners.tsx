import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Zap,
  Users,
  Building,
  Award,
  Target,
  TrendingUp
} from 'lucide-react';
import Layout from '../components/Layout';

const partnershipTypes = [
  {
    title: 'Technology Partners',
    description: 'Integrate with leading technology platforms and tools',
    icon: Zap,
    color: 'from-blue-600 to-purple-600',
    benefits: [
      'API Integration',
      'Technical Support',
      'Co-marketing Opportunities',
      'Joint Development'
    ]
  },
  {
    title: 'Channel Partners',
    description: 'Resell our solutions through your network',
    icon: Users,
    color: 'from-green-600 to-blue-600',
    benefits: [
      'Competitive Pricing',
      'Sales Training',
      'Marketing Materials',
      'Revenue Sharing'
    ]
  },
  {
    title: 'Strategic Partners',
    description: 'Long-term strategic alliances for mutual growth',
    icon: Handshake,
    color: 'from-purple-600 to-pink-600',
    benefits: [
      'Joint Ventures',
      'Market Expansion',
      'Resource Sharing',
      'Innovation Collaboration'
    ]
  },
  {
    title: 'Solution Partners',
    description: 'Complementary solutions that enhance our offerings',
    icon: Building,
    color: 'from-orange-600 to-red-600',
    benefits: [
      'Solution Integration',
      'Technical Certification',
      'Go-to-Market Support',
      'Customer Success'
    ]
  }
];

const partnerBenefits = [
  {
    title: 'Revenue Growth',
    description: 'Increase your revenue through our partnership programs',
    icon: TrendingUp,
    stat: '40%'
  },
  {
    title: 'Market Access',
    description: 'Access new markets and customer segments',
    icon: Globe,
    stat: '15+'
  },
  {
    title: 'Technical Support',
    description: 'Comprehensive technical support and training',
    icon: Shield,
    stat: '24/7'
  },
  {
    title: 'Customer Satisfaction',
    description: 'Higher customer satisfaction through better solutions',
    icon: Star,
    stat: '95%'
  }
];

const successStories = [
  {
    company: 'TechCorp Solutions',
    industry: 'Technology',
    partnership: 'Technology Partner',
    result: 'Increased API usage by 300% and expanded to 5 new markets',
    logo: '/images/partners/techcorp.png'
  },
  {
    company: 'Global Systems Inc',
    industry: 'Enterprise Software',
    partnership: 'Channel Partner',
    result: 'Generated $2M in additional revenue within first year',
    logo: '/images/partners/global-systems.png'
  },
  {
    company: 'InnovateTech',
    industry: 'AI/ML',
    partnership: 'Strategic Partner',
    result: 'Launched 3 joint products and expanded customer base by 150%',
    logo: '/images/partners/innovate-tech.png'
  }
];

const requirements = [
  {
    category: 'Technology Partners',
    items: [
      'API integration capabilities',
      'Technical certification',
      'Security compliance',
      'Performance standards'
    ]
  },
  {
    category: 'Channel Partners',
    items: [
      'Sales team certification',
      'Marketing commitment',
      'Customer support capability',
      'Financial stability'
    ]
  },
  {
    category: 'Strategic Partners',
    items: [
      'Strategic alignment',
      'Market presence',
      'Innovation capability',
      'Long-term commitment'
    ]
  },
  {
    category: 'Solution Partners',
    items: [
      'Solution compatibility',
      'Technical expertise',
      'Customer references',
      'Integration capability'
    ]
  }
];

export default function PartnersPage() {
  return (
    <Layout
      title="Partners - Zion Tech Group"
      description="Join our partner ecosystem and grow your business with Zion Tech Group. Technology, channel, strategic, and solution partnerships available."
      keywords="partners, partnerships, channel partners, technology partners, strategic alliances, business partnerships"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partner With Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Join our growing partner ecosystem and unlock new opportunities for growth, 
              innovation, and mutual success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#partnership-types"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Explore Partnerships
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-100 font-semibold rounded-lg hover:border-blue-300 hover:text-white transition-all duration-200"
              >
                Become a Partner
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-types" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Partnership Types
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Choose the partnership model that best fits your business goals and capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-full flex items-center justify-center mb-6`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Discover the benefits of joining our partner ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-white transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              See how our partners have achieved remarkable success with our solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                <p className="text-gray-600 mb-4">{story.industry} • {story.partnership}</p>
                <p className="text-gray-700 mb-4">{story.result}</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <Award className="w-4 h-4 mr-2" />
                  Success Story
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Partnership Requirements
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Understand the requirements for each type of partnership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{req.category}</h3>
                <div className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <Target className="w-4 h-4 text-blue-500 mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth and success. 
              Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}