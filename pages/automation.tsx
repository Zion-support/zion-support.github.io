import React from 'react';
import Head from 'next/head';


export default function AutomationPage() {_const _features = [
    {
      icon: <Workflow className="w-8 h-8 text-white" />, _title: 'Workflow Automation', _description: 'Create complex workflows with drag-and-drop interface'},
    {_icon: <Bot className="w-8 h-8 text-white" />, _title: 'AI-Powered Bots', _description: 'Intelligent automation agents that learn and adapt'},
    {_icon: <BarChart3 className="w-8 h-8 text-white" />, _title: 'Process Analytics', _description: 'Real-time insights into your automation performance'},
    {_icon: <Zap className="w-8 h-8 text-white" />, _title: 'Smart Triggers', _description: 'Automated responses based on events and conditions'}
  ];

  const _benefits = [
    'Reduce manual tasks by 80%',
    'Improve process accuracy',
    'Scale operations efficiently',
    '24/7 automated operations',
    'Real-time monitoring',
    'Custom integration support'
  ];

  return (
    <>
      <Head>
        <title>Automation Hub - Zion Tech Group</title>
        <meta name="description" content="AI-powered workflow automation platform that streamlines your business processes and increases efficiency." />
      </Head>

      <div className="min-h-screen bg-black">
        {_/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <RefreshCw className="w-4 h-4 mr-2" />
                Intelligent Automation
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Automation Hub
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              AI-powered workflow automation platform that streamlines your business processes and increases efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact" className="shadow-2xl shadow-blue-500/25">
                Start Automating
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact" className="border-white/20 hover:border-white/40">
                View Demo
              </a>
            </div>
          </div>
        </section>

        {_/* Features Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Automation Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Powerful tools to automate any business process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {_features.map(_(feature, _index) => (
                <div
                  key={index} className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    {_feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {_feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {_feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {_/* Benefits Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                  Transform Your Business with Automation
                </h2>
                <div className="space-y-6">
                  {_benefits.map(_(benefit, _index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                        <Check className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-gray-300 text-lg">{_benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">
                  <div className="text-center">
                    <RefreshCw className="w-24 h-24 mx-auto mb-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Smart Workflows
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Create intelligent automation workflows that adapt to your business needs
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                      <Zap className="w-4 h-4 mr-2" />
                      AI-powered optimization
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {_/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start automating your business processes today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </a>
              <a
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}