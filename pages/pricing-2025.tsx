


=======
=======import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  ArrowRight, Check, Star, Users, Zap, Shield, Globe
  TrendingUp, Award, Clock, CheckCircle, ExternalLink
} from 'lucide-react'
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3';
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function Pricing2025() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' }
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: '🧠' }
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity & Quantum', icon: '🔒' }
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', icon: '🌐' }
    { id: 'Space Technology & Innovation', name: 'Space Technology & Innovation', icon: '🚀' }
    { id: 'Neural Technology & BCI', name: 'Neural Technology & BCI', icon: '🧬' }
  ]
  const filteredServices = innovative2025MicroSaasExpansionV3.filter(service =>
    selectedCategory === 'all' |service.category.includes(selectedCategory)
  )
  const getAnnualPrice = (monthlyPrice: string) => {
    const price = parseFloat(monthlyPrice.replace('$', ''))
    const annualPrice = price * 12 * 0.8, // 20% discount for annual
    return `$${Math.round(annualPrice)}`
import React, { useState } from 'react',
import Head from 'next / head',
import { motion } from 'framer-motion',
import {
  ArrowRight, Check, Star, Users, Zap, Shield, Globe,
  TrendingUp, Award, Clock, CheckCircle, ExternalLink;
} from 'lucide-react',
import EnhancedNavigation from '../components / EnhancedNavigation',
import EnhancedFooter from '../components / EnhancedFooter',
import { innovative2025MicroSaasExpansionV3 } from '../data / 2025 - innovative - micro - saas - expansion - v3',
export default /**
 * Pricing2025 - Function description
 */
function Pricing2025() {
  const [selected_category, setSelectedCategory] = useState ('all'),
  const [billing_cycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly'),
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: '🧠' },
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity & Quantum', icon: '🔒' },
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', icon: '🌐' },
    { id: 'Space Technology & Innovation', name: 'Space Technology & Innovation', icon: '🚀' },
    { id: 'Neural Technology & BCI', name: 'Neural Technology & BCI', icon: '🧬' }
  ],
  const filtered_services = innovative2025MicroSaasExpansionV3.filter (service =>;

=======
      {/* Hero Section */}
      <section className="relative py - 20 px - 6">;
        <div className="max - w-7xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}

=======
      {/* Hero Section */}      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              2025 Pricing & Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">

              Transparent pricing for our comprehensive collection of innovative micro SAAS services, 


              AI solutions, quantum technologies, and revolutionary IT services.
            </p>
                {/* Rating */}
                <div className="flex items - center justify - center gap - 2 mb - 6">;
                  <div className="flex items - center gap - 1">;
                    {[...Array (5)].map ((_, i) => (
                      <Star;
                        key={i}
                        className={`w - 4 h - 4 ${
                          i < Math.floor (service.rating) ? 'text - yellow - 400 fill - current' : 'text - white / 20';
                        }`}

                  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
                {/* Rating */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        className={`w-4 h-4 ${;
                          i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-white/20';
                        }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      />;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}                  </div>
                  <span className="text-white/60 text-sm">
                    {service.rating} ({service.reviews} reviews)
                  </span>
                </div>
                      />))}
                  </div>;
                  <span className="text - white / 60 text - sm">;
                    {service.rating} ({service.reviews} reviews);
                  </span>;
                </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Features */}
                <div className="mb - 8">;
                  <h4 className="text - white font - semibold mb - 4 text - center">Key Features:</h4>;
                  <div className="space - y-3">;
                    {service.features.slice (0, 5).map ((feature, idx) => (
                      <div key={idx} className="flex items - center gap - 3 text - sm text - white / 80">;
                        <CheckCircle className="w - 4 h - 4 text - cyan - 400 flex - shrink - 0" />;
                        <span>{feature}</span>;
                      </div>))}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 text-center">Key Features:</h4>
                  <div className="space-y-3">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-white/80">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    {service.features.length > 5 && (


                {/* ROI and Setup */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                <div className="mb-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-400/20">
                  <div className="text-cyan-400 font-semibold mb-2 text-center">🚀 Expected ROI:</div>
                  <p className="text-white/80 text-sm text-center">{service.roi}</p>
                  <div className="mt-3 grid grid-cols-2 gap-4 text-center text-sm">
                    <div>
                      <div className="text-white/60">Setup Time</div>
                      <div className="text-white font-medium">{service.setupTime}</div>
                    </div>
                    <div>
                      <div className="text-white/60">Trial Period</div>
                      <div className="text-white font-medium">{service.trialDays} days</div>
                    </div>
                  </div>
                </div>

                      <div className="text - cyan - 400 text - sm font - medium text - center">;
                        +{service.features.length - 5} more features;
                      </div>)}
                  </div>;
                </div>;
                {/* Market Info */}
                <div className="grid grid - cols - 2 gap - 4 mb - 6 text - sm">;
                  <div className="text - center p - 3 bg - white / 5 rounded - lg">;
                    <div className="text - white / 60 mb - 1">Market Size</div>;
                    <div className="text - white font - medium">{service.market_size}</div>;
                  </div>;
                  <div className="text - center p - 3 bg - white / 5 rounded - lg">;
                    <div className="text - white / 60 mb - 1">Growth Rate</div>;
                    <div className="text - white font - medium">{service.growth_rate}</div>;
                  </div>;
                </div>;
                {/* ROI and Setup */}
                <div className="mb - 8 p - 4 bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 rounded - lg border border - cyan - 400 / 20">;
                  <div className="text - cyan - 400 font - semibold mb - 2 text - center">🚀 Expected ROI:</div>;
                  <p className="text - white / 80 text - sm text - center">{service.roi}</p>;
                  <div className="mt - 3 grid grid - cols - 2 gap - 4 text - center text - sm">;
                    <div>;
                      <div className="text - white / 60">Setup Time</div>;
                      <div className="text - white font - medium">{service.setup_time}</div>;
                    </div>;
                    <div>;
                      <div className="text - white / 60">Trial Period</div>;
                      <div className="text - white font - medium">{service.trial_days} days</div>;
                    </div>;
                  </div>;
                </div>;                {/* Action Buttons */}
                <div className="space - y-3">;
                  <a;
                    href={service.link}

                {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="space-y-3">
                  <a
                    href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-white text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Get Started
                    <ExternalLink className="w-4 h-4" />

                  </Link>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}&body=Hi, I'm interested in learning more about your ${service.name} service. Please provide more information about pricing, features, and implementation.`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                    className="w-full px-6 py-3 border border-white/20 hover:border-cyan-400/30 rounded-lg font-semibold text-white text-center transition-all duration-300 hover:bg-white/5"
                  >
                    Contact Sales
                  </a>
                </div>


                {/* Contact Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <div className="text-white/60 text-sm mb-2">Need help? Contact us:</div>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <a href={`tel:${service.contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300">


                      📞 {service.contactInfo.mobile  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </Link>
                    <a href={`mailto:${service.contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                      ✉️ {service.contactInfo.email  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </motion.div>;
          {/* No Results */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-white/70 mb-6">Try selecting a different category</p>
              <button


                onClick={() => setSelectedCategory('all')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                View All Services
              </button>
            </div>

                    target="_blank";
                    rel="noopener noreferrer";
                    className="w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 rounded - lg font - semibold text - white text - center transition - all duration - 300 transform hover:scale - 105 flex items - center justify - center gap - 2";
                  >;
                    Get Started;
                    <ExternalLink className="w - 4 h - 4" />;
                  </a>;
                  <a;
                    href={`mailto:kleber@ziontechgroup.com?subject = Inquiry about ${service.name}&body = Hi, I'm interested in learning more about your ${service.name} service. Please provide more information about pricing, features, and implementation.`}
                    className="w - full px - 6 py - 3 border border - white / 20 hover:border - cyan - 400 / 30 rounded - lg font - semibold text - white text - center transition - all duration - 300 hover:bg - white / 5";
                  >;
                    Contact Sales;
                  </a>;
                </div>;
                {/* Contact Info */}
                <div className="mt - 6 pt - 4 border - t border - white / 10 text - center">;
                  <div className="text - white / 60 text - sm mb - 2">Need help? Contact us:</div>;
                  <div className="flex items - center justify - center gap - 4 text - sm">;
                    <a href={`tel:${service.contact_info.mobile}`} className="text - cyan - 400 hover:text - cyan - 300">;
                      📞 {service.contact_info.mobile}
                    </a>;
                    <a href={`mailto:${service.contact_info.email}`} className="text - cyan - 400 hover:text - cyan - 300">;
                      ✉️ {service.contact_info.email}
                    </a>;
                  </div>;
                </div>;
              </motion.div>))}
          </motion.div>;
          {/* No Results */}
          {filtered_services.length === 0 && (
            <div className="text - center py - 20">;
              <div className="text - 6xl mb - 4">🔍</div>;
              <h3 className="text - 2xl font - bold text - white mb - 2">No services found</h3>;
              <p className="text - white / 70 mb - 6">Try selecting a different category</p>;
              <button;
                on_click={() => setSelectedCategory ('all')}
                className="px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 rounded - lg font - semibold text - white hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300";
              >;
                View All Services;
              </button>;
            </div>)}
        </div>;
      </section>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Enterprise Solutions */}
      <section className="py - 20 px - 6 bg - gradient - to - r from - white / 5 to - white / 10">;
        <div className="max - w-4xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      </section>;
      {/* Enterprise Solutions */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Need Enterprise Solutions?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">



              for organizations requiring multiple services or specialized implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Inquiry&body=Hi, I'm interested in enterprise solutions and volume pricing. Please provide more information about your enterprise offerings, custom implementations, and dedicated support options."
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Contact Enterprise Sales
                <ArrowRight className="w-5 h-5" />


              </Link>


              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

          >;
            <h2 className="text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - white to - blue - 100 bg - clip - text text - transparent">;
              Need Enterprise Solutions?;
            </h2>;
            <p className="text - xl text - white / 70 mb - 8 max - w-2xl mx - auto">;
              We offer custom enterprise solutions, volume discounts, and dedicated support;
              for organizations requiring multiple services or specialized implementations.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <a;
                href="mailto:kleber@ziontechgroup.com?subject = Enterprise Solutions Inquiry & body = Hi, I'm interested in enterprise solutions and volume pricing. Please provide more information about your enterprise offerings, custom implementations, and dedicated support options.";
                className="px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center justify - center gap - 2";
              >;
                Contact Enterprise Sales;
                <ArrowRight className="w - 5 h - 5" />;
              </a>;
              <a;
                href="tel:+13024640950";
                className="px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 backdrop - blur - sm bg - white / 5 hover:bg - white / 10";
              >;
                Call Us Now;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* FAQ Section */}
      <section className="py - 20 px - 6">;
        <div className="max - w-4xl mx - auto">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

      {/* FAQ Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-6">
            {[
              {
            className="text - center mb - 16";
          >;
            <h2 className="text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - white to - blue - 100 bg - clip - text text - transparent">;
              Frequently Asked Questions;
            </h2>;
          </motion.div>;
          <div className="space - y-6">;
            {[;
              {


                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can arrange custom payment terms.";
              },
              {
                question: "Do you offer free trials?",
                answer: "Yes! All our services come with free trial periods ranging from 14 to 60 days, depending on the service complexity.";
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees. Your service will remain active until the end of your billing period.";
              },
              {
                question: "Do you offer volume discounts?",
                answer: "Yes, we offer volume discounts for organizations using multiple services. Contact our sales team for custom pricing and enterprise solutions.";
              },
              {
                question: "What kind of support do you provide?",
                answer: "We provide comprehensive support including documentation, tutorials, email support, and priority support for enterprise customers. Some services include dedicated account managers.";
              },
              {
                question: "Can I upgrade or downgrade my plan?",

=======
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."


                className="p-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </motion.div>


  );
};

=======            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.";
              }
            ].map ((faq, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
}
=======
=======
}

=======                className="p - 6 rounded - xl border border - white / 10 bg - gradient - to - r from - white / 5 to - white / 10 backdrop - blur - xl";
              >;
                <h3 className="text - xl font - bold text - white mb - 3">{faq.question}</h3>;
                <p className="text - white / 70 leading - relaxed">{faq.answer}</p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      <EnhancedFooter />;

    </div>);

  const _filteredServices = innovative2025MicroSaasExpansionV3.filter(service => 
    selectedCategory === 'all' || service.category.includes(selectedCategory)
  ),

  const getAnnualPrice = (monthlyPrice: string) => {
    const price = parseFloat(monthlyPrice.replace('$', '')),
    const annualPrice = price * 12 * 0.8, // 20% discount for annual
    return `$${Math.round(annualPrice)}`
  },

  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.5}
    }
  },

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>2025 Pricing & Services — Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services. Transparent pricing with flexible plans.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;2025 Pricing & Services — Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;pricing, micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/pricing-2025&quot; />
      
        <script type=&quot;application/ld+json&quot;>{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;WebPage&quot;,&quot;headline&quot;:&quot;2025 Pricing & Services — Zion Tech Group&quot;,&quot;url&quot;:&quot;https://ziontechgroup.com/pricing-2025&quot;,&quot;isPartOf&quot;:{&quot;@type&quot;:&quot;WebSite&quot;,&quot;name&quot;:&quot;Zion Tech Group&quot;,&quot;url&quot;:&quot;https://ziontechgroup.com&quot;}}</script></Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent&quot;>
              2025 Pricing & Services
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8&quot;>
              Transparent pricing for our comprehensive collection of innovative micro SAAS services, 
              AI solutions, quantum technologies, and revolutionary IT services.
            </p>
            
            {/* Billing Toggle */}
            <div className=&quot;flex items-center justify-center gap-4 mb-12&quot;>
  }
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }
    visible: {
      opacity: 1
      y: 0
      transition: {
        duration: 0.5
      }
    }
  }
import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {;
  ArrowRight, Check, Star, Users, Zap, Shield, Globe,;
  TrendingUp, Award, Clock, CheckCircle, ExternalLink;
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3';
export default function Pricing2025(req, res) {
  try {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀' },;
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: '🧠' },;
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity & Quantum', icon: '🔒' },;
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', icon: '🌐' },;
    { id: 'Space Technology & Innovation', name: 'Space Technology & Innovation', icon: '🚀' },;
    { id: 'Neural Technology & BCI', name: 'Neural Technology & BCI', icon: '🧬'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const filteredServices = innovative2025MicroSaasExpansionV3.filter(service =>;
    selectedCategory === 'all' || service.category.includes(selectedCategory);
  );
  const getAnnualPrice = (monthlyPrice: string) => {;
    const price = parseFloat(monthlyPrice.replace('$', '')),;
    const annualPrice = price * 12 * 0.8, // 20% discount for annual;
    return `$${Math.round(annualPrice)}`;
  },;
  const containerVariants = {;
    hidden: { opacity: 0 };
    visible: {;
      opacity: 1;
      transition: {;
        staggerChildren: 0.1;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  const itemVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 0.5;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>2025 Pricing & Services — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services. Transparent pricing with flexible plans." />
        <meta property="og:title" content="2025 Pricing & Services — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services." />
        <meta name="keywords" content="pricing, micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing-2025" />
        <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","headline":"2025 Pricing & Services — Zion Tech Group","url":"https://ziontechgroup.com/pricing-2025","isPartOf":{"@type":"WebSite","name":"Zion Tech Group","url":"https://ziontechgroup.com"}}</script></Head>
      <EnhancedNavigation />
      {/* Hero Section */}
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              2025 Pricing & Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Transparent pricing for our comprehensive collection of innovative micro SAAS services
              Transparent pricing for our comprehensive collection of innovative micro SAAS services, 
              AI solutions, quantum technologies, and revolutionary IT services.
            </p>
            {/* Billing Toggle */}
              Transparent pricing for our comprehensive collection of innovative micro SAAS services,
              AI solutions, quantum technologies, and revolutionary IT services.
            </p>
            {/* Billing Toggle */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-white/60'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${;
                  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-white/20';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                  billingCycle === 'annual' ? 'right-1' : 'left-1'
                }`} />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-white/60'}`}>
                Annual
                <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Category Filter */}
      {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className="py-8 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
                key={category.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                onClick={() => setSelectedCategory(category.id)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 ${;
                  selectedCategory === category.id;
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white';
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >;
                <span>{category.icon}</span>;
                {category.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </button>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Pricing Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

              for organizations requiring multiple services or specialized implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Inquiry&body=Hi, I'm interested in enterprise solutions and volume pricing. Please provide more information about your enterprise offerings, custom implementations, and dedicated support options."
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Contact Enterprise Sales
                <ArrowRight className="w-5 h-5" />
              </a>
              </Link>              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* FAQ Section */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-6">
            {[
              {
                question: "What payment methods do you accept?"
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can arrange custom payment terms."
              }
              {
                question: "Do you offer free trials?"
                answer: "Yes! All our services come with free trial periods ranging from 14 to 60 days, depending on the service complexity."
              }
              {
                question: "Can I cancel my subscription anytime?"
                answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees. Your service will remain active until the end of your billing period."
              }
              {
                question: "Do you offer volume discounts?"
                answer: "Yes, we offer volume discounts for organizations using multiple services. Contact our sales team for custom pricing and enterprise solutions."
              }
              {
                question: "What kind of support do you provide?"
                answer: "We provide comprehensive support including documentation, tutorials, email support, and priority support for enterprise customers. Some services include dedicated account managers."
              }
              {
                question: "Can I upgrade or downgrade my plan?"

                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                question: "What payment methods do you accept?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."

                className="p-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </motion.div>

  );
};

=======            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
}

=======
                className="p - 6 rounded - xl border border - white / 10 bg - gradient - to - r from - white / 5 to - white / 10 backdrop - blur - xl";
              >;
                <h3 className="text - xl font - bold text - white mb - 3">{faq.question}</h3>;
                <p className="text - white / 70 leading - relaxed">{faq.answer}</p>;
              </motion.div>))}          </div>;
        </div>;
      </section>;
      <EnhancedFooter />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
