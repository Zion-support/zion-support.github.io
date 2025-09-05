import * as React from 'react';
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
  Brain,
  Shield,
  Zap,
  Target,
  Star,
  ExternalLink
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Manual patient data processing and diagnosis delays",
    solution: "AI-powered diagnostic platform with real-time analysis",
    results: [
      "60% reduction in support costs",
      "40% faster response times",
      "95% customer satisfaction rate",
      "50% increase in operational efficiency"
    ],
    technologies: ["AI/ML", "React", "Node.js", "PostgreSQL", "AWS"],
    duration: "8 months",
    team: "12 experts",
    image: "/images/case-studies/healthcare-ai.jpg",
    icon: Brain
  },
  {
    id: 2,
    title: "Cloud Migration for Financial Services",
    client: "Regional Bank",
    industry: "Finance",
    challenge: "Legacy system limitations and security concerns",
    solution: "Complete cloud migration with enhanced security",
    results: [
      "99.9% uptime achieved",
      "70% cost reduction",
      "Enhanced security compliance",
      "Improved scalability"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Python"],
    duration: "6 months",
    team: "15 experts",
    image: "/images/case-studies/finance-cloud.jpg",
    icon: Shield
  },
  {
    id: 3,
    title: "E-commerce Platform Modernization",
    client: "RetailCorp",
    industry: "Retail",
    challenge: "Outdated platform affecting customer experience",
    solution: "Complete platform rebuild with modern architecture",
    results: [
      "300% increase in page load speed",
      "80% improvement in conversion rates",
      "Mobile-first responsive design",
      "Advanced analytics integration"
    ],
    technologies: ["Next.js", "TypeScript", "Stripe", "Redis", "Vercel"],
    duration: "10 months",
    team: "20 experts",
    image: "/images/case-studies/ecommerce-modern.jpg",
    icon: Zap
  },
  {
    id: 4,
    title: "Cybersecurity Implementation",
    client: "TechStart Inc",
    industry: "Technology",
    challenge: "Security vulnerabilities and compliance requirements",
    solution: "Comprehensive security framework implementation",
    results: [
      "Zero security incidents",
      "100% compliance achievement",
      "24/7 threat monitoring",
      "50% faster incident response"
    ],
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"],
    duration: "4 months",
    team: "6 experts",
    image: "/images/case-studies/cybersecurity.jpg",
    icon: Target
  }
];

const industries = [
  "Healthcare",
  "Finance",
  "Retail",
  "Technology",
  "Manufacturing",
  "Education",
  "Real Estate",
  "PropTech",
  "SaaS Development",
  "Data Analytics"
];

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = React.useState<string>("All");
  const [selectedCase, setSelectedCase] = React.useState<number | null>(null);

  const filteredCaseStudies = selectedIndustry === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their digital presence 
                with innovative solutions and cutting-edge technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Filter by Industry
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setSelectedIndustry("All")}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedIndustry === "All"
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                  }`}
                >
                  All Industries
                </button>
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedIndustry === industry
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedCase(study.id)}
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute top-4 right-4">
                      <study.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {study.challenge}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {study.team}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                          +{study.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Get Started
                </button>
                <button className="border border-gray-300 hover:border-gray-200 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  View Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default CaseStudiesPage;