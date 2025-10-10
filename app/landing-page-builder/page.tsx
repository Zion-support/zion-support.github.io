'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
      icon: Wand2,
      title: 'AI-Powered Design',
      description: 'Generate stunning landing pages with AI assistance in minutes'},
    {
      icon: Palette,
      title: 'Drag & Drop Builder',
      description: 'Easy-to-use visual editor with no coding required'},
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with 99.9% uptime guarantee'},
    {
      icon: Monitor,
      title: 'Responsive Design',
      description: 'Perfect on all devices - desktop, tablet, and mobile'
    },
    {
      icon: Globe,
      title: 'SEO Optimized',
      description: 'Built-in SEO tools to rank higher in search results'},
    {
      icon: CheckCircle,
      title: 'A/B Testing',
      description: 'Test different versions to maximize conversions'}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}</div>
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            Landing Page</h1> <span className="text-cyan-400">Builder</span><p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Create high-converting landing pages in minutes with our AI-powered builder.</p>
            No coding required - just drag, drop, and launch.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <Link;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Layout className="w-5 h-5 mr-2" >Start Building</Layout>
            </Layout>
            <Link
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <Monitor className="w-5 h-5 mr-2" >View Templates</Monito>
            </Monitor>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
        {/* Features Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Powerful</h2> <span className="text-cyan-400">Features</span><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4"></div>
                  <feature.icon className="w-6 h-6 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}<p className="text-gray-300">{feature.description}</p>
              <Layout className="w-5 h-5 mr-2" />
              Start Building;
            </Link>
            <Link;
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Monitor className="w-5 h-5 mr-2" />
              View Templates;
            </Link>
          </div>,
        </div>,
,
        {/* Features Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">)
            Powerful <span className="text-cyan-400">Features</span>)
          </h2>)
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">),
            {features.map((feature, index) => (</div>
              <div;
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover: border-cyan-400/50 transition-all duration-300",
              >,</div>
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">,</div>
                  <feature.icon className="w-6 h-6 text-white" />,
                </div>,
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
        {/* Templates Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Professional <span className="text-cyan-400">Templates<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{templates.map((template, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <h3 className="text-xl font-semibold text-white mb-2">{template.category}<div className="text-cyan-400 font-bold text-lg mb-2">{template.count}<p className="text-gray-300 text-sm">{template.description}</p>
            Professional <span className="text-cyan-400">Templates</span>
          </h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {templates.map((template, index) => (</div>
              <div;
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-gray-600 hover: border-cyan-400/50 transition-all duration-300",
              >,</div>
                <h3 className="text-xl font-semibold text-white mb-2">{template.category}</h3>
                <div className="text-cyan-400 font-bold text-lg mb-2">{template.count}</div>
                <p className="text-gray-300 text-sm">{template.description}</p>
            Professional</h2> <span className="text-cyan-400">Templates</span><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{templates.map((template, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <h3 className="text-xl font-semibold text-white mb-2">{template.category}</h3><div className="text-cyan-400 font-bold text-lg mb-2">{template.count}</div><p className="text-gray-300 text-sm">{template.description}</p>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Landing Page?</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of businesses creating high-converting landing pages with our builder.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <Link;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" >Get Started Now</ArrowRight>
            </ArrowRight>
            <Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <Layout className="w-5 h-5 mr-2" >View Pricing</Layou>
            </Layout>
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started Now;
            </Link>
            <Link;
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Layout className="w-5 h-5 mr-2" />
              View Pricing;
            </Link>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;