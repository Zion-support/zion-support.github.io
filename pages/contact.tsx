import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: ''
    email: ''
    company: '';
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us | Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for innovative micro SaaS, AI services, and IT solutions." />
      </Head>
      <ErrorBoundary level="page">
        <main className=" min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className=" container mx-auto px-4 py-16">
            <div className=" max-w-4xl mx-auto">
              <h1 className=" text-4xl md:text-5xl font-bold text-center mb-8">
                Contact Us
              </h1>
              <p className=" text-xl text-slate-300 text-center mb-12">
                Ready to transform your business? Get in touch with our experts.
              </p>
              <div className=" grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className=" text-2xl font-bold mb-6">Get In Touch</h2>
                  <div className=" space-y-6">
                    <div>
                      <h3 className=" text-lg font-semibold text-blue-400 mb-2">Phone</h3>
                      <a href="tel:+13024640950" className=" text-slate-300 hover:text-blue-400">
                        +1 302 464 0950
                      </a>
                    </div>
                    <div>
                      <h3 className=" text-lg font-semibold text-blue-400 mb-2">Email</h3>
                      <a href="mailto:kleber@ziontechgroup.com" className=" text-slate-300 hover:text-blue-400">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div>
                      <h3 className=" text-lg font-semibold text-blue-400 mb-2">Address</h3>
                      <p className=" text-slate-300">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                    <div>
                      <h3 className=" text-lg font-semibold text-blue-400 mb-2">Website</h3>
                      <a href="https://ziontechgroup.com" className=" text-slate-300 hover:text-blue-400">
                        https://ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className=" text-2xl font-bold mb-6">Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}