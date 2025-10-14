'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  ShoppingCartIcon,
  BanknotesIcon,
  ShareIcon,
  EnvelopeIcon,
  ArchiveBoxIcon,
  BuildingOfficeIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials.',
      icon: CpuChipIcon,
      price: '$29/month',
      features: [
        'AI-powered blog post generation',
        'Social media content creation',
        'SEO-optimized content',
        'Multi-language support',
        'Brand voice customization',
        'Content calendar management'
      ],
      category: 'Content & Marketing',
      color: 'from-purple-500 to-pink-500',
      href: '/ai-content-generator',
      popular: true
    },
    {
      id: 'smart-analytics-dashboard',
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence and analytics platform with AI-powered insights.',
      icon: ChartBarIcon,
      price: '$49/month',
      features: [
        'Real-time data visualization',
        'AI-powered insights and predictions',
        'Custom dashboard builder',
        'Multi-source data integration',
        'Automated reporting',
        'Mobile-responsive design'
      ],
      category: 'Analytics & BI',
      color: 'from-cyan-500 to-blue-500',
      href: '/smart-analytics-dashboard',
      popular: false
    },
    {
      id: 'automated-customer-support',
      title: 'Automated Customer Support',
      description: 'AI-powered chatbot and customer support automation platform.',
      icon: GlobeAltIcon,
      price: '$39/month',
      features: [
        'Intelligent chatbot builder',
        'Multi-channel support',
        'Ticket management system',
        'Knowledge base integration',
        'Sentiment analysis',
        'Performance analytics'
      ],
      category: 'Customer Service',
      color: 'from-green-500 to-emerald-500',
      href: '/automated-customer-support',
      popular: true
    },
    {
      id: 'project-management-suite',
      title: 'Project Management Suite',
      description: 'Comprehensive project management and team collaboration platform.',
      icon: ClipboardDocumentListIcon,
      price: '$19/month',
      features: [
        'Task and project tracking',
        'Team collaboration tools',
        'Time tracking and reporting',
        'File sharing and storage',
        'Gantt charts and timelines',
        'Integration with popular tools'
      ],
      category: 'Productivity',
      color: 'from-yellow-500 to-orange-500',
      href: '/project-management-suite',
      popular: false
    },
    {
      id: 'e-commerce-automation',
      title: 'E-commerce Automation',
      description: 'Complete e-commerce automation platform for online stores.',
      icon: ShoppingCartIcon,
      price: '$59/month',
      features: [
        'Inventory management',
        'Order processing automation',
        'Customer relationship management',
        'Payment gateway integration',
        'Shipping and logistics',
        'Analytics and reporting'
      ],
      category: 'E-commerce',
      color: 'from-pink-500 to-rose-500',
      href: '/e-commerce-automation',
      popular: true
    },
    {
      id: 'hr-management-system',
      title: 'HR Management System',
      description: 'Comprehensive human resources management and employee engagement platform.',
      icon: UserGroupIcon,
      price: '$35/month',
      features: [
        'Employee database management',
        'Payroll processing',
        'Performance tracking',
        'Leave management',
        'Recruitment tools',
        'Employee self-service portal'
      ],
      category: 'Human Resources',
      color: 'from-indigo-500 to-purple-500',
      href: '/hr-management-system',
      popular: false
    },
    {
      id: 'financial-tracking-tool',
      title: 'Financial Tracking Tool',
      description: 'Advanced financial management and accounting software for small businesses.',
      icon: BanknotesIcon,
      price: '$45/month',
      features: [
        'Expense tracking and categorization',
        'Invoice generation and management',
        'Tax preparation assistance',
        'Financial reporting',
        'Budget planning tools',
        'Multi-currency support'
      ],
      category: 'Finance',
      color: 'from-green-500 to-teal-500',
      href: '/financial-tracking-tool',
      popular: false
    },
    {
      id: 'social-media-scheduler',
      title: 'Social Media Scheduler',
      description: 'AI-powered social media management and scheduling platform.',
      icon: ShareIcon,
      price: '$25/month',
      features: [
        'Multi-platform posting',
        'Content calendar management',
        'AI-powered hashtag suggestions',
        'Analytics and insights',
        'Team collaboration',
        'Automated posting'
      ],
      category: 'Social Media',
      color: 'from-blue-500 to-cyan-500',
      href: '/social-media-scheduler',
      popular: true
    },
    {
      id: 'email-marketing-automation',
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with automation and personalization.',
      icon: EnvelopeIcon,
      price: '$39/month',
      features: [
        'Drag-and-drop email builder',
        'Automated email sequences',
        'Segmentation and targeting',
        'A/B testing tools',
        'Analytics and reporting',
        'Integration with CRM systems'
      ],
      category: 'Marketing',
      color: 'from-red-500 to-pink-500',
      href: '/email-marketing-automation',
      popular: false
    },
    {
      id: 'inventory-management',
      title: 'Inventory Management System',
      description: 'Smart inventory tracking and management solution for businesses.',
      icon: ArchiveBoxIcon,
      price: '$29/month',
      features: [
        'Real-time inventory tracking',
        'Automated reorder points',
        'Barcode scanning support',
        'Multi-location management',
        'Supplier management',
        'Cost tracking and analysis'
      ],
      category: 'Inventory',
      color: 'from-orange-500 to-red-500',
      href: '/inventory-management',
      popular: false
    },
    {
      id: 'crm-customer-relationship',
      title: 'CRM - Customer Relationship',
      description: 'Comprehensive customer relationship management platform.',
      icon: BuildingOfficeIcon,
      price: '$49/month',
      features: [
        'Contact and lead management',
        'Sales pipeline tracking',
        'Communication history',
        'Task and follow-up management',
        'Reporting and analytics',
        'Integration with email and phone'
      ],
      category: 'CRM',
      color: 'from-purple-500 to-indigo-500',
      href: '/crm-customer-relationship',
      popular: true
    },
    {
      id: 'learning-management-system',
      title: 'Learning Management System',
      description: 'Online learning platform for training and education.',
      icon: AcademicCapIcon,
      price: '$35/month',
      features: [
        'Course creation and management',
        'Student progress tracking',
        'Quiz and assessment tools',
        'Video and multimedia support',
        'Certification management',
        'Mobile learning app'
      ],
      category: 'Education',
      color: 'from-teal-500 to-green-500',
      href: '/learning-management-system',
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of micro SaaS solutions designed to solve specific business challenges. From AI-powered tools to productivity platforms." />
        <meta name="keywords" content="micro saas, saas solutions, business software, productivity tools, AI tools, automation software" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive collection of micro SaaS solutions designed to solve specific business challenges." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive collection of micro SaaS solutions designed to solve specific business challenges with powerful, focused tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SaaS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our extensive collection of specialized tools designed to enhance your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <div key={service.id} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-purple-400 font-semibold">{service.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white mb-2">{service.price}</div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-2">
                    <Link
                      to={service.href}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full border border-purple-400 text-purple-300 py-3 px-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-center"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We can create a custom micro SaaS solution tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Custom Solution
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>

      </div>"""
        <meta name=description content=Comprehensive micro SaaS solutions including AI-powered analytics, content management, customer support, and more. Transform your business with our innovative software solutions. />"""
        <meta name=keywords content=micro SaaS, software solutions, AI analytics, content management, customer support, business automation />""
      </Helmet>

      {/* Hero Section */}

              Micro SaaS Solutions
            </h1>"""
            <p className=text-xl text-gray-300 mb-8 leading-relaxed>
              Innovative micro SaaS products designed to solve specific business challenges
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">"""
              From AI-powered analytics to automated customer support, our micro SaaS solutions 
              provide powerful, cost-effective tools to accelerate your business growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

      {/* Micro SaaS Products Grid */}

            {microSaaSProducts.map((product, index) => {;
const Icon = product.icon;
              return ("
                <div key={product.title} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
        <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating`}></div>`"
                    <Icon className="w-8 h-8 text-white" />"
                  </div>
"""
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{product.title}</h3>"""
                  <p className="text-gray-300 mb-6 leading-relaxed">""
                    { product.description }

                  </p>

                  {/* Pricing */}

                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
))}
                    </ul>
                  </div>

                  {/* Benefits */}

                        </span>
))}
                    </div>
                  </div>

                  {/* Use Cases */}

                        </span>
))}
                    </div>
                  </div>
