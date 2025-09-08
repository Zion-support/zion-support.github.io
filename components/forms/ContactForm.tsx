




  Mail
  Phone
  MapPin
  Send
  CheckCircle


}
  AlertCircle,;}
} from 'lucide-react';




  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<;
    'idle' | 'success' | 'error';
  >('idle');


    'idle' | 'success' | 'error';
  >('idle');


  const [isSubmitting, setIsSubmitting] = useState(false),
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle'),

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,) => {
  return $3;}
}
    })
  },


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSubmitting(true),
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)),
      setSubmitStatus('success'),
      setFormData({


        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',


    // Simulate API call;
    try {;

      ...formData,
      [e.target.name]: e.target.value,) => {
  return $3;}
}
    })
};


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);


      });
    } catch (error) {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false);    }



;
import {Mail,Phone,MapPin,Send,CheckCircle,AlertCircle,'use client';
import React, { useState  } from 'react';
import { motion  } from 'framer-motion';
import { Mail;
  Phone;
  MapPin;
  Send;
  CheckCircle;
  AlertCircle;import {Mail,Phone,MapPin,Send,CheckCircle,AlertCircle,CheckCircle,AlertCircle,} from 'lucide-react';import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle  } from 'lucide-react';
const ContactForm: React.FC = () => {const [formData, setFormData] = useState({name: '',email: '',company: '',phone: '',service: '',message: '',AlertCircle,} from 'lucide-react';const ContactForm: React.FC = () => {const [formData, setFormData] = useState({name: '',email: '',company: '',phone: '',service: '',message: '',})const [isSubmitting, setIsSubmitting] = useState(false)const [submitStatus, setSubmitStatus] = useState<;
    'idle' | 'success' | 'error';
  >('idle')...formData;
      [e && e.target.name]: e && e.target.value;
    })}// Simulate API call;
    try {await new Promise(resolve => setTimeout(resolve, 2000))setSubmitStatus('success')setFormData({name: '',email: '',company: '',phone: '',service: '',message: '',const handleChange = (e: React.ChangeEvent<;
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    >;
  ) => {setFormData({...formData,[e.target.name]: e.target.value,})}const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()setIsSubmitting(true)// Simulate API call;
    try {await new Promise(resolve => setTimeout(resolve, 2000))setSubmitStatus('success')setFormData({name: '',email: '',company: '',phone: '',service: '',message: '',})} catch (error) {setSubmitStatus('error')} finally {setIsSubmitting(false)}
    } finally {setIsSubmitting(false)} finally {setIsSubmitting(false)}
  }
  const services = [;
'AI Development','Cloud Architecture','Digital Transformation','IoT Platforms','Blockchain Solutions','Data Analytics','Other',];const contactInfo = [;
    {icon: Mail,title: 'Email Us',content: 'contact@ziontechgroup && ziontechgroup.com',href: 'mailto:contact@ziontechgroup && ziontechgroup.com',},    {icon: Phone,title: 'Call Us',content: '+1 (555) 123-4567',      href: 'mailto:contact@ziontechgroup && ziontechgroup.com';
}{icon: Phone,title: 'Call Us',content: '+1 (555) 123-4567',href: 'tel:+15551234567',},    {icon: MapPin,title: 'Visit Us',content: '123 Tech Street, Innovation City, IC 12345',href: '#',},return (<section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden'>;
      {/* Background Elements */}<div className='absolute inset-0'>;
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0 && 0.1),transparent_50%)]' />;

        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  },


  const services = $2;
  const contactInfo = $2;
      title: 'Email Us',
      content: 'contact@ziontechgroup.com',
      href: 'mailto:contact@ziontechgroup.com'
  const services = [
'AI Development',
    'Cloud Architecture',
    'Digital Transformation',
    'IoT Platforms',
    'Blockchain Solutions',
    'Data Analytics',
    'Other',
  ];

  const contactInfo = [;
    {;
      icon: Mail,;'
      title: 'Email Us',;'
      content: 'contact@ziontechgroup && ziontechgroup.com',;'
      href: 'mailto:contact@ziontechgroup && ziontechgroup.com',;
    },    {;
      icon: Phone,;
      title: 'Call Us',;
      content: '+1 (555) 123-4567',      href: 'mailto:contact@ziontechgroup && ziontechgroup.com'
};
    {;
      icon: Phone,;'
      title: 'Call Us',;'
      content: '+1 (555) 123-4567',;'
      href: 'tel:+15551234567',;
    },    {;
      icon: MapPin,;'
      title: 'Visit Us',;'
      content: '123 Tech Street, Innovation City, IC 12345',;'
      href: '#',;
    },;

  return (
    <section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden'>
      {/* Background Elements */}



        >
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Let&apos;s Start a
            <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Conversation
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Ready to transform your business? Get in touch with our team of
            experts to discuss how we can help you achieve your technology
            goals.
          </p>
        </motion.div>

          className="text-center mb-16"
        >



          <h2 className="text-4xl md: text-6xl font-bold text-white mb-6">
            Let&apos,s Start a
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our team of experts to discuss
            how we can help you achieve your technology goals.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">



          className='text-center mb-16'>;
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>;
            Let&apos;s Start a;
            <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>;
              Conversation;
            </span>;
          </h2>;
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>;
      href: 'mailto:contact@ziontechgroup.com',
    },    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123 - 4567',      href: 'mailto:contact@ziontechgroup.com';
    }

    {
      icon: Phone,
      title: 'Call Us',

  content: '+1 (555) 123-4567'}
