import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Building,
  Globe,
  Award,
  BarChart3,
  Cloud,
  Shield
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Service Transformation",
    client: "Global E-commerce Retailer",
    industry: "E-commerce",
    challenge: "High customer service costs and inconsistent response quality",
    solution: "Implemented AI-powered chatbot and intelligent routing system",
    results: [
      "60% reduction in support costs",
      "40% faster response times",
      "95% customer satisfaction rate",
      "$2M annual savings"
    ],
    duration: "3 months",
    team: "8 experts",
    technologies: ["AI/ML", "NLP", "Cloud", "Analytics"],
    image: "/images/case-studies/ecommerce-ai.jpg"
  },
  {
    id: 2,
    title: "Cloud Migration for Financial Services",
    client: "Regional Bank",
    industry: "Financial Services",
    challenge: "Legacy systems limiting scalability and innovation",
    solution: "Complete cloud migration with microservices architecture",
    results: [
      "99.9% uptime achieved",
      "50% faster application deployment",
      "30% reduction in infrastructure costs",
      "Enhanced security compliance"
    ],
    duration: "6 months",
    team: "12 experts",
    technologies: ["AWS", "Kubernetes", "Microservices", "DevOps"],
    image: "/images/case-studies/cloud-migration.jpg"
  },
  {
    id: 3,
    title: "Cybersecurity Enhancement for Healthcare",
    client: "Healthcare Network",
    industry: "Healthcare",
    challenge: "Increasing cyber threats and compliance requirements",
    solution: "Comprehensive security framework and threat detection system",
    results: [
      "Zero security breaches",
      "100% compliance with HIPAA",
      "24/7 threat monitoring",
      "50% faster incident response"
    ],
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"],
    duration: "4 months",
    team: "6 experts",
    image: "/images/case-studies/healthcare-security.jpg"
  },
  {
    id: 5,
    title: "Real Estate PropTech Platform",
    client: "PropertyPro",
    industry: "Real Estate",
    challenge: "Fragmented property management and lead generation",
    solution: "Integrated PropTech platform with AI-powered lead scoring",
    results: [
      "200% increase in lead conversion",
      "50% reduction in manual work",
      "Automated property matching",
      "Mobile-first user experience"
    ],
    technologies: ["PropTech", "AI/ML", "Mobile Development"],
    duration: "7 months",
    team: "10 experts",
    image: "/api/placeholder/600/400"
  },
  {
    id: 6,
    title: "SaaS Platform Development",
    client: "StartupTech",
    industry: "SaaS",
    challenge: "Building scalable SaaS platform from scratch",
    solution: "End-to-end SaaS development with multi-tenant architecture",
    results: [
      "10,000+ active users",
      "99.9% uptime",
      "Scalable infrastructure",
      "Rapid feature deployment"
    ],
    technologies: ["SaaS Development", "Multi-tenancy", "Cloud Computing"],
    duration: "12 months",
    team: "25 experts",
    image: "/api/placeholder/600/400"
  }
];

const industries = [
  "All Industries",
  "Healthcare",
  "E-commerce",
  "Finance",
  "Manufacturing",
  "Real Estate",
  "SaaS",
  "Education"
];

