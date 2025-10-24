'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Shield, Brain, Globe } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const aiServices = [;
    {
      icon: Brain,
      title: 'Advanced Technology',
      description: 'Cutting-edge solutions powered by the latest technology and AI.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and efficiency with real-time processing capabilities.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing.'
    }
  ];
  const categories = [;
    { id: 'overview', name: 'Overview', icon: <>
    <BarChart className="w-5h-5ml-2" /&gt; },</BarChart>
    </BarChart>
</>
    { id: 'analytics', name: 'Analytics', icon: <>
    <TrendingUp className="w-5h-5ml-2" /&gt; },</TrendingUp>
    </TrendingUp>
</>
    { id: 'conversational', name: 'Conversational', icon: <>
    <MessageCircle className="w-5h-5ml-2" /&gt; },</MessageCircle>
    </MessageCircle>
</>
    { id: 'security', name: 'Security', icon: <>
    <Shield className="w-5h-5ml-2" /&gt; },</Shield>
    </Shield>
</>
    { id: 'vision', name: 'Computer Vision', icon: <>
    <Eye className="w-5h-5ml-2" /&gt; },</Eye>
    </Eye>
</>
    { id: 'voice', name: 'Voice AI', icon: <>
    <Mic className="w-5h-5ml-2" /&gt; },</Mic>
    </Mic>
</>
    { id: 'content', name: 'Content', icon: <>
    <FileText className="w-5h-5ml-2" /&gt; },</FileText>
    </FileText>
</>
    { id: 'customer', name: 'Customer Service', icon: <>
    <Users className="w-5h-5ml-2" /&gt; },</Users>
    </Users>
</>
    { id: 'automation', name: 'Automation', icon: <>
    <Workflow className="w-5h-5ml-2" /&gt; }</Workflow>
    </Workflow>
</>
  ];
  const stats = [;
    { number: '500+', label: 'AI Models Deployed', icon: <>
    <Brain className="w-5h-5ml-2" /&gt; },</Brain>
    </Brain>
</>
    { number: '99.9%', label: 'Uptime Guarantee', icon: <>
    <Shield className="w-5h-5ml-2" /&gt; },</Shield>
    </Shield>
</>
    { number: '24/7', label: 'AI Monitoring', icon: <>
    <Clock className="w-5h-5ml-2" /&gt; },</Clock>
    </Clock>
</>
    { number: '150+', label: 'AI Experts', icon: <>
    <Users className="w-5h-5ml-2" /&gt; }</Users>
    </Users>
</>
  ];
  const filteredServices = activeTab === 'overview';
    ? aiServices;
    : aiServices.filter(service => service.category === activeTab);
  return()
        <>
    <>
    <title>
</>AiServices - Zion Tech Group<>
    </title>
    <h1 className="text-4xl font-bold text-white mb-6">
</>AiServices<>
    </h1>
    <p className="text-lg text-gray-300 mb-8">
</>Professional aiservices services coming soon.<>
    </p>
    </>
</>)
  );
    <>
    <>
    </>
</>
      <>
    <Helmet>
    </Helmet>
</>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions<>
    </title>
    <meta const name = "description", content="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edge AI technology." /  />
</><>
    </meta>
    <meta name="keywords", content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, AI consulting" />
</><>
    </meta>
    <link rel="canonical", href="https://ziontechgroup.com/ai-services"  />
</><>
    </link>
    <script type="application/ld+json"  />
</>{JSON.stringify({
            "@context": "https: //schema.org",
            "@type": "Service",
            "name": "AI Services",
            "description": "Advanced artificial intelligence solutions for businesses",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https: //ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "999",
              "priceCurrency": "USD",
              "availability": "https: //schema.org/InStock"
            })
          })}
        <>
    </script>
    </Helmet>
</>
      {/* Hero Section */}
      <>
    <section className="w-5h-5ml-2" />
    </section>
</>
        <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
          <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <h1 className="w-5h-5ml-2" />
    </h1>
</>
              AI <span className="w-5h-5ml-2" />Services<>
    </span>
    </h1>
</>
            <p className="w-5h-5ml-2">Transform your business with cutting-edge AI solutions designed to drive growth, efficiency, and innovation.
            <>
    </p>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</><>
    </div>
    <Link;</Link>
