import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion'
import { useState } from 'react'


export default function LoginPage() {
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
    <Layout
      title="Login - Zion Tech Group"
<<<<<<< HEAD
      description="Sign in to your Zion Tech Group account to access our services and dashboard."
      keywords="login, sign in, account, dashboard"
=======
      description="Access your Zion Tech Group account to manage your services and projects."
      keywords="login, account, access, dashboard, services"
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
    >
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="mx-auto h-12 w-auto">
              <div className="mx-auto h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">Z</span>
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
    </
  )
}>