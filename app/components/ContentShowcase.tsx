import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Brain, Cloud, Code, Zap, Shield, Users, TrendingUp, Award, Clock, DollarSign, Target, BarChart, Settings, Database, Lock, Globe, Smartphone, Headphones, FileText, Image, Video, Music, Palette, Search, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Cpu, HardDrive, Wifi, Monitor, Camera, Printer, MemoryStick, Wrench, Bell, Heart, ThumbsUp, Share2, Download, Upload, Activity, PieChart, LineChart, Layers, Atom, Sparkles } from 'lucide-react';

const ContentShowcase: React.FC = () => {
  const featuredServices = [
    {
      category: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform data into actionable insights with 99.9% accuracy',
          price: '$2,499/month',
          features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards'],
          popular: true,
          link: '/ai-business-intelligence'
        },
        {
          name: 'AI Content Generation',
          description: 'Create high-quality content at scale with AI assistance',
          price: '$899/month',
          features: ['Multi-language Support', 'Brand Voice Training', 'SEO Optimization'],
          popular: true,
          link: '/ai-content-generation'
        },
        {
          name: 'AI Customer Support',
          description: '24/7 intelligent customer service with human handoff',
          price: '$1,299/month',
          features: ['95% Resolution Rate', 'Multi-language NLP', 'Sentiment Analysis'],
          popular: false,
          link: '/ai-customer-support'
        }
      ]
    },
    {
      category: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamless migration to AWS, Azure, or GCP with zero downtime',
          price: 'Starting at $10,000',
          features: ['Zero Downtime', 'Cost Optimization', 'Security Implementation'],
          popular: true,
          link: '/cloud-migration'
        },
        {
          name: 'Cybersecurity Suite',
          description: 'Comprehensive security with 24/7 monitoring and threat detection',
          price: 'Starting at $8,000/month',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response'],
          popular: true,
          link: '/cybersecurity'
        },
        {
          name: 'IT Infrastructure',
          description: 'Scalable and secure infrastructure architecture',
          price: 'Starting at $15,000',
          features: ['Network Design', 'Server Configuration', 'Disaster Recovery'],
          popular: false,
          link: '/it-infrastructure'
        }
      ]
    },
    {
      category: 'Micro SAAS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'AI Project Manager',
          description: 'Intelligent project management with predictive analytics',
          price: '$299/month',
          features: ['Smart Task Assignment', 'Risk Prediction', 'Resource Optimization'],
          popular: true,
          link: '/ai-project-manager'
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automated social media content creation and scheduling',
          price: '$199/month',
          features: ['Content Generation', 'Post Scheduling', 'Engagement Analytics'],
          popular: true,
          link: '/ai-social-media-manager'
        },
        {
          name: 'AI Analytics Dashboard',
          description: 'Real-time business intelligence with predictive insights',
          price: '$399/month',
          features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards'],
          popular: false,
          link: '/ai-analytics-dashboard'
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'AI Project Manager Pro transformed our productivity. We saw a 300% increase in project completion rates within 3 months.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'Digital Marketing Co.',
      role: 'Marketing Director',
      content: 'The AI Social Media Manager saved us 20 hours per week and increased our engagement by 150%.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'E-commerce Solutions',
      role: 'Operations Manager',
      content: 'AI Analytics Dashboard gave us insights we never had before. Our decision-making is now data-driven.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const stats = [
    { number: '500+', label: 'Active Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '24/7', label: 'Support Available', icon: Award }
  ];

  return (
    <div className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join hundreds of enterprises that have transformed their operations with our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Featured Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to solve real business challenges
            </p>
          </div>

          <div className="space-y-16">
            {featuredServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="cyber-card hologram-card p-6 group hover:scale-105 transition-all duration-300 relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">{service.price}</div>
                        <div className="text-sm text-gray-400">Starting price</div>
                      </div>
                      
                      <div className="space-y-2">
                        <Link
                          to={service.link}
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                        >
                          Learn More
                        </Link>
                        <Link
                          to="/contact"
                          className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                        >
                          Start Free Trial
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real customers who have transformed their businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose from our comprehensive suite of AI and IT services. 
            Our experts are ready to help you find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
            >
              <span>Call: (302) 464-0950</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContentShowcase;