import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function ZionaiworkflowautomatorPage() {
  const [workflow, setWorkflow] = useState({
    name: '',
    trigger: '',
    action: '',
    condition: ''
  });
  const [workflows, setWorkflows] = useState([]);

  const triggers = [
    'Email received',
    'File uploaded',
    'Form submitted',
    'Scheduled time',
    'Data updated',
    'User action',
    'API call',
    'Webhook received'
  ];

  const actions = [
    'Send email notification',
    'Create task',
    'Update database',
    'Generate report',
    'Send Slack message',
    'Create calendar event',
    'Process file',
    'Call API endpoint'
  ];

  const conditions = [
    'If email contains keyword',
    'If file size > 1MB',
    'If form field equals value',
    'If time is business hours',
    'If user has permission',
    'If data matches pattern',
    'If API returns success',
    'If webhook is valid'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workflow.name && workflow.trigger && workflow.action) {
      const newWorkflow = {
        ...workflow,
        id: Date.now(),
        status: 'Active'
      };
      setWorkflows([...workflows, newWorkflow]);
      setWorkflow({
        name: '',
        trigger: '',
        action: '',
        condition: ''
      });
    }
  };

  const features = [
    'Visual workflow builder with drag-and-drop interface',
    'Pre-built templates for common business processes',
    'Conditional logic and branching workflows',
    'Integration with 500+ popular business tools',
    'Real-time workflow monitoring and analytics',
    'Error handling and retry mechanisms',
    'Team collaboration and approval workflows',
    'Custom webhook and API integrations'
  ];

  const templates = [
    {
      name: 'Customer Onboarding',
      description: 'Automate new customer setup and welcome process',
      steps: ['Send welcome email', 'Create user account', 'Assign permissions', 'Schedule follow-up']
    },
    {
      name: 'Invoice Processing',
      description: 'Automate invoice receipt, approval, and payment',
      steps: ['Extract invoice data', 'Validate amounts', 'Route for approval', 'Process payment']
    },
    {
      name: 'Lead Qualification',
      description: 'Automatically score and route leads based on criteria',
      steps: ['Analyze lead data', 'Calculate score', 'Assign to sales rep', 'Send notification']
    },
    {
      name: 'Content Publishing',
      description: 'Automate content review and publishing workflow',
      steps: ['Review content', 'Check for errors', 'Schedule publication', 'Notify team']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      features: ['5 workflows', '1,000 executions/month', 'Basic integrations', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      features: ['25 workflows', '10,000 executions/month', 'Advanced integrations', 'Priority support', 'Analytics dashboard'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      features: ['Unlimited workflows', 'Unlimited executions', 'Custom integrations', 'Dedicated support', 'White-label solution'],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Workflow Automator - Zion Tech Group</title>
        <meta name="description" content="Intelligent workflow automation with AI-powered process optimization. Automate business processes with visual workflow builder and smart integrations." />
        <meta name="keywords" content="workflow automation, business process automation, AI automation, workflow builder, process optimization" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Workflow Automator
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
                Automate business processes with intelligent workflow automation. Build, deploy, and optimize workflows with our visual workflow builder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Builder Demo */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Build Your First Workflow</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Create a simple workflow to see how our automation platform works.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Workflow Name
                    </label>
                    <input
                      type="text"
                      value={workflow.name}
                      onChange={(e) => setWorkflow({...workflow, name: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter workflow name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Trigger
                      </label>
                      <select
                        value={workflow.trigger}
                        onChange={(e) => setWorkflow({...workflow, trigger: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select trigger</option>
                        {triggers.map((trigger) => (
                          <option key={trigger} value={trigger}>{trigger}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Action
                      </label>
                      <select
                        value={workflow.action}
                        onChange={(e) => setWorkflow({...workflow, action: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select action</option>
                        {actions.map((action) => (
                          <option key={action} value={action}>{action}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Condition (Optional)
                    </label>
                    <select
                      value={workflow.condition}
                      onChange={(e) => setWorkflow({...workflow, condition: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">No condition</option>
                      {conditions.map((condition) => (
                        <option key={condition} value={condition}>{condition}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Create Workflow
                  </button>
                </form>

                {workflows.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Workflows</h3>
                    <div className="space-y-3">
                      {workflows.map((wf) => (
                        <div key={wf.id} className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-900">{wf.name}</h4>
                              <p className="text-sm text-gray-600">
                                When <strong>{wf.trigger}</strong> → Then <strong>{wf.action}</strong>
                                {wf.condition && ` (if ${wf.condition})`}
                              </p>
                            </div>
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                              {wf.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Automation Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered workflow automation platform makes complex processes simple and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Templates Section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pre-Built Workflow Templates</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get started quickly with our collection of ready-to-use workflow templates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {templates.map((template, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{template.name}</h3>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <div className="space-y-1">
                    {template.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your automation needs. All plans include our core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Business Processes?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start building intelligent workflows today. Contact us for a free consultation and demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Email kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
