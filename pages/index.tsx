import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  const stats = [



import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail } from 'lucide-react';

    { number: '24/7', label: 'Support Available' }

  ];
  const services = [
    {;
      title: 'AI Services',;
      description: 'Cutting-edge artificial intelligence solutions and automation tools',;
      icon: Brain,;
      href: '/services#ai',;
      features: ['Content Creation', 'Email Automation', 'Customer Support', 'Business Intelligence']},;
    {;
      title: 'IT Services',;
      description: 'Enterprise-grade infrastructure and development services',;
      icon: Network,;
      href: '/services#cloud',;
      features: ['DevOps Automation', 'Cloud Migration', 'Security Assessment', 'API Management']},;
    {;
      title: 'Micro SaaS',;
      description: 'Specialized software solutions for business challenges',;
      icon: Cloud,;
      href: '/services#saas',;
      features: ['Project Management', 'Analytics Dashboard', 'HR Management', 'Financial Tracking']}
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
        </section>},
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const stats = [
  { number: '500+', label: 'Projects Completed' }, { number: '50+', label: 'Happy Clients' }, { number: '99.9%', label: 'Uptime Guarantee' }, { number: '24/7', label: 'Support Available' } ];

  const services = [

      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions including autonomous systems, machine learning, and intelligent automation',
      icon: Brain }, {'
      title: 'IT Services',
      description: 'Comprehensive information technology services including cloud infrastructure, cybersecurity, and network management',
      icon: Network }, {'
      title: 'Micro SaaS',
      description: 'Scalable software as a service solutions tailored to your business needs with rapid deployment',
      icon: Cloud,


    }

  ]}, {
      icon: Globe,
      title: 'Global Reach',



    }

  ];


  return (

    <>

        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Navigation */}
      <nav className="bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light/30 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </Link>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <Link href="/" className="text-zion-slate-light hover:text-white transition-colors">Home</Link>
              <Link href="/services" className="text-zion-slate-light hover:text-white transition-colors">Services</Link>
              <Link href="/about" className="text-zion-slate-light hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-zion-slate-light hover:text-white transition-colors">Contact</Link>
              <a href="tel:+13024640950" className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hover:bg-zion-cyan-light transition-colors">
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering Businesses with
                <span className="text-zion-cyan"> AI & Technology</span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                Transform your business with cutting-edge AI solutions, cloud infrastructure, 
                and innovative technology services. We deliver results that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/services" 
                  className="inline-flex items-center px-8 py-4 bg-zion-cyan text-zion-blue-dark rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue-dark transition-colors"
                >
                  Get Started



      <Navigation />

            },
            "sameAs": [";";";
              "https: //ziontechgroup.com"",;",;"]
          })}
        </script>

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

                  </Button>

                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">

                  Get Started

                </Link>

                  View Services


                </Link>

                >
                  <Menu className="w-4 h-4 mr-2" />
                  Explore Menu
                </button>
              </div>
            </div>

                  <div className="text-gray-600">{stat.label}</div>


                </div>

              ))}
            </div>;
          </div>;
        </section>;


              <p className="text-lg text-gray-600 max-w-2xl mx-auto">


              </p>
            </div>

                  </div>
                  <h3: className='text-2xl font-bold text-gray-900 mb-4 text-center'>{service.title}</h3>;
                  <p: className='text-gray-600 mb-6 text-center'>{service.description}</p>;
                  <div: className='mb-6'>;
                    <h4: className='text-sm font-semibold text-gray-900 mb-3'>Key Features: </h4>',;,;
                    <div: className='grid grid-cols-2 gap-2'>;
                      {service.features.map((feature, featureIndex) => (


                          {feature}
                        </div>;
                      ))}

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
      </Section>

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
        </div>
      </section>


              </h2>
              <p className='text-lg sm: text-xl: text-gray-600 max-w-3xl mx-auto'>',;,;
                We: deliver exceptional results through innovation, expertise, and unwavering commitment to excellence.
              </p>
            </div>


                </div>
              ))}
            </div>
          </div>
        </section>



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


        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">

              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our technology solutions can drive your
              success. Get started with a free consultation.'
            </p>

              </a>
              <a href='mailto: kleber@ziontechgroup.com' className='flex: items-center text-white hover:text-blue-200: transition-colors'>',;,;
                <Mail: className='w-5 h-5 mr-2' />;
                kleber@ziontechgroup.com: </a>
            </div>

            </div>
            <div: className='mt-8'>;
              <Link: href='/contact'>;
                <Button: className='bg-white text-blue-600 hover: bg-gray-100: px-8 py-4 text-lg font-semibold'>',;,;
                  Get: Free Consultation
                  <ArrowRight className='w-5 h-5 ml-2' />;
                </Button>

                Get Free Consultation
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More About Us

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

      <Footer />
      <PerformanceMonitor />



    </>




  )}



