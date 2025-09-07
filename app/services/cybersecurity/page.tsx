import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Cybersecurity - Zion Tech Group',
  description: 'Professional cybersecurity solutions for your business needs.',
<<<<<<< HEAD

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
};

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
<<<<<<< HEAD

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cybersecurity Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions to protect your business from evolving threats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Threat Detection</h3>
            <p className="text-gray-300">
              Advanced threat detection and response systems to identify and neutralize cyber threats.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Security Audits</h3>
            <p className="text-gray-300">
              Comprehensive security assessments to identify vulnerabilities and strengthen your defenses.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Compliance Management</h3>
            <p className="text-gray-300">
              Ensure compliance with industry standards and regulations for data protection.
            </p>
<<<<<<< HEAD
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
          </div>
        </div>
      </div>
    </div>
  );
}