import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';



const ContactForm: React.FC<ContactFormProps> = ({ isReducedMotion = false }) => {
  const [formData, setFormData] = useState<ContactFormData>({
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});



  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    


    const newErrors: Partial<ContactFormData> = {};




  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    

    
      
import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
  const [formData, setFormData] = useState<FormData>({
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm]);

  const inputClasses = "w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300";
  const errorClasses = "text-red-400 text-sm mt-1 flex items-center gap-2";

  return (


                <AlertCircle className="w-4 h-4" />








            <LoadingSpinner size="sm" />
          </div>

          {/* Email */}
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
              onBlur={() => handleBlur('email')}
              className={`${inputClasses} ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
              placeholder="Enter your email address"
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={!!errors.email}
              required
            />
            {errors.email && (
              <div id="email-error" className={errorClasses}>
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company */}
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
              className={inputClasses}
              placeholder="Enter your company name"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={() => handleBlur('phone')}
              className={`${inputClasses} ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
              placeholder="Enter your phone number"
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <div id="phone-error" className={errorClasses}>
                <AlertCircle className="w-4 h-4" />
                {errors.phone}
              </div>
            )}
          </div>
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className={inputClasses}
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={() => handleBlur('message')}
            rows={5}
            className={`${inputClasses} resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
            placeholder="Tell us about your project or how we can help..."
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-invalid={!!errors.message}
            required
          />
          {errors.message && (
            <div id="message-error" className={errorClasses}>
              <AlertCircle className="w-4 h-4" />
              {errors.message}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={!isSubmitting && !isReducedMotion ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting && !isReducedMotion ? { scale: 0.98 } : {}}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg text-lg shadow-2xl hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button>
        </div>

        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3 p-4 bg-green-600/20 border border-green-500/50 rounded-lg text-green-400"
            >
              <CheckCircle className="w-5 h-5" />
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3 p-4 bg-red-600/20 border border-red-500/50 rounded-lg text-red-400"
            >
              <AlertCircle className="w-5 h-5" />
              Something went wrong. Please try again or contact us directly.
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );

export default ContactForm;
              <LoadingSpinner size="sm" />;




export default ContactForm;
