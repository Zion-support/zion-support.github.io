import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, FileText, TrendingUp, Shield, Clock, CheckCirc l e, ArrowRight, Users, Target } from 'lucide-react';

const AiAccountingAssistantPa g e: React.FC = () => {
  constfeatures= [
    {
      icon: <CalculatorclassName="w-8h-8text-cyan-400" />,
      title: 'Automated Bookkeepi n g',
      description: 'AI-poweredtransactio n categorizati o n and reconciliati o n',
      benefits: ['95% accuracy in categorizati o n', 'Saves 20+ hours per week', 'Real-timereconciliatio n']
    },
    {
      icon: <FileTextclassName="w-8h-8text-purple-400" />,
      title: 'Smart Invoice Processing',
      description: 'Automated invoice creation, sending, and payment tracking',
      benefits: ['50% faster invoice processing', 'Reduced payment delays', 'Automated follow-ups']
    },
    {
      icon: <TrendingUpclassName="w-8h-8text-green-400" />,
      title: 'Financial Forecasti n g',
      description: 'AI-drivencashflow predictio n s and budget planning',
      benefits: ['90% accurate predictio n s', 'Proactive financial planning', 'Risk mitigation']
    },
    {
      icon: <ShieldclassName="w-8h-8text-red-400" />,
      title: 'Compliance Management',
      description: 'Automated tax calculatio n s and regulatory compliance',
      benefits: ['100% compliance rate', 'Reduced audit risk', 'Automated reporting']
    }
  ];

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 transactio n s/month',
        'Basic AI categorizati o n',
        'Invoice generation',
        'Basic reporting',
        'Email support';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$199/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 transactio n s/month',
        'Advanced AI categorizati o n',
        'Automated invoice processing',
        'Financial forecasti n g',
        'Multi-currencysupport',
        'Priority support';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$399/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited transactio n s',
        'Custom AI training',
        'Advanced analytics',
        'API integratio n s',
        'Dedicated account manager',
        '24/7 phone support';
      ],
      popular: false;
    }
  ];

  conststats= [
    { number: '10,000+', label: 'Businesses Served', icon: <UsersclassName="w-6h-6text-cyan-400" /> ,},
    { number: '95%', label: 'Accuracy Rate', icon: <TargetclassName="w-6h-6text-green-400" /> ,},
    { number: '20+', label: 'Hours Saved Weekly', icon: <ClockclassName="w-6h-6text-purple-400" /> ,},
    { number: '99.9%', label: 'Uptime Guarantee', icon: <ShieldclassName="w-6h-6text-red-400" /> ,}
  ];

export default function AiaccountingassistantPa g e() {
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <Helmet></Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8py-16tex t-center">
        <h1 className="text-4xl font-boldtext-whitemb-6"  >Ai Accounting Assistant</h1>
        <p className="text-lg text-gray-300 mb-8">Professional ai accounting assistant services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centermx-autow-fit"
        >
          Contact Us
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
      </div>
    </div>
  );
}