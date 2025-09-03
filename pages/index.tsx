import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }

  const featuredServices = [
    {
      title: 'Micro SaaS Solutions',
      description: 'Production-ready SaaS products that solve real business problems',
      count: '15+ Products',
      link: '/services-catalog#micro-saas',
      icon: '🚀'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI services from computer vision to NLP',
      count: '12+ AI Services',
      link: '/services-catalog#ai',
      icon: '🧠'
    },
    {
      title: 'Cloud & IT Services',
      description: 'Modern cloud infrastructure and enterprise solutions',
      count: '13+ IT Services',
      link: '/services-catalog#it',
      icon: '☁️'
    }
  ]

  const stats = [
    { label: 'Services Delivered', value: '40+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Average Delivery Time', value: '3-6 weeks' },
    { label: 'Support Response', value: '< 2 hours' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Zion Tech Group - Innovative Micro SaaS, AI & Cloud Solutions</title>
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and cloud solutions. 40+ services with transparent pricing and rapid delivery." />
        <meta name="keywords" content="micro saas, ai services, cloud solutions, devops, machine learning, blockchain, web3" />
        <link rel="canonical" href={contact.site} />
      </Head>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Innovative Micro SaaS, AI Services & Cloud Solutions
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            We deliver production-ready technology solutions with transparent pricing, 
            rapid deployment, and measurable business outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/services-catalog" className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold text-lg transition-colors">
              Explore Our Services
            </Link>
            <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-4 rounded-lg bg-slate-800 hover:bg-slate-700 border border-white/10 font-semibold text-lg transition-colors">
              Call {contact.phone}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Service Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Link key={index} href={service.link} className="group">
                <div className="rounded-xl border border-white/10 bg-slate-900/60 p-8 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-slate-300 mb-4">{service.description}</p>
                  <div className="text-blue-400 font-semibold">{service.count}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">🚀 Rapid Delivery</h3>
              <p className="text-slate-300">Most services delivered in 3-6 weeks with clear timelines and milestones.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">💰 Transparent Pricing</h3>
              <p className="text-slate-300">No hidden costs. Fixed pricing with detailed breakdowns and market comparisons.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">🔧 Production Ready</h3>
              <p className="text-slate-300">Enterprise-grade solutions with monitoring, security, and scalability built-in.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">📞 Expert Support</h3>
              <p className="text-slate-300">Dedicated support team with &lt;2 hour response times and ongoing maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Let&apos;s discuss your project and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`mailto:${contact.email}`} className="px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 font-semibold text-lg transition-colors">
              Email {contact.email}
            </a>
            <Link href="/contact" className="px-8 py-4 rounded-lg bg-slate-800 hover:bg-slate-700 border border-white/10 font-semibold text-lg transition-colors">
              Contact Form
            </Link>
          </div>
          <div className="mt-6 text-slate-400">
            <p>{contact.address}</p>
            <p>Phone: {contact.phone}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
