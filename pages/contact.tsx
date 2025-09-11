<<<<<<< HEAD


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

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import React from "react";
import Layout from "../components/Layout";
=======
import React from 'react';

=======



=======
import Head from 'next/head';
import { useState } from 'react';
import { ContactInfo } from '../types';


=======
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import Layout from '../components/Layout';
=======
import React from "react";
import Layout from "../components/Layout";
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20

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

=======
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
