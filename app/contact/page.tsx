import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe,
  MessageCircle,
  CheckCircle,
  Star,
  Users,
  Award
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Contact Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Ready to transform your business with AI and IT solutions? Get in touch with our experts today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach our team of AI and IT experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg border border-blue-200">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Call Us</h3>
              <a href="tel:+13024640950" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors block text-center">
                +1 302 464 0950
              </a>
              <p className="text-sm text-gray-600 text-center mt-2">Available 24/7 for enterprise clients</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg border border-green-200">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-lg font-semibold text-green-600 hover:text-green-700 transition-colors block text-center break-all">
                kleber@ziontechgroup.com
              </a>
              <p className="text-sm text-gray-600 text-center mt-2">Response within 2 hours</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg border border-purple-200">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Visit Us</h3>
              <div className="text-lg font-semibold text-purple-600 text-center">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
              <p className="text-sm text-gray-600 text-center mt-2">Delaware, United States</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl shadow-lg border border-orange-200">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Website</h3>
              <a href="https://ziontechgroup.com" className="text-lg font-semibold text-orange-600 hover:text-orange-700 transition-colors block text-center">
                ziontechgroup.com
              </a>
              <p className="text-sm text-gray-600 text-center mt-2">Explore our services online</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Support */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Business Hours & Support</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Business Hours</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold">Emergency Support Only</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold">Enterprise Support</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600">24/7 Support Available</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600">Dedicated Account Manager</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600">Priority Response Times</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600">Free Consultation for Projects $10K+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Zion Tech Group?</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 text-yellow-500 mr-3" />
                    <h3 className="text-xl font-semibold">Proven Track Record</h3>
                  </div>
                  <p className="text-gray-600">
                    Over 5 years of experience delivering AI and IT solutions to Fortune 500 companies and startups alike.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Expert Team</h3>
                  </div>
                  <p className="text-gray-600">
                    Our team consists of certified AI engineers, cloud architects, and cybersecurity experts with deep industry knowledge.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold">Industry Recognition</h3>
                  </div>
                  <p className="text-gray-600">
                    Award-winning solutions and partnerships with leading technology providers including AWS, Microsoft, and Google Cloud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get your free consultation and discover how our AI and IT solutions can drive unprecedented results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Call Now: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}