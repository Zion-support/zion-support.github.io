import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import { 
  Calendar, 
=======
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Calendar, 
>>>>>>> main
  User, 
  ArrowRight, 
  Tag, 
  ExternalLink,
=======
import { 
  ArrowRight, 
  ExternalLink, 
  Calendar, 
  User, 
  Building,
  TrendingUp,
  CheckCircle,
  Users,
>>>>>>> main
  Building,
  TrendingUp,
  Award,
  Clock,
<<<<<<< HEAD
  CheckCircle
} from 'lucide-react';
=======
  Target,
  Zap,
  Shield,
  Cloud,
  Brain
} from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> main

const caseStudies = [
  {
    id: 1,
<<<<<<< HEAD
    title: "Healthcare AI Transformation: 40% Reduction in Diagnosis Time",
    company: "MedTech Solutions",
=======
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
>>>>>>> main
    industry: "Healthcare",
    challenge: "Long diagnosis times and high error rates in medical imaging analysis",
    solution: "Implemented AI-powered image recognition system with machine learning algorithms",
    results: [
      "40% reduction in diagnosis time",
      "95% accuracy in image analysis",
      "60% decrease in false positives",
      "50% improvement in patient satisfaction"
    ],
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    featured: true,
    image: "/api/placeholder/600/400"
  },
<<<<<<< HEAD
  {}
    id: 2,
    title: "Financial Services: AI-Powered Fraud Detection System","
    company: "SecureBank Corp","
    industry: "Financial Services","
    challenge: "Increasing fraud incidents and manual review processes","
    solution: "Deployed real-time AI fraud detection with behavioral analytics","
    results: [
      "99.2% fraud detection accuracy","
      "80% reduction in false positives","
      "Real-time transaction monitoring","
      "30% cost savings in fraud prevention"";
    ],
    author: "Michael Rodriguez","
    date: "2024-01-10","
    readTime: "6 min read","
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {}
    id: 3,
    title: "Manufacturing: Predictive Maintenance with IoT and AI","
    company: "Industrial Dynamics","
    industry: "Manufacturing","
    challenge: "Unexpected equipment failures causing production delays","
    solution: "Implemented IoT sensors with AI predictive maintenance algorithms","
    results: [
      "70% reduction in unplanned downtime","
      "25% increase in equipment lifespan","
      "15% reduction in maintenance costs","
      "Predictive accuracy of 92%"";
    ],
    author: "Alex Thompson","
    date: "2024-01-05","
    readTime: "7 min read","
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {}
    id: 4,
    title: "Retail: Personalized Customer Experience Platform","
    company: "ShopSmart Retail","
    industry: "Retail","
    challenge: "Low customer engagement and poor personalization","
    solution: "Built AI-driven recommendation engine with customer behavior analysis","
    results: [
      "45% increase in customer engagement","
      "35% boost in average order value","
      "60% improvement in conversion rates","
      "25% increase in customer retention"";
    ],
    author: "Jennifer Lee","
    date: "2023-12-28","
    readTime: "5 min read","
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {}
    id: 5,
    title: "Education: AI-Powered Learning Management System","
    company: "EduTech University","
    industry: "Education","
    challenge: "Low student engagement and poor learning outcomes","
    solution: "Developed adaptive learning platform with AI tutoring system","
    results: [
      "50% improvement in student performance","
      "40% increase in course completion rates","
      "Personalized learning paths for each student","
      "85% student satisfaction rating"";
    ],
    author: "David Kim","
    date: "2023-12-20","
    readTime: "6 min read","
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {}
    id: 6,
    title: "Logistics: Supply Chain Optimization with AI","
    company: "Global Logistics Inc","
    industry: "Logistics","
    challenge: "Inefficient supply chain and high operational costs","
    solution: "Implemented AI-powered supply chain optimization and route planning","
    results: [
      "30% reduction in delivery times","
      "25% decrease in fuel costs","
      "20% improvement in inventory management","
      "35% increase in customer satisfaction"";
    ],
    author: "Emma Wilson","
    date: "2023-12-15","
    readTime: "7 min read","
    featured: false,
    image: "/api/placeholder/600/400"
  }
;];

const industries = [;
  "All Industries","
  "Healthcare","
  "Financial Services","
  "Manufacturing","
  "Retail","
  "Education","
  "Logistics","
  "Technology"";
;];

