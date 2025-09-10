import React from 'react'

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React/Next.js", "TypeScript", "Responsive Design", "SEO Optimization"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      features: ["AWS/Azure/GCP", "DevOps", "Containerization", "Microservices"]
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning.",
      features: ["Custom AI Models", "Data Analytics", "Automation", "Predictive Analytics"]
    },
    {
      title: "Consulting",
      description: "Strategic technology consulting to help your business grow.",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Training"]
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance for your technology solutions.",
      features: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Security Audits"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Contact us today to discuss your project requirements
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage