<<<<<<< HEAD
export const metadata = {
=======
export const metadata = { 
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
  title: 'Contact | Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.',
};

export default function ContactPage() {
  return (
<<<<<<< HEAD
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600">We reply within one business day</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 302 464 0950</p>
                  <p className="text-sm text-gray-500">Available 9 AM - 6 PM EST</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">✉️</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Office</h3>
                  <p className="text-gray-600">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                  <p className="text-sm text-gray-500">By appointment only</p>
                </div>
              </div>
=======
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Ready to transform your business with AI, micro SaaS, or IT solutions? 
            We'd love to hear from you.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Email</h3>
              <p className="text-gray-300">contact@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Response Time</h3>
              <p className="text-gray-300">Within 1 business day</p>
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
            </div>
          </div>
        </div>
        
<<<<<<< HEAD
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your project or requirements..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
=======
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-4">Send us a message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your project..."
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}