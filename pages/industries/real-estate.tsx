import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Home, 
  Building, 
  MapPin, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Shield,
  Zap,
  Database
} from 'lucide-react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';

const realEstateSolutions = [
  {
    title: "Property Management Systems",
    description: "Comprehensive property management and tenant tracking solutions",
    icon: Home,
    features: [
      "Property Portfolio Management",
      "Tenant Management",
      "Lease Tracking",
      "Maintenance Scheduling",
      "Financial Reporting",
      "Document Management"
    ],
    price: "Starting at $2,000/month"
  },
  {
    title: "Lead Management & CRM",
    description: "Streamline lead generation and customer relationship management",
    icon: Users,
    features: [
      "Lead Capture & Tracking",
      "Customer Database",
      "Follow-up Automation",
      "Pipeline Management",
      "Communication Tools",
      "Performance Analytics"
    ],
    price: "Starting at $1,500/month"
  },
  {
    title: "Market Analysis & Analytics",
    description: "Data-driven insights for property valuation and market trends",
    icon: BarChart3,
    features: [
      "Property Valuation Tools",
      "Market Trend Analysis",
      "Comparative Market Analysis",
      "Investment Analytics",
      "ROI Calculations",
      "Predictive Modeling"
    ],
    price: "Starting at $2,500/month"
  },
  {
    title: "Virtual Tours & 3D Visualization",
    description: "Immersive property showcasing with virtual reality technology",
    icon: Globe,
    features: [
      "360° Virtual Tours",
      "3D Property Models",
      "Interactive Floor Plans",
      "AR Property Visualization",
      "Mobile App Integration",
      "Social Media Sharing"
    ],
    price: "Starting at $3,000/month"
  },
  {
    title: "Transaction Management",
    description: "Streamline the entire real estate transaction process",
    icon: Building,
    features: [
      "Deal Pipeline Management",
      "Contract Management",
      "Document Automation",
      "E-signature Integration",
      "Commission Tracking",
      "Closing Coordination"
    ],
    price: "Starting at $1,800/month"
  },
  {
    title: "Marketing Automation",
    description: "Automated marketing campaigns and lead nurturing systems",
    icon: Zap,
    features: [
      "Email Marketing Campaigns",
      "Social Media Automation",
      "Lead Nurturing Sequences",
      "Content Management",
      "Performance Tracking",
      "A/B Testing"
    ],
    price: "Starting at $1,200/month"
  }
];

const propTechFeatures = [
  {
    title: "AI-Powered Property Matching",
    description: "Match properties with buyers using machine learning algorithms",
    icon: "🤖"
  },
  {
    title: "Blockchain Property Records",
    description: "Secure, immutable property ownership and transaction records",
    icon: "🔗"
  },
  {
    title: "IoT Smart Building Management",
    description: "Connected devices for energy management and maintenance",
    icon: "🏠"
  },
  {
    title: "Mobile-First Solutions",
    description: "Native mobile apps for agents, buyers, and property managers",
    icon: "📱"
  },
  {
    title: "Cloud-Based Infrastructure",
    description: "Scalable, secure cloud solutions for real estate operations",
    icon: "☁️"
  },
  {
    title: "Data Analytics & Insights",
    description: "Advanced analytics for market trends and business intelligence",
    icon: "📊"
  }
];

const whyChooseUs = [
  {
    title: "Real Estate Expertise",
    description: "Deep understanding of real estate industry challenges and opportunities",
    icon: "🏘️"
  },
  {
    title: "Proven Technology",
    description: "Cutting-edge PropTech solutions with proven track record",
    icon: "💻"
  },
  {
    title: "Scalable Solutions",
    description: "Solutions that grow with your business from startup to enterprise",
    icon: "📈"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support for your real estate technology needs",
    icon: "🛡️"
  }
];

export default function RealEstatePage() {
  return (
    <Layout
      title="Real Estate Technology Solutions - Zion Tech Group"
      description="Comprehensive PropTech solutions for real estate professionals. Property management, lead generation, market analysis, and virtual tours to accelerate your real estate business."
      keywords="PropTech, real estate technology, property management, lead generation, virtual tours, real estate CRM, market analysis"
      canonical="https://ziontechgroup.com/industries/real-estate"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Real Estate 
              <span className="text-indigo-400"> Technology Solutions</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-indigo-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your real estate business with cutting-edge PropTech solutions. 
              From property management to virtual tours, we help you stay ahead in the 
              competitive real estate market.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Real Estate Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive PropTech solutions designed to streamline your real estate operations and drive growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realEstateSolutions.map((solution, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">
                  <solution.icon className="w-12 h-12 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-indigo-600">{solution.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PropTech Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cutting-Edge PropTech Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the latest technology trends to revolutionize your real estate business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propTechFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Real Estate Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep real estate expertise with cutting-edge technology to deliver solutions that drive results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Real Estate Business?</h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            Join hundreds of real estate professionals who trust Zion Tech Group for their PropTech needs. 
            Let's discuss how we can help accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}