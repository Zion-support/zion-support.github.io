import React from 'react';
<<<<<<< HEAD
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
import MainLayout from '../components/layout/MainLayout';

const partnerTypes = [
  {
    title: "Technology Partners",
    description: "Strategic partnerships with leading technology providers to deliver integrated solutions.",
    icon: Globe,
    benefits: ["Joint Solutions", "Technical Support", "Co-marketing", "Training Programs"]
  },
  {
    title: "Channel Partners",
    description: "Reseller and distribution partnerships to expand our market reach.",
    icon: Building,
    benefits: ["Reseller Programs", "Sales Training", "Marketing Support", "Competitive Pricing"]
  },
  {
    title: "Integration Partners",
    description: "Partners who help integrate our solutions with existing enterprise systems.",
    icon: Zap,
    benefits: ["Technical Integration", "Custom Development", "Support Services", "Certification Programs"]
  },
  {
    title: "Consulting Partners",
    description: "Strategic consulting partnerships for enterprise implementations and transformations.",
    icon: Users,
    benefits: ["Joint Consulting", "Implementation Support", "Best Practices", "Knowledge Sharing"]
  }
];

const currentPartners = [
  {
    name: "Microsoft",
    category: "Cloud Platform",
    description: "Strategic partnership for Azure cloud solutions and Microsoft 365 integrations.",
    logo: "Microsoft",
    partnership: "Technology Partner"
  },
  {
    name: "Amazon Web Services",
    category: "Cloud Infrastructure",
    description: "AWS Advanced Consulting Partner providing cloud migration and optimization services.",
    logo: "AWS",
    partnership: "Technology Partner"
  },
  {
    name: "Google Cloud",
    category: "AI & Analytics",
    description: "Google Cloud Partner specializing in AI/ML solutions and data analytics.",
    logo: "Google Cloud",
    partnership: "Technology Partner"
  },
  {
    name: "Salesforce",
    category: "CRM Platform",
    description: "Salesforce Consulting Partner delivering custom CRM solutions and integrations.",
    logo: "Salesforce",
    partnership: "Technology Partner"
  },
  {
    name: "IBM",
    category: "Enterprise Solutions",
    description: "IBM Business Partner providing enterprise software and consulting services.",
    logo: "IBM",
    partnership: "Channel Partner"
  },
  {
    name: "Oracle",
    category: "Database & ERP",
    description: "Oracle Partner Network member delivering database and ERP solutions.",
    logo: "Oracle",
    partnership: "Technology Partner"
  }
];

const benefits = [
  {
    title: "Revenue Growth",
    description: "Access to new markets and revenue streams through partner channels.",
    icon: TrendingUp
  },
  {
    title: "Technical Support",
    description: "Comprehensive technical support and training programs for partners.",
    icon: Shield
  },
  {
    title: "Marketing Support",
    description: "Co-marketing opportunities and joint go-to-market strategies.",
    icon: Target
  },
  {
    title: "Certification Programs",
    description: "Professional certification programs to enhance partner capabilities.",
    icon: Award
  }
];

const requirements = [
  "Proven track record in technology services",
  "Strong customer relationships and market presence",
  "Technical expertise in relevant domains",
  "Commitment to quality and customer satisfaction",
  "Alignment with our values and business objectives"
];

export default function PartnersPage() {
  return (
    <MainLayout 
      title="Partners - Zion Tech Group"
      description="Join our partner ecosystem and grow your business with Zion Tech Group. Strategic partnerships, channel programs, and integration opportunities."
      keywords="partners, partnerships, channel partners, technology partners, reseller programs, strategic alliances"
    >
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Program</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Join our growing partner ecosystem and unlock new opportunities for growth. 
                Together, we can deliver exceptional value to our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Become a Partner
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="#partnership-types"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types Section */}
        <section id="partnership-types" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Partnership Types
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <type.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {type.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {type.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're proud to work with industry-leading technology partners to deliver comprehensive solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <div className="text-sm text-blue-600 font-medium mb-2">
                      {partner.category}
                    </div>
                    <div className="text-xs text-gray-500 mb-4">
                      {partner.partnership}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {partner.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Partner Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our partner program and unlock a range of benefits designed to help you succeed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Partner Requirements
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                To become a partner, we look for organizations that meet our standards for quality and commitment.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth. 
                Let's work together to deliver exceptional value to our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Apply to Become a Partner
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Learn About Our Company
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Partners() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Leading AI & Technology Solutions" />
        <meta name="keywords" content="technology,AI,cloud,micro SaaS" />
      </Head>
      
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partners
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-cac2
  );
}