import Link from 'next/link';

export const metadata = {
  title: 'Digital Transformation Services | Zion Tech Group',
  description: 'Transform your business with our comprehensive digital transformation services. From strategy to implementation, we help companies modernize operations and drive growth.',
  keywords: 'digital transformation, business modernization, digital strategy, technology consulting, process automation',
};

export default function DigitalTransformationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-12">
        <Link href="/services" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Services
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Digital Transformation Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Transform your business for the digital age. Our comprehensive digital transformation services help companies 
          modernize operations, improve efficiency, and drive sustainable growth through strategic technology implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Digital Transformation Matters</h2>
            <p className="text-gray-600 mb-6">
              In today's rapidly evolving business landscape, digital transformation isn't just an option—it's a necessity. 
              Companies that successfully transform digitally see 23% higher revenue growth and 34% better customer satisfaction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">📈 Business Impact</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• 23% higher revenue growth</li>
                  <li>• 34% better customer satisfaction</li>
                  <li>• 40% reduction in operational costs</li>
                  <li>• 50% faster time to market</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">🎯 Key Benefits</h3>
                <ul className="text-green-800 space-y-2">
                  <li>• Enhanced customer experience</li>
                  <li>• Improved operational efficiency</li>
                  <li>• Better data-driven decisions</li>
                  <li>• Increased competitive advantage</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Digital Transformation Approach</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment & Strategy</h3>
                  <p className="text-gray-600">
                    We analyze your current state, identify opportunities, and develop a comprehensive digital transformation roadmap tailored to your business goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Technology Implementation</h3>
                  <p className="text-gray-600">
                    Our experts implement cutting-edge technologies including cloud solutions, AI/ML, automation tools, and modern software platforms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Process Optimization</h3>
                  <p className="text-gray-600">
                    We redesign and optimize business processes to maximize efficiency, reduce costs, and improve customer experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Change Management</h3>
                  <p className="text-gray-600">
                    We provide comprehensive training and support to ensure smooth adoption and maximize the benefits of your digital transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Digital Transformation Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">☁️ Cloud Migration</h3>
                <p className="text-gray-600 mb-4">
                  Seamlessly migrate your infrastructure to the cloud for improved scalability, security, and cost efficiency.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AWS, Azure, GCP migration</li>
                  <li>• Hybrid cloud solutions</li>
                  <li>• Cloud security implementation</li>
                  <li>• Cost optimization</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🤖 AI & Automation</h3>
                <p className="text-gray-600 mb-4">
                  Implement AI-powered solutions and automation to streamline operations and enhance decision-making.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Process automation</li>
                  <li>• AI-powered analytics</li>
                  <li>• Chatbots and virtual assistants</li>
                  <li>• Predictive maintenance</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📊 Data Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Transform raw data into actionable insights with advanced analytics and business intelligence solutions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Data warehouse design</li>
                  <li>• Real-time dashboards</li>
                  <li>• Predictive analytics</li>
                  <li>• Data governance</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔒 Cybersecurity</h3>
                <p className="text-gray-600 mb-4">
                  Protect your digital assets with comprehensive cybersecurity solutions and compliance frameworks.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Security assessment</li>
                  <li>• Threat detection</li>
                  <li>• Compliance management</li>
                  <li>• Incident response</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Get Started Today</h3>
            <p className="text-gray-600 mb-6">
              Ready to transform your business? Get a free consultation and discover how digital transformation can drive your success.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+13024640950"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center block"
              >
                Email Us
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Success Metrics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Cost Reduction</span>
                <span className="font-semibold text-green-600">40%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Efficiency Gain</span>
                <span className="font-semibold text-green-600">50%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Customer Satisfaction</span>
                <span className="font-semibold text-green-600">+34%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Time to Market</span>
                <span className="font-semibold text-green-600">50% faster</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
            <div className="space-y-3">
              <Link href="/services/ai-services" className="block text-blue-600 hover:text-blue-800">
                AI Services →
              </Link>
              <Link href="/services/cloud-migration" className="block text-blue-600 hover:text-blue-800">
                Cloud Migration →
              </Link>
              <Link href="/services/automation-tools" className="block text-blue-600 hover:text-blue-800">
                Automation Tools →
              </Link>
              <Link href="/services/data-analytics" className="block text-blue-600 hover:text-blue-800">
                Data Analytics →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Join hundreds of companies that have successfully transformed their operations with our digital transformation services. 
          Get a free assessment and discover the opportunities in your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
          >
            Get Free Assessment
          </a>
        </div>
      </div>
    </div>
  );
}