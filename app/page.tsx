import Link from 'next/link'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Leading provider of AI and technology solutions for modern businesses.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 mb-6">
            We offer comprehensive AI and IT solutions to help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-services" 
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
            >
              AI Services
            </Link>
            <Link 
              href="/it-services" 
              className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
            >
              IT Services
            </Link>
            <Link 
              href="/contact" 
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}