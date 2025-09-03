import type { NextPage } from 'next';
import Link from 'next/link';
import { Brain, Cloud, Shield, ArrowRight } from 'lucide-react';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Zion Tech Group</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            AI, Cloud and Security services that deliver measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-4">
            <Link href="/services"><span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg">Our Services</span></Link>
            <Link href="/contact"><span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">Get in Touch</span></Link>
          </div>
          <p className="text-sm text-blue-100">Call +1 302 464 0950 • Email kleber@ziontechgroup.com</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[{t:'AI-Driven Innovation',d:'Agents, copilots and predictive systems.',i:Brain},{t:'Cloud-Native Scale',d:'AWS, Azure, GCP with FinOps.',i:Cloud},{t:'Enterprise Security',d:'Zero-trust with continuous compliance.',i:Shield}].map((f,idx)=> (
            <div key={idx} className="text-center p-8 bg-white rounded-lg shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <f.i className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{f.t}</h3>
              <p className="text-gray-600">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Book a free consultation today.</p>
          <Link href="/contact"><span className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </span></Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

