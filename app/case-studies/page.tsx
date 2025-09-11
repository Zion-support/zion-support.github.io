import Link from 'next/link';

export const metadata = {
  title: 'Case Studies | Zion Tech Group',
  description: 'Explore our success stories and case studies. See how we\'ve helped companies transform their operations with AI, automation, and digital solutions.',
  keywords: 'case studies, success stories, client results, business transformation, AI implementation',
};

export default function CaseStudiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-12">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Success Stories & Case Studies
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Discover how we've helped companies across industries transform their operations, 
          reduce costs, and drive growth through innovative technology solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              E-commerce
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
              Global E-commerce Platform: 60% Cost Reduction
            </h2>
            <p className="text-gray-600">
              A mid-size e-commerce company transformed their operations with AI automation and cloud migration.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h3>
            <p className="text-gray-600 mb-4">
              The company was struggling with high customer service costs, manual inventory management, 
              and slow response times that were impacting customer satisfaction and profitability.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Solution</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Implemented AI-powered chatbots for customer service</li>
              <li>• Automated inventory management with predictive analytics</li>
              <li>• Migrated to cloud infrastructure for scalability</li>
              <li>• Deployed real-time analytics dashboard</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Results</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">60%</div>
                <div className="text-sm text-green-800">Cost Reduction</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">40%</div>
                <div className="text-sm text-blue-800">Faster Response</div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600">25%</div>
                <div className="text-sm text-purple-800">Higher Satisfaction</div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-600">30%</div>
                <div className="text-sm text-orange-800">Less Waste</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="mb-6">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              Manufacturing
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
              Manufacturing Company: 50% Supply Chain Cost Reduction
            </h2>
            <p className="text-gray-600">
              A global manufacturing company implemented blockchain for supply chain transparency and automation.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h3>
            <p className="text-gray-600 mb-4">
              The company faced supply chain inefficiencies, counterfeit products, and lack of transparency 
              across their global manufacturing network.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Solution</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Implemented blockchain for supply chain tracking</li>
              <li>• Deployed smart contracts for automated payments</li>
              <li>• Created real-time visibility dashboard</li>
              <li>• Integrated IoT sensors for quality monitoring</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Results</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">50%</div>
                <div className="text-sm text-green-800">Cost Reduction</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">90%</div>
                <div className="text-sm text-blue-800">Better Tracking</div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600">75%</div>
                <div className="text-sm text-purple-800">Less Counterfeits</div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-600">40%</div>
                <div className="text-sm text-orange-800">Faster Disputes</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="mb-6">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
              Healthcare
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
              Healthcare Provider: 45% Efficiency Improvement
            </h2>
            <p className="text-gray-600">
              A regional healthcare provider modernized their operations with AI-powered patient management and automation.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h3>
            <p className="text-gray-600 mb-4">
              The healthcare provider was struggling with manual patient scheduling, 
              inefficient record management, and long wait times for patients.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Solution</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Implemented AI-powered patient scheduling system</li>
              <li>• Automated medical record management</li>
              <li>• Deployed predictive analytics for resource planning</li>
              <li>• Created patient portal with self-service options</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Results</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">45%</div>
                <div className="text-sm text-green-800">Efficiency Gain</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">60%</div>
                <div className="text-sm text-blue-800">Faster Scheduling</div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600">35%</div>
                <div className="text-sm text-purple-800">Reduced Wait Times</div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-600">80%</div>
                <div className="text-sm text-orange-800">Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="mb-6">
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
              Financial Services
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
              Financial Services: 70% Faster Loan Processing
            </h2>
            <p className="text-gray-600">
              A regional bank transformed their loan processing with AI automation and digital workflows.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h3>
            <p className="text-gray-600 mb-4">
              The bank was experiencing slow loan processing times, high operational costs, 
              and manual document verification that was impacting customer experience.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Solution</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Implemented AI-powered document verification</li>
              <li>• Automated credit scoring and risk assessment</li>
              <li>• Created digital loan application workflow</li>
              <li>• Deployed real-time fraud detection system</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Results</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">70%</div>
                <div className="text-sm text-green-800">Faster Processing</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">55%</div>
                <div className="text-sm text-blue-800">Cost Reduction</div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600">90%</div>
                <div className="text-sm text-purple-800">Accuracy Rate</div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-600">85%</div>
                <div className="text-sm text-orange-800">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Create Your Success Story?
        </h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Join the companies that have transformed their operations with our technology solutions. 
          Get a free consultation and discover how we can help you achieve similar results.
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
            Get Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}