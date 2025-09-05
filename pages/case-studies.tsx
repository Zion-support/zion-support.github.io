import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
  Shield,
  Brain,
  Zap
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Healthcare AI Platform Transformation",
    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Manual patient data processing and diagnosis delays",
    solution: "AI-powered diagnostic platform with real-time analysis",
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
    title: "Cybersecurity Implementation",
    client: "Global Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Increasing cyber threats and compliance requirements",
    solution: "Comprehensive cybersecurity framework with 24/7 monitoring",
    results: [
      "Zero security breaches",
      "100% compliance with industry standards",
      "24/7 threat monitoring",
      "50% faster incident response"
    ],
    duration: "4 months",
    team: "6 experts",
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"],
    image: "/images/case-studies/healthcare-security.jpg"
  },
  {
    id: 4,
    title: "IoT Smart City Platform",
    client: "Metro City Government",
    industry: "Government",
    challenge: "Inefficient city services and resource management",
    solution: "Integrated IoT platform connecting all city services",
    results: [
      "25% reduction in energy consumption",
      "40% improvement in traffic flow",
      "Real-time monitoring of city services",
      "Enhanced citizen satisfaction"
    ],
    technologies: ["IoT", "Data Analytics", "Machine Learning"],
    duration: "10 months",
    team: "20 experts",
    image: "/api/placeholder/600/400"
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
      "50% reduction in manual processes",
      "Enhanced property analytics",
      "Streamlined tenant management"
    ],
    duration: "8 months",
    team: "15 experts",
    technologies: ["PropTech", "AI/ML", "Web Development", "Analytics"],
    image: "/images/case-studies/proptech-platform.jpg"
  }
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
    <>
      <Head>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and see how we've helped businesses transform through innovative technology solutions." />
        <meta name="keywords" content="case studies, success stories, client projects, technology solutions, AI implementation" />
        <meta property="og:title" content="Case Studies - Zion Tech Group Success Stories" />
        <meta property="og:description" content="Discover how we've helped businesses achieve remarkable results through innovative technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
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
                Discover how we've helped businesses across industries achieve remarkable results through innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
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
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured Case Studies</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore detailed case studies showcasing our expertise across various industries and technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Building className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-xl font-bold">{study.industry}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {study.duration}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-600 mb-2"><strong>Client:</strong> {study.client}</p>
                      <p className="text-gray-600 mb-2"><strong>Industry:</strong> {study.industry}</p>
                      <p className="text-gray-600 mb-2"><strong>Team:</strong> {study.team}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/contact?case-study=${encodeURIComponent(study.title)}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}