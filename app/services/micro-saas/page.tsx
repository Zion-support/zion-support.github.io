import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Micro Saas - Zion Tech Group',
  description: 'Professional micro saas solutions for your business needs.',
};

export default function MicroSaasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Micro SaaS Development
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build and launch your next micro SaaS product with our comprehensive development services. 
            From AI-powered tools to productivity apps, we help you create revenue-generating solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Development Inquiry"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Start Your SaaS Project
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Development</h3>
            <p className="text-gray-600">Fast-track your SaaS development with our agile methodology and modern tech stack.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Revenue Focused</h3>
            <p className="text-gray-600">Build products that generate revenue from day one with proven monetization strategies.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Architecture</h3>
            <p className="text-gray-600">Future-proof your SaaS with scalable infrastructure that grows with your business.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Build Your Micro SaaS?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let&apos;s discuss your idea and create a custom solution that drives real business value.
          </p>
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Consultation"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}