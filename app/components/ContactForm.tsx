<<<<<<< HEAD
'use client'
import React, { useState, useCallback } from 'react'
;
interface FormData {;
  name: string;
  email: string;
  message: string}
interface FormErrors {;
  name?: string;
  email?: string;
  message?: string}
const ContactForm: React.FC = () => {;
  const [formData, setFormData] = useState<FormData>({;
    name: '',;
    email: '',;
    message: '');
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
;
  const validateForm = useCallback((data: FormData): FormErrors => {;
    const newErrors: FormErrors = {}
    if (!data.name.trim()) {;
      newErrors.name = 'Name is required'} else if (data.name.trim().length < 2) {;
      newErrors.name = 'Name must be at least 2 characters'}
    if (!data.email.trim()) {;
      newErrors.email = 'Email is required'} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {;
      newErrors.email = 'Please enter a valid email address'}
    if (!data.message.trim()) {;
      newErrors.message = 'Message is required'} else if (data.message.trim().length < 10) {;
      newErrors.message = 'Message must be at least 10 characters'}
    return newErrors}, []);
;
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e.target;
    setFormData(prev => ({;
      ...prev,;
      [name]: value);
    }));
;
    // Clear error when user starts typing;
    if (errors[name as keyof FormErrors]) {;
      setErrors(prev => ({;
        ...prev,;
        [name]: undefined);
      }))}
  }, [errors]);
;
  const handleSubmit = useCallback(async (e: React.FormEvent) => {;
    e.preventDefault();
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {;
      setErrors(formErrors);
      return}
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrors({});
;
    try {;
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1000));
;
      // Here you would typically send the data to your backend;
      console.log('Form submitted:', formData);
;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' })} catch (error) {;
      console.error('Error submitting form:', error);
      setSubmitStatus('error')} finally {;
      setIsSubmitting(false)}
  }, [formData, validateForm]);
;
  return (<div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">;"
        <div>"
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">;
            Name;
          </label>;"
          <input"
            type="text""
            id="name""
            name="name"
            value={formData.name}"
            onChange={handleInputChange}"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
            placeholder="Your name"
          />"
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>
        <div>"
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">;
            Email;
          </label>;"
          <input"
            type="email""
            id="email""
            name="email"
            value={formData.email}"
            onChange={handleInputChange}"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
            placeholder="your.email@example.com"
          />"
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>
        <div>"
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">;
            Message;
          </label>;"
          <textarea"
            id="message""
            name="message"
            rows={6}
            value={formData.message}"
            onChange={handleInputChange}"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-vertical""
            placeholder="Tell us about your project or question..."
          />"
          {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
        </div>
        <button"
          type="submit"
          disabled={isSubmitting}"
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>'"
        {submitStatus === 'success' && ("
          <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
            Thank you! Your message has been sent successfully.;
          </div>);
        )}'"
        {submitStatus === 'error' && ("
          <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
            Sorry, there was an error sending your message. Please try again.;
          </div>);
        )}
      </form>;
    </div>
  )}"
export default ContactForm;";'"
=======
app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
app/components/ContactForm.tsx'app/components/ContactForm.tsx;

import React from app/components/ContactForm.tsx'app/components/ContactForm.tsx;
import { useState  } from app/components/ContactForm.tsx'app/components/ContactForm.tsx;
import { MessageSquare, Mail, Phone, Send, CheckCircle  } from app/components/ContactForm.tsx'app/components/ContactForm.tsx;
interface FormData {
name: app/components/ContactForm.tsx"app/components/ContactForm.tsx,email: app/components/ContactForm.tsx"app/components/ContactForm.tsx,company: app/components/ContactForm.tsx"app/components/ContactForm.tsx,}
  servic,e: app/components/ContactForm.tsx"app/components/ContactForm.tsx,}
}

const ContactForm: app/components/ContactForm.tsx"app/components/ContactForm.tsx,setFormData,] = useState<FormData>({
name: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,email: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,phone: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,company: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,message: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,service: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,;})
const [isSubmitting, setIsSubmitting,] = useState(false)
  const [isSubmitted, setIsSubmitted,] = useState(false);</FormData>
</FormData>
const handleChange = (
setFormData({)
      ...formData,[e.target.name,]: e.target.value)
    ) => {
$app/components/ContactForm.tsx;
})
  }
const handleSubmit = async (e: app/components/ContactForm.tsx"app/components/ContactForm.tsx,2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    // Reset form after 3 app/components/ContactForm.tsx;
setTimeout(() => {
setIsSubmitted(false)
      setFormData({)
name: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,email: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,phone: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,company: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,message: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,service: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,;})
    ;}, 3000)
  ;}
const services = [
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
  ]
