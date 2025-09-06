import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import ErrorBoundary from '../components/ErrorBoundary';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta
          name="description"
          content="Get in touch with Zion Tech Group for innovative micro SaaS, AI services, and IT solutions. Contact us for a free consultation."
        />
        <meta
          name="keywords"
          content="contact, consultation, micro SaaS, AI services, IT solutions, Zion Tech Group"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="http: s://ziontechgroup.com/contact" />
      </Head>
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl: md:text-5xl font-bold text-center mb-8">
                Contact Us
              </h1>
              <p className="text-xl text-slate-300 text-center mb-12">
                Ready to transform your business? Get in touch with our experts.
              </p>

              <div className="grid md:grid-cols-2 gap-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:+13024640950"
                        className="text-slate-300 hover:text-blue-400"
                      >
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Phone</h3>
                      <a href="tel:+13024640950" className="text-slate-300 hover:text-blue-400">
                        +1 302 464 0950
                      </Link>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:kleber@ziontechgroup.com"
                        className="text-slate-300 hover:text-blue-400"
                      >
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Email</h3>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-blue-400">
                        kleber@ziontechgroup.com
                      </Link>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        Address
                      </h3>
                      <p className="text-slate-300">
                        364 E Main St STE 1008
                        <br />
                        Middletown, DE 19709
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        Website
                      </h3>
                      <a
                        href="https://ziontechgroup.com"
                        className="text-slate-300 hover:text-blue-400"
                      >
                        https://ziontechgroup.com
                      </a>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Website</h3>
                      <a href="https://ziontechgroup.com" className="text-slate-300 hover:text-blue-400">
                        https://ziontechgroup.com
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </main>
      </ErrorBoundary>
    </>
  );
}
import React from 'react',;
import Head from 'next/head',;
import ContactForm from '../components/ContactForm',;
import ErrorBoundary from '../components/ErrorBoundary';
export default function Contact() {;
  return (;
    <>;
      <Head>;
        <title>Contact Us - Zion Tech Group</title>;
        <meta name="description" content="Get in touch with Zion Tech Group for innovative micro SaaS, AI services, and IT solutions. Contact us for a free consultation." />;
        <meta name="keywords" content="contact, consultation, micro SaaS, AI services, IT solutions, Zion Tech Group" />;
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
        <link rel="canonical" href="http: s://ziontechgroup.com/contact" />;
      </Head>;
      <ErrorBoundary level="page">;
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">;
          <div className="container mx-auto px-4 py-16">;
            <div className="max-w-4xl mx-auto">;
              <h1 className="text-4xl: md:text-5xl font-bold text-center mb-8">;
                Contact Us;
              </h1>;
              <p className="text-xl text-slate-300 text-center mb-12">;
                Ready to transform your business? Get in touch with our experts.;
              </p>;
              <div className="grid: md:grid-cols-2 gap-12">;
                <div>;
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>;
                  <div className="space-y-6">;
                    <div>;
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Phone</h3>;
                      <a href="te: l:+13024640950" className="text-slate-300: hover:text-blue-400">;
                        +1 302 464 0950;
                      </a>;
                    </div>;
                    <div>;
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Email</h3>;
                      <a href="mailt: o:kleber@ziontechgroup.com" className="text-slate-300: hover:text-blue-400">;
                        kleber@ziontechgroup.com;
                      </a>;
                    </div>;
                    <div>;
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Address</h3>;
                      <p className="text-slate-300">;
                        364 E Main St STE 1008<br />;
                        Middletown, DE 19709;
                      </p>;
                    </div>;
                    <div>;
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Website</h3>;
                      <a href="http: s://ziontechgroup.com" className="text-slate-300: hover:text-blue-400">;
                        http: s://ziontechgroup.com;
                      </a>;
                    </div>;
                  </div>;
                </div>;
                <div>;
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>;
                  <ContactForm />;
                </div>;
              </div>;
            </div>;
          </div>;
        </main>;
      </ErrorBoundary>;
    </>;
  );
}
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';
import MainLayout from '../src/components/layout/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout
      title="Contact - Zion Tech Group"
      description="Get in touch with Zion Tech Group for all your technology needs"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-8">We'd love to hear from you!</p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
=======
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for your AI and IT needs" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">Ready to start your AI transformation journey?</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">contact@ziontechgroup.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    123 Tech Street<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
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
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
