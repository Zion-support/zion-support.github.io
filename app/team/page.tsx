import Navigation from '../components/Navigation'
import Footer from '../components/Footer.tsx'

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
            <p className="text-xl text-gray-600 mb-8">
              Meet the experts behind our innovative solutions.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h2>
              <p className="text-gray-600 mb-6">
                Our team consists of experienced professionals in AI, cloud computing, 
                cybersecurity, and software development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-gray-900">AI Specialists</h3>
                  <p className="text-gray-600">Machine Learning & AI Experts</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-gray-900">Cloud Engineers</h3>
                  <p className="text-gray-600">Cloud Infrastructure & DevOps</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-gray-900">Security Experts</h3>
                  <p className="text-gray-600">Cybersecurity & Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
