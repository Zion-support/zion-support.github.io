import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Calendar, Clock, Video, CheckCircle } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isScheduled, setIsScheduled] = useState(false);

  const handleScheduleDemo = (e: React.FormEvent) => {
    e.preventDefault();
    setIsScheduled(true);
  };

  return (
    <>
      <SEOHead
        title="Schedule a Demo - Zion Tech Group"
        description="Book a personalized demo of our AI and IT solutions. See how we can transform your business with cutting-edge technology."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Schedule a Demo
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See our solutions in action. Book a personalized demo and discover how Zion Tech Group can transform your business.
            </p>
          </div>

          {!isScheduled ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Demo Form */}
              <div className="bg-slate-800 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Book Your Demo</h2>
                <form onSubmit={handleScheduleDemo} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest</label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="it-solutions">IT Solutions</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="micro-saas">Micro SaaS Solutions</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Date</label>
                      <input
                        type="date"
                        required
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Time</label>
                      <select
                        required
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Tell us about your specific needs or questions..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Demo
                  </button>
                </form>
              </div>

              {/* Demo Info */}
              <div className="space-y-8">
                <div className="bg-slate-800 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Video className="w-6 h-6 mr-3 text-purple-400" />
                    What to Expect
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>30-minute personalized demonstration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Live Q&A with our technical experts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Customized solution recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Pricing and implementation timeline</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-purple-400" />
                    Available Times
                  </h3>
                  <p className="text-gray-300 mb-4">
                    We offer demos Monday through Friday, 9 AM to 5 PM EST.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-slate-700 p-3 rounded text-center">
                      <div className="font-semibold">Monday - Friday</div>
                      <div className="text-gray-400">9:00 AM - 5:00 PM</div>
                    </div>
                    <div className="bg-slate-700 p-3 rounded text-center">
                      <div className="font-semibold">Weekend</div>
                      <div className="text-gray-400">By Appointment</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Calendar className="w-6 h-6 mr-3 text-purple-400" />
                    Contact Info
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <p>📧 demo@ziontechgroup.com</p>
                    <p>📞 +1 (555) 123-4567</p>
                    <p>💬 Live chat available</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-slate-800 p-8 rounded-xl">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Demo Scheduled Successfully!</h2>
                <p className="text-gray-300 mb-6">
                  Thank you for scheduling a demo. We'll send you a confirmation email with the meeting details shortly.
                </p>
                <button
                  onClick={() => setIsScheduled(false)}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Schedule Another Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DemoPage;