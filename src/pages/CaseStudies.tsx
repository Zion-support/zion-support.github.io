import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Brain,
  Shield,
  Cpu,
  Database,
  Network,
  Target,
  BarChart3,
  Zap,
  Heart,
  Building,
  Globe,
  Award,
  Briefcase,
  Rocket,
  Lightbulb,
  CheckSquare,
  ShoppingCart,
  GraduationCap
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Transformation",
      company: "MetroHealth Medical Center",
      industry: "Healthcare",
      challenge: "MetroHealth was struggling with inefficient patient data analysis, leading to delayed diagnoses and increased costs.",
      solution: "Implemented our AI healthcare analytics platform with predictive modeling and real-time monitoring capabilities.",
      results: [
        "85% improvement in diagnostic accuracy",
        "40% reduction in treatment costs",
        "70% faster patient data analysis",
        "60% improvement in patient outcomes"
      ],
      technologies: ["AI Analytics", "Machine Learning", "Predictive Modeling", "Real-time Monitoring"],
      icon: Heart,
      color: "from-red-500 to-pink-500",
      featured: true
    },
    {
      id: 2,
      title: "Enterprise AI Automation Platform",
      company: "GlobalTech Solutions",
      industry: "Technology",
      challenge: "GlobalTech needed to automate complex business processes and reduce operational costs across multiple departments.",
      solution: "Deployed our autonomous business operations platform with AI workflow automation and intelligent decision-making.",
      results: [
        "300% increase in operational efficiency",
        "50% reduction in operational costs",
        "80% automation of repetitive tasks",
        "Real-time business intelligence"
      ],
      technologies: ["AI Automation", "Workflow Optimization", "Business Intelligence", "Process Mining"],
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      id: 3,
      title: "Quantum Neural Network Implementation",
      company: "Quantum Research Labs",
      industry: "Research & Development",
      challenge: "Quantum Research Labs required advanced neural network capabilities for complex scientific computations.",
      solution: "Implemented our quantum neural network platform with hybrid quantum-classical algorithms.",
      results: [
        "1000x faster computation speed",
        "90% improvement in accuracy",
        "Real-time quantum processing",
        "Advanced research capabilities"
      ],
      technologies: ["Quantum Computing", "Neural Networks", "Hybrid Algorithms", "Scientific Computing"],
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      featured: false
    },
    {
      id: 4,
      title: "Cybersecurity & Compliance Automation",
      company: "SecureBank Financial",
      industry: "Financial Services",
      challenge: "SecureBank needed to automate SOC2 compliance processes and enhance threat detection capabilities.",
      solution: "Deployed our SOC2 compliance automation platform with advanced cybersecurity monitoring.",
      results: [
        "95% automation of compliance tasks",
        "99.9% threat detection accuracy",
        "60% reduction in compliance costs",
        "Real-time security monitoring"
      ],
      technologies: ["SOC2 Compliance", "Threat Detection", "Automation", "Security Monitoring"],
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      featured: false
    },
    {
      id: 5,
      title: "5G Enterprise Network Solutions",
      company: "ConnectCorp Telecommunications",
      industry: "Telecommunications",
      challenge: "ConnectCorp needed to deploy high-speed 5G networks for enterprise clients with minimal downtime.",
      solution: "Implemented our 5G enterprise solutions with intelligent network optimization and management.",
      results: [
        "10x faster network speeds",
        "99.9% network uptime",
        "50% reduction in deployment time",
        "Advanced network analytics"
      ],
      technologies: ["5G Networks", "Network Optimization", "Enterprise Solutions", "Network Management"],
      icon: Network,
      color: "from-indigo-500 to-purple-500",
      featured: false
    },
    {
      id: 6,
      title: "AI Marketing Automation Success",
      company: "GrowthMarketing Inc",
      industry: "Marketing",
      challenge: "GrowthMarketing struggled with manual campaign management and poor ROI tracking across multiple channels.",
      solution: "Deployed our AI marketing automation platform with intelligent campaign optimization.",
      results: [
        "300% increase in conversion rates",
        "60% reduction in marketing costs",
        "200% improvement in customer engagement",
        "Real-time campaign optimization"
      ],
      technologies: ["AI Marketing", "Campaign Automation", "ROI Tracking", "Multi-channel Management"],
      icon: Target,
      color: "from-orange-500 to-yellow-500",
      featured: false
    }
  ];

  const industries = [
    { name: "Healthcare", icon: Heart, count: 12 },
    { name: "Financial Services", icon: DollarSign, count: 8 },
    { name: "Technology", icon: Cpu, count: 15 },
    { name: "Manufacturing", icon: Building, count: 6 },
    { name: "Retail", icon: ShoppingCart, count: 4 },
    { name: "Education", icon: GraduationCap, count: 3 }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group's AI solutions transformed our healthcare operations completely. The results exceeded our expectations.",
      author: "Dr. Sarah Johnson",
      position: "CTO, MetroHealth Medical Center",
      rating: 5
    },
    {
      quote: "The autonomous business platform reduced our operational costs by 50% while improving efficiency by 300%.",
      author: "Michael Chen",
      position: "CEO, GlobalTech Solutions",
      rating: 5
    },
    {
      quote: "Implementing their quantum neural network platform accelerated our research capabilities by 1000x.",
      author: "Dr. Robert Kim",
      position: "Research Director, Quantum Research Labs",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Success Stories & Case Studies
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Real Results from
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                {" "}Real Clients
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how leading organizations across industries have transformed their operations 
              with Zion Tech Group's AI-powered solutions. See the measurable impact and real ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our most impactful client transformations and the technologies that made them possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.filter(cs => cs.featured).map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${caseStudy.color} flex items-center justify-center`}>
                    <caseStudy.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">{caseStudy.industry}</div>
                    <div className="text-lg font-semibold text-white">{caseStudy.company}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Challenge</h4>
                  <p className="text-gray-300">{caseStudy.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Solution</h4>
                  <p className="text-gray-300">{caseStudy.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Results</h4>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link
                  to={`/case-studies/${caseStudy.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              All Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our complete collection of client success stories across all industries and technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${caseStudy.color} flex items-center justify-center`}>
                    <caseStudy.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">{caseStudy.industry}</div>
                    <div className="text-sm font-semibold text-white">{caseStudy.company}</div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">{caseStudy.title}</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-1">Challenge</h4>
                  <p className="text-gray-300 text-sm line-clamp-2">{caseStudy.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-1">Results</h4>
                  <ul className="space-y-1">
                    {caseStudy.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={`/case-studies/${caseStudy.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
                >
                  Read More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Success Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI solutions have delivered measurable results across diverse industry sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400">{industry.count} success stories</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear directly from the leaders who have experienced our AI transformation firsthand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the growing list of organizations that have transformed their operations with Zion Tech Group's AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}