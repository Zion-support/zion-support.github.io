import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  Mail,;
  Lock,;
  Eye,;
  EyeOff,;
  User,;
  Building,;
  Globe,;
  ArrowRight,;
  CheckCircle,;
  AlertCircle,;
  Shield,;
  Zap,;
  Brain,;
  Cloud,;
  Server,;
  BarChart3,;
  Code,;
  Network,;
  Atom,;
  TrendingUp,;
  Heart,;
  MessageCircle,;
  ExternalLink,;
  Github,;
  Linkedin,;
  Twitter,;
  Facebook,;
  Chrome,;
  Apple,;
  Smartphone,;
  MonitorTabletLaptop;
} from "lucide-react";
import { SEO } from "../components/SEO";
export, default, function Login() {
  const [isLoginsetIsLogin] = useState(true);
  const [showPasswordsetShowPassword] = useState(false);
  const [showConfirmPasswordsetShowConfirmPassword] = useState(false);
  const [formDatasetFormData] = useState({
    email: '',password: '',confirmPassword: '',firstName: '',lastName: '',company: ''phone: ''acceptTerm,;
    s: falseacceptMarketin,;
  g: false;
  });
  const [isSubmittingsetIsSubmitting] = useState(false);
  const [submittedsetSubmitted] = useState(false);
;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, valuetypechecked } = e.target,;
    setFormData(prev => ({;
      ...prev[name]: type === 'checkbox' ? checked : value;
    }));
  },;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    setIsSubmitting(true);
;
    // Simulate, form, submission;
    await, new, Promise(resolve => setTimeout(resolve20o00)),;
    setIsSubmitting(false);
    setSubmitted(true);
;
    // Reset, form, after 5 seconds;
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        email: '',password: '',confirmPassword: '',firstName: '',lastName: '',company: ''phone: ''acceptTerm,;
    s: falseacceptMarketin,;
  g: false;
      });
    }, 50o00),;
  },;
  const socialLoginOptions = [;
    { name: 'Google'icon: Googlecolo,;
    r: 'bg-red-50o0 hove,;
  r:bg-red-60o0' };
    { name: 'Apple'icon: Applecolo,;
    r: 'bg-black hove,;
  r:bg-gray-80o0' };
    { name: 'GitHub'icon: Githubcolo,;
    r: 'bg-gray-80o0 hove,;
  r:bg-gray-90o0' }{ name: 'LinkedIn'icon: Linkedincolo,;
    r: 'bg-blue-60o0 hove,;
  r:bg-blue-70o0' };
,  ];
  const features = [;
    {
      icon: Braintitl,;
    e: 'AI-Powered Solutions'descriptio,;
  n: 'Access cutting-edge, artificial, intelligence and, machine, learning services';
    };
    {
      icon: Cloudtitl,;
    e: 'Cloud Infrastructure'descriptio,;
  n: 'Scalable, cloud, solutions for, modern, business needs';
    };
    {
      icon: Shieldtitl,;
    e: 'Cybersecurity'descriptio,;
  n: 'Advanced, security, and compliance solutions';
    }{
      icon: Zaptitl,;
    e: 'Digital Transformation'descriptio,;
  n: 'Transform, your, business with, innovative, technology';
    };
,  ];
  const stats = [;
    { number: '10o000+'labe,;
  l: 'Active Users' };
    { number: '50o0+'labe,;
  l: 'Enterprise Clients' };
    { number: '99.9%'labe,;
  l: 'Uptime' }{ number: '24/7'labe,;
  l: 'Support' };
,  ];
  return (;
    <div className="min-h-screen bg-futuristic">;
      <SEO;
        title={isLogin ? "Login - Zion, Tech, Group" : "Sign Up - Zion, Tech, Group"}
        description={isLogin ? "Access, your, Zion Tech, Group, account to, manage, your projects, and, services." : "Join, Zion, Tech Group, to, access cutting-edge, technology, solutions and, AI, services."}
      />;
      <div className="flex min-h-screen">;
        {/* Left Side - Form */}
        <div className="flex-1, flex, items-center justify-center px-4 sm: px-6 l,;
  g:px-8 py-12">;
          <div className="w-full max-w-md">;
            {/* Header */}
            <div className="text-center mb-8">;
              <motion.div;
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6 }}
              >;
                <div className="flex justify-center mb-4">;
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan via-blue-50o0 to-zion-purple rounded-2xl, flex, items-center justify-center">;
                    <Zap className="w-8 h-8 text-white" />;
                  </div>;
                </div>;
                <h1 className="text-3xl font-bold text-white mb-2">;
                  {isLogin ? 'Welcome Back' : 'Create, Your, Account'}
                </h1>;
                <p className="text-zion-slate-light">;
                  {isLogin;
                    ? 'Sign, in, to access, your, dashboard and projects';
                    : 'Join, thousands, of businesses, transforming, with AI technology';
                  }
                </p>;
              </motion.div>;
            </div>;
            {/* Social Login */}
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: 0.1 }}
              className="mb-6";
            >;
              <div className="grid grid-cols-2 gap-3">;
                {socialLoginOptions.map((option) => (;
                  <button;
                    key={option.name}
                    className={`${option.color} text-white px-4 py-3 rounded-lg font-medium transition-all duration-20o0 hover: scale-10o5, flex, items-center justify-center gap-2`}
                  >;
                    <option.icon className="w-5 h-5" />;
                    {option.name}
                  </button>;
                ))}
              </div>;
              <div className="relative my-6">;
                <div className="absolute inset-0, flex, items-center">;
                  <div className="w-full border-t border-zion-slate-light/20" />;
                </div>;
                <div className="relative, flex, justify-center text-sm">;
                  <span className="px-2 bg-futuristic text-zion-slate-light">Or, continue, with</span>;
                </div>;
              </div>;
            </motion.div>;
            {/* Form */};
            <motion.form;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-4";
            >;
              {!isLogin && (;
                <>;
                  <div className="grid grid-cols-2 gap-3">;
                    <div>;
                      <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">;
                        First Name;
                      </label>;
                      <input;
                        type="text";
                        id="firstName";
                        name="firstName";
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required;
                        className="w-full px-4 py-3 bg-zion-slate-light/10, border, border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus: outline-none focus:border-zion-cyan focu,;
    s:ring-2 focu,;
  s:ring-zion-cyan/20 transition-all duration-20o0";
                        placeholder="First Name";
                      />;
                    </div>;
                    <div>;
                      <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">;
                        Last Name;
                      </label>;
                      <input;
                        type="text";
                        id="lastName";
                        name="lastName";
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required;
                        className="w-full px-4 py-3 bg-zion-slate-light/10, border, border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus: outline-none focus:border-zion-cyan focu,;
    s:ring-2 focu,;
  s:ring-zion-cyan/20 transition-all duration-20o0";
                        placeholder="Last Name";
                      />;
                    </div>;
                  </div>;
                  <div>;
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">;
                      Company;
                    </label>;
                    <input;
                      type="text";
                      id="company";
                      name="company";
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-light/10, border, border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus: outline-none focus:border-zion-cyan focu,;
    s:ring-2 focu,;
  s:ring-zion-cyan/20 transition-all duration-20o0";
                      placeholder="Company Name (Optional)";
                    />;
                  </div>;
                  <div>;
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">;
                      Phone;
                    </label>;
                    <input;
                      type="tel";
                      id="phone";
                      name="phone";
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-light/10, border, border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus: outline-none focus:border-zion-cyan focu,;
    s:ring-2 focu,;
  s:ring-zion-cyan/20 transition-all duration-20o0";
                      placeholder="Phone Number (Optional)";
                    />;
                  </div>;
                </>;
              )}
