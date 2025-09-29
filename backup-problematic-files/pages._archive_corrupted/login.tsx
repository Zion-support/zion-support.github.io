

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
export default function Login() {
  const [formData, setFormData] = useState({
    email: ,
    password: ')
pr-12325

  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value

    })
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here

    console.log('Login attempt:', formData)
};


  return (
        <div className=max-w-md w-full space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

            className="text-center"
          >
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                    Forgot password?
                  </Link>
                </div>
              </div>

                </button>
              </div>
            </div>

              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}




import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
import React,{ useState } from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Mail,Lock,Eye,EyeOff,ArrowRight,CheckCircle,Star,Users,Clock,Globe,Zap,Shield } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const LoginPage: React.FC = () => { const [formData,setFormData] = useState({ email: '',password: '' }) const [showPassword,setShowPassword] = useState(false) const [isLoading,setIsLoading] = useState(false) const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { const { name,value } = e.target setFormData(prev => ({ ...prev,[name]: value })) } const handleSubmit = async (e: React.FormEvent) => { e.preventDefault() setIsLoading(true) setTimeout(() => { setIsLoading(false) },2000) } const features = [ { icon: <Shield className="w-6 h-6" />,title: 'Secure Access',description: 'Enterprise-grade security for your account' },{ icon: <Zap className="w-6 h-6" />,title: 'Fast Performance',description: 'Lightning-fast access to all services' },{ icon: <Globe className="w-6 h-6" />,title: 'Global Access',description: 'Access your account from anywhere in the world' } ] return ( <> <SEO title="Login - Zion Tech Group" description="Secure login to access your Zion Tech Group account and services." keywords="login,account,access,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm: p x-6 lg: p x-8"> <div className="max-w-7xl mx-auto"> <div className="grid grid-cols-1 lg: gri d-cols-2 gap-12 items-center"> {} <motion.div initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-xl shadow-lg p-8" > <div className="text-center mb-8"> <h1 className="text-3xl font-bold text-gray-900 mb-2"> Welcome Back </h1> <p className="text-gray-600"> Sign in to your Zion Tech Group account </p> </div> <form onSubmit={handleSubmit} className="space-y-6"> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email Address </label> <div className="relative"> <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <Mail className="h-5 w-5 text-gray-400" /> </div> <input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" placeholder="Enter your email" /> </div> </div> <div> <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2"> Password </label> <div className="relative"> <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <Lock className="h-5 w-5 text-gray-400" /> </div> <input id="password" name="password" type={showPassword ? 'text' : 'password'} required value={formData.password} onChange={handleInputChange} className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" placeholder="Enter your password" /> <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)} > {showPassword ? ( <EyeOff className="h-5 w-5 text-gray-400" /> ) : ( <Eye className="h-5 w-5 text-gray-400" /> )} </button> </div> </div> <div className="flex items-center justify-between"> <div className="flex items-center"> <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus: rin g-blue-500 border-gray-300 rounded" /> <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700"> Remember me </label> </div> <div className="text-sm"> <a href="#" className="font-medium text-blue-600 hover: tex t-blue-500"> Forgot your password? </a> </div> </div> <motion.button type="submit" disabled={isLoading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: rin g-offset-2 disabled: opacit y-50 disabled: curso r-not-allowed" > {isLoading ? ( <> <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> Signing in... </> ) : ( <> <ArrowRight className="w-5 h-5" /> Sign In </> )} </motion.button> </form> <div className="mt-6 text-center"> <p className="text-sm text-gray-600"> Don't have an account?{' '} <a href="/register" className="font-medium text-blue-600 hover: tex t-blue-500"> Sign up here </a> </p> </div> </motion.div> {} <motion.div initial={{ opacity: 0,x: 2 0 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="space-y-8" > <div> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-600 mb-8"> Access cutting-edge AI services,IT solutions,and micro SaaS development tools. </p> </div> <div className="space-y-6"> {features.map((feature,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: inde x * 0.1 }} className="flex items-start gap-4" > <div className="text-blue-600 mt-1"> {feature.icon} </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-1"> {feature.title} </h3> <p className="text-gray-600"> {feature.description} </p> </div> </motion.div> ))} </div> <div className="bg-blue-50 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-2"> Need Help? </h3> <p className="text-gray-600 mb-4"> Contact our support team for assistance with your account. </p> <div className="flex flex-col sm: fle x-row gap-3"> <a href="tel:+13024640950" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover: b g-blue-700 transition-colors text-center" > Call: +1 302 464 0950 </a> <a href="mailto: klebe r@ziontechgroup.com" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover: b g-blue-50 transition-colors text-center" > Email Support </a> </div> </div> </motion.div> </div> </div> </main> </PageTransition> </> ) } export default LoginPage
import React,{ useState } from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Mail,Lock,Eye,EyeOff,ArrowRight,CheckCircle,Star,Users,Clock,Globe,Zap,Shield } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const LoginPage: React.FC = () => { const [formData,setFormData] = useState({ email: '',password: '' }) const [showPassword,setShowPassword] = useState(false) const [isLoading,setIsLoading] = useState(false) const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { const { name,value } = e.target setFormData(prev => ({ ...prev,[name]: value })) } const handleSubmit = async (e: React.FormEvent) => { e.preventDefault() setIsLoading(true) setTimeout(() => { setIsLoading(false) },2000) } const features = [ { icon: <Shield className="w-6 h-6" />,title: 'Secure Access',description: 'Enterprise-grade security for your account' },{ icon: <Zap className="w-6 h-6" />,title: 'Fast Performance',description: 'Lightning-fast access to all services' },{ icon: <Globe className="w-6 h-6" />,title: 'Global Access',description: 'Access your account from anywhere in the world' } ] return ( <> <SEO title="Login - Zion Tech Group" description="Secure login to access your Zion Tech Group account and services." keywords="login,account,access,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm: p x-6 lg: p x-8"> <div className="max-w-7xl mx-auto"> <div className="grid grid-cols-1 lg: gri d-cols-2 gap-12 items-center"> {} <motion.div initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-xl shadow-lg p-8" > <div className="text-center mb-8"> <h1 className="text-3xl font-bold text-gray-900 mb-2"> Welcome Back </h1> <p className="text-gray-600"> Sign in to your Zion Tech Group account </p> </div> <form onSubmit={handleSubmit} className="space-y-6"> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email Address </label> <div className="relative"> <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <Mail className="h-5 w-5 text-gray-400" /> </div> <input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" placeholder="Enter your email" /> </div> </div> <div> <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2"> Password </label> <div className="relative"> <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <Lock className="h-5 w-5 text-gray-400" /> </div> <input id="password" name="password" type={showPassword ? 'text' : 'password'} required value={formData.password} onChange={handleInputChange} className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" placeholder="Enter your password" /> <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)} > {showPassword ? ( <EyeOff className="h-5 w-5 text-gray-400" /> ) : ( <Eye className="h-5 w-5 text-gray-400" /> )} </button> </div> </div> <div className="flex items-center justify-between"> <div className="flex items-center"> <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus: rin g-blue-500 border-gray-300 rounded" /> <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700"> Remember me </label> </div> <div className="text-sm"> <a href="#" className="font-medium text-blue-600 hover: tex t-blue-500"> Forgot your password? </a> </div> </div> <motion.button type="submit" disabled={isLoading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: rin g-offset-2 disabled: opacit y-50 disabled: curso r-not-allowed" > {isLoading ? ( <> <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> Signing in... </> ) : ( <> <ArrowRight className="w-5 h-5" /> Sign In </> )} </motion.button> </form> <div className="mt-6 text-center"> <p className="text-sm text-gray-600"> Don't have an account?{' '} <a href="/register" className="font-medium text-blue-600 hover: tex t-blue-500"> Sign up here </a> </p> </div> </motion.div> {} <motion.div initial={{ opacity: 0,x: 2 0 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="space-y-8" > <div> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-600 mb-8"> Access cutting-edge AI services,IT solutions,and micro SaaS development tools. </p> </div> <div className="space-y-6"> {features.map((feature,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: inde x * 0.1 }} className="flex items-start gap-4" > <div className="text-blue-600 mt-1"> {feature.icon} </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-1"> {feature.title} </h3> <p className="text-gray-600"> {feature.description} </p> </div> </motion.div> ))} </div> <div className="bg-blue-50 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-2"> Need Help? </h3> <p className="text-gray-600 mb-4"> Contact our support team for assistance with your account. </p> <div className="flex flex-col sm: fle x-row gap-3"> <a href="tel:+13024640950" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover: b g-blue-700 transition-colors text-center" > Call: +1 302 464 0950 </a> <a href="mailto: klebe r@ziontechgroup.com" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover: b g-blue-50 transition-colors text-center" > Email Support </a> </div> </div> </motion.div> </div> </div> </main> </PageTransition> </> ) } export default LoginPage;
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  Clock,
  Globe,
  Zap,
  Shield
} from 'lucide-react'
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false })
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false })
const "LoginPage": React.FC = () => {
  const [formData, setFormData] = useState({
    "email": '',
    "password": ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleInputChange = ("e": React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = async ("e": React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Handle login logic here
    }, 2000)
  }
  const features = [{
      "icon": <Shield className="w-6 h-6"  />,
      "title": 'Secure Access',
      "description": 'Enterprise-grade security for your account'
    },
    {
      "icon": <Zap className="w-6 h-6"  />,
      "title": 'Fast Performance',
      "description": 'Lightning-fast access to all services'
    },
    {
      "icon": <Globe className="w-6 h-6"  />,
      "title": 'Global Access',
      "description": 'Access your account from anywhere in the world'
    }
  ]
  return (
    <>
      <SEO title="Login - Zion Tech Group"
        description="Secure login to access your Zion Tech Group account and services."
        keywords="login, account, access, Zion Tech Group"
        canonical=""https": //ziontechgroup.com/login"
       />
      <PageTransition>
        <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm: p x-6 lg: p x-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg: gri d-cols-2 gap-12 items-center">
              {/* Left Side - Login Form */}
              <motion.div
                initial={{ "opacity": 0, "x": -20 }}
                animate={{ "opacity": 1, "x": 0 }}
                transition={{ "duration": 0.6 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-gray-600">
                    Sign in to your Zion Tech Group account
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400"  />
                      </div>
                      <input id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg "focus": rin g-2 focus: rin g-blue-500 focus: borde r-transparent"
                        placeholder="Enter your email"
                       />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400"  />
                      </div>
                      <input id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg "focus": rin g-2 focus: rin g-blue-500 focus: borde r-transparent"
                        placeholder="Enter your password"
                       />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400"  />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400"  />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 "focus": rin g-blue-500 border-gray-300 rounded"
                       />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="font-medium text-blue-600 hover: tex t-blue-500">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ "scale": 1.02 }}
                    whileTap={{ "scale": 0.98 }}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 "hover": b g-blue-700 focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: rin g-offset-2 disabled: opacit y-50 disabled: curso r-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Signing in...
                      </>
                    ) : (
                      <>
                        <ArrowRight className="w-5 h-5"  />
                        Sign In
                      </>
                    )}
                  </motion.button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="/register" className="font-medium text-blue-600 "hover": tex t-blue-500">
                      Sign up here
                    </a>
                  </p>
                </div>
              </motion.div>
              {/* Right Side - Features */}
              <motion.div
                initial={{ "opacity": 0, "x": 2 0 }}
                animate={{ "opacity": 1, "x": 0 }}
                transition={{ "duration": 0.6, "delay": 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Why Choose Zion Tech Group?
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Access cutting-edge AI services, IT solutions, and micro SaaS development tools.
                  </p>
                </div>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ "opacity": 0, "y": 2 0 }}
                      animate={{ "opacity": 1, "y": 0 }}
                      transition={{ "duration": 0.6, "delay": inde x * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="text-blue-600 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">

                          {feature.title}
                        </h3>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}


                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className=text-lg font-semibold text-gray-900 mb-2>
                    Need Help?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Contact our support team for assistance with your account.
                  </p>
                  <div className=flex flex-col sm": fle x-row gap-3">
                    <a
                      href=tel:+13024640950
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover: b g-blue-700 transition-colors text-center"
                    >
                      Call: +1 302 464 0950
                    </a>
                    <a
                      href=mailto: klebe r@ziontechgroup.com
                      className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover: b g-blue-50 transition-colors text-center"
                    >
                      Email Support
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </PageTransition>
    </>
  )
}
export default LoginPage


