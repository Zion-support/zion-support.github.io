'use client';
import React, { useState } from 'react';
import { Helmet  } from 'react-helmet-async';
import { Link  } from 'react-router-dom';
import { ;
  Brain, Zap, Shield, BarChart, MessageCircle, Eye, Mic, 
  FileText, Users, Heart, DollarSign, Target, Settings, 
  CheckCircle, ArrowRight, Star, TrendingUp,
  Cpu
 } from 'lucide-react';
import { Brain, Zap, Shield, BarChart, MessageCircle, Eye, Mic, FileText, Users, Target, Settings, CheckCircle, ArrowRight, Clock, TrendingUp, Workflow  } from 'lucide-react';
const AiServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const a iServices = [
    {
      i con: <Brain c las sNa me="w-8h-8t ext-c yan-400" />,
      t itle: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      price: 'Starting at $2,999/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom ML models', 'Data visualization'],
      benefits: ['40% increase in decision speed', '25% cost reduction', '99.9% accuracy'],
      link: '/ai-analytics',
      category: 'analytics'
    },
    {
      i con: <MessageCircle c las sNa me="w-8h-8t ext-p urp le-400" />,
      t itle: 'AI Chatbot & Conversational AI',
      description: 'Intelligent chatbots that understand context and provide human-like interactions.',
      price: 'Starting at $1,499/month',
      features: ['Natural language processing', 'Multi-language support', 'Voice integration', '24/7 availability'],
      benefits: ['80% reduction in support tickets', '60% faster response time', '95% customer satisfaction'],
      link: '/ai-chatbot-builder',
      category: 'conversational'
    },
    {
      i con: <Shield c las sNa me="w-8h-8t ext-red-400" />,
      t itle: 'AI Cybersecurity Solutions',
      description: 'Advanced threat detection and prevention using machine learning algorithms.',
      price: 'Starting at $3,999/month',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring'],
      benefits: ['99.8% threat detection rate', '50% faster incident response', 'Zero false positives'],
      link: '/ai-cybersecurity',
      category: 'security'
    },
    {
      i con: <Eye c las sNa me="w-8h-8t ext-g reen-400" />,
      t itle: 'Computer Vision & Image Recognition',
      description: 'Advanced image analysis and recognition capabilities for various industries.',
      price: 'Starting at $2,499/month',
      features: ['Object detection', 'Facial recognition', 'Quality inspection', 'Medical imaging'],
      benefits: ['90% accuracy improvement', '70% faster processing', '24/7 monitoring'],
      link: '/computer-vision',
      category: 'vision'
    },
    {
      i con: <Mic c las sNa me="w-8h-8t ext-o ran ge-400" />,
      t itle: 'AI Voice & Speech Processing',
      description: 'Convert speech to text, analyze sentiment, and create voice a ssistants.',
      price: 'Starting at $1,999/month',
      features: ['Speech-to-text', 'Voice synthesis', 'Sentiment analysis', 'Multi-language support'],
      benefits: ['95% accuracy rate', 'Real-time processing', 'Custom voice models'],
      link: '/ai-voice-a ssistant',
      category: 'voice'
    },
    {
      i con: <FileText c las sNa me="w-8h-8t ext-b lue-400" />,
      t itle: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      price: 'Starting at $999/month',
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'Product descriptions'],
      benefits: ['80% time savings', 'Consistent quality', 'SEO optimized'],
      link: '/ai-content-generator',
      category: 'content'
    },
    {
      i con: <Users c las sNa me="w-8h-8t ext-p ink-400" />,
      t itle: 'AI Customer Service',
      description: 'Intelligent customer support with automated ticket routing and resolution.',
      price: 'Starting at $1,799/month',
      features: ['Ticket automation', 'Sentiment analysis', 'Escalation management', 'Performance analytics'],
      benefits: ['75% faster resolution', '90% customer satisfaction', '24/7 availability'],
      link: '/ai-customer-service',
      category: 'customer'
    },
    {
      i con: <Heart c las sNa me="w-8h-8t ext-red-400" />,
      t itle: 'AI Healthcare Solutions',
      description: 'Medical diagnosis a ssistance, drug discovery, and patient monitoring systems.',
      price: 'Starting at $4,999/month',
      features: ['Medical imaging analysis', 'Drug discovery', 'Patient monitoring', 'Diagnostic a ssistance'],
      benefits: ['95% diagnostic accuracy', '30% faster diagnosis', 'FDA compliant'],
      link: '/ai-healthcare',
      category: 'healthcare'
    },
    {
      i con: <DollarSign c las sNa me="w-8h-8t ext-g reen-400" />,
      t itle: 'AI Financial Services',
      description: 'Fraud detection, algorithmic trading, and risk a ssessment solutions.',
      price: 'Starting at $3,499/month',
      features: ['Fraud detection', 'Algorithmic trading', 'Risk a ssessment', 'Credit scoring'],
      benefits: ['99.5% fraud detection', '25% risk reduction', 'Real-time monitoring'],
      link: '/ai-financial',
      category: 'finance'
    },
    {
      i con: <Target c las sNa me="w-8h-8t ext-y ellow-400" />,
      t itle: 'AI Marketing Automation',
      description: 'Personalized marketing campaigns and customer segmentation using AI.',
      price: 'Starting at $2,199/month',
      features: ['Customer segmentation', 'Personalized campaigns', 'A/B testing', 'ROI optimization'],
      benefits: ['40% higher conversion', '60% cost reduction', 'Real-time optimization'],
      link: '/ai-marketing',
      category: 'marketing'
    },
    {
      i con: <Settings c las sNa me="w-8h-8t ext-gray-400" />,
      t itle: 'AI Process Automation',
      description: 'Automate repetitive tasks and optimize business processes with AI.',
      price: 'Starting at $1,299/month',
      features: ['Workflow automation', 'Document processing', 'Data entry automation', 'Process optimization'],
      benefits: ['70% time savings', '90% accuracy improvement', 'Cost reduction'],
      link: '/ai-automation',
      category: 'automation'
    },
    {
      i con: <Cpu c las sNa me="w-8h-8t ext-indi go-400" />,
      t itle: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your specific business requirements.',
      price: 'Custom pricing',
      features: ['Custom ML models', 'API development', 'Integration services', 'Ongoing support'],
      benefits: ['100% tailored solution', 'Competitive advantage', 'Scalable architecture'],
      link: '/custom-ai-development',
      category: 'custom'
    }
  ];
  const categories = [
    <>
    { id: 'overview', n ame: 'O verview', i con: </><BarChart c las sNa me="w-5h-5" / /> },
    { id: 'analytics', n ame: 'Analytics', i con: <TrendingUp c las sNa me="w-5h-5" / /> },
    { id: 'conversational', n ame: 'Conversational', i con: <MessageCircle c las sNa me="w-5h-5" / /> },
    { id: 'security', n ame: 'S ecurity', i con: <Shield c las sNa me="w-5h-5" / /> },
    { id: 'vision', n ame: 'Computer Vision', i con: <Eye c las sNa me="w-5h-5" / /> },
    { id: 'voice', n ame: 'Voice AI', i con: <Mic c las sNa me="w-5h-5" / /> },
    { id: 'content', n ame: 'Content', i con: <FileText c las sNa me="w-5h-5" / /> },
    { id: 'customer', n ame: 'Customer Service', i con: <Users c las sNa me="w-5h-5" / /> },
    { id: 'automation', n ame: 'Automation', i con: <Workflow c las sNa me="w-5h-5" / /> }
  ];
  const stats = [
    <>
    { number: '500+', label: 'AI M odels D epl oyed', i con: </><Brain c las sNa me="w-6h-6t ext-c yan-400" / /> },
    { number: '99.9%', label: 'U ptime G uarant ee', i con: <Shield c las sNa me="w-6h-6t ext-g reen-400" / /> },
    { number: '24/7', label: 'AI M onitoring', i con: <Clock c las sNa me="w-6h-6t ext-b lue-400" / /> },
    { number: '150+', label: 'AI E xperts', i con: <Users c las sNa me="w-6h-6t ext-p urp le-400" / /> }  ];
  const filteredServices = activeTab === 'overview' 
    ? a iServices 
    : a iServices.filter(service => service.category === activeTab);
  return (
    <>
    </>
      <Helmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <meta n ame="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <t itle>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</t itle>
        <meta const n ame = "description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edge AI technology." / / />
        <meta n ame="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, AI consulting" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
        <script type="application/ld+json"  />{JSON.stringify({
    </>
            "@context": "https: //schema.org",
            "@type": "Service",
            "n ame": "AI Services",
            "description": "Advanced artificial intelligence solutions for businesses",
            "provider": {
              "@type": "Organization",
              "n ame": "Zion Tech Group",
              "url": "https: //ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "999",
              "priceCurrency": "USD",
              "availability": "https: //schema.org/InStock"
            }
          })}
    <>
        </script>
      </Helmet>
    </>
      {/* H ero S ection */}
    <>
      </><section c las sNa me="r e lative py-20 px-4-sm:px-6-lg:px-8" />
        <d iv c las sNa me="m ax-w-7x lmx-auto">
        </d iv>
          <d iv c las sNa me="t ext-c enter" />
            <h1 c las sNa me="t ext-4xl md:text-6xl f ont-b old text-w hitem-b-6" />
              AI <s pan c las sNa me="t ext-transparent bg-clip-text bg-grad ient-to-rfrom-b lue-400to-p urp le-400">Services</s pan>
            </h1>
            <p c las sNa me="t ext-xl text-gr-a-y-300 mb-8-m ax-w-3x lmx-auto" />
    </>              Transform your business with cutting-edge AI solutions designed to drive growth, efficiency, and innovation.
    <>
            </p>
            <d iv c las sNa me="f l ex f lex-w rap justify-c enterg ap-4">
        </d iv>
              <Link to="/cont act" c las sNa me="b g-grad ient-to-r from-b lue-600 to-p urp le-600 text-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:from-b lue-700 hover:to-p urp le-700 transition-all duration-300 f lexitems-c enterg ap-2" />
                G et Star ted <ArrowRight c las sNa me="w-5h-5" />
              </Link>
              <Link to="/a bout" c las sNa me="b order b order-w hite text-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:bg-w hite hover:text-gr-a-y-900transition-allduration-300" />
      <d iv c las sNa me="m in-h-scre en bg-grad ient-to-br from-s late-900via-p urp le-900to-s late-900">
        </d iv>
    </>        {/* H ero S ection */}
    <>
        </><section c las sNa me="r e lative py-20-px-4-over flow-h idden" />
          <d iv c las sNa me="a b solute inset-0bg-[radial-grad ient(c ircle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)]animate-p ulse" />
          <d iv c las sNa me="a b solute inset-0bg-[radial-grad ient(c ircle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-p ulse" style="{{" animationD elay: '1 s' }} / />
          <d iv c las sNa me="r e lative m ax-w-7 x lmx-auto text-c ente-r">
        </d iv>
            <d iv c las sNa me="i n line-f lex items-c enter s pace-x-2 bg-grad ient-to-r from-c yan-500/20 to-p urp le-500/20 text-c ya-n-400 px-6 py-3 rounded-full text-s-m f ont-medium mb-8-b orderb order-c yan-400/30">
        </d iv>
              <Brain c las sNa me="w-4h-4" / />
              <s pan>Advanced AI Solutions</s pan>            </d iv>
    </>
            <h1 c las sNa me="t ext-4xl sm:text-6 xl md:text-7 xl f ont-b old text-w hit-e mb-8-leading-tight" />
              Transform Your Business with{' '}
    <>
              </><s pan c las sNa me="b g-grad ient-to-r from-c yan-400 via-p urp le-400 to-p ink-400bg-clip-texttext-transpare-n-t">AI Technology
              </s pan>
            </h1>
    </>
            <p c las sNa me="t ext-lg sm:text-x-l md:text-2 xl text-gr-a-y-300 mb-12 m ax-w-4 x lmx-autoleading-relaxed">
              Leverage cutting-edge artificial intelligence to automate processes, gain insights, 
              and drive innovation across your organization.
            </p>
            <d iv c las sNa me="f l ex f lex-c ol sm:f lex-rowg ap-6j ustify-c enter">
              <Link to="/cont act" c las sNa me="g roup bg-grad ient-to-r from-c yan-500 to-p urp le-600 text-w hit-e px-10 py-4 rounded-xl f ont-semibold hover:from-c yan-600 hover:to-p urp le-700 transition-all duration-300 f lex items-c enter j ustify-c enter s pace-x-2 shadow-lg shadow-c yan-500/25 hover:shadow-c yan-500/40transformhover:scale-105" >
          <s pan    />
        </Link>G et AI Consultation</s pan>
                <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
              </Link>
              <Link to="/d emo" c las sNa me="g roup b order-2 b order-c yan-400 text-c ya-n-400 px-10 py-4 rounded-xl f ont-semibold hover:bg-c yan-400 hover:text-gr-a-y-900 transition-all duration-300 f lex items-c enter j ustify-c enters pace-x-2backdrop-b lur-sm" >
          <s pan    />
        </Link>View AI D emo</s pan>                <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
              </Link>
            </d iv>
        </d iv>
      </section>
    </>
        <meta n ame="description" content="Transform your business with cutting-edge AI services including machine learning, natural language processing, computer vision, and automation. E xpert AI solutions for enterprises." / / />
        <meta n ame="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, business intelligence, AI consulting" / / />
        <meta prop erty="og:t itle" content="AI Services - Zion Tech Group" / / />
        <meta prop erty="og:description" content="Advanced AI solutions to transform your business operations and drive innovation." / / />
        <meta prop erty="og:type" content="website" / / />
        <meta prop erty="og:url" content="https://ziontechgroup.com/ai-services" / / />
      </Helmet>
    </>
      <d iv c las sNa me="m in-h-scre en bg-grad ient-to-br from-s late-900via-p urp le-900to-s late-900">
