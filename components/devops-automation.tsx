<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { GitBranch, Zap, Shield, BarChart3, Check, Star, GitPullRequest, Cpu } from 'lucide-react',
=======
import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function DevOpsAutomationPage() {_const _features = [
    {
<<<<<<< HEAD
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
      features: [
        'Up to 5 repositoriesBasic CI/CD pipelinesGitHub integrationEmail notificationsBasic security scanningCommunity support'
      ],
      popular: false,
      cta: 'Start Free Trial',
      color: 'border-gray-600 hover:border-blue-500'
    },
    {
      name: 'Professional',
      price: '$129',
      period: '/month',
      description: 'Ideal for growing development teams',
      features: [
        'Up to 25 repositoriesAdvanced CI/CD workflowsMulti-cloud deploymentSlack & Teams integrationAdvanced security suitePriority supportCustom pipelinesTeam collaboration'
      ],
      popular: true,
      cta: 'Start Free Trial',
      color: 'border-blue-500 hover:border-blue-400'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large-scale development operations',
      features: [
        'Unlimited repositoriesEnterprise CI/CDAdvanced IaC automationCustom integrations24/7 dedicated supportSLA guaranteesOn-premise optionsCustom security policies'
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'border-gray-600 hover:border-blue-500'
    }
  ],

  const marketComparison = [
    {
      competitor: 'GitHub Actions',
      pricing: 'Free + $0.008/min',
      repositories: 'Unlimited',
      rating: '4.6/5',
      pros: ['GitHub nativeGood free tier'],
      cons: ['Expensive for teamsLimited features']
    },
    {
      competitor: 'GitLab CI/CD',
      pricing: '$19/user/month',
      repositories: 'Unlimited',
      rating: '4.4/5',
      pros: ['Integrated platformGood CI/CD'],
      cons: ['User-based pricingLimited integrations']
    },
    {
      competitor: 'Jenkins',
      pricing: 'Free',
      repositories: 'Unlimited',
      rating: '4.2/5',
      pros: ['Completely freeHighly customizable'],
      cons: ['Requires maintenanceNo managed service']
    }
  ],

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'DevOps Lead',
      company: 'TechStart Inc.',
      content: 'Zion DevOps reduced our deployment time from 2 hours to 15 minutes. The automation is incredible and the pricing is fair.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Engineering Manager',
      company: 'CloudWorks',
      content: 'We switched from GitHub Actions to Zion and saved $200/month while getting better automation features.',
      rating: 5
    },
    {
      name: 'Robert Davis',
      role: 'Site Reliability Engineer',
      company: 'ScaleTech',
      content: 'The infrastructure automation features are game-changing. We can now deploy to multiple clouds with a single click.',
      rating: 5
    }
  ],

  const automationExamples = [
    {
      title: 'Automated Testing',
      description: 'Run comprehensive test suites on every commit',
      icon: '🧪',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Security Scanning',
      description: 'Automated vulnerability detection and compliance checks',
      icon: '🔒',
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Deployment Automation',
      description: 'Zero-downtime deployments with rollback capabilities',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Infrastructure Management',
      description: 'Automated scaling and resource optimization',
      icon: '🏗️',
      color: 'from-purple-500 to-indigo-600'
    }
  ],
