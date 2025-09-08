
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, 
  MapPin, Twitter, 
  Linkedin, Facebook, 
  Instagram, Youtube,
  ArrowRight, Shield,
  Zap, Users,
  Globe;", "


} from 'lucide-react';
import { Sitemap } from './Sitemap.jsx';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      // Reset after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1000);
  };

  return (
    <div className="bg-zion-blue-dark/30 p-6 rounded-xl border border-zion-cyan/20">
      <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
      <p className="text-zion-slate-light mb-4 text-sm">
        Get the latest insights on AI, cybersecurity, and technology trends delivered to your inbox.
      </p>
      
      {isSubscribed ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 p-3 bg-green-500/20 border border-green-500/30 rounded-lg"
        >
          <CheckCircle className="w-5 h-5 text-green-400" />
          <span className="text-green-400 text-sm">Successfully subscribed!</span>
        </motion.div>
      ) : (
        <form onSubmit={handleSubscribe} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-sm"
            required
          />
          <motion.button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Send className="w-4 h-4" />
            )}
          </motion.button>
        </form>
      )}
    </div>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "AI Solutions", path: "/services/ai" },
        { label: "Cloud & DevOps", path: "/services/cloud-devops" },
        { label: "Cybersecurity", path: "/services/ai-cybersecurity-suite" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Digital Transformation", path: "/services/digital-transformation" },
        { label: "Quantum Computing", path: "/services/quantum-computing" },
        { label: "Autonomous Operations", path: "/services/ai-workflow-orchestrator" },
        { label: "FinOps Advisor", path: "/services/finops-advisor" }
      ]
    },
    {
      title: "Comp",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Team", path: "/team" },
        { label: "Careers", path: "/careers" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Partners", path: "/partners" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", path: "/blog" },
        { label: "Documentation", path: "/docs" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", path: "/contact" },
        { label: "Help Center", path: "/help" },
        { label: "Support Portal", path: "/support" },
        { label: "FAQ", path: "/faq" },
        { label: "Consulting", path: "/services/it-consulting" },
        { label: "Request Quote", path: "/request-quote" }
      ]
    }
  ];


        { name: 'Consulting', href: '/services/consulting' }
      ] }, {""
      title: 'Solutions', links: [""
        { name: 'Industry Solutions', href: '/solutions/industry' }, ""
        { name: 'Manufacturing', href: '/solutions/manufacturing' }, ""
        { name: 'Financial Services', href: '/solutions/financial' }, ""
        { name: 'Healthcare', href: '/solutions/healthcare' }, ""
        { name: 'Retail', href: '/solutions/retail' }, ""
        { name: 'Education', href: '/solutions/education' }
      ] }, {""
      title: 'Company', links: [""
        { name: 'About Us', href: '/about' }, ""
        { name: 'Team', href: '/about/team' }, ""
        { name: 'Careers', href: '/careers' }, ""
        { name: 'Partners', href: '/partners' }, ""
        { name: 'News', href: '/news' }, ""
        { name: 'Events', href: '/events' }
      ] }, {""
      title: 'Resources', links: [""
        { name: 'Case Studies', href: '/case-studies' }, ""
        { name: 'Research & Development', href: '/research-development' }, ""
        { name: 'Blog', href: '/blog' }, ""
        { name: 'White Papers', href: '/white-papers' }, ""
        { name: 'Webinars', href: '/webinars' }, ""
        { name: 'Documentation', href: '/docs' }
      ] }, {""
      title: 'Support', links: [""
        { name: 'Help Center', href: '/support' }, ""
        { name: 'Training', href: '/training' }, ""
        { name: 'Contact', href: '/contact' }, ""
        { name: 'Request Quote', href: '/request-quote' }, ""
        { name: 'Status', href: '/status' }, ""
        { name: 'API Documentation', href: '/api' }
      ] }
  ];

  const socialLinks = [""
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }, ""
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin }","
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook }, ""
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }","
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }

  ];

  return (""
    <footer className="bg-zion-blue-dark border-t border-zion-purple/20">

                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>""
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>""
                <p className="text-zion-cyan text-sm">Innovating Tomorrow</p>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            ""

            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions, AI-driven insights, 
              and transformative digital strategies for the future.
            </p>
            

                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </div>
            </div>
          </div>




                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


              <button className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple/80 hover:to-zion-cyan/80 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25">

                Subscribe
              </button>
            </div>
          </div>
        </div>


              <span className="text-sm">SOC 2 Compliant</span>
            </div>""
            <div className="flex items-center space-x-3 text-zion-slate-light">""
              <Zap className="h-5 w-5 text-zion-cyan" /" >"
              <span className="text-sm">99.9% Uptime</span>
            </div>""
            <div className="flex items-center space-x-3 text-zion-slate-light">""
              <Users className="h-5 w-5 text-zion-cyan" /" >"
              <span className="text-sm">500+ Clients</span>
            </div>""
            <div className="flex items-center space-x-3 text-zion-slate-light">""
              <Globe className="h-5 w-5 text-zion-cyan" /" >"

              <span className="text-sm">Global Presence</span>
            </div>
          </div>
        </div>
      </div>



            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>


                Privacy Policy
              </Link>""
              <Link to="/terms-of-service" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>""
              <Link to="/cookie-policy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">

                Cookie Policy
              </Link>
            </div>



                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>











