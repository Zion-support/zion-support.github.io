import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle, Star, Users, Award, Zap, Brain, Shield, Cloud } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const DemoPage = () => {
  const demoSections = [
    {
      title: 'AI Analytics Dashboard',
      description: 'Experience real-time data visualization and predictive analytics',
      icon: <Brain className="w-8 h-8" />,
      features: ['Real-time dashboards', 'Predictive modeling', 'Custom reports'],
      link: '/ai-analytics'
    },
    {
      title: 'Cybersecurity Suite',
      description: 'Advanced threat detection and security monitoring',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat detection', 'Security monitoring', 'Incident response'],
      link: '/cybersecurity-solutions'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Auto-scaling', 'Load balancing', 'Monitoring'],
      link: '/cloud-infrastructure'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'The AI analytics demo was incredible. We saw a 40% improvement in our decision-making process.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Solutions',
      content: 'Zion Tech Group\'s cybersecurity demo showed us vulnerabilities we never knew existed.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Marketing Agency',
      content: 'The cloud infrastructure demo convinced us to migrate our entire system.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Live Demo - Zion Tech Group | Experience Our AI & IT Solutions"
        description="Experience our cutting-edge AI solutions, cybersecurity suite, and cloud infrastructure through interactive demos. See how we can transform your business."
        keywords="demo, AI demo, cybersecurity demo, cloud demo, technology demonstration, business solutions"
        canonical="https://ziontechgroup.com/demo"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Play className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Interactive Demo</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Experience Our Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            See our AI-powered solutions, cybersecurity suite, and cloud infrastructure in action. 
            Interactive demos that showcase the real power of our technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#demos"
              variant="primary"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Start Demo
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Schedule Consultation
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Demo Sections */}
      <section id="demos" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Interactive Demos
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive suite of solutions through interactive demonstrations. 
              Each demo showcases real-world applications and business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoSections.map((demo, index) => (
              <FuturisticCard key={index} className="group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {demo.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {demo.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {demo.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {demo.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={demo.link}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-105"
                  >
                    <span>Try Demo</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our demos have helped businesses make informed decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to See More?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Schedule a personalized demo with our experts. We'll show you exactly how our solutions 
            can address your specific business challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group shadow-lg hover:scale-105"
            >
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View All Services
              <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;
