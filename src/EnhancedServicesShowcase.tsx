import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Star, 
  Clock, 
  TrendingUp, 
  Shield, 
  Zap,
  Brain,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Network,
  Smartphone,
  CreditCard,
  Users,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices'
import { comprehensiveServices, serviceCategories } from '@/data/comprehensiveServices'
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, SERVICE_FEATURES, MARKET_PRICING } from '@/data/enhancedServices'
export default function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const filteredServices = selectedCategory === 'all' 
    ? comprehensiveServices 
    : comprehensiveServices.filter(service => service.category.toLowerCase().includes(selectedCategory.toLowerCase()))
    ? ENHANCED_SERVICES 
    : ENHANCED_SERVICES.filter(service => 
        SERVICE_CATEGORIES.find(cat => cat.id === selectedCategory)?.services.includes(service)
      )
  return (
    <div>
      {/* Hero Section */}

      <div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
            Premier IT Services & AI Solutions Provider - Transforming Businesses Through Innovation
          </p>
          <div>
            <Button />
              <Phone />
              +1 302 464 0950
            </Button>
            <Button />
              <Mail />
              kleber@ziontechgroup.com
            </Button>
          </div>
          
          {/* Contact Info Cards */}

          <div>
            <Card />
              <CardContent />
                <Phone />
                <h3 className="font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-cyan-light">+1 302 464 0950</p>
              </CardContent>
            </Card>
            <Card />
              <CardContent />
                <Mail />
                <h3 className="font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>
              </CardContent>
            </Card>
            <Card />
              <CardContent />
                <MapPin />
                <h3 className="font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-cyan-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Services Overview */}

      <div>
          <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Comprehensive Service Portfolio
          </h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
            From AI-powered automation to enterprise cybersecurity, we deliver cutting-edge solutions that drive business growth and digital transformation.
          </p>
        </div>

        {/* Category Navigation */}

        <div>
          <Button />
            variant={selectedCategory === 'all' ? 'default' : 'outline'}

            onClick={() => setSelectedCategory('all')}

            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            All Services
          </Button>
          {serviceCategories.map((category) => (
          {SERVICE_CATEGORIES.map((category) => (
            <Button />
              key={category.id}

              variant={selectedCategory === category.id ? 'default' : 'outline'}

              onClick={() => setSelectedCategory(category.id)}

              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}

            </Button>
          ))}

        </div>

        {/* Services Grid */}

        <div>
          {filteredServices.map((service) => (
            <ServiceCard />
          ))}

        </div>
      </div>

      {/* Market Analysis Section */}

      <div>
          <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Market Analysis & ROI
            </h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              Understand the market trends, competitive landscape, and expected returns on your technology investments.
            </p>
          </div>

          <div>
            {Object.entries(MARKET_PRICING).map(([key, data]) => (
              <Card />
                <CardHeader />
                  <CardTitle className="text-zion-cyan capitalize">{key.replace('-', ' ')}</CardTitle>
                </CardHeader>
                <CardContent />
                  <div>
                    <CreditCard />
                    <span className="text-white">{data.averagePrice}</span>
                  </div>
                  <div>
                    <TrendingUp />
                    <span className="text-zion-cyan-light">{data.marketTrend}</span>
                  </div>
                  <div>
                    <Zap />
                    <span className="text-zion-cyan-light">{data.roi}</span>
                  </div>
                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}

      <div>
          <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver exceptional results for our clients.
          </p>
        </div>

        <div>
          <Card />
            <CardContent />
              <Brain />
              <h3 className="text-2xl font-bold text-white mb-4">AI-First Approach</h3>
              <p className="text-zion-cyan-light">
                We leverage the latest AI technologies to create intelligent, scalable solutions that adapt to your business needs.
              </p>
            </CardContent>
          </Card>

          <Card />
            <CardContent />
              <Shield />
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-zion-cyan-light">
                Our security-first approach ensures your data and systems are protected with industry-leading security measures.
              </p>
            </CardContent>
          </Card>

          <Card />
            <CardContent />
              <Users />
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-zion-cyan-light">
                Our certified professionals bring years of experience in delivering successful technology solutions across industries.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}

      <div>
          <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
            Let's discuss how our innovative solutions can drive your digital transformation and business growth.
          </p>
          <div>
            <Button />
              <Phone />
              Schedule a Consultation
            </Button>
            <Button />
              <Mail />
              Request a Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}

      <footer className="bg-zion-blue-dark py-12">
        <div>
          <div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-zion-cyan-light">
                Premier IT services and AI solutions provider helping businesses thrive in the digital age.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div>
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <div>
                <p>AI & Automation</p>
                <p>Cybersecurity</p>
                <p>Cloud Services</p>
                <p>Data Analytics</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div>
                <Link />
                  <Globe />
                  Website
                </Link>
                <Button />
                  <ExternalLink />
                  View All Services
                </Button>
              </div>
            </div>
          </div>
          <div>
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Service Card Component
function ServiceCard({ service }: { service: any }) {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <Card />
      <CardHeader />
        <div>
          <Badge />
            {service.category}

          </Badge>
          {service.featured && (
            <Badge />
              Featured
            </Badge>
          )}

        </div>
        <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
        <CardDescription />
          {service.description}

        </CardDescription>
      </CardHeader>
      <CardContent />
        <div>
          {/* Price and Rating */}

          <div>
          <div>
              {service.currency}{service.price?.toLocaleString()}

            </div>
            <div>
              <Star />
              <span className="text-white">{service.rating}</span>
              <span className="text-zion-cyan-light">({service.reviewCount})</span>
            </div>
          </div>

          {/* AI Score */}

          <div>
            <span className="text-zion-cyan-light">AI Score:</span>
            <div>
          <div>
                <$2 />
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" 
                  style={{ width: `${service.aiScore}%` }}

                ></div>
              </div>
              <span className="text-zion-cyan font-semibold">{service.aiScore}%</span>
            </div>
          </div>

          {/* Tags */}

          <div>
            {service.tags.slice(0, 3).map((tag: string) => (
              <Badge />
                {tag}

              </Badge>
            ))}

          </div>

          {/* Availability */}

          <div>
            <Clock />
            <span className="text-sm">Available: {service.availability}</span>
          </div>

          {/* Action Buttons */}

          <div>
            <Button />
              onClick={() => setShowDetails(!showDetails)}

            >
              {showDetails ? 'Hide Details' : 'View Details'}

            </Button>
            <Button />
              <Phone />
              Contact
            </Button>
          </div>

          {/* Detailed Information */}

          {showDetails && (
            <div>
              <Accordion />
                <AccordionItem />
                  <AccordionTrigger />
                    Features & Benefits
                  </AccordionTrigger>
                  <AccordionContent />
                    <div>
          <div>
                        <CheckCircle />
                        <span>Advanced AI algorithms</span>
                      </div>
                      <div>
                        <CheckCircle />
                        <span>24/7 support</span>
                      </div>
                      <div>
                        <CheckCircle />
                        <span>Custom integration</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem />
                  <AccordionTrigger />
                    Get Started
                  </AccordionTrigger>
                  <AccordionContent />
                    <div>
                      <p>Ready to implement this solution?</p>
                      <div>
          <div>
                          <Phone />
                          <span>+1 302 464 0950</span>
                        </div>
                        <div>
                          <Mail />
                          <span>kleber@ziontechgroup.com</span>
                        </div>
                      </div>
                      <Button />
                        Schedule Consultation
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}

        </div>
      </CardContent>
    </Card>
  )
}
