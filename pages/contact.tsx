import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from 'lucide-react'


function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: anyReact.FormEvent)  => {
		e.preventDefault()
		// Here you would typically send the form data to your backend
		console.log('Form submitted: any', formData)
		setIsSubmitted(true)
		// Reset form after submission
		setTimeout(()  => {
			setIsSubmitted(false)
			setFormData({ name: '', email: '', company: '', message: '' })
		}, 3000)
	}

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6"  />,
      title: "Phone",
      details: "+1 302 464 0950",
      link: "tel:+13024640950"
    },
    {
      icon: <Mail className="w-6 h-6"  />,
      title: "Email",
      details: "kleber@ziontechgroup.com",
      link: "mailto:kleber@ziontechgroup.com"
    },
    {
      icon: <MapPin className="w-6 h-6"  />,
      title: "Address",
      details: "364 E Main St STE 1008\nMiddletown, DE 19709",
      link: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
    },
    {
      icon: <Clock className="w-6 h-6"  />,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM",
      link: null
    }
  ]

			{/* Contact Form & Info */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-2">
						{/* Contact Form */}
						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
							{isSubmitted ? (
								<div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
									<CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
									<h3 className="text-lg font-semibold text-green-900 mb-2">Message Sent!</h3>
									<p className="text-green-700">Thank you for reaching out. We'll get back to you soon.</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
											Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											required
											value={formData.name}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										/>
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
											Email *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											required
											value={formData.email}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										/>
									</div>
									<div>
										<label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
											Comp </label>
										<input
											type="text"
											id="company"
											name="company"
											value={formData.comp}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										/>
									</div>
									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
											Message *
										</label>
										<textarea
											id="message"
											name="message"
											rows={4}
											required
											value={formData.message}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										/>
									</div>
									<button
										type="submit"
										className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center gap-2"
									>
										<Send className="h-4 w-4" />
										Send Message
									</button>
								</form>
							)}
						</div>

        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-xl text-gray-600">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-blue-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white">Let's Build Something Amazing Together</h2>
						<p className="mt-6 text-lg text-blue-100">
							Whether you're looking to implement AI solutions, modernize your cloud infrastructure, or strengthen your cybersecurity posture, we're here to help.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/services"
								className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							>
								View Our Services
							</Link>
							<Link
								to="/about"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
							>
								Learn More About Us →
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
  {/* Removed stray closing parenthesis */}
  {/* Removed stray closing brace */}