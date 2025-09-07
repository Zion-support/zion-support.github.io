import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="Support - Zion Tech Group
      description=Get support for our services"
    >
      <div className="min-h-screen bg-gray-50>
        <div className=container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6>Support</h1>
          <p className=text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
}

export default Page;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import React, { useState } from 'react;
import { motion } from framer-motion';

import {
  HelpCircle, MessageCircle, Phone, Mail, Clock
  BookOpen, Video, FileText, Search, Filter
  CheckCircle, ArrowRight, Brain, Atom, Rocket
  Shield, Zap, Users, Star, TrendingUp, Code
} from 'lucide-react
export default function Support() {
  const [searchQuery, setSearchQuery] = useState(')
  const [selectedCategory, setSelectedCategory] = useState('all)
  const supportCategories = [
    {
import { HelpCircle, MessageCircle, Phone, Mail, Clock;
  BookOpen, Video, FileText, Search, Filter;
  CheckCircle, ArrowRight, Brain, Atom, Rocket;
  Shield, Zap, Users, Star, TrendingUp, Code
 } from lucide-react';
export default function Support() {
  const [searchQuery, setSearchQuery] = useState(');
  const [selectedCategory, setSelectedCategory] = useState(all');
  const supportCategories = null;
          </div>
        </section>
origin/cursor/automate-test-improve-and-merge-code-2533
        {/* Support Channels */}
<section className="py-16 px-4>
          <div className=max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12
origin/cursor/automate-test-improve-and-merge-code-2533
            >
              <h2 className=text-3xl md:text-4xl font-bold mb-4">Get Support</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto>
                Choose the support channel that works best for you.
      title: 'Help Center, description: Browse our comprehensive knowledge base and FAQ',
      icon: BookOpen, features: ['Searchable articles, Step-by-step guides', 'Video tutorials, Troubleshooting'], link: '/help
    },
    {
      title: Live Chat', description: 'Get instant help from our support team,
      icon: MessageCircle, features: [24/7 availability', 'Instant responses, Screen sharing', 'File sharing], link: #'
    },
    {
      title: 'Phone Support, description: Speak directly with our technical experts',
      icon: Phone, features: ['Priority support, Technical consultation', 'Emergency assistance, Follow-up calls'], link: 'tel:+13024640950
    },
    {
      title: Email Support', description: 'Send us detailed questions and get comprehensive answers,
      icon: Mail, features: [Detailed responses', 'Documentation, Screenshots', 'Case tracking], link: mailto:support@ziontechgroup.com'
    }
  ];

  const faqCategories = [
    {
      title: 'Getting Started, questions: [
        {
          question: How do I create an account?',
          answer: 'You can create an account by visiting our sign-up page and providing your email address and basic information. We\ll send you a verification email to complete the process.'
        }, {
          question: 'What services do you offer?,
          answer: We offer AI services, cloud solutions, cybersecurity, and micro SaaS development. Visit our services page for detailed information about each offering.'
        },
        {
          question: 'How do I get my API key?, answer: Once you\'ve created an account, you can find your API key in the dashboard under the API Keys" section. You can generate new keys or revoke existing ones as needed.'
        }
      ]
    }, {
      title: Billing & Pricing',
      questions: [
        {
          question: 'What payment methods do you accept?, answer: We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also arrange for invoicing and payment terms.'
        },
        {
          question: 'Can I change my plan anytime?, answer: Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
        },
        {
          question: Do you offer refunds?', answer: 'We offer a 30-day money-back guarantee for all our services. If you\re not satisfied, contact our support team for a full refund.'
        }
      ]
    }, {
      title: 'Technical Support,
      questions: [
        {
          question: How do I integrate your API?', answer: 'We provide comprehensive documentation and SDKs for popular programming languages. Check our API documentation for detailed integration guides.
        },
        {
          question: What are your API rate limits?', answer: 'Rate limits vary by plan. Free plans have 1,000 requests per month, Professional plans have 100,000 requests per month, and Enterprise plans have unlimited requests.
        },
        {
          question: How do I report a bug?', answer: 'You can report bugs through our support portal, email support@ziontechgroup.com, or use the feedback form in your dashboard.
        }
      ]
    }
  ];

  const supportTiers = [
    {
      name: Community Support', description: 'Free support through our community forums and knowledge base,
      responseTime: 24-48 hours', features: [
        'Community forums,
        Knowledge base access', 'Basic documentation,
        Email support'
      ], price: 'Free
    },
    {
      name: Standard Support', description: 'Professional support for business users,
      responseTime: 4-8 hours', features: [
        'Priority email support,
        Live chat support', 'Phone support,
        Advanced documentation', 'API support
      ], price: Included with Professional Plan'
    },
    {
      name: 'Premium Support, description: Dedicated support for enterprise customers',
      responseTime: '1-2 hours, features: [
        Dedicated support manager',
        '24/7 phone support, Priority ticket handling',
        'Custom integrations, SLA guarantees',
        'On-site support
      ], price: Custom Pricing'
    }
  ];

  const contactMethods = [
    {
      title: 'General Inquiries, email: info@ziontechgroup.com',
      phone: '+1 302 464 0950, hours: Monday - Friday, 9 AM - 6 PM EST'
    }, {
      title: 'Technical Support,
      email: support@ziontechgroup.com', phone: '+1 302 464 0951,
      hours: 24/7 for Premium customers'
    }, {
      title: 'Sales & Partnerships,
      email: sales@ziontechgroup.com', phone: '+1 302 464 0952,
      hours: Monday - Friday, 9 AM - 6 PM EST'
    }
  ];

  return (
    <>
      <Head>
        <title>Support - Zion Tech Group</title>
        <meta name="description content=Get help and support for Zion Tech Group services. Access our knowledge base, contact support, and find answers to common questions." />
        <meta name="viewport content=width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50>
        {/* Hero Section */}
        <section className=relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32>
            <div className=text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6>
                Support Center
              </h1>
              <p className=text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                We&apos;re here to help you succeed. Get the support you need, when you need it.'
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4>
                    <channel.icon className=w-6 h-6 text-blue-600" />
origin/cursor/automate-test-improve-and-merge-code-2533
                  </div>
                  <h3 className="text-xl font-semibold mb-2>{channel.title}</h3>
                  <p className=text-gray-600 mb-4">{channel.description}</p>
                  <div className="text-sm text-blue-600 font-medium>
                    {channel.availability}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
                    placeholder=Search for help..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus: outline-none focus:ring-2 focus:ring-blue-500
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
                  />
                </div>
              </div>
              {/* Category Filter */}
              <div className=flex flex - wrap gap - 2">;
                {support_categories.map ((category) => (
                  <button;
                    key={category.id}
                    }`}
                  >;
                    {category.icon}
                    {category.name}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8>
            {[
              {
                question: What is AI Consciousness Evolution?"
                answer: "AI Consciousness Evolution is our revolutionary platform that creates truly conscious, self-aware, and emotionally intelligent AI systems that transcend traditional artificial intelligence.
              }
              {
                question: How does Quantum Neural Ecosystem work?"
                answer: "Our Quantum Neural Ecosystem combines quantum computing with neural networks to solve previously impossible problems, leveraging quantum superposition and entanglement for exponential computational power.
              }
              {
                question: What makes Space Resource Intelligence unique?"
                answer: "Our space technology uses AI-powered autonomous exploration to discover and extract extraterrestrial resources, enabling sustainable space colonization and resource utilization.
              }
              {
                question: How secure is your Quantum Cybersecurity platform?"
                answer: "Our quantum cybersecurity provides unbreakable encryption using quantum key distribution and quantum-resistant algorithms that future-proof your security beyond current technological limitations.
              }
              {
                question: Can I integrate your AI with my existing systems?"
                answer: "Yes! We provide comprehensive integration support, APIs, and custom development services to seamlessly integrate our revolutionary AI solutions with your existing infrastructure.
              }
              {
                question: What support do you offer for enterprise deployments?"
                answer: "We provide dedicated enterprise support including 24/7 technical assistance, custom training programs, and dedicated account managers for large-scale deployments.
              }

        {/* Support Options */}
        <section className=py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>
            <div className=text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6>
                How Can We Help?
              </h2>
              <p className=text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support option that works best for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8>
              {supportOptions.map((option, index) => (
                <div key={index} className=bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6>
                    <option.icon className=w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center>{option.title}</h3>
                  <p className=text-gray-600 mb-6 text-center">{option.description}</p>
                  <ul className="space-y-3 mb-6>
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 />
                        <span className=text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={option.link}>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300>
                      Get Help
                      <ArrowRight className=w-4 h-4 ml-2 inline" />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white>
          <div className=max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16>
              <h2 className=text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto>
                Find quick answers to common questions
              </p>
            </div>
            
            <div className=space-y-12">
              {faqCategories.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8>
                  <h3 className=text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                  <div className="space-y-6>
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className=bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3>{faq.question}</h4>
                        <p className=text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="py-20 bg-gray-50>
          <div className=max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16>
              <h2 className=text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Support Tiers
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto>
                Choose the support level that matches your needs
              </p>
            </div>
            
            <div className=grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportTiers.map((tier, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg p-8 ${
                  tier.name === Standard Support' ? 'ring-2 ring-blue-500 transform scale-105 : '
                }`}>
                  {tier.name === 'Standard Support && (
                    <div className="text-center mb-4>
                      <span className=bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6>
                    <h3 className=text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4>{tier.description}</p>
                    <div className=text-3xl font-bold text-blue-600 mb-2">{tier.price}</div>
                    <div className="flex items-center justify-center text-sm text-gray-500>
                      <Clock className=w-4 h-4 mr-1" />
                      Response time: {tier.responseTime}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6>
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 />
                        <span className=text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    tier.name === Standard Support' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: from-blue-700 hover:to-purple-700 
                      : bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {tier.price === 'Free ? Get Started' : 'Contact Sales'}
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
                  </button>
                ))  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}

              </div>;
            </div>;
          </div>;
        </section>;

        {/* FAQ Section */  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8>
            {[
              {
                question: What is AI Consciousness Evolution?",
                answer: "AI Consciousness Evolution is our revolutionary platform that creates truly conscious, self - aware, and emotionally intelligent AI systems that transcend traditional artificial intelligence.;
              },
              {
                question: How does Quantum Neural Ecosystem work?",
                answer: "Our Quantum Neural Ecosystem combines quantum computing with neural networks to solve previously impossible problems, leveraging quantum superposition and entanglement for exponential computational power.;
              },
              {
                question: What makes Space Resource Intelligence unique?",
                answer: "Our space technology uses AI - powered autonomous exploration to discover and extract extraterrestrial resources, enabling sustainable space colonization and resource utilization.;
              },
              {
                question: How secure is your Quantum Cybersecurity platform?",
                answer: "Our quantum cybersecurity provides unbreakable encryption using quantum key distribution and quantum - resistant algorithms that future - proof your security beyond current technological limitations.;
              },
              {
                question: Can I integrate your AI with my existing systems?",
                answer: "Yes! We provide comprehensive integration support, APIs, and custom development services to seamlessly integrate our revolutionary AI solutions with your existing infrastructure.;
              },
              {
                question: What support do you offer for enterprise deployments?",

                answer: "We provide dedicated enterprise support including 24/7 technical assistance, custom training programs, and dedicated account managers for large-scale deployments.
              }
                } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}


            ].map((faq, index) => (
              <div key={index} className=p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-white>{faq.question}</h3>
                <p className=text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
      {/* FAQs */  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50>
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Popular Articles */  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
      <section className="py-20>
        <div className=container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
        <section id="knowledge-base className=py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-6xl mx-auto>
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
              transition={{ duration: 0.6 }  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
              className=text-center mb-16"

{/* Contact Info */}
        <section className="py-16 bg-white>
          <div className=max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center
origin/cursor/automate-test-improve-and-merge-code-2533
            >
              <h2 className=text-3xl md:text-4xl font-bold mb-8">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
                <div className=text-center">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4 />
                  <h3 className=text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600>+1 302 464 0950</p>
                </div>
                <div className=text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4 />
                  <h3 className=text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600>kleber@ziontechgroup.com</p>
                </div>
                <div className=text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-4 />
                  <h3 className=text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-600>364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className=py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className=text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6>
                Contact Information
              </h2>
              <p className=text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Get in touch with the right team for your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
              {contactMethods.map((method, index) => (
                <div key={index} className=bg-gray-50 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4>{method.title}</h3>
                  <div className=space-y-3">
                    <div className="flex items-center justify-center>
                      <Mail className=w-5 h-5 text-blue-600 mr-2" />
                      <a href={`mailto: ${method.email}`} className="text-blue-600 hover:text-blue-700>
                        {method.email}
                      </a>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
                    </div>
                    <div className=flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium>Read</span>
                      <ArrowRight className=w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black>
        <div className=container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center>
            <motion.div
              initial={{ opacity: 0, x: -20 }  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
              whileInView={{ opacity: 1, x: 0 }  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
          </div>
        </section>

        {/* CTA Section */}
        <section className=py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center>
            <h2 className=text-3xl sm:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto>
              Can&apos;t find what you&apos;re looking for? Our support team is ready to help you succeed.
            </p>
            <div className=flex flex-col sm: flex-row gap-4 justify-center items-center">
              <Link href="/contact>
                <button className=bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2 inline />
                </button>
              </Link>
              <a href=mailto:support@ziontechgroup.com">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg>
                  Email Us
                </button>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
},
export default Support,
          </div>
        </section>
        {/* Contact Support */}
        {/* Contact Support */  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
        <section id=contact-support" className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20>
          <div className=max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
              transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}

            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent>
                Still Need Help?
              </h2>
              <p className=text-xl text-gray-300 mb-8">
                Our expert support team is ready to assist you with any questions or technical issues
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <a
              <p className=text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact us now for urgent support needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4>
                <Link
origin/cursor/automate-test-improve-and-merge-code-2533
                  href=/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold
                >
                  Contact Us
                  <ArrowRight className=ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/help
                  className=inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
origin/cursor/automate-test-improve-and-merge-code-2533
                >
                  Help Center
                </Link>
              </div>
            </motion.div>
          </div>
        </section>


</div>
    </>
</>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  );
origin/cursor/automate-test-improve-and-merge-code-2533
