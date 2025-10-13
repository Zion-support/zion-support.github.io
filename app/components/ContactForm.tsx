<<<<<<< HEAD
=======
import React, { useState } from 'react'.
import {Mail, Phone, MapPin, Send, CheckCircle, AlertCircle}}from 'lucide-react'.

interface FormData {name: string,}
  message: string,}interface FormStatus {type: 'idle' | 'loading' | 'success' | 'error';,}'
  message: string,}const [formData, setFormData] = useState<FormData>({name: '',
  type: 'idle' | 'loading' | 'success' | 'error';'
  message: string,
}

const ContactForm: React.FC = () => {
    message: '',})

  const [status, setStatus] = useState<FormStatus>({type: 'idle',
    message: '',})

>>>>>>> origin/main
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {,
    const {name, value}}= e.target.
    setFormData(prev => ({)
<<<<<<< HEAD
      [name]: value;}));
    } catch (error) {
      } finally {
=======
      [name]: value;})).
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault().
    setIsSubmitting(true).

    try {
      // Simulate API call.
      await new Promise((resolve) => setTimeout(resolve, 1000)).
      setIsSubmitted(true).
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: "",
      }).
    } catch (error) {
      } finally {
      setIsSubmitting(false).
    }
  };

  if (isSubmitted) {
    return (
<<<<<<< HEAD
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
        <MessageSquare className="w-8 h-8 mx-auto mb-2" />
        <h3 className="text-lg font-semibold mb-2">Thank you!
          Your message has been sent successfully. We'll get back to you soon.
    );
=======
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">"
        <MessageSquare className="w-8 h-8 mx-auto mb-2" />"
        <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
        <p>
          Your message has been sent successfully. We'll get back to you soon.'
        </p>
      </div>
  ).
  ).
    ).
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
  }

  const handleSubmit = async (e: React.FormEvent) => {,
      await new Promise(resolve => setTimeout(resolve, 2000)).

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.
      }).

        message: 'Sorry, there was an error sending your message. Please try again.'})
    'Other'
  ]

<<<<<<< HEAD
  return(<div className="max-w-2xl mx-auto p-6">)
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch
          <p className="text-gray-600">
            Ready to transform your business? Let's discuss your project.
        <form onSubmit={handleSubmit} className="space-y-6">
=======
  const Component = () => {
  
    return (<div className="max-w-2xl mx-auto p-6">)</div>
  const Component = () => {
  
    return (
    <div className="max-w-2xl mx-auto">"
      <div className="bg-white rounded-2xl shadow-2xl p-8">"
        <div className="text-center mb-8">"
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>"
          <p className="text-gray-600">"
            Ready to transform your business? Let's discuss your project.'
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">"
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your full name"
              />
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
<<<<<<< HEAD
              <input;
=======
              </label>
              <input.
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,
=======
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,</div>
            <div>
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company.
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number.
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
<<<<<<< HEAD
              Service Interest;
            <select;
=======
              Service Interest.
            </label>
            <select.
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
              id="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select a service
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
              ))}
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required.
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Tell us about your project and how we can help..."
            />
          {status.message && (
            <div className={`p-4 rounded-lg flex items-center space-x-3 ${
              status.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : status.type === 'error'
                ? 'bg-red-50 text-red-800 border border-red-200'
                : 'bg-blue-50 text-blue-800 border border-blue-200'
            }`}>
              {status.type === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-500" />"
              ) : status.type === 'error' ? (
                <AlertCircle className="h-5 w-5 text-red-500" />
          <button.
            type="submit"
<<<<<<< HEAD
            disabled={status.type === 'loading'}className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",
          >{status.type === 'loading' ? (
              <React.Fragment>
=======
            disabled={status.type === 'loading'}className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2","
          >{status.type === 'loading' ? (</button>
              <>
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...
            ) : (
              <React.Fragment>
                <Send className="h-5 w-5" />
<<<<<<< HEAD
                <span>Send Message
            )}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6 text-center">,
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-blue-100 rounded-full">
                <Phone className="h-6 w-6 text-blue-600" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-blue-100 rounded-full">
                <Phone className="h-6 w-6 text-blue-600" />
                <p className="font-semibold text-gray-900">Phone
              <div className="p-3 bg-green-100 rounded-full">
                <Mail className="h-6 w-6 text-green-600" />
                <p className="font-semibold text-gray-900">Email
              <div className="p-3 bg-purple-100 rounded-full">
                <MapPin className="h-6 w-6 text-purple-600" />
                <p className="font-semibold text-gray-900">Office
  );
};

export default ContactForm;
</div></div></div></div></div></div></div></div></div></div></div></div>
=======
                <span>Send Message</span>
              </>
            )} </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200">"
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6 text-center">,</div>"
            <div className="flex flex-col items-center space-y-2">"
              <div className="p-3 bg-blue-100 rounded-full">"
                <Phone className="h-6 w-6 text-blue-600" />"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">"
            <div className="flex flex-col items-center space-y-2">"
              <div className="p-3 bg-blue-100 rounded-full">"
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>"
              <div className="p-3 bg-green-100 rounded-full">"
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>"
              <div className="p-3 bg-purple-100 rounded-full">"
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Office</p>
  ).
};

export default ContactForm.
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
>>>>>>> origin/main