=======
      icon: <GitBranch className="w-6 h-6" />, _title: 'CI/CD Pipelines', _description: 'Automated build, _test, _and deployment workflows', _color: 'bg-gradient-to-br from-blue-500 to-cyan-600'},
    {_icon: <Zap className="w-6 h-6" />, _title: 'Infrastructure as Code', _description: 'Terraform, _CloudFormation, _and Kubernetes automation', _color: 'bg-gradient-to-br from-green-500 to-emerald-600'},
    {_icon: <Shield className="w-6 h-6" />, _title: 'Security Automation', _description: 'Automated security scanning and compliance checks', _color: 'bg-gradient-to-br from-purple-500 to-indigo-600'},
    {_icon: <BarChart3 className="w-6 h-6" />, _title: 'Performance Monitoring', _description: 'Real-time performance insights and optimization', _color: 'bg-gradient-to-br from-orange-500 to-red-600'}
  ];

  const _pricingPlans = [
    {_name: 'Starter', _price: '$39', _period: '/month', _description: 'Perfect for small teams and startups', _features: [
        'Up to 5 repositories', _'Basic CI/CD pipelines', _'GitHub integration', _'Email notifications', _'Basic security scanning', _'Community support'
      ], _popular: false, _cta: 'Start Free Trial', _color: 'border-gray-600 hover:border-blue-500'},
    {_name: 'Professional', _price: '$129', _period: '/month', _description: 'Ideal for growing development teams', _features: [
        'Up to 25 repositories', _'Advanced CI/CD workflows', _'Multi-cloud deployment', _'Slack & Teams integration', _'Advanced security suite', _'Priority support', _'Custom pipelines', _'Team collaboration'
      ], _popular: true, _cta: 'Start Free Trial', _color: 'border-blue-500 hover:border-blue-400'},
    {_name: 'Enterprise', _price: '$399', _period: '/month', _description: 'For large-scale development operations', _features: [
        'Unlimited repositories', _'Enterprise CI/CD', _'Advanced IaC automation', _'Custom integrations', _'24/7 dedicated support', _'SLA guarantees', _'On-premise options', _'Custom security policies'
      ], _popular: false, _cta: 'Contact Sales', _color: 'border-gray-600 hover:border-blue-500'}
  ];

  const _marketComparison = [
    {_competitor: 'GitHub Actions', _pricing: 'Free + $0.008/min', _repositories: 'Unlimited', _rating: '4.6/5', _pros: ['GitHub native', _'Good free tier'], _cons: ['Expensive for teams', _'Limited features']},
    {_competitor: 'GitLab CI/CD', _pricing: '$19/user/month', _repositories: 'Unlimited', _rating: '4.4/5', _pros: ['Integrated platform', _'Good CI/CD'], _cons: ['User-based pricing', _'Limited integrations']},
    {_competitor: 'Jenkins', _pricing: 'Free', _repositories: 'Unlimited', _rating: '4.2/5', _pros: ['Completely free', _'Highly customizable'], _cons: ['Requires maintenance', _'No managed service']}
  ];

  const _testimonials = [
    {_name: 'Michael Chen', _role: 'DevOps Lead', _company: 'TechStart Inc.', _content: 'Zion DevOps reduced our deployment time from 2 hours to 15 minutes. The automation is incredible and the pricing is fair.', _rating: 5},
    {_name: 'Sarah Johnson', _role: 'Engineering Manager', _company: 'CloudWorks', _content: 'We switched from GitHub Actions to Zion and saved $200/month while getting better automation features.', _rating: 5},
    {_name: 'Robert Davis', _role: 'Site Reliability Engineer', _company: 'ScaleTech', _content: 'The infrastructure automation features are game-changing. We can now deploy to multiple clouds with a single click.', _rating: 5}
  ];

  const _automationExamples = [
    {_title: 'Automated Testing', _description: 'Run comprehensive test suites on every commit', _icon: '🧪', _color: 'from-green-500 to-emerald-600'},
    {_title: 'Security Scanning', _description: 'Automated vulnerability detection and compliance checks', _icon: '🔒', _color: 'from-red-500 to-pink-600'},
    {_title: 'Deployment Automation', _description: 'Zero-downtime deployments with rollback capabilities', _icon: '🚀', _color: 'from-blue-500 to-cyan-600'},
    {_title: 'Infrastructure Management', _description: 'Automated scaling and resource optimization', _icon: '🏗️', _color: 'from-purple-500 to-indigo-600'}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <Head>
        <title>DevOps Automation - Zion Tech Group | Professional CI/CD & Infrastructure Automation</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Professional DevOps automation platform with CI/CD, infrastructure as code, and security automation. Plans starting at $39/month.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;DevOps Automation - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Professional DevOps automation starting at $39/month. CI/CD pipelines, infrastructure as code, and security automation.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

      <div className=&quot;min-h-screen bg-black&quot;>
        {/* Hero Section */}
        <section className=&quot;pt-32 pb-20 bg-gradient-to-br from-blue-900/20 to-cyan-900/20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
            <div className=&quot;mb-8&quot;>
              <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6&quot;>
                <span className=&quot;w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse&quot; />
=======
        <meta name="description" content="Professional DevOps automation platform with CI/CD, _infrastructure as code, _and security automation. Plans starting at $39/month." />
        <meta property="og:title" content="DevOps Automation - Zion Tech Group" />
        <meta property="og:description" content="Professional DevOps automation starting at $39/month. CI/CD pipelines, _infrastructure as code, _and security automation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-black">
        {_/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                DevOps Automation Platform
              </div>
            </div>
            <h1 className=&quot;text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight&quot;>
              DevOps Automation
            </h1>
<<<<<<< HEAD
            <p className=&quot;text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12&quot;>
              Streamline your development workflow with automated CI/CD pipelines, infrastructure as code, 
              and intelligent security automation. Deploy faster, safer, and more reliably.
=======
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Streamline your development workflow with automated CI/CD pipelines, _infrastructure as code, _and intelligent security automation. Deploy faster, _safer, _and more reliably.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button
                href=&quot;#pricing&quot;
                variant=&quot;primary&quot;
                size=&quot;lg&quot;
                className=&quot;bg-blue-600 hover:bg-blue-700 text-white&quot;
              >
                Start Free Trial
              </Button>
              <Button
                href=&quot;#demo&quot;
                variant=&quot;outline&quot;
                size=&quot;lg&quot;
                className=&quot;border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white&quot;
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className=&quot;py-24 bg-gray-900&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;text-center mb-20&quot;>
              <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-8&quot;>
=======
        {_/* Features Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Complete DevOps Automation Suite
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Everything you need to automate your development and deployment processes.
              </p>
            </div>
<<<<<<< HEAD
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
              {features.map((feature, index) => (
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {_features.map((feature, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Card
                  key={index}
                  className=&quot;text-center group hover:scale-105 transition-transform duration-300&quot;
                >
                  <div className={_`w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 ${feature.color}`}>
                    {_feature.icon}
                  </div>
<<<<<<< HEAD
                  <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-400&quot;>{feature.description}</p>
=======
                  <h3 className="text-xl font-semibold text-white mb-4">{_feature.title}</h3>
                  <p className="text-gray-400">{_feature.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </Card>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Automation Examples Section */}
        <section className=&quot;py-24 bg-gray-800&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;text-center mb-20&quot;>
              <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-8&quot;>
=======
        {_/* Automation Examples Section */}
        <section className="py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                What You Can Automate
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                See how Zion DevOps can transform your development workflow.
              </p>
            </div>
<<<<<<< HEAD
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
              {automationExamples.map((example, index) => (
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {_automationExamples.map(_(example, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Card
                  key={index}
                  className=&quot;text-center group hover:scale-105 transition-transform duration-300&quot;
                >
                  <div className={_`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 bg-gradient-to-br ${example.color}`}>
                    {_example.icon}
                  </div>
<<<<<<< HEAD
                  <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>{example.title}</h3>
                  <p className=&quot;text-gray-400&quot;>{example.description}</p>
=======
                  <h3 className="text-xl font-semibold text-white mb-4">{_example.title}</h3>
                  <p className="text-gray-400">{_example.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </Card>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Pricing Section */}
        <section id=&quot;pricing&quot; className=&quot;py-24 bg-gray-900&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;text-center mb-20&quot;>
              <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-8&quot;>
=======
        {_/* Pricing Section */}
        <section id="pricing" className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Simple, Transparent Pricing
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Choose the plan that fits your DevOps needs. All plans include a 14-day free trial.
              </p>
            </div>
<<<<<<< HEAD
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {pricingPlans.map((plan, index) => (
=======
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {_pricingPlans.map(_(plan, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Card
                  key={index}
                  className={_`relative p-8 ${plan.color} transition-all duration-300 hover:scale-105 ${_plan.popular ? 'ring-2 ring-blue-500' : ''}`}
                >
<<<<<<< HEAD
                  {plan.popular && (
                    <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                      <span className=&quot;bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium&quot;>
=======
                  {_plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Most Popular
                      </span>
                    </div>
                  )}
<<<<<<< HEAD
                  <div className=&quot;text-center&quot;>
                    <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                    <div className=&quot;mb-6&quot;>
                      <span className=&quot;text-4xl font-bold text-white&quot;>{plan.price}</span>
                      <span className=&quot;text-gray-400&quot;>{plan.period}</span>
                    </div>
                    <p className=&quot;text-gray-300 mb-8&quot;>{plan.description}</p>
                    <ul className=&quot;text-left space-y-3 mb-8&quot;>
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                          <Check className=&quot;w-5 h-5 text-blue-400 mr-3 flex-shrink-0&quot; />
                          {feature}
=======
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{_plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{_plan.price}</span>
                      <span className="text-gray-400">{_plan.period}</span>
                    </div>
                    <p className="text-gray-300 mb-8">{_plan.description}</p>
                    <ul className="text-left space-y-3 mb-8">
                      {_plan.features.map(_(feature, _featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <Check className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                          {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </li>
                      ))}
                    </ul>
                    <Button
<<<<<<< HEAD
                      href={plan.name === 'Enterprise' ? '/contact' : '#signup'}
                      variant={plan.popular ? 'primary' : 'outline'}
                      size=&quot;lg&quot;
                      className={`w-full ${
=======
                      href={_plan.name === 'Enterprise' ? '/contact' : '#signup'}
                      variant={_plan.popular ? 'primary' : 'outline'}
                      size="lg"
                      className={_`w-full ${
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        plan.popular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'}`}
                    >
                      {_plan.cta}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Market Comparison Section */}
        <section className=&quot;py-24 bg-gray-800&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;text-center mb-20&quot;>
              <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-8&quot;>
=======
        {_/* Market Comparison Section */}
        <section className="py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                How We Compare to the Competition
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                See why Zion DevOps is the smart choice for automation.
              </p>
            </div>
<<<<<<< HEAD
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {marketComparison.map((competitor, index) => (
                <Card key={index} className=&quot;p-6&quot;>
                  <div className=&quot;text-center mb-6&quot;>
                    <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{competitor.competitor}</h3>
                    <div className=&quot;flex items-center justify-center mb-2&quot;>
                      {[...Array(5)].map((_, i) => (
=======
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {_marketComparison.map(_(competitor, _index) => (
                <Card key={index} className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{_competitor.competitor}</h3>
                    <div className="flex items-center justify-center mb-2">
                      {_[...Array(5)].map(_(_, _i) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <Star
                          key={i}
                          className={_`w-5 h-5 ${
                            i < Math.floor(parseFloat(competitor.rating))
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-400'}`}
                        />
                      ))}
                    </div>
<<<<<<< HEAD
                    <p className=&quot;text-sm text-gray-400&quot;>{competitor.rating}</p>
                  </div>
                  <div className=&quot;mb-4&quot;>
                    <p className=&quot;text-lg font-semibold text-white mb-1&quot;>Pricing: {competitor.pricing}</p>
                    <p className=&quot;text-sm text-gray-400&quot;>Repositories: {competitor.repositories}</p>
=======
                    <p className="text-sm text-gray-400">{_competitor.rating}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-white mb-1">Pricing: {_competitor.pricing}</p>
                    <p className="text-sm text-gray-400">Repositories: {_competitor.repositories}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                  <div className=&quot;space-y-2&quot;>
                    <div>
<<<<<<< HEAD
                      <p className=&quot;text-sm font-medium text-green-400 mb-1&quot;>Pros:</p>
                      <ul className=&quot;text-sm text-gray-300 space-y-1&quot;>
                        {competitor.pros.map((pro, proIndex) => (
                          <li key={proIndex} className=&quot;flex items-center&quot;>
                            <Check className=&quot;w-4 h-4 text-green-400 mr-2 flex-shrink-0&quot; />
                            {pro}
=======
                      <p className="text-sm font-medium text-green-400 mb-1">Pros:</p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {_competitor.pros.map(_(pro, _proIndex) => (
                          <li key={proIndex} className="flex items-center">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {_pro}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
<<<<<<< HEAD
                      <p className=&quot;text-sm font-medium text-red-400 mb-1&quot;>Cons:</p>
                      <ul className=&quot;text-sm text-gray-300 space-y-1&quot;>
                        {competitor.cons.map((con, conIndex) => (
                          <li key={conIndex} className=&quot;flex items-center&quot;>
                            <span className=&quot;w-4 h-4 text-red-400 mr-2 flex-shrink-0&quot;>×</span>
                            {con}
=======
                      <p className="text-sm font-medium text-red-400 mb-1">Cons:</p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {_competitor.cons.map(_(con, _conIndex) => (
                          <li key={conIndex} className="flex items-center">
                            <span className="w-4 h-4 text-red-400 mr-2 flex-shrink-0">×</span>
                            {_con}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Testimonials Section */}
        <section className=&quot;py-24 bg-gray-900&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;text-center mb-20&quot;>
              <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-8&quot;>
                Trusted by DevOps Teams Worldwide
              </h2>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {testimonials.map((testimonial, index) => (
                <Card key={index} className=&quot;p-6&quot;>
                  <div className=&quot;flex items-center mb-4&quot;>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
                    ))}
                  </div>
                  <p className=&quot;text-gray-300 mb-6 italic&quot;>&quot;{testimonial.content}&quot;</p>
                  <div>
                    <p className=&quot;font-semibold text-white&quot;>{testimonial.name}</p>
                    <p className=&quot;text-sm text-gray-400&quot;>{testimonial.role}</p>
                    <p className=&quot;text-sm text-blue-400&quot;>{testimonial.company}</p>
=======
        {_/* Testimonials Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Trusted by DevOps Teams Worldwide
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {_testimonials.map(_(testimonial, _index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    {_[...Array(testimonial.rating)].map(_(_, _i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{_testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{_testimonial.name}</p>
                    <p className="text-sm text-gray-400">{_testimonial.role}</p>
                    <p className="text-sm text-blue-400">{_testimonial.company}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
<<<<<<< HEAD
=======
        {_/* CTA Section */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
=======
        <section className=&quot;py-24 bg-gradient-to-r from-blue-600 to-cyan-600&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-8&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              Ready to Automate Your DevOps?
            </h2>
            <p className=&quot;text-xl text-blue-100 mb-12&quot;>
              Join thousands of teams who trust Zion for their DevOps automation needs.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button
                href=&quot;#signup&quot;
                variant=&quot;secondary&quot;
                size=&quot;lg&quot;
                className=&quot;bg-white text-blue-600 hover:bg-gray-100&quot;
              >
                Start Free Trial
              </Button>
              <Button
                href=&quot;/contact&quot;
                variant=&quot;outline&quot;
                size=&quot;lg&quot;
                className=&quot;border-white text-white hover:bg-white hover:text-blue-600&quot;
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
