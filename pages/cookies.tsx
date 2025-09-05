import React from 'react';
import { 
  Eye,
  Lock,
  Globe,
  Users
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const cookieTypes = [
  {
    name: "Essential Cookies",
  }
];

const cookieDetails = [
  {
    duration: "Session",
    provider: "Zion Tech Group"
  }
];

export default function CookiesPage() {
  return (
    <MainLayout 
      title="Cookie Policy - Zion Tech Group"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Learn about how we use cookies to improve your experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#cookie-types"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Learn About Cookies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/privacy"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
}