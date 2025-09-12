import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Services: NextPage = () => {
  const services = [
    {
      id: 1,
      title: "AI Development",
      description: "Custom AI solutions and machine learning models tailored to your business needs",
      icon: "🤖",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      pricing: "Starting at $5,000/month",
      link: "/services/ai-development"
    },
    {
      id: 2,
      title: "Cloud Architecture",
      description: "Scalable cloud solutions and infrastructure design for modern applications",
      icon: "☁️",
      features: ["AWS/Azure/GCP Migration", "Microservices Architecture", "DevOps Implementation", "Cost Optimization"],
      pricing: "Starting at $3,000/month",
      link: "/services/cloud-services"
    },
    {
      id: 3,
      title: "Web Application Development",
      description: "Modern, responsive web applications built with cutting-edge technologies",
      icon: "🌐",
      features: ["React/Next.js Development", "API Development", "Database Design", "Performance Optimization"],
      pricing: "Starting at $2,500/month",
      link: "/services/web-application-development"
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱",
      features: ["React Native Development", "iOS/Android Apps", "UI/UX Design", "App Store Optimization"],
      pricing: "Starting at $4,000/month",
      link: "/services/mobile-app-development"
    },
    {
      id: 5,
      title: "Blockchain Solutions",
      description: "Decentralized applications and smart contract development",
      icon: "🔗",
      features: ["Smart Contracts", "DApp Development", "Tokenization", "DeFi Solutions"],
      pricing: "Starting at $6,000/month",
      link: "/services/blockchain"
    },
    {
      id: 6,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics",
      icon: "📊",
      features: ["Data Visualization", "Business Intelligence", "Predictive Modeling", "Real-time Analytics"],
      pricing: "Starting at $3,500/month",
      link: "/services/data-analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Our Services - Zion Tech Solutions | Technology Solutions Provider</title>
        <meta name="description" content="Discover our comprehensive technology services including AI development, cloud architecture, web development, mobile apps, blockchain solutions, and data analytics." />
        <meta name="keywords" content="AI development, cloud architecture, web development, mobile apps, blockchain, data analytics, technology services" />
        <meta property="og:title" content="Our Services - Zion Tech Solutions" />
        <meta property="og:description" content="Explore our full range of technology services designed to transform your business and drive innovation." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-20">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-2xl max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform your business and drive innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-6xl mb-6 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-white">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="text-2xl font-bold text-blue-400 mb-2">{service.pricing}</div>
                <div className="text-sm text-gray-400">Flexible pricing based on project scope</div>
              </div>

              <Link 
                href={service.link}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all text-center block"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Discovery</h3>
              <p className="text-gray-200">We analyze your requirements and define project scope</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Design</h3>
              <p className="text-gray-200">We create detailed technical specifications and architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Development</h3>
              <p className="text-gray-200">We build your solution using agile methodologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Deploy</h3>
              <p className="text-gray-200">We deploy and maintain your solution with ongoing support</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Why Choose Zion Tech Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Expert Team</h3>
              <p className="text-gray-200">
                Our team consists of 50+ experienced developers, designers, and engineers with expertise in the latest technologies.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Fast Delivery</h3>
              <p className="text-gray-200">
                We use agile methodologies and modern development practices to deliver projects on time and within budget.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4 text-white">24/7 Support</h3>
              <p className="text-gray-200">
                Our dedicated support team is available around the clock to ensure your systems run smoothly.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a custom solution that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Get Free Consultation
            </Link>
            <Link href="/portfolio" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              View Our Work
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;