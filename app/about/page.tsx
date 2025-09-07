<<<<<<< HEAD
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
=======
import React from 'react';
import { Award, Users, Target, Globe, CheckCircle, Star } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Pioneering the Future of Technology Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600">
                To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-600">
                  To be the leading provider of AI-powered technology solutions, transforming how businesses operate in the digital age.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We deliver exceptional results through innovative solutions, expert guidance, and unwavering commitment to quality.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact</h3>
                <p className="text-gray-600">
                  Creating positive change through technology that makes businesses more efficient, secure, and successful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Founded with a vision to revolutionize how businesses leverage technology, Zion Tech Group has grown from a small startup to a leading provider of AI-powered solutions. Our journey began with a simple belief: technology should empower, not complicate.
              </p>
              
              <p className="text-xl text-gray-600 mb-8">
                Over the years, we've helped hundreds of businesses across various industries transform their operations through innovative AI services, cloud solutions, and cybersecurity expertise. Our team of certified professionals brings together decades of experience in cutting-edge technologies.
              </p>
              
              <p className="text-xl text-gray-600 mb-8">
                Today, we continue to push the boundaries of what's possible, developing custom solutions that address real-world challenges and drive measurable results for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest ethical standards in all our interactions and business practices.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We continuously explore new technologies and approaches to deliver cutting-edge solutions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Collaboration</h3>
                <p className="text-gray-600">
                  We work closely with our clients as partners, ensuring their success is our success.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every project, delivering results that exceed expectations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Responsibility</h3>
                <p className="text-gray-600">
                  We take responsibility for our impact on society and the environment.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Focus</h3>
                <p className="text-gray-600">
                  We maintain laser focus on delivering value and solving real business problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Team
              </h2>
              <p className="text-xl text-gray-600">
                Meet the experts behind our success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI Specialists</h3>
                <p className="text-gray-600">Machine learning engineers and data scientists</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-green-400 to-green-600 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Architects</h3>
                <p className="text-gray-600">Certified cloud solution architects</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Globe className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Security Experts</h3>
                <p className="text-gray-600">Cybersecurity and compliance specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-10ab
            >
              Get In Touch
            </a>
            <a 
              href="/services" 
<<<<<<< HEAD
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
=======
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-10ab
