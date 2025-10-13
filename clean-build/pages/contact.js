// import { useState } from "react"../components/Layout" const Contact = () => {/* TODO: Fix JSX expression */}"
  e: "} });
const handleChange = (e) => {setFormData({ ...formData) [e.target.name]: e.target.value} }); }; const handleSubmit = (e) => {e.preventDefault()} // Handle form submission here alert("); }; return (<Layout title="Contact Us - Zion Tech Group"Get in touch with Zion Tech Group for technology solutions, consultations, and support. Contact us via phone, email) or our contact form." >"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
<main className="text-center mb-16" >"text-4 xl,"
  md:text-5 xl font-bold text-gray-800 mb-6"
<p className="text-xl text-gray-600 max-w-3 xl mx-auto"grid,"
  lg:grid-cols-2 gap-12"bg-white rounded-lg shadow-lg p-8"
<h2 className="
<form onSubmit={handleSubmit} className="space-y-6"grid,"
  md:grid-cols-2 gap-6"
<div>
<label htmlFor="<name"block text-sm font-medium text-gray-700 mb-2"
<input type=" id="name"name" required value={formData.name} onChange={handleChange} className=""
  focus:border-transparent"Your full name" /></div>"<email" className="
<input type="email"email" name=" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg,"
  focus:border-transparent" placeholder=" /></div>"
</div>
< className="
  md:grid-cols-2 gap-6" >"<company" className="
<input type="text"company" name=" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg,"
  focus:border-transparent" placeholder=" /></div>"
<div>
<label htmlFor=" className="block text-sm font-medium text-gray-700 mb-2"tel" id=" name="phone"w-full px-4 py-3 border border-gray-300 rounded-lg,"" placeholder="+1 (555) 123-4567"
</div>
<div>
<label htmlFor="<service"block text-sm font-medium text-gray-700 mb-2"
<select id=" name="service"w-full px-4 py-3 border border-gray-300 rounded-lg,"" >"
<option value=">Select a service</option>"
<option value=">Micro SAAS Solutions</option>"
<option value=">AI Services</option>"
<option value=">IT Services</option>"
<option value=">Cloud Migration</option>"
<option value=">Cybersecurity</option>"
<option value=">General Consultation</option></select>"
</div>
<div>
<label htmlFor=" className="block text-sm font-medium text-gray-700 mb-2"message" name=" required rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg,"
  focus:border-transparent" placeholder=" /></div>"
< type=" className="w-full bg-blue-600," > Send Message </button></form>"
</div> {/* Contact Information */} <div className="bg-white rounded-lg shadow-lg p-8" >"text-2 xl font-bold text-gray-800 mb-6"
<div className="
<div className="flex items-start space-x-4"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
<svg className="none" stroke=" viewBox="0 0 24 24"
<path strokeLinecap="round"round" strokeWidth={2} d=" /></svg>"
</div>
<div>
<h3 className="
<p className="text-gray-600"text-sm text-gray-500"
</div>
<div className="
<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"w-6 h-6 text-green-600"none"currentColor" viewBox=" >"
<path strokeLinecap=" strokeLinejoin="round"M3 8 l7.89 4.26 a2 2 0 002.22 0 L21 8 M5 19 h14 a2 2 0 002-2 V7 a2 2 0 00-2-2 H5 a2 2 0 00-2 2 v10 a2 2 0 002 2 z" /></svg>"text-lg font-semibold text-gray-800"
<p className="
<p className="text-sm text-gray-500"flex items-start space-x-4"
<div className="
<svg className="w-6 h-6 text-purple-600" stroke="currentColor"0 0 24 24" >"round" strokeLinejoin=" strokeWidth={2} d="M17.657 16.657 L13.414 20.9 a1.998 1.998 0 01-2.827 0 l-4.244-4.243 a8 8 0 1111.314 0 z"
<path strokeLinecap="round"round" strokeWidth={2} d=" /></svg>"
</div>
<div>
<h3 className="
<p className="text-gray-600"bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white"
<h3 className="
<p className="mb-6"flex flex-col,$2 />"" >"
< href="$2 />"
  l:+<13024640950"bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-center,"
  hover:bg-gray-100 transition-colors"
< href="mailt,"
  o:kleber@ziontechgroup.<com" className=""
  hover:text-blue-600 transition-colors"
</div></div>
</div></main>
</div></Layout> ); }; } export default Contact;
"</p></p>"
</p></p>
</p>