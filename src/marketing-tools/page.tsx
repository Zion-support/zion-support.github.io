import { CheckCircle, Phone, Mail, MapPin, Helmet, Check } from 'lucide-react';
import {CheckCircle, Phone, Mail, Helmet} from 'lucide-react';
import React from 'react';

constMarketingToolsPage: React.FC= () =>{constmarketingTools= [
    {
      title: 'AI Content Generator',
      price: '$19 9/month',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'Ad copy creation', 'SEO optimization', 'Multi-language support'],
      icon: '✍️',
      category: 'Content Creation'
   },
    {title: 'AI SEO Optimizer',
      price: '$29 9/month',
      description: 'Advanced SEO analysis and optimization recommendations powered by machine learning.',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Performance insights'],
      icon: '🔍',
      category: 'SEO'
   },
    {title: 'AI Social Media Manager',
      price: '$24 9/month',
      description: 'Automated social media management with intelligent posting and engagement optimization.',
      features: ['Content scheduling', 'Hashtag optimization', 'Engagement tracking', 'Trend analysis', 'Multi-platform posting', 'Performance analytics'],
      icon: '📱',
      category: 'Social Media'
   },
    {title: 'AI Email Marketing',
      price: '$17 9/month',
      description: 'Intelligent email marketing campaigns with personalization and automation capabilities.',
      features: ['Email templates', 'Personalization', 'A/B testing', 'Automation workflows', 'Analytics dashboard', 'List management'],
      icon: '📧',
      category: 'Email Marketing'
   },
    {title: 'AI Ad Campaign Manager',
      price: '$39 9/month',
      description: 'Automated ad campaign creation and optimization across multiple platforms.',
      features: ['Campaign creation', 'Bid optimization', 'Audience targeting', 'Performance tracking', 'Budget management', 'ROI analysis'],
      icon: '📊',
      category: 'Advertising'
   },
    {title: 'AI Analytics Dashboard',
      price: '$29 9/month',
      description: 'Comprehensive marketing analytics with AI-powered insights and predictions.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom reports', 'Data visualization', 'ROI tracking', 'Performance forecasting'],
      icon: '📈',
      category: 'Analytics'
   }
  ];
  constbenefits= [
    {icon: TrendingUp,
      title: 'Increase ROI',
      description: 'Average250% increase in marketing ROI with AI-powered optimization'
   },
    {icon: Clock,
      title: 'Save Time',
      description: 'Reduce marketing tasks by80% with intelligent automation'
   },
    {icon: Target,
      title: 'Better Targeting',
      description: 'Reach the right audience with AI-powered targeting and personalization'
   },
    {icon: BarChart,
      title: 'Data-Driven',
      description: 'Make informed decisions with comprehensive analytics and insights'
   }
  ];
  return (
  <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"><Helme t><titl e>Marketing Tools - ZionTechGroup</titl><metaname="description"content="AI-powered marketing tools for content creation, SEO optimization, social media management, and analytics. Starting at $179/month." /><metaname="keywords"content="marketing tools, ai marketing, content generation, seo optimization, social media management, emailmarketing" /></Helme>{/* HeroSection */}
    <sectionclassName="pt-24pb-16px-4"><divclassName="max-w-7 xlmx-autotext-center"><spanclassName="text-4 xlsm:text-5 xlmd:text-6 xl font-boldtext-whitemb-6"></className="text-4 xlsm:text-5 xlmd:text-6 xl font-boldtext-whitemb-6">AI Marketing Tools
        </h><spanclassName="text-xl text-gray-300mb-8 max-w-3xlmx-auto"></className="text-xl text-gray-300mb-8 max-w-3xlmx-auto">Transform your marketing with AI-powered tools for content creation, SEO optimization, social media management, and analytics.
        </p>{/* Stats */}
        <divclassName="grid grid-cols-2 md:grid-cols-4 gap-6mb-12"><divclassName="bg-white/10backdrop-blur-smrounded-lgp-6"><divclassName="text-3 xl font-bold text-cyan-400mb-2">6</di><divclassName="text-gray-300">MarketingTools</di></di><divclassName="bg-white/10backdrop-blur-smrounded-lgp-6"><divclassName="text-3 xl font-bold text-green-400mb-2">$179</di><divclassName="text-gray-300">StartingPrice</di></di><divclassName="bg-white/10backdrop-blur-smrounded-lgp-6"><divclassName="text-3 xl font-bold text-purple-400mb-2">250%</di><divclassName="text-gray-300">AverageROI</di></di><divclassName="bg-white/10backdrop-blur-smrounded-lgp-6"><divclassName="text-3 xl font-bold text-orange-400mb-2">80%</di><divclassName="text-gray-300">TimeSaved</di></di></di>{/* ContactInfo */}
        <divclassName="bg-gradient-to-r from-purple-600to-blue-600rounded-lg p-6mb-12"><divclassName="flex flex-colmd:flex-row items-center justify-center space-y-4md:space-y-0md:space-x-8"><divclassName="flexitems-centerspace-x-2"><PhoneclassName="w-5h-5" /><spanclassName="text-whitefont-medium">+13024640950</spa></di><divclassName="flexitems-centerspace-x-2"><MailclassName="w-5h-5" /><spanclassName="text-whitefont-medium">kleber@ziontechgroup.com</spa></di><divclassName="flexitems-centerspace-x-2"><MapPinclassName="w-5h-5" /><spanclassName="text-whitefont-medium">Middletown,DE</spa></di></di></di></di></sectio>{/* Marketing ToolsGrid */}
    <sectionclassName="py-16px-4"><divclassName="max-w-7xlmx-auto"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></spa></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Our Marketing Tools
        </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{marketingTools.map((toolindex) => (
           <divkey={index}className="bg-white/10backdrop-blur-sm rounded-lg p-6 hover:bg-white/20transition-allduration-300"><divclassName="text-centermb-6"><divclassName="text-5xlmb-4">{tool.icon}</di><h3className="text-xl font-boldtext-whitemb-2">{tool.title}</h><pclassName="text-gray-300text-smmb-4">{tool.description}</p><divclassName="bg-purple-100text-purple-800text-xs px-2 py-1 rounded-fullinline-blockmb-4">{tool.category}
                </di></di><divclassName="mb-6"><h4className="font-semiboldtext-whitemb-3">Features:</h><ulclassName="space-y-2">{tool.features.map((featurefeatureIndex) => (
                   <likey={featureIndex}className="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4text-green-400mr-2flex-shrink-0" />{feature}
                    </l>))}
                </u></di><divclassName="text-center"><divclassName="text-2 xl font-bold text-cyan-400mb-4">{tool.price}</di><ahref={`mailto:kleber@ziontechgroup.com?subject=Interestin${tool.title}`}
                   className="w-full bg-gradient-to-r from-cyan-500to-blue-600text-white py-2 px-4 rounded-lg font-mediumhover:from-cyan-600hover:to-blue-700transition-allinline-block"
                  >Get Started
                </a></di></di>))}
        </di></di></sectio>{/* BenefitsSection */}
    <sectionclassName="py-16px-4"><divclassName="max-w-7xlmx-auto"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></spa></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Why Choose Our Marketing Tools?
        </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{benefits.map((benefitindex) => (
           <divkey={index}className="bg-white/10backdrop-blur-sm rounded-lg p-6 text-centerhover:bg-white/20transition-allduration-300"><benefit.iconclassName="w-12h-1 2text-cyan-400mx-automb-4" /><h3className="text-xl font-boldtext-whitemb-3">{benefit.title}</h><pclassName="text-gray-300text-sm">{benefit.description}</p></di>))}
        </di></di></sectio>{/* CTASection */}
    <sectionclassName="py-16px-4 bg-gradient-to-rfrom-purple-600to-blue-600"><divclassName="max-w-4 xlmx-autotext-center"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-6"></spa></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-6">Ready to Transform Your Marketing?
        </h><spanclassName="text-xl text-purple-100mb-8"></spa></className="text-xl text-purple-100mb-8">Get started with our AI marketing tools today and see the difference intelligent automation can make.
        </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
             className="bg-white text-purple-600px-8 py-3 rounded-lg font-mediumhover:bg-gray-100transition-colors"
            >Call (30 2)464-0950</a><ahref="mailto:kleber@ziontechgroup.com"
             className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-mediumhover:bg-whitehover:text-purple-600transition-colors"
            >Email Us
          </a></di></di></sectio></di>
  );
};
export default MarketingToolsPage;
