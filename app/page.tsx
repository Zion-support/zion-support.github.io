import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Arrow Right } from 'lucide-react';
import { Arrow Right, Check Circle, Star, Users, Award, Shield, Brain, Cloud, Code, Smartphone, File Text, Message Circle, Link as Link Icon, Workflow, Check Circle } from 'lucide-react';

const Home Page: React.F C = () => {
  const [is Visible, set Is Visible] = use State(false);

  use Effect(() => {
    set Is Visible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Check Circle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const features = [
    {
      icon: Brain,
      title: 'A I-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with A W S, Azure, and Google Cloud expertise',
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

  const ai Services = [
    {
      title: 'A I Analytics Dashboard',
      description: 'Real-time business intelligence with predictive insights',
      price: '$299/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'A P I integration'],
      icon: Bar Chart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'A I Content Generator',
      description: 'Automated content creation for blogs, social media, and marketing',
      price: '$199/month',
      features: ['Multi-language support', 'S E O optimization', 'Brand voice training', 'Content scheduling'],
      icon: File Text,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'A I Customer Support',
      description: '24/7 intelligent customer service with natural language processing',
      price: '$399/month',
      features: ['Multi-channel support', 'Sentiment analysis', 'Escalation management', 'Performance analytics'],
      icon: Message Circle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'A I Workflow Automation',
      description: 'Streamline business processes with intelligent automation',
      price: '$249/month',
      features: ['Process mapping', 'Automated workflows', 'Integration A P Is', 'Performance monitoring'],
      icon: Workflow,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const it Services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to A W S, Azure, or Google Cloud',
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
      features: ['Responsive design', 'S E O optimization', 'Performance tuning', 'Maintenance support'],
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      price: 'Starting at $12,000',
      features: ['i O S & Android', 'Cross-platform', 'App store optimization', 'Push notifications'],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const micro Saas Products = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with A I insights',
      price: '$99/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Team collaboration'],
      icon: Bar Chart,
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
      description: 'A I-powered content creation and management platform',
      price: '$79/month',
      features: ['A I content generation', 'Multi-platform publishing', 'Brand consistency', 'Performance tracking'],
      icon: File Text,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Zion C R M Intelligence',
      description: 'Smart customer relationship management with A I insights',
      price: '$129/month',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Automation workflows'],
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (

      <H elmet>
        <t itle>Zion Tech Group - Advanced A I & I T Solutions | Leading Technology Company</t itle>
        <m eta name="description" content="Zion Tech Group provides cutting-edge A I solutions, cloud infrastructure, cybersecurity, and custom software development. Transform your business with our innovative technology services." />
        <m eta name="keywords" content="A I solutions, cloud computing, cybersecurity, software development, I T services, business automation, data analytics" />
        <m etaproperty="og:title" content="Zion Tech Group - Advanced A I & I T Solutions" />
        <m etaproperty="og:description" content="Leading technology company providing A I solutions, cloud infrastructure, and cybersecurity services." />
        <m etaproperty="og:type" content="website" />
        <m etaproperty="og:url" content="https://ziontechgroup.com" />
        <m eta name="twitter:card" content="summary_large_image" />
        <m eta name="twitter:title" content="Zion Tech Group - Advanced A I & I T Solutions" />
        <m eta name="twitter:description" content="Transform your business with cutting-edge A I and I T solutions." />
      </H elmet>
      
      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <d iv class Name="m ax-w-7xl mx-a u to px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <d iv class Name="t e x t-center">
            <h1 c lass Name="t e x t-4xl md:text-6xl font-bold text-white mb-6">
              Advanced A I & I T Solutions
            </h1>
            <p c lass Name="t e xt-xl t e xt-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence, cloud infrastructure, 
              and cybersecurity solutions tailored to your needs.
            </p>
            <d iv class Name="f l ex f l ex-col sm:flex-row gap-4 justify-center">
              <L ink
                to="/contact"
                class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <A rrow Rightclass Name="m l-2 h-5 w-5" />
              </L ink>
              <L ink
                to="/about"
                class Name="b o r d er border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </L ink>
            </d iv>
          </d iv>
        </d iv>
      </d iv>

  );
};

export default Home Page;
