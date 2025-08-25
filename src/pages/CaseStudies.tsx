import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, DollarSign, Clock, Target, Award, CheckCircle, Lightbulb, Zap, Shield, Globe, Database, Cloud, Brain, Atom, Rocket, Wifi, Building2 } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Transformation",
      company: "Fortune 500 Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Complex data silos and manual reporting processes causing 40% delays in decision-making",
      solution: "Implemented AI-driven business intelligence platform with autonomous data processing",
      results: [
        "85% reduction in reporting time",
        "40% improvement in decision accuracy",
        "$2.3M annual cost savings",
        "Real-time insights across 12 departments"
      ],
      technologies: ["AI Business Intelligence", "Data Analytics", "Machine Learning"],
      duration: "6 months",
      teamSize: "8 specialists",
      icon: Brain,
      category: "AI & Analytics"
    },
    {
      id: 2,
      title: "Quantum Neural Network Implementation",
      company: "Global Financial Services Ltd",
      industry: "Financial Services",
      challenge: "Traditional algorithms unable to handle complex market prediction scenarios",
      solution: "Deployed quantum neural network platform for advanced financial modeling",
      results: [
        "300% improvement in prediction accuracy",
        "60% faster risk assessment",
        "$15M additional revenue generated",
        "Competitive advantage in algorithmic trading"
      ],
      technologies: ["Quantum Computing", "Neural Networks", "Financial Modeling"],
      duration: "8 months",
      teamSize: "12 specialists",
      icon: Atom,
      category: "Quantum Technology"
    },
    {
      id: 3,
      title: "Autonomous Business Operations Platform",
      company: "Healthcare Network Alliance",
      industry: "Healthcare",
      challenge: "Manual patient scheduling and resource allocation causing 30% inefficiency",
      solution: "AI autonomous business operations platform with intelligent resource management",
      results: [
        "45% improvement in resource utilization",
        "25% reduction in patient wait times",
        "$1.8M operational cost savings",
        "24/7 autonomous operations"
      ],
      technologies: ["AI Automation", "Resource Management", "Healthcare AI"],
      duration: "7 months",
      teamSize: "10 specialists",
      icon: Rocket,
      category: "AI Automation"
    },
    {
      id: 4,
      title: "Cybersecurity SOC2 Compliance Automation",
      company: "Tech Startup Accelerator",
      industry: "Technology",
      challenge: "Manual compliance processes taking 6+ months and high error rates",
      solution: "Automated SOC2 compliance platform with continuous monitoring",
      results: [
        "90% reduction in compliance time",
        "99.9% accuracy in compliance reporting",
        "Real-time security monitoring",
        "Zero compliance violations"
      ],
      technologies: ["Cybersecurity", "Compliance Automation", "SOC2"],
      duration: "4 months",
      teamSize: "6 specialists",
      icon: Shield,
      category: "Security & Compliance"
    },
    {
      id: 5,
      title: "5G Enterprise Infrastructure Deployment",
      company: "Smart City Initiative",
      industry: "Government & Infrastructure",
      challenge: "Legacy infrastructure unable to support smart city IoT requirements",
      solution: "5G enterprise infrastructure with edge computing capabilities",
      results: [
        "10x faster data transmission",
        "Support for 100,000+ IoT devices",
        "Real-time city monitoring",
        "Future-ready infrastructure"
      ],
      technologies: ["5G Technology", "Edge Computing", "IoT Infrastructure"],
      duration: "12 months",
      teamSize: "15 specialists",
      icon: Wifi,
      category: "Infrastructure"
    },
    {
      id: 6,
      title: "AI Content Generation Revolution",
      company: "Global Media Corporation",
      industry: "Media & Entertainment",
      challenge: "Content creation bottlenecks limiting production capacity by 50%",
      solution: "AI content generation platform with autonomous creative capabilities",
      results: [
        "500% increase in content production",
        "70% reduction in creation time",
        "Consistent brand voice across all content",
        "Multi-language content generation"
      ],
      technologies: ["AI Content Generation", "Natural Language Processing", "Creative AI"],
      duration: "5 months",
      teamSize: "9 specialists",
      icon: Lightbulb,
      category: "AI Content"
    }
  ];

  const categories = [
    { name: "All", count: caseStudies.length, icon: Globe },
    { name: "AI & Analytics", count: caseStudies.filter(cs => cs.category === "AI & Analytics").length, icon: Brain },
    { name: "Quantum Technology", count: caseStudies.filter(cs => cs.category === "Quantum Technology").length, icon: Atom },
    { name: "AI Automation", count: caseStudies.filter(cs => cs.category === "AI Automation").length, icon: Rocket },
    { name: "Security & Compliance", count: caseStudies.filter(cs => cs.category === "Security & Compliance").length, icon: Shield },
    { name: "Infrastructure", count: caseStudies.filter(cs => cs.category === "Infrastructure").length, icon: Wifi },
    { name: "AI Content", count: caseStudies.filter(cs => cs.category === "AI Content").length, icon: Lightbulb }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories That
              <span className="text-gradient block">Transform Businesses</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Discover how leading organizations leverage Zion Tech Group's innovative solutions 
              to achieve breakthrough results and competitive advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <CheckCircle className="h-5 w-5" />
                <span className="text-white">Proven Results</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Award className="h-5 w-5" />
                <span className="text-white">Industry Recognition</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <TrendingUp className="h-5 w-5" />
                <span className="text-white">Measurable Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-zion-slate-dark hover:bg-zion-cyan/20 border border-zion-cyan/30 text-white hover:text-zion-cyan transition-all duration-300 group"
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
              <span className="bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 hover:shadow-2xl hover:shadow-zion-cyan/10 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-zion-cyan/20 rounded-lg group-hover:bg-zion-cyan/30 transition-colors">
                    <study.icon className="h-6 w-6 text-zion-cyan" />
                  </div>
                  <div>
                    <span className="text-zion-cyan text-sm font-medium">{study.category}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                      {study.title}
                    </h3>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Company Info */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-4 w-4" />
                    <span>{study.company}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4" />
                    <span>{study.industry}</span>
                  </div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                  <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                  <p className="text-zion-slate-light text-sm">{study.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="text-zion-cyan font-semibold mb-3">Results</h4>
                <div className="grid grid-cols-1 gap-2">
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Metrics */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-zion-cyan mx-auto mb-1" />
                    <div className="text-zion-slate-light">Duration</div>
                    <div className="text-white font-semibold">{study.duration}</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-zion-cyan mx-auto mb-1" />
                    <div className="text-zion-slate-light">Team Size</div>
                    <div className="text-white font-semibold">{study.teamSize}</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-5 w-5 text-zion-cyan mx-auto mb-1" />
                    <div className="text-zion-slate-light">Success Rate</div>
                    <div className="text-white font-semibold">100%</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <Link
                  to={`/case-studies/${study.id}`}
                  className="text-zion-cyan hover:text-white transition-colors font-medium group-hover:underline"
                >
                  Read Full Case Study
                </Link>
                <ArrowRight className="h-4 w-4 text-zion-cyan group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-zion-slate-light mb-8 text-lg">
              Let's discuss how Zion Tech Group can transform your business with cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;