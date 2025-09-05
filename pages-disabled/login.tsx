import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function LoginPage() {}
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({})
    email: '',
    password: '',
    remember: false;
  }
});

  const handleSubmit = (e: React.FormEvent) => {}
    e.preventDefault();
    // Handle login logic here;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({})
      ...prev,
      [name]: type === 'checkbox' ? checked : value;
    }));
  };

  return ()
    <Layout;
      title="Login - Zion Tech Group"
      description="Sign in to your Zion Tech Group account to access your dashboard, projects, and services."
      keywords="login, sign in, account, dashboard, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="text-center"
          >
            <div className="mx-auto h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-white">
              Welcome back;
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              Sign in to your account to continue;
            </p>
          </motion.div>

          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6, delay: 0.2 }};
            className="bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-8"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email address;
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input;
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required;
                    value={formData.email};
                    onChange={handleChange};
                    className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password;
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input;
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'};
                    autoComplete="current-password"
                    required;
                    value={formData.password};
                    onChange={handleChange};
                    className="block w-full pl-10 pr-12 py-3 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your password"
                  />
                  <button;
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)};
                  >
                    {showPassword ? (})
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                    ) : ()
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                    )};
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input;
                    id="remember"
                    name="remember"
                    type="checkbox"
                    checked={formData.remember};
                    onChange={handleChange};
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-white/10"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
                    Remember me;
                  </label>
                </div>

                <div className="text-sm">
                  <Link;
                    href="/forgot-password"
                    className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button;
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                  Sign in;
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-300">
                  Don't have an account?{' '};
                  <Link;
                    href="/register"
                    className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Sign up here;
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>

          <motion.div;
            initial={{ opacity: 0 }};
            animate={{ opacity: 1 }};
            transition={{ duration: 0.6, delay: 0.4 }};
            className="text-center"
          >
            <p className="text-xs text-gray-400">
              By signing in, you agree to our{' '};
              <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                Terms of Service;
              </Link>{' '};
              and{' '};
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                Privacy Policy;
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};