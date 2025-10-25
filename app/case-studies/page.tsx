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
  ExternalLink,
  Filter,
  Search,
  Calendar,
  PieChart,
  TrendingDown,
  Activity,
  Globe2,
  Map,
  Navigation,
  Compass,
  Clock3
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe2 },
    { id: 'healthcare', name: 'Healthcare', icon: Shield },
    { id: 'finance', name: 'Finance', icon: BarChart },
    { id: 'manufacturing', name: 'Manufacturing', icon: Target },
    { id: 'retail', name: 'Retail', icon: Users },
    { id: 'education', name: 'Education', icon: Brain }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Code },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'cloud', name: 'Cloud Migration', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'analytics', name: 'Data Analytics', icon: BarChart }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare AI Revolution: 90% Faster Diagnosis',
      client: 'MedTech Solutions',
      industry: 'healthcare',
      service: 'ai',
      challenge: 'Manual diagnosis processes were taking 3-4 hours per patient, causing delays in treatment and increasing costs.',
      solution: 'Implemented AI-powered diagnostic system with machine learning algorithms for image analysis and symptom correlation.',
      results: [
        '90% reduction in diagnosis time',
        '95% accuracy in preliminary diagnoses',
        '40% cost reduction in diagnostic processes',
        '300% increase in patient throughput'
      ],
      metrics: {
        timeSaved: '2.5 hours per diagnosis',
        costReduction: '$2.3M annually',
        accuracy: '95%',
        roi: '340%'
      },
      testimonial: {
        quote: 'The AI diagnostic system has revolutionized our workflow. We can now serve more patients with higher accuracy.',
        author: 'Dr. Sarah Johnson',
        role: 'Chief Medical Officer',
        company: 'MedTech Solutions'
      },
      image: '/images/case-studies/healthcare-ai.webp',
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: 2,
      title: 'Financial Services: Real-time Fraud Detection',
      client: 'SecureBank International',
      industry: 'finance',
      service: 'ai',
      challenge: 'Traditional fraud detection systems had 15% false positive rate and missed 8% of actual fraud cases.',
      solution: 'Deployed advanced AI fraud detection system with real-time transaction analysis and behavioral pattern recognition.',
      results: [
        '85% reduction in false positives',
        '92% fraud detection accuracy',
        '60% faster response time',
        '50% reduction in fraud losses'
      ],
      metrics: {
        timeSaved: 'Real-time detection',
        costReduction: '$5.8M in prevented losses',
        accuracy: '92%',
        roi: '280%'
      },
      testimonial: {
        quote: 'Our fraud detection capabilities have improved dramatically. We can now protect our customers better than ever.',
        author: 'Michael Chen',
        role: 'Head of Security',
        company: 'SecureBank International'
      },
      image: '/images/case-studies/finance-fraud.webp',
      duration: '4 months',
      team: '8 specialists'
    },
    {
      id: 3,
      title: 'Manufacturing: Predictive Maintenance AI',
      client: 'Industrial Dynamics Corp',
      industry: 'manufacturing',
      service: 'ai',
      challenge: 'Unexpected equipment failures were causing 15% production downtime and $2M in annual losses.',
      solution: 'Implemented AI-powered predictive maintenance system with IoT sensors and machine learning algorithms.',
      results: [
        '70% reduction in unplanned downtime',
        '45% increase in equipment lifespan',
        '30% reduction in maintenance costs',
        '25% improvement in overall efficiency'
      ],
      metrics: {
        timeSaved: '2 weeks per maintenance cycle',
        costReduction: '$1.8M annually',
        accuracy: '88%',
        roi: '220%'
      },
      testimonial: {
        quote: 'Predictive maintenance has transformed our operations. We can now prevent failures before they happen.',
        author: 'Jennifer Martinez',
        role: 'Operations Director',
        company: 'Industrial Dynamics Corp'
      },
      image: '/images/case-studies/manufacturing-ai.webp',
      duration: '8 months',
      team: '15 specialists'
    },
    {
      id: 4,
      title: 'Cloud Migration: Zero-Downtime Transformation',
      client: 'TechStart Inc',
      industry: 'retail',
      service: 'cloud',
      challenge: 'Legacy on-premises infrastructure was limiting scalability and causing frequent outages during peak seasons.',
      solution: 'Executed comprehensive cloud migration strategy with microservices architecture and automated scaling.',
      results: [
        'Zero downtime during migration',
        '300% improvement in scalability',
        '60% reduction in infrastructure costs',
        '99.9% uptime achieved'
      ],
      metrics: {
        timeSaved: '3 months faster deployment',
        costReduction: '$1.2M annually',
        accuracy: '100%',
        roi: '180%'
      },
      testimonial: {
        quote: 'The cloud migration was seamless. Our platform now handles peak traffic effortlessly.',
        author: 'David Park',
        role: 'CTO',
        company: 'TechStart Inc'
      },
      image: '/images/case-studies/cloud-migration.webp',
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: 5,
      title: 'Cybersecurity: Advanced Threat Protection',
      client: 'Global Enterprises Ltd',
      industry: 'finance',
      service: 'security',
      challenge: 'Sophisticated cyber attacks were bypassing traditional security measures, putting sensitive data at risk.',
      solution: 'Deployed AI-powered cybersecurity suite with behavioral analysis and real-time threat intelligence.',
      results: [
        '98% threat detection accuracy',
        '85% reduction in security incidents',
        'Real-time threat response',
        'Zero data breaches in 12 months'
      ],
      metrics: {
        timeSaved: 'Instant threat detection',
        costReduction: '$3.5M in prevented damages',
        accuracy: '98%',
        roi: '250%'
      },
      testimonial: {
        quote: 'Our security posture has never been stronger. The AI system catches threats we never saw before.',
        author: 'Lisa Thompson',
        role: 'CISO',
        company: 'Global Enterprises Ltd'
      },
      image: '/images/case-studies/cybersecurity.webp',
      duration: '3 months',
      team: '6 specialists'
    },
    {
      id: 6,
      title: 'Data Analytics: Business Intelligence Revolution',
      client: 'RetailMax Corporation',
      industry: 'retail',
      service: 'analytics',
      challenge: 'Scattered data across multiple systems made it impossible to get real-time business insights.',
      solution: 'Built comprehensive data analytics platform with AI-powered insights and real-time dashboards.',
      results: [
        'Real-time business insights',
        '40% improvement in decision speed',
        '25% increase in sales',
        '50% reduction in reporting time'
      ],
      metrics: {
        timeSaved: '2 hours per report',
        costReduction: '$800K annually',
        accuracy: '95%',
        roi: '190%'
      },
      testimonial: {
        quote: 'Data-driven decisions have transformed our business. We can now see opportunities we never knew existed.',
        author: 'Robert Kim',
        role: 'VP of Analytics',
        company: 'RetailMax Corporation'
      },
      image: '/images/case-studies/data-analytics.webp',
      duration: '7 months',
      team: '14 specialists'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    return matchesIndustry && matchesService;
  });

  const stats = [
    { icon: Users, value: '500+', label: 'Projects Completed' },
    { icon: Award, value: '99%', label: 'Client Satisfaction' },
    { icon: TrendingUp, value: '250%', label: 'Average ROI' },
    { icon: Clock, value: '24/7', label: 'Support Available' }
  ];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Case Studies - Zion Tech Group"
        description="Explore our successful case studies showcasing real-world AI, cloud, and cybersecurity solutions that delivered measurable results for our clients."
        keywords={["case studies","AI solutions","cloud migration","cybersecurity","success stories","client results"]}
        canonicalUrl="https://ziontechgroup.com/case-studies"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with AI, cloud, and cybersecurity solutions that deliver real, measurable results.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-4">Filter by Industry</h3>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry) => (
                      <button
                        key={industry.id}
                        onClick={() => setSelectedIndustry(industry.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          selectedIndustry === industry.id
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        <industry.icon className="w-4 h-4" />
                        {industry.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-4">Filter by Service</h3>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          selectedService === service.id
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        <service.icon className="w-4 h-4" />
                        {service.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:scale-105 transition-all duration-300">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        {industries.find(i => i.id === study.industry)?.name}
                      </div>
                      <div className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                        {services.find(s => s.id === study.service)?.name}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                    <p className="text-cyan-400 font-medium mb-4">{study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{study.metrics.roi}</div>
                        <div className="text-sm text-gray-400">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{study.metrics.accuracy}</div>
                        <div className="text-sm text-gray-400">Accuracy</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 mb-6">
                      <p className="text-gray-300 text-sm italic mb-2">"{study.testimonial.quote}"</p>
                      <div className="text-sm">
                        <div className="text-white font-medium">{study.testimonial.author}</div>
                        <div className="text-gray-400">{study.testimonial.role}, {study.testimonial.company}</div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven AI, cloud, and cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Start Your Project
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;