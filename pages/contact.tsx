import React from 'react';''
import { motion } from 'framer-motion';''
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';''
import MainLayout from '../components/layout/MainLayout';'
export default function ContactPage() {
  return (
    <MainLayout;'
      title="Contact Us - Zion Tech Group"""
      description="Get in touch with our expert team for technology solutions and consulting."""
      keywords="contact, technology consulting, AI services, cloud solutions, support""
    >
</MainLayout>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
</div>"
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">"
</section>"
          <div className="absolute inset-0">"
</div>"
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>""
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>"
          </div>"
          <div className="container mx-auto px-4 relative z-10">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center""
            >
</motion>"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">"
</h1>"
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">"
</span>
                </span>
              </h1>"
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">"
</p>
              </p>
            </motion.div>
          </div>
        </section>
"
        <div className="container mx-auto px-4 py-20">"
</div>"
          <div className="max-w-6xl mx-auto">"
</div>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">"
</div>
              <motion.div;
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}"
                className="text-center""
              >
</motion>"
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
</div>"
                  <Phone className="w-8 h-8 text-blue-600" />"
</Phone>
                </div>"
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>""
                <p className="text-gray-600">+1 302 464 0950</p>"
              </motion.div>

              <motion.div;
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}"
                className="text-center""
              >
</motion>"
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
</div>"
                  <Mail className="w-8 h-8 text-green-600" />"
</Mail>
                </div>"
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>""
                <p className="text-gray-600">kleber@ziontechgroup.com</p>"
              </motion.div>

              <motion.div;
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}"
                className="text-center""
              >
</motion>"
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
</div>"
                  <MapPin className="w-8 h-8 text-purple-600" />"
</MapPin>
                </div>"
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>""
                <p className="text-gray-600">"
</p>
                  364 E Main St STE 1008<br />
</br>
                </p>
              </motion.div>
            </div>"
            <div className="max-w-4xl mx-auto">"
</div>
              <motion.div;
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}"
                className="bg-gray-50 rounded-2xl p-8 shadow-lg""
              >
</motion>"
                <h2 className="text-3xl font-bold text-center mb-8">Send us a Message</h2>""
                <form className="space-y-6">"
</form>"
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
</div>
                    <div>
</div>"
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">"
</label>
                      </label>
                      <input;"
                        type="text"""
                        id="name"""
                        name="name"""
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"""
                        placeholder="Your full name""
                        required;
                      />
</input>
                    </div>
                    
                    <div>
</div>"
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">"
</label>
                      </label>
                      <input;"
                        type="email"""
                        id="email"""
                        name="email"""
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"""
                        placeholder="your.email@company.com""
                        required;
                      />
</input>
                    </div>
                  </div>
                  "
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
</div>
                    <div>
</div>"
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">"
</label>
                      </label>
                      <input;"
                        type="text"""
                        id="company"""
                        name="company"""
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"""
                        placeholder="Your company name""
                      />
</input>
                    </div>
                    
                    <div>
</div>"
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">"
</label>
                      </label>
                      <select;"
                        id="service"""
                        name="service"""
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                      >
</select>"
                        <option value="">Select a service</option>""
                        <option value="ai-services">AI Services</option>""
                        <option value="it-services">IT Services</option>""
                        <option value="micro-saas">Micro SaaS</option>""
                        <option value="consulting">Consulting</option>""
                        <option value="other">Other</option>"
                      </select>
                    </div>
                  </div>
                  
                  <div>
</div>"
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">"
</label>
                    </label>
                    <textarea;"
                      id="message"""
                      name="message""
                      rows={6}"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"""
                      placeholder="Tell us about your project or requirements...""
                      required;
                    ></textarea>
                  </div>
                  "
                  <div className="text-center">"
</div>
                    <button;"
                      type="submit"""
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center""
                    >
</button>"
                      <MessageSquare className="w-5 h-5 mr-2" />"
</MessageSquare>"
                      <ArrowRight className="w-5 h-5 ml-2" />"
</ArrowRight>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
</section>"
          <div className="container mx-auto px-4 text-center">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold mb-6">"
</h2>
              </h2>"
              <p className="text-xl mb-8 max-w-2xl mx-auto">"
</p>
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>
                <a;"
                  href="tel:+13024640950"""
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold""
                >
</a>
                </a>
                <a;"
                  href="mailto:kleber@ziontechgroup.com"""
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold""
                >
</a>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>)"