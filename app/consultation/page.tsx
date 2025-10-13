import React from 'react';
import { Helmet } from 'react-helmet-async';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" content="Advanced consultation solutions by Zion Tech Group"container mx-auto px-4 py-16"text-center"text-4 xl font-bold text-gray-900 mb-4"text-xl text-gray-600 mb-8"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"container mx-auto px-4 py-20"text-5 xl font-bold text-white mb-6"text-xl text-gray-300 mb-8 max-w-3 xl"bg-slate-800 p-8 rounded-lg"text-2 xl font-bold text-white mb-4"text-gray-300"container mx-auto px-4 py-16"text-center"text-4 xl font-bold text-gray-900 mb-6"text-xl text-gray-600 mb-8"description"Schedule a consultation with our AI and IT experts. Get personalized advice and solutions for your business needs." />"keywords" content=" /></Helmet>"

      {/* Hero Section */}
      <section className="
<div className="container mx-auto px-4"max-w-4 xl mx-auto text-center"
<h1 className="
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"text-xl md:text-2 xl mb-8 text-blue-100"
              Get personalized advice from our AI and IT experts to transform your business with cutting-edge technology.
            </p>
<div className="
<a
                href="#consultation-types"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"#contact""border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Contact Us Directly
              </a></div>

  return (
  // TODO: Add parameters
)
    <div className="
<Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"max-w-7 xl mx-auto"
<div className="
<h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6"bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
<p className="
              Get expert advice on your AI and IT needs. Schedule a free consultation with our specialists.
            </p>
          </div></div>
</section>

      {/* Consultation Types */}
      <section id="consultation-types"py-16"
<div className="
<div className="max-w-6 xl mx-auto"text-3 xl font-bold text-gray-900 mb-8 text-center"
              Choose Your Consultation Type
            </h2>
<p className="
              We provide consultation across all areas of AI and IT.
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"cyber-card text-center"
<div className="
<service.icon className="w-8 h-8 text-white"text-xl font-bold text-white mb-2"
<p className="
            ))}
          </div></div>
</section>

      {/* Consultation Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"max-w-7 xl mx-auto"
<div className="
<h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"text-xl text-gray-300"
              Choose the consultation type that best fits your needs.
            </p></div>
<div className="
            {consultationTypes.map((type, index) => (
  // TODO: Add parameters
)
              <div key={index} className={`cyber-card ${index === 0 ? 'ring-2 ring-cyan-400' : '}`}>''
<div className="text-center mb-6"text-xl font-bold text-white mb-2"
<div className="
<Clock className="w-4 h-4 text-gray-400 mr-2"text-gray-400"
<div className="
<ul className="space-y-3 mb-6"flex items-center text-gray-300"
<CheckCircle className="
                      {feature}
                    </li>
                  ))}
                </ul>
<button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                  index === 0
                    ? 'cyber-button' '
                    : 'cyber-button-secondary''
                }`}>
                  {index === 0 ? 'Schedule Free Consultation' : 'Book Consultation'}'
                </button></div>
            ))}
          </div></div>
</section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"max-w-4 xl mx-auto"
<div className="
<div className="text-center mb-8"text-3 xl font-bold text-white mb-4"
                Schedule Your Consultation
              </h2>
<p className="
                Fill out the form below and we'll get back to you within 24 hours.'
              </p></div>
<form onSubmit={handleSubmit} className="space-y-6"grid grid-cols-1 md:grid-cols-2 gap-6"
<div>
<label className="
<input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"Your full name""block text-white font-medium mb-2"
<input
                    type=""
                    name=""
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="
                    placeholder="your@email.com"
                  /></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6"block text-white font-medium mb-2"
<input
                    type=""
                    name=""
                    value={formData.company}
                    onChange={handleInputChange}
                    className="
                    placeholder="Your company name"
                  /></div>
<div>
<label className="block text-white font-medium mb-2"tel""phone""w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder=""
                  /></div>
</div>
<div>
<label className="
<select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"py-16 bg-white"
<div className="
<div className="max-w-4 xl mx-auto"text-3 xl font-bold text-gray-900 mb-8 text-center"
              Schedule Your Consultation
            </h2>
<form onSubmit={handleSubmit} className="
<div className="grid md:grid-cols-2 gap-6 mb-6"name" className="
                    Full Name *
                  </label>
<input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"Enter your full name""email" className="
                    Email Address *
                  </label>
<input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"Enter your email""block text-white font-medium mb-2"
<textarea
                  name=""
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="
                  placeholder="Tell us about your project or requirements..."
                /></div>
<button type="submit"cyber-button w-full"
<ArrowRight className="
                Schedule Consultation
              </button></form>
</div></div>
</section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"max-w-4 xl mx-auto"
<div className="
<div className="text-center"w-8 h-8 text-cyan-400 mx-auto mb-4"
<h3 className="
<p className="text-gray-300"text-center"
<Mail className="
<h3 className="text-lg font-semibold text-white mb-2"text-gray-300"
<div className="
<MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4"text-lg font-semibold text-white mb-2"
<p className="
</div></div>
</section></section>
</div></div>
  );
};
;
export default ConsultationPage;
      <Footer /></div>
  )
}
;
export default ConsultationPage;

