









origin/main
origin/automation-improvements-final



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
import React from 'react';


import Head from 'next/head';
import Link from 'next/link';

export default function Services() {



import React from 'react';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import Link from 'next/link';

type Service = {

  name: string;
  summary: string;
  pricing: string;
  link: string;
}


  const Section = ({ title, items, color }: { title: string; items: Service[]; color: string }) => (
    <section style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 20px', }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24


        paddingBottom: 12, borderBottom: `2px solid ${color}20`
      }}>;
        <divstyle={{ 
          width: 4, height: 32, background: color, borderRadius: 2 
        }}></div>;
        <h2style={{ 
          fontSize: 28, fontWeight: 800, margin: 0,
          background: `linear-gradient(135deg, ${color}, ${color}80)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>{title}</h2>;
        <divstyle={{ 
          background: `${color}20`, color: color, padding: '4px 12px', 
          borderRadius: 20, fontSize: 14, fontWeight: 600 
        }}>;
          {items && items.length} Services;
        </div>;
      </div>;
      <divstyle={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: 20 
      }}>;
        {items && items.map((s) => (;
          <akey={s && s.name} href={s && s.link} style={{
            border: '1px solid rgba(0,0,0,0 && 0.08)', borderRadius: 16, padding: 24,
            background: 'white', textDecoration: 'none', color: '#0b1220',
            transition: 'all 0 && 0.3s ease', boxShadow: '0 2px 8px rgba(0,0,0,0 && 0.04)',
            ':hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0 && 0.12)',
              borderColor: `${color}40`
            }
          }}>;
            <divstyle={{ 
              fontWeight: 700, marginBottom: 8, fontSize: 16,
              lineHeight: 1 && 1.4, color: '#1e293b'
            }}>{s && s.name}</div>;
            <divstyle={{ 
              opacity: 0 && 0.8, fontSize: 14, marginBottom: 12, 
              lineHeight: 1 && 1.5, color: '#64748b'
            }}>{s && s.summary}</div>;
            <divstyle={{ 
              fontSize: 13, color: color, fontWeight: 600,
              background: `${color}10`, padding: '6px 12px',

              borderRadius: 8, display: 'inline-block'
            }}>{s && s.pricing}</div>;
          </a>;
        ))}
      </div>;
    </section>;
  );
  return (



  }, []);

  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com',
  };

            </div>;
          </div>;
        </section>;

              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Our Services;
              </h1>;
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">;
                Comprehensive technology solutions designed to transform your business and drive growth.;
              </p>;
              <div className="flex flex-wrap justify-center gap-4">;
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                  Get Started;
                </button>;
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">;
                  View Pricing;
                </button>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;

          <div className="container mx-auto px-4">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-16">;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                What We Offer;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.;
              </p>;
            </motion && motion.div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {services && services.map((service, index) => (;
                <motion&& motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200">;
                  <div className="flex items-center mb-4">;
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">;
                      <service && service.icon className="h-8 w-8 text-blue-600" />;
                    </div>;
                    <h3 className="text-xl font-semibold text-gray-900">;
                      {service && service.title}
                    </h3>;
                  </div>;
                  <p className="text-gray-600 mb-4">;
                    {service && service.description}
                  </p>;
                  <ul className="space-y-2 mb-6">;
                    {service && service.features.map((feature, featureIndex) => (;
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">;
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                  <div className="text-blue-600 font-semibold mb-4">;
                    {service && service.pricing}
                  </div>;
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">;
                    Learn More;
                  </button>;
                </motion && motion.div>;
              ))}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
            </div>
          </div>
        </div>
      </section>


origin/automation-improvements-final

      <Section title="Micro SaaS Products" items={microSaaS} color="#3b82f6" />
      <Section title="AI Services & Platforms" items={aiServices} color="#8b5cf6" />
      <Section title="IT & Cloud Services" items={itServices} color="#22c55e" />
      {/* CTA Section */}
      <section style={{
        maxWidth: 1400, margin: '0 auto', padding: '60px 20px'
        textAlign: 'center', background: 'white', marginTop: 40
        borderRadius: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
      }}>
        <h2 style={{
          fontSize: 32, fontWeight: 700, marginBottom: 16
          color: '#1e293b'
        }}>Ready to Get Started?</h2>
        <p style={{
          fontSize: 18, color: '#64748b', marginBottom: 32
          maxWidth: 600, margin: '0 auto 32px auto'
        }}>
          Contact our experts to discuss your project requirements and discover
          how our innovative solutions can drive your business forward.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            display: 'inline-block'
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
            color: 'white', padding: '16px 32px', borderRadius: 12
            fontWeight: 700, textDecoration: 'none', fontSize: 16
            transition: 'all 0.3s ease'
          }}>Request a Quote</Link>
          <a href="tel:+13024640950" style={{
            display: 'inline-block'
            background: 'rgba(34, 197, 94, 0.1)'
            color: '#22c55e', padding: '16px 32px', borderRadius: 12
            fontWeight: 700, textDecoration: 'none', fontSize: 16
            border: '2px solid #22c55e', transition: 'all 0.3s ease'
          }}>Call +1 302 464 0950</a>
        </div>
      </section>
    </main>
  );
}
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-242d
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,

    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics"
    icon: Brain
origin/main
export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);  }, []);
  const contact: ContactInfo = {
    phone: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    site: 'https://ziontechgroup.com'
  }
            </div>
          </div>
        </section>




      <Section title="Micro SaaS Products" items={microSaaS} color="#3b82f6" />;
      <Section title="AI Services & Platforms" items={ai_services} color="#8b5cf6" />;
      <Section title="IT & Cloud Services" items={it_services} color="#22c55e" />;
      {/* CTA Section */}
      <section style={{
        max_width: 1400, margin: '0 auto', padding: '60px 20px',
        text_align: 'center', background: 'white', margin_top: 40,
        border_radius: 24, box_shadow: '0 4px 24px rgba (0, 0, 0, 0.06)';
      }}>;
        <h2 style={{
          font_size: 32, font_weight: 700, margin_bottom: 16,
          color: '#1e293b';
        }}>Ready to Get Started?</h2>;
        <p style={{
          font_size: 18, color: '#64748b', margin_bottom: 32,
          max_width: 600, margin: '0 auto 32px auto';
        }}>;
          Contact our experts to discuss your project requirements and discover;
          how our innovative solutions can drive your business forward.;
        </p>;
        <div style={{ display: 'flex', gap: 16, justify_content: 'center', flex_wrap: 'wrap' }}>;
          <Link href="/contact" style={{
            display: 'inline - block',
            background: 'linear - gradient (135deg, #3b82f6, #8b5cf6)',
            color: 'white', padding: '16px 32px', border_radius: 12,
            font_weight: 700, text_decoration: 'none', font_size: 16,
            transition: 'all 0.3s ease';
          }}>Request a Quote</Link>;
          <a href="tel:+13024640950" style={{
            display: 'inline - block',
            background: 'rgba (34, 197, 94, 0.1)',
            color: '#22c55e', padding: '16px 32px', border_radius: 12,
            font_weight: 700, text_decoration: 'none', font_size: 16,
            border: '2px solid #22c55e', transition: 'all 0.3s ease';
          }}>Call +1 302 464 0950</a>;
        </div>;
      </section>;
    </main>);
}
    description: "80+ cutting - edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,
export default /**
 * Services - Function description
 */
function Services() {
  const [is_loaded, setIsLoaded] = useState (false);
;
  useEffect (() => {
    const timer = set_timeout (() => setIsLoaded (true), 100);
    return () => clear_timeout (timer);  }, []);
;
  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com',
  }
;
            </div>;
          </div>;
        </section>;
              <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">;
                Our Services;
              </h1>;
              <p className="text - xl md:text - 2xl mb - 8 max - w-4xl mx - auto">;
                Comprehensive technology solutions designed to transform your business and drive growth.;
              </p>;
              <div className="flex flex - wrap justify - center gap - 4">;
                <button className="bg - white text - blue - 600 px - 6 py - 3 rounded - lg font - semibold hover:bg - gray - 100 transition - colors">;
                  Get Started;
                </button>;
                <button className="border - 2 border - white text - white px - 6 py - 3 rounded - lg font - semibold hover:bg - white hover:text - blue - 600 transition - colors">;
                  View Pricing;
                </button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
          <div className="container mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}



              transition={{ duration: 0.8 }}
              className="text - center mb - 16";
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                What We Offer;
              </h2>;
              <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
                From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {services.map ((service, index) => (
                <motion.div;

                  key={index}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg - white p - 8 rounded - lg shadow - lg hover:shadow - xl transition - shadow border border - gray - 200";
                >;
                  <div className="flex items - center mb - 4">;
                    <div className="p - 3 bg - blue - 100 rounded - lg mr - 4">;
                      <service.icon className="h - 8 w - 8 text - blue - 600" />;
                    </div>;
                    <h3 className="text - xl font - semibold text - gray - 900">;
                      {service.title}
                    </h3>;
                  </div>;
                  <p className="text - gray - 600 mb - 4">;
                    {service.description}
                  </p>;
                  <ul className="space - y-2 mb - 6">;
                    {service.features.map ((feature, feature_index) => (
                      <li key={feature_index} className="flex items - center text - sm text - gray - 600">;
                        <CheckCircle className="h - 4 w - 4 text - green - 500 mr - 2" />;
                        {feature}
                      </li>))}
                  </ul>;
                  <div className="text - blue - 600 font - semibold mb - 4">;
                    {service.pricing}
                  </div>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </motion.div>
              ))}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
            </div>
          </div>
        </section>



      <Section title="Micro SaaS Products" items={microSaaS} color="#3b82f6" />
      <Section title="AI Services & Platforms" items={aiServices} color="#8b5cf6" />
      <Section title="IT & Cloud Services" items={itServices} color="#22c55e" />
      
      {/* CTA Section */}
      <section style={{ 
        maxWidth: 1400, margin: '0 auto', padding: '60px 20px',
        textAlign: 'center', background: 'white', marginTop: 40,
        borderRadius: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
      }}>
        <h2 style={{ 
          fontSize: 32, fontWeight: 700, marginBottom: 16,
          color: '#1e293b'
        }}>Ready to Get Started?</h2>
        <p style={{ 
          fontSize: 18, color: '#64748b', marginBottom: 32,
          maxWidth: 600, margin: '0 auto 32px auto'
        }}>
          Contact our experts to discuss your project requirements and discover 
          how our innovative solutions can drive your business forward.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            display: 'inline-block', 
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
            color: 'white', padding: '16px 32px', borderRadius: 12, 
            fontWeight: 700, textDecoration: 'none', fontSize: 16,
            transition: 'all 0.3s ease'
          }}>Request a Quote</Link>
          <a href="tel:+13024640950" style={{
            display: 'inline-block', 
            background: 'rgba(34, 197, 94, 0.1)', 
            color: '#22c55e', padding: '16px 32px', borderRadius: 12, 
            fontWeight: 700, textDecoration: 'none', fontSize: 16,
            border: '2px solid #22c55e', transition: 'all 0.3s ease'
          }}>Call +1 302 464 0950</a>
        </div>
      </section>
    </main>
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our proven expertise and commitment to excellence.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div

                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="text-center p-6">;
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <benefit && benefit.icon className="h-8 w-8 text-blue-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">;
                    {benefit && benefit.title}
                  </h3>;
                  <p className="text-gray-600">;
                    {benefit && benefit.description}
                  </p>;
                </motion && motion.div>;
              ))}





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/feature/merge-conflicts-and-improvements
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

    site: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {


      title: 'Micro SaaS Products'
      description:
        'Innovative, focused software solutions for modern businesses'
      count: '150+'
      color: 'blue'


      services: [
        'AI-Powered Video Clip MakerSmart Contract AnalyzerCybersecurity Threat IntelligenceMulti-Language Website TranslatorPredictive Inventory OptimizerReal-Time Analytics DashboardAutomated Customer SupportBlockchain Transaction Monitor'
      ];

      href: '/micro-saas'
    }


    {
      title: 'AI Services'
      description:
        'Advanced artificial intelligence solutions for enterprise needs'
      count: '100+'
      color: 'purple'
      services: [
        'Autonomous AI Agents'
        'AI-Powered Financial Trading'
        'AI Legal Document Analysis'
        'AI-Powered Voice Analytics'
        'AI-Powered Search & Discovery'
        'Machine Learning Model Training'
        'Natural Language Processing'
        'Computer Vision Solutions'
      ]
      href: '/ai-services'
    }
    {
      id: 'it-services'
      name: 'IT & Cloud Services'
      description: 'Comprehensive IT solutions for enterprise-grade operations'
      services: [
        'Quantum Computing Consulting'
        'Blockchain & Web3 Solutions'
        'DevSecOps & Security Automation'
        'Enterprise Data Platform'
        'High-Performance Computing'
        'Cloud Migration Services'
        'Infrastructure as Code'
        'Disaster Recovery Solutions'
      ]
      href: '/it-services'


      id: 'ai-automation',
      title: 'AI Automation Platform',
      description: 'Intelligent automation solutions that streamline business processes and reduce manual work.',
      category: 'AI Services',
      features: ['Process Automation', 'Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Computer Vision', 'Robotic Process Automation'],
      pricing: {
        basic: 999,
        pro: 2999,
        enterprise: 9999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },
    {
      id: 'cloud-optimization',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions designed to optimize performance and reduce costs.',
      category: 'IT Solutions',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Cost Optimization', 'Disaster Recovery', 'Security Hardening'],
      pricing: {
        basic: 1999,
        pro: 4999,
        enterprise: 14999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },
    {


      id: 'it-services',
      name: 'IT & Cloud Services',
      description: 'Comprehensive IT solutions for enterprise-grade operations',
      services: [
        'Quantum Computing Consulting',
        'Blockchain & Web3 Solutions',
        'DevSecOps & Security Automation',
        'Enterprise Data Platform',
        'High-Performance Computing',
        'Cloud Migration Services',
        'Infrastructure as Code',
        'Disaster Recovery Solutions',
      ],
      href: '/it-services',;

    },  ];
  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-600'
        hover: 'hover:bg-blue-700'
        text: 'text-blue-400'
        border: 'border-blue-500/40'
        ring: 'focus:ring-blue-500'
      }
      purple: {        bg: 'bg-purple-600'
        hover: 'hover:bg-purple-700'
        text: 'text-purple-400'
        border: 'border-purple-500/40'
        ring: 'focus:ring-purple-500'
      },      green: {
        bg: 'bg-green-600'
        hover: 'hover:bg-green-700'
        text: 'text-green-400'
        border: 'border-green-500/40'
        ring: 'focus:ring-green-500'
      }
    }
    return colors[color as keyof typeof colors] |colors.blue;  }
        bg: 'bg-green-600',
        hover: 'hover:bg-green-700',
        text: 'text-green-400',
        border: 'border-green-500/40',
        ring: 'focus:ring-green-500',
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;  };




      id: 'micro-saas',
      title: 'Micro SaaS Development',
      description: 'Focused software solutions that address specific business needs with minimal complexity.',
      category: 'Micro SaaS',
      features: ['Rapid Development', 'User-friendly Design', 'API Integration', 'Scalable Architecture', 'Multi-tenant Support', 'Analytics Dashboard'],
      pricing: {
        basic: 2999,
        pro: 7999,
        enterprise: 19999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      category: 'Security',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Penetration Testing', 'Security Audits', 'Compliance Management', 'Incident Response'],
      pricing: {
        basic: 1499,
        pro: 3999,
        enterprise: 9999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      category: 'Analytics',
      features: ['Data Visualization', 'Predictive Modeling', 'Real-time Dashboards', 'ETL Processes', 'Machine Learning', 'Custom Reports'],
      pricing: {
        basic: 2499,
        pro: 5999,
        enterprise: 12999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },
    {
      id: 'blockchain',
      title: 'Blockchain Solutions',
      description: 'Cutting-edge blockchain technology for secure, transparent, and decentralized applications.',
      category: 'Blockchain',
      features: ['Smart Contracts', 'DeFi Protocols', 'NFT Marketplaces', 'Token Development', 'DApp Development', 'Blockchain Consulting'],
      pricing: {
        basic: 4999,
        pro: 12999,
        enterprise: 29999
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
  ];
  const categories = ['All', 'AI Services', 'IT Solutions', 'Micro SaaS', 'Security', 'Analytics', 'Blockchain'];


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/feature/merge-conflicts-and-improvements
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>


        <meta name="description" content="Explore the advanced IT and AI services offered by Zion Tech Group." />
      </Head>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

      <ErrorBoundary level='page'>
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>

          {/* Hero Section */}
          <section className='py-20 px-4 text-center' role='banner'>;
            <div className='max-w-4xl mx-auto'>;
              <h1

                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >




      <div className="min-h-screen bg-slate-950 text-white">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

                Our Services
              </h1>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <p


                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                350+ Innovative Solutions for Modern Businesses
              </p>
            </div>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

          </section>
          {/* Service Categories */}
          <section className='py-16 px-4' role='main'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid lg:grid-cols-3 gap-8'>
                {serviceCategories.map((category, index) => {
                  const colors = getColorClasses(category.color);


                    >
                      <div className='flex items-center justify-between mb-6'>                        <h3 className={`text-2xl font-bold ${colors.text}`}>

                          {category.title}
                        </h3>;
                        <span className={`text - 3xl font - bold ${colors.text}`}>;
                          {category.count}

                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>;
                350+ Innovative Solutions for Modern Businesses;
              </p>;
              <p
                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>;
                From cutting-edge AI services to comprehensive IT solutions and;
                specialized micro SaaS products, we provide everything your;
                business needs to thrive in the digital age.              </p>;
            </div>;
          </section>;

          {/* Service Categories */}
          <section className='py-16 px-4' role='main'>;
            <div className='max-w-7xl mx-auto'>;
              <div className='grid lg:grid-cols-3 gap-8'>;
                {serviceCategories && serviceCategories.map((category, index) => {;
                  const colors = getColorClasses(category && category.color);


                    >;
                      <div className='flex items-center justify-between mb-6'>                        <h3 className={`text-2xl font-bold ${colors && colors.text}`}>;
                          {category && category.title}
                        </h3>;
                        <span className={`text-3xl font-bold ${colors && colors.text}`}>;
                          {category && category.count}
                        </span>;
                      </div>;

                      <p className='text-slate-300 mb-6'>;
                        {category && category.description}
                      </p>;

                      <ul className='text-slate-400 space-y-2 mb-8'>;
                        {category && category.services.map((service, serviceIndex) => (;
                          <li key={serviceIndex} className='flex items-center'>;


                            <span className='w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0'></span>                            {service}
                          </li>;
                        ))}

                        </span>;
                      </div>;
                      <p className='text - slate - 300 mb - 6'>;
                        {category.description}
                      </p>;
                      <ul className='text - slate - 400 space - y-2 mb - 8'>;
                        {category.services.map ((service, service_index) => (
                          <li key={service_index} className='flex items - center'>;
                            <span className='w - 2 h - 2 bg - blue - 400 rounded - full mr - 3 flex - shrink - 0'></span>                            {service}
                          </li>))}
                      </ul>;

                      <Link                        href={category.href}
                        className={`inline - flex items - center px - 6 py - 3 ${colors.bg} ${colors.hover} rounded - lg font - semibold transition - all duration - 300 hover:scale - 105 focus:outline - none focus:ring - 2 ${colors.ring} focus:ring - offset - 2 focus:ring - offset - slate - 900`}
                      >;
                        View All {category.title}


                      </ul>;

                      <Link                        href={category && category.href}
                        className={`inline-flex items-center px-6 py-3 ${colors && colors.bg} ${colors && colors.hover} rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 ${colors && colors.ring} focus:ring-offset-2 focus:ring-offset-slate-900`}
                      >;
                        View All {category && category.title}


                        <svg
                          className='ml-2 w-4 h-4'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>;
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />;
                        </svg>;
                      </Link>;
                    </div>;
                  );
                })}


                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'


                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'


                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'


                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}


                Contact our experts today to discuss your project requirements;
                and discover how our innovative solutions can transform your;
                business.;
              </p>;


                <Link
                  href='/contact'
                  className='px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'>;
                  Get a Quote;
                </Link>;
                <a
                  href={`tel:${contact && contact.phone.replace(/[^\d+]/g, '')}`}
                  className='px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors'>;
                  Call {contact && contact.phone}
                </a>;
                <a
                  href={`mailto:${contact && contact.email}`}
                  className='px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors'>;
                  Email Us;
                </a>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
    </>;
  );


        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Contact our experts to discuss your project requirements and discover
              how our solutions can drive your business forward.

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
              <Link href="/contact" className="btn-secondary">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
  );


            </div>
          </section>
        </main>
      </ErrorBoundary>
    </>
ursor/fix-lint-push-and-merge-to-main-ae4e
  )
}


  )
}







        <section className="py-16 px-4 bg-slate-900/40">;
          <div className="max-w-4xl mx-auto text-center">;
            <h2 className="text-3xl md:text-4xl font-bold mb-8">;
              Ready to Get Started?;
            </h2>;
            <p className="text-lg text-slate-300 mb-8">;
              Contact our experts to discuss your project requirements and discover ;
              how our solutions can drive your business forward.;
            </p>;
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">;
              <Link href="/contact" className="btn-primary">;
                Get a Quote;
              </Link>;
              <Link href="/contact" className="btn-secondary">;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


      <Section title="Micro SaaS Products" items={microSaaS} color="#3b82f6" />
      <Section title="AI Services & Platforms" items={aiServices} color="#8b5cf6" />
      <Section title="IT & Cloud Services" items={itServices} color="#22c55e" />
      {/* CTA Section */}
      <section style={{
        maxWidth: 1400, margin: '0 auto', padding: '60px 20px'
        textAlign: 'center', background: 'white', marginTop: 40
        borderRadius: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
      }}>
        <h2 style={{
          fontSize: 32, fontWeight: 700, marginBottom: 16
          color: '#1e293b'
        }}>Ready to Get Started?</h2>
        <p style={{
          fontSize: 18, color: '#64748b', marginBottom: 32
          maxWidth: 600, margin: '0 auto 32px auto'
        }}>
          Contact our experts to discuss your project requirements and discover
          how our innovative solutions can drive your business forward.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            display: 'inline-block'
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
            color: 'white', padding: '16px 32px', borderRadius: 12
            fontWeight: 700, textDecoration: 'none', fontSize: 16
            transition: 'all 0.3s ease'
          }}>Request a Quote</Link>
          <a href="tel:+13024640950" style={{
            display: 'inline-block'
            background: 'rgba(34, 197, 94, 0.1)'
            color: '#22c55e', padding: '16px 32px', borderRadius: 12
            fontWeight: 700, textDecoration: 'none', fontSize: 16
            border: '2px solid #22c55e', transition: 'all 0.3s ease'
          }}>Call +1 302 464 0950</a>
        </div>
      </section>
    </main>

    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,

    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics"
    icon: Brain

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);  }, []);
  const contact: ContactInfo = {
    phone: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    site: 'https://ziontechgroup.com'
  }
            </div>
          </div>
        </section>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed to transform your business and drive growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Pricing
                </button>
              </div>
            </motion.div>
          </div>
        </section>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-600 font-semibold mb-4">
                    {service.pricing}
                  </div>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </motion.div>
              ))}


            </div>
          </div>
        </section>





>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our proven expertise and commitment to excellence.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Services() {
  const serviceCategories = [
    {

      title: 'Micro SaaS Products'
      description:
        'Innovative, focused software solutions for modern businesses'
      count: '150+'
      color: 'blue'
      services: [
        'AI-Powered Video Clip Maker'
        'Smart Contract Analyzer'
        'Cybersecurity Threat Intelligence'
        'Multi-Language Website Translator'
        'Predictive Inventory Optimizer'
        'Real-Time Analytics Dashboard'
        'Automated Customer Support'
        'Blockchain Transaction Monitor'
      ]
      href: '/micro-saas'
    }
    {
      title: 'AI Services'
      description:
        'Advanced artificial intelligence solutions for enterprise needs'
      count: '100+'
      color: 'purple'
      services: [
        'Autonomous AI Agents'
        'AI-Powered Financial Trading'
        'AI Legal Document Analysis'
        'AI-Powered Voice Analytics'
        'AI-Powered Search & Discovery'
        'Machine Learning Model Training'
        'Natural Language Processing'
        'Computer Vision Solutions'
      ]
      href: '/ai-services'
    }
    {
      id: 'it-services'
      name: 'IT & Cloud Services'
      description: 'Comprehensive IT solutions for enterprise-grade operations'
      services: [
        'Quantum Computing Consulting'
        'Blockchain & Web3 Solutions'
        'DevSecOps & Security Automation'
        'Enterprise Data Platform'
        'High-Performance Computing'
        'Cloud Migration Services'
        'Infrastructure as Code'
        'Disaster Recovery Solutions'
      ]
      href: '/it-services'

    },  ];
  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-600'
        hover: 'hover:bg-blue-700'
        text: 'text-blue-400'
        border: 'border-blue-500/40'
        ring: 'focus:ring-blue-500'
      }
      purple: {        bg: 'bg-purple-600'
        hover: 'hover:bg-purple-700'
        text: 'text-purple-400'
        border: 'border-purple-500/40'
        ring: 'focus:ring-purple-500'
      },      green: {



  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore the advanced IT and AI services offered by Zion Tech Group." />
      </Head>


                Our Services
              </h1>
              <p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                350+ Innovative Solutions for Modern Businesses

              </p>
            </div>


                  Call {contact.phone}
                </a>;
                <a;
                  href={`mailto:${contact.email}`}

                  className='px - 8 py - 3 bg - slate - 800 hover:bg - slate - 700 border border - white / 10 rounded - lg font - semibold transition - colors'                >;
                  Email Us;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
    </>);
;
        <section className="py - 16 px - 4 bg - slate - 900 / 40">;
          <div className="max - w-4xl mx - auto text - center">;
            <h2 className="text - 3xl md:text - 4xl font - bold mb - 8">;
              Ready to Get Started?;
            </h2>;
            <p className="text - lg text - slate - 300 mb - 8">;
              Contact our experts to discuss your project requirements and discover;
              how our solutions can drive your business forward.;
            </p>;
            <div className="flex flex - col sm:flex - row items - center justify - center gap - 4">;
              <Link href="/contact" className="btn - primary">;
                Get a Quote;
              </Link>;
              <Link href="/contact" className="btn - secondary">;

                Schedule Consultation;
              </Link>;
            </div>;
          </div>;
        </section>;
      </main>;
      <Footer />;



}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

