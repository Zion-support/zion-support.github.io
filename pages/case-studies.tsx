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
  BarChart3,
  Building,
  Cloud,
  Shield
} from 'lucide-react';
import Layout from '../components/Layout';

const caseStudies = [
  {
    id: 1,
    title: "Healthcare AI Platform Transformation",
    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Manual patient data processing and diagnosis delays",
    solution: "AI-powered diagnostic platform with real-time analysis",
    results: [
      "85% reduction in diagnosis time",
      "60% improvement in accuracy",
      "40% cost savings",
      "99.9% uptime achieved"
    ],
    technologies: ["AI/ML", "Cloud Computing", "Data Analytics"],
    duration: "6 months",
    team: "12 experts",
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 2,
    title: "E-commerce Platform Migration",
    client: "RetailMax",
    industry: "E-commerce",
    challenge: "Legacy system limitations and scalability issues",
    solution: "Complete cloud migration with microservices architecture",
    results: [
      "300% increase in performance",
      "50% reduction in infrastructure costs",
      "Zero downtime migration",
      "99.95% availability"
    ],
    technologies: ["Cloud Migration", "Microservices", "DevOps"],
    duration: "4 months",
    team: "8 experts",
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "Financial Services Security Enhancement",
    client: "SecureBank",
    industry: "Finance",
    challenge: "Cybersecurity vulnerabilities and compliance requirements",
    solution: "Comprehensive security framework with zero-trust architecture",
    results: [
      "100% compliance achieved",
      "90% reduction in security incidents",
      "Real-time threat detection",
      "Automated compliance reporting"
    ],
    technologies: ["Cybersecurity", "Zero-Trust", "Compliance"],
    duration: "8 months",
    team: "15 experts",
    image: "/api/placeholder/600/400"
  },
  {
    id: 4,
    title: "Manufacturing IoT Integration",
    client: "IndustrialCorp",
    industry: "Manufacturing",
    challenge: "Manual production monitoring and quality control",
    solution: "IoT-based smart manufacturing system with predictive analytics",
    results: [
      "25% increase in production efficiency",
      "30% reduction in defects",
      "Predictive maintenance implementation",
      "Real-time quality monitoring"
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

export default function CaseStudiesPage() {
  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful technology implementations across various industries. Real results, proven solutions, and measurable business impact."
      keywords="case studies, technology solutions, success stories, AI implementation, cloud migration, cybersecurity, PropTech"
      canonical="https://ziontechgroup.com/case-studies"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Success 
              <span className="text-emerald-400"> Stories</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-emerald-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge technology solutions. Real results, proven impact.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {(() => {
            const featured = caseStudies.find(study => study.featured);
            return featured ? (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featured.image} 
                      alt={featured.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <Building className="w-5 h-5 text-emerald-600 mr-2" />
                      <span className="text-emerald-600 font-semibold">{featured.industry}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{featured.title}</h2>
                    <p className="text-gray-600 mb-6">{featured.challenge}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-600">{featured.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-600">{featured.team}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featured.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/case-studies/${featured.id}`}
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-semibold"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : null;
          })()}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/4">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">All Case Studies</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Technology</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                    {technologies.map(tech => (
                      <option key={tech} value={tech}>{tech}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="md:w-3/4">
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.filter(study => !study.featured).map((study, index) => (
                  <motion.article 
                    key={study.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Building className="w-4 h-4 text-emerald-600 mr-2" />
                        <span className="text-emerald-600 font-semibold text-sm">{study.industry}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{study.team}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-semibold"
                      >
                        Read Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">Measurable results across all our projects</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">99.9%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$50M+</div>
              <div className="text-gray-600">Cost Savings Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}