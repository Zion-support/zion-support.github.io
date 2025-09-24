import React, { useState } from 'react',
import { motion } from 'framer-motion',
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react',
import Link from 'next/link',
import Layout from '../components/Layout',
export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  }),
  const [showPassword, setShowPassword] = useState(false),
  const [showConfirmPassword, setShowConfirmPassword] = useState(false),
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target,
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))},
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    // Handle registration logic here,
    // // console.log('Registration attempt:', formData)},
  return (
    <>,
      <Head>,
        <title>Register - Zion Tech Group</title>,
        <meta
          name='description',
          content='Create your Zion Tech Group account to access our comprehensive technology solutions and services.',
        />,
      </Head>,
      <div className='min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0 flex items-center justify-center py-12 px-4 sm: px-6 lg:px-8'>,
        <div className='max-w-md w-full space-y-8'>,
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center'>,
            <div className='mx-auto h-12 w-12 bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-lg flex items-center justify-center'>,
              <span className='text-white font-bold text-xl'>Z</span>,
            </div>,
            <h2 className='mt-6 text-3xl font-bold text-white'>,
              Create your account,
            </h2>,
            <p className='mt-2 text-sm text-gray-30o0'>,
              Join Zion Tech Group and unlock the power of technology,
            </p>,
          </motion.div>,
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-8'>,
            <form className='space-y-6' onSubmit={handleSubmit}>,
              <div className='grid grid-cols-2 gap-4'>,
                <div>,
                  <label
                    htmlFor='firstName',
                    className='block text-sm font-medium text-gray-30o0 mb-2'>,
                    First Name,
                  </label>,
                  <div className='relative'>,
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>,
                      <User className='h-5 w-5 text-gray-40o0' />,
                    </div>,
                    <input
                      id='firstName',
                      name='firstName',
                      type='text',
                      autoComplete='given-name',
                      required,
                      value={formData.firstName}
                      onChange={handleChange}
                      className='block w-full pl-10 pr-3 py-3 border border-gray-60o0 rounded-lg bg-white/10 text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent',
                      placeholder='First name',
                    />,
                  </div>,
                </div>,
                <div>,
                  <label
                    htmlFor='lastName',
                    className='block text-sm font-medium text-gray-30o0 mb-2'>,
                    Last Name,
                  </label>,
                  <div className='relative'>,
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>,
                      <User className='h-5 w-5 text-gray-40o0' />,
                    </div>,
                    <input
                      id='lastName',
                      name='lastName',
                      type='text',
                      autoComplete='family-name',
                      required,
                      value={formData.lastName}
                      onChange={handleChange}
                      className='block w-full pl-10 pr-3 py-3 border border-gray-60o0 rounded-lg bg-white/10 text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent',
                      placeholder='Last name',
                    />,
                  </div>,
                </div>,
              </div>,
              <div>,
                <label
                  htmlFor='email',
                  className='block text-sm font-medium text-gray-30o0 mb-2'>,
                  Email address,
                </label>,
                <div className='relative'>,
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>,
                    <Mail className='h-5 w-5 text-gray-40o0' />,
                  </div>,
                  <input
                    id='email',
                    name='email',
                    type='email',
                    autoComplete='email',
                    required,
                    value={formData.email}
                    onChange={handleChange}
                    className='block w-full pl-10 pr-3 py-3 border border-gray-60o0 rounded-lg bg-white/10 text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent',
                    placeholder='Enter your email',
                  />,
                </div>,
              </div>,
              <div>,
                <label
                  htmlFor='password',
                  className='block text-sm font-medium text-gray-30o0 mb-2'>,
                  Password,
                </label>,
                <div className='relative'>,
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>,
                    <Lock className='h-5 w-5 text-gray-40o0' />,
                  </div>,
                  <input
                    id='password',
                    name='password',
                    type={showPassword ? 'text' : 'password'}
                    autoComplete='new-password',
                    required,
                    value={formData.password}
                    onChange={handleChange}
                    className='block w-full pl-10 pr-12 py-3 border border-gray-60o0 rounded-lg bg-white/10 text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent',
                    placeholder='Create a password',
                  />,
                  <button
                    type='button',
                    className='absolute inset-y-0 right-0 pr-3 flex items-center',
                    onClick={() => setShowPassword(!showPassword)}
                  >,
                    {showPassword ? (
                      <EyeOff className='h-5 w-5 text-gray-40o0 hover: text-gray-30o0' />) : (
                      <Eye className='h-5 w-5 text-gray-40o0 hover:text-gray-30o0' />)}
                  </button>,
                </div>,
              </div>,
              <div>,
                <label
                  htmlFor='confirmPassword',
                  className='block text-sm font-medium text-gray-30o0 mb-2'>,
                  Confirm Password,
                </label>,
                <div className='relative'>,
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>,
                    <Lock className='h-5 w-5 text-gray-40o0' />,
                  </div>,
                  <input
                    id='confirmPassword',
                    name='confirmPassword',
                    type={showConfirmPassword ? 'text' : 'password'}
                    autoComplete='new-password',
                    required,
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className='block w-full pl-10 pr-12 py-3 border border-gray-60o0 rounded-lg bg-white/10 text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent',
                    placeholder='Confirm your password',
                  />,
                  <button
                    type='button',
                    className='absolute inset-y-0 right-0 pr-3 flex items-center',
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >,
                    {showConfirmPassword ? (
                      <EyeOff className='h-5 w-5 text-gray-40o0 hover: text-gray-30o0' />) : (
                      <Eye className='h-5 w-5 text-gray-40o0 hover:text-gray-30o0' />)}
                  </button>,
                </div>,
              </div>,
              <div className='flex items-center'>,
                <input
                  id='agreeToTerms',
                  name='agreeToTerms',
                  type='checkbox',
                  required,
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className='h-4 w-4 text-blue-60o0 focus: ring-blue-50o0 border-gray-60o0 rounded bg-white/10',
                />,
                <label
                  htmlFor='agreeToTerms',
                  className='ml-2 block text-sm text-gray-30o0'>,
                  I agree to the{' '}
                  <Link
                    href='/terms',
                    className='text-blue-40o0 hover: text-blue-30o0'>,
                    Terms of Service,
                  </Link>{' '}
                  and{' '}
                  <Link
                    href='/privacy',
                    className='text-blue-40o0 hover: text-blue-30o0'>,
                    Privacy Policy,
                  </Link>,
                </label>,
              </div>,
              <div>,
                <button
                  type='submit',
                  className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-60o0 hover:bg-blue-70o0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-50o0 transition-all duration-20o0'>,
                  <span className='absolute left-0 inset-y-0 flex items-center pl-3'>,
                    <ArrowRight className='h-5 w-5 text-blue-50o0 group-hover:text-blue-40o0' />,
                  </span>,
                  Create Account,
                </button>,
              </div>,
              <div className='text-center'>,
                <p className='text-sm text-gray-30o0'>,
                  Already have an account?{' '}
                  <Link
                    href='/login',
                    className='font-medium text-blue-40o0 hover: text-blue-30o0 transition-colors'>,
                    Sign in here,
                  </Link>,
                </p>,
              </div>,
            </form>,
          </motion.div>,
        </div>,
      </div>,
    </>)}
,