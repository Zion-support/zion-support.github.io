'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Star, Clock, Users, TrendingUp, BarChart, Shield, Brain, Cloud, Code, Target, Award, Phone, Mail, MapPin, Globe, Zap, Database, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, MessageSquare, Eye, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'data', name: 'Data Analytics', icon: BarChart }
  ];

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'retail', name: 'Retail' },
    { id: 'education', name: 'Education' },
    { id: 'technology', name: 'Technology' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'healthcare',
      category: 'ai',
      challenge: 'MedTech Solutions needed to analyze large volumes of patient data to identify patterns and improve treatment outcomes.',
      solution: 'We developed a comprehensive AI-powered analytics platform that processes patient data in real-time, providing insights for better diagnosis and treatment planning.',
      results: [
        '40% improvement in diagnostic accuracy',
        '60% reduction in data processing time',
        '25% increase in patient satisfaction',
        '30% cost savings in operational efficiency'
      ],
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'AWS', 'React'],
      duration: '6 months',
      team: '8 specialists',
      image: '/images/case-studies/healthcare-ai.webp',
      testimonial: {
        quote: 'Zion Tech Group transformed our data analytics capabilities. The AI platform they built has revolutionized how we approach patient care.',
        author: 'Dr. Sarah Johnson',
        role: 'Chief Medical Officer',
        company: 'MedTech Solutions'
      }
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinSecure Bank',
      industry: 'finance',
      category: 'cloud',
      challenge: 'FinSecure Bank needed to migrate their legacy systems to the cloud while maintaining security and compliance standards.',
      solution: 'We designed and implemented a secure cloud migration strategy using AWS, ensuring zero downtime and maintaining all regulatory compliance requirements.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        'Zero security incidents',
        '40% faster application deployment'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Python'],
      duration: '4 months',
      team: '12 specialists',
      image: '/images/case-studies/cloud-migration.webp',
      testimonial: {
        quote: 'The migration was seamless and exceeded our expectations. Our systems are now more secure and cost-effective than ever.',
        author: 'Michael Chen',
        role: 'CTO',
        company: 'FinSecure Bank'
      }
    },
    {
      id: 3,
      title: 'E-commerce Platform Development',
      client: 'RetailMax',
      industry: 'retail',
      category: 'development',
      challenge: 'RetailMax needed a modern, scalable e-commerce platform to handle their growing online business and seasonal traffic spikes.',
      solution: 'We built a custom e-commerce platform using React and Node.js with microservices architecture, capable of handling millions of transactions.',
      results: [
        '300% increase in online sales',
        '99.8% uptime during peak seasons',
        '50% improvement in page load speed',
        '200% increase in mobile conversions'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker'],
      duration: '5 months',
      team: '10 specialists',
      image: '/images/case-studies/ecommerce-platform.webp',
      testimonial: {
        quote: 'The new platform has transformed our online business. We can now handle any amount of traffic and our customers love the experience.',
        author: 'Jennifer Martinez',
        role: 'VP of Digital',
        company: 'RetailMax'
      }
    },
    {
      id: 4,
      title: 'Cybersecurity Implementation',
      client: 'TechCorp Industries',
      industry: 'technology',
      category: 'security',
      challenge: 'TechCorp Industries needed comprehensive cybersecurity measures to protect their intellectual property and customer data.',
      solution: 'We implemented a multi-layered security approach including network monitoring, endpoint protection, and security awareness training.',
      results: [
        'Zero security breaches',
        '95% reduction in phishing attempts',
        '100% compliance with industry standards',
        '24/7 security monitoring'
      ],
      technologies: ['SIEM', 'Firewall', 'EDR', 'MFA', 'Security Training'],
      duration: '3 months',
      team: '6 specialists',
      image: '/images/case-studies/cybersecurity.webp',
      testimonial: {
        quote: 'Our security posture has never been stronger. The team at Zion Tech Group gave us peace of mind and comprehensive protection.',
        author: 'David Kim',
        role: 'CISO',
        company: 'TechCorp Industries'
      }
    },
    {
      id: 5,
      title: 'Data Analytics Dashboard',
      client: 'EduLearn Academy',
      industry: 'education',
      category: 'data',
      challenge: 'EduLearn Academy needed to analyze student performance data to improve learning outcomes and identify at-risk students.',
      solution: 'We developed an interactive analytics dashboard that provides real-time insights into student performance, engagement, and learning patterns.',
      results: [
        '35% improvement in student retention',
        '45% increase in course completion rates',
        'Real-time performance monitoring',
        'Predictive analytics for at-risk students'
      ],
      technologies: ['Python', 'Pandas', 'D3.js', 'PostgreSQL', 'React'],
      duration: '4 months',
      team: '7 specialists',
      image: '/images/case-studies/education-analytics.webp',
      testimonial: {
        quote: 'The analytics dashboard has revolutionized how we understand our students. We can now provide personalized support and improve outcomes.',
        author: 'Dr. Lisa Wang',
        role: 'Director of Learning',
        company: 'EduLearn Academy'
      }
    },
    {
      id: 6,
      title: 'Manufacturing IoT Solution',
      client: 'AutoParts Manufacturing',
      industry: 'manufacturing',
      category: 'ai',
      challenge: 'AutoParts Manufacturing needed to optimize their production line and reduce equipment downtime through predictive maintenance.',
      solution: 'We implemented an IoT solution with AI-powered predictive analytics to monitor equipment health and predict maintenance needs.',
      results: [
        '30% reduction in equipment downtime',
        '25% increase in production efficiency',
        '40% reduction in maintenance costs',
        'Real-time production monitoring'
      ],
      technologies: ['IoT Sensors', 'Machine Learning', 'Python', 'Azure IoT', 'Power BI'],
      duration: '7 months',
      team: '9 specialists',
      image: '/images/case-studies/manufacturing-iot.webp',
      testimonial: {
        quote: 'The IoT solution has transformed our manufacturing process. We can now predict and prevent equipment failures before they happen.',
        author: 'Robert Johnson',
        role: 'Plant Manager',
        company: 'AutoParts Manufacturing'
      }
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === 'all' || study.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    return matchesCategory && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEOOptimizer
        title="Case Studies - Success Stories | Zion Tech Group"
        description="Explore our successful projects and client transformations across AI, cloud computing, development, and cybersecurity solutions."
        keywords="case studies, success stories, client projects, AI solutions, cloud migration, web development, cybersecurity"
      />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Success <span className="text-blue-600">Stories</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <category.icon className="h-4 w-4 mr-2" />
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Industry</h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry.id}
                      onClick={() => setSelectedIndustry(industry.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedIndustry === industry.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {industry.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {study.category.toUpperCase()}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                        {study.industry.toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    <p className="text-lg font-semibold text-blue-600 mb-4">{study.client}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {study.team}
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <blockquote className="text-gray-600 italic mb-4">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div>
                          <p className="font-semibold text-gray-900">{study.testimonial.author}</p>
                          <p className="text-sm text-gray-500">{study.testimonial.role}, {study.testimonial.company}</p>
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that delivers exceptional results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View All Services
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;