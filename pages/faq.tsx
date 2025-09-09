import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, ChevronUp, HelpCircle, MessageSquare, Phone, Mail } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

interface FAQItem {
	question: string
	answer: string
	category: string
}

const faqData: FAQItem[] = [
	{
		question: "What services does Zion Tech Group offer?",
		answer: "We offer comprehensive technology solutions including AI autonomous systems, cloud platform development, cybersecurity services, and micro SaaS development. Our services cover everything from strategy and design to implementation and ongoing support.",
		category: "Services"
	},
	{
		question: "How long does it typically take to complete a project?",
		answer: "Project timelines vary depending on complexity and scope. Small projects can be completed in 4-8 weeks, while larger enterprise solutions typically take 3-6 months. We provide detailed timelines during the discovery phase.",
		category: "Project Management"
	},
	{
		question: "Do you work with startups and small businesses?",
		answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise organizations. We tailor our approach and solutions to meet your specific needs and budget requirements.",
		category: "Business"
	},
	{
		question: "What cloud platforms do you specialize in?",
		answer: "We have expertise in all major cloud platforms including AWS, Microsoft Azure, and Google Cloud Platform. We also specialize in multi-cloud architectures and hybrid cloud solutions.",
		category: "Technology"
	},
	{
		question: "How do you ensure the security of our data?",
		answer: "Security is our top priority. We implement industry-standard security practices, conduct regular security audits, and follow compliance frameworks like SOC 2, ISO 27001, and GDPR requirements.",
		category: "Security"
	},
	{
		question: "Do you provide ongoing support and maintenance?",
		answer: "Yes, we offer comprehensive support and maintenance packages. This includes monitoring, updates, security patches, and 24/7 emergency support for critical systems.",
		category: "Support"
	},
	{
		question: "Can you help with existing systems integration?",
		answer: "Yes, we specialize in integrating new solutions with existing systems. We conduct thorough assessments of your current infrastructure and design integration strategies that minimize disruption.",
		category: "Technology"
	},
	{
		question: "What industries do you serve?",
		answer: "We serve clients across various industries including healthcare, finance, manufacturing, retail, and technology. Our solutions are adaptable to meet industry-specific requirements and compliance needs.",
		category: "Business"
	},
	{
		question: "How do you handle project communication?",
		answer: "We maintain regular communication through scheduled meetings, progress reports, and dedicated project management tools. You'll have a dedicated project manager as your primary point of contact.",
		category: "Project Management"
	},
	{
		question: "Do you offer training for our team?",
		answer: "Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the solutions we implement. This includes documentation, hands-on training, and ongoing support.",
		category: "Support"
	},
	{
		question: "What is your pricing structure?",
		answer: "We offer flexible pricing models including project-based pricing, retainer agreements, and subscription-based services. Pricing depends on project scope, complexity, and ongoing support requirements.",
		category: "Business"
	},
	{
		question: "How do you stay current with technology trends?",
		answer: "Our team continuously researches and experiments with emerging technologies. We maintain partnerships with leading technology companies and participate in industry conferences and training programs.",
		category: "Technology"
	}
]

const categories = ["All", "Services", "Technology", "Business", "Project Management", "Security", "Support"]

export default function FAQ() {
	const [openItems, setOpenItems] = useState<Set<number>>(new Set())
	const [selectedCategory, setSelectedCategory] = useState("All")

	const toggleItem = (index: number) => {
		const newOpenItems = new Set(openItems)
		if (newOpenItems.has(index)) {
			newOpenItems.delete(index)
		} else {
			newOpenItems.add(index)
		}
		setOpenItems(newOpenItems)
	}

	const filteredFAQs = selectedCategory === "All" 
		? faqData 
		: faqData.filter(faq => faq.category === selectedCategory)

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Find answers to common questions about our services, processes, and how we can help transform your business.
						</p>
					</div>
				</div>
				
				{/* Background Pattern */}
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
						<defs>
							<pattern id="hero-pattern" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
								<path d="M.5 200V.5H200" fill="none" />
							</pattern>
						</defs>
						<rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-pattern)" />
					</svg>
				</div>
			</section>

			{/* Category Filter */}
			<section className="py-12 bg-white">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="flex flex-wrap justify-center gap-4">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
									selectedCategory === category
										? 'bg-blue-600 text-white shadow-lg'
										: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
								}`}
							>
								{category}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-4xl px-6 lg:px-8">
					<div className="space-y-6">
						{filteredFAQs.map((faq, index) => (
							<div key={index} className="bg-white rounded-2xl border border-gray-200 shadow-sm">
								<button
									onClick={() => toggleItem(index)}
									className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl"
								>
									<h3 className="text-lg font-semibold text-gray-900 pr-4">
										{faq.question}
									</h3>
									{openItems.has(index) ? (
										<ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
									) : (
										<ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
									)}
								</button>
								{openItems.has(index) && (
									<div className="px-8 pb-6">
										<p className="text-gray-600 leading-relaxed">
											{faq.answer}
										</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Still Have Questions */}
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
							<HelpCircle className="h-8 w-8 text-blue-600" />
						</div>
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
							Still have questions?
						</h2>
						<p className="text-lg text-gray-600 mb-8">
							Can't find the answer you're looking for? Our team is here to help. Get in touch with us and we'll respond as soon as possible.
						</p>
						<div className="grid gap-6 md:grid-cols-3">
							<div className="flex flex-col items-center">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
									<MessageSquare className="h-6 w-6 text-white" />
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
								<p className="text-sm text-gray-600 text-center">
									Chat with our support team in real-time
								</p>
							</div>
							<div className="flex flex-col items-center">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 mb-4">
									<Mail className="h-6 w-6 text-white" />
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
								<p className="text-sm text-gray-600 text-center">
									Send us an email and we'll get back to you
								</p>
							</div>
							<div className="flex flex-col items-center">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 mb-4">
									<Phone className="h-6 w-6 text-white" />
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
								<p className="text-sm text-gray-600 text-center">
									Call us during business hours
								</p>
							</div>
						</div>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								href="/contact"
								className="rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
							>
								Contact Support
								<ArrowRight className="ml-2 h-4 w-4 inline" />
							</Link>
							<Link
								href="/services"
								className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
							>
								View Services <span aria-hidden="true">→</span>
							</Link>
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
							Let's discuss your project and how our expertise can help you achieve your goals.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								href="/contact"
								className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
							>
								Get in Touch
								<ArrowRight className="ml-2 h-4 w-4 inline" />
							</Link>
							<Link
								href="/services"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
							>
								View Services <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}