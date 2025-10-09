import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Zap, Target, BarChart, Users, ArrowRight, CheckCircle, Star, TrendingUp, Shield, Code, Database } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Marketing Automation',
      description: 'Revolutionize your marketing with AI-powered automation, personalization, and analytics.',
      icon: Target,
      features: ['Automated Campaign Management', 'Predictive Analytics', 'Personalized Content', 'ROI Optimization'],
      price: 'Starting at $2,999/month'
    },
    {
      title: 'AI Process Automation',
      description: 'Streamline business processes with intelligent automation solutions.',
      icon: Zap,
      features: ['Workflow Automation', 'Document Processing', 'Data Extraction', 'Smart Routing'],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable insights with advanced AI analytics.',
      icon: BarChart,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Automated Reporting'],
      price: 'Starting at $3,499/month'
    },
    {
      title: 'AI Customer Support',
      description: 'Enhance customer experience with intelligent support solutions.',
      icon: Users,
      features: ['24/7 AI Chatbots', 'Sentiment Analysis', 'Multi-language Support', 'Escalation Management'],
      price: 'Starting at $1,499/month'
    },
    {
      title: 'AI Security Solutions',
      description: 'Protect your business with AI-powered security and threat detection.',
      icon: Shield,
      features: ['Threat Detection', 'Anomaly Detection', 'Fraud Prevention', 'Security Monitoring'],
      price: 'Starting at $2,499/month'
    },
    {
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your specific business needs.',
      icon: Code,
      features: ['Custom Models', 'API Development', 'Integration Support', 'Ongoing Maintenance'],
      price: 'Custom Pricing'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      content: "Zion Tech Group's AI solutions increased our efficiency by 300% and reduced costs by 40%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "InnovateLab",
      content: "The AI automation they built for us has transformed our entire workflow. Outstanding results!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "FutureTech Inc",
      content: "Professional, reliable, and innovative. They delivered exactly what we needed and more.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI services to transform your business operations. Machine learning, automation, and intelligent solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 pt-24">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. From automation to analytics, we deliver intelligent solutions that drive growth.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  
                  <a
                    href="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Clients Say</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI solutions can accelerate your digital transformation and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Brain className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-5 h-5" />
                  Get Quote
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIServicesPage;
