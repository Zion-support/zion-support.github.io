import { Helmet } from 'react-helmet-async';
import { Monitor } from 'lucide-react';
export default function ZionCustomerSatisfactionMonitorPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Customer Satisfaction Monitor - Zion Tech Group</title>
        <meta name="description" content="Zion Customer Satisfaction Monitor solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Customer Satisfaction Monitor</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion customer satisfaction monitor solutions designed to meet your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}