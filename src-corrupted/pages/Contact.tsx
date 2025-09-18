<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  Calendar,
  Building,
  Globe,
  ArrowRight,
  ExternalLink,
  Star,
  Users,
  Shield,
  Zap,
  Brain,
  Cloud,
  Database,
  Code,
  Server,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Award,
  TrendingUp,
  Heart,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  Settings,
  Palette
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'AI Solutions',
    'Cloud Migration',
    'Cybersecurity',
    'Web Development',
    'Mobile Apps',
    'Data Analytics',
    'IT Consulting',
    'Other'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+'
  ];

  const timelines = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Long-term (6+ months)',
    'Flexible'
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 302 464 0950',
      description: 'Speak directly with our team',
      action: 'Call Now',
      href: 'tel:+13024640950',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'kleber@ziontechgroup.com',
      description: 'Send us a detailed message',
      action: 'Send Email',
      href: 'mailto:kleber@ziontechgroup.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Schedule an in-person meeting',
      action: 'Get Directions',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      value: 'Book a consultation',
      description: '30-minute free consultation',
      action: 'Book Now',
      href: '#',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: 'Expert Team',
      description: '15+ years of combined experience in technology solutions'
    },
    {
      icon: Shield,
      title: 'Trusted Partner',
      description: '500+ successful projects delivered to satisfied clients'
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: '24/7 support with guaranteed response times'
    },
    {
      icon: Brain,
      title: 'Innovation Focus',
      description: 'Cutting-edge AI and emerging technology solutions'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      timeline: '',
      message: ''
    });
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </main>
    );
  }
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Contact | Zion Tech Group</title>
        <meta name="description" content="Contact - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Contact</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
