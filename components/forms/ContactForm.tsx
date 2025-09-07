
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  CheckCircle,
  AlertCircle,'
} from lucide-react;import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';


  ];

const services = [;
  'AI Development','Cloud Architecture','Digital Transformation','IoT Platforms','Blockchain Solutions','Data Analytics','Other'];'

const contactInfo = [;
  {"icon": Mail,"title": 'Email Us',"content": 'contact@ziontechgroup && ziontechgroup.com',"href": '"mailto":contact@ziontechgroup && ziontechgroup.com'},    {"icon": Phone,"title": 'Call Us',"content": '+1 (555) 123-4567',      "href": '"mailto":contact@ziontechgroup && ziontechgroup.com';'
}{"icon": Phone,"title": 'Call Us',"content": '+1 (555) 123-4567',"href": '"tel":+15551234567'},    {"icon": MapPin,"title": 'Visit Us',"content": '123 Tech Street, Innovation City, IC 12345',"href": '#'},return (<section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden'>;'
      {/* Background Elements */}<div className='absolute inset-0'>;'
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;'
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0 && 0.1),transparent_50%)]' />;'

      </div>;
'
      <div className='relative container mx-auto px-4'>        {/* Section Header */}      <div className="relative container mx-auto px-4">;

      <div className='relative container mx-auto px-4'>        {/* Section Header */}      <div className="relative container mx-auto px-4">"
];

;
  const contact_info = [;
    {}
      icon: Mail'
      title: 'Email Us''
      content: 'contact@ziontechgroup.com''
      href: 'mailto:contact@ziontechgroup.com'

  {

      }

      "icon": Mail,
      "title": 'Email Us','
      "content": 'contact@ziontechgroup.com','
"href": '"mailto":contact@ziontechgroup.com','
    },
    {
      }
      "icon": Phone,
      "title": 'Call Us','
      "content": '+1 (555) 123-4567','
"href": '"tel":+15551234567','
    },
    {
      }
      "icon": MapPin,
      "title": 'Visit Us','
      "content": '123 Tech Street, Innovation City, IC 12345','
"href": '#','
    }
  ];

return (;
    <section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden'>'

      {/* Background Elements */}
      <div className='absolute inset-0'>;'
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]' />;'
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]' />;'
      </div>;
      <div className='relative container mx-auto px-4'>;'
        {/* Section Header */}
        <motion.div;
          initial={{ "opacity": 0, "y": 30 
}
          whileInView={{ "opacity": 1, "y": 0 }}
          transition={{ "duration": 0.8 }}
          viewport={{ "once": true 
}

className='text-center mb-16''
        >
          <h2 className='text-4xl "md":text-6xl font-bold text-white mb-6'>'
            Let&apos;s Start a
            <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>'
              Conversation
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>'
            Ready to transform your business? Get in touch with our team of,
experts to discuss how we can help you achieve your technology,
goals.
          </p>
        </motion.div>
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>


        <div className='grid grid-cols-1 "lg": grid-cols-2 gap-12 max-w-7xl mx-auto'>'
          {/* Contact Information *
}

          <motion.div
          <motion&& motion.div,
initial={{ "opacity": 0, "x": -30 
}
            whileInView={{ "opacity": 1, "x": 0 
}
            transition={{ "duration": 0 && 0.8, "delay": 0 && 0.2 }}
            viewport={{ "once": true }}

className='space-y-8''
          >
            <div>
              <h3 className='text-2xl font-bold text-white mb-6'>'
                Get in Touch
              </h3>
              <p className='text-gray-300 leading-relaxed mb-8'>'
                Our team is here to help you navigate the complex world of,
technology and find the perfect solutions for your business,
needs. Reach out to us today.
              </p>
            </div>

            {/* Contact Details *
}
<div className='space-y-6'>;'
              {contactInfo.map((info, index) => (<motion.a;
                  }
                  key={info.title}
                  href={info.href}
                  initial={{ "opacity": 0, "x": -20 
}
                  whileInView={{ "opacity": 1, "x": 0 
}
                  transition={{ "duration": 0 && 0.6, "delay": 0 && 0.3 + index * 0 && 0.1 }}
                  viewport={{ "once": true }}

className='flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 "hover":border-blue-500/30 transition-all duration-300 group''
                >
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-"hover":scale-110 transition-transform duration-300'>'
                    <info.icon className='w-6 h-6 text-white' />'
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-1'>'
                      {info.title}
                    </h4>
                    <p className='text-gray-300 group-"hover":text-blue-400 transition-colors duration-300'>'

                      {info.conten
}
                    </p>;
                  </div>;
                </motion.a>;
              ))}
            </div>;
                  className='flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 "hover":border-blue-500/30 transition-all duration-300 group'>;'
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-"hover":scale-110 transition-transform duration-300'>;'
                    <info && info.icon className='w-6 h-6 text-white' />;'
                  </div>;
                  <div>;
                    <h4 className='text-lg font-semibold text-white mb-1'>;'
                      {info && info.title}
                    </h4>;
                    <p className='text-gray-300 group-"hover": text-blue-400 transition-colors duration-300'>                      {info && info.conten,'
}                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-"hover":scale-110 transition-transform duration-300">;"
                    <info && info.icon className="w-6 h-6 text-white" />;"
                  </div>;
                  <div>;
                    <h4 className="text-lg font-semibold text-white mb-1">{info && info.title}</h4>;"
                    <p className="text-gray-300 group-"hover":text-blue-400 transition-colors duration-300">;"
                      {info && info.content}
                    </p>;
                  </div>;
                </motion && motion.a>;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              ))}
            {/* Additional Info */}
            <motion&& motion.div;
              initial={{ "opacity": 0, "y": 20 
}
              whileInView={{ "opacity": 1, "y": 0 
}
              transition={{ "duration": 0 && 0.6, "delay": 0 && 0.6 }}

              viewport={{ "once": true }}

className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6''
            >
              <h4 className='text-lg font-semibold text-white mb-3'>'
                Why Choose Zion Tech?
              </h4>
              <ul className='space-y-2 text-gray-300'>'
                <li className='flex items-center space-x-2'>'
                  <CheckCircle className='w-5 h-5 text-green-400' />'
                  <span>Expert team with 10+ years experience</span>
                </li>
                <li className='flex items-center space-x-2'>'
                  <CheckCircle className='w-5 h-5 text-green-400' />'
                  <span>Proven track record of successful projects</span>
                </li>
                <li className='flex items-center space-x-2'>'
                  <CheckCircle className='w-5 h-5 text-green-400' />'
                  <span>24/7 support and maintenance</span>
                </li>
                <li className='flex items-center space-x-2'>'
                  <CheckCircle className='w-5 h-5 text-green-400' />'
=======
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: ','
    email: ,'
    company: ',
    phone: '',
    service: ','
    message: ,
  AlertCircle,
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
} from 'lucide-react';

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  AlertCircle;
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  CheckCircle,
  AlertCircle} from lucide-react;import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

  const [formData, setFormData] = useState({})
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    try {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus(success);
      setFormData({
        name: '',
        email: ,
        company: '',
        phone: ,
        service: '',
        message: });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);    }
    } finally {
      setIsSubmitting(false)
    }
