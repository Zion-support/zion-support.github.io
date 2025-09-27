import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Contact(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackClick('contact_form_submit', { formData });
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
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

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}))};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 2000));
		
		trackClick('contact-form-submit', 'conversion');
		setIsSubmitted(true);
		setIsSubmitting(false)};

	if (isSubmitted) {
		return (
			<>
				<SEO />
				<Head>
					<title>Thank You - Zion App</title>
					<meta name="description" content="Thank you for contacting Zion App. We'll get back to you soon." />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
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


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3 xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to help you succeed. Whether you need consultation, development, or support, 
                our team is ready to assist you with your technology needs.
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
                    <p className="text-gray-600">123 Tech Street, Innovation City, IC 12345</p>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>


                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )}

								<d, i, v>
									<label, htmlFo, r="messa, g, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
										Messa, g, e
									</lab, e, l>
									<textarea, i, d="messa, g, e"
										na, m, e="messa, g, e"
										val, u, e={formDa, t, a.messa, g, e};
										onChan, g, e={handleInputChan, g, e};
										required, row, s={5};
										classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s:outli, n, e-none, focu, s:ri, n, g-2, focu, s:ri, n, g-bl, u, e-5, 0, 0"
									/>
								</d, i, v>

								<button, typ, e="subm, i, t"
									classNa, m, e="w-full, b, g-bl, u, e-600, tex, t-white, p, y-3, p, x-6, rounde, d-lg, fon, t-semibold, hover:bg-bl, u, e-700, transitio, n-colo, r, s"								>
									{isSubmitting ? 'Sending Message...' : 'Send Message'}
								</button>
							</form>
						</div>

						{/* Contact Information */}
						<div className="space-y-8">
							<div className="bg-white rounded-2 xl shadow-xl p-8">
								<h2 className="text-3 xl font-bold text-gray-900 mb-6">Contact Information</h2>
								<div className="space-y-6">
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

									<div, classNam, e="flex, item, s-cent, e, r">
										<div, classNam, e="w-1, 2, h-12, b, g-bl, u, e-100, rounde, d-lg, flex, items-center, justif, y-center, m, r-4">
											<span, classNam, e="te, x, t-bl, u, e-600, tex, t-xl">📞</sp, a, n>
										</d, i, v>
										<d, i, v>
											<p, classNam, e="fo, n, t-semibold, tex, t-gr, a, y-9, 0, 0">Pho, n, e</p>
											<p, classNam, e="te, x, t-gr, a, y-6, 0, 0">+1 (5, 5, 5) 1, 2, 3-45, 6, 7</p>
										</d, i, v>
									</d, i, v>

									<div, classNam, e="flex, item, s-cent, e, r">
										<div, classNam, e="w-1, 2, h-12, b, g-bl, u, e-100, rounde, d-lg, flex, items-center, justif, y-center, m, r-4">
											<span, classNam, e="te, x, t-bl, u, e-600, tex, t-xl">📍</sp, a, n>
										</d, i, v>
										<d, i, v>
											<p, classNam, e="fo, n, t-semibold, tex, t-gr, a, y-9, 0, 0">Addre, s, s</p>
											<p, classNam, e="te, x, t-gr, a, y-6, 0, 0">123, Tech, Street, Innovation, Cit, y, IC, 1234, 5</p>
										</d, i, v>
									</d, i, v>
								</d, i, v>
							</d, i, v>

							<div, classNam, e="bg-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, rounde, d-2x, l, p-8, tex, t-whi, t, e">
								<h3, classNam, e="te, x, t-xl, fon, t-bold, m, b-4">Ready, to, get start, e, d?</h3>
								<p, classNam, e="mb-6, opacit, y-90">
									Schedule, a, free consultation, to, discuss your, project, needs.
								</p>
								<button, onClic, k={() => trackCli, c, k('schedu, l, e-consultati, o, n', 'c, t, a')};
									classNa, m, e="bg-white, tex, t-bl, u, e-600, p, x-6, p, y-3, rounde, d-lg, fon, t-semibold, hover:bg-gr, a, y-100, transitio, n-colo, r, s"
								>
									Schedule, Consultatio, n
								</butt, o, n>
							</d, i, v>
						</d, i, v>
					</d, i, v>
				</d, i, v>
			</d, i, v>		</>
	)}

