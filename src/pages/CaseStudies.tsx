import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  CheckCircle, 
  ArrowRight, 
  Search, 
  Filter,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Target,
  Zap,
  Shield,
  Globe,
  Cpu,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Rocket,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ShoppingBag
} from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Building },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Cpu },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'data', name: 'Data Analytics', icon: BarChart3 },
    { id: 'iot', name: 'IoT & Automation', icon: Zap },
    { id: 'digital', name: 'Digital Transformation', icon: Rocket }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building },
    { id: 'healthcare', name: 'Healthcare', icon: Users },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'manufacturing', name: 'Manufacturing', icon: Target },
    { id: 'retail', name: 'Retail', icon: ShoppingBag },
    { id: 'government', name: 'Government', icon: Shield },
    { id: 'education', name: 'Education', icon: Lightbulb }
  ];

  const caseStudies = [
    {
      id: 1,
      company: "MedTech Solutions Inc.",
      industry: "Healthcare",
      category: "AI & Machine Learning",
      title: "AI-Powered Diagnostic System",
      challenge: "Manual diagnosis was time-consuming and error-prone, leading to delayed treatments and increased healthcare costs.",
      solution: "Implemented an AI-powered diagnostic system using computer vision and machine learning algorithms to analyze medical images and provide instant, accurate diagnoses.",
      results: [
        "95% accuracy in disease detection",
        "60% reduction in diagnosis time",
        "40% decrease in healthcare costs",
        "Improved patient outcomes by 35%"
      ],
      technologies: ["TensorFlow", "OpenCV", "Python", "AWS", "Docker"],
      duration: "6 months",
      teamSize: "8 developers",
      roi: "300%",
      image: "/images/case-studies/medtech-diagnostics.jpg"
    },
    {
      id: 2,
      company: "Global Financial Services",
      industry: "Finance",
      category: "Cybersecurity",
      title: "Advanced Fraud Detection Platform",
      challenge: "Traditional fraud detection methods were missing sophisticated attacks, resulting in millions in losses annually.",
      solution: "Developed a real-time fraud detection platform using machine learning algorithms and behavioral analytics to identify suspicious transactions instantly.",
      results: [
        "99.9% fraud detection accuracy",
        "90% reduction in false positives",
        "$50M annual savings",
        "Real-time threat response"
      ],
      technologies: ["Python", "Apache Kafka", "Redis", "Kubernetes", "Elasticsearch"],
      duration: "8 months",
      teamSize: "12 developers",
      roi: "400%",
      image: "/images/case-studies/financial-fraud.jpg"
    },
    {
      id: 3,
      company: "Smart Manufacturing Co.",
      industry: "Manufacturing",
      category: "IoT & Automation",
      title: "Smart Factory Implementation",
      challenge: "Outdated manufacturing processes were inefficient and lacked real-time monitoring capabilities.",
      solution: "Implemented a comprehensive IoT solution with sensors, automation systems, and real-time analytics to create a smart, connected factory.",
      results: [
        "45% increase in production efficiency",
        "30% reduction in energy consumption",
        "25% decrease in maintenance costs",
        "Real-time production monitoring"
      ],
      technologies: ["IoT Sensors", "PLC Systems", "Node.js", "MongoDB", "React"],
      duration: "10 months",
      teamSize: "15 developers",
      roi: "250%",
      image: "/images/case-studies/smart-factory.jpg"
    },
    {
      id: 4,
      company: "E-Commerce Giant",
      industry: "Retail",
      category: "Data Analytics",
      title: "Customer Behavior Analytics Platform",
      challenge: "Lack of customer insights was limiting personalized marketing and reducing conversion rates.",
      solution: "Built a comprehensive analytics platform that tracks customer behavior, preferences, and purchasing patterns to enable data-driven marketing decisions.",
      results: [
        "35% increase in conversion rates",
        "50% improvement in customer retention",
        "25% boost in average order value",
        "Personalized marketing campaigns"
      ],
      technologies: ["Python", "Apache Spark", "PostgreSQL", "React", "D3.js"],
      duration: "7 months",
      teamSize: "10 developers",
      roi: "350%",
      image: "/images/case-studies/ecommerce-analytics.jpg"
    },
    {
      id: 5,
      company: "Government Agency",
      industry: "Government",
      category: "Digital Transformation",
      title: "Citizen Services Portal",
      challenge: "Outdated government systems were causing delays and frustration for citizens accessing public services.",
      solution: "Developed a modern, user-friendly digital portal that streamlines government services and improves citizen experience.",
      results: [
        "80% reduction in service processing time",
        "90% improvement in citizen satisfaction",
        "60% decrease in administrative costs",
        "24/7 service availability"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      duration: "12 months",
      teamSize: "20 developers",
      roi: "200%",
      image: "/images/case-studies/gov-portal.jpg"
    },
    {
      id: 6,
      company: "Educational Institute",
      industry: "Education",
      category: "AI & Machine Learning",
      title: "Personalized Learning Platform",
      challenge: "One-size-fits-all education approach was not meeting individual student needs and learning styles.",
      solution: "Created an AI-powered learning platform that adapts to each student's learning pace, style, and preferences.",
      results: [
        "40% improvement in student performance",
        "50% increase in engagement rates",
        "30% reduction in dropout rates",
        "Personalized learning paths"
      ],
      technologies: ["Python", "TensorFlow", "React", "MongoDB", "Redis"],
      duration: "9 months",
      teamSize: "14 developers",
      roi: "280%",
      image: "/images/case-studies/education-ai.jpg"
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === 'all' || study.category === categories.find(c => c.id === selectedCategory)?.name;
    const matchesIndustry = selectedIndustry === 'all' || study.industry === industries.find(i => i.id === selectedIndustry)?.name;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesIndustry && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Case
              </span>
              <br />
              <span className="text-white">Studies</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how our innovative solutions have transformed businesses across industries, 
              delivering measurable results and competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                View All Studies
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-800 to-cyan-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5 text-blue-300" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Mail className="w-5 h-5 text-blue-300" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-blue-300" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <Search className="absolute right-3 top-3 w-5 h-5 text-white/60" />
                </div>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                    {category.name}
                  </option>
                ))}
              </select>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {industries.map(industry => (
                  <option key={industry.id} value={industry.id} className="bg-slate-800 text-white">
                    {industry.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-medium rounded-full">
                    {study.category}
                  </span>
                </div>

                {/* Company Info */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{study.company}</h3>
                    <p className="text-sm text-gray-400">{study.industry}</p>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-4 leading-tight">
                  {study.title}
                </h4>

                {/* Challenge */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-blue-400 mb-2">Challenge</h5>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-blue-400 mb-2">Solution</h5>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-blue-400 mb-2">Results</h5>
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-blue-400 mb-2">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">{study.duration}</div>
                    <div className="text-xs text-gray-400">Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{study.teamSize}</div>
                    <div className="text-xs text-gray-400">Team Size</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">{study.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                  View Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-2xl font-bold text-white mb-4">No case studies found</h3>
              <p className="text-blue-200 mb-6">Try adjusting your search criteria or browse all our case studies.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedIndustry('all');
                }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                View All Case Studies
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-cyan-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our solutions can transform your business and deliver similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Contact Sales
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
