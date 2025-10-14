import React from 'react';';
import { Helmet } from 'react-helmet-async';';

export default function Footer() {
  return (}
    <>
      <Helmet>
        <title>Footer - Zion Tech Group</title>
        <meta name="description" content="Professional footer services by Zion Tech Group." />"
      </Helmet>
      <div className="min-h-screen bg-white">"
        <div className="container mx-auto px-4 py-16">"
          <div className="text-center">"
            <h1 className="text-4xl font-bold text-gray-900 mb-8">";
              Footer
            </h1>
            <p className="text-xl text-gray-600 mb-8">";
              Professional footer services by Zion Tech Group.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">"
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">"
                <h3 className="text-lg font-semibold text-blue-900 mb-2">";
                  Expert Solutions
                </h3>
                <p className="text-blue-700">";
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">"
                <h3 className="text-lg font-semibold text-green-900 mb-2">";
                  Custom Implementation
                </h3>
                <p className="text-green-700">";
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">"
                <h3 className="text-lg font-semibold text-purple-900 mb-2">"
                  24/7 Support
                </h3>
                <p className="text-purple-700">";
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="space-y-4">"
            <h4 className="text-lg font-semibold text-white">Company</h4>"
            <ul className="space-y-2">"


              {company.map((item) => (}
                <li key={item.name}>
                  <Link;>
                    to={item.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"""
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold text-white mt-6">Support</h4>"

            <ul className="space-y-2">"

              {support.map((item) => (}
                <li key={item.name}>
                  <Link;>
                    to={item.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"""
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">""
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">""
            <div className="flex space-x-4">""
              {socialLinks.map((social) => (}
                <a;>
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300""";
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />""
                </a>
              ))}
            </div>
            
            <div className="flex space-x-6 text-sm">""
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">"";
                Privacy Policy;
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">"";
                Terms of Service;
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">";

                Cookie Policy

              </Link>
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm mt-4">""
            © 2024 Zion Tech Group. All rights reserved.
          </div>

        </div>
      </div>
    </>
  );
}