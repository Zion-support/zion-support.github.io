import { ArrowRight, Calendar, Users, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Consultation() {
  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional consultation services from Zion Tech Group"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Get personalized guidance from our experienced team of IT experts. Transform your business with strategic technology solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex items-center justify-center gap-4 text-white">
                <Calendar className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Flexible Scheduling</div>
                  <div className="text-gray-400">Book at your convenience</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-white">
                <Users className="w-8 h-8 text-blue-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Expert Team</div>
                  <div className="text-gray-400">10+ years experience</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-white">
                <Clock className="w-8 h-8 text-green-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Quick Response</div>
                  <div className="text-gray-400">24/7 support available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consultation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive technology consulting to help you make informed decisions and achieve your business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">AI Strategy</h3>
                <p className="text-gray-300 mb-4">
                  Develop a comprehensive AI strategy tailored to your business needs and objectives.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• AI readiness assessment</li>
                  <li>• Technology roadmap</li>
                  <li>• Implementation planning</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Cloud Migration</h3>
                <p className="text-gray-300 mb-4">
                  Plan and execute a seamless migration to the cloud with minimal downtime.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Cloud architecture design</li>
                  <li>• Migration strategy</li>
                  <li>• Security implementation</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
                <p className="text-gray-300 mb-4">
                  Strengthen your security posture with expert guidance and best practices.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Security audit</li>
                  <li>• Risk assessment</li>
                  <li>• Compliance planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a consultation with our experts and discover how technology can drive your success.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}