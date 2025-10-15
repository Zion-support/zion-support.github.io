import React from 'react';
import SEOHead from '../components/SEOHead';
import { CheckCircle, ArrowRight, Code, Database, Shield, Zap, Users, BarChart } from 'lucide-react';

const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      title: 'Custom Web Applications',
      description: 'Tailored web applications built with modern technologies and best practices.',
      features: [
        'Responsive Design',
        'Cross-browser Compatibility',
        'Progressive Web App (PWA)',
        'Real-time Updates',
        'Mobile-first Approach',
        'Accessibility Compliance'
      ],
      icon: Code
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integration and data exchange.',
      features: [
        'RESTful API Design',
        'GraphQL Implementation',
        'API Documentation',
        'Rate Limiting',
        'Authentication & Authorization',
        'API Versioning'
      ],
      icon: Database
    },
    {
      title: 'Database Design',
      description: 'Scalable and efficient database architectures for optimal performance.',
      features: [
        'Database Architecture',
        'Data Modeling',
        'Query Optimization',
        'Data Migration',
        'Backup & Recovery',
        'Security Implementation'
      ],
      icon: Shield
    },
    {
      title: 'User Authentication',
      description: 'Secure authentication systems with multiple login options.',
      features: [
        'OAuth Integration',
        'Multi-factor Authentication',
        'Social Login',
        'JWT Tokens',
        'Session Management',
        'Password Security'
      ],
      icon: Users
    },
    {
      title: 'Payment Integration',
      description: 'Seamless payment processing with multiple payment gateways.',
      features: [
        'Stripe Integration',
        'PayPal Integration',
        'Subscription Management',
        'Invoice Generation',
        'Tax Calculation',
        'Refund Processing'
      ],
      icon: Zap
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting dashboards for business insights.',
      features: [
        'User Analytics',
        'Business Metrics',
        'Custom Dashboards',
        'Data Visualization',
        'Export Capabilities',
        'Real-time Monitoring'
      ],
      icon: BarChart
    }
  ];

  const technologies = [
    'React & Next.js',
    'Node.js & Express',
    'Python & Django',
    'PostgreSQL & MongoDB',
    'AWS & Azure',
    'Docker & Kubernetes',
    'Redis & Elasticsearch',
    'Stripe & PayPal'
  ];

  const developmentPhases = [
    {
      phase: 'Discovery',
      title: 'Requirements Analysis',
      description: 'We analyze your business needs and define the scope of your micro-SaaS application.'
    },
    {
      phase: 'Design',
      title: 'UI/UX Design',
      description: 'We create intuitive and user-friendly interfaces that enhance user experience.'
    },
    {
      phase: 'Development',
      title: 'Core Development',
      description: 'We build your application using modern technologies and best practices.'
    },
    {
      phase: 'Testing',
      title: 'Quality Assurance',
      description: 'We thoroughly test your application to ensure it meets the highest quality standards.'
    },
    {
      phase: 'Deployment',
      title: 'Launch & Deploy',
      description: 'We deploy your application to production and ensure smooth operation.'
    },
    {
      phase: 'Support',
      title: 'Maintenance',
      description: 'We provide ongoing support and maintenance to keep your application running smoothly.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Micro-SaaS Development - Zion Tech Group"
        description="Custom micro-SaaS applications tailored to your business needs. Full-stack development with modern technologies and scalable architecture."
      />
      <div className="min-h-screen bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Micro-SaaS Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build custom micro-SaaS applications that solve specific business problems with scalable, maintainable, and user-friendly solutions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technologies Section */}
          <div className="bg-slate-800 p-8 rounded-lg mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-700 p-4 rounded-lg text-center hover:bg-slate-600 transition-colors">
                  <span className="text-gray-300 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Development Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developmentPhases.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold">{phase.phase}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-gray-300 text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-slate-800 p-8 rounded-lg mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Micro-SaaS Development?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Cost-Effective Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Micro-SaaS applications are designed to be cost-effective while providing powerful functionality. 
                  You only pay for what you need, when you need it.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Rapid Development</h3>
                <p className="text-gray-300 mb-4">
                  Our agile development process ensures faster time-to-market, allowing you to start generating 
                  value from your application sooner.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Scalable Architecture</h3>
                <p className="text-gray-300 mb-4">
                  Built with scalability in mind, your micro-SaaS application can grow with your business 
                  without requiring major architectural changes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
                <p className="text-gray-300 mb-4">
                  We provide comprehensive support and maintenance services to ensure your application 
                  continues to perform optimally.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-cyan-600 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Micro-SaaS?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and create a custom solution that meets your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaaSSolutionsPage;
