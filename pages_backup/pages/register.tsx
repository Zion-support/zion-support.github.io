
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check } from "lucide-react";
import Layout from "../components/Layout";

export default function RegisterPage() {

export default function RegisterPage() {;
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check } from "lucide-react";
import Layout from "../components/Layout";

export default function RegisterPage() {;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({;
    firstName: "",;
    lastName: "",;
    email: "",;
    password: "",;
    confirmPassword: "",;
    company: "",;
    agreeToTerms: false,;
    subscribeNewsletter: false,;
  });

  const [passwordRequirements, setPasswordRequirements] = useState({;
    length: false,;
    uppercase: false,;
    lowercase: false,;
    number: false,;
    special: false,;
  });

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    // Handle registration logic here;
  };

  const handleChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const { name, value, type, checked } = e && e.target;
    setFormData((prev) => ({;
      ...prev,;
      [name]: type === "checkbox" ? checked : value,;
    }));

    // Check password requirements;
    if (name === "password") {;
      setPasswordRequirements({;
        length: value && value.length >= 8,;
        uppercase: /[A-Z]/.test(value),;
        lowercase: /[a-z]/.test(value),;
        number: /\d/.test(value),;
        special: /[!@#$%^&*(),.?":{}|<>]/.test(value),;
      });
    }
  };

  const isPasswordValid = Object && Object.values(passwordRequirements).every(Boolean);
  const isFormValid =;
    formData && formData.firstName &&;
    formData && formData.lastName &&;
    formData && formData.email &&;
    formData && formData.password &&;
    formData && formData.confirmPassword &&;
    formData && formData.password === formData && formData.confirmPassword &&;
    isPasswordValid &&;
    formData && formData.agreeToTerms;


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>register | Zion Tech Group</title>
        <meta name="description" content="register - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">register</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

            transition={{ duration: 0 && 0.6 }}
            className="text-center">;
            <div className="mx-auto h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;
              <span className="text-white font-bold text-xl">Z</span>;
            </div>;
            <h2 className="mt-6 text-3xl font-bold text-white">;
              Create your account;
            </h2>;
            <p className="mt-2 text-sm text-gray-300">;
              Join Zion Tech Group and start your digital transformation journey;
            </p>;
          </motion && motion.div>;

          <motion&& motion.div

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-8">;
            <form className="space-y-6" onSubmit={handleSubmit}>;
              <div className="grid grid-cols-2 gap-4">;
                <div>;
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-300 mb-2">;
                    First name;
                  </label>;
                  <div className="relative">;
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">;
                      <User className="h-5 w-5 text-gray-400" />;
                    </div>;
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData && formData.firstName}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="First name"

                    />;
                  </div>;
                </div>;

                <div>;

                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-300 mb-2">;
                    Last name;
                  </label>;
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData && formData.lastName}
                    onChange={handleChange}
                    className="block w-full px-3 py-3 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Last name"

                  />;
                </div>;
              </div>;

              <div>;

                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2">;
                  Email address;
                </label>;
                <div className="relative">;
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">;
                    <Mail className="h-5 w-5 text-gray-400" />;
                  </div>;
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData && formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"

                  />;
                </div>;
              </div>;

              <div>;

                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-300 mb-2">;
                  Company (optional);
                </label>;
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData && formData.company}
                  onChange={handleChange}
                  className="block w-full px-3 py-3 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"

                />;
              </div>;

              <div>;

                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300 mb-2">;
                  Password;
                </label>;
                <div className="relative">;
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">;
                    <Lock className="h-5 w-5 text-gray-400" />;
                  </div>;
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData && formData.password}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-12 py-3 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Create a password"
                  />;
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >;
                    {showPassword ? (;
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />;
                    ) : (;
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />;
                    )}

                  </button>;
                </div>;


                {/* Password Requirements */}
                <div className="mt-2 space-y-1">;
                  {Object && Object.entries(passwordRequirements).map(;
                    ([key, isValid]) => (;
                      <div key={key} className="flex items-center text-xs">;
                        <Check
                          className={`h-3 w-3 mr-2 ${isValid ? "text-green-400" : "text-gray-500"}`}
                        />;
                        <span
                          className={
                            isValid ? "text-green-400" : "text-gray-400"
                          }>;

import React, { useState } from './react';
import Link from './next / link';
import { motion  } from './framer-motion';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check  } from './lucide-react';
import Layout from "../components / Layout";
;
export default /**
 * RegisterPage - Function description
 */
function RegisterPage() {
  const [show_password, setShowPassword] = useState (false);
  const [showConfirmPassword, setShowConfirmPassword] = useState (false);
  const [form_data, setFormData] = useState ({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    company: "",
    agreeToTerms: false,
    subscribe_newsletter: false,
  });
;
  const [password_requirements, setPasswordRequirements] = useState ({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });
;
  const handle_submit = (e: React.FormEvent) =>: any {
    e.prevent_default ();
    // Handle registration logic here;
  }
;
  const handle_change = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
    const { name, value, type, checked } = e.target;
    setFormData ((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
;
    // Check password requirements;
    // Check condition
if ( {) {
  $2
}
      setPasswordRequirements ({
        length: value.length >= 8,
        uppercase: /[A - Z]/.test (value),
        lowercase: /[a - z]/.test (value),
        number: /\d/.test (value),
        special: /[!@#$%^&*(), .?":{}|<>]/.test (value),
      });
    }
  }
;
  const isPasswordValid = Object.values (password_requirements).every (Boolean);
  const isFormValid =;
    form_data.first_name &&;
    form_data.last_name &&;
    form_data.email &&;
    form_data.password &&;
    form_data.confirm_password &&;
    form_data.password === form_data.confirm_password &&;
    isPasswordValid &&;
    form_data.agreeToTerms;
;
  return (
    <Layout;
      title="Register - Zion Tech Group";
      description="Create your Zion Tech Group account to access our services, dashboard, and exclusive resources.";
      keywords="register, sign up, create account, Zion Tech Group, new user";
    >;
      <div className="min - h-screen bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900 flex items - center justify - center py - 12 px - 4 sm:px - 6 lg:px - 8">;
        <div className="max - w-md w - full space - y-8">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
            className="text - center";
          >;
            <div className="mx - auto h - 12 w - 12 bg - gradient - to - r from - blue - 600 to - purple - 600 rounded - lg flex items - center justify - center">;
              <span className="text - white font - bold text - xl">Z</span>;
            </div>;
            <h2 className="mt - 6 text - 3xl font - bold text - white">;
              Create your account;
            </h2>;
            <p className="mt - 2 text - sm text - gray - 300">;
              Join Zion Tech Group and start your digital transformation journey;
            </p>;
          </motion.div>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg - white / 10 backdrop - blur - md rounded - lg shadow - xl p - 8";
          >;
            <form className="space - y-6" on_submit={handle_submit}>;
              <div className="grid grid - cols - 2 gap - 4">;
                <div>;
                  <label;
                    html_for="first_name";
                    className="block text - sm font - medium text - gray - 300 mb - 2";
                  >;
                    First name;
                  </label>;
                  <div className="relative">;
                    <div className="absolute inset - y-0 left - 0 pl - 3 flex items - center pointer - events - none">;
                      <User className="h - 5 w - 5 text - gray - 400" />;
                    </div>;
                    <input;
                      id="first_name";
                      name="first_name";
                      type="text";
                      required;
                      value={form_data.first_name}
                      on_change={handle_change}
                      className="block w - full pl - 10 pr - 3 py - 3 border border - gray - 600 rounded - lg bg - white / 10 text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
                      placeholder="First name";
                    />;
                  </div>;
                </div>;
                <div>;
                  <label;
                    html_for="last_name";
                    className="block text - sm font - medium text - gray - 300 mb - 2";
                  >;
                    Last name;
                  </label>;
                  <input;
                    id="last_name";
                    name="last_name";
                    type="text";
                    required;
                    value={form_data.last_name}
                    on_change={handle_change}
                    className="block w - full px - 3 py - 3 border border - gray - 600 rounded - lg bg - white / 10 text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
                    placeholder="Last name";
                  />;
                </div>;
              </div>;
              <div>;
                <label;
                  html_for="email";
                  className="block text - sm font - medium text - gray - 300 mb - 2";
                >;
                  Email address;
                </label>;
                <div className="relative">;
                  <div className="absolute inset - y-0 left - 0 pl - 3 flex items - center pointer - events - none">;
                    <Mail className="h - 5 w - 5 text - gray - 400" />;
                  </div>;
                  <input;
                    id="email";
                    name="email";
                    type="email";
                    auto_complete="email";
                    required;
                    value={form_data.email}
                    on_change={handle_change}
                    className="block w - full pl - 10 pr - 3 py - 3 border border - gray - 600 rounded - lg bg - white / 10 text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
                    placeholder="Enter your email";
                  />;
                </div>;
              </div>;
              <div>;
                <label;
                  html_for="company";
                  className="block text - sm font - medium text - gray - 300 mb - 2";
                >;
                  Company (optional);
                </label>;
                <input;
                  id="company";
                  name="company";
                  type="text";
                  value={form_data.company}
                  on_change={handle_change}
                  className="block w - full px - 3 py - 3 border border - gray - 600 rounded - lg bg - white / 10 text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
                  placeholder="Your company name";
                />;
              </div>;
              <div>;
                <label;
                  html_for="password";
                  className="block text - sm font - medium text - gray - 300 mb - 2";
                >;
                  Password;
                </label>;
                <div className="relative">;
                  <div className="absolute inset - y-0 left - 0 pl - 3 flex items - center pointer - events - none">;
                    <Lock className="h - 5 w - 5 text - gray - 400" />;
                  </div>;
                  <input;
                    id="password";
                    name="password";
                    type={show_password ? "text" : "password"}
                    auto_complete="new - password";
                    required;
                    value={form_data.password}
                    on_change={handle_change}
                    className="block w - full pl - 10 pr - 12 py - 3 border border - gray - 600 rounded - lg bg - white / 10 text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
                    placeholder="Create a password";
                  />;
                  <button;
                    type="button";
                    className="absolute inset - y-0 right - 0 pr - 3 flex items - center";
                    on_click={() => setShowPassword (!show_password)}
                  >;
                    {show_password ? (
                      <EyeOff className="h - 5 w - 5 text - gray - 400 hover:text - gray - 300" />) : (
                      <Eye className="h - 5 w - 5 text - gray - 400 hover:text - gray - 300" />)}
                  </button>;
                </div>;
                {/* Password Requirements */}
                <div className="mt - 2 space - y-1">;
                  {Object.entries (password_requirements).map (
                    ([key, is_valid]) => (
                      <div key={key} className="flex items - center text - xs">;
                        <Check;
                          className={`h - 3 w - 3 mr - 2 ${is_valid ? "text - green - 400" : "text - gray - 500"}`}
                        />;
                        <span;
                          className={
                            is_valid ? "text - green - 400" : "text - gray - 400";
                          }
                        >;

                          {key === "length" && "At least 8 characters"}
                          {key === "uppercase" && "One uppercase letter"}
                          {key === "lowercase" && "One lowercase letter"}
                          {key === "number" && "One number"}
                          {key === "special" && "One special character"}

                        </span>;
                      </div>;
                    ),;
                  )}
                </div>;
              </div>;

              <div>;

                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-300 mb-2">;
                  Confirm password;
                </label>;
                <div className="relative">;
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">;
                    <Lock className="h-5 w-5 text-gray-400" />;
                  </div>;
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData && formData.confirmPassword}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-12 py-3 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Confirm your password"
                  />;
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >;
                    {showConfirmPassword ? (;
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />;
                    ) : (;
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />;
                    )}
                  </button>;
                </div>;
                {formData && formData.confirmPassword &&;
                  formData && formData.password !== formData && formData.confirmPassword && (;
                    <p className="mt-1 text-xs text-red-400">;
                      Passwords do not match;
                    </p>;
                  )}

              </div>;

              <div className="space-y-4">;
                <div className="flex items-center">;

                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    required
                    checked={formData && formData.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-white/10"
                  />;
                  <label
                    htmlFor="agreeToTerms"
                    className="ml-2 block text-sm text-gray-300">;
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-blue-400 hover:text-blue-300">;
                      Terms of Service;
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"

                      className="text-blue-400 hover:text-blue-300">;
                        </span>;
                      </div>),
                  )}
                </div>;
              </div>;
              <div>;
                <label;
                  html_for="confirm_password";
                  className="block text - sm font - medium text - gray - 300 mb - 2";
                >;
                  Confirm password;
                </label>;
                <div className="relative">;
                  <div className="absolute inset - y-0 left - 0 pl - 3 flex items - center pointer - events - none">;
                    <Lock className="h - 5 w - 5 text - gray - 400" />;
                  </div>;
                  <input;
                    id="confirm_password";
                    name="confirm_password";
                    type={showConfirmPassword ? "text" : "password"}
                    auto_complete="new - password";
                    required;
                    value={form_data.confirm_password}
                    on_change={handle_change}
                    className="block w - full pl - 10 pr - 12 py - 3 border border - gray - 600 rounded - lg bg - white / 10 text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
                    placeholder="Confirm your password";
                  />;
                  <button;
                    type="button";
                    className="absolute inset - y-0 right - 0 pr - 3 flex items - center";
                    on_click={() => setShowConfirmPassword (!showConfirmPassword)}
                  >;
                    {showConfirmPassword ? (
                      <EyeOff className="h - 5 w - 5 text - gray - 400 hover:text - gray - 300" />) : (
                      <Eye className="h - 5 w - 5 text - gray - 400 hover:text - gray - 300" />)}
                  </button>;
                </div>;
                {form_data.confirm_password &&;
                  form_data.password !== form_data.confirm_password && (
                    <p className="mt - 1 text - xs text - red - 400">;
                      Passwords do not match;
                    </p>)}
              </div>;
              <div className="space - y-4">;
                <div className="flex items - center">;
                  <input;
                    id="agreeToTerms";
                    name="agreeToTerms";
                    type="checkbox";
                    required;
                    checked={form_data.agreeToTerms}
                    on_change={handle_change}
                    className="h - 4 w - 4 text - blue - 600 focus:ring - blue - 500 border - gray - 600 rounded bg - white / 10";
                  />;
                  <label;
                    html_for="agreeToTerms";
                    className="ml - 2 block text - sm text - gray - 300";
                  >;
                    I agree to the{" "}
                    <Link;
                      href="/terms";
                      className="text - blue - 400 hover:text - blue - 300";
                    >;
                      Terms of Service;
                    </Link>{" "}
                    and{" "}
                    <Link;
                      href="/privacy";
                      className="text - blue - 400 hover:text - blue - 300";
                    >;

                      Privacy Policy;
                    </Link>;
                  </label>;
                </div>;

                    className="ml-2 block text-sm text-gray-300">;
                    Subscribe to our newsletter for updates and insights;
                  </label>;
                </div>;
              </div>;

              <div>;
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">;
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">;
                    <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />;
                <div className="flex items - center">;
                  <input;
                    id="subscribe_newsletter";
                    name="subscribe_newsletter";
                    type="checkbox";
                    checked={form_data.subscribe_newsletter}
                    on_change={handle_change}
                    className="h - 4 w - 4 text - blue - 600 focus:ring - blue - 500 border - gray - 600 rounded bg - white / 10";
                  />;
                  <label;
                    html_for="subscribe_newsletter";
                    className="ml - 2 block text - sm text - gray - 300";
                  >;
                    Subscribe to our newsletter for updates and insights;
                  </label>;
                </div>;
              </div>;
              <div>;
                <button;
                  type="submit";
                  disabled={!isFormValid}
                  className="group relative w - full flex justify - center py - 3 px - 4 border border - transparent text - sm font - medium rounded - lg text - white bg - gradient - to - r from - blue - 600 to - purple - 600 hover:from - blue - 700 hover:to - purple - 700 focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - blue - 500 transition - all duration - 200 disabled:opacity - 50 disabled:cursor - not - allowed";
                >;
                  <span className="absolute left - 0 inset - y-0 flex items - center pl - 3">;
                    <ArrowRight className="h - 5 w - 5 text - white group - hover:translate - x-1 transition - transform" />;

                  </span>;
                  Create account;
                </button>;
              </div>;

              <div className="text - center">;
                <p className="text - sm text - gray - 300">;
                  Already have an account?{" "}
                  <Link;
                    href="/login";
                    className="font - medium text - blue - 400 hover:text - blue - 300 transition - colors";
                  >;

                    Sign in here;
                  </Link>;
                </p>;
              </div>;
            </form>;

          </motion.div>;
        </div>;
      </div>;
    </Layout>);

}
