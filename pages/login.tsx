import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import Layout from '../components/Layout'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Handle login logic here
    console.log('Login attempt:', formData) }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value })}

  return(<Layout
      title="Login - Zion Tech Group"
      description="Access your Zion Tech Group account to manage your services and projects."
      keywords="login, account, access, dashboard, services"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-12 px-4 sm: px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <motion.div
            initial={{opacity: 0, y: 30 }}
            animate={{opacity: 1, y: 0 }}
            transition={{duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Welcome Back;
            </h2>
            <p className="text-gray-300">
              Sign in to your account to continue;
            </p>
          </motion.div>
          <motion.div;
            initial={{opacity: 0, y: 30 }}
            animate={{opacity: 1, y: 0 }}
            transition={{duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-2xl p-8"
          >
            <form className="space-y-6" onSubmit={ handleSubmit }>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address;
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required;
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />
                  <input
                    id="password"
                    name="password"
                    type={ showPassword ? 'text' : 'password' }
                    required;
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={ () => setShowPassword(!showPassword) }
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover: text-gray-600"
                  >
                    { showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" /> }
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus: ring-blue-500 border-gray-300 rounded"
                   />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link href="/forgot-password" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >                  Sign in
                </button>
              </div>
            </div>
          </motion.form>        </div>
      </div>
    </Layout>
  )
}