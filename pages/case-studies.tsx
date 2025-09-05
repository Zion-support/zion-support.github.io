import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  CheckCircle,
  BarChart3,
  Users,
  DollarSign,
  Clock,
  Target,
  Award,
  TrendingUp,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Needed to process millions of medical images for faster diagnosis",
    solution: "Developed custom AI models for medical image analysis and diagnosis",
    results: [
      "95% accuracy in medical image diagnosis",
      "60% reduction in diagnosis time",
      "40% increase in patient throughput",
      "99.9% system uptime"
    ],
    technologies: ["Machine Learning", "Computer Vision", "Cloud Computing", "API Integration"],
    image: "/images/case-studies/healthcare-ai.jpg",
    duration: "6 months",
    team: "12 experts"
  },
  {
    id: 2,
    title: "Cloud Migration for Financial Services",
    client: "Global Finance Corp",
    industry: "Finance",
    challenge: "Migrate legacy systems to cloud while maintaining security and compliance",
    solution: "Complete cloud transformation with zero-downtime migration strategy",
    results: [
      "50% reduction in infrastructure costs",
      "99.99% uptime achieved",
      "3x faster application deployment",
      "100% compliance maintained"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Security"],
    image: "/images/case-studies/cloud-migration.jpg",
    duration: "8 months",
    team: "15 experts"
  },
  {
    id: 3,
    title: "Cybersecurity Transformation",
    client: "TechStart Inc",
    industry: "Technology",
    challenge: "Implement comprehensive security measures for growing startup",
    solution: "Zero-trust security architecture with advanced threat detection",
    results: [
      "Zero security incidents in 12 months",
      "90% reduction in security alerts",
      "100% compliance with industry standards",
      "24/7 threat monitoring"
    ],
    technologies: ["Zero Trust", "SIEM", "Penetration Testing", "Compliance"],
    image: "/images/case-studies/cybersecurity.jpg",
    duration: "4 months",
    team: "8 experts"
  },
  {
    id: 4,
    title: "E-commerce Platform Optimization",
    client: "RetailMax",
    industry: "Retail",
    challenge: "Scale e-commerce platform to handle 10x traffic during peak seasons",
    solution: "Microservices architecture with auto-scaling and performance optimization",
    results: [
      "10x increase in concurrent users",
      "80% improvement in page load speed",
      "99.9% uptime during peak traffic",
      "200% increase in conversion rate"
    ],
    technologies: ["Microservices", "React", "Node.js", "Redis", "CDN"],
    image: "/images/case-studies/ecommerce.jpg",
    duration: "5 months",
    team: "10 experts"
  },
  {
    id: 5,
    title: "Data Analytics Dashboard",
    client: "Manufacturing Co",
    industry: "Manufacturing",
    challenge: "Transform raw production data into actionable business insights",
    solution: "Real-time analytics platform with predictive maintenance capabilities",
    results: [
      "30% reduction in equipment downtime",
      "25% increase in production efficiency",
      "Real-time visibility into operations",
      "Predictive maintenance accuracy of 92%"
    ],
    technologies: ["Data Science", "Machine Learning", "React", "Python", "IoT"],
    image: "/images/case-studies/manufacturing.jpg",
    duration: "7 months",
    team: "14 experts"
  },
  {
    id: 6,
    title: "Mobile App Development",
    client: "FitnessFirst",
    industry: "Health & Fitness",
    challenge: "Create engaging mobile app for fitness tracking and social features",
    solution: "Cross-platform mobile app with AI-powered workout recommendations",
    results: [
      "4.8/5 app store rating",
      "500K+ downloads in first 6 months",
      "70% user retention rate",
      "50% increase in user engagement"
    ],
    technologies: ["React Native", "AI/ML", "Backend API", "Real-time Features"],
    image: "/images/case-studies/mobile-app.jpg",
    duration: "6 months",
    team: "9 experts"
  }
];

const stats = [
  { number: '1,200+', label: 'Projects Completed', icon: Target },
  { number: '99.9%', label: 'Client Satisfaction', icon: Award },
  { number: '50+', label: 'Countries Served', icon: Globe },
  { number: '15+', label: 'Years Experience', icon: Clock }
];

const industries = [
  { name: 'Healthcare', count: 45, icon: Shield },
  { name: 'Finance', count: 38, icon: DollarSign },
  { name: 'Manufacturing', count: 32, icon: BarChart3 },
  { name: 'Retail', count: 28, icon: Users },
  { name: 'Technology', count: 25, icon: Zap },
  { name: 'Education', count: 18, icon: Globe }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Head>
        <title>Case Studies - ZION TECH GROUP</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses transform with AI, cloud, and technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, cybersecurity, software development" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Success <span className="text-blue-600">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses across industries transform their operations and achieve remarkable results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">1,200+ Projects Completed</span>
              </div>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">99.9% Client Satisfaction</span>
              </div>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">50+ Countries Served</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. See how we've transformed businesses across different industries.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-white" />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{study.client}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-sm text-gray-600 mb-4">{study.challenge}</p>
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-sm text-gray-600 mb-4">{study.solution}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{study.duration}</span>
                  <span>{study.team}</span>
                </div>
                <Link
                  href={`/case-studies/${study.id}`}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have experience across multiple industries, delivering tailored solutions for each sector.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <industry.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-2xl font-bold text-blue-600">{industry.count}+</p>
                <p className="text-sm text-gray-600">Projects</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your project and create a customized solution that delivers real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}