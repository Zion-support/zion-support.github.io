import React from 'react';
import { SEO } from '../components/SEO';
import { Building, Factory, Heart, Car, Globe, Zap, ArrowRight, CheckCircle, Star, Users, TrendingUp, DollarSign, Clock, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'TechCorp Inc. - Digital Transformation Success',
      company: 'TechCorp Inc.',
      industry: 'Manufacturing',
      challenge: 'Legacy systems causing 40% downtime and $2M annual losses',
      solution: 'Implemented comprehensive AI-powered automation and cloud infrastructure',
      results: [
        '50% reduction in operational costs',
        '99.9% system uptime achieved',
        '3x faster decision making',
        '40% improvement in productivity'
      ],
      technologies: ['AI Automation', 'Cloud Migration', 'IoT Integration', 'Predictive Analytics'],
      duration: '6 months',
      teamSize: '15 engineers',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'HealthPlus Systems - AI Healthcare Revolution',
      company: 'HealthPlus Systems',
      industry: 'Healthcare',
      challenge: 'Medical device failures and inefficient patient care processes',
      solution: 'Developed AI-powered diagnostic tools and digital twin solutions',
      results: [
        '30% improvement in diagnostic accuracy',
        'Zero critical device failures',
        '25% improvement in patient outcomes',
        '40% reduction in patient wait times'
      ],
      technologies: ['AI Diagnostics', 'Digital Twins', 'IoT Monitoring', 'Machine Learning'],
      duration: '8 months',
      teamSize: '12 engineers',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'StartupXYZ - Rapid Growth Acceleration',
      company: 'StartupXYZ',
      industry: 'SaaS',
      challenge: 'Need for rapid scaling and market validation',
      solution: 'Implemented AI-powered analytics and automated growth tools',
      results: [
        '10x faster market validation',
        '3x increase in user engagement',
        '50% reduction in customer acquisition costs',
        'Secured Series A funding in 6 months'
      ],
      technologies: ['AI Analytics', 'Growth Automation', 'Cloud Infrastructure', 'Data Analytics'],
      duration: '4 months',
      teamSize: '8 engineers',
      featured: true,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'SmartCity Metro - Urban Infrastructure Optimization',
      company: 'SmartCity Metro',
      industry: 'Municipal',
      challenge: 'Traffic congestion and inefficient public services',
      solution: 'Created city-wide digital twin integrating all infrastructure systems',
      results: [
        '30% reduction in traffic congestion',
        '20% improvement in transit efficiency',
        '15% reduction in energy consumption',
        'Improved citizen satisfaction by 40%'
      ],
      technologies: ['Digital Twins', 'IoT Sensors', 'AI Analytics', 'Smart Infrastructure'],
      duration: '12 months',
      teamSize: '20 engineers',
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'FinTech Solutions - AI-Powered Risk Management',
      company: 'FinTech Solutions',
      industry: 'Financial Services',
      challenge: 'High fraud rates and manual risk assessment processes',
      solution: 'Implemented AI-powered fraud detection and automated risk assessment',
      results: [
        '80% reduction in fraud losses',
        '90% faster risk assessment',
        'Improved compliance by 95%',
        '25% reduction in operational costs'
      ],
      technologies: ['AI Fraud Detection', 'Machine Learning', 'Blockchain', 'Automation'],
      duration: '7 months',
      teamSize: '10 engineers',
      featured: false,
      color: 'from-emerald-500 to-green-500'
    },
    {
      title: 'ManufacturingCorp - Industry 4.0 Transformation',
      company: 'ManufacturingCorp',
      industry: 'Manufacturing',
      challenge: 'Outdated manufacturing processes and quality control issues',
      solution: 'Implemented comprehensive Industry 4.0 solution with IoT and AI',
      results: [
        '60% improvement in product quality',
        '45% reduction in production time',
        '30% reduction in waste',
        '25% increase in production capacity'
      ],
      technologies: ['IoT Sensors', 'AI Quality Control', 'Predictive Maintenance', 'Automation'],
      duration: '10 months',
      teamSize: '18 engineers',
      featured: false,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const industries = [
    { name: 'Manufacturing', icon: Factory, count: 15, color: 'from-blue-500 to-cyan-500' },
    { name: 'Healthcare', icon: Heart, count: 12, color: 'from-red-500 to-pink-500' },
    { name: 'Financial Services', icon: DollarSign, count: 8, color: 'from-emerald-500 to-green-500' },
    { name: 'Automotive', icon: Car, count: 6, color: 'from-purple-500 to-indigo-500' },
    { name: 'Smart Cities', icon: Building, count: 5, color: 'from-green-500 to-emerald-500' },
    { name: 'Energy', icon: Zap, count: 4, color: 'from-orange-500 to-red-500' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The AI-powered automation alone saved us $2M annually.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Medical Director',
      company: 'HealthPlus Systems',
      content: 'The AI diagnostic tools have improved our accuracy by 30% and reduced patient wait times significantly.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Founder & CEO',
      company: 'StartupXYZ',
      content: 'Their startup solutions helped us validate our product 10x faster and secure our Series A funding.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories from our clients across industries. See how our technology solutions have transformed businesses and delivered measurable results."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent"> Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how our technology solutions have transformed businesses across industries, 
              delivering measurable results and driving innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Start Your Success Story
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From manufacturing to healthcare, we've successfully delivered solutions across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{industry.name}</h3>
                <p className="text-xs text-cyan-400">{industry.count} case studies</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most impactful transformations that showcase the power of our technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.filter(cs => cs.featured).map((study, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Featured
                  </div>
                </div>
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Building className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="text-cyan-400">{study.industry}</span>
                  <span>•</span>
                  <span>{study.duration}</span>
                  <span>•</span>
                  <span>{study.teamSize} team</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Solution:</h4>
                    <p className="text-sm text-gray-300">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-purple-400 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete portfolio of successful transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${study.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Building className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <span className="text-cyan-400">{study.industry}</span>
                  <span>•</span>
                  <span>{study.duration}</span>
                </div>
                
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{study.challenge}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-400 mb-2 text-sm">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm"
                >
                  View Details
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear directly from our clients about their transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-slate-700/50 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-cyan-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our technology solutions can transform your business 
              and deliver measurable results like the ones you've seen here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Start Your Transformation
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
