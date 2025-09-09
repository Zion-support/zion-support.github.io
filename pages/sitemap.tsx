import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Home, Briefcase, Phone, Building, Users, FileText, HelpCircle, Shield, Globe, Brain, Cloud, Lock, Code } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

interface SitemapSection {
	title: string
	icon: React.ComponentType<{ className?: string }>
	links: Array<{
		label: string
		href: string
		description?: string
	}>
}

const sitemapData: SitemapSection[] = [
	{
		title: "Main Pages",
		icon: Home,
		links: [
			{ label: "Home", href: "/", description: "Main landing page" },
			{ label: "About Us", href: "/about", description: "Company information and team" },
			{ label: "Contact", href: "/contact", description: "Get in touch with us" },
			{ label: "Partners", href: "/partners", description: "Our technology and service partners" },
			{ label: "Careers", href: "/careers", description: "Job opportunities and team culture" }
		]
	},
	{
		title: "Services",
		icon: Briefcase,
		links: [
			{ label: "AI Autonomous Systems", href: "/services#ai", description: "AI-powered automation and decision making" },
			{ label: "Cloud Platforms", href: "/services#cloud", description: "Scalable cloud infrastructure and DevOps" },
			{ label: "Cybersecurity", href: "/services#cybersecurity", description: "Security frameworks and compliance" },
			{ label: "Micro SaaS", href: "/services#saas", description: "Rapid SaaS development and deployment" },
			{ label: "Technical Consulting", href: "/services", description: "Strategic technology consulting" },
			{ label: "System Integration", href: "/services", description: "Legacy system integration and modernization" }
		]
	},
	{
		title: "AI Solutions",
		icon: Brain,
		links: [
			{ label: "AI Agents", href: "/ai-agents", description: "Intelligent autonomous agents" },
			{ label: "AI Assistant", href: "/ai-assistant", description: "AI-powered virtual assistants" },
			{ label: "AI Business Intelligence", href: "/ai-business-intelligence-elite-2026", description: "Advanced AI analytics" },
			{ label: "AI Content Generator", href: "/ai-content-generator", description: "AI-powered content creation" },
			{ label: "AI Financial Planning", href: "/ai-financial-planning-platform", description: "AI financial advisory" },
			{ label: "AI Healthcare Diagnostics", href: "/ai-healthcare-diagnostics-pro", description: "Healthcare AI solutions" },
			{ label: "AI HR Analytics", href: "/ai-hr-analytics-platform", description: "HR process automation" },
			{ label: "AI Sales Intelligence", href: "/ai-sales-intelligence-platform", description: "Sales automation and insights" }
		]
	},
	{
		title: "Cloud & Infrastructure",
		icon: Cloud,
		links: [
			{ label: "Quantum Cloud Infrastructure", href: "/quantum-cloud-infrastructure-platform", description: "Next-generation cloud platforms" },
			{ label: "Serverless Solutions", href: "/serverless-cron-manager", description: "Serverless architecture and automation" },
			{ label: "Domain & DNS Monitoring", href: "/domain-dns-monitor", description: "Infrastructure monitoring" },
			{ label: "Live Dashboard", href: "/live-dashboard", description: "Real-time monitoring dashboards" },
			{ label: "Market Pricing", href: "/market-pricing", description: "Pricing optimization tools" }
		]
	},
	{
		title: "Cybersecurity",
		icon: Shield,
		links: [
			{ label: "AI-Powered Cybersecurity", href: "/ai-powered-cybersecurity", description: "Intelligent security solutions" },
			{ label: "Quantum Cybersecurity", href: "/quantum-cybersecurity-platform", description: "Quantum-resistant security" },
			{ label: "Zero Trust Architecture", href: "/zero-trust-network-architecture-2029", description: "Modern security frameworks" },
			{ label: "Security Platform", href: "/zero-trust-security-platform", description: "Comprehensive security solutions" }
		]
	},
	{
		title: "Industry Solutions",
		icon: Globe,
		links: [
			{ label: "Fintech Solutions", href: "/fintech-solutions", description: "Financial technology services" },
			{ label: "Healthcare AI", href: "/healthcare-ai-solutions", description: "Healthcare technology solutions" },
			{ label: "Retail Technology", href: "/retail-technology-solutions", description: "Retail innovation solutions" },
			{ label: "Manufacturing AI", href: "/autonomous-manufacturing", description: "Smart manufacturing solutions" },
			{ label: "Transportation & Logistics", href: "/transportation-logistics-solutions", description: "Supply chain optimization" },
			{ label: "Entertainment & Media", href: "/entertainment-media-solutions", description: "Media technology solutions" },
			{ label: "Real Estate Technology", href: "/real-estate-technology-solutions", description: "PropTech solutions" },
			{ label: "Space Technology", href: "/space-technology-ai-platform", description: "Space industry AI solutions" }
		]
	},
	{
		title: "Development & Tools",
		icon: Code,
		links: [
			{ label: "Developer Resources", href: "/developer", description: "Developer tools and documentation" },
			{ label: "API Documentation", href: "/api-documentation", description: "API reference and guides" },
			{ label: "LMS Platform", href: "/lms-platform", description: "Learning management systems" },
			{ label: "Helpdesk Automation", href: "/helpdesk-automation", description: "Customer support automation" },
			{ label: "E-commerce Returns", href: "/ecommerce-returns-management", description: "Returns management solutions" },
			{ label: "Invoice Studio", href: "/invoice-studio", description: "Invoice management platform" },
			{ label: "IT Asset Discovery", href: "/it-asset-discovery-agent", description: "IT asset management" },
			{ label: "Keyword Research Engine", href: "/keyword-research-engine", description: "SEO and marketing tools" }
		]
	},
	{
		title: "Resources",
		icon: FileText,
		links: [
			{ label: "Blog", href: "/blog", description: "Latest insights and updates" },
			{ label: "News", href: "/news", description: "Company news and announcements" },
			{ label: "Events", href: "/events", description: "Upcoming events and webinars" },
			{ label: "Webinars", href: "/webinars", description: "Educational webinars" },
			{ label: "Case Studies", href: "/resources", description: "Success stories and case studies" },
			{ label: "White Papers", href: "/resources", description: "Industry research and insights" },
			{ label: "Documentation", href: "/docs", description: "Technical documentation" }
		]
	},
	{
		title: "Support & Legal",
		icon: HelpCircle,
		links: [
			{ label: "FAQ", href: "/faq", description: "Frequently asked questions" },
			{ label: "Help Center", href: "/contact", description: "Support and help resources" },
			{ label: "Privacy Policy", href: "/privacy", description: "Data privacy and protection" },
			{ label: "Terms of Service", href: "/terms", description: "Terms and conditions" },
			{ label: "Cookie Policy", href: "/privacy", description: "Cookie usage information" },
			{ label: "GDPR Compliance", href: "/privacy", description: "Data protection compliance" }
		]
	}
]

