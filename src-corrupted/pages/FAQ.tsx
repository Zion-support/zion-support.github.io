import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Plus, 
  Minus, 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone,
  Clock,
  Users,
  Shield,
  Cloud,
  Brain,
  Zap,
  CheckCircle,
  BookOpen,
  Star,
  TrendingUp,
  Award,
  Globe,
  Cpu,
  Database,
  Lock,
  Wifi,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin,
  Building,
  Lightbulb,
  Target,
  Rocket,
  Heart,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageSquare,
  Settings,
  Palette,
  Filter,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: any;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lastUpdated: string;
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleAllInCategory = (categoryIndex: number, questions: any[]) => {
    const startIndex = categoryIndex * 100;
    const endIndex = startIndex + questions.length;
    const categoryIndices = Array.from({ length: questions.length }, (_, i) => startIndex + i);
    
    const allOpen = categoryIndices.every(index => openItems.includes(index));
    
    if (allOpen) {
      setOpenItems(prev => prev.filter(index => !categoryIndices.includes(index)));
    } else {
      setOpenItems(prev => [...new Set([...prev, ...categoryIndices])]);
    }
  };

  const faqData = [
    {
      category: "General",
      icon: Users,
      description: "Basic information about Zion Tech Group",
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is a leading technology company specializing in AI-powered solutions, cloud computing, cybersecurity, and digital transformation services. We help businesses leverage cutting-edge technology to drive innovation and growth. Founded with a mission to democratize advanced technology, we serve clients across various industries with scalable, secure, and innovative solutions.",
          difficulty: "beginner",
          lastUpdated: "2024-08-15",
          tags: ["company", "overview", "mission"]
        },
        {
          question: "Where is Zion Tech Group located?",
          answer: "Our headquarters is located at 364 E Main St STE 1008, Middletown DE 19709. We also have remote teams and serve clients globally. Our distributed workforce allows us to provide 24/7 support and work across different time zones to better serve our international clients.",
          difficulty: "beginner",
          lastUpdated: "2024-08-15",
          tags: ["location", "contact", "global"]
        },
        {
          question: "What industries do you serve?",
          answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, technology, government, education, and non-profit sectors. Our solutions are designed to be industry-agnostic and customizable. We have deep expertise in compliance requirements for regulated industries like healthcare (HIPAA) and finance (SOX, PCI-DSS).",
          difficulty: "beginner",
          lastUpdated: "2024-08-15",
          tags: ["industries", "healthcare", "finance", "manufacturing"]
        },
        {
          question: "How long has Zion Tech Group been in business?",
          answer: "Zion Tech Group has been in business for over 8 years, serving hundreds of clients across various industries. We've built a reputation for innovation, reliability, and exceptional customer service. Our team has grown from a small startup to a recognized leader in AI and technology solutions.",
          difficulty: "beginner",
          lastUpdated: "2024-08-15",
          tags: ["history", "experience", "reputation"]
        }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      description: "Artificial Intelligence and ML services",
      questions: [
        {
          question: "What AI services do you offer?",
          answer: "We offer comprehensive AI services including machine learning models, natural language processing, computer vision, predictive analytics, AI workflow automation, and custom AI solution development tailored to your business needs. Our AI solutions range from simple chatbots to complex enterprise AI systems that can process millions of data points in real-time.",
          difficulty: "intermediate",
          lastUpdated: "2024-08-20",
          tags: ["AI", "machine learning", "NLP", "computer vision"]
        },
        {
          question: "How do you ensure AI model accuracy?",
          answer: "We implement rigorous testing protocols including cross-validation, A/B testing, and continuous monitoring. Our models undergo extensive training with diverse datasets and are regularly updated based on real-world performance. We also provide explainable AI solutions to ensure transparency and compliance with regulatory requirements.",
          difficulty: "advanced",
          lastUpdated: "2024-08-20",
          tags: ["accuracy", "testing", "monitoring", "compliance"]
        },
        {
          question: "Can you integrate AI with existing systems?",
          answer: "Yes, we specialize in seamless AI integration with existing enterprise systems. We use APIs, microservices architecture, and modern integration patterns to ensure minimal disruption to your current operations. Our team has experience integrating with major platforms like SAP, Salesforce, Microsoft Dynamics, and custom legacy systems.",
          difficulty: "intermediate",
          lastUpdated: "2024-08-20",
          tags: ["integration", "APIs", "legacy systems", "enterprise"]
        },
        {
          question: "What data privacy measures do you implement?",
          answer: "We implement enterprise-grade data privacy measures including data encryption, access controls, audit logging, and compliance with GDPR, CCPA, and other privacy regulations. We also offer on-premise AI solutions for clients with strict data sovereignty requirements.",
          difficulty: "advanced",
          lastUpdated: "2024-08-20",
          tags: ["privacy", "GDPR", "encryption", "compliance"]
        }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      description: "Cloud computing and infrastructure services",
      questions: [
        {
          question: "Do you provide cloud migration services?",
          answer: "Yes, we offer end-to-end cloud migration services including assessment, planning, migration execution, and post-migration optimization. We work with AWS, Azure, and Google Cloud platforms. Our migration approach minimizes downtime and ensures data integrity throughout the process.",
          difficulty: "intermediate",
          lastUpdated: "2024-08-18",
          tags: ["cloud migration", "AWS", "Azure", "GCP"]
        },
        {
          question: "What cloud security measures do you implement?",
          answer: "We implement comprehensive cloud security including identity and access management, network security, data encryption, threat detection, and compliance monitoring. We follow security best practices from NIST, ISO 27001, and cloud provider security frameworks.",
          difficulty: "advanced",
          lastUpdated: "2024-08-18",
          tags: ["cloud security", "IAM", "encryption", "compliance"]
        },
        {
          question: "Can you help with hybrid cloud setups?",
          answer: "Absolutely! We specialize in hybrid cloud architectures that combine on-premise infrastructure with public and private cloud services. This approach provides flexibility, cost optimization, and the ability to maintain sensitive data on-premise while leveraging cloud scalability.",
          difficulty: "intermediate",
          lastUpdated: "2024-08-18",
          tags: ["hybrid cloud", "on-premise", "scalability"]
        },
        {
          question: "What is your disaster recovery approach?",
          answer: "We implement multi-region disaster recovery with automated failover, regular backup testing, and recovery time objectives (RTO) of less than 4 hours. Our disaster recovery plans are customized to your business requirements and compliance needs.",
          difficulty: "advanced",
          lastUpdated: "2024-08-18",
          tags: ["disaster recovery", "backup", "failover", "RTO"]
        }
      ]
    },
    {
      category: "Cybersecurity",
      icon: Shield,
      description: "Security and compliance solutions",
      questions: [
        {
          question: "What cybersecurity solutions do you offer?",
          answer: "Our cybersecurity portfolio includes threat detection, vulnerability assessment, compliance automation, zero-trust architecture, security monitoring, and incident response services. We provide 24/7 security operations center (SOC) services and real-time threat intelligence.",
          difficulty: "intermediate",
          lastUpdated: "2024-08-22",
          tags: ["cybersecurity", "threat detection", "compliance", "SOC"]
        },
        {
          question: "How do you handle security incidents?",
          answer: "We follow a comprehensive incident response framework including detection, analysis, containment, eradication, recovery, and lessons learned. Our team is available 24/7 for emergency response and provides detailed incident reports with actionable recommendations.",
          difficulty: "advanced",
          lastUpdated: "2024-08-22",
          tags: ["incident response", "emergency", "recovery", "analysis"]
        },
        {
          question: "What compliance frameworks do you support?",
          answer: "We support major compliance frameworks including SOC 2, ISO 27001, HIPAA, PCI-DSS, SOX, GDPR, and industry-specific regulations. Our compliance automation tools help maintain continuous compliance and reduce audit preparation time.",
          difficulty: "intermediate",
          lastUpdated: "2024-08-22",
          tags: ["compliance", "SOC 2", "ISO 27001", "HIPAA"]
        },
        {
          question: "Do you provide penetration testing?",
          answer: "Yes, we offer comprehensive penetration testing services including external, internal, web application, and social engineering assessments. Our testing follows industry standards and provides detailed reports with remediation guidance.",
          difficulty: "advanced",
          lastUpdated: "2024-08-22",
          tags: ["penetration testing", "vulnerability assessment", "social engineering"]
        }
      ]
    },
    {
      category: "Pricing & Billing",
      icon: CheckCircle,
      description: "Pricing models and payment terms",
      questions: [
        {
          question: "How do you price your services?",
          answer: "We offer flexible pricing models including project-based pricing, monthly subscriptions, and custom enterprise solutions. Pricing depends on the scope, complexity, and duration of the project. We provide transparent pricing with no hidden fees.",
          difficulty: "beginner",
          lastUpdated: "2024-08-25",
          tags: ["pricing", "subscription", "enterprise", "transparency"]
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we provide free initial consultations to understand your needs and discuss potential solutions. This helps us provide accurate estimates and recommendations. Consultations typically last 1-2 hours and can be conducted remotely or on-site.",
          difficulty: "beginner",
          lastUpdated: "2024-08-25",
          tags: ["consultation", "free", "assessment", "planning"]
        },
        {
          question: "What payment terms do you offer?",
          answer: "We offer flexible payment terms including upfront payments, milestone-based payments, and monthly billing for ongoing services. Enterprise clients may qualify for extended payment terms. We accept major credit cards, bank transfers, and can work with your procurement processes.",
          difficulty: "beginner",
          lastUpdated: "2024-08-25",
          tags: ["payment", "milestones", "enterprise", "procurement"]
        },
        {
          question: "Do you offer volume discounts?",
          answer: "Yes, we offer volume discounts for enterprise clients and long-term contracts. Discounts are based on contract value, duration, and scope. We also provide special pricing for non-profit organizations and educational institutions.",
          difficulty: "intermediate",
          lastUpdated: "2024-08-25",
          tags: ["discounts", "enterprise", "non-profit", "education"]
        }
      ]
    },
    {
      category: "Support & Maintenance",
      icon: Clock,
      description: "Ongoing support and maintenance services",
      questions: [
        {
          question: "What support do you provide after project completion?",
          answer: "We provide comprehensive post-project support including maintenance, updates, troubleshooting, and ongoing optimization. Support levels can be customized based on your needs. We offer 24/7 emergency support for critical systems.",
          difficulty: "intermediate",
          lastUpdated: "2024-08-28",
          tags: ["support", "maintenance", "24/7", "emergency"]
        },
        {
          question: "What are your response time SLAs?",
          answer: "Our standard SLAs include 4-hour response for critical issues, 8-hour response for high-priority issues, and 24-hour response for normal issues. We can customize SLAs based on your business requirements and offer premium support packages.",
          difficulty: "intermediate",
          lastUpdated: "2024-08-28",
          tags: ["SLA", "response time", "critical", "priority"]
        },
        {
          question: "Do you provide training for your solutions?",
          answer: "Yes, we provide comprehensive training for all our solutions including user training, administrator training, and technical training. Training can be delivered on-site, remotely, or through our learning management system.",
          difficulty: "beginner",
          lastUpdated: "2024-08-28",
          tags: ["training", "user training", "admin training", "LMS"]
        },
        {
          question: "How do you handle system updates?",
          answer: "We follow a structured update process including testing, staging, and production deployment. Updates are scheduled during maintenance windows to minimize disruption. We provide advance notice for major updates and can perform emergency updates when necessary.",
          difficulty: "intermediate",
          lastUpdated: "2024-08-28",
          tags: ["updates", "maintenance windows", "testing", "deployment"]
        }
      ]
    }
  ];

  const contactMethods = [
    {
      title: "Email Support",
      description: "Send us a detailed message",
      contact: "support@ziontechgroup.com",
      response: "Response within 4 hours",
      icon: Mail
    },
    {
      title: "Phone Support",
      description: "Speak with our experts",
      contact: "+1 (302) 464-0950",
      response: "Available 24/7",
      icon: Phone
    },
    {
      title: "Live Chat",
      description: "Get instant help online",
      contact: "Available on website",
      response: "Response within minutes",
      icon: MessageCircle
    }
  ];

  // Filter FAQ based on search and filters
  const filteredFAQ = faqData.filter(category => {
    if (selectedCategory !== 'all' && category.category !== selectedCategory) return false;
    
    const filteredQuestions = category.questions.filter(item => {
      if (selectedDifficulty !== 'all' && item.difficulty !== selectedDifficulty) return false;
      
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        return item.question.toLowerCase().includes(searchLower) ||
               item.answer.toLowerCase().includes(searchLower) ||
               item.tags.some(tag => tag.toLowerCase().includes(searchLower));
      }
      
      return true;
    });
    
    return filteredQuestions.length > 0;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Beginner';
      case 'intermediate': return 'Intermediate';
      case 'advanced': return 'Advanced';
      default: return 'Unknown';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about Zion Tech Group's AI services, cloud computing, cybersecurity, and technology solutions." />
        <meta name="keywords" content="FAQ, help, support, Zion Tech Group, AI services, cloud computing, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
                <HelpCircle className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Help & Support</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Find answers to common questions about our services, pricing, and technology solutions. Can't find what you're looking for? Contact our support team.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
                  />
                </div>
              </div>

              {/* Advanced Search Toggle */}
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {showAdvancedSearch ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  Advanced Search
                </button>
              </div>

              {/* Advanced Search Filters */}
              {showAdvancedSearch && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 mb-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Category Filter */}
                    <div>
                      <label className="block text-sm font-medium text-cyan-400 mb-2">Category</label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                        <option value="all" className="bg-slate-800 text-white">All Categories</option>
                        {faqData.map(category => (
                          <option key={category.category} value={category.category} className="bg-slate-800 text-white">
                            {category.category}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Difficulty Filter */}
                    <div>
                      <label className="block text-sm font-medium text-cyan-400 mb-2">Difficulty Level</label>
                      <select
                        value={selectedDifficulty}
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                        <option value="all" className="bg-slate-800 text-white">All Levels</option>
                        <option value="beginner" className="bg-slate-800 text-white">Beginner</option>
                        <option value="intermediate" className="bg-slate-800 text-white">Intermediate</option>
                        <option value="advanced" className="bg-slate-800 text-white">Advanced</option>
                      </select>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  {(selectedCategory !== 'all' || selectedDifficulty !== 'all' || searchQuery) && (
                    <div className="mt-4 text-center">
                      <button
                        onClick={() => {
                          setSelectedCategory('all');
                          setSelectedDifficulty('all');
                          setSearchQuery('');
                        }}
                        className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                      >
                        Clear All Filters
                      </button>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Results Count */}
              <div className="text-center">
                <p className="text-gray-300">
                  Showing <span className="text-cyan-400 font-semibold">
                    {filteredFAQ.reduce((total, category) => total + category.questions.length, 0)}
                  </span> answers
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {filteredFAQ.map((category, categoryIndex) => (
                <div key={category.category} className="mb-16">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/30">
                        <category.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{category.category}</h2>
                        <p className="text-gray-300">{category.description}</p>
                      </div>
                    </div>
                    
                    {/* Expand/Collapse All */}
                    <button
                      onClick={() => toggleAllInCategory(categoryIndex, category.questions)}
                      className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      {category.questions.every((_, i) => openItems.includes(categoryIndex * 100 + i)) 
                        ? 'Collapse All' 
                        : 'Expand All'
                      }
                    </button>
                  </div>
                  
                  {/* Questions */}
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => {
                      const index = categoryIndex * 100 + questionIndex;
                      const isOpen = openItems.includes(index);
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 * questionIndex }}
                          viewport={{ once: true }}
                          className="group bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                        >
                          <button
                            onClick={() => toggleItem(index)}
                            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                          >
                            <div className="flex-1 text-left">
                              <div className="flex items-start gap-3 mb-2">
                                <span className="font-semibold text-white pr-4 leading-relaxed">
                                  {item.question}
                                </span>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(item.difficulty)}`}>
                                    {getDifficultyText(item.difficulty)}
                                  </span>
                                  <span className="text-xs text-gray-400">
                                    {formatDate(item.lastUpdated)}
                                  </span>
                                </div>
                              </div>
                              
                              {/* Tags */}
                              <div className="flex flex-wrap gap-2">
                                {item.tags.slice(0, 3).map((tag, tagIndex) => (
                                  <span key={tagIndex} className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                                    {tag}
                                  </span>
                                ))}
                                {item.tags.length > 3 && (
                                  <span className="inline-block px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                                    +{item.tags.length - 3} more
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <div className="ml-4 flex-shrink-0">
                              {isOpen ? (
                                <Minus className="w-6 h-6 text-cyan-400" />
                              ) : (
                                <Plus className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                              )}
                            </div>
                          </button>
                          
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-6 border-t border-cyan-400/20"
                            >
                              <div className="pt-4">
                                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                                  {item.answer}
                                </p>
                                
                                {/* Related Resources */}
                                <div className="flex items-center gap-4 text-sm text-cyan-400">
                                  <span className="text-gray-400">Related:</span>
                                  <button className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                                    <BookOpen className="w-4 h-4" />
                                    Documentation
                                  </button>
                                  <button className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                                    <MessageSquare className="w-4 h-4" />
                                    Contact Support
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* No Results */}
              {filteredFAQ.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No answers found</h3>
                  <p className="text-gray-300 mb-6">Try adjusting your search criteria or contact our support team for assistance.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedDifficulty('all');
                      setSearchQuery('');
                    }}
                    className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Still Need Help?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="text-center p-8 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-400/30">
                      <method.icon className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                    <p className="text-gray-300 mb-4">{method.description}</p>
                    <p className="font-semibold text-cyan-400 mb-2">{method.contact}</p>
                    <p className="text-sm text-gray-400">{method.response}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-400/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
                <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Ready to Get Started?</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to discuss your project requirements and get a personalized solution. We're here to help you succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center gap-2">
                  Contact Sales
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </button>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">Need immediate assistance?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    support@ziontechgroup.com
                  </a>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
