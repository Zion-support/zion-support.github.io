import React, {useState} from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle export const QuoteFormSection = (props: any) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comp: '',
    service: '',
    message: ''
  }
    );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
;
  const services = [;
    'IT Support & Maintenance',;
    'Network Setup & Security',;
    'Hardware Installation',;
    'Data Recovery',;
    'Cloud Migration',;
    'Custom Solution';