import {Mail,Phone,MapPin,Send,CheckCircle,AlertCircle,use client;
import React, { useState  } from 'react';
import { motion  } from framer-motion;
import { Mail;
  Phone;
  MapPin;
  Send;
  CheckCircle;
  AlertCircle;import {Mail,Phone,MapPin,Send,CheckCircle,AlertCircle,CheckCircle,AlertCircle} from 'lucide-react';import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle  } from lucide-react;
const ContactForm: React.FC = () => {const [formData, setFormData] = useState({name: '',email: ,company: '',phone: ,service: '',message: ,AlertCircle} from 'lucide-react';const ContactForm: React.FC = () => {const [formData, setFormData] = useState({name: ,email: '',company: ,phone: '',service: ,message: ''})const [isSubmitting, setIsSubmitting] = useState(false)const [submitStatus, setSubmitStatus] = useState<;
    idle | 'success' | error;
  >('idle')...formData;
      [e && e.target.name]: e && e.target.value;
    })}// Simulate API call;
    try {await new Promise(resolve => setTimeout(resolve, 2000))setSubmitStatus(success)setFormData({name: '',email: ,company: '',phone: ,service: '',message: ,const handleChange = (e: React.ChangeEvent<;
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    >;
  ) => {setFormData({...formData,[e.target.name]: e.target.value})}const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()setIsSubmitting(true)// Simulate API call;
    try {await new Promise(resolve => setTimeout(resolve, 2000))setSubmitStatus('success')setFormData({name: ,email: '',company: ,phone: '',service: ,message: ''})} catch (error) {setSubmitStatus(error)} finally {setIsSubmitting(false)}
    } finally {setIsSubmitting(false)} finally {setIsSubmitting(false)}
  }
'AI Development',Cloud Architecture,'Digital Transformation',IoT Platforms,'Blockchain Solutions',Data Analytics,'Other'];const contactInfo = [;
    {icon: Mail,title: Email Us,content: 'contact@ziontechgroup && ziontechgroup.com',href: mailto:contact@ziontechgroup && ziontechgroup.com},    {icon: Phone,title: 'Call Us',content: +1 (555) 123-4567,      href: 'mailto:contact@ziontechgroup && ziontechgroup.com';
}{icon: Phone,title: Call Us,content: '+1 (555) 123-4567',href: tel:+15551234567},    {icon: MapPin,title: 'Visit Us',content: 123 Tech Street, Innovation City, IC 12345,href: '#'},return (<section className=py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden>;
      {/* Background Elements */}<div className='absolute inset-0'>;
        <div className=absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0 && 0.1),transparent_50%)] />;
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0 && 0.1),transparent_50%)]' />;
        message: 
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }

  ];

    {
      icon: Mail,
      title: Email Us','
      content: contact@ziontechgroup && ziontechgroup.com,'
      href: 'mailto:contact@ziontechgroup && ziontechgroup.com},    {

    {
      icon: Phone,
      title: 'Call Us',
      content: +1 (555) 123-4567','
      href: tel:+15551234567},    {
      icon: MapPin,'
      title: 'Visit Us,
      content: '123 Tech Street, Innovation City, IC 12345',
      href: #'},


    <section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden>
      {/* Background Elements */}

      <div className='absolute inset-0'>;
        <div className=absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;'
        <div className=absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0 && 0.1),transparent_50%)] />;
      </div>;