href: 'tel:+15551234567'}

    },
    {
      icon: MapPin,
      title: 'Visit Us',

  content: '123 Tech Street, Innovation City, IC 12345'}
href: '#'}
    }
  ];

  return (
    <section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden'    />


  return (
      </div>;<div className='relative container mx-auto px-4'>        {/* Section Header */}      <div className="relative container mx-auto px-4">;];const contact_info = [;
    {icon: Mail;
      title: 'Email Us';
      content: 'contact@ziontechgroup.com';
      href: 'mailto:contact@ziontechgroup.com';
      icon: Mail,title: 'Email Us',content: 'contact@ziontechgroup.com',href: 'mailto:contact@ziontechgroup.com',},{icon: Phone,title: 'Call Us',content: '+1 (555) 123-4567',href: 'tel:+15551234567',},{icon: MapPin,title: 'Visit Us',content: '123 Tech Street, Innovation City, IC 12345',href: '#',},];return (<section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden'>;
      {/* Background Elements */}

      <div className='absolute inset-0'    />;
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]'    />;
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]'    />;
      </div>;
      <div className='relative container mx-auto px-4'    />;
        {/* Section Header */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }
}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }
}


className='text-center mb-16'
            />
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'    />
            Let&apos;s Start a;
            <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'    />
              Conversation;

            </span>;
          </h2>;
          <p className='text - xl text - gray - 300 max - w-3xl mx - auto leading - relaxed'>;

            Ready to transform your business? Get in touch with our team of;
experts to discuss how we can help you achieve your technology;
goals.
          </p>
        </motion.div>


      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md: text-6xl font-bold text-white mb-6">
            Let&apos,s Start a
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our team of experts to discuss 
            how we can help you achieve your technology goals.
          </p>
        </motion.div>




          {/* Contact Information */}
          <motion&& motion.div


        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>          {/* Contact Information */}

          {/* Contact Information */}


          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
            viewport={{ once: true }}

              Conversation
            </span>
          </h2>
          
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed&quot;>
            Ready to transform your business? Get in touch with our team of experts to discuss 
            how we can help you achieve your technology goals.
          </p>
        </motion.div>

        <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto&quot;>
          {/* Contact Information */}

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>          {/* Contact Information */}

          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <div>
              <h3 className='text-2xl font-bold text-white mb-6'>
                Get in Touch
              </h3>
              <p className='text-gray-300 leading-relaxed mb-8'>
                Our team is here to help you navigate the complex world of
                technology and find the perfect solutions for your business
                needs. Reach out to us today.              </p>
            </div>
            {/* Contact Details */}
            <div className='space-y-6'>              {contactInfo.map((info, index) => (              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our team is here to help you navigate the complex world of technology and find
                the perfect solutions for your business needs. Reach out to us today.
            </div>

                  key={info.title}



                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0 && 0.6, delay: 0 && 0.3 + index * 0 && 0.1 }}
                  viewport={{ once: true }}
                  href={info.href}initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0 && 0.6, delay: 0 && 0.3 + index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">;
                    <info.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>;
                    <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">;
className='flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group';
                >;
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>;
                    <info.icon className='w-6 h-6 text-white' />;
                  </div>;
                  <div>;
                    <h4 className='text-lg font-semibold text-white mb-1'>;
                      {info.title}
                    </h4>;
                    <p className='text-gray-300 group-hover:text-blue-400 transition-colors duration-300'>;


                  href={info.href}
                  initial={{ opacity: 0, x: -20 }
}
                  whileInView={{ opacity: 1, x: 0 }
}
                  transition={{ duration: 0 && 0.6, delay: 0 && 0.3 + index * 0 && 0.1 }}
                  viewport={{ once: true }}


                >

                  </div>


              ))}


            </div>;





            {/* Additional Info */}
            <motion&& motion.div


              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0 && 0.6, delay: 0 && 0.6 }}

              viewport={{ once: true }}

                <li className='flex items-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />
                  <span>Expert team with 10+ years experience</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />
                  <span>Proven track record of successful projects</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />
                  <span>24/7 support and maintenance</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />                  <span>Competitive pricing and flexible solutions</span>                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Competitive pricing and flexible solutions</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>





          {/* Contact Form */}
          <motion&& motion.div

          {/* Contact Form */}
          <motion.div

          {/* Contact Form */}
          <motion&& motion.div

            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}


            viewport={{ once: true }
}




