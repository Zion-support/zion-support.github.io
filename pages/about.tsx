import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring emerging technologies to deliver cutting-edge solutions.",
      icon: "🚀"
    },
    {
      title: "Excellence",
      description: "Every project we undertake is executed with the highest standards of quality and attention to detail.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnership, working closely with our clients to achieve shared success.",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "Trust is the foundation of our relationships. We operate with complete transparency and ethical practices.",
      icon: "🔒"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to technological innovation." />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">Zion Tech Group</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/services" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link href="/about" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/contact" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-16">
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              About Zion Tech Group
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to transforming businesses 
              through innovative solutions and cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with next-generation technology solutions that drive innovation, 
                  enhance security, and accelerate digital transformation.
                </p>
                <p className="text-lg text-gray-300">
                  We believe that technology should be an enabler, not a barrier. Our solutions are designed 
                  to be intuitive, scalable, and future-proof, helping our clients stay ahead of the curve 
                  in an ever-evolving digital landscape.
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="text-8xl text-center">🎯</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-lg text-gray-300">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how we can help transform your business with cutting-edge technology.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
              <p className="mt-4 text-gray-300">
                Leading the way in technological innovation and digital transformation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/services" className="hover:text-white">AI Solutions</Link></li>
                <li><Link href="/services" className="hover:text-white">Quantum Computing</Link></li>
                <li><Link href="/services" className="hover:text-white">Cybersecurity</Link></li>
                <li><Link href="/services" className="hover:text-white">Cloud Infrastructure</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-center text-gray-400">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}