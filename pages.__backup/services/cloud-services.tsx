import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { Cloud, Server, Shield, Zap, Database, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const CloudServices: NextPage = () => {
  return (
    <Layout
      title="Cloud Services - Zion Tech Group"
      description="Transform your business with scalable cloud solutions, infrastructure design, and cloud migration services. Expert cloud consulting from Zion Tech Group."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cloud
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Transform your business with scalable cloud solutions and infrastructure design. 
            From migration to optimization, we help you leverage the full power of cloud computing.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Start Your Cloud Journey
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

      {/* Cloud Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cloud Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to optimize performance, reduce costs, and enhance scalability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">
                Seamless migration of your applications and infrastructure to the cloud.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Application Migration</li>
                <li>• Data Migration</li>
                <li>• Infrastructure Migration</li>
                <li>• Legacy System Modernization</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Server className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Design and deployment of scalable, secure cloud infrastructure solutions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Virtual Private Clouds</li>
                <li>• Load Balancing</li>
                <li>• Auto-scaling Groups</li>
                <li>• High Availability Setup</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Databases</h3>
              <p className="text-gray-600 mb-4">
                Managed database solutions optimized for performance and scalability.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Relational Databases</li>
                <li>• NoSQL Solutions</li>
                <li>• Data Warehousing</li>
                <li>• Backup & Recovery</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Security</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security solutions to protect your cloud infrastructure and data.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Identity & Access Management</li>
                <li>• Network Security</li>
                <li>• Data Encryption</li>
                <li>• Compliance & Auditing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">DevOps & CI/CD</h3>
              <p className="text-gray-600 mb-4">
                Automated deployment pipelines and infrastructure as code solutions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Continuous Integration</li>
                <li>• Continuous Deployment</li>
                <li>• Infrastructure as Code</li>
                <li>• Monitoring & Logging</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Multi-Cloud Solutions</h3>
              <p className="text-gray-600 mb-4">
                Strategic multi-cloud deployments for optimal performance and cost efficiency.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• AWS Solutions</li>
                <li>• Azure Services</li>
                <li>• Google Cloud Platform</li>
                <li>• Hybrid Cloud</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Platforms We Work With</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're certified experts in all major cloud platforms, helping you choose the right solution for your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">AWS</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Amazon Web Services</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive AWS solutions including EC2, S3, Lambda, and more.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Compute & Storage</li>
                <li>• Serverless Architecture</li>
                <li>• AI & Machine Learning</li>
                <li>• IoT & Analytics</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">Azure</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Microsoft Azure</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade Azure solutions for Windows and Microsoft ecosystems.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Virtual Machines</li>
                <li>• Azure Functions</li>
                <li>• Cosmos DB</li>
                <li>• Cognitive Services</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">GCP</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Google Cloud Platform</h3>
              <p className="text-gray-600 mb-4">
                Advanced GCP solutions with cutting-edge AI and analytics capabilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Compute Engine</li>
                <li>• Cloud Functions</li>
                <li>• BigQuery</li>
                <li>• AI Platform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Migration Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cloud Migration Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful cloud migration with minimal disruption to your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Assessment</h3>
              <p className="text-gray-600">
                We evaluate your current infrastructure, applications, and business requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Strategy</h3>
              <p className="text-gray-600">
                We develop a comprehensive migration strategy tailored to your specific needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Migration</h3>
              <p className="text-gray-600">
                We execute the migration with minimal downtime and comprehensive testing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Optimization</h3>
              <p className="text-gray-600">
                We optimize performance, costs, and security post-migration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Cloud */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Cloud Computing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how cloud solutions can transform your business operations and drive growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Cost Efficiency</h3>
              <p className="text-gray-600">Reduce capital expenses with pay-as-you-use cloud services and eliminate hardware maintenance costs.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Scalability</h3>
              <p className="text-gray-600">Scale resources up or down based on demand, ensuring optimal performance and cost management.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-green-600">Security</h3>
              <p className="text-gray-600">Enterprise-grade security with advanced threat protection, encryption, and compliance features.</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Disaster Recovery</h3>
              <p className="text-gray-600">Built-in backup and recovery solutions ensure business continuity and data protection.</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-red-600">Global Access</h3>
              <p className="text-gray-600">Access your applications and data from anywhere in the world with high availability.</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-indigo-600">Innovation</h3>
              <p className="text-gray-600">Leverage cutting-edge technologies like AI, ML, and IoT without heavy infrastructure investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Cloud Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Cloud Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver cloud solutions that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Certified Experts</h3>
                    <p className="text-gray-600">Our team holds certifications from AWS, Azure, and Google Cloud Platform.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Proven Methodologies</h3>
                    <p className="text-gray-600">We follow industry best practices and proven methodologies for cloud migration.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock support ensures your cloud infrastructure runs smoothly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cost Optimization</h3>
                    <p className="text-gray-600">We help optimize costs while maintaining performance and security.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 text-blue-100">
                Let's discuss how cloud solutions can transform your business operations and drive growth.
              </p>
              <Link href="/contact">
                <a className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer inline-block">
                  Schedule a Consultation
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Transform your business with scalable, secure, and cost-effective cloud solutions. 
            Let Zion Tech Group be your cloud transformation partner.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Start Your Cloud Journey
              </a>
            </Link>
            <Link href="/services">
              <a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Explore All Services
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CloudServices;