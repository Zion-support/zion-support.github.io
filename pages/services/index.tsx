import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Services: NextPage = () => {
  const services = [
    {
      title: "AI Development & Machine Learning",
      description: "Custom AI solutions and machine learning models tailored to your business needs.",
      features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Chatbot Development"],
      icon: "🤖",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Cloud Architecture & Migration",
      description: "Scalable cloud solutions and seamless migration services for modern applications.",
      features: ["AWS/Azure/GCP Migration", "Microservices Architecture", "Container Orchestration", "Auto-scaling Solutions"],
      icon: "☁️",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "Web Application Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      features: ["React/Next.js Development", "Full-stack Solutions", "API Development", "Progressive Web Apps"],
      icon: "🌐",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native Development", "Native iOS/Android", "App Store Optimization", "Push Notifications"],
      icon: "📱",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business operations.",
      features: ["Process Automation", "Legacy System Modernization", "Data Migration", "Change Management"],
      icon: "🔄",
      color: "from-teal-500 to-green-600"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
      icon: "🔒",
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      features: ["Data Visualization", "Real-time Dashboards", "Predictive Modeling", "Business Intelligence"],
      icon: "📊",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "DevOps & Automation",
      description: "Streamline your development and deployment processes with DevOps best practices.",
      features: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Monitoring & Logging", "Performance Optimization"],
      icon: "⚙️",
      color: "from-gray-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Our Services - Zion Tech Solutions | Technology Solutions Provider</title>
        <meta name="description" content="Explore our comprehensive technology services including AI development, cloud architecture, web development, and digital transformation solutions." />
        <meta name="keywords" content="technology services, AI development, cloud solutions, web development, mobile apps, digital transformation" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Our Technology Services
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
              We offer comprehensive technology solutions to help your business thrive in the digital age. From AI development to cloud architecture, we have the expertise to transform your ideas into reality.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-white/80 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-white/70 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Discovery</h3>
                <p className="text-white/80 text-sm">We start by understanding your business goals, challenges, and requirements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Strategy</h3>
                <p className="text-white/80 text-sm">We develop a comprehensive strategy and roadmap for your project.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Development</h3>
                <p className="text-white/80 text-sm">Our expert team builds your solution using the latest technologies.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Deployment</h3>
                <p className="text-white/80 text-sm">We deploy your solution and provide ongoing support and maintenance.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Zion Tech Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Expert Team</h3>
                <p className="text-white/80">Our team consists of experienced developers, designers, and strategists with deep expertise in cutting-edge technologies.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Fast Delivery</h3>
                <p className="text-white/80">We use agile methodologies and modern development practices to deliver high-quality solutions on time and within budget.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Ongoing Support</h3>
                <p className="text-white/80">We provide comprehensive support and maintenance services to ensure your solution continues to perform optimally.</p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "React", "Next.js", "Node.js", "Python", "TypeScript", "JavaScript",
                "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform",
                "MongoDB", "PostgreSQL", "Redis", "GraphQL", "REST API", "Microservices",
                "TensorFlow", "PyTorch", "OpenAI", "Machine Learning", "AI/ML", "Data Science"
              ].map((tech, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Let's discuss your project and explore how our technology solutions can help your business grow and succeed.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Project
              </Link>
              <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;