import React, { useState } from "react;
import { motion } from "framer-motion;
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare } from "lucide-react;
const ContactFormEnhanced: React.FC = () => {
  const [formData, setFormData] = useState({;
    name: 
, email: 
,"    subject: 
, message: 
"  });
"  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const handleSubmit = async (e: React.FormEvent) => {;e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call