<<<<<<< HEAD
import { motion } from 'framer-motion';
const services = [];


 from 'lucide-react';

                  </div>
                  <div>"
                    <h3 className="text-lg font-semibold text-white mb-1">{info.title}"
                    <p className="text-zion-cyan font-medium mb-1">{info.value}</p>"
                    <p className="text-zion-slate-light text-sm">{info.description}</p>
                  </div>
                </motion.div>) ) }
            </div>;
            {/* Comp Stats */}
            <motion.div;
              initial = {;


  { opacity: 0,
  y: 20;
}}
              animate = {;

  { opacity: 1,
  y: 0;
}}
              transition={{ delay: 0.6 }}";
              className="mt-12 p-6 bg-zion-blue-light/10 rounded-xl border border-zion-blue-light/20">";

              <h3 className="text-xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>";
              <div className="grid grid-cols-2 gap-4">";
                <div className="text-center">";
                  <div className="text-2xl font-bold text-zion-cyan mb-1">500+</div>";
                  <div className="text-sm text-zion-slate-light">Happy Clients</div>;
                </div>";
                <div className="text-center">";
                  <div className="text-2xl font-bold text-zion-cyan mb-1">95%</div>";
                  <div className="text-sm text-zion-slate-light">Success Rate</div>;
                </div>";
                <div className="text-center">";
                  <div className="text-2xl font-bold text-zion-cyan mb-1">10+</div>";
                  <div className="text-sm text-zion-slate-light">Years Experience</div>;
                </div>";
                <div className="text-center">";
                  <div className="text-2xl font-bold text-zion-cyan mb-1">24/7</div>";
                  <div className="text-sm text-zion-slate-light">Support</div>;
                </div>;
              </div>;
            </motion.div>;
          </motion.div>;}}
              transition={{ delay: 0.6 }}"
              className="mt-12 p-6 bg-zion-blue-light/10 rounded-xl border border-zion-blue-light/20"
            >"
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Zion Tech Group?"
              <div className="grid grid-cols-2 gap-4">"
                <div className="text-center">"
                  <div className="text-2xl font-bold text-zion-cyan mb-1">500+</div>"
                  <div className="text-sm text-zion-slate-light">Happy Clients</div>
                </div>"
                <div className="text-center">"
                  <div className="text-2xl font-bold text-zion-cyan mb-1">95%</div>"
                  <div className="text-sm text-zion-slate-light">Success Rate</div>
                </div>"
                <div className="text-center">"
                  <div className="text-2xl font-bold text-zion-cyan mb-1">10+</div>"
                  <div className="text-sm text-zion-slate-light">Years Experience</div>
                </div>"
                <div className="text-center">"
                  <div className="text-2xl font-bold text-zion-cyan mb-1">24/7</div>"
                  <div className="text-sm text-zion-slate-light">Support</div>
                </div>


  { opacity: 0,
  x: 50;
}}
            animate = {;

  { opacity: 1,
  x: 0;
}}
            transition={{ delay: 0.3 }}";
            className="bg-zion-blue-light/10 rounded-xl p-8 border border-zion-blue-light/20">";

            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>;