"""
                  <div className="flex gap-2">"
                    <Link
                      to={ product.href }"""
                      className="flex-1 inline-flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg hover:bg-purple-400/10"""

                    >"""
                      Learn More <ArrowRightIcon className="w-4 h-4" />"""
                    </Link>
                    <Link"""
                      to="/contact"""""
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold""""
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              )
});
          </div>
        </div>
      </section>

      {/* Why Choose Our Micro SaaS */}

              Why Choose Our Micro SaaS Solutions?
            </h2>"""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"""
              Built for modern businesses with cutting-edge technology and user-friendly interfaces
            </p>
          </div>"""
          <div className=grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto></div>"""
            <div className=text-center></div>"""
              <div className=w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6></div>"""
                <CpuChipIcon className="w-10 h-10 text-white" />"""
              </div>"""
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>""""
              <p className="text-gray-300">"""
                Advanced AI and machine learning capabilities built into every solution for maximum efficiency.
              </p>
            </div>"""
            <div className=text-center></div>"""
              <div className=w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6></div>"""
                <ClockIcon className="w-10 h-10 text-white" />"""
              </div>"""
              <h3 className="text-2xl font-bold text-white mb-4">Quick Setup</h3>""""
              <p className="text-gray-300">"""
                Get up and running in minutes with our streamlined onboarding and setup process.
              </p>
            </div>"""
            <div className=text-center></div>"""
              <div className=w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6></div>"""
                <ShieldCheckIcon className="w-10 h-10 text-white" />"""
              </div>"""
              <h3 className="text-2xl font-bold text-white mb-4">Secure & Reliable</h3>""""
              <p className="text-gray-300">"""
                Enterprise-grade security and 99.9% uptime guarantee for peace of mind.
              </p>
            </div>"""
            <div className=text-center></div>"""
              <div className=w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6></div>"""
                <CogIcon className="w-10 h-10 text-white" />"""
              </div>"""
              <h3 className="text-2xl font-bold text-white mb-4">Customizable</h3>""""
              <p className="text-gray-300">"""
                Tailor each solution to your specific business needs with flexible configuration options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

              Let's discuss which micro SaaS solution is perfect for your business needs'
            </p>"""
            <div className=flex flex-col sm:flex-row gap-4 justify-center mb-12></div>
              <Link"""
                to="/contact"""""
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2""""
              >
                Get Free Consultation"""
                <ArrowRightIcon className="w-5 h-5" />"""
              </Link>
              <Link"""
                to="/demo"""""
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2""""
              >
                Schedule Demo"""
                <ArrowRightIcon className="w-5 h-5" />"""
              </Link>
            </div>"""
            <div className=flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300></div>"""
              <div className=flex items-center gap-3></div>"""
                <PhoneIcon className="w-6 h-6 text-purple-400" />"""
                <span>+1-302-464-0950</span>
              </div>"""
              <div className=flex items-center gap-3></div>"""
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />"""
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default MicroSaaSSolutionsPage;
}
export default MicroSaaSSolutionsPage;
