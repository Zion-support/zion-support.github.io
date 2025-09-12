import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Solutions transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 40% and their cloud architecture is incredibly scalable.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupXYZ",
      content: "The team at Zion Tech delivered our mobile app ahead of schedule and under budget. Their expertise in React Native and cloud integration was outstanding.",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, DataFlow Inc",
      content: "Their data analytics solutions helped us uncover insights we never knew existed. The ROI on their services has been phenomenal.",
      avatar: "👩‍🔬"
    }
  ];

  const features = [
    {
      icon: "🤖",
      title: "AI Development",
      description: "Custom AI solutions and machine learning models for your business needs.",
      benefits: ["Machine Learning Models", "Natural Language Processing", "Computer Vision"]
    },
    {
      icon: "☁️",
      title: "Cloud Architecture",
      description: "Scalable cloud solutions and infrastructure design for modern applications.",
      benefits: ["AWS/Azure/GCP Migration", "Microservices Architecture", "Auto-scaling Solutions"]
    },
    {
      icon: "🌐",
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      benefits: ["React/Next.js Development", "Progressive Web Apps", "API Integration"]
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      benefits: ["React Native", "Flutter Development", "App Store Optimization"]
    },
    {
      icon: "⛓️",
      title: "Blockchain Solutions",
      description: "Decentralized applications and smart contract development.",
      benefits: ["Smart Contracts", "DeFi Applications", "Web3 Integration"]
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      benefits: ["Security Audits", "Penetration Testing", "Compliance Management"]
    }
  ];

  return (
    <Layout 
      title="Zion Tech Solutions - Leading Technology Solutions Provider"
      description="Zion Tech Solutions provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence."
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Cutting-Edge Technology</span>
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services. 
              Join 150+ companies that trust us with their digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold transition-colors text-lg">
                Explore Our Services
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Core Services</h2>
              <p className="text-xl max-w-3xl mx-auto text-gray-300">
                We provide comprehensive technology solutions across all major domains
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-200 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center text-white mb-16">
              <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-xl max-w-3xl mx-auto text-gray-300">
                Don't just take our word for it - hear from the companies we've helped transform
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <p className="text-gray-200 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-blue-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Join the digital revolution with our expert technology solutions. 
                Get a free consultation and discover how we can help your business thrive.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="/blog" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
        </main>
      </div>
    </Layout>
  );
};

export default Home;