";
            <form onSubmit={handleSubmit} className="space-y-6">;
              {/* Name */}
              <div>";
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">;
                  Full Name *;
                </label>;
                <input";
                  type="text";
                  id="name";
                  value={formData.name}

                  onChange = {;

  (e) => handleInputChange('name',
  e.target.value);
}
                  className={`w-full px-4 py-3 rounded-lg bg-zion-slate-dark border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan ${errors.name';
                      ? 'border-red-500 focus:ring-red-500'';
                      : 'border-zion-slate-light focus:border-zion-cyan'`;
} text-white placeholder-zion-slate-light`}";

                  placeholder="Enter your full name";
                />;
                <AnimatePresence>;
                  {errors['name'] && (;
                    <motion.p;
                      initial = {;


  { opacity: 0,
  y: -10;
}}
                      animate = {;

  { opacity: 1,
  y: 0;
}}
                      exit = {;

  { opacity: 0,
  y: -10;
}}";
                      className="text-red-400 text-sm mt-1 flex items-center">";
                      <AlertCircle className="w-4 h-4 mr-1"  />;

                      {errors['name']}                    </motion.p>) }
                </AnimatePresence>;
              </div>;
              {/* Email */}
              <div>";
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">;
                  Email Address *;
                </label>;
                <input";
                  type="email";
                  id="email";
                  value={formData.email}

                  onChange = {;

  (e) => handleInputChange('email',
  e.target.value);
}`;
                  className={`w-full px-4 py-3 rounded-lg bg-zion-slate-dark border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan ${errors.email';
                      ? 'border-red-500 focus:ring-red-500'';
                      : 'border-zion-slate-light focus:border-zion-cyan'`;
} text-white placeholder-zion-slate-light`}";

                  placeholder="Enter your email address";
                />;
                <AnimatePresence>;
                  {errors['email'] && (;
                    <motion.p;
                      initial = {;
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/Textarea';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Building, Users, Globe } from 'lucide-react';
export const EnhancedContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comp: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const contactMethods = [
        {
            icon: Mail,
            title: 'Email Us',
            description: 'Send us a detailed message',
            action: 'kleber@ziontechgroup.com',
            href: 'mailto:kleber@ziontechgroup.com'
        },
        {
            icon: Phone,
            title: 'Call Us',
            description: 'Speak with our team directly',
            action: '+1 302 464 0950',
            href: 'tel:+13024640950'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            description: 'Our office location',
            action: '364 E Main St STE 1008, Middletown DE 19709',
            href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
        },
        {
            icon: Clock,
            title: 'Business Hours',
            description: 'When we\'re available',
            action: 'Mon-Fri: 9AM-6PM EST',
            href: '#'
        }
    ];
    const services = [
        'AI Solutions',
        'Cloud & DevOps',
        'Cybersecurity',
        'Digital Transformation',
        'IT Infrastructure',
        'Consulting',
        'Other'
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
  hidden: { y: 20,
  opacity: 0 

},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    const cardVariants = {
  hidden: { scale: 0.9,
  opacity: 0 

},
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.02,
            y: -5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))};
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                comp: '',
                phone: '',
                service: '',
                message: ''
            })}, 3000)};
    if (isSubmitted) {
        return (<motion.div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center" initial = {
  { opacity: 0,
  scale: 0.9 

}} animate = {
  { opacity: 1,
  scale: 1 

}} transition={{ duration: 0.5 }}>
        <div className="text-center max-w-md mx-auto px-4">
          <CheckCircle className="h-24 w-24 text-green-400 mx-auto mb-6"/>
          <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-xl text-gray-300 mb-6">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
            Send Another Message
          </Button>
        </div>
      </motion.div>)}
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-7xl mx-auto text-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" variants={itemVariants}>
            Get in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Touch
            </span>
          </motion.h1>
          <motion.p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" variants={itemVariants}>
            Ready to transform your business? Let's discuss how our technology solutions can drive your success.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {contactMethods.map((method, index) => (<motion.a key={index} href={method.href} target={method.href.startsWith('http') ? '_blank' : null} rel={method.href.startsWith('http') ? 'noopener noreferrer' : null} className="group" variants={cardVariants} whileHover="hover">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4 flex justify-center">
                    <method.icon className="h-16 w-16 text-zion-cyan group-hover:scale-110 transition-transform duration-300"/>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{method.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{method.description}</p>
                  <div className="text-zion-cyan font-medium text-center group-hover:text-zion-cyan-light transition-colors">
                    {method.action}
                  </div>
                </div>
              </motion.a>))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </motion.div>

          <motion.form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <Input type="text" placeholder="Enter your full name" value={formData.name} onChange={handleInputChange} className="bg-white/20 border-white/30 text-white placeholder-gray-400 focus:border-zion-cyan focus:ring-zion-cyan"/>
                <input type="hidden" name="name" value={formData.name}/>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <Input type="email" placeholder="Enter your email address" value={formData.email} onChange={handleInputChange} className="bg-white/20 border-white/30 text-white placeholder-gray-400 focus:border-zion-cyan focus:ring-zion-cyan"/>
                <input type="hidden" name="email" value={formData.email}/>
              </motion.div>
            </div>
>>>>>>> origin/clean-error-fixing-automation

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="comp" className="block text-sm font-medium text-gray-300 mb-2">
                  Comp </label>
                <Input type="text" placeholder="Enter your comp name" value={formData.comp} onChange={handleInputChange} className="bg-white/20 border-white/30 text-white placeholder-gray-400 focus:border-zion-cyan focus:ring-zion-cyan"/>
                <input type="hidden" name="comp" value={formData.comp}/>
              </motion.div>

<<<<<<< HEAD
  { opacity: 0,
  y: -10;
}}
                      animate = {;

  { opacity: 1,
  y: 0;
}}
                      exit = {;

  { opacity: 0,
  y: -10;
}}";
                      className="text-red-400 text-sm mt-1 flex items-center">";
                      <AlertCircle className="w-4 h-4 mr-1"  />;

                      {errors['email']}                    </motion.p>) }
                </AnimatePresence>;
              </div>;
              {/* Phone and Comp */}";
              <div className="grid grid-cols-1 "md": "gri d-cols-2 gap-4">;
                <div>";
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">;
                    Phone Number;
                  </label>;
                  <input";
                    type="tel";
                    id="phone";

                    value={formData.phone}
                    onChange = {;

  (e) => handleInputChange('phone',

  e.target.value);
}";
                    className="w-full px-4 py-3 rounded-lg bg-zion-slate-dark border border-zion-slate-light transition-all duration-300 "focus": "outlin e-none "focus": rin g-2 "focus": rin g-zion-cyan "focus": borde r-zion-cyan text-white placeholder-zion-slate-light";
                    placeholder="Enter your phone number";
                  />;
                </div>;
                <div>";
                  <label htmlFor="comp" className="block text-sm font-medium text-white mb-2">;
                    Comp </label>;
                  <input";
                    type="text";
                    id="company";

                    value={formData.company}
                    onChange = {;

  (e) => handleInputChange('company',

  e.target.value);
}";
                    className="w-full px-4 py-3 rounded-lg bg-zion-slate-dark border border-zion-slate-light transition-all duration-300 "focus": "outlin e-none "focus": rin g-2 "focus": rin g-zion-cyan "focus": borde r-zion-cyan text-white placeholder-zion-slate-light";
                    placeholder="Enter your comp name";
                  />;
                </div>;
              </div>;
              {/* Service */"}
              <div>";
                <label htmlFor="service" className="block text-sm font-medium text-white mb-2">;
                  Service of Interest;
                </label>;
                <select";
                  id="service";
                  value={formData.service}

                  onChange = {;

  (e) => handleInputChange('service',

  e.target.value);
}";
                  className="w-full px-4 py-3 rounded-lg bg-zion-slate-dark border border-zion-slate-light transition-all duration-300 "focus": "outlin e-none "focus": rin g-2 "focus": rin g-zion-cyan "focus": borde r-zion-cyan text-white";
                >;
                  {services.map(service  => (<option key={service.value"} value={service.value}>;
                      {service.label}
                    </option>) ) }
                </select>;
              </div>;
              {/* Message */}
              <div>";
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">;
                  Message *;
                </label>;
                <textarea";
                  id="message";
                  rows={4}
                  value={formData.message}

                  onChange = {;

  (e) => handleInputChange('message',
  e.target.value);
}`;
                  className={`w-full px-4 py-3 rounded-lg bg-zion-slate-dark border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan resize-none ${errors.message';
                      ? 'border-red-500 focus:ring-red-500'';
                      : 'border-zion-slate-light focus:border-zion-cyan'`;
} text-white placeholder-zion-slate-light`}";

                  placeholder="Tell us about your project or inquiry...";
                />;
                <AnimatePresence>;
                  {errors['message'] && (;
                    <motion.p;
                      initial = {;


  { opacity: 0,
  y: -10;
}}
                      animate = {;

  { opacity: 1,
  y: 0;
}}
                      exit = {;

  { opacity: 0,
  y: -10;
}}";
                      className="text-red-400 text-sm mt-1 flex items-center">";
                      <AlertCircle className="w-4 h-4 mr-1"  />;

                      {errors['message']}                    </motion.p>) }
                </AnimatePresence>;
              </div>;
              {/* Submit Button */}
              <motion.button";
                type="submit";
                disabled={isSubmitting}
                whileHover={{ "scale": "1.02 "}}
                whileTap={{ "scale": "0.98 "}}";
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-4 rounded-lg font-medium transition-all duration-300 "hover": "fro m-zion-cyan-dark "hover": t o-zion-purple-dark "disabled": opacit y-50 "disabled": curso r-not-allowed flex items-center justify-center space-x-2";
              >;
                {isSubmitting ? (;
                  <>";
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"  />;
                    <span>Sending Message...</span>;
                  </>;
                ) : (;
                  <>";
                    <Send className="w-5 h-5"   />                    <span>Send Message</span>;
                  </>;
                )"}
              </motion.button>;
            </form>;
          </motion.div>;
        </div>;
      </div>;
    </div>;) }
'"`;
</motion>;
</motion>;
</textarea>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</any>;
</any>;
</any>;
</any>