import React,{ useState } from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Mail,Lock,Eye,EyeOff,ArrowRight,CheckCircle,Star,Users,Clock,Globe,Zap,Shield } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const LoginPage: React.FC = () => { const [formData,setFormData] = useState({ email: '',password: '' }) const [showPassword,setShowPassword] = useState(false) const [isLoading,setIsLoading] = useState(false) const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { const { name,value } = e.target setFormData(prev => ({ ...prev,[name]: value })) } const handleSubmit = async (e: React.FormEvent) => { e.preventDefault() setIsLoading(true) setTimeout(() => { setIsLoading(false) },2000) } const features = [ { icon: <Shield className="w-6 h-6" />,title: 'Secure Access',description: 'Enterprise-grade security for your account' },{ icon: <Zap className="w-6 h-6" />,title: 'Fast Performance',description: 'Lightning-fast access to all services' },{ icon: <Globe className="w-6 h-6" />,title: 'Global Access',description: 'Access your account from anywhere in the world' } ] return ( <> <SEO title="Login - Zion Tech Group" description="Secure login to access your Zion Tech Group account and services." keywords="login,account,access,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm: p x-6 lg: p x-8"> <div className="max-w-7xl mx-auto"> <div className="grid grid-cols-1 lg: gri d-cols-2 gap-12 items-center"> {} <motion.div initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-xl shadow-lg p-8" > <div className="text-center mb-8"> <h1 className="text-3xl font-bold text-gray-900 mb-2"> Welcome Back </h1> <p className="text-gray-600"> Sign in to your Zion Tech Group account </p> </div> <form onSubmit={handleSubmit} className="space-y-6"> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email Address </label> <div className="relative"> <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <Mail className="h-5 w-5 text-gray-400" /> </div> <input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" placeholder="Enter your email" /> </div> </div> <div> <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2"> Password </label> <div className="relative"> <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <Lock className="h-5 w-5 text-gray-400" /> </div> <input id="password" name="password" type={showPassword ? 'text' : 'password'} required value={formData.password} onChange={handleInputChange} className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" placeholder="Enter your password" /> <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)} > {showPassword ? ( <EyeOff className="h-5 w-5 text-gray-400" /> ) : ( <Eye className="h-5 w-5 text-gray-400" /> )} </button> </div> </div> <div className="flex items-center justify-between"> <div className="flex items-center"> <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus: rin g-blue-500 border-gray-300 rounded" /> <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700"> Remember me </label> </div> <div className="text-sm"> <a href="#" className="font-medium text-blue-600 hover: tex t-blue-500"> Forgot your password? </a> </div> </div> <motion.button type="submit" disabled={isLoading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: rin g-offset-2 disabled: opacit y-50 disabled: curso r-not-allowed" > {isLoading ? ( <> <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> Signing in... </> ) : ( <> <ArrowRight className="w-5 h-5" /> Sign In </> )} </motion.button> </form> <div className="mt-6 text-center"> <p className="text-sm text-gray-600"> Don't have an account?{' '} <a href="/register" className="font-medium text-blue-600 hover: tex t-blue-500"> Sign up here </a> </p> </div> </motion.div> {} <motion.div initial={{ opacity: 0,x: 2 0 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="space-y-8" > <div> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-600 mb-8"> Access cutting-edge AI services,IT solutions,and micro SaaS development tools. </p> </div> <div className="space-y-6"> {features.map((feature,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: inde x * 0.1 }} className="flex items-start gap-4" > <div className="text-blue-600 mt-1"> {feature.icon} </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-1"> {feature.title} </h3> <p className="text-gray-600"> {feature.description} </p> </div> </motion.div> ))} </div> <div className="bg-blue-50 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-2"> Need Help? </h3> <p className="text-gray-600 mb-4"> Contact our support team for assistance with your account. </p> <div className="flex flex-col sm: fle x-row gap-3"> <a href="tel:+13024640950" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover: b g-blue-700 transition-colors text-center" > Call: +1 302 464 0950 </a> <a href="mailto: klebe r@ziontechgroup.com" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover: b g-blue-50 transition-colors text-center" > Email Support </a> </div> </div> </motion.div> </div> </div> </main> </PageTransition> </> ) } export default LoginPage






:backup-problematic-files/pages._archive_corrupted/login.tsx

        <div className="max-w-md w-full space-y-8">"
</div>
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-center""
          >
</motion>
          </motion.div>

            transition={{ duration: 0.6, delay: 0.2 }}
</motion>"
            <form onSubmit={handleSubmit} className="space-y-6">"
</form>
              <div>
</div>"
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">"
</label>
                </label>"
                <div className="relative">"
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"

                  <input;"
                    id="email"""
                    name="email"""
                    type="email"""
                    placeholder="Enter your email""
                  />
</input>

                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">"
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"

                    id="password"""
                    name="password"""
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password""
                  <button;"
                    type="button""
                  </button>
"
              <div className="flex items-center justify-between">"
                <div className="flex items-center">"
                    id="remember-me"""
                    name="remember-me"""
                    type="checkbox""
                    Remember me;
                <div className="text-sm">"
                  


              
            </p>
import React,{ useState } from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Mail,Lock,Eye,EyeOff,ArrowRight,CheckCircle,Star,Users,Clock,Globe,Zap,Shield } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const LoginPage: React.FC = () => { const [formData,setFormData] = useState({ email: ,password:  }) const [showPassword,setShowPassword] = useState(false) const [isLoading,setIsLoading] = useState(false) const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { const { name,value } = e.target setFormData(prev => ({ ...prev,[name]: value })) } const handleSubmit = async (e: React.FormEvent) => { e.preventDefault() setIsLoading(true) setTimeout(() => { setIsLoading(false) },2000) } const features = [ { icon: <Shield className="w-6 h-6" />,title: 'Secure Access',description: 'Enterprise-grade security for your account' },{ icon: <Zap className="w-6 h-6" />,title: 'Fast Performance',description: 'Lightning-fast access to all services' },{ icon: <Globe className="w-6 h-6" />,title: 'Global Access',description: 'Access your account from anywhere in the world' } ] return ( <> <SEO title="Login - Zion Tech Group" description="Secure login to access your Zion Tech Group account and services." keywords="login,account,access,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm: p x-6 lg: p x-8"> <div className="max-w-7xl mx-auto"> <div className="grid grid-cols-1 lg: gri d-cols-2 gap-12 items-center"> {} <motion.div initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-xl shadow-lg p-8" > <div className="text-center mb-8"> <h1 className="text-3xl font-bold text-gray-900 mb-2"> Welcome Back </h1> <p className="text-gray-600"> Sign in to your Zion Tech Group account </p> </div> <form onSubmit={handleSubmit} className="space-y-6"> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email Address </label> <div className="relative"> <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <Mail className="h-5 w-5 text-gray-400" /> </div> <input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" placeholder="Enter your email" /> </div> </div> <div> <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2"> Password </label> <div className="relative"> <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <Lock className="h-5 w-5 text-gray-400" /> </div> <input id="password" name="password" type={showPassword ? 'text' : 'password'} required value={formData.password} onChange={handleInputChange} className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" placeholder="Enter your password" /> <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)} > {showPassword ? ( <EyeOff className="h-5 w-5 text-gray-400" /> ) : ( <Eye className="h-5 w-5 text-gray-400" /> )} </button> </div> </div> <div className="flex items-center justify-between"> <div className="flex items-center"> <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus: rin g-blue-500 border-gray-300 rounded" /> <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700"> Remember me </label> </div> <div className="text-sm"> <a href="#" className="font-medium text-blue-600 hover: tex t-blue-500"> Forgot your password? </a> </div> </div> <motion.button type="submit" disabled={isLoading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: rin g-offset-2 disabled: opacit y-50 disabled: curso r-not-allowed" > {isLoading ? ( <> <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> Signing in... </> ) : ( <> <ArrowRight className="w-5 h-5" /> Sign In </> )} </motion.button> </form> <div className="mt-6 text-center"> <p className="text-sm text-gray-600"> Don't have an account?{' '} <a href="/register" className="font-medium text-blue-600 hover: tex t-blue-500"> Sign up here </a> </p> </div> </motion.div> {} <motion.div initial={{ opacity: 0,x: 2 0 }} animate={{ opacity: 1,x: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="space-y-8" > <div> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-600 mb-8"> Access cutting-edge AI services,IT solutions,and micro SaaS development tools. </p> </div> <div className="space-y-6"> {features.map((feature,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: inde x * 0.1 }} className="flex items-start gap-4" > <div className="text-blue-600 mt-1"> {feature.icon} </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-1"> {feature.title} </h3> <p className="text-gray-600"> {feature.description} </p> </div> </motion.div> ))} </div> <div className="bg-blue-50 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-2"> Need Help? </h3> <p className="text-gray-600 mb-4"> Contact our support team for assistance with your account. </p> <div className="flex flex-col sm: fle x-row gap-3"> <a href="tel:+13024640950" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover: b g-blue-700 transition-colors text-center" > Call: +1 302 464 0950 </a> <a href="mailto: klebe r@ziontechgroup.com" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover: b g-blue-50 transition-colors text-center" > Email Support </a> </div> </div> </motion.div> </div> </div> </main>  </> ) } export default LoginPage;"
  const handleInputChange = ("e": React.ChangeEvent<HTMLInputElement>) => {"
      "icon": <Shield className="w-6 h-6"  />,"
      "icon": <Zap className="w-6 h-6"  />,"
      "icon": <Globe className="w-6 h-6"  />,"

    <>"
      <SEO title="Login - Zion Tech Group"""
        description="Secure login to access your Zion Tech Group account and services."""
        keywords="login, account, access, Zion Tech Group"""
        canonical=""https": //ziontechgroup.com/login""

      <PageTransition>
        <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm: p x-6 lg: p x-8">"
</main>"
          <div className="max-w-7xl mx-auto">"
            <div className="grid grid-cols-1 lg: gri d-cols-2 gap-12 items-center">"
              <motion.div;"
                initial={{ "opacity": 0, "x": -20 }}""
                animate={{ "opacity": 1, "x": 0 }}""
                transition={{ "duration": 0.6 }}""
                className="bg-white rounded-xl shadow-lg p-8""
                <div className="text-center mb-8">"
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">"
</h1>
                  </h1>"
                  <p className="text-gray-600">"
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">"
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">"
                        <Mail className="h-5 w-5 text-gray-400"  />"

                      <input id="email"""
                        type="email""
                        required;
                        value={formData.email}
                        onChange={handleInputChange}"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg "focus": rin g-2 focus: rin g-blue-500 focus: borde r-transparent"""
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">"
                        <Lock className="h-5 w-5 text-gray-400"  />"

                      <input id="password"""
                        value={formData.password}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg "focus": rin g-2 focus: rin g-blue-500 focus: borde r-transparent"""
                        type="button"""
                        className="absolute inset-y-0 right-0 pr-3 flex items-center""
                        onClick={() => setShowPassword(!showPassword)}
</button>"
                          <EyeOff className="h-5 w-5 text-gray-400"  />"
                          <Eye className="h-5 w-5 text-gray-400"  />"

                      <input id="remember-me"""
                        type="checkbox"""
                        className="h-4 w-4 text-blue-600 "focus": rin g-blue-500 border-gray-300 rounded""
</input>"
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">"
                      <a href="#" className="font-medium text-blue-600 hover: tex t-blue-500">"
</a>
                  <motion.button;"
                    type="submit""
                    disabled={isLoading}"
                    whileHover={{ "scale": 1.02 }}""
                    whileTap={{ "scale": 0.98 }}""
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 "hover": b g-blue-700 focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: rin g-offset-2 disabled: opacit y-50 disabled: curso r-not-allowed""
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>"
                      </>
                    ) : (
                        <ArrowRight className="w-5 h-5"  />"

                      </>)
                    )}
                  </motion.button>
                </form>"
                <div className="mt-6 text-center">"
                  <p className="text-sm text-gray-600">"
</p>"
                    <a href="/register" className="font-medium text-blue-600 "hover": tex t-blue-500">"
              {/* Right Side - Features */}
                initial={{ "opacity": 0, "x": 2 0 }}""
                transition={{ "duration": 0.6, "delay": 0.2 }}""
                className="space-y-8""
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">"
</h2>
                  </h2>"
                  <p className="text-xl text-gray-600 mb-8">"
                <div className="space-y-6">"
                      key={index}"
                      initial={{ "opacity": 0, "y": 2 0 }}""
                      animate={{ "opacity": 1, "y": 0 }}""
                      transition={{ "duration": 0.6, "delay": inde x * 0.1 }}""
                      className="flex items-start gap-4""
                      <div className="text-blue-600 mt-1">"
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">"
</h3>
                        </h3>"
                  ))}
                <div className="bg-blue-50 rounded-lg p-6">"
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">"
                  <p className="text-gray-600 mb-4">"
                  <div className="flex flex-col "sm": fle x-row gap-3">"
                    <a;"
                      href="tel:+13024640950"""
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover: b g-blue-700 transition-colors text-center""
                      href="mailto: klebe r@ziontechgroup.com"""
                      className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover: b g-blue-50 transition-colors text-center""
        </main>
      
  )
}
export default LoginPage;"
pr-12325