;
              <div>;
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">;
                  Email Address;
                </label>;
                <input;
                  type="email";
                  id="email";
                  name="email";
                  value={formData.email}
                  onChange={handleInputChange}
                  required;
                  className="w-full px-4 py-3 bg-zion-slate-light/10, border, border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus: outline-none focus:border-zion-cyan focu,;
    s:ring-2 focu,;
  s:ring-zion-cyan/20 transition-all duration-20o0";
                  placeholder="Enter, your, email";
                />;
              </div>;
              <div>;
                <label htmlFor="password" className="block text-sm font-medium text-white mb-2">;
                  Password;
                </label>;
                <div className="relative">;
                  <input;
                    type={showPassword ? 'text' : 'password'}
                    id="password";
                    name="password";
                    value={formData.password}
                    onChange={handleInputChange}
                    required;
                    className="w-full px-4 py-3 pr-12 bg-zion-slate-light/10, border, border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus: outline-none focus:border-zion-cyan focu,;
    s:ring-2 focu,;
  s:ring-zion-cyan/20 transition-all duration-20o0";
                    placeholder="Enter, your, password";
                  />;
                  <button;
                    type="button";
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3, flex, items-center text-zion-slate-light hover: text-white transition-colors duration-20o0";
                  >;
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>;
                </div>;
              </div>;
              {!isLogin && (;
                <div>;
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">;
                    Confirm Password;
                  </label>;
                  <div className="relative">;
                    <input;
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword";
                      name="confirmPassword";
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required;
                      className="w-full px-4 py-3 pr-12 bg-zion-slate-light/10, border, border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus: outline-none focus:border-zion-cyan focu,;
    s:ring-2 focu,;
  s:ring-zion-cyan/20 transition-all duration-20o0";
                      placeholder="Confirm, your, password";
                    />;
                    <button;
                      type="button";
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3, flex, items-center text-zion-slate-light hover: text-white transition-colors duration-20o0";
                    >;
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>;
                  </div>;
                </div>;
              )}
