import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  const featuredServices = [
    {
      title: "AI-Powered Micro SAAS",
      description: "Custom AI solutions and machine learning models that drive business growth",
      features: ["Chatbot Development", "Predictive Analytics", "Computer Vision", "NLP Services"],
      price: "Starting at $1,200/month",
      href: "/services/ai-model-development"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and DevOps automation for modern applications",
      features: ["Cloud Migration", "Container Orchestration", "Serverless Architecture", "DevOps Automation"],
      price: "Starting at $1,800/month",
      href: "/services/cloud-migration"
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics",
      features: ["Real-time Analytics", "Data Visualization", "Business Intelligence", "Data Pipeline Engineering"],
      price: "Starting at $2,000/month",
      href: "/services/business-intelligence"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Enterprise-grade security to protect your business from threats",
      features: ["Security Auditing", "Penetration Testing", "Compliance Management", "Network Security"],
      price: "Starting at $2,500/month",
      href: "/services/security-auditing"
    },
    {
      title: "Automation & Integration",
      description: "Streamline operations with intelligent workflow automation",
      features: ["RPA Solutions", "System Integration", "Workflow Automation", "API Integration"],
      price: "Starting at $2,000/month",
      href: "/services/workflow-automation"
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business needs",
      features: ["Web Applications", "Mobile Apps", "API Development", "Legacy Modernization"],
      price: "Starting at $2,000/project",
      href: "/services/web-development"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider | AI, Cloud, Security & More</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions including AI development, cloud infrastructure, cybersecurity, data analytics, and automation services. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI services, cloud solutions, cybersecurity, data analytics, automation, micro SAAS, software development, technology consulting" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-16">
          <h1 className="text-6xl font-bold mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-2xl mb-8 max-w-4xl mx-auto">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, cybersecurity, and innovative development services.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Explore Our Services
            </Link>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Call: +1 302 464 0950
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Featured Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-green-400 font-semibold mb-4">{service.price}</div>
                <Link 
                  href={service.href} 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-6">Get a free consultation with our technology experts</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call Now: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Send Email
            </a>
          </div>
          <p className="mt-4 text-sm">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>

        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Industry Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
              <p>HIPAA-compliant solutions, medical AI, and secure data management systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Finance</h3>
              <p>Fintech solutions, fraud detection, and regulatory compliance systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">E-commerce</h3>
              <p>Scalable platforms, payment processing, and customer analytics solutions</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;