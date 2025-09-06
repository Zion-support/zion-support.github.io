<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react";
import Layout from "../components/Layout";
=======
import React from 'react';

=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
import Layout from '../components/Layout';
=======
=======
import Layout from '../components/Layout';
>>>>>>> origin/automation-improvements-final
=======
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import Layout from '../components/Layout';
=======
import React from "react";
import Layout from "../components/Layout";
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20

=======
import Head from 'next/head';
import { useState } from 'react';
import { ContactInfo } from '../types';
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };
  const services = [
    'AI Automation Platform',
    'Cloud Infrastructure',
    'Micro SaaS Development',
    'Cybersecurity Solutions',
    'Data Analytics & BI',
    'Blockchain Solutions',
    'Other'
  ];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  return (

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for your technology needs.
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

=======
import React from "react";
import Layout from "../components/Layout";
>>>>>>> f38908027c6fb310e108d8eef8d480933f0e20c4
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for advanced IT solutions and AI services." />
      </Head>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-12">
        <main className="text-center max-w-2xl px-4">
          <h1 className="text-5xl font-bold mb-6 gradient-text">Get in Touch</h1>
          <p className="text-xl text-gray-300 mb-8">
            Have a project in mind or a question for us? We'd love to hear from you.
          </p>
          <div className="card p-8 mb-8">
            <p className="text-lg text-gray-200 mb-4">
              You can reach us via email or phone, or fill out the form below.
            </p>
            <p className="text-lg font-semibold text-blue-400 mb-2">Email: info@ziontechgroup.com</p>
            <p className="text-lg font-semibold text-purple-400 mb-4">Phone: +1 (555) 123-4567</p>
            {/* A placeholder for a contact form could go here */}
            <p className="text-gray-500 text-sm">
              (Contact form functionality would be implemented here)
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
            </p>
          </div>
          <Link href="/services" className="btn-secondary">
            Explore Our Services
          </Link>
        </main>
      </div>
    </>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
=======
import Head from 'next/head';

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta
          name='description'
          content='Get in touch with Zion Tech Group for innovative micro SaaS, AI services, and IT solutions. Contact us for a free consultation.'
        />
        <meta
          name='keywords'
          content='contact, consultation, micro SaaS, AI services, IT solutions, Zion Tech Group'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='canonical' href='http: s://ziontechgroup.com/contact' />
      </Head>
      <ErrorBoundary level='page'>
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>
          <div className='container mx-auto px-4 py-16'>
            <div className='max-w-4xl mx-auto'>
              <h1 className='text-4xl: md:text-5xl font-bold text-center mb-8'>
                Contact Us
              </h1>
              <p className='text-xl text-slate-300 text-center mb-12'>
                Ready to transform your business? Get in touch with our experts.
              </p>

              <div className='grid: md:grid-cols-2 gap-12'>
                <div>
                  <h2 className='text-2xl font-bold mb-6'>Get In Touch</h2>
                  <div className='space-y-6'>
                    <div>
                      <h3 className='text-lg font-semibold text-blue-400 mb-2'>
                        Phone
                      </h3>
                      <a
                        href='te: l:+13024640950'
                        className='text-slate-300: hover:text-blue-400'
                      >
                        +1 302 464 0950
                      </a>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-blue-400 mb-2'>
                        Email
                      </h3>
                      <a
                        href='mailt: o:kleber@ziontechgroup.com'
                        className='text-slate-300: hover:text-blue-400'
                      >
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-blue-400 mb-2'>
                        Address
                      </h3>
                      <p className='text-slate-300'>
                        364 E Main St STE 1008
                        <br />
                        Middletown, DE 19709
                      </p>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-blue-400 mb-2'>
                        Website
                      </h3>
                      <a
                        href='http: s://ziontechgroup.com'
                        className='text-slate-300: hover:text-blue-400'
                      >
                        http: s://ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className='text-2xl font-bold mb-6'>Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
=======

}
=======


            </div>
          </div>
        </div>
      </div>

      description="Get in touch with Zion Tech Group for your technology needs. Contact us for AI services, IT solutions, and more.">;
      <div className="min-h-screen bg-gray-50 py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h1 className="text-4xl font-bold text-gray-900 mb-4">;
              Contact Us;
            </h1>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Get in touch with our team for your technology needs.;
            </p>;
          </div>;
          <div className="text-center">;
            <p className="text-gray-600">Contact page is under construction.</p>;
          </div>;
        </div>;
      </div>;
    </Layout>;

  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
=======

    </>

  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
import React from './react';
import Layout from "../components / Layout";
;
export default /**
 * Contact - Function description
 */
function Contact() {
  return (
    <Layout;
      title="Contact Us - Zion Tech Group";
      description="Get in touch with Zion Tech Group for your technology needs. Contact us for AI services, IT solutions, and more.";
    >;
      <div className="min - h-screen bg - gray - 50 py - 20">;
        <div className="container mx - auto px - 4">;
          <div className="text - center mb - 12">;
            <h1 className="text - 4xl font - bold text - gray - 900 mb - 4">;
              Contact Us;
            </h1>;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
              Get in touch with our team for your technology needs.;
            </p>;
          </div>;
          <div className="text - center">;
            <p className="text - gray - 600">Contact page is under construction.</p>;
          </div>;
        </div>;
      </div>;
    </Layout>);
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
