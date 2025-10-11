'use client';
import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {;
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return null
                )},
    {submitStatus === 'error' && ()
                )}

                <form onSubmit={handleSubmit} className="space-y-6" /></form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" /></div>
                    <div></div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                        Name *
                      </label>
                      <input type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your full name"
                      / /></input>
                    </div>
                    
                    <div></div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                        Email *
                      </label>
                      <input type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your@email.com"
                      / /></input>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" /></div>
                    <div></div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                        Company
                      </label>
                      <input type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your company name"
                      / /></input>
                    </div>
                    
                    <div></div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                        Phone
                      </label>
                      <input type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      / /></input>
                    </div>
                  </div>

                  <div></div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                      Service Interest
                    </label>
                    <select id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" /></select>
                      <option value="">Select a service</option>
                      <option value="ai-services">AI Services</option>
                      <option value="it-services">IT Services</option>
                      <option value="micro-saas">Micro SaaS</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div></div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                      Message *
                    </label>
                    <textarea id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tell us about your project or requirements..."
                    / /></textarea>
                  </div>

                  <button type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2" /></button>
                    {isSubmitting ? ()
                    ) : ()
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer / /></Footer>
    </>
  );
};

export default ContactPage;
