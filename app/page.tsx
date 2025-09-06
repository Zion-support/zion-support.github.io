import Link from 'next/link';

export default function HomePage() {
  const featuredServices = [
    {
      title: "InvoiceFlow Pro",
      description: "AI-powered invoice processing that reduces processing time by 80%",
      price: "From $99/month",
      category: "Micro SaaS",
      icon: "📄"
    },
    {
      title: "SocialScheduler AI",
      description: "Intelligent social media scheduling with AI optimization",
      price: "From $49/month",
      category: "Micro SaaS",
      icon: "📱"
    },
    {
      title: "Cloud Migration",
      description: "Zero-downtime cloud migration to AWS, Azure, or GCP",
      price: "From $5,000/month",
      category: "IT Services",
      icon: "☁️"
    },
    {
      title: "Custom AI Models",
      description: "Bespoke AI models tailored to your business needs",
      price: "From $8,000/project",
      category: "AI Services",
      icon: "🤖"
    },
    {
      title: "DevOps & SRE",
      description: "Complete DevOps implementation with SRE best practices",
      price: "From $3,500/month",
      category: "IT Services",
      icon: "⚙️"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced analytics and forecasting for data-driven decisions",
      price: "From $3,200/month",
      category: "AI Services",
      icon: "📊"
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Served" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "80%", label: "Cost Reduction" }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Build and scale with{' '}
          <span className="text-blue-400">AI</span>,{' '}
          <span className="text-green-400">Micro SaaS</span>{' '}
          and{' '}
          <span className="text-purple-400">Enterprise IT</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          We design, build and operate production-grade platforms: AI copilots, data/ML pipelines, 
          automation, cloud infrastructure, and secure micro SaaS products. Trusted by 500+ companies worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/services" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Services
          </Link>
          <Link 
            href="/contact" 
            className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <span className="font-semibold">📞 Phone:</span>
              <a href="tel:+13024640950" className="hover:text-blue-200">+1 302 464 0950</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">✉️ Email:</span>
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-200">kleber@ziontechgroup.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">📍 Address:</span>
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Featured Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">{service.category}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-semibold text-sm">{service.price}</span>
                  <Link href="/services" className="text-blue-400 hover:text-blue-300 text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Innovation First</h3>
              <p className="text-gray-300">
                We stay at the forefront of technology, implementing the latest AI and cloud solutions 
                to give your business a competitive edge.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Your data and systems are protected with enterprise-grade security measures 
                and compliance standards.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Rapid Deployment</h3>
              <p className="text-gray-300">
                Get your solutions up and running quickly with our proven methodologies 
                and experienced team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI, micro SaaS, and IT services can help you achieve your goals. 
            Contact us today for a free consultation and custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call Now: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}