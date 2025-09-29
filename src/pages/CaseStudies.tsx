import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';
import Header from '../components/Header';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Global Retail Chain AI Transformation',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'Optimize inventory management and customer experience across 500+ stores',
      solution: 'Implemented AI-powered demand forecasting and personalized recommendation engine',
      results: {
        revenue: '+45%',
        efficiency: '+60%',
        customer: '+35%'
      },
      duration: '6 months',
      teamSize: '12 specialists',
      technologies: ['Machine Learning', 'Computer Vision', 'Real-time Analytics', 'Cloud Infrastructure'],
      testimonial: {
        quote: "Zion Tech Group's AI solutions transformed our entire operation. We saw immediate results and continue to grow.",
        author: "Sarah Johnson",
        position: "CEO, RetailMax Corporation",
        rating: 5
      },
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Streamline patient data analysis and improve diagnostic accuracy',
      solution: 'Built comprehensive healthcare analytics platform with predictive modeling',
      results: {
        accuracy: '+80%',
        time: '-70%',
        cost: '-50%'
      },
      duration: '8 months',
      teamSize: '8 specialists',
      technologies: ['Data Science', 'Machine Learning', 'HIPAA Compliance', 'Real-time Processing'],
      testimonial: {
        quote: "The platform revolutionized our diagnostic process. Accuracy improved dramatically while reducing costs.",
        author: "Dr. Michael Chen",
        position: "CTO, MedTech Solutions",
        rating: 5
      },
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 3,
      title: 'Financial Services Security Overhaul',
      client: 'SecureBank International',
      industry: 'Financial Services',
      challenge: 'Enhance cybersecurity and ensure regulatory compliance',
      solution: 'Implemented zero-trust architecture with advanced threat detection',
      results: {
        security: '+95%',
        compliance: '100%',
        incidents: '-90%'
      },
      duration: '4 months',
      teamSize: '15 specialists',
      technologies: ['Cybersecurity', 'Zero Trust', 'Compliance Automation', 'Threat Intelligence'],
      testimonial: {
        quote: "Outstanding security implementation. We now have complete confidence in our digital infrastructure.",
        author: "Emily Rodriguez",
        position: "CISO, SecureBank International",
        rating: 5
      },
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Manufacturing IoT Integration',
      client: 'SmartManufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Connect legacy systems and optimize production processes',
      solution: 'Deployed comprehensive IoT solution with predictive maintenance',
      results: {
        uptime: '+40%',
        efficiency: '+55%',
        maintenance: '-60%'
      },
      duration: '10 months',
      teamSize: '10 specialists',
      technologies: ['IoT', 'Edge Computing', 'Predictive Analytics', 'System Integration'],
      testimonial: {
        quote: "The IoT solution transformed our manufacturing efficiency. Downtime reduced significantly.",
        author: "James Wilson",
        position: "Operations Director, SmartManufacturing Co.",
        rating: 5
      },
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99.8%', icon: Star },
    { label: 'Average ROI', value: '340%', icon: TrendingUp },
    { label: 'Team Members', value: '150+', icon: Users }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has transformed businesses across industries with AI, cybersecurity, and digital solutions." />
        <meta name="keywords" content="case studies, client success, AI transformation, cybersecurity, digital solutions, business results" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Discover how we've helped businesses across industries achieve extraordinary results with cutting-edge technology solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-zion-blue/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-zion-blue/30 transition-colors">
                  <stat.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                <div className="text-sm text-zion-slate-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Real results from real clients. See how we've transformed businesses across industries.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.filter(cs => cs.featured).map((caseStudy) => (
              <div key={caseStudy.id} className="card p-8 md:p-12 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-zion-cyan/20 px-3 py-1 rounded-full text-zion-cyan text-sm font-medium">
                        {caseStudy.industry}
                      </div>
                      <div className="text-zion-slate-light text-sm">
                        {caseStudy.duration} • {caseStudy.teamSize}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">{caseStudy.title}</h3>
                    <p className="text-lg text-zion-slate-light mb-6">
                      <strong className="text-white">Client:</strong> {caseStudy.client}
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                        <p className="text-zion-slate-light">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Solution:</h4>
                        <p className="text-zion-slate-light">{caseStudy.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(caseStudy.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-zion-cyan">{value}</div>
                          <div className="text-xs text-zion-slate-light capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseStudy.technologies.map((tech) => (
                        <span key={tech} className="bg-zion-purple/20 text-zion-purple-light px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <blockquote className="border-l-4 border-zion-cyan pl-4 italic text-zion-slate-light mb-4">
                      "{caseStudy.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="font-semibold text-white">{caseStudy.testimonial.author}</div>
                        <div className="text-sm text-zion-slate">{caseStudy.testimonial.position}</div>
                      </div>
                      <div className="flex ml-auto">
                        {[...Array(caseStudy.testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-64 object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Case Studies Grid */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">All Case Studies</h2>
            <p className="text-zion-slate-light">Browse our complete portfolio of successful projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="card hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm">
                      {caseStudy.industry}
                    </span>
                    <div className="flex items-center text-sm text-zion-slate-light">
                      <Clock className="w-4 h-4 mr-1" />
                      {caseStudy.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                  <p className="text-zion-slate-light mb-4 text-sm">{caseStudy.challenge}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-zion-slate">
                      <strong className="text-white">{caseStudy.client}</strong>
                    </div>
                    <Link 
                      to={`/case-studies/${caseStudy.id}`}
                      className="text-zion-cyan hover:text-zion-blue-light transition-colors flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results. Our team is ready to transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;