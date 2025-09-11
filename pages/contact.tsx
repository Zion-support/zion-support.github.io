

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

import React from "react";
import Layout from "../components/Layout";

import React from 'react';

import Head from 'next/head';
import { useState } from 'react';
import { ContactInfo } from '../types';

import React from 'react';
import Layout from '../components/Layout';

import React from "react";
import Layout from "../components/Layout";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		message: ''
	})
	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Here you would typically send the form data to your backend
		console.log('Form submitted:', formData)
		setIsSubmitted(true)
		// Reset form after submission
		setTimeout(() => {
			setIsSubmitted(false)
			setFormData({ name: '', email: '', company: '', message: '' })
		}, 3000)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

import React from "react";
import Layout from "../components/Layout";

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

            </p>
          </div>
          <Link href="/services" className="btn-secondary">
            Explore Our Services
          </Link>
        </main>
      </div>
    </>
  );

}

import Head from 'next/head';

						{/* Contact Information */}
						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
										<Mail className="h-6 w-6 text-blue-600" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
										<p className="text-gray-600">kleber@ziontechgroup.com</p>
										<p className="text-sm text-gray-500">We typically respond within 24 hours</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
										<Phone className="h-6 w-6 text-green-600" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
										<p className="text-gray-600">+1 302 464 0950</p>
										<p className="text-sm text-gray-500">Monday - Friday, 9 AM - 6 PM EST</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
										<MapPin className="h-6 w-6 text-purple-600" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
										<p className="text-gray-600">364 E Main St STE 1008</p>
										<p className="text-gray-600">Middletown, DE 19709</p>
									</div>
								</div>
							</div>

							{/* Additional Info */}
							<div className="mt-8 p-6 bg-gray-50 rounded-lg">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
								<p className="text-gray-600 mb-4">
									Schedule a consultation to discuss your technology needs and explore how our solutions can drive your business forward.
								</p>
								<Link
									to="/services"
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
								>
									Explore Our Services →
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

                <div>
                  <h2 className='text-2xl font-bold mb-6'>Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>

}

import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

export default function ContactPage() {
  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <SEO title="Contact | Zion Tech Group" description="Get in touch for quotes, demos, and technical guidance." canonical="https://ziontechgroup.com/contact/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Contact Us</h1>
        <p className="text-gray-300 mb-8">We usually respond within one business day. For urgent requests, please call.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 bg-black/40 border border-gray-700/60 rounded-xl">
              <h2 className="text-xl font-semibold mb-3">Request a Quote or Demo</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg" placeholder="Name" />
                  <input className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg" placeholder="Email" />
                </div>
                <input className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg" placeholder="Company" />
                <textarea className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg h-32" placeholder="How can we help?" />
                <button type="submit" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">Send</button>
              </form>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-black/40 border border-gray-700/60 rounded-xl">
              <h3 className="font-semibold mb-2">Contact Details</h3>
              <div className="text-gray-300 space-y-2">
                <div>Mobile: <a href={`tel:${contact.mobile}`} className="text-cyan-300">{contact.mobile}</a></div>
                <div>Email: <a href={`mailto:${contact.email}`} className="text-cyan-300">{contact.email}</a></div>
                <div className="text-sm">Address: {contact.address}</div>
              </div>
            </div>
            <div className="p-6 bg-black/40 border border-gray-700/60 rounded-xl">
              <h3 className="font-semibold mb-2">Sales</h3>
              <p className="text-gray-300 text-sm">For pricing and bundles, see <a href="/pricing" className="text-cyan-300">Pricing</a> and <a href="/market-pricing" className="text-cyan-300">Market Pricing</a>.</p>

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

    </>

  );

}

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

    </UltraFuturisticBackground>
  );
}

