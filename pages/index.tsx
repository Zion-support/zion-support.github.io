import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  const testimonials = [
    {
      quote: "Zion Tech Solutions transformed our business with their AI-powered platform. The results exceeded our expectations and we've seen a 40% increase in efficiency.",
      author: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CEO"
    },
    {
      quote: "Their cloud migration expertise saved us thousands of dollars and improved our system performance significantly. Highly recommended!",
      author: "Michael Chen",
      company: "FinanceFirst",
      role: "CTO"
    },
    {
      quote: "The blockchain solution they built for us has revolutionized our supply chain transparency. Outstanding work!",
      author: "Emily Rodriguez",
      company: "Global Manufacturing Co.",
      role: "Operations Director"
    }
  ];

  const features = [
    {
      title: "AI Development",
      description: "Custom AI solutions and machine learning models for your business needs.",
      icon: "🤖",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Cloud Architecture",
      description: "Scalable cloud solutions and infrastructure design for modern applications.",
      icon: "☁️",
      features: ["AWS/Azure/GCP", "Microservices", "Container Orchestration", "Serverless Computing"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business.",
      icon: "🚀",
      features: ["Process Automation", "Legacy Modernization", "Data Migration", "Change Management"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "Expert Team Members" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Zion Tech Solutions - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Solutions provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence." />
        <meta name="keywords" content="AI development, cloud solutions, digital transformation, technology consulting, software development" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-20">
          <h1 className="text-6xl font-bold mb-6">
            Welcome to Zion Tech Solutions
          </h1>
          <p className="text-2xl mb-8 max-w-4xl mx-auto">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
              Our Services
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get in Touch
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-200 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <div className="text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-blue-300 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white text-center mb-8">Why Choose Zion Tech Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Fast Delivery</h3>
                <p className="text-gray-300">We deliver high-quality solutions on time, every time, with agile development methodologies.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">Our experienced developers and designers bring years of expertise to every project.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and maintenance to ensure your systems run smoothly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss your project and create a custom solution that drives your business forward.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;