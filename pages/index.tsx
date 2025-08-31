import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  const featuredServices = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions and intelligent automation",
      icon: "🤖",
      link: "/services"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automation",
      icon: "☁️",
      link: "/services"
    },
    {
      title: "Web & Mobile Development",
      description: "Modern applications for all platforms",
      icon: "📱",
      link: "/services"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security and compliance",
      icon: "🔒",
      link: "/services"
    },
    {
      title: "IoT & Edge Computing",
      description: "Connected devices and smart solutions",
      icon: "🌐",
      link: "/services"
    },
    {
      title: "Blockchain & Web3",
      description: "Decentralized applications and DeFi",
      icon: "⛓️",
      link: "/services"
    }
  ];

  const featuredProducts = [
    {
      title: "ZionAI Analytics Platform",
      description: "AI-powered business intelligence",
      pricing: "From $299/month",
      link: "/products"
    },
    {
      title: "SmartCRM Pro",
      description: "AI-enhanced customer relationship management",
      pricing: "From $199/month",
      link: "/products"
    },
    {
      title: "ZionCloud Manager",
      description: "Multi-cloud management platform",
      pricing: "From $399/month",
      link: "/products"
    }
  ];

  const industrySolutions = [
    {
      title: "Healthcare",
      description: "EHR systems, telemedicine, and healthcare analytics",
      link: "/solutions"
    },
    {
      title: "Financial Services",
      description: "Digital banking, payment processing, and portfolio management",
      link: "/solutions"
    },
    {
      title: "Manufacturing",
      description: "Smart factory, supply chain, and quality management",
      link: "/solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Zion Tech Solutions - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Solutions provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence." />
        <meta name="keywords" content="AI development, cloud solutions, web development, cybersecurity, IoT, blockchain, machine learning, DevOps, mobile apps, SaaS products" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Cutting-Edge Technology
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Leading technology solutions provider helping businesses thrive in the digital age 
            with AI, cloud architecture, cybersecurity, and innovative development services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Explore Our Services
            </Link>
            <Link href="/products" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              View Our Products
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-20">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Comprehensive Services</h2>
            <p className="text-xl text-gray-200">From AI development to cybersecurity, we cover all your technology needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-200 mb-4">{service.description}</p>
                <Link href={service.link} className="text-blue-300 hover:text-blue-200 font-semibold">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-20">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready-to-Use SaaS Products</h2>
            <p className="text-xl text-gray-200">Deploy our proven solutions to accelerate your business growth</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-green-600 font-semibold mb-4">{product.pricing}</div>
                <Link href={product.link} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mb-20">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-200">Tailored technology solutions for your industry</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-200 mb-4">{solution.description}</p>
                <Link href={solution.link} className="text-blue-300 hover:text-blue-200 font-semibold">
                  Explore Solutions →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Zion Tech Solutions?</h2>
            <p className="text-xl text-gray-200">We deliver results that matter</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-200">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-200">Cutting-edge technologies and modern approaches</p>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Security First</h3>
              <p className="text-gray-200">Enterprise-grade security and compliance</p>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Results Driven</h3>
              <p className="text-gray-200">Focused on delivering measurable business value</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Let's discuss how our technology solutions can help you achieve your goals. 
            Get in touch with our expert team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Email
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-300">
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Visit us at: <a href="https://ziontechgroup.com" className="underline hover:no-underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;