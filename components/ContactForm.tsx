import React, { useState } from 'react',
import LoadingSpinner from './LoadingSpinner';
<<<<<<< HEAD
interface FormData {;
  name:string;
  email:string;
  company:string;
  phone:string;
  service:string;
  message:string,;
};
const ContactForm:React.FC = () => {;
  const [formData, setFormData] = useState<FormData>({;
    name:'',;
    email:'',;
    company:'',;
    phone:'',;
    service:'',;
    message:'',;
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;
    setFormData(prev => ({;
      ...prev,;
      [name]:value;
    }));
  };
  const handleSubmit = async (e:React.FormEvent) => {;
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {;
      // Simulate form submission;
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({;
        name:'',;
        email:'',;
        company:'',;
        phone:'',;
        service:'',;
        message:'',;
      });
    } catch {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false);
=======
interface FormData {
  name: string,
  email: string,
  company: string,
  phone: string,
  service: string,
  message: string
},
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  }),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle'),
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({
      ...prev
      [name]: value
    }))
  },
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSubmitting(true),
    setSubmitStatus('idle'),
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000)),
      setSubmitStatus('success'),
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    }
  }
},
export default ContactForm,        <div>
          <label htmlFor=&quot;name&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
            Name *
          </label>
          <input
            type=&quot;text&quot;
            id=&quot;name&quot;
            name=&quot;name&quot;
            value={formData.name}
            onChange={handleChange}            required
            className=&quot;w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
          />
        </div>
        <div>
          <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
            Email *
          </label>
          <input
            type=&quot;email&quot;
            id=&quot;email&quot;
            name=&quot;email&quot;
            value={formData.email}
            onChange={handleChange}            required
            className=&quot;w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
          />
        </div>
      </div>
      
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
        <div>
          <label htmlFor=&quot;company&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
            Company
          </label>
          <input
            type=&quot;text&quot;
            id=&quot;company&quot;
            name=&quot;company&quot;
            value={formData.company}
            onChange={handleChange}
            className=&quot;w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500&quot;          />
        </div>
        <div>
          <label htmlFor=&quot;phone&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
            Phone
          </label>
          <input
            type=&quot;tel&quot;
            id=&quot;phone&quot;
            name=&quot;phone&quot;
            value={formData.phone}
            onChange={handleChange}
            className=&quot;w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500&quot;          />
        </div>
      </div>

      <div>
        <label htmlFor=&quot;service&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
          Service Interest
        </label>
        <select
          id=&quot;service&quot;
          name=&quot;service&quot;
          value={formData.service}
          onChange={handleChange}
          className=&quot;w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500&quot;        >
          <option value="&quot;>Select a service</option>
          <option value=&quot;micro-saas&quot;>Micro SaaS Products</option>
          <option value=&quot;ai-services&quot;>AI Services</option>
          <option value=&quot;it-services&quot;>IT & Cloud Services</option>
          <option value=&quot;consulting&quot;>Consulting</option>
          <option value=&quot;other&quot;>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor=&quot;message" className="block text-sm font-medium text-gray-700 mb-2&quot;>
          Message *
        </label>
        <textarea
          id=&quot;message&quot;
          name=&quot;message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
          placeholder=&quot;Tell us about your project requirements...&quot;        />
      </div>

      <button
        type=&quot;submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Send Message
      </button>    </form>
  )
}

export default ContactForm,
