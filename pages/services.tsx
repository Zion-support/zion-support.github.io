import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Services: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Our Services - Zion Tech Solutions</title>
        <meta name="description" content="Comprehensive technology services including AI development, cloud architecture, digital transformation, and more. Transform your business with our expert solutions." />
        <meta name="keywords" content="AI development, cloud services, digital transformation, software development, blockchain, IoT, cybersecurity" />
        <meta property="og:title" content="Our Services - Zion Tech Solutions" />
        <meta property="og:description" content="Transform your business with our comprehensive technology services and solutions." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform your business and drive growth in the digital age.
          </p>
        </div>

        {/* Featured Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="text-4xl mb-6">🤖</div>
            <h3 className="text-2xl font-semibold mb-4">AI Development</h3>
            <p className="text-gray-300 mb-6">Custom AI solutions and machine learning models that automate processes and drive intelligent decision-making.</p>
            <ul className="space-y-2 mb-6 text-sm">
              <li>• Machine Learning Models</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Predictive Analytics</li>
            </ul>
            <Link href="/services/ai-development" className="text-blue-400 hover:text-blue-300 font-semibold">
              Learn More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="text-4xl mb-6">☁️</div>
            <h3 className="text-2xl font-semibold mb-4">Cloud Architecture</h3>
            <p className="text-gray-300 mb-6">Scalable cloud solutions and infrastructure design for modern, resilient applications.</p>
            <ul className="space-y-2 mb-6 text-sm">
              <li>• AWS/Azure/GCP Migration</li>
              <li>• Microservices Architecture</li>
              <li>• Container Orchestration</li>
              <li>• DevOps Implementation</li>
            </ul>
            <Link href="/services/cloud-services" className="text-blue-400 hover:text-blue-300 font-semibold">
              Learn More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="text-4xl mb-6">🚀</div>
            <h3 className="text-2xl font-semibold mb-4">Digital Transformation</h3>
            <p className="text-gray-300 mb-6">End-to-end digital transformation services to modernize and future-proof your business.</p>
            <ul className="space-y-2 mb-6 text-sm">
              <li>• Process Automation</li>
              <li>• Legacy System Modernization</li>
              <li>• Digital Strategy Consulting</li>
              <li>• Change Management</li>
            </ul>
            <Link href="/services" className="text-blue-400 hover:text-blue-300 font-semibold">
              Learn More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="text-4xl mb-6">🔗</div>
            <h3 className="text-2xl font-semibold mb-4">Blockchain Solutions</h3>
            <p className="text-gray-300 mb-6">Secure, decentralized solutions leveraging blockchain technology for transparency and trust.</p>
            <ul className="space-y-2 mb-6 text-sm">
              <li>• Smart Contract Development</li>
              <li>• DeFi Applications</li>
              <li>• NFT Marketplaces</li>
              <li>• Supply Chain Tracking</li>
            </ul>
            <Link href="/services/blockchain" className="text-blue-400 hover:text-blue-300 font-semibold">
              Learn More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="text-4xl mb-6">📱</div>
            <h3 className="text-2xl font-semibold mb-4">Mobile App Development</h3>
            <p className="text-gray-300 mb-6">Native and cross-platform mobile applications that deliver exceptional user experiences.</p>
            <ul className="space-y-2 mb-6 text-sm">
              <li>• iOS & Android Apps</li>
              <li>• React Native Development</li>
              <li>• Flutter Applications</li>
              <li>• Progressive Web Apps</li>
            </ul>
            <Link href="/services/mobile-app-development" className="text-blue-400 hover:text-blue-300 font-semibold">
              Learn More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="text-4xl mb-6">🔒</div>
            <h3 className="text-2xl font-semibold mb-4">Cybersecurity</h3>
            <p className="text-gray-300 mb-6">Comprehensive security solutions to protect your digital assets and ensure compliance.</p>
            <ul className="space-y-2 mb-6 text-sm">
              <li>• Security Audits</li>
              <li>• Penetration Testing</li>
              <li>• Compliance Consulting</li>
              <li>• Incident Response</li>
            </ul>
            <Link href="/services/cybersecurity" className="text-blue-400 hover:text-blue-300 font-semibold">
              Learn More →
            </Link>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  TC
                </div>
                <div>
                  <h3 className="text-xl font-semibold">TechCorp</h3>
                  <p className="text-gray-400">E-commerce Platform</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Zion Tech Solutions transformed our legacy e-commerce platform into a modern, AI-powered marketplace. 
                Our conversion rates increased by 250% and customer satisfaction improved significantly."
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-blue-400">AI Development</span>
                <span className="text-gray-400">6 months</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  IL
                </div>
                <div>
                  <h3 className="text-xl font-semibold">InnovateLabs</h3>
                  <p className="text-gray-400">Cloud Migration</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Their cloud architecture expertise helped us migrate our entire infrastructure to AWS, 
                reducing costs by 40% while improving performance and scalability."
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-purple-400">Cloud Architecture</span>
                <span className="text-gray-400">4 months</span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-gray-300">We analyze your business needs and technical requirements to create a tailored solution.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Planning</h3>
              <p className="text-gray-300">We develop a detailed project plan with timelines, milestones, and deliverables.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-gray-300">Our expert team builds your solution using cutting-edge technologies and best practices.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3">Deployment</h3>
              <p className="text-gray-300">We deploy your solution and provide ongoing support to ensure success.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help transform your business with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Start Your Project
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Learn About Us
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;