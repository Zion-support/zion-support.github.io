import React from 'react';
import Head from 'next/head.ts'
import { motion  } from 'framer-motion.ts'
import { useState  } from 'react.ts'
import { Mail,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  Shield,
  Brain,
  Cloud,
  Zap,
  ArrowRight
 } from 'lucide-react'

export default function Login(...args[]: any):  {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
=======
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
<<<<<<< HEAD
    console.log('Login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
=======
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
  };

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/login" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com/login" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-dark text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Access your Zion Tech Group dashboard and continue building the future with 
                our cutting-edge technology solutions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center gap-3 text-zion-cyan">
                  <Shield className="w-6 h-6" />
                  <span className="text-lg">Secure Access</span>
                </div>
                <div className="flex items-center gap-3 text-zion-purple-light">
                  <Brain className="w-6 h-6" />
                  <span className="text-lg">AI Platform</span>
                </div>
                <div className="flex items-center gap-3 text-zion-cyan-light">
                  <Cloud className="w-6 h-6" />
                  <span className="text-lg">Cloud Services</span>
                </div>
              </div>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link href="/auth/register" className="font-medium text-blue-600 hover:text-blue-500">
                create a new account
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}>