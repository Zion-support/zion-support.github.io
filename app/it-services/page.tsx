import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Code, Smartphone, Database, Network, CheckCircle, ArrowRight, Clock, Users } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      name: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions that grow with your business needs.",
      features: ["AWS/Azure/GCP migration", "Cloud architecture design", "Auto-scaling solutions", "Cost optimization"],
      icon: <Cloud className="w-8 h-8" />,
      benefits: ["99.9% uptime", "Global scalability", "Pay-as-you-scale", "24/7 monitoring"]
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security measures to protect your digital assets and data.",
      features: ["Security audits", "Penetration testing", "Compliance management", "Incident response"],
      icon: <Shield className="w-8 h-8" />,
      benefits: ["SOC 2 compliance", "Real-time monitoring", "Threat detection", "Data encryption"]
    },
    {
      name: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      features: ["React/Next.js development", "API integration", "Performance optimization", "SEO optimization"],
      icon: <Code className="w-8 h-8" />,
      benefits: ["Mobile-first design", "Fast loading times", "Search engine optimized", "Cross-browser compatible"]
    },
    {
      name: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: ["iOS/Android apps", "React Native development", "App store optimization", "Push notifications"],
      icon: <Smartphone className="w-8 h-8" />,
      benefits: ["Native performance", "Offline functionality", "App store ready", "User-friendly design"]
    },
    {
      name: "Database Management",
      description: "Efficient database design, optimization, and management for optimal performance.",
      features: ["Database design", "Performance tuning", "Data migration", "Backup & recovery"],
      icon: <Database className="w-8 h-8" />,
      benefits: ["High performance", "Data integrity", "Automated backups", "Scalable architecture"]
    },
    {
      name: "DevOps & CI/CD",
      description: "Streamlined development workflows with automated testing and deployment pipelines.",
      features: ["CI/CD pipelines", "Infrastructure as code", "Container orchestration", "Monitoring & logging"],
      icon: <Network className="w-8 h-8" />,
      benefits: ["Faster deployments", "Reduced errors", "Automated testing", "Continuous integration"]
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", 
    "MongoDB", "PostgreSQL", "Redis", "GraphQL", "TypeScript", "Next.js"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We analyze your business needs and technical requirements to design the perfect solution"
    },
    {
      step: "02",
      title: "Solution Architecture",
      description: "Our experts design a scalable and secure architecture tailored to your needs"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We develop your solution using agile methodologies with continuous testing"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing support and maintenance services"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Professional IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and DevOps solutions for modern businesses." />
        <meta name="keywords" content="it services, cloud computing, cybersecurity, web development, mobile development, devops, database management" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT solutions for modern businesses" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive technology solutions to power your digital transformation. 
                From cloud infrastructure to cybersecurity, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Free Consultation
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end technology solutions designed to accelerate your business growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest technologies and frameworks to deliver cutting-edge solutions
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span key={index} className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Development Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and client satisfaction
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300 text-lg">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-lg">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can help you achieve your business goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Get Started Today
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;