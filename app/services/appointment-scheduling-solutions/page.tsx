// import React from 'react';
import { Helmet } from 'react-helmet-async';

const AppointmentSchedulingSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Appointment Scheduling Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced appointment scheduling platform for healthcare providers. Enable online booking, virtual consultations, and patient management with our comprehensive solution." />
        <meta name="keywords" content="appointment scheduling, healthcare technology, online booking, telemedicine, patient management" />
        <link rel="canonical" href="https://ziontechgroup.com/services/appointment-scheduling-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Appointment Scheduling Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your practice with our comprehensive appointment scheduling platform. 
              Designed specifically for healthcare providers to manage bookings, virtual consultations, and patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                📞 Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors"
              >
                ✉️ Schedule Demo
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Comprehensive Scheduling Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-xl font-semibold mb-3">Online Booking</h3>
                <p className="text-gray-600">
                  Patients can book appointments 24/7 through your website with real-time availability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-3">Patient Management</h3>
                <p className="text-gray-600">
                  Complete patient profiles with medical history, insurance, and appointment history.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-3">Virtual Consultations</h3>
                <p className="text-gray-600">
                  Integrated video calling for remote consultations and follow-up appointments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🔔</div>
                <h3 className="text-xl font-semibold mb-3">Automated Reminders</h3>
                <p className="text-gray-600">
                  SMS and email reminders to reduce no-shows and improve patient engagement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
                <p className="text-gray-600">
                  Track appointment patterns, no-show rates, and practice performance metrics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3">HIPAA Compliant</h3>
                <p className="text-gray-600">
                  Fully compliant with healthcare regulations and data protection standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Flexible Pricing Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Small Practice</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">$149<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li>✓ Up to 5 providers</li>
                  <li>✓ 500 appointments/month</li>
                  <li>✓ Online booking</li>
                  <li>✓ SMS reminders</li>
                  <li>✓ Basic reporting</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-green-700 transition-colors">
                  Start Free Trial
                </a>
              </div>
              <div className="bg-green-600 p-8 rounded-xl text-white relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-semibold mb-4">Medium Practice</h3>
                <div className="text-4xl font-bold mb-6">$299<span className="text-lg opacity-80">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li>✓ Up to 15 providers</li>
                  <li>✓ 2,000 appointments/month</li>
                  <li>✓ Virtual consultations</li>
                  <li>✓ Advanced analytics</li>
                  <li>✓ Custom integrations</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full bg-white text-green-600 py-3 rounded-lg font-semibold text-center block hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </a>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Large Practice</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">$599<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li>✓ Unlimited providers</li>
                  <li>✓ Unlimited appointments</li>
                  <li>✓ Multi-location support</li>
                  <li>✓ White-label solution</li>
                  <li>✓ Dedicated support</li>
                </ul>
                <a href="tel:+13024640950" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-green-700 transition-colors">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Transform Your Practice
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Streamline Operations</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Reduce administrative workload by 60%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Decrease no-show rates by 40%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Increase patient satisfaction scores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Optimize provider schedules</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-xl text-white">
                <h4 className="text-xl font-semibold mb-4">Proven Results</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">60%</div>
                    <div className="text-sm opacity-80">Reduction in admin time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">40%</div>
                    <div className="text-sm opacity-80">Decrease in no-shows</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm opacity-80">Patient satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Modernize Your Practice?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to schedule a demo and see how our appointment scheduling solution can transform your healthcare practice.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">📞 Phone</h3>
                <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">✉️ Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">📍 Address</h3>
                <div className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AppointmentSchedulingSolutionsPage;