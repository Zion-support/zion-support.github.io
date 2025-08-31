import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Services: NextPage = () => {
  const services = [
    {
      title: "AI Development",
      description: "Custom AI solutions and machine learning models tailored to your business needs.",
      icon: "🤖",
      link: "/services/ai-development",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud solutions and infrastructure design for modern applications.",
      icon: "☁️",
      link: "/services/cloud-services",
      features: ["Cloud Migration", "Infrastructure Design", "DevOps Automation", "Cost Optimization"]
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      icon: "🌐",
      link: "/services/web-development",
      features: ["Frontend Development", "Backend Development", "Full-Stack Solutions", "Progressive Web Apps"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
      link: "/services/mobile-development",
      features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Store Optimization"]
    },
    {
      title: "Blockchain Solutions",
      description: "Innovative blockchain technology solutions for secure, transparent business operations.",
      icon: "⛓️",
      link: "/services/blockchain-solutions",
      features: ["Smart Contracts", "DeFi Applications", "NFT Platforms", "Supply Chain Solutions"]
    },
    {
      title: "Data Analytics",
      description: "Comprehensive data analytics and business intelligence solutions.",
      icon: "📊",
      link: "/services/data-analytics",
      features: ["Data Visualization", "Business Intelligence", "Big Data Processing", "Real-time Analytics"]
    },
    {
      title: "Cybersecurity",
      description: "Advanced cybersecurity solutions to protect your digital assets.",
      icon: "🔒",
      link: "/services/cybersecurity",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"]
    },
    {
      title: "IoT Development",
      description: "Internet of Things solutions for connected devices and smart systems.",
      icon: "📡",
      link: "/services/iot-development",
      features: ["Device Connectivity", "Sensor Integration", "Data Collection", "Smart Automation"]
    },
    {
      title: "DevOps & Automation",
      description: "Streamlined development and deployment processes with automation.",
      icon: "⚙️",
      link: "/services/devops-automation",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Performance Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI development, cloud services, web development, mobile apps, blockchain solutions, and more. Transform your business with our expertise." />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Comprehensive technology services designed to transform your business, 
            drive innovation, and accelerate growth in the digital age.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </Link>
            <Link href="/solutions" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From AI development to cybersecurity, we offer a comprehensive suite of 
              technology services to meet your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 mb-1 flex items-center">
                      <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.link} className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We analyze your requirements and understand your business goals.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">We create a detailed roadmap and technical architecture.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">We build your solution using agile methodologies.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deployment</h3>
              <p className="text-gray-600">We launch your solution and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how we can help you achieve your goals.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule a Consultation
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;