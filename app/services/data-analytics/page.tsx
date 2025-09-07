import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Data Analytics - Zion Tech Group',
  description: 'Professional data analytics solutions for your business needs.',
<<<<<<< HEAD

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
};

export default function DataAnalyticsPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Data Analytics & BI
=======
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Data Analytics
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced data analytics, business intelligence, and machine learning solutions to transform raw data into actionable insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Business Intelligence</h3>
            <p className="text-gray-600">Transform your data into actionable insights with our comprehensive BI solutions.</p>
          </div>
<<<<<<< HEAD
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
            <p className="text-gray-600">Leverage AI and ML to predict trends and optimize business processes.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
            <p className="text-gray-600">Get instant insights with our real-time data processing capabilities.</p>
          </div>
=======

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your data analytics requirements 
              and get a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
        </div>
      </div>
    </div>
  );
}

