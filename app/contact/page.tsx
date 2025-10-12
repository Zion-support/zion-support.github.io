'use client';
import React, { useState, useEffect } from 'react';
import { Helmet  } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Star, Shield, Cloud, MessageCircle  } from "lucide-react";
const ContactPage: React.FC = () => {
  return (
  return (
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  
  );

  );
});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


            </div>
          </div>
        </div></>
    );
  }

  return (
    <>Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch for AI & IT Solutions</title>
        <meta name="description" content="Contact Zion Tech Group for AI solutions, cloud infrastructure, cybersecurity, and custom software development. Call +1 302 464 0950 or email kleber@ziontechgroup.com" /></meta>
        <meta name="keywords" content="contact zion tech group, AI consulting, IT services, cloud solutions, cybersecurity, software development" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/contact" /></link>
      </Helmet>

      <>div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" ></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden" ></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" /></div><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div></>
          <>div className="relative max-w-7xl mx-auto text-center" ></div><div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30" ></div></>
              <MessageCircle className="w-4 h-4" /></MessageCircle>
              <span>Get in Touch</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight" ></h1>
              Let's Build Something{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" ></span>
                Amazing Together;
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed" ></p>
              Ready to transform your business with cutting-edge AI and IT solutions? 
              Get in touch with our expert team and let's discuss your project.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative" ></section>
          <>div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" /></div><div className="relative max-w-7xl mx-auto" ></div></>
            <>div className="grid grid-cols-2 md:grid-cols-4 gap-8" ></div>
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300" ></div><div className="flex justify-center mb-4" ></div></>
                    {stat.icon}
                  </div>
                  <>div className="text-3xl md:text-4xl font-bold text-white mb-2" ></div>
                    {stat.number}
                  </div><div className="text-gray-300 text-sm" ></div></>
                    {stat.label}
                  </div>
                  <>div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2" ></label>
                      Email;
                    </label>
                    <input;></input>
                      type="email" className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" ></input>
                    />
                  </div><div></div></>
                    <label className="block text-sm font-medium text-gray-300 mb-2" ></label>
                      Message;
                    </label>
                    <textarea;
                      rows={4}></textarea>
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" ></textarea>
                    />
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300" ></button>
                    Send Message;
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div></>
  );
};

export default ContactPage;)