import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Zion Tech Group
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Zion Tech Group is a leading technology company specializing in artificial intelligence, 
              micro SaaS solutions, and comprehensive IT services. We help businesses transform and 
              scale through innovative technology solutions.
            </p>
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-8">
              To empower businesses with cutting-edge AI solutions, innovative micro SaaS products, 
              and reliable IT services that drive growth, efficiency, and competitive advantage in 
              the digital age.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">AI Solutions</h3>
                <p className="text-gray-600">
                  Advanced artificial intelligence and machine learning solutions tailored to your business needs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Micro SaaS</h3>
                <p className="text-gray-600">
                  Innovative software-as-a-service products designed to solve specific business challenges.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">IT Services</h3>
                <p className="text-gray-600">
                  Comprehensive IT support, infrastructure management, and technology consulting services.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> +1 302 464 0950
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> kleber@ziontechgroup.com
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}