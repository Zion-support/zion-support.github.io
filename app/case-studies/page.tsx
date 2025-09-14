import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Clock, Users, Target, CheckCircle, Star } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI 2025 Global Enterprise Transformation",
      company: "Fortune 100 Global Manufacturing",
      industry: "Manufacturing & Technology",
      challenge: "Legacy systems, operational inefficiencies, and competitive pressure",
      solution: "AI 2025 Enterprise Automation Platform with quantum-neural hybrid architecture",
      results: {
        roi: "4,200%",
        efficiency: "94%",
        costReduction: "73%",
        customerSatisfaction: "96%"
      },
      description: "Revolutionary transformation of Fortune 100 company achieving $42B revenue increase and unprecedented operational efficiency.",
      technologies: ["AI 2025", "Quantum-Neural Hybrid", "Enterprise Automation", "Predictive Analytics"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 'manufacturing-giant',
      title: 'Global Manufacturing Transformation',
      company: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes were causing 15% defect rates and $2M+ annual losses',
      solution: 'Implemented AI-powered autonomous quality control systems with computer vision and predictive maintenance',
      results: {
        defectReduction: '99.8%',
        costSavings: '$5.2M',
        timeReduction: '85%',
        roi: '340%'
      },
      timeline: '6 months',
      testimonial: {
        quote: 'The AI implementation transformed our entire production line. We achieved near-perfect quality control while reducing costs significantly.',
        author: 'Sarah Chen',
        role: 'Chief Technology Officer'
      },
      technologies: ['Computer Vision', 'Predictive Analytics', 'IoT Sensors', 'Machine Learning'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 'financial-services',
      title: 'AI-Powered Risk Assessment Revolution',
      company: 'Leading Financial Institution',
      industry: 'Financial Services',
      challenge: 'Manual loan approval process was slow and inconsistent, leading to 25% approval time delays',
      solution: 'Deployed advanced AI models for real-time risk assessment and automated decision making',
      results: {
        approvalSpeed: '90%',
        accuracy: '98%',
        defaultReduction: '40%',
        revenue: '$12M'
      },
      timeline: '4 months',
      testimonial: {
        quote: 'Our AI risk assessment system has revolutionized our lending process, making it faster and more accurate than ever.',
        author: 'Michael Rodriguez',
        role: 'Head of Risk Management'
      },
      technologies: ['Machine Learning', 'Natural Language Processing', 'Credit Scoring', 'Real-time Analytics'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 'healthcare-system',
      title: 'Healthcare Diagnosis Enhancement',
      company: 'Regional Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Radiology diagnosis delays were affecting patient outcomes and increasing operational costs',
      solution: 'Integrated AI-powered medical imaging analysis with automated report generation',
      results: {
        diagnosisSpeed: '75%',
        accuracy: '96%',
        costReduction: '$3.8M',
        patientSatisfaction: '94%'
      },
      timeline: '8 months',
      testimonial: {
        quote: 'AI has transformed our diagnostic capabilities, enabling faster and more accurate patient care.',
        author: 'Dr. Jennifer Liu',
        role: 'Chief Medical Officer'
      },
      technologies: ['Medical AI', 'Computer Vision', 'Natural Language Processing', 'Clinical Decision Support'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 'retail-optimization',
      title: 'Smart Retail Inventory Management',
      company: 'International Retail Chain',
      industry: 'Retail',
      challenge: 'Inventory management inefficiencies were causing $8M in lost sales and overstock issues',
      solution: 'Implemented AI-driven demand forecasting and automated inventory optimization',
      results: {
        inventoryAccuracy: '99.2%',
        salesIncrease: '23%',
        wasteReduction: '60%',
        profit: '$15M'
      },
      timeline: '5 months',
      testimonial: {
        quote: 'The AI system perfectly predicted demand patterns, eliminating stockouts while reducing waste dramatically.',
        author: 'David Thompson',
        role: 'VP of Operations'
      },
      technologies: ['Demand Forecasting', 'Supply Chain AI', 'Real-time Analytics', 'Inventory Optimization'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 'energy-efficiency',
      title: 'Smart Energy Management System',
      company: 'Industrial Energy Company',
      industry: 'Energy',
      challenge: 'Energy consumption optimization was complex and manual, leading to 30% energy waste',
      solution: 'Deployed AI-powered energy management with predictive maintenance and automated optimization',
      results: {
        energySavings: '35%',
        maintenanceCosts: '50%',
        uptime: '99.5%',
        savings: '$7.2M'
      },
      timeline: '7 months',
      testimonial: {
        quote: 'AI transformed our energy management, achieving unprecedented efficiency and cost savings.',
        author: 'Amanda Foster',
        role: 'Energy Operations Director'
      },
      technologies: ['IoT Sensors', 'Predictive Maintenance', 'Energy Analytics', 'Automated Controls'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 'customer-service',
      title: 'Intelligent Customer Service Platform',
      company: 'Global Technology Company',
      industry: 'Technology',
      challenge: 'Customer service response times were slow and inconsistent, affecting customer satisfaction',
      solution: 'Implemented AI-powered chatbots and intelligent routing with human-AI collaboration',
      results: {
        responseTime: '80%',
        resolutionRate: '92%',
        customerSatisfaction: '96%',
        costSavings: '$4.5M'
      },
      timeline: '3 months',
      testimonial: {
        quote: 'Our AI customer service platform delivers instant, accurate responses while maintaining the human touch.',
        author: 'Robert Kim',
        role: 'Customer Experience Director'
      },
      technologies: ['Conversational AI', 'Natural Language Processing', 'Sentiment Analysis', 'Knowledge Management'],
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Real-world transformations powered by AI. Discover how our clients achieved unprecedented results through intelligent automation and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#case-studies" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
                View Case Studies <ArrowRight className="ml-2" />
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.5B</div>
              <div className="text-gray-600">Total Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore detailed success stories from across industries, showcasing the transformative power of AI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <span className="text-sm opacity-90">{study.timeline}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <p className="text-blue-100">{study.company}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Challenge & Solution */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Results:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 text-sm italic mb-2">"{study.testimonial.quote}"</p>
                        <div className="text-sm">
                          <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                          <div className="text-gray-600">{study.testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link 
                    href={`/case-studies/${study.id}`}
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center"
                  >
                    Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Spotlight */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI solutions tailored for specific industry challenges and opportunities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'Manufacturing', icon: '🏭', projects: '120+' },
              { name: 'Healthcare', icon: '🏥', projects: '85+' },
              { name: 'Finance', icon: '🏦', projects: '95+' },
              { name: 'Retail', icon: '🛒', projects: '78+' },
              { name: 'Energy', icon: '⚡', projects: '45+' },
              { name: 'Technology', icon: '💻', projects: '110+' }
            ].map((industry) => (
              <div key={industry.name} className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">{industry.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.projects} Projects</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROI Calculator CTA */}
      <div className="py-20 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate Your AI ROI
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Discover the potential impact of AI on your business with our interactive ROI calculator
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tools/roi-calculator" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
              Calculate ROI <TrendingUp className="ml-2" />
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The AI implementation exceeded our expectations. We achieved ROI within 6 months and transformed our entire operation.",
                author: "Jennifer Martinez",
                role: "CEO, TechCorp",
                rating: 5
              },
              {
                quote: "Zion Tech Group delivered a solution that perfectly fit our needs. The results speak for themselves - 95% efficiency improvement.",
                author: "David Chen",
                role: "CTO, InnovateLabs",
                rating: 5
              },
              {
                quote: "Outstanding expertise and execution. Our AI-powered system is now a competitive advantage that drives significant value.",
                author: "Sarah Johnson",
                role: "VP Operations, GlobalTech",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}