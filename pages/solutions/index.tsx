import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { Building, Users, Rocket, Heart, DollarSign, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const Solutions: NextPage = () => {
  return (
    <Layout
      title="Technology Solutions - Zion Tech Group"
      description="Discover comprehensive technology solutions tailored for enterprises, small businesses, startups, and specific industries. Transform your business with Zion Tech Group."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Technology
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Tailored technology solutions for businesses of all sizes and industries. 
            From startups to enterprises, we have the expertise to transform your operations.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Get Your Solution
              </a>
            </Link>
            <Link href="/services">
              <a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                View All Services
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Type Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solutions by Business Type</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that different business types have unique needs. 
              Our solutions are tailored to meet your specific requirements and challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive technology solutions for large organizations with complex infrastructure needs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Digital Transformation</li>
                <li>• Legacy System Modernization</li>
                <li>• Enterprise Security</li>
                <li>• Global Infrastructure</li>
              </ul>
              <Link href="/solutions/enterprise">
                <a className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Small Business Solutions</h3>
              <p className="text-gray-600 mb-4">
                Cost-effective technology solutions designed for growing small and medium businesses.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Business Process Automation</li>
                <li>• Cloud Migration</li>
                <li>• Digital Marketing Tools</li>
                <li>• Customer Management</li>
              </ul>
              <Link href="/solutions/small-business">
                <a className="text-purple-600 hover:text-purple-700 font-semibold flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Startup Solutions</h3>
              <p className="text-gray-600 mb-4">
                Agile technology solutions to help startups scale quickly and efficiently.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• MVP Development</li>
                <li>• Scalable Architecture</li>
                <li>• Rapid Prototyping</li>
                <li>• Growth Optimization</li>
              </ul>
              <Link href="/solutions/startups">
                <a className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges and requirements of different industries. 
              Our solutions are tailored to meet industry-specific needs and compliance requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-semibold text-gray-900">Healthcare</h3>
              </div>
              <p className="text-gray-600 mb-4">
                HIPAA-compliant solutions for hospitals, clinics, and healthcare providers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Electronic Health Records</li>
                <li>• Telemedicine Platforms</li>
                <li>• Patient Management Systems</li>
                <li>• Healthcare Analytics</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Finance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Secure, compliant solutions for banking, insurance, and fintech companies.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Banking Applications</li>
                <li>• Risk Management Systems</li>
                <li>• Fraud Detection</li>
                <li>• Financial Analytics</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Building className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Manufacturing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                IoT and automation solutions for smart manufacturing and Industry 4.0.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Smart Factory Solutions</li>
                <li>• Predictive Maintenance</li>
                <li>• Quality Control Systems</li>
                <li>• Supply Chain Optimization</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Retail & E-commerce</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Omnichannel solutions for retail chains and e-commerce platforms.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• E-commerce Platforms</li>
                <li>• Inventory Management</li>
                <li>• Customer Analytics</li>
                <li>• Omnichannel Integration</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Rocket className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg font-semibold text-gray-900">Energy & Utilities</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Smart grid solutions and energy management systems for utility companies.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Smart Grid Management</li>
                <li>• Energy Analytics</li>
                <li>• Customer Portal Systems</li>
                <li>• Predictive Maintenance</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
                <h3 className="text-lg font-semibold text-gray-900">Government</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Secure, scalable solutions for government agencies and public sector organizations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Citizen Portal Systems</li>
                <li>• Document Management</li>
                <li>• Compliance Systems</li>
                <li>• Data Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine industry expertise with technical excellence to deliver solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of industry-specific challenges, regulations, and best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Customized Approach</h3>
              <p className="text-gray-600">
                Solutions tailored to your specific business needs, processes, and objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Scalable Architecture</h3>
              <p className="text-gray-600">
                Solutions designed to grow with your business and handle increased demands.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                Continuous support, monitoring, and optimization for long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solution Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering successful technology solutions that meet your business objectives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Discovery</h3>
              <p className="text-gray-600">
                We analyze your business needs, challenges, and objectives to understand your requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Strategy</h3>
              <p className="text-gray-600">
                We develop a comprehensive solution strategy aligned with your business goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Design</h3>
              <p className="text-gray-600">
                We design the solution architecture and user experience based on your requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p className="text-gray-600">
                We build your solution using industry best practices and modern technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-red-600">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Deployment</h3>
              <p className="text-gray-600">
                We deploy your solution and provide ongoing support and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Solution?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Let's discuss your business needs and find the perfect technology solution to drive your success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Get Started Today
              </a>
            </Link>
            <Link href="/services">
              <a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Explore Our Services
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;