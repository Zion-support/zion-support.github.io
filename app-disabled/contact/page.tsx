import React from 'react';
import { Helmet } from 'react-helmet-async';
'use client;
const ContactPage: React.FC = () => {const [formData, setFormData] = useState({
    name: '',    email: '',
    company: '',
    phone: '',
    service: '',)
    message: ''),
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(idle);
const handleChange = useCallback((e: .ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement />) => {;;,
    setFormData(prev => ({)
    message: '';)
})
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const handleChange = useCallback((e: .ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement />) => {}
    setFormData(prev => ({};)
      ...prev,;)
      [e.target.name]: e.target.value;)
})))
}, []);
const handleSubmit = useCallback(async (e: .FormEvent) => {    setFormData(prev => ({;),
  const handleSubmit = useCallback(async (e: .FormEvent) => {;,
  const handleSubmit = useCallback (async (e: .FormEvent) => {;,
    e.preventDefault();    setIsSubmitting(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',)
message: ''),
      setSubmitStatus('error)]
      setSubmitStatus('error);
    } finally {
      setIsSubmitting(false);
  }, []);
  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 /></div>
        <title>Contact Us - Zion Tech Group | Get in Touch<
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get a free consultation, quote, or support. Call +1-302-464-0950 or email kleber@ziontechgroup.com 
        <meta name="keywords" content="contact us, AI consulting, IT support, free consultation, get quote, technical support 
      <)
      <{/* Hero Section *)
      <section className="relative py-20 px-4 overflow-hidden>)
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse 
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '',
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '',
              {submitStatus === 'success' && (<div className=mb-6 p-4 bg-green-500/20 border border-green-500
                  <Circle className="w-5 h-5 text-green-400 mr-2 
                  <span className="text-green-400>Message sent successfully!<
                <)
              )}
              {submitStatus === 'error' && (<div className=mb-6 p-4 bg-red-500/20 border border-red-500
                  <span className="text-red-400>Failed to send message. Please try again.<
                  and well get back to you within 24 hours.
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                    Message *
                  <
                  <textarea,
id="message"
                    name="message"
                    value = { formData.message }
                    onChange = { handleChange }
                    rows = { 5 }
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s: border-transparent",
                    placeholder="Tell us about your project..."
                <
                <button,
type="submit"
                  disabled = { isSubmitting }
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover: from-purple-600 hover:to-blue-700 disabled:opacity-50 disable,
    d: cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center",
                 /></textarea>
                  {isSubmitting ? (<>}
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"><
                      Sending...
                    <)
                  ) : (<></>
              <div /></div>
                <h2 className="text-3 xl font-bold text-white mb-6">Get in touch<
                <p className="text-gray-300 mb-8" /></p>
                  We're here to help you succeed. Reach out to us through any of the channels below,
and we'll get back to you within 24 hours.
                <
              <
              <div className="space-y-6 /></div>
                <div className="flex items-start space-x-4 /></div>
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 /></div>
                    <h3 className="text-lg font-semibold text-white mb-1><
                    <p className="text-gray-300>+1-302-464-0950<
                    <p className="text-sm text-gray-400>Mon-Fri 9 AM-6 PM EST<
                  <
                <
                <div className="flex items-start space-x-4 /></div>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 /></div>
                    <h3 className="text-lg font-semibold text-white mb-1>Email<
                    <p className="text-gray-300>kleber@ziontechgroup.com<
                    <p className="text-sm text-gray-400">Well respond within 24 hours<
                  <
                <
                <div className="flex items-start space-x-4 /></div>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 /></div>
                    <h3 className="text-lg font-semibold text-white mb-1>Office<
                    <p className="text-gray-300>364 E Main St STE 1008<
                    <p className="text-gray-300>Middletown, DE 19709<
                  <
                <
                <div className="flex items-start space-x-4 /></div>
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 /></div>
                    <h3 className="text-lg font-semibold text-white mb-1>Business Hours<
                    <p className="text-gray-300>Monday - Friday: 9:00 AM - 6:00 PM<,
                    <p className="text-gray-300>Saturday: 10:00 AM - 4:00 PM<,
                    <p className="text-gray-300>Sunda,
y: Closed<,
                  <
                <
              <
            <
          <
        <
      <
      <Footer 
    <
  );
)]
    }
}
export default ContactPage;}
