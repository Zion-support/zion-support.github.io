

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
  GitPullRequest,;
  Cpu,;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from 'lucide-react';

      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    }
    {
      icon: <Zap className="w-6 h-6" />
      title: 'Infrastructure as Code'
      description: 'Terraform, CloudFormation, and Kubernetes automation';
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
    }
    {
      icon: <Shield className="w-6 h-6" />
      title: 'Security Automation'
      description: 'Automated security scanning and compliance checks'
export default function DevOpsAutomationPage() {
  const features = [
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment workflows',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    };
    {
      icon: <Zap className="w - 6 h - 6" />,
      title: 'Infrastructure as Code',

      description: 'Terraform, CloudFormation, and Kubernetes automation';
      color: 'bg - gradient - to - br from - green - 500 to - emerald - 600';
    }
=======
      color: 'bg - gradient - to - br from - purple - 500 to - indigo - 600';
    }
    {
      icon: <BarChart3 className="w - 6 h - 6" />,
      title: 'Performance Monitoring',
      description: 'Real - time performance insights and optimization',
      color: 'bg - gradient - to - br from - orange - 500 to - red - 600',
    },
      title: 'CI / CD Pipelines',
      description: 'Automated build, test, and deployment workflows',
      color: 'bg - gradient - to - br from - blue - 500 to - cyan - 600',
    },
    {
      icon: <Zap className='w - 6 h - 6' />,
      title: 'Infrastructure as Code',
      description: 'Terraform, CloudFormation, and Kubernetes automation',
      color: 'bg - gradient - to - br from - green - 500 to - emerald - 600',
    },
    {
      icon: <Shield className='w - 6 h - 6' />,
      title: 'Security Automation',
      description: 'Automated security scanning and compliance checks',
      color: 'bg - gradient - to - br from - purple - 500 to - indigo - 600',
    },
    {
      icon: <BarChart3 className='w - 6 h - 6' />,
      title: 'Performance Monitoring',
      description: 'Real - time performance insights and optimization',
      color: 'bg - gradient - to - br from - orange - 500 to - red - 600',
    },  ];      color: 'bg - gradient - to - br from - orange - 500 to - red - 600';
    }
