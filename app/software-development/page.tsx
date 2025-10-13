import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Monitor, Cloud, Database, Shield, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      title: "Custom Web Applications",
      description: "Build scalable, modern web applications using the latest technologies and best practices for optimal performance and user experience.",
      icon: <Globe className="w-6 h-6" />,
      features: ["React/Next.js development", "Node.js backends", "Database design", "API development"]
    },
    {
      title: "Mobile App Development",
      description: "Create native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["React Native apps", "Native iOS/Android", "Cross-platform solutions", "App store deployment"]
    },
    {
      title: "Enterprise Software",
      description: "Develop robust enterprise software solutions that integrate seamlessly with your existing systems and workflows.",
      icon: <Monitor className="w-6 h-6" />,
      features: ["System integration", "Legacy modernization", "Workflow automation", "Data migration"]
    },
    {
      title: "Cloud Solutions",
      description: "Design and implement cloud-based solutions that scale with your business and provide reliable, secure access to your applications.",
      icon: <Cloud className="w-6 h-6" />,
      features: ["AWS/Azure/GCP", "Microservices architecture", "Containerization", "Auto-scaling"]
    },
    {
      title: "Database Design",
      description: "Create efficient, scalable database architectures that support your application's data requirements and performance needs.",
      icon: <Database className="w-6 h-6" />,
      features: ["SQL/NoSQL databases", "Data modeling", "Performance optimization", "Backup strategies"]
    },
    {
      title: "Security Implementation",
      description: "Implement comprehensive security measures to protect your applications and data from threats and vulnerabilities.",
      icon: <Shield className="w-6 h-6" />,
      features: ["Authentication systems", "Data encryption", "Security audits", "Compliance standards"]
    }
  ];

  const technologies = [
    "React", "Next.js", "Node.js", "TypeScript", "Python", "Java", "C#", "Go",
    "React Native", "Flutter", "Swift", "Kotlin", "PostgreSQL", "MongoDB",
    "Redis", "Docker", "Kubernetes", "AWS", "Azure", "GCP"
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project plan with timelines and milestones."
    },
    {
      step: "2",
      title: "Design & Architecture",
      description: "Our team designs the system architecture and creates wireframes and prototypes."
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "We build your application using agile methodologies with continuous testing and quality assurance."
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "We deploy your application and provide ongoing maintenance and support services."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Software Development - Zion Tech Group</title>
        <meta name="description" content="Professional software development services for modern applications." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">
              Software Development Services
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              We build custom software solutions that drive business growth and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-white/10 text-white rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}