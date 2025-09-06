<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

<<<<<<< HEAD
const ServicesPage = () => {
  return (
    <Layout>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services and solutions" />
      </Head>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <p className="text-center text-gray-600">Comprehensive technology solutions for your business needs.</p>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
=======
export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies to meet your specific business requirements.",
      features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"],
      icon: "💻"
    },
    {
      title: "AI & Machine Learning",
      description: "Advanced AI solutions that automate processes, enhance decision-making, and drive innovation.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Chatbots & Virtual Assistants"],
      icon: "🤖"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize your business operations.",
      features: ["Cloud Migration", "Infrastructure Setup", "DevOps & CI/CD", "Monitoring & Optimization"],
      icon: "☁️"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your data and systems from modern threats.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
      icon: "🔒"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization tools.",
      features: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Data Warehousing"],
      icon: "📊"
    },
    {
      title: "IT Consulting",
      description: "Strategic technology consulting to help you make informed decisions and optimize your IT investments.",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Vendor Management"],
      icon: "💡"
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including custom software development, AI solutions, cloud services, cybersecurity, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Our Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to drive your business forward
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="card group hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-6 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Discovery</h3>
                <p className="text-gray-300">
                  We start by understanding your business goals, challenges, and requirements through detailed consultation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Planning</h3>
                <p className="text-gray-300">
                  Our team creates a comprehensive project plan with timelines, milestones, and resource allocation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Development</h3>
                <p className="text-gray-300">
                  We build your solution using agile methodologies with regular updates and feedback sessions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Deployment</h3>
                <p className="text-gray-300">
                  We deploy your solution and provide comprehensive training and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge technologies and frameworks to build robust, scalable solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="card text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mr-2 mb-2">React</span>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mr-2 mb-2">Next.js</span>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mr-2 mb-2">TypeScript</span>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mr-2 mb-2">Tailwind CSS</span>
                </div>
              </div>
              
              <div className="card text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mr-2 mb-2">Node.js</span>
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mr-2 mb-2">Python</span>
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mr-2 mb-2">Java</span>
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mr-2 mb-2">Go</span>
                </div>
              </div>
              
              <div className="card text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Cloud & DevOps</h3>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm mr-2 mb-2">AWS</span>
                  <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm mr-2 mb-2">Azure</span>
                  <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm mr-2 mb-2">Docker</span>
                  <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm mr-2 mb-2">Kubernetes</span>
                </div>
              </div>
              
              <div className="card text-center">
                <h3 className="text-xl font-semibold text-white mb-4">AI & Data</h3>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm mr-2 mb-2">TensorFlow</span>
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm mr-2 mb-2">PyTorch</span>
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm mr-2 mb-2">MongoDB</span>
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm mr-2 mb-2">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your requirements and create a solution that drives your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Free Consultation
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
