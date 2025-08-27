<<<<<<< HEAD
import Head from 'next/head'
export default function Index() {
	const title = 'Zion Tech Group — AI, Cloud, and Cybersecurity Solutions'
	const description = 'We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.'
	const url = 'https://ziontechgroup.com/'
	const logo = '/favicon.svg'
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Zion Tech Group',
		url,
		logo,
		sameAs: ['https://www.linkedin.com/company/zion-technologies/'],
	}
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={url} />
				<meta property="og:image" content="/og-image.svg" />
				<meta name="twitter:card" content="summary_large_image" />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			</Head>
			<main className="min-h-screen bg-white text-gray-900">
				{/* Hero Section */}
				<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								Transform Your Business with{' '}
								<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
									AI & Cloud
								</span>
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business from startup to enterprise.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<a
									href="/contact"
									className="rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl"
								>
									Get Started
									<svg className="ml-2 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</a>
								<a
									href="/services"
									className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
								>
									Learn more <span aria-hidden="true">→</span>
								</a>
							</div>
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
				{/* Features Section */}
				<section className="py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:text-center">
							<h2 className="text-base font-semibold leading-7 text-blue-600">Advanced Technology</h2>
							<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Everything you need to scale your business
							</p>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								From AI-powered automation to enterprise-grade security, we provide the tools and expertise to transform your operations.
							</p>
						</div>
						<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
							<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
								<div className="flex flex-col">
									<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
										<svg className="h-5 w-5 flex-none text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
										</svg>
										AI Autonomous Systems
									</dt>
									<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
										<p className="flex-auto">
											Multi-agent copilots, RAG workflows, and intelligent automation that scales with your business needs.
										</p>
										<p className="mt-6">
											<a href="/services#ai" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors">
												Learn more <span aria-hidden="true">→</span>
											</a>
										</p>
									</dd>
								</div>
								<div className="flex flex-col">
									<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
										<svg className="h-5 w-5 flex-none text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
										</svg>
										Cloud Platforms
									</dt>
									<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
										<p className="flex-auto">
											Serverless architectures, Kubernetes orchestration, and data pipelines built for enterprise scale.
										</p>
										<p className="mt-6">
											<a href="/services#cloud" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors">
												Learn more <span aria-hidden="true">→</span>
											</a>
										</p>
									</dd>
								</div>
								<div className="flex flex-col">
									<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
										<svg className="h-5 w-5 flex-none text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
										</svg>
										Cybersecurity
									</dt>
									<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
										<p className="flex-auto">
											Zero-trust architecture, threat detection, and compliance automation for enterprise security.
										</p>
										<p className="mt-6">
											<a href="/services#security" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors">
												Learn more <span aria-hidden="true">→</span>
											</a>
										</p>
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</section>
				{/* CTA Section */}
				<section className="py-24 sm:py-32 bg-gray-50">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Ready to transform your business?
							</h2>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Let's discuss how our AI and cloud solutions can accelerate your growth and innovation.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<a
									href="/request-quote"
									className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
								>
									Get a Quote
								</a>
								<a
									href="/contact"
									className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
								>
									Contact Us <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
=======
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  const featuredServices = [
    {
      icon: "🤖",
      title: "AI Development",
      description: "Custom AI solutions and machine learning models for your business needs.",
      link: "/services"
    },
    {
      icon: "☁️",
      title: "Cloud Architecture",
      description: "Scalable cloud solutions and infrastructure design for modern applications.",
      link: "/services"
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Comprehensive security solutions and compliance management for your business.",
      link: "/services"
    },
    {
      icon: "📱",
      title: "Web & Mobile Apps",
      description: "Modern, responsive applications built with cutting-edge technologies.",
      link: "/services"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform your data into actionable insights with AI-powered analytics.",
      link: "/services"
    },
    {
      icon: "⛓️",
      title: "Blockchain & Web3",
      description: "Next-generation decentralized applications and smart contract solutions.",
      link: "/services"
    }
  ];

  const whyChooseUs = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions"
    },
    {
      icon: "💼",
      title: "Business Focused",
      description: "Every solution is designed to drive measurable business value and ROI"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security standards with SOC 2 compliance and enterprise reliability"
    },
    {
      icon: "🤝",
      title: "Partnership Approach",
      description: "We work as an extension of your team for long-term success"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider | AI, Cloud, Cybersecurity</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, cybersecurity, and emerging technologies, we help companies transform their digital presence." />
        <meta name="keywords" content="Zion Tech Group, AI development, cloud migration, cybersecurity, web development, mobile apps, blockchain, IoT, technology solutions" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-20">
          <h1 className="text-6xl font-bold mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, cybersecurity, and innovative development services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
              Explore Our Services
            </Link>
            <Link href="/products" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Products
            </Link>
            <a href="tel:+13024640950" className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
              📞 Call Now
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Link href={service.link} className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-300 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Technologies We Master</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">AI & Machine Learning</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div>• TensorFlow & PyTorch</div>
                <div>• Natural Language Processing</div>
                <div>• Computer Vision</div>
                <div>• Predictive Analytics</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Cloud & DevOps</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div>• AWS, Azure, Google Cloud</div>
                <div>• Kubernetes & Docker</div>
                <div>• CI/CD Pipelines</div>
                <div>• Infrastructure as Code</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Web & Mobile</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div>• React, Angular, Vue.js</div>
                <div>• Node.js, Python, Java</div>
                <div>• React Native, Flutter</div>
                <div>• Progressive Web Apps</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Emerging Tech</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div>• Blockchain & Smart Contracts</div>
                <div>• IoT & Edge Computing</div>
                <div>• AR/VR & Metaverse</div>
                <div>• Quantum Computing Prep</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">🏥 Healthcare</h3>
              <p className="text-gray-300 text-sm">HIPAA-compliant solutions, telemedicine platforms, and AI-powered diagnostics</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">🏦 Financial Services</h3>
              <p className="text-gray-300 text-sm">Fintech solutions, blockchain applications, and secure payment systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">🏭 Manufacturing</h3>
              <p className="text-gray-300 text-sm">IoT platforms, predictive maintenance, and smart factory solutions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">🛒 E-commerce</h3>
              <p className="text-gray-300 text-sm">Scalable platforms, AI-powered recommendations, and mobile commerce</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">🎓 Education</h3>
              <p className="text-gray-300 text-sm">Learning management systems, virtual classrooms, and educational AI</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">🚀 Startups</h3>
              <p className="text-gray-300 text-sm">MVP development, scaling solutions, and growth-focused technology</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Let's discuss how Zion Tech Group can help you leverage cutting-edge technology 
              to achieve your business goals. We offer free consultations and custom solution design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                📞 Call +1 (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                ✉️ Schedule Consultation
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="text-white font-semibold mb-2">📍 Location</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">🌐 Website</h3>
                <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                  https://ziontechgroup.com
                </a>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">⏰ Business Hours</h3>
                <p className="text-gray-300">Mon-Fri: 9AM-6PM EST<br />Sat: 10AM-2PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
