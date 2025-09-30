import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI & IT Services - Zion Tech Group',
  description: 'Comprehensive AI, micro SaaS, and IT services including data analytics, workflow automation, cloud migration, and cybersecurity.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, cybersecurity, automation',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics and real-time dashboards.',
      price: '$199/month',
      features: [
        'Predictive Analytics & Forecasting',
        'Real-time Dashboard Creation',
        'Advanced Data Visualization',
        'Custom ML Model Development',
        'Automated Report Generation',
        'API Integration & Data Pipeline'
      ],
      popular: true,
      icon: '📊',
      benefits: [
        'Increase decision-making speed by 300%',
        'Reduce manual reporting by 80%',
        'Identify trends before competitors',
        'Custom insights for your industry'
      ]
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow design and smart triggers.',
      price: '$149/month',
      features: [
        'Process Automation Design',
        'Smart Trigger Configuration',
        'Performance Monitoring',
        'Integration with 100+ Apps',
        'Custom Workflow Builder',
        'Real-time Analytics'
      ],
      popular: false,
      icon: '⚙️',
      benefits: [
        'Reduce manual work by 75%',
        'Eliminate human errors',
        '24/7 automated processing',
        'Scale operations effortlessly'
      ]
    },
    {
      id: 'ai-virtual-assistant',
      title: 'AI Virtual Assistant',
      description: '24/7 intelligent customer support with natural language processing and multi-channel capabilities.',
      price: '$99/month',
      features: [
        '24/7 Customer Support',
        'Multi-channel Integration',
        'Natural Language Processing',
        'Personalized Responses',
        'Escalation Management',
        'Performance Analytics'
      ],
      popular: false,
      icon: '🤖',
      benefits: [
        'Improve customer satisfaction by 40%',
        'Reduce support costs by 60%',
        'Handle unlimited queries',
        'Learn and improve over time'
      ]
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Services',
      description: 'Seamless migration to cloud infrastructure with zero downtime and enhanced security.',
      price: '$2,999',
      features: [
        'Zero Downtime Migration',
        'Security Compliance Audit',
        'Cost Optimization Analysis',
        'Performance Monitoring',
        'Disaster Recovery Setup',
        '24/7 Support During Migration'
      ],
      popular: false,
      icon: '☁️',
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhanced security and compliance',
        'Access to latest technologies'
      ]
    },
    {
      id: 'devops-automation',
      title: 'DevOps Automation',
      description: 'Automate CI/CD pipelines and infrastructure management for faster, more reliable deployments.',
      price: '$399/month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Auto-scaling Configuration',
        'Monitoring & Alerting',
        'Security Scanning',
        'Performance Optimization'
      ],
      popular: false,
      icon: '🚀',
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment errors by 90%',
        'Automated scaling and recovery',
        'Continuous monitoring and optimization'
      ]
    },
    {
      id: 'cybersecurity-consulting',
      title: 'Cybersecurity Consulting',
      description: 'Advanced threat detection and zero-trust security architecture for enterprise protection.',
      price: '$599/month',
      features: [
        'Advanced Threat Detection',
        'Zero-trust Architecture',
        'Compliance Management',
        'Security Audits',
        'Incident Response Planning',
        'Security Training'
      ],
      popular: false,
      icon: '🛡️',
      benefits: [
        'Protect against 99.9% of threats',
        'Meet all compliance requirements',
        'Reduce security incidents by 95%',
        '24/7 security monitoring'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            AI & IT Services That Transform Your Business
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From AI-powered analytics to cloud migration, we provide comprehensive solutions 
            that drive growth, efficiency, and innovation for modern enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of AI and IT services, each designed to solve specific 
              business challenges and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss which services are right for your organization and create a 
            customized solution that delivers real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Schedule Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </section>
    </div>
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
      
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{service.icon}</span>
        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{service.description}</p>
      
      <div className="mb-4">
        <span className="text-2xl font-bold text-gray-900">{service.price}</span>
      </div>
      
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {service.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
        <ul className="space-y-2">
          {service.benefits.map((benefit: string, index: number) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-2">→</span>
              <span className="text-gray-600 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Link
        href={`/services/${service.id}`}
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