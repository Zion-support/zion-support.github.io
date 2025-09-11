import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Target, Users, DollarSign, Clock, BarChart3, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fortune 500 AI Transformation Case Study | Zion Tech Group',
  description: 'How we helped a Fortune 500 manufacturing company achieve 40% cost reduction and 60% faster processing through AI automation implementation.',
  keywords: 'AI transformation, Fortune 500, manufacturing AI, case study, AI automation, enterprise AI',
  openGraph: {
    title: 'Fortune 500 AI Transformation Case Study',
    description: 'Real-world case study of successful AI transformation in Fortune 500 manufacturing company.',
    type: 'article',
  },
};

export default function Fortune500AITransformation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Case Study • Manufacturing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fortune 500 AI Transformation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              How we helped a global manufacturing leader achieve 40% cost reduction and 60% faster processing 
              through comprehensive AI automation implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#results"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center"
              >
                View Results
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg inline-flex items-center justify-center"
              >
                Start Your Transformation
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Case Study Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Executive Summary */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Executive Summary</h2>
            <p className="text-lg text-blue-800 leading-relaxed mb-6">
              A Fortune 500 manufacturing company with operations across 15 countries was struggling with manual quality 
              control processes, inconsistent production efficiency, and rising operational costs. Through our comprehensive 
              AI transformation program, we helped them achieve remarkable improvements in quality, efficiency, and profitability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                <div className="text-sm text-green-800">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-sm text-blue-800">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">$2.5M</div>
                <div className="text-sm text-purple-800">Annual Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Background */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Background</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our client is a global manufacturing leader with over 50,000 employees and operations spanning 15 countries. 
              They produce high-precision components for the automotive, aerospace, and industrial sectors, with annual 
              revenue exceeding $8 billion.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Industry</h4>
                  <p className="text-gray-600">Manufacturing & Industrial Components</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2 mt-4">Size</h4>
                  <p className="text-gray-600">50,000+ employees, 15 countries</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Revenue</h4>
                  <p className="text-gray-600">$8+ billion annually</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2 mt-4">Markets</h4>
                  <p className="text-gray-600">Automotive, Aerospace, Industrial</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Quality Control Issues</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Manual inspection processes causing delays and inconsistencies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>High defect rates leading to customer complaints and returns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Limited visibility into production quality metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Difficulty identifying root causes of quality issues</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Operational Inefficiencies</h3>
              <ul className="space-y-3 text-orange-800">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Production bottlenecks due to manual processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>High operational costs from redundant activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Limited predictive maintenance capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Inconsistent performance across different facilities</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We developed a comprehensive AI transformation strategy that addressed quality control, operational efficiency, 
              and predictive maintenance across their global operations. Our solution combined computer vision, machine learning, 
              and process automation to create intelligent manufacturing systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Computer Vision Quality Control</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Implemented AI-powered visual inspection systems for real-time defect detection and quality assurance.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Predictive Analytics</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Deployed machine learning models for predictive maintenance and production optimization.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Process Automation</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Automated manual processes and integrated AI insights into existing manufacturing workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Analyzed current processes and identified automation opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pilot Program</h3>
              <p className="text-gray-600 text-sm">Deployed AI solutions at one facility to validate approach</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scale & Deploy</h3>
              <p className="text-gray-600 text-sm">Rolled out successful solutions across all facilities</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimize</h3>
              <p className="text-gray-600 text-sm">Continuously improved AI models and processes</p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Quality Improvements</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>60% reduction in defect rates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>99.8% accuracy in defect detection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>40% faster inspection process</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>90% reduction in customer complaints</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Operational Efficiency</h3>
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span>35% increase in production throughput</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span>50% reduction in equipment downtime</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span>25% improvement in energy efficiency</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span>70% faster maintenance response</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Financial Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">$2.5M</div>
                <div className="text-purple-800">Annual Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                <div className="text-purple-800">Months to ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
                <div className="text-purple-800">Return on Investment</div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI & Machine Learning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• TensorFlow for computer vision models</li>
                <li>• PyTorch for predictive analytics</li>
                <li>• OpenCV for image processing</li>
                <li>• Scikit-learn for traditional ML</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Infrastructure & Deployment</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Kubernetes for container orchestration</li>
                <li>• Docker for application containerization</li>
                <li>• AWS/Azure for cloud infrastructure</li>
                <li>• Edge computing for real-time processing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Client Testimonial */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "Zion Tech Group's AI transformation program exceeded our expectations. The quality improvements and cost 
              savings have been remarkable. We've not only reduced defects by 60% but also created a more efficient, 
              data-driven manufacturing operation that positions us for future growth."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold">CTO</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Chief Technology Officer</div>
                <div className="text-gray-600">Fortune 500 Manufacturing Company</div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts help you achieve similar results. Get a free consultation to discuss your AI transformation opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}