'
      <div className='relative container mx-auto px-4>        {/* Section Header */}      <div className="relative container mx-auto px-4>;

  ];
    {}
      icon: Mail
      title: 'Email Us'
      content: contact@ziontechgroup.com''
      href: mailto:contact@ziontechgroup.com


    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 123 Tech Street, Innovation City, IC 12345,

        {/* Section Header */}
        <motion.div;
=======
href: '#'}];

  return (
    <section className=py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className=absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)] />
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]' />
      </div>

      <div className=relative container mx-auto px-4>
        {/* Section Header */}
        <motion.div
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}

                      {info.content}
                    </p>
                  </div>
                </motion.a>

              ))}
            </div>

            {/* Additional Info */}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                  <span>Competitive pricing and flexible solutions</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>


          <motion&& motion.div;
            initial={{ "opacity": 0, "x": 30 
}
            whileInView={{ "opacity": 1, "x": 0 
}
            transition={{ "duration": 0 && 0.8, "delay": 0 && 0.4 }}


>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                >
                  Send Another Message
                </button>
              </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label'
                      htmlFor='name''
                      className='block text-white font-medium mb-2'
                    >
                      Full Name *
                    </label>
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
=======

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
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                    />
                  </div>
                </div>"
                      placeholder=Enter your email;
                    />;
                  </div>;
                </div>;


                      className=block text-white font-medium mb-2>;
                      Phone Number;
                    </label>;
                    <input'
                      type='tel
                      id='phone'
                      name=phone'
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                      value={formData && formData.phone}


>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                    onChange={handleChange}
                    required;
                    rows={5}'
                    className=w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}


                    <span>Something went wrong. Please try again.</span>
                  </motion.div>

                
}
                <button;

                      <span>Sending...</span>
                    </>
                  ) : (
                    <>

                      <span>Send Message</span>
                    </>
                  
}
                </button>;
              </form>;
            )}


                    className=block text - white font - medium mb - 2';
                  >;
                    Service of Interest;
                  </label>;

                    on_change={handle_change}
                    className="w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white focus:outline - none focus:border - blue-500 transition-colors";
                  >;
                    <option value=>Select a service</option>;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                        {service}
                      </option>))}
                  </select>;
                </div>;
                <div>;

                    className='block text - white font - medium mb - 2;
                  >;
                    Message *;
                  </label>;

                    rows={5}
                    className=w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - blue - 500 transition - colors resize - none';
                    placeholder='Tell us about your project or inquiry...                  />                  <label html_for="message" className=block text - white font-medium mb-2 html_for="input-;
                    Message *;

                  ">;
                    Message *;
                  </label>;
                  <textarea;
                    id=message";"
                    name=message;
                    on_change={handle_change}
                    required;

                    placeholder="Tell us about your project or inquiry...";
                  />;
                </div>;
                {submit_status === 'error' && (
                  <motion.div;
                    initial={{ opacity: 0, coordinate_y: -10 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    className=flex items - center space - x-2 text - red - 400 bg - red - 400 / 10 border border - red - 400 / 20 rounded - lg p - 4';

                    <span > Something went wrong. Please try again.</span>;
                  </motion.div>)}
                <button;'
                  type=submit;
                  disabled={is_submitting}'
                  className='w - full bg - gradient - to - r from - blue - 600 to - purple - 600 text - white py - 4 rounded - xl font - semibold text - lg hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 shadow - lg hover:shadow - xl transform hover:-translate - y-1 disabled:opacity - 50 disabled:cursor - not - allowed disabled:transform - none flex items - center justify - center space - x-2;
                >;
                  {is_submitting ? (
                    <>;
                      <div className='w - 5 h - 5 border - 2 border - white / 30 border - t-white rounded - full animate - spin' />                      <span > Sending...</span>;
                    </>) : (

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                      <span > Send Message</span>;
                    </>)}
                </button>;
              </form>)}
          </motion.div>;
        </div>;
      </div>;

    </section>);
}
export default ContactForm);
}
export default ContactForm;
  );
export default ContactForm;  )
}
export default ContactForm;

export default ContactForm;

          </motion.div>
        </div>
      </div>
    </section>

=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
);
}
export default ContactForm;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
