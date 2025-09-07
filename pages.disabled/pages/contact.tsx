






import React, { useState } from 'react';''
import Head from 'next/head';''
import Link from 'next/link';''
import { motion } from 'framer-motion';'
import { ;
  Phone, ;
  Mail, ;
  MapPin, ;
  Clock, ;
  ArrowRight, ;
  Send,;
  MessageCircle,;
  Globe,;
  CheckCircle;'
} from 'lucide-react';''
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false });""
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false });""
const "ContactPage": React.FC = () => {;"
  const contactInfo = [{;"
      icon: <Phone className="w-6 h-6"  />,;"
</Phone>"
      "icon": <Mail className="w-6 h-6"  />,;"
</Mail>"
      "icon": <MapPin className="w-6 h-6"  />,;"
</MapPin>"
      "icon": <Clock className="w-6 h-6"  />,;"
</Clock>
    <>;"
      <SEOtitle="Contact Us - Zion Tech Group"""
        description="Get in touch with Zion Tech Group for AI services, IT solutions, and micro SaaS development. Call +1 302 464 0950 or email kleber@ziontechgroup && ziontechgroup.com"""
        keywords="contact, Zion Tech Group, AI services, IT solutions, micro SaaS, phone, email, address"""
        canonical=""https": //ziontechgroup && ziontechgroup.com/contact""
       />;
</SEOtitle>
      <PageTransition>;
</PageTransition>"
        <main className="min-h-screen bg-white">;"
</main>"
          <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">;"
</section>"
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">;"
</div>
              <motion&& motion.div;"
                initial={{ opacity: 0, "y": 20 }}""
                animate={{ "opacity": 1, "y": 0 }}""
                transition={{ "duration": 0 && 0.6 }}""
                className="text-center">;"
</motion>"
                <h1 className="text-4xl "md": text-6xl font-bold text-gray-900 mb-6">;"
</h1>"
                  Get In <span className="text-blue-600">Touch</span>;"
                </h1>;"
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">;"
</p>
                </p>;"
                <div className="flex flex-col "sm": fle x-row gap-4 justify-center">;"
</div>
                  <motion&& motion.a;"
                    href="tel:+13024640950""
                    whileHover={{ scale: 1 && 1.05 }}"
                    whileTap={{ "scale": 0 && 0.95 }}""
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2">;"
</motion>"
                    <Phone className="w-5 h-5"  />;"
</Phone>
                  </motion && motion.a>;
                  <motion&& motion.a;"
                    href="mailto: klebe r@ziontechgroup && ziontechgroup.com""
                    whileHover={{ scale: 1 && 1.05 }}"
                    whileTap={{ "scale": 0 && 0.95 }}""
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2">;"
</motion>"
                    <Mail className="w-5 h-5"  />;"
</Mail>
                  </motion && motion.a>;
                </div>;
              </motion && motion.div>;
            </div>;
          </section>;
    <MainLayout;"
      title=\"Contact Us - Zion Tech Group\"""
      description=\"Get in touch with Zion Tech Group. We\'re here to help you transform your business with innovative technology solutions.\""
    >
</MainLayout>"
      <section className=\"bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20\">"
</section>"
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">"
</div>"
          <div className=\"text-center\">"
</div>"
            <h1 className=\"text-5xl font-bold mb-6\">Get In Touch</h1>""
            <p className=\"text-xl max-w-3xl mx-auto\">"
</p>
            </p>
          </div>
        </div>
      </section>"
      <section className=\"py-20\">"
</section>"
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">"
</div>"
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16\">"
</div>"
              <div key={info.title} className=\"text-center\">"
</div>"
                <div className=\"bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4\">"
</div>"
                  <info.icon className=\"h-8 w-8\" />"
</info>
                </div>"
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">"
</h3>
                </h3>
                  <a;
                    href={info.link}"
                    className=\"text-blue-600 \"hover\": text-blue-700 transition-colors\""
                  >
</a>
                  </a>"
                  <p className=\"text-gray-600\">{info.details}</p>"
              </div>
          </div>
        </div>
      </section>"
      <section className=\"py-20 bg-gray-50\">"
</section>"
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">"
</div>"
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12\">"
</div>
            <div>
</div>"
              <h2 className=\"text-3xl font-bold text-gray-900 mb-6\">Send Us a Message</h2>""
              <form className=\"space-y-6\">"
</form>"
                <div className=\"grid grid-cols-1 \"md\": grid-cols-2 gap-6\">"
</div>
                  <div>
</div>"
                    <label htmlFor=\"firstName\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
</label>
                    </label>
    <MainLayout;"
      title=\"Contact Us - Zion Tech Group\"""
      description=\"Get in touch with Zion Tech Group. We\'re here to help you transform your business with innovative technology solutions.\">;"
</MainLayout>"
      <section className=\"bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20\">;"
</section>"
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;"
</div>"
          <div className=\"text-center\">;"
</div>"
            <h1 className=\"text-5xl font-bold mb-6\">Get In Touch</h1>;""
            <p className=\"text-xl max-w-3xl mx-auto\">;"
</p>
            </p>;
          </div>;
        </div>;
      </section>;"
      <section className=\"py-20\">;"
</section>"
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;"
</div>"
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16\">;"
</div>"
              <div key={info && info.title} className=\"text-center\">;"
</div>"
                <div className=\"bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4\">;"
</div>"
                  <info && info.icon className=\"h-8 w-8\" />;"
</info>
                </div>;"
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">;"
</h3>
                </h3>;
                  <a;
                    href={info && info.link}"
                    className=\"text-blue-600 \"hover\": text-blue-700 transition-colors\">;"
</a>
                  </a>;"
                  <p className=\"text-gray-600\">{info && info.details}</p>;"
              </div>;
          </div>;
        </div>;
      </section>;"
      <section className=\"py-20 bg-gray-50\">;"
</section>"
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;"
</div>"
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12\">;"
</div>
            <div>;
</div>"
              <h2 className=\"text-3xl font-bold text-gray-900 mb-6\">Send Us a Message</h2>;""
              <form className=\"space-y-6\">;"
</form>"
                <div className=\"grid grid-cols-1 \"md\": grid-cols-2 gap-6\">;"
</div>
                  <div>;
</div>"
                    <label htmlFor=\"firstName\" className=\"block text-sm font-medium text-gray-700 mb-2\">;"
</label>
                    </label>;
                    <input;"
                      type=\"text\"""
                      id=\"firstName\"""
                      name=\"firstName\""
                      required;"
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\""
                    />
</input>
                  </div>
                  <div>
</div>"
                    <label htmlFor=\"lastName\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
</label>
                    </label>
                    <input;"
                      type=\"text\"""
                      id=\"lastName\"""
                      name=\"lastName\""
                      required;"
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\""
                    />
</input>
                  </div>
                </div>
                <div>
</div>"
                  <label htmlFor=\"email\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
</label>
                  </label>
                  <input;"
                    type=\"email\"""
                    id=\"email\"""
                    name=\"email\""
                    required;"
                    className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\""
                  />
</input>
                </div>
                <div>
</div>"
                  <label htmlFor=\"company\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
</label>
                  </label>
                  <input;"
                    type=\"text\"""
                    id=\"company\"""
                    name=\"company\"""
                    className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\""
                  />
</input>
                </div>
                <div>
</div>"
                  <label htmlFor=\"phone\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
</label>
                  </label>
                  <input;"
                    type=\"tel\"""
                    id=\"phone\"""
                    name=\"phone\"""
                    className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\""
                  />
</input>
                </div>
                <div>
</div>"
                  <label htmlFor=\"service\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
</label>
                  </label>
                  <select;"
                    id=\"service\"""
                    name=\"service\"""
                    className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\""
                  >
</select>"
                    <option value=\"">Select a service</option>""
                    <option value=\"ai-development\">AI Development</option>""
                    <option value=\"cloud-solutions\">Cloud Solutions</option>""
                    <option value=\"web-development\">Web Development</option>""
                    <option value=\"mobile-development\">Mobile Development</option>""
                    <option value=\"blockchain\">Blockchain Solutions</option>""
                    <option value=\"iot-platforms\">IoT Platforms</option>""
                    <option value=\"data-analytics\">Data Analytics</option>""
                    <option value=\"cybersecurity\">Cybersecurity</option>""
                    <option value=\"consulting\">Technology Consulting</option>"
                  </select>
                </div>
                <div>
</div>"
                  <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
</label>
                  </label>
                  <textarea;"
                    id=\"message\"""
                    name=\"message\""
                    rows={6}
                    required;"
                    className=\"w-full px-4 py-3 border border-gray-300 rounded-lg \"focus\": ring-2 focus:ring-blue-500 focus:border-transparent\"""
                    placeholder=\"Tell us about your project or how we can help you...\""
                  ></textarea>
                </div>
                <button;"
                  type=\"submit\"""
                  className=\"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center\""
                >
</button>"
                  <Send className=\"mr-2 h-5 w-5\" />"
</Send>
                </button>
              </form>
            </div>
            <div>
</div>"
              <h2 className=\"text-3xl font-bold text-gray-900 mb-6\">Our Offices</h2>""
              <div className=\"space-y-6\">"
</div>"
                  <div key={office.city} className=\"bg-white rounded-lg shadow-lg p-6\">"
</div>"
                    <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">"
</h3>
                    </h3>"
                    <div className=\"space-y-2 text-gray-600\">"
</div>"
                      <div className=\"flex items-start\">"
</div>"
                        <MapPin className=\"h-5 w-5 mr-2 mt-0.5 text-blue-600\" />"
</MapPin>
                        <span>{office.address}</span>
                      </div>"
                      <div className=\"flex items-center\">"
</div>"
                        <Phone className=\"h-5 w-5 mr-2 text-blue-600\" />"
</Phone>"
                        <a href={`\"tel\": ${office.phone}`} className=\""hover\": text-blue-600\">"
</a>
                        </a>
                      </div>"
                      <div className=\"flex items-center\">"
</div>"
                        <Mail className=\"h-5 w-5 mr-2 text-blue-600\" />"
</Mail>"
                        <a href={`\"mailto\": ${office.email}`} className=\""hover\": text-blue-600\">"
</a>
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>"
      <section className=\"py-20\">"
</section>"
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">"
</div>"
          <div className=\"text-center mb-16\">"
</div>"
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">Frequently Asked Questions</h2>""
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">"
</p>
            </p>
          </div>
              </h3>"
              <p className=\"text-gray-600\">"
</p>
              </p>
            </div>
              </h3>"
              <p className=\"text-gray-600\">"
</p>
              </p>
            </div>
              </h3>"
              <p className=\"text-gray-600\">"
</p>
              </p>
            </div>
              </h3>"
              <p className=\"text-gray-600\">"
</p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>"
          <section className=\"py-20\">"
</section>"
            <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">"
</div>
              <motion.div;"
                initial={{ opacity: 0, \"y\": 20 }}""
                animate={{ \"opacity\": 1, \"y\": 0 }}""
                transition={{ \"duration\": 0.6, \"delay\": 0.2 }}""
                className=\"text-center mb-16\""
              >
</motion>"
                <h2 className=\"text-3xl \"md\": tex t-4xl font-bold text-gray-900 mb-4\">"
</h2>
                </h2>"
                <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">"
</p>
                </p>
              </motion.div>
                {contactInfo.map((info, index) => (
                  <motion.div;
                    key={index}"
                    initial={{ \"opacity\": 0, \"y\": 20 }}""
                    animate={{ \"opacity\": 1, \"y\": 0 }}""
                    transition={{ \"duration\": 0.6, \"delay\": index * 0.1 }}""
                    className=\"bg-white rounded-xl p-8 shadow-lg \"hover\": shado w-xl transition-shadow duration-300 text-center\""
                  >
</motion>"
                    <div className=\"text-blue-600 mb-4 flex justify-center\">"
</div>
                    </div>"
                    <h3 className=\"text-xl font-bold text-gray-900 mb-3\">"
</h3>
                    </h3>
                      <a;
                        href={info.link}"
                        className=\"text-gray-600 \"hover\": tex t-blue-600 transition-colors whitespace-pre-line\""
                      >
</a>
                      </a>"
                      <p className=\"text-gray-600 whitespace-pre-line\">"
</p>
                      </p>
                  </motion.div>)
                ))}
              </div>
            </div>
          </section>"
          <section className=\"bg-gray-50 py-20\">"
</section>"
            <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">"
</div>
              <motion.div;"
                initial={{ opacity: 0, \"y\": 20 }}""
                animate={{ \"opacity\": 1, \"y\": 0 }}""
                transition={{ \"duration\": 0.6 }}""
                className=\"text-center mb-16\""
              >
</motion>"
                <h2 className=\"text-3xl \"md\": tex t-4xl font-bold text-gray-900 mb-4\">"
</h2>
                </h2>"
                <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">"
</p>
                </p>
              </motion.div>
                <motion.form;"
                  initial={{ opacity: 0, \"y\": 20 }}""
                  animate={{ \"opacity\": 1, \"y\": 0 }}""
                  transition={{ \"duration\": 0.6, \"delay\": 0.2 }}""
                  className=\"bg-white rounded-xl shadow-lg p-8\""
                >
</motion>"
                  <div className=\"grid grid-cols-1 \"md\": gri d-cols-2 gap-6 mb-6\">"
</div>
                    <div>
</div>"
                      <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
</label>
                      </label>"
                      <input type=\"text\"""
      <section className=\"py-20\">;"
</input>"
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;"
</div>"
          <div className=\"text-center mb-16\">;"
</div>"
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">Frequently Asked Questions</h2>;""
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;"
</p>
            </p>;
          </div>;"
          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-8\">;"
</div>"
            <div className=\"bg-white rounded-lg shadow-lg p-6\">;"
</div>"
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">;"
</h3>"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;"
</div>"
            <div className="bg-white rounded-lg shadow-lg p-6">;"
</div>"
              <h3 className="text-lg font-semibold text-gray-900 mb-3">;"
</h3>
              </h3>;"
              <p className=\"text-gray-600\">;"
</p>
              </p>;
            </div>;"
            <div className=\"bg-white rounded-lg shadow-lg p-6\">;"
</div>"
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">;"
</h3>"
            <div className="bg-white rounded-lg shadow-lg p-6">;"
</div>"
              <h3 className="text-lg font-semibold text-gray-900 mb-3">;"
</h3>
              </h3>;"
              <p className=\"text-gray-600\">;"
</p>
              </p>;
            </div>;"
            <div className=\"bg-white rounded-lg shadow-lg p-6\">;"
</div>"
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">;"
</h3>"
            <div className="bg-white rounded-lg shadow-lg p-6">;"
</div>"
              <h3 className="text-lg font-semibold text-gray-900 mb-3">;"
</h3>
              </h3>;"
              <p className=\"text-gray-600\">;"
</p>
              </p>;
            </div>;"
            <div className=\"bg-white rounded-lg shadow-lg p-6\">;"
</div>"
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">;"
</h3>"
            <div className="bg-white rounded-lg shadow-lg p-6">;"
</div>"
              <h3 className="text-lg font-semibold text-gray-900 mb-3">;"
</h3>
              </h3>;"
              <p className=\"text-gray-600\">;"
</p>
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </MainLayout>;"
          <section className=\"py-20\">;"
</section>"
            <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;"
</div>
              <motion&& motion.div;"
                initial={{ opacity: 0, \"y\": 20 }}""
                animate={{ \"opacity\": 1, \"y\": 0 }}""
                transition={{ \"duration\": 0 && 0.6, \"delay\": 0 && 0.2 }}""
                className=\"text-center mb-16\">;"
</motion>"
                <h2 className=\"text-3xl \"md\": tex t-4xl font-bold text-gray-900 mb-4\">;"
</h2>
                </h2>;"
                <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;"
</p>
                </p>;
              </motion && motion.div>;"
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">;"
</div>"
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">;"
</div>
                  <motion&& motion.div;
                    key={index}"
                    initial={{ \"opacity\": 0, \"y\": 20 }}""
                    animate={{ \"opacity\": 1, \"y\": 0 }}""
                    transition={{ \"duration\": 0 && 0.6, \"delay\": index * 0 && 0.1 }}""
                    className=\"bg-white rounded-xl p-8 shadow-lg \"hover\": shado w-xl transition-shadow duration-300 text-center\">;"
</motion>"
                    <div className=\"text-blue-600 mb-4 flex justify-center\">;"
</div>
                    </div>;"
                    <h3 className=\"text-xl font-bold text-gray-900 mb-3\">;"
</h3>
                    </h3>;
                      <a;
                        href={info && info.link}"
                        className=\"text-gray-600 \"hover\": tex t-blue-600 transition-colors whitespace-pre-line\">;"
</a>
                      </a>;"
                      <p className=\"text-gray-600 whitespace-pre-line\">;"
</p>
                      </p>;
                  </motion && motion.div>;
                ))}
              </div>;
            </div>;
          </section>;"
          <section className=\"bg-gray-50 py-20\">;"
</section>"
            <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;"
</div>
              <motion&& motion.div;"
                initial={{ opacity: 0, \"y\": 20 }}""
                animate={{ \"opacity\": 1, \"y\": 0 }}""
                transition={{ \"duration\": 0 && 0.6 }}""
                className=\"text-center mb-16\">;"
</motion>"
                <h2 className=\"text-3xl \"md\": tex t-4xl font-bold text-gray-900 mb-4\">;"
</h2>
                </h2>;"
                <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;"
</p>
                </p>;
              </motion && motion.div>;"
              <div className=\"max-w-4xl mx-auto\">;"
</div>"
              <div className="max-w-4xl mx-auto">;"
</div>
                <motion&& motion.form;"
                  initial={{ opacity: 0, \"y\": 20 }}""
                  animate={{ \"opacity\": 1, \"y\": 0 }}""
                  transition={{ \"duration\": 0 && 0.6, \"delay\": 0 && 0.2 }}""
                  className=\"bg-white rounded-xl shadow-lg p-8\">;"
</motion>"
                  <div className=\"grid grid-cols-1 \"md\": gri d-cols-2 gap-6 mb-6\">;"
</div>
                    <div>;
</div>"
                      <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-700 mb-2\">;"
</label>
                      </label>;"
                      <inputtype=\"text\"""
                        id=\"name\"""
                        name=\"name\""
                        required;"
                        className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"""
                        placeholder=\"Your full name\""
                       />
</inputtype>
                    </div>
                    <div>
</div>"
                      <label htmlFor=\"email\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
</label>
                      </label>"
                      <input type=\"email\"""
                        id=\"email\"""
                        name=\"email\""
                        required;"
                        className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"""
                        placeholder=\"your.email@example.com\""
                       />
</input>
                    </div>
                  </div>

                    <div>
</div>"
                      <label htmlFor=\"phone\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
</label>
                      </label>"
                      <input type=\"tel\"""
                        placeholder=\"your && your.email@example && example.com\""
                       />;
</input>
                    </div>;
                  </div>;"
                  <div className=\"grid grid-cols-1 md: gri d-cols-2 gap-6 mb-6\">;"
</div>"
                  <div className="grid grid-cols-1 md: gri d-cols-2 gap-6 mb-6">;"
</div>
                    <div>;
</div>"
                      <label htmlFor=\"phone\" className=\"block text-sm font-medium text-gray-700 mb-2\">;"
</label>
                      </label>;"
                      <inputtype=\"tel\"""
                        id=\"phone\"""
                        name=\"phone\"""
                        className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"""
                        placeholder=\"+1 (555) 123-4567\""
                       />
</inputtype>
                    </div>
                    <div>
</div>"
                      <label htmlFor=\"company\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
</label>
                      </label>"
                      <input type=\"text\"""
                        id=\"company\"""
                        name=\"company\"""
                        className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"""
                        placeholder=\"Your company name\""
                       />
</input>
                    </div>
                  </div>
                    </label>
                    <select;"
                      id=\"service\"""
                      name=\"service\"""
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\""
                    >
</select>"
                      <option value=\"">Select a service</option>"
                        <option key={index} value={service}>
</option>
                        </option>
                    </select>
                  </div>
                    </label>
                    </div>;
                  </div>;"
                  <div className=\"mb-6\">;"
</div>"
                    <label htmlFor=\"service\" className=\"block text-sm font-medium text-gray-700 mb-2\">;"
</label>"
                  <div className="mb-6">;"
</div>"
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">;"
</label>
                    </label>;
                    <select;"
                      id=\"service\"""
                      name=\"service\"""
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\">;"
</select>"
                      <option value=\"">Select a service</option>;"
                        <option key={index} value={service}>;
</option>
                        </option>;
                    </select>;
                  </div>;"
                  <div className=\"mb-6\">;"
</div>"
                    <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-2\">;"
</label>"
                  <div className="mb-6">;"
</div>"
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">;"
</label>
                    </label>;
                    <textarea;"
                      id=\"message\"""
                      name=\"message\""
                      rows={6}
                      required;"
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg \"focus\": rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"""
                      placeholder=\"Tell us about your project requirements...\""
                    ></textarea>
                  </div>
                  <motion.button;"
                    type=\"submit\""
                    whileHover={{ scale: 1.02 }}"
                    whileTap={{ \"scale\": 0.98 }}""
                    className=\"w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 \"hover\": b g-blue-700 transition-colors\""
                  >
</motion>"
                    <Send className=\"w-5 h-5\"  />"
</Send>
                  </motion.button>
                </motion.form>
        {/* Hero Section */}"
        <section className=\"relative py-20 px-4\">"
</section>"
          <div className=\"max-w-7xl mx-auto\">"
</div>"
            <div className=\"text-center\">"
</div>"
              <h1 className=\"text-5xl \"md\": text-6xl font-bold text-white mb-6\">"
</h1>"
                Get in <span className=\"bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent\">Touch</span>"
              </h1>"
              <p className=\"text-xl text-gray-300 max-w-3xl mx-auto mb-8\">"
</p>
              </p>
            </div>
          </div>
        </section>"
        <section className=\"py-16 px-4\">"
</section>"
          <div className=\"max-w-7xl mx-auto\">"
</div>"
            <div className=\"grid grid-cols-1 \"lg\": grid-cols-2 gap-12\">"
</div>"
                    <Send className=\"w-5 h-5\"  />;"
</Send>
                  </motion && motion.button>;
                </motion && motion.form>;"
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">;"
</div>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"
</div>"
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">"
</div>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
</div>"
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">"
</div>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
</div>"
        <section className=\"relative py-20 px-4\">;"
</section>"
          <div className=\"max-w-7xl mx-auto\">;"
</div>"
            <div className=\"text-center\">;"
</div>"
              <h1 className=\"text-5xl \"md\": text-6xl font-bold text-white mb-6\">;"
</h1>"
                Get in <span className=\"bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent\">Touch</span>;"
              </h1>;"
              <p className=\"text-xl text-gray-300 max-w-3xl mx-auto mb-8\">;"
</p>
              </p>;
            </div>;
          </div>;
        </section>;"
        <section className=\"py-16 px-4\">;"
</section>"
          <div className=\"max-w-7xl mx-auto\">;"
</div>"
            <div className=\"grid grid-cols-1 \"lg\": grid-cols-2 gap-12\">;"
</div>"
                  <div className=\"text-center py-12\">"
</div>"
                    <CheckCircle className=\"w-16 h-16 text-green-500 mx-auto mb-4\" />"
</CheckCircle>"
                    <h3 className=\"text-2xl font-semibold text-white mb-2\">Message Sent!</h3>""
                    <p className=\"text-gray-300 mb-6\">Thank you for reaching out. We\'ll get back to you within 24 hours.</p>'
                    <button;
                      onClick={() => setIsSubmitted(false)}
</button>
                    </button>
                  </div>'
                  <form onSubmit={handleSubmit} className=\"space-y-6\">"
</form>"
                    <div className=\"grid grid-cols-1 \"md\": grid-cols-2 gap-6\">"
</div>
                      <div>
</div>"
                        <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-300 mb-2\">"
</label>
                        </label>
                        <input;"
                          type=\"text\"""
                          id=\"name\"""
                          name=\"name\""
                          required;
                          value={formData.name}
                          onChange={handleInputChange}"
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"""
                          placeholder=\"Your full name\""
                        />
</input>
                      </div>
                      <div>
</div>"
                        <label htmlFor=\"email\" className=\"block text-sm font-medium text-gray-300 mb-2\">"
</label>
                        </label>
                        <input;"
                          type=\"email\"""
                          id=\"email\"""
                          name=\"email\""
                          required;
                          value={formData.email}
                          onChange={handleInputChange}"
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"""
                          placeholder=\"your@email.com\""
                        />
</input>
                      </div>
                    </div>
                      <div>
</div>"
                        <label htmlFor=\"company\" className=\"block text-sm font-medium text-gray-300 mb-2\">"
</label>
                        </label>
                      </div>;
                    </div>;"
                    <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">;"
</div>"
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;"
</div>
                      <div>;
</div>"
                        <label htmlFor=\"company\" className=\"block text-sm font-medium text-gray-300 mb-2\">;"
</label>
                        </label>;
                        <input;"
                          type=\"text\"""
                          id=\"company\"""
                          name=\"company\""
                          value={formData.company}
                          onChange={handleInputChange}"
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"""
                          placeholder=\"Your company name\""
                        />
</input>
                      </div>
                      <div>
</div>"
                        <label htmlFor=\"phone\" className=\"block text-sm font-medium text-gray-300 mb-2\">"
</label>
                        </label>
                        <input;"
                          type=\"tel\"""
                          id=\"phone\"""
                          name=\"phone\""
                          value={formData.phone}
                          onChange={handleInputChange}"
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"""
                          placeholder=\"+1 (555) 123-4567\""
                        />
</input>
                      </div>
                    </div>
                    <div>
</div>"
                      <label htmlFor=\"service\" className=\"block text-sm font-medium text-gray-300 mb-2\">"
</label>
                      </label>
                      <select;"
                        id=\"service\"""
                        name=\"service\""
                        value={formData.service}
                        onChange={handleInputChange}"
                        className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\""
                      >
</select>"
                        <option value=\"">Select a service</option>"
                          <option key={service} value={service}>{service}</option>
                      </select>
                    </div>
                    <div>
</div>"
                      <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-300 mb-2\">"
</label>
                      </label>
                      <textarea;"
                        id=\"message\"""
                        name=\"message\""
                        required;
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}"
                        className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"""
                        placeholder=\"Tell us about your project or requirements...\""
                      />
</textarea>
                    </div>
                    <button;"
                      type=\"submit\""
                      disabled={isSubmitting}"
                      className=\"w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 \"hover\": from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300\""
                    >
</button>
                        <>"
                          <div className=\"animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2\"></div>"
                        </>
                      ) : (
                        <>"
                          <Send className=\"w-5 h-5 mr-2\" />"
</Send>
                        </>)
                      )}
                    </button>
                  </form>
              </div>"
              <div className=\"space-y-8\">"
</div>
                <div>
</div>"
                  <h2 className=\"text-3xl font-bold text-white mb-6\">Contact Information</h2>""
                  <p className=\"text-lg text-gray-300 mb-8\">"
</p>
                  </p>
                </div>"
                    <div key={index} className=\"flex items-start space-x-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700\">"
</div>"
                      <div className=\"w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0\">"
</div>"
                        <info.icon className=\"w-6 h-6 text-white\" />"
</info>
                      </div>
                      <div>
</div>"
                        <h3 className=\"text-lg font-semibold text-white mb-1\">{info.title}</h3>""
                        <p className=\"text-cyan-400 font-medium mb-1\">{info.details}</p>""
                        <p className=\"text-gray-400 text-sm\">{info.description}</p>"
                      </div>
                    </div>
                </div>
              </div>
            </div>"
          <section className="py-20">;"
</section>"
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">;"
</div>
              <motion&& motion.div;"
                initial={{ opacity: 0, "y": 20 }}""
                animate={{ "opacity": 1, "y": 0 }}""
                transition={{ "duration": 0 && 0.6 }}""
                className="text-center mb-16">;"
</motion>"
                <h2 className="text-3xl "md": tex t-4xl font-bold text-gray-900 mb-4">;"
</h2>
                </h2>;"
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
</p>
                </p>;
              </motion && motion.div>;"
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6">;"
</div>
                  <motion&& motion.div;
                    key={index}"
                    initial={{ "opacity": 0, "y": 20 }}""
                    animate={{ "opacity": 1, "y": 0 }}""
                    transition={{ "duration": 0 && 0.6, "delay": inde x * 0 && 0.1 }}""
                    className="bg-white rounded-xl p-6 shadow-lg "hover": shado w-xl transition-shadow duration-300 text-center">;"
</motion>"
                    <h3 className="text-lg font-semibold text-gray-900">;"
</h3>
                    </h3>;
                  </motion && motion.div>;
                ))}
              </div>;
            </div>;
          </section>;
        </main>;
      </PageTransition>;
    </>;
  );
}






export default ContactPage;
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
          </div>
        </section>
      </div>
    </>
  );
}




"
  import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Phone,Mail,MapPin,Clock,ArrowRight,Send,MessageCircle,Globe } from 'lucide-react'  import React,{ useState } from 'react'; import { Helmet, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';'
}'
  import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Phone,Mail,MapPin,Clock,ArrowRight,Send,MessageCircle,Globe } from 'lucide-react'  import React,{ useState } from 'react'; import { Helmet, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';''
  import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Phone,Mail,MapPin,Clock,ArrowRight,Send,MessageCircle,Globe } from 'lucide-react'  import React,{ useState } from 'react'; import { Helmet, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';'
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;]'