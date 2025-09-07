export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>About Us</h1>
      <p>Learn about Zion Tech Group</p>
    </main>
  );
}
import React from 'react';
import { Metadata } from 'next';
export const metadata = {
<<<<<<< HEAD
  title: "About | Zion Tech Group",
  description: "Learn about Zion Tech Group's mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.",
=======
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
  description:
    "Learn about Zion Tech Group's mission to deliver enterprise-grade AI,micro SaaS,and IT solutions that drive real business results.",;
  title: "About | Zion Tech Group",
  description: "Learn about Zion Tech Group's mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.",
  description:
    "Learn about Zion Tech Group's mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.",
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
  description: "Learn about Zion Tech Group's mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.",
export const metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
  description:
    "Learn about Zion Tech Group's mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.",
import React from 'react';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'About Us - Zion Tech Group | Enterprise AI & IT Solutions',
  description: 'Learn about Zion Tech Group, a leading provider of micro SaaS products, AI services, and IT solutions. Discover our mission, values, and commitment to innovation.',
  keywords: 'about us, Zion Tech Group, company, mission, values, team, AI services, IT solutions, micro SaaS'
>>>>>>> 874273566b5ab11cb4989ad42a33c826f8981b98
};
export default function AboutPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
=======
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
>>>>>>> 874273566b5ab11cb4989ad42a33c826f8981b98
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
<<<<<<< HEAD
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions, micro SaaS development, and enterprise IT services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe in the power of technology to transform industries and create meaningful impact for our clients.
=======
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Pioneering the future of technology with innovative solutions that transform businesses and drive digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-slate-300 mb-6">
              To empower businesses with cutting-edge technology solutions that drive innovation, 
              efficiency, and growth. We believe in the transformative power of AI, cloud computing, 
              and modern software development to solve complex business challenges.
            </p>
            <p className="text-lg text-slate-300">
              Our mission is to make advanced technology accessible and practical for businesses 
              of all sizes, from startups to enterprise organizations.
>>>>>>> 874273566b5ab11cb4989ad42a33c826f8981b98
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
<<<<<<< HEAD
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">Innovation and Excellence</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">Client Success</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">Integrity and Trust</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">Continuous Learning</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Solutions</h3>
              <p className="text-gray-600">
                Custom AI implementations that solve real business problems and drive efficiency.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Micro SaaS</h3>
              <p className="text-gray-600">
                Scalable software solutions designed for rapid deployment and growth.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise IT</h3>
              <p className="text-gray-600">
                Comprehensive IT services to support your business infrastructure needs.
              </p>
            </div>
=======
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-slate-300 mb-6">
              To be the leading provider of micro SaaS products and AI services, creating a 
              world where technology seamlessly integrates with business operations to deliver 
              unprecedented value and efficiency.
            </p>
            <p className="text-lg text-slate-300">
              We envision a future where every business has access to enterprise-grade 
              technology solutions that are both powerful and easy to use.
            </p>
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with technology, always seeking new and better ways to solve problems.",
                icon: "💡"
              },
              {
                title: "Quality",
                description: "We deliver solutions that meet the highest standards of performance, reliability, and user experience.",
                icon: "⭐"
              },
              {
                title: "Partnership",
                description: "We work closely with our clients as partners, understanding their unique needs and challenges.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Work With Us?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our innovative solutions can help transform your business 
            and drive your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a 
              href="/services" 
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View Our Services
            </a>
>>>>>>> 874273566b5ab11cb4989ad42a33c826f8981b98
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
}
=======
  )
}
}
>>>>>>> 874273566b5ab11cb4989ad42a33c826f8981b98
