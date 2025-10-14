export default function ServicesSection() {
  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions including predictive analytics, natural language processing, and computer vision.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      ),
      features: ['Predictive Analytics', 'NLP Solutions', 'Computer Vision', 'Deep Learning']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure, migration services, and cloud-native application development.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      ),
      features: ['AWS/Azure/GCP', 'Migration Services', 'DevOps', 'Containerization']
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications using cutting-edge technologies and frameworks.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      ),
      features: ['React/Next.js', 'Node.js', 'TypeScript', 'Progressive Web Apps']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
      features: ['Business Intelligence', 'Data Visualization', 'ETL Processes', 'Real-time Analytics']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      ),
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      ),
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    }
  ]
  return (
    <section id="services" className="py-20 relative"></section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
                {/* Section Header */}
                <div className="text-center mb-16"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
            <span className="holographic-text">Our Services
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
        {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {services.map((service, index) => (
            <$2 />
              key={index}
              className="cyber-card-advanced p-8 group hover:scale-105 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mb-6 text-black group-hover:scale-110 transition-transform duration-300"></div>
                {service.icon}
              {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300"></h3>
                {service.title}
                <p className="text-gray-400 mb-6 leading-relaxed"></p>
                {service.description}
              {/* Features */}
                <ul className="space-y-2"></ul>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>
                    <svg className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                {feature}
                ))}
              {/* Learn More Button */}
                <div className="mt-6"></div>
                <$2 />
                  href="#contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          ))}
        {/* CTA Section */}
                <div className="text-center mt-16"></div>
          <div className="cyber-card-advanced p-8 max-w-4xl mx-auto"></div>
            <h3 className="text-2xl font-bold text-white mb-4"></h3>
              Ready to Transform Your Business?
            <p className="text-gray-300 mb-8 text-lg"></p>
              Let's discuss how our AI and IT solutions can drive your success.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <$2 />
                href="#contact"
                className="cyber-button px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                Get Free Consultation
  
              <$2 />
                href="tel:+1234567890"
                className="px-8 py-4 text-lg font-semibold text-cyan-400 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 neon-glow">
                Call Now
  
            </div>
                </div>
        </div>
                </div>
    </section>
  ),
}
                </a>
                </a>
</div>
                </div></div>
                </div></span>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </h2></h3>
                </h3></ul>
                </li>