'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  ArrowRight, Play, CheckCircle, Star, Shield, Award, 
  Brain, Cpu, Target, BarChart, MessageSquare, Phone, Mail,
  Users, Globe, Zap, TrendingUp, Clock, DollarSign;
} from 'lucide-react';
const HomePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence that transforms your business operations and drives innovation.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Cpu,
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex problem-solving and optimization.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with ISO 27001 certification and advanced threat protection.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Advanced analytics and insights that help you make data-driven decisions.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Target,
      title: 'Custom Solutions',
      description: 'Tailored solutions designed specifically for your business needs and objectives.',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: MessageSquare,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team to ensure your success.',
      color: 'from-pink-500 to-rose-600'
    }
  ];
  const stats = [
    { number: '500+', label: 'Successful Projects', icon: Target },
    { number: '100+', label: 'Enterprise Clients', icon: Users },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
  ];
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The AI solutions they implemented increased our efficiency by 300%.',
      rating: 5,
      company: 'TechCorp Inc.'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, DataFlow Systems',
      content: 'Their quantum computing solutions helped us solve complex optimization problems that were impossible before.',
      rating: 5,
      company: 'DataFlow Systems'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, CloudScale',
      content: 'The security implementation was flawless. We now have enterprise-grade protection with zero compromises.',
      rating: 5,
      company: 'CloudScale'
    }
  ];
  return (
    <React.Fragment /><Helmet /><title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /><Navigation />
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden" /><div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20" />
          <div className="absolute inset-0 cyber-grid" />
          <div className="container mx-auto px-4 relative z-10" /><div className="max-w-6xl mx-auto" /><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" /><div /><h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 cyber-text neon-pulse">
                    Transform Your Business with;
                    </h1><span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      AI & Quantum Computing</span>
                    </span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                    Leading provider of cutting-edge AI solutions, quantum computing, and digital transformation services. 
                    We help enterprises achieve unprecedented levels of efficiency and innovation.</p>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8" /><a;
                      href="tel:+13024640950"
                      className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                     /><Phone className="w-5 h-5 mr-2" />
                      Call (302) 464-0950;
                    </a>
                    <a;
                      href="mailto:kleber@ziontechgroup.com"
                      className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                     /><Mail className="w-5 h-5 mr-2" />
                      Get Started;
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-6" /><div className="flex items-center space-x-2" /><CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">300% Average ROI</span>
                    </div>
                    <div className="flex items-center space-x-2" /><CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Enterprise Security</span>
                    </div>
                    <div className="flex items-center space-x-2" /><CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">24/7 Support</span>
                    </div>
                  </div>
                </div>
                <div className="relative" /><div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-400/20" /><div className="text-center" /><div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center" /><Brain className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">AI Innovation Hub</h3>
                      <p className="text-gray-300 mb-6">
                        Experience the future of technology with our advanced AI and quantum computing solutions.</p>
                      </p>
                      <button className="cyber-button inline-flex items-center" /><Play className="w-5 h-5 mr-2" />
                        Watch Demo;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-16 bg-slate-800/50" /><div className="container mx-auto px-4" /><div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                </div><div key={index} className="text-center" /><div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4" /><stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.number}</div>
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20" /><div className="container mx-auto px-4" /><div className="text-center mb-16" /><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?</h2>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver ;
                solutions that transform businesses and drive real results.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                </div><div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-all duration-300" /><div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`} /><feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}</h3>
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}</p>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/50" /><div className="container mx-auto px-4" /><div className="text-center mb-16" /><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                What Our Clients Say</h2>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what industry leaders say about our solutions.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                </div><div key={index} className="cyber-card p-8" /><div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      </div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"</p>
                  </p>
                  <div className="flex items-center" /><div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4" /><span className="text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                      </span>
                    </div>
                    <div /><div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700" /><div className="container mx-auto px-4 text-center" /><h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?</h2>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join hundreds of enterprises that have already transformed their operations with our AI solutions. 
              Get started today with a free consultation.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /><a;
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
               /><Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950;
              </a>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
               /><Mail className="w-5 h-5 mr-2" />
                Email Us;
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default HomePage;
