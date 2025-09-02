:src.disabled/components/ContactForm.tsx;
import: React, { useState } from;
  'react';';
import: { motion } from;
  'framer-motion';';
import: {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Building,
  MessageSquare} from;
  'lucide-react';';
export: const ContactForm: React.FC: = () => {
  const [formDat,a, setFormData] = useState({
    firstName:,
  ',';
    lastName:  ,',';
    email:,
  ',';
    company:  ,',';
    phone:,
  ',';
    service:  ,',';
    message:,
  ',';
    budget:  ,',';
    timeline: ';';
  ,'})';
  const: [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle;';
  ' | 'success;';
  ' | 'error;';
  '>('idle;';
  ')';
  const: handleInputChange = (e: React.ChangeEvent<HTMLInputElement: | HTMLTextAreaElement | HTMLSelectElement>) => {
import Reac,t, { useState } from 'react';';
export: const ContactForm: React.FC: = () => {
import { motion, } from 'framer - motion';';
  const: [formData, setFormData] = useState ({
    firstName: ',',';
    lastName: ',',';
    email: ',',';
    company: ',',';
    phone: ',',';
    service: ',',';
    message: ',',';
    budget: ',',';
    timeline: ',',';
  })
  const: [isSubmitting, setIsSubmitting] = useState (false) 
  const [submitStatus, setSubmitStatus] = useState<';idle' | 'success' | 'error'> ('idle') ';
  const: handleInputChange = useCallback((
    e: React.ChangeEvent<
      HTMLInputElement: | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { nam,e, value } = e.target;
    setFormData(prev: => ({
      ...prev, [name]: value}))}
:src.disabled/components/ContactForm.tsx