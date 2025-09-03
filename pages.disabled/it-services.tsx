import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function ITServices() {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup, monitoring, and maintenance services.',
      features: ['Server Setup & Configuration', 'Network Management', 'System Monitoring', 'Performance Optimization']
    }, {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with advanced security measures and compliance frameworks.',
      features: ['Security Audits', 'Threat Detection', 'Data Protection', 'Compliance Management']
    }, {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Migrate to the cloud and optimize your cloud infrastructure for better performance.',
      features: ['Cloud Migration', 'Cloud Architecture', 'Cost Optimization', 'Multi-Cloud Management']
    }, {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and maintenance services.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration']
    }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: 'Improved Performance',
      description: 'Optimize your IT infrastructure for maximum efficiency and reliability.'
    }, {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your business data and systems with enterprise-grade security.'
    }, {
      icon: Users,
      title: 'Reduced Downtime',
      description: 'Minimize system outages with proactive monitoring and maintenance.'
    }, {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Build IT infrastructure that grows with your business needs.'
    }
  ];

  const technologies = ['
    'Microsoft Azure & AWS',
    'Docker & Kubernetes',
    'Linux & Windows Server',
    'SQL Server & PostgreSQL',
    'Active Directory & LDAP',
    'Firewall & VPN Solutions',
    'Backup & Disaster Recovery',
    'Network Security & Monitoring'
  ];

  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>'
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and database management." />"
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      "
      <main className="min-h-screen bg-white">
        {/* Hero Section */}"
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8">"
            <div className="text-center">"
              <div className="flex items-center justify-center mb-4">"
                <Server className="h-8 w-8 text-blue-600 mr-3" />"
                <span className="text-base font-semibold leading-7 text-blue-600">IT Services</span>
              </div>"
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive IT Solutions
              </h1>"
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
                Keep your business running smoothly with our expert IT services. From infrastructure management to cybersecurity, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Services</h2>"
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide end-to-end IT solutions to keep your business secure, efficient, and competitive.
              </p>
            </div>
            "
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => ("
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">"
                  <div className="flex items-center mb-6">"
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">"
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>"
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  "
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  "
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => ("
                      <li key={featureIndex} className="flex items-center">"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />"
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}"
        <section className="py-20 bg-gray-50">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>"
              <p className="text-lg text-gray-600">
                Our IT solutions are designed to improve performance, enhance security, and reduce operational costs.
              </p>
            </div>
            "
            <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => ("
                <div key={index} className="text-center">"
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">"
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>"
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>"
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies & Process Section */}"
        <section className="py-20">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
            <div className="grid grid-cols-1 l,
    g:grid-cols-2 gap-12 items-center">
              <div>"
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Work With</h2>"
                <p className="text-lg text-gray-600 mb-8">
                  We stay current with the latest technologies and best practices to deliver cutting-edge IT solutions.
                </p>
                "
                <div className="grid grid-cols-1 m,
    d:grid-cols-2 gap-4">
                  {technologies.map((tech, index) => ("
                    <div key={index} className="flex items-center">"
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>"
                      <span className="text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              "
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">"
                <h3 className="text-2xl font-bold mb-6">Our Process</h3>"
                <div className="space-y-4">"
                  <div className="flex items-center">"
                    <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">"
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <span>Assessment & Planning</span>
                  </div>"
                  <div className="flex items-center">"
                    <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">"
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <span>Solution Design</span>
                  </div>"
                  <div className="flex items-center">"
                    <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">"
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <span>Implementation</span>
                  </div>"
                  <div className="flex items-center">"
                    <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">"
                      <span className="text-sm font-bold">4</span>
                    </div>
                    <span>Monitoring & Support</span>
                  </div>
                </div>
                <Link "
                  href="/contact" "
                  className="inline-flex items-center mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started"
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8 text-center">"
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>"
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our experts help you build a robust, secure, and scalable IT environment.
            </p>"
            <div className="flex flex-col sm: flex-row gap-4 justify-center">"
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get IT Assessment
              </Link>"
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hove,
    r:bg-white hove,
    r:text-blue-600 transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )}"