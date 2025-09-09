setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',

    }
  }
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ready to transform your business with cutting-edge technology? 

        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">

                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+1 302 464 0950</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">

                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">kleber@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">

                </div>
              </div>
              
              <div className="flex items-center space-x-3">

                  <p className="font-medium text-gray-900">Business Hours</p>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Response Promise */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">

              <h3 className="font-semibold text-blue-900">Quick Response Guarantee</h3>
            </div>
            <p className="text-blue-800">
              We respond to all inquiries within one business day. 
              For urgent matters, call us directly.
            </p>
          </div>
        </div>

        {/* Contact Form */}

          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a Message
            </h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                <div className="flex items-center">

                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <div className="flex items-center">

                  <p className="text-red-800">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  />
                </div>
              </div>

                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your company name"
                />
              </div>

                />
              </div>

              <button

                } transition-colors`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="spinner w-4 h-4 mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
  );
};