==============
  ];

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  ];
;
  const pricing_plans = [;

export default function DevOpsAutomationPage() {_const _features = [
    {
      icon: <GitBranch className=&quot;w-6 h-6&quot; />,
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment workflows',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    },
    {
      icon: <Zap className=&quot;w-6 h-6&quot; />,
      title: 'Infrastructure as Code',
      description: 'Terraform, CloudFormation, and Kubernetes automation',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    {
      icon: <Shield className=&quot;w-6 h-6&quot; />,
      title: 'Security Automation',
      description: 'Automated security scanning and compliance checks',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
    },
    {
      icon: <BarChart3 className=&quot;w-6 h-6&quot; />,
      title: 'Performance Monitoring',
      description: 'Real-time performance insights and optimization',
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
    }
  ],

  const pricingPlans = [

    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small teams and startups',
export default function DevOpsAutomationPage() {
  const features = [
    {

  ];
  const pricingPlans = [
    {
      name: 'Starter'
      price: '$39'
      period: '/month'
      description: 'Perfect for small teams and startups'
      features: [
        'Up to 5 repositories'
        'Basic CI/CD pipelines'
        'GitHub integration'
        'Email notifications'
        'Basic security scanning'
        'Community support'
      ]
      popular: false
      cta: 'Start Free Trial'
      color: 'border-gray-600 hover:border-blue-500'
    },    {        'Up to 5 repositoriesBasic CI/CD pipelinesGitHub integrationEmail notificationsBasic security scanningCommunity support'
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ];
      popular: false
      cta: 'Start Free Trial'
      color: 'border-gray-600 hover:border-blue-500'
    }
      name: 'Professional'
      price: '$129'
      period: '/month'
      description: 'Ideal for growing development teams'
      features: [
        'Up to 25 repositories'
        'Advanced CI/CD workflows'
        'Multi-cloud deployment'
        'Slack & Teams integration'
        'Advanced security suite'
        'Priority support'
        'Custom pipelines'
        'Team collaboration'
      ]
      popular: true
      cta: 'Start Free Trial'
      color: 'border-blue-500 hover:border-blue-400'
    },    {        'Up to 25 repositoriesAdvanced CI/CD workflowsMulti-cloud deploymentSlack & Teams integrationAdvanced security suitePriority supportCustom pipelinesTeam collaboration'
      ];
      popular: true
      cta: 'Start Free Trial'
      color: 'border-blue-500 hover:border-blue-400'
    }
      name: 'Enterprise'
      price: '$399'
      period: '/month'
      description: 'For large-scale development operations'
      features: [
        'Unlimited repositories'
        'Enterprise CI/CD'
        'Advanced IaC automation'
        'Custom integrations'
        '24/7 dedicated support'
        'SLA guarantees'
        'On-premise options'
        'Custom security policies'
      ]
      popular: false
      cta: 'Contact Sales'
      color: 'border-gray-600 hover:border-blue-500'
    },  ];        'Unlimited repositoriesEnterprise CI/CDAdvanced IaC automationCustom integrations24/7 dedicated supportSLA guaranteesOn-premise optionsCustom security policies'
      ];
      popular: false
      cta: 'Contact Sales'
      color: 'border-gray-600 hover:border-blue-500'
    }
  const marketComparison = [
    {
      competitor: 'GitHub Actions'
      pricing: 'Free + $0.008/min'
      repositories: 'Unlimited'
      rating: '4.6/5'
      pros: ['GitHub native', 'Good free tier']
      cons: ['Expensive for teams', 'Limited features']
    },    {      pros: ['GitHub nativeGood free tier']
      cons: ['Expensive for teamsLimited features']
    }
    {
      competitor: 'GitLab CI/CD'
      pricing: '$19/user/month'
      repositories: 'Unlimited'
      rating: '4.4/5'
      pros: ['Integrated platform', 'Good CI/CD']
      cons: ['User-based pricing', 'Limited integrations']
    },    {      pros: ['Integrated platformGood CI/CD']
      cons: ['User-based pricingLimited integrations']
    }
    {
      competitor: 'Jenkins'
      pricing: 'Free'
      repositories: 'Unlimited'
      rating: '4.2/5'
      pros: ['Completely free', 'Highly customizable']
      cons: ['Requires maintenance', 'No managed service']
    },  ];      pros: ['Completely freeHighly customizable']
        'Up to 5 repositoriesBasic CI/CD pipelinesGitHub integrationEmail notificationsBasic security scanningCommunity support'
      ];
      popular: false,
      cta: 'Start Free Trial',
      color: 'border - gray - 600 hover:border - blue - 500';
    }

      features: [;        'Up to 25 repositories',
        'Advanced CI / CD workflows',
        'Multi - cloud deployment',
        'Slack & Teams integration',
        'Advanced security suite',
        'Priority support',
        'Custom pipelines',
        'Team collaboration',
      ],
      popular: true,
      cta: 'Start Free Trial',
      color: 'border - blue - 500 hover:border - blue - 400',
    },    {        'Up to 25 repositories_advanced CI / CD workflows_multi - cloud deployment_slack & Teams integration_advanced security suite_priority support_custom pipelines_team collaboration';
      ];
      popular: true,
      cta: 'Start Free Trial',
      color: 'border - blue - 500 hover:border - blue - 400';
    }
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large - scale development operations',
      features: [;
        'Unlimited repositories',
        'Enterprise CI / CD',
        'Advanced IaC automation',
        'Custom integrations',
        '24 / 7 dedicated support',
        'SLA guarantees',
        'On - premise options',
        'Custom security policies',
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'border - gray - 600 hover:border - blue - 500',
    },  ];        'Unlimited repositories_enterprise CI / CDAdvanced IaC automation_custom integrations24 / 7 dedicated supportSLA guarantees_on - premise options_custom security policies';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      ];
      popular: false,
      cta: 'Contact Sales',
      color: 'border - gray - 600 hover:border - blue - 500';
    }
  const market_comparison = [;
=======

  const market_comparison = [;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      competitor: 'GitHub Actions',
      pricing: 'Free + $0.008 / min',
      repositories: 'Unlimited',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      rating: '4.6 / 5',
      pros: ['GitHub native', 'Good free tier'],
      cons: ['Expensive for teams', 'Limited features'],
    },    {      pros: ['GitHub native_good free tier'],
      cons: ['Expensive for teams_limited features'];
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    {
      competitor: 'GitLab CI / CD',
      pricing: '$19 / user / month',
      repositories: 'Unlimited',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      rating: '4.4 / 5',
      pros: ['Integrated platform', 'Good CI / CD'],
      cons: ['User - based pricing', 'Limited integrations'],
    },    {      pros: ['Integrated platform_good CI / CD'],
      cons: ['User - based pricing_limited integrations'];
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    {
      competitor: 'Jenkins',
      pricing: 'Free',
      repositories: 'Unlimited',
      rating: '4.2 / 5',=======

      rating: '4.2 / 5',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      pros: ['Completely free', 'Highly customizable'],
      cons: ['Requires maintenance', 'No managed service'],
    },  ];      pros: ['Completely free_highly customizable'],
      cons: ['Requires maintenance_no managed service'];
    }
  ];
    }
  ];



