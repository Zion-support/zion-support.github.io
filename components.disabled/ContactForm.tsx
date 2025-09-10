<<<<<<< HEAD
import React,{ useState } from \'react\'; import LoadingSpinner from \'./LoadingSpinner\'; interface FormData { \"name\": \'string; email: string; company: string; phone: string; service: string; message: string;\' } } const \"ContactForm\": React.FC = () => { const [formData,setFormData] = useState<FormData>({ \"name\": \'',\"email\": \'',\"company\": \'',\"phone\": \'',\"service\": \'',\"message\": \''}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState<\'idle\' | \'success\' | \'error\'>(\'idle\'); const [errors,setErrors] = useState<Partial<FormData>>({}); const validateForm = useCallback((\"data\": FormData): Partial<FormData> => { const newErrors: Partial<FormData> = {} if (!data.name.trim()) newErrors.name = \'Name is required\'; if (!data.email.trim()) newErrors.email = \'Email is required\'; else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = \'Invalid email format\'; if (!data.message.trim()) newErrors.message = \'Message is required\'; return newErrors},[]); const handleInputChange = (\"e\": React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { const { name,value } = e.target; setFormData((prev) => ({ ...prev,[name]: value})); if (errors[name as keyof FormData]) { setErrors(prev => ({ ...prev,[name]: undefined }))} const handleSubmit = async (\"e\": React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); setSubmitStatus(\'idle\'); try { await new Promise(resolve => window.setTimeout(resolve,2000)); setSubmitStatus(\'success\'); setFormData({ \"name\": \'',\"email\": \'',\"company\": \'',\"phone\": \'',\"service\": \'',\"message\": \''})} catch { setSubmitStatus(\'error\')} finally { setIsSubmitting(false)} return ( <form onSubmit={handleSubmit} className=\"space-y-6\" aria-label=\"Contact form\"> <div className=\"grid \"md\": grid-cols-2 gap-6\">,<div> <label htmlFor=\"name\" className=\"block text-sm font-medium text-slate-300 mb-2\"> Full Name * </label> <input type=\"text\" id=\"name\" name=\"name\" value={formData.name} onChange={handleInputChange} required className=\"w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 \"focus\": outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\" placeholder=\"Your full name\" aria-describedby=\"name-error\" /> {errors.name && ( <p id=\"name-error\" className=\"mt-1 text-sm text-red-400\" role=\"alert\"> {errors.name} </p> )} </div> <div> <label htmlFor=\"email\" className=\"block text-sm font-medium text-slate-300 mb-2\"> Email Address * </label> <input type=\"email\" id=\"email\" name=\"email\" value={formData.email} onChange={handleInputChange} required className=\"w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 \"focus\": outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\" placeholder=\"your.email@company.com\" aria-describedby=\"email-error\" /> {errors.email && ( <p id=\"email-error\" className=\"mt-1 text-sm text-red-400\" role=\"alert\"> {errors.email} </p> )} </div> </div> <div className=\"grid \"md\": grid-cols-2 gap-6\">,<div> <label htmlFor=\"company\" className=\"block text-sm font-medium text-slate-300 mb-2\"> Company </label> <input type=\"text\" id=\"company\" name=\"company\" value={formData.company} onChange={handleInputChange} className=\"w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 \"focus\": outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\" placeholder=\"Your company name\" /> </div> <div> <label htmlFor=\"phone\" className=\"block text-sm font-medium text-slate-300 mb-2\"> Phone Number </label> <input type=\"tel\" id=\"phone\" name=\"phone\" value={formData.phone} onChange={handleInputChange} className=\"w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 \"focus\": outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\" placeholder=\"+1 (555) 123-4567\" /> </div> </div> <div> <label htmlFor=\"service\" className=\"block text-sm font-medium text-slate-300 mb-2\"> Service Interest </label> <select id=\"service\" name=\"service\" value={formData.service} onChange={handleInputChange} className=\"w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white \"focus\": outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\" > <option value=>Select a service</option> <option value=\"web-development\">Web Development</option> <option value=\"mobile-development\">Mobile Development</option> <option value=\"cloud-solutions\">Cloud Solutions</option> <option value=\"ai-ml\">AI & Machine Learning</option> <option value=\"cybersecurity\">Cybersecurity</option> <option value=\"consulting\">Consulting</option> <option value=\"other\">Other</option> </select> </div> <div> <label htmlFor=\"message\" className=\"block text-sm font-medium text-slate-300 mb-2\"> Message * </label> <textarea id=\"message\" name=\"message\" value={formData.message} onChange={handleInputChange} required rows={6} className=\"w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 \"focus\": outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical\" placeholder=\"Tell us about your project or how we can help you...\" aria-describedby=\"message-error\" /> {errors.message && ( <p id=\"message-error\" className=\"mt-1 text-sm text-red-400\" role=\"alert\"> {errors.message} </p> )} </div> {} {submitStatus === \'success\' && ( <div className=\"p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-300\" role=\"alert\"> Thank you for your message! We&apos;ll get back to you within 24 hours. </div> ) } {submitStatus === \'error\' && ( <div className=\"p-4 bg-red-900/20 border border-red-500/30 rounded-lg\"> <p className=\"text-red-400 text-sm\"> ❌ Sorry,there was an error sending your message. Please try again. </p> </div> )} <button type=\"submit\" disabled={isSubmitting} className=\"w-full px-8 py-3 bg-blue-600 \"hover\": bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-lg font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900\" aria-describedby=\"submit-status\" > {isSubmitting ? ( <div className=\"flex items-center justify-center gap-2\"> <LoadingSpinner size=\"sm\" /> Sending Message... </div> ) : ( \'Send Message\' ) } </button> </form> )} export default ContactForm;
const React,{ useState } from "react"; import LoadingSpinner from "./LoadingSpinner"; interface FormData { name: "string; email: string; company: string; phone: string; service: string; message: string;" } } const ContactForm: React.FC = () => { const [formData,setFormData] = useState<FormData>({ name: "",email: "",company: "",phone: "",service: "",message: ""}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState<"idle" | "success" | "error">("idle"); const [errors,setErrors] = useState<Partial<FormData>>({}); const validateForm = useCallback((data: FormData): Partial<FormData> => { const newErrors: Partial<FormData> = {} if (!data.name.trim()) newErrors.name = "Name is required"; if (!data.email.trim()) newErrors.email = "Email is required"; else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = "Invalid email format"; if (!data.message.trim()) newErrors.message = "Message is required"; return newErrors},[]); const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { const { name,value } = e.target; setFormData((prev) => ({ .prev,[name]: value})); if (errors[name as keyof FormData]) { setErrors(prev => ({ .prev,[name]: undefined }))} const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); setSubmitStatus("idle"); try { await new Promise(resolve => window.setTimeout(resolve,2000)); setSubmitStatus("success"); setFormData({ name: "",email: "",company: "",phone: "",service: "",message: ""})} catch { setSubmitStatus("error")} finally { setIsSubmitting(false)} return ( <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form"> <div className="grid md: grid-cols-2 gap-6">,<div> <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2"> Full Name * </label> <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your full name" aria-describedby="name-error" /> {errors.name && ( <p id="name-error" className="mt-1 text-sm text-red-400" role="alert"> {errors.name} </p> )} </div> <div> <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2"> Email Address * </label> <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@company.com" aria-describedby="email-error" /> {errors.email && ( <p id="email-error" className="mt-1 text-sm text-red-400" role="alert"> {errors.email} </p> )} </div> </div> <div className="grid md: grid-cols-2 gap-6">,<div> <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2"> Company </label> <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your company name" /> </div> <div> <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2"> Phone Number </label> <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+1 (555) 123-4567" /> </div> </div> <div> <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2"> Service Interest </label> <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" > <option value=>Select a service</option> <option value="web-development">Web Development</option> <option value="mobile-development">Mobile Development</option> <option value="cloud-solutions">Cloud Solutions</option> <option value="ai-ml">AI & Machine Learning</option> <option value="cybersecurity">Cybersecurity</option> <option value="consulting">Consulting</option> <option value="other">Other</option> </select> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2"> Message * </label> <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical" placeholder="Tell us about your project or how we can help you." aria-describedby="message-error" /> {errors.message && ( <p id="message-error" className="mt-1 text-sm text-red-400" role="alert"> {errors.message} </p> )} </div> {} {submitStatus === "success" && ( <div className="p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-300" role="alert"> Thank you for your message! We&apos;ll get back to you within 24 hours. </div> ) } {submitStatus === "error" && ( <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg"> <p className="text-red-400 text-sm"> Sorry,there was an error sending your message. Please try again. </p> </div> )} <button type="submit" disabled={isSubmitting} className="w-full px-8 py-3 bg-blue-600 hover: bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-lg font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900" aria-describedby="submit-status" > {isSubmitting ? ( <div className="flex items-center justify-center gap-2"> <LoadingSpinner size="sm" /> Sending Message. </div> ) : ( "Send Message" ) } </button> </form> )} export default ContactForm;'"'"
import _React,{ useState } from 'react'; import LoadingSpinner from './LoadingSpinner'; interface FormData { "name": 'string; email: string; company: string; phone: string; service: string; message: string;' } } const "ContactForm": _React.FC = () => { const [formData,setFormData] = useState<FormData>({ "name": '',"email": '',"company": '',"phone": '',"service": '',"message": ''}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle'); const [errors,setErrors] = useState<Partial<FormData>>({}); const validateForm = useCallback(("data": FormData): Partial<FormData> => { const newErrors: Partial<FormData> = {} if (!data.name.trim()) newErrors.name = 'Name is required'; if (!data.email.trim()) newErrors.email = 'Email is required'; else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Invalid email format'; if (!data.message.trim()) newErrors.message = 'Message is required'; return newErrors},[]); const handleInputChange = ("e": _React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { const { name,value } = e.target; setFormData((prev) => ({ ...prev,[name]: value})); if (errors[name as keyof FormData]) { setErrors(prev => ({ ...prev,[name]: undefined }))} const handleSubmit = async ("e": _React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); setSubmitStatus('idle'); try { await new Promise(resolve => window.setTimeout(resolve,2000)); setSubmitStatus('success'); setFormData({ "name": '',"email": '',"company": '',"phone": '',"service": '',"message": ''})} catch { setSubmitStatus('error')} finally { setIsSubmitting(false)} return ( <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form"> <div className="grid "md": grid-cols-2 gap-6">,<div> <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2"> Full Name * </label> <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 "focus": outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your full name" aria-describedby="name-error" /> {errors.name && ( <p id="name-error" className="mt-1 text-sm text-red-400" role="alert"> {errors.name} </p> )} </div> <div> <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2"> Email Address * </label> <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 "focus": outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@company.com" aria-describedby="email-error" /> {errors.email && ( <p id="email-error" className="mt-1 text-sm text-red-400" role="alert"> {errors.email} </p> )} </div> </div> <div className="grid "md": grid-cols-2 gap-6">,<div> <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2"> Company </label> <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 "focus": outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your company name" /> </div> <div> <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2"> Phone Number </label> <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 "focus": outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+1 (555) 123-4567" /> </div> </div> <div> <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2"> Service Interest </label> <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white "focus": outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" > <option value=>Select a service</option> <option value="web-development">Web Development</option> <option value="mobile-development">Mobile Development</option> <option value="cloud-solutions">Cloud Solutions</option> <option value="ai-ml">AI & Machine Learning</option> <option value="cybersecurity">Cybersecurity</option> <option value="consulting">Consulting</option> <option value="other">Other</option> </select> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2"> Message * </label> <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 "focus": outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical" placeholder="Tell us about your project or how we can help you..." aria-describedby="message-error" /> {errors.message && ( <p id="message-error" className="mt-1 text-sm text-red-400" role="alert"> {errors.message} </p> )} </div> {} {submitStatus === 'success' && ( <div className="p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-300" role="alert"> Thank you for your message! We&apos;ll get back to you within 24 hours. </div> ) } {submitStatus === 'error' && ( <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg"> <p className="text-red-400 text-sm"> ❌ Sorry,there was an error sending your message. Please try again. </p> </div> )} <button type="submit" disabled={isSubmitting} className="w-full px-8 py-3 bg-blue-600 "hover": bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-lg font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900" aria-describedby="submit-status" > {isSubmitting ? ( <div className="flex items-center justify-center gap-2"> <LoadingSpinner size="sm" /> Sending Message... </div> ) : ( 'Send Message' ) } </button> </form> )} export default ContactForm;
=======
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string}

  name: string,;
  email: string,;
