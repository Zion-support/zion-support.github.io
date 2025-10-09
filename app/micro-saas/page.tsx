import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Code, BarChart, Users, Rocket, Target, TrendingUp } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Solutions', icon: Rocket },
    { id: 'ai', name: 'AI-Powered', icon: Zap },
    { id: 'productivity', name: 'Productivity', icon: Target },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'automation', name: 'Automation', icon: Code }
  ];

  const saasProducts = [
    {
      id: 1,
      name: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      category: 'ai',
      price: '$29/month',
      features: ['Unlimited content generation', 'Multiple content types', 'SEO optimization', 'Brand voice customization'],
      rating: 4.9,
      users: '10K+',
      icon: Code,
      popular: true
    },
    {
      id: 2,
      name: 'Smart Analytics Dashboard',
      description: 'Comprehensive analytics and reporting tool with AI-powered insights and predictions.',
      category: 'analytics',
      price: '$49/month',
      features: ['Real-time analytics', 'Custom dashboards', 'AI predictions', 'Export capabilities'],
      rating: 4.8,
      users: '5K+',
      icon: BarChart,
      popular: false
    },
    {
      id: 3,
      name: 'Task Automation Hub',
      description: 'Automate repetitive tasks and workflows with intelligent automation tools.',
      category: 'automation',
      price: '$39/month',
      features: ['Workflow automation', 'API integrations', 'Custom triggers', 'Team collaboration'],
      rating: 4.7,
      users: '8K+',
      icon: Zap,
      popular: true
    },
    {
      id: 4,
      name: 'Customer Success Manager',
      description: 'AI-powered customer success platform to improve retention and satisfaction.',
      category: 'ai',
      price: '$59/month',
      features: ['Customer insights', 'Automated follow-ups', 'Success metrics', 'Integration hub'],
      rating: 4.9,
      users: '3K+',
      icon: Users,
      popular: false
    },
    {
      id: 5,
      name: 'Project Productivity Suite',
      description: 'Complete project management solution with AI-powered recommendations.',
      category: 'productivity',
      price: '$79/month',
      features: ['Project tracking', 'Team management', 'AI recommendations', 'Resource planning'],
      rating: 4.8,
      users: '12K+',
      icon: Target,
      popular: true
    },
    {
      id: 6,
      name: 'Security Monitor Pro',
      description: 'Advanced security monitoring and threat detection for SaaS applications.',
      category: 'automation',
      price: '$99/month',
      features: ['Real-time monitoring', 'Threat detection', 'Compliance reporting', 'Incident response'],
      rating: 4.9,
      users: '2K+',
      icon: Shield,
      popular: false
    }
  ];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return saasProducts;
    }
    return saasProducts.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Inc",
      content: "The AI Content Generator has revolutionized our content marketing. We've increased our output by 300% while maintaining quality.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "DataFlow Solutions",
      content: "Smart Analytics Dashboard gives us insights we never had before. The AI predictions are incredibly accurate.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      company: "Productivity Plus",
      content: "Task Automation Hub has saved us countless hours. The workflow automation is seamless and powerful.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of powerful micro SaaS solutions designed to boost productivity and drive business growth." />
        <meta name="keywords" content="micro SaaS, productivity tools, AI solutions, business automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused tools designed to solve specific business challenges and boost productivity. 
              Choose from our collection of AI-powered micro SaaS applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Solutions
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                    product.popular
                      ? 'border-cyan-400/50'
                      : 'border-white/20 hover:border-cyan-400/30'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-cyan-400 mb-4">
                      <product.icon className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm ml-2">
                        {product.rating} ({product.users} users)
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-cyan-400 mb-4">{product.price}</div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Users Say</span>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and discover how our micro SaaS solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;
