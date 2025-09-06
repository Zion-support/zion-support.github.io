import Link from "next/link";

export const metadata = {
  title: "Services | Zion Tech Group - AI, Micro SaaS, and IT Solutions",
  description: "Comprehensive technology services including AI solutions, micro SaaS development, IT services, mobile development, data analytics, and cybersecurity.",
};

export default function ServicesOverviewPage() {
  const services = [
    {
      title: "AI Services",
      href: "/services/ai-services",
      description: "Cutting-edge artificial intelligence solutions for your business needs.",
      icon: "🤖",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics"
      ]
    },
    {
      title: "Micro SaaS",
      href: "/services/micro-saas",
      description: "Scalable software-as-a-service solutions for modern businesses.",
      icon: "☁️",
      features: [
        "Custom Web Applications",
        "API Development",
        "Database Design",
        "Cloud Integration"
      ]
    },
    {
      title: "IT Services",
      href: "/services/it-services",
      description: "Comprehensive IT infrastructure and support services.",
      icon: "💻",
      features: [
        "Cloud Migration",
        "DevOps & SRE",
        "System Administration",
        "Network Security"
      ]
    },
    {
      title: "Mobile Development",
      href: "/services/mobile-development",
      description: "Cross-platform mobile applications for iOS and Android.",
      icon: "📱",
      features: [
        "React Native Apps",
        "Native iOS/Android",
        "Progressive Web Apps",
        "App Store Optimization"
      ]
    },
    {
      title: "Data Analytics",
      href: "/services/data-analytics",
      description: "Transform your data into actionable business insights.",
      icon: "📊",
      features: [
        "Business Intelligence",
        "Data Visualization",
        "ETL Pipelines",
        "Real-time Analytics"
      ]
    },
    {
      title: "Cybersecurity",
      href: "/services/cybersecurity",
      description: "Protect your business with advanced security solutions.",
      icon: "🔒",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Incident Response"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}