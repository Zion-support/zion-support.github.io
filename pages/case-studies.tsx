import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, Users, TrendingUp, ArrowRight, CheckCircle, Clock, Target, Zap } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const caseStudies = [
  {
    title: "E-commerce Platform Migration",
    client: "RetailCorp",
    industry: "E-commerce",
    challenge: "Legacy system couldn't handle peak traffic during holiday seasons",
    solution: "Migrated to cloud infrastructure with auto-scaling capabilities",
    results: [
      "300% increase in peak capacity",
      "99.9% uptime during Black Friday",
      "50% reduction in infrastructure costs",
      "2x faster page load times"
    ],
    duration: "3 months",
    team: "8 developers",
    image: "🛒",
    href: "/case-studies/ecommerce-migration"
  },
  {
    title: "AI-Powered Customer Service",
    client: "ServicePro",
    industry: "Customer Service",
    challenge: "High volume of repetitive customer inquiries overwhelming support team",
    solution: "Implemented AI chatbot with natural language processing",
    results: [
      "80% reduction in support tickets",
      "24/7 customer support availability",
      "95% customer satisfaction rate",
      "60% cost savings on support staff"
    ],
    duration: "2 months",
    team: "5 developers",
    image: "🤖",
    href: "/case-studies/ai-customer-service"
  },
  {
    title: "Healthcare Data Management",
    client: "MediCare Plus",
    industry: "Healthcare",
    challenge: "HIPAA-compliant patient data management across multiple systems",
    solution: "Custom healthcare platform with advanced security and integration",
    results: [
      "100% HIPAA compliance",
      "40% faster patient data retrieval",
      "Zero security incidents",
      "Seamless integration with 15+ systems"
    ],
    duration: "6 months",
    team: "12 developers",
    image: "🏥",
    href: "/case-studies/healthcare-data-management"
  },
  {
    title: "Manufacturing IoT Integration",
    client: "IndustrialTech",
    industry: "Manufacturing",
    challenge: "Manual quality control processes causing delays and errors",
    solution: "IoT sensors with real-time monitoring and predictive analytics",
    results: [
      "50% reduction in quality control time",
      "90% decrease in defective products",
      "Real-time production monitoring",
      "Predictive maintenance capabilities"
    ],
    duration: "4 months",
    team: "10 developers",
    image: "🏭",
    href: "/case-studies/manufacturing-iot"
  },
  {
    title: "Financial Services Automation",
    client: "FinanceFlow",
    industry: "Finance",
    challenge: "Manual loan processing taking weeks to complete",
    solution: "Automated loan processing system with AI risk assessment",
    results: [
      "75% faster loan processing",
      "99.5% accuracy in risk assessment",
      "Automated compliance reporting",
      "50% reduction in processing costs"
    ],
    duration: "5 months",
    team: "15 developers",
    image: "💰",
    href: "/case-studies/financial-automation"
  },
  {
    title: "Education Platform Development",
    client: "EduTech Solutions",
    industry: "Education",
    challenge: "Need for scalable online learning platform during pandemic",
    solution: "Custom LMS with video streaming and interactive features",
    results: [
      "Support for 100,000+ concurrent users",
      "95% student satisfaction rate",
      "Mobile app with offline capabilities",
      "Advanced analytics and reporting"
    ],
    duration: "6 months",
    team: "20 developers",
    image: "🎓",
    href: "/case-studies/education-platform"
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Industries Served' },
  { number: '24/7', label: 'Support Available' }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Real-world case studies showcasing successful implementations across various industries. See how we've helped businesses achieve their goals."
      keywords="case studies, success stories, client projects, implementation examples, industry solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Studies
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Real-world success stories from businesses we've helped transform. 
                See how our solutions drive measurable results across industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Detailed case studies showcasing our expertise and the results we've achieved for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4">{study.image}</div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="text-sm text-gray-600 mb-4">
                      <strong>Client:</strong> {study.client}
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {study.team}
                      </div>
                    </div>
                    
                    <Link
                      href={study.href}
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm group-hover:text-blue-600 transition-colors"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Let's discuss your project and create a solution that delivers measurable results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
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