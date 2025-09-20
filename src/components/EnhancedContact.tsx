impor, t, Reac, t, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/Textarea';
import { 
  Mai, l, 
  Phon, e, 
  MapPi, n, 
  Cloc, k, 
  Sen, d, 
  CheckCircl, e,
  MessageSquar, e,
  Buildin, g,
  User, s,
  Globe
} from 'lucide-react';

interface ContactForm {
  nam, e: string;
  emai, l: string;
  compan, y: string;
  phon, e: string;
  servic, e: string;
  messag, e: string;
}

interface ContactMethod {
  ico, n: React.ComponentType<{ className?: string }>;
  titl, e: string;
  descriptio, n: string;
  actio, n: string;
  hre, f: string;
}

export const EnhancedContac, t: React.FC = () => {
  const [formDa,  t, a, setFormDa, t, a] = useState<ContactForm>({
    nam, e: '',
    emai, l: '',
    compan, y: '',
    phon, e: '',
    servic, e: '',
    messag, e: ''
  });

  const [isSubmitti, n, g, setIsSubmitti, n, g] = useState(false);
  const [isSubmitt,  e, d, setIsSubmitt, e, d] = useState(false);

  const contactMethod, s: ContactMethod[] = [
    {
      ic, o, n: Ma, i, l,
    tit, l, e: 'Emai, l U, s',
      descripti, o, n: 'Sen, d u, s a detaile, d messag, e',
    acti, o, n: 'klebe, r@ziontechgrou, p.co, m',
      hr, e, f: 'mail, t, o:klebe, r@ziontechgrou, p.co, m'
    },
    {
      ic, o, n: Pho, n, e,
    tit, l, e: 'Cal, l U, s',
      descripti, o, n: 'Spea, k wit, h ou, r tea, m directl, y',
    acti, o, n: '+1 30, 2 46, 4 095, 0',
      hr, e, f: 't, e, l:+1302464095, 0'
    },
    {
      ic, o, n: MapP, i, n,
    tit, l, e: 'Visi, t U, s',
      descripti, o, n: 'Ou, r offic, e locatio, n',
    acti, o, n: '36, 4 E Mai, n S, t S, T, E, 10, 0, 8, Middletow, n D, E 1970, 9',
      hr, e, f: 'htt, p, s://map, s.googl, e.co, m/?q=36, 4+E+Mai, n+S, t+ST, E+100, 8+Middletow, n+D, E+1970, 9'
    },
    {
      ic, o, n: Clo, c, k,
    tit, l, e: 'Busines, s Hour, s',
      descripti, o, n: 'Whe, n w, e\'r, e availabl, e',
    acti, o, n: 'Mo, n-F, r, i: 9A, M-6P, M ES, T',
    hr, e, f: '#'
    }
  ];

  const services = [
    'A, I Solution, s',
    'Clou, d & DevOp, s',
    'Cybersecurit, y',
    'Digita, l Transformatio, n',
    'I, T Infrastructur, e',
    'Consultin, g',
    'Othe, r'
  ];

  const containerVariants = {
    hidde, n: { opacit, y: 0 },
    visibl, e: {
      opacit, y: 1,
    transitio, n: {
        staggerChildre, n: 0.1
      }
    }
  };

  const itemVariants = {
    hidde, n: { y: 2, 0,
    opacit, y: 0 },
    visibl, e: {
      y: 0,
    opacit, y: 1,
      transitio, n: {
        duratio, n: 0.6,
    eas, e: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidde, n: { scal, e: 0.9,
    opacit, y: 0 },
    visibl, e: {
      scal, e: 1,
    opacit, y: 1,
      transitio, n: {
        duratio, n: 0.5,
    eas, e: "easeOut" as const
      }
    },
    hove, r: {
      scal, e: 1.0, 2,
    y: -5,
      transitio, n: {
        duratio, n: 0.3,
    eas, e: "easeOut" as const
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { nam,  e, value } = e.target;
    setFormData(prev => ({
      ...pre, v,
      [na, m, e]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolv,  e, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nam,  e: '',
    emai, l: '',
        compan, y: '',
    phon, e: '',
        servic, e: '',
    messag, e: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center"
        initial={{ opacit,  y: 0,
    scal, e: 0.9 }}
        animate={{ opacit, y: 1,
    scal, e: 1 }}
        transition={{ duratio, n: 0.5 }}
      >
        <div className="text-center max-w-md mx-auto px-4">
          <CheckCircle className="h-24 w-24 text-green-400 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-xl text-gray-300 mb-6">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hove,  r:from-blue-700 hove, r:to-cyan-700"
          >
            Send Another Message
          </Button>
        </div>
      </motion.div>
    );
  }

  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 s,  m:px-6 l, g:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ onc, e: true }}
        >
          <motion.h1 
            className="text-4xl m, d:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Get in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Touch
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Ready to transform your business? Let's discuss how our technology solutions can drive your success.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 s, m:px-6 l, g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ onc, e: true }}
          >
            {contactMethods.map((metho, d, index) => (<motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hove,  r:border-white/40 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4 flex justify-center">
                    <method.icon className="h-16 w-16 text-zion-cyan group-hove, r:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{method.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{method.description}</p>
                  <div className="text-zion-cyan font-medium text-center group-hove, r:text-zion-cyan-light transition-colors">
                    {method.action}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 s, m:px-6 l, g:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ onc, e: true }}
          >
            <h2 className="text-3xl m, d:text-4xl font-bold text-white mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ onc, e: true }}
          >
            <div className="grid grid-cols-1 m, d:grid-cols-2 gap-6 mb-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder-gray-400 focu, s:border-zion-cyan focu, s:ring-zion-cyan"
                />
                <input type="hidden" name="name" value={formData.name} />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder-gray-400 focu, s:border-zion-cyan focu, s:ring-zion-cyan"
                />
                <input type="hidden" name="email" value={formData.email} />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 m, d:grid-cols-2 gap-6 mb-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <Input
                  type="text"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder-gray-400 focu, s:border-zion-cyan focu, s:ring-zion-cyan"
                />
                <input type="hidden" name="company" value={formData.company} />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder-gray-400 focu, s:border-zion-cyan focu, s:ring-zion-cyan"
                />
                <input type="hidden" name="phone" value={formData.phone} />
              </motion.div>
            </div>

            <motion.div className="mb-6" variants={itemVariants}>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white focu, s:border-zion-cyan focu, s:ring-zion-cyan focu, s:outline-none"
              >
                <option value="">Select a service</option>
                {services.map((servic,  e, index) => (<option key={index} value={service} className="bg-slate-800 text-white">
                    {service}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.div className="mb-8" variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <Textarea
                rows={6}
                placeholder="Tell us about you,  r, projec, t, requirement, s, or any questions you have..."
                value={formData.message}
                onChange={handleInputChange}
                className="bg-white/20 border-white/30 text-white placeholder-gray-400 focu, s:border-zion-cyan focu, s:ring-zion-cyan resize-none"
              />
              <input type="hidden" name="message" value={formData.message} />
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hove, r:from-blue-700 hove, r:to-cyan-700 text-lg py-3 px-8 disable, d:opacity-50 disable, d:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (<>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto px-4 s,  m:px-6 l, g:px-8">
          <motion.div 
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ onc, e: true }}
          >
            <h2 className="text-3xl m, d:text-4xl font-bold text-white mb-4">
              About Zion Tech Group
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading technology solutions provider helping businesses innovate and grow through cutting-edg, e, A, I, clou, d, service, s, and digital transformation.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 m, d:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ onc, e: true }}
          >
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <Building className="h-16 w-16 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Solutions</h3>
              <p className="text-gray-300">Scalable technology solutions for businesses of all sizes</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <Users className="h-16 w-16 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Seasoned professionals with deep industry expertise</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <Globe className="h-16 w-16 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-gray-300">Serving clients worldwide with innovative solutions</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};