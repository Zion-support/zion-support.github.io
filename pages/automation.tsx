import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import {
  RefreshCw,
  Zap,
  Bot,
  Workflow,
  ArrowRight,
  Check,
  BarChart3,;
} from 'lucide-react';
export default function AutomationPage() {
  const features = [
    {
      icon: <Workflow className='w-8 h-8 text-white' />,
      title: 'Workflow Automation',
      description: 'Create complex workflows with drag-and-drop interface',
    },
    {
      icon: <Bot className='w-8 h-8 text-white' />,
      title: 'AI-Powered Bots',
      description: 'Intelligent automation agents that learn and adapt',
    },
    {
      icon: <BarChart3 className='w-8 h-8 text-white' />,
      title: 'Process Analytics',
      description: 'Real-time insights into your automation performance',
    },
    {
      icon: <Zap className='w-8 h-8 text-white' />,
      title: 'Smart Triggers',
      description: 'Automated responses based on events and conditions',
    },
  ];
=======
export default function AutomationPage() {;
  const automationCategories = [;
    {;
      title: 'Content Generation',
      description: 'AI-powered content creation and management',
      icon: '📝',
      count: '2,960+ pages',
      features: ['Blog posts', 'Technical docs', 'Marketing copy', 'SEO optimization'];
},
    {;
      title: 'Infrastructure Management',
      description: 'Autonomous cloud infrastructure operations',
      icon: '☁️',
      count: '99.9% uptime',
      features: ['Auto-scaling', 'Self-healing', 'Performance monitoring', 'Security automation'];
},
    {;
      title: 'CI/CD Automation',
      description: 'Intelligent build and deployment systems',
      icon: '🚀',
      count: 'Continuous',
      features: ['Automated testing', 'Smart deployments', 'Rollback systems', 'Quality gates'];
},
    {;
      title: 'Monitoring & Alerting',
      description: 'Proactive system health management',
      icon: '🔍',
      count: '24/7 monitoring',
      features: ['Real-time alerts', 'Predictive maintenance', 'Performance analytics', 'Incident response'];
},
    {;
      title: 'Security Automation',
      description: 'Intelligent threat detection and response',
      icon: '🛡️',
      count: 'Real-time protection',
      features: ['Threat detection', 'Vulnerability scanning', 'Access control', 'Compliance monitoring'];
},
    {;
      title: 'Data Processing',
      description: 'Automated data analysis and insights',
      icon: '📊',
      count: 'Real-time processing',
      features: ['ETL pipelines', 'Analytics automation', 'Report generation', 'Data quality checks'];
}
  ];
  const automationStats = [;
    { label: 'Active Automations', value: '227', color: 'text-cyan-400' },
    { label: 'Pages Generated', value: '2,960+', color: 'text-fuchsia-400' },
    { label: 'Uptime', value: '99.9%', color: 'text-green-400' },
    { label: 'Response Time', value: '<100ms', color: 'text-blue-400' }
  ];
  return (;
    <>;
      <Head>;
        <title>Automation | Zion Tech Group - Autonomous Systems & AI Automation</title>;
        <meta name="description" content="Explore Zion Tech Group's comprehensive automation capabilities, from AI-powered content generation to autonomous infrastructure management." />;
        <meta property="og:title" content="Automation - Zion Tech Group" />;
        <meta property="og:description" content="Autonomous systems and AI automation solutions." />;
        <meta name="twitter:card" content="summary_large_image" />;
      </Head>;
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">;
        <main className="container mx-auto px-6 py-12">;
          <section className="text-center mb-16">;
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">;
              Autonomous Automation;
            </h1>;
            <p className="text-xl text-white/80 max-w-3xl mx-auto">;
              Experience the future of automation with Zion Tech Group's intelligent, self-managing systems ;
              that operate 24/7 without human intervention.;
            </p>;
          </section>;
>>>>>>> origin/automation-fixes

  const benefits = [
    'Reduce manual tasks by 80%',
    'Improve process accuracy',
    'Scale operations efficiently',
    '24/7 automated operations',
    'Real-time monitoring',
    'Custom integration support',  ];

  return (
    <>
      <Head>
        <title>Automation Hub - Zion Tech Group</title>
        <meta
          name='description'
          content='AI-powered workflow automation platform that streamlines your business processes and increases efficiency.'
        />
      </Head>

      <div className='min-h-screen bg-black'>
        {/* Hero Section */}
        <section className='pt-32 pb-20 relative overflow-hidden'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]' />
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]' />
          </div>

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
            <div className='mb-8'>
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>
                <RefreshCw className='w-4 h-4 mr-2' />
                Intelligent Automation
              </div>
            </div>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>
              Automation Hub
            </h1>
            <p className='text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed'>
              AI-powered workflow automation platform that streamlines your
              business processes and increases efficiency.
            </p>

            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <a href='/contact' className='shadow-2xl shadow-blue-500/25'>
                Start Automating
                <ArrowRight className='w-5 h-5 ml-2' />
              </a>
              <a
                href='/contact'
                className='border-white/20 hover:border-white/40'
              >                View Demo
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
                Automation Features
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>                Powerful tools to automate any business process
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300'
                >
                  <div className='w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center'>
                    {feature.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-4'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-400 leading-relaxed'>                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-24 bg-gray-900'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
              <div>
                <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>
                  Transform Your Business with Automation
                </h2>
                <div className='space-y-6'>
                  {benefits.map((benefit, index) => (
                    <div key={index} className='flex items-start'>
                      <div className='w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1'>
                        <Check className='w-4 h-4 text-blue-500' />
                      </div>
                      <span className='text-gray-300 text-lg'>{benefit}</span>                    </div>
                  ))}
                </div>
              </div>

<<<<<<< HEAD
              <div className='relative'>
                <div className='bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20'>
                  <div className='text-center'>
                    <RefreshCw className='w-24 h-24 mx-auto mb-6 text-blue-400' />
                    <h3 className='text-2xl font-bold text-white mb-4'>
                      Smart Workflows
                    </h3>
                    <p className='text-gray-300 mb-6'>
                      Create intelligent automation workflows that adapt to your
                      business needs
                    </p>
                    <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm'>
                      <Zap className='w-4 h-4 mr-2' />                      AI-powered optimization
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
              Ready to Automate Your Workflows?
            </h2>
            <p className='text-xl text-blue-100 mb-8'>
              Start automating your business processes today
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/contact'
                className='bg-white text-blue-600 hover:bg-gray-100'
              >
                Start Free Trial
              </a>
              <a
                href='/contact'
                className='border-white text-white hover:bg-white hover:text-blue-600'
              >                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
=======
          {/* How It Works */}
          <section className="mb-20">;
            <h2 className="text-3xl font-bold mb-12 text-center text-white">How Autonomous Automation Works</h2>;
            <div className="max-w-6xl mx-auto">;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
                <div className="text-center">;
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                    <span className="text-3xl">🧠</span>;
                  </div>;
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Intelligent Analysis</h3>;
                  <p className="text-white/70">;
                    Our AI systems continuously analyze data, identify patterns, and make intelligent ;
                    decisions about when and how to automate processes.;
                  </p>;
                </div>;
                <div className="text-center">;
                  <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                    <span className="text-3xl">⚡</span>;
                  </div>;
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Autonomous Execution</h3>;
                  <p className="text-white/70">;
                    Once decisions are made, systems automatically execute actions, monitor results,
                    and adjust strategies in real-time.;
                  </p>;
                </div>;
                <div className="text-center">;
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                    <span className="text-3xl">🔄</span>;
                  </div>;
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Continuous Learning</h3>;
                  <p className="text-white/70">;
                    Systems learn from every action, continuously improving performance and adapting ;
                    to changing conditions and requirements.;
                  </p>;
                </div>;
              </div>;
            </div>;
          </section>;

          {/* Benefits */}
          <section className="mb-20">;
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Benefits of Autonomous Automation</h2>;
            <div className="max-w-6xl mx-auto">;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">;
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Operational Efficiency</h3>;
                  <ul className="space-y-3 text-white/70">;
                    <li>• 24/7 operation without human intervention</li>;
                    <li>• Instant response to changing conditions</li>;
                    <li>• Elimination of human error and delays</li>;
                    <li>• Scalable operations that grow with demand</li>;
                  </ul>;
                </div>;
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">;
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Cost Optimization</h3>;
                  <ul className="space-y-3 text-white/70">;
                    <li>• Reduced operational costs through efficiency</li>;
                    <li>• Optimal resource utilization</li>;
                    <li>• Predictive maintenance prevents costly failures</li>;
                    <li>• Automated scaling based on actual demand</li>;
                  </ul>;
                </div>;
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">;
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Quality & Consistency</h3>;
                  <ul className="space-y-3 text-white/70">;
                    <li>• Consistent quality across all operations</li>;
                    <li>• Continuous monitoring and improvement</li>;
                    <li>• Standardized processes and procedures</li>;
                    <li>• Reduced variability in outcomes</li>;
                  </ul>;
                </div>;
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">;
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Innovation & Growth</h3>;
                  <ul className="space-y-3 text-white/70">;
                    <li>• Freed human resources for creative work</li>;
                    <li>• Rapid experimentation and iteration</li>;
                    <li>• Data-driven insights and optimization</li>;
                    <li>• Competitive advantage through automation</li>;
                  </ul>;
                </div>;
              </div>;
            </div>;
          </section>;

          {/* Call to Action */}
          <section className="text-center">;
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20">;
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Automate Your Future?</h2>;
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">;
                Join the automation revolution and discover how Zion Tech Group's autonomous systems ;
                can transform your operations and drive unprecedented growth.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">;
                  Get Started Today;
                </a>;
                <a href="/blog" className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300">;
                  Learn More;
                </a>;
              </div>;
            </div>;
          </section>;
        </main>;
      </div>;
    </>;
  );
}
>>>>>>> origin/automation-fixes
