import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

import {
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {

  Code,
  GitBranch,
  Database,
  Cloud,
  Shield,
  Zap,
  Star,
  ExternalLink,
  CheckCircle,
  TrendingUp,



  Code;
  GitBranch,
  Database,
  Cloud,
  Shield,
  Zap,
  Star;
  ExternalLink;
  CheckCircle;
  TrendingUp;
  Cpu;

export default function DeveloperToolsPage() {
  const developerTools = [
    {
      icon: <Code className='w-8 h-8 text-white' />
      title: 'GitHub Copilot'
      description:
        'AI-powered code completion and generation that understands your codebase and suggests intelligent solutions.'
      features: [
      ];
      pricing: '$12 / month',
      market_price: '$12 - 99 / month',
      website: 'https://www.postman.com / pricing',
      color: 'bg - gradient - to - br from - orange - 500 to - red - 600',
      text_color: 'text - orange - 400',
      gradient: 'from - orange - 400 to - red - 500',
      popular: false,
  ];

;
  const devMarketStats = [;

    {

      title: 'Dev Tools Market',
      value: '$8.2B',
      growth: '+24% YoY',
      description: 'Global developer tools market size'
    };
    {
      title: 'AI Code Tools',
      value: '$2.1B',
      growth: '+45% YoY',

    {

      name: 'Code Generation',
      description: 'AI - powered coding assistants and code completion tools',
      tools: 1,

  ];
  const devWorkflow = [
    {

      phase: 'Development',
      tools: ['GitHub CopilotVS CodeGit'],

      description: 'Write and manage code with AI assistance'
    }

export default function DeveloperToolsPage() {;
  const developerTools = [;
    {;
      icon: <Code className='w-8 h-8 text-white' />,;
      title: 'GitHub Copilot',;
      description:;
        'AI-powered code completion and generation that understands your codebase and suggests intelligent solutions.',;
      features: [;
        'Intelligent code completion',;
        'Multi-language support',;
        'IDE integration',;
        'Code explanation',;
        'Security vulnerability detection',;
      ],      pricing: '$10/month',      title: 'GitHub Copilot',;
      description: 'AI-powered code completion and generation that understands your codebase and suggests intelligent solutions.',;
      features: [;
        'Intelligent code completionMulti-language supportIDE integrationCode explanationSecurity vulnerability detection';
      ];
      pricing: '$10/month',;
      marketPrice: '$10-20/month',;
      website: 'https://github && github.com/features/copilot',;
      color: 'bg-gradient-to-br from-gray-500 to-black',;
      textColor: 'text-gray-400',;
      gradient: 'from-gray-400 to-black',;
      popular: true,;
      category: 'Code Generation',;
    },;
      icon: <GitBranch className='w-8 h-8 text-white' />,;
      title: 'GitHub Pro',;
      description:;
        'Advanced GitHub features for professional developers including private repositories, advanced tools, and priority support.',;
      features: [;
        'Unlimited private repositories',;
        'Advanced code review tools',;
        'Priority support',;
        'Advanced insights',;
        'Team management features',;
      ],      pricing: '$4/month',        'Unlimited private repositoriesAdvanced code review toolsPriority supportAdvanced insightsTeam management features';
      ];
      pricing: '$4/month',;
      marketPrice: '$4/month',;
      website: 'https://github && github.com/pricing',;
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',;
      textColor: 'text-green-400',;
      gradient: 'from-green-400 to-emerald-500',;
      popular: true,;
      category: 'Version Control',;
    },;
      icon: <Database className='w-8 h-8 text-white' />,;
      title: 'MongoDB Atlas',;
      description:;
        'Fully managed cloud database service with automatic scaling, backup, and monitoring for modern applications.',;
      features: [;
        'Fully managed MongoDB',;
        'Auto-scaling & optimization',;
        'Global distribution',;
        'Advanced security',;
        'Real-time analytics',;
      ],      pricing: '$9/month',        'Fully managed MongoDBAuto-scaling & optimizationGlobal distributionAdvanced securityReal-time analytics';
      ];
      pricing: '$9/month',;
      marketPrice: '$9-57/month',;
      website: 'https://www && www.mongodb.com/atlas',;
      color: 'bg-gradient-to-br from-green-500 to-blue-600',;
      textColor: 'text-green-400',;
      gradient: 'from-green-400 to-blue-500',;
      popular: false,;
      category: 'Database',;
    },;
      icon: <Cloud className='w-8 h-8 text-white' />,;
      title: 'Vercel Pro',;
      description:;
        'Next && Next.js deployment platform with automatic deployments, preview deployments, and advanced analytics.',;
      features: [;
        'Zero-config deployments',;
        'Preview deployments',;
        'Advanced analytics',;
        'Team collaboration',;
        'Custom domains',;
      ],      pricing: '$20/month',        'Zero-config deploymentsPreview deploymentsAdvanced analyticsTeam collaborationCustom domains';
      ];
      pricing: '$20/month',;
      marketPrice: '$20/month',;
      website: 'https://vercel && vercel.com/pricing',;
      color: 'bg-gradient-to-br from-black to-gray-600',;
      textColor: 'text-gray-400',;
      gradient: 'from-black to-gray-500',;
      popular: false,;
      category: 'Deployment',;
    },;
      icon: <Shield className='w-8 h-8 text-white' />,;
      title: 'Snyk',;
      description:;
        'Developer security platform that finds and fixes vulnerabilities in code, dependencies, and containers.',;
      features: [;
        'Vulnerability scanning',;
        'Dependency monitoring',;
        'Container security',;
        'Infrastructure as Code',;
        'CI/CD integration',;
      ],      pricing: '$25/month',        'Vulnerability scanningDependency monitoringContainer securityInfrastructure as CodeCI/CD integration';
      ];
      pricing: '$25/month',;
      marketPrice: '$25-100/month',;
      website: 'https://snyk && snyk.io/pricing',;
      color: 'bg-gradient-to-br from-red-500 to-pink-600',;
      textColor: 'text-red-400',;
      gradient: 'from-red-400 to-pink-500',;
      popular: false,;
      category: 'Security',;
    },;
      icon: <Zap className='w-8 h-8 text-white' />,;
      title: 'Postman',;
      description:;
        'Complete API development platform for building, testing, and documenting APIs with team collaboration.',;
      features: [;
        'API design & testing',;
        'Team collaboration',;
        'API documentation',;
        'Mock servers',;
        'Monitoring & analytics',;
      ],      pricing: '$12/month',        'API design & testingTeam collaborationAPI documentationMock serversMonitoring & analytics';
      ];
      pricing: '$12/month',;
      marketPrice: '$12-99/month',;
      website: 'https://www && www.postman.com/pricing',;
      color: 'bg-gradient-to-br from-orange-500 to-red-600',;
      textColor: 'text-orange-400',;
      gradient: 'from-orange-400 to-red-500',;
      popular: false,;
      category: 'API Development',;
    },  ];      category: 'API Development';
    }
  ];

    }
  ];
