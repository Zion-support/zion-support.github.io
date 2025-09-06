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
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {
  GitBranch,
  Zap,
  Shield,
  BarChart3,
  Check,
  Star,
  GitPullRequest,
  Cpu,
} from 'lucide-react';
export default /**
 * DevOpsAutomationPage - Function description
 */
function DevOpsAutomationPage() {
  const features = [;
    {
      icon: <GitBranch className='w - 6 h - 6' />, import { GitBranch, Zap, Shield, BarChart3, Check, Star, GitPullRequest, Cpu } from 'lucide-react';
export default /**
 * DevOpsAutomationPage - Function description
 */
function DevOpsAutomationPage() {
  const features = [;
    {
      icon: <GitBranch className='w - 6 h - 6' />,      title: 'CI / CD Pipelines',
      description: 'Automated build, test, and deployment workflows';
      color: 'bg - gradient - to - br from - blue - 500 to - cyan - 600';
    }
    {
      icon: <Zap className="w - 6 h - 6" />,
      title: 'Infrastructure as Code',
      description: 'Terraform, CloudFormation, and Kubernetes automation';
      color: 'bg - gradient - to - br from - green - 500 to - emerald - 600';
    }
    {
      icon: <Shield className="w - 6 h - 6" />,
      title: 'Security Automation',
      description: 'Automated security scanning and compliance checks',
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
  ];
;
  const pricing_plans = [;
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [;
        'Up to 5 repositories',
        'Basic CI / CD pipelines',
        'GitHub integration',
        'Email notifications',
        'Basic security scanning',
        'Community support',
      ],
      popular: false,
      cta: 'Start Free Trial',
      color: 'border - gray - 600 hover:border - blue - 500',
    },    {        'Up to 5 repositories_basic CI / CD pipelinesGitHub integration_email notifications_basic security scanning_community support';
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
      name: 'Professional',
      price: '$129',
      period: '/month',
      description: 'Ideal for growing development teams',
      features: [;
        'Up to 25 repositories',
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
      ];
      popular: false,
      cta: 'Contact Sales',
      color: 'border - gray - 600 hover:border - blue - 500';
    }
  const market_comparison = [;
    {
      competitor: 'GitHub Actions',
      pricing: 'Free + $0.008 / min',
      repositories: 'Unlimited',
      rating: '4.6 / 5',
      pros: ['GitHub native', 'Good free tier'],
      cons: ['Expensive for teams', 'Limited features'],
    },    {      pros: ['GitHub native_good free tier'],
      cons: ['Expensive for teams_limited features'];
    }
    {
      competitor: 'GitLab CI / CD',
      pricing: '$19 / user / month',
      repositories: 'Unlimited',
      rating: '4.4 / 5',
      pros: ['Integrated platform', 'Good CI / CD'],
      cons: ['User - based pricing', 'Limited integrations'],
    },    {      pros: ['Integrated platform_good CI / CD'],
      cons: ['User - based pricing_limited integrations'];
    }
    {
      competitor: 'Jenkins',
      pricing: 'Free',
      repositories: 'Unlimited',
      rating: '4.2 / 5',
      pros: ['Completely free', 'Highly customizable'],
      cons: ['Requires maintenance', 'No managed service'],
    },  ];      pros: ['Completely free_highly customizable'],
      cons: ['Requires maintenance_no managed service'];
    }
  ];
;
  const testimonials = [;
    {
      name: 'Michael Chen',
      role: 'DevOps Lead',
      company: 'TechStart Inc.',
      content:;
        'Zion DevOps reduced our deployment time from 2 hours to 15 minutes. The automation is incredible and the pricing is fair.',
      rating: 5,
    },    {
      name: 'Sarah Johnson',
      role: 'Engineering Manager',
      company: 'CloudWorks',
      content:;
        'We switched from GitHub Actions to Zion and saved $200 / month while getting better automation features.',
      rating: 5,
    },    {
      name: 'Robert Davis',
      role: 'Site Reliability Engineer',
      company: 'ScaleTech',
      content:;
        'The infrastructure automation features are game - changing. We can now deploy to multiple clouds with a single click.',
      rating: 5,
    },  ];      content: 'Zion DevOps reduced our deployment time from 2 hours to 15 minutes. The automation is incredible and the pricing is fair.',
      rating: 5;
    }
    {
      name: 'Sarah Johnson',
      role: 'Engineering Manager',
      company: 'CloudWorks',
      content:;
        'We switched from GitHub Actions to Zion and saved $200 / month while getting better automation features.',
      rating: 5,
    },      content: 'We switched from GitHub Actions to Zion and saved $200 / month while getting better automation features.',
      rating: 5;
    }
    {
      name: 'Robert Davis',
      role: 'Site Reliability Engineer',
      company: 'ScaleTech',
      content:;
        'The infrastructure automation features are game - changing. We can now deploy to multiple clouds with a single click.',
      rating: 5,
    },      content: 'The infrastructure automation features are game - changing. We can now deploy to multiple clouds with a single click.',
      rating: 5;
    }
  ];