<<<<<<< HEAD
>>>>>>> 51ecdee898e0f4ef436b73e6c8197c3d4a98485c
=======
              <motion.div variants={itemVariants}>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange} className="bg-white/20 border-white/30 text-white placeholder-gray-400 focus:border-zion-cyan focus:ring-zion-cyan"/>
                <input type="hidden" name="phone" value={formData.phone}/>
              </motion.div>
            </div>

            <motion.div className="mb-6" variants={itemVariants}>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                Service of Interest
              </label>
              <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white focus:border-zion-cyan focus:ring-zion-cyan focus:outline-none">
                <option value="">Select a service</option>
                {services.map((service, index) => (<option key={index} value={service} className="bg-slate-800 text-white">
                    {service}
                  </option>))}
              </select>
            </motion.div>

            <motion.div className="mb-8" variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <Textarea rows={6} placeholder="Tell us about your project, requirements, or  questions you have..." value={formData.message} onChange={handleInputChange} className="bg-white/20 border-white/30 text-white placeholder-gray-400 focus:border-zion-cyan focus:ring-zion-cyan resize-none"/>
              <input type="hidden" name="message" value={formData.message}/>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <Button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg py-3 px-8 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (<>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>) : (<>
                    <Send className="h-5 w-5 mr-2"/>
                    Send Message
                  </>)}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </section>

      {/* Comp Info */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Zion Tech Group
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading technology solutions provider helping businesses innovate and grow through cutting-edge AI, cloud services, and digital transformation.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div className="text-center" variants={itemVariants}>
              <Building className="h-16 w-16 text-zion-cyan mx-auto mb-4"/>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Solutions</h3>
              <p className="text-gray-300">Scalable technology solutions for businesses of all sizes</p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <Users className="h-16 w-16 text-zion-cyan mx-auto mb-4"/>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Seasoned professionals with deep industry expertise</p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <Globe className="h-16 w-16 text-zion-cyan mx-auto mb-4"/>
              <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-gray-300">Serving clients worldwide with innovative solutions</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>)};
>>>>>>> origin/clean-error-fixing-automation
=======
>>>>>>> 06e06048c0d59de66865eafd1bd98630feb518ac
