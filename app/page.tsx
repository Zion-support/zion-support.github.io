import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
}

function Card({ title, href, description, bullets = [], icon }: CardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-1">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <span className="text-blue-600 font-medium text-sm hover:text-blue-800">
          Learn more →
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading AI & Technology Solutions for a Smarter Future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="AI Solutions"
              href="/ai-services"
              description="Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing."
              icon="🤖"
              bullets={['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics']}
            />
            <Card
              title="IT Services"
              href="/it-services"
              description="Comprehensive IT services and infrastructure management. Keep your systems running smoothly and securely."
              icon="💻"
              bullets={['System Administration', 'Network Security', 'Cloud Migration', '24/7 Support']}
            />
            <Card
              title="Micro SaaS"
              href="/micro-saas"
              description="Scalable micro SaaS solutions to streamline your business processes and improve efficiency."
              icon="🚀"
              bullets={['Custom Development', 'API Integration', 'Automation', 'Scalable Architecture']}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Rapid development and deployment with agile methodologies</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security and 99.9% uptime guarantee</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored solutions that fit your specific business needs</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
<<<<<<< HEAD
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help you achieve your technology goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Email Us
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
=======
      <section className="py-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a custom solution that drives real business value. 
            Our team has delivered 1000+ successful projects across various industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
          </div>
        </div>
      </section>
    </main>
  )
}