;
  const automation_examples = [;
    {
      title: 'Automated Testing',
      description: 'Run comprehensive test suites on every commit',
      icon: '🧪',
                  key={index}
                  className={`relative p - 8 ${plan.color} transition - all duration - 300 hover:scale - 105 ${
                    plan.popular ? 'ring - 2 ring - blue - 500' : '';
                  }`}
                >;
                  {plan.popular && (
                      href={plan.name === 'Enterprise' ? '/contact' : '#signup'}
                      variant={plan.popular ? 'primary' : 'outline'}
                      size="lg"
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                    <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                      <span className='bg - blue - 500 text - white px - 4 py - 2 rounded - full text - sm font - medium'>                        Most Popular;
                      </span>;
                    </div>)}                    <div className="absolute -top - 4 left - 1/2 transform -translate - x-1 / 2">;
                      <span className="bg - blue - 500 text - white px - 4 py - 2 rounded - full text - sm font - medium">;
                        Most Popular;
                      </span>;
                    </div>)}
                  <div className='text - center'>;
                    <h3 className='text - 2xl font - bold text - white mb - 2'>;
                      {plan.name}
                    </h3>;
                    <div className='mb - 6'>;
                      <span className='text - 4xl font - bold text - white'>;
                        {plan.price}
                      </span>;
                      <span className='text - gray - 400'>{plan.period}</span>;
                    </div>;
                    <p className='text - gray - 300 mb - 8'>{plan.description}</p>;
                    <ul className='text - left space - y-3 mb - 8'>;
                      {plan.features.map ((feature, feature_index) => (
                        <li;
                          key={feature_index}
                          className='flex items - center text - gray - 300';
                        >;
                          <Check className='w - 5 h - 5 text - blue - 400 mr - 3 flex - shrink - 0' />                          {feature}                    </div>;
                    <p className="text - gray - 300 mb - 8">{plan.description}</p>;
                    <ul className="text - left space - y-3 mb - 8">;
                      {plan.features.map ((feature, feature_index) => (
                        <li key={feature_index} className="flex items - center text - gray - 300">;
                          <Check className="w - 5 h - 5 text - blue - 400 mr - 3 flex - shrink - 0" />;
                          {feature}
                        </li>))}
                    </ul>;
                    <Button;
                      href={plan.name === 'Enterprise' ? '/contact' : '#signup'}
                      variant={plan.popular ? 'primary' : 'outline'}
                      size='lg';
                      className={`w - full ${
                        plan.popular;
                          ? 'bg - blue - 600 hover:bg - blue - 700 text - white'                          : 'border - blue - 500 text - blue - 400 hover:bg - blue - 500 hover:text - white'                      size="lg";
                      className={`w - full ${
                        plan.popular;
                          ? 'bg - blue - 600 hover:bg - blue - 700 text - white';
                      }`}
                    >;
                      {plan.cta}
                        plan && plan.popular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      }`}>;
                      {plan && plan.cta}
                    </Button>;
                  </div>;
                </Card>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Market Comparison Section */}
        <section className='py-24 bg-gray-800'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='text-center mb-20'>;
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>;
              </h2>;
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
                See why Zion DevOps is the smart choice for automation.;
              </p>;
            </div>;
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>;
              {marketComparison && marketComparison.map((competitor, index) => (;
                <Card key={index} className='p-6'>;
                  <div className='text-center mb-6'>;
                    <h3 className='text-xl font-bold text-white mb-2'>;
                      {competitor && competitor.competitor}
                    </h3>;
                    <div className='flex items-center justify-center mb-2'>                      {[...Array(5)].map((_, i) => (                <Card key={index} className="p-6">;
                  <div className="text-center mb-6">;
                    <h3 className="text-xl font-bold text-white mb-2">{competitor && competitor.competitor}</h3>;
                    <div className="flex items-center justify-center mb-2">;
        {/* Market Comparison Section */}
        <section className="py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                How We Compare to the Competition
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See why Zion DevOps is the smart choice for automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {marketComparison.map((competitor, index) => (
                <Card key={index} className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{competitor.competitor}</h3>
                    <div className="flex items-center justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math && Math.floor(parseFloat(competitor && competitor.rating))
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-400'
                          }`}
                        />;
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">{competitor.rating}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-white mb-1">Pricing: {competitor.pricing}</p>
                    <p className="text-sm text-gray-400">Repositories: {competitor.repositories}</p>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-medium text-green-400 mb-1">Pros:</p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {competitor.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-center">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {pro}
                          </li>;
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-red-400 mb-1">Cons:</p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {competitor.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-center">
                            <span className="w-4 h-4 text-red-400 mr-2 flex-shrink-0">×</span>
                            {con}
                          </li>
                        ))}
                      </ul>;
                    </div>;
                  </div>;
                </Card>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Testimonials Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Trusted by DevOps Teams Worldwide
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-blue-400">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Join thousands of teams who trust Zion for their DevOps automation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#signup"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Free Trial
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contact Sales
                    </Button>;
                  </div>;
                </Card>))}
            </div>;
          </div>;
        </section>;
        {/* Market Comparison Section */}
        <section className='py - 24 bg - gray - 800'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 20'>;
              <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;
              </h2>;
              <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
                See why Zion DevOps is the smart choice for automation.;
              </p>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>;
              {market_comparison.map ((competitor, index) => (
                <Card key={index} className='p - 6'>;
                  <div className='text - center mb - 6'>;
                    <h3 className='text - xl font - bold text - white mb - 2'>;
                      {competitor.competitor}
                    </h3>;
                    <div className='flex items - center justify - center mb - 2'>                      {[...Array (5)].map ((_, i) => (                <Card key={index} className="p - 6">;
                  <div className="text - center mb - 6">;
                    <h3 className="text - xl font - bold text - white mb - 2">{competitor.competitor}</h3>;
                    <div className="flex items - center justify - center mb - 2">;
                        <Star;
                          key={i}
                          className={`w - 5 h - 5 ${
                            i < Math.floor (parse_float (competitor.rating));
                              ? 'text - yellow - 400 fill - current';
                              : 'text - gray - 400';
                          }`}
                        />))}
                    </div>;
                    <p className='text - sm text - gray - 400'>{competitor.rating}</p>;
                  </div>;
                  <div className='mb - 4'>;
                    <p className='text - lg font - semibold text - white mb - 1'>;
                      Pricing: {competitor.pricing}
                    </p>;
                    <p className='text - sm text - gray - 400'>;
                      Repositories: {competitor.repositories}
                    </p>;
                  </div>;
                  <div className='space - y-2'>;
                    <div>;
                      <p className='text - sm font - medium text - green - 400 mb - 1'>;
                        Pros:;
                      </p>;
                      <ul className='text - sm text - gray - 300 space - y-1'>;
                        {competitor.pros.map ((pro, pro_index) => (
                          <li key={pro_index} className='flex items - center'>;
                            <Check className='w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0' />                            {pro}                  </div>;
                  <div className="mb - 4">;
                    <p className="text - lg font - semibold text - white mb - 1">Pricing: {competitor.pricing}</p>;
                    <p className="text - sm text - gray - 400">Repositories: {competitor.repositories}</p>;
                  </div>;
                  <div className="space - y-2">;
                    <div>;
                      <p className="text - sm font - medium text - green - 400 mb - 1">Pros:</p>;
                      <ul className="text - sm text - gray - 300 space - y-1">;
                        {competitor.pros.map ((pro, pro_index) => (
                          <li key={pro_index} className="flex items - center">;
                            <Check className="w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0" />;
                            {pro}
                          </li>))}
                      </ul>;
                    </div>;
                    <div>;
                      <p className='text - sm font - medium text - red - 400 mb - 1'>;
                        Cons:;
                      </p>;
                      <ul className='text - sm text - gray - 300 space - y-1'>;
                        {competitor.cons.map ((con, con_index) => (
                          <li key={con_index} className='flex items - center'>;
                            <span className='w - 4 h - 4 text - red - 400 mr - 2 flex - shrink - 0'>;
                              ×;
                            </span>                            {con}                      <p className="text - sm font - medium text - red - 400 mb - 1">Cons:</p>;
                      <ul className="text - sm text - gray - 300 space - y-1">;
                        {competitor.cons.map ((con, con_index) => (
                          <li key={con_index} className="flex items - center">;
                            <span className="w - 4 h - 4 text - red - 400 mr - 2 flex - shrink - 0">×</span>;
                          </li>))}
                      </ul>;
                    </div>;
                  </div>;
                </Card>))}
            </div>;
          </div>;
        </section>;
        {/* Testimonials Section */}
        <section className='py - 24 bg - gray - 900'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 20'>;
              <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;
                Trusted by DevOps Teams Worldwide;
              </h2>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>;
              {testimonials.map ((testimonial, index) => (
                <Card key={index} className='p - 6'>;
                  <div className='flex items - center mb - 4'>;
                    {[...Array (testimonial.rating)].map ((_, i) => (
                      <Star;
                        key={i}
                        className='w - 5 h - 5 text - yellow - 400 fill - current';
                      />))}
                  </div>;
                  <p className='text - gray - 300 mb - 6 italic'>;
                    "{testimonial.content}";
                  </p>;
                  <div>;
                    <p className='font - semibold text - white'>;
                      {testimonial.name}
                    </p>;
                    <p className='text - sm text - gray - 400'>{testimonial.role}</p>;
                    <p className='text - sm text - blue - 400'>;
                      {testimonial.company}
                    </p>                  </div>                Trusted by DevOps Teams Worldwide;
              </h2>;
            </div>;
            <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
              {testimonials.map ((testimonial, index) => (
                <Card key={index} className="p - 6">;
                  <div className="flex items - center mb - 4">;
                    {[...Array (testimonial.rating)].map ((_, i) => (
                      <Star key={i} className="w - 5 h - 5 text - yellow - 400 fill - current" />))}
                  </div>;
                  <p className="text - gray - 300 mb - 6 italic">"{testimonial.content}"</p>;
                  <div>;
                    <p className="font - semibold text - white">{testimonial.name}</p>;
                    <p className="text - sm text - gray - 400">{testimonial.role}</p>;
                    <p className="text - sm text - blue - 400">{testimonial.company}</p>;
                  </div>;
                </Card>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className='py - 24 bg - gradient - to - r from - blue - 600 to - cyan - 600'>;
          <div className='max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;
            </h2>;
            <p className='text - xl text - blue - 100 mb - 12'>;
              Join thousands of teams who trust Zion for their DevOps automation;
              needs.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Button;
                href='#signup';
                variant='secondary';
                size='lg';
                className='bg - white text - blue - 600 hover:bg - gray - 100'              >;
                Start Free Trial;
              </Button>;
              <Button;
                href='/contact';
                variant='outline';
                size='lg';
                className='border - white text - white hover:bg - white hover:text - blue - 600'              >                href="#signup";
                variant="secondary";
                size="lg";
                className="bg - white text - blue - 600 hover:bg - gray - 100";
                Start Free Trial;
              </Button>;
              <Button;
                href='/contact';
                variant='outline';
                size='lg';
                className='border - white text - white hover:bg - white hover:text - blue - 600'                href="/contact";
                variant="outline";
                size="lg";
                className="border - white text - white hover:bg - white hover:text - blue - 600";
                Contact Sales;
              </Button>;
            </div>;
          </div>;
        </section>;
      </div>;
}
    </>);
}