'use client';
import React, { use State } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Shield, Bar Chart, Message Circle, Eye, Mic, File Text, Users, Check Circle, Arrow Right, Clock, Trending Up, Workflow } from 'lucide-react';

const Ai Services Page: React.F C = () => {
  const [active Tab, set Active Tab] = use State('overview');
  const ai Services = [
    {
      icon: <B rainclass Name="w-8h-8t e xt-c y an-400" />,
      title: 'A I Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced A I-powered analytics.',
      price: 'Starting at $2,999/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom M L models', 'Data visualization'],
      benefits: ['40% increase in decision speed', '25% cost reduction', '99.9% accuracy'],
      link: '/ai-analytics',
      category: 'analytics'
    },
    {
      icon: <M essage Circleclass Name="w-8h-8t e xt-p u rple-400" />,
      title: 'A I Chatbot & Conversational A I',
      description: 'Intelligent chatbots that understand context and provide human-like interactions.',
      price: 'Starting at $1,499/month',
      features: ['Natural language processing', 'Multi-language support', 'Voice integration', '24/7 availability'],
      benefits: ['80% reduction in support tickets', '60% faster response time', '95% customer satisfaction'],
      link: '/ai-chatbot-builder',
      category: 'conversational'
    },
    {
      icon: <S hieldclass Name="w-8h-8t e xt-r e d-400" />,
      title: 'A I Cybersecurity Solutions',
      description: 'Advanced threat detection and prevention using machine learning algorithms.',
      price: 'Starting at $3,999/month',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring'],
      benefits: ['99.8% threat detection rate', '50% faster incident response', 'Zero false positives'],
      link: '/ai-cybersecurity',
      category: 'security'
    },
    {
      icon: <E yeclass Name="w-8h-8t e xt-g r een-400" />,
      title: 'Computer Vision & Image Recognition',
      description: 'Advanced image analysis and recognition capabilities for various industries.',
      price: 'Starting at $2,499/month',
      features: ['Object detection', 'Facial recognition', 'Quality inspection', 'Medical imaging'],
      benefits: ['90% accuracy improvement', '70% faster processing', '24/7 monitoring'],
      link: '/computer-vision',
      category: 'vision'
    },
    {
      icon: <M icclass Name="w-8h-8t e xt-o r ange-400" />,
      title: 'A I Voice & Speech Processing',
      description: 'Convert speech to text, analyze sentiment, and create voice assistants.',
      price: 'Starting at $1,999/month',
      features: ['Speech-to-text', 'Voice synthesis', 'Sentiment analysis', 'Multi-language support'],
      benefits: ['95% accuracy rate', 'Real-time processing', 'Custom voice models'],
      link: '/ai-voice-assistant',
      category: 'voice'
    },
    {
      icon: <F ile Textclass Name="w-8h-8t e xt-b l ue-400" />,
      title: 'A I Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      price: 'Starting at $999/month',
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'Product descriptions'],
      benefits: ['80% time savings', 'Consistent quality', 'S E O optimized'],
      link: '/ai-content-generator',
      category: 'content'
    },
    {
      icon: <U sersclass Name="w-8h-8t e xt-p i nk-400" />,
      title: 'A I Customer Service',
      description: 'Intelligent customer support with automated ticket routing and resolution.',
      price: 'Starting at $1,799/month',
      features: ['Ticket automation', 'Sentiment analysis', 'Escalation management', 'Performance analytics'],
      benefits: ['75% faster resolution', '90% customer satisfaction', '24/7 availability'],
      link: '/ai-customer-service',
      category: 'customer'
    },
    {
      icon: <H eartclass Name="w-8h-8t e xt-r e d-400" />,
      title: 'A I Healthcare Solutions',
      description: 'Medical diagnosis assistance, drug discovery, and patient monitoring systems.',
      price: 'Starting at $4,999/month',
      features: ['Medical imaging analysis', 'Drug discovery', 'Patient monitoring', 'Diagnostic assistance'],
      benefits: ['95% diagnostic accuracy', '30% faster diagnosis', 'F D A compliant'],
      link: '/ai-healthcare',
      category: 'healthcare'
    },
    {
      icon: <D ollar Signclass Name="w-8h-8t e xt-g r een-400" />,
      title: 'A I Financial Services',
      description: 'Fraud detection, algorithmic trading, and risk assessment solutions.',
      price: 'Starting at $3,499/month',
      features: ['Fraud detection', 'Algorithmic trading', 'Risk assessment', 'Credit scoring'],
      benefits: ['99.5% fraud detection', '25% risk reduction', 'Real-time monitoring'],
      link: '/ai-financial',
      category: 'finance'
    },
    {
      icon: <T argetclass Name="w-8h-8t e xt-y e llow-400" />,
      title: 'A I Marketing Automation',
      description: 'Personalized marketing campaigns and customer segmentation using A I.',
      price: 'Starting at $2,199/month',
      features: ['Customer segmentation', 'Personalized campaigns', 'A/B testing', 'R O I optimization'],
      benefits: ['40% higher conversion', '60% cost reduction', 'Real-time optimization'],
      link: '/ai-marketing',
      category: 'marketing'
    },
    {
      icon: <S ettingsclass Name="w-8h-8t e xt-g r ay-400" />,
      title: 'A I Process Automation',
      description: 'Automate repetitive tasks and optimize business processes with A I.',
      price: 'Starting at $1,299/month',
      features: ['Workflow automation', 'Document processing', 'Data entry automation', 'Process optimization'],
      benefits: ['70% time savings', '90% accuracy improvement', 'Cost reduction'],
      link: '/ai-automation',
      category: 'automation'
    },
    {
      icon: <C puclass Name="w-8h-8t e xt-i n digo-400" />,
      title: 'Custom A I Development',
      description: 'Bespoke A I solutions tailored to your specific business requirements.',
      price: 'Custom pricing',
      features: ['Custom M L models', 'A P I development', 'Integration services', 'Ongoing support'],
      benefits: ['100% tailored solution', 'Competitive advantage', 'Scalable architecture'],
      link: '/custom-ai-development',
      category: 'custom'
    }
  ];
  const categories = [

    { id: 'overview', name: 'Overview', icon: <B ar Chartclass Name="w-5h-5" / /> },
    { id: 'analytics', name: 'Analytics', icon: <T rending Upclass Name="w-5h-5" / /> },
    { id: 'conversational', name: 'Conversational', icon: <M essage Circleclass Name="w-5h-5" / /> },
    { id: 'security', name: 'Security', icon: <S hieldclass Name="w-5h-5" / /> },
    { id: 'vision', name: 'Computer Vision', icon: <E yeclass Name="w-5h-5" / /> },
    { id: 'voice', name: 'Voice A I', icon: <M icclass Name="w-5h-5" / /> },
    { id: 'content', name: 'Content', icon: <F ile Textclass Name="w-5h-5" / /> },
    { id: 'customer', name: 'Customer Service', icon: <U sersclass Name="w-5h-5" / /> },
    { id: 'automation', name: 'Automation', icon: <W orkflowclass Name="w-5h-5" / /> }
  ];
  const stats = [

    { number: '500+', label: 'A I Models Deployed', icon: <B rainclass Name="w-6h-6t e xt-c y an-400" / /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <S hieldclass Name="w-6h-6t e xt-g r een-400" / /> },
    { number: '24/7', label: 'A I Monitoring', icon: <C lockclass Name="w-6h-6t e xt-b l ue-400" / /> },
    { number: '150+', label: 'A I Experts', icon: <U sersclass Name="w-6h-6t e xt-p u rple-400" / /> }
  ];
  const filtered Services = active Tab === 'overview' 
    ? ai Services 
    : ai Services.filter(service => service.category === active Tab);
  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</t itle>
        <m etaconstname = "description" content="Comprehensive A I services including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edge A I technology." / / />
        <m eta name="keywords" content="A I services, artificial intelligence, machine learning, N L P, computer vision, A I automation, A I consulting" / / />
        <l inkrel="canonical" href="https://ziontechgroup.com/ai-services" />
        <s cripttype="application/ld+json"  />{J S O N.stringify({

            "@context": "https: //schema.org",
            "@type": "Service",
            "name": "A I Services",
            "description": "Advanced artificial intelligence solutions for businesses",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https: //ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "999",
              "price Currency": "U S D",
              "availability": "https: //schema.org/In Stock"
            }
          })}

        </s cript>
      </H elmet>

      {/* Hero Section */}

      <s ection class Name="r e l a tive py-20 px-4sm:px-6lg:px-8" />
        <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
          <d iv class Name="t e x t-center" />
            <h1 c lass Name="t e x t-4xl md:text-6xl font-boldtext-white mb-6" />
              A I <s pan class Name="t e xt-t r ansparent bg-clip-text bg-gradient-to-rfrom-blue-400to-purple-400">Services</s pan>
            </h1>
            <p c lass Name="t e xt-xl t e xt-gray-300 mb-8max-w-3xlmx-auto" />

              Transform your business with cutting-edge A I solutions designed to drive growth, efficiency, and innovation.

            </p>
            <d iv class Name="f l ex f l ex-wrapjustify-centergap-4">
        </d iv>
              <L ink to="/contact" class Name="b g-g r a dient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flexitems-centergap-2" />
                Get Started <A rrow Rightclass Name="w-5h-5" />
              </L ink>
              <L ink to="/about" class Name="b o r d er border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>

        {/* Hero Section */}

        <s ection class Name="r e l a tive py-20px-4overflow-hidden" />
          <d iv class Name="a b s o lute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)]animate-pulse" />
          <d iv class Name="a b s o lute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse" style="{{" animation Delay: '1 s' }} / />
          <d iv class Name="r e l a tive max-w-7 xlmx-autotext-center">
        </d iv>
            <d iv class Name="i n l i ne-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </d iv>
              <B rainclass Name="w-4h-4" / />
              <s pan>Advanced A I Solutions</s pan>
            </d iv>

            <h1 c lass Name="t e x t-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
              Transform Your Business with{' '}

              <s pan class Name="b g-g r a dient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">A I Technology
              </s pan>
            </h1>

            <p c lass Name="t e x t-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Leverage cutting-edge artificial intelligence to automate processes, gain insights, 
              and drive innovation across your organization.
            </p>

            <d iv class Name="f l ex f l ex-col sm:flex-rowgap-6justify-center">
        </d iv>
              <L ink to="/contact" class Name="g r o u p bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <s pan>Get A I Consultation</s pan>
                <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
              </L ink>
              <L ink to="/demo" class Name="g r o u p border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <s pan>View A I Demo</s pan>
                <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
              </L ink>
            </d iv>
        </d iv>
      </s ection>

        <m eta name="description" content="Transform your business with cutting-edge A I services including machine learning, natural language processing, computer vision, and automation. Expert A I solutions for enterprises." / / />
        <m eta name="keywords" content="A I services, artificial intelligence, machine learning, N L P, computer vision, A I automation, business intelligence, A I consulting" / / />
        <m etaproperty="og:title" content="A I Services - Zion Tech Group" / / />
        <m etaproperty="og:description" content="Advanced A I solutions to transform your business operations and drive innovation." / / />
        <m etaproperty="og:type" content="website" / / />
        <m etaproperty="og:url" content="https://ziontechgroup.com/ai-services" / / />
      </H elmet>

      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="r e l a tive overflow-hiddenpt-20pb-16" />
          <d iv class Name="a b s o luteinset-0opacity-20" / />
          <d iv class Name="r e l a tive max-w-7 xl mx-auto px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="t e x t-center" />
              <h1 c lass Name="{`t e xt-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />

                A I Services

                <s pan class Name="b l o c k bg-gradient-to-r from-purple-400 to-pink-400bg-clip-texttext-transparent">& Solutions
                </s pan>
              </h1>
              <p c lass Name="{`t e xt-xl" text-gray-300 mb-8 max-w-3 xl mx-auto transition-all duration-1000 delay-300 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />

                Transform your business with cutting-edge artificial intelligence solutions. From machine learning 
                to natural language processing, we deliver A I that drives real business value.

              </p>
              <d iv class Name="{`f l ex" flex-col sm: flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <L ink to="/contact" class Name="i n l i ne-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />

                  Get A I Consultation

                  <A rrow Rightclass Name="m l-2h-5w-5" />
                </L ink>

                <a
                  h r ef="tel:+13024640950"
                  class Name="i n l i ne-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                  Call +1 302 464 0950

                </a>
              </d iv>
        <s ection class Name="p y-16p x-4" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="g r id g r id-cols-2md:grid-cols-4gap-8">
        </d iv>

              {stats.map((stat, index) => (

                <d ivkey="{index}" class Name="t e x t-centergroup" />
                  <d iv class Name="i n l i ne-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110transition-transformduration-300">
        </d iv>
                    <s tat.icon class Name="w-8h-8t e xt-c y an-400" / />
                  </d iv>
                  <d iv class Name="t e xt-3 xl f o nt-boldtext-whitemb-2">{stat.number}</d iv>
                  <d iv class Name="t e xt-g r ay-400text-sm">{stat.label}</d iv>

              ))}

            </d iv>
        </d iv>
      </s ection>

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
              {services.map((service, index) => (
                <d iv 
                  key="{index}"
                  class Name="b g-g r a dient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />

                  <d iv class Name="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <s ervice.icon class Name="w-8h-8t e xt-w h ite" />
                  </d iv>

                  <h3 c lass Name="t e xt-2 xl f o nt-bold text-white mb-4group-hover:text-cyan-400transition-colors">{service.title}
                  </h3>

                  <p c lass Name="t e xt-g r ay-300mb-6leading-relaxed">
                    {service.description}
                  </p>

                  <u lclass Name="s p a c e-y-2mb-6" />
                    {service.features.map((feature, feature Index) => (

                      <l ikey="{feature Index}" class Name="f l ex i t ems-centertext-smtext-gray-300" />
                        <C heck Circleclass Name="w-4 h-4 t e xt-g r een-400mr-2flex-shrink-0" / />

                        {feature}
                      </l i>
                    ))}
                  </u l>

                  <d iv class Name="f l ex i t ems-centerjustify-betweenmb-6">
        </d iv>
                    <s pan class Name="t e xt-2 x l font-boldtext-cyan-400">{service.price}</s pan>
                    <L ink to="{service.link}" class Name="t e xt-c y an-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1inline-flexitems-center" />
                      Learn More <A rrow Rightclass Name="w-4h-4m l-1" />

        {/* Stats Section */}

        <s ection class Name="p y-16b g-g r ay-900/50" />
          <d iv class Name="m a x-w-7 xl mx-a u to px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="g r id g r id-cols-2md:grid-cols-4gap-8">
        </d iv>

              {stats.map((stat, index) => (

                <d ivkey="{index}" class Name="t e x t-center" />
                  <d iv class Name="i n l i ne-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500rounded-fullmb-4">
        </d iv>
                    <s tat.icon class Name="h-8w-8t e xt-w h ite" / />
                  </d iv>
                  <d iv class Name="t e xt-3 xl f o nt-boldtext-whitemb-2">{stat.number}</d iv>
                  <d iv class Name="t e xt-g r ay-400">{stat.label}</d iv>

              ))}

            </d iv>
        </s ection>

        {/* Category Filter */}

        <s ection class Name="p y-8b g-g r ay-900/30" />
          <d iv class Name="m a x-w-7 xl mx-a u to px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="f l ex f l ex-wrapjustify-centergap-4">
        </d iv>

              {categories.map((category) => (
                <b utton
                  key="{category}"
                  on Click="{()" =>set Selected Category(category)}
                  class Name="{`p x-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selected Category === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover: bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </b utton>
              ))}

            </d iv>
        </s ection>

        {/* Services Grid */}

        <s ection class Name="p y-16" />
          <d iv class Name="m a x-w-7 xl mx-a u to px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2 lg:grid-cols-3xl:grid-cols-4gap-8">
        </d iv>

              {filtered Services.map((service, index) => (
                <d iv
                  key="{service.id}"
                  class Name="{`g r o u p" relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 ${
                    service.popular ? 'ring-2 ring-purple-500' : ''
                  }`} />
                  {service.popular && (

                    <d iv class Name="a b s o lute -top-3 left-1/2transform-translate-x-1/2">
        </d iv>
                      <s pan class Name="b g-g r a dient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold">Most Popular
                      </s pan>
                    </d iv>

                  )}

                  <d iv class Name="t e x t-centermb-6">
        </d iv>
                    <d iv class Name="{`i n l i ne-flex" items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4`} />
                      <s ervice.icon class Name="h-8w-8t e xt-w h ite" />
                    </d iv>
                    <h3 c lass Name="t e xt-xl f o nt-boldtext-whitemb-2">{service.title}</h3>
                    <p c lass Name="t e xt-g r ay-300text-smmb-4">{service.description}</p>
                    <d iv class Name="f l ex i t ems-center justify-centerspace-x-2mb-4">
        </d iv>
                      <d iv class Name="f l e x items-center" />

                        {[...Array(5)].map((_, i) => (
                          <S tar
                            key="{i}"
                            class Name="{`h-4" w-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          / />
                        ))}

                      </d iv>
                      <s pan class Name="t e xt-s m text-gray-400">({service.reviews} reviews)</s pan>
                    </d iv>

                  <d iv class Name="t e x t-centermb-6">
        </d iv>
                    <d iv class Name="t e xt-2 xl f o nt-boldtext-purple-400mb-2">{service.price}</d iv>
                    <s pan class Name="t e xt-s m text-gray-400">Monthly subscription</s pan>
                  </d iv>

                  <d iv class Name="s p a c e-y-3mb-6">
        </d iv>
                    {service.features.slice(0, 4).map((feature, idx) => (

                      <d ivkey="{idx}" class Name="f l ex i t ems-centertext-smtext-gray-300" />
                        <C heck Circleclass Name="h-4 w-4 t e xt-g r een-400mr-3flex-shrink-0" / />
                        <s pan>{feature}</s pan>
                      </d iv>

                    ))}
                    {service.features.length > 4 && (

                      <d iv class Name="t e xt-s m text-gray-400text-center">+{service.features.length - 4} more features
                      </d iv>

                    )}
                  </d iv>

                  <d iv class Name="s p a c e-y-3">
        </d iv>
                    <L ink to="{`/${service.id}`}" class Name="w-f u ll i n line-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105" />

                      View Details

                      <A rrow Rightclass Name="m l-2h-4w-4" />
                    </L ink>
                    <L ink to="/contact" class Name="w-f u ll i n line-flex items-center justify-center px-4 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-whitetransition-allduration-300">Get Quote
                    </L ink>
                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* A I Process Section */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="r e l a tivemax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e x t-4xl md:text-5xl font-boldtext-white mb-6" />
                Our <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">A I Process</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300max-w-3xlmx-auto" />

                A proven methodology for successful A I implementation

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {[
                {
                  step: '01',
                  title: 'Discovery & Analysis',
                  description: 'We analyze your business processes and identify A I opportunities.',
                  icon: <T argetclass Name="w-8h-8t e xt-c y an-400" />
                },
                {
                  step: '02',
                  title: 'A I Strategy & Planning',
                  description: 'Develop a comprehensive A I roadmap tailored to your goals.',
                  icon: <S ettingsclass Name="w-8h-8t e xt-p u rple-400" />
                },
                {
                  step: '03',
                  title: 'Model Development',
                  description: 'Build and train custom A I models for your specific use cases.',
                  icon: <B rainclass Name="w-8h-8t e xt-g r een-400" />
                },
                {
                  step: '04',
                  title: 'Deployment & Optimization',
                  description: 'Deploy A I solutions and continuously optimize performance.',
                  icon: <Z apclass Name="w-8h-8t e xt-y e llow-400" />
                }
              ].map((step, index) => (

                <d ivkey={index} class Name="t e x t-centergroup" />
                  <d iv class Name="w-20 h-20 b g-g r a dient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>

                    {step.icon}

                  </d iv>
                  <d iv class Name="t e xt-c y an-400 font-boldtext-lgmb-2">
        </d iv>{step.step}</d iv>
                  <h3 c lass Name="t e xt-xl f o nt-boldtext-whitemb-4">{step.title}</h3>
                  <p c lass Name="t e xt-g r ay-300leading-relaxed">{step.description}</p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-20p x-4" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="b g-g r a dient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-centerrelativeoverflow-hidden">
        </d iv>
              <d iv class Name="a b s o lute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" / />
              <d iv class Name="r e l a tivez-10">
        </d iv>
                <h2 c lass Name="t e x t-4xl font-boldtext-white mb-6" />

                  Ready to Harness the Power of A I?

                </h2>
                <p c lass Name="t e xt-xl t e xt-gray-300 mb-8max-w-2xlmx-auto" />

                  Let's discuss how our A I solutions can transform your business and give you a competitive edge.

                </p>
                <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                  <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />

                    Start Your A I Journey

                  </L ink>
                  <L ink to="/pricing" class Name="b o r d er border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />

                    View A I Pricing

                  </L ink>
                </d iv>
            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="b g-g r a dient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center">
        </d iv>
              <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6">Ready to Transform Your Business with A I?
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 mb-8 max-w-2xlmx-auto" />

                Let's discuss how our A I solutions can automate your processes, enhance customer experiences, and drive growth.

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105" />
                  Learn More <A rrow Rightclass Name="w-4h-4" />

                  />Start Your A I Journey

                </L ink>
        <s ection class Name="p y-20 b g-g r adient-to-brfrom-slate-900to-gray-900" />
          <d iv class Name="m a x-w-7 xl mx-a u to px-4 sm:px-6lg:px-8text-center">
        </d iv>
            <h2 c lass Name="t e xt-3 xl md:t e xt-4 xl font-boldtext-whitemb-4">Ready to Transform Your Business with A I?
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 mb-8 max-w-3xlmx-auto" />

              Let our A I experts help you identify opportunities, design solutions, and implement A I that drives real business value.

            </p>
            <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
              <L ink to="/contact" class Name="i n l i ne-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />

                Start Your A I Journey

                <A rrow Rightclass Name="m l-2h-5w-5" />
              </L ink>

              <a
                h r ef="tel:+13024640950"
                class Name="i n l i ne-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950

              </a>
            </d iv>
            <d iv class Name="m t-8t e x t-gray-400">
        </d iv>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St S T E 1008, Middletown D E 19709</p>
            </d iv>
        </d iv>
      </s ection>

      {/* C T A Section */}

      <s ection class Name="p y-20 p x-4sm:px-6lg:px-8" />
        <d iv class Name="m a x-w-4x l mx-autotext-center">
        </d iv>
          <h2 c lass Name="t e xt-3xl f o nt-boldtext-white mb-6" />

            Ready to Harness the Power of A I?

          </h2>
          <p c lass Name="t e xt-g r ay-300text-lgmb-8" />

            Let our A I experts help you choose the perfect solution for your business needs.

          </p>
          <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
            <L ink to="/contact" class Name="b g-g r a dient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-centergap-2" />
              Start Your A I Journey <A rrow Rightclass Name="w-5h-5" />
            </L ink>
            <L ink to="/about" class Name="b o r d er border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />

              Meet Our Team

            </L ink>
          </d iv>
      </s ection>
    </d iv>

  );
};

export default Ai Services Page;