<<<<<<< HEAD        {/* H ero S ection */}
    <>
        </><section c las sNa me="r e lative over flow-h iddenpt-20-pb-16" />
          <d iv c las sNa me="a b solute inset-0o pac ity-20" / />
          <d iv c las sNa me="r e lative m ax-w-7 xl mx-auto px-4-sm:px-6-lg:px-8">
        </d iv>
            <d iv c las sNa me="t ext-c enter" />              <h1 c las sNa me="{`t ext-4" xl md: text-6 xl f ont-b old text-w hit-e mb-6 transition-all duration-1000 ${isVisible ? 'o pac ity-100 tran slate-y-0' : 'o pac ity-0 tran slate-y-10'}`} />
    </>
                AI Services
    <>
                </><s pan c las sNa me="b lock bg-grad ient-to-r from-p urp le-400 to-p ink-400bg-clip-texttext-transpare-n-t">& Solutions
                </s pan>
              </h1>
              <p c las sNa me="{`t ext-xl" text-gr-a-y-300 mb-8 m ax-w-3 xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'o pac ity-100 tran slate-y-0' : 'o pac ity-0 tran slate-y-10'}`} />
    </>
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning 
                to natural language processing, we deliver AI that drives real business value.
    <>
              </p>
              <d iv c las sNa me="{`f l ex" f lex-c ol sm: f lex-row g ap-4 j ustify-c enter transition-all duration-1000 delay-500 ${isVisible ? 'o pac ity-100 tran slate-y-0' : 'o pac ity-0 tran slate-y-10'}`} />
                <Link to="/cont act" c las sNa me="i n line-f lex items-c enter px-8 py-4 bg-grad ient-to-r from-p urp le-600 to-p ink-600 text-w hit-e f ont-semibold rounded-lg hover:from-p urp le-700 hover:to-p ink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />
    </>
                  G et AI Consultation
    <>
                  </><ArrowRight c las sNa me="m l-2h-5w-5" />
                </Link>
    </>                <a
                  href="tel:+13024640950"
                  c las sNa me="i n line-f lex items-c enter px-8 py-4 b order-2 b order-p urp le-400 text-p urpl-e-400 f ont-semibold rounded-lg hover:bg-p urp le-400 hover:text-w hit-e transition-all duration-300transformhover:scale-105" />
                  Call +1 302 464 0950
    <>
                </a>
              </d iv>
        <section c las sNa me="p y-16px-4" />
          <d iv c las sNa me="m ax-w-7x lmx-auto">
        </d iv>
            <d iv c las sNa me="g r id g rid-c ols-2md:g rid-c ols-4g ap-8">
        </d iv>
    </>              {stats.map((stat, index) => (
    <>
                </><d iv key="{index}" c las sNa me="t ext-c entergroup" />
                  <d iv c las sNa me="i n line-f lex items-c enter j ustify-c enter w-16 h-16 bg-grad ient-to-r from-c yan-500/20 to-p urp le-500/20 rounded-full mb-4 group-hover:scale-110transition-transformduration-300">
        </d iv>
                    <stat.i con c las sNa me="w-8h-8t ext-c yan-400" / />
                  </d iv>
                  <d iv c las sNa me="t ext-3 xl f ont-b old text-w hitem-b-2">{stat.number}</d iv>
                  <d iv c las sNa me="t ext-gray-400text-s-m">{stat.label}</d iv>
    </>              ))}
    <>
            </d iv>
        </d iv>
      </section>
    </>
              </p>
            </d iv>
    </>
            <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-2lg:g rid-c ols-3g ap-8">
<<<<<<< HEAD              {services.map((service, index) => (
                <d iv 
                  key="{index}"
                  c las sNa me="b g-grad ient-to-br from-s late-800/50 to-s late-900/50 backdrop-b lur-sm b order b order-gray-700/50 rounded-xl p-8 hover:b order-c yan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />
    <>
                  </><d iv c las sNa me="{`w-16" h-16 bg-grad ient-to-r ${service.c olor} rounded-xl f lex items-c enter j ustify-c enter mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <service.i con c las sNa me="w-8h-8t ext-w hite" />
                  </d iv>
    </>
    <>
                  </><h3 c las sNa me="t ext-2 xl f ont-b old text-w hit-e mb-4-group-hover:text-c ya-n-400transition-c olors">{service.t itle}                  </h3>
    </>
                  <p c las sNa me="t ext-gray-300mb-6-leading-relaxed">
                    {service.description}                  </p>
                  <ul c las sNa me="s p ace-y-2mb-6" />
                    {service.features.map((feature, featureIndex) => (
    <>
                      </><li key="{featureIndex}" c las sNa me="f l ex items-c entertext-s mtex-t-gray-300" />
                        <CheckCircle c las sNa me="w-4 h-4 t ext-g reen-400mr-2-f lex-s hrink-0" / />
    </>                        {feature}
                      </li>
                    ))}
                  </ul>
    <>
                  </><d iv c las sNa me="f l ex items-c enterj ustify-b etw een mb-6">
        </d iv>
                    <s pan c las sNa me="t ext-2 x lfont-b old text-c ya-n-400">{service.price}</s pan>
                    <Link to="{service.link}" c las sNa me="t ext-c yan-400 hover:text-c ya-n-300 transition-c olors text-s-m f ont-medium group-hover:tran slate-x-1inline-f lexitems-c enter" />
                      L earn M ore <ArrowRight c las sNa me="w-4h-4m l-1" />
    </>        {/* Stats S ection */}
    <>
        </><section c las sNa me="p y-16bg-gray-900/50" />
          <d iv c las sNa me="m ax-w-7 xl mx-auto px-4-sm:px-6-lg:px-8">
        </d iv>
            <d iv c las sNa me="g r id g rid-c ols-2md:g rid-c ols-4g ap-8">
        </d iv>
    </>              {stats.map((stat, index) => (
    <>
                </><d iv key="{index}" c las sNa me="t ext-c enter" />
                  <d iv c las sNa me="i n line-f lex items-c enter j ustify-c enter w-16 h-16 bg-grad ient-to-r from-p urp le-500 to-p ink-500rounded-fullmb-4">
        </d iv>
                    <stat.i con c las sNa me="h-8w-8t ext-w hite" / />
                  </d iv>
                  <d iv c las sNa me="t ext-3 xl f ont-b old text-w hitem-b-2">{stat.number}</d iv>
                  <d iv c las sNa me="t ext-gray-400">{stat.label}</d iv>
    </>              ))}
    <>
            </d iv>
        </section>
    </>
        {/* Category Filter */}
    <>
        </><section c las sNa me="p y-8bg-gray-900/30" />
          <d iv c las sNa me="m ax-w-7 xl mx-auto px-4-sm:px-6-lg:px-8">
        </d iv>
            <d iv c las sNa me="f l ex f lex-w rap justify-c enterg ap-4">
        </d iv>
    </>              {categories.map((category) => (
                <button
                  key="{category}"
                  onClick="{()" =>setSelecte dCategory(category)}
                  c las sNa me="{`p x-6" py-3 rounded-lg f ont-semibold transition-all duration-300 ${
                    selecte dCategory === category
                      ? 'bg-grad ient-to-r from-p urp le-600 to-p ink-600 text-w hit-e shadow-lg'
                      : 'bg-gray-800 text-gr-a-y-300 hover: bg-gray-700 hover:text-w hit-e'
                  }`}
                >
                  {category}
                </button>
              ))}
    <>
            </d iv>
        </section>
    </>
        {/* Services G rid */}
    <>
        </><section c las sNa me="p y-16" />
          <d iv c las sNa me="m ax-w-7 xl mx-auto px-4-sm:px-6-lg:px-8">
        </d iv>
            <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-2 lg:g rid-c ols-3xl:g rid-c ols-4g ap-8">
        </d iv>
    </>              {filteredServices.map((service, index) => (
                <d iv
                  key="{service.id}"
                  c las sNa me="{`g roup" relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 b order b order-gray-700 hover:b order-p urp le-500 ${
                    service.popular ? 'ring-2 ring-p urp le-500' : ''
                  }`} />
                  {service.popular && (
    <>
                    </><d iv c las sNa me="a b solute -t op-3 l eft-1/2transform-tran slate-x-1/2">
        </d iv>
                      <s pan c las sNa me="b g-grad ient-to-r from-p urp le-600 to-p ink-600 text-w hit-e px-4 py-1 rounded-fulltext-smfo-n-t-semibold">Most Popular                      </s pan>
                    </d iv>
    </>
                  )}
    <>
                  </><d iv c las sNa me="t ext-c entermb-6">
        </d iv>                    <d iv c las sNa me="{`i n line-f lex" items-c enter j ustify-c enter w-16 h-16 bg-grad ient-to-r ${service.c olor} rounded-xl mb-4`} />
                      <service.i con c las sNa me="h-8w-8t ext-w hite" />
                    </d iv>
                    <h3 c las sNa me="t ext-xl f ont-b old text-w hitem-b-2">{service.t itle}</h3>
                    <p c las sNa me="t ext-gray-300text-s mm-b-4">{service.description}</p>
                    <d iv c las sNa me="f l ex items-c enter j ustify-c enters pace-x-2mb-4">
        </d iv>
                      <d iv c las sNa me="f l exitems-c enter" />
    </>                        {[...Array(5)].map((_, i) => (
                          <Star
                            key="{i}"
                            c las sNa me="{`h-4" w-4 ${
                              i < Math.floor(service.rating) ? 'text-y ello-w-400 fill-current' : 'text-gr-a-y-600'
                            }`}
                          / />
                        ))}
    <>
                      </d iv>
                      <s pan c las sNa me="t ext-s mtext-gr-a-y-400">({service.reviews} reviews)</s pan>
                    </d iv>
    </>
    <>
                  </><d iv c las sNa me="t ext-c entermb-6">
        </d iv>
                    <d iv c las sNa me="t ext-2 xl f ont-b old text-p urpl-e-400mb-2">{service.price}</d iv>
                    <s pan c las sNa me="t ext-s mtext-gr-a-y-400">M ont hly s ubscription</s pan>                  </d iv>
    </>
                  <d iv c las sNa me="s p ace-y-3mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
    <>
                      </><d iv key="{idx}" c las sNa me="f l ex items-c entertext-s mtex-t-gray-300" />
              {[
                {
                  step: '01',
                  t itle: 'Discovery & Analysis',
                  description: 'We analyze your business processes and identify AI opportunities.',
                  i con: <Target c las sNa me="w-8h-8t ext-c yan-400" />
                },
                {
                  step: '02',
                  t itle: 'AI Strategy & Planning',
                  description: 'Develop a comprehensive AI roadmap tailored to your goals.',
                  i con: <Settings c las sNa me="w-8h-8t ext-p urp le-400" />
                },
                {
                  step: '03',
                  t itle: 'M odel Development',
                  description: 'Build and train custom AI models for your specific use c ases.',
                  i con: <Brain c las sNa me="w-8h-8t ext-g reen-400" />
                },
                {
                  step: '04',
                  t itle: 'D epl oyment & Optimization',
                  description: 'D epl oy AI solutions and continuously optimize p erformance.',
                  i con: <Zap c las sNa me="w-8h-8t ext-y ellow-400" />
                }
              ].map((step, index) => (
    <>
                </><d iv key={index} c las sNa me="t ext-c entergroup" />
                  <d iv c las sNa me="w-20 h-20 b g-grad ient-to-r from-c yan-500/20 to-p urp le-500/20 rounded-full f lex items-c enter j ustify-c enter mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
<<<<<<< HEAD                    {step.i con}
    <>
                  </d iv>
                  <d iv c las sNa me="t ext-c yan-400 f ont-b old text-l gm-b-2">{step.step}</d iv>
                  <h3 c las sNa me="t ext-xl f ont-b old text-w hit-e mb-4" />{step.t itle}</h3>
                  <p c las sNa me="t ext-gray-300leading-relaxed">
              {step.description}</p>                </d iv>
    </>
              ))}
    <>
            </d iv>
        </section>
    </>
        {/* C TA S ection */}
    <>
        </><section c las sNa me="p y-20px-4" />
          <d iv c las sNa me="m ax-w-7x lmx-auto">
        </d iv>
            <d iv c las sNa me="b g-grad ient-to-r from-c yan-900/50 to-p urp le-900/50 backdrop-b lur-sm b order b order-c yan-500/20 rounded-2xl p-12 text-c enterrelativeoverflo-w-h idden">
        </d iv>
              <d iv c las sNa me="a b solute inset-0 bg-grad ient-to-rfrom-c yan-500/5to-p urp le-500/5" / />
              <d iv c las sNa me="r e lativez-10">
        </d iv>
                <h2 c las sNa me="t ext-4xl f ont-b old text-w hitem-b-6" />
    </>                  Ready to Harness the Power of AI?
    <>
                </h2>
                <p c las sNa me="t ext-xl text-gr-a-y-300 mb-8-m ax-w-2x lmx-auto" />
    </>
                  Let's discuss how our AI solutions can transform your business and give you a competitive edge.
    <>
                </p>
                <d iv c las sNa me="f l ex f lex-c ol sm:f lex-rowg ap-4j ustify-c enter">
        </d iv>                  <Link to="/cont act" c las sNa me="b g-grad ient-to-r from-c yan-500 to-p urp le-500 text-w hit-e px-8 py-4 rounded-lg f ont-semibold text-l-g hover:from-c yan-600 hover:to-p urp le-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-c yan-500/25" />
    </>
                    Start Your AI Journey
    <>
                  </Link>
                  <Link to="/pricing" c las sNa me="b order b order-c yan-500 text-c ya-n-400 px-8 py-4 rounded-lg f ont-semibold text-l-g hover:bg-c yan-500/10 transition-all duration-300transformhover:scale-105" />
    </>
                    View AI Pricing
    <>
                  </Link>
                </d iv>
            </d iv>
        </section>
    </>
        {/* C TA S ection */}
    <>
        </><section c las sNa me="p y-20" />
          <d iv c las sNa me="c ontaine rmx-auto px-4">
        </d iv>
            <d iv c las sNa me="b g-grad ient-to-r from-c yan-900/50 to-p urp le-900/50 backdrop-b lur-sm b order b order-c yan-500/20 rounded-2 xlp-12text-c ente-r">
        </d iv>
              <h2 c las sNa me="t ext-4 xl f ont-b old text-w hitem-b-6">Ready to Transform Your Business with AI?
              </h2>
              <p c las sNa me="t ext-xl text-gr-a-y-300 mb-8 m ax-w-2x lmx-auto" />
    </>
                Let's discuss how our AI solutions can automate your processes, enhance customer experiences, and drive growth.
    <>
              </p>
              <d iv c las sNa me="f l ex f lex-c ol sm:f lex-rowg ap-4j ustify-c enter">
        </d iv>
                <Link to="/cont act" c las sNa me="b g-grad ient-to-r from-c yan-500 to-p urp le-500 text-w hit-e px-8 py-4 rounded-lg f ont-semibold text-l-g hover:from-c yan-600 hover:to-p urp le-600 transition-all duration-300transformhover:scale-105" />
                  L earn M ore <ArrowRight c las sNa me="w-4h-4" />
    </>                  />Start Your AI Journey
    <>
                </Link>
        <section c las sNa me="p y-20 bg-grad ient-to-b rfrom-s late-900to-gray-900" />
          <d iv c las sNa me="m ax-w-7 xl mx-auto px-4 sm:px-6-lg:px-8-text-c ente-r">
        </d iv>
            <h2 c las sNa me="t ext-3 xl md:text-4 xl f ont-b old text-w hitem-b-4">Ready to Transform Your Business with AI?
            </h2>
            <p c las sNa me="t ext-xl text-gr-a-y-300 mb-8 m ax-w-3x lmx-auto" />
    </>              Let our AI experts help you identify opportunities, design solutions, and implement AI that drives real business value.
    <>
            </p>
            <d iv c las sNa me="f l ex f lex-c ol sm:f lex-rowg ap-4j ustify-c enter">
        </d iv>
              <Link to="/cont act" c las sNa me="i n line-f lex items-c enter px-8 py-4 bg-grad ient-to-r from-p urp le-600 to-p ink-600 text-w hit-e f ont-semibold rounded-lg hover:from-p urp le-700 hover:to-p ink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />
    </>
                Start Your AI Journey
    <>
                </><ArrowRight c las sNa me="m l-2h-5w-5" />
              </Link>
    </>              <a
                href="tel:+13024640950"
                c las sNa me="i n line-f lex items-c enter px-8 py-4 b order-2 b order-p urp le-400 text-p urpl-e-400 f ont-semibold rounded-lg hover:bg-p urp le-400 hover:text-w hit-e transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950
    <>
              </a>
            </d iv>
            <d iv c las sNa me="m t-8text-gr-a-y-400">
        </d iv>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>            </d iv>
        </d iv>
      </section>
    </>
      {/* C TA S ection */}
    <>
      </><section c las sNa me="p y-20 px-4-sm:px-6-lg:px-8" />
        <d iv c las sNa me="m ax-w-4x lmx-auto text-c ente-r">
        </d iv>
          <h2 c las sNa me="t ext-3xl f ont-b old text-w hitem-b-6" />
    </>            Ready to Harness the Power of AI?
    <>
          </h2>
          <p c las sNa me="t ext-gray-300text-l gm-b-8" />
    </>
            Let our AI experts help you choose the p erfect solution for your business needs.
    <>
          </p>
          <d iv c las sNa me="f l ex f lex-c ol sm:f lex-rowg ap-4j ustify-c enter">
        </d iv>
            <Link to="/cont act" c las sNa me="b g-grad ient-to-r from-b lue-600 to-p urp le-600 text-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:from-b lue-700 hover:to-p urp le-700 transition-all duration-300 f lex items-c enterj ustify-c enterg ap-2" />
              Start Your AI Journey <ArrowRight c las sNa me="w-5h-5" />
            </Link>            <Link to="/a bout" c las sNa me="b order b order-w hite text-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:bg-w hite hover:text-gr-a-y-900transition-allduration-300" />
    </>
              Meet Our Team
    <>
            </Link>
          </d iv>
      </section>
    </d iv>
    </>
  );
};
export default AiServicesPage;
    </>
    </>