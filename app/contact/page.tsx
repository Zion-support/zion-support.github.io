import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Get in touch with our team to discuss your AI and IT needs. We're here to help transform your business.
          </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    Phone
                  </h3>
                  <p className='text-gray-600'>
                    <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">
                      +1 (302) 464-0950
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    Email
                  </h3>
                  <p className='text-gray-600'>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">
                      kleber@ziontechgroup.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
