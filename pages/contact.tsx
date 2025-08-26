<<<<<<< HEAD
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		service: '',
		message: ''
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		
		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1000))
		
		setIsSubmitted(true)
		setIsSubmitting(false)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim()

	if (isSubmitted) {
		return (
			<PageTransition>
				<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
								<CheckCircle className="h-8 w-8 text-green-600" />
							</div>
							<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
								Thank you for your message!
							</h1>
							<p className="text-lg text-gray-600 mb-8">
								We've received your inquiry and will get back to you within one business day. In the meantime, feel free to explore our services.
							</p>
							<div className="flex items-center justify-center gap-x-6">
								<Link
									to="/services"
									className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
								>
									View Services
								</Link>
								<Link
									to="/"
									className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
								>
									Back to Home
								</Link>
							</div>
						</div>
					</div>
				</section>
			</PageTransition>
		)
	}

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Get in Touch
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Ready to transform your business? Let's discuss how our AI, cloud, and cybersecurity solutions can help you scale efficiently and securely.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Form & Info */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-2">
						{/* Contact Form */}
						<div>
							<h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
								Send us a message
							</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid gap-6 sm:grid-cols-2">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											required
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
											placeholder="Your name"
										/>
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Email *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											required
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
											placeholder="your.email@company.com"
										/>
									</div>
								</div>
								<div>
									<label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Company
									</label>
									<input
										type="text"
										id="company"
										name="company"
										value={formData.company}
										onChange={handleChange}
										className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
										placeholder="Your company (optional)"
									/>
								</div>
								<div>
									<label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Service of Interest
									</label>
									<select
										id="service"
										name="service"
										value={formData.service}
										onChange={handleChange}
										className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
									>
										<option value="">Select a service</option>
										<option value="ai">AI Autonomous Systems</option>
										<option value="cloud">Cloud Platforms</option>
										<option value="cybersecurity">Cybersecurity</option>
										<option value="consulting">Consulting</option>
										<option value="other">Other</option>
									</select>
								</div>
								<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Message *
									</label>
									<textarea
										id="message"
										name="message"
										rows={4}
										value={formData.message}
										onChange={handleChange}
										required
										className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
										placeholder="Tell us about your project or how we can help..."
									/>
								</div>
								<button
									type="submit"
									disabled={!isFormValid || isSubmitting}
									className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
										isFormValid && !isSubmitting
											? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
											: 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
									}`}
								>
									{isSubmitting ? (
										<>
											<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
											Sending...
										</>
									) : (
										<>
											<Send className="w-4 h-4 mr-2" />
											Send Message
										</>
									)}
								</button>
							</form>
						</div>

						{/* Contact Information */}
						<div>
							<h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
								Contact Information
							</h2>
							<div className="space-y-8">
								<div className="flex items-start gap-4">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
										<Mail className="h-5 w-5 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900">Email</h3>
										<p className="text-gray-600">
											<a 
												href="mailto:contact@ziontechgroup.com" 
												className="text-blue-600 hover:text-blue-500 transition-colors"
											>
												contact@ziontechgroup.com
											</a>
										</p>
										<p className="text-sm text-gray-500 mt-1">
											We typically respond within one business day
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
										<Phone className="h-5 w-5 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900">Phone</h3>
										<p className="text-gray-600">
											<a 
												href="tel:+1-555-123-4567" 
												className="text-blue-600 hover:text-blue-500 transition-colors"
											>
												+1 (555) 123-4567
											</a>
										</p>
										<p className="text-sm text-gray-500 mt-1">
											Available Monday-Friday, 9 AM - 6 PM EST
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
										<MapPin className="h-5 w-5 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900">Office</h3>
										<p className="text-gray-600">
											123 Tech Street<br />
											Innovation District<br />
											San Francisco, CA 94105
										</p>
										<p className="text-sm text-gray-500 mt-1">
											By appointment only
										</p>
									</div>
								</div>
							</div>

							{/* Additional Info */}
							<div className="mt-12 p-6 bg-gray-50 rounded-lg">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Why choose Zion Tech Group?
								</h3>
								<ul className="space-y-2 text-sm text-gray-600">
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										Proven track record with 50+ successful projects
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										Expert team with deep industry knowledge
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										End-to-end solution delivery
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										Ongoing support and maintenance
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to get started?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							Don't wait to transform your business. Contact us today to discuss your project.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/services"
								className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
							>
								View Services
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
=======
import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity, Zap as ZapIcon2, Shield as ShieldIcon, Users as UsersIcon, Globe as GlobeIcon, Cpu as CpuIcon, Database as DatabaseIcon2, Cloud as CloudIcon, Smartphone as SmartphoneIcon, Palette as PaletteIcon, Search as SearchIcon, MessageSquare as MessageSquareIcon, FileText as FileTextIcon, Calendar as CalendarIcon, CreditCard as CreditCardIcon, BarChart3 as BarChart3Icon, Settings as SettingsIcon, Zap as ZapIcon3, Code as CodeIcon, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon3, Play as PlayIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Filter as FilterIcon, Grid as GridIcon, List as ListIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, Sparkles as SparklesIcon, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Brain as BrainIcon, Atom as AtomIcon, Globe2 as Globe2Icon, Bot as BotIcon, ChevronRight as ChevronRightIcon, Send, User, Building2, MessageCircle, Clock as ClockIcon, Globe as GlobeIcon2, Shield as ShieldIcon2, Zap as ZapIcon4, Users as UsersIcon2, Rocket as RocketIcon2, Award as AwardIcon2, TrendingUp as TrendingUpIcon2, CheckCircle, AlertCircle, Info } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "kleber@ziontechgroup.com",
      link: "mailto:kleber@ziontechgroup.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (302) 464-0950",
      link: "tel:+13024640950",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Delaware, United States",
      link: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM EST",
      link: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI solutions, quantum computing, and innovative technology services." />
        <meta name="keywords" content="contact, Zion Tech Group, AI solutions, quantum computing, technology services" />
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Get in touch with Zion Tech Group for AI solutions and innovative technology services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>

      <UltraAdvancedFuturisticBackground>
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Get In Touch
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Ready to transform your business with cutting-edge AI & quantum computing technology? 
                  Let's discuss how we can help you achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    href="tel:+13024640950"
                    variant="primary"
                    size="lg"
                    className="text-lg px-8 py-4"
                  >
                    Call Now
                    <Phone className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    href="mailto:kleber@ziontechgroup.com"
                    variant="secondary"
                    size="lg"
                    className="text-lg px-8 py-4"
                  >
                    Send Email
                    <Mail className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center mb-4 mx-auto`}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{info.title}</h3>
                    {info.link !== "#" ? (
                      <a 
                        href={info.link}
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.content}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Send Us a Message
                  </h2>
                  <p className="text-xl text-gray-300">
                    Fill out the form below and we&apos;ll get back to you within 24 hours
                  </p>
                </div>
                <EnhancedContactForm />
              </motion.div>
            </div>
          </section>
        </main>

        {/* CTA Section */}
        <div className="text-center">
          <UltraFuturisticCard variant="quantum-holographic-advanced" className="p-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't wait to transform your business with revolutionary AI & quantum computing technology. 
              Contact us today and get your free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                href="tel:+13024640950"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Call Now
                <Phone className="ml-2 w-5 h-5" />
              </Button>
              <Button
                href="mailto:kleber@ziontechgroup.com"
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Send Email
                <Mail className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>✓ Free Consultation • ✓ 24/7 Support • ✓ &lt; 2 Hour Response • ✓ Expert Engineers</p>
              <p className="mt-2">✓ Global Infrastructure • ✓ Enterprise Security • ✓ Custom Solutions • ✓ Ongoing Support</p>
            </div>
          </UltraFuturisticCard>
        </div>
      </UltraAdvancedFuturisticBackground>
    </div>
  );
>>>>>>> 5d0d9b33be30b5e0e084636034f4596aec3e9abd
}
