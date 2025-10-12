import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {;
'use client';
  Brain, Zap, Shield, BarChart, MessageCirc l e, Eye, Mic, 
  FileText, Users, Heart, DollarSign, Target, Settings, 
  CheckCirc l e, ArrowRight, Star, TrendingUp,
  Cpu;
} from 'lucide-react';
import { Brain, Zap, Shield, BarChart, MessageCirc l e, Eye, Mic, FileText, Users, Target, Settings, CheckCirc l e, ArrowRight, Clock, TrendingUp, Workflow } from 'lucide-react';

const AiServicesPa g e: React.FC = () => {
  const [activeTab, setActiveT a b] = useState('overview');
  constaiServices= [
    {
      icon: <BrainclassName="w-5h-5ml-2" />,
      title: 'AI Analytics & Business Intelligen c e',
      description: 'Transform your data into actionable insights with advanced AI-poweredanalytics.',
      price: 'Starting at $2,999/month',
      features: ['Real-timedashboards', 'Predictive analytics', 'Custom ML models', 'Data visualizati o n'],
      benefits: ['40% increase in decision speed', '25% cost reduction', '99.9% accuracy'],
      link: '/ai-analytics',
      category: 'analytics';
    },
    {
      icon: <MessageCirc leclassName="w-5h-5ml-2" />,
      title: 'AI Chatbot & Conversation a l AI',
      description: 'Intellige n t chatbots that understand context and provide human-likeinteraction s.',
      price: 'Starting at $1,499/month',
      features: ['Natural language processing', 'Multi-languagesupport', 'Voice integrati o n', '24/7 availabili t y'],
      benefits: ['80% reduction in support tickets', '60% faster response time', '95% customer satisfacti o n'],
      link: '/ai-chatbot-builder',
      category: 'conversation a l';
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'AI Cybersecuri t y Solutions',
      description: 'Advanced threat detection and prevention using machine learning algorithms.',
      price: 'Starting at $3,999/month',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring'],
      benefits: ['99.8% threat detection rate', '50% faster incident response', 'Zero false positives'],
      link: '/ai-cybersecurity',
      category: 'security';
    },
    {
      icon: <EyeclassName="w-5h-5ml-2" />,
      title: 'Computer Vision & Image Recogniti o n',
      description: 'Advanced image analysis and recogniti o n capabiliti e s for various industries.',
      price: 'Starting at $2,499/month',
      features: ['Object detection', 'Facial recogniti o n', 'Quality inspection', 'Medical imaging'],
      benefits: ['90% accuracy improveme n t', '70% faster processing', '24/7 monitoring'],
      link: '/computer-vision',
      category: 'vision';
    },
    {
      icon: <MicclassName="w-5h-5ml-2" />,
      title: 'AI Voice & Speech Processing',
      description: 'Convert speech to text, analyze sentiment, and create voice assistants.',
      price: 'Starting at $1,999/month',
      features: ['Speech-to-text', 'Voice synthesis', 'Sentiment analysis', 'Multi-languagesupport'],
      benefits: ['95% accuracy rate', 'Real-timeprocessing', 'Custom voice models'],
      link: '/ai-voice-assistant',
      category: 'voice';
    },
    {
      icon: <FileTextclassName="w-5h-5ml-2" />,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      price: 'Starting at $999/month',
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'Product descriptio n s'],
      benefits: ['80% time savings', 'Consistent quality', 'SEO optimized'],
      link: '/ai-content-generator',
      category: 'content';
    },
    {
      icon: <UsersclassName="w-5h-5ml-2" />,
      title: 'AI Customer Service',
      description: 'Intellige n t customer support with automated ticket routing and resolution.',
      price: 'Starting at $1,799/month',
      features: ['Ticket automation', 'Sentiment analysis', 'Escalation management', 'Performan c e analytics'],
      benefits: ['75% faster resolution', '90% customer satisfacti o n', '24/7 availabili t y'],
      link: '/ai-customer-service',
      category: 'customer';
    },
    {
      icon: <HeartclassName="w-5h-5ml-2" />,
      title: 'AI Healthcare Solutions',
      description: 'Medical diagnosis assistance, drug discovery, and patient monitoring systems.',
      price: 'Starting at $4,999/month',
      features: ['Medical imaging analysis', 'Drug discovery', 'Patient monitoring', 'Diagnostic assistance'],
      benefits: ['95% diagnostic accuracy', '30% faster diagnosis', 'FDA compliant'],
      link: '/ai-healthcare',
      category: 'healthcare';
    },
    {
      icon: <DollarSignclassName="w-5h-5ml-2" />,
      title: 'AI Financial Services',
      description: 'Fraud detection, algorithm i c trading, and risk assessment solutions.',
      price: 'Starting at $3,499/month',
      features: ['Fraud detection', 'Algorithm i c trading', 'Risk assessment', 'Credit scoring'],
      benefits: ['99.5% fraud detection', '25% risk reduction', 'Real-timemonitoring'],
      link: '/ai-financial',
      category: 'finance';
    },
    {
      icon: <TargetclassName="w-5h-5ml-2" />,
      title: 'AI Marketing Automation',
      description: 'Personaliz e d marketing campaigns and customer segmentati o n using AI.',
      price: 'Starting at $2,199/month',
      features: ['Customer segmentati o n', 'Personaliz e d campaigns', 'A/B testing', 'ROI optimizati o n'],
      benefits: ['40% higher conversion', '60% cost reduction', 'Real-timeoptimizatio n'],
      link: '/ai-marketing',
      category: 'marketing';
    },
    {
      icon: <SettingsclassName="w-5h-5ml-2" />,
      title: 'AI Process Automation',
      description: 'Automate repetitive tasks and optimize business processes with AI.',
      price: 'Starting at $1,299/month',
      features: ['Workflow automation', 'Document processing', 'Data entry automation', 'Process optimizati o n'],
      benefits: ['70% time savings', '90% accuracy improveme n t', 'Cost reduction'],
      link: '/ai-automation',
      category: 'automation';
    },
    {
      icon: <CpuclassName="w-5h-5ml-2" />,
      title: 'Custom AI Developme n t',
      description: 'Bespoke AI solutions tailored to your specific business requiremen t s.',
      price: 'Custom pricing',
      features: ['Custom ML models', 'API developme n t', 'Integrati o n services', 'Ongoing support'],
      benefits: ['100% tailored solution', 'Competiti v e advantage', 'Scalable architectu r e'],
      link: '/custom-ai-development',
      category: 'custom';
    }
  ];
  constcategories= [
    { id: 'overview', name: 'Overview', icon: <BarChartclassName="w-5h-5ml-2" /> ,},
    { id: 'analytics', name: 'Analytics', icon: <TrendingUpclassName="w-5h-5ml-2" /> ,},
    { id: 'conversation a l', name: 'Conversation a l', icon: <MessageCirc leclassName="w-5h-5ml-2" /> ,},
    { id: 'security', name: 'Security', icon: <ShieldclassName="w-5h-5ml-2" /> ,},
    { id: 'vision', name: 'Computer Vision', icon: <EyeclassName="w-5h-5ml-2" /> ,},
    { id: 'voice', name: 'Voice AI', icon: <MicclassName="w-5h-5ml-2" /> ,},
    { id: 'content', name: 'Content', icon: <FileTextclassName="w-5h-5ml-2" /> ,},
    { id: 'customer', name: 'Customer Service', icon: <UsersclassName="w-5h-5ml-2" /> ,},
    { id: 'automation', name: 'Automation', icon: <WorkflowclassName="w-5h-5ml-2" /> ,}
  ];
  conststats= [
    { number: '500+', label: 'AI Models Deployed', icon: <BrainclassName="w-5h-5ml-2" /> ,},
    { number: '99.9%', label: 'Uptime Guarantee', icon: <ShieldclassName="w-5h-5ml-2" /> ,},
    { number: '24/7', label: 'AI Monitoring', icon: <ClockclassName="w-5h-5ml-2" /> ,},
    { number: '150+', label: 'AI Experts', icon: <UsersclassName="w-5h-5ml-2" /> ,}
  ];
  const filteredServices= activeTab === 'overview' 
    ? aiServices;
    : aiServices.filter(service => service.category === activeTab);
