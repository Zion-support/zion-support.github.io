import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',

    email: '',

    company: '',

    phone: '',

    subject: '',

    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    }
}
}