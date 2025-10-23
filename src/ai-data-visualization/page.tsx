'use client';
import {CheckCircle, Phone, Mail} from 'lucide-react';
import React from 'react';
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import SEOOptimizer from '../$1/SEOOptimizer';

constAIDataVisualizationPage: React.FC= () =>{constfeatures= [
    {
      icon: BarChart,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that automatically update with real-time data.',
      benefits: ['Real-time Updates', 'Custom Visualizations', 'Interactive Elements', 'Mobile Responsive']
   },
    {icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Leverage machine learning to automatically identify patterns and generate actionable insights.',
      benefits: ['Pattern Recognition', 'Predictive Analytics', 'Anomaly Detection', 'Smart Recommendations']
   },
    {icon: Database,
      title: 'Multi-Source Integration',
      description: 'Connect to any data source and automatically transform raw data into meaningful visualizations.',
      benefits: ['API Integration', 'Database Connections', 'File Uploads', 'Real-time Sync']
   },
    {icon: Settings,
      title: 'Customizable Reports',
      description: 'Generate automated reports with customizable templates and scheduling options.',
      benefits: ['Auto-generation', 'Custom Templates', 'Scheduled Reports', 'Export Options']
   }
  ];

  constpricing= [
    {name: 'Starter',
      price: '$19 9/month',
      description: 'Perfect for small teams',
      features: ['Up to5dashboards', 'Basic visualizations', '2 data sources', 'Email support']
   },
    {name: 'Professional',
      price: '$39 9/month',
      description: 'Ideal for growing businesses',
      features: ['Unlimited dashboards', 'Advanced AI insights', '10data sources', 'Priority support', 'Custom branding']
   },
    {name: 'Enterprise',
      price: '$79 9/month',
      description: 'For large organizations',
      features: ['Everything in Professional', 'Unlimited data sources', 'Custom integrations', 'Dedicated support', 'On-premise deployment']
   }
  ];
  conststats= [
    {number: '8 5%', label: 'Faster Decision Making'},
    {number: '30 0%', label: 'Data Processing Speed'},
    {number: '5 0+', label: 'Visualization Types'},
    {number: '9 9.9%', label: 'Uptime Guarantee'}
  ];

  constuseCases= [
    {title: 'Sales Analytics',
      description: 'Track sales performance, identify trends, and optimize your sales strategy with real-time dashboards.',
      icon: BarChart
   },
    {title: 'Marketing Insights',
      description: 'Analyze campaign performance, customer behavior, and ROI with comprehensive marketing analytics.',
      icon: TrendingUp
   },
    {title: 'Financial Reporting',
      description: 'Generate automated financial reports and track key metrics for better financial decision making.',
      icon: Database
   },
    {title: 'Operations Monitoring',
      description: 'Monitor operational efficiency, identify bottlenecks, and optimize business processes.',
      icon: Settings
   }
  ];

  return (
  <><SEOOptimizertitle="AI Data Visualization Solutions - ZionTechGroup"
        description="Transform your data into actionable insights with AI-powered visualization tools. Create interactive dashboards, automated reports, andintelligentanalytics."
        keywords={['AI data visualization', 'business intelligence', 'data analytics', 'interactive dashboards', 'datainsights']}
        canonicalUrl="https://ziontechgroup.com/ai-data-visualization"
      /><divclassName="min-h-screen bg-gradient-to-br from-slate-90 0via-purple-900to-slate-900"><Navigation /><mainclassName="pt-16">{/* HeroSection */}
        <sectionclassName="container mx-auto px-4 py-16text-center"><divclassName="max-w-4xlmx-auto"><spanclassName="text-4 xlmd:text-6 xl font-bold text-whitemb-6neon-text"></className="text-4 xlmd:text-6 xl font-bold text-whitemb-6neon-text">AI Data Visualization Solutions
            </h><spanclassName="text-xlmd:text-2 xl text-cyan-400mb-8"></className="text-xlmd:text-2 xl text-cyan-400mb-8">Transform complex data into stunning, actionable insights
            </p><spanclassName="text-lg text-gray-300mb-12max-w-3xlmx-auto"></className="text-lg text-gray-300mb-12max-w-3xlmx-auto">Our AI-powered data visualization platform automatically transforms your raw data into 
                interactive dashboards, intelligent reports, and actionable insights that drive business growth.
            </p><divclassName="flex flex-colsm:flex-row gap-4 justify-center items-centermb-16"><ahref="tel:+13024640950"
                 className="cyber-button flexitems-centerspace-x-2"
                ><PhoneclassName="w-5h-5" /><spa n>Call (302)464-0950</spa></a><ahref="mailto:kleber@ziontechgroup.com"
                 className="cyber-button flexitems-centerspace-x-2"
                  style={{background: 'linear-gradient(45 deg, #8 b5cf6, #ec4899)'}}
                ><MailclassName="w-5h-5" /><spa n>GetFreeDemo</spa></a></di>{/* Stats */}
            <divclassName="grid grid-cols-2 md:grid-cols-4 gap-8mb-16">{stats.map((statindex) => (
               <divkey={index}className="cyber-cardp-6text-center"><divclassName="text-3 xlmd:text-4 xl font-boldtext-cyan-400mb-2neon-text">{stat.number}
                  </di><divclassName="text-gray-300font-medium">{stat.label}</di></di>))}
            </di></di></sectio>{/* FeaturesSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Key Features
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{features.map((featureindex) => (
             <divkey={index}className="cyber-card p-6 text-centerhover:scale-105transition-allduration-300"><feature.iconclassName="w-12h-1 2text-cyan-400mx-automb-4" /><h3className="text-xl font-boldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300mb-4">{feature.description}</p><ulclassName="space-y-2">{feature.benefits.map((benefitbenefitIndex) => (
                   <likey={benefitIndex}className="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4text-green-400mr-2flex-shrink-0" />{benefit}
                    </l>))}
                </u></di>))}
          </di></sectio>{/* Use CasesSection */}
        <sectionclassName="container mx-auto px-4py-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Perfect for Every Department
          </h><divclassName="grid grid-cols-1md:grid-cols-2gap-8">{useCases.map((useCaseindex) => (
             <divkey={index}className="cyber-card p-6 hover:scale-105transition-allduration-300"><useCase.iconclassName="w-12h-12text-cyan-400mb-4" /><h3className="text-xl font-boldtext-whitemb-3">{useCase.title}</h><pclassName="text-gray-300">{useCase.description}</p></di>))}
          </di></sectio>{/* PricingSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Pricing Plans
          </h><divclassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xlmx-auto">{pricing.map((planindex) => (
             <divkey={index}
                  className={`cyber-card p-8 relative ${
                    index===1? 'ring-2 ring-cyan-400scale-10 5' : ''
                }`}
                >{index===1&& (
                  <divclassName="absolute -top-4 left-1/2transform-translate-x-1/2"><spanclassName="bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold"></className="bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold">Most Popular
                    </spa></di>)}
                <h3className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h><pclassName="text-gray-300mb-4">{plan.description}</p><divclassName="text-4 xl font-bold text-cyan-400mb-6">{plan.price}</di><ulclassName="space-y-3mb-8">{plan.features.map((featurefeatureIndex) => (
                   <likey={featureIndex}className="flex items-centertext-gray-300"><CheckCircleclassName="w-5 h-5text-green-400mr-3flex-shrink-0" />{feature}
                    </l>))}
                </u><ahref={`mailto:kleber@ziontechgroup.com?subject=Interest in${plan.name}Plan`}
                   className="cyber-button w-fulltext-centerblock"
                  >Get Started
                </a></di>))}
          </di></sectio>{/* CTASection */}
        <sectionclassName="container mx-auto px-4 py-16text-center"><divclassName="cyber-card p-12max-w-4xlmx-auto"><spanclassName="text-3 xlmd:text-4 xl font-bold text-whitemb-6neon-text"></className="text-3 xlmd:text-4 xl font-bold text-whitemb-6neon-text">Ready to Transform Your Data?
            </h><spanclassName="text-xl text-gray-300mb-8"></className="text-xl text-gray-300mb-8">Join300+ companies already using our AI data visualization solutions
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
                 className="cyber-button flex items-centerjustify-centerspace-x-2"
                ><PhoneclassName="w-5h-5" /><spa n>Call (302)464-0950</spa></a><ahref="mailto:kleber@ziontechgroup.com"
                 className="cyber-button flex items-centerjustify-centerspace-x-2"
                  style={{background: 'linear-gradient(45 deg, #8 b5cf6, #ec4899)'}}
                ><MailclassName="w-5h-5" /><spa n>ScheduleDemo</spa></a></di></di></sectio></mai><Footer /></di></>
  );
};

export default AIDataVisualizationPage;