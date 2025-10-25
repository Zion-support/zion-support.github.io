<<<<<<< HEAD
import { Brain, BarChart, TrendingUp, ArrowRight, CheckCircle, Target } from 'lucide-react';
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const CaseStudiesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our successful AI implementation case studies. See how we&apos;ve helped companies achieve 300%+ ROI with our AI solutions.
=======
'use client';
import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  TrendingUp,
  BarChart,
  Shield,
  Brain,
  Cloud,
  Code,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  Eye,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All Industries', count: 12 },
    { name: 'healthcare', label: 'Healthcare', count: 3 },
    { name: 'finance', label: 'Finance', count: 2 },
    { name: 'retail', label: 'Retail', count: 2 },
    { name: 'manufacturing', label: 'Manufacturing', count: 2 },
    { name: 'education', label: 'Education', count: 3 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Diagnosis System",
      company: "MedTech Solutions",
      industry: "healthcare",
      challenge: "Manual diagnosis processes were time-consuming and error-prone, leading to delayed treatments and increased costs.",
      solution: "Implemented an AI-powered diagnostic system that analyzes medical images and patient data to provide accurate diagnoses in real-time.",
      results: [
        "85% reduction in diagnosis time",
        "92% accuracy rate in early disease detection",
        "40% decrease in healthcare costs",
        "99% patient satisfaction rate"
      ],
      technologies: ["Machine Learning", "Computer Vision", "Natural Language Processing", "Cloud Computing"],
      image: "healthcare-ai",
      duration: "6 months",
      team: "12 experts"
    },
    {
      id: 2,
      title: "Blockchain-Based Financial Trading Platform",
      company: "FinSecure Corp",
      industry: "finance",
      challenge: "Traditional trading platforms lacked transparency and security, leading to trust issues and regulatory compliance problems.",
      solution: "Developed a decentralized trading platform using blockchain technology with smart contracts for automated and secure transactions.",
      results: [
        "100% transaction transparency",
        "Zero security breaches",
        "60% reduction in transaction costs",
        "50% faster settlement times"
      ],
      technologies: ["Blockchain", "Smart Contracts", "React", "Node.js", "PostgreSQL"],
      image: "blockchain-finance",
      duration: "8 months",
      team: "15 experts"
    },
    {
      id: 3,
      title: "IoT-Enabled Smart Manufacturing",
      company: "AutoParts Inc",
      industry: "manufacturing",
      challenge: "Production inefficiencies and equipment downtime were causing significant losses and quality issues.",
      solution: "Implemented an IoT-based smart manufacturing system with real-time monitoring, predictive maintenance, and automated quality control.",
      results: [
        "30% increase in production efficiency",
        "45% reduction in equipment downtime",
        "25% improvement in product quality",
        "35% decrease in maintenance costs"
      ],
      technologies: ["IoT", "Edge Computing", "Machine Learning", "Real-time Analytics", "Cloud Platform"],
      image: "iot-manufacturing",
      duration: "10 months",
      team: "18 experts"
    },
    {
      id: 4,
      title: "AI-Driven E-commerce Personalization",
      company: "ShopSmart Retail",
      industry: "retail",
      challenge: "Low customer engagement and conversion rates due to generic shopping experiences and poor product recommendations.",
      solution: "Created an AI-powered personalization engine that analyzes customer behavior and preferences to deliver tailored shopping experiences.",
      results: [
        "65% increase in conversion rates",
        "40% improvement in customer engagement",
        "50% increase in average order value",
        "35% reduction in cart abandonment"
      ],
      technologies: ["AI/ML", "Recommendation Systems", "Big Data", "Microservices", "Kubernetes"],
      image: "ai-ecommerce",
      duration: "7 months",
      team: "14 experts"
    },
    {
      id: 5,
      title: "Cloud-Native Learning Management System",
      company: "EduTech University",
      industry: "education",
      challenge: "Outdated learning management system couldn't handle remote learning demands and lacked modern features for student engagement.",
      solution: "Built a scalable, cloud-native LMS with AI-powered content recommendations, virtual classrooms, and advanced analytics.",
      results: [
        "90% improvement in student engagement",
        "70% increase in course completion rates",
        "80% reduction in system downtime",
        "95% student satisfaction score"
      ],
      technologies: ["Cloud Computing", "AI/ML", "React", "Node.js", "MongoDB", "WebRTC"],
      image: "cloud-education",
      duration: "9 months",
      team: "16 experts"
    },
    {
      id: 6,
      title: "Cybersecurity Threat Detection System",
      company: "SecureBank Ltd",
      industry: "finance",
      challenge: "Increasing cyber threats and sophisticated attacks were compromising customer data and financial security.",
      solution: "Deployed an advanced AI-powered cybersecurity system with real-time threat detection, automated response, and predictive analytics.",
      results: [
        "99.9% threat detection accuracy",
        "95% reduction in false positives",
        "80% faster incident response time",
        "Zero data breaches since implementation"
      ],
      technologies: ["AI/ML", "Cybersecurity", "Real-time Monitoring", "Threat Intelligence", "Automation"],
      image: "cybersecurity-finance",
      duration: "5 months",
      team: "10 experts"
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => 
    selectedCategory === 'all' || study.industry === selectedCategory
  );

  const getIndustryColor = (industry: string) => {
    switch (industry) {
      case 'healthcare': return 'text-green-400 bg-green-500/10';
      case 'finance': return 'text-blue-400 bg-blue-500/10';
      case 'retail': return 'text-purple-400 bg-purple-500/10';
      case 'manufacturing': return 'text-orange-400 bg-orange-500/10';
      case 'education': return 'text-cyan-400 bg-cyan-500/10';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'healthcare': return Brain;
      case 'finance': return Shield;
      case 'retail': return TrendingUp;
      case 'manufacturing': return Code;
      case 'education': return Users;
      default: return Target;
    }
  };

  const stats = [
    { icon: Award, value: '99%', label: 'Client Satisfaction' },
    { icon: TrendingUp, value: '250%', label: 'Average ROI' },
    { icon: Clock, value: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Case Studies - Zion Tech Group"
        description="Explore our successful projects and see how we've helped businesses across industries achieve their digital transformation goals."
        keywords="case studies, success stories, AI projects, cloud solutions, digital transformation, client results"
      />
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve their digital transformation goals with cutting-edge technology solutions.
>>>>>>> main
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-8 h-8" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-8 h-8" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="w-8 h-8" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )};
=======

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Filter Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Filter by Industry</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredCaseStudies.map((study) => {
              const IndustryIcon = getIndustryIcon(study.industry);
              return (
                <div key={study.id} className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-purple-600/20 rounded-lg">
                        <IndustryIcon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{study.title}</h3>
                        <p className="text-gray-400">{study.company}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getIndustryColor(study.industry)}`}>
                      {study.industry.toUpperCase()}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{study.team}</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                View All Case Studies
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
>>>>>>> main

export default CaseStudiesPage;