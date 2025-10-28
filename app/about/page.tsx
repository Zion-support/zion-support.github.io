<<<<<<< HEAD
=======
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
>>>>>>> 9d27805b410bab1ceb410b64b65ce66c1275b73a

export const metadata = {
  title: 'About | Zion Tech Group',
  description: 'Professional about services by Zion Tech Group. Advanced AI and technology solutions.',
  keywords: 'about, technology, services, AI, automation',
  openGraph: {
    title: 'About | Zion Tech Group',
    description: 'Professional about services by Zion Tech Group.',
    type: 'website',
  },
};

function AboutPage() {
  return (
<<<<<<< HEAD
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              efficiency, and innovation in the digital age.
=======
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering the future of technology with cutting-edge AI solutions, 
              cloud infrastructure, and innovative software development services.
>>>>>>> 9d27805b410bab1ceb410b64b65ce66c1275b73a
            </p>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">I</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">We constantly push the boundaries of technology to deliver cutting-edge solutions.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">C</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">We work closely with our clients to understand their unique needs and challenges.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">We are committed to delivering the highest quality solutions and services.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">I</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">We conduct business with honesty, transparency, and ethical practices.</p>
            </div>
          </div>
=======
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To empower businesses with transformative technology solutions that drive 
              innovation, efficiency, and growth in the digital age.
            </p>
          </div>
>>>>>>> 9d27805b410bab1ceb410b64b65ce66c1275b73a
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
=======
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our technology solutions can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
>>>>>>> 9d27805b410bab1ceb410b64b65ce66c1275b73a
          </Link>
        </div>
      </section>
    </div>
  );
}

<<<<<<< HEAD
  return (
    <ErrorBoundary>
      <AboutPage {...props} />
    </ErrorBoundary>
  );
=======
export default Page;
>>>>>>> 9d27805b410bab1ceb410b64b65ce66c1275b73a