if(isSubmitted) {
return (
    </HTMLInputElement> <>

      </HTMLInputElement> <div className=app/components/ContactForm.tsx"app/components/ContactForm.tsx /> <CheckCircle className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </CheckCircle>
    <h1 className = app/components/ContactForm.tsx"app/components/ContactForm.tsx>Message Sent!</h3>
        <p className=app/components/ContactForm.tsx"app/components/ContactForm.tsx>Thank you for reaching out. We&apos;ll get back to you soon.</$1>
  );
  )
  ,}

return (
    <div className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </div>
    <h1 className = app/components/ContactForm.tsx"app/components/ContactForm.tsx>Send us a Message</h2>
      <form onSubmit={handleSubmit,} className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </form>
    <div className=app/components/ContactForm.tsx"app/components/ContactForm.tsx>
    </div>
      <div />
    </div>
    </div>
            <label htmlFor=app/components/ContactForm.tsx"app/components/ContactForm.tsx className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </label>
Full Name *</label>
            </label>

            <app/components/ContactForm.tsx;
type=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
id=app/components/ContactForm.tsx"app/components/ContactForm.tsx,name = app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
value={
formData.app/components/ContactForm.tsx;
,}
              onChange = {
app/components/ContactForm.tsx;
,}
              app/components/ContactForm.tsx;
className=app/components/ContactForm.tsx"app/components/ContactForm.tsxoutline-none focus:ring-2 focus:ring-cyan-500 focuapp/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
placeholder=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
            / />

    </app>
            <div />
    </div>
            <label htmlFor=app/components/ContactForm.tsx"app/components/ContactForm.tsx className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </label>
Email Address *</label>
            </label>

            <app/components/ContactForm.tsx;
type=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
id=app/components/ContactForm.tsx"app/components/ContactForm.tsx,name = app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
value={
formData.app/components/ContactForm.tsx;
,}
              onChange = {
app/components/ContactForm.tsx;
,}
              app/components/ContactForm.tsx;
className=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
placeholder=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
            / />,<div className=app/components/ContactForm.tsx"app/components/ContactForm.tsx>
    </div>
      <div />
    </div>
    </div>
            <label htmlFor=app/components/ContactForm.tsx"app/components/ContactForm.tsx className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </label>
Phone Number</label>
            </label>

            <app/components/ContactForm.tsx;
type=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
id=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
name=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
value={formData.phone,}
              onChange = {handleChange,}
className=app/components/ContactForm.tsx"app/components/ContactForm.tsxoutline-none focus:ring-2 focus:ring-cyan-500 focuapp/components/ContactForm.tsx"app/components/ContactForm.tsx)
placeholder=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
            / />

    </app>
            <div />
    </div>
            <label htmlFor=app/components/ContactForm.tsx"app/components/ContactForm.tsx className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </label>
Company</label>
            </label>

            <app/components/ContactForm.tsx;
type=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
id=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
name=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
value={formData.company,}
              onChange = {handleChange,}
className=app/components/ContactForm.tsx"app/components/ContactForm.tsxoutline-none focus:ring-2 focus:ring-cyan-500 focuapp/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
placeholder=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
            / />

    </app>
      <div/ />
    </div>
    </div>
          <label htmlFor=app/components/ContactForm.tsx"app/components/ContactForm.tsx className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </label>
Service Interest</label>
          </label>

          <app/components/ContactForm.tsx;
id=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
name=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
value={formData.service,}
            onChange = {handleChange,}
className=app/components/ContactForm.tsx"app/components/ContactForm.tsxoutline-none focus:ring-2 focus:ring-cyan-500 focuapp/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
           />
    </app>
            <option value=app/components/ContactForm.tsx"app/components/ContactForm.tsx>Select a service</option>
            {services.map((service,index) => (
              <option key = {index,} value = {service,} className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </option>
                {service,}</option>
              </option>
            ))}

          </select>
      <div/ />
    </div>
    </div>
          <label htmlFor = app/components/ContactForm.tsx"app/components/ContactForm.tsx className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </label>
Message *</label>
          </label>

          <app/components/ContactForm.tsx;
id=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
name=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
value={
formData.app/components/ContactForm.tsx;
,}
            onChange = {
app/components/ContactForm.tsx;
,}
            app/components/ContactForm.tsx;
rows = {6,}
className=app/components/ContactForm.tsx"app/components/ContactForm.tsxoutline-none focus:ring-2 focus:ring-cyan-500 focuapp/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
placeholder=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
          / />
    </app>
          </div>
        <app/components/ContactForm.tsx;
type=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
disabled={isSubmitting,}
          className=app/components/ContactForm.tsx"app/components/ContactForm.tsxfrom-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disableapp/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
         />
    </app>
          {isSubmitting ? (</button> <>

    </div>,<div className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </div>
Sending...
              </div>
          ) : (
            <> <Send className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />

    </Send>
Send app/components/ContactForm.tsx;
      </Send>
    </div>
              </div>
          ),}
        </button>
      </form>
      </$1>
  );
}

export default app/components/ContactForm.tsx;
}
>>>>>>> e4a686ee3f0c7f64fed385c71883376af9923352
