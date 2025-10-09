
export export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div>
          <div>
            <div>
              <Link href="/" className="text-2xl font-bold text-gray-900">Zion Tech Group</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600">Home</Link>
              <Link href="/services" className="text-gray-900 hover:text-blue-600">Services</Link>
              <Link href="/blog" className="text-gray-900 hover:text-blue-600">Blog</Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600">Contact</Link>
            </nav>
          </div>
        </div>
      </header>
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Business with<span className="block text-blue-200">AI-Powered Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
              and enterprise IT solutions that drive growth, efficiency, and innovation.
            </p>
            <div>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >Explore Our Services<Link className="w-5 h-5 ml-2" />
              </Link>
              <a href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />Call +1 302 464 0950</a>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600">We deliver measurable results through innovative AI solutions</p>
            </div>
            <div>
              <div>
                <div>
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
                <p className="text-gray-600">
                  Our AI solutions have delivered 300% ROI and 70% cost reduction for enterprise clients.
                </p>
              </div>
              <div>
                <div>
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
                <p className="text-gray-600">
                  Our team of AI experts and engineers brings decades of experience in enterprise transformation.
                </p>
              </div>
              <div>
                <div>
                  <Link className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Implementation</h3>
                <p className="text-gray-600">
                  Get your AI solutions up and running quickly with our streamlined implementation process.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our AI solutions can drive your success.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >Get Started Today<Link className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >View Our Blog<ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-6">Advanced AI and IT Solutions for Enterprise Transformation</p>
            <div>
              <Link href="/services" className="text-gray-400 hover:text-white">Services</Link>
              <Link href="/about" className="text-gray-400 hover:text-white">About</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link>
            </div>
            <div>
              <p className="text-gray-400 text-sm">
                © 2026 Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>);
}
export default HomePage