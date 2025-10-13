import { ArrowRight, Code, Smartphone, Globe, Database, Shield, Zap, Users, BarChart3, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Applications",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      features: ["React/Next.js", "Node.js backend", "Responsive design", "SEO optimized"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store deployment"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Enterprise Software",
      description: "Scalable enterprise solutions tailored to your business needs.",
      features: ["Microservices architecture", "Cloud deployment", "API development", "Database design"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security-First Development",
      description: "Applications built with security as a core principle from day one.",
      features: ["Security audits", "Penetration testing", "Secure coding practices", "Compliance standards"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "High-performance applications optimized for speed and efficiency.",
      features: ["Code optimization", "Caching strategies", "Load balancing", "Performance monitoring"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Augmentation",
      description: "Expert developers to augment your existing team or lead your project.",
      features: ["Senior developers", "Technical leadership", "Code reviews", "Mentoring"]
    }
  ];

  const technologies = [
    "React & Next.js", "Node.js & Express", "Python & Django", "Java & Spring",
    "C# & .NET", "PHP & Laravel", "Vue.js & Nuxt", "Angular", "TypeScript",
    "PostgreSQL", "MongoDB", "Redis", "AWS", "Azure", "Docker", "Kubernetes"
  ];

  return (
    <>
      <Helmet>
        <title>Software Development Services - Zion Tech Group | Custom Web & Mobile Apps</title>
        <meta name="description" content="Professional software development services including web applications, mobile apps, enterprise software, and custom solutions. Expert developers using modern technologies." />
        <meta name="keywords" content="software development, web development, mobile apps, enterprise software, custom development, React, Node.js, Python, Java" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Software Development
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your ideas into powerful software solutions. Our expert developers create 
                custom web applications, mobile apps, and enterprise software that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Development Services
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Comprehensive software development solutions tailored to your specific needs and business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Use
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We work with the latest technologies and frameworks to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <span className="text-white text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Development Process
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery & Planning", description: "Understanding your requirements and creating a detailed project plan." },
                { step: "02", title: "Design & Architecture", description: "Creating wireframes, mockups, and technical architecture." },
                { step: "03", title: "Development & Testing", description: "Building your solution with continuous testing and quality assurance." },
                { step: "04", title: "Deployment & Support", description: "Launching your application and providing ongoing maintenance." }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-300">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your Next Software Solution?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our expert development team bring your ideas to life with cutting-edge software solutions.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}