import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  ArrowRight,
  Star,
  Globe,
  Shield,
  Zap,
  Building,
  Users,
  CheckCircle,
  ExternalLink,
  Award,
  TrendingUp
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const partnerTypes = [
  {
    title: "Technology Partners",
    description: "Strategic technology partnerships with leading cloud and AI providers",
    icon: Globe,
    color: "bg-blue-600",
    benefits: [
      "Access to cutting-edge technology",
      "Joint go-to-market opportunities",
      "Technical integration support",
      "Co-marketing initiatives"
    ]
  },
  {
    title: "Solution Partners",
    description: "Partners who integrate our solutions into their offerings",
    icon: Building,
    color: "bg-green-600",
    benefits: [
      "White-label solutions",
      "Custom integration support",
      "Revenue sharing opportunities",
      "Dedicated partner success manager"
    ]
  },
  {
    title: "Channel Partners",
    description: "Resellers and distributors of our technology solutions",
    icon: Users,
    color: "bg-purple-600",
    benefits: [
      "Competitive partner pricing",
      "Sales and technical training",
      "Marketing support materials",
      "Lead generation programs"
    ]
  },
  {
    title: "Consulting Partners",
    description: "Professional services firms implementing our solutions",
    icon: Award,
    color: "bg-orange-600",
    benefits: [
      "Implementation expertise",
      "Certification programs",
      "Project collaboration",
      "Thought leadership opportunities"
    ]
  }
];

const currentPartners = [
  {
    name: "Microsoft",
    type: "Technology Partner",
    logo: "Microsoft",
    description: "Strategic partnership for Azure cloud services and AI solutions"
  },
  {
    name: "Amazon Web Services",
    type: "Technology Partner", 
    logo: "AWS",
    description: "Cloud infrastructure and machine learning services partnership"
  },
  {
    name: "Google Cloud",
    type: "Technology Partner",
    logo: "Google",
    description: "AI and data analytics platform collaboration"
  },
  {
    name: "IBM",
    type: "Solution Partner",
    logo: "IBM",
    description: "Enterprise AI and hybrid cloud solutions integration"
  },
  {
    name: "Accenture",
    type: "Consulting Partner",
    logo: "Accenture",
    description: "Digital transformation and AI implementation services"
  },
  {
    name: "Deloitte",
    type: "Consulting Partner",
    logo: "Deloitte",
    description: "Technology consulting and implementation expertise"
  }
];

const partnerProgram = {
  title: "Partner Program Benefits",
  description: "Join our partner ecosystem and unlock new opportunities for growth",
  features: [
    {
      title: "Revenue Growth",
      description: "Increase your revenue with our partner program",
      icon: TrendingUp,
      stat: "40% average revenue increase"
    },
    {
      title: "Technical Support",
      description: "Get dedicated technical support and training",
      icon: Shield,
      stat: "24/7 partner support"
    },
    {
      title: "Marketing Support",
      description: "Co-marketing opportunities and materials",
      icon: Zap,
      stat: "50+ marketing assets"
    },
    {
      title: "Certification",
      description: "Become a certified partner with our programs",
      icon: Award,
      stat: "3 certification levels"
    }
  ]
};

export default function PartnersPage() {
  return (
    <MainLayout 
      title="Partners - Zion Tech Group"
      description="Join our partner ecosystem and unlock new opportunities for growth. Explore partnership opportunities with Zion Tech Group."
      keywords="partners, partnership, technology partners, solution partners, channel partners, consulting partners, partner program"
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
                Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Ecosystem</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Join our growing partner ecosystem and unlock new opportunities 
                for growth, innovation, and success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="#partner-program"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Join Our Program <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Contact Partnership Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partner Types Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partnership <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Types</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership type that best fits your business model 
                and growth objectives.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`${type.color} p-3 rounded-lg mr-4`}>
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {type.title}
                      </h3>
                      <p className="text-gray-400">
                        {type.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partners</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're proud to work with industry leaders and innovative companies 
                to deliver exceptional solutions to our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300 text-center"
                >
                  <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium mb-4">
                    {partner.type}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {partner.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Program Section */}
        <section id="partner-program" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {partnerProgram.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {partnerProgram.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerProgram.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300 text-center"
                >
                  <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <div className="text-blue-400 font-semibold">
                    {feature.stat}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our partner ecosystem and unlock new opportunities for growth. 
                Contact our partnership team to learn more about how we can work together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Become a Partner <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/about"
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}