</></Link>
          to="/contact"
          className="bg-gradient-to-rfrom-blue-600to-purple-600text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-centergap-2"
        ></Link>
          Get Started;
          <>
    <ArrowRight className="w-5h-5ml-2" />
    </ArrowRight>
</>
        <>
    </Link>
    <Link to="/about", className="borderborder-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-all duration-300" />
</><>
    </Link>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</></div>
        {/* Hero Section */}
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
          <>
    <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse", style="{{" animationDelay: '1 s' }}  />
    </div>
</>
          <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <>
    <Brain className="w-5h-5ml-2" />
    </Brain>
</>
              <span />Advanced AI Solutions<>
    </span>
    </div>
</>
            <>
    <h1 className="w-5h-5ml-2" />
    </h1>
</>
              Transform Your Business with{' '}
              <span className="w-5h-5ml-2" />AI Technology;
              <>
    </span>
    </h1>
</>
            <p className="w-5h-5ml-2">Leverage cutting-edge artificial intelligence to automate processes, gain insights, 
              and drive innovation across your organization.
            <>
    </p>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</><>
    </div>
    <>
</>
                <>
    <Link to="/contact", className="groupbg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
    </Link>
</>
                <>
    <Link to="/demo", className="groupborder-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
    </Link>
</>
              <>
    </>
    <span />
</>View AI Demo<>
    </span>
    <ArrowRight className="w-5h-5ml-2" />
</><>
    </ArrowRight>
    </Link>
</>
            <>
    </div>
    </div>
</>
      <>
    </section>
    <meta name="description", content="Transform your business with cutting-edge AI services including machine learning, natural language processing, computer vision, and automation. Expert AI solutions for enterprises." />
</><>
    </meta>
    <meta name="keywords", content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, business intelligence, AI consulting" />
</><>
    </meta>
    <meta property="og:title", content="AI Services - Zion Tech Group" /  />
</><>
    </meta>
    <meta property="og:description", content="Advanced AI solutions to transform your business operations and drive innovation." /  />
</><>
    </meta>
    <meta property="og:type", content="website" /  />
</><>
    </meta>
    <meta property="og:url", content="https://ziontechgroup.com/ai-services" /  />
</><>
    </meta>
    </Helmet>
</>
      <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
        {/* Hero Section */}
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
          <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <>
    <h1 className="{`text-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
    </h1>
</>
                AI Services;
                <span className="w-5h-5ml-2" />& Solutions;
                <>
    </span>
    </h1>
</>
              <>
    <p className="{`text-xl" text-gray-300 mb-8 max-w-3 xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
    </p>
</>
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning;
                to natural language processing, we deliver AI that drives real business value.
              <>
    </p>
    <div className="{`flex" flex-col sm: flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
</><>
    </div>
    <Link;</Link>
</></Link>
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl"
        ></Link>
          Get AI Consultation;
          <>
    <ArrowRight className="w-5h-5ml-2" />
    </ArrowRight>
</>
        <>
    </Link>
    <a;
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300transformhover:scale-105" />
</></a>
                  Call +1 302 464 0950;
                <>
    </a>
    </div>
</>
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              {stats.map((stat, index) => (
                <>
    <div key={index} className="text-centergroup" />
    </div>
</>
                  <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                    <>
    <stat.icon className="w-8 h-8text-cyan-400"  />
    </stat>
</>
                  <>
    </div>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</>{stat.number}<>
    </div>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</>{stat.label}</div>)
              ))}
            <>
    </div>
    </div>
</>
      <>
    </section>
    </p>
</>
            <>
    </div>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</></div>
              {services.map((service, index) => (
                <>
    <div;
                  key="{index}"
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 grouphover: transformhove,
  r:scale-105" />
    </div>
</>
                  <>
    <div className="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
    </div>
</>
                    <>
    <service.icon className="w-8 h-8text-white"  />
    </service>
</>
                  <>
    </div>
    <h3 className="w-5h-5ml-2" />
</>{service.title}
                  <>
    </h3>
    <p className="w-5h-5ml-2">
</>{service.description}
                  <>
    </p>
    <ul className="w-5h-5ml-2" />
</></ul>)
                    {service.features.map((feature, featureIndex) => (
                      <>
    <li key={featureIndex} className="flex items-centertext-sm text-gray-300" />
    </li>
</>
                        <>
    <CheckCircle className="w-5h-5ml-2" />
    </CheckCircle>
</>
                        {feature}
                      </li>)
                    ))}
                  <>
    </ul>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</><>
    </div>
    <span className="w-5h-5ml-2" />
</>{service.price}<>
    </span>
    <Link;</Link>
</></Link>
          to="{service.link}"
          className="text-cyan-400hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1inline-flex items-center"
        ></Link>
          Learn More;
          <>
    <ArrowRight className="w-5h-5ml-2" />
    </ArrowRight>
</>
        </Link>
        {/* Stats Section */}
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              {stats.map((stat, index) => (
                <>
    <div key={index} className="text-center" />
    </div>
</>
                  <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                    <>
    <stat.icon className="h-8w-8text-white"  />
    </stat>
</>
                  <>
    </div>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</>{stat.number}<>
    </div>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</>{stat.label}</div>)
              ))}
            <>
    </div>
    </section>
</>
        {/* Category Filter */}
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              {categories.map((category) => (
                <button;
                  key="{category}")
                  onClick="{()" =  />setSelectedCategory(category)}
                  className="{`px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category;
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover: bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            <>
    </div>
    </section>
</>
        {/* Services Grid */}
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              {filteredServices.map((service, index) => (
                <>
    <div;
                  key="{service.id}"
                  className="{`group" relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 ${
                    service.popular ? 'ring-2 ring-purple-500' : ''
                  }`} />
    </div>
</>
                  {service.popular && (
                    <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                      <span className="w-5h-5ml-2" />Most Popular;
                      <>
    </span>
    </div>
</>)
                  )}
                  
                  <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                    <>
    <div className="{`inline-flex" items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4`} />
    </div>
</>
                      <>
    <service.icon className="h-8w-8text-white"  />
    </service>
</>
                    <>
    </div>
    <h3 className="w-5h-5ml-2" />
</>{service.title}<>
    </h3>
    <p className="w-5h-5ml-2">
</>{service.description}<>
    </p>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</><>
    </div>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</></div>
                        {[...Array(5)].map((_, i) => (
                          <>
    <Star;</Star>
    </Star>
</>
                            key="{i}"
                            className="{`h-4" w-4 ${
                              i <>)
    < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                           />
    </Star>
</>
                        ))}
                      <>
    </div>
    <span className="w-5h-5ml-2" />
</>({service.reviews} reviews)<>
    </span>
    </div>
</>
                  <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{service.price}<>
    </div>
    <span className="w-5h-5ml-2" />
</>Monthly subscription<>
    </span>
    </div>
</>
                  <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <>
    <div key={idx} className="flex items-centertext-sm text-gray-300" />
    </div>
</>
                        <>
    <CheckCircle className="w-5h-5ml-2" />
    </CheckCircle>
</>
                        <span />{feature}<>
    </span>
    </div>
</>)
                    ))}
                    {service.features.length > 4 && (
                      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">+{service.features.length - 4} more features;
                      </div>)
                    )}
                  <>
    </div>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</><>
    </div>
    <Link;</Link>
