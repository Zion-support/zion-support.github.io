import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <Layout 
      title="Contact Us - Zion Tech Group"
      description="Get in touch with our team for your technology needs"
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Get in touch with our team for your technology needs
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
=======
import ContactForm from '../components/ContactForm';
import ErrorBoundary from '../components/ErrorBoundary';
export default function Contact () {
  return (<> <Head> <title>Contact Us - Zion Tech Group</title> </Head> <ErrorBoundary level="page"> <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"> <div className="container mx-auto px-4 py-16"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl: md:text-5xl font-bold text-center mb-8"> text-xl text-slate-300 text-center mb-12"> Ready to transform your business? Get in touch with our experts. </p> text-2xl font-bold mb-6" >Get In Touch</h2> <div className="space-y-6" > <div> text-lg font-semibold text-blue-400 mb-2">Email</h3> <a href=" mailto:kleber@ziontechgroup.com"className=" text-slate-300 hover:text-blue-400"> >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 kleber@ziontechgroup.com </Link> </div> <div> Middletown, DE 19709 text-lg font-semibold text-blue-400 mb-2" >Website</h3> <a href="https://ziontechgroup.com" className="text-slate-300 hover:text-blue-400" > https://ziontechgroup.com </Link> >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 </div> </div> </div> <div> <h2 className="text-2xl font-bold mb-6" >Send us a Message</h2> <ContactForm /> </div> </div> </div> </div> </main> </ErrorBoundary> </>);
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
}