import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { Link  } from 'react-router-dom';
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
const MicroSaasServicesPage: React.FC = () => {
  const services = [
    {
      icon: BarChart,
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with real-time analytics and custom dashboards.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Export Reports'],
      price: 'Starting at $99/month',
      color: 'from-cyan-500 to-blue-500',
      link: '/zion-analytics-pro'
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing capabilities.',
      features: ['24/7 Support', 'Multi-language', 'Integration APIs', 'Analytics Dashboard'],
      price: 'Starting at $79/month',
      color: 'from-purple-500 to-pink-500',
      link: '/zion-chat-ai'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for your business.',
      features: ['Threat Detection', 'Security Monitoring', 'Compliance Reports', 'Incident Response'],
      price: 'Starting at $149/month',
      color: 'from-red-500 to-orange-500',
      link: '/zion-security-shield'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution for your critical data.',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Version Control'],
      price: 'Starting at $59/month',
      color: 'from-green-500 to-emerald-500',
      link: '/zion-cloud-vault'
    },
    {
      icon: Zap,
      title: 'Zion Workflow Automation',
      description: 'Streamline your business processes with intelligent workflow automation.',
      features: ['Process Automation', 'Task Scheduling', 'Integration Tools', 'Performance Analytics'],
      price: 'Starting at $89/month',
      color: 'from-yellow-500 to-orange-500',
      link: '/zion-workflow-automation'
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-powered customer relationship management with predictive analytics.',
      features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automation Rules'],
      price: 'Starting at $129/month',
      color: 'from-indigo-500 to-purple-500',
      link: '/zion-crm-intelligence'
    }
  ];
  const features = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our easy-to-use interface and pre-built templates.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and regular security updates.'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team to ensure your success.'
    },
    {
      icon: BarChart,
      title: 'Scalable Solutions',
      description: 'Grow with confidence knowing our solutions scale with your business needs.'
    }
  ];
  return (
    <>
    </>
      <Helmet>
}        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SaaS solutions including analytics, chatbots, security, cloud backup, workflow automation, and CRM intelligence for modern businesses." />
        <meta name="keywords" content="micro SaaS, business software, analytics, chatbots, security, cloud backup, workflow automation, CRM" />
      </Helmet>
      <d iv c las sName="m in-h-screen bg-grad ient-to-br from-s late-900 via-purple-900 to-s late-900">
        {/* H ero Section */}
        <section c las sName="p t-32 pb-20">
          <d iv c las sName="c onta iner mx-auto px-4">
            <d iv c las sName="t e xt-c enter m ax-w-4xl mx-auto">
              <h1 c las sName="t e xt-5xl md:t ext-6xl f ont-b old t ext-w hit-e mb-6">
                Micro <s pan c las sName="b g-grad ient-to-r from-cyan-400 to-purple-400 bg-clip-t ext t ext-transparen-t">SaaS Services</s pan>
              </h1>
              <p c las sName="t e xt-xl t ext-gra-y-300 mb-8 l eading-relaxed">
                Powerful, purpose-built software solutions designed to solve specific business challenges. 
                Get enterprise-grade functionality without the complexity.
              </p>
              <d iv c las sName="f lex f lex-col sm:f lex-row g ap-4 j ust ify-c enter">
                <Link 
                  to="/cont act"
                  c las sName="b g-grad ient-to-r from-cyan-500 to-purple-500 t ext-w hit-e px-8 py-4 rounded-lg f ont-semibold t ext-l-g hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/ai-services"
                  c las sName="b order b order-cyan-500 t ext-cya-n-400 px-8 py-4 rounded-lg f ont-semibold t ext-l-g hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View AI Services
                </Link>
              </d iv>
            </d iv>
          </d iv>
        </section>
        {/* Services G rid */}
        <section c las sName="p y-20">
          <d iv c las sName="c onta iner mx-auto px-4">
            <d iv c las sName="t e xt-c enter mb-16">
              <h2 c las sName="t e xt-4xl f ont-b old t ext-w hit-e mb-6">
                O ur <s pan c las sName="b g-grad ient-to-r from-cyan-400 to-purple-400 bg-clip-t ext t ext-transparen-t">Micro SaaS Solutions</s pan>
              </h2>
              <p c las sName="t e xt-xl t ext-gra-y-300 m ax-w-3xl mx-auto">
                Specialized software tools that solve specific business problems with precision and efficiency
              </p>
            </d iv>
            <d iv c las sName="g r id g rid-cols-1 md:g rid-cols-2 lg:g rid-cols-3 g ap-8">
              {services.map((service, index) => (
                <d iv 
                  key={index}
                  c las sName="b g-grad ient-to-br from-s late-800/50 to-s late-900/50 backdrop-blur-sm b order b order-gray-700/50 rounded-xl p-8 hover:b order-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <d iv c las sName={`w-16 h-16 bg-grad ient-to-r ${service.color} rounded-xl f lex items-c enter j ust ify-c enter mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon c las sName="w-8 h-8 t e xt-w hite" />
                  </d iv>
                  <h3 c las sName="t e xt-2xl f ont-b old t ext-w hit-e mb-4 group-hover:t ext-cya-n-400 transition-colors">
                    {service.title}
                  </h3>
                  <p c las sName="t e xt-gray-300 mb-6 l eading-relaxed">
                    {service.description}
                  </p>
                  <ul c las sName="s p ace-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} c las sName="f lex items-c enter t ext-s-m t ext-gra-y-300">
                        <C hec kCi rcle c las sName="w-4 h-4 t e xt-green-400 mr-2 f lex-s hrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <d iv c las sName="f lex items-c enter j ust ify-b etw een mb-6">
                    <s pan c las sName="t e xt-2xl f ont-b old t ext-cya-n-400">{service.price}</s pan>
                    <Link 
                      to={service.link}
                      c las sName="t e xt-cyan-400 hover:t ext-cya-n-300 transition-colors t ext-s-m f ont-medium group-hover:translate-x-1 inline-f lex items-c enter"
                    >
                      Learn M ore <A rro wRight c las sName="w-4 h-4 m l-1" />
                    </Link>
                  </d iv>
                </d iv>
              ))}
            </d iv>
          </d iv>
        </section>
        {/* F eatures Section */}
        <section c las sName="p y-20 bg-grad ient-to-r from-s late-800/30 to-s late-900/30">
          <d iv c las sName="c onta iner mx-auto px-4">
            <d iv c las sName="t e xt-c enter mb-16">
              <h2 c las sName="t e xt-4xl f ont-b old t ext-w hit-e mb-6">
                W hy C hoose <s pan c las sName="b g-grad ient-to-r from-cyan-400 to-purple-400 bg-clip-t ext t ext-transparen-t">Micro SaaS</s pan>?
              </h2>
              <p c las sName="t e xt-xl t ext-gra-y-300 m ax-w-3xl mx-auto">
                Get the power of enterprise software without the complexity and cost
              </p>
            </d iv>
            <d iv c las sName="g r id g rid-cols-1 md:g rid-cols-2 lg:g rid-cols-4 g ap-8">
              {features.map((feature, index) => (
                <d iv key={index} c las sName="t e xt-c enter group">
                  <d iv c las sName="w-20 h-20 b g-grad ient-to-r from-cyan-500/20 to-purple-500/20 rounded-full f lex items-c enter j ust ify-c enter mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon c las sName="w-10 h-10 t e xt-cyan-400" />
                  </d iv>
                  <h3 c las sName="t e xt-xl f ont-b old t ext-w hit-e mb-4">{feature.title}</h3>
                  <p c las sName="t e xt-gray-300 l eading-relaxed">{feature.description}</p>
                </d iv>
              ))}
            </d iv>
          </d iv>
        </section>
        {/* P ric ing Section */}
        <section c las sName="p y-20">
          <d iv c las sName="c onta iner mx-auto px-4">
            <d iv c las sName="t e xt-c enter mb-16">
              <h2 c las sName="t e xt-4xl f ont-b old t ext-w hit-e mb-6">
                S imple <s pan c las sName="b g-grad ient-to-r from-cyan-400 to-purple-400 bg-clip-t ext t ext-transparen-t">P ric ing</s pan>
              </h2>
              <p c las sName="t e xt-xl t ext-gra-y-300 m ax-w-3xl mx-auto">
                C hoose the plan that fits your needs. All plans include 24/7 support and regular updates.
              </p>
            </d iv>
            <d iv c las sName="g r id g rid-cols-1 md:g rid-cols-3 g ap-8 m ax-w-5xl mx-auto">
              <d iv c las sName="b g-grad ient-to-br from-s late-800/50 to-s late-900/50 backdrop-blur-sm b order b order-gray-700/50 rounded-xl p-8">
                <h3 c las sName="t e xt-2xl f ont-b old t ext-w hit-e mb-4">Star ter</h3>
                <d iv c las sName="t e xt-4xl f ont-b old t ext-cya-n-400 mb-6">$99<s pan c las sName="t e xt-lg t ext-gra-y-400">/month</s pan></d iv>
                <ul c las sName="s p ace-y-3 mb-8">
                  <li c las sName="f lex items-c enter t ext-gra-y-300">
                    <C hec kCi rcle c las sName="w-5 h-5 t e xt-green-400 mr-3" />
                    Up to 3 Micro SaaS tools
                  </li>
                  <li c las sName="f lex items-c enter t ext-gra-y-300">
                    <C hec kCi rcle c las sName="w-5 h-5 t e xt-green-400 mr-3" />
                    Basic support
                  </li>
                  <li c las sName="f lex items-c enter t ext-gra-y-300">
                    <C hec kCi rcle c las sName="w-5 h-5 t e xt-green-400 mr-3" />
                    Standard features
                  </li>
                </ul>
                <Link 
                  to="/cont act"
                  c las sName="w-f ull bg-grad ient-to-r from-cyan-500 to-purple-500 t ext-w hit-e px-6 py-3 rounded-lg f ont-semibold t ext-c ente-r hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 block"
                >
                  Get Star ted
                </Link>
              </d iv>
              <d iv c las sName="b g-grad ient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm b order b order-cyan-500/50 rounded-xl p-8 relative">
                <d iv c las sName="a b solute -t op-4 l eft-1/2 transform -translate-x-1/2">
                  <s pan c las sName="b g-grad ient-to-r from-cyan-500 to-purple-500 t ext-w hit-e px-4 py-1 rounded-full t ext-s-m f ont-semibold">
                    Most Popular
                  </s pan>
                </d iv>
                <h3 c las sName="t e xt-2xl f ont-b old t ext-w hit-e mb-4">Prof essional</h3>
                <d iv c las sName="t e xt-4xl f ont-b old t ext-cya-n-400 mb-6">$199<s pan c las sName="t e xt-lg t ext-gra-y-400">/month</s pan></d iv>
                <ul c las sName="s p ace-y-3 mb-8">
                  <li c las sName="f lex items-c enter t ext-gra-y-300">
                    <C hec kCi rcle c las sName="w-5 h-5 t e xt-green-400 mr-3" />
                    Up to 10 Micro SaaS tools
                  </li>
                  <li c las sName="f lex items-c enter t ext-gra-y-300">
                    <C hec kCi rcle c las sName="w-5 h-5 t e xt-green-400 mr-3" />
                    P riority support
                  </li>
                  <li c las sName="f lex items-c enter t ext-gra-y-300">
                    <C hec kCi rcle c las sName="w-5 h-5 t e xt-green-400 mr-3" />
                    Advanced features
                  </li>
                  <li c las sName="f lex items-c enter t ext-gra-y-300">
                    <C hec kCi rcle c las sName="w-5 h-5 t e xt-green-400 mr-3" />
                    Custom integrations
                  </li>
                </ul>
                <Link 
                  to="/cont act"
                  c las sName="w-f ull bg-grad ient-to-r from-cyan-500 to-purple-500 t ext-w hit-e px-6 py-3 rounded-lg f ont-semibold t ext-c ente-r hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 block"
                >
                  Get Star ted
                </Link>
              </d iv>
              <d iv c las sName="b g-grad ient-to-br from-s late-800/50 to-s late-900/50 backdrop-blur-sm b order b order-gray-700/50 rounded-xl p-8">
                <h3 c las sName="t e xt-2xl f ont-b old t ext-w hit-e mb-4">Enterprise</h3>
                <d iv c las sName="t e xt-4xl f ont-b old t ext-cya-n-400 mb-6">Custom</d iv>
                <ul c las sName="s p ace-y-3 mb-8">
                  <li c las sName="f lex items-c enter t ext-gra-y-300">
                    <C hec kCi rcle c las sName="w-5 h-5 t e xt-green-400 mr-3" />
                    Unlimited Micro SaaS tools
                  </li>
                  <li c las sName="f lex items-c enter t ext-gra-y-300">
                    <C hec kCi rcle c las sName="w-5 h-5 t e xt-green-400 mr-3" />
                    24/7 dedicated support
                  </li>
                  <li c las sName="f lex items-c enter t ext-gra-y-300">
                    <C hec kCi rcle c las sName="w-5 h-5 t e xt-green-400 mr-3" />
                    All features included
                  </li>
                  <li c las sName="f lex items-c enter t ext-gra-y-300">
                    <C hec kCi rcle c las sName="w-5 h-5 t e xt-green-400 mr-3" />
                    Custom development
                  </li>
                </ul>
                <Link 
                  to="/cont act"
                  c las sName="w-f ull b order b order-cyan-500 t ext-cya-n-400 px-6 py-3 rounded-lg f ont-semibold t ext-c ente-r hover:bg-cyan-500/10 transition-all duration-300 block"
                >
                  Cont act Sales
                </Link>
              </d iv>
            </d iv>
          </d iv>
        </section>
        {/* C TA Section */}
        <section c las sName="p y-20">
          <d iv c las sName="c onta iner mx-auto px-4">
            <d iv c las sName="b g-grad ient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm b order b order-cyan-500/20 rounded-2xl p-12 t ext-c ente-r">
              <h2 c las sName="t e xt-4xl f ont-b old t ext-w hit-e mb-6">
                Ready to Transform Your Business?
              </h2>
              <p c las sName="t e xt-xl t ext-gra-y-300 mb-8 m ax-w-2xl mx-auto">
                Start your free trial today and experience the power of our Micro SaaS solutions.
              </p>
              <d iv c las sName="f lex f lex-col sm:f lex-row g ap-4 j ust ify-c enter">
                <Link 
                  to="/cont act"
                  c las sName="b g-grad ient-to-r from-cyan-500 to-purple-500 t ext-w hit-e px-8 py-4 rounded-lg f ont-semibold t ext-l-g hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/a bout"
                  c las sName="b order b order-cyan-500 t ext-cya-n-400 px-8 py-4 rounded-lg f ont-semibold t ext-l-g hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Learn M ore About Us
                </Link>
              </d iv>
            </d iv>
          </d iv>
        </section>
      </d iv>
    </>
  );
};
export default MicroSaasServicesPage;
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Prof essional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
    </>