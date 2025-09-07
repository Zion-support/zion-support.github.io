import Head from 'next/head';
import Link from 'next/link';

const features = [
  {
    icon: Shield,
    title: 'Cybersecurity & Compliance',
    description: 'Comprehensive security solutions for government agencies',
    benefits: ['FISMA compliance', 'Data encryption', 'Access control', 'Audit trails']
  },
  {
    icon: Users,
    title: 'Citizen Services',
    description: 'Digital platforms for citizen engagement and services',
    benefits: ['Online portals', 'Service delivery', 'Citizen engagement', 'Accessibility']

    icon: Database,
    title: 'Data Management',
    description: 'Secure data management and analytics for government data',
    benefits: ['Data governance', 'Analytics', 'Reporting', 'Integration']
  }
];

export default function GovernmentSolutionsPage() {

  return (
    <>
      <Head>
        <title>Government Solutions - Zion Tech Group</title>
        <meta name="description" content="Secure government technology solutions including cybersecurity, citizen services, document management, and data management." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Government Solutions</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Secure and compliant technology solutions for government agencies. 
                From cybersecurity to citizen services and data management.
              </p>

          </div>
        </section>

        {/* Features Section */}

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Government Technology Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our government solutions are built with security and compliance in mind.

              </p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>

          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto">";
              <h2 className="text-3xl font-bold text-white text-center mb-12">";
                Our Government Solutions;
              </h2>;

            </div>;
          </div>;
        </section>;
        {/* Compliance Section */}

          <div className="container mx-auto px-4">";
            <div className="bg-gray-800/50 rounded-2xl p-12">";
              <div className="text-center mb-12">";
                <h2 className="text-4xl font-bold text-white mb-4">";
                  Government Compliant & Secure;
                </h2>;
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">";

                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <Shield className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">FISMA Compliant</h3>";
                  <p className="text-gray-300">Built to meet all FISMA requirements for federal information security.</p>";
                </div>;
                <div className="text-center">";
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <Database className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">FedRAMP Authorized</h3>";
                  <p className="text-gray-300">Cloud solutions that meet FedRAMP security requirements.</p>";
                </div>;
                <div className="text-center">";
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <FileText className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">Section 508 Compliant</h3>";
                  <p className="text-gray-300">Accessible solutions that meet Section 508 accessibility standards.</p>";
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}

          <div className="container mx-auto px-4">";
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">";
              <h2 className="text-4xl font-bold text-white mb-6">";
                Ready to Transform Government Services?;
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">";
                Let our government technology experts help you implement solutions that;
                enhance citizen services while maintaining the highest security standards.;
              </p>;

                </button>;
              </div>;
            </div>;
          </div>;
        </section>;

                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-gray-700 to-blue-800 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Modernize Government?</h3>
                <p className="text-lg mb-6">
                  Let our government technology experts help you implement solutions
                  that improve citizen services and government efficiency.
                </p>
                <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>

                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}

            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Government Solutions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our government solutions can support your agency.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>

    </>

          </div>
        </section>
      </div>
    </Layout>
    </Layout>
    </>