import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Heart,
  DollarSign,
  Settings,
  ShoppingCart,
  BookOpen,
  Shield,
  Globe,
  Zap,
  BarChart3
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const industries = [
  {
    title: "Healthcare",
    description: "Transform healthcare delivery with AI-powered solutions, secure data management, and patient care optimization.",
    icon: Heart,
    href: "/industries/healthcare",
    features: ["HIPAA Compliance", "AI Diagnostics", "Patient Data Security", "Telemedicine Solutions"],
    solutions: ["Electronic Health Records", "AI Medical Imaging", "Predictive Analytics", "Remote Monitoring"]
  },
  {
    title: "Finance",
    description: "Secure financial services with advanced fraud detection, regulatory compliance, and digital banking solutions.",
    icon: DollarSign,
    href: "/industries/finance",
    features: ["PCI DSS Compliance", "Fraud Detection", "Risk Management", "Real-time Analytics"],
    solutions: ["Digital Banking", "Payment Processing", "Blockchain Integration", "Regulatory Reporting"]
  },
  {
    title: "Manufacturing",
    description: "Optimize manufacturing processes with IoT integration, predictive maintenance, and smart factory solutions.",
    icon: Settings,
    href: "/industries/manufacturing",
    features: ["IoT Integration", "Predictive Maintenance", "Quality Control", "Supply Chain Optimization"],
    solutions: ["Smart Factories", "Digital Twins", "Automated Systems", "Performance Analytics"]
  },
  {
    title: "Retail",
    description: "Enhance customer experience with personalized shopping, inventory management, and omnichannel solutions.",
    icon: ShoppingCart,
    href: "/industries/retail",
    features: ["Personalization", "Inventory Management", "Customer Analytics", "E-commerce Integration"],
    solutions: ["Omnichannel Platform", "AI Recommendations", "Supply Chain", "Customer Insights"]
  },
  {
    title: "Education",
    description: "Modernize education with learning management systems, virtual classrooms, and student analytics.",
    icon: BookOpen,
    href: "/industries/education",
    features: ["Learning Management", "Virtual Classrooms", "Student Analytics", "Content Management"],
    solutions: ["Online Learning", "Assessment Tools", "Student Portals", "Administrative Systems"]
  },
  {
    title: "Government",
    description: "Secure government operations with citizen services, data management, and compliance solutions.",
    icon: Shield,
    href: "/industries/government",
    features: ["Security Compliance", "Citizen Services", "Data Governance", "Digital Transformation"],
    solutions: ["Citizen Portals", "Document Management", "Workflow Automation", "Public Services"]
  }
];

const stats = [
  { number: '50+', label: 'Industry Projects' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
  { number: '15+', label: 'Industry Experts' }
];

const caseStudies = [
  {
    industry: "Healthcare",
    title: "AI-Powered Diagnostic System",
    description: "Reduced diagnosis time by 40% and improved accuracy by 25%",
    client: "Regional Medical Center"
  },
  {
    industry: "Finance",
    title: "Fraud Detection Platform",
    description: "Prevented $2M+ in fraudulent transactions with 99.5% accuracy",
    client: "National Bank"
  },
  {
    industry: "Manufacturing",
    title: "Smart Factory Implementation",
    description: "Increased production efficiency by 30% and reduced downtime by 50%",
    client: "Global Manufacturing Corp"
  }
];

export default function IndustriesPage() {
  return (
    <MainLayout 
      title="Industries - Zion Tech Group"
      description="Industry-specific technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors."
      keywords="industry solutions, healthcare technology, financial services, manufacturing, retail, education, government, sector-specific solutions"
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
                Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Specialized technology solutions designed for your industry. 
                We understand the unique challenges and requirements of different sectors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#industries"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Explore Industries
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Get Industry Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section id="industries" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep industry expertise and specialized solutions for your sector's unique challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <industry.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {industry.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {industry.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {industry.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Solutions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <span
                            key={solutionIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                          >
                            {solution}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={industry.href}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Industry Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from our industry-specific implementations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {study.description}
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Client:</strong> {study.client}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready for Industry-Specific Solutions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our industry experts help you implement the right technology solutions for your sector. 
                Get a free consultation tailored to your industry needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Get Industry Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  View More Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}