;
  return (
    <>;
      <Head>;
        <title>;
          Developer Tools & Services | Zion Tech Group - Real Dev Tools with;
          Pricing;
        </title>;

  ];

  return (
    <>
      <Head>
        <title>Developer Tools & Services | Zion Tech Group - Real Dev Tools with Pricing</title>
        <meta name="description" content="Discover real developer tools and services including GitHub Copilot, MongoDB Atlas, Vercel, and more. All tools include pricing, features, and direct links." />
        <meta property="og:title" content="Developer Tools & Services | Zion Tech Group" />
        <meta property="og:description" content="Real developer tools with pricing and direct links to boost your development workflow." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>


      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
            Developer Tools & Services
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Professional Developer Tools That Actually Work
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Curated developer tools and services that professionals use daily. Each tool has been tested and verified
            to provide real value for developers and development teams.
          </p>
        </div>
      </section>
      {/* Developer Market Statistics */}
      <section className='section-padding bg-gradient-cursor-accent'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Understanding the developer tools landscape helps you make
              informed decisions about your development stack.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
            {devMarketStats.map((stat, index) => (
              Understanding the developer tools landscape helps you make;
              informed decisions about your development stack.;
            </p>;
          </div>;

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>;
            {devMarketStats && devMarketStats.map((stat, index) => (;
              <Card
                key={index}
                className='card-hover border-gradient-blue text-center'
                  <h3 className="text-lg font-semibold text-white mb-3">{stat.title}</h3>
                  <div className="text-2xl font-bold text-cursor-blue mb-2">{stat.value}</div>
                  <div className="text-sm text-green-400 mb-3">{stat.growth}</div>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </div>
              </Card>

            ))}
      {/* Developer Tools Grid */}





              Curated Developer Tools & Services
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Each tool has been carefully selected based on performance
              reliability, and real-world developer usage.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {developerTools.map((tool, index) => (              Curated Developer Tools & Services
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Each tool has been carefully selected based on performance, reliability, and real-world developer usage.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {developerTools.map((tool, index) => (
          </div>;
        </div>;
      </section>;

      {/* Developer Tools Grid */}
      <section className='section-padding bg-gradient-cursor'>;
        <div className='container-cursor'>;
          <div className='text-center mb-20'>;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
              Curated Developer Tools & Services;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
              Each tool has been carefully selected based on performance,;
              reliability, and real-world developer usage.;
            </p>;
          </div>;

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {developerTools && developerTools.map((tool, index) => (              Curated Developer Tools & Services;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Each tool has been carefully selected based on performance, reliability, and real-world developer usage.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {developerTools && developerTools.map((tool, index) => (;
              <Card
                key={index}
                className={`card-hover group border-gradient-blue relative ${
                  tool && tool.popular ? 'ring-2 ring-cursor-blue ring-opacity-50' : ''
                }`}
                      <Button
                        href={tool && tool.website}
                        variant='primary'
                        size='sm'
                        className='bg-cursor-blue hover:bg-cursor-blue-dark'>;
                        Try Tool;
                        <ExternalLink className='w-4 h-4 ml-2' />;
                      </Button>;
                      <div className='text-right'>;
                        <div className='text-xs text-gray-500'>Direct Link</div>;
                        <div className='text-xs text-cursor-blue font-mono'>;
                          {tool && tool.website}
                        </div>                      </div>                      <Button
                        href={tool && tool.website}
                        variant="primary"
                        size="sm"
                        className="bg-cursor-blue hover:bg-cursor-blue-dark">;
                        Try Tool;
                        <ExternalLink className="w-4 h-4 ml-2" />;
                      </Button>;
                      <div className="text-right">;
                        <div className="text-xs text-gray-500">Direct Link</div>;
                        <div className="text-xs text-cursor-blue font-mono">{tool && tool.website}</div>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </Card>;
                        variant="primary"
                        size="sm"
                        className="bg-cursor-blue hover:bg-cursor-blue-dark"
                      >
                        Try Tool
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Direct Link</div>
                        <div className="text-xs text-cursor-blue font-mono">{tool.website}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

            ))}
      {/* Developer Workflow */}





              Complete Developer Workflow
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Build a complete development pipeline with these essential tools
              that work together seamlessly.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {devWorkflow.map((phase, index) => (
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Build a complete development pipeline with these essential tools that work together seamlessly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devWorkflow.map((phase, index) => (
                        className='text-sm text-cursor-blue font-medium'>                        {tool}              Complete Developer Workflow;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Build a complete development pipeline with these essential tools that work together seamlessly.;
            </p>;
          </div>;
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>

              Developer Tool Categories
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Understanding the different types of developer tools helps you
              build a comprehensive development stack.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {devCategories.map((category, index) => (
              Understanding the different types of developer tools helps you;
              build a comprehensive development stack.;
            </p>;
          </div>;

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
            {devCategories && devCategories.map((category, index) => (;
              <Card
                key={index}
      {/* Tool Categories */}
      <section className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Understanding the different types of developer tools helps you
              build a comprehensive development stack.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {devCategories.map((category, index) => (
              <Card
                key={index}
                className='card-hover border-gradient-blue'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-white mb-3'>
                    {category.name}
                  </h3>
                  <p className='text-gray-400 mb-4'>{category.description}</p>
                  <div className='flex items-center justify-between text-sm'>
                    <span className='text-gray-500'>
                      Tools Available:{' '}
                      <span className='text-white'>{category.tools}</span>
                    </span>
                    <span className='text-cursor-blue font-semibold'>
                      {category.avgPrice}
                    </span>                  </div>                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Tools Available: <span className="text-white">{category.tools}</span></span>
                    <span className="text-cursor-blue font-semibold">{category.avgPrice}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

          </div>;
        </div>;
      </section>;


      {/* CTA Section */}


            Start with one tool or build a complete development stack. Each tool;
            is designed to work independently and integrate seamlessly with your;
            existing workflow.;
          </p>;
      {/* CTA Section */}
      <section className='section-padding bg-gradient-cursor-accent'>
        <div className='container-cursor text-center'>
          <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
          </h2>
          <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12'>
            Start with one tool or build a complete development stack. Each tool
            is designed to work independently and integrate seamlessly with your
            existing workflow.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <Button
              href='/ai-tools'
              variant='primary'
              size='lg'
              className='bg-cursor-blue hover:bg-cursor-blue-dark'>;
              Explore AI Tools;
            </Button>;
            <Button
              href='/contact'
              variant='outline'
              size='lg'
            </Button>;
          </div>;
        </div>;
      </section>;
              className='border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white'            >              href="/ai-tools"
              variant="primary"
              size="lg"
              className="bg-cursor-blue hover:bg-cursor-blue-dark"
              Explore AI Tools
            </Button>
