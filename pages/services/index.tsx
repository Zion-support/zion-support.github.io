import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';

const ServicesIndex: NextPage = () => {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      services: [
        { name: 'AI Development', href: '/services/ai-development', description: 'Custom AI solutions and machine learning models' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', description: 'AI-powered content generation tools' },
        { name: 'AI Email Responder', href: '/services/ai-email-responder', description: 'Automated email response system' },
        { name: 'AI SEO Optimization', href: '/services/ai-seo-optimization', description: 'AI-powered SEO analysis and optimization' }
      ],
      icon: '🤖',
      color: 'blue'
    },
    {
      title: 'Cloud & Infrastructure',
      services: [
        { name: 'Cloud Services', href: '/services/cloud-services', description: 'Scalable cloud solutions and infrastructure' },
        { name: 'Cloud Migration', href: '/services/cloud-migration', description: 'Seamless cloud migration services' },
        { name: 'System Administration', href: '/services/system-administration', description: 'Professional system management' },
        { name: 'Network Security', href: '/services/network-security', description: 'Comprehensive network security solutions' }
      ],
      icon: '☁️',
      color: 'green'
    },
    {
      title: 'Data & Analytics',
      services: [
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Transform data into actionable insights' },
        { name: 'Business Intelligence', href: '/services/business-intelligence', description: 'Advanced BI solutions and reporting' },
        { name: 'Data Pipeline Engineering', href: '/services/data-pipeline-engineering', description: 'Robust data processing pipelines' },
        { name: 'Database Design', href: '/services/database-design', description: 'Optimized database architecture' }
      ],
      icon: '📊',
      color: 'purple'
    },
    {
      title: 'Development Services',
      services: [
        { name: 'Web Development', href: '/services/web-development', description: 'Modern web applications and websites' },
        { name: 'Mobile App Development', href: '/services/mobile-development', description: 'Native and cross-platform mobile apps' },
        { name: 'API Development', href: '/services/api-development', description: 'RESTful APIs and microservices' },
        { name: 'UI/UX Design', href: '/services/ui-ux-design', description: 'User-centered design solutions' }
      ],
      icon: '💻',
      color: 'orange'
    },
    {
      title: 'Business Solutions',
      services: [
        { name: 'Affiliate Marketing Tools', href: '/services/affiliate-marketing', description: 'Comprehensive affiliate marketing platform' },
        { name: 'Customer Support Platform', href: '/services/customer-support', description: 'Multi-channel support solutions' },
        { name: 'E-commerce Return Management', href: '/services/ecommerce-returns', description: 'Automated return processing system' },
        { name: 'Quality Assurance', href: '/services/quality-assurance', description: 'Comprehensive testing and QA services' }
      ],
      icon: '🏢',
      color: 'teal'
    },
    {
      title: 'Specialized Services',
      services: [
        { name: 'Blockchain Solutions', href: '/services/blockchain-solutions', description: 'Secure blockchain implementations' },
        { name: 'IoT Platforms', href: '/services/iot-platforms', description: 'Connected device management' },
        { name: 'Security Auditing', href: '/services/security-auditing', description: 'Comprehensive security assessments' },
        { name: 'Technical Documentation', href: '/services/technical-documentation', description: 'Professional documentation services' }
      ],
      icon: '🔧',
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <Layout 
      title="Our Services - Zion Tech Group"
      description="Comprehensive technology services including AI development, cloud solutions, data analytics, web development, and specialized business solutions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Comprehensive technology solutions to transform your business. 
              From AI development to cloud architecture, we provide end-to-end services 
              to help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact"><a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Started
              </a></Link>
              <Link href="#services"><a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Explore Services
              </a></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services organized by category
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="grid gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <Link key={serviceIndex} href={service.href} className="group">
                      <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {service.name}
                        </h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600">We deliver high-quality solutions quickly without compromising on quality or performance.</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Quality Assurance</h3>
              <p className="text-gray-600">Every project undergoes rigorous testing and quality checks to ensure optimal performance.</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">24/7 Support</h3>
              <p className="text-gray-600">Our dedicated support team is available around the clock to assist you with any issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact"><a className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Contact Us Today
            </a></Link>
            <Link href="tel:+13024640950"><a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              Call +1 302 464 0950
            </a></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesIndex;