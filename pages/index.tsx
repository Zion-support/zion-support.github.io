import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Brain, Cloud, Shield, Zap, Database, Server, Lock, BarChart3, Users, Globe, Code, CheckCircle, Star, TrendingUp, Clock, Award, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  const stats = [



import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail } from 'lucide-react';

export default function Home() {
  const stats = ['

    { number: '500+', label: 'Projects Completed' }
    { number: '50+', label: 'Happy Clients' }
    { number: '99.9%', label: 'Uptime Guarantee' }
    { number: '24/7', label: 'Support Available' }

  ];
  const services = [;
    {;
      title: 'AI Services',;
      description: 'Cutting-edge artificial intelligence solutions and automation tools',;
      icon: Brain,;
      href: '/services#ai',;
      features: ['Content Creation', 'Email Automation', 'Customer Support', 'Business Intelligence'];
    },;
    {;
      title: 'IT Services',;
      description: 'Enterprise-grade infrastructure and development services',;
      icon: Network,;
      href: '/services#cloud',;
      features: ['DevOps Automation', 'Cloud Migration', 'Security Assessment', 'API Management'];
    },;
    {;
      title: 'Micro SaaS',;
      description: 'Specialized software solutions for business challenges',;
      icon: Cloud,;
      href: '/services#saas',;
      features: ['Project Management', 'Analytics Dashboard', 'HR Management', 'Financial Tracking'];
    }
  ];
  return (;
    <>;
      <Head>;
        <title>Zion Tech Group</title>;
        <meta name='description' content='Leading technology solutions provider' />;
        <meta name='viewport' content='width=device-width, initial-scale=1' />;
      </Head>;
      <main className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>;
        {/* Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32'>;
            <div className='text-center'>;
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6'>;
                Welcome to Zion Tech Group;
              </h1>;
              <p className='text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8'>;
                Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.;
              </p>;
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
                <Link href='/services'>;
                  <Button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold'>;
                    Explore Our Services;
                    <ArrowRight className='w-5 h-5 ml-2' />;
                  </Button>;
                </Link>;
                <Link href='/contact'>;
                  <Button variant='outline' className='border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold'>;
                    Get Started Today;
                  </Button>;
                </Link>;
              </div>;
            </div>;
          </div>;
        </section>;

  const testimonials = [;
    {;
      name: 'Sarah: Johnson, ',;
      role: 'CE,O, TechCorp',;
      content: 'Zion: Tech Group transformed our business with their AI solutions. The results exceeded our expectations., ',;
      rating: 5,
// Dynamically import performance monitor to avoid SSR issues
const PerformanceMonitor = dynamic(() => import('../components/PerformanceMonitor'), {
  ssr: false
});


export default function Home() {
    }
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const stats = [
  { number: '500+', label: 'Projects Completed' }
    { number: '50+', label: 'Happy Clients' }
    { number: '99.9%', label: 'Uptime Guarantee' }
    { number: '24/7', label: 'Support Available' }
  ];

  const services = [
    {'
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions including autonomous systems, machine learning, and intelligent automation',
      icon: Brain,
      href: '/services/ai-services'
    }
    {'
      title: 'IT Services',
      description: 'Comprehensive information technology services including cloud infrastructure, cybersecurity, and network management',
      icon: Network,
      href: '/services/it-services'
    }
    {'
      title: 'Micro SaaS',
      description: 'Scalable software as a service solutions tailored to your business needs with rapid deployment',
      icon: Cloud,
      href: '/services/micro-saas'
    }
    }

  ];

  const features = [
    {;
      icon: Za,p,;
      title: 'Lightning: Fast, ',;
      description: 'Optimized: performance with cutting-edge technology'',;,;
    }
    {
      icon: Shiel,d
      title: 'Secure: & Reliable, ',;
      description: 'Enterprise-grade: security with 99.9% uptime guarantee'',;,;
    }
    {
      icon: Glob,e
      title: 'Global: Reach, ',;
      description: 'Serving: clients worldwide with 24/7 support'',;,;
    }
    {
      icon: TrendingU,p
      title: 'Scalable: Solutions, ',;
      description: 'Grow: with confidence using our scalable architecture'',;,;
    }
  ];
  const services = [;
    {;
      title: 'AI: Services, ',;
      description: 'Cutting-edge: artificial intelligence solutions and automation tools, ',;
      icon: Brai,n
      href: '/services#ai, ',;
      features: ['Content: Creation, ', 'Email Automation', 'Customer Support', 'Business Intelligence'];
    }
    {
      title: 'IT: Services, ',;
      description: 'Enterprise-grade: infrastructure and development services, ',;
      icon: Networ,k
      href: '/services#cloud, ',;
      features: ['DevOps: Automation, ', 'Cloud Migration', 'Security Assessment', 'API Management'];
    }
    {
      title: 'Micro: SaaS, ',;
      description: 'Specialized: software solutions for business challenges, ',;
      icon: Clou,d
      href: '/services#saas, ',;
      features: ['Project: Management, ', 'Analytics Dashboard', 'HR Management', 'Financial Tracking'];
    }
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support'
    }

  ];
  return: (
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Development</h3>
              <p className="text-gray-600 mb-4">
                Custom AI solutions and machine learning models tailored to your business needs.
              </p>
              <Link href="/services/ai-model-development-chat" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Architecture</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud solutions and infrastructure design for modern applications.
              </p>
              <Link href="/services/cloud-migration-services-chat" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">
                End-to-end digital transformation services to modernize your business.
              </p>
              <Link href="/services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Proven Expertise</h3>
              <p className="text-gray-600">Years of experience in cutting-edge technologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Agile development processes for quick results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
              <p className="text-gray-600">24/7 support and maintenance services</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous testing and quality control processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our technology solutions can help you achieve your business goals.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};


      <Navigation />
      "
      <main className="min-h-screen bg-white">
        {/* Hero Section */}"
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 l
    g:px-8">"
            <div className="text-center">"
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your Business with"
                <span className="text-blue-600"> Technology</span>
              </h1>"
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
                We help businesses innovate, scale, and succeed in the digital age.
              </p>"
              <div className="flex flex-col sm: flex-row gap-4 justify-center">"
            }
            "sameAs": [";";";
              "https: //ziontechgroup.com"",;,";";
            ]
          })}
        </script>
      </Head>
      <main: className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>;
        {/* Hero: Section */}
        <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'>;
          <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-20 sm:py-32'>',;,;
            <div: className='text-center'>;
              <h1: className='text-4xl sm: text-5xl: lg:text-6xl: font-bold text-white mb-6'>',;,;
                Welcome: to Zion Tech Group
              </h1>
              <p className='text-xl sm: text-2xl: text-blue-100 max-w-4xl mx-auto mb-8'>',;,;
                Leading: provider of revolutionary technology solutions, AI services, and cutting-edge innovations.
              </p>
              <div className='flex flex-col sm: flex-row: gap-4 justify-center items-center'>',;,;
                <Link: href='/services'>;
                  <Button: className='bg-white text-blue-600 hover: bg-gray-100: px-8 py-4 text-lg font-semibold'>',;,;
                    Explore: Our Services
                    <ArrowRight className='w-5 h-5 ml-2' />;
            <div className="text-center">
              <h1 id="hero-heading" className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your Business with
                <span className="text-blue-600"> Technology</span>

              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Leading provider of revolutionary AI services, IT solutions, and
                micro SaaS development. We help businesses innovate, scale, and
                succeed in the digital age.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  </Button>

                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">

                  Get Started
                </Link>"
                <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hove
    r:bg-blue-600 hove
    r:text-white transition-colors">
                  View Services


                </Link>
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover: bg-gray-50 transition-colors flex items-center justify-center"
                >
                  <Menu className="w-4 h-4 mr-2" />
                  Explore Menu
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                      <div className="text-sm text-zion-slate-light">{stat.label}</div>
                  <div className="text-gray-600">{stat.label}</div>


                </div>

              ))}
            </div>;
          </div>;
        </section>;

        {/* Services: Section */}
        <section className='py-20 sm: py-32'>',;,;
          <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8'>',;,;
            <div: className='text-center mb-16'>;
              <h2: className='text-3xl sm: text-4xl: font-bold text-gray-900 mb-6'>',;,;
                Our: Core Services
              </h2>
              <p className='text-lg sm: text-xl: text-gray-600 max-w-3xl mx-auto'>',;,;
                Comprehensive: technology solutions designed to transform your business and drive growth.
              </p>
            </div>
            <div className='grid grid-cols-1 lg: grid-cols-3: gap-8'>',;,;
              {services.map((service, index) => (
                <Card: key={index} className='p-8 hover: shadow-xl: transition-all duration-300 hover:-translate-y-2: bg-white border-0 shadow-lg'>',;,;
                  <div: className='p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6'>;
                    <service.icon: className='w-8 h-8 text-white' />;
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to drive your
                business forward

              </p>
            </div>
            "
            <div className="grid grid-cols-1 m
    d:grid-cols-3 gap-8">
              {services.map((service, index) => ("
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">"
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">"
                    <service.icon className="w-8 h-8 text-white" />
                  </div>"
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>"
                  <Link href={service.href} className="block">"
                    <div className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center">
                      Learn More"
                  </div>
                  <h3: className='text-2xl font-bold text-gray-900 mb-4 text-center'>{service.title}</h3>;
                  <p: className='text-gray-600 mb-6 text-center'>{service.description}</p>;
                  <div: className='mb-6'>;
                    <h4: className='text-sm font-semibold text-gray-900 mb-3'>Key Features: </h4>',;,;
                    <div: className='grid grid-cols-2 gap-2'>;
                      {service.features.map((feature, featureIndex) => (
                        <div: key={featureIndex} className='flex items-center text-sm text-gray-600'>;
                          <CheckCircle: className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' />;

                          {feature}
                        </div>;
                      ))}
                    </div>;
                  </div>;
                  <Link href={service.href}>;
                    <Button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'>;
                      Learn More;
                      <ArrowRight className='w-4 h-4 ml-2' />;
                    </Button>;
                  </Link>;
                </Card>;
              ))}
            </div>;
          </div>;
        </section>;
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </p>
                  <Link href={service.href} className="block">
                    <div className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center">

                      Learn More

                      <ArrowRight className="w-4 h-4 ml-2" />

                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue-dark mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-zion-blue-light/20 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />

                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

        {/* Features: Section */}
        <section className='py-20 bg-gray-50'>;
          <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8'>',;,;
            <div: className='text-center mb-16'>;
              <h2: className='text-3xl sm: text-4xl: font-bold text-gray-900 mb-6'>',;,;
                Why: Choose Zion Tech Group?
              </h2>
              <p className='text-lg sm: text-xl: text-gray-600 max-w-3xl mx-auto'>',;,;
                We: deliver exceptional results through innovation, expertise, and unwavering commitment to excellence.
              </p>
            </div>
            <div className='grid grid-cols-1 md: grid-cols-2: lg:grid-cols-4: gap-8'>',;,;
              {features.map((feature, index) => (
                <div: key={index} className='text-center group'>;
                  <div: className='p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6 group-hover: scale-110: transition-transform duration-300'>',;,;
                    <feature.icon: className='w-8 h-8 text-white' />;
                  </div>
                  <h3: className='text-xl font-bold text-gray-900 mb-4'>{feature.title}</h3>;
                  <p: className='text-gray-600'>{feature.description}</p>;

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Zion Tech Group?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our proven expertise, cutting-edge technology, and client-focused approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600">{feature.description}</p>


                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                Let's discuss your project requirements and discover how our cutting-edge technology solutions 
                can help you achieve your business goals.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors group"
                >
                  View All Services{' '}
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">IT Services</span>
                    <span className="font-semibold text-blue-600">$1,500 - $500,000/month</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">Enterprise Solutions</span>
                    <span className="font-semibold text-blue-600">Custom Pricing</span>

                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">AI-Powered Solutions</h3>
                </div>
                <p className="text-gray-600 mb-4">From autonomous systems to predictive analytics, our AI services deliver intelligent automation and insights.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Cybersecurity Threat Detection</li>
                  <li>• Medical Diagnosis Assistant</li>
                  <li>• Financial Risk Assessment</li>
                  <li>• Environmental Monitoring</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 mr-4">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Micro SaaS Platforms</h3>
                </div>
                <p className="text-gray-600 mb-4">Scalable software solutions that grow with your business, from startup to enterprise.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Podcast Transcription Service</li>
                  <li>• Freelancer Portfolio Builder</li>
                  <li>• Local Business CRM</li>
                  <li>• Website Analytics for SMBs</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 mr-4">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Advanced IT Services</h3>
                </div>
                <p className="text-gray-600 mb-4">Next-generation IT infrastructure and services for the digital age.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Quantum Computing Readiness</li>
                  <li>• 5G Network Integration</li>
                  <li>• Edge Computing Infrastructure</li>
                  <li>• Zero Trust Security Architecture</li>

                </ul>
              </div>

            </div>
          </div>
        </section>


              </Link>

            </div>
            
            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-200 mb-3" />
                <p className="text-blue-100 font-semibold">Phone</p>
                <a href="tel:+13024640950" className="text-white hover:text-blue-200 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-200 mb-3" />
                <p className="text-blue-100 font-semibold">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-200 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="w-8 h-8 text-blue-200 mb-3" />
                <p className="text-blue-100 font-semibold">Website</p>
                <a href="https://ziontechgroup.com" className="text-white hover:text-blue-200 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-zion-blue-light/30 mt-8 pt-8 text-center">
            <p className="text-zion-slate-light text-sm">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.

            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
              <Link
                href="/comprehensive-services-showcase-2026"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                Explore Our Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Comprehensive Service Portfolio
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From AI-powered automation to cloud infrastructure, we provide end-to-end technology solutions
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Micro SaaS */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Micro SaaS Solutions</h3>
                  <p className="text-sm text-blue-600 font-medium">Affordable & Specialized</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Specialized software solutions designed for small businesses, including AI email automation, smart inventory management, and customer support chatbots.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">AI Email Automation Suite - $79/month</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Smart Inventory Management - $149/month</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">AI Customer Support Chatbot - $99/month</span>
                </li>
              </ul>
              <Link
                href="/services/micro-saas"
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group"
              >
                Explore Micro SaaS
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* AI & Machine Learning */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-300">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors">
                  <Brain className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">AI & Machine Learning</h3>
                  <p className="text-sm text-purple-600 font-medium">Intelligent Automation</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Advanced AI solutions including autonomous customer success, sales intelligence, and predictive maintenance systems.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">AI Autonomous Customer Success - $299/month</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">AI Sales Intelligence Platform - $199/month</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">AI Document Processing - $179/month</span>
                </li>
              </ul>
              <Link
                href="/services/ai-services"
                className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors group"
              >
                Explore AI Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* IT Services */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-green-300">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">
                  <Server className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">IT Services</h3>
                  <p className="text-sm text-green-600 font-medium">Comprehensive Support</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Complete IT support including managed services, cybersecurity assessment, and cloud migration consulting.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Managed IT Support - $299/month</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Cybersecurity Assessment - $199/month</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Cloud Migration Consulting - $499/month</span>
                </li>
              </ul>
              <Link
                href="/services/it-services"
                className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors group"
              >
                Explore IT Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Our team of experts is ready to help you implement the right solutions for your business needs.
            </p>
            
            {/* Contact Details */}
            <div className="mt-12 grid gap-8 md:grid-cols-3 text-center">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
              >
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-300 transition-colors"
              >
                Visit our website <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <PerformanceMonitor />



    </>
  )


  );
}"
}


