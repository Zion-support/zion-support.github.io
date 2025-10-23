import { CheckCircle, Phone, TrendingUp, Check } from 'lucide-react';
import {CheckCircle, Phone, TrendingUp} from 'lucide-react';
import React from 'react';

import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';

constMachineLearningPage: React.FC= () =>{constfeatures= [
    'Custom ML model development and training',
    'Predictive analytics and forecasting',
    'Data preprocessing and feature engineering',
    'Model optimization and hyperparameter tuning',
    'Real-time inference and deployment',
    'A/B testing and performance monitoring',
    'Integration with existing systems',
    'Continuous learning and model updates'
  ]

  constbenefits= [
    '4 0% better prediction accuracy',
    '6 0% faster insights generation',
    '5 0% reduction in manual analysis',
    '3 0% improvement in decision making',
    '9 5% model reliability',
    '8 0% cost savings on analytics'
  ];

  constuseCases= [
    {
      title: 'Predictive Analytics',
      description: 'Forecast sales, demand, and market trends with high accuracy',
      icon: '📈'
   },
    {title: 'Customer Segmentation',
      description: 'Identify and target customer groups for personalized marketing',
      icon: '👥'
   },
    {title: 'Fraud Detection',
      description: 'Detect and prevent fraudulent activities in real-time',
      icon: '🛡️'
   },
    {title: 'Recommendation Systems',
      description: 'Provide personalized recommendations to increase engagement',
      icon: '🎯'
   },
    {title: 'Process Optimization',
      description: 'Optimize business processes and reduce operational costs',
      icon: '⚙️'
   },
    {title: 'Risk Assessment',
      description: 'Evaluate and mitigate business risks with data-driven insights',
      icon: '⚠️'
   }
  ];

  return (
  <><Navigation /><divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"><mainclassName="container mx-autopx-4py-16pt-24">{/* HeroSection */}
        <sectionclassName="text-centermb-16"><spanclassName="text-5 xlmd:text-6 xl font-bold text-whitemb-6neon-text"></spa></className="text-5 xlmd:text-6 xl font-bold text-whitemb-6neon-text">Machine Learning Solutions
          </h><spanclassName="text-xl text-cyan-400mb-8"></spa></className="text-xl text-cyan-400mb-8">Custom ML models for predictive analytics and decision-making
          </p><spanclassName="text-lg text-gray-300max-w-4 xlmx-automb-8"></spa></className="text-lg text-gray-300max-w-4 xlmx-automb-8">Transform your business with our advanced machine learning solutions that provide 
              intelligent insights, predictions, and automation to drive growth and efficiency.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
               className="cyber-button px-8 py-4text-lgfont-semibold"
              >Get Started
            </a><ahref="tel:+13024640950"
               className="flex items-center gap-2 border-2 border-cyan-400text-cyan-400px-8 py-4 rounded-lg font-semiboldhover:bg-cyan-400 hover:text-slate-900transition-allduration-300"
              ><PhoneclassName="w-5h-5" />+1 3024640950</a></di></sectio>{/* FeaturesSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text"></spa></className="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text">ML Capabilities
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-6">{features.map((featureindex) => (
             <divkey={index}className="cyber-card p-6 hover:scale-105transition-allduration-300"><CheckCircleclassName="w-8 h-8 text-green-400mb-4" /><h3className="text-lg font-semiboldtext-whitemb-2">{feature}</h></di>))}
          </di></sectio>{/* Use CasesSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text"></spa></className="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text">Common Use Cases
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-6">{useCases.map((useCaseindex) => (
             <divkey={index}className="quantum-card p-6 hover:scale-105transition-allduration-300"><divclassName="text-4xlmb-4">{useCase.icon}</di><h3className="text-xl font-semiboldtext-whitemb-3">{useCase.title}</h><pclassName="text-gray-300">{useCase.description}</p></di>))}
          </di></sectio>{/* BenefitsSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text"></spa></className="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text">Business Impact
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-6">{benefits.map((benefitindex) => (
             <divkey={index}className="cyber-card p-6 text-centerhover:scale-105transition-allduration-300"><TrendingUpclassName="w-12h-1 2text-cyan-400mx-automb-4" /><pclassName="text-lgtext-whitefont-semibold">{benefit}</p></di>))}
          </di></sectio>{/* ContactSection */}
        <sectionclassName="text-center"><spanclassName="text-3 xlmd:text-4 xl font-bold text-whitemb-8neon-text"></spa></className="text-3 xlmd:text-4 xl font-bold text-whitemb-8neon-text">Ready to Implement ML?
          </h><spanclassName="text-lg text-gray-300mb-8 max-w-2xlmx-auto"></spa></className="text-lg text-gray-300mb-8 max-w-2xlmx-auto">Let our experts help you build and deploy machine learning solutions that drive real business value.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
               className="cyber-button px-8 py-4text-lgfont-semibold"
              >Contact Us
            </a><ahref="tel:+13024640950"
               className="flex items-center gap-2 border-2 border-cyan-400text-cyan-400px-8 py-4 rounded-lg font-semiboldhover:bg-cyan-400 hover:text-slate-900transition-allduration-300"
              ><PhoneclassName="w-5h-5" />+1 30 24640950</a></di></sectio></mai><Footer /></di></>
  );
};

export default MachineLearningPage