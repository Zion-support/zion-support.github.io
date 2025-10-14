import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Clock
  CheckCircle } from 'lucide-react';
import { ArrowRight
  Brain } from 'lucide-react';
import { Shield
  Zap } from 'lucide-react';
import { Globe
  Mail } from 'lucide-react';
import { Smartphone
  MapPin } from 'lucide-react';
import { Star
  Users } from 'lucide-react';
import { Award
  BarChart3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',)
    message: '')
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;,
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev)
      [name]: value)
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {;,
    e.preventDefault();
    // Handle form submission here,
console.log('Form submitted: '')