company: string,;
  service: string,;
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({;
    name: '',;
    email: '',;
    company: '',;
    service: '',;
    message: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const services = [;
    'AI & Machine Learning',;
    'Cloud & DevOps',;
    'Cybersecurity',;
    'Web Development',;
    'Mobile Development',;
    'Data Analytics',;
    'Digital Transformation',;
    'Other',;
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'}

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'}

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0}
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return}

    setIsSubmitting(true);

    // Simulate API call;
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds;
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({;
        name: '',;
        email: '',;
        company: '',;
        service: '',;
        message: ''})}, 3000)}
  const handleChange = (;
    e: React.ChangeEvent<;
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    >;
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing;
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))}
  }
  if (isSubmitted) {
    return (;
      <motion.div;
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">;
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />;
        <h3 className="text-2xl font-bold text-green-800 mb-2">;
          Message Sent!;
        </h3>;
        <p className="text-green-600">;
          Thank you for reaching out. We'll get back to you within 24 hours.;
        </p>;
      </motion.div>;
    )}

  return (;
    <div className="bg-white rounded-xl shadow-xl p-8">;
      <div className="text-center mb-8">;
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>;
        <p className="text-gray-600 max-w-2xl mx-auto">;
          Ready to transform your business? Let's discuss how our technology;
          solutions can drive your success.;
        </p>;
      </div>;

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">;
        <div>;
          <h3 className="text-xl font-semibold text-gray-900 mb-4">;
            Contact Information;
          </h3>;
          <div className="space-y-4">;
            <div className="flex items-center space-x-3">;
              <Mail className="w-5 h-5 text-blue-600" />;
              <div>;
                <p className="font-medium text-gray-900">Email</p>;
                <p className="text-gray-600">kleber@ziontechgroup.com</p>;
              </div>;
            </div>;
            <div className="flex items-center space-x-3">;
              <Phone className="w-5 h-5 text-blue-600" />;
              <div>;
                <p className="font-medium text-gray-900">Phone</p>;
                <p className="text-gray-600">+1 (302) 464-0950</p>;
              </div>;
            </div>;
            <div className="flex items-center space-x-3">;
              <MapPin className="w-5 h-5 text-blue-600" />;
              <div>;
                <p className="font-medium text-gray-900">Address</p>;
                <p className="text-gray-600">;
                  364 E Main St STE 1008;
                  <br />;
                  Middletown, DE 19709;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;

        <form onSubmit={handleSubmit} className="space-y-6">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <div>;
              <label;
                htmlFor="name";
                className="block text-sm font-medium text-gray-700 mb-2">;
                Full Name *;
              </label>;
              <input;
                type="text";
                id="name";
                name="name";
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${;
                  errors.name ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="John Doe";
              />;
              {errors.name && (;
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>;
              )}
            </div>;

            <div>;
              <label;
                htmlFor="email";
                className="block text-sm font-medium text-gray-700 mb-2">;
                Email Address *;
              </label>;
              <input;
                type="email";
                id="email";
                name="email";
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${;
                  errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="john@company.com";
              />;
              {errors.email && (;
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>;
              )}
            </div>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <div>;
              <label;
                htmlFor="company";
                className="block text-sm font-medium text-gray-700 mb-2">;
                Company;
              </label>;
              <input;
                type="text";
                id="company";
                name="company";
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                placeholder="Your Company";
              />;
            </div>;

            <div>;
              <label;
                htmlFor="service";
                className="block text-sm font-medium text-gray-700 mb-2">;
                Service Interest;
              </label>;
              <select;
                id="service";
                name="service";
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">;
                <option value="">Select a service</option>;
                {services.map(service => (;
                  <option key={service} value={service}>{service}</option>;
                ))}

              </select>;
            </div>;
          </div>;

          <div>;
            <label;
              htmlFor="message";
              className="block text-sm font-medium text-gray-700 mb-2">;
              Message *;
            </label>;
            <textarea;
              id="message";
              name="message";
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${;
                errors.message ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Tell us about your project and how we can help...";
            />;
            {errors.message && (;
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>;
            )}
          </div>;

          <motion.button;
            type="submit";
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 ${;
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >;
            {isSubmitting ? (;
              <>;
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>;
                <span>Sending...</span>;
              </>;
            ) : (;
              <>;
                <Send className="w-5 h-5" />;
                <span>Send Message</span>;
              </>;
            )}
          </motion.button>;
        </form>;
      </div>;
    </div>;
  )}
export default ContactForm;
>>>>>>> origin/automation-fixes
