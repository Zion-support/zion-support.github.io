import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  ArrowRight,
  ExternalLink,
  Building,
  Heart,
  ShoppingCart,
  GraduationCap,
  Factory,
  Landmark,
  TrendingUp,
  Users,
  Clock,
  Target
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const caseStudies = [
  {
    id: 1,
    title: "Regional Medical Center Digital Transformation",
    industry: "Healthcare",
    icon: Heart,
    challenge: "Outdated patient management system causing inefficiencies and compliance issues",
    solution: "Custom patient portal with HIPAA-compliant data handling and telemedicine integration",
    results: [
      "40% reduction in administrative overhead",
      "60% improvement in patient satisfaction",
      "100% HIPAA compliance achieved",
      "50% faster appointment scheduling"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "HIPAA"],
    duration: "6 months",
    team: "8 developers",
    color: "from-red-600 to-red-800"
  },
  {
    id: 2,
    title: "Community Credit Union Mobile Banking Platform",
    industry: "Finance",
    icon: Building,
    challenge: "Legacy banking system unable to meet modern customer expectations",
    solution: "AI-powered mobile banking platform with fraud detection and real-time analytics",
    results: [
      "60% reduction in fraudulent transactions",
      "80% increase in mobile app usage",
      "35% improvement in customer retention",
      "90% reduction in support tickets"
    ],
    technologies: ["React Native", "Python", "TensorFlow", "MongoDB", "Azure"],
    duration: "8 months",
    team: "12 developers",
    color: "from-green-600 to-green-800"
  },
  {
    id: 3,
    title: "Auto Parts Manufacturer IoT Quality Control",
    industry: "Manufacturing",
    icon: Factory,
    challenge: "Manual quality control processes leading to defects and production delays",
    solution: "IoT sensor network with AI-powered quality monitoring and predictive maintenance",
    results: [
      "25% improvement in product quality",
      "30% reduction in production downtime",
      "45% decrease in defect rates",
      "20% increase in overall efficiency"
    ],
    technologies: ["IoT Sensors", "Python", "TensorFlow", "Kubernetes", "GCP"],
    duration: "10 months",
    team: "15 developers",
    color: "from-blue-600 to-blue-800"
  },
  {
    id: 4,
    title: "E-commerce Platform Omnichannel Integration",
    industry: "Retail",
    icon: ShoppingCart,
    challenge: "Disconnected online and offline sales channels causing inventory and customer experience issues",
    solution: "Unified omnichannel platform with real-time inventory management and personalized recommendations",
    results: [
      "50% increase in online sales",
      "35% improvement in inventory accuracy",
      "45% boost in customer engagement",
      "25% reduction in cart abandonment"
    ],
    technologies: ["Next.js", "Node.js", "Redis", "Elasticsearch", "AWS"],
    duration: "7 months",
    team: "10 developers",
    color: "from-purple-600 to-purple-800"
  },
  {
    id: 5,
    title: "University Learning Management System",
    industry: "Education",
    icon: GraduationCap,
    challenge: "Outdated LMS unable to support remote learning and modern teaching methods",
    solution: "Cloud-based LMS with AI-powered student analytics and virtual classroom capabilities",
    results: [
      "70% increase in student engagement",
      "85% improvement in course completion rates",
      "50% reduction in administrative workload",
      "90% student satisfaction rating"
    ],
    technologies: ["React", "Django", "PostgreSQL", "WebRTC", "Azure"],
    duration: "9 months",
    team: "14 developers",
    color: "from-indigo-600 to-indigo-800"
  },
  {
    id: 6,
    title: "Government Citizen Services Portal",
    industry: "Government",
    icon: Landmark,
    challenge: "Fragmented citizen services causing long wait times and poor user experience",
    solution: "Integrated citizen portal with automated workflows and digital document processing",
    results: [
      "65% reduction in service processing time",
      "80% improvement in citizen satisfaction",
      "40% decrease in paper-based processes",
      "50% increase in online service adoption"
    ],
    technologies: ["Vue.js", "Java", "Oracle", "Docker", "AWS GovCloud"],
    duration: "12 months",
    team: "20 developers",
    color: "from-gray-600 to-gray-800"
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Industries Served' },
  { number: '99.9%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

const industries = [
  { name: "Healthcare", count: 45, icon: Heart },
  { name: "Finance", count: 38, icon: Building },
  { name: "Manufacturing", count: 32, icon: Factory },
  { name: "Retail", count: 28, icon: ShoppingCart },
  { name: "Education", count: 25, icon: GraduationCap },
  { name: "Government", count: 22, icon: Landmark }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout 
      title="Case Studies - Zion Tech Group"
      description="Real-world success stories showcasing our technology solutions across healthcare, finance, manufacturing, retail, education, and government sectors."
      keywords="case studies, success stories, project portfolio, technology solutions, client results"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
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
              <div className="flex items-center justify-center mb-6">
                <BarChart3 className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Case Studies
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Real-world success stories showcasing how we've helped organizations 
                across various industries achieve their technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
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
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
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
                Explore detailed case studies of our most successful projects across different industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => {
                const IconComponent = study.icon;
                return (
                  <motion.div
                    key={study.id}
                    className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${study.color} p-6 text-white`}>
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-8 h-8 mr-3" />
                        <div>
                          <div className="text-sm font-medium opacity-90">{study.industry}</div>
                          <h3 className="text-xl font-bold">{study.title}</h3>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {study.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {study.team}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {study.results.slice(0, 2).map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                              <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {tech}
                            </span>
                          ))}
                          {study.technologies.length > 4 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              +{study.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Link
                          href={`/case-studies/${study.id}`}
                          className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center group"
                        >
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <span className="text-xs text-gray-500">
                          {study.results.length} key results
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our expertise spans across multiple industries with proven success stories.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group cursor-pointer text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-sm font-medium text-white mb-1">{industry.name}</div>
                    <div className="text-xs text-gray-400">{industry.count} projects</div>
                  </motion.div>
                );
              })}
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
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss your project and create a custom solution that delivers measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Our Process
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}