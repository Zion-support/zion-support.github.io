import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye } from 'lucide-react';
import Layout from '../components/Layout';
export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: ,
    password: ')
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    <Layout title="Login - Zion Tech Group">"
"
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">"
</div>"
        <div className="max-w-md w-full space-y-8">"
</div>
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">"
</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>"
</form>"
            <div className="space-y-4">"
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">"
</label>
                </label>"
                <div className="mt-1 relative">"
                  <input;"
                    id="email"""
                    name="email"""
                    type="email""
                    required;"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"""
                    placeholder="Enter your email""
                    value={formData.email}
                    onChange={handleChange}
                  />
</input>"
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />"

                <label htmlFor="password" className="block text-sm font-medium text-gray-700">"
                    id="password"""
                    name="password"""
                    type={showPassword ? 'text' : 'password'}
                    required;
                    className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"""
                    placeholder="Enter your password""
                    value={formData.password}
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />"

                  <button;"
                    type="button"""
                    className="absolute right-3 top-2.5 h-5 w-5 text-gray-400""
                    onClick={() => setShowPassword(!showPassword)}
</button>"
                    <Eye className="h-5 w-5" />"

                  </button>

                type="submit"""
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500""
              >
          </form>