export default function CaseStudiesPage() {
  return (;
    <div className="min-h-screen bg-gray-50">";
      <Head>;
        <title>Case Studies - Zion Tech Group</title>;
        <meta name="description" content="Explore real-world success stories and case studies from our AI and technology implementations across various industries." />";
      </Head>;

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">"
        <div className="container mx-auto px-4">";
          <div className="max-w-4xl mx-auto text-center">";
            <h1 className="text-5xl font-bold mb-6">");
              Success Stories;
            </h1>;
            <p className="text-xl text-blue-100">";
              Real-world results from our AI and technology implementations across various industries;
            </p>;
          </div>;
        </div>;
      </section>;

      {/* Featured Case Study */}
      <section className="py-16">"
        <div className="container mx-auto px-4">";
          <div className="max-w-6xl mx-auto">";
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Case Study</h2>";
            
            {caseStudies.filter(study => study.featured).map((study) => (;
              <motion.article}),
                key={study.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden mb-8""
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >,
                <div className="md:flex">";
                  <div className="md:w-1/2">";
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">";
                      <Building className="w-24 h-24 text-white" />";
                    </div>;
                  </div>;
                  <div className="md:w-1/2 p-8">";
                    <div className="flex items-center gap-2 mb-4">";
                      <Tag className="w-4 h-4 text-blue-600" />";
                      <span className="text-sm text-blue-600 font-medium">";
                        {study.industry}
                      </span>,
                    </div>;
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">";
                      {study.title}
                    </h2>,
                    
                    <div className="mb-4">";
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>";
                      <p className="text-gray-600 mb-4">{study.challenge}</p>"
                      
                      <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>";
                      <p className="text-gray-600 mb-4">{study.solution}</p>"
                    </div>;
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">";
                      <div className="flex items-center gap-4">";
                        <div className="flex items-center gap-2">";
                          <User className="w-4 h-4" />";
                          <span>{study.author}</span>,
                        </div>;
                        <div className="flex items-center gap-2">";
                          <Calendar className="w-4 h-4" />";
                          <span>{study.date}</span>,
                        </div>;
                      </div>;
                      <span>{study.readTime}</span>,
                    </div>;
                    
                    <Link;
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors""
                    >;
                      Read Full Case Study;
                      <ArrowRight className="w-4 h-4" />";
                    </Link>;
                  </div>;
                </div>;
              </motion.article>;
            ))}
          </div>,
        </div>;
      </section>;

      {/* Industry Filter */}
      <section className="py-8 bg-white">"
        <div className="container mx-auto px-4">";
          <div className="max-w-6xl mx-auto">";
            <div className="flex flex-wrap gap-4 justify-center">";
              {industries.map((industry, index) => (,
                <button}),
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${}
                    index === 0,
                      ? 'bg-blue-600 text-white'';
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50'';
                  }`}
                >,
                  {industry}
                </button>,
              ))}
            </div>,
          </div>;
        </div>;
      </section>;

      {/* Case Studies Grid */}
      <section className="py-16">"
        <div className="container mx-auto px-4">";
          <div className="max-w-6xl mx-auto">";
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All Case Studies</h2>";
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {caseStudies.filter(study => !study.featured).map((study, index) => (,
                <motion.article}),
                  key={study.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow""
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >,
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">";
                    <Building className="w-16 h-16 text-white" />";
                  </div>;
                  <div className="p-6">";
                    <div className="flex items-center gap-2 mb-3">";
                      <Tag className="w-4 h-4 text-blue-600" />";
                      <span className="text-sm text-blue-600 font-medium">";
                        {study.industry}
                      </span>,
                    </div>;
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">";
                      {study.title}
                    </h3>,
                    
                    <div className="mb-4">";
                      <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>";
                      <p className="text-gray-600 text-sm line-clamp-2">";
                        {study.challenge}
                      </p>,
                    </div>;
                    
                    <div className="mb-4">";
                      <h4 className="font-semibold text-gray-900 mb-1">Key Results:</h4>";
                      <ul className="text-sm text-gray-600 space-y-1">";
                        {study.results.slice(0, 2).map((result, resultIndex) => (,
                          <li key={resultIndex} className="flex items-center gap-2">"
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />";
                            {result}
                          </li>,
                        ))}
                      </ul>,
                    </div>;
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">";
                      <div className="flex items-center gap-2">";
                        <User className="w-4 h-4" />";
                        <span>{study.author}</span>,
                      </div>;
                      <div className="flex items-center gap-2">";
                        <Calendar className="w-4 h-4" />";
                        <span>{study.date}</span>,
                      </div>;
                    </div>;
                    
                    <div className="flex items-center justify-between">";
                      <span className="text-sm text-gray-500">{study.readTime}</span>"
                      <Link;
                        href={`/case-studies/${study.id}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium""
                      >;
                        Read More;
                        <ArrowRight className="w-4 h-4" />";
                      </Link>;
                    </div>;
                  </div>;
                </motion.article>;
              ))}
            </div>,

            {/* Load More Button */}
            <div className="text-center mt-12">"
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">";
                Load More Case Studies;
              </button>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">"
        <div className="container mx-auto px-4">";
          <div className="max-w-4xl mx-auto text-center">";
            <h2 className="text-3xl font-bold text-white mb-4">";
              Ready to Create Your Success Story?;
            </h2>;
            <p className="text-xl text-blue-100 mb-8">";
              Let's discuss how we can help transform your business with AI and technology';
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link;
                href="/contact"";
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"";
              >;
                Start Your Project;
                <ArrowRight className="w-4 h-4" />";
              </Link>;
              <Link;
                href="/services"";
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"";
              >;
                Explore Our Services;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
