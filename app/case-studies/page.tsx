'use client';
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
  MessageSquare,
  Eye,
  Sparkles,
  Zap,
  Globe,
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
  Activity
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Case Studies', icon: Target },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'cloud', name: 'Cloud Migration', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'analytics', name: 'Data Analytics', icon: BarChart },
    { id: 'development', name: 'Custom Development', icon: Code }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Inc.',
      industry: 'Technology',
      category: 'ai',
      duration: '6 months',
      team: '8 specialists',
      image: '/images/case-studies/ai-customer-service.webp',
      challenge: 'TechCorp was struggling with high customer service costs and long response times. Their traditional support system couldn\'t handle the increasing volume of inquiries.',
      solution: 'We implemented an AI-powered chatbot system with natural language processing capabilities, integrated with their existing CRM and knowledge base.',
      results: [
        'Reduced response time by 85%',
        'Cut customer service costs by 60%',
        'Improved customer satisfaction by 40%',
        'Handled 3x more inquiries with same staff'
      ],
      technologies: ['AI/ML', 'NLP', 'CRM Integration', 'Cloud Computing'],
      testimonial: {
        quote: 'The AI solution transformed our customer service operations. We can now provide instant, accurate responses 24/7.',
        author: 'Sarah Johnson',
        role: 'VP of Customer Experience',
        company: 'TechCorp Inc.'
      }
    },
    {
      id: 2,
      title: 'Enterprise Cloud Migration & Optimization',
      client: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      category: 'cloud',
      duration: '8 months',
      team: '12 specialists',
      image: '/images/case-studies/cloud-migration.webp',
      challenge: 'Global Manufacturing Co. needed to migrate their legacy on-premises infrastructure to the cloud while maintaining zero downtime and improving performance.',
      solution: 'We designed and executed a comprehensive cloud migration strategy using AWS, implementing microservices architecture and automated scaling.',
      results: [
        'Achieved 99.9% uptime during migration',
        'Reduced infrastructure costs by 45%',
        'Improved application performance by 60%',
        'Enabled global scalability'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Microservices'],
      testimonial: {
        quote: 'The migration was seamless and exceeded our expectations. Our systems are now more reliable and cost-effective.',
        author: 'Michael Chen',
        role: 'CTO',
        company: 'Global Manufacturing Co.'
      }
    },
    {
      id: 3,
      title: 'Advanced Cybersecurity Implementation',
      client: 'Financial Services Ltd.',
      industry: 'Finance',
      category: 'security',
      duration: '4 months',
      team: '6 specialists',
      image: '/images/case-studies/cybersecurity.webp',
      challenge: 'Financial Services Ltd. needed to strengthen their security posture to comply with new regulations and protect against sophisticated cyber threats.',
      solution: 'We implemented a comprehensive security framework including threat detection, incident response, and compliance monitoring systems.',
      results: [
        'Achieved 100% regulatory compliance',
        'Reduced security incidents by 90%',
        'Improved threat detection by 95%',
        'Enhanced data protection measures'
      ],
      technologies: ['SIEM', 'EDR', 'Zero Trust', 'Compliance Tools'],
      testimonial: {
        quote: 'Our security posture has never been stronger. We feel confident in our ability to protect our clients\' data.',
        author: 'David Rodriguez',
        role: 'CISO',
        company: 'Financial Services Ltd.'
      }
    },
    {
      id: 4,
      title: 'Real-Time Analytics Dashboard',
      client: 'E-commerce Giant',
      industry: 'Retail',
      category: 'analytics',
      duration: '5 months',
      team: '10 specialists',
      image: '/images/case-studies/analytics-dashboard.webp',
      challenge: 'E-commerce Giant needed real-time insights into customer behavior, sales performance, and inventory management across multiple channels.',
      solution: 'We built a comprehensive analytics platform with real-time data processing, machine learning insights, and interactive dashboards.',
      results: [
        'Real-time data processing',
        'Improved decision-making speed by 70%',
        'Increased sales conversion by 25%',
        'Reduced inventory costs by 30%'
      ],
      technologies: ['Big Data', 'Machine Learning', 'Real-time Processing', 'Data Visualization'],
      testimonial: {
        quote: 'The analytics platform gives us unprecedented visibility into our business operations and customer behavior.',
        author: 'Lisa Wang',
        role: 'VP of Analytics',
        company: 'E-commerce Giant'
      }
    },
    {
      id: 5,
      title: 'Custom ERP System Development',
      client: 'Healthcare Network',
      industry: 'Healthcare',
      category: 'development',
      duration: '12 months',
      team: '15 specialists',
      image: '/images/case-studies/custom-erp.webp',
      challenge: 'Healthcare Network needed a custom ERP system to manage patient records, appointments, billing, and staff scheduling across multiple locations.',
      solution: 'We developed a comprehensive ERP system with HIPAA compliance, mobile accessibility, and integration with existing healthcare systems.',
      results: [
        'Streamlined operations across 20+ locations',
        'Reduced administrative time by 50%',
        'Improved patient satisfaction by 35%',
        'Achieved 100% HIPAA compliance'
      ],
      technologies: ['Custom Development', 'HIPAA Compliance', 'Mobile Apps', 'Database Design'],
      testimonial: {
        quote: 'The custom ERP system has revolutionized how we manage our healthcare operations. It\'s exactly what we needed.',
        author: 'Dr. Robert Kim',
        role: 'Chief Medical Officer',
        company: 'Healthcare Network'
      }
    },
    {
      id: 6,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Logistics Corp',
      industry: 'Logistics',
      category: 'ai',
      duration: '7 months',
      team: '9 specialists',
      image: '/images/case-studies/supply-chain-ai.webp',
      challenge: 'Logistics Corp needed to optimize their supply chain operations to reduce costs, improve delivery times, and handle increasing demand.',
      solution: 'We implemented AI-powered demand forecasting, route optimization, and inventory management systems with real-time monitoring.',
      results: [
        'Reduced delivery times by 30%',
        'Cut logistics costs by 25%',
        'Improved inventory accuracy by 95%',
        'Increased customer satisfaction by 40%'
      ],
      technologies: ['AI/ML', 'Supply Chain Optimization', 'Predictive Analytics', 'IoT'],
      testimonial: {
        quote: 'The AI optimization has transformed our logistics operations. We\'re more efficient and profitable than ever.',
        author: 'Maria Gonzalez',
        role: 'COO',
        company: 'Logistics Corp'
      }
    }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Case Studies - Zion Tech Group"
        description="Explore our successful projects and see how we've helped businesses transform with AI, cloud computing, cybersecurity, and custom development solutions."
        keywords="case studies, AI projects, cloud migration, cybersecurity, custom development, business transformation"
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
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                      {study.industry}
                    </span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.challenge}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <blockquote className="text-gray-300 italic mb-2">
                      "{study.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div>
                        <p className="text-white font-medium">{study.testimonial.author}</p>
                        <p className="text-gray-400 text-sm">{study.testimonial.role}, {study.testimonial.company}</p>
                      </div>
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
            Let's discuss how we can help transform your business with our proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;