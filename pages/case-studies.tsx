import React from 'react';
import Layout from './components/Layout';
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
  Brain,
  Shield,
  Zap;
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
    client: "Regional Medical Center",
    industry: "Healthcare",
    challenge: "Manual patient data processing and diagnosis delays",
    solution: "AI-powered diagnostic platform with real-time analysis",
    results: [
      "60% reduction in support costs",
      "40% faster response times",
      "95% customer satisfaction",
      "50% increase in efficiency"
    ],
    technologies: ["AI/ML", "React", "Node.js", "PostgreSQL"],
    duration: "6 months",
    team: "8 experts",
    image: "/images/case-studies/healthcare-ai.jpg",
    icon: Brain
  },
  {
    id: 2,
    title: "Cloud Migration for Financial Services",
    client: "Regional Bank",
    industry: "Finance",
    challenge: "Legacy system limitations and scalability issues",
    solution: "Complete cloud migration with microservices architecture",
    results: [
      "70% cost reduction",
      "99.9% uptime achieved",
      "3x faster processing",
      "Enhanced security compliance"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Microservices"],
    duration: "8 months",
    team: "12 experts",
    image: "/images/case-studies/finance-cloud.jpg",
    icon: Building
  },
  {
    id: 3,
    title: "E-commerce Platform Modernization",
    client: "Retail Chain",
    industry: "Retail",
    challenge: "Outdated platform affecting customer experience",
    solution: "Complete platform rebuild with modern architecture",
    results: [
      "200% increase in sales",
      "50% faster page load times",
      "80% reduction in cart abandonment",
      "Mobile-first responsive design"
    ],
    technologies: ["Next.js", "TypeScript", "Stripe", "Redis"],
    duration: "10 months",
    team: "15 experts",
    image: "/images/case-studies/retail-ecommerce.jpg",
    icon: Globe
  },
  {
    id: 4,
    title: "Cybersecurity Implementation",
    client: "Government Agency",
    industry: "Government",
    challenge: "Increasing cyber threats and compliance requirements",
    solution: "Comprehensive security framework and monitoring system",
    results: [
      "Zero security breaches",
      "100% compliance achieved",
      "24/7 threat monitoring",
      "50% faster incident response"
    ],
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"],
    duration: "4 months",
    team: "6 experts",
    image: "/images/case-studies/healthcare-security.jpg",
    icon: Shield
  }
];

const industries = [
  "Healthcare",
  "Finance",
  "Retail",
  "Government",
  "Education",
  "Manufacturing",
  "PropTech",
  "SaaS Development",
  "Data Analytics"
];

const technologies = [
  "AI/ML",
  "Cloud Computing",
  "Cybersecurity",
  "Web Development",
  "Mobile Apps",
  "Data Analytics",
  "IoT",
  "Blockchain"
];

export default function CaseStudiesPage() {
  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and client transformations across various industries"
      keywords="case studies, success stories, client projects, technology solutions, AI implementation"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover how we've helped organizations transform their operations with cutting-edge technology solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4">
                        <study.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                        <p className="text-gray-600">{study.client} • {study.industry}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 mb-4">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Duration: {study.duration}</span>
                        <span>Team: {study.team}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries & Technologies */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Industries We Serve</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className="p-3 bg-blue-50 rounded-lg text-center text-gray-700 font-medium"
                    >
                      {industry}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="p-3 bg-green-50 rounded-lg text-center text-gray-700 font-medium"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how we can help transform your organization with innovative technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/quote"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}