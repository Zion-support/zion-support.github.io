import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
  const [status, setStatus] = useState<FormStatus>({
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  const handleSubmit = async (e: React.FormEvent) => {
  const services = [
export default ContactForm;