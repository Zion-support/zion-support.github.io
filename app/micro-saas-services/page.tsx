import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======;
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
import { Zap, BarChart, MessageSqua r e, Shield, Cloud, CheckCirc l e, ArrowRight, Users, Award, Star }, from 'lucide-react';
=======;
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f;
=======;
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BarChart, MessageSqua r e, Shield, Cloud, CheckCirc l e, ArrowRight, Users } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-33de;
=======;
>>>>>>> cursor/fix-errors-and-merge-to-main-7ceb;

const MicroSaasServicesPa g e: React.FC = () => {
  constservices= [
    {
      icon: BarChart,
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligen c e platform with real-timeanalyticsand custom dashboards.',
      features: ['Real-timeAnalytics', 'Custom Dashboards', 'Data Visualizati o n', 'Export Reports'],
      price: 'Starting at $99/month',
      color: 'from-cyan-500to-blue-500',
      link: '/zion-analytics-pro';
    },
    {
      icon: MessageSqua r e,
      title: 'Zion Chat AI',
      description: 'Intellige n t customer support chatbot with natural language processing capabiliti e s.',
      features: ['24/7 Support', 'Multi-language', 'Integrati o n APIs', 'Analytics Dashboard'],
      price: 'Starting at $79/month',
      color: 'from-purple-500to-pink-500',
      link: '/zion-chat-ai';
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensi v e cybersecuri t y monitoring and threat detection for your business.',
      features: ['Threat Detection', 'Security Monitoring', 'Compliance Reports', 'Incident Response'],
      price: 'Starting at $149/month',
      color: 'from-red-500to-orange-500',
      link: '/zion-security-shield';
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution for your critical data.',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Version Control'],
      price: 'Starting at $59/month',
      color: 'from-green-500to-emerald-500',
      link: '/zion-cloud-vault';
    },
    {
      icon: Zap,
      title: 'Zion Workflow Automation',
      description: 'Streamline your business processes with intellige n t workflow automation.',
      features: ['Process Automation', 'Task Scheduling', 'Integrati o n Tools', 'Performan c e Analytics'],
      price: 'Starting at $89/month',
      color: 'from-yellow-500to-orange-500',
      link: '/zion-workflow-automation';
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligen c e',
      description: 'AI-poweredcustomerrelationsh i p management with predictive analytics.',
      features: ['Lead Scoring', 'Sales Forecasti n g', 'Customer Insights', 'Automation Rules'],
      price: 'Starting at $129/month',
      color: 'from-indigo-500to-purple-500',
      link: '/zion-crm-intelligence';
    }
  ];

  constfeatures= [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our easy-to-useinterfaceand pre-builttemplates.';
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-levelsecuritywith encryption, compliance, and regular security updates.';
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clocksupportfrom our expert team to ensure your success.';
    },
    {
      icon: BarChart,
      title: 'Scalable Solutions',
      description: 'Grow with confidence knowing our solutions scale with your business needs.';
    }
  ];

