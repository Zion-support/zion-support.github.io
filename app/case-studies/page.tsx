'use client';
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Sparkles,
  Zap,
  Database,
  Globe,
  Settings,
  Lock,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  MessageSquare
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      category: 'ai',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      duration: '6 months',
      team: '8 developers',
      challenge: 'Build an intelligent e-commerce platform with AI-powered product recommendations and personalized shopping experiences.',
      solution: 'Developed a comprehensive AI solution using machine learning algorithms for product recommendations, natural language processing for search, and computer vision for visual search capabilities.',
      results: [
        '40% increase in conversion rates',
        '60% improvement in customer engagement',
        '35% boost in average order value',
        '50% reduction in cart abandonment'
      ],
      technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'AWS'],
      image: '/images/case-studies/ecommerce-ai.jpg',
      testimonial: {
        quote: 'Zion Tech Group transformed our e-commerce platform with AI. The results exceeded our expectations.',
        author: 'Sarah Johnson',
        role: 'CTO, TechRetail Inc.'
      }
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      category: 'cloud',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      duration: '4 months',
      team: '12 developers',
      challenge: 'Migrate legacy financial systems to the cloud while ensuring compliance and security requirements.',
      solution: 'Designed and implemented a secure cloud architecture using AWS, with automated compliance monitoring and data encryption.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster application performance',
        '100% compliance with financial regulations'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Python', 'PostgreSQL'],
      image: '/images/case-studies/cloud-migration.jpg',
      testimonial: {
        quote: 'The cloud migration was seamless and our systems are now more secure and efficient than ever.',
        author: 'Michael Chen',
        role: 'IT Director, FinanceCorp'
      }
    },
    {
      id: 3,
      title: 'Mobile App for Healthcare',
      category: 'mobile',
      client: 'HealthTech Solutions',
      industry: 'Healthcare',
      duration: '8 months',
      team: '10 developers',
      challenge: 'Create a HIPAA-compliant mobile application for patient management and telemedicine.',
      solution: 'Built a cross-platform mobile app with secure patient data management, video consultation features, and real-time health monitoring.',
      results: [
        '100,000+ active users',
        '95% patient satisfaction rate',
        '30% reduction in hospital visits',
        'HIPAA compliance achieved'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'WebRTC', 'AWS', 'Redis'],
      image: '/images/case-studies/healthcare-mobile.jpg',
      testimonial: {
        quote: 'This app has revolutionized how we provide healthcare services to our patients.',
        author: 'Dr. Emily Rodriguez',
        role: 'Chief Medical Officer, HealthTech Solutions'
      }
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      category: 'data',
      client: 'ManufacturingCo',
      industry: 'Manufacturing',
      duration: '3 months',
      team: '6 developers',
      challenge: 'Create a real-time analytics dashboard for manufacturing operations and predictive maintenance.',
      solution: 'Developed an interactive dashboard with real-time data visualization, predictive analytics, and automated alerting systems.',
      results: [
        '25% reduction in equipment downtime',
        '20% increase in production efficiency',
        'Real-time visibility into operations',
        'Predictive maintenance implemented'
      ],
      technologies: ['React', 'D3.js', 'Python', 'Apache Kafka', 'InfluxDB', 'Grafana'],
      image: '/images/case-studies/manufacturing-analytics.jpg',
      testimonial: {
        quote: 'The analytics dashboard has given us unprecedented insight into our manufacturing processes.',
        author: 'Robert Kim',
        role: 'Operations Director, ManufacturingCo'
      }
    },
    {
      id: 5,
      title: 'Cybersecurity Implementation',
      category: 'security',
      client: 'SecureBank',
      industry: 'Banking',
      duration: '5 months',
      team: '15 developers',
      challenge: 'Implement comprehensive cybersecurity measures for a major banking institution.',
      solution: 'Deployed multi-layered security solutions including threat detection, vulnerability assessment, and incident response systems.',
      results: [
        'Zero security breaches',
        '99.9% threat detection accuracy',
        '50% faster incident response',
        'Full compliance with banking regulations'
      ],
      technologies: ['Python', 'Elasticsearch', 'Kibana', 'Docker', 'Kubernetes', 'AWS'],
      image: '/images/case-studies/cybersecurity.jpg',
      testimonial: {
        quote: 'Our security posture has never been stronger. Zion Tech Group delivered exceptional results.',
        author: 'Lisa Wang',
        role: 'CISO, SecureBank'
      }
    },
    {
      id: 6,
      title: 'IoT Platform for Smart Cities',
      category: 'iot',
      client: 'SmartCity Initiative',
      industry: 'Government',
      duration: '12 months',
      team: '20 developers',
      challenge: 'Build an IoT platform to manage smart city infrastructure including traffic, utilities, and public services.',
      solution: 'Created a comprehensive IoT platform with real-time monitoring, data analytics, and automated control systems.',
      results: [
        '30% reduction in traffic congestion',
        '20% energy savings',
        'Improved public safety',
        'Enhanced citizen services'
      ],
      technologies: ['React', 'Node.js', 'MQTT', 'InfluxDB', 'Grafana', 'Docker'],
      image: '/images/case-studies/smart-city-iot.jpg',
      testimonial: {
        quote: 'This IoT platform has transformed our city into a truly smart and efficient urban environment.',
        author: 'Mayor David Thompson',
        role: 'Mayor, SmartCity Initiative'
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'cloud', name: 'Cloud', icon: Cloud },
    { id: 'mobile', name: 'Mobile', icon: Code },
    { id: 'data', name: 'Data', icon: BarChart },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'iot', name: 'IoT', icon: Settings }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const stats = [
    { number: '100+', label: 'Projects Completed', icon: Target },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'Industries Served', icon: Building },
    { number: '15+', label: 'Years Experience', icon: Award }
  ];
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> origin/main

const CaseStudiesPage: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Case Studies - Zion Tech Group"
        description="Explore our successful projects and see how we've helped businesses transform with cutting-edge technology solutions."
        keywords="case studies, AI projects, cloud solutions, mobile apps, data analytics, cybersecurity, success stories"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Case
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Studies
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform with cutting-edge technology solutions. 
            Real projects, real results, real success stories.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-purple-400 font-medium">{study.industry}</span>
                    <span className="text-sm text-gray-400">{study.duration}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">{study.client}</h4>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-300 mb-2">Challenge:</h5>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-300 mb-2">Solution:</h5>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-300 mb-2">Key Results:</h5>
                    <ul className="space-y-1">
                      {study.results.slice(0, 3).map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-300 mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <blockquote className="text-sm text-gray-300 italic mb-2">
                      "{study.testimonial.quote}"
                    </blockquote>
                    <div className="text-sm text-gray-400">
                      <strong>{study.testimonial.author}</strong> - {study.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
=======
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses transform with AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Case Studies
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  Real success stories from our clients.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Coming soon - stay tuned for our case studies!
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
>>>>>>> origin/main
  );
};

export default CaseStudiesPage;