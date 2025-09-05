import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
import {
  Users,
  Clock,
  CheckCircle,
  BarChart3,
  Building,
  Cloud,
  Shield
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
<<<<<<< HEAD
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  Building, 
  Brain, 
  Shield, 
  Zap,
  ArrowRight,
  Star
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
  Code, 
  Users, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  Star,
  TrendingUp,
  Shield,
  Globe,
  Zap,
  CheckCircle,
  Brain,
  Search
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
} from 'lucide-react';

const caseStudies = [
  {
<<<<<<< HEAD
    title: 'AI-Powered Customer Service Transformation',
    client: 'TechCorp Inc.',
    industry: 'Technology',
    challenge: 'High customer service costs and response times',
    solution: 'Implemented AI chatbots and automated ticket routing',
    results: '60% reduction in response time, 40% cost savings',
    duration: '3 months',
    team: '5 AI engineers'
  },
  {
    title: 'Cloud Infrastructure Migration',
    client: 'FinanceFlow Ltd.',
    industry: 'Financial Services',
    challenge: 'Legacy system limitations and scalability issues',
    solution: 'Migrated to AWS with microservices architecture',
    results: '99.9% uptime, 50% performance improvement',
    duration: '6 months',
    team: '8 cloud architects'
  }
];

export default function CaseStudiesPage() {
  return (
    <Layout title="Case Studies - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-blue-100">
                Real results from our technology solutions
              </p>
            </div>
=======
    id: 1,
    title: "AI-Powered Healthcare Platform",
    client: "Regional Medical Center",
    industry: "Healthcare",
<<<<<<< HEAD
    challenge: "Manual patient data processing and diagnosis delays",
    solution: "AI-powered diagnostic platform with real-time analysis",
    results: [
      "60% reduction in diagnosis time",
      "40% improvement in accuracy",
      "80% reduction in manual data entry",
      "95% patient satisfaction rate"
    ],
    technologies: ["AI/ML", "Computer Vision", "Data Analytics", "Cloud Computing"],
    duration: "6 months",
    team: "12 experts",
    image: "/images/case-studies/healthcare-ai.jpg"
  },
  {
    id: 2,
    title: "Cloud Migration for Financial Services",
    client: "Regional Bank",
    industry: "Financial Services",
    challenge: "Legacy systems causing performance issues and high maintenance costs",
    solution: "Complete cloud migration with microservices architecture",
    results: [
      "50% reduction in infrastructure costs",
      "99.9% uptime achieved",
      "3x faster application performance",
      "Zero security incidents"
    ],
    technologies: ["AWS", "Kubernetes", "Microservices", "DevOps"],
    duration: "8 months",
    team: "15 experts",
    image: "/images/case-studies/cloud-migration.jpg"
=======
    description: "Developed a comprehensive AI platform that improved patient diagnosis accuracy by 40% and reduced administrative workload by 60%.",
    challenge: "The medical center needed to streamline patient care while maintaining accuracy and compliance with healthcare regulations.",
    solution: "We built an AI-powered platform with machine learning models for diagnosis assistance, automated patient scheduling, and real-time health monitoring.",
    results: [
      "40% improvement in diagnosis accuracy",
      "60% reduction in administrative tasks",
      "30% faster patient processing",
      "95% patient satisfaction rate"
    ],
    technologies: ["React", "Node.js", "Python", "TensorFlow", "PostgreSQL", "AWS"],
    duration: "6 months",
    team: "8 experts",
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 2,
    title: "E-commerce Platform Migration",
    client: "TechRetail Inc.",
    industry: "E-commerce",
    description: "Migrated legacy e-commerce platform to modern cloud architecture, resulting in 300% performance improvement and 50% cost reduction.",
    challenge: "Legacy system was causing frequent downtime and couldn't handle peak traffic during sales events.",
    solution: "Complete platform migration to microservices architecture with auto-scaling capabilities and modern payment integration.",
    results: [
      "300% improvement in page load speed",
      "50% reduction in hosting costs",
      "99.9% uptime during peak traffic",
      "200% increase in conversion rate"
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "Docker", "Kubernetes"],
    duration: "4 months",
    team: "6 experts",
    image: "/api/placeholder/600/400",
    featured: true
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
  },
  {
    id: 3,
    title: "Cybersecurity Enhancement",
<<<<<<< HEAD
    client: "Manufacturing Company",
    industry: "Manufacturing",
    challenge: "Increasing cyber threats and compliance requirements",
    solution: "Comprehensive security framework with 24/7 monitoring",
    results: [
      "100% compliance with industry standards",
      "90% reduction in security incidents",
      "24/7 threat monitoring",
      "50% faster incident response"
    ],
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"],
    duration: "4 months",
    team: "8 experts",
    image: "/images/case-studies/cybersecurity.jpg"
=======
    client: "FinanceCorp",
    industry: "Financial Services",
    description: "Implemented comprehensive cybersecurity solution that prevented 100% of attempted breaches and improved compliance scores.",
    challenge: "Financial institution needed to enhance security posture and meet strict regulatory compliance requirements.",
    solution: "Multi-layered security approach with real-time threat detection, encryption, and automated compliance monitoring.",
    results: [
      "100% prevention of security breaches",
      "95% improvement in compliance scores",
      "80% reduction in security incidents",
      "24/7 automated threat monitoring"
    ],
    technologies: ["Python", "Elasticsearch", "Kibana", "Docker", "AWS Security", "SIEM"],
    duration: "3 months",
    team: "5 experts",
    image: "/api/placeholder/600/400",
    featured: false
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
  }
];

