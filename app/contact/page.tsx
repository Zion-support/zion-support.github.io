<<<<<<< HEAD
"use client"
import React from "react";
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
    message: 
  })
  const [isSubmitting, setIsSubmitting ] = useState(false)
  const [submitStatus, setSubmitStatus ] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors ] = useState<FormErrors>({})
  const validateForm = useCallback((data: FormData): FormErrors => {
    const newErrors: FormErrors = {}

    if (!data.name.trim()) {
      newErrors.name="Name is required
    } else if (data.name.trim().length < 2) {"
      newErrors.name="Name must be at least 2 characters
    }

    if (!data.email.trim()) {"
      newErrors.email = "Email is required
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address
    }

    if (!data.message.trim()) {
      newErrors.message = "Message is required
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters
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
      })
  )
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
      addressCountry: "US
    },
    openingHours: ["Mo-Fr 09:00-17:00"],
    priceRange: "$$
  }), [])
  return (
    <>
      <Head>
        <title>Contact|Zion Tech Group</title>
        <meta name="description" content="Professional services and solutions for modern businesses." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact|Zion Tech Group" />
        <meta property="og:description" content="Professional services and solutions for modern businesses." />
=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react';

const Page: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time monitoring', 'Custom dashboards', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target the right audience with AI-driven precision and accuracy.',
      benefits: ['Audience segmentation', 'Behavioral analysis', 'Conversion optimization', 'ROI tracking']
    }
  ];
=======
'use client'
<<<<<<< HEAD
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'
>>>>>>> origin/main

=======
import React from 'react';
import Head from 'next/head';
>>>>>>> origin/main
export default function ServicePage() {
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Professional contact services and solutions from Zion Tech Group." />
>>>>>>> origin/main
      </Head>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Contact
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
              Advanced contact solutions powered by artificial intelligence and machine learning.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >"
                Get Started<ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors
              >
                Learn More
              </Link>
            </div>
=======
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <feature.icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with our cutting-edge AI solutions. Contact us today to learn more.
            </p>
            <a
=======
    <div>
      <Head>
<<<<<<< HEAD
        <title>Contact | Zion Tech Group</title>
=======
        <title>"Contact | Zion Tech Group"</title>
>>>>>>> origin/main
        <meta name="description" content="Professional contact services and solutions for modern businesses." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact | Zion Tech Group" />
        <meta property="og:description" content="Professional contact services and solutions for modern businesses." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
<<<<<<< HEAD
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Professional contact services and solutions for modern businesses.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
>>>>>>> origin/main
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/ai-services"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Link>
>>>>>>> origin/main
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
=======
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            "Contact"
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            "Professional contact services and solutions for modern businesses."
          </p>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
export default ContactPage"
"
=======
export default Page;
=======
>>>>>>> origin/main
}
>>>>>>> origin/main
>>>>>>> origin/main
