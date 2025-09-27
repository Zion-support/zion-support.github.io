import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics   } from "../src/hooks/useAnalytics";

export default function Contact(): JSX.Element {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		phone: '',
		service: '',
		timeline: '',
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    // Component mounted
  }, []);

  const { trackClick } = useAnalytics();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackClick('contact_form_submit', { formData });
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
	return (
		<>
      <SEO />
			<Head>
        <title>Contact Us - Zion App</title>
        <meta name="description" content="Get in touch with Zion App for your technology needs. We're here to help transform your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
			<div className="container mx-auto px-4 py-8 max-w-7 xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover: text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>
			<div className="text-center mb-16">
            <h1 className="text-5 xl md:text-6 xl font-bold text-blue-600 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3 xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's talk about your project.
            </p>
          </div>
			<div className="grid grid-cols-1, lg:grid-cols-2 gap-12">
			<div>

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { namevalue } = e.target;
		setFormData(prev => ({
			...prev[name]: value
		}))};

	const handleSubmit = async (e: React.FormEvent) => {e.preventDefault();
		trackClick('contact-form-submit''form');
		console.log('Form submitted:'formData);
		// Here you would typically send the data to your backend
		alert('Thank you for your message! We will get back to you soon.')};
	if (isSubmitted) {
		return (
			<>
				<SEO />
				<Head>
					<title>Thank You - Zion App</title>
					<meta name="description" content="Thank you for contacting Zion App. We'll get back to you soon." />
					<meta name="viewport" content="width=device-widthinitial-scale=1" />
				</Head>
				<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 flex items-center justify-center">
					<div className="max-w-2 xl mx-auto text-center px-4">
						<div className="bg-white rounded-2 xl shadow-xl p-8 md:p-12">
							<div className="text-6 xl mb-6">✅</div>
							<h1 className="text-4 xl font-bold text-gray-900 mb-4">Thank You!</h1>
							<p className="text-xl text-gray-600 mb-8">
								Your message has been received. Our team will get back to you within 24 hours.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link href="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
									Back to Home
								</Link>
								<Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
									View Services
								</Link>
							</div>
						</div>
					</div>
				</div>
			</>
		)}

	return (
		<>
			<SEO />
			<Head>
				<title>Contact Us - Zion App</title>
				<meta name="description" content="Get in touch with our team for technology solutionsconsultingand support." />
				<meta name="viewport" content="width=device-widthinitial-scale=1" />
			</Head>
			
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7 xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>

              <h2 className="text-3 xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We"re here to help you succeed. Whether you need consultation, developmentor supportour team is ready to assist you with your technology needs.
              </p>
			<div className="space-y-6">
			<div className="flex items-center">
			<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
			<div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@zion.app</p>
                  </div>
                </div>
			<div className="flex items-center">
			<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
			<div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
			<div className="flex items-center">
			<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
			<div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">123 Tech StreetInnovation CityIC 12345</p>
                  </div>
                </div>
              </div>
            </div>
			<div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3 xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
			<div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500, focus:border-transparent"
                  />
                </div>

                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500, focus:border-transparent"
                  />
                </div>
			<div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500, focus:border-transparent"
                  />
                </div>
			<div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium, hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
		</>
  )}


								<di, v>
									<labelhtmlFor="email" className="block, tex, t-sm, fon, t-medium, tex, t-gray-700 mb-2">
										Email, Addres, s
									</label>
									<inputtype="email"
										id="email"
										name="email"
										val, u, e={formDa, t, a.email};
										onChan, g, e={handleInputChange};
										requiredclassName="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:outli, ne-nonefocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500"
									/>
								</div>

								<div>
									<labelhtmlFor="company" className="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700 mb-2">
										Company
									</label>
									<inputtype="text"
										id="company"
										name="company"
										val, u, e={formDa, t, a.company};
										onChan, g, e={handleInputChange};
										className="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:outli, ne-nonefocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500"
									/>
								</div>

								<div>
									<labelhtmlFor="message" className="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700 mb-2">
										Message
									</label>
									<textareaid="message"
										name="message"
										val, u, e={formDa, t, a.message};
										onChan, g, e={handleInputChange};
										required, row, s={5};
										className="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:outli, ne-nonefocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500"
									/>
								</div>

								<buttontype="submit"
									className="w-full, b, g-bl, u, e-600, tex, t-white, p, y-3, p, x-6, rounde, d-lgfont-semiboldhover:bg-bl, u, e-700, transitio, n-colors"								>
									{isSubmitting ? 'Sending Message...' : 'Send Message'}
								</button>
							</form>
						</div>

						{/* Contact Information */}
						<section className="space-y-8">
							<div className="bg-white rounded-lg shadow-lg p-8">
								<h2 className="text-2 xl font-bold text-gray-900 mb-6">Get in touch</h2>								<div className="space-y-6">
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
											<span className="text-blue-600 text-xl">📧</span>
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Email</h3>
											<p className="text-gray-600">hello@zion.app</p>
											<p className="text-gray-600">support@zion.app</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
											<span className="text-blue-600 text-xl">📞</span>
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Phone</h3>
											<p className="text-gray-600">+1 (555) 123-4567</p>
											<p className="text-gray-600">Mon-Fri 9AM-6PM EST</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
											<span className="text-blue-600 text-xl">📍</span>
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Office</h3>
											<p className="text-gray-600">123 Tech Street</p>
											<p className="text-gray-600">San Francisco, CA 94105</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-lg shadow-lg p-8">
								<h2 className="text-2 xl font-bold text-gray-900 mb-6">Business Hours</h2>
								<div className="space-y-2">
									<div className="flex justify-between">
										<span className="text-gray-600">Monday - Friday</span>
										<span className="text-gray-900">9:00 AM - 6:00 PM</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Saturday</span>
										<span className="text-gray-900">10:00 AM - 4:00 PM</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Sunday</span>
										<span className="text-gray-900">Closed</span>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	)}