export default function Sitemap() {
	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Site <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Map</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Navigate our website easily with this comprehensive overview of all pages and sections.
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

			{/* Sitemap Content */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-2">
						{sitemapData.map((section, sectionIndex) => (
							<div key={sectionIndex} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
								<div className="flex items-center gap-x-3 mb-6">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
										<section.icon className="h-5 w-5 text-white" />
									</div>
									<h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
								</div>
								<div className="space-y-4">
									{section.links.map((link, linkIndex) => (
										<div key={linkIndex} className="border-l-2 border-gray-200 pl-4">
											<Link
												to={link.href}
												className="block text-blue-600 hover:text-blue-800 font-medium transition-colors"
											>
												{link.label}
											</Link>
											{link.description && (
												<p className="text-sm text-gray-600 mt-1">
													{link.description}
												</p>
											)}
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Quick Navigation */}
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Quick Navigation</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Popular destinations
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Get to the most important pages quickly with these direct links.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<div className="grid gap-6 lg:grid-cols-3">
							<Link
								href="/services"
								className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
							>
								<div className="flex items-center gap-x-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
										<Briefcase className="h-5 w-5 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
											Our Services
										</h3>
										<p className="text-sm text-gray-600 mt-1">
											Explore our comprehensive service offerings
										</p>
									</div>
								</div>
								<ArrowRight className="absolute top-6 right-6 h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
							</Link>

							<Link
								href="/contact"
								className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
							>
								<div className="flex items-center gap-x-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">
										<Phone className="h-5 w-5 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
											Contact Us
										</h3>
										<p className="text-sm text-gray-600 mt-1">
											Get in touch with our team
										</p>
									</div>
								</div>
								<ArrowRight className="absolute top-6 right-6 h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
							</Link>

							<Link
								href="/about"
								className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
							>
								<div className="flex items-center gap-x-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors">
										<Building className="h-5 w-5 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
											About Us
										</h3>
										<p className="text-sm text-gray-600 mt-1">
											Learn about our company and mission
										</p>
									</div>
								</div>
								<ArrowRight className="absolute top-6 right-6 h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
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
							Can't find what you're looking for?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							Our team is here to help you navigate our services and find the right solution for your needs.
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