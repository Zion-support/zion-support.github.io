import React from 'react';

export default function EnterpriseAISolutions(): React.JSX.Element {
  const solutions = [
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Enterprise AI Platform',
      description: 'Comprehensive AI platform designed for large-scale enterprise deployments.',
      features: [
        'Scalable Infrastructure',
        'Advanced Analytics',
        'Custom AI Models',
        '24/7 Support',
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'AI Security & Compliance',
      description: 'Enterprise-grade security and compliance solutions for AI systems.',
      features: ['Data Protection', 'Regulatory Compliance', 'Threat Detection', 'Audit Trails'],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI Automation Suite',
      description: 'Complete automation solutions to streamline enterprise operations.',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Intelligent Routing',
        'Performance Monitoring',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Enterprise AI Solutions - Zion Website</title>
        <meta
          name="description"
          content="Comprehensive AI solutions designed for enterprise-scale deployments."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Enterprise AI Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed for enterprise-scale deployments and large
            organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
              </div>

              <p className="text-gray-600 mb-4">{solution.description}</p>

              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <Target className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
