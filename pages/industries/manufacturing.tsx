import React from 'react';
import Layout from '../../components/Layout';
import { Cpu, Settings, BarChart3, Shield, CheckCircle, Zap } from 'lucide-react';

const solutions = [
  {
    icon: Cpu,
    title: 'Industrial IoT',
    description: 'Connected manufacturing systems and smart factories',
    features: ['Sensor Integration', 'Real-time Monitoring', 'Predictive Maintenance', 'Smart Manufacturing']
  },
  {
    icon: Settings,
    title: 'Process Automation',
    description: 'Automated manufacturing processes and workflows',
    features: ['Robotic Process Automation', 'Workflow Optimization', 'Quality Control', 'Production Planning']
  },
  {
    icon: BarChart3,
    title: 'Manufacturing Analytics',
    description: 'Data-driven insights for manufacturing optimization',
    features: ['Production Analytics', 'Quality Metrics', 'Supply Chain Analytics', 'Performance Dashboards']
  },
  {
    icon: Shield,
    title: 'Supply Chain Management',
    description: 'End-to-end supply chain visibility and optimization',
    features: ['Inventory Management', 'Supplier Integration', 'Demand Forecasting', 'Logistics Optimization']
  }
];

const benefits = [
  'Increased Productivity',
  'Reduced Downtime',
  'Better Quality Control',
  'Cost Optimization',
  'Improved Efficiency',
  'Data-Driven Decisions'
];

export default function ManufacturingPage() {
  return (
    <Layout
      title="Manufacturing Technology Solutions - Zion Tech Group"
      description="Transform manufacturing with our comprehensive technology solutions. Industrial IoT, process automation, analytics, and supply chain management for manufacturing companies."
      keywords="manufacturing technology, industrial IoT, smart factory, process automation, manufacturing analytics, supply chain"
    >
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Manufacturing
                <span className="block text-orange-600">Technology</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform manufacturing with our comprehensive technology solutions. 
                From industrial IoT to process automation, we help manufacturing 
                companies optimize operations and increase productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Explore Manufacturing Solutions
                </button>
                <button className="border border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                  View Manufacturing Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Manufacturing Technology Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed for manufacturing companies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <solution.icon className="h-8 w-8 text-orange-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Manufacturing Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Proven expertise in manufacturing technology and industrial automation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Zap className="h-6 w-6 text-orange-600 mr-3" />
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Manufacturing Operations
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let our manufacturing technology experts help you optimize operations and increase productivity.
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Manufacturing Consultation
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}