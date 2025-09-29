import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesShowcase() {
  const featuredServices = [
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics',
      description: 'Transform data into actionable insights with predictive modeling and real-time dashboards.',
      price: '$199/month',
      icon: '📊',
      benefits: ['300% faster decisions', '80% less manual work', 'Predictive insights'],
      popular: true,
      metrics: {
        value: '500+',
        label: 'Projects Delivered'
      }
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Automate business processes with intelligent workflow design and smart triggers.',
      price: '$149/month',
      icon: '⚙️',
      benefits: ['75% less manual work', 'Zero human errors', '24/7 automation'],
      popular: false,
      metrics: {
        value: '99.9%',
        label: 'Reliability'
      }
    },
    {
      id: 'ai-virtual-assistant',
      title: 'AI Virtual Assistant',
      description: '24/7 intelligent customer support with natural language processing.',
      price: '$99/month',
      icon: '🤖',
      benefits: ['40% better satisfaction', '60% cost reduction', 'Unlimited queries'],
      popular: false,
      metrics: {
        value: '24/7',
        label: 'Support'
      }
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with zero downtime.',
      price: '$2,999',
      icon: '☁️',
      benefits: ['40% cost savings', 'Enhanced security', 'Latest technologies'],
      popular: false,
      metrics: {
        value: '100%',
        label: 'Zero Downtime'
      }
    }
  ];

  const successStats = [
    { value: '500+', label: 'Projects Delivered', description: 'Successfully completed' },
    { value: '$2M+', label: 'Cost Savings', description: 'Generated for clients' },
    { value: '99.9%', label: 'Uptime', description: 'Guaranteed reliability' },
    { value: '24/7', label: 'Support', description: 'Expert assistance' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transform Your Business with Our AI & IT Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered analytics to cloud migration, we provide comprehensive solutions 
            that drive measurable results and competitive advantage.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {successStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Featured Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of companies that have already transformed their operations 
            with our AI and IT solutions. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Call +1 302 464 0950
            </a>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: any }) {
  return (
    <div className={`border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
      service.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'
    }`}>
      {service.popular && (
        <div className="text-center mb-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-4">
        <div className="text-4xl mb-3">{service.icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
      </div>
      
      <div className="text-center mb-4">
        <span className="text-2xl font-bold text-gray-900">{service.price}</span>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Benefits:</h4>
        <ul className="space-y-1">
          {service.benefits.map((benefit: string, index: number) => (
            <li key={index} className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center mb-6">
        <div className="bg-gray-100 rounded-lg p-3">
          <div className="text-2xl font-bold text-blue-600">{service.metrics.value}</div>
          <div className="text-sm text-gray-600">{service.metrics.label}</div>
        </div>
      </div>
      
      <Link
        to={`/services/${service.id}`}
        className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
          service.popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Learn More
      </Link>
    </div>
  );
}