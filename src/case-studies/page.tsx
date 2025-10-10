'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { ArrowRight, ExternalLink, Filter, Search, TrendingUp, Users, Clock, DollarSign, CheckCircle, Star, Brain, Code, Shield, BarChart, Zap, Eye, Download } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const categories = [
    { id: 'all', name: 'All Case Studies', count: 8 },
    { id: 'ai-solutions', name: 'AI Solutions', count: 4 },
    { id: 'it-services', name: 'IT Services', count: 3 },
    { id: 'digital-transformation', name: 'Digital Transformation', count: 1 }
  ];

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'retail', name: 'Retail' },
    { id: 'technology', name: 'Technology' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnosis System',
      client: 'MedTech Solutions Inc.',
      industry: 'Healthcare',
      category: 'ai-solutions',
      industryId: 'healthcare',
      duration: '6 months',
      teamSize: '12 experts',
      challenge: 'MedTech Solutions needed to reduce diagnostic errors and improve patient outcomes by implementing AI-powered medical imaging analysis.',
      solution: 'We developed a comprehensive AI system using deep learning algorithms to analyze medical images, including X-rays, MRIs, and CT scans, with 99.2% accuracy.',
      results: [
        '99.2% diagnostic accuracy (vs 85% manual)',
        '60% reduction in diagnostic time',
        '40% decrease in false positives',
        '$2.3M annual cost savings',
        '50,000+ patients served'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'AWS', 'Docker'],
      image: '/api/placeholder/600/400',
      featured: true,
      testimonial: {
        quote: 'Zion Tech Group transformed our diagnostic capabilities. The AI system has been a game-changer for our practice.',
        author: 'Dr. Sarah Johnson',
        role: 'Chief Medical Officer',
        company: 'MedTech Solutions Inc.'
      }
    },
    {
      id: 2,
      title: 'Financial Fraud Detection Platform',
      client: 'Global Finance Corp',
      industry: 'Finance',
      category: 'ai-solutions',
      industryId: 'finance',
      duration: '4 months',
      teamSize: '8 experts',
      challenge: 'Global Finance Corp needed to detect fraudulent transactions in real-time to prevent financial losses and protect customers.',
      solution: 'We built a real-time fraud detection system using machine learning algorithms that analyzes transaction patterns and flags suspicious activities.',
      results: [
        '95% fraud detection accuracy',
        '80% reduction in false positives',
        'Real-time processing (<100ms)',
        '$15M prevented fraud losses',
        '99.9% system uptime'
      ],
      technologies: ['Python', 'Apache Kafka', 'Redis', 'PostgreSQL', 'Kubernetes'],
      image: '/api/placeholder/600/400',
      featured: true,
      testimonial: {
        quote: 'The fraud detection system has saved us millions and significantly improved our security posture.',
        author: 'Michael Chen',
        role: 'VP of Security',
        company: 'Global Finance Corp'
      }
    },
    {
      id: 3,
      title: 'Manufacturing Process Optimization',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      category: 'ai-solutions',
      industryId: 'manufacturing',
      duration: '8 months',
      teamSize: '15 experts',
      challenge: 'AutoParts Manufacturing wanted to optimize their production line efficiency and reduce waste through predictive maintenance.',
      solution: 'We implemented IoT sensors and AI algorithms to monitor equipment health and predict maintenance needs, optimizing production schedules.',
      results: [
        '25% increase in production efficiency',
        '30% reduction in downtime',
        '20% decrease in maintenance costs',
        '15% reduction in waste',
        'ROI of 300% in first year'
      ],
      technologies: ['Python', 'TensorFlow', 'IoT Sensors', 'Azure IoT', 'Power BI'],
      image: '/api/placeholder/600/400',
      featured: false,
      testimonial: {
        quote: 'The AI optimization system has revolutionized our manufacturing process.',
        author: 'Robert Martinez',
        role: 'Plant Manager',
        company: 'AutoParts Manufacturing'
      }
    },
    {
      id: 4,
      title: 'Cloud Migration & Infrastructure Modernization',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      category: 'it-services',
      industryId: 'retail',
      duration: '5 months',
      teamSize: '10 experts',
      challenge: 'RetailMax needed to migrate their legacy systems to the cloud and modernize their infrastructure for better scalability.',
      solution: 'We designed and executed a comprehensive cloud migration strategy using AWS, implementing microservices architecture and CI/CD pipelines.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment times',
        'Auto-scaling capabilities',
        'Enhanced security posture'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      image: '/api/placeholder/600/400',
      featured: false,
      testimonial: {
        quote: 'The cloud migration exceeded our expectations. Our systems are now more reliable and cost-effective.',
        author: 'Lisa Thompson',
        role: 'CTO',
        company: 'RetailMax Corporation'
      }
    },
    {
      id: 5,
      title: 'Cybersecurity Enhancement Program',
      client: 'TechStart Inc.',
      industry: 'Technology',
      category: 'it-services',
      industryId: 'technology',
      duration: '3 months',
      teamSize: '6 experts',
      challenge: 'TechStart needed to strengthen their cybersecurity posture to protect against increasing cyber threats.',
      solution: 'We implemented a comprehensive security framework including threat detection, incident response, and security training programs.',
      results: [
        'Zero security incidents',
        '100% compliance achieved',
        '24/7 threat monitoring',
        'Employee security training',
        'Automated incident response'
      ],
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Security Analytics'],
      image: '/api/placeholder/600/400',
      featured: false,
      testimonial: {
        quote: 'Our security posture has never been stronger. The team did an excellent job.',
        author: 'David Kim',
        role: 'Security Director',
        company: 'TechStart Inc.'
      }
    },
    {
      id: 6,
      title: 'E-commerce AI Recommendation Engine',
      client: 'ShopSmart Online',
      industry: 'Retail',
      category: 'ai-solutions',
      industryId: 'retail',
      duration: '4 months',
      teamSize: '9 experts',
      challenge: 'ShopSmart wanted to increase sales and improve customer experience through personalized product recommendations.',
      solution: 'We developed a sophisticated recommendation engine using collaborative filtering and content-based algorithms.',
      results: [
        '35% increase in conversion rate',
        '25% boost in average order value',
        '40% improvement in customer satisfaction',
        '60% increase in repeat purchases',
        'ROI of 400% in 6 months'
      ],
      technologies: ['Python', 'Scikit-learn', 'Apache Spark', 'Redis', 'React'],
      image: '/api/placeholder/600/400',
      featured: true,
      testimonial: {
        quote: 'The recommendation engine has transformed our business. Sales have never been better.',
        author: 'Jennifer Lee',
        role: 'VP of Marketing',
        company: 'ShopSmart Online'
      }
    },
    {
      id: 7,
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'LogisticsPro Ltd',
      industry: 'Manufacturing',
      category: 'it-services',
      industryId: 'manufacturing',
      duration: '6 months',
      teamSize: '11 experts',
      challenge: 'LogisticsPro needed better insights into their operations to optimize routes and reduce costs.',
      solution: 'We built a comprehensive BI platform with real-time dashboards and predictive analytics for logistics optimization.',
      results: [
        '20% reduction in fuel costs',
        '15% improvement in delivery times',
        'Real-time operational visibility',
        'Predictive maintenance alerts',
        'Data-driven decision making'
      ],
      technologies: ['Tableau', 'Python', 'PostgreSQL', 'Apache Airflow', 'Docker'],
      image: '/api/placeholder/600/400',
      featured: false,
      testimonial: {
        quote: 'The BI platform has given us unprecedented visibility into our operations.',
        author: 'Mark Wilson',
        role: 'Operations Director',
        company: 'LogisticsPro Ltd'
      }
    },
    {
      id: 8,
      title: 'Complete Digital Transformation',
      client: 'LegacyCorp Industries',
      industry: 'Manufacturing',
      category: 'digital-transformation',
      industryId: 'manufacturing',
      duration: '12 months',
      teamSize: '20 experts',
      challenge: 'LegacyCorp needed a complete digital transformation to modernize their operations and compete in the digital age.',
      solution: 'We executed a comprehensive digital transformation including cloud migration, AI implementation, and process automation.',
      results: [
        '40% increase in operational efficiency',
        '50% reduction in manual processes',
        'Cloud-first architecture',
        'AI-powered insights',
        'Modern user experience'
      ],
      technologies: ['AWS', 'AI/ML', 'Microservices', 'React', 'Kubernetes'],
      image: '/api/placeholder/600/400',
      featured: true,
      testimonial: {
        quote: 'The digital transformation has positioned us for future growth and success.',
        author: 'CEO',
        role: 'Chief Executive Officer',
        company: 'LegacyCorp Industries'
      }
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const categoryMatch = selectedCategory === 'all' || study.category === selectedCategory;
    const industryMatch = selectedIndustry === 'all' || study.industryId === selectedIndustry;
    return categoryMatch && industryMatch;
  });

  const featuredStudies = caseStudies.filter(study => study.featured);

  return (
    <>
      <SEOOptimizer
        title="Case Studies - Success Stories | Zion Tech Group"
        description="Explore our successful AI and IT implementations. Real case studies showcasing how we've helped businesses achieve their goals."
        keywords={['case studies', 'success stories', 'AI implementation', 'IT solutions', 'client results', 'business transformation']}
        canonicalUrl="https://ziontechgroup.com/case-studies"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Success <span className="text-cyan-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real results from real clients. Discover how we've helped businesses 
              transform their operations with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#case-studies"
                className="cyber-button inline-flex items-center justify-center"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Case Studies
              </a>
              <a href="/contact"
                className="cyber-button-secondary inline-flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Your Project
              </a>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured <span className="text-purple-400">Case Studies</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Our most impactful client success stories
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-600/50 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <Brain className="w-16 h-16 text-cyan-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Featured
                      </span>
                      <span className="text-cyan-400 text-sm">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{study.client}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {study.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        {study.teamSize}
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      {study.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                    <a
                      href={`#case-study-${study.id}`}
                      className="w-full cyber-button text-center block"
                    >
                      Read Full Case Study
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section id="case-studies" className="py-16 px-4 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All <span className="text-cyan-400">Case Studies</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Comprehensive collection of our client success stories
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none"
                >
                  {industries.map((industry) => (
                    <option key={industry.id} value={industry.id}>
                      {industry.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Case Study Listings */}
            <div className="space-y-8 max-w-6xl mx-auto">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} id={`case-study-${study.id}`} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                        {study.featured && (
                          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-6">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {study.client}
                        </span>
                        <span className="flex items-center">
                          <BarChart className="w-4 h-4 mr-1" />
                          {study.industry}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {study.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {study.teamSize}
                        </span>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, index) => (
                              <li key={index} className="flex items-center text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, index) => (
                              <span key={index} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-slate-700/50 rounded-lg p-6 mb-6">
                        <h4 className="text-white font-semibold mb-4">Client Testimonial</h4>
                        <blockquote className="text-gray-300 italic mb-4">
                          "{study.testimonial.quote}"
                        </blockquote>
                        <div className="border-t border-slate-600 pt-4">
                          <p className="text-white font-semibold">{study.testimonial.author}</p>
                          <p className="text-cyan-400 text-sm">{study.testimonial.role}</p>
                          <p className="text-gray-400 text-sm">{study.testimonial.company}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <a
                          href="/contact"
                          className="w-full cyber-button text-center block"
                        >
                          Start Similar Project
                        </a>
                        <a
                          href="/contact"
                          className="w-full cyber-button-secondary text-center block"
                        >
                          Download Case Study
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <BarChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
                <p className="text-gray-300">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Let's discuss how we can help you achieve similar results. 
                Our team is ready to transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Your Project
                </a>
                <a href="/services"
                  className="cyber-button-secondary inline-flex items-center justify-center"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default CaseStudiesPage;