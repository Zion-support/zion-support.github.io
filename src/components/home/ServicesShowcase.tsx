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
  "IoT & Edge Computing": <Server className="h-8 w-8 text-zion-cyan" />
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
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Comprehensive IT & AI Services
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our extensive portfolio of micro SAAS services, cutting-edge IT solutions, and innovative AI services designed to transform your business.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-zion-cyan">
              <Phone className="h-5 w-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <Mail className="h-5 w-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <MapPin className="h-5 w-5" />
              <span>Middletown DE 19709</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/comprehensive-services">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>
          </div>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Service Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Object.entries(categoryIcons).map(([category, icon]) => (
            <div key={category} className="text-center">
              <div className="bg-zion-blue rounded-lg p-6 border border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category}</h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  {COMPREHENSIVE_SERVICES.filter(s => s.category === category).length} services available
                </p>
                <Link to="/comprehensive-services">
                  <Button variant="outline" size="sm" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Zion Tech Group */}
        <div className="bg-zion-blue rounded-lg p-8 border border-zion-blue-light">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
            <p className="text-zion-slate-light">Your trusted partner for innovative technology solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-zion-cyan/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-zion-cyan" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">AI-First Approach</h4>
              <p className="text-zion-slate-light text-sm">Cutting-edge AI, machine learning, and emerging technologies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-purple/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-zion-purple" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
              <p className="text-zion-slate-light text-sm">Bank-level security and compliance for your business</p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-cyan/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-zion-cyan" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
              <p className="text-zion-slate-light text-sm">Track record of successful digital transformations</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-zion-slate-light mb-6">
            Contact our team today to discuss your project requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="mr-2 h-5 w-5" />
              Email: kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-6 text-zion-slate-light">
            <p>Visit us: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a></p>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our expert team can create tailored technology solutions that perfectly fit your business needs. 
              Get in touch for a free consultation and discover how we can help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                <Mail className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" className="text-zion-purple hover:underline">ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}</div></div>