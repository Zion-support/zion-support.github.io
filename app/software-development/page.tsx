import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Clock,
  BarChart3,
  Settings,
  Monitor,
  Cpu
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const SoftwareDevelopmentPage = () => {
  const services = [
    {
      title: "Web Application Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and frameworks",
      icon: <Globe className="w-8 h-8" />,
      features: ["React, Vue, Angular", "Node.js, Python, PHP", "Responsive design", "Progressive Web Apps"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["iOS & Android", "React Native, Flutter", "Native development", "App Store optimization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Custom Software Solutions",
      description: "Tailored software solutions designed to meet your specific business requirements",
      icon: <Code className="w-8 h-8" />,
      features: ["Business logic", "Custom APIs", "Integration services", "Legacy system modernization"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud-Native Applications",
      description: "Scalable applications designed for cloud environments with microservices architecture",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Microservices", "Containerization", "Auto-scaling", "Cloud deployment"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Database Solutions",
      description: "Robust database design and implementation for optimal performance and scalability",
      icon: <Database className="w-8 h-8" />,
      features: ["SQL & NoSQL", "Data modeling", "Performance optimization", "Data migration"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration and data exchange",
      icon: <Settings className="w-8 h-8" />,
      features: ["REST & GraphQL", "API documentation", "Authentication", "Rate limiting"],
      color: "from-red-500 to-pink-500"
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      items: ["React", "Vue.js", "Angular", "TypeScript", "Next.js", "Nuxt.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Java", "C#", "Go", "PHP"]
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"]
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"]
    },
    {
      category: "Cloud",
      items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
    },
    {
      category: "DevOps",
      items: ["CI/CD", "Jenkins", "GitLab", "Terraform", "Ansible"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understand your requirements and create a detailed project roadmap",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "Create wireframes, prototypes, and technical architecture",
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular sprints and continuous integration",
      icon: <Code className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Comprehensive testing and seamless deployment to production",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Faster Time to Market",
      description: "Agile development methodology ensures rapid delivery of features",
      icon: <Zap className="w-6 h-6" />,
      stat: "50% faster"
    },
    {
      title: "Scalable Solutions",
      description: "Built to grow with your business and handle increasing demands",
      icon: <Cpu className="w-6 h-6" />,
      stat: "Unlimited scale"
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing ensures bug-free, reliable software",
      icon: <Shield className="w-6 h-6" />,
      stat: "99.9% uptime"
    },
    {
      title: "Ongoing Support",
      description: "Continuous maintenance and updates to keep your software current",
      icon: <Users className="w-6 h-6" />,
      stat: "24/7 support"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Software Development Services - Zion Tech Group | Custom Web & Mobile Apps</title>
        <meta name="description" content="Professional software development services including web applications, mobile apps, custom solutions, and cloud-native applications. Expert developers using modern technologies." />
        <meta name="keywords" content="software development, web development, mobile app development, custom software, cloud applications, API development" />
        <link rel="canonical" href="https://ziontechgroup.com/software-development" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Software Development
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your ideas into powerful software solutions. Our expert developers create custom web applications, 
            mobile apps, and enterprise software that drive business growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              href="/portfolio"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View Portfolio
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive software development solutions tailored to your business needs and objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We leverage the latest technologies and frameworks to build modern, scalable, and maintainable software solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tech.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Development Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Partner with us for software development that delivers real business value and competitive advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Software Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our expert developers bring your vision to life with custom software that drives business growth. 
            Contact us today for a free consultation and project estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              href="/services"
              variant="outline"
              size="lg"
              icon={<Code className="w-5 h-5" />}
            >
              View All Services
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;