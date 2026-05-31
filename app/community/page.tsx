// Developer Community
import Link from 'next/link';

export const metadata = {
  title: 'Developer Community | Zion Tech Group',
  description: 'Join 50,000+ developers and AI practitioners. Share knowledge, get support, and collaborate on projects.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Developer Community</h1>
          <p className="text-xl text-gray-400 mb-8">Join 50,000+ developers and AI practitioners. Share knowledge, get support, and collaborate on projects.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">🚀 Key Features</h3>
              <ul className="text-left text-gray-400 space-y-2">
                <li>• AI-powered intelligence</li>
                <li>• Real-time analytics</li>
                <li>• Enterprise security</li>
                <li>• 24/7 support</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">💡 Benefits</h3>
              <ul className="text-left text-gray-400 space-y-2">
                <li>• Save time and resources</li>
                <li>• Increase productivity</li>
                <li>• Reduce costs</li>
                <li>• Scale effortlessly</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/contact" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition">Request a Demo</Link>
            <Link href="/services" className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition">Browse All Services</Link>
          </div>
        </div>
        <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-800/50 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="text-gray-300">📞 +1 302 464 0950</span>
            <span className="text-gray-300">✉️ kleber@ziontechgroup.com</span>
            <span className="text-gray-300">📍 364 E Main St STE 1008, Middletown DE 19709</span>
          </div>
        </div>
      </div>
    </div>
  );
}
