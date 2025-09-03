import React, { useState } from 'react';
import {};
};
  const [formData, setFormData] = useState({};
});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
;
  const services = [';
    'IT Support & Maintenance',Network Setup & Security',Hardware Installation',Data Recovery',Cloud Migration',Custom Solution';
  ];
;
  const handleChange = (e) => {};
    const { name, value } = e.target;
    setFormData(prev => ({};
}) ) };
;
  const handleSubmit = async(e) => {};
}) }, 5000) };
;
  if(isSubmitted) {};
      </section>) }
;
  return (";
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">";
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">";
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">;
          {/* Contact Information */}
          <div>";
            <h2 className="text-4xl font-bold text-gray-900 mb-6">;
              Get Your Custom Quote;
            </h2>";
            <p className="text-xl text-gray-600 mb-8">;
              Tell us about your IT needs and we'll provide you with a detailed,;
              no - obligation quote tailored to your business requirements.</p>;
";
            <div className="space-y-6">";
              <div className="flex items-start space-x-4">";
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">";
                  <Mail className="w-6 h-6 text-blue-600" />;
                </div>;
                <div>";
                  <h3 className="font-semibold text-gray-900">Email Us</h3>";
                  <p className="text-gray-600">quotes@zion.com</p>";
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>;
                </div>;
              </div>;
";
              <div className="flex items-start space-x-4">";
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">";
                  <Phone className="w-6 h-6 text-green-600" />;
                </div>;
                <div>";
                  <h3 className="font-semibold text-gray-900">Call Us</h3>";
                  <p className="text-gray-600">+1 (555) 123-4567</p>";
                  <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM EST</p>;
                </div>;
              </div>;
";
              <div className="flex items-start space-x-4">";
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">";
                  <MapPin className="w-6 h-6 text-purple-600" />;
                </div>;
                <div>";
                  <h3 className="font-semibold text-gray-900">Visit Us</h3>";
                  <p className="text-gray-600">123 Tech Street, Suite 100</p>";
                  <p className="text-sm text-gray-500">New York, NY 10001</p>;
                </div>;
              </div>;
            </div>;
";
            <div className="mt-8 bg-blue-50 rounded-2xl p-6">";
              <h3 className="font-semibold text-gray-900 mb-3">Why Choose Zion?</h3>";
              <ul className="space-y-2 text-sm text-gray-600">;
                <li>• 15+ years of IT service experience</li>;
                <li>• Certified technicians and engineers</li>;
                <li>• 24 / 7 emergency support available</li>;
                <li>• Competitive pricing with no hidden fees</li>;
                <li>• Satisfaction guaranteed or your money back</li>;
              </ul>;
            </div>;
          </div>;

          {/* Quote Form */}";
          <div className="bg-white rounded-3xl p-8 shadow-2xl">";
            <h3 className="text-2xl font-bold text-gray-900 mb-6">;
              Request Your Quote;
            </h3>;
";
            <form onSubmit={handleSubmit} className="space-y-6">";
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
                <div>";
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">;
                    Full Name *;
                  </label>;
                  <div>Broken JSX</div>
                  />;
                </div>;

                <div>";
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">;
                    Email Address *;
                  </label>;
                  <div>Broken JSX</div>
                  />;
                </div>;
              </div>;
";
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
                <div>";
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">;
                    Phone Number;
                  </label>;
                  <div>Broken JSX</div>
                  />;
                </div>;

                <div>";
                  <label htmlFor="comp" className="block text-sm font-medium text-gray-700 mb-2">;
                    Comp Name;
                  </label>;
                  <div>Broken JSX</div>
                  />;
                </div>;
              </div>;

              <div>";
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">;
                  Service Needed *;
                </label>;
                <div>Broken JSX</div>
                  <option value="">Select a service</option>;
                  {services.map((service, index) => (<option key={index} value={service}>{service}</option>) ) }
                </select>;
              </div>;

              <div>";
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">;
                  Project Details;
                </label>;
                <div>Broken JSX</div>
                />;
              </div>;

              <div>Broken JSX</div>
                  <>";
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>;
                    <span>Submitting...</span>;
                  </>;
                ) : (;
                  <>";
                    <Send className="w-5 h-5" />;
                    <span>Get Your Quote</span>;
                  </>;
                )}
              </button>;
";
              <p className="text-xs text-gray-500 text-center">;
                By submitting this form, you agree to our privacy policy and terms of service.';
                We'll never share your information with third parties.</p>;
            </form>;
          </div>;
        </div>;
      </div>;
    </section>;
  )};
'"}}