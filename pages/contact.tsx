<<<<<<< HEAD
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

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
		// Handle form submission logic here
		setIsSubmitted(true)
	}

	const title = 'Contact — Zion Tech Group'
	const description = 'Get in touch to discuss your AI, cloud, or cybersecurity needs.'

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<main className="min-h-screen bg-white text-gray-900">
				<section className="mx-auto max-w-5xl px-6 py-16">
					<h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">Get in Touch</h1>
					<p className="mt-4 max-w-2xl text-lg text-gray-700">
						Ready to transform your business? Let's discuss how our AI, cloud, and cybersecurity solutions can help.
					</p>
				</section>

				<section className="mx-auto max-w-5xl px-6 pb-16">
					<div className="grid gap-12 lg:grid-cols-2">
						{/* Contact Form */}
						<div>
							<h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
							{isSubmitted ? (
								<div className="rounded-lg bg-green-50 p-6 border border-green-200">
									<div className="flex items-center gap-3">
										<CheckCircle className="h-6 w-6 text-green-600" />
										<h3 className="text-lg font-medium text-green-800">Message sent!</h3>
									</div>
									<p className="mt-2 text-green-700">We'll get back to you within 24 hours.</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
											Name
										</label>
										<input
											type="text"
											id="name"
											value={formData.name}
											onChange={(e) => setFormData({ ...formData, name: e.target.value })}
											className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
											required
										/>
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
											Email
										</label>
										<input
											type="email"
											id="email"
											value={formData.email}
											onChange={(e) => setFormData({ ...formData, email: e.target.value })}
											className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
											required
										/>
									</div>
									<div>
										<label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
											Company
										</label>
										<input
											type="text"
											id="company"
											value={formData.company}
											onChange={(e) => setFormData({ ...formData, company: e.target.value })}
											className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
										/>
									</div>
									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
											Message
										</label>
										<textarea
											id="message"
											rows={4}
											value={formData.message}
											onChange={(e) => setFormData({ ...formData, message: e.target.value })}
											className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
											required
										/>
									</div>
									<button
										type="submit"
										className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
									>
										<Send className="h-4 w-4" />
										Send Message
									</button>
								</form>
							)}
						</div>

						{/* Contact Info */}
						<div>
							<h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<Phone className="h-6 w-6 text-blue-600 mt-1" />
									<div>
										<h3 className="font-medium">Phone</h3>
										<p className="text-gray-700">+1 302 464 0950</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<Mail className="h-6 w-6 text-blue-600 mt-1" />
									<div>
										<h3 className="font-medium">Email</h3>
										<p className="text-gray-700">kleber@ziontechgroup.com</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<MapPin className="h-6 w-6 text-blue-600 mt-1" />
									<div>
										<h3 className="font-medium">Address</h3>
										<p className="text-gray-700">364 E Main St STE 1008<br />Middletown DE 19709</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
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