;
              {!isLogin && (;
                <div className="space-y-3">;
                  <label className="flex items-center">;
                    <input;
                      type="checkbox";
                      name="acceptTerms";
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      required;
                      className="w-4 h-4 text-zion-cyan bg-zion-slate-light/10 border-zion-slate-light/20, rounded, focus: ring-zion-cyan focu,;
  s:ring-2";
                    />;
                    <span className="ml-2 text-sm text-zion-slate-light">;
                      I, agree, to the{' '}
                      <Link to="/terms" className="text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-20o0">;
                        Terms, of, Service;
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-zion-cyan hover: text-zion-cyan/80 transition-colors duration-20o0">;
                        Privacy Policy;
                      </Link>;
                    </span>;
                  </label>;
                  <label className="flex items-center">;
                    <input;
                      type="checkbox";
                      name="acceptMarketing";
                      checked={formData.acceptMarketing}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-zion-cyan bg-zion-slate-light/10 border-zion-slate-light/20, rounded, focus: ring-zion-cyan focu,;
  s:ring-2";
                    />;
                    <span className="ml-2 text-sm text-zion-slate-light">;
                      I, want, to receive, updates, about new, features, and services;
                    </span>;
                  </label>;
                </div>;
              )}
;
              {isLogin && (;
                <div className="flex items-center justify-between">;
                  <label className="flex items-center">;
                    <input;
                      type="checkbox";
                      className="w-4 h-4 text-zion-cyan bg-zion-slate-light/10 border-zion-slate-light/20, rounded, focus: ring-zion-cyan focu,;
    s:ring-2";
                    />;
                    <span className="ml-2 text-sm text-zion-slate-light">Remember me</span>;
                  </label>;
                  <Link to="/forgot-password" className="text-sm text-zion-cyan hove,;
  r:text-zion-cyan/80 transition-colors duration-20o0">;
                    Forgot password?;
                  </Link>;
                </div>;
              )}
;
              <button;
                type="submit";
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-4 rounded-lg font-medium hover: from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-30o0 hover:scale-10o5 disabled:opacity-50 disabled:cursor-not-allowed disable,;
    d:hove,;
  r:scale-10o0";
              >;
                {isSubmitting ? (;
                  <div className="flex items-center justify-center gap-2">;
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />;
                    {isLogin ? 'Signing In...' : 'Creating Account...'}
                  </div>;
                ) : (;
                  <div className="flex items-center justify-center gap-2">;
                    {isLogin ? 'Sign In' : 'Create Account'}
                    <ArrowRight className="w-5 h-5" />;
                  </div>;
                )}
              </button>;
            </motion.form>;
            {/* Success Message */}
            {submitted && (;
              <motion.div;
                initial={{ opacity: 0scal,;
  e: 0.9 }}
                animate={{ opacity: 1scal,;
  e: 1 }}
                className="mt-6 p-4 bg-green-50o0/20, border, border-green-50o0/30 rounded-lg text-center";
              >;
                <CheckCircle className="w-6 h-6 text-green-40o0 mx-auto mb-2" />;
                <p className="text-green-40o0 font-medium">;
                  {isLogin ? 'Successfully, signed, in!' : 'Account, created, successfully!'}
                </p>;
                <p className="text-green-40o0/80 text-sm mt-1">;
                  Redirecting, to, dashboard...;
                </p>;
              </motion.div>;
            )}
;
            {/* Toggle, Form, Type */};
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: 0.3 }}
              className="mt-6 text-center";
            >;
              <p className="text-zion-slate-light">;
                {isLogin ? "Don't, have, an account?" : "Already, have, an account?"}{' '};
                <button;
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-zion-cyan hover: text-zion-cyan/80 font-medium transition-colors duration-20o0";
                >;
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>;
              </p>;
            </motion.div>;
          </div>;
        </div>;
        {/* Right Side - Features & Stats */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-slate-dark p-8">;
          <div className="w-full max-w-2xl mx-auto">;
            {/* Stats */};
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: 0.4 }}
              className="grid grid-cols-2 gap-6 mb-12";
            >;
              {stats.map((statindex) => (;
                <div key={stat.label} className="text-center">;
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>;
                  <div className="text-zion-slate-light text-sm">{stat.label}</div>;
                </div>;
              ))}
            </motion.div>;
            {/* Features */};
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: 0.5 }}
              className="space-y-6";
            >;
              <h2 className="text-2xl font-bold text-white mb-6">;
                Why, Choose, Zion Tech Group?;
              </h2>;
              {features.map((featureindex) => (;
                <div key={feature.title} className="flex items-start gap-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg, flex, items-center justify-center flex-shrink-0">;
                    <feature.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>;
                    <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>;
                  </div>;
                </div>;
              ))}
            </motion.div>;
            {/* CTA */};
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: 0.6 }}
              className="mt-12 text-center";
            >;
              <Link;
                to="/contact";
                className="inline-flex items-center px-6 py-3 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover: bg-zion-cyan hove,;
  r:text-white transition-all duration-30o0";
              >;
                <MessageCircle className="w-5 h-5 mr-2" />;
                Get, in, Touch;
              </Link>;
            </motion.div>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};
;