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
} from 'lucide-react'
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices'
const categoryIcons = {
  "AI & Machine Learning": <Brain className="h-8 w-8 text-zion-cyan" />,
  "Cloud & DevOps": <Cloud className="h-8 w-8 text-zion-cyan" />,
  "Cybersecurity": <Shield className="h-8 w-8 text-zion-cyan" />,
  "Data & Analytics": <BarChart3 className="h-8 w-8 text-zion-cyan" />,
  "Web & Mobile Development": <Smartphone className="h-8 w-8 text-zion-cyan" />,
  "Digital Transformation": <TrendingUp className="h-8 w-8 text-zion-cyan" />,
  "Blockchain & Web3": <Code className="h-8 w-8 text-zion-cyan" />,
  "IoT & Edge Computing": <Server />
}

// Get featured services from each category
const getFeaturedServices = () => {
  const categories = [
    "AI & Machine Learning",
    "Cloud & DevOps", 
    "Cybersecurity",
    "Data & Analytics"
  ]

  return categories.map(category => {
    const services = COMPREHENSIVE_SERVICES.filter(s => s.category === category)
    return services[0]; // Get first service from each category
  }).filter(Boolean)
}

export function ServicesShowcase() {
  const featuredServices = getFeaturedServices()
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div>
        {/* Header */}

        <div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Comprehensive IT & AI Services
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our extensive portfolio of micro SAAS services, cutting-edge IT solutions, and innovative AI services designed to transform your business.
          </p>
          
          {/* Contact Info */}

          <div>
          <div>
              <Phone />
              <span>+1 302 464 0950</span>
            </div>
            <div>
              <Mail />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div>
              <MapPin />
              <span>Middletown DE 19709</span>
            </div>
          </div>

          <div>
            <Link />
              <Button />
                View All Services
                <ArrowRight />
              </Button>
            </Link>
            <Button />
              <Phone />
              Get Free Consultation
            </Button>
          </div>
        </div>

        {/* Featured Services Grid */}

        <div>
          {featuredServices.map((service) => (
            <ServiceCard />
          ))}

        </div>

        {/* Service Categories Overview */}

        <div>
          {Object.entries(categoryIcons).map(([category, icon]) => (
            <div>
          <div>
                <div>
                  {icon}

                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category}</h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  {COMPREHENSIVE_SERVICES.filter(s => s.category === category).length} services available
                </p>
                <Link />
                  <Button />
                    Explore
                    <ArrowRight />
                  </Button>
                </Link>
              </div>
            </div>
          ))}

        </div>

        {/* Why Choose Zion Tech Group */}

        <div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
            <p className="text-zion-slate-light">Your trusted partner for innovative technology solutions</p>
          </div>
          
          <div>
          <div>
              <div>
                <Brain />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">AI-First Approach</h4>
              <p className="text-zion-slate-light text-sm">Cutting-edge AI, machine learning, and emerging technologies</p>
            </div>
            
            <div>
          <div>
                <Shield />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
              <p className="text-zion-slate-light text-sm">Bank-level security and compliance for your business</p>
            </div>
            
            <div>
          <div>
                <TrendingUp />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
              <p className="text-zion-slate-light text-sm">Track record of successful digital transformations</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-zion-slate-light mb-6">
            Contact our team today to discuss your project requirements and get a personalized quote.
          </p>
          <div>
            <Button />
              <Phone />
              Call Now: +1 302 464 0950
            </Button>
            <Button />
              <Mail />
              Email: kleber@ziontechgroup.com
            </Button>
          </div>
          <div>
            <p>Visit us: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a></p>

        {/* CTA Section */}

        <div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our expert team can create tailored technology solutions that perfectly fit your business needs. 
              Get in touch for a free consultation and discover how we can help you succeed.
            </p>
            <div>
              <Button />
                <Mail />
                Schedule Free Consultation
              </Button>
              <Button />
                <Phone />
                Call +1 302 464 0950
              </Button>
            </div>
            <div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" className="text-zion-purple hover:underline">ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}</div></div>