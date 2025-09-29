import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function CloudService(): JSX.Element {
  return (
    <>
      <Head>
        <title>Cloud Infrastructure Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Scalable, secure, and reliable cloud solutions tailored to your business needs. Cloud migration, infrastructure as code, and cost optimization."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
        {/* Navigation */}
        <nav className="border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4">
            <Link href="/services" className="text-xl font-bold text-blue-600">
              ← Back to Services
            </Link>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center text-3xl mx-auto mb-6">
              ☁️
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Scalable, secure, and reliable cloud solutions tailored to your business needs. 
              From migration to optimization, we help you leverage the full power of cloud computing.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Cloud Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Architecture</h3>
                <p className="text-gray-600">Design systems that grow with your business needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Optimized</h3>
                <p className="text-gray-600">Reduce cloud costs by up to 40% through smart optimization</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
                <p className="text-gray-600">Built-in security and compliance from day one</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Cloud Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Migration</h3>
                <p className="text-gray-600 mb-4">Seamlessly migrate your applications and data to the cloud</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Assessment and planning</li>
                  <li>• Lift and shift migration</li>
                  <li>• Replatforming services</li>
                  <li>• Data migration</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">📝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure as Code</h3>
                <p className="text-gray-600 mb-4">Manage your infrastructure with code for consistency and reliability</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Terraform deployment</li>
                  <li>• CloudFormation templates</li>
                  <li>• Configuration management</li>
                  <li>• Version control</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Auto-scaling Solutions</h3>
                <p className="text-gray-600 mb-4">Automatically scale resources based on demand</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Horizontal scaling</li>
                  <li>• Vertical scaling</li>
                  <li>• Predictive scaling</li>
                  <li>• Cost-aware scaling</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Disaster Recovery</h3>
                <p className="text-gray-600 mb-4">Ensure business continuity with robust backup and recovery</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Backup strategies</li>
                  <li>• Cross-region replication</li>
                  <li>• RTO/RPO optimization</li>
                  <li>• Recovery testing</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-cloud Architecture</h3>
                <p className="text-gray-600 mb-4">Design resilient systems across multiple cloud providers</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Vendor lock-in avoidance</li>
                  <li>• Cost optimization</li>
                  <li>• High availability</li>
                  <li>• Risk mitigation</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Cost Optimization</h3>
                <p className="text-gray-600 mb-4">Reduce cloud spend while maintaining performance</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Right-sizing analysis</li>
                  <li>• Reserved instances</li>
                  <li>• Spot instances</li>
                  <li>• Cost monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Cloud Implementation Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Assessment</h3>
                <p className="text-gray-600">Analyze your current infrastructure and identify migration opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Strategy</h3>
                <p className="text-gray-600">Develop a comprehensive cloud strategy and migration plan</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Implementation</h3>
                <p className="text-gray-600">Execute migration with minimal downtime and maximum efficiency</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimization</h3>
                <p className="text-gray-600">Continuously optimize for performance, cost, and security</p>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Enterprise Migration</h3>
                    <p className="text-gray-600">Legacy system modernization</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Migrated a Fortune 500 company's legacy systems to AWS, reducing infrastructure costs by 45% 
                  and improving system reliability to 99.9% uptime.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">45% Cost Reduction</span>
                  <span className="mx-2">•</span>
                  <span>99.9% Uptime</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🎮</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Gaming Platform</h3>
                    <p className="text-gray-600">Auto-scaling infrastructure</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Built a multi-cloud gaming platform that automatically scales to handle 10x traffic spikes 
                  during peak gaming hours while maintaining low latency.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">10x Scaling</span>
                  <span className="mx-2">•</span>
                  <span>Low Latency</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cloud Platforms & Technologies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cloud Providers</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">AWS</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Azure</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Google Cloud</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">IBM Cloud</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Infrastructure Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Terraform</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Ansible</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Docker</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Kubernetes</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monitoring & Security</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">CloudWatch</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Prometheus</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Grafana</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">ELK Stack</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits of Cloud Infrastructure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Reduced infrastructure management overhead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Faster time to market for new features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Improved system reliability and uptime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Enhanced disaster recovery capabilities</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Pay-as-you-go pricing model</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Elimination of hardware capital expenses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Reduced operational costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Improved cost predictability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our cloud solutions can modernize your infrastructure and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Get Cloud Assessment
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}