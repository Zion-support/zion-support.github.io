'use client';
import React, { useState, useEffect } from 'react';
import { Helmet  } from 'react-helmet-async';
import { Link  } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart  } from 'lucide-react';
const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with modern technologies',
      color: 'from-green-500 to-emerald-500'
    }
  ];
  const aiServices = [
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive insights',
      price: '$299/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration'],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Content Generator',
      description: 'Automated content creation for blogs, social media, and marketing',
      price: '$199/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content scheduling'],
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Customer Support',
      description: '24/7 intelligent customer service with natural language processing',
      price: '$399/month',
      features: ['Multi-channel support', 'Sentiment analysis', 'Escalation management', 'Performance analytics'],
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent automation',
      price: '$249/month',
      features: ['Process mapping', 'Automated workflows', 'Integration APIs', 'Performance monitoring'],
      icon: Workflow,
      color: 'from-orange-500 to-red-500'
    }
  ];
  const itServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud',
      price: 'Starting at $5,000',
      features: ['Zero-downtime migration', 'Security compliance', 'Cost optimization', '24/7 support'],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and implementation',
      price: 'Starting at $3,000',
      features: ['Vulnerability assessment', 'Penetration testing', 'Security policies', 'Staff training'],
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Custom Web Development',
      description: 'Modern, responsive web applications built to scale',
      price: 'Starting at $8,000',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance support'],
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      price: 'Starting at $12,000',
      features: ['iOS & Android', 'Cross-platform', 'App store optimization', 'Push notifications'],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500'
    }
  ];
  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI insights',
      price: '$99/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Team collaboration'],
      icon: BarChart,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection',
      price: '$149/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance reporting'],
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform',
      price: '$79/month',
      features: ['AI content generation', 'Multi-platform publishing', 'Brand consistency', 'Performance tracking'],
      icon: FileText,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'Smart customer relationship management with AI insights',
      price: '$129/month',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Automation workflows'],
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    }
  ];
  return (
    <>
      </><Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development. Transform your business with our innovative technology services." />
        <meta name="keywords" content="AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta property="og:description" content="Leading technology company providing AI solutions, cloud infrastructure, and cybersecurity services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI and IT solutions." />
      </Helmet>
      <d iv c las sName="m in-h-screen">
        {/* H ero Section */}
        <section c las sName="r elative o ver flow-h idden bg-grad ient-to-br from-slate-900 via-purple-900 to-slate-900">
          <d iv c las sName="a b solute inset-0 o pac ity-20" s tyle={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-o pac ity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></d iv>
          <d iv c las sName="r elative m ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <d iv c las sName="t ext-c enter">
              <h1 c las sName={`t ext-4xl md:t ext-6xl f ont-b old t ext-w hit-e mb-6 transition-all duration-1000 ${isVisible ? 'o pac ity-100 translate-y-0' : 'o pac ity-0 translate-y-10'}`}>
                Transform Y our B usiness with
                <s pan c las sName="b l ock bg-grad ient-to-r from-purple-400 to-pink-400 bg-clip-t ext t ext-transparen-t">
                  Advanced AI & IT Solutions
                </s pan>
              </h1>
              <p c las sName={`t ext-x-l t ext-gra-y-300 mb-8 m ax-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'o pac ity-100 translate-y-0' : 'o pac ity-0 translate-y-10'}`}>
                Leading technology company providing cutting-edge artificial intelligence, cloud infrastructure, 
                cybersecurity, and custom software development services to businesses worldwide.
              </p>
              <d iv c las sName={`f lex f lex-col sm:f lex-row g ap-4 j ustify-c enter transition-all duration-1000 delay-500 ${isVisible ? 'o pac ity-100 translate-y-0' : 'o pac ity-0 translate-y-10'}`}>
                <Link
                  to="/cont act"
                  c las sName="i n line-f lex items-c enter px-8 py-4 bg-grad ient-to-r from-purple-600 to-pink-600 t ext-w hit-e f ont-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Star ted T oday
                  <ArrowRight c las sName="m l-2 h-5 w-5" />
                </Link>
                <Link
                  to="/d emo"
                  c las sName="i n line-f lex items-c enter px-8 py-4 border-2 border-purple-400 t ext-purpl-e-400 f ont-semibold rounded-lg hover:bg-purple-400 hover:t ext-w hit-e transition-all duration-300 transform hover:scale-105"
                >
                  View Demo
                </Link>
              </d iv>
            </d iv>
          </d iv>
        </section>
        {/* Stats Section */}
        <section c las sName="p y-16 bg-gray-900">
          <d iv c las sName="m ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <d iv c las sName="g r id g rid-cols-2 md:g rid-cols-4 g ap-8">
              {stats.map((stat, index) => (
                <d iv key={index} c las sName="t ext-c enter">
                  <d iv c las sName="i n line-f lex items-c enter j ustify-c enter w-16 h-16 bg-grad ient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <stat.icon c las sName="h-8 w-8 t ext-w hite" />
                  </d iv>
                  <d iv c las sName="t ext-3xl f ont-b old t ext-w hit-e mb-2">{stat.number}</d iv>
                  <d iv c las sName="t ext-gray-400">{stat.label}</d iv>
                </d iv>
              ))}
            </d iv>
          </d iv>
        </section>
        {/* F eatures Section */}
        <section c las sName="p y-20 bg-grad ient-to-br from-slate-900 to-gray-900">
          <d iv c las sName="m ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <d iv c las sName="t ext-c enter mb-16">
              <h2 c las sName="t ext-3xl md:t ext-4xl f ont-b old t ext-w hit-e mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p c las sName="t ext-xl t ext-gra-y-300 m ax-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </d iv>
            <d iv c las sName="g r id g rid-cols-1 md:g rid-cols-2 lg:g rid-cols-4 g ap-8">
              {features.map((feature, index) => (
                <d iv key={index} c las sName="g roup">
                  <d iv c las sName="b g-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <d iv c las sName={`i nline-f lex items-c enter j ustify-c enter w-12 h-12 bg-grad ient-to-r ${feature.color} rounded-lg mb-4`}>
                      <feature.icon c las sName="h-6 w-6 t ext-w hite" />
                    </d iv>
                    <h3 c las sName="t ext-xl f ont-semibold t ext-w hit-e mb-3">{feature.title}</h3>
                    <p c las sName="t ext-gray-300">{feature.description}</p>
                  </d iv>
                </d iv>
              ))}
            </d iv>
          </d iv>
        </section>
        {/* AI Services Section */}
        <section c las sName="p y-20 bg-grad ient-to-br from-purple-900 to-slate-900">
          <d iv c las sName="m ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <d iv c las sName="t ext-c enter mb-16">
              <h2 c las sName="t ext-3xl md:t ext-4xl f ont-b old t ext-w hit-e mb-4">
                AI-Powered Solutions
              </h2>
              <p c las sName="t ext-xl t ext-gra-y-300 m ax-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations and drive growth.
              </p>
            </d iv>
            <d iv c las sName="g r id g rid-cols-1 md:g rid-cols-2 lg:g rid-cols-4 g ap-8">
              {aiServices.map((service, index) => (
                <d iv key={index} c las sName="g roup">
                  <d iv c las sName="b g-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <d iv c las sName={`i nline-f lex items-c enter j ustify-c enter w-12 h-12 bg-grad ient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon c las sName="h-6 w-6 t ext-w hite" />
                    </d iv>
                    <h3 c las sName="t ext-xl f ont-semibold t ext-w hit-e mb-3">{service.title}</h3>
                    <p c las sName="t ext-gray-300 mb-4">{service.description}</p>
                    <d iv c las sName="t ext-2xl f ont-b old t ext-purpl-e-400 mb-4">{service.price}</d iv>
                    <ul c las sName="s p ace-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} c las sName="f l ex items-c enter t ext-s-m t ext-gra-y-300">
                          <CheckCircle c las sName="h-4 w-4 t ext-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/cont act"
                      c las sName="w-f ull i nline-f lex items-c enter j ustify-c enter px-4 py-2 bg-grad ient-to-r from-purple-600 to-pink-600 t ext-w hit-e f ont-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Get Star ted
                      <ArrowRight c las sName="m l-2 h-4 w-4" />
                    </Link>
                  </d iv>
                </d iv>
              ))}
            </d iv>
          </d iv>
        </section>
        {/* IT Services Section */}
        <section c las sName="p y-20 bg-grad ient-to-br from-slate-900 to-gray-900">
          <d iv c las sName="m ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <d iv c las sName="t ext-c enter mb-16">
              <h2 c las sName="t ext-3xl md:t ext-4xl f ont-b old t ext-w hit-e mb-4">
                IT Infrastructure & Development
              </h2>
              <p c las sName="t ext-xl t ext-gra-y-300 m ax-w-3xl mx-auto">
                Comprehensive IT services to build, secure, and optimize your technology infrastructure.
              </p>
            </d iv>
            <d iv c las sName="g r id g rid-cols-1 md:g rid-cols-2 lg:g rid-cols-4 g ap-8">
              {itServices.map((service, index) => (
                <d iv key={index} c las sName="g roup">
                  <d iv c las sName="b g-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <d iv c las sName={`i nline-f lex items-c enter j ustify-c enter w-12 h-12 bg-grad ient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon c las sName="h-6 w-6 t ext-w hite" />
                    </d iv>
                    <h3 c las sName="t ext-xl f ont-semibold t ext-w hit-e mb-3">{service.title}</h3>
                    <p c las sName="t ext-gray-300 mb-4">{service.description}</p>
                    <d iv c las sName="t ext-2xl f ont-b old t ext-cya-n-400 mb-4">{service.price}</d iv>
                    <ul c las sName="s p ace-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} c las sName="f l ex items-c enter t ext-s-m t ext-gra-y-300">
                          <CheckCircle c las sName="h-4 w-4 t ext-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/cont act"
                      c las sName="w-f ull i nline-f lex items-c enter j ustify-c enter px-4 py-2 bg-grad ient-to-r from-cyan-600 to-blue-600 t ext-w hit-e f ont-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Get Q uote
                      <ArrowRight c las sName="m l-2 h-4 w-4" />
                    </Link>
                  </d iv>
                </d iv>
              ))}
            </d iv>
          </d iv>
        </section>
        {/* Micro SAAS Products Section */}
        <section c las sName="p y-20 bg-grad ient-to-br from-gray-900 to-purple-900">
          <d iv c las sName="m ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <d iv c las sName="t ext-c enter mb-16">
              <h2 c las sName="t ext-3xl md:t ext-4xl f ont-b old t ext-w hit-e mb-4">
                Micro SAAS Products
              </h2>
              <p c las sName="t ext-xl t ext-gra-y-300 m ax-w-3xl mx-auto">
                Ready-to-use software solutions designed to solve specific business challenges with minimal setup.
              </p>
            </d iv>
            <d iv c las sName="g r id g rid-cols-1 md:g rid-cols-2 lg:g rid-cols-4 g ap-8">
              {microSaasProducts.map((product, index) => (
                <d iv key={index} c las sName="g roup">
                  <d iv c las sName="b g-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <d iv c las sName={`i nline-f lex items-c enter j ustify-c enter w-12 h-12 bg-grad ient-to-r ${product.color} rounded-lg mb-4`}>
                      <product.icon c las sName="h-6 w-6 t ext-w hite" />
                    </d iv>
                    <h3 c las sName="t ext-xl f ont-semibold t ext-w hit-e mb-3">{product.title}</h3>
                    <p c las sName="t ext-gray-300 mb-4">{product.description}</p>
                    <d iv c las sName="t ext-2xl f ont-b old t ext-gree-n-400 mb-4">{product.price}</d iv>
                    <ul c las sName="s p ace-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} c las sName="f l ex items-c enter t ext-s-m t ext-gra-y-300">
                          <CheckCircle c las sName="h-4 w-4 t ext-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/cont act"
                      c las sName="w-f ull i nline-f lex items-c enter j ustify-c enter px-4 py-2 bg-grad ient-to-r from-green-600 to-emerald-600 t ext-w hit-e f ont-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                    >
                      Start Free T rial
                      <ArrowRight c las sName="m l-2 h-4 w-4" />
                    </Link>
                  </d iv>
                </d iv>
              ))}
            </d iv>
          </d iv>
        </section>
        {/* Cont act Section */}
        <section c las sName="p y-20 bg-grad ient-to-br from-slate-900 to-gray-900">
          <d iv c las sName="m ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <d iv c las sName="t ext-c enter">
              <h2 c las sName="t ext-3xl md:t ext-4xl f ont-b old t ext-w hit-e mb-4">
                Ready to Transform Y our B usiness?
              </h2>
              <p c las sName="t ext-xl t ext-gra-y-300 mb-8 m ax-w-3xl mx-auto">
                Cont act us today to discuss your project and discover how our AI and IT solutions can drive your success.
              </p>
              <d iv c las sName="f l ex f lex-col sm:f lex-row g ap-4 j ustify-c enter">
                <Link
                  to="/cont act"
                  c las sName="i n line-f lex items-c enter px-8 py-4 bg-grad ient-to-r from-purple-600 to-pink-600 t ext-w hit-e f ont-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Cont act Us N ow
                  <ArrowRight c las sName="m l-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  c las sName="i n line-f lex items-c enter px-8 py-4 border-2 border-purple-400 t ext-purpl-e-400 f ont-semibold rounded-lg hover:bg-purple-400 hover:t ext-w hit-e transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </d iv>
              <d iv c las sName="m t-8 t ext-gra-y-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </d iv>
            </d iv>
          </d iv>
        </section>      </d iv>
    </>
  );
};
export default HomePage;
