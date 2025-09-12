import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, Target, Users, TrendingUp, Shield, Clock, Wifi, Cpu, Database, Cloud } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Edge Computing Services | Zion Tech Group',
  description: 'Transform your business with edge computing solutions. Expert edge infrastructure, IoT integration, and real-time processing services.',
  keywords: 'edge computing, IoT, real-time processing, edge infrastructure, edge analytics, edge AI',
  openGraph: {
    title: 'Edge Computing Services | Zion Tech Group',
    description: 'Expert edge computing solutions for real-time processing, IoT integration, and distributed infrastructure.',
    type: 'website',
  },
};

export default function EdgeComputingServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Edge Computing Services
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Bring computing power closer to your data sources. Our edge computing solutions deliver real-time processing, 
              reduced latency, and enhanced security for mission-critical applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center"
              >
                Get Edge Computing Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg inline-flex items-center justify-center"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Edge Computing?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Edge computing brings processing power closer to data sources, enabling real-time decision-making, 
              reduced bandwidth costs, and enhanced security for distributed applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ultra-Low Latency</h3>
              <p className="text-gray-600">Process data in milliseconds for real-time applications</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Security</h3>
              <p className="text-gray-600">Keep sensitive data local and reduce attack surface</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Optimization</h3>
              <p className="text-gray-600">Reduce bandwidth costs and cloud processing expenses</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Offline Capability</h3>
              <p className="text-gray-600">Continue operations even with limited connectivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Edge Computing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From edge infrastructure design to IoT integration, we provide comprehensive edge computing solutions 
              that deliver real business value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Edge Infrastructure Design</h3>
              <p className="text-gray-600 mb-4">
                Design and deploy robust edge computing infrastructure optimized for your specific use cases and requirements.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Edge server deployment</li>
                <li>• Network architecture design</li>
                <li>• Hardware selection and optimization</li>
                <li>• Scalability planning</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Edge Data Processing</h3>
              <p className="text-gray-600 mb-4">
                Implement real-time data processing and analytics at the edge for immediate insights and decision-making.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Stream processing</li>
                <li>• Real-time analytics</li>
                <li>• Data filtering and aggregation</li>
                <li>• Edge-to-cloud synchronization</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">IoT Integration</h3>
              <p className="text-gray-600 mb-4">
                Connect and manage IoT devices with edge computing for intelligent device management and data processing.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Device connectivity</li>
                <li>• Protocol translation</li>
                <li>• Device management</li>
                <li>• Sensor data processing</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Edge AI & ML</h3>
              <p className="text-gray-600 mb-4">
                Deploy AI and machine learning models at the edge for real-time inference and intelligent automation.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Model optimization</li>
                <li>• Edge inference</li>
                <li>• Federated learning</li>
                <li>• Model updates</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Edge Security</h3>
              <p className="text-gray-600 mb-4">
                Implement comprehensive security measures to protect edge infrastructure and data from threats.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Zero-trust architecture</li>
                <li>• Data encryption</li>
                <li>• Access control</li>
                <li>• Threat monitoring</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hybrid Cloud Integration</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly integrate edge computing with cloud services for optimal performance and cost efficiency.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Cloud-edge orchestration</li>
                <li>• Data synchronization</li>
                <li>• Workload distribution</li>
                <li>• Backup and recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Edge Computing Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how edge computing is transforming industries and enabling new possibilities for real-time applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Manufacturing & Industrial IoT</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Predictive Maintenance:</strong> Real-time equipment monitoring and failure prediction
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Quality Control:</strong> Automated inspection and defect detection on production lines
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Process Optimization:</strong> Real-time adjustments to improve efficiency and reduce waste
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Safety Monitoring:</strong> Continuous monitoring of environmental conditions and worker safety
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Cities & Transportation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Traffic Management:</strong> Real-time traffic optimization and congestion reduction
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Autonomous Vehicles:</strong> Low-latency processing for real-time decision making
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Public Safety:</strong> Video analytics for crime prevention and emergency response
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Energy Management:</strong> Smart grid optimization and renewable energy integration
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare & Life Sciences</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Remote Patient Monitoring:</strong> Real-time health data processing and alert generation
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Medical Imaging:</strong> Edge-based image processing for faster diagnosis
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Drug Discovery:</strong> Distributed computing for molecular simulation
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Emergency Response:</strong> Real-time patient triage and resource allocation
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Retail & Customer Experience</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Smart Stores:</strong> Real-time inventory management and customer behavior analysis
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Personalized Shopping:</strong> AI-powered recommendations and dynamic pricing
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Loss Prevention:</strong> Real-time video analytics for theft detection
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Supply Chain:</strong> Real-time tracking and optimization of logistics
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Edge Computing Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from our edge computing implementations across various industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Smart Manufacturing</h3>
              <p className="text-purple-800 mb-4">
                Implemented edge computing for a global manufacturer, reducing equipment downtime by 45% and 
                improving production efficiency by 30% through real-time predictive maintenance.
              </p>
              <div className="text-sm text-purple-700">
                <strong>Results:</strong> 45% downtime reduction, 30% efficiency gain, $5M annual savings
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Smart City Traffic</h3>
              <p className="text-green-800 mb-4">
                Deployed edge-based traffic management system for a major city, reducing congestion by 25% 
                and improving emergency response times by 40%.
              </p>
              <div className="text-sm text-green-700">
                <strong>Results:</strong> 25% congestion reduction, 40% faster emergency response, 15% fuel savings
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Healthcare Monitoring</h3>
              <p className="text-blue-800 mb-4">
                Built edge computing platform for remote patient monitoring, enabling real-time health alerts 
                and reducing hospital readmissions by 35%.
              </p>
              <div className="text-sm text-blue-700">
                <strong>Results:</strong> 35% fewer readmissions, 50% faster response time, $2M cost savings
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Edge Computing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to edge computing implementation that ensures success and maximizes ROI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">
                Evaluate your current infrastructure and identify edge computing opportunities for maximum impact.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600">
                Create a comprehensive edge computing architecture tailored to your specific requirements and constraints.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Deploy edge infrastructure, integrate with existing systems, and implement monitoring and management tools.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimization</h3>
              <p className="text-gray-600">
                Monitor performance, optimize configurations, and scale successful implementations across your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Implement Edge Computing?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform your business with edge computing solutions that deliver real-time processing, reduced latency, and enhanced security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Edge Computing Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}