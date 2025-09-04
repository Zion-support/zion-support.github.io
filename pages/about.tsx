import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud, and modern development services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600">
            Empower businesses with innovative technology that drives growth, efficiency, and competitive advantage.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Excellence', desc: 'We deliver solutions that exceed expectations.' },
              { title: 'Integrity', desc: 'We operate with honesty and transparency.' },
              { title: 'Innovation', desc: 'We embrace modern technologies to solve problems.' },
              { title: 'Collaboration', desc: 'We partner closely with clients for success.' }
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-lg p-8 shadow text-center">
                <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let’s discuss how we can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Get in Touch
            </Link>
            <Link href="/careers" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
