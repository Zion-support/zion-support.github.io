import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  ArrowRight,
  TrendingUp,
  CheckCircle,
  Users,
  Building,
  Globe,
  Award,
  Clock,
  Target,
  Star,
  Zap,
  Shield,
  Database,
  Cpu,
  Brain,
  Cloud,
  Smartphone
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Service Transformation",
    client: "Global E-commerce Retailer",
    industry: "E-commerce",
    challenge: "High customer service volume and response time issues",
    solution: "Implemented AI chatbot and automated response system",
    results: [
      "75% reduction in response time",
      "60% decrease in support tickets",
      "95% customer satisfaction rate",
      "$2M annual cost savings"
    ],
    technologies: ["AI/ML", "Natural Language Processing", "Cloud Computing"],
    duration: "6 months",
    team: "8 specialists",
    image: "/images/case-study-1.jpg",
    testimonial: {
      quote: "Zion Tech Group transformed our customer service operations. The AI solution exceeded our expectations and delivered measurable results.",
      author: "Sarah Johnson",
      role: "VP of Customer Experience"
    }
  },
  {
    id: 2,
    title: "Healthcare AI Platform Transformation",
    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Legacy system modernization and AI integration for patient data analysis",
    solution: "Developed comprehensive AI platform for medical data processing and analysis",
    results: [
      "90% improvement in data processing speed",
      "85% accuracy in diagnostic predictions",
      "50% reduction in manual data entry",
      "Compliance with HIPAA and FDA regulations"
    ],
    technologies: ["Machine Learning", "Data Analytics", "Cloud Infrastructure", "Security"],
    duration: "8 months",
    team: "12 specialists",
    image: "/images/case-study-2.jpg",
    testimonial: {
      quote: "The AI platform revolutionized our diagnostic capabilities while maintaining the highest security standards.",
      author: "Dr. Michael Chen",
      role: "Chief Medical Officer"
    }
  },
  {
    id: 3,
    title: "Financial Services Cloud Migration",
    client: "Regional Bank",
    industry: "Financial Services",
    challenge: "Legacy infrastructure limitations and security concerns",
    solution: "Complete cloud migration with enhanced security and compliance features",
    results: [
      "99.9% uptime achieved",
      "40% reduction in infrastructure costs",
      "Enhanced security compliance",
      "50% faster application deployment"
    ],
    technologies: ["Cloud Computing", "DevOps", "Security", "Compliance"],
    duration: "10 months",
    team: "15 specialists",
    image: "/images/case-study-3.jpg",
    testimonial: {
      quote: "The cloud migration was seamless and significantly improved our operational efficiency while maintaining security.",
      author: "Jennifer Martinez",
      role: "CTO"
    }
  },
  {
    id: 4,
    title: "Manufacturing IoT Integration",
    client: "Industrial Manufacturing Co.",
    industry: "Manufacturing",
    challenge: "Manual production monitoring and quality control processes",
    solution: "IoT sensor network with real-time analytics and predictive maintenance",
    results: [
      "30% increase in production efficiency",
      "25% reduction in equipment downtime",
      "20% improvement in product quality",
      "Real-time production monitoring"
    ],
    technologies: ["IoT", "Data Analytics", "Machine Learning", "Edge Computing"],
    duration: "7 months",
    team: "10 specialists",
    image: "/images/case-study-4.jpg",
    testimonial: {
      quote: "The IoT solution transformed our manufacturing operations and provided insights we never had before.",
      author: "Robert Kim",
      role: "Operations Director"
    }
  },
  {
    id: 5,
    title: "Retail AI Personalization Engine",
    client: "Fashion Retail Chain",
    industry: "Retail",
    challenge: "Low customer engagement and conversion rates",
    solution: "AI-powered personalization engine for product recommendations and marketing",
    results: [
      "45% increase in conversion rates",
      "35% improvement in customer engagement",
      "25% increase in average order value",
      "Personalized shopping experience"
    ],
    technologies: ["AI/ML", "Recommendation Systems", "Data Science", "E-commerce"],
    duration: "5 months",
    team: "6 specialists",
    image: "/images/case-study-5.jpg",
    testimonial: {
      quote: "The personalization engine dramatically improved our customer experience and sales performance.",
      author: "Lisa Thompson",
      role: "Head of Digital Marketing"
    }
  },
  {
    id: 6,
    title: "Government Digital Services Platform",
    client: "State Government",
    industry: "Government",
    challenge: "Outdated citizen services and accessibility issues",
    solution: "Modern digital platform with accessibility features and citizen portal",
    results: [
      "80% reduction in service processing time",
      "95% citizen satisfaction rate",
      "Full accessibility compliance",
      "50% reduction in administrative costs"
    ],
    technologies: ["Web Development", "Accessibility", "Security", "Cloud Computing"],
    duration: "12 months",
    team: "20 specialists",
    image: "/images/case-study-6.jpg",
    testimonial: {
      quote: "The digital platform modernized our services and significantly improved citizen satisfaction.",
      author: "David Wilson",
      role: "IT Director"
    }
  }
];

const industries = [
  { name: "Healthcare", count: 15, icon: Shield },
  { name: "Financial Services", count: 12, icon: Building },
  { name: "E-commerce", count: 18, icon: Globe },
  { name: "Manufacturing", count: 8, icon: Cpu },
  { name: "Government", count: 6, icon: Award },
  { name: "Education", count: 10, icon: Users }
];

const technologies = [
  { name: "AI/ML", count: 25, icon: Brain },
  { name: "Cloud Computing", count: 30, icon: Cloud },
  { name: "Data Analytics", count: 20, icon: BarChart3 },
  { name: "IoT", count: 12, icon: Smartphone },
  { name: "Security", count: 18, icon: Shield },
  { name: "DevOps", count: 15, icon: Zap }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Discover how we've helped organizations across various industries 
                transform their operations and achieve remarkable results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real projects, real results. See how our solutions have made a 
                measurable impact for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.client}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-sm text-gray-700">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-sm text-gray-700">{study.solution}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Results</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <blockquote className="text-sm text-gray-700 italic mb-2">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="text-sm text-gray-600">
                        <strong>{study.testimonial.author}</strong>, {study.testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries & Technologies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Industries */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => {
                    const IconComponent = industry.icon;
                    return (
                      <div key={industry.name} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <IconComponent className="w-6 h-6 text-blue-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900">{industry.name}</div>
                          <div className="text-sm text-gray-600">{industry.count} projects</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies We Use</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <div key={tech.name} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <IconComponent className="w-6 h-6 text-purple-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900">{tech.name}</div>
                          <div className="text-sm text-gray-600">{tech.count} projects</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with 
                cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}