import React from 'react'

import { Smartphone } from 'lucide-react'
import { CheckCircle, Database, Code, Cloud, Helmet } from 'lucide-react'
;
import { Smartphone, CheckCircle, Database, Code, Cloud, Helmet, Check } from 'lucide-react';
const AIMobileAppDevelopmentPage: React.FC = () => {
  const mobileServices = [
import {Smartphone, CheckCircle, Database, Code, Cloud, Helmet} from 'lucide-react';;
constAIMobileAppDevelopmentPage: React.FC= () =>{constmobileServices= [
    {
      title: 'AI-Powered Mobile App Development',
      description: 'Complete mobile app development with AI integration, machine learning capabilities, and intelligent features.',
      icon: '📱',
      price: '$4,99 9/project',
      features: [
        'Native iOS & Android development',
        'AI/ML integration',
        'Cross-platform compatibility',
        'Real-time data processing',
        'Push notifications',
        'Offline functionality',
        'App store optimization',
        'Maintenance & updates'
      ],
      benefits: [
        'Faster development time',
        'Lower development costs',
        'Advanced AI features',
        'Scalable architecture'
      ],
      marketPrice: '$8,00 0-1 5,00 0/project',
      category: 'Mobile Development',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'TensorFlow Lite', 'Core ML'],
      platforms: ['iOS', 'Android', 'Cross-platform']
   },
    {title: 'AI Chatbot Mobile Integration',
      description: 'Intelligent chatbot integration for mobile apps with natural language processing and context awareness.',
      icon: '🤖',
      price: '$1,29 9/month',
      features: [
        'Natural language processing',
        'Context-aware responses',
        'Multi-language support',
        'Voice recognition',
        'Image recognition',
        'Integration APIs',
        'Analytics dashboard',
        'Custom training'
      ],
      benefits: [
        'Improve user engagement',
        'Reduce support costs',
        '2 4/7 customer service',
        'Personalized experiences'
      ],
      marketPrice: '$2,00 0-4,00 0/month',
      category: 'AI Integration',
      technologies: ['Dialogflow', 'Rasa', 'OpenAI GPT', 'TensorFlow', 'Node.js', 'APIs'],
      platforms: ['iOS', 'Android', 'Cross-platform']
   },
    {title: 'AI-Powered Analytics for Mobile',
      description: 'Advanced mobile analytics with AI-driven insights, user behavior analysis, and performance optimization.',
      icon: '📊',
      price: '$89 9/month',
      features: [
        'User behavior tracking',
        'Performance monitoring',
        'Crash analytics',
        'A/B testing',
        'Conversion tracking',
        'Real-time dashboards',
        'Predictive analytics',
        'Custom reports'
      ],
      benefits: [
        'Improve app performance',
        'Increase user retention',
        'Optimize user experience',
        'Data-driven decisions'
      ],
      marketPrice: '$1,50 0-3,00 0/month',
      category: 'Analytics',
      technologies: ['Firebase', 'Mixpanel', 'Amplitude', 'Python', 'Machine Learning', 'APIs'],
      platforms: ['iOS', 'Android', 'Cross-platform']
   },
    {title: 'AI Mobile Security Suite',
      description: 'Comprehensive mobile security solution with AI-powered threat detection and data protection.',
      icon: '🔒',
      price: '$1,59 9/month',
      features: [
        'Threat detection',
        'Data encryption',
        'Biometric authentication',
        'App shielding',
        'Runtime protection',
        'Compliance monitoring',
        'Security analytics',
        'Incident response'
      ],
      benefits: [
        'Protect user data',
        'Prevent security breaches',
        'Ensure compliance',
        'Build user trust'
      ],
      marketPrice: '$2,50 0-5,00 0/month',
      category: 'Security',
      technologies: ['OWASP', 'Encryption', 'Biometrics', 'Machine Learning', 'APIs', 'SDKs'],
      platforms: ['iOS', 'Android', 'Cross-platform']
   },
    {title: 'AI Mobile Marketing Automation',
      description: 'Intelligent mobile marketing with personalized campaigns, push notifications, and user engagement optimization.',
      icon: '📈',
      price: '$1,19 9/month',
      features: [
        'Personalized campaigns',
        'Smart push notifications',
        'In-app messaging',
        'User segmentation',
        'A/B testing',
        'Engagement tracking',
        'Retention optimization',
        'ROI analytics'
      ],
      benefits: [
        'Increase user engagement',
        'Boost retention rates',
        'Improve conversion',
        'Optimize marketing spend'
      ],
      marketPrice: '$2,00 0-4,00 0/month',
      category: 'Marketing',
      technologies: ['Firebase', 'OneSignal', 'Branch', 'Machine Learning', 'APIs', 'Analytics'],
      platforms: ['iOS', 'Android', 'Cross-platform']
   },
    {title: 'AI Mobile App Testing Suite',
      description: 'Automated mobile app testing with AI-powered test generation, performance testing, and quality assurance.',
      icon: '🧪',
      price: '$79 9/month',
      features: [
        'Automated test generation',
        'Performance testing',
        'UI/UX testing',
        'Device compatibility',
        'Load testing',
        'Security testing',
        'Regression testing',
        'Test reporting'
      ],
      benefits: [
        'Reduce testing time by80%',
        'Improve app quality',
        'Catch bugs early',
        'Lower testing costs'
      ],
      marketPrice: '$1,20 0-2,50 0/month',
      category: 'Testing',
      technologies: ['Appium', 'Detox', 'Jest', 'Python', 'Machine Learning', 'APIs'],
      platforms: ['iOS', 'Android', 'Cross-platform']
    }
  ]
  const mobileFeatures = [
    {
      title: 'AI Integration',
   }
  ];
  constmobileFeatures= [
    {title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your mobile apps',
     icon:<CodeclassName="w-8h-8text-blue-600" />},
    {title: 'Cross-Platform',
      description: 'Build once, deploy everywhere with cross-platform solutions',
     icon:<SmartphoneclassName="w-8h-8text-green-600" />},
    {title: 'Real-Time Analytics',
      description: 'Get insights into user behavior and app performance',
     icon:<DatabaseclassName="w-8h-8text-purple-600" />},
    {title: 'Cloud Backend',
      description: 'Scalable cloud infrastructure for your mobile apps',
      icon: <Cloud className="w-8 h-8 text-orange-600" />
    }
  ]
  const developmentProcess = [
    {
      step: '1',
     icon:<CloudclassName="w-8h-8text-orange-600" />}
  ];
  constdevelopmentProcess= [
    {step: '1',
      title: 'Discovery & Planning',
      description: 'Analyze requirements and create detailed project roadmap'
   },
    {step: '2',
      title: 'Design & Prototyping',
      description: 'Create UI/UX designs and interactive prototypes'
   },
    {step: '3',
      title: 'Development & AI Integration',
      description: 'Build the app with integrated AI capabilities'
   },
    {step: '4',
      title: 'Testing & Deployment',
      description: 'Comprehensive testing and app store deployment'
   },
    {step: '5',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and support'
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <Helmet>
        <title>AI Mobile App Development | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered mobile app development services including iOS, Android, and cross-platform solutions. Build intelligent mobile apps with cutting-edge AI technology." />
        <meta name="keywords" content="mobile app development, AI mobile apps, iOS development, Android development, cross-platform apps, mobile AI integration" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Mobile App Development</h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Build intelligent mobile apps with AI-powered features that engage users and drive business growth</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a;
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950</a>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                ✉️ Get Free Consultation</a>
            </div>
          </div>
        </div>
      </section>
      {/* Development Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process</h2>
            <p className="text-xl text-gray-600">
              Proven 5-step process for building exceptional AI-powered mobile apps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mobile Development Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered mobile app development and support services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <p key={benefitIndex} className="text-sm text-green-600">✓ {benefit}</p>
                  ))}
                </div>
                <a;
                  href="/contact"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
                >
                  Start Building</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Mobile Development?
            </h2>
            <p className="text-xl text-gray-600">
              Advanced AI technology with expert mobile development expertise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mobileFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real results from our mobile app development clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"Zion Tech Group built our AI-powered fitness app in just 3 months. The AI features are incredible and user engagement is up 200%!"</p>
              <div className="font-semibold text-gray-900">David Kim</div>
              <div className="text-sm text-gray-500">Founder, FitAI</div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"Their mobile app development team delivered an amazing e-commerce app with AI recommendations. Sales increased by 150%!"</p>
              <div className="font-semibold text-gray-900">Lisa Wang</div>
              <div className="text-sm text-gray-500">CEO, ShopSmart</div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"The AI chatbot integration they built for our app reduced support tickets by 80% and improved customer satisfaction significantly."</p>
              <div className="font-semibold text-gray-900">Robert Johnson</div>
              <div className="text-sm text-gray-500">CTO, ServicePro</div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your AI Mobile App?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Get a free consultation and discover how AI can transform your mobile app</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a;
              href="tel:+13024640950"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950</a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com</a>
          </div>
          <div className="mt-8 text-sm text-indigo-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AIMobileAppDevelopmentPage;
   }
  ];
  return (
  <divclassName="min-h-screenbg-gradient-to-brfrom-slate-50to-indigo-50"><Helme t><titl e>AI Mobile App Development | ZionTechGroup</titl><metaname="description"content="Revolutionary AI-powered mobile app development services including iOS, Android, and cross-platform solutions. Build intelligent mobile apps with cutting-edge AItechnology." /><metaname="keywords"content="mobile app development, AI mobile apps, iOS development, Android development, cross-platform apps, mobile AIintegration" /></Helme>{/* HeroSection */}
    <sectionclassName="relative overflow-hidden bg-gradient-to-r from-indigo-600to-purple-700text-whitepy-20"><divclassName="absolute inset-0 bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">AI Mobile App Development</h><spanclassName="text-xlmd:text-2 xl mb-8 text-indigo-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-indigo-100max-w-3xlmx-auto">Build intelligent mobile apps with AI-powered features that engage users and drive business growth</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
               className="bg-white text-indigo-600px-8 py-3 rounded-lg font-semiboldhover:bg-indigo-50transition-colorsinline-flexitems-center"
              >📞 +1 3024640950</a><ahref="mailto:kleber@ziontechgroup.com"
               className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-indigo-600transition-colors"
              >✉️ Get Free Consultation</a></di></di></di></sectio>{/* DevelopmentProcess */}
    <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our Development Process</h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Proven 5-step process for building exceptional AI-powered mobile apps</p></di><divclassName="grid grid-cols-1md:grid-cols-5gap-8">{developmentProcess.map((stepindex) => (
           <divkey={index}className="text-center"><divclassName="w-16h-16bg-indigo-600text-white rounded-full flex items-center justify-center text-2 xl font-boldmx-automb-4">{step.step}
              </di><h3className="text-lg font-semibold text-gray-900mb-2">{step.title}</h><pclassName="text-gray-600text-sm">{step.description}</p></di>))}
        </di></di></sectio>{/* ServicesGrid */}
    <sectionclassName="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our Mobile Development Services</h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Comprehensive AI-powered mobile app development and support services</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{mobileServices.map((serviceindex) => (
           <divkey={index}className="bg-white rounded-lg shado w-lg p-6 hover:shado w-xl transition-shado w borderborder-gray-100"><divclassName="text-4xlmb-4">{service.icon}</di><h3className="text-xl font-semibold text-gray-900mb-3">{service.title}</h><pclassName="text-gray-600mb-4">{service.description}</p><divclassName="mb-4"><spanclassName="text-2 xl font-boldtext-indigo-600">{service.price}</spa><spanclassName="text-sm text-gray-500ml-2">Market:{service.marketPrice}</spa></di><divclassName="mb-4"><spanclassName="inline-block bg-indigo-100text-indigo-800text-xs font-semibold px-2py-1rounded"></className="inline-block bg-indigo-100text-indigo-800text-xs font-semibold px-2py-1rounded">{service.category}
                </spa></di><ulclassName="space-y-2mb-6">{service.features.slice(0 4).map((featurefeatureIndex) => (
                 <likey={featureIndex}className="flex items-center text-smtext-gray-600"><CheckCircleclassName="w-4 h-4text-green-500mr-2flex-shrink-0" />{feature}
                  </l>))}
              </u><divclassName="space-y-2mb-6"><h4className="font-semiboldtext-gray-900">KeyBenefits:</h>{service.benefits.slice(0 2).map((benefitbenefitIndex) => (
                 <pkey={benefitIndex}className="text-smtext-green-600">✓{benefit}</p>))}
              </di><ahref="/contact"
                 className="w-full bg-indigo-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-indigo-700transition-colors inline-flexitems-centerjustify-center"
                >Start Building</a></di>))}
        </di></di></sectio>{/* FeaturesSection */}
    <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></spa></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Our Mobile Development?
          </h><spanclassName="text-xltext-gray-600"></spa></className="text-xltext-gray-600">Advanced AI technology with expert mobile development expertise</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{mobileFeatures.map((featureindex) => (
           <divkey={index}className="text-center"><divclassName="flexjustify-centermb-4">{feature.icon}
              </di><h3className="text-lg font-semibold text-gray-900mb-2">{feature.title}</h><pclassName="text-gray-600">{feature.description}</p></di>))}
        </di></di></sectio>{/* SuccessStories */}
    <sectionclassName="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></spa></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Success Stories</h><spanclassName="text-xltext-gray-600"></spa></className="text-xltext-gray-600">Real results from our mobile app development clients</p></di><divclassName="grid grid-cols-1md:grid-cols-3gap-8"><divclassName="bg-white rounded-lg p-8shadow-lg"><divclassName="text-yellow-400text-2xlmb-4">★★★★★</di><pclassName="text-gray-600mb-4italic">"Zion Tech Group built our AI-powered fitness app in just3months. The AI features are incredible and user engagement isup200%!"</p><divclassName="font-semiboldtext-gray-900">DavidKim</di><divclassName="text-smtext-gray-500">Founder,FitAI</di></di><divclassName="bg-white rounded-lg p-8shadow-lg"><divclassName="text-yellow-400text-2xlmb-4">★★★★★</di><pclassName="text-gray-600mb-4italic">"Their mobile app development team delivered an amazing e-commerce app with AI recommendations. Sales increasedby150%!"</p><divclassName="font-semiboldtext-gray-900">LisaWang</di><divclassName="text-smtext-gray-500">CEO,ShopSmart</di></di><divclassName="bg-white rounded-lg p-8shadow-lg"><divclassName="text-yellow-400text-2xlmb-4">★★★★★</di><pclassName="text-gray-600mb-4italic">"The AI chatbot integration they built for our app reduced support tickets by80% and improvedcustomersatisfactionsignificantly."</p><divclassName="font-semiboldtext-gray-900">RobertJohnson</di><divclassName="text-smtext-gray-500">CTO,ServicePro</di></di></di></di></sectio>{/* ContactSection */}
    <sectionclassName="py-16bg-gradient-to-r from-indigo-600to-purple-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Build Your AI Mobile App?
        </h><spanclassName="text-xl mb-8text-indigo-100"></spa></className="text-xl mb-8text-indigo-100">Get a free consultation and discover how AI can transform your mobile app</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
             className="bg-white text-indigo-600px-8 py-3 rounded-lg font-semiboldhover:bg-indigo-50transition-colorsinline-flexitems-center"
            >📞 +1 3024640950</a><ahref="mailto:kleber@ziontechgroup.com"
             className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-indigo-600transition-colors"
            >✉️ kleber@ziontechgroup.com</a></di><divclassName="mt-8 text-smtext-indigo-200"><p>📍 364E Main St STE1008, Middletown DE19709</p></di></di></sectio></di>
  );
};
export default AIMobileAppDevelopmentPage;
