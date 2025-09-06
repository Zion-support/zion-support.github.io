    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);  }, []);
  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com',  };

            </div>
          </div>
        </section>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed to transform your business and drive growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Pricing
                </button>
              </div>
            </motion.div>
          </div>
        </section>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-600 font-semibold mb-4">
                    {service.pricing}
                  </div>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our proven expertise and commitment to excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Services() {
  const serviceCategories = [
    {
      title: 'Micro SaaS Products',
      description:
        'Innovative, focused software solutions for modern businesses',
      count: '150+',
      color: 'blue',
      services: [
        'AI-Powered Video Clip Maker',
        'Smart Contract Analyzer',
        'Cybersecurity Threat Intelligence',
        'Multi-Language Website Translator',
        'Predictive Inventory Optimizer',
        'Real-Time Analytics Dashboard',
        'Automated Customer Support',
        'Blockchain Transaction Monitor',
      ],
      href: '/micro-saas',
    },
    {
      title: 'AI Services',
      description:
        'Advanced artificial intelligence solutions for enterprise needs',
      count: '100+',
      color: 'purple',
      services: [
        'Autonomous AI Agents',
        'AI-Powered Financial Trading',
        'AI Legal Document Analysis',
        'AI-Powered Voice Analytics',
        'AI-Powered Search & Discovery',
        'Machine Learning Model Training',
        'Natural Language Processing',
        'Computer Vision Solutions',
      ],
      href: '/ai-services',
    },
    {
      id: 'it-services',
      name: 'IT & Cloud Services',
      description: 'Comprehensive IT solutions for enterprise-grade operations',
      services: [
        'Quantum Computing Consulting',
        'Blockchain & Web3 Solutions',
        'DevSecOps & Security Automation',
        'Enterprise Data Platform',
        'High-Performance Computing',
        'Cloud Migration Services',
        'Infrastructure as Code',
        'Disaster Recovery Solutions',
      ],
      href: '/it-services',
    },  ];
  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
              bg: 'bg-blue-600',
        hover: 'hover:bg-blue-700',
        text: 'text-blue-400',
        border: 'border-blue-500/40',
        ring: 'focus:ring-blue-500',
      },
      purple: {        bg: 'bg-purple-600',
        hover: 'hover:bg-purple-700',
        text: 'text-purple-400',
        border: 'border-purple-500/40',
        ring: 'focus:ring-purple-500',
      },      green: {        bg: 'bg-green-600',
        hover: 'hover:bg-green-700',
        text: 'text-green-400',
        border: 'border-green-500/40',
        ring: 'focus:ring-green-500',
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;  };
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta
          name='description'
          content='Explore our comprehensive range of micro SaaS products, AI services, and IT solutions. 350+ innovative services to transform your business.'
        />
        <meta
          name='keywords'
          content='micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href={`${contact.site}/services`} />
      </Head>

      <ErrorBoundary level='page'>
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>
          {/* Hero Section */}
          <section className='py-20 px-4 text-center' role='banner'>
            <div className='max-w-4xl mx-auto'>
              <h1
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Our Services
              </h1>
              <p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                350+ Innovative Solutions for Modern Businesses
              </p>
              <p
                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                From cutting-edge AI services to comprehensive IT solutions and
                specialized micro SaaS products, we provide everything your
                business needs to thrive in the digital age.              </p>            </div>
          </section>

          {/* Service Categories */}
          <section className='py-16 px-4' role='main'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid lg:grid-cols-3 gap-8'>
                {serviceCategories.map((category, index) => {
                  const colors = getColorClasses(category.color);
                  
                    >
                      <div className='flex items-center justify-between mb-6'>                        <h3 className={`text-2xl font-bold ${colors.text}`}>                          {category.title}
                        </h3>
                        <span className={`text-3xl font-bold ${colors.text}`}>
                          {category.count}
                        </span>
                      </div>

                      <p className='text-slate-300 mb-6'>
                        {category.description}
                      </p>

                      <ul className='text-slate-400 space-y-2 mb-8'>
                        {category.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className='flex items-center'>
                            <span className='w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0'></span>                            {service}
                          </li>
                        ))}
                      </ul>

                      <Link                        href={category.href}
                        className={`inline-flex items-center px-6 py-3 ${colors.bg} ${colors.hover} rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 ${colors.ring} focus:ring-offset-2 focus:ring-offset-slate-900`}
                      >
                        View All {category.title}
                        <svg
                          className='ml-2 w-4 h-4'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />
                        </svg>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

          {/* Why Choose Us */}
          <section className='py-16 px-4 bg-slate-900/40'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                Why Choose Zion Tech Group?
              </h2>

              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Lightning Fast</h3>
                  <p className='text-slate-400'>
                    Rapid deployment and implementation of solutions
                  </p>
                </div>

                <div className='text-center'>
                  <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Enterprise Grade</h3>
                  <p className='text-slate-400'>
                    Scalable solutions for businesses of all sizes
                  </p>
                </div>

                <div className='text-center'>
                  <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Secure & Reliable</h3>
                  <p className='text-slate-400'>
                    Bank-level security and 99.9% uptime guarantee
                  </p>
                </div>

                <div className='text-center'>
                  <div className='w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>24/7 Support</h3>
                  <p className='text-slate-400'>
                    Round-the-clock technical support and maintenance
                  </p>                </div>              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className='py-16 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>
                Ready to Get Started?
              </h2>
              <p className='text-lg text-slate-300 mb-8'>
                Contact our experts today to discuss your project requirements
                and discover how our innovative solutions can transform your
                business.
              </p>

              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <Link
                  href='/contact'
                  className='px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'
                >
                  Get a Quote
                </Link>
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                  className='px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors'
                >
                  Call {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className='px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors'                >
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
    </>
  );

        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Contact our experts to discuss your project requirements and discover 
              how our solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
              <Link href="/contact" className="btn-secondary">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { ArrowRight,CheckCircle,Clock,Star,Zap,Shield,Users,Mail,FileText,BarChart3,ShoppingCart,Calendar,MessageSquare,Search,Eye,Target,TrendingUp,Globe,Lock,Cpu,Bot,Image,Video,Mic,Code,Settings,Monitor,Smartphone,Cloud,Server,Network,Car,Rocket,Heart,Building,Sprout,DollarSign,Award,Phone,MapPin,Database,Wrench,HardDrive,Wifi,Mobile,Laptop,Printer,Router,Key,AlertTriangle,RefreshCw,Download,Upload,Trash2,Copy,Edit,Save,Play,Pause,Stop,Brain,Package } from 'lucide-react'; import Navigation from '../components/Navigation'; import Footer from '../components/Footer'; export default function Services() { const title = 'Our Services — Zion Tech Group'; const description = 'Comprehensive technology services including AI solutions,IT services,micro SaaS applications,and digital transformation solutions.'; const serviceCategories = [ { title: 'AI Services',description: 'Cutting-edge artificial intelligence solutions for business automation and optimization',icon: Brain,href: '/ai-services',services: [ 'AI-Powered Email Responder','AI Content Creation Suite','Intelligent Document Processing','AI-Powered Talent Matching','Computer Vision Solutions','AI Chatbot & Virtual Assistant','Predictive Analytics Platform','AI-Powered Search Engine','AI Voice & Speech Processing','AI-Powered Fraud Detection' ],pricing: '$2,000 - $50,000/month',features: [ 'Machine Learning & Deep Learning','Natural Language Processing','Computer Vision & Image Recognition','Predictive Analytics & Forecasting','Automated Decision Making','Intelligent Process Automation' ] },{ title: 'IT Services',description: 'Comprehensive IT solutions including cloud migration,cybersecurity,and infrastructure management',icon: Server,href: '/it-services',services: [ 'Cloud Migration & Management','Cybersecurity Solutions','IT Infrastructure Management','Digital Transformation Consulting','Managed IT Support Services','Network Security & Monitoring','Data Backup & Recovery Solutions','IT Compliance & Audit Services','Mobile Device Management (MDM)','IT Project Management' ],pricing: '$1,500 - $50,000/month',features: [ 'Cloud Computing & Migration','Cybersecurity & Threat Protection','Network Infrastructure & Security','Data Management & Backup','IT Support & Maintenance','Compliance & Audit Services' ] },{ title: 'Micro SaaS Solutions',description: 'Innovative micro SaaS applications that solve specific business problems efficiently',icon: Package,href: '/micro-saas',services: [ 'AI-Powered Email Follow-Up Automation','E-Commerce Return Management System','AI Content Creation Suite','Smart Event Management Platform','AI-Powered Customer Support Platform','Intelligent Project Management Tool','AI-Powered Social Media Management','Smart Inventory Management System','AI-Powered Lead Scoring Platform','Automated Invoice Processing System' ],pricing: '$97 - $1,497/month',features: [ 'Business Process Automation','Customer Engagement Tools','Content Creation & Management','Project & Task Management','E-Commerce Solutions','Marketing & Sales Automation' ] },{ title: 'Blockchain Solutions',description: 'Advanced blockchain technology solutions for secure and transparent business operations',icon: Shield,href: '/blockchain-solutions',services: [ 'Smart Contract Development','DeFi Protocol Development','NFT Marketplace Creation','Blockchain Integration Services','Cryptocurrency Payment Solutions','Supply Chain Transparency','Digital Identity Management','Tokenization Services','Blockchain Consulting','Security Auditing' ],pricing: '$5,000 - $100,000/project',features: [ 'Smart Contract Development','DeFi & NFT Solutions','Blockchain Integration','Cryptocurrency Development','Security & Compliance','Consulting & Strategy' ] } ]; const stats = [ { number: '500+',label: 'Projects Completed' },{ number: '50+',label: 'Happy Clients' },{ number: '99.9%',label: 'Uptime Guarantee' },{ number: '24/7',label: 'Support Available' } ]; const whyChooseUs = [ { title: 'Expert Team',description: 'Certified professionals with years of experience in cutting-edge technologies',icon: Award },{ title: 'Proven Results',description: 'Track record of successful implementations and measurable business outcomes',icon: TrendingUp },{ title: '24/7 Support',description: 'Round-the-clock monitoring and support to ensure your systems run smoothly',icon: Clock },{ title: 'Security First',description: 'We prioritize security in every solution,ensuring your data is protected',icon: Shield } ]; return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <link rel="canonical" href="https: <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:url" content="https: <meta name="twitter:card" content="summary_large_image" /> <meta name="twitter:title" content={title} /> <meta name="twitter:description" content={description} /> </Head> <Navigation /> <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50"> {} <section className="relative py-20 px-4 sm:px-6 lg:px-8"> <div className="max-w-7xl mx-auto text-center"> <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Our Technology Services </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Comprehensive technology solutions including AI services,IT solutions,micro SaaS applications,and digital transformation services to help your business thrive in the digital age. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center" > Get Started Today <ArrowRight className="ml-2 h-5 w-5" /> </Link> <Link href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200" > View Pricing </Link> </div> </div> </section> {} <section className="py-16 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> {stats.map((stat,index) => ( <div key={index} className="text-center"> <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div> <div className="text-gray-600">{stat.label}</div> </div> ))} </div> </div> </section> {} <section className="py-20 px-4 sm:px-6 lg:px-8"> <div className="max-w-7xl mx-auto"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Service Categories </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Choose from our comprehensive range of technology services designed to meet your specific business needs </p> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> {serviceCategories.map((category,index) => ( <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100" > <div className="flex items-center mb-6"> <div className="p-4 bg-blue-100 rounded-lg mr-4"> <category.icon className="h-10 w-10 text-blue-600" /> </div> <div> <h3 className="text-2xl font-bold text-gray-900 mb-2"> {category.title} </h3> <p className="text-gray-600"> {category.description} </p> </div> </div> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <div className="grid grid-cols-2 gap-2"> {category.features.map((feature,idx) => ( <div key={idx} className="flex items-center text-sm text-gray-600"> <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" /> {feature} </div> ))} </div> </div> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Popular Services:</h4> <div className="grid grid-cols-1 gap-1"> {category.services.slice(0,5).map((service,idx) => ( <div key={idx} className="text-sm text-gray-600 flex items-center"> <Star className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" /> {service} </div> ))} {category.services.length > 5 && ( <div className="text-sm text-blue-600 font-medium"> +{category.services.length - 5} more services </div> )} </div> </div> <div className="border-t pt-4 mb-6"> <div className="flex justify-between items-center mb-2"> <span className="text-sm text-gray-600">Starting from:</span> <span className="text-lg font-bold text-blue-600"> {category.pricing} </span> </div> </div> <Link href={category.href} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center" > Explore {category.title} <ArrowRight className="ml-2 h-4 w-4" /> </Link> </div> ))} </div> </div> </section> {} <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We combine technical expertise with business acumen to deliver solutions that drive real results. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {whyChooseUs.map((item,index) => ( <div key={index} className="text-center"> <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"> <item.icon className="h-8 w-8 text-blue-600" /> </div> <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3> <p className="text-gray-600">{item.description}</p> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Process </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We follow a proven methodology to ensure successful project delivery and maximum ROI. </p> </div> <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> <div className="text-center"> <div className="p-4 bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold"> 1 </div> <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery</h3> <p className="text-gray-600"> We analyze your business needs and current technology landscape to understand your requirements. </p> </div> <div className="text-center"> <div className="p-4 bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold"> 2 </div> <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy</h3> <p className="text-gray-600"> We develop a comprehensive strategy and roadmap tailored to your specific goals and budget. </p> </div> <div className="text-center"> <div className="p-4 bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold"> 3 </div> <h3 className="text-xl font-bold text-gray-900 mb-2">Implementation</h3> <p className="text-gray-600"> Our expert team implements the solution with regular updates and transparent communication. </p> </div> <div className="text-center"> <div className="p-4 bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold"> 4 </div> <h3 className="text-xl font-bold text-gray-900 mb-2">Support</h3> <p className="text-gray-600"> We provide ongoing support,monitoring,and optimization to ensure continued success. </p> </div> </div> </div> </section> {} <section className="py-20 bg-blue-600"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"> Contact us today to discuss your specific needs and get a customized solution that fits your business perfectly. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center" > <Phone className="mr-2 h-5 w-5" /> Call +1 302 464 0950 </Link> <Link href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center" > <Mail className="mr-2 h-5 w-5" /> Send Email </Link> </div> </div> </section> </main> <Footer /> </> )}
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Contact our experts today to discuss your project requirements and discover 
                how our innovative solutions can transform your business.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Get a Quote
                </Link>
                <a 
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone}
                </a>
                <a 
                  href={`mailto:${contact.email}`} 
                  className="px-8 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
      </ErrorBoundary>
    </>
  )
}
