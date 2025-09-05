import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, ArrowRight, Users, TrendingUp, Clock, Building2, Heart, Store, GraduationCap, Car } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const caseStudies = [
  {
    title: "Healthcare AI Platform",
    client: "MedTech Solutions",
    industry: "Healthcare",
    icon: Heart,
    challenge: "Needed to process and analyze large volumes of medical data to improve patient outcomes",
    solution: "Developed an AI-powered platform that analyzes patient data, predicts health risks, and provides treatment recommendations",
    results: [
      "40% reduction in diagnosis time",
      "95% accuracy in risk prediction",
      "60% improvement in patient outcomes",
      "50% cost savings in diagnostic processes"
    ],
    color: "red",
    readTime: "8 min read",
    href: "/case-studies/healthcare-ai-platform"
  },
  {
    title: "E-commerce Micro SaaS",
    client: "RetailMax",
    industry: "Retail",
    icon: Store,
    challenge: "Required a scalable, cost-effective solution for managing multiple online stores",
    solution: "Built a micro SaaS platform that allows retailers to manage inventory, orders, and analytics across multiple channels",
    results: [
      "300% increase in operational efficiency",
      "80% reduction in manual processes",
      "200% growth in revenue",
      "99.9% uptime achieved"
    ],
    color: "purple",
    readTime: "6 min read",
    href: "/case-studies/ecommerce-micro-saas"
  },
  {
    title: "Financial Services Security",
    client: "SecureBank",
    industry: "Financial Services",
    icon: Building2,
    challenge: "Needed to enhance security and compliance for online banking services",
    solution: "Implemented comprehensive security measures including multi-factor authentication, fraud detection, and compliance monitoring",
    results: [
      "99.9% security incident reduction",
      "100% compliance with regulations",
      "50% faster fraud detection",
      "90% improvement in customer trust"
    ],
    color: "blue",
    readTime: "7 min read",
    href: "/case-studies/financial-services-security"
  },
  {
    title: "Educational Technology Platform",
    client: "EduTech University",
    industry: "Education",
    icon: GraduationCap,
    challenge: "Required a modern learning management system to support remote and hybrid learning",
    solution: "Developed a comprehensive LMS with AI-powered personalization, virtual classrooms, and advanced analytics",
    results: [
      "85% increase in student engagement",
      "70% improvement in learning outcomes",
      "60% reduction in administrative workload",
      "95% student satisfaction rate"
    ],
    color: "green",
    readTime: "9 min read",
    href: "/case-studies/educational-technology-platform"
  },
  {
    title: "Manufacturing IoT Solution",
    client: "SmartManufacturing Co.",
    industry: "Manufacturing",
    icon: BarChart3,
    challenge: "Needed to optimize production processes and reduce downtime through IoT integration",
    solution: "Implemented IoT sensors and AI analytics to monitor equipment, predict maintenance needs, and optimize production",
    results: [
      "35% reduction in downtime",
      "25% increase in production efficiency",
      "40% decrease in maintenance costs",
      "90% improvement in quality control"
    ],
    color: "orange",
    readTime: "8 min read",
    href: "/case-studies/manufacturing-iot-solution"
  },
  {
    title: "Transportation Fleet Management",
    client: "FleetLogistics",
    industry: "Transportation",
    icon: Car,
    challenge: "Required real-time fleet tracking and route optimization to improve delivery efficiency",
    solution: "Built a comprehensive fleet management system with GPS tracking, route optimization, and driver performance analytics",
    results: [
      "30% reduction in fuel costs",
      "45% improvement in delivery times",
      "50% decrease in driver idle time",
      "80% increase in customer satisfaction"
    ],
    color: "indigo",
    readTime: "6 min read",
    href: "/case-studies/transportation-fleet-management"
  }
];

const industries = [
  { name: "Healthcare", count: 12, icon: Heart },
  { name: "Financial Services", count: 8, icon: Building2 },
  { name: "Retail & E-commerce", count: 15, icon: Store },
  { name: "Education", count: 6, icon: GraduationCap },
  { name: "Manufacturing", count: 10, icon: BarChart3 },
  { name: "Transportation", count: 7, icon: Car }
];

const stats = [
  { number: "58+", label: "Successful Projects" },
  { number: "95%", label: "Client Satisfaction" },
  { number: "40%", label: "Average ROI" },
  { number: "6", label: "Industries Served" }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Real-world success stories and implementations. See how we've helped businesses across industries achieve their goals with our technology solutions."
      keywords="case studies, success stories, client results, implementation examples, ROI, business outcomes"
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
                Success{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Real-world case studies showcasing how we've helped businesses across industries 
                achieve remarkable results with our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Your Success Story
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Explore Solutions
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
                Featured Case Studies
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover how our technology solutions have transformed businesses across different industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => {
                const IconComponent = study.icon;
                const colorClasses = {
                  red: "from-red-500 to-pink-600",
                  purple: "from-purple-500 to-violet-600",
                  blue: "from-blue-500 to-cyan-600",
                  green: "from-green-500 to-emerald-600",
                  orange: "from-orange-500 to-red-600",
                  indigo: "from-indigo-500 to-blue-600"
                };
                
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses[study.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="text-sm text-gray-600 mb-4">
                      <span className="font-semibold">{study.client}</span> • {study.industry}
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      <span className="font-semibold">Challenge:</span> {study.challenge}
                    </p>

                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-gray-900">Key Results:</h4>
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>

                    <Link
                      href={study.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our solutions have delivered results across multiple industries. 
                Click on any industry to see related case studies.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-sm font-medium text-gray-700 mb-1">{industry.name}</h3>
                    <div className="text-xs text-gray-500">{industry.count} case studies</div>
                  </motion.div>
                );
              })}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join the growing list of successful businesses that have transformed their operations with our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}