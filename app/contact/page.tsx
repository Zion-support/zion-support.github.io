"use client"
import React, { useState, useCallback, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SEOHead from "../components/SEOHead";
import { generateStructuredData  } from "../utils/seoData";
interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const ContactPage: React.FC = () => {
  const [formData, setFormData ] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting ] = useState(false)
  const [submitStatus, setSubmitStatus ] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors ] = useState<FormErrors>({})
  const validateForm = useCallback((data: FormData): FormErrors => {
    const newErrors: FormErrors = {}

    if (!data.name.trim()) {
      newErrors.name="Name is required"
    } else if (data.name.trim().length < 2) {
      newErrors.name="Name must be at least 2 characters"
    }
    
    if (!data.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    if (!data.message.trim()) {
      newErrors.message = "Message is required"
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }
    
    return newErrors
  }, [])
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    //Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }, [errors])
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    const formErrors = validateForm(formData)
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrors({})
    try {
      //Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      //Here you would typically send the data to your backend
      console.log("Form submitted:", formData)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, validateForm])
  const structuredData = useMemo(() => generateStructuredData({
    "@type": "LocalBusiness",
    name: "Zion Tech Group",
    description: "Leading provider of AI and IT solutions for modern businesses",
    url: "https://ziontechgroup.com/contact",
    telephone: "+1-555-ZION-TECH",
    email: "contact@ziontechgroup.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Tech Street",
      addressLocality: "Innovation City",
      addressRegion: "IC",
      postalCode: "12345",
      addressCountry: "US"
    },
    openingHours: ["Mo-Fr 09:00-17:00"],
    priceRange: "$$"
  }), [])
  return (
    <>
      <Head>
        <title>Contact | Zion Tech Group</title>
        
        <meta name="description" content="Professional contact services and solutions for modern businesses." />
        
        <meta name="robots" content="index, follow" />
        
        <meta property="og:type" content="website" />
        
        <meta property="og:title" content="Contact|Zion Tech Group" />
        
        <meta property="og:description" content="Professional contact services and solutions for modern businesses." />
      
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Page
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Professional Page services designed to help your business grow and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage
