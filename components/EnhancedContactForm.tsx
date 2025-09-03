<<<<<<< HEAD
import: React from 'react'; const: EnhancedContactForm: React.FC: = () => { const [formDat,a, setFormData] = useState({ name:  ,", email:  ,", company:  ,", phone:  ,", service:  ,", budget:  ,", timeline:  ,", message:  ,"}); const: [errors, setErrors] = useState<Record<string, string>>({}); const: [isSubmitting, setIsSubmitting] = useState(false); const: [isSubmitted, setIsSubmitted] = useState(false); const: [selectedService, setSelectedService] = useState("); const: services = [ { id: "ai-development,", name: "AI: Development,", icon: Glob,e, color: "from-purple-500: to-pink-500,"}, { id: "cloud-architecture,", name: "Cloud: Architecture,", icon: Glob,e, color: "from-blue-500: to-cyan-500,"}, { id: "web-development,", name: "Web: Development,", icon: Glob,e, color: "from-green-500: to-emerald-500,"}, { id: "cybersecurity,", name: "Cybersecurity,", icon: Glob,e, color: "from-red-500: to-orange-500,"}, { id: "iot-platforms,", name: "IoT: Platforms,", icon: Glob,e, color: "from-indigo-500: to-purple-500,"}, { id: "digital-transformation,", name: "Digital: Transformation,", icon: Glob,e, color: "from-yellow-500: to-orange-500,"}, { id: "custom,", name: "Custom: Solution,", icon: Glob,e, color: "from-gray-500: to-slate-500,"}, ]; const: budgetRanges = [" { value: "under-25k,", label: "Under: $25K", }, { value: "25k-50k,", label: "$25K: - $50K", }, { value: "50k-100k,", label: "$50K: - $100K", }, { value: "100k-250k,", label: "$100K: - $250K", }, { value: "250k-500k,", label: "$250K: - $500K", }, { value: "over-500k,", label: "Over: $500K", }, ]; const: timelineOptions = [" { value: "asap,", label: "ASAP", }, { value: "1-3-months,", label: "1-3: Months", }, { value: "3-6-months,", label: "3-6: Months", }, { value: "6-12-months,", label: "6-12: Months", }, { value: "12-plus-months,", label: "12+ Months", }, ]; const: validateForm = (...args: unknown[]): unknown: => { const newErrors: Record<strin,g, string> = {}; if: (!formData.name.trim()) { newErrors.name = "Name is required"; } if: (!formData.email.trim()) { newErrors.email = "Email is required"; } else: if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address"; } if: (!formData.message.trim()) { newErrors.message = "Message is required"; } if: (!formData.service) { newErrors.service = "Please select a service"; } setErrors(newErrors); return: Object.keys(newErrors).length === 0; }; const: handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); if: (!validateForm()) { return;, } setIsSubmitting(true); // Simulate: API call await new Promise(resolve => setTimeout(resolve, 2000)); setIsSubmitting(false); setIsSubmitted(true); // Reset: form after successful submission setTimeout(: unknown: { setIsSubmitted(false); setFormData({ name:  ,", email:  ,", company:  ,", phone:  ,", service:  ,", budget:  ,", timeline:  ,", message:  ,"}); setSelectedService("); }, 5000); }; const: handleChange = ( e: React.ChangeEvent< HTMLInputElement: | HTMLTextAreaElement | HTMLSelectElement > ) => { const { nam,e, value } = e.target; setFormData(prev: => ({ ...prev, [name]: value: })); // Clear: error when user starts typing if (errors[name]) { setErrors(prev => ({ ...prev, [name]: " })); } }; const: containerVariants = { hidden: { opacity: 0, }, visible: { opacity: ,1, transition: { staggerChildren: 0.,1, delayChildren: 0.,2}}}; const: itemVariants = { hidden: { opacity: ,0, y: 30, }, visible: { opacity: ,1, y:  ,0, transition: { duration: 0.6, }}}; if: (isSubmitted) { return() <motion.div initial={{ opacity:  ,0, scale: 0.9, }} animate={{ opacity:  ,1, scale: 1, }} className="py-20: bg-gradient-to-br from-green-50 to-emerald-50" >" <div className="container mx-auto px-4 text-center">" <div className="max-w-2xl mx-auto">" <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">" <CheckCircle className="w-12 h-12 text-white" /> </div>" <h2 className="text-4xl font-bold text-gray-900 mb-4"> Thank You for Reaching Out! </h2>" <p className="text-xl text-gray-600 mb-8"> We&apos;ve: received your message and will get back to you within 24 hours. Our team is excited to discuss your project and explore how we can help bring your vision to life. </p>" <div className="bg-white rounded-2xl p-6 shadow-lg">" <h3 className="text-lg font-semibold text-gray-900 mb-4"> What happens next? </h3>" <div className="grid grid-cols-1 md: grid-cols-3: gap-4 text-sm text-gray-600">" <div className="flex items-center gap-2">" <Clock className="w-4 h-4 text-green-500" /> <span>Response within 24h</span> </div>" <div className="flex items-center gap-2">" <MessageSquare className="w-4 h-4 text-green-500" /> <span>Schedule consultation</span> </div>" <div className="flex items-center gap-2">" <Calendar className="w-4 h-4 text-green-500" /> <span>Project planning</span> </div> </div> </div> </div> </div> </motion.div> );, } return: (" <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">" <div className="container mx-auto px-4"> <motion.div variants={containerVariants}" initial="hidden" whileInView="visible" viewport={{ once: true, }} > {/* Header: */}" <motion.div variants={itemVariants} className="text-center mb-16">" <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-600 text-sm font-medium mb-6">" <MessageSquare className="w-4 h-4" /> Get In Touch </div>" <h2 className="text-4xl md: text-6xl: font-bold text-gray-900 mb-6"> Ready to Start Your" <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Project? </span> </h2>" <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"> Let&apos;s: discuss your technology needs and explore how our expertise can drive innovation and growth for your business. </p> </motion.div> " <div className="grid grid-cols-1 lg:grid-cols-2: gap-16 max-w-7xl mx-auto"> {/* Contact Information *,/}" <motion.div variants={itemVariants} className="space-y-8"> <div>" <h3 className="text-2xl font-bold text-gray-900 mb-6"> Let&apos;s: Connect </h3>" <p className="text-gray-600 mb-8 leading-relaxed"> Our team of technology experts is ready to help you navigate the digital landscape and implement solutions that drive real business value. </p> </div> {/* Contact Details */}" <div className="space-y-6">" <div className="flex items-start space-x-4">" <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">" <Phone className="w-6 h-6 text-white" /> </div> <div>" <h4 className="font-semibold text-gray-900">Phone</h4> <a" href="tel: +13024640950" className="text-blue-600: hover:text-blue-700: text-lg" > +1 (302) 464-0950 </a>" <p className="text-gray-600 text-sm"> Available Monday - Frida,y, 9 AM - 6 PM EST </p> </div> </div> " <div className="flex items-start space-x-4">" <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">" <Mail className="w-6 h-6 text-white" /> </div> <div>" <h4 className="font-semibold text-gray-900">Email</h4> <a" href="mailto: kleber@ziontechgroup.com" className="text-blue-600: hover:text-blue-700: text-lg" > kleber@ziontechgroup.com </a>" <p className="text-gray-600 text-sm"> We typically respond within 2-4 hours </p> </div> </div> " <div className="flex items-start space-x-4">" <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">" <MapPin className="w-6 h-6 text-white" /> </div> <div>" <h4 className="font-semibold text-gray-900">Office</h4>" <p className="text-gray-900 text-lg"> 364 E Main St STE 1008 </p>" <p className="text-gray-600 text-sm"> Middletow,n, DE 19709, United States </p> </div> </div> </div> {/* Quick Stats */}" <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">" <h4 className="text-lg font-semibold mb-4"> Why Choose Zion Tech Group? </h4>" <div className="grid grid-cols-2 gap-4 text-sm"> <div>" <div className="text-2xl font-bold">500+</div>" <div className="text-blue-100">Projects Delivered</div> </div> <div>" <div className="text-2xl font-bold">98%</div>" <div className="text-blue-100">Client Satisfaction</div> </div> <div>" <div className="text-2xl font-bold">15+</div>" <div className="text-blue-100">Years Experience</div> </div> <div>" <div className="text-2xl font-bold">24/7</div>" <div className="text-blue-100">Support Available</div> </div> </div> </div> </motion.div> {/* Contact Form */} <motion.div variants={itemVariants}> <form onSubmit={handleSubmit}" className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8" >" <div className="grid grid-cols-1 md: grid-cols-2: gap-6 mb-6"> {/* Name *,/} <div> <label" htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" > Full Name * </label>" <div className="relative">" <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> <input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full pl-10 pr-4 py-3 border rounded-xl focus: ring-2: focus:ring-blue-500: focus:border-transparent: transition-colors duration-300 ${ errors.name ? "border-red-500" : "border-gray-300"`, }`}" placeholder="Enter: your full name" /> </div> {errors.name && (" <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">" <AlertCircle className="w-4 h-4" /> {errors.name} </div> )} </div> {/* Email */} <div> <label" htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" > Email Address * </label>" <div className="relative">" <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> <input" type="email" id="email" name="email" value={formData.email} onChange={handleChange}` className={`w-full pl-10 pr-4 py-3 border rounded-xl focus: ring-2: focus:ring-blue-500: focus:border-transparent: transition-colors duration-300 ${ errors.email ? "border-red-500" : "border-gray-300"`, }`}" placeholder="Enter: your email" /> </div> {errors.email && (" <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">" <AlertCircle className="w-4 h-4" /> {errors.email} </div> )} </div> {/* Company */} <div> <label" htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2" > Company </label>" <div className="relative">" <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> <input" type="text" id="company" name="company" value={formData.company} onChange={handleChange}" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus: ring-2: focus:ring-blue-500: focus:border-transparent: transition-colors duration-300" placeholder="Enter company name" /> </div> </div> {/* Phone *,/} <div> <label" htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2" > Phone Number </label>" <div className="relative">" <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> <input" type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus: ring-2: focus:ring-blue-500: focus:border-transparent: transition-colors duration-300" placeholder="Enter phone number" /> </div> </div> </div> {/* Service Selection *,/}" <div className="mb-6">" <label className="block text-sm font-medium text-gray-700 mb-3"> Service of Interest * </label>" <div className="grid grid-cols-2 md: grid-cols-3: gap-3"> {services.map(service => ( <button key={service.i,d}" type="button" onClick={() => { setFormData(prev => ({ ...prev, service: service.i,d})); setSelectedService(service.id); if: (errors.service) { setErrors(prev => ({ ...prev, service: ", })); } }}` className={`p-3: rounded-xl border-2 transition-all duration-300 text-left ${ selectedService === service.id" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200: hover: border-gray-300: hover:bg-gray-50"`, }`} >" <div: className="text-sm font-medium"> {service.name} </div> </button> ))} </div> {errors.service && (" <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">" <AlertCircle className="w-4 h-4" /> {errors.service} </div> )} </div> {/* Budget and Timeline */}" <div className="grid grid-cols-1 md: grid-cols-2: gap-6 mb-6"> <div> <label" htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2" > Budget Range </label> <select" id="budget" name="budget" value={formData.budge,t} onChange={handleChange}" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus: ring-2: focus:ring-blue-500: focus:border-transparent: transition-colors duration-300" >" <option value=">Select budget range</option> {budgetRanges.map(budget => ( <option key={budget.valu,e} value={budget.value}> {budget.label} </option> ))} </select> </div> <div> <label" htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2" > Project Timeline </label> <select" id="timeline" name="timeline" value={formData.timeline} onChange={handleChange}" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus: ring-2: focus:ring-blue-500: focus:border-transparent: transition-colors duration-300" >" <option value=">Select timeline</option> {timelineOptions.map(timeline => ( <option key={timeline.valu,e} value={timeline.value}> {timeline.label} </option> ))} </select> </div> </div> {/* Message */}" <div className="mb-8"> <label" htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" > Project Details * </label> <textarea" id="message" name="message" rows={5} value={formData.message} onChange={handleChange}` className={`w-full px-4 py-3 border rounded-xl focus: ring-2: focus:ring-blue-500: focus:border-transparent: transition-colors duration-300 ${ errors.message ? "border-red-500" : "border-gray-300"`, }`}" placeholder="Tell: us about your project, requirements, timeline, and budget..." /> {errors.message && (" <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">" <AlertCircle className="w-4 h-4" /> {errors.message} </div> )} </div> {/* Submit Button */} <button" type="submit" disabled={isSubmitting}" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover: from-blue-700: hover:to-purple-700: transition-all duration-300 shadow-lg hover:shadow-xl: transform hover:-translate-y-0.5: disabled:opacity-50: disabled:cursor-not-allowed: disabled:transform-none" > {isSubmitting: ? (" <div className="flex items-center justify-center gap-3">" <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending Message... </div> ) : (" <div: className="flex items-center justify-center gap-3">" <Send className="w-5 h-5" /> Send Message </div> ,)} </button> " <p className="text-sm text-gray-500 text-center mt-4"> By submitting this form, you agree to our{" "} <Link" href="/privacy" className="text-blue-600 hover: text-blue-700: underline" > Privacy Policy </Link> </p> </form> </motion.div> </div> </motion.div> </div> </section> );, }; export: default EnhancedContactForm; "` 
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
=======
<<<<<<< HEAD
import React from 'react'; const EnhancedContactForm: React.FC = () => { const [formData, setFormData] = useState({ name: ", email: ", company: ", phone: ", service: ", budget: ", timeline: ", message: "}); const [errors, setErrors] = useState<Record<string, string>>({}); const [isSubmitting, setIsSubmitting] = useState(false); const [isSubmitted, setIsSubmitted] = useState(false); const [selectedService, setSelectedService] = useState("); const services = [ { id: "ai-development", name: "AI Development", icon: Globe, color: "from-purple-500 to-pink-500"}, { id: "cloud-architecture", name: "Cloud Architecture", icon: Globe, color: "from-blue-500 to-cyan-500"}, { id: "web-development", name: "Web Development", icon: Globe, color: "from-green-500 to-emerald-500"}, { id: "cybersecurity", name: "Cybersecurity", icon: Globe, color: "from-red-500 to-orange-500"}, { id: "iot-platforms", name: "IoT Platforms", icon: Globe, color: "from-indigo-500 to-purple-500"}, { id: "digital-transformation", name: "Digital Transformation", icon: Globe, color: "from-yellow-500 to-orange-500"}, { id: "custom", name: "Custom Solution", icon: Globe, color: "from-gray-500 to-slate-500"}, ]; const budgetRanges = [" { value: "under-25k", label: "Under $25K" }, { value: "25k-50k", label: "$25K - $50K" }, { value: "50k-100k", label: "$50K - $100K" }, { value: "100k-250k", label: "$100K - $250K" }, { value: "250k-500k", label: "$250K - $500K" }, { value: "over-500k", label: "Over $500K" }, ]; const timelineOptions = [" { value: "asap", label: "ASAP" }, { value: "1-3-months", label: "1-3 Months" }, { value: "3-6-months", label: "3-6 Months" }, { value: "6-12-months", label: "6-12 Months" }, { value: "12-plus-months", label: "12+ Months" }, ]; const validateForm = (...args: unknown[]): unknown => { const newErrors: Record<string, string> = {}; if (!formData.name.trim()) { newErrors.name = "Name is required"; } if (!formData.email.trim()) { newErrors.email = "Email is required"; } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address"; } if (!formData.message.trim()) { newErrors.message = "Message is required"; } if (!formData.service) { newErrors.service = "Please select a service"; } setErrors(newErrors); return Object.keys(newErrors).length === 0; }; const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); if (!validateForm()) { return; } setIsSubmitting(true); // Simulate API call await new Promise(resolve => setTimeout(resolve, 2000)); setIsSubmitting(false); setIsSubmitted(true); // Reset form after successful submission setTimeout(: unknown { setIsSubmitted(false); setFormData({ name: ", email: ", company: ", phone: ", service: ", budget: ", timeline: ", message: "}); setSelectedService("); }, 5000); }; const handleChange = ( e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement > ) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value })); // Clear error when user starts typing if (errors[name]) { setErrors(prev => ({ ...prev, [name]: " })); } }; const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2}}}; const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 }}}; if (isSubmitted) { return() <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-20 bg-gradient-to-br from-green-50 to-emerald-50" >" <div className="container mx-auto px-4 text-center">" <div className="max-w-2xl mx-auto">" <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">" <CheckCircle className="w-12 h-12 text-white" /> </div>" <h2 className="text-4xl font-bold text-gray-900 mb-4"> Thank You for Reaching Out! </h2>" <p className="text-xl text-gray-600 mb-8"> We&apos;ve received your message and will get back to you within 24 hours. Our team is excited to discuss your project and explore how we can help bring your vision to life. </p>" <div className="bg-white rounded-2xl p-6 shadow-lg">" <h3 className="text-lg font-semibold text-gray-900 mb-4"> What happens next? </h3>" <div className="grid grid-cols-1 md: grid-cols-3 gap-4 text-sm text-gray-600">" <div className="flex items-center gap-2">" <Clock className="w-4 h-4 text-green-500" /> <span>Response within 24h</span> </div>" <div className="flex items-center gap-2">" <MessageSquare className="w-4 h-4 text-green-500" /> <span>Schedule consultation</span> </div>" <div className="flex items-center gap-2">" <Calendar className="w-4 h-4 text-green-500" /> <span>Project planning</span> </div> </div> </div> </div> </div> </motion.div> ); } return (" <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">" <div className="container mx-auto px-4"> <motion.div variants={containerVariants}" initial="hidden" whileInView="visible" viewport={{ once: true }} > {/* Header */}" <motion.div variants={itemVariants} className="text-center mb-16">" <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-600 text-sm font-medium mb-6">" <MessageSquare className="w-4 h-4" /> Get In Touch </div>" <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Ready to Start Your" <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Project? </span> </h2>" <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"> Let&apos;s discuss your technology needs and explore how our expertise can drive innovation and growth for your business. </p> </motion.div> " <div className="grid grid-cols-1 lg: grid-cols-2 gap-16 max-w-7xl mx-auto"> {/* Contact Information */}" <motion.div variants={itemVariants} className="space-y-8"> <div>" <h3 className="text-2xl font-bold text-gray-900 mb-6"> Let&apos;s Connect </h3>" <p className="text-gray-600 mb-8 leading-relaxed"> Our team of technology experts is ready to help you navigate the digital landscape and implement solutions that drive real business value. </p> </div> {/* Contact Details */}" <div className="space-y-6">" <div className="flex items-start space-x-4">" <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">" <Phone className="w-6 h-6 text-white" /> </div> <div>" <h4 className="font-semibold text-gray-900">Phone</h4> <a" href="tel: +13024640950" className="text-blue-600 hover:text-blue-700 text-lg" > +1 (302) 464-0950 </a>" <p className="text-gray-600 text-sm"> Available Monday - Friday, 9 AM - 6 PM EST </p> </div> </div> " <div className="flex items-start space-x-4">" <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">" <Mail className="w-6 h-6 text-white" /> </div> <div>" <h4 className="font-semibold text-gray-900">Email</h4> <a" href="mailto: kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 text-lg" > kleber@ziontechgroup.com </a>" <p className="text-gray-600 text-sm"> We typically respond within 2-4 hours </p> </div> </div> " <div className="flex items-start space-x-4">" <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">" <MapPin className="w-6 h-6 text-white" /> </div> <div>" <h4 className="font-semibold text-gray-900">Office</h4>" <p className="text-gray-900 text-lg"> 364 E Main St STE 1008 </p>" <p className="text-gray-600 text-sm"> Middletown, DE 19709, United States </p> </div> </div> </div> {/* Quick Stats */}" <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">" <h4 className="text-lg font-semibold mb-4"> Why Choose Zion Tech Group? </h4>" <div className="grid grid-cols-2 gap-4 text-sm"> <div>" <div className="text-2xl font-bold">500+</div>" <div className="text-blue-100">Projects Delivered</div> </div> <div>" <div className="text-2xl font-bold">98%</div>" <div className="text-blue-100">Client Satisfaction</div> </div> <div>" <div className="text-2xl font-bold">15+</div>" <div className="text-blue-100">Years Experience</div> </div> <div>" <div className="text-2xl font-bold">24/7</div>" <div className="text-blue-100">Support Available</div> </div> </div> </div> </motion.div> {/* Contact Form */} <motion.div variants={itemVariants}> <form onSubmit={handleSubmit}" className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8" >" <div className="grid grid-cols-1 md: grid-cols-2 gap-6 mb-6"> {/* Name */} <div> <label" htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" > Full Name * </label>" <div className="relative">" <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> <input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${ errors.name ? "border-red-500" : "border-gray-300"` }`}" placeholder="Enter your full name" /> </div> {errors.name && (" <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">" <AlertCircle className="w-4 h-4" /> {errors.name} </div> )} </div> {/* Email */} <div> <label" htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" > Email Address * </label>" <div className="relative">" <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> <input" type="email" id="email" name="email" value={formData.email} onChange={handleChange}` className={`w-full pl-10 pr-4 py-3 border rounded-xl focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${ errors.email ? "border-red-500" : "border-gray-300"` }`}" placeholder="Enter your email" /> </div> {errors.email && (" <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">" <AlertCircle className="w-4 h-4" /> {errors.email} </div> )} </div> {/* Company */} <div> <label" htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2" > Company </label>" <div className="relative">" <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> <input" type="text" id="company" name="company" value={formData.company} onChange={handleChange}" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300" placeholder="Enter company name" /> </div> </div> {/* Phone */} <div> <label" htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2" > Phone Number </label>" <div className="relative">" <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> <input" type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300" placeholder="Enter phone number" /> </div> </div> </div> {/* Service Selection */}" <div className="mb-6">" <label className="block text-sm font-medium text-gray-700 mb-3"> Service of Interest * </label>" <div className="grid grid-cols-2 md:grid-cols-3 gap-3"> {services.map(service => ( <button key={service.id}" type="button" onClick={() => { setFormData(prev => ({ ...prev, service: service.id})); setSelectedService(service.id); if (errors.service) { setErrors(prev => ({ ...prev, service: " })); } }}` className={`p-3 rounded-xl border-2 transition-all duration-300 text-left ${ selectedService === service.id" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"` }`} >" <div className="text-sm font-medium"> {service.name} </div> </button> ))} </div> {errors.service && (" <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">" <AlertCircle className="w-4 h-4" /> {errors.service} </div> )} </div> {/* Budget and Timeline */}" <div className="grid grid-cols-1 md: grid-cols-2 gap-6 mb-6"> <div> <label" htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2" > Budget Range </label> <select" id="budget" name="budget" value={formData.budget} onChange={handleChange}" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300" >" <option value=">Select budget range</option> {budgetRanges.map(budget => ( <option key={budget.value} value={budget.value}> {budget.label} </option> ))} </select> </div> <div> <label" htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2" > Project Timeline </label> <select" id="timeline" name="timeline" value={formData.timeline} onChange={handleChange}" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300" >" <option value=">Select timeline</option> {timelineOptions.map(timeline => ( <option key={timeline.value} value={timeline.value}> {timeline.label} </option> ))} </select> </div> </div> {/* Message */}" <div className="mb-8"> <label" htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" > Project Details * </label> <textarea" id="message" name="message" rows={5} value={formData.message} onChange={handleChange}` className={`w-full px-4 py-3 border rounded-xl focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${ errors.message ? "border-red-500" : "border-gray-300"` }`}" placeholder="Tell us about your project, requirements, timeline, and budget..." /> {errors.message && (" <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">" <AlertCircle className="w-4 h-4" /> {errors.message} </div> )} </div> {/* Submit Button */} <button" type="submit" disabled={isSubmitting}" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" > {isSubmitting ? (" <div className="flex items-center justify-center gap-3">" <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending Message... </div> ) : (" <div className="flex items-center justify-center gap-3">" <Send className="w-5 h-5" /> Send Message </div> )} </button> " <p className="text-sm text-gray-500 text-center mt-4"> By submitting this form, you agree to our{" "} <Link" href="/privacy" className="text-blue-600 hover: text-blue-700 underline" > Privacy Policy </Link> </p> </form> </motion.div> </div> </motion.div> </div> </section> ); }; export default EnhancedContactForm; "` 
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
<<<<<<< HEAD
=======
  Send,
>>>>>>> main
>>>>>>> main
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
<<<<<<< HEAD
  MapPin,
  Building,
  MessageSquare,
  Clock,
  Calendar,
  Send,
  Globe
=======
  Building,
<<<<<<< HEAD
  MessageSquare,
  Clock,
  Calendar,
  MapPin,
  Send,
=======
  MapPin,
  MessageSquare,
  Clock,
  Calendar,
<<<<<<< HEAD
  Globe'
=======
<<<<<<< HEAD
  Globe,
=======
>>>>>>> main
  Globe
>>>>>>> main
>>>>>>> main
>>>>>>> main
} from 'lucide-react';
import Link from 'next/link';

const EnhancedContactForm: React.FC = () => {
<<<<<<< HEAD
  const [formData, setFormData] = useState({
=======
  const [formData, setFormData] = useState({'
>>>>>>> main
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
<<<<<<< HEAD
    message: ''
  });
  
=======
    message: '',
  });
<<<<<<< HEAD
  
=======
>>>>>>> main
>>>>>>> main
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('');

<<<<<<< HEAD
  const services = [
    { id: 'ai-development', name: 'AI Development', icon: Globe, color: 'from-purple-500 to-pink-500' },
=======
<<<<<<< HEAD
  const services = ['
=======
  const services = [
<<<<<<< HEAD
    {
      id: 'ai-development',
      name: 'AI Development',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'cloud-architecture',
      name: 'Cloud Architecture',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'web-development',
      name: 'Web Development',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Globe,
      color: 'from-red-500 to-orange-500',
    },
    {
      id: 'iot-platforms',
      name: 'IoT Platforms',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      icon: Globe,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 'custom',
      name: 'Custom Solution',
      icon: Globe,
      color: 'from-gray-500 to-slate-500',
    },
=======
<<<<<<< HEAD
>>>>>>> main
    { id: 'ai-development', name: 'AI Development', icon: Globe, color: 'from-purple-500 to-pink-500' },
=======
  { id: 'ai-development', name: 'AI Development', icon: Globe, color: 'from-purple-500 to-pink-500' },
>>>>>>> main
>>>>>>> main
    { id: 'cloud-architecture', name: 'Cloud Architecture', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'web-development', name: 'Web Development', icon: Globe, color: 'from-green-500 to-emerald-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Globe, color: 'from-red-500 to-orange-500' },
    { id: 'iot-platforms', name: 'IoT Platforms', icon: Globe, color: 'from-indigo-500 to-purple-500' },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Globe, color: 'from-yellow-500 to-orange-500' },
    { id: 'custom', name: 'Custom Solution', icon: Globe, color: 'from-gray-500 to-slate-500' },
<<<<<<< HEAD
  ];

  const budgetRanges = [
    { value: 'under-25k', label: 'Under $25K' },
=======
>>>>>>> main
  ];

<<<<<<< HEAD
  const budgetRanges = ['
=======
  const budgetRanges = [
<<<<<<< HEAD
>>>>>>> main
    { value: 'under-25k', label: 'Under $25K' },
=======
  { value: 'under-25k', label: 'Under $25K' },
>>>>>>> main
>>>>>>> main
    { value: '25k-50k', label: '$25K - $50K' },
    { value: '50k-100k', label: '$50K - $100K' },
    { value: '100k-250k', label: '$100K - $250K' },
    { value: '250k-500k', label: '$250K - $500K' },
    { value: 'over-500k', label: 'Over $500K' },
  ];

<<<<<<< HEAD
  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
=======
<<<<<<< HEAD
  const timelineOptions = ['
=======
  const timelineOptions = [
<<<<<<< HEAD
>>>>>>> main
    { value: 'asap', label: 'ASAP' },
=======
  { value: 'asap', label: 'ASAP' },
>>>>>>> main
>>>>>>> main
    { value: '1-3-months', label: '1-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: '6-12-months', label: '6-12 Months' },
    { value: '12-plus-months', label: '12+ Months' },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
<<<<<<< HEAD
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
=======
=======

    if (!formData.name.trim()) {'
      newErrors.name = 'Name is required';
    }

<<<<<<< HEAD
    if (!formData.email.trim()) {'
=======
>>>>>>> main
    if (!formData.email.trim()) {
>>>>>>> main
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {'
      newErrors.email = 'Please enter a valid email address';
    }
<<<<<<< HEAD
>>>>>>> main
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
<<<<<<< HEAD
=======
=======

    if (!formData.message.trim()) {'
      newErrors.message = 'Message is required';
    }

    if (!formData.service) {'
      newErrors.service = 'Please select a service';
    }

>>>>>>> main
>>>>>>> main
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
<<<<<<< HEAD
    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
=======
=======
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

>>>>>>> main
    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({'
>>>>>>> main
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
<<<<<<< HEAD
        message: ''
=======
        message: '',
>>>>>>> main
      });
      setSelectedService('');
    }, 5000);
  };

  const handleChange = (
<<<<<<< HEAD
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
=======
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
<<<<<<< HEAD
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
=======
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {'
      setErrors(prev => ({ ...prev, [name]: '' }));
>>>>>>> main
>>>>>>> main
    }
  };

  const containerVariants = {
<<<<<<< HEAD
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
=======
    hidden: { opacit,
    y: 0 },
    visible: {
      opacit,
    y: 1,
      transition: {
<<<<<<< HEAD
        staggerChildre,
    n: 0.1,
        delayChildren: 0.2
      }
    }
=======
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
>>>>>>> main
  };

  const itemVariants = {
    hidden: { opacit,
    y: 0, y: 30 },
    visible: {
      opacit,
    y: 1,
      y: 0,
<<<<<<< HEAD
      transition: { duratio,
    n: 0.6 }
    }
=======
      transition: { duration: 0.6 },
    },
>>>>>>> main
>>>>>>> main
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-20 bg-gradient-to-br from-green-50 to-emerald-50"
<<<<<<< HEAD
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Thank You for Reaching Out!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We've received your message and will get back to you within 24 hours. Our team is excited to discuss your project and explore how we can help bring your vision to life.
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span>Response within 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-green-500" />
                  <span>Schedule consultation</span>
                </div>
                <div className="flex items-center gap-2">
=======
      >"
        <div className="container mx-auto px-4 text-center">"
          <div className="max-w-2xl mx-auto">"
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">"
              <CheckCircle className="w-12 h-12 text-white" />
            </div>"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Thank You for Reaching Out!
<<<<<<< HEAD
            </h2>"
            <p className="text-xl text-gray-600 mb-8">"
              We've received your message and will get back to you within 24 hours. Our team is excited to discuss your project and explore how we can help bring your vision to life.
            </p>'
            <div className="bg-white rounded-2xl p-6 shadow-lg">"
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>"
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">"
                <div className="flex items-center gap-2">"
=======
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;ve received your message and will get back to you within
              24 hours. Our team is excited to discuss your project and explore
              how we can help bring your vision to life.'
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What happens next?
              </h3>
              <div className="grid grid-cols-1 md: grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
>>>>>>> main
                  <Clock className="w-4 h-4 text-green-500" />
                  <span>Response within 24h</span>
                </div>"
                <div className="flex items-center gap-2">"
                  <MessageSquare className="w-4 h-4 text-green-500" />
                  <span>Schedule consultation</span>
                </div>"
                <div className="flex items-center gap-2">"
>>>>>>> main
                  <Calendar className="w-4 h-4 text-green-500" />
                  <span>Project planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

<<<<<<< HEAD
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-600 text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ready to Start Your{' '}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Project?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your technology needs and explore how our expertise can drive innovation and growth for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our team of technology experts is ready to help you navigate the digital landscape and implement solutions that drive real business value.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a
                      href="tel:+13024640950"
=======
  return ("
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">"
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}"
          initial="hidden""
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}"
          <motion.div variants={itemVariants} className="text-center mb-16">"
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-600 text-sm font-medium mb-6">"
              <MessageSquare className="w-4 h-4" />
              Get In Touch
            </div>"
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ready to Start Your"
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Project?
              </span>
<<<<<<< HEAD
            </h2>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">"
              Let's discuss your technology needs and explore how our expertise can drive innovation and growth for your business.
            </p>
          </motion.div>
'
          <div className="grid grid-cols-1 l,
    g:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Information */}"
            <motion.div variants={itemVariants} className="space-y-8">
              <div>"
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>'
=======
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s discuss your technology needs and explore how our
              expertise can drive innovation and growth for your business.'
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg: grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Let&apos;s Connect
                </h3>
                '
>>>>>>> main
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our team of technology experts is ready to help you navigate
                  the digital landscape and implement solutions that drive real
                  business value.
                </p>
              </div>

              {/* Contact Details */}"
              <div className="space-y-6">"
                <div className="flex items-start space-x-4">"
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">"
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>"
                    <h4 className="font-semibold text-gray-900">Phone</h4>
<<<<<<< HEAD
                    <a"
                      href="tel:+13024640950""
                      className="text-blue-600 hove,
    r:text-blue-700 text-lg"
                    >
                      +1 (302) 464-0950
                    </a>"
                    <p className="text-gray-600 text-sm">Available Monday - Friday, 9 AM - 6 PM EST</p>
=======
                    <a
                      href="tel: +13024640950"
>>>>>>> main
                      className="text-blue-600 hover:text-blue-700 text-lg"
                    >
                      +1 (302) 464-0950
                    </a>
<<<<<<< HEAD
                    <p className="text-gray-600 text-sm">Available Monday - Friday, 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
=======
                    <p className="text-gray-600 text-sm">
                      Available Monday - Friday, 9 AM - 6 PM EST
                    </p>
>>>>>>> main
                  </div>
                </div>
"
                <div className="flex items-start space-x-4">"
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">"
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>"
                    <h4 className="font-semibold text-gray-900">Email</h4>
<<<<<<< HEAD
                    <a"
                      href="mailto:kleber@ziontechgroup.com""
                      className="text-blue-600 hove,
    r:text-blue-700 text-lg"
                    >
                      kleber@ziontechgroup.com
                    </a>"
                    <p className="text-gray-600 text-sm">We typically respond within 2-4 hours</p>
=======
                    <a
                      href="mailto: kleber@ziontechgroup.com"
>>>>>>> main
                      className="text-blue-600 hover:text-blue-700 text-lg"
                    >
                      kleber@ziontechgroup.com
                    </a>
<<<<<<< HEAD
                    <p className="text-gray-600 text-sm">We typically respond within 2-4 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office</h4>
                    <p className="text-gray-900 text-lg">364 E Main St STE 1008</p>
                    <p className="text-gray-600 text-sm">Middletown, DE 19709, United States</p>
=======
                    <p className="text-gray-600 text-sm">
                      We typically respond within 2-4 hours
                    </p>
>>>>>>> main
                  </div>
                </div>
"
                <div className="flex items-start space-x-4">"
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">"
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
<<<<<<< HEAD
                  <div>"
                    <h4 className="font-semibold text-gray-900">Office</h4>"
                    <p className="text-gray-900 text-lg">364 E Main St STE 1008</p>"
                    <p className="text-gray-600 text-sm">Middletown, DE 19709, United States</p>
=======
                  <div>
                    <h4 className="font-semibold text-gray-900">Office</h4>
                    <p className="text-gray-900 text-lg">
                      364 E Main St STE 1008
                    </p>
                    <p className="text-gray-600 text-sm">
                      Middletown, DE 19709, United States
                    </p>
>>>>>>> main
>>>>>>> main
                  </div>
                </div>
              </div>

<<<<<<< HEAD
              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <h4 className="text-lg font-semibold mb-4">Why Choose Zion Tech Group?</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-blue-100">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
=======
<<<<<<< HEAD
              {/* Quick Stats */}"
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">"
                <h4 className="text-lg font-semibold mb-4">Why Choose Zion Tech Group?</h4>"
=======
              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <h4 className="text-lg font-semibold mb-4">
                  Why Choose Zion Tech Group?
                </h4>
>>>>>>> main
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>"
                    <div className="text-2xl font-bold">500+</div>"
                    <div className="text-blue-100">Projects Delivered</div>
                  </div>
                  <div>"
                    <div className="text-2xl font-bold">98%</div>"
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                  <div>"
                    <div className="text-2xl font-bold">15+</div>"
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                  <div>"
                    <div className="text-2xl font-bold">24/7</div>"
>>>>>>> main
                    <div className="text-blue-100">Support Available</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
<<<<<<< HEAD
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.name && (
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
=======
                onSubmit={handleSubmit}"
                className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
<<<<<<< HEAD
              >"
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
=======
              >
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6 mb-6">
>>>>>>> main
                  {/* Name */}
                  <div>
                    <label"
                      htmlFor="name""
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>"
                    <div className="relative">"
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input"
                        type="text""
                        id="name""
                        name="name"
                        value={formData.name}
                        onChange={handleChange}"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent transition-colors duration-300 ${`
                          errors.name ? 'border-red-500' : 'border-gray-300''
                        }`}`
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.name && ("
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">"
>>>>>>> main
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div>
<<<<<<< HEAD
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && (
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
=======
                    <label"
                      htmlFor="email""
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>"
                    <div className="relative">"
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input"
                        type="email""
                        id="email""
                        name="email"
                        value={formData.email}
<<<<<<< HEAD
                        onChange={handleChange}"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent transition-colors duration-300 ${`
                          errors.email ? 'border-red-500' : 'border-gray-300''
                        }`}`
=======
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
>>>>>>> main
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && ("
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">"
>>>>>>> main
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Company */}
                  <div>
<<<<<<< HEAD
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
=======
                    <label"
                      htmlFor="company""
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company
                    </label>"
                    <div className="relative">"
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input"
                        type="text""
                        id="company""
                        name="company"
                        value={formData.company}
<<<<<<< HEAD
                        onChange={handleChange}"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent transition-colors duration-300""
=======
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
>>>>>>> main
>>>>>>> main
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
<<<<<<< HEAD
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
=======
                    <label"
                      htmlFor="phone""
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>"
                    <div className="relative">"
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input"
                        type="tel""
                        id="phone""
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent transition-colors duration-300""
>>>>>>> main
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>

<<<<<<< HEAD
                {/* Service Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Service of Interest *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map(service => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, service: service.id }));
                          setSelectedService(service.id);
                          if (errors.service) {
=======
                {/* Service Selection */}"
                <div className="mb-6">"
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Service of Interest *
                  </label>"
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map(service => (
                      <button
                        key={service.id}"
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            service: service.id,
                          }));
                          setSelectedService(service.id);
                          if (errors.service) {"
>>>>>>> main
                            setErrors(prev => ({ ...prev, service: '' }));
                          }
                        }}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 text-left ${
<<<<<<< HEAD
                          selectedService === service.id
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
=======
                          selectedService === service.id`
                            ? 'border-blue-500 bg-blue-50 text-blue-700''
                            : 'border-gray-200 hover:border-gray-300 hove,
    r:bg-gray-50''
                        }`}
                      >`
>>>>>>> main
                        <div className="text-sm font-medium">
                          {service.name}
                        </div>
                      </button>
                    ))}
                  </div>
<<<<<<< HEAD
                  {errors.service && (
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
=======
                  {errors.service && ("
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">"
>>>>>>> main
                      <AlertCircle className="w-4 h-4" />
                      {errors.service}
                    </div>
                  )}
                </div>

<<<<<<< HEAD
                {/* Budget and Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="budget"
=======
<<<<<<< HEAD
                {/* Budget and Timeline */}"
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
=======
                {/* Budget and Timeline */}
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6 mb-6">
>>>>>>> main
                  <div>
                    <label"
                      htmlFor="budget""
>>>>>>> main
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Budget Range
                    </label>
<<<<<<< HEAD
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    >
=======
                    <select"
                      id="budget""
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent transition-colors duration-300"
                    >"
>>>>>>> main
                      <option value="">Select budget range</option>
                      {budgetRanges.map(budget => (
                        <option key={budget.value} value={budget.value}>
                          {budget.label}
                        </option>
<<<<<<< HEAD
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
=======
                      ));
                    </select>
                  </div>
                  <div>
                    <label"
                      htmlFor="timeline""
>>>>>>> main
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Timeline
                    </label>
<<<<<<< HEAD
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    >
=======
                    <select"
                      id="timeline""
                      name="timeline"
                      value={formData.timeline}
<<<<<<< HEAD
                      onChange={handleChange}"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent transition-colors duration-300"
                    >"
=======
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    >
>>>>>>> main
>>>>>>> main
                      <option value="">Select timeline</option>
                      {timelineOptions.map(timeline => (
                        <option key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </option>
<<<<<<< HEAD
                      ))}
=======
                      ));
>>>>>>> main
                    </select>
                  </div>
                </div>

<<<<<<< HEAD
                {/* Message */}
                <div className="mb-8">
                  <label
                    htmlFor="message"
=======
                {/* Message */}"
                <div className="mb-8">
                  <label"
                    htmlFor="message""
>>>>>>> main
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details *
                  </label>
<<<<<<< HEAD
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your project, requirements, timeline, and budget..."
                  />
                  {errors.message && (
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
=======
                  <textarea"
                    id="message""
                    name="message"
                    rows={5}
                    value={formData.message}
<<<<<<< HEAD
                    onChange={handleChange}"
                    className={`w-full px-4 py-3 border rounded-xl focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent transition-colors duration-300 ${`
                      errors.message ? 'border-red-500' : 'border-gray-300''
                    }`}`
=======
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
>>>>>>> main
                    placeholder="Tell us about your project, requirements, timeline, and budget..."
                  />
                  {errors.message && ("
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">"
>>>>>>> main
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
<<<<<<< HEAD
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
=======
                <button"
                  type="submit"
<<<<<<< HEAD
                  disabled={isSubmitting}"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disable,
    d:cursor-not-allowed disable,
    d:transform-none"
=======
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
>>>>>>> main
                >
                  {isSubmitting ? ("
                    <div className="flex items-center justify-center gap-3">"
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </div>
                  ) : ("
                    <div className="flex items-center justify-center gap-3">"
>>>>>>> main
                      <Send className="w-5 h-5" />
                      Send Message
                    </div>
                  )}
                </button>
<<<<<<< HEAD

                <p className="text-sm text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our{' '}
                  <Link
                    href="/privacy"
                    className="text-blue-600 hover:text-blue-700 underline"
=======
"
                <p className="text-sm text-gray-500 text-center mt-4">"
                  By submitting this form, you agree to our{' '}
<<<<<<< HEAD
                  <Link'
                    href="/privacy""
                    className="text-blue-600 hover:text-blue-700 underline"
=======
                  <Link
                    href="/privacy"
                    className="text-blue-600 hover: text-blue-700 underline"
>>>>>>> main
>>>>>>> main
                  >
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default EnhancedContactForm;
=======
<<<<<<< HEAD
export default EnhancedContactForm;"
=======
export default EnhancedContactForm;
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
