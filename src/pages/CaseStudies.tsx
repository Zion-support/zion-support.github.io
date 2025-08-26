import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  Building, 
  Globe, 
  Award,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Target
} from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "AI-Powered Customer Service Transformation",
      client: "Global Retail Corporation",
      industry: "Retail",
      challenge: "High customer service costs and long response times affecting customer satisfaction.",
      solution: "Implemented AI-powered chatbots and intelligent routing systems to automate customer inquiries and provide instant responses.",
      results: [
        "40% reduction in customer service costs",
        "60% improvement in response times",
        "85% customer satisfaction rate",
        "24/7 customer support availability"
      ],
      technologies: ["Natural Language Processing", "Machine Learning", "Cloud Computing", "API Integration"],
      duration: "6 months",
      team: "8 engineers"
    },
    {
      title: "Cybersecurity Infrastructure Overhaul",
      client: "Financial Services Provider",
      industry: "Finance",
      challenge: "Outdated security systems vulnerable to modern cyber threats and non-compliant with industry regulations.",
      solution: "Designed and implemented comprehensive cybersecurity framework with advanced threat detection, zero-trust architecture, and compliance automation.",
      results: [
        "99.9% threat detection accuracy",
        "Zero security breaches in 18 months",
        "Full compliance with SOC2, PCI-DSS, and GDPR",
        "50% reduction in security incident response time"
      ],
      technologies: ["SIEM", "Zero Trust Architecture", "Threat Intelligence", "Compliance Automation"],
      duration: "8 months",
      team: "12 security specialists"
    },
    {
      title: "Cloud Migration & DevOps Transformation",
      client: "Healthcare Technology Company",
      industry: "Healthcare",
      challenge: "Legacy on-premise systems causing scalability issues and slow deployment cycles.",
      solution: "Migrated to cloud infrastructure with automated CI/CD pipelines, containerization, and microservices architecture.",
      results: [
        "90% faster deployment cycles",
        "99.9% uptime achieved",
        "60% reduction in infrastructure costs",
        "Scalable architecture supporting 10x growth"
      ],
      technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins"],
      duration: "10 months",
      team: "15 engineers"
    },
    {
      title: "Quantum Computing Research Platform",
      client: "Research University",
      industry: "Education",
      challenge: "Need for advanced quantum computing research capabilities and algorithm development platform.",
      solution: "Developed custom quantum computing platform with quantum algorithms, simulation tools, and research collaboration features.",
      results: [
        "10x faster quantum algorithm development",
        "Published 15 research papers",
        "Secured $2M in research funding",
        "International research collaboration established"
      ],
      technologies: ["Quantum Computing", "Python", "Qiskit", "Cloud Infrastructure"],
      duration: "12 months",
      team: "6 researchers + 4 engineers"
    },
    {
      title: "IoT Manufacturing Optimization",
      client: "Manufacturing Company",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and lack of real-time monitoring leading to quality issues and downtime.",
      solution: "Implemented IoT sensors, real-time monitoring systems, and predictive maintenance algorithms to optimize manufacturing operations.",
      results: [
        "25% increase in production efficiency",
        "40% reduction in unplanned downtime",
        "30% improvement in product quality",
        "$2M annual cost savings"
      ],
      technologies: ["IoT Sensors", "Edge Computing", "Machine Learning", "Predictive Analytics"],
      duration: "7 months",
      team: "10 engineers"
    },
    {
      title: "Blockchain Supply Chain Transparency",
      client: "Food & Beverage Company",
      industry: "Food & Beverage",
      challenge: "Lack of transparency in supply chain causing food safety concerns and compliance issues.",
      solution: "Built blockchain-based supply chain platform with real-time tracking, smart contracts, and automated compliance checks.",
      results: [
        "100% supply chain transparency",
        "Real-time food safety monitoring",
        "Automated compliance reporting",
        "Enhanced consumer trust and brand reputation"
      ],
      technologies: ["Blockchain", "Smart Contracts", "IoT", "Cloud Computing"],
      duration: "9 months",
      team: "8 engineers"
    }
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "Retail",
    "Manufacturing",
    "Education",
    "Technology",
    "Energy",
    "Transportation"
  ];

  const technologies = [
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
    "Cybersecurity",
    "IoT",
    "Blockchain",
    "Quantum Computing",
    "DevOps"
  ];

  const metrics = [
    {
      label: "Projects Completed",
      value: "150+",
      icon: CheckCircle
    },
    {
      label: "Client Satisfaction",
      value: "98%",
      icon: Award
    },
    {
      label: "Cost Savings Delivered",
      value: "$50M+",
      icon: DollarSign
    },
    {
      label: "Average ROI",
      value: "300%",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Discover how we've helped organizations transform their businesses with 
            innovative technology solutions and measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-slate-600">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real projects, real results. See how our solutions have transformed 
              businesses across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-semibold">
                    {study.industry}
                  </span>
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {study.duration}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {study.client}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Challenge</h4>
                  <p className="text-slate-600 text-sm">
                    {study.challenge}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Solution</h4>
                  <p className="text-slate-600 text-sm">
                    {study.solution}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-500">
                    Team: {study.team}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Industries We Serve
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center text-slate-600">
                    <Building className="w-4 h-4 text-blue-500 mr-2" />
                    {industry}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Technologies We Use
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center text-slate-600">
                    <Target className="w-4 h-4 text-cyan-500 mr-2" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our expertise can help you achieve similar results 
            and transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;