<<<<<<< HEAD

export const metadata = {
  title: "Data Analytics & BI | Zion Tech Group",
  description: "Advanced data analytics, business intelligence, and machine learning solutions to transform raw data into actionable insights.",
  keywords: 'data-analytics, services, business, technology'
=======
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Data Analytics - Zion Tech Group',
  description: 'Professional data analytics solutions for your business needs.',
>>>>>>> b43254817b51666b4fff988ee16fcb7b1df0e58a
};

export default function DataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Data Analytics & BI
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
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
            <p className="text-gray-600">Leverage AI and ML to predict trends and optimize business processes.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
            <p className="text-gray-600">Get instant insights with our real-time data processing capabilities.</p>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> b43254817b51666b4fff988ee16fcb7b1df0e58a
