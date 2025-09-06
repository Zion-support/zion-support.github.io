export const metadata = {
  title: 'Cybersecurity Suite | Zion Tech Group',
<<<<<<< HEAD
  description: 'Comprehensive cybersecurity suite with advanced threat protection, compliance management, and security monitoring solutions.',
=======
  description: 'Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, and security monitoring.',
  keywords: 'cybersecurity, threat detection, vulnerability assessment, security monitoring, penetration testing'
>>>>>>> bfa374f2346b9b099cf6d7b959fd7dc047e316cc
};

export default function CybersecuritySuitePage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cybersecurity Suite
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive security solutions for enterprise protection
            </p>
=======
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-red-50 to-orange-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Cybersecurity Suite
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Protect your business with our comprehensive cybersecurity solutions. 
          From threat detection to compliance management, we keep your data secure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Cybersecurity Services Inquiry"
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Get Security Assessment
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>
    </div>
  );
}

function SecurityServicesSection() {
  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive evaluation of your current security posture",
      duration: "2-4 weeks",
      price: "Starting at $15,000"
    },
    {
      title: "Penetration Testing",
      description: "Simulated cyber attacks to identify vulnerabilities",
      duration: "1-2 weeks",
      price: "Starting at $8,000"
    },
    {
      title: "Compliance Audit",
      description: "Ensure compliance with industry regulations and standards",
      duration: "3-6 weeks",
      price: "Starting at $25,000"
    },
    {
      title: "Security Training",
      description: "Employee cybersecurity awareness and training programs",
      duration: "Ongoing",
      price: "Starting at $5,000/month"
    },
    {
      title: "Incident Response",
      description: "Rapid response and recovery from security incidents",
      duration: "24/7",
      price: "Starting at $10,000/month"
    },
    {
      title: "Managed Security",
      description: "Complete outsourced security operations and monitoring",
      duration: "Ongoing",
      price: "Starting at $15,000/month"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Security Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <span>Duration: {service.duration}</span>
            </div>
            <div className="text-lg font-semibold text-red-600">{service.price}</div>
>>>>>>> bfa374f2346b9b099cf6d7b959fd7dc047e316cc
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Protection</h3>
              <p className="text-gray-600 mb-4">Multi-layered security protection against all types of threats.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Monitoring</h3>
              <p className="text-gray-600 mb-4">24/7 security monitoring and threat detection.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Incident Response</h3>
              <p className="text-gray-600 mb-4">Rapid response and recovery from security incidents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our cybersecurity suite can protect your organization.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}