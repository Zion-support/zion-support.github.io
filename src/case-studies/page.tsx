import { Star, CheckCircle } from 'lucide-react';
'use client';
import React, { useState } from 'react';
import { ArrowRight, Filter, Search, Calendar, User, Building, Target, TrendingUp, Award, Star, Eye, MessageCircle, Share2, Download, Play, CheckCircle, Clock, DollarSign, BarChart, Users, Globe, Shield, Zap, Brain, Cloud, Code } from 'lucide-react';

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { name: 'all', label: 'All Industries', count: 12 },
    { name: 'healthcare', label: 'Healthcare', count: 3 },
    { name: 'finance', label: 'Finance', count: 3 },
    { name: 'manufacturing', label: 'Manufacturing', count: 2 },
    { name: 'retail', label: 'Retail', count: 2 },
    { name: 'technology', label: 'Technology', count: 2 }
  ];

  const services = [
    { name: 'all', label: 'All Services', count: 12 },
    { name: 'ai', label: 'AI Solutions', count: 6 },
    { name: 'cloud', label: 'Cloud Migration', count: 4 },
    { name: 'security', label: 'Cybersecurity', count: 3 },
    { name: 'integration', label: 'System Integration', count: 2 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'HealthPlus Medical: AI-Powered Diagnostic System',
      company: 'HealthPlus Medical',
      industry: 'healthcare',
      service: 'ai',
      challenge: 'Manual diagnosis processes were time-consuming and prone to human error, leading to delayed treatments and inconsistent results.',
      solution: 'Implemented an AI-powered diagnostic system that analyzes medical images and patient data to provide accurate, rapid diagnoses.',
      results: [
        '40% faster diagnosis times',
        '25% improvement in accuracy',
        '200% ROI within 6 months',
        '99.5% system uptime'
      ],
      metrics: {
        timeSaved: '40%',
        accuracyImprovement: '25%',
        roi: '200%',
        uptime: '99.5%'
      },
      duration: '6 months',
      teamSize: '8 specialists',
      budget: '$150,000',
      image: '/images/case-studies/healthplus-medical.jpg',
      logo: '/images/logos/healthplus.png',
      testimonial: {
        text: 'The AI diagnostic system has revolutionized our patient care. We can now provide faster, more accurate diagnoses, ultimately saving lives.',
        author: 'Dr. Sarah Johnson',
        role: 'Chief Medical Officer',
        image: '/images/testimonials/sarah-johnson.jpg'
      },
      technologies: ['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Cloud Computing'],
      featured: true
    },
    {
      id: 2,
      title: 'FinanceFlow Bank: Fraud Detection & Risk Management',
      company: 'FinanceFlow Bank',
      industry: 'finance',
      service: 'ai',
      challenge: 'Traditional fraud detection systems were missing sophisticated attacks and generating too many false positives, costing millions in losses.',
      solution: 'Deployed advanced AI fraud detection system with real-time monitoring and machine learning algorithms.',
      results: [
        '99.5% fraud detection accuracy',
        '60% reduction in false positives',
        '400% ROI in first year',
        'Zero security breaches'
      ],
      metrics: {
        detectionAccuracy: '99.5%',
        falsePositiveReduction: '60%',
        roi: '400%',
        securityBreaches: '0'
      },
      duration: '4 months',
      teamSize: '6 specialists',
      budget: '$200,000',
      image: '/images/case-studies/financeflow-bank.jpg',
      logo: '/images/logos/financeflow.png',
      testimonial: {
        text: 'The AI fraud detection system has saved us millions in potential losses while significantly reducing false alarms.',
        author: 'Michael Chen',
        role: 'Chief Security Officer',
        image: '/images/testimonials/michael-chen.jpg'
      },
      technologies: ['Machine Learning', 'Real-time Analytics', 'Blockchain', 'Cloud Security'],
      featured: false
    },
    {
      id: 3,
      title: 'ManufacturingCorp: Smart Factory Automation',
      company: 'ManufacturingCorp',
      industry: 'manufacturing',
      service: 'ai',
      challenge: 'Outdated manufacturing processes were causing production delays, quality issues, and high operational costs.',
      solution: 'Implemented comprehensive smart factory solution with AI-powered predictive maintenance and quality control.',
      results: [
        '50% increase in production efficiency',
        '30% reduction in defects',
        '250% ROI within 8 months',
        '99.9% equipment uptime'
      ],
      metrics: {
        efficiencyIncrease: '50%',
        defectReduction: '30%',
        roi: '250%',
        uptime: '99.9%'
      },
      duration: '8 months',
      teamSize: '10 specialists',
      budget: '$300,000',
      image: '/images/case-studies/manufacturingcorp.jpg',
      logo: '/images/logos/manufacturingcorp.png',
      testimonial: {
        text: 'The smart factory solution has transformed our operations. We\'ve seen dramatic improvements in efficiency and quality.',
        author: 'Jennifer Martinez',
        role: 'Operations Director',
        image: '/images/testimonials/jennifer-martinez.jpg'
      },
      technologies: ['IoT', 'Predictive Analytics', 'Computer Vision', 'Edge Computing'],
      featured: false
    },
    {
      id: 4,
      title: 'RetailMax: Personalized Customer Experience',
      company: 'RetailMax',
      industry: 'retail',
      service: 'ai',
      challenge: 'Generic customer experiences were leading to low engagement and poor conversion rates across all channels.',
      solution: 'Deployed AI-powered personalization engine that creates unique experiences for each customer.',
      results: [
        '35% increase in conversion rates',
        '45% improvement in customer satisfaction',
        '180% ROI within 6 months',
        '60% increase in average order value'
      ],
      metrics: {
        conversionIncrease: '35%',
        satisfactionImprovement: '45%',
        roi: '180%',
        orderValueIncrease: '60%'
      },
      duration: '6 months',
      teamSize: '7 specialists',
      budget: '$120,000',
      image: '/images/case-studies/retailmax.jpg',
      logo: '/images/logos/retailmax.png',
      testimonial: {
        text: 'The personalization engine has completely transformed our customer experience and significantly boosted our sales.',
        author: 'David Thompson',
        role: 'Chief Marketing Officer',
        image: '/images/testimonials/david-thompson.jpg'
      },
      technologies: ['Recommendation Engine', 'Real-time Analytics', 'A/B Testing', 'Cloud Computing'],
      featured: false
    },
    {
      id: 5,
      title: 'TechStartup: Cloud Migration & DevOps',
      company: 'TechStartup',
      industry: 'technology',
      service: 'cloud',
      challenge: 'On-premises infrastructure was limiting scalability and causing frequent downtime during peak usage.',
      solution: 'Migrated entire infrastructure to cloud with automated DevOps pipelines and monitoring.',
      results: [
        '99.9% uptime achieved',
        '300% improvement in scalability',
        '150% ROI within 4 months',
        '50% reduction in operational costs'
      ],
      metrics: {
        uptime: '99.9%',
        scalabilityImprovement: '300%',
        roi: '150%',
        costReduction: '50%'
      },
      duration: '4 months',
      teamSize: '5 specialists',
      budget: '$80,000',
      image: '/images/case-studies/techstartup.jpg',
      logo: '/images/logos/techstartup.png',
      testimonial: {
        text: 'The cloud migration has been a game-changer. We can now scale instantly and our uptime is rock solid.',
        author: 'Alex Rodriguez',
        role: 'CTO',
        image: '/images/testimonials/alex-rodriguez.jpg'
      },
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      featured: false
    },
    {
      id: 6,
      title: 'SecureBank: Enterprise Security Overhaul',
      company: 'SecureBank',
      industry: 'finance',
      service: 'security',
      challenge: 'Legacy security systems were vulnerable to modern cyber threats and non-compliant with new regulations.',
      solution: 'Implemented comprehensive security suite with advanced threat detection and compliance management.',
      results: [
        'Zero security incidents',
        '100% compliance achieved',
        '200% ROI within 6 months',
        '60% faster incident response'
      ],
      metrics: {
        securityIncidents: '0',
        compliance: '100%',
        roi: '200%',
        responseTimeImprovement: '60%'
      },
      duration: '6 months',
      teamSize: '8 specialists',
      budget: '$180,000',
      image: '/images/case-studies/securebank.jpg',
      logo: '/images/logos/securebank.png',
      testimonial: {
        text: 'Our security posture has never been stronger. The new system gives us complete visibility and protection.',
        author: 'Lisa Wang',
        role: 'Chief Information Security Officer',
        image: '/images/testimonials/lisa-wang.jpg'
      },
      technologies: ['SIEM', 'Threat Intelligence', 'Zero Trust', 'Compliance Automation'],
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    return matchesSearch && matchesIndustry && matchesService;
  });

  const getServiceIcon = (service: string) => {
    const icons = {
      ai: Brain,
      cloud: Cloud,
      security: Shield,
      integration: Code
    };
    return icons[service as keyof typeof icons] || Target;
  };

  const getServiceColor = (service: string) => {
    const colors = {
      ai: 'text-purple-400',
      cloud: 'text-blue-400',
      security: 'text-red-400',
      integration: 'text-green-400'
    };
    return colors[service as keyof typeof colors] || 'text-gray-400';
  };

  const getIndustryIcon = (industry: string) => {
    const icons = {
      healthcare: Users,
      finance: DollarSign,
      manufacturing: Building,
      retail: Target,
      technology: Code
    };
    return icons[industry as keyof typeof icons] || Building;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden"></section>"
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>"
        <div className="container mx-auto px-4 relative z-10"></div>"
          <div className="max-w-4xl mx-auto text-center"></div>"
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse"></h1>"
              Case Studies
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed"></p>"
              Real results from real clients. Discover how we've helped businesses across,
industries transform their operations with AI and technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>"
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>"
                <Award className="w-5 h-5 text-cyan-400" />"
                <span className="text-white font-medium">Proven Results</span>"
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>"
                <TrendingUp className="w-5 h-5 text-purple-400" />"
                <span className="text-white font-medium">300% Average ROI</span>"
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>"
                <Star className="w-5 h-5 text-green-400" />"
                <span className="text-white font-medium">Client Success</span>"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-6xl mx-auto"></div>"
            <div className="flex flex-col lg:flex-row gap-4 mb-8"></div>"
              <div className="flex-1 relative"></div>"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
                <input,
type="text""
                  placeholder="Search case studies...""
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors""
                />
              </div>
              <div className="flex gap-2 overflow-x-auto"></div>"
                <select,
value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors""
                >
                  {industries.map((industry) => (
                    <option key={industry.name} value={industry.name}></option>
                      {industry.label} ({industry.count})
                    </option>
                  ))}
                </select>
                <select,
value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors""
                >
                  {services.map((service) => (
                    <option key={service.name} value={service.name}></option>
                      {service.label} ({service.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-7xl mx-auto"></div>"
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>"
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-700/50 transition-all duration-300"></div>"
                  <div className="relative"></div>"
                    <img,
src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover""
                    />
                    <div className="absolute top-4 left-4 flex gap-2"></div>"
                      <div className={`w-8 h-8 ${getServiceColor(study.service)}`}></div>
                        {React.createElement(getServiceIcon(study.service), { className: 'w-8 h-8' })}
                      </div>
                      <div className="w-8 h-8 text-gray-400"></div>"
                        {React.createElement(getIndustryIcon(study.industry), { className: 'w-8 h-8' })}
                      </div>
                    </div>
                    {study.featured && (
                      <div className="absolute top-4 right-4"></div>"
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"></span>"
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6"></div>"
                    <div className="flex items-center space-x-2 mb-3"></div>"
                      <img,
src={study.logo}
                        alt={study.company}
                        className="w-8 h-8 rounded""
                      />
                      <span className="text-cyan-400 font-medium text-sm capitalize">{study.industry}</span>"
                      <span className="text-gray-400">•</span>"
                      <span className="text-gray-400 text-sm capitalize">{study.service}</span>"
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>"
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{study.challenge}</p>"
                    
                    <div className="grid grid-cols-2 gap-4 mb-4"></div>"
                      <div className="text-center"></div>"
                        <div className="text-2xl font-bold text-green-400">{study.metrics.roi}</div>"
                        <div className="text-xs text-gray-400">ROI</div>"
                      </div>
                      <div className="text-center"></div>"
                        <div className="text-2xl font-bold text-cyan-400">{study.duration}</div>"
                        <div className="text-xs text-gray-400">Duration</div>"
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6"></div>"
                      <h4 className="text-sm font-semibold text-white">Key Results:</h4>"
                      {study.results.slice(0, 3).map((result, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-300"></div>"
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />"
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between"></div>"
                      <div className="flex items-center space-x-2"></div>"
                        <img,
src={study.testimonial.image}
                          alt={study.testimonial.author}
                          className="w-8 h-8 rounded-full""
                        />
                        <div></div>
                          <div className="text-white font-medium text-sm">{study.testimonial.author}</div>"
                          <div className="text-gray-400 text-xs">{study.testimonial.role}</div>"
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all flex items-center"></button>"
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />"
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-6xl mx-auto"></div>"
            <div className="text-center mb-16"></div>"
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"></h2>"
                Our Track Record
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>"
                Numbers that speak to our success and client satisfaction
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>"
              <div className="text-center"></div>"
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>"
                <div className="text-gray-300">Projects Completed</div>"
              </div>
              <div className="text-center"></div>"
                <div className="text-4xl font-bold text-purple-400 mb-2">300%</div>"
                <div className="text-gray-300">Average ROI</div>"
              </div>
              <div className="text-center"></div>"
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>"
                <div className="text-gray-300">Client Satisfaction</div>"
              </div>
              <div className="text-center"></div>"
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>"
                <div className="text-gray-300">Support Available</div>"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700"></section>"
        <div className="container mx-auto px-4 text-center"></div>"
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6"></h2>"
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"></p>"
            Join hundreds of businesses that have transformed their operations with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <a,
href="/contact""
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center""
            ></a>
              <MessageCircle className="w-5 h-5 mr-2" />"
              Start Your Project
            </a>
            <a,
href="/consultation""
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center""
            ></a>
              <Calendar className="w-5 h-5 mr-2" />"
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
