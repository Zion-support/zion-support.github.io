ursor/automate-test-fix-improve-and-merge-code-48f3

const DigitalTransformation: NextPage = () => {
  const transformationServices = [
    {
ursor/automate-test-fix-improve-and-merge-code-48f3
    }
  ]

  const transformationStages = [
    {
ursor/automate-test-fix-improve-and-merge-code-48f3
    }
  ]

  const industries = [
ursor/automate-test-fix-improve-and-merge-code-48f3
  ];

  return (
    <MainLayout
      title="Digital Transformation Solutions - Zion Tech Group"
      description="Transform your business with our comprehensive digital transformation services. Modernize your operations, improve efficiency, and drive growth with cutting-edge technology solutions."
      keywords="digital transformation, business modernization, cloud migration, process automation, AI integration, digital strategy"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md: text-5xl font-bold mb-6">Digital Transformation Solutions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Transform your business for the digital age with our comprehensive digital transformation services. 
              Modernize your operations, improve efficiency, and drive sustainable growth.
            </p>
          </div>
        </section>

        {/* Transformation Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Transformation Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end digital transformation services to modernize your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {transformationServices.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover: shadow-lg transition-shadow">
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Transformation Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a structured approach to ensure successful digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
              {transformationStages.map((stage, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover: shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{stage.title}</h3>
                  <p className="text-gray-600 mb-3">{stage.description}</p>
                  <span className="text-sm text-blue-600 font-medium">{stage.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We have experience transforming businesses across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover: shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Our digital transformation initiatives deliver measurable business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{metric.metric}</div>
                  <h3 className="text-xl font-semibold mb-2">{metric.label}</h3>
                  <p className="text-blue-200 text-sm">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine deep industry expertise with cutting-edge technology to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
              <div className="text-center p-6">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-600">We have successfully transformed hundreds of businesses across various industries.</p>
              </div>
              
              <div className="text-center p-6">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Our team of experts brings deep knowledge and experience to every project.</p>
              </div>
              
              <div className="text-center p-6">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Risk Mitigation</h3>
                <p className="text-gray-600">We minimize risks through careful planning and phased implementation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&aposs discuss how we can help you achieve your digital transformation goals and drive sustainable growth.''
            </p>
            <div className="flex flex-col sm: flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/solutions"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                View All Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default DigitalTransformation;