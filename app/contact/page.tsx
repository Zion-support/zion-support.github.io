import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with our AI solutions and enterprise services? 
            Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3">📧</span>
                    <span className="text-gray-700">contact@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3">📞</span>
                    <span className="text-gray-700">+1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3">🌐</span>
                    <a href="https://ziontechgroup.com" className="text-gray-700 hover:text-blue-600">
                      ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 1000+ successful projects delivered</li>
                  <li>• 24/7 technical support</li>
                  <li>• Enterprise-grade security</li>
                  <li>• Custom AI solutions</li>
                  <li>• Rapid development cycles</li>
                </ul>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-8">
                Contact us today for a free consultation and discover how our AI solutions 
                can transform your business.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:contact@ziontechgroup.com"
                  className="block w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Send us an Email
                  <ArrowRightIcon className="h-5 w-5 ml-2 inline" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="block w-full border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}