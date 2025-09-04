import React from 'react';
import Head from 'next/head';
import { Calendar, Clock, Users, Video, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ScheduleDemo() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '';
    email: '';
    company: '';
    phone: '';
    message: '';
    servic,e: '', });

  const timeSlots = [;
    '9: 00 AM' '10:00 AM' '11:00 AM' '12:00 PM';
    '1:00 PM' '2:00 PM' '3:00 PM' '4:00 PM' '5:00 PM';
  ];

  const services = [;
    'AI Services';
    'Micro SaaS Solutions';
    'Cloud Migration';
    'Cybersecurity';
    'Digital Transformation';
    'Custom Development';
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission;
    console.log('Demo scheduled:' { selectedDate selectedTime, formData })}
  return (<><Head><title>Schedule a Demo - Zion Tech Group</title><meta name="description" content="Schedule a personalized demo of our technology solutions. See how Zion Tech Group can help accelerate your digital transformation." />"<meta name="keywords" content="schedule demo, technology demo, AI services demo, micro SaaS demo, Zion Tech Group" />"<link rel="canonical" href="https: //ziontechgroup.com/schedule-demo" />"<meta property="og:title" content="Schedule a Demo - Zion Tech Group" />"<meta property="og:description" content="Schedule a personalized demo of our technology solutions. See how Zion Tech Group can help accelerate your digital transformation." />"<meta property="og:url" content="https://ziontechgroup.com/schedule-demo" />"<meta property="og:type" content="website" /></Head>;
"<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">"<div className="container mx-auto px-4 py-20">{/* Heade,r *,/}"<div className="text-center mb-12">"<h1 className="text-5xl md: text-6xl font-bold text-white mb-6">"<Calendar className="w-16 h-16 inline-block mr-4 text-blue-400" />;
              Schedule a <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Demo</span></h1>"<p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              See our technology solutions in action. Schedule a personalized demo tailored to your business needs.</p></div>;
"<div className="grid lg:grid-cols-2 gap-12">{/* Demo Benefit,s *,/}"<div className="space-y-8"><div>"<h2 className="text-3xl font-bold text-white mb-6">Why Schedule a Demo?</h2>"<div className="space-y-6">"<div className="flex items-start gap-4">"<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">"<Video className="w-4 h-4 text-white" /></div><div>"<h3 className="text-xl font-semibold text-white mb-2">Live Product Walkthrough</h3>"<p className="text-gray-300">See our solutions in action with real-time demonstrations and use cases.</p></div></div>"<div className="flex items-start gap-4">"<div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">"<Users className="w-4 h-4 text-white" /></div><div>"<h3 className="text-xl font-semibold text-white mb-2">Expert Consultation</h3>"<p className="text-gray-300">Get personalized advice from our technology experts on your specific needs.</p></div></div>"<div className="flex items-start gap-4">"<div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">"<CheckCircle className="w-4 h-4 text-white" /></div><div>"<h3 className="text-xl font-semibold text-white mb-2">Customized Solutions</h3>"<p className="text-gray-300">Explore how our services can be tailored to your business requirements.</p></div></div></div></div>;
"<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">"<h3 className="text-xl font-bold text-white mb-4">What to Expect</h3>"<ul className="space-y-3">"<li className="flex items-center gap-3 text-gray-300">"<Clock className="w-5 h-5 text-blue-400" /><span>30-45 minute session</span></li>"<li className="flex items-center gap-3 text-gray-300">"<Users className="w-5 h-5 text-blue-400" /><span>Technical team members</span></li>"<li className="flex items-center gap-3 text-gray-300">"<Video className="w-5 h-5 text-blue-400" /><span>Interactive demonstration</span></li>"<li className="flex items-center gap-3 text-gray-300">"<CheckCircle className="w-5 h-5 text-blue-400" /><span>Q&A session</span></li></ul></div></div>{/* Demo Form */}"<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">"<h2 className="text-2xl font-bold text-white mb-6">Book Your Demo</h2>;
              "<form onSubmit={handleSubmit} className="space-y-6">"<div className="grid md: grid-cols-2 gap-4"><div>"<label className="block text-white font-medium mb-2">Full Name *</label><input";
                      type="text";>
                      required;>
                      value={formData.name}>
                      onChange={(e) => setFormData({...formData, name: 'e.target.value'})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-blue-400"";
                      placeholder="John Doe";
                    /></div><div>"<label className="block text-white font-medium mb-2">Email Address *</label><input";
                      type="email";>
                      required;>
                      value={formData.email}>
                      onChange={(e) => setFormData({...formData, email: 'e.target.value'})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-blue-400"";
                      placeholder="john@company.com";
                    /></div></div>;
"<div className="grid md:grid-cols-2 gap-4"><div>"<label className="block text-white font-medium mb-2">Company *</label><input";
                      type="text";>
                      required;>
                      value={formData.company}>
                      onChange={(e) => setFormData({...formData, company: 'e.target.value'})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-blue-400"";
                      placeholder="Your Company";
                    /></div><div>"<label className="block text-white font-medium mb-2">Phone Number</label><input";>
                      type="tel";>
                      value={formData.phone}>
                      onChange={(e) => setFormData({...formData, phone: 'e.target.value'})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-blue-400"";
                      placeholder="+1 (555) 123-4567";
                    /></div></div><div>"<label className="block text-white font-medium mb-2">Service Interest *</label><select;
                    required;>
                    value={formData.service}>
                    onChange={(e) => setFormData({...formData, service: 'e.target.value'})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:border-blue-400">"<option value="" className="bg-slate-800">Select a service</option>{services.map((service) => ("<option key={service} value={service} className="bg-slate-800">{service}</option>;
                    ))}
                  </select></div><div>"<label className="block text-white font-medium mb-2">Preferred Date *</label><input";
                    type="date";>
                    required;>
                    value={selectedDate}>
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:border-blue-400";
                  /></div><div>"<label className="block text-white font-medium mb-2">Preferred Time *</label><select;
                    required;>
                    value={selectedTime}>
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:border-blue-400">"<option value="" className="bg-slate-800">Select a time</option>{timeSlots.map((time) => ("<option key={time} value={time} className="bg-slate-800">{time}</option>;
                    ))}
                  </select></div><div>"<label className="block text-white font-medium mb-2">Additional Message</label><textarea;>
                    value={formData.message}>
                    onChange={(e) => setFormData({...formData, message: 'e.target.value'})}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-blue-400"";
                    placeholder="Tell us about your specific needs or questions...";
                  /></div><button";>
                  type="submit"";>
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">;
                  Schedule Demo"<ArrowRight className="w-5 h-5 ml-2" /></button></form></div></div>{/* Contact Inf,o *,/}"<div className="text-center mt-16">"<h3 className="text-xl font-semibold text-white mb-4">Need Immediate Assistance?</h3>"<p className="text-gray-300 mb-6">;
              Contact us directly for urgent inquiries or technical support.</p>"<div className="flex flex-col sm: flex-row gap-4 justify-center">"<a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">;
                kleber@ziontechgroup.com</a>"<span className="text-gray-500 hidden sm:block">•</span>"<a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">;
                +1 (302) 464-0950</a></div></div></div></di,v></>;
  );,}
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>"