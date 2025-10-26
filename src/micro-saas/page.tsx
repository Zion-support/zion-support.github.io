import { Phone, Link } from 'lucide-react';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaas: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      <div className="container mx-auto px-4 py-20"></div>"
        <div className="max-w-4xl mx-auto text-center"></div>"
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6"></h1>"
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8"></p>"
            Affordable, powerful AI-driven tools for modern businesses. 50+ ready-to-use applications.
          </p>
          <div className="bg-slate-800/50 rounded-lg p-8"></div>"
            <h2 className="text-2xl font-bold text-white mb-4">Micro SAAS Solutions</h2>"
            <p className="text-gray-300 mb-6"></p>"
              Get access to powerful AI tools and applications designed for small to medium businesses.
            </p>
            <a,
href="/contact""
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center""
            ></a>
              <ArrowRight className="w-5 h-5 mr-2" />"
              Contact Us
            </a>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">"
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center"></div>"
            <h2 className="text-3xl font-bold text-white mb-4">"
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">"
              Contact us today for a free consultation and discover how our solutions can help your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
              <Link,
to="/contact""
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg""
              >
                <Phone className="w-5 h-5 mr-2" />"
                Get Free Consultation
              </Link>
              <a,
href="tel:+13024640950""
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center""
              >
                <Phone className="w-4 h-4 mr-2" />"
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSaas;
import React from 'react';
