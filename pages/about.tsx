import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>About Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of micro SaaS products, AI services, and IT solutions. Discover our mission, values, and commitment to innovation." />
        <meta name="keywords" content="about zion tech group, technology company, micro SaaS, AI services, IT solutions, company mission" />
        <link rel="canonical" href={`${contact.site}/about`} />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Pioneering the Future of Technology Solutions
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              We are a leading technology company dedicated to delivering innovative micro SaaS products, 
              advanced AI services, and comprehensive IT solutions that help businesses scale efficiently and securely.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10">
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h2>
                <p className="text-lg text-slate-300 mb-4">
                  To empower businesses with cutting-edge technology solutions that drive growth, 
                  efficiency, and innovation. We believe in making advanced technology accessible 
                  and practical for organizations of all sizes.
                </p>
                <p className="text-slate-400">
                  Our mission is to bridge the gap between complex technology and practical business needs, 
                  delivering solutions that are both powerful and easy to use.
                </p>
              </div>

              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10">
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Vision</h2>
                <p className="text-lg text-slate-300 mb-4">
                  To be the world's leading provider of innovative technology solutions, 
                  recognized for our commitment to excellence, innovation, and customer success.
                </p>
                <p className="text-slate-400">
                  We envision a future where technology seamlessly integrates with business operations, 
                  enabling organizations to achieve their full potential through intelligent, 
                  scalable, and secure solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4 bg-slate-900/60">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-slate-300">
                  We constantly push the boundaries of what's possible, 
                  developing cutting-edge solutions that set new industry standards.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Partnership</h3>
                <p className="text-slate-300">
                  We work closely with our clients as trusted partners, 
                  understanding their unique needs and delivering tailored solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Security</h3>
                <p className="text-slate-300">
                  Security is at the core of everything we do, 
                  ensuring our solutions protect your data and maintain compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Expertise</h3>
                <p className="text-slate-300 mb-4">
                  Our team consists of highly skilled professionals with extensive experience in 
                  AI, machine learning, cloud computing, cybersecurity, and software development.
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>• 10+ years average experience</li>
                  <li>• Certified in leading technologies</li>
                  <li>• Continuous learning and development</li>
                  <li>• Industry-recognized expertise</li>
                </ul>
              </div>

              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Commitment</h3>
                <p className="text-slate-300 mb-4">
                  We are committed to delivering exceptional results and maintaining the highest 
                  standards of quality, security, and customer satisfaction.
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>• 99.9% uptime guarantee</li>
                  <li>• 24/7 support and monitoring</li>
                  <li>• Regular updates and improvements</li>
                  <li>• Transparent communication</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-slate-900/60">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get In Touch
              </Link>
              <Link 
                href="/services"
                className="border-2 border-blue-600 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}