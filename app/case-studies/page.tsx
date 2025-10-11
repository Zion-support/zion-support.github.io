'use client'
import React, { useState } from 'react'
import { ArrowRight, ExternalLink, Star, Users, TrendingUp, Clock } from 'lucide-react'

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'retail', name: 'Retail' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'education', name: 'Education' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Patient Care System',
      company: 'MedTech Solutions',
      industry: 'healthcare',
      challenge: 'MedTech Solutions needed to improve patient care efficiency and reduce medical errors in their hospital network.',
      solution: 'We developed an AI-powered patient care system that uses machine learning to predict patient needs and optimize treatment plans.',
      results: [
        '40% reduction in medical errors',
        '25% improvement in patient satisfaction',
        '30% decrease in readmission rates',
        '50% faster diagnosis times'
      ],
      duration: '6 months',
      teamSize: '8 developers',
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'React', 'AWS'],
      image: '/api/placeholder/600/400',
      testimonial: {
        quote: 'The AI system has transformed our patient care. We\'ve seen significant improvements in both efficiency and patient outcomes.',
        author: 'Dr. Sarah Johnson',
        position: 'Chief Medical Officer',
        company: 'MedTech Solutions'
      }
    },
    {
      id: 2,
      title: 'Financial Fraud Detection Platform',
      company: 'SecureBank',
      industry: 'finance',
      challenge: 'SecureBank needed a real-time fraud detection system to protect their customers from financial crimes.',
      solution: 'We built an advanced fraud detection platform using machine learning algorithms that analyze transaction patterns in real-time.',
      results: [
        '95% accuracy in fraud detection',
        '60% reduction in false positives',
        '80% faster fraud response time',
        '99.9% system uptime'
      ],
      duration: '4 months',
      teamSize: '6 developers',
      technologies: ['Machine Learning', 'Python', 'Apache Kafka', 'PostgreSQL', 'Docker'],
      image: '/api/placeholder/600/400',
      testimonial: {
        quote: 'The fraud detection system has saved us millions in potential losses and significantly improved our security posture.',
        author: 'Michael Chen',
        position: 'Chief Security Officer',
        company: 'SecureBank'
      }
    },
    {
      id: 3,
      title: 'E-commerce Personalization Engine',
      company: 'ShopSmart',
      industry: 'retail',
      challenge: 'ShopSmart wanted to increase customer engagement and sales through personalized shopping experiences.',
      solution: 'We developed a comprehensive personalization engine that uses AI to recommend products and customize the shopping experience.',
      results: [
        '35% increase in conversion rates',
        '50% improvement in customer engagement',
        '25% boost in average order value',
        '40% reduction in cart abandonment'
      ],
      duration: '5 months',
      teamSize: '7 developers',
      technologies: ['AI/ML', 'Python', 'Redis', 'React', 'Node.js', 'MongoDB'],
      image: '/api/placeholder/600/400',
      testimonial: {
        quote: 'The personalization engine has been a game-changer for our business. Our customers love the tailored experience.',
        author: 'Lisa Rodriguez',
        position: 'VP of Marketing',
        company: 'ShopSmart'
      }
    },
    {
      id: 4,
      title: 'Smart Manufacturing Analytics',
      company: 'AutoParts Inc.',
      industry: 'manufacturing',
      challenge: 'AutoParts Inc. needed to optimize their manufacturing processes and reduce waste in their production lines.',
      solution: 'We implemented a smart manufacturing analytics platform that uses IoT sensors and AI to monitor and optimize production.',
      results: [
        '20% reduction in production waste',
        '15% increase in production efficiency',
        '30% decrease in equipment downtime',
        '25% improvement in quality control'
      ],
      duration: '8 months',
      teamSize: '10 developers',
      technologies: ['IoT', 'Machine Learning', 'Python', 'Azure', 'Power BI', 'SQL Server'],
      image: '/api/placeholder/600/400',
      testimonial: {
        quote: 'The smart manufacturing platform has revolutionized our production process. We\'ve achieved significant cost savings and quality improvements.',
        author: 'Robert Kim',
        position: 'Operations Director',
        company: 'AutoParts Inc.'
      }
    },
    {
      id: 5,
      title: 'Educational AI Tutoring System',
      company: 'EduTech Academy',
      industry: 'education',
      challenge: 'EduTech Academy wanted to provide personalized learning experiences for students using AI technology.',
      solution: 'We created an AI-powered tutoring system that adapts to each student\'s learning style and pace.',
      results: [
        '45% improvement in student performance',
        '60% increase in student engagement',
        '35% reduction in learning time',
        '90% student satisfaction rate'
      ],
      duration: '7 months',
      teamSize: '9 developers',
      technologies: ['AI/ML', 'Python', 'React', 'MongoDB', 'TensorFlow', 'AWS'],
      image: '/api/placeholder/600/400',
      testimonial: {
        quote: 'The AI tutoring system has transformed how our students learn. The personalized approach has been incredibly effective.',
        author: 'Dr. Emily Watson',
        position: 'Academic Director',
        company: 'EduTech Academy'
      }
    },
    {
      id: 6,
      title: 'Cloud Migration & Optimization',
      company: 'TechStart Solutions',
      industry: 'all',
      challenge: 'TechStart Solutions needed to migrate their legacy systems to the cloud and optimize their infrastructure.',
      solution: 'We executed a comprehensive cloud migration strategy and implemented cloud-native solutions for better scalability.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% system availability',
        '40% improvement in application performance',
        '60% faster deployment times'
      ],
      duration: '3 months',
      teamSize: '5 developers',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Python', 'React'],
      image: '/api/placeholder/600/400',
      testimonial: {
        quote: 'The cloud migration was seamless and the performance improvements have been remarkable. Highly recommend their services.',
        author: 'David Park',
        position: 'CTO',
        company: 'TechStart Solutions'
      }
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => 
    selectedIndustry === 'all' || study.industry === selectedIndustry
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case <span className="text-cyan-400">Studies</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 bg-slate-700/50">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-gray-300">5.0</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.teamSize}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-6">
                    <blockquote className="text-gray-300 italic mb-4">
                      "{study.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div>
                        <div className="font-semibold text-white">{study.testimonial.author}</div>
                        <div className="text-sm text-gray-400">
                          {study.testimonial.position}, {study.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    View Full Case Study
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;