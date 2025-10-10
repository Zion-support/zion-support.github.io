'use client';
import React from 'react';
<<<<<<< HEAD
import { Globe, Palette, Zap, Smartphone, Search, BarChart, Users, CheckCircle, Star, Clock, DollarSign, ArrowRight, Phone, Mail, MapPin, Code, Eye, Settings, Target, MessageSquare } from 'lucide-react';
=======
import { Globe, Palette, Zap, Smartphone, BarChart, Star, ArrowRight, Phone, Mail, CheckCircle, Code, Users } from 'lucide-react';
>>>>>>> cursor/website-audit-and-update-with-deployment-78fe
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIWebsiteBuilderPage: React.FC = () => {
  const features = [
<<<<<<< HEAD
    'AI-powered design generation',
    'Drag-and-drop interface',
    'Mobile-responsive templates',
    'SEO optimization tools',
    'E-commerce integration',
    'Analytics dashboard',
    'Custom domain support',
    'SSL certificate included',
    'Content management system',
    'Multi-language support',
    'A/B testing tools',
    'Performance optimization'
  ];

  const benefits = [
    'Build websites 10x faster',
    'No coding skills required',
    'Professional results guaranteed',
    'Mobile-first design approach',
    'SEO-ready out of the box',
    '24/7 customer support'
  ];

  const templates = [
    {
      name: 'Business Professional',
      category: 'Business',
      price: 'Free',
      features: ['Landing page', 'About us', 'Services', 'Contact form'],
      image: '/templates/business.jpg'
    },
    {
      name: 'E-commerce Store',
      category: 'E-commerce',
      price: '$29',
      features: ['Product catalog', 'Shopping cart', 'Payment integration', 'Order management'],
      image: '/templates/ecommerce.jpg'
    },
    {
      name: 'Portfolio Creative',
      category: 'Portfolio',
      price: '$19',
      features: ['Gallery showcase', 'Project details', 'Client testimonials', 'Contact form'],
      image: '/templates/portfolio.jpg'
    },
    {
      name: 'Restaurant Menu',
      category: 'Food & Beverage',
      price: '$24',
      features: ['Menu display', 'Online ordering', 'Reservation system', 'Location map'],
      image: '/templates/restaurant.jpg'
    },
    {
      name: 'Blog & News',
      category: 'Content',
      price: 'Free',
      features: ['Article layout', 'Categories', 'Search function', 'Social sharing'],
      image: '/templates/blog.jpg'
    },
    {
      name: 'SaaS Landing',
      category: 'Technology',
      price: '$39',
      features: ['Feature showcase', 'Pricing tables', 'Testimonials', 'Sign-up forms'],
      image: '/templates/saas.jpg'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      originalPrice: '$49',
      features: [
        '5 pages',
        '1 website',
        'Basic templates',
        'Mobile responsive',
        'SSL certificate',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$59',
      period: '/month',
      originalPrice: '$99',
      features: [
        'Unlimited pages',
        '3 websites',
        'Premium templates',
        'E-commerce features',
        'Advanced analytics',
        'SEO tools',
        'Priority support',
        'Custom domain'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$99',
      period: '/month',
      originalPrice: '$149',
      features: [
        'Everything in Professional',
        'Unlimited websites',
        'White-label options',
        'API access',
        'Advanced integrations',
        'A/B testing',
        '24/7 phone support',
        'Custom branding'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Small Business Owner',
      content: 'AI Website Builder Pro helped me create a professional website in just 2 hours. The AI suggestions were spot-on and the results exceeded my expectations.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Freelancer',
      content: 'The drag-and-drop interface is incredibly intuitive. I was able to build a stunning portfolio website without any coding knowledge.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      role: 'E-commerce Entrepreneur',
      content: 'The e-commerce features are fantastic. I had my online store up and running in a day, and the sales have been incredible.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Website Builder Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning, professional websites in minutes with AI-powered design generation, drag-and-drop interface, and built-in SEO optimization. No coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Users className="w-5 h-5" />
                <span>100,000+ websites created</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <span>4.8/5 rating</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Building Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Watch Demo
=======
    {
      title: 'AI-Powered Design',
      description: 'Generate beautiful, professional websites automatically using advanced AI algorithms.',
      icon: Palette
    },
    {
      title: 'Drag & Drop Interface',
      description: 'Intuitive drag-and-drop builder that makes website creation effortless.',
      icon: Globe
    },
    {
      title: 'Mobile Responsive',
      description: 'All websites are automatically optimized for mobile devices and tablets.',
      icon: Smartphone
    },
    {
      title: 'SEO Optimization',
      description: 'Built-in SEO tools and optimization to improve your search engine rankings.',
      icon: BarChart
    },
    {
      title: 'Fast Performance',
      description: 'Lightning-fast loading times with optimized code and CDN delivery.',
      icon: Zap
    },
    {
      title: 'Team Collaboration',
      description: 'Work together with your team in real-time on website projects.',
      icon: Users
    }
  ];

  const benefits = [
    '90% Faster Website Creation',
    '100% Mobile Responsive',
    'Built-in SEO Optimization',
    'No Coding Required',
    'Professional Templates',
    '24/7 Support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Website Builder <span className="text-cyan-400">Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning, professional websites in minutes with AI-powered design. 
              No coding required - just drag, drop, and deploy your perfect website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Start Building
              </a>
              <a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
                Call +1 302 464 0950
>>>>>>> cursor/website-audit-and-update-with-deployment-78fe
              </a>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Website Building Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your website with AI-powered intelligence.
            </p>
=======
      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300">Everything you need to build amazing websites</p>
>>>>>>> cursor/website-audit-and-update-with-deployment-78fe
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
<<<<<<< HEAD
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  {feature === 'AI-powered design generation' && 'Let AI analyze your content and automatically generate beautiful, professional designs tailored to your brand.'}
                  {feature === 'Drag-and-drop interface' && 'Intuitive visual editor that lets you build websites by simply dragging and dropping elements where you want them.'}
                  {feature === 'Mobile-responsive templates' && 'All templates are fully responsive and look perfect on desktop, tablet, and mobile devices.'}
                  {feature === 'SEO optimization tools' && 'Built-in SEO tools help your website rank higher in search engines with automatic optimization.'}
                  {feature === 'E-commerce integration' && 'Complete e-commerce solution with product catalogs, shopping carts, and payment processing.'}
                  {feature === 'Analytics dashboard' && 'Comprehensive analytics to track visitor behavior, conversion rates, and website performance.'}
                  {feature === 'Custom domain support' && 'Connect your own domain name and create a professional web presence.'}
                  {feature === 'SSL certificate included' && 'Free SSL certificate ensures your website is secure and trusted by visitors.'}
                  {feature === 'Content management system' && 'Easy-to-use CMS for updating content, adding pages, and managing your website.'}
                  {feature === 'Multi-language support' && 'Create multilingual websites to reach global audiences with built-in translation tools.'}
                  {feature === 'A/B testing tools' && 'Test different versions of your pages to optimize conversion rates and user experience.'}
                  {feature === 'Performance optimization' && 'Automatic optimization for fast loading times and excellent user experience.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Professional Templates
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from hundreds of professionally designed templates, or let AI create a custom design for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-blue-400/20 rounded-xl overflow-hidden hover:border-blue-400/40 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <Globe className="w-16 h-16 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{template.name}</h3>
                    <span className="text-blue-400 font-semibold">{template.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{template.category}</p>
                  <ul className="space-y-2">
                    {template.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Use Template
                  </button>
                </div>
=======
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/website-audit-and-update-with-deployment-78fe
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Website Builder Pro?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of website building with AI-powered design and seamless user experience.
            </p>
=======
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Website Builder Pro?</h2>
            <p className="text-xl text-gray-300">Proven results and cutting-edge technology</p>
>>>>>>> cursor/website-audit-and-update-with-deployment-78fe
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
<<<<<<< HEAD
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                <p className="text-gray-300">
                  {benefit === 'Build websites 10x faster' && 'AI-powered design generation and intuitive tools help you create professional websites in minutes, not days.'}
                  {benefit === 'No coding skills required' && 'Visual drag-and-drop interface means anyone can build a professional website without any technical knowledge.'}
                  {benefit === 'Professional results guaranteed' && 'Our AI ensures your website looks professional and modern, matching industry standards and best practices.'}
                  {benefit === 'Mobile-first design approach' && 'All templates and designs are optimized for mobile devices first, ensuring great user experience on all screens.'}
                  {benefit === 'SEO-ready out of the box' && 'Built-in SEO optimization ensures your website is ready to rank in search engines from day one.'}
                  {benefit === '24/7 customer support' && 'Get help whenever you need it with our dedicated support team available around the clock.'}
                </p>
=======
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
>>>>>>> cursor/website-audit-and-update-with-deployment-78fe
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<<<<<<< HEAD
      <section id="pricing" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Website Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your website building needs, from personal projects to business websites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/80 backdrop-blur-sm border rounded-xl p-8 relative ${plan.popular ? 'border-blue-400/40 ring-2 ring-blue-400/20' : 'border-gray-600/40'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</span>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
=======
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your needs</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">AI Website Builder Pro</h3>
              <div className="text-5xl font-bold text-cyan-400 mb-2">$89<span className="text-xl text-gray-300">/month</span></div>
              <p className="text-gray-300">Per website, billed monthly</p>
            </div>
            
            <ul className="space-y-4 mb-8 text-left max-w-md mx-auto">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Unlimited pages
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                AI-powered design
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Mobile responsive
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                SEO optimization
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                24/7 support
              </li>
            </ul>
            
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Get Started Today
            </a>
>>>>>>> cursor/website-audit-and-update-with-deployment-78fe
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Website Builder Pro has helped businesses and individuals create amazing websites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start building your professional website today with AI Website Builder Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="flex items-center justify-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
            </p>
          </div>
=======
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI Website Builder Pro to create stunning websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Start Building
            </a>
            <a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
              Call +1 302 464 0950
            </a>
          </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-78fe
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWebsiteBuilderPage;