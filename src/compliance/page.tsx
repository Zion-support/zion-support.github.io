'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CompliancePage: React.FC = () => {
      return (
    <div>
        <Navigation />
        
        {/* Header */}
        <section className="bg-white shadow-sm border-b">
          <div>
            <div>
              <Link
                to="/privacy" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mr-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />Back to Privacy Policy</Link>
              <h1 className="text-2xl font-bold text-gray-900">Compliance & Certifications</h1>
            </div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Overview */}
          <section className="mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Compliance</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">At Zion Tech Group, we maintain the highest standards of compliance and security. 
                Our certifications and adherence to industry standards ensure your data is protected
                and our services meet the most stringent requirements.
              </p>
            </div>
            {/* Certifications Grid */}
            <div>
              {certifications.map((cert, index) => (
                <div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
                    <div>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">{cert.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Areas */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Compliance Areas</h2>
            <div>
              {complianceAreas.map((area, index) => (
                <div>
                  <div>
                    <div>
                      <area.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Questions About Our Compliance?
            </h2>
            <p className="text-gray-600 mb-6">
              Our compliance team is available to answer any questions about our certifications, 
              security measures, or data protection practices.
            </p>
            <a
              href="mailto:compliance@ziontechgroup.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >Contact Compliance Team</a>
            <div>
              <p>Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>);
}
export default CompliancePage