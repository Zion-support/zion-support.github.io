import { useState } from 'react'
import { MessageSquare, Mail, Phone, Send, CheckCircle } from 'lucide-react'
'use client'
interface FormData {
  name: string;,
    email: string;
  phon,
  e: string;,
    company: string;
  messag,
  e: string;,
    service: string
  }
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: ''
    phon,
  e: '',
    company: ''
    messag,
  e: '',
    service: ''})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleChange = $2;
export default ContactForm