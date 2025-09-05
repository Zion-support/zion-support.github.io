import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Calendar, 
  User, 
  Building,
  TrendingUp,
  CheckCircle,
  Users,
  Globe,
  Award,
  Clock,
  Target,
  Zap,
  Shield,
  Cloud,
  Brain
} from 'lucide-react';
import Layout from '../components/Layout';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Service Transformation",
    client: "Global E-commerce Retailer",
    industry: "E-commerce",
    challenge: "High customer service costs and inconsistent response quality",
    solution: "Implemented AI-powered chatbot and intelligent routing system",
    results: "60% reduction in support costs, 40% faster response times",
    category: "AI Solutions",
    duration: "3 months",
    teamSize: "8 developers",
    technologies: ["AI/ML", "NLP", "Python", "AWS"],
    featured: true,
    metrics: {
      costReduction: "60%",
      responseTime: "40%",
      customerSatisfaction: "85%",
      roi: "300%"
    },
    testimonial: {
      quote: "The AI solution transformed our customer service operations. We've seen incredible improvements in efficiency and customer satisfaction.",
      author: "Sarah Johnson",
      role: "VP of Customer Experience"
    }
  },
  {
    id: 2,
    title: "Cloud Infrastructure Migration",
    client: "Financial Services Company",
    industry: "Financial Services",
    challenge: "Legacy on-premise infrastructure causing scalability issues",
    solution: "Complete migration to AWS with microservices architecture",
    results: "99.9% uptime, 50% cost reduction, 3x faster deployment",
    category: "IT Services",
    duration: "6 months",
    teamSize: "12 engineers",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
    featured: true,
    metrics: {
      uptime: "99.9%",
      costReduction: "50%",
      deploymentSpeed: "3x",
      scalability: "10x"
    },
    testimonial: {
      quote: "The cloud migration was seamless and exceeded our expectations. Our infrastructure is now more reliable and cost-effective.",
      author: "Michael Chen",
      role: "CTO"
    }
  },
  {
    id: 3,
    title: "Healthcare AI Platform Transformation",
    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Legacy system modernization and AI integration for patient data analysis",
    solution: "Custom AI platform with real-time analytics and predictive modeling",
    results: [
      "40% reduction in diagnosis time",
      "95% accuracy in predictive analytics",
      "60% improvement in patient outcomes",
      "$2M annual cost savings"
    ],
    duration: "6 months",
    team: "12 experts",
    technologies: ["AI/ML", "Cloud", "Data Analytics", "Security"],
    image: "/images/case-studies/healthcare-ai.jpg",
    featured: true
  },
  {
    id: 4,
    title: "Micro SaaS Platform Development",
    client: "Startup Accelerator",
    industry: "Technology",
    challenge: "Need for scalable SaaS platform to support multiple startups",
    solution: "Multi-tenant SaaS platform with AI-powered features",
    results: "500+ active users, 99.9% uptime, $50K MRR",
    category: "Micro SaaS",
    duration: "4 months",
    teamSize: "6 developers",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    featured: false,
    metrics: {
      activeUsers: "500+",
      uptime: "99.9%",
      mrr: "$50K",
      growth: "400%"
    },
    testimonial: {
      quote: "The platform has been instrumental in our growth.",
      author: "Emily Rodriguez",
      role: "Founder & CEO"
    }
  },
  {
    id: 5,
    title: "Cybersecurity Implementation",
    client: "Government Agency",
    industry: "Government",
    challenge: "Strengthening cybersecurity posture and compliance",
    solution: "Comprehensive security framework with zero-trust architecture",
    results: "100% compliance, 90% reduction in security incidents",
    category: "IT Services",
    duration: "8 months",
    teamSize: "15 security experts",
    technologies: ["Zero Trust", "SIEM", "EDR", "Compliance"],
    featured: true,
    metrics: {
      compliance: "100%",
      incidentReduction: "90%",
      threatDetection: "95%",
      responseTime: "50%"
    },
    testimonial: {
      quote: "Our security posture has been significantly strengthened. The implementation was thorough and professional.",
      author: "David Wilson",
      role: "CISO"
    }
  },
  {
    id: 6,
    title: "Educational Technology Platform",
    client: "Online Learning Company",
    industry: "Education",
    challenge: "Scaling online learning platform to support 100K+ students",
    solution: "Cloud-native platform with AI-powered personalization",
    results: "100K+ students, 95% satisfaction rate, 50% increase in engagement",
    category: "Micro SaaS",
    duration: "5 months",
    teamSize: "10 developers",
    technologies: ["React", "AI/ML", "Video Streaming", "Analytics"],
    image: "/images/case-studies/education-platform.jpg",
    featured: false
  }
];

const industries = [
  { name: "Healthcare", count: 12, icon: Users },
  { name: "Finance", count: 8, icon: Building },
  { name: "Manufacturing", count: 6, icon: Globe },
  { name: "Retail", count: 10, icon: Target },
  { name: "Technology", count: 15, icon: Zap },
  { name: "Education", count: 7, icon: Award }
];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = React.useState('All');

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <Layout 
      title="Case Studies - Zion Tech Group"
      description="Explore our success stories and see how we've helped businesses across industries achieve their technology goals."
      keywords="case studies, success stories, technology solutions, AI implementation, cloud migration, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses transform their operations and achieve 
                remarkable results with our innovative technology solutions.
              </p>
            </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Explore our most impactful projects and see the measurable results we've delivered for our clients.
              </p>
            </motion.div>

            <div className="space-y-12">
              {caseStudies.filter(cs => cs.featured).map((study, index) => (
                <motion.div
                  key={study.id}
                  className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                          {study.category}
                        </span>
                        <span className="text-gray-600 text-sm">
                          {study.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {study.title}
                      </h3>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Client</h4>
                        <p className="text-gray-600">{study.client}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
                        <p className="text-gray-600">{Array.isArray(study.results) ? study.results.join(', ') : study.results}</p>
                      </div>
                    </div>
                    
                    <div>
                      {study.metrics && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(study.metrics).map(([key, value]) => (
                              <div key={key} className="bg-gray-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-blue-600 mb-1">
                                  {value}
                                </div>
                                <div className="text-sm text-gray-600 capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {study.technologies && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, idx) => (
                              <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {study.testimonial && (
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <blockquote className="text-gray-700 italic mb-4">
                            "{study.testimonial.quote}"
                          </blockquote>
                          <div className="text-sm text-gray-600">
                            <div className="font-semibold">{study.testimonial.author}</div>
                            <div>{study.testimonial.role}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We have extensive experience across various industries, delivering 
                tailored solutions that meet specific sector requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-3xl font-bold text-blue-600 mb-2">
                      {industry.count}+
                    </p>
                    <p className="text-gray-600 text-sm">
                      Projects Completed
                    </p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let us help you achieve similar results. Contact our team to discuss 
                your project requirements and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}