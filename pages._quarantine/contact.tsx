import React from 'react';
<<<<<<< HEAD
const contact: React.FC = () => {,
  return (,
})
=======

const contact: React.FC = () => {
  return (
    <>
      <SEO title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI services, IT solutions, and micro SaaS development. Call +1 302 464 0950 or email kleber@ziontechgroup.com"
        keywords="contact, Zion Tech Group, AI services, IT solutions, micro SaaS, phone, email, address"
        canonical=""https": //ziontechgroup.com/contact"
       />
      <PageTransition>
        <main className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6 }}
                className="text-center"
              >
                <h1 className="text-4xl "md": text-6xl font-bold text-gray-900 mb-6">
                  Get In <span className="text-blue-600">Touch</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Ready to transform your business with our innovative AI, IT, and micro SaaS solutions? Let's discuss your project.
                </p>
                <div className="flex flex-col "sm": flex-row gap-4 justify-center">
                  <motion.a
                    href="tel:+13024640950"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ "scale": 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5"  />
                    Call "Now": +1 302 464 0950
                  </motion.a>
                  <motion.a
                    href="mailto:kleber@ziontechgroup.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ "scale": 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5"  />
                    Send Email
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>
          {/* Contact Information */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6, "delay": 0.2 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Multiple ways to reach us for your convenience
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ "opacity": 0, "y": 20 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0.6, "delay": index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg "hover": shadow-xl transition-shadow duration-300 text-center"
                  >
                    <div className="text-blue-600 mb-4 flex justify-center">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 "hover": text-blue-600 transition-colors whitespace-pre-line"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">
                        {info.details}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Contact Form */}
          <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </motion.div>
              <div className="max-w-4xl mx-auto">
                <motion.form
                  initial={{ opacity: 0, "y": 20 }}
                  animate={{ "opacity": 1, "y": 0 }}
                  transition={{ "duration": 0.6, "delay": 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="grid grid-cols-1 "md": grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                       />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                       />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                       />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                       />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": rin g-2 focus: rin g-blue-500 focus: borde r-transparent"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ "scale": 0.98 }}
                    className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 "hover": bg-blue-700 transition-colors"
                  >
                    <Send className="w-5 h-5"  />
                    Send Message
                  </motion.button>
                </motion.form>
              </div>
            </div>
          </section>
          {/* Services Overview */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
                  Our Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive technology solutions to meet all your business needs
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ "opacity": 0, "y": 20 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0.6, "delay": index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg "hover": shadow-xl transition-shadow duration-300 text-center"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  )
}
export default ContactPage
import React from 'react' import dynamic from 'next/dynamic' import { motion } from 'framer-motion' import { Phone,Mail,MapPin,Clock,ArrowRight,Send } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) export default function ContactPage() { const [formData,setFormData] = useState({ name: '',email: '',company: '',phone: '',service: '',message: '' }); const [isSubmitting,setIsSubmitting] = useState(false); const [isSubmitted,setIsSubmitted] = useState(false); const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { const { name,value } = e.target; setFormData(prev => ({ ...prev,[name]: value }))}; const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true)},2000)}; const ContactPage: React.FC = () => { const contactInfo = [ { icon: <Phone className="w-6 h-6" />,title: "Phone",details: "+1 302 464 0950",link: "tel:+13024640950" },{ icon: <Mail className="w-6 h-6" />,title: "Email",details: "kleber@ziontechgroup.com",link: "mailto:kleber@ziontechgroup.com" },{ icon: <MapPin className="w-6 h-6" />,title: "Address",details: "364 E Main St STE 1008\nMiddletown,DE 19709",link: "https: },{ icon: <Clock className="w-6 h-6" />,title: "Business Hours",details: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM",link: null } ] const services = [ "AI & Machine Learning Solutions","IT Infrastructure & Support","Micro SaaS Development","Cybersecurity Services","Cloud & DevOps Solutions","Blockchain Technology","Digital Transformation","Consulting & Strategy" ] return ( <> <SEO title="Contact Us - Zion Tech Group" description="Get in touch with Zion Tech Group for AI services,IT solutions,and micro SaaS development. Call +1 302 464 0950 or email kleber@ziontechgroup.com" keywords="contact,Zion Tech Group,AI services,IT solutions,micro SaaS,phone,email,address" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Get In <span className="text-blue-600">Touch</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Ready to transform your business with our innovative AI,IT,and micro SaaS solutions? Let's discuss your project. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <Phone className="w-5 h-5" /> Call Now: +1 302 464 0950 </motion.a> <motion.a href="mailto:kleber@ziontechgroup.com" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <Mail className="w-5 h-5" /> Send Email </motion.a> </div> </motion.div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Contact Information </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Multiple ways to reach us for your convenience </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {contactInfo.map((info,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <div className="text-blue-600 mb-4 flex justify-center"> {info.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {info.title} </h3> {info.link ? ( <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors whitespace-pre-line" > {info.details} </a> ) : ( <p className="text-gray-600 whitespace-pre-line"> {info.details} </p> )} </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Send Us a Message </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Fill out the form below and we'll get back to you within 24 hours </p> </motion.div> <div className="max-w-4xl mx-auto"> <motion.form initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="bg-white rounded-xl shadow-lg p-8" > <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"> Full Name * </label> <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your full name" /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email Address * </label> <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@example.com" /> </div> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> <div> <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2"> Phone Number </label> <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+1 (555) 123-4567" /> </div> <div> <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2"> Company </label> <input type="text" id="company" name="company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your company name" /> </div> </div> <div className="mb-6"> <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2"> Service Interest </label> <select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" > <option value="">Select a service</option> {services.map((service,index) => ( <option key={index} value={service}> {service} </option> ))} </select> </div> <div className="mb-6"> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2"> Message * </label> <textarea id="message" name="message" rows={6} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" placeholder="Tell us about your project requirements..." ></textarea> </div> <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors" > <Send className="w-5 h-5" /> Send Message </motion.button> </motion.form> </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive technology solutions to meet all your business needs </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {services.map((service,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <h3 className="text-lg font-semibold text-gray-900"> {service} </h3> </motion.div> ))} </div> </div> </section> </main> </PageTransition> </> ) } export default ContactPage
import React from 'react' import dynamic from 'next/dynamic' import { motion } from 'framer-motion' import { Phone,Mail,MapPin,Clock,ArrowRight,Send } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) export default function ContactPage() { const [formData,setFormData] = useState({ name: '',email: '',company: '',phone: '',service: '',message: '' }); const [isSubmitting,setIsSubmitting] = useState(false); const [isSubmitted,setIsSubmitted] = useState(false); const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { const { name,value } = e.target; setFormData(prev => ({ ...prev,[name]: value }))}; const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true)},2000)}; const ContactPage: React.FC = () => { const contactInfo = [ { icon: <Phone className="w-6 h-6" />,title: "Phone",details: "+1 302 464 0950",link: "tel:+13024640950" },{ icon: <Mail className="w-6 h-6" />,title: "Email",details: "kleber@ziontechgroup.com",link: "mailto:kleber@ziontechgroup.com" },{ icon: <MapPin className="w-6 h-6" />,title: "Address",details: "364 E Main St STE 1008\nMiddletown,DE 19709",link: "https: },{ icon: <Clock className="w-6 h-6" />,title: "Business Hours",details: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM",link: null } ] const services = [ "AI & Machine Learning Solutions","IT Infrastructure & Support","Micro SaaS Development","Cybersecurity Services","Cloud & DevOps Solutions","Blockchain Technology","Digital Transformation","Consulting & Strategy" ] return ( <> <SEO title="Contact Us - Zion Tech Group" description="Get in touch with Zion Tech Group for AI services,IT solutions,and micro SaaS development. Call +1 302 464 0950 or email kleber@ziontechgroup.com" keywords="contact,Zion Tech Group,AI services,IT solutions,micro SaaS,phone,email,address" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Get In <span className="text-blue-600">Touch</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Ready to transform your business with our innovative AI,IT,and micro SaaS solutions? Let's discuss your project. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <Phone className="w-5 h-5" /> Call Now: +1 302 464 0950 </motion.a> <motion.a href="mailto:kleber@ziontechgroup.com" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <Mail className="w-5 h-5" /> Send Email </motion.a> </div> </motion.div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Contact Information </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Multiple ways to reach us for your convenience </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {contactInfo.map((info,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <div className="text-blue-600 mb-4 flex justify-center"> {info.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {info.title} </h3> {info.link ? ( <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors whitespace-pre-line" > {info.details} </a> ) : ( <p className="text-gray-600 whitespace-pre-line"> {info.details} </p> )} </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Send Us a Message </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Fill out the form below and we'll get back to you within 24 hours </p> </motion.div> <div className="max-w-4xl mx-auto"> <motion.form initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="bg-white rounded-xl shadow-lg p-8" > <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"> Full Name * </label> <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your full name" /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email Address * </label> <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@example.com" /> </div> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> <div> <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2"> Phone Number </label> <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+1 (555) 123-4567" /> </div> <div> <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2"> Company </label> <input type="text" id="company" name="company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your company name" /> </div> </div> <div className="mb-6"> <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2"> Service Interest </label> <select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" > <option value="">Select a service</option> {services.map((service,index) => ( <option key={index} value={service}> {service} </option> ))} </select> </div> <div className="mb-6"> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2"> Message * </label> <textarea id="message" name="message" rows={6} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" placeholder="Tell us about your project requirements..." ></textarea> </div> <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors" > <Send className="w-5 h-5" /> Send Message </motion.button> </motion.form> </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive technology solutions to meet all your business needs </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {services.map((service,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <h3 className="text-lg font-semibold text-gray-900"> {service} </h3> </motion.div> ))} </div> </div> </section> </main> </PageTransition> </> ) } export default ContactPage
import * as React from 'react' import dynamic from 'next/dynamic' import { motion } from 'framer-motion' import { Phone,Mail,MapPin,Clock,ArrowRight,Send } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) export default function ContactPage() { const [formData,setFormData] = useState({ name: '',email: '',company: '',phone: '',service: '',message: '' }); const [isSubmitting,setIsSubmitting] = useState(false); const [isSubmitted,setIsSubmitted] = useState(false); const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { const { name,value } = e.target; setFormData(prev => ({ ...prev,[name]: value }))}; const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true)},2000)}; const ContactPage: React.FC = () => { const contactInfo = [ { icon: <Phone className="w-6 h-6" />,title: "Phone",details: "+1 302 464 0950",link: "tel:+13024640950" },{ icon: <Mail className="w-6 h-6" />,title: "Email",details: "kleber@ziontechgroup.com",link: "mailto:kleber@ziontechgroup.com" },{ icon: <MapPin className="w-6 h-6" />,title: "Address",details: "364 E Main St STE 1008\nMiddletown,DE 19709",link: "https: },{ icon: <Clock className="w-6 h-6" />,title: "Business Hours",details: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM",link: null } ] const services = [ "AI & Machine Learning Solutions","IT Infrastructure & Support","Micro SaaS Development","Cybersecurity Services","Cloud & DevOps Solutions","Blockchain Technology","Digital Transformation","Consulting & Strategy" ] return ( <> <SEO title="Contact Us - Zion Tech Group" description="Get in touch with Zion Tech Group for AI services,IT solutions,and micro SaaS development. Call +1 302 464 0950 or email kleber@ziontechgroup.com" keywords="contact,Zion Tech Group,AI services,IT solutions,micro SaaS,phone,email,address" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Get In <span className="text-blue-600">Touch</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Ready to transform your business with our innovative AI,IT,and micro SaaS solutions? Let's discuss your project. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <Phone className="w-5 h-5" /> Call Now: +1 302 464 0950 </motion.a> <motion.a href="mailto:kleber@ziontechgroup.com" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <Mail className="w-5 h-5" /> Send Email </motion.a> </div> </motion.div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Contact Information </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Multiple ways to reach us for your convenience </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {contactInfo.map((info,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <div className="text-blue-600 mb-4 flex justify-center"> {info.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {info.title} </h3> {info.link ? ( <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors whitespace-pre-line" > {info.details} </a> ) : ( <p className="text-gray-600 whitespace-pre-line"> {info.details} </p> )} </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Send Us a Message </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Fill out the form below and we'll get back to you within 24 hours </p> </motion.div> <div className="max-w-4xl mx-auto"> <motion.form initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="bg-white rounded-xl shadow-lg p-8" > <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"> Full Name * </label> <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your full name" /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email Address * </label> <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@example.com" /> </div> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> <div> <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2"> Phone Number </label> <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+1 (555) 123-4567" /> </div> <div> <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2"> Company </label> <input type="text" id="company" name="company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your company name" /> </div> </div> <div className="mb-6"> <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2"> Service Interest </label> <select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" > <option value="">Select a service</option> {services.map((service,index) => ( <option key={index} value={service}> {service} </option> ))} </select> </div> <div className="mb-6"> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2"> Message * </label> <textarea id="message" name="message" rows={6} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" placeholder="Tell us about your project requirements..." ></textarea> </div> <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors" > <Send className="w-5 h-5" /> Send Message </motion.button> </motion.form> </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive technology solutions to meet all your business needs </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {services.map((service,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <h3 className="text-lg font-semibold text-gray-900"> {service} </h3> </motion.div> ))} </div> </div> </section> </main> </PageTransition> </> ) } export default ContactPage
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
