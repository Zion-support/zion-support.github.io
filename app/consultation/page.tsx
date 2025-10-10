'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission;
    console.log('Consultation form submitted:', formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value;
    });
  };
  const services = [
    'AI Solutions',
    'Cloud Services',
    'Data Analytics',
    'Cybersecurity',
    'Web Development',
    'Mobile Development',
    'Other'
  ];
  return (
    <>
      <Helmet></Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
                Free Consultation;
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Get expert advice on how AI and technology can transform your business. Schedule a free consultation with our specialists.
              </p>
            </div>
          </div>
        </section>
      {/* Consultation Form */}
      <section className="py-20 px-4"></section>
        <div className="max-w-4xl mx-auto"></div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Schedule Your Consultation</h2>
              {isSubmitted ? (
                <div className="text-center py-12"></div>
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Consultation Scheduled!</h3>
                  <p className="text-gray-300 mb-6"></p>
                    Schedule your free consultation and let's discuss how we can help transform your business.
                  </p>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"></button>
                    Schedule Free Consultation;
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </form>
              </div>
              {/* Benefits */}
              <div className="space-y-8"></div>
                <div></div>
                  <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Consultation?</h2>
                  <p className="text-gray-300 mb-8"></p>
                    Our expert consultants will analyze your current setup and provide personalized recommendations for your business transformation.
                  </p>
                </div>
                <div className="space-y-6"></div>
                  <div className="flex items-start"></div>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"></div>
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div></div>
                      <h3 className="text-lg font-semibold text-white mb-2">Expert Analysis</h3>
                      <p className="text-gray-300">Get insights from certified AI and IT professionals with years of experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start"></div>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"></div>
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div></div>
                      <h3 className="text-lg font-semibold text-white mb-2">No Obligation</h3>
                      <p className="text-gray-300">Free consultation with no commitment required. We're here to help you make informed decisions.</p>
                    </div>
                  </div>
                  <div className="flex items-start"></div>
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"></div>
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div></div>
                      <h3 className="text-lg font-semibold text-white mb-2">Personalized Solutions</h3>
                      <p className="text-gray-300">Tailored recommendations based on your specific business needs and goals.</p>
                    </div>
                  </div>
                </div>
                <div className="cyber-card p-6"></div>
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Contact</h3>
                  <div className="space-y-3"></div>
                    <div className="flex items-center text-gray-300"></div>
                      <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                      +1 (555) 123-4567;
                    </div>
                    <div className="flex items-center text-gray-300"></div>
                      <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                      info@ziontechgroup.com;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default ConsultationPage;