=======

    {

      name: 'Michael Chen',
      role: 'DevOps Lead',
      company: 'TechStart Inc.',

    }
  ];
=======
    }
  ];


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (

        />;
        <meta name='twitter:card' content='summary_large_image' />;

      <div className='min-h-screen bg-black'>;
        {/* Hero Section */}
        <section className='pt-32 pb-20 bg-gradient-to-br from-blue-900/20 to-cyan-900/20'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
            <div className='mb-8'>;
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>;
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse' />;
                DevOps Automation Platform;
              </div>;
            </div>;
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>;
              DevOps Automation;
            </h1>;
            <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12'>;
              Streamline your development workflow with automated CI/CD;
              pipelines, infrastructure as code, and intelligent security;
              automation. Deploy faster, safer, and more reliably.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;

  return (
    <>
      <Head>
        <title>
          DevOps Automation - Zion Tech Group | Professional CI/CD &
          Infrastructure Automation
        </title>
        <meta
          name='description'
          content='Professional DevOps automation platform with CI/CD, infrastructure as code, and security automation. Plans starting at $39/month.'
        />
        <meta
          property='og:title'
          content='DevOps Automation - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Professional DevOps automation starting at $39/month. CI/CD pipelines, infrastructure as code, and security automation.'
        />
        <meta name='twitter:card' content='summary_large_image' />
      <div className='min-h-screen bg-black'>
        {/* Hero Section */}
        <section className='pt-32 pb-20 bg-gradient-to-br from-blue-900/20 to-cyan-900/20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <div className='mb-8'>
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse' />
                DevOps Automation Platform
              </div>
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>
              DevOps Automation
            </h1>
            <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12'>
              Streamline your development workflow with automated CI/CD
              pipelines, infrastructure as code, and intelligent security
              automation. Deploy faster, safer, and more reliably.

            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Button
                href='#pricing'
                variant='primary'
                size='lg'
                className='bg-blue-600 hover:bg-blue-700 text-white'              >
                Start Free Trial
              </Button>
              <Button
                href='#demo'
                variant='outline'
                size='lg'
                className='border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'              >                href="#pricing"
                variant="primary"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                Start Free Trial
              </Button>
              <Button
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>
      <Head>
        <title>DevOps Automation - Zion Tech Group | Professional CI/CD & Infrastructure Automation</title>
        <meta name="description" content="Professional DevOps automation platform with CI/CD, infrastructure as code, and security automation. Plans starting at $39/month." />
        <meta property="og:title" content="DevOps Automation - Zion Tech Group" />
        <meta property="og:description" content="Professional DevOps automation starting at $39/month. CI/CD pipelines, infrastructure as code, and security automation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                DevOps Automation Platform
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              DevOps Automation
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Streamline your development workflow with automated CI/CD pipelines, infrastructure as code, and intelligent security automation. Deploy faster, safer, and more reliably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#pricing"
                variant="primary"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Start Free Trial
              </Button>
              <Button
                Watch Demo

              </Button>;
            </div>;
          </div>;
        </section>;


                Everything you need to automate your development and deployment;
                processes.;
              </p>;
            </div>;

                </Card>

=======            </div>;
          </div>;
        </section>;


        {/* Automation Examples Section */}

        {/* Automation Examples Section */}
        <section className='py-24 bg-gray-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>



=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======                What You Can Automate
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                See how Zion DevOps can transform your development workflow.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {automationExamples.map((example, index) => (
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 bg-gradient-to-br ${example.color}`}
                  >
                    {example.icon}
                  </div>
              ))}

            </div>;
          </div>;
        </section>;


        {/* Pricing Section */}
        <section id='pricing' className='py-24 bg-gray-900'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='text-center mb-20'>;
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>;
                Simple, Transparent Pricing;
              </h2>;
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
                Choose the plan that fits your DevOps needs. All plans include a;
                14-day free trial.;
              </p>;
            </div>;
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>              {pricingPlans && pricingPlans.map((plan, index) => (                Simple, Transparent Pricing;
              </h2>;
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
                Choose the plan that fits your DevOps needs. All plans include a 14-day free trial.;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              {pricingPlans && pricingPlans.map((plan, index) => (;
                <Card
                  key={index}
                  className={`relative p-8 ${plan && plan.color} transition-all duration-300 hover:scale-105 ${
                    plan && plan.popular ? 'ring-2 ring-blue-500' : ''
                  }`}>;
                  {plan && plan.popular && (;
                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>;
                      <span className='bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium'>                        Most Popular;
                      </span>;
                    </div>;
                  )}                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">;
                        Most Popular;
                      </span>;
                    </div>;
                  )}
                  <div className='text-center'>;
                    <h3 className='text-2xl font-bold text-white mb-2'>;
                      {plan && plan.name}
                    </h3>;
                    <div className='mb-6'>;
                      <span className='text-4xl font-bold text-white'>;
                        {plan && plan.price}
                      </span>;
                      <span className='text-gray-400'>{plan && plan.period}</span>;
                    </div>;
                    <p className='text-gray-300 mb-8'>{plan && plan.description}</p>;
                    <ul className='text-left space-y-3 mb-8'>;
                      {plan && plan.features.map((feature, featureIndex) => (;
                        <li
                          key={featureIndex}
                          className='flex items-center text-gray-300'>;
                          <Check className='w-5 h-5 text-blue-400 mr-3 flex-shrink-0' />                          {feature}                    </div>;
                    <p className="text-gray-300 mb-8">{plan && plan.description}</p>;
                    <ul className="text-left space-y-3 mb-8">;
                      {plan && plan.features.map((feature, featureIndex) => (;
                        <li key={featureIndex} className="flex items-center text-gray-300">;
                          <Check className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
=======





>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Simple, Transparent Pricing
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                Choose the plan that fits your DevOps needs. All plans include a
                14-day free trial.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>              {pricingPlans.map((plan, index) => (                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the plan that fits your DevOps needs. All plans include a 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative p-8 ${plan.color} transition-all duration-300 hover:scale-105 ${
                    plan.popular ? 'ring-2 ring-blue-500' : ''
                  }`}
                >;
                  {plan.popular && (

                          {feature}



                        </li>
                      ))}
                    </ul>;
                    <Button






        {/* Market Comparison Section */}
        <section className='py-24 bg-gray-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>

        {/* Market Comparison Section */}        <section className="py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                How We Compare to the Competition

        {/* Market Comparison Section */}
        <section className='py-24 bg-gray-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>

                How We Compare to the Competition
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                See why Zion DevOps is the smart choice for automation.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {marketComparison.map((competitor, index) => (
                <Card key={index} className='p-6'>
                  <div className='text-center mb-6'>
                    <h3 className='text-xl font-bold text-white mb-2'>
                      {competitor.competitor}
                    </h3>
                    <div className='flex items-center justify-center mb-2'>                      {[...Array(5)].map((_, i) => (                <Card key={index} className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{competitor.competitor}</h3>
                    <div className="flex items-center justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        ))}
                      </ul>;
                    </div>;
                  </div>;
                </Card>;
              ))}
              ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            </div>;
          </div>;
        </section>;


        {/* CTA Section */}


        {/* CTA Section */}
        <section className='py-24 bg-gradient-to-r from-blue-600 to-cyan-600'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>

            </h2>
            <p className='text-xl text-blue-100 mb-12'>
              Join thousands of teams who trust Zion for their DevOps automation
              needs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button

;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
