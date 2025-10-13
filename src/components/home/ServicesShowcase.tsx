  BarChart3,
  Smartphone,
  TrendingUp,
  Code,
  Server,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react'';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';';';
const categoryIcons = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  "AI & Machine Learning"h-8 w-8 text-zion-cyan"
  ": <Cloud className="h-8 w-8 text-zion-cyan"Cybersecurity": <Shield className="
  "Data & Analytics"h-8 w-8 text-zion-cyan"
  ": <Smartphone className="h-8 w-8 text-zion-cyan"Digital Transformation": <TrendingUp className="
  "Blockchain & Web3"h-8 w-8 text-zion-cyan"
  ": <Server className="h-8 w-8 text-zion-cyan"AI & Machine Learning","Cloud & DevOps", "Cybersecurity","Data & Analytics""py-20 bg-zion-blue-dark"
<div className="
        {/* Header */}
        <div className="text-center mb-16"text-4 xl font-bold text-white mb-6"
            Comprehensive IT & AI Services
          </h2>
<p className="
            Discover our extensive portfolio of micro SAAS services, cutting-edge IT solutions, and innovative AI services designed to transform your business.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8"flex items-center gap-2 text-zion-cyan"
<Phone className="
<span>+1 302 464 0950</span></div>
<div className="flex items-center gap-2 text-zion-cyan"h-5 w-5"
<span>kleber@ziontechgroup.com</span></div>
<div className="
<MapPin className="h-5 w-5"flex flex-wrap justify-center gap-4"
<Link to=">"
<Button size=" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white"ml-2 h-5 w-5"
</Link>
<Button size=" variant="outline"border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
<Phone className="
              Get Free Consultation
            </Button></div>
</div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          {Object.entries(categoryIcons).map(([category, icon]) => (
  // TODO: Add parameters
)
            <div key={category} className="
<div className="bg-zion-blue rounded-lg p-6 border border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300"bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  {icon}
                </div>
<h3 className="
<p className="text-zion-slate-light text-sm mb-4"/comprehensive-services">"outline" size=" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"ml-2 h-4 w-4"
</Link></div>
</div>
          ))}
        </div>

        {/* Why Choose Zion Tech Group */}
        <div className="
<div className="text-center mb-8"text-2 xl font-bold text-white mb-4"
<p className="
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"text-center"
<div className="
<Brain className="h-6 w-6 text-zion-cyan"text-lg font-semibold text-white mb-2"
<p className="
<div className="text-center"bg-zion-purple/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4"
<Shield className="
<h4 className="text-lg font-semibold text-white mb-2"text-zion-slate-light text-sm"
<div className="
<div className="bg-zion-cyan/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4"h-6 w-6 text-zion-cyan"
<h4 className="
<p className="text-zion-slate-light text-sm"text-center mt-12"
<h3 className="
<p className="text-zion-slate-light mb-6"flex flex-col sm:flex-row gap-4 justify-center"
<Button size=" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white"mr-2 h-5 w-5"
              Call Now: +1 302 464 0950
            </Button>
<Button size=" variant="outline"border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
<Mail className="
              Email: kleber@ziontechgroup.com
            </Button></div>
<div className="mt-6 text-zion-slate-light"mt-2"https://ziontechgroup.com"text-zion-cyan hover:underline"

        {/* CTA Section */}
        <div className="
<div className="bg-white rounded-2 xl p-8 md:p-12 shadow-xl"text-3 xl font-bold text-gray-900 mb-4"
              Need a Custom Solution?
            </h3>
<p className="
              Our expert team can create tailored technology solutions that perfectly fit your business needs.
              Get in touch for a free consultation and discover how we can help you succeed.
            </p>
<div className="flex flex-wrap justify-center gap-4"lg" className="
<Mail className="w-5 h-5 mr-2"lg" variant=" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white"w-5 h-5 mr-2"
                Call +1 302 464 0950
              </Button></div>
<div className="
<p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
<p>🌐 <a href="https://ziontechgroup.com"text-zion-purple hover:underline"
</div></div>
</div></div>
</section>
  )
}</div></div>