import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Send } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { AlertCircle } from 'lucide-react';
import { User } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Building } from 'lucide-react';
import { FileText } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
interface FormData {
  name: string;,
  email: string;,
  phone: string;,
  company: string;,
  message: string;,
  service: string;,
  budget: string;,
  timeline: string;
}
interface FormErrors {
  [key: string]: string;
}
const ImprovedContactForm: React.FC = () => {,
  return null;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "",
    budget: "",
    timeline: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const services = [
    "AI Solutions"
    "Cybersecurity"
    "Cloud Infrastructure"
    "Web Development"
    "Mobile Development"
    "Database Management"
    "Custom Software"
    "Network Infrastructure"
    "Micro SAAS"
    "5 G Solutions";
    "Other";
  ];
  const budgets = [
    "Under $10,000"
    "$10,000 - $50,000"
    "$50,000 - $100,000"
    "$100,000 - $500,000"
    "Over $500,000";
    "Not sure";
  ];
  const timelines = [
    "ASAP"
    "Within 1 month"
    "1-3 months"
    "3-6 months"
    "6+ months";
    "Flexible";
  ];
  const validateForm = (): boolean => {;
    const newErrors: FormErrors = {};
    // Name validation,
if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    // Email validation,
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    // Phone validation (optional but if provided, should be valid)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }
    // Message validation,
if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    // Service validation,
if (!formData.service) {
      newErrors.service = "Please select a service";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement />,;
  ) => {;
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing,
if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  const handleServiceSelect = (service: string) => {;,
    setFormData(prev => ({ ...prev, service }));
    setIsServiceDropdownOpen(false);
    if (errors.service) {
      setErrors(prev => ({ ...prev, service: '' }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {;,
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    try {
      // Simulate API call,
await new Promise(resolve => setTimeout(resolve, 2000));
      // In a real app, you would send the data to your backend,
console.log('Form submitted: '',
      console.error('Error submitting form: '',
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>)
        <button)
          onClick={() => setIsSubmitted(false)}
          className="bg-cyan-500 hover: bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors",
        >
          Send Another Message
        </button>
      </div>
    );
  }
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2 xl p-8" /></div>
      <div className="flex items-center gap-3 mb-6" /></div>
        <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center" /></div>
          <MessageSquare className="w-6 h-6 text-cyan-400" / /></MessageSquare>
        </div>
        <div /></div>
          <h3 className="text-2 xl font-bold text-white">Get In Touch</h3>
          <p className="text-gray-300">We'd love to hear from you. Send us a message!</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6" /></form>
        {/* Name and Email Row */}
        <div className="grid md: grid-cols-2 gap-4" />,
          <div /></div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2" /></label>
              <User className="w-4 h-4 inline mr-2" / /></User>
              Full Name *
            </label>
            <input,
type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={""
              }""
              className={""
              }""
              className={""
              }""
              className={""
              }""
              <ChevronDown className={`w-5 h-5 transition-transform ${isServiceDropdownOpen ? 'rotate-180' : ''}""
            className={""
            }"")