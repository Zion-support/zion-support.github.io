import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { getServicesByCategory } from '../../data/services';
import { ArrowRight, CheckCircle, Star, Zap, Users, Shield } from 'lucide-react';
import Link from 'next/link';

const MicroSaasPage: NextPage = () => {
  const microSaasServices = getServicesByCategory('micro-saas');

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes, not months. Our micro SaaS solutions are designed for quick deployment.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Scalable Solutions',
      description: 'Start small and grow as your business expands. Our solutions scale with your needs.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, ensuring your data is always protected.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Proven Results',
      description: 'Track record of successful implementations with measurable ROI for our clients.'
    }
  ];

  return (
    <MainLayout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Powerful, affordable micro SaaS applications designed to solve specific business challenges. Streamline your operations with our innovative solutions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Powerful, affordable SaaS applications designed to solve specific business challenges 
              and streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <Link href="#pricing">
                <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                  View Pricing
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver results-driven solutions with proven methodologies and cutting-edge technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our suite of powerful micro SaaS applications designed to transform your business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {microSaasServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl lg:text-5xl">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl lg:text-3xl font-bold text-blue-600">${service.pricing.starter}</div>
                    <div className="text-xs lg:text-sm text-gray-500">Starting price per month</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm lg:text-base">Key Features:</h4>
                  <ul className="space-y-1 lg:space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-600 text-sm lg:text-base">
                        <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-blue-600 text-sm font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm lg:text-base">Benefits:</h4>
                  <ul className="space-y-1 lg:space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-start text-gray-600 text-sm lg:text-base">
                        <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm lg:text-base">Use Cases:</h4>
                  <div className="flex flex-wrap gap-1 lg:gap-2">
                    {service.useCases.slice(0, 3).map((useCase, index) => (
                      <span key={index} className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs lg:text-sm">
                        {useCase}
                      </span>
                    ))}
                    {service.useCases.length > 3 && (
                      <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs lg:text-sm">
                        +{service.useCases.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
                  <Link href={service.link}>
                    <span className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer inline-flex items-center text-sm lg:text-base">
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </Link>
                  <Link href="/contact">
                    <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 lg:px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer text-sm lg:text-base text-center block sm:inline-block">
                      Get Started
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs. All plans include our core features and support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">$29<span className="text-base lg:text-lg text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Basic features
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Email support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Standard integrations
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Basic analytics
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Up to 5 users
                </li>
              </ul>
              <Link href="/contact">
                <span className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors cursor-pointer inline-block text-center">
                  Get Started
                </span>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 border-2 border-blue-600 relative hover:shadow-xl transition-shadow">
              <div className="absolute -top-3 lg:-top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-3 lg:px-4 py-1 rounded-full text-xs lg:text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">$79<span className="text-base lg:text-lg text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  All Starter features
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Advanced integrations
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Custom branding
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Up to 25 users
                </li>
              </ul>
              <Link href="/contact">
                <span className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors cursor-pointer inline-block text-center">
                  Get Started
                </span>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">$199<span className="text-base lg:text-lg text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  All Professional features
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Custom development
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  SLA guarantee
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  White-label options
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Unlimited users
                </li>
              </ul>
              <Link href="/contact">
                <span className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors cursor-pointer inline-block text-center">
                  Contact Sales
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Features Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare the features across our different micro SaaS solutions to find the perfect fit for your business.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg min-w-[800px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 lg:p-6 font-semibold text-gray-900 text-sm lg:text-base">Feature</th>
                  <th className="text-center p-4 lg:p-6 font-semibold text-gray-900 text-sm lg:text-base">AI Content Generator</th>
                  <th className="text-center p-4 lg:p-6 font-semibold text-gray-900 text-sm lg:text-base">Project Manager</th>
                  <th className="text-center p-4 lg:p-6 font-semibold text-gray-900 text-sm lg:text-base">Inventory Tracker</th>
                  <th className="text-center p-4 lg:p-6 font-semibold text-gray-900 text-sm lg:text-base">Support Assistant</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 lg:p-6 font-medium text-gray-900 text-sm lg:text-base">Starting Price</td>
                  <td className="p-4 lg:p-6 text-center text-blue-600 font-semibold text-sm lg:text-base">$29/mo</td>
                  <td className="p-4 lg:p-6 text-center text-blue-600 font-semibold text-sm lg:text-base">$19/mo</td>
                  <td className="p-4 lg:p-6 text-center text-blue-600 font-semibold text-sm lg:text-base">$39/mo</td>
                  <td className="p-4 lg:p-6 text-center text-blue-600 font-semibold text-sm lg:text-base">$25/mo</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 lg:p-6 font-medium text-gray-900 text-sm lg:text-base">API Access</td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 lg:p-6 font-medium text-gray-900 text-sm lg:text-base">Mobile App</td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 lg:p-6 font-medium text-gray-900 text-sm lg:text-base">Analytics Dashboard</td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 lg:p-6 font-medium text-gray-900 text-sm lg:text-base">24/7 Support</td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 lg:p-6 text-center"><CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Let's discuss how our micro SaaS solutions can help streamline your operations 
            and drive growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
            <Link href="tel:+13024640950">
              <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                Call +1 302 464 0950
              </span>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default MicroSaasPage;