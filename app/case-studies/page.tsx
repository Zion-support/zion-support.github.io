import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Calendar, Users, Award, TrendingUp, Shield, Zap, Globe, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CaseStudiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Case Studies', count: 8 },
    { id: 'ai', name: 'AI Solutions', count: 3 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 2 },
    { id: 'cloud', name: 'Cloud Infrastructure', count: 2 },
    { id: 'digital', name: 'Digital Transformation', count: 1 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Customer Service Transformation",
      client: "TechCorp Solutions",
      industry: "Technology",
      category: "ai",
      duration: "6 months",
      teamSize: "8 members",
      challenge: "TechCorp was struggling with high customer service costs and long response times. Their traditional support system couldn't handle the increasing volume of inquiries, leading to customer dissatisfaction and high operational costs.",
      solution: "We implemented an AI-powered customer service platform with intelligent chatbots, automated ticket routing, and predictive analytics. The solution included natural language processing capabilities and seamless integration with existing CRM systems.",
      results: [
        "60% reduction in response time",
        "45% decrease in operational costs",
        "85% customer satisfaction rate",
        "24/7 automated support coverage"
      ],
      technologies: ["Machine Learning", "NLP", "Chatbots", "CRM Integration"],
      image: "/images/case-studies/ai-customer-service.jpg",
      featured: true,
      publishedAt: "2024-01-15"
    },
    {
      id: 2,
      title: "Enterprise Cybersecurity Overhaul",
      client: "Global Finance Inc.",
      industry: "Financial Services",
      category: "cybersecurity",
      duration: "4 months",
      teamSize: "12 members",
      challenge: "Global Finance Inc. needed to strengthen their cybersecurity posture to comply with new regulations and protect against sophisticated cyber threats. Their existing security infrastructure was outdated and fragmented.",
      solution: "We designed and implemented a comprehensive cybersecurity framework including zero-trust architecture, advanced threat detection systems, security awareness training, and incident response procedures.",
      results: [
        "99.9% security uptime achieved",
        "Zero security breaches in 12 months",
        "100% regulatory compliance",
        "50% reduction in security incidents"
      ],
      technologies: ["Zero Trust", "SIEM", "EDR", "Security Training"],
      image: "/images/case-studies/cybersecurity-overhaul.jpg",
      featured: true,
      publishedAt: "2024-01-12"
    },
    {
      id: 3,
      title: "Cloud Migration and Optimization",
      client: "RetailMax Corporation",
      industry: "Retail",
      category: "cloud",
      duration: "8 months",
      teamSize: "15 members",
      challenge: "RetailMax needed to migrate their legacy on-premises infrastructure to the cloud while maintaining business continuity and improving scalability for their e-commerce platform.",
      solution: "We executed a comprehensive cloud migration strategy using AWS, implementing microservices architecture, automated scaling, and robust monitoring systems. The migration included data migration, application refactoring, and performance optimization.",
      results: [
        "40% reduction in infrastructure costs",
        "300% improvement in scalability",
        "99.9% uptime during peak seasons",
        "50% faster application deployment"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Microservices"],
      image: "/images/case-studies/cloud-migration.jpg",
      featured: false,
      publishedAt: "2024-01-10"
    },
    {
      id: 4,
      title: "AI-Driven Supply Chain Optimization",
      client: "ManufacturingPro Ltd.",
      industry: "Manufacturing",
      category: "ai",
      duration: "5 months",
      teamSize: "10 members",
      challenge: "ManufacturingPro was experiencing supply chain inefficiencies with high inventory costs, stockouts, and poor demand forecasting accuracy. Their manual processes couldn't keep up with market volatility.",
      solution: "We developed an AI-powered supply chain management system with predictive analytics, demand forecasting, automated inventory optimization, and real-time monitoring capabilities.",
      results: [
        "30% reduction in inventory costs",
        "25% improvement in demand forecasting accuracy",
        "40% reduction in stockouts",
        "20% increase in operational efficiency"
      ],
      technologies: ["Machine Learning", "Predictive Analytics", "IoT", "Real-time Monitoring"],
      image: "/images/case-studies/supply-chain-ai.jpg",
      featured: false,
      publishedAt: "2024-01-08"
    },
    {
      id: 5,
      title: "Digital Transformation for Healthcare",
      client: "MediCare Systems",
      industry: "Healthcare",
      category: "digital",
      duration: "10 months",
      teamSize: "20 members",
      challenge: "MediCare Systems needed to modernize their patient management system, improve data security, and enhance patient experience while maintaining HIPAA compliance.",
      solution: "We implemented a comprehensive digital transformation including electronic health records (EHR) system, patient portal, telemedicine platform, and advanced security measures with full HIPAA compliance.",
      results: [
        "90% improvement in patient satisfaction",
        "100% HIPAA compliance achieved",
        "60% reduction in administrative time",
        "80% increase in telemedicine adoption"
      ],
      technologies: ["EHR", "Patient Portal", "Telemedicine", "HIPAA Compliance"],
      image: "/images/case-studies/healthcare-digital.jpg",
      featured: true,
      publishedAt: "2024-01-05"
    },
    {
      id: 6,
      title: "Advanced Threat Detection System",
      client: "SecureBank International",
      industry: "Banking",
      category: "cybersecurity",
      duration: "3 months",
      teamSize: "6 members",
      challenge: "SecureBank needed to enhance their security monitoring capabilities to detect and respond to advanced persistent threats (APTs) and sophisticated cyber attacks in real-time.",
      solution: "We deployed an advanced threat detection system with machine learning algorithms, behavioral analytics, and automated incident response capabilities integrated with their existing security infrastructure.",
      results: [
        "95% improvement in threat detection accuracy",
        "70% reduction in false positives",
        "Real-time threat response capability",
        "90% faster incident resolution"
      ],
      technologies: ["Machine Learning", "Behavioral Analytics", "SIEM", "Automation"],
      image: "/images/case-studies/threat-detection.jpg",
      featured: false,
      publishedAt: "2024-01-03"
    },
    {
      id: 7,
      title: "Multi-Cloud Infrastructure Strategy",
      client: "GlobalTech Enterprises",
      industry: "Technology",
      category: "cloud",
      duration: "6 months",
      teamSize: "12 members",
      challenge: "GlobalTech needed to implement a multi-cloud strategy to avoid vendor lock-in, improve disaster recovery, and optimize costs across different cloud providers.",
      solution: "We designed and implemented a multi-cloud architecture using AWS, Azure, and Google Cloud Platform with automated workload distribution, cost optimization, and unified monitoring.",
      results: [
        "35% reduction in cloud costs",
        "99.99% disaster recovery capability",
        "Zero vendor lock-in risk",
        "Unified cloud management platform"
      ],
      technologies: ["Multi-Cloud", "AWS", "Azure", "GCP", "Cost Optimization"],
      image: "/images/case-studies/multi-cloud.jpg",
      featured: false,
      publishedAt: "2024-01-01"
    },
    {
      id: 8,
      title: "AI-Powered Predictive Maintenance",
      client: "IndustrialWorks Corp.",
      industry: "Manufacturing",
      category: "ai",
      duration: "4 months",
      teamSize: "8 members",
      challenge: "IndustrialWorks was experiencing frequent equipment failures and unplanned downtime, leading to significant production losses and maintenance costs.",
      solution: "We implemented an AI-powered predictive maintenance system using IoT sensors, machine learning algorithms, and real-time monitoring to predict equipment failures before they occur.",
      results: [
        "50% reduction in unplanned downtime",
        "30% decrease in maintenance costs",
        "85% accuracy in failure prediction",
        "25% increase in equipment lifespan"
      ],
      technologies: ["IoT", "Machine Learning", "Predictive Analytics", "Real-time Monitoring"],
      image: "/images/case-studies/predictive-maintenance.jpg",
      featured: false,
      publishedAt: "2023-12-28"
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => 
    selectedCategory === 'all' || study.category === selectedCategory
  );

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful client projects and case studies showcasing AI solutions, cybersecurity implementations, cloud migrations, and digital transformations." />
        <meta name="keywords" content="case studies, client success stories, AI solutions, cybersecurity projects, cloud migration, digital transformation, project results" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how we've helped businesses across industries transform their operations, 
            enhance security, and achieve remarkable results through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {selectedCategory === 'all' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Case Studies</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCaseStudies.map((study) => (
                <div key={study.id} className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BarChart3 className="w-16 h-16 text-white/50" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded">
                        {study.industry}
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded">
                        {study.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{study.challenge}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{study.teamSize}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        Published {new Date(study.publishedAt).toLocaleDateString()}
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {selectedCategory === 'all' ? 'All Case Studies' : `${categories.find(c => c.id === selectedCategory)?.name}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart3 className="w-12 h-12 text-white/50" />
                  </div>
                  {study.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-white/20 text-white text-xs font-medium rounded">
                      {study.industry}
                    </span>
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">{study.challenge}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <Users className="w-3 h-3" />
                      <span>{study.teamSize}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
              <p className="text-gray-400">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you achieve similar results with our proven expertise in AI, cybersecurity, 
            cloud solutions, and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Explore Our Services
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;