return (
    <>
    <>
      <Helmet></Helmet>
=======;
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SaaS solutions including analytics, chatbots, security, cloud backup, workflow automation, and CRM intelligen c e for modern businesses." />
        <meta name="keywords" content="micro SaaS, business software, analytics, chatbots, security, cloud backup, workflow automation, CRM" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900">
        {/* Hero Section */}
        <section className="pt-32pb-20">
          <div className="containermx-autopx-4">
            <div className="text-centermax-w-4xlmx-auto">
              <h1 className="text-5xlmd:text-6xlfont-boldtext-whitemb-6">
                Micro <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent">SaaS Services</span>
              </h1>
              <p className="text-xltext-gray-300mb-8leading-relaxed">
                Powerful, purpose-builtsoftwaresolutions designed to solve specific business challenges.;
                Get enterprise-gradefunctionalit y without the complexity.;
              </p>
              <div className="flexflex-colsm:flex-rowgap-4justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105"
                >
                  Start Free Trial;
                </Link>
                <Link
                  to="/ai-services";
                  className="borderborder-cyan-500text-cyan-400px-8py-4rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10transition-allduration-300transformhover:scale-105"
                >
                  View AI Services;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="containermx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4xl font-boldtext-whitemb-6">
                Our <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent">Micro SaaS Solutions</span>
              </h2>
              <p className="text-xltext-gray-300max-w-3xlmx-auto">
                Specializ e d software tools that solve specific business problems with precision and efficiency;
              </p>
            </div>

            <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3gap-8">
              {services.map((service, index) => ())
                <div>>
                  key={index}
                  className="bg-gradient-to-brfrom-slate-800/50to-slate-900/50backdrop-blur-smborderborder-gray-700/50rounded-xlp-8hover:border-cyan-400/40transition-allduration-300grouphover:transformhover:scale-105"
                >
                  <div className={`w-16h-16bg-gradient-to-r ${service.color} rounded-xlflexitems-centerjustify-centermb-6group-hover: scale-110transition-transformduration-300`,}>
                    <service.iconclassName="w-8h-8text-white" />
                  </div>
                  
                  <h3 className="text-2xlfont-boldtext-whitemb-4group-hover:text-cyan-400transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300mb-6leading-relaxed">
                    {service.description}
                  </p>

                  <ulclassName="space-y-2mb-6">
                    {service.features.map((feature, featureInd e x) => ())
                      <likey={featureInd e x} className="flexitems-centertext-smtext-gray-300">
                        <CheckCirc leclassName="w-4h-4text-green-400mr-2flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flexitems-centerjustify-betweenmb-6">
                    <span className="text-2xlfont-boldtext-cyan-400">{service.price}</span>
                    <Link
                      to={service.link}
                      className="text-cyan-400hover:text-cyan-300transition-colorstext-smfont-mediumgroup-hover:translate-x-1inline-flexitems-center"
                    >
                      Learn More <ArrowRight className="w-4h-4ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20bg-gradient-to-rfrom-slate-800/30to-slate-900/30">
          <div className="containermx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4xl font-boldtext-whitemb-6">
                Why Choose <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent">Micro SaaS</span>?;
              </h2>
              <p className="text-xltext-gray-300max-w-3xlmx-auto">
                Get the power of enterprise software without the complexity and cost;
              </p>
            </div>

            <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4gap-8">
              {features.map((feature, index) => ())
                <divkey={index} className="text-centergroup">
                  <div className="w-20h-20bg-gradient-to-rfrom-cyan-500/20to-purple-500/20rounded-fullflexitems-centerjustify-centermx-automb-6group-hover:scale-110transition-transformduration-300">
                    <feature.iconclassName="w-10h-10text-cyan-400" />
                  </div>
                  <h3 className="text-xlfont-boldtext-whitemb-4">{feature.title}</h3>
                  <p className="text-gray-300leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="containermx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4xl font-boldtext-whitemb-6">
                Simple <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent">Pricing</span>
              </h2>
              <p className="text-xltext-gray-300max-w-3xlmx-auto">
                Choose the plan that fits your needs. All plans include 24/7 support and regular updates.;
              </p>
            </div>

            <div className="gridgrid-cols-1md:grid-cols-3gap-8max-w-5xlmx-auto">
              <div className="bg-gradient-to-brfrom-slate-800/50to-slate-900/50backdrop-blur-smborderborder-gray-700/50rounded-xlp-8">
                <h3 className="text-2xlfont-boldtext-whitemb-4">Starter</h3>
                <div className="text-4xl font-boldtext-cyan-400mb-6">$99<span className="text-lgtext-gray-400">/month</span></div>
                <ulclassName="space-y-3mb-8">
                  <liclassName="flexitems-centertext-gray-300">
                    <CheckCirc leclassName="w-5h-5text-green-400mr-3" />
                    Up to 3 Micro SaaS tools;
                  </li>
                  <liclassName="flexitems-centertext-gray-300">
                    <CheckCirc leclassName="w-5h-5text-green-400mr-3" />
                    Basic support;
                  </li>
                  <liclassName="flexitems-centertext-gray-300">
                    <CheckCirc leclassName="w-5h-5text-green-400mr-3" />
                    Standard features;
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-fullbg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-6py-3rounded-lgfont-semiboldtext-centerhover:from-cyan-600hover:to-purple-600transition-allduration-300block"
                >
                  Get Started;
                </Link>
              </div>

              <div className="bg-gradient-to-brfrom-cyan-900/30to-purple-900/30backdrop-blur-smborderborder-cyan-500/50rounded-xlp-8relative">
                <div className="absolute-top-4left-1/2transform-translate-x-1/2">
                  <span className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-4py-1rounded-fulltext-smfont-semibold">
                    Most Popular;
                  </span>
                </div>
                <h3 className="text-2xlfont-boldtext-whitemb-4">Professional</h3>
                <div className="text-4xl font-boldtext-cyan-400mb-6">$199<span className="text-lgtext-gray-400">/month</span></div>
                <ulclassName="space-y-3mb-8">
                  <liclassName="flexitems-centertext-gray-300">
                    <CheckCirc leclassName="w-5h-5text-green-400mr-3" />
                    Up to 10 Micro SaaS tools;
                  </li>
                  <liclassName="flexitems-centertext-gray-300">
                    <CheckCirc leclassName="w-5h-5text-green-400mr-3" />
                    Priority support;
                  </li>
                  <liclassName="flexitems-centertext-gray-300">
                    <CheckCirc leclassName="w-5h-5text-green-400mr-3" />
                    Advanced features;
                  </li>
                  <liclassName="flexitems-centertext-gray-300">
                    <CheckCirc leclassName="w-5h-5text-green-400mr-3" />
                    Custom integratio n s;
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-fullbg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-6py-3rounded-lgfont-semiboldtext-centerhover:from-cyan-600hover:to-purple-600transition-allduration-300block"
                >
                  Get Started;
                </Link>
              </div>

              <div className="bg-gradient-to-brfrom-slate-800/50to-slate-900/50backdrop-blur-smborderborder-gray-700/50rounded-xlp-8">
                <h3 className="text-2xlfont-boldtext-whitemb-4">Enterprise</h3>
                <div className="text-4xl font-boldtext-cyan-400mb-6">Custom</div>
                <ulclassName="space-y-3mb-8">
                  <liclassName="flexitems-centertext-gray-300">
                    <CheckCirc leclassName="w-5h-5text-green-400mr-3" />
                    Unlimited Micro SaaS tools;
                  </li>
                  <liclassName="flexitems-centertext-gray-300">
                    <CheckCirc leclassName="w-5h-5text-green-400mr-3" />
                    24/7 dedicated support;
                  </li>
                  <liclassName="flexitems-centertext-gray-300">
                    <CheckCirc leclassName="w-5h-5text-green-400mr-3" />
                    All features included;
                  </li>
                  <liclassName="flexitems-centertext-gray-300">
                    <CheckCirc leclassName="w-5h-5text-green-400mr-3" />
                    Custom developme n t;
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-fullborderborder-cyan-500text-cyan-400px-6py-3rounded-lgfont-semiboldtext-centerhover:bg-cyan-500/10transition-allduration-300block"
                >
                  Contact Sales;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="containermx-autopx-4">
            <div className="bg-gradient-to-rfrom-cyan-900/50to-purple-900/50backdrop-blur-smborderborder-cyan-500/20rounded-2xlp-12text-center">
              <h2 className="text-4xl font-boldtext-whitemb-6">
                Ready to Transform Your Business?;
              </h2>
              <p className="text-xltext-gray-300mb-8max-w-2xlmx-auto">
                Start your free trial today and experience the power of our Micro SaaS solutions.;
              </p>
              <div className="flexflex-colsm:flex-rowgap-4justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105"
                >
                  Start Free Trial;
                </Link>
                <Link
                  to="/about";
                  className="borderborder-cyan-500text-cyan-400px-8py-4rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10transition-allduration-300transformhover:scale-105"
                >
                  Learn More About Us;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasServicesPa g e;
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
    </>
=======;
>>>>>>> cursor/fix-errors-and-merge-to-main-33de;
=======;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-7ceb;