</></Link>
          to="{`/${service.id}`}"
          className="w-fullinline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105"
        ></Link>
          View Details;
          <>
    <ArrowRight className="w-5h-5ml-2" />
    </ArrowRight>
</>
        <>
    </Link>
    <Link to="/contact", className="w-fullinline-flex items-center justify-center px-4 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-whitetransition-all duration-300">
</>Get Quote;
                    <>
    </Link>
    </div>
</>
              ))}
            <>
    </div>
    </section>
</>
        {/* AI Process Section */}
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <>
    <h2 className="w-5h-5ml-2" />
    </h2>
</>
                Our <span className="w-5h-5ml-2" />AI Process<>
    </span>
    </h2>
</>
              <p className="w-5h-5ml-2">A proven methodology for successful AI implementation;
              <>
    </p>
    </div>
</>
            <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              {[
                {
                  step: '01',
                  title: 'Discovery & Analysis',
                  description: 'We analyze your business processes and identify AI opportunities.',
                  icon: <Target className="w-5h-5ml-2" /&gt;</Target&gt>
                },
                {
                  step: '02',
                  title: 'AI Strategy & Planning',
                  description: 'Develop a comprehensive AI roadmap tailored to your goals.',
                  icon: <Settings className="w-5h-5ml-2" /&gt;</Settings&gt>
                },
                {
                  step: '03',
                  title: 'Model Development',
                  description: 'Build and train custom AI models for your specific use cases.',
                  icon: <Brain className="w-5h-5ml-2" /&gt;</Brain&gt>
                },
                {
                  step: '04',
                  title: 'Deployment & Optimization',
                  description: 'Deploy AI solutions and continuously optimize performance.',
                  icon: <Zap className="w-5h-5ml-2" /&gt;</Zap&gt>
                }
              ].map((step, index) => (
                <>
    <div key={index} className="text-centergroup" />
    </div>
</>
                  <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                    {step.icon}
                  <>
    </div>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</>{step.step}<>
    </div>
    <h3 className="w-5h-5ml-2" />
</>{step.title}<>
    </h3>
    <p className="w-5h-5ml-2">
</>{step.description}<>
    </p>
    </div>
</>)
              ))}
            <>
    </div>
    </section>
