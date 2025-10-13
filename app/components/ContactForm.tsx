import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
interface FormData {name: string,}
 origin/cursor/analyze-improve-and-deploy-application-1247;
    email: '',
    company: '',
    phone: '',
    service: '',
import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
}
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: "",
      });
 origin/cursor/analyze-improve-and-deploy-application-13a2;
    } finally {
      setIsSubmitting(false);
 cursor/fix-errors-and-merge-to-main-6ce7;
}
export default ContactForm;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247</FormData>