className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8'
              />
            {submitStatus === 'success' ? (
              <motion.div;}
initial={{ opacity: 0, scale: 0.8 }
}
                animate={{ opacity: 1, scale: 1 }}


              >
                <CheckCircle className='w-20 h-20 text-green-400 mx-auto mb-6' />
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Message Sent Successfully!
                </h3>
                <p className='text-gray-300 mb-6'>
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300'                >              >

                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours.

                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            {submitStatus === 'success' ? (
              <motion.div;
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}"
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />"
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>"
                <p className="text-gray-300 mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button'
                  onClick={() => setSubmitStatus('idle')}"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
className='text-center py-12'
              >
                <CheckCircle className='w-20 h-20 text-green-400 mx-auto mb-6' />
                <h3 className='text-2xl font-bold text-white mb-4'>

                >
                  Send Another Message;
                </button>
              </motion.div>
            ) : (


                    <label;
                      htmlFor='company';
                      className='block text-white font-medium mb-2'    />

                      Company;
                    </label>;
                    <input;
                      type='text';
                      id='company';
                      name='company';
                      value={formData.company}
                      onChange={handleChange}

                    <input'
                      type='text''
                      id='name''
                      name='name'
                    <input'
                      type='email''
                      id='email''
                      name='email'
                  </div>
                </div>'"
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors""
                      placeholder="Enter your email"

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6>
                  <div>
                    <label
                      htmlFor='name'
                      className=block text-white font-medium mb-2'
                    >
                      Full Name *
                    </label>
                    <input'
                      type=text'
                      id='name
                      name='name'
                    <input
                      type=email''
                      id=email'
                      name='email
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder=Enter your email"
                    />
                  </div>
                </div>"
                      placeholder=Enter your email;
                    />;
                  </div>;
                </div>;
                      value={formData.email}

                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
                      placeholder='Enter company name'                       />
                  </div>
                  <div    />
                    <label;
htmlFor='phone'





                    <label
                      htmlFor='phone'
                      className='block text-white font-medium mb-2'>;
                      Phone Number;
                    </label>;
                    <input'
                      type='tel
                      id='phone'
                      name=phone'
                      value={formData && formData.phone}
                      onChange={handleChange}


                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service of Interest
                  </label>
                  <select
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors';
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'


                      placeholder="Enter phone number";
                    />;
                  </div>;
                </div>;



                  <select
                    id="service"
                    name="service"
                    value={formData && formData.service}
                    onChange={handleChange}


                  <label
                    htmlFor='message'
                    className='block text-white font-medium mb-2'>;
                    Message *;
                  </label>;
                  <textarea
                    id='message'
                  </select>;
                </div>;
                <div>;
<label;
                    htmlFor='message';
                    className='block text-white font-medium mb-2'>;
                    Message *;
                  </label>;
                  <textarea;
                    id='message';
                    name='message'                    value={formData && formData.message}
                    onChange={handleChange}
                    required;
                    rows={5}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none';
                    name='message';
                    value={formData.message}
                  <label
                      placeholder='Enter phone number'
                    />

                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service of Interest
                  </label>

                  <select,
id='service''
                    name='service''

                    value={formData.service}
                    onChange={handleChang
}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white "focus":outline-none "focus":border-blue-500 transition-colors'>'

                    <option value=''>Select a service</option>;'
                    {services.map(service => { return (<option; }
                        }
                        key={service}
                        value={service}
                        className='bg-gray-800 text-white'>'

                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
<label
origin/cursor/automate-test-improve-and-merge-code-2533
                    htmlFor='message'
                    className='block text-white font-medium mb-2'>;
                    Message *;
                  </label>;
                  <textarea'
                    id='message''
                    name='message'                    value={formData && formData.message}
                    onChange={handleChange}
                    required;
                    rows={5}'
                    className=w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none'

                  />
                </div>'
                {submitStatus === 'error' && (
                  <motion.div


                  />;
                </div>;
                {submitStatus === 'error' && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}



                
}
                <button;

                )}
                <button



                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2'
                >
                  {isSubmitting ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />'
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>



                  )}
</button>;
              </form>;
            )}




                <div>;
                  <label;
                    html_for='service';
                    className='block text - white font - medium mb - 2';
                  >;
                    Service of Interest;
                  </label>;

                  <select;
id='service'
                    name='service'

                    value={formData.service}
                    onChange={handleChang}
}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors'    />

                    <option value=''    />Select a service</option>;
                    {services.map(service => (<option;}
                        key={service}
                        value={service}

;



export default ContactForm;
)}export default ContactForm;

                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-gray-800 text-white">

                        {service}
                      </option>;
                    ))}

                  </select>
                </div>
                <div    />
<label;
htmlFor='message'
                    className='block text-white font-medium mb-2'    />;
                    Message *;
                  </label>;
                  <textarea;
id='message'

                    name='message'

                    value={formData.message}
                    onChange={handleChange}
                    required;
                    rows={5}


                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0}}
                    className = $2;
export default ContactForm,

          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default ContactForm;  )
}
export default ContactForm;

"

);
}
export default ContactForm;
origin/cursor/automate-test-improve-and-merge-code-2533
'"