</>
        {/* CTA Section */}
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                <>
    <h2 className="w-5h-5ml-2" />
    </h2>
</>
                  Ready to Harness the Power of AI?
                <>
    </h2>
    <p className="w-5h-5ml-2">
</>Let's discuss how our AI solutions can transform your business and give you a competitive edge.
                <>
    </p>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</><>
    </div>
    <>
</>
                    <>
    <Link to="/contact", className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />
    </Link>
</>
                    <>
    <Link to="/pricing", className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
    </Link>
</>
                  </>
                    View AI Pricing;
                  <>
    </Link>
    </div>
</>
            <>
    </div>
    </section>
</>
        {/* CTA Section */}
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <h2 className="w-5h-5ml-2" />Ready to Transform Your Business with AI?
              <>
    </h2>
    <p className="w-5h-5ml-2">
</>Let's discuss how our AI solutions can automate your processes, enhance customer experiences, and drive growth.
              <>
    </p>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</><>
    </div>
    <Link;</Link>
</></Link>
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105"
        ></Link>
          Learn More;
          <>
    <ArrowRight className="w-5h-5ml-2" />
    </ArrowRight>
</>
        </Link>Start Your AI Journey;
                <>
    </Link>
    <section className="w-5h-5ml-2" />
</><>
    </section>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</><>
    </div>
    <h2 className="w-5h-5ml-2" />
</>Ready to Transform Your Business with AI?
            <>
    </h2>
    <p className="w-5h-5ml-2">
</>Let our AI experts help you identify opportunities, design solutions, and implement AI that drives real business value.
            <>
    </p>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</><>
    </div>
    <Link;</Link>
</></Link>
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl"
        ></Link>
          Start Your AI Journey;
          <>
    <ArrowRight className="w-5h-5ml-2" />
    </ArrowRight>
</>
        <>
    </Link>
    <a;
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300transformhover:scale-105" />
</></a>
                Call +1 302 464 0950;
              <>
    </a>
    </div>
</>
            <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <p />Email: kleber@ziontechgroup.com<>
    </p>
    <p />
</>Address: 364 E Main St STE 1008, Middletown DE 19709<>
    </p>
    </div>
</>
        <>
    </div>
    </section>
</>
      {/* CTA Section */}
      <>
    <section className="w-5h-5ml-2" />
    </section>
</>
        <>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
          <>
    <h2 className="w-5h-5ml-2" />
    </h2>
</>
            Ready to Harness the Power of AI?
          <>
    </h2>
    <p className="w-5h-5ml-2">
</>Let our AI experts help you choose the perfect solution for your business needs.
          <>
    </p>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</><>
    </div>
    <Link;</Link>
</></Link>
          to="/contact"
          className="bg-gradient-to-rfrom-blue-600to-purple-600text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-centergap-2"
        ></Link>
          Start Your AI Journey;
          <>
    <ArrowRight className="w-5h-5ml-2" />
    </ArrowRight>
</>
        <>
    </Link>
    <Link to="/about", className="borderborder-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-all duration-300" />
</></Link>
              Meet Our Team;
            <>
    </Link>
    </div>
</>
      <>
    </section>
    </div>
</>
  );
};