const industries = [
  "Healthcare",
  "Financial Services",
<<<<<<< HEAD
  "Manufacturing",
  "Retail",
  "Education",
  "PropTech",
  "SaaS Development",
  "Data Analytics"
];

=======
  "E-commerce",
  "Manufacturing",
  "Education",
  "Technology"
];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '40+', label: 'Happy Clients' },
  { number: '95%', label: 'Success Rate' },
  { number: '5+', label: 'Years Experience' }
];

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Explore our success stories and see how we've helped clients transform their businesses with innovative technology solutions." />
=======
        <meta name="description" content="Explore our successful projects and case studies. See how we've helped businesses transform with innovative technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
                Success{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses across industries transform their operations 
                with innovative technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  View All Projects
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Start Your Project
                </button>
              </div>
            </motion.div>
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
          </div>
        </section>

        {/* Case Studies Grid */}
<<<<<<< HEAD
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <div className="mb-4">
                    <p className="text-gray-600"><strong>Client:</strong> {study.client}</p>
                    <p className="text-gray-600"><strong>Industry:</strong> {study.industry}</p>
=======
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped our clients achieve their goals.
              </p>
            </motion.div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                          {study.industry}
                        </span>
                        <span className="ml-4 text-gray-500 text-sm">
                          {study.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        <strong>Client:</strong> {study.client}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 mb-4">{study.challenge}</p>
                        
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600 mb-4">{study.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4 inline" />
                      </button>
                    </div>
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Results:</h4>
                    <p className="text-gray-700">{study.results}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
=======

        {/* Industries Section */}
=======
                Case{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Studies
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses transform with innovative technology solutions. 
                Real projects, real results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Our Services
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
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

        {/* Featured Case Studies */}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
=======
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore some of our most successful and impactful projects.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.filter(study => study.featured).map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">{study.industry}</div>
                      <div className="text-sm opacity-90">{study.client}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">Featured</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {study.industry}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        {study.duration}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {study.team}
                      </div>
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
                We have experience across multiple industries, helping businesses of all sizes achieve their goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <h3 className="font-semibold text-gray-900">{industry}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that speak to our success and commitment to excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </motion.div>
            </div>
=======
                Browse through all our successful projects across different industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">{study.industry}</div>
                      <div className="text-sm opacity-90">{study.client}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                      {study.featured && (
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">Featured</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {study.industry}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        {study.duration}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {study.team}
                      </div>
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's work together to create innovative solutions that drive your business forward.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule Consultation
                </button>
=======
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's work together to create something amazing. Contact us today to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Services
                </Link>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
              </div>
            </motion.div>
          </div>
        </section>
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
      </div>
    </>
  );
}