const technologies = [
  "All Technologies",
  "AI/ML",
  "Cloud Computing",
  "Cybersecurity",
  "IoT",
  "PropTech",
  "SaaS Development",
  "Data Analytics"
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "99.9%", label: "Success Rate" },
  { number: "24/7", label: "Support Available" }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our success stories and see how we've helped businesses transform through innovative technology solutions."
      keywords="case studies, success stories, client projects, technology solutions, AI implementation"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
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
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses transform and achieve their goals 
                through innovative technology solutions.
              </p>
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

        {/* Featured Case Studies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped businesses transform and achieve their goals
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-16">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                            {study.industry}
                          </span>
                          <span className="text-gray-500 text-sm">{study.duration}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {study.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          <strong>Client:</strong> {study.client}
                        </p>

                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            {study.team}
                          </div>
                          <a
                            href={`/case-studies/${study.id}`}
                            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                          >
                            Read Full Case Study
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Building className="w-16 h-16 mx-auto mb-4 opacity-80" />
                          <h4 className="text-xl font-semibold mb-2">Project Overview</h4>
                          <p className="text-green-100">
                            A comprehensive solution that transformed our client's business operations
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Let's work together to create your own success story. 
                Contact us today to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-green-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  ExternalLink,
  Building,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  Users
} from 'lucide-react';

const caseStudies = [
  {
    title: 'AI-Powered Customer Service Transformation',
    client: 'TechCorp Inc.',
    industry: 'Technology',
    duration: '6 months',
    challenge: 'High customer service costs and long response times',
    solution: 'Implemented AI chatbot and email responder system',
    results: [
      'Reduced response time by 80%',
      'Cut customer service costs by 60%',
      'Improved customer satisfaction by 45%'
    ],
    image: '/case-studies/techcorp.jpg',
    tags: ['AI', 'Customer Service', 'Automation']
  },
  {
    title: 'Predictive Analytics for E-commerce',
    client: 'ShopSmart Retail',
    industry: 'Retail',
    duration: '4 months',
    challenge: 'Low conversion rates and high cart abandonment',
    solution: 'Built predictive analytics platform for personalized recommendations',
    results: [
      'Increased conversion rates by 35%',
      'Reduced cart abandonment by 50%',
      'Boosted revenue by 40%'
    ],
    image: '/case-studies/shopsmart.jpg',
    tags: ['Analytics', 'E-commerce', 'Machine Learning']
  },
  {
    title: 'Healthcare AI Diagnostic System',
    client: 'MedCenter Hospital',
    industry: 'Healthcare',
    duration: '8 months',
    challenge: 'Slow diagnostic processes and human error in medical imaging',
    solution: 'Developed AI-powered medical imaging analysis system',
    results: [
      'Reduced diagnostic time by 70%',
      'Improved accuracy by 25%',
      'Enabled early detection of diseases'
    ],
    image: '/case-studies/medcenter.jpg',
    tags: ['Healthcare', 'AI', 'Medical Imaging']
  },
  {
    title: 'Financial Fraud Detection Platform',
    client: 'SecureBank',
    industry: 'Finance',
    duration: '5 months',
    challenge: 'Increasing fraud cases and manual detection processes',
    solution: 'Created AI-powered fraud detection and prevention system',
    results: [
      'Detected 95% of fraudulent transactions',
      'Reduced false positives by 80%',
      'Saved $2M in prevented fraud'
    ],
    image: '/case-studies/securebank.jpg',
    tags: ['Finance', 'Security', 'AI']
  },
  {
    title: 'Manufacturing Quality Control AI',
    client: 'AutoParts Manufacturing',
    industry: 'Manufacturing',
    duration: '6 months',
    challenge: 'Manual quality control processes and high defect rates',
    solution: 'Implemented computer vision system for automated quality control',
    results: [
      'Reduced defect rate by 90%',
      'Increased production efficiency by 30%',
      'Cut quality control costs by 75%'
    ],
    image: '/case-studies/autoparts.jpg',
    tags: ['Manufacturing', 'Computer Vision', 'Quality Control']
  },
  {
    title: 'Smart City Traffic Management',
    client: 'City of Innovation',
    industry: 'Government',
    duration: '12 months',
    challenge: 'Traffic congestion and inefficient traffic light management',
    solution: 'Developed AI-powered traffic optimization system',
    results: [
      'Reduced traffic congestion by 40%',
      'Improved traffic flow by 50%',
      'Reduced emissions by 25%'
    ],
    image: '/case-studies/smartcity.jpg',
    tags: ['Smart City', 'AI', 'Traffic Management']
  }
];

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and technology implementations across various industries. See how we've helped businesses transform with our solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case <span className="text-blue-600">Studies</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across various industries transform 
                their operations with our AI and technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <Building className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    <div className="space-y-2 mb-4">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {result}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our AI and technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
=======
        </section>
      </div>
    </MainLayout>
  );
}