import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Building, 
  TrendingUp,
  Calendar, 
  User, 
  Tag, 
  ExternalLink,
  Clock,
  Target,
  Zap,
  Shield,
  Cloud,
  Brain,
  Search
ursor/fix-lint-push-and-merge-to-main-4bb1
} from 'lucide-react';
import Layout from '../components/Layout';


const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
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
  },
  {
    id: 3,
    title: "Cybersecurity Enhancement",
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

    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Need for automated medical diagnosis and patient management",
    solution: "Developed AI-powered diagnostic system with 95% accuracy",
    results: [
      "95% diagnostic accuracy improvement",
      "60% reduction in diagnosis time",
      "40% cost savings",
      "500+ patients served daily"
    ],
    duration: "6 months",
    team: "12 developers",
    technologies: ["AI/ML", "React", "Node.js", "PostgreSQL"],
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 2,
    title: "E-commerce Platform Migration",
    client: "RetailMax",
    industry: "Retail",
    challenge: "Legacy system causing performance issues and scalability problems",
    solution: "Migrated to modern cloud-based architecture with microservices",
    results: [
      "300% performance improvement",
      "99.9% uptime achieved",
      "50% reduction in server costs",
      "2M+ monthly active users"
    ],
    duration: "4 months",
    team: "8 developers",
    technologies: ["Next.js", "AWS", "Docker", "Kubernetes"],
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 3,
    title: "Cybersecurity Implementation",
    client: "FinanceCorp",
    industry: "Financial Services",
    challenge: "Need for comprehensive security framework and compliance",
    solution: "Implemented zero-trust security architecture with advanced monitoring",
    results: [
      "100% compliance with SOC 2 Type II",
      "Zero security breaches",
      "99.9% threat detection rate",
      "50% reduction in security incidents"
    ],
    duration: "8 months",
    team: "15 security experts",
    technologies: ["Zero Trust", "SIEM", "WAF", "IAM"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 4,
    title: "Data Analytics Platform",
    client: "ManufacturingCo",
    industry: "Manufacturing",
    challenge: "Need for real-time production monitoring and predictive analytics",
    solution: "Built comprehensive IoT and analytics platform",
    results: [
      "25% increase in production efficiency",
      "30% reduction in downtime",
      "40% improvement in quality control",
      "Real-time monitoring of 1000+ sensors"
    ],
    duration: "5 months",
    team: "10 developers",
    technologies: ["IoT", "Python", "TensorFlow", "InfluxDB"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 5,
    title: "Cloud Migration Strategy",
    client: "TechStartup",
    industry: "Technology",
    challenge: "Need to scale infrastructure and reduce operational costs",
    solution: "Migrated entire infrastructure to AWS with auto-scaling",
    results: [
      "70% reduction in infrastructure costs",
      "Auto-scaling to handle 10x traffic",
      "99.9% availability",
      "50% faster deployment times"
    ],
    duration: "3 months",
    team: "6 developers",
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 6,
    title: "Mobile App Development",
    client: "ServiceProvider",
    industry: "Services",
    challenge: "Need for mobile presence and customer engagement",
    solution: "Developed cross-platform mobile app with real-time features",
    results: [
      "50,000+ app downloads",
      "4.8/5 app store rating",
      "40% increase in customer engagement",
      "Real-time notifications and chat"
    ],
    duration: "4 months",
    team: "8 developers",
    technologies: ["React Native", "Firebase", "WebRTC", "Push Notifications"],
    image: "/api/placeholder/600/400",
    featured: false
ursor/fix-lint-push-and-merge-to-main-4bb1

  }
];

const industries = [
export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our success stories and see how we've helped clients transform their businesses with innovative technology solutions." />
      </Head>

      <div className="min-h-screen bg-gray-50">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">

  { name: "All", count: caseStudies.length },
  { name: "Healthcare", count: caseStudies.filter(cs => cs.industry === "Healthcare").length },
  { name: "Retail", count: caseStudies.filter(cs => cs.industry === "Retail").length },
  { name: "Financial Services", count: caseStudies.filter(cs => cs.industry === "Financial Services").length },
  { name: "Manufacturing", count: caseStudies.filter(cs => cs.industry === "Manufacturing").length },
  { name: "Technology", count: caseStudies.filter(cs => cs.industry === "Technology").length },
  { name: "Services", count: caseStudies.filter(cs => cs.industry === "Services").length }
];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredCaseStudies = caseStudies.filter(caseStudy => {
    const matchesIndustry = selectedIndustry === "All" || caseStudy.industry === selectedIndustry;
    const matchesSearch = caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseStudy.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseStudy.industry.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  const featuredCaseStudies = filteredCaseStudies.filter(cs => cs.featured);
  const regularCaseStudies = filteredCaseStudies.filter(cs => !cs.featured);

  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and see how we've helped businesses transform with innovative technology solutions."
      keywords="case studies, projects, success stories, AI solutions, technology implementation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform with innovative technology solutions and achieve remarkable results.

              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Industry Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {industries.map((industry) => (
                  <button
                    key={industry.name}
                    onClick={() => setSelectedIndustry(industry.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedIndustry === industry.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {industry.name} ({industry.count})
                  </button>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedIndustry('All');
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Clear Filters
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        {featuredCaseStudies.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Featured Case Studies
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our most successful and impactful projects that showcase our expertise and innovation.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {featuredCaseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {caseStudy.industry}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {caseStudy.title}
                      </h3>
                      
                      <div className="flex items-center mb-3">
                        <Building className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{caseStudy.client}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        <strong>Challenge:</strong> {caseStudy.challenge}
                      </p>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        <strong>Solution:</strong> {caseStudy.solution}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <h4 className="font-semibold text-gray-900">Key Results:</h4>
                        <ul className="space-y-1">
                          {caseStudy.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {caseStudy.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {caseStudy.team}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {caseStudy.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Case Studies */}
        <section className="py-16 bg-gray-50">
ursor/fix-lint-push-and-merge-to-main-4bb1
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our complete portfolio of successful projects across various industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularCaseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {caseStudy.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {caseStudy.title}
                    </h3>
                    
                    <div className="flex items-center mb-3">
                      <Building className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{caseStudy.client}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      <strong>Challenge:</strong> {caseStudy.challenge}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Results:</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.slice(0, 3).map((result, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {caseStudy.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {caseStudy.team}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {caseStudy.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          +{caseStudy.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Our Services
                </Link>
ursor/fix-lint-push-and-merge-to-main-4bb1
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>

      </div>
    </Layout>
ursor/fix-lint-push-and-merge-to-main-4bb1

  );
}