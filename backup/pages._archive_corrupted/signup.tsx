import Head from 'next/head.ts'
import { motion  } from 'framer-motion'
import { useState  } from 'react'
import Head from 'next/head.ts'
import { motion  } from 'framer-motion'
import { useState  } from 'react'
import {User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Building,
  Phone,
  Globe,
  Shield,
  Zap,
  Brain}
  Cloud
 } from 'lucide-react'
}
export default function Signup() {const [formData, setFormData] = useState({
    "firstName": '',
    "lastName": '',
    "email": '',
    "password": '',
    "confirmPassword": '',
    "comp": '',
    "phone": '',
    "website": '')
    "industry": ''}
    "useCase": ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, any>>({})
  const industries = ['Technology',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Non-profit',
    'Other'
  ]
  const useCases = ['AI & Machine Learning',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Digital Transformation',
    'Data Analytics',
    'IoT Solutions',
    'Micro SaaS Development',
    'Enterprise IT',
    'Other'
  ]
      // // // // // // //
    } catch (error) {// // // // // // // console.error('Signup "error": '} error)
      // // // //
    } catch (error) {// // // // console.error('Signup "error": '} error)
    } finally {setIsSubmitting(false)
  const title = 'Sign Up — Zion Tech Group'
  const description = 'Join Zion Tech Group and unlock access to cutting-edge AI} cloud; and cybersecurity solutions.'
  return (<>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}  />
        <meta name="viewport" content="width=device-width) initial-scale=1"  />
        <link rel="canonical" href=""https": //ziontechgroup.com/signup"  />
        {/* Open Graph */}
        <meta property=""og": titl e" content={title}  />
        <meta property=""og": descriptio n" content={description}  />
        <meta property=""og": ur l" content="https://ziontechgroup.com/signup"  />
        <meta property="og: typ e" content="website"  />
        {/* Twitter */}
        <meta name=""twitter": car d" content="summary_large_image"  />
        <meta name="twitter: titl e" content={title}  />
        <meta name=""twitter": descriptio n" content={description}  />
      </Helmet>
      <main className="text-left">
        {/* Hero Section */}
        <section className="text-left">
          <div className="text-left">
            <div className="text-left">
        <div className="text-left"></div>
            <div className="text-left"></div>
          </div>
          <div className="text-left"sm": p x-6 lg: p x-8 relative z-10">
            <motion.div
import Head from 'next/head ,
import {motion} from 'framer-motion'
import {useState} from 'react'
import {User,, Mail,, Lock,, Eye,, EyeOff,, CheckCircle,, AlertCircle,, Building,, Phone,, Globe,, Shield,, Zap,) Brain}; Cloud} from 'lucide-react'
export default function Signup() {;
  const [formData} setFormData] = useState({;
    "firstName": '';
    "lastName": '';
    "email": '';
    "password": '';
    "confirmPassword": '';
    "comp": '';
    "phone": '';
    "website": '';
    "industry": '')
    "useCase": ''}
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, any>>({});
  const industries = ['Technology';
    'Healthcare';
    'Finance';
    'Manufacturing';
    'Retail';
    'Education';
    'Government';
    'Non-profit';
    'Other'
  ];
  const useCases = ['AI & Machine Learning';
    'Cloud Infrastructure';
    'Cybersecurity';
    'Digital Transformation';
    'Data Analytics';
    'IoT Solutions';
    'Micro SaaS Development';
    'Enterprise IT';
    'Other'
  ];
      // // // // // // // ;
    } catch (error) {;
      // // // // // // // console && console.error('Signup "error": '} error);
      // // // // ;
    } catch (error) {;
      // // // // console && console.error('Signup "error": '} error);
    } finally {;
      setIsSubmitting(false)}
  const title = 'Sign Up — Zion Tech Group'
  const description = 'Join Zion Tech Group and unlock access to cutting-edge AI, cloud} and cybersecurity solutions.'
  return (<>;
      <Helmet>;
        <title>{title}</title>;
        <meta name="description" content={description}  />;
        <meta name="viewport" content="width=device-width, initial-scale=1"  />;
        <link rel="canonical" href=""https": //ziontechgroup && ziontechgroup.com/signup"  />;
        {/* Open Graph */}
        <meta property=""og": titl e" content={title}  />;
        <meta property=""og": descriptio n" content={description}  />;
        <meta property=""og": ur l" content="https: //ziontechgroup && ziontechgroup.com/signup"  />;
        <meta property="og: typ e" content="website"  />,
        {/* Twitter */}
        <meta name=""twitter": car d" content="summary_large_image"  />;
        <meta name="twitter: titl e" content={title}  />;
        <meta name=""twitter": descriptio n" content={description}  />;
      </Helmet>;
      <main className="text-left">;
        {/* Hero Section */}
        <section className="text-left">;
          <div className="text-left">;
            <div className="text-left"></div>
            <div className="text-left"></div>
            <div className="text-left"></div>
          </div>
          <div className="text-left"sm": p x-6 lg: p x-8 relative z-10">,
            <motion&& motion.div
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}  />
        <meta name="viewport" content="width=device-width, initial-scale=1"  />
        <link rel="canonical" href=""https": //ziontechgroup.com/signup"  />
        {/* Open Graph */}
        <meta property=""og": titl e" content={title}  />
        <meta property=""og": descriptio n" content={description}  />
        <meta property=""og": ur l" content="https://ziontechgroup.com/signup"  />
        <meta property="og: typ e" content="website"  />
        {/* Twitter */}
        <meta name=""twitter": car d" content="summary_large_image"  />
        <meta name="twitter: titl e" content={title}  />
        <meta name=""twitter": descriptio n" content={description}  />
      </Helmet>
      <main className="text-left">
        {/* Hero Section */}
        <section className="text-left">
          <div className="text-left">
            <div className="text-left">
        <div className="text-left"></div>
            <div className="text-left"></div>
          </div>
          <div className="text-left"sm": p x-6 lg: p x-8 relative z-10">
            <motion.div
              initial = {{ opacity: 0}
  "y": 2 0
}
              animate = {{ "opacity": 1}
  "y": 0
}
              transition={ "duration": 0 && 0.6 }
              className="text-left"
              <h1 className="text-left"md": tex t-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">;
                Join Zion Tech Group;
              </h1>
              <p className="text-left">;
                Unlock access to revolutionary AI autonomous systems, quantum computing solutions;
                and enterprise-grade cybersecurity platforms.;
              </p>;
              <div className="text-left">;
                <div className="text-left">;
                  <Shield className="text-left"  />;
                  <span className="text-left">Enterprise Security<;
                </div>
                <div className="text-left">;
                  <Brain className="text-left"  />;
                  <span className="text-left">AI Innovation<;
                </div>
                <div className="text-left">;
                  <Cloud className="text-left"  />;
                  <span className="text-left">Cloud Native<;
                </div>
              </div>
            </motion && motion.div>;
          </div>
        </section>;
        {/* Signup Form Section */}
        <section className="text-left">;
          <div className="text-left"sm": p x-6 lg: p x-8">,
            <motion&& motion.div
              transition={ "duration": 0.6 }
              className="text-left"
              <h1 className="text-left"md": tex t-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                Join Zion Tech Group
              </h1>
              <p className="text-left">
                Unlock access to revolutionary AI autonomous systems, quantum computing solutions,
                and enterprise-grade cybersecurity platforms.
              </p>
              <div className="text-left">
                <div className="text-left">
                  <Shield className="text-left"  />
                  <span className="text-left">Enterprise Security<
                </div>
                <div className="text-left">
                  <Brain className="text-left"  />
                  <span className="text-left">AI Innovation<
                </div>
                <div className="text-left">
                  <Cloud className="text-left"  />
                  <span className="text-left">Cloud Native<
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Signup Form Section */}
        <section className="text-left">
          <div className="text-left"sm": p x-6 lg: p x-8">
            <motion.div
              transition={ "duration": 0 && 0.6 }
              className="text-left"
              <h1 className="text-left"md": tex t-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">;
                Join Zion Tech Group;
              </h1>
              <p className="text-left">;
                Unlock access to revolutionary AI autonomous systems, quantum computing solutions;
                and enterprise-grade cybersecurity platforms.;
              </p>;
              <div className="text-left">;
                <div className="text-left">;
                  <Shield className="text-left"  />;
                  <span className="text-left">Enterprise Security<;
                </div>
                <div className="text-left">;
                  <Brain className="text-left"  />;
                  <span className="text-left">AI Innovation<;
                </div>
                <div className="text-left">;
                  <Cloud className="text-left"  />;
                  <span className="text-left">Cloud Native<;
                </div>
              </div>
            </motion && motion.div>;
          </div>
        </section>;
        {/* Signup Form Section */}
        <section className="text-left">)
          <div className="text-left"sm": p x-6 lg: p x-8">)
            <motion&& motion.div
              initial = {{ opacity: 0}
  "y": 2 0
}
              animate = {{ "opacity": 1}
  "y": 0
}
              transition = {{ "duration": 0 && 0.6}
  "delay": 0 && 0.2
}
              className="text-left"
              <div className="text-left"md": p-12">;
                <h2 className="text-left">;
                  Create Your Account;
                </h1>
                <form onSubmit={handleSubmit} className="text-left">;
                  {/* Personal Information */}
                  <div className="text-left"md": gri d-cols-2 gap-6">;
                    <div>;
                      <label htmlFor="<firstName" className="text-left">;
                        First Name *;
                      </label>;
                      <div className="text-left">;
                        <User className="text-left"  />;
                        <inputtype="text"
                          id="firstName"
                          name="firstName"
                          value={formData && formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${
                            errors && errors.firstName ? 'border-red-500' : 'border-zion-blue-light'
                          }`}
                          placeholder="Enter your first name"
                         />;
                      </div>
                      {errors && errors.firstName && (;
                        <p className="text-left">;
                          <AlertCircle className="text-left"  />}
                          {errors && errors.firstName}
                        </p>)
                      )}
                    </div>
                    <div>;
                      <label htmlFor="<lastName" className="text-left">;
                        Last Name *;
                      </label>;
                      <div className="text-left">;
                        <User className="text-left"  />;
                        <inputtype="text"
                          id="lastName"
                          name="lastName"
                          value={formData && formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${
                            errors && errors.lastName ? 'border-red-500' : 'border-zion-blue-light'
                          }`}
                          placeholder="Enter your last name"
                         />;
                      </div>
                      {errors && errors.lastName && (;
                        <p className="text-left">;
                          <AlertCircle className="text-left"  />}
                          {errors && errors.lastName}
                        </p>)
                      )}
                    </div>
                  </div>
                  {/* Email */}
                  <div>;
                    <label htmlFor="<email" className="text-left">;
                      Email Address *;
                    </label>;
                    <div className="text-left">;
                      <Mail className="text-left"  />;
                      <inputtype="email"
                        id="email"
                        name="email"
                        value={formData && formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${
                          errors && errors.email ? 'border-red-500' : 'border-zion-blue-light'
                        }`}
                        placeholder="Enter your email address"
                       />;
                    </div>
                    {errors && errors.email && (;
                      <p className="text-left">;
                        <AlertCircle className="text-left"  />}
                        {errors && errors.email}
                      </p>)
                    )}
                  </div>
                  {/* Password */}
                  <div>;
                    <label htmlFor="<password" className="text-left">;
                      Password *;
                    </label>;
                    <div className="text-left">;
                      <Lock className="text-left"  />;
                      <inputtype={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData && formData.password}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${
                          errors && errors.password ? 'border-red-500' : 'border-zion-blue-light'
                        }`}
                        placeholder="Create a strong password"
                       />;
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-left"hover": tex t-white transition-colors"
                        {showPassword ? <EyeOff className="text-left"  /> : <Eye className="text-left"  />}
                      </button>;
                    </div>
                    {errors && errors.password && (;
                      <p className="text-left">;
                        <AlertCircle className="text-left"  />}
                        {errors && errors.password}
                      </p>)
                    )}
                  </div>
                  {/* Confirm Password */}
                  <div>;
                    <label htmlFor="<confirmPassword" className="text-left">;
                      Confirm Password *;
                    </label>;
                    <div className="text-left">;
                      <Lock className="text-left"  />;
                      <inputtype={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData && formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${
                          errors && errors.confirmPassword ? 'border-red-500' : 'border-zion-blue-light'
                        }`}
                        placeholder="Confirm your password"
                       />;
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="text-left"hover": tex t-white transition-colors"
                        {showConfirmPassword ? <EyeOff className="text-left"  /> : <Eye className="text-left"  />}
                      </button>;
                    </div>
                    {errors && errors.confirmPassword && (;
                      <p className="text-left">;
                        <AlertCircle className="text-left"  />}
                        {errors && errors.confirmPassword}
                      </p>)
                    )}
                  </div>
                  {/* Comp Information */}
                  <div className="text-left"md": gri d-cols-2 gap-6">;
                    <div>;
                      <label htmlFor="<comp" className="text-left">;
                        Comp Name;
                      </label>;
                      <div className="text-left">;
                        <Building className="text-left"  />;
                        <inputtype="text"
                          id="comp"
                          name="comp"
                          value={formData && formData.comp}
                          onChange={handleInputChange}
                          className="text-left"focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all"
                          placeholder="Enter comp name"
                         />;
                      </div>
                    </div>
                    <div>;
                      <label htmlFor="<phone" className="text-left">;
                        Phone Number;
                      </label>;
                      <div className="text-left">;
                        <Phone className="text-left"  />,
                        <inputtype="tel"
                          id="phone"
                          name="phone"
                          value={formData && formData.phone}
                          onChange={handleInputChange}
                          className="text-left"focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all"
                          placeholder="Enter phone number"
                         />;
                      </div>
                    </div>
                  </div>
                  {/* Website and Industry */}
                  <div className="text-left"md": gri d-cols-2 gap-6">;
                    <div>;
                      <label htmlFor="<website" className="text-left">;
                        Website;
                      </label>;
                      <div className="text-left">;
                        <Globe className="text-left"  />;
                        <inputtype="url"
                          id="website"
                          name="website"
                          value={formData && formData.website}
                          onChange={handleInputChange}
                          className="text-left"focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all"
                          placeholder="https://yourcomp && yourcomp.com"
                         />;
                      </div>
                    </div>
                    <div>;
                      <label htmlFor="<industry" className="text-left">;
                        Industry;
                      </label>,
                      <select
                        id="industry"
                        name="industry"
                        value={formData && formData.industry}
                        onChange={handleInputChange}
                        className="text-left"focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all"
                        <option value="">Select industry</option>;
                        {industries && industries.map(industry => (}
                          <option key={industry} value={industry} className="text-left">;
                            {industry}
                          </option>)
                        ))}
                      </select>;
                    </div>
                  </div>
                  {/* Use Case */}
                  <div>;
                    <label htmlFor="<useCase" className="text-left">;
                      Primary Use Case;
                    </label>;
                    <select
                      id="useCase"
                      name="useCase"
                      value={formData && formData.useCase}
                      onChange={handleInputChange}
                      className="text-left"focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all"
                      <option value="">Select primary use case</option>;
                      {useCases && useCases.map(useCase => (}
                        <option key={useCase} value={useCase} className="text-left">;
                          {useCase}
                        </option>)
                      ))}
                    </select>;
                  </div>
  {"duration": 0.6}
  "delay": 0.2
}
              className="text-left"
              <div className="text-left"md": p-12">
                <h2 className="text-left">
                  Create Your Account
                </h2>
                <form onSubmit={handleSubmit} className="text-left">
                  {/* Personal Information */}
                  <div className="text-left"md": gri d-cols-2 gap-6">
                    <div>
                      <label htmlFor="<firstName" className="text-left">
                        First Name *
                      </label>
                      <div className="text-left">
                        <User className="text-left"  />
                        <input type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${
                            errors.firstName ? 'border-red-500' : 'border-zion-blue-light'
                          }`}
                          placeholder="Enter your first name"
                         />
                      </div>
                      {errors.firstName && (
                        <p className="text-left">
                          <AlertCircle className="text-left"  />
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="<lastName" className="text-left">
                        Last Name *
                      </label>
                      <div className="text-left">
                        <User className="text-left"  />
                        <input type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${
                            errors.lastName ? 'border-red-500' : 'border-zion-blue-light'
                          }`}
                          placeholder="Enter your last name"
                         />
                      </div>
                      {errors.lastName && (
                        <p className="text-left">
                          <AlertCircle className="text-left"  />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="<email" className="text-left">
                      Email Address *
                    </label>
                    <div className="text-left">
                      <Mail className="text-left"  />
                      <input type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${
                          errors.email ? 'border-red-500' : 'border-zion-blue-light'
                        }`}
                        placeholder="Enter your email address"
                       />
                    </div>
                    {errors.email && (
                      <p className="text-left">
                        <AlertCircle className="text-left"  />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  {/* Password */}
                  <div>
                    <label htmlFor="<password" className="text-left">
                      Password *
                    </label>
                    <div className="text-left">
                      <Lock className="text-left"  />
                      <input type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${
                          errors.password ? 'border-red-500' : 'border-zion-blue-light'
                        }`}
                        placeholder="Create a strong password"
                       />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-left"hover": tex t-white transition-colors"
                        {showPassword ? <EyeOff className="text-left"  /> : <Eye className="text-left"  />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-left">
                        <AlertCircle className="text-left"  />
                        {errors.password}
                      </p>
                    )}
                  </div>
                  {/* Confirm Password */}
                  <div>
                    <label htmlFor="<confirmPassword" className="text-left">
                      Confirm Password *
                    </label>
                    <div className="text-left">
                      <Lock className="text-left"  />
                      <input type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${
                          errors.confirmPassword ? 'border-red-500' : 'border-zion-blue-light'
                        }`}
                        placeholder="Confirm your password"
                       />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="text-left"hover": tex t-white transition-colors"
                        {showConfirmPassword ? <EyeOff className="text-left"  /> : <Eye className="text-left"  />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-left">
                        <AlertCircle className="text-left"  />
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                  {/* Comp Information */}
                  <div className="text-left"md": gri d-cols-2 gap-6">
                    <div>
                      <label htmlFor="<comp" className="text-left">
                        Comp Name
                      </label>
                      <div className="text-left">
                        <Building className="text-left"  />
                        <input type="text"
                          id="comp"
                          name="comp"
                          value={formData.comp}
                          onChange={handleInputChange}
                          className="text-left"focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all"
                          placeholder="Enter comp name"
                         />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="<phone" className="text-left">
                        Phone Number
                      </label>
                      <div className="text-left">
                        <Phone className="text-left"  />
                        <input type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="text-left"focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all"
                          placeholder="Enter phone number"
                         />
                      </div>
                    </div>
                  </div>
                  {/* Website and Industry */}
                  <div className="text-left"md": gri d-cols-2 gap-6">
                    <div>
                      <label htmlFor="<website" className="text-left">
                        Website
                      </label>
                      <div className="text-left">
                        <Globe className="text-left"  />
                        <input type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="text-left"focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all"
                          placeholder="https://yourcomp.com"
                         />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="<industry" className="text-left">
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="text-left"focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all"
                        <option value="">Select industry</option>
                        {industries.map(industry => (
                          <option key={industry} value={industry} className="text-left">
                            {industry}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {/* Use Case */}
                  <div>
                    <label htmlFor="<useCase" className="text-left">
                      Primary Use Case
                    </label>
                    <select
                      id="useCase"
                      name="useCase"
                      value={formData.useCase}
                      onChange={handleInputChange}
                      className="text-left"focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all"
                      <option value="">Select primary use case</option>
                      {useCases.map(useCase => (
                        <option key={useCase} value={useCase} className="text-left">
                          {useCase}
                        </option>
                      ))}
                    </select>
                  </div>
  {"duration": 0 && 0.6}
  "delay": 0 && 0.2
}
              className="text-left"
              <div className="text-left"md": p-12">;
                <h2 className="text-left">;
                  Create Your Account;
                </h1>
                <form onSubmit={handleSubmit} className="text-left">;
                  {/* Personal Information */}
                  <div className="text-left"md": gri d-cols-2 gap-6">;
                    <div>;
                      <label htmlFor="<firstName" className="text-left">;
                        First Name *;
                      </label>;
                      <div className="text-left">;
                        <User className="text-left"  />;
                        <inputtype="text"
                          id="firstName"
                          name="firstName"
                          value={formData && formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${
                            errors && errors.firstName ? 'border-red-500' : 'border-zion-blue-light'
                          }`}
                          placeholder="Enter your first name"
                         />;
                      </div>
                      {errors && errors.firstName && (;
                        <p className="text-left">;
                          <AlertCircle className="text-left"  />}
                          {errors && errors.firstName}
                        </p>)
                      )}
                    </div>
                    <div>;
                      <label htmlFor="<lastName" className="text-left">;
                        Last Name *;
                      </label>;
                      <div className="text-left">;
                        <User className="text-left"  />;
                        <inputtype="text"
                          id="lastName"
                          name="lastName"
                          value={formData && formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${
                            errors && errors.lastName ? 'border-red-500' : 'border-zion-blue-light'
                          }`}
                          placeholder="Enter your last name"
                         />;
                      </div>
                      {errors && errors.lastName && (;
                        <p className="text-left">;
                          <AlertCircle className="text-left"  />}
                          {errors && errors.lastName}
                        </p>)
                      )}
                    </div>
                  </div>
                  {/* Email */}
                  <div>;
                    <label htmlFor="<email" className="text-left">;
                      Email Address *;
                    </label>;
                    <div className="text-left">;
                      <Mail className="text-left"  />;
                      <inputtype="email"
                        id="email"
                        name="email"
                        value={formData && formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${
                          errors && errors.email ? 'border-red-500' : 'border-zion-blue-light'
                        }`}
                        placeholder="Enter your email address"
                       />;
                    </div>
                    {errors && errors.email && (;
                      <p className="text-left">;
                        <AlertCircle className="text-left"  />}
                        {errors && errors.email}
                      </p>)
                    )}
                  </div>
                  {/* Password */}
                  <div>;
                    <label htmlFor="<password" className="text-left">;
                      Password *;
                    </label>;
                    <div className="text-left">;
                      <Lock className="text-left"  />;
                      <inputtype={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData && formData.password}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${
                          errors && errors.password ? 'border-red-500' : 'border-zion-blue-light'
                        }`}
                        placeholder="Create a strong password"
                       />;
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-left"hover": tex t-white transition-colors"
                        {showPassword ? <EyeOff className="text-left"  /> : <Eye className="text-left"  />}
                      </button>;
                    </div>
                    {errors && errors.password && (;
                      <p className="text-left">;
                        <AlertCircle className="text-left"  />}
                        {errors && errors.password}
                      </p>)
                    )}
                  </div>
                  {/* Confirm Password */}
                  <div>;
                    <label htmlFor="<confirmPassword" className="text-left">;
                      Confirm Password *;
                    </label>;
                    <div className="text-left">;
                      <Lock className="text-left"  />;
                      <inputtype={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData && formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${
                          errors && errors.confirmPassword ? 'border-red-500' : 'border-zion-blue-light'
                        }`}
                        placeholder="Confirm your password"
                       />;
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="text-left"hover": tex t-white transition-colors"
                        {showConfirmPassword ? <EyeOff className="text-left"  /> : <Eye className="text-left"  />}
                      </button>;
                    </div>
                    {errors && errors.confirmPassword && (;
                      <p className="text-left">;
                        <AlertCircle className="text-left"  />}
                        {errors && errors.confirmPassword}
                      </p>)
                    )}
                  </div>
                  {/* Comp Information */}
                  <div className="text-left"md": gri d-cols-2 gap-6">;
                    <div>;
                      <label htmlFor="<comp" className="text-left">;
                        Comp Name;
                      </label>;
                      <div className="text-left">;
                        <Building className="text-left"  />;
                        <inputtype="text"
                          id="comp"
                          name="comp"
                          value={formData && formData.comp}
                          onChange={handleInputChange}
                          className="text-left"focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all"
                          placeholder="Enter comp name"
                         />;
                      </div>
                    </div>
                    <div>;
                      <label htmlFor="<phone" className="text-left">;
                        Phone Number;
                      </label>;
                      <div className="text-left">;
                        <Phone className="text-left"  />,
                        <inputtype="tel"
                          id="phone"
                          name="phone"
                          value={formData && formData.phone}
                          onChange={handleInputChange}
                          className="text-left"focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all"
                          placeholder="Enter phone number"
                         />;
                      </div>
                    </div>
                  </div>
                  {/* Website and Industry */}
                  <div className="text-left"md": gri d-cols-2 gap-6">;
                    <div>;
                      <label htmlFor="<website" className="text-left">;
                        Website;
                      </label>;
                      <div className="text-left">;
                        <Globe className="text-left"  />;
                        <inputtype="url"
                          id="website"
                          name="website"
                          value={formData && formData.website}
                          onChange={handleInputChange}
                          className="text-left"focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all"
                          placeholder="https://yourcomp && yourcomp.com"
                         />;
                      </div>
                    </div>
                    <div>;
                      <label htmlFor="<industry" className="text-left">;
                        Industry;
                      </label>,
                      <select
                        id="industry"
                        name="industry"
                        value={formData && formData.industry}
                        onChange={handleInputChange}
                        className="text-left"focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all"
                        <option value="">Select industry</option>;
                        {industries && industries.map(industry => (}
                          <option key={industry} value={industry} className="text-left">;
                            {industry}
                          </option>)
                        ))}
                      </select>;
                    </div>
                  </div>
                  {/* Use Case */}
                  <div>;
                    <label htmlFor="<useCase" className="text-left">;
                      Primary Use Case;
                    </label>;
                    <select
                      id="useCase"
                      name="useCase"
                      value={formData && formData.useCase}
                      onChange={handleInputChange}
                      className="text-left"focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all"
                      <option value="">Select primary use case</option>;
                      {useCases && useCases.map(useCase => (}
                        <option key={useCase} value={useCase} className="text-left">;
                          {useCase}
                        </option>)
                      ))}
                    </select>;
                  </div>
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-left"hover": fro m-zion-cyan-dark hover: t o-zion-purple-dark transition-all duration-300 transform hover: scal e-105 disabled: opacit y-50 disabled: curso r-not-allowed disabled: transfor m-none"
                    {isSubmitting ? (<div className="text-left">;
                        <div className="text-left"></div>
                        Creating Account...)
                      </div>
                    ) : (;
                      <div className="text-left">;
                        <Zap className="text-left"  />)
                        Create Account}
                      </div>
                    )}
                  </button>;
                </form>;
                {/* Additional Info */}
                <div className="text-left">;
                  <p className="text-left">;
                    Already have an account?{' '}
                    <a href="/<login" className="text-left"hover": tex t-zion-cyan-light transition-colors font-medium">;
                      Sign in here;
                    </a>;
                  </p>;
                  <p className="text-left">;
                    By creating an account, you agree to our{' '}
                    <a href="/<terms" className="text-left"hover": tex t-zion-cyan-light transition-colors">;
                      Terms of Service;
                    </a>{' '}
                    and{' '}
                    <a href="/<privacy" className="text-left"hover": tex t-zion-cyan-light transition-colors">;
                      Privacy Policy;
                    </a>;
                  </p>;
                </div>
              </div>
            </motion && motion.div>;
          </div>
        </section>;
        {/* Benefits Section */}
        <section className="text-left">;
          <div className="text-left"sm": p x-6 lg: p x-8">,
            <motion&& motion.div
                      <div className="text-left">
                        <div className="text-left"></div>
                        Creating Account...
                      </div>
                    ) : (
                      <div className="text-left">
                        <Zap className="text-left"  />
                        Create Account
                      </div>
                    )}
                  </button>
                </form>
                {/* Additional Info */}
                <div className="text-left">
                  <p className="text-left">
                    Already have an account?{' '}
                    <a href="/<login" className="text-left"hover": tex t-zion-cyan-light transition-colors font-medium">
                      Sign in here
                    </a>
                  </p>
                  <p className="text-left">
                    By creating an account, you agree to our{' '}
                    <a href="/<terms" className="text-left"hover": tex t-zion-cyan-light transition-colors">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/<privacy" className="text-left"hover": tex t-zion-cyan-light transition-colors">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="text-left">
          <div className="text-left"sm": p x-6 lg: p x-8">
            <motion.div
                      <div className="text-left">;
                        <div className="text-left"></div>
                        Creating Account...;
                      </div>
                    ) : (;
                      <div className="text-left">;
                        <Zap className="text-left"  />;
                        Create Account)
                      </div>
                    )}
                  </button>;
                </form>;
                {/* Additional Info */}
                <div className="text-left">;
                  <p className="text-left">;
                    Already have an account?{' '}
                    <a href="/<login" className="text-left"hover": tex t-zion-cyan-light transition-colors font-medium">;
                      Sign in here;
                    </a>;
                  </p>;
                  <p className="text-left">;
                    By creating an account, you agree to our{' '}
                    <a href="/<terms" className="text-left"hover": tex t-zion-cyan-light transition-colors">;
                      Terms of Service;
                    </a>{' '}
                    and{' '}
                    <a href="/<privacy" className="text-left"hover": tex t-zion-cyan-light transition-colors">;
                      Privacy Policy;
                    </a>;
                  </p>;
                </div>
              </div>
            </motion && motion.div>;
          </div>
        </section>;
        {/* Benefits Section */}
        <section className="text-left">;
          <div className="text-left"sm": p x-6 lg: p x-8">,
            <motion&& motion.div
              initial = {{ opacity: 0}
  "y": 2 0
}
              animate = {{ "opacity": 1}
  "y": 0
}
              transition = {{ "duration": 0 && 0.6}
  "delay": 0 && 0.4
}
              className="text-left"
              <h2 className="text-left"md": tex t-4xl font-bold mb-6 text-white">;
                Why Join Zion Tech Group?;
              </h1>
              <p className="text-left">;
                Get exclusive access to cutting-edge technology solutions and expert support;
              </p>;
            </motion && motion.div>;
            <div className="text-left">;
              <motion&& motion.div
  {"duration": 0.6}
  "delay": 0.4
}
              className="text-left"
              <h2 className="text-left"md": tex t-4xl font-bold mb-6 text-white">
                Why Join Zion Tech Group?
              </h2>
              <p className="text-left">
                Get exclusive access to cutting-edge technology solutions and expert support
              </p>
            </motion.div>
            <div className="text-left">
              <motion.div
  {"duration": 0 && 0.6}
  "delay": 0 && 0.4
}
              className="text-left"
              <h2 className="text-left"md": tex t-4xl font-bold mb-6 text-white">;
                Why Join Zion Tech Group?;
              </h1>
              <p className="text-left">;
                Get exclusive access to cutting-edge technology solutions and expert support;
              </p>;
            </motion && motion.div>;
            <div className="text-left">;
              <motion&& motion.div
                initial = {{ opacity: 0}
  "y": 2 0
}
                animate = {{ "opacity": 1}
  "y": 0
}
                transition = {{ "duration": 0 && 0.6}
  "delay": 0 && 0.6
}
                className="text-left"
                <div className="text-left">;
                  <Shield className="text-left"  />;
                </div>
                <h3 className="text-left">Enterprise Security</h1>
                <p className="text-left">;
                  Access to zero-trust cybersecurity platforms and advanced threat detection systems;
                </p>;
              </motion && motion.div>;
              <motion&& motion.div
  {"duration": 0.6}
  "delay": 0.6
}
                className="text-left"
                <div className="text-left">
                  <Shield className="text-left"  />
                </div>
                <h3 className="text-left">Enterprise Security</h3>
                <p className="text-left">
                  Access to zero-trust cybersecurity platforms and advanced threat detection systems
                </p>
              </motion.div>
              <motion.div
  {"duration": 0 && 0.6}
  "delay": 0 && 0.6
}
                className="text-left"
                <div className="text-left">;
                  <Shield className="text-left"  />;
                </div>
                <h3 className="text-left">Enterprise Security</h1>
                <p className="text-left">;
                  Access to zero-trust cybersecurity platforms and advanced threat detection systems;
                </p>;
              </motion && motion.div>;
              <motion&& motion.div
                initial = {{ "opacity": 0}
  "y": 2 0
}
                animate = {{ "opacity": 1}
  "y": 0
}
                transition = {{ "duration": 0 && 0.6}
  "delay": 0 && 0.8
}
                className="text-left"
                <div className="text-left">;
                  <Brain className="text-left"  />;
                </div>
                <h3 className="text-left">AI Innovation</h1>
                <p className="text-left">;
                  Leverage autonomous AI systems and machine learning platforms for business growth;
                </p>;
              </motion && motion.div>;
              <motion&& motion.div
  {"duration": 0.6}
  "delay": 0.8
}
                className="text-left"
                <div className="text-left">
                  <Brain className="text-left"  />
                </div>
                <h3 className="text-left">AI Innovation</h3>
                <p className="text-left">
                  Leverage autonomous AI systems and machine learning platforms for business growth
                </p>
              </motion.div>
              <motion.div
  {"duration": 0 && 0.6}
  "delay": 0 && 0.8
}
                className="text-left"
                <div className="text-left">;
                  <Brain className="text-left"  />;
                </div>
                <h3 className="text-left">AI Innovation</h1>
                <p className="text-left">;
                  Leverage autonomous AI systems and machine learning platforms for business growth;
                </p>;
              </motion && motion.div>;
              <motion&& motion.div
                initial = {{ "opacity": 0}
  "y": 2 0
}
                animate = {{ "opacity": 1}
  "y": 0
}
                transition = {{ "duration": 0 && 0.6}
  "delay": 1 && 1.0
}
                className="text-left"
                <div className="text-left">;
                  <Cloud className="text-left"  />;
                </div>
                <h3 className="text-left">Cloud Native</h1>
                <p className="text-left">;
                  Scalable cloud infrastructure and DevOps solutions for modern applications;
                </p>;
              </motion && motion.div>;
  {"duration": 0.6}
  "delay": 1.0
}
                className="text-left"
                <div className="text-left">
                  <Cloud className="text-left"  />
                </div>
                <h3 className="text-left">Cloud Native</h3>
                <p className="text-left">
                  Scalable cloud infrastructure and DevOps solutions for modern applications
                </p>
              </motion.div>;
            </div>
          </div>
        </section>;
      </main>;
    </>;
  )
};
import Head from 'next/head.ts' import { motion } from 'framer-motion' import { useState } from 'react' import {User,Mail,Lock,Eye,EyeOff,CheckCircle,AlertCircle,Building,Phone,Globe,Shield,Zap,Brain}Cloud } from 'lucide-react'
}
export default function Signup() {const [formData,setFormData] = useState({ firstName: '',lastName: '',email: '',password: '',confirmPassword: '',comp: '',phone: '',website: '')industry: ''}useCase: '' }) const [showPassword,setShowPassword] = useState(false) const [showConfirmPassword,setShowConfirmPassword] = useState(false) const [isSubmitting,setIsSubmitting] = useState(false) const [errors,setErrors] = useState<Record<string,any>>({}) const industries = [ 'Technology','Healthcare','Finance','Manufacturing','Retail','Education','Government','Non-profit','Other' ] const useCases = [ 'AI & Machine Learning','Cloud Infrastructure','Cybersecurity','Digital Transformation','Data Analytics','IoT Solutions','Micro SaaS Development','Enterprise IT','Other' ] } catch (error) { } catch (error) { } finally {setIsSubmitting(false) const title = 'Sign Up — Zion Tech Group' const description = 'Join Zion Tech Group and unlock access to cutting-edge AI,cloud}and cybersecurity solutions.' return (<> <Helmet> <title>{title}</title> <meta name="description" content={description} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> <link rel="canonical" href="https: {} <meta property="og: titl e" content={title} /> <meta property="og: descriptio n" content={description} /> <meta property="og: ur l" content="https: <meta property="og: typ e" content="website" /> {} <meta name="twitter: car d" content="summary_large_image" /> <meta name="twitter: titl e" content={title} /> <meta name="twitter: descriptio n" content={description} /> </Helmet> <main className="text-left"> {} <section className="text-left"> <div className="text-left"> <div className="text-left">
        <div className="text-left"></div> <div className="text-left"></div> </div> <div className="text-left"> <motion.div initial = {{ opacity: 0}y: 2 0 }} animate = {{ opacity: 1}y: 0 }} transition={{ duration: 0.6 }} className="text-left" <h1 className="text-left"> Join Zion Tech Group </h1> <p className="text-left"> Unlock access to revolutionary AI autonomous systems,quantum computing solutions)and enterprise-grade cybersecurity platforms. </p> <div className="text-left"> <div className="text-left"> <Shield className="text-left" /> <span className="text-left">Enterprise Security< </div> <div className="text-left"> <Brain className="text-left" /> <span className="text-left">AI Innovation< </div> <div className="text-left"> <Cloud className="text-left" /> <span className="text-left">Cloud Native< </div> </div> </motion.div> </div> </section> {} <section className="text-left"> <div className="text-left"> <motion.div initial = {{ opacity: 0}y: 2 0 }} animate = {{ opacity: 1}y: 0 }} transition = {{ duration: 0.6}delay: 0.2 }} className="text-left" <div className="text-left"> <h2 className="text-left"> Create Your Account </h2> <form onSubmit={handleSubmit} className="text-left"> {} <div className="text-left"> <div> <label htmlFor="<firstName" className="text-left"> First Name * </label> <div className="text-left"> <User className="text-left" /> <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.firstName ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your first name" /> </div> {errors.firstName && ( <p className="text-left"> <AlertCircle className="text-left" /> {errors.firstName} </p> )} </div> <div> <label htmlFor="<lastName" className="text-left"> Last Name * </label> <div className="text-left"> <User className="text-left" /> <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.lastName ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your last name" /> </div> {errors.lastName && ( <p className="text-left"> <AlertCircle className="text-left" /> {errors.lastName} </p> )} </div> </div> {} <div> <label htmlFor="<email" className="text-left"> Email Address * </label> <div className="text-left"> <Mail className="text-left" /> <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.email ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your email address" /> </div> {errors.email && ( <p className="text-left"> <AlertCircle className="text-left" /> {errors.email} </p> )} </div> {} <div> <label htmlFor="<password" className="text-left"> Password * </label> <div className="text-left"> <Lock className="text-left" /> <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleInputChange} className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.password ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Create a strong password" /> <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-left" {showPassword ? <EyeOff className="text-left" /> : <Eye className="text-left" />} </button> </div> {errors.password && ( <p className="text-left"> <AlertCircle className="text-left" /> {errors.password} </p> )} </div> {} <div> <label htmlFor="<confirmPassword" className="text-left"> Confirm Password * </label> <div className="text-left"> <Lock className="text-left" /> <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.confirmPassword ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Confirm your password" /> <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-left" {showConfirmPassword ? <EyeOff className="text-left" /> : <Eye className="text-left" />} </button> </div> {errors.confirmPassword && ( <p className="text-left"> <AlertCircle className="text-left" /> {errors.confirmPassword} </p> )} </div> {} <div className="text-left"> <div> <label htmlFor="<comp" className="text-left"> Comp Name </label> <div className="text-left"> <Building className="text-left" /> <input type="text" id="comp" name="comp" value={formData.comp} onChange={handleInputChange} className="text-left" placeholder="Enter comp name" /> </div> </div> <div> <label htmlFor="<phone" className="text-left"> Phone Number </label> <div className="text-left"> <Phone className="text-left" /> <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="text-left" placeholder="Enter phone number" /> </div> </div> </div> {} <div className="text-left"> <div> <label htmlFor="<website" className="text-left"> Website </label> <div className="text-left"> <Globe className="text-left" /> <input type="url" id="website" name="website" value={formData.website} onChange={handleInputChange} className="text-left" placeholder="https: /> </div> </div> <div> <label htmlFor="<industry" className="text-left"> Industry </label> <select id="industry" name="industry" value={formData.industry} onChange={handleInputChange} className="text-left" <option value="">Select industry</option> {industries.map(industry => ( <option key={industry} value={industry} className="text-left"> {industry} </option> ))} </select> </div> </div> {} <div> <label htmlFor="<useCase" className="text-left"> Primary Use Case </label> <select id="useCase" name="useCase" value={formData.useCase} onChange={handleInputChange} className="text-left" <option value="">Select primary use case</option> {useCases.map(useCase => ( <option key={useCase} value={useCase} className="text-left"> {useCase} </option> ))} </select> </div> {} <button type="submit" disabled={isSubmitting} className="text-left" {isSubmitting ? ( <div className="text-left"> <div className="text-left"></div> Creating Account... </div> ) : ( <div className="text-left"> <Zap className="text-left" /> Create Account </div> )} </button> </form> {} <div className="text-left"> <p className="text-left"> Already have an account?{' '} <a href="/<login" className="text-left"> Sign in here </a> </p> <p className="text-left"> By creating an account,you agree to our{' '} <a href="/<terms" className="text-left"> Terms of Service </a>{' '} and{' '} <a href="/<privacy" className="text-left"> Privacy Policy </a> </p> </div> </div> </motion.div> </div> </section> {} <section className="text-left"> <div className="text-left"> <motion.div initial = {{ opacity: 0}y: 2 0 }} animate = {{ opacity: 1}y: 0 }} transition = {{ duration: 0.6}delay: 0.4 }} className="text-left" <h2 className="text-left"> Why Join Zion Tech Group? </h2> <p className="text-left"> Get exclusive access to cutting-edge technology solutions and expert support </p> </motion.div> <div className="text-left"> <motion.div initial = {{ opacity: 0}y: 2 0 }} animate = {{ opacity: 1}y: 0 }} transition = {{ duration: 0.6}delay: 0.6 }} className="text-left" <div className="text-left"> <Shield className="text-left" /> </div> <h3 className="text-left">Enterprise Security</h3> <p className="text-left"> Access to zero-trust cybersecurity platforms and advanced threat detection systems </p> </motion.div> <motion.div initial = {{ opacity: 0}y: 2 0 }} animate = {{ opacity: 1}y: 0 }} transition = {{ duration: 0.6}delay: 0.8 }} className="text-left" <div className="text-left"> <Brain className="text-left" /> </div> <h3 className="text-left">AI Innovation</h3> <p className="text-left"> Leverage autonomous AI systems and machine learning platforms for business growth </p> </motion.div> <motion.div initial = {{ opacity: 0}y: 2 0 }} animate = {{ opacity: 1}y: 0 }} transition = {{ duration: 0.6}delay: 1.0 }} className="text-left" <div className="text-left"> <Cloud className="text-left" /> </div> <h3 className="text-left">Cloud Native</h3> <p className="text-left"> Scalable cloud infrastructure and DevOps solutions for modern applications </p> </motion.div> </div> </div> </section>; </main>; </>; )};
}
export default function Signup() {const [formData,setFormData] = useState({ firstName: '',lastName: '',email: '',password: '',confirmPassword: '',comp: '',phone: '',website: '')industry: ''}useCase: '' }) const [showPassword,setShowPassword] = useState(false) const [showConfirmPassword,setShowConfirmPassword] = useState(false) const [isSubmitting,setIsSubmitting] = useState(false) const [errors,setErrors] = useState<Record<string,any>>({}) const industries = [ 'Technology','Healthcare','Finance','Manufacturing','Retail','Education','Government','Non-profit','Other' ] const useCases = [ 'AI & Machine Learning','Cloud Infrastructure','Cybersecurity','Digital Transformation','Data Analytics','IoT Solutions','Micro SaaS Development','Enterprise IT','Other' ] } catch (error) { } catch (error) { } finally {setIsSubmitting(false) const title = 'Sign Up — Zion Tech Group' const description = 'Join Zion Tech Group and unlock access to cutting-edge AI,cloud}and cybersecurity solutions.' return (<> <Helmet> <title>{title}</title> <meta name="description" content={description} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> <link rel="canonical" href="https: {} <meta property="og: titl e" content={title} /> <meta property="og: descriptio n" content={description} /> <meta property="og: ur l" content="https: <meta property="og: typ e" content="website" /> {} <meta name="twitter: car d" content="summary_large_image" /> <meta name="twitter: titl e" content={title} /> <meta name="twitter: descriptio n" content={description} /> </Helmet> <main className="text-left"> {} <section className="text-left"> <div className="text-left"> <div className="text-left">
        <div className="text-left"></div> <div className="text-left"></div> </div> <div className="text-left"> <motion.div initial = {{ opacity: 0}y: 2 0 } animate = {{ opacity: 1}y: 0 } transition={ duration: 0.6 } className="text-left" <h1 className="text-left"> Join Zion Tech Group </h1> <p className="text-left"> Unlock access to revolutionary AI autonomous systems,quantum computing solutions)and enterprise-grade cybersecurity platforms. </p> <div className="text-left"> <div className="text-left"> <Shield className="text-left" /> <span className="text-left">Enterprise Security< </div> <div className="text-left"> <Brain className="text-left" /> <span className="text-left">AI Innovation< </div> <div className="text-left"> <Cloud className="text-left" /> <span className="text-left">Cloud Native< </div> </div> </motion.div> </div> </section> {} <section className="text-left"> <div className="text-left"> <motion.div initial = {{ opacity: 0}y: 2 0 } animate = {{ opacity: 1}y: 0 } transition = {{ duration: 0.6}delay: 0.2 } className="text-left" <div className="text-left"> <h2 className="text-left"> Create Your Account </h2> <form onSubmit={handleSubmit} className="text-left"> {} <div className="text-left"> <div> <label htmlFor="<firstName" className="text-left"> First Name * </label> <div className="text-left"> <User className="text-left" /> <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.firstName ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your first name" /> </div> {errors.firstName && ( <p className="text-left"> <AlertCircle className="text-left" /> {errors.firstName} </p> )} </div> <div> <label htmlFor="<lastName" className="text-left"> Last Name * </label> <div className="text-left"> <User className="text-left" /> <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.lastName ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your last name" /> </div> {errors.lastName && ( <p className="text-left"> <AlertCircle className="text-left" /> {errors.lastName} </p> )} </div> </div> {} <div> <label htmlFor="<email" className="text-left"> Email Address * </label> <div className="text-left"> <Mail className="text-left" /> <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.email ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your email address" /> </div> {errors.email && ( <p className="text-left"> <AlertCircle className="text-left" /> {errors.email} </p> )} </div> {} <div> <label htmlFor="<password" className="text-left"> Password * </label> <div className="text-left"> <Lock className="text-left" /> <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleInputChange} className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.password ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Create a strong password" /> <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-left" {showPassword ? <EyeOff className="text-left" /> : <Eye className="text-left" />} </button> </div> {errors.password && ( <p className="text-left"> <AlertCircle className="text-left" /> {errors.password} </p> )} </div> {} <div> <label htmlFor="<confirmPassword" className="text-left"> Confirm Password * </label> <div className="text-left"> <Lock className="text-left" /> <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.confirmPassword ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Confirm your password" /> <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-left" {showConfirmPassword ? <EyeOff className="text-left" /> : <Eye className="text-left" />} </button> </div> {errors.confirmPassword && ( <p className="text-left"> <AlertCircle className="text-left" /> {errors.confirmPassword} </p> )} </div> {} <div className="text-left"> <div> <label htmlFor="<comp" className="text-left"> Comp Name </label> <div className="text-left"> <Building className="text-left" /> <input type="text" id="comp" name="comp" value={formData.comp} onChange={handleInputChange} className="text-left" placeholder="Enter comp name" /> </div> </div> <div> <label htmlFor="<phone" className="text-left"> Phone Number </label> <div className="text-left"> <Phone className="text-left" /> <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="text-left" placeholder="Enter phone number" /> </div> </div> </div> {} <div className="text-left"> <div> <label htmlFor="<website" className="text-left"> Website </label> <div className="text-left"> <Globe className="text-left" /> <input type="url" id="website" name="website" value={formData.website} onChange={handleInputChange} className="text-left" placeholder="https: /> </div> </div> <div> <label htmlFor="<industry" className="text-left"> Industry </label> <select id="industry" name="industry" value={formData.industry} onChange={handleInputChange} className="text-left" <option value="">Select industry</option> {industries.map(industry => ( <option key={industry} value={industry} className="text-left"> {industry} </option> ))} </select> </div> </div> {} <div> <label htmlFor="<useCase" className="text-left"> Primary Use Case </label> <select id="useCase" name="useCase" value={formData.useCase} onChange={handleInputChange} className="text-left" <option value="">Select primary use case</option> {useCases.map(useCase => ( <option key={useCase} value={useCase} className="text-left"> {useCase} </option> ))} </select> </div> {} <button type="submit" disabled={isSubmitting} className="text-left" {isSubmitting ? ( <div className="text-left"> <div className="text-left"></div> Creating Account... </div> ) : ( <div className="text-left"> <Zap className="text-left" /> Create Account </div> )} </button> </form> {} <div className="text-left"> <p className="text-left"> Already have an account?{' '} <a href="/<login" className="text-left"> Sign in here </a> </p> <p className="text-left"> By creating an account,you agree to our{' '} <a href="/<terms" className="text-left"> Terms of Service </a>{' '} and{' '} <a href="/<privacy" className="text-left"> Privacy Policy </a> </p> </div> </div> </motion.div> </div> </section> {} <section className="text-left"> <div className="text-left"> <motion.div initial = {{ opacity: 0}y: 2 0 } animate = {{ opacity: 1}y: 0 } transition = {{ duration: 0.6}delay: 0.4 } className="text-left" <h2 className="text-left"> Why Join Zion Tech Group? </h2> <p className="text-left"> Get exclusive access to cutting-edge technology solutions and expert support </p> </motion.div> <div className="text-left"> <motion.div initial = {{ opacity: 0}y: 2 0 } animate = {{ opacity: 1}y: 0 } transition = {{ duration: 0.6}delay: 0.6 } className="text-left" <div className="text-left"> <Shield className="text-left" /> </div> <h3 className="text-left">Enterprise Security</h3> <p className="text-left"> Access to zero-trust cybersecurity platforms and advanced threat detection systems </p> </motion.div> <motion.div initial = {{ opacity: 0}y: 2 0 } animate = {{ opacity: 1}y: 0 } transition = {{ duration: 0.6}delay: 0.8 } className="text-left" <div className="text-left"> <Brain className="text-left" /> </div> <h3 className="text-left">AI Innovation</h3> <p className="text-left"> Leverage autonomous AI systems and machine learning platforms for business growth </p> </motion.div> <motion.div initial = {{ opacity: 0}y: 2 0 } animate = {{ opacity: 1}y: 0 } transition = {{ duration: 0.6}delay: 1.0 } className="text-left" <div className="text-left"> <Cloud className="text-left" /> </div> <h3 className="text-left">Cloud Native</h3> <p className="text-left"> Scalable cloud infrastructure and DevOps solutions for modern applications </p> </motion.div> </div> </div> </section>; </main>; </>; )};
import Head from 'next/head.ts'' import { motion } from 'framer-motion'' import { useState } from 'react'' import Head from 'next/head.ts'' import { motion } from 'framer-motion'' import { useState } from 'react' import {User, Mail, Lock, Eye, EyeOff, CheckCircle, AlertCircle, Building, Phone, Globe, Shield, Zap, Brain} Cloud' } from 'lucide-react' } export default function Signup() {const [formData, setFormData] = useState({' "firstName": '',' "lastName": '',' "email": '',' "password": '',' "confirmPassword": '',' "comp": '',' "phone": '',' "website": '')' "industry": ''}' "useCase": '' }) const [showPassword, setShowPassword] = useState(false) const [showConfirmPassword, setShowConfirmPassword] = useState(false) const [isSubmitting, setIsSubmitting] = useState(false) const [errors, setErrors] = useState<Record<string, any>>({})' const industries = ['Technology',' 'Healthcare',' 'Finance',' 'Manufacturing',' 'Retail',' 'Education',' 'Government',' 'Non-profit',' 'Other' ]' const useCases = ['AI & Machine Learning',' 'Cloud Infrastructure',' 'Cybersecurity',' 'Digital Transformation',' 'Data Analytics',' 'IoT Solutions',' 'Micro SaaS Development',' 'Enterprise IT',' 'Other' ] // // // // // // // } catch (error) {' // // // // // // // console.error('Signup "error": '} error) // // // // } catch (error) {' // // // // console.error('Signup "error": '} error) } finally {setIsSubmitting(false)' const title = 'Sign Up — Zion Tech Group'' const description = 'Join Zion Tech Group and unlock access to cutting-edge AI} cloud; and cybersecurity solutions.' return (<> <Helmet> <title>{title}</title> <meta name="description" content={description} /> <meta name="viewport" content="width=device-width) initial-scale=1" /> <link rel="canonical" href=""https": //ziontechgroup.com/signup" /> {/* Open Graph */} <meta property=""og": titl e" content={title} /> <meta property=""og": descriptio n" content={description} /> <meta property=""og": ur l" content="https://ziontechgroup.com/signup" /> <meta property="og: typ e" content="website" /> {/* Twitter */} <meta name=""twitter": car d" content="summary_large_image" /> <meta name="twitter: titl e" content={title} /> <meta name=""twitter": descriptio n" content={description} /> </Helmet> <main className="text-left" > {/* Hero Section */} <section className="text-left" > <div className="text-left" > <div></div> <div></div> <div></div> </div> <div className="text-left" sm": p x-6 lg: p x-8 relative z-10"> <motion.div ' import Head from 'next/head ,' import { motion } from 'framer-motion'' import { useState } from 'react'' import {User, Mail, Lock, Eye, EyeOff, CheckCircle, AlertCircle, Building, Phone, Globe, Shield) Zap} Brain; Cloud } from 'lucide-react' export default function Signup() {; const [formData, setFormData] = useState({;' "firstName": '',;' "lastName": '',;' "email": '',;' "password": '',;' "confirmPassword": '',;' "comp": '',;' "phone": '',)' "website": '')}' "industry": ''};' "useCase": ''; }); const [showPassword, setShowPassword] = useState(false); const [showConfirmPassword, setShowConfirmPassword] = useState(false); const [isSubmitting, setIsSubmitting] = useState(false); const [errors, setErrors] = useState<Record<string, any>>({});' const industries = ['Technology',;' 'Healthcare',;' 'Finance',;' 'Manufacturing',;' 'Retail',;' 'Education',;' 'Government',;' 'Non-profit',;' 'Other' ];' const useCases = ['AI & Machine Learning',;' 'Cloud Infrastructure',;' 'Cybersecurity',;' 'Digital Transformation',;' 'Data Analytics',;' 'IoT Solutions',;' 'Micro SaaS Development',;' 'Enterprise IT',;' 'Other' ]; // // // // // // // ; } catch (error) {;' // // // // // // // console && console.error('Signup "error": '} error); // // // // ; } catch (error) {;' // // // // console && console.error('Signup "error": '} error); } finally {; setIsSubmitting(false)}' const title = 'Sign Up — Zion Tech Group'' const description = 'Join Zion Tech Group and unlock access to cutting-edge AI, cloud} and cybersecurity solutions.' return (<>; <Helmet>; <title>{title}</title>; <meta name="description" content={description} />; <meta name="viewport" content="width=device-width, initial-scale=1" />; <link rel="canonical" href=""https": //ziontechgroup && ziontechgroup.com/signup" />; {/* Open Graph */} <meta property=""og": titl e" content={title} />; <meta property=""og": descriptio n" content={description} />; <meta property=""og": ur l" content="https: //ziontechgroup && ziontechgroup.com/signup" />; <meta property="og: typ e" content="website" />, {/* Twitter */} <meta name=""twitter": car d" content="summary_large_image" />; <meta name="twitter: titl e" content={title} />; <meta name=""twitter": descriptio n" content={description} />; </Helmet>; <main className="text-left" >; {/* Hero Section */} <section className="text-left" >; <div className="text-left" >; <div></div> <div></div> <div></div> </div> <div className="text-left" sm": p x-6 lg: p x-8 relative z-10">, <motion&& motion.div return ( <> <Helmet> <title>{title}</title> <meta name="description" content={description} /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <link rel="canonical" href=""https": //ziontechgroup.com/signup" /> {/* Open Graph */} <meta property=""og": titl e" content={title} /> <meta property=""og": descriptio n" content={description} /> <meta property=""og": ur l" content="https://ziontechgroup.com/signup" /> <meta property="og: typ e" content="website" /> {/* Twitter */} <meta name=""twitter": car d" content="summary_large_image" /> <meta name="twitter: titl e" content={title} /> <meta name=""twitter": descriptio n" content={description} /> </Helmet> <main className="text-left" > {/* Hero Section */} <section className="text-left" > <div className="text-left" > <div></div> <div></div> <div></div> </div> <div className="text-left" sm": p x-6 lg: p x-8 relative z-10"> <motion.div initial = {{ opacity: 0} "y": 2 0 } animate = {{ "opacity": 1} "y": 0 } transition={ "duration": 0 && 0.6 } className="text-left" <h1 className="text-left"md": tex t-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">; Join Zion Tech Group; </h1> <p className="text-left" >; Unlock access to revolutionary AI autonomous systems, quantum computing solutions,; and enterprise-grade cybersecurity platforms.; </p>; <div className="text-left" >; <div className="text-left" >; <Shield className="text-left" />; <span className="text-left" >Enterprise Security<; </div> <div className="text-left" >; <Brain className="text-left" />; <span className="text-left" >AI Innovation<; </div> <div className="text-left" >; <Cloud className="text-left" />; <span className="text-left" >Cloud Native<; </div> </div> </motion && motion.div>; </div> </section>; {/* Signup Form Section */} <section className="text-left" >; <div className="text-left" sm": p x-6 lg: p x-8">, <motion&& motion.div transition={ "duration": 0.6 } className="text-left" <h1 className="text-left"md": tex t-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"> Join Zion Tech Group </h1> <p className="text-left" > Unlock access to revolutionary AI autonomous systems, quantum computing solutions, and enterprise-grade cybersecurity platforms. </p> <div className="text-left" > <div className="text-left" > <Shield className="text-left" /> <span className="text-left" >Enterprise Security< </div> <div className="text-left" > <Brain className="text-left" /> <span className="text-left" >AI Innovation< </div> <div className="text-left" > <Cloud className="text-left" /> <span className="text-left" >Cloud Native< </div> </div> </motion.div> </div> </section> {/* Signup Form Section */} <section className="text-left" > <div className="text-left" sm": p x-6 lg: p x-8"> <motion.div transition={ "duration": 0 && 0.6 } className="text-left" <h1 className="text-left"md": tex t-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">; Join Zion Tech Group; </h1> <p className="text-left" >; Unlock access to revolutionary AI autonomous systems, quantum computing solutions,; and enterprise-grade cybersecurity platforms.; </p>; <div className="text-left" >; <div className="text-left" >; <Shield className="text-left" />; <span className="text-left" >Enterprise Security<; </div> <div className="text-left" >; <Brain className="text-left" />; <span className="text-left" >AI Innovation<; </div> <div className="text-left" >; <Cloud className="text-left" />; <span className="text-left" >Cloud Native<; </div> </div> </motion && motion.div>; </div> </section>; {/* Signup Form Section */} <section className="text-left" >) <div className="text-left" sm": p x-6 lg: p x-8">) <motion&& motion.div initial = {{ opacity: 0} "y": 2 0 } animate = {{ "opacity": 1} "y": 0 } transition = {{ "duration": 0 && 0.6} "delay": 0 && 0.2 } className="text-left" <div className="text-left"md": p-12">; <h2 className="text-left" >; Create Your Account; </h1> <form onSubmit={handleSubmit} className="text-left" >; {/* Personal Information */} <div className="text-left" md": gri d-cols-2 gap-6">; <div>; <label htmlFor="<firstName" className="text-left" >; First Name *; </label>; <div className="text-left" >; <User className="text-left" />; <inputtype="text" id="firstName" name="firstName" value={formData && formData.firstName} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${' errors && errors.firstName ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your first name" />; </div> {errors && errors.firstName && (; <p className="text-left" >; <AlertCircle className="text-left" />} {errors && errors.firstName} </p>) )} </div> <div>; <label htmlFor="<lastName" className="text-left" >; Last Name *; </label>; <div className="text-left" >; <User className="text-left" />; <inputtype="text" id="lastName" name="lastName" value={formData && formData.lastName} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${' errors && errors.lastName ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your last name" />; </div> {errors && errors.lastName && (; <p className="text-left" >; <AlertCircle className="text-left" />} {errors && errors.lastName} </p>) )} </div> </div> {/* Email */} <div>; <label htmlFor="<email" className="text-left" >; Email Address *; </label>; <div className="text-left" >; <Mail className="text-left" />; <inputtype="email" id="email" name="email" value={formData && formData.email} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${' errors && errors.email ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your email address" />; </div> {errors && errors.email && (; <p className="text-left" >; <AlertCircle className="text-left" />} {errors && errors.email} </p>) )} </div> {/* Password */} <div>; <label htmlFor="<password" className="text-left" >; Password *; </label>; <div className="text-left" >; <Lock className="text-left" />;' <inputtype={showPassword ? 'text' : 'password'} id="password" name="password" value={formData && formData.password} onChange={handleInputChange} className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${' errors && errors.password ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Create a strong password" />; <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-left" hover": tex t-white transition-colors" {showPassword ? <EyeOff className="text-left" /> : <Eye className="text-left" />} </button>; </div> {errors && errors.password && (; <p className="text-left" >; <AlertCircle className="text-left" />} {errors && errors.password} </p>) )} </div> {/* Confirm Password */} <div>; <label htmlFor="<confirmPassword" className="text-left" >; Confirm Password *; </label>; <div className="text-left" >; <Lock className="text-left" />;' <inputtype={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" value={formData && formData.confirmPassword} onChange={handleInputChange} className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${' errors && errors.confirmPassword ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Confirm your password" />; <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-left" hover": tex t-white transition-colors" {showConfirmPassword ? <EyeOff className="text-left" /> : <Eye className="text-left" />} </button>; </div> {errors && errors.confirmPassword && (; <p className="text-left" >; <AlertCircle className="text-left" />} {errors && errors.confirmPassword} </p>) )} </div> {/* Comp Information */} <div className="text-left" md": gri d-cols-2 gap-6">; <div>; <label htmlFor="<comp" className="text-left" >; Comp Name; </label>; <div className="text-left" >; <Building className="text-left" />; <inputtype="text" id="comp" name="comp" value={formData && formData.comp} onChange={handleInputChange} className="text-left" focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all" placeholder="Enter comp name" />; </div> </div> <div>; <label htmlFor="<phone" className="text-left" >; Phone Number; </label>; <div className="text-left" >; <Phone className="text-left" />, <inputtype="tel" id="phone" name="phone" value={formData && formData.phone} onChange={handleInputChange} className="text-left" focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all" placeholder="Enter phone number" />; </div> </div> </div> {/* Website and Industry */} <div className="text-left" md": gri d-cols-2 gap-6">; <div>; <label htmlFor="<website" className="text-left" >; Website; </label>; <div className="text-left" >; <Globe className="text-left" />; <inputtype="url" id="website" name="website" value={formData && formData.website} onChange={handleInputChange} className="text-left" focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all" placeholder="https://yourcomp && yourcomp.com" />; </div> </div> <div>; <label htmlFor="<industry" className="text-left" >; Industry; </label>, <select id="industry" name="industry" value={formData && formData.industry} onChange={handleInputChange} className="text-left" focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all" <option value="">Select industry</option>; {industries && industries.map(industry => (} <option key={industry} value={industry} className="text-left" >; {industry} </option>) ))} </select>; </div> </div> {/* Use Case */} <div>; <label htmlFor="<useCase" className="text-left" >; Primary Use Case; </label>; <select id="useCase" name="useCase" value={formData && formData.useCase} onChange={handleInputChange} className="text-left" focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all" <option value="">Select primary use case</option>; {useCases && useCases.map(useCase => (} <option key={useCase} value={useCase} className="text-left" >; {useCase} </option>) ))} </select>; </div> {"duration": 0.6} "delay": 0.2 } className="text-left" <div className="text-left"md": p-12"> <h2 className="text-left" > Create Your Account </h2> <form onSubmit={handleSubmit} className="text-left" > {/* Personal Information */} <div className="text-left" md": gri d-cols-2 gap-6"> <div> <label htmlFor="<firstName" className="text-left" > First Name * </label> <div className="text-left" > <User className="text-left" /> <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${' errors.firstName ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your first name" /> </div> {errors.firstName && ( <p className="text-left" > <AlertCircle className="text-left" /> {errors.firstName} </p> )} </div> <div> <label htmlFor="<lastName" className="text-left" > Last Name * </label> <div className="text-left" > <User className="text-left" /> <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${' errors.lastName ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your last name" /> </div> {errors.lastName && ( <p className="text-left" > <AlertCircle className="text-left" /> {errors.lastName} </p> )} </div> </div> {/* Email */} <div> <label htmlFor="<email" className="text-left" > Email Address * </label> <div className="text-left" > <Mail className="text-left" /> <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${' errors.email ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your email address" /> </div> {errors.email && ( <p className="text-left" > <AlertCircle className="text-left" /> {errors.email} </p> )} </div> {/* Password */} <div> <label htmlFor="<password" className="text-left" > Password * </label> <div className="text-left" > <Lock className="text-left" />' <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleInputChange} className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${' errors.password ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Create a strong password" /> <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-left" hover": tex t-white transition-colors" {showPassword ? <EyeOff className="text-left" /> : <Eye className="text-left" />} </button> </div> {errors.password && ( <p className="text-left" > <AlertCircle className="text-left" /> {errors.password} </p> )} </div> {/* Confirm Password */} <div> <label htmlFor="<confirmPassword" className="text-left" > Confirm Password * </label> <div className="text-left" > <Lock className="text-left" />' <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${' errors.confirmPassword ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Confirm your password" /> <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-left" hover": tex t-white transition-colors" {showConfirmPassword ? <EyeOff className="text-left" /> : <Eye className="text-left" />} </button> </div> {errors.confirmPassword && ( <p className="text-left" > <AlertCircle className="text-left" /> {errors.confirmPassword} </p> )} </div> {/* Comp Information */} <div className="text-left" md": gri d-cols-2 gap-6"> <div> <label htmlFor="<comp" className="text-left" > Comp Name </label> <div className="text-left" > <Building className="text-left" /> <input type="text" id="comp" name="comp" value={formData.comp} onChange={handleInputChange} className="text-left" focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all" placeholder="Enter comp name" /> </div> </div> <div> <label htmlFor="<phone" className="text-left" > Phone Number </label> <div className="text-left" > <Phone className="text-left" /> <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="text-left" focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all" placeholder="Enter phone number" /> </div> </div> </div> {/* Website and Industry */} <div className="text-left" md": gri d-cols-2 gap-6"> <div> <label htmlFor="<website" className="text-left" > Website </label> <div className="text-left" > <Globe className="text-left" /> <input type="url" id="website" name="website" value={formData.website} onChange={handleInputChange} className="text-left" focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all" placeholder="https://yourcomp.com" /> </div> </div> <div> <label htmlFor="<industry" className="text-left" > Industry </label> <select id="industry" name="industry" value={formData.industry} onChange={handleInputChange} className="text-left" focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all" <option value="">Select industry</option> {industries.map(industry => ( <option key={industry} value={industry} className="text-left" > {industry} </option> ))} </select> </div> </div> {/* Use Case */} <div> <label htmlFor="<useCase" className="text-left" > Primary Use Case </label> <select id="useCase" name="useCase" value={formData.useCase} onChange={handleInputChange} className="text-left" focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all" <option value="">Select primary use case</option> {useCases.map(useCase => ( <option key={useCase} value={useCase} className="text-left" > {useCase} </option> ))} </select> </div> {"duration": 0 && 0.6} "delay": 0 && 0.2 } className="text-left" <div className="text-left"md": p-12">; <h2 className="text-left" >; Create Your Account; </h1> <form onSubmit={handleSubmit} className="text-left" >; {/* Personal Information */} <div className="text-left" md": gri d-cols-2 gap-6">; <div>; <label htmlFor="<firstName" className="text-left" >; First Name *; </label>; <div className="text-left" >; <User className="text-left" />; <inputtype="text" id="firstName" name="firstName" value={formData && formData.firstName} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${' errors && errors.firstName ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your first name" />; </div> {errors && errors.firstName && (; <p className="text-left" >; <AlertCircle className="text-left" />} {errors && errors.firstName} </p>) )} </div> <div>; <label htmlFor="<lastName" className="text-left" >; Last Name *; </label>; <div className="text-left" >; <User className="text-left" />; <inputtype="text" id="lastName" name="lastName" value={formData && formData.lastName} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${' errors && errors.lastName ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your last name" />; </div> {errors && errors.lastName && (; <p className="text-left" >; <AlertCircle className="text-left" />} {errors && errors.lastName} </p>) )} </div> </div> {/* Email */} <div>; <label htmlFor="<email" className="text-left" >; Email Address *; </label>; <div className="text-left" >; <Mail className="text-left" />; <inputtype="email" id="email" name="email" value={formData && formData.email} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${' errors && errors.email ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your email address" />; </div> {errors && errors.email && (; <p className="text-left" >; <AlertCircle className="text-left" />} {errors && errors.email} </p>) )} </div> {/* Password */} <div>; <label htmlFor="<password" className="text-left" >; Password *; </label>; <div className="text-left" >; <Lock className="text-left" />;' <inputtype={showPassword ? 'text' : 'password'} id="password" name="password" value={formData && formData.password} onChange={handleInputChange} className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${' errors && errors.password ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Create a strong password" />; <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-left" hover": tex t-white transition-colors" {showPassword ? <EyeOff className="text-left" /> : <Eye className="text-left" />} </button>; </div> {errors && errors.password && (; <p className="text-left" >; <AlertCircle className="text-left" />} {errors && errors.password} </p>) )} </div> {/* Confirm Password */} <div>; <label htmlFor="<confirmPassword" className="text-left" >; Confirm Password *; </label>; <div className="text-left" >; <Lock className="text-left" />;' <inputtype={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" value={formData && formData.confirmPassword} onChange={handleInputChange} className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light "focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${' errors && errors.confirmPassword ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Confirm your password" />; <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-left" hover": tex t-white transition-colors" {showConfirmPassword ? <EyeOff className="text-left" /> : <Eye className="text-left" />} </button>; </div> {errors && errors.confirmPassword && (; <p className="text-left" >; <AlertCircle className="text-left" />} {errors && errors.confirmPassword} </p>) )} </div> {/* Comp Information */} <div className="text-left" md": gri d-cols-2 gap-6">; <div>; <label htmlFor="<comp" className="text-left" >; Comp Name; </label>; <div className="text-left" >; <Building className="text-left" />; <inputtype="text" id="comp" name="comp" value={formData && formData.comp} onChange={handleInputChange} className="text-left" focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all" placeholder="Enter comp name" />; </div> </div> <div>; <label htmlFor="<phone" className="text-left" >; Phone Number; </label>; <div className="text-left" >; <Phone className="text-left" />, <inputtype="tel" id="phone" name="phone" value={formData && formData.phone} onChange={handleInputChange} className="text-left" focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all" placeholder="Enter phone number" />; </div> </div> </div> {/* Website and Industry */} <div className="text-left" md": gri d-cols-2 gap-6">; <div>; <label htmlFor="<website" className="text-left" >; Website; </label>; <div className="text-left" >; <Globe className="text-left" />; <inputtype="url" id="website" name="website" value={formData && formData.website} onChange={handleInputChange} className="text-left" focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all" placeholder="https://yourcomp && yourcomp.com" />; </div> </div> <div>; <label htmlFor="<industry" className="text-left" >; Industry; </label>, <select id="industry" name="industry" value={formData && formData.industry} onChange={handleInputChange} className="text-left" focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all" <option value="">Select industry</option>; {industries && industries.map(industry => (} <option key={industry} value={industry} className="text-left" >; {industry} </option>) ))} </select>; </div> </div> {/* Use Case */} <div>; <label htmlFor="<useCase" className="text-left" >; Primary Use Case; </label>; <select id="useCase" name="useCase" value={formData && formData.useCase} onChange={handleInputChange} className="text-left" focus": outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all" <option value="">Select primary use case</option>; {useCases && useCases.map(useCase => (} <option key={useCase} value={useCase} className="text-left" >; {useCase} </option>) ))} </select>; </div> {/* Submit Button */} <button type="submit" disabled={isSubmitting} className="text-left" hover": fro m-zion-cyan-dark hover: t o-zion-purple-dark transition-all duration-300 transform hover: scal e-105 disabled: opacit y-50 disabled: curso r-not-allowed disabled: transfor m-none" {isSubmitting ? (<div className="text-left">; <div></div> Creating Account...) </div> ) : (; <div className="text-left" >; <Zap className="text-left" />) Create Account} </div> )} </button>; </form>; {/* Additional Info */} <div className="text-left" >; <p className="text-left" >;' Already have an account?{' '} <a href="/<login" className="text-left" hover": tex t-zion-cyan-light transition-colors font-medium">; Sign in here; </a>; </p>; <p className="text-left" >;' By creating an account, you agree to our{' '} <a href="/<terms" className="text-left" hover": tex t-zion-cyan-light transition-colors">; Terms of Service;' </a>{' '}' and{' '} <a href="/<privacy" className="text-left" hover": tex t-zion-cyan-light transition-colors">; Privacy Policy; </a>; </p>; </div> </div> </motion && motion.div>; </div> </section>; {/* Benefits Section */} <section className="text-left" >; <div className="text-left" sm": p x-6 lg: p x-8">, <motion&& motion.div <div className="text-left" > <div></div> Creating Account... </div> ) : ( <div className="text-left" > <Zap className="text-left" /> Create Account </div> )} </button> </form> {/* Additional Info */} <div className="text-left" > <p className="text-left" >' Already have an account?{' '} <a href="/<login" className="text-left" hover": tex t-zion-cyan-light transition-colors font-medium"> Sign in here </a> </p> <p className="text-left" >' By creating an account, you agree to our{' '} <a href="/<terms" className="text-left" hover": tex t-zion-cyan-light transition-colors"> Terms of Service' </a>{' '}' and{' '} <a href="/<privacy" className="text-left" hover": tex t-zion-cyan-light transition-colors"> Privacy Policy </a> </p> </div> </div> </motion.div> </div> </section> {/* Benefits Section */} <section className="text-left" > <div className="text-left" sm": p x-6 lg: p x-8"> <motion.div <div className="text-left" >; <div></div> Creating Account...; </div> ) : (; <div className="text-left" >; <Zap className="text-left" />; Create Account) </div> )} </button>; </form>; {/* Additional Info */} <div className="text-left" >; <p className="text-left" >;' Already have an account?{' '} <a href="/<login" className="text-left" hover": tex t-zion-cyan-light transition-colors font-medium">; Sign in here; </a>; </p>; <p className="text-left" >;' By creating an account, you agree to our{' '} <a href="/<terms" className="text-left" hover": tex t-zion-cyan-light transition-colors">; Terms of Service;' </a>{' '}' and{' '} <a href="/<privacy" className="text-left" hover": tex t-zion-cyan-light transition-colors">; Privacy Policy; </a>; </p>; </div> </div> </motion && motion.div>; </div> </section>; {/* Benefits Section */} <section className="text-left" >; <div className="text-left" sm": p x-6 lg: p x-8">, <motion&& motion.div initial = {{ opacity: 0} "y": 2 0 } animate = {{ "opacity": 1} "y": 0 } transition = {{ "duration": 0 && 0.6} "delay": 0 && 0.4 } className="text-left" <h2 className="text-left"md": tex t-4xl font-bold mb-6 text-white">; Why Join Zion Tech Group?; </h1> <p className="text-left" >; Get exclusive access to cutting-edge technology solutions and expert support; </p>; </motion && motion.div>; <div className="text-left" >; <motion&& motion.div {"duration": 0.6} "delay": 0.4 } className="text-left" <h2 className="text-left"md": tex t-4xl font-bold mb-6 text-white"> Why Join Zion Tech Group? </h2> <p className="text-left" > Get exclusive access to cutting-edge technology solutions and expert support </p> </motion.div> <div className="text-left" > <motion.div {"duration": 0 && 0.6} "delay": 0 && 0.4 } className="text-left" <h2 className="text-left"md": tex t-4xl font-bold mb-6 text-white">; Why Join Zion Tech Group?; </h1> <p className="text-left" >; Get exclusive access to cutting-edge technology solutions and expert support; </p>; </motion && motion.div>; <div className="text-left" >; <motion&& motion.div initial = {{ opacity: 0} "y": 2 0 } animate = {{ "opacity": 1} "y": 0 } transition = {{ "duration": 0 && 0.6} "delay": 0 && 0.6 } className="text-left" <div className="text-left">; <Shield className="text-left" />; </div> <h3 className="text-left" >Enterprise Security</h1> <p className="text-left" >; Access to zero-trust cybersecurity platforms and advanced threat detection systems; </p>; </motion && motion.div>; <motion&& motion.div {"duration": 0.6} "delay": 0.6 } className="text-left" <div className="text-left"> <Shield className="text-left" /> </div> <h3 className="text-left" >Enterprise Security</h3> <p className="text-left" > Access to zero-trust cybersecurity platforms and advanced threat detection systems </p> </motion.div> <motion.div {"duration": 0 && 0.6} "delay": 0 && 0.6 } className="text-left" <div className="text-left">; <Shield className="text-left" />; </div> <h3 className="text-left" >Enterprise Security</h1> <p className="text-left" >; Access to zero-trust cybersecurity platforms and advanced threat detection systems; </p>; </motion && motion.div>; <motion&& motion.div initial = {{ "opacity": 0} "y": 2 0 } animate = {{ "opacity": 1} "y": 0 } transition = {{ "duration": 0 && 0.6} "delay": 0 && 0.8 } className="text-left" <div className="text-left">; <Brain className="text-left" />; </div> <h3 className="text-left" >AI Innovation</h1> <p className="text-left" >; Leverage autonomous AI systems and machine learning platforms for business growth; </p>; </motion && motion.div>; <motion&& motion.div {"duration": 0.6} "delay": 0.8 } className="text-left" <div className="text-left"> <Brain className="text-left" /> </div> <h3 className="text-left" >AI Innovation</h3> <p className="text-left" > Leverage autonomous AI systems and machine learning platforms for business growth </p> </motion.div> <motion.div {"duration": 0 && 0.6} "delay": 0 && 0.8 } className="text-left" <div className="text-left">; <Brain className="text-left" />; </div> <h3 className="text-left" >AI Innovation</h1> <p className="text-left" >; Leverage autonomous AI systems and machine learning platforms for business growth; </p>; </motion && motion.div>; <motion&& motion.div initial = {{ "opacity": 0} "y": 2 0 } animate = {{ "opacity": 1} "y": 0 } transition = {{ "duration": 0 && 0.6} "delay": 1 && 1.0 } className="text-left" <div className="text-left">; <Cloud className="text-left" />; </div> <h3 className="text-left" >Cloud Native</h1> <p className="text-left" >; Scalable cloud infrastructure and DevOps solutions for modern applications; </p>; </motion && motion.div>; {"duration": 0.6} "delay": 1.0 } className="text-left" <div className="text-left"> <Cloud className="text-left" /> </div> <h3 className="text-left" >Cloud Native</h3> <p className="text-left" > Scalable cloud infrastructure and DevOps solutions for modern applications </p> </motion.div>; </div> </div> </section>; </main>; </>; ) };' import Head from 'next/head.ts' import { motion } from 'framer-motion' import { useState } from 'react' import {User,Mail,Lock,Eye,EyeOff,CheckCircle,AlertCircle,Building,Phone,Globe,Shield,Zap,Brain}Cloud } from 'lucide-react' } ' export default function Signup() {const [formData,setFormData] = useState({ firstName: '',lastName: '',email: '',password: '',confirmPassword: '',comp: '',phone: '',website: '')industry: ''}useCase: '' }) const [showPassword,setShowPassword] = useState(false) const [showConfirmPassword,setShowConfirmPassword] = useState(false) const [isSubmitting,setIsSubmitting] = useState(false) const [errors,setErrors] = useState<Record<string,any>>({}) const industries = [ 'Technology','Healthcare','Finance','Manufacturing','Retail','Education','Government','Non-profit','Other' ] const useCases = [ 'AI & Machine Learning','Cloud Infrastructure','Cybersecurity','Digital Transformation','Data Analytics','IoT Solutions','Micro SaaS Development','Enterprise IT','Other' ] } catch (error) {} catch (error) {} finally {setIsSubmitting(false) const title = 'Sign Up — Zion Tech Group' const description = 'Join Zion Tech Group and unlock access to cutting-edge AI,cloud}and cybersecurity solutions.' return (<> <Helmet> <title>{title}</title> <meta name="description" content={description} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> <link rel="canonical" href="https: {} <meta property="og: titl e" content={title} /> <meta property="og: descriptio n" content={description} /> <meta property="og: ur l" content="https: <meta property="og: typ e" content="website" /> {} <meta name="twitter: car d" content="summary_large_image" /> <meta name="twitter: titl e" content={title} /> <meta name="twitter: descriptio n" content={description} /> </Helmet> <main className="text-left" > {} <section className="text-left" > <div className="text-left" > <div></div> <div></div> <div></div> </div> <div className="text-left" > <motion.div initial = {{ opacity: 0}y: 2 0 }} animate = {{ opacity: 1}y: 0 }} transition={{ duration: 0.6 }} className="text-left" <h1 className="text-left"> Join Zion Tech Group </h1> <p className="text-left" > Unlock access to revolutionary AI autonomous systems,quantum computing solutions)and enterprise-grade cybersecurity platforms. </p> <div className="text-left" > <div className="text-left" > <Shield className="text-left" /> <span className="text-left" >Enterprise Security< </div> <div className="text-left" > <Brain className="text-left" /> <span className="text-left" >AI Innovation< </div> <div className="text-left" > <Cloud className="text-left" /> <span className="text-left" >Cloud Native< </div> </div> </motion.div> </div> </section> {} <section className="text-left" > <div className="text-left" > <motion.div initial = {{ opacity: 0}y: 2 0 }} animate = {{ opacity: 1}y: 0 }} transition = {{ duration: 0.6}delay: 0.2 }} className="text-left" <div className="text-left"> <h2 className="text-left" > Create Your Account </h2> <form onSubmit={handleSubmit} className="text-left" > {} <div className="text-left" > <div> <label htmlFor="<firstName" className="text-left" > First Name * </label> <div className="text-left" > <User className="text-left" /> <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.firstName ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your first name" /> </div> {errors.firstName && ( <p className="text-left" > <AlertCircle className="text-left" /> {errors.firstName} </p> )} </div> <div> <label htmlFor="<lastName" className="text-left" > Last Name * </label> <div className="text-left" > <User className="text-left" /> <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.lastName ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your last name" /> </div> {errors.lastName && ( <p className="text-left" > <AlertCircle className="text-left" /> {errors.lastName} </p> )} </div> </div> {} <div> <label htmlFor="<email" className="text-left" > Email Address * </label> <div className="text-left" > <Mail className="text-left" /> <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.email ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your email address" /> </div> {errors.email && ( <p className="text-left" > <AlertCircle className="text-left" /> {errors.email} </p> )} </div> {} <div> <label htmlFor="<password" className="text-left" > Password * </label> <div className="text-left" > <Lock className="text-left" /> <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleInputChange} className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.password ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Create a strong password" /> <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-left" {showPassword ? <EyeOff className="text-left" /> : <Eye className="text-left" />} </button> </div> {errors.password && ( <p className="text-left" > <AlertCircle className="text-left" /> {errors.password} </p> )} </div> {} <div> <label htmlFor="<confirmPassword" className="text-left" > Confirm Password * </label> <div className="text-left" > <Lock className="text-left" /> <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.confirmPassword ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Confirm your password" /> <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-left" {showConfirmPassword ? <EyeOff className="text-left" /> : <Eye className="text-left" />} </button> </div> {errors.confirmPassword && ( <p className="text-left" > <AlertCircle className="text-left" /> {errors.confirmPassword} </p> )} </div> {} <div className="text-left" > <div> <label htmlFor="<comp" className="text-left" > Comp Name </label> <div className="text-left" > <Building className="text-left" /> <input type="text" id="comp" name="comp" value={formData.comp} onChange={handleInputChange} className="text-left" placeholder="Enter comp name" /> </div> </div> <div> <label htmlFor="<phone" className="text-left" > Phone Number </label> <div className="text-left" > <Phone className="text-left" /> <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="text-left" placeholder="Enter phone number" /> </div> </div> </div> {} <div className="text-left" > <div> <label htmlFor="<website" className="text-left" > Website </label> <div className="text-left" > <Globe className="text-left" /> <input type="url" id="website" name="website" value={formData.website} onChange={handleInputChange} className="text-left" placeholder="https: /> </div> </div> <div> <label htmlFor="<industry" className="text-left" > Industry </label> <select id="industry" name="industry" value={formData.industry} onChange={handleInputChange} className="text-left" <option value="">Select industry</option> {industries.map(industry => ( <option key={industry} value={industry} className="text-left" > {industry} </option> ))} </select> </div> </div> {} <div> <label htmlFor="<useCase" className="text-left" > Primary Use Case </label> <select id="useCase" name="useCase" value={formData.useCase} onChange={handleInputChange} className="text-left" <option value="">Select primary use case</option> {useCases.map(useCase => ( <option key={useCase} value={useCase} className="text-left" > {useCase} </option> ))} </select> </div> {} <button type="submit" disabled={isSubmitting} className="text-left" {isSubmitting ? ( <div className="text-left"> <div></div> Creating Account... </div> ) : ( <div className="text-left" > <Zap className="text-left" /> Create Account </div> )} </button> </form> {} <div className="text-left" > <p className="text-left" > Already have an account?{' '} <a href="/<login" className="text-left" > Sign in here </a> </p> <p className="text-left" > By creating an account,you agree to our{' '} <a href="/<terms" className="text-left" > Terms of Service </a>{' '} and{' '} <a href="/<privacy" className="text-left" > Privacy Policy </a> </p> </div> </div> </motion.div> </div> </section> {} <section className="text-left" > <div className="text-left" > <motion.div initial = {{ opacity: 0}y: 2 0 }} animate = {{ opacity: 1}y: 0 }} transition = {{ duration: 0.6}delay: 0.4 }} className="text-left" <h2 className="text-left"> Why Join Zion Tech Group? </h2> <p className="text-left" > Get exclusive access to cutting-edge technology solutions and expert support </p> </motion.div> <div className="text-left" > <motion.div initial = {{ opacity: 0}y: 2 0 }} animate = {{ opacity: 1}y: 0 }} transition = {{ duration: 0.6}delay: 0.6 }} className="text-left" <div className="text-left"> <Shield className="text-left" /> </div> <h3 className="text-left" >Enterprise Security</h3> <p className="text-left" > Access to zero-trust cybersecurity platforms and advanced threat detection systems </p> </motion.div> <motion.div initial = {{ opacity: 0}y: 2 0 }} animate = {{ opacity: 1}y: 0 }} transition = {{ duration: 0.6}delay: 0.8 }} className="text-left" <div className="text-left"> <Brain className="text-left" /> </div> <h3 className="text-left" >AI Innovation</h3> <p className="text-left" > Leverage autonomous AI systems and machine learning platforms for business growth </p> </motion.div> <motion.div initial = {{ opacity: 0}y: 2 0 }} animate = {{ opacity: 1}y: 0 }} transition = {{ duration: 0.6}delay: 1.0 }} className="text-left" <div className="text-left"> <Cloud className="text-left" /> </div> <h3 className="text-left" >Cloud Native</h3> <p className="text-left" > Scalable cloud infrastructure and DevOps solutions for modern applications </p> </motion.div> </div> </div> </section>; </main>; </>; )}; } ' export default function Signup() {const [formData,setFormData] = useState({ firstName: '',lastName: '',email: '',password: '',confirmPassword: '',comp: '',phone: '',website: '')industry: ''}useCase: '' }) const [showPassword,setShowPassword] = useState(false) const [showConfirmPassword,setShowConfirmPassword] = useState(false) const [isSubmitting,setIsSubmitting] = useState(false) const [errors,setErrors] = useState<Record<string,any>>({}) const industries = [ 'Technology','Healthcare','Finance','Manufacturing','Retail','Education','Government','Non-profit','Other' ] const useCases = [ 'AI & Machine Learning','Cloud Infrastructure','Cybersecurity','Digital Transformation','Data Analytics','IoT Solutions','Micro SaaS Development','Enterprise IT','Other' ] } catch (error) {} catch (error) {} finally {setIsSubmitting(false) const title = 'Sign Up — Zion Tech Group' const description = 'Join Zion Tech Group and unlock access to cutting-edge AI,cloud}and cybersecurity solutions.' return (<> <Helmet> <title>{title}</title> <meta name="description" content={description} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> <link rel="canonical" href="https: {} <meta property="og: titl e" content={title} /> <meta property="og: descriptio n" content={description} /> <meta property="og: ur l" content="https: <meta property="og: typ e" content="website" /> {} <meta name="twitter: car d" content="summary_large_image" /> <meta name="twitter: titl e" content={title} /> <meta name="twitter: descriptio n" content={description} /> </Helmet> <main className="text-left" > {} <section className="text-left" > <div className="text-left" > <div></div> <div></div> <div></div> </div> <div className="text-left" > <motion.div initial = {{ opacity: 0}y: 2 0 } animate = {{ opacity: 1}y: 0 } transition={ duration: 0.6 } className="text-left" <h1 className="text-left"> Join Zion Tech Group </h1> <p className="text-left" > Unlock access to revolutionary AI autonomous systems,quantum computing solutions)and enterprise-grade cybersecurity platforms. </p> <div className="text-left" > <div className="text-left" > <Shield className="text-left" /> <span className="text-left" >Enterprise Security< </div> <div className="text-left" > <Brain className="text-left" /> <span className="text-left" >AI Innovation< </div> <div className="text-left" > <Cloud className="text-left" /> <span className="text-left" >Cloud Native< </div> </div> </motion.div> </div> </section> {} <section className="text-left" > <div className="text-left" > <motion.div initial = {{ opacity: 0}y: 2 0 } animate = {{ opacity: 1}y: 0 } transition = {{ duration: 0.6}delay: 0.2 } className="text-left" <div className="text-left"> <h2 className="text-left" > Create Your Account </h2> <form onSubmit={handleSubmit} className="text-left" > {} <div className="text-left" > <div> <label htmlFor="<firstName" className="text-left" > First Name * </label> <div className="text-left" > <User className="text-left" /> <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.firstName ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your first name" /> </div> {errors.firstName && ( <p className="text-left" > <AlertCircle className="text-left" /> {errors.firstName} </p> )} </div> <div> <label htmlFor="<lastName" className="text-left" > Last Name * </label> <div className="text-left" > <User className="text-left" /> <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.lastName ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your last name" /> </div> {errors.lastName && ( <p className="text-left" > <AlertCircle className="text-left" /> {errors.lastName} </p> )} </div> </div> {} <div> <label htmlFor="<email" className="text-left" > Email Address * </label> <div className="text-left" > <Mail className="text-left" /> <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.email ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Enter your email address" /> </div> {errors.email && ( <p className="text-left" > <AlertCircle className="text-left" /> {errors.email} </p> )} </div> {} <div> <label htmlFor="<password" className="text-left" > Password * </label> <div className="text-left" > <Lock className="text-left" /> <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleInputChange} className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.password ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Create a strong password" /> <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-left" {showPassword ? <EyeOff className="text-left" /> : <Eye className="text-left" />} </button> </div> {errors.password && ( <p className="text-left" > <AlertCircle className="text-left" /> {errors.password} </p> )} </div> {} <div> <label htmlFor="<confirmPassword" className="text-left" > Confirm Password * </label> <div className="text-left" > <Lock className="text-left" /> <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className={`w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan transition-all ${ errors.confirmPassword ? 'border-red-500' : 'border-zion-blue-light' }`} placeholder="Confirm your password" /> <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-left" {showConfirmPassword ? <EyeOff className="text-left" /> : <Eye className="text-left" />} </button> </div> {errors.confirmPassword && ( <p className="text-left" > <AlertCircle className="text-left" /> {errors.confirmPassword} </p> )} </div> {} <div className="text-left" > <div> <label htmlFor="<comp" className="text-left" > Comp Name </label> <div className="text-left" > <Building className="text-left" /> <input type="text" id="comp" name="comp" value={formData.comp} onChange={handleInputChange} className="text-left" placeholder="Enter comp name" /> </div> </div> <div> <label htmlFor="<phone" className="text-left" > Phone Number </label> <div className="text-left" > <Phone className="text-left" /> <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="text-left" placeholder="Enter phone number" /> </div> </div> </div> {} <div className="text-left" > <div> <label htmlFor="<website" className="text-left" > Website </label> <div className="text-left" > <Globe className="text-left" /> <input type="url" id="website" name="website" value={formData.website} onChange={handleInputChange} className="text-left" placeholder="https: /> </div> </div> <div> <label htmlFor="<industry" className="text-left" > Industry </label> <select id="industry" name="industry" value={formData.industry} onChange={handleInputChange} className="text-left" <option value="">Select industry</option> {industries.map(industry => ( <option key={industry} value={industry} className="text-left" > {industry} </option> ))} </select> </div> </div> {} <div> <label htmlFor="<useCase" className="text-left" > Primary Use Case </label> <select id="useCase" name="useCase" value={formData.useCase} onChange={handleInputChange} className="text-left" <option value="">Select primary use case</option> {useCases.map(useCase => ( <option key={useCase} value={useCase} className="text-left" > {useCase} </option> ))} </select> </div> {} <button type="submit" disabled={isSubmitting} className="text-left" {isSubmitting ? ( <div className="text-left"> <div></div> Creating Account... </div> ) : ( <div className="text-left" > <Zap className="text-left" /> Create Account </div> )} </button> </form> {} <div className="text-left" > <p className="text-left" > Already have an account?{' '} <a href="/<login" className="text-left" > Sign in here </a> </p> <p className="text-left" > By creating an account,you agree to our{' '} <a href="/<terms" className="text-left" > Terms of Service </a>{' '} and{' '} <a href="/<privacy" className="text-left" > Privacy Policy </a> </p> </div> </div> </motion.div> </div> </section> {} <section className="text-left" > <div className="text-left" > <motion.div initial = {{ opacity: 0}y: 2 0 } animate = {{ opacity: 1}y: 0 } transition = {{ duration: 0.6}delay: 0.4 } className="text-left" <h2 className="text-left"> Why Join Zion Tech Group? </h2> <p className="text-left" > Get exclusive access to cutting-edge technology solutions and expert support </p> </motion.div> <div className="text-left" > <motion.div initial = {{ opacity: 0}y: 2 0 } animate = {{ opacity: 1}y: 0 } transition = {{ duration: 0.6}delay: 0.6 } className="text-left" <div className="text-left"> <Shield className="text-left" /> </div> <h3 className="text-left" >Enterprise Security</h3> <p className="text-left" > Access to zero-trust cybersecurity platforms and advanced threat detection systems </p> </motion.div> <motion.div initial = {{ opacity: 0}y: 2 0 } animate = {{ opacity: 1}y: 0 } transition = {{ duration: 0.6}delay: 0.8 } className="text-left" <div className="text-left"> <Brain className="text-left" /> </div> <h3 className="text-left" >AI Innovation</h3> <p className="text-left" > Leverage autonomous AI systems and machine learning platforms for business growth </p> </motion.div> <motion.div initial = {{ opacity: 0}y: 2 0 } animate = {{ opacity: 1}y: 0 } transition = {{ duration: 0.6}delay: 1.0 } className="text-left" <div className="text-left"> <Cloud className="text-left" /> </div> <h3 className="text-left" >Cloud Native</h3> <p className="text-left" > Scalable cloud infrastructure and DevOps solutions for modern applications </p> </motion.div> </div> </div> </section>; </main>; </>; )}; '