return (
    <>
      <Helmet></Helmet>
        <title />AI Services - Zion Tech Group | Advanced Artificial Intelligen c e Solutions</title>
        <metaconstname= "description" content="Comprehensi v e AI services including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edgeAItechnology." /  />
        <meta name="keywords" content="AI services, artificial intelligen c e, machine learning, NLP, computer vision, AI automation, AI consulting" />
        <linkrel="canonical" href="https://ziontechgro u p.com/ai-services"  />
        <scripttype="applicati o n/ld+json"  />{JSON.stringify({)
            "@context": "https: //schema.org",
            "@type": "Service",
            "name": "AI Services",
            "description": "Advanced artificial intelligen c e solutions for businesses",
            "provider": {
              "@type": "Organizati o n",
              "name": "Zion Tech Group",
              "url": "https: //ziontechgro u p.com";
            },
            "offers": {
              "@type": "Offer",
              "price": "999",
              "priceCurren c y": "USD",
              "availabili t y": "https: //schema.org/InStock";
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h1 className="w-5h-5ml-2" />
              AI <span className="w-5h-5ml-2" />Services</span>
            </h1>
            <p className="w-5h-5ml-2">Transform your business with cutting-edgeAIsolutions designed to drive growth, efficiency, and innovation.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Link
          to="/contact"
          className="bg-gradient-to-rfrom-blue-600to-purple-600text-whitepx-8py-3rounded-lgfont-semiboldhover:from-blue-700hover:to-purple-700transition-allduration-300flexitems-centergap-2"
        >
          Get Started;
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
              <Linkto="/about" className="borderborder-whitetext-whitepx-8py-3rounded-lgfont-semiboldhover:bg-whitehover:text-gray-900transition-allduration-300" />
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse" style="{{" animationDel a y: '1 s' ,}}  />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <BrainclassName="w-5h-5ml-2" />
              <span />Advanced AI Solutions</span>
            </div>
            
            <h1 className="w-5h-5ml-2" />
              Transform Your Business with{' '}
              <span className="w-5h-5ml-2" />AI Technology;
              </span>
            </h1>
            
            <p className="w-5h-5ml-2">Leverage cutting-edgeartificialintelligen c e to automate processes, gain insights, 
              and drive innovation across your organizati o n.;
            </p>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Linkto="/contact" className="groupbg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-cyan-500/25hover:shadow-cyan-500/40transformhover:scale-105" />
                <span />Get AI Consultati o n</span>
                <ArrowRight className="w-5h-5ml-2" />
              </Link>
              <Linkto="/demo" className="groupborder-2border-cyan-400text-cyan-400px-10py-4rounded-xlfont-semiboldhover:bg-cyan-400hover:text-gray-900transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                <span />View AI Demo</span>
                <ArrowRight className="w-5h-5ml-2" />
              </Link>
            </div>
        </div>
      </section>

        <meta name="description" content="Transform your business with cutting-edgeAIservices including machine learning, natural language processing, computer vision, and automation. Expert AI solutions for enterpris e s." />
        <meta name="keywords" content="AI services, artificial intelligen c e, machine learning, NLP, computer vision, AI automation, business intelligen c e, AI consulting" />
        <metaproperty="og:title" content="AI Services - Zion Tech Group" /  />
        <metaproperty="og:description" content="Advanced AI solutions to transform your business operations and drive innovation." /  />
        <metaproperty="og:type" content="website" /  />
        <metaproperty="og:url" content="https://ziontechgro u p.com/ai-services" /  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h1 className="{`text-4" xl md: text-6xlfont-boldtext-whitemb-6transition-allduration-1000 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10',}`} />
                AI Services;
                <span className="w-5h-5ml-2" />& Solutions;
                </span>
              </h1>
              <p className="{`text-xl" text-gray-300mb-8max-w-3xlmx-autotransition-allduration-1000delay-300 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10'}`} />
                Transform your business with cutting-edgeartificialintelligen c e solutions. From machine learning;
                to natural language processing, we deliver AI that drives real business value.;
              </p>
              <div className="{`flex" flex-colsm: flex-rowgap-4justify-centertransition-allduration-1000delay-500 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10',}`} />
                <Link
          to="/contact"
          className="inline-flexitems-centerpx-8py-4bg-gradient-to-rfrom-purple-600to-pink-600text-whitefont-semiboldrounded-lghover:from-purple-700hover:to-pink-700transition-allduration-300transformhover:scale-105shadow-lghover:shadow-xl"
        >
          Get AI Consultati o n;
                  
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                <a;
                  href="tel:+130246409 5 0";
                  className="inline-flexitems-centerpx-8py-4border-2border-purple-400text-purple-400font-semiboldrounded-lghover:bg-purple-400hover:text-whitetransition-allduration-300transformhover:scale-105" />
                  Call +1 302 464 0950;
                </a>
              </div>
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {stats.map((stat, index) => ())
                <divkey="{index}" className="text-centergroup" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <stat.iconclassName="w-8h-8text-cyan-400"  />
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.number}</div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.label}</div>
              ))}
            </div>
        </div>
      </section>

              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {services.map((service, index) => ())
                <div>>
                  key="{index}";
                  className="bg-gradient-to-brfrom-slate-800/50to-slate-900/50backdrop-blur-smborderborder-gray-700/50rounded-xlp-8hover:border-cyan-400/40transition-allduration-300grouphover:transformhover:scale-105" />
                  <div className="{`w-16" h-16bg-gradient-to-r ${service.color} rounded-xlflexitems-centerjustify-centermb-6group-hover: scale-110transition-transformduration-300`,} />
                    <service.iconclassName="w-8h-8text-white"  />
                  </div>
                  
                  <h3 className="w-5h-5ml-2" />{service.title}
                  </h3>
                  
                  <p className="w-5h-5ml-2">{service.description}
                  </p>

                  <ulclassName="w-5h-5ml-2" />
                    {service.features.map((feature, featureInd e x) => ())
                      <likey="{featureInd e x}" className="flexitems-centertext-smtext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />{service.price}</span>
                    <Link
          to="{service.link}";
          className="text-cyan-400hover:text-cyan-300transition-colorstext-smfont-mediumgroup-hover:translate-x-1inline-flexitems-center"
        >
          Learn More;
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
        {/* Stats Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {stats.map((stat, index) => ())
                <divkey="{index}" className="text-center" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <stat.iconclassName="h-8w-8text-white"  />
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.number}</div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.label}</div>
              ))}
            </div>
        </section>

        {/* Category Filter */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {categories.map((category) => ())
                <button;
                  key="{category}";
                  onClick="{()" =  />setSelectedCatego r y(category)}
                  className="{`px-6" py-3rounded-lgfont-semiboldtransition-allduration-300 ${
                    selectedCategory=== category;
                      ? 'bg-gradient-to-rfrom-purple-600to-pink-600text-whiteshadow-lg';
                      : 'bg-gray-800text-gray-300hover: bg-gray-700hover:text-white';
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
        </section>

        {/* Services Grid */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {filteredServic e s.map((service, index) => ())
                <div>>
                  key="{service.id}";
                  className="{`group" relative bg-gray-800rounded-xlp-6hover:bg-gray-700transition-allduration-300transform hover:scale-105borderborder-gray-700hover:border-purple-500 ${
                    service.popular ? 'ring-2ring-purple-500' : '';
                  }`} />
                  {service.popular && ()
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <span className="w-5h-5ml-2" />Most Popular;
                      </span>
                    </div>
                  )}
                  
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="{`inline-flex" items-centerjustify-centerw-16h-16bg-gradient-to-r ${service.color} rounded-xlmb-4`} />
                      <service.iconclassName="h-8w-8text-white"  />
                    </div>
                    <h3 className="w-5h-5ml-2" />{service.title}</h3>
                    <p className="w-5h-5ml-2">{service.description}</p>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                        {[...Array(5)].map((_, i) => ())
                          <Star;
                            key="{i}";
                            className="{`h-4" w-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400fill-current' : 'text-gray-600';
                            }`}
                           />
                        ))}
                      </div>
                      <span className="w-5h-5ml-2" />({service.reviews} reviews)</span>
                    </div>

                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{service.price}</div>
                    <span className="w-5h-5ml-2" />Monthly subscripti o n</span>
                  </div>

                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {service.features.slice(0, 4).map((feature, idx) => ())
                      <divkey="{idx}" className="flexitems-centertext-smtext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        <span />{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && ()
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">+{service.features.length - 4} more features>
                      </div>
                    )}
                  </div>

                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <Link
          to="{`/${service.id}`}";
          className="w-fullinline-flexitems-centerjustify-centerpx-4py-3bg-gradient-to-rfrom-purple-600to-pink-600text-whitefont-semiboldrounded-lghover:from-purple-700hover:to-pink-700transition-allduration-300transformhover:scale-105"
        >
          View Details;
                      
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                    <Linkto="/contact" className="w-fullinline-flexitems-centerjustify-centerpx-4py-3borderborder-purple-400text-purple-400font-semiboldrounded-lghover:bg-purple-400hover:text-whitetransition-allduration-300">Get Quote;
                    </Link>
                  </div>
              ))}
            </div>
        </section>

        {/* AI Process Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Our <span className="w-5h-5ml-2" />AI Process</span>
              </h2>
              <p className="w-5h-5ml-2">A proven methodolo g y for successful AI implementati o n;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {[
                {
                  step: '01',
                  title: 'Discovery & Analysis',
                  description: 'We analyze your business processes and identify AI opportuniti e s.',
                  icon: <TargetclassName="w-5h-5ml-2" />
                },
                {
                  step: '02',
                  title: 'AI Strategy & Planning',
                  description: 'Develop a comprehensi v e AI roadmap tailored to your goals.',
                  icon: <SettingsclassName="w-5h-5ml-2" />
                },
                {
                  step: '03',
                  title: 'Model Developme n t',
                  description: 'Build and train custom AI models for your specific use cases.',
                  icon: <BrainclassName="w-5h-5ml-2" />
                },
                {
                  step: '04',
                  title: 'Deployment & Optimizati o n',
                  description: 'Deploy AI solutions and continuous l y optimize performan c e.',
                  icon: <ZapclassName="w-5h-5ml-2" />
                }
              ].map((step, index) => ())
                <divkey={index} className="text-centergroup" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {step.icon}
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{step.step}</div>
                  <h3 className="w-5h-5ml-2" />{step.title}</h3>
                  <p className="w-5h-5ml-2">{step.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <h2 className="w-5h-5ml-2" />
                  Ready to Harness the Power of AI?;
                </h2>
                <p className="w-5h-5ml-2">Let's discuss how our AI solutions can transform your business and give you a competiti v e edge.;
                </p>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <Linkto="/contact" className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105shadow-lghover:shadow-cyan-500/25" />
                    Start Your AI Journey;
                  </Link>
                  <Linkto="/pricing" className="borderborder-cyan-500text-cyan-400px-8py-4rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10transition-allduration-300transformhover:scale-105" />
                    View AI Pricing;
                  </Link>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Ready to Transform Your Business with AI?;
              </h2>
              <p className="w-5h-5ml-2">Let's discuss how our AI solutions can automate your processes, enhance customer experienc e s, and drive growth.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Link
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105"
        >
          Learn More;
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                  />Start Your AI Journey;
                </Link>
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Ready to Transform Your Business with AI?;
            </h2>
            <p className="w-5h-5ml-2">Let our AI experts help you identify opportuniti e s, design solutions, and implement AI that drives real business value.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Link
          to="/contact"
          className="inline-flexitems-centerpx-8py-4bg-gradient-to-rfrom-purple-600to-pink-600text-whitefont-semiboldrounded-lghover:from-purple-700hover:to-pink-700transition-allduration-300transformhover:scale-105shadow-lghover:shadow-xl"
        >
          Start Your AI Journey;
                
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
              <a;
                href="tel:+130246409 5 0";
                className="inline-flexitems-centerpx-8py-4border-2border-purple-400text-purple-400font-semiboldrounded-lghover:bg-purple-400hover:text-whitetransition-allduration-300transformhover:scale-105" />
                Call +1 302 464 0950;
              </a>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <p />Email: kleber@ziontechgro u p.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <h2 className="w-5h-5ml-2" />
            Ready to Harness the Power of AI?;
          </h2>
          <p className="w-5h-5ml-2">Let our AI experts help you choose the perfect solution for your business needs.;
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Link
          to="/contact"
          className="bg-gradient-to-rfrom-blue-600to-purple-600text-whitepx-8py-3rounded-lgfont-semiboldhover:from-blue-700hover:to-purple-700transition-allduration-300flexitems-centerjustify-centergap-2"
        >
          Start Your AI Journey;
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
            <Linkto="/about" className="borderborder-whitetext-whitepx-8py-3rounded-lgfont-semiboldhover:bg-whitehover:text-gray-900transition-allduration-300" />
              Meet Our Team;
            </Link>
          </div>
      </section>
    </div>
  );
};

export default AiServicesPa g e;