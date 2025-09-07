import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';


function ServiceCard({ title, href, description, icon, category }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-1"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
          <span className="text-sm text-blue-600 font-medium">{category}</span>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{description}</p>
      <div className="mt-4 text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300">
        Learn more →
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  const services = [
    // AI Services
    {
      title: 'AI Analytics Platform',
      href: '/services/ai-analytics-platform',
      description: 'Advanced AI-powered analytics platform for data-driven business insights and decision making.',
      icon: '📊',
      category: 'AI Services'
    },
    {
      title: 'AI Chatbot Builder',
      href: '/services/ai-chatbot-builder',
      description: 'Create intelligent chatbots and virtual assistants for customer service and support.',
      icon: '🤖',
      category: 'AI Services'
    },
    {
      title: 'AI Code Reviewer',
      href: '/services/ai-code-reviewer',
      description: 'Automated code review and quality assurance using advanced AI algorithms.',
      icon: '🔍',
      category: 'AI Services'
    },
    {
      title: 'AI Content Generator',
      href: '/services/ai-content-generator',
      description: 'Generate high-quality content automatically using cutting-edge AI technology.',
      icon: '✍️',
      category: 'AI Services'
    },
    {
      title: 'AI Customer Support',
      href: '/services/ai-customer-support',
      description: 'Intelligent customer support solutions powered by AI and machine learning.',
      icon: '🎧',
      category: 'AI Services'
    },
    {
      title: 'AI Marketing Automation',
      href: '/services/ai-marketing-automation',
      description: 'Automate marketing campaigns and optimize customer engagement with AI.',
      icon: '📈',
      category: 'AI Services'
    },
    
    // Micro SaaS
    {
      title: 'Micro SaaS Solutions',
      href: '/services/micro-saas',
      description: 'Scalable micro SaaS applications built for modern businesses and startups.',
      icon: '🚀',
      category: 'Micro SaaS'
    },
    {
      title: 'Smart Invoice Generator',
      href: '/services/smart-invoice-generator',
      description: 'Automated invoice generation and management system for businesses.',
      icon: '🧾',
      category: 'Micro SaaS'
    },
    
    // IT Services
    {
      title: 'IT Services',
      href: '/services/it-services',
      description: 'Comprehensive IT infrastructure and support services for enterprises.',
      icon: '💻',
      category: 'IT Services'
    },
    {
      title: 'DevOps Automation',
      href: '/services/devops-automation',
      description: 'Automate your development and deployment processes with modern DevOps practices.',
      icon: '⚙️',
      category: 'IT Services'
    },
    
    // Blockchain
    {
      title: 'Blockchain Solutions',
      href: '/services/blockchain',
      description: 'Secure blockchain applications and smart contract development services.',
      icon: '⛓️',
      category: 'Blockchain'
    },
    
    // Cybersecurity
    {
      title: 'Cybersecurity Suite',
      href: '/services/cybersecurity',
      description: 'Comprehensive cybersecurity solutions to protect your digital assets.',
      icon: '🔒',
      category: 'Security'
    },
    
    // Data Analytics
    {
      title: 'Data Analytics',
      href: '/services/data-analytics',
      description: 'Transform raw data into actionable insights with advanced analytics tools.',
      icon: '📈',
      category: 'Analytics'
    }
  ];

  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions, micro SaaS development, and enterprise IT services
            designed to transform your business and drive growth.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Service Categories */}
          {categories.map((category) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <ServiceCard
                      key={index}
                      title={service.title}
                      href={service.href}
                      description={service.description}
                      icon={service.icon}
                      category={service.category}
                    />
                  ))}
              </div>
            </div>
          ))}

<<<<<<< HEAD
          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12 mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't see what you're looking for? We specialize in creating custom solutions
              tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get Custom Quote
              </Link>
              <Link
                href="/about"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
=======
        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution 
            that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Contact Us
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/about"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              Learn More About Us
            </Link>
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
          </div>
        </div>
      </div>
    </div>
  );
}