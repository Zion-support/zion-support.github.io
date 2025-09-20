impor, t, Reac, t, { useState } from "react";
interface FormData {
  nam, e: strin, g,
    emai, l: strin, g,compan, y: strin, g,
    servic, e: strin, g,messag, e: strin, g,
    budge, t: string
}
;
const ContactFor, m: React.FC = () => {
  const [formDa,  t, a, setFormDa, t, a] = useState<FormData>({
    nam, e: '',
    emai, l: '',compan, y: '',
    servic, e: '',messag, e: '',
    budge, t: ''
  });
  const [isSubmitti, n, g, setIsSubmitti, n, g] = useState(false);
  const [submitStat,  u, s, setSubmitStat, u, s] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { nam,  e, value } = e.target;
    setFormData(prev => ({
      ...pre, v,
      [na, m, e]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolv,  e, 2000)),
      setSubmitStatus('success');
      setFormData({
        nam,  e: '',
    emai, l: '',compan, y: '',
    servic, e: '',messag, e: '',
    budge, t: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'A,  I ServicesMicr, o Saa, S',
    'I, T ServicesQuantu, m Computin, g',
    'BlockchainSpac, e Technolog, y'
  ];

  const budgetRanges = [
    'Unde, r $5,00, 0$5,00, 0 - $2, 5,00, 0',
    '$2, 5,00, 0 - $1, 0, 0,00, 0$1, 0, 0,00, 0 - $5, 0, 0,00, 0',
    'Ove, r $5, 0, 0,00, 0'
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <p className="text-green-400">Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
          </div>
        )}

        {submitStatus === 'error' && (<div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-red-400">Sorr,  y, there was an error sending your message. Please try again.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 m, d:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focu, s:outline-none focu, s:ring-2 focu, s:ring-purple-500 focu, s:border-transparent transition-all duration-300"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focu, s:outline-none focu, s:ring-2 focu, s:ring-purple-500 focu, s:border-transparent transition-all duration-300"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 m, d:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focu, s:outline-none focu, s:ring-2 focu, s:ring-purple-500 focu, s:border-transparent transition-all duration-300"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                Service Interest *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focu, s:outline-none focu, s:ring-2 focu, s:ring-purple-500 focu, s:border-transparent transition-all duration-300"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service} className="bg-gray-700">
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
              Project Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focu,  s:outline-none focu, s:ring-2 focu, s:ring-purple-500 focu, s:border-transparent transition-all duration-300"
            >
              <option value="">Select budget range</option>
              {budgetRanges.map((range) => (<option key={range} value={range} className="bg-gray-700">
                  {range}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focu,  s:outline-none focu, s:ring-2 focu, s:ring-purple-500 focu, s:border-transparent transition-all duration-300 resize-none"
              placeholder="Tell us about your projec, t, requirement, s, timelin, e, and any specific needs..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hove, r: from-purple-700 hove, r:to-pink-700 disable, d:from-gray-600 disable, d:to-gray-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hove, r:scale-105 disable, d:scale-100 shadow-lg disable, d:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending...
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;