=======
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
  },
  {
    title: 'Healthcare AI Transformation',
    client: 'Regional Medical Center',
    industry: 'Healthcare',
    challenge: 'Improve patient diagnosis accuracy and reduce wait times',
    solution: 'Implemented AI-powered diagnostic tools and automated patient triage system',
    results: [
      '40% reduction in diagnosis time',
      '25% improvement in accuracy',
      '60% decrease in patient wait times',
      '95% patient satisfaction rate'
    ],
    technologies: ['Machine Learning', 'Computer Vision', 'Natural Language Processing'],
    duration: '6 months',
    teamSize: '8 developers',
    image: '/case-studies/healthcare-ai.jpg',
    icon: Brain
  },
  {
    id: 2,
    title: 'Financial Services Cloud Migration',
    client: 'Premier Bank',
    industry: 'Finance',
    challenge: 'Migrate legacy systems to cloud while maintaining security compliance',
    solution: 'Designed and implemented secure cloud infrastructure with zero-downtime migration',
    results: [
      '99.9% uptime achieved',
      '50% reduction in infrastructure costs',
      '3x faster application deployment',
      '100% compliance with financial regulations'
    ],
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
    duration: '8 months',
    teamSize: '12 developers',
    image: '/case-studies/finance-cloud.jpg',
    icon: Cloud
  },
  {
    id: 3,
    title: 'Manufacturing IoT Integration',
    client: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    challenge: 'Implement IoT sensors for predictive maintenance and quality control',
    solution: 'Deployed comprehensive IoT platform with real-time monitoring and analytics',
    results: [
      '30% reduction in equipment downtime',
      '20% improvement in product quality',
      '15% increase in production efficiency',
      'ROI of 250% within first year'
    ],
    technologies: ['IoT', 'Edge Computing', 'Time Series Analytics', 'Machine Learning'],
    duration: '10 months',
    teamSize: '10 developers',
    image: '/case-studies/manufacturing-iot.jpg',
    icon: TrendingUp
  },
  {
    id: 4,
    title: 'E-commerce Security Enhancement',
    client: 'RetailTech Solutions',
    industry: 'Retail',
    challenge: 'Strengthen security posture and prevent data breaches',
    solution: 'Implemented comprehensive cybersecurity framework with real-time threat detection',
    results: [
      'Zero security incidents in 12 months',
      '99.8% threat detection accuracy',
      '50% reduction in false positives',
      'SOC 2 Type II compliance achieved'
    ],
    technologies: ['Cybersecurity', 'SIEM', 'Machine Learning', 'Blockchain'],
    duration: '4 months',
    teamSize: '6 developers',
    image: '/case-studies/retail-security.jpg',
    icon: Shield
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

const categories = [
  { name: 'All', count: caseStudies.length },
  { name: 'Healthcare', count: caseStudies.filter(cs => cs.industry === 'Healthcare').length },
  { name: 'Finance', count: caseStudies.filter(cs => cs.industry === 'Finance').length },
  { name: 'Manufacturing', count: caseStudies.filter(cs => cs.industry === 'Manufacturing').length },
  { name: 'Retail', count: caseStudies.filter(cs => cs.industry === 'Retail').length }
];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = React.useState('All');

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful technology implementations and digital transformation projects. See how we've helped businesses achieve their goals with innovative solutions."
      keywords="case studies, success stories, technology implementation, digital transformation, AI projects, cloud migration"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
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
    </MainLayout>
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Discover how we've helped businesses across industries achieve their technology goals and drive growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
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
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredCaseStudies.map((caseStudy, index) => {
                const IconComponent = caseStudy.icon;
                return (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Header */}
                    <div className="p-8 border-b border-gray-200">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {caseStudy.title}
                            </h3>
                            <p className="text-gray-600">{caseStudy.client}</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {caseStudy.industry}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {caseStudy.duration}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {caseStudy.teamSize}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{caseStudy.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{caseStudy.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Results</h4>
                        <ul className="space-y-2">
                          {caseStudy.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={`/case-studies/${caseStudy.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-transform"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Building className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
                <p className="text-gray-600">Try selecting a different industry.</p>
              </div>
            )}
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
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let us help you achieve similar results with our proven technology solutions and expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> main
  );
}