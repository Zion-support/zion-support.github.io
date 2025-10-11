import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { 
  Bot, 
  Shield, 
  TrendingUp, 
  Code, 
  Database, 
  Cloud, 
  Zap, 
  ArrowRight,
  Star,
  Users,
  Globe
} from "lucide-react"
import { getFeaturedServices } from "@/data/microSaasServices"
export function MicroSaasShowcase() {
  const featuredServices = getFeaturedServices().slice(0, 6)
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI Services":
        return <Bot />
      case "IT Services":
        return <Shield />
      case "Micro SAAS":
        return <TrendingUp />
      case "Development":
        return <Code />
      case "Analytics":
        return <Database />
      case "Security":
        return <Shield />
      case "Cloud":
        return <Cloud />
      case "Automation":
        return <Zap />
      default:
        return <TrendingUp />
    }

  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI Services":
        return "from-purple-500 to-indigo-600"
      case "IT Services":
        return "from-blue-500 to-cyan-600"
      case "Micro SAAS":
        return "from-green-500 to-emerald-600"
      case "Development":
        return "from-orange-500 to-red-600"
      case "Analytics":
        return "from-cyan-500 to-blue-600"
      case "Security":
        return "from-red-500 to-pink-600"
      case "Cloud":
        return "from-blue-500 to-purple-600"
      case "Automation":
        return "from-yellow-500 to-orange-600"
      default:
        return "from-gray-500 to-slate-600"
    }

  }

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light relative overflow-hidden">
      {/* Background effects */}

      <div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zion-purple/10 via-transparent to-zion-cyan/10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-zion-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-zion-cyan/5 rounded-full filter blur-3xl"></div>
      </div>

      <div>
        {/* Header */}

        <motion.div 
          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Micro SAAS & AI Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover innovative solutions that transform businesses. From AI-powered chatbots to comprehensive IT consulting, 
            we offer cutting-edge services at competitive prices.
          </p>
          
          {/* Contact Info */}

          <div>
          <div>
              <div>
          <div>
                  <Globe />
                </div>
                <span className="text-zion-slate-light text-sm">Website</span>
                <span className="text-white font-semibold">ziontechgroup.com</span>
              </div>
              <div>
          <div>
                  <Users />
                </div>
                <span className="text-zion-slate-light text-sm">Phone</span>
                <span className="text-white font-semibold">+1 302 464 0950</span>
              </div>
              <div>
          <div>
                  <Star />
                </div>
                <span className="text-zion-slate-light text-sm">Email</span>
                <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}

        <div>
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.6, delay: index * 0.1 }}

            >
              <Card />
                <CardHeader />
                  <div>
          <div>
                      {getCategoryIcon(service.category)}

                    </div>
                        className={`w-4 h-4 ${
                          i < Math.floor(service.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-zion-slate-light'
                        }`}

                      />
                    ))}

                  </div>
                  <span className="text-zion-slate-light text-sm">
                    {service.rating} ({service.reviewCount} reviews)
                  </span>
                </div>
        <div>
          {featuredServices.map((service, index) => (
            <Card />
              key={service.id}

              className="group hover:shadow-2xl transition-all duration-500 border-zion-purple/20 hover:border-zion-purple/40 overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}

            >
              <div>
                <img 
                  src={service.image}

                  alt={service.title}

                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div>
                  {categoryIcons[service.category as keyof typeof categoryIcons]}

                </div>
                <div>
                  <Star />
                  <span className="text-xs font-medium">{service.rating}</span>
                </div>
              </div>

              <CardHeader />
                <CardTitle />
                  {service.title}

                </CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {service.description}

                </p>
                
                <div>
                  {service.tags.slice(0, 2).map((tag, tagIndex) => (
                    <Badge />
                      {tag}

                    </Badge>
                  ))}

                </div>
              </CardHeader>

              <CardContent />
                {/* Key Benefits */}

                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-zion-cyan">
                    <TrendingUp />
                    Key Benefits
                  </h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                        <CheckCircle />
                        <span>{benefit}</span>
                      </li>
                    ))}

                  </ul>
                </div>

                {/* Pricing */}

                <div>
                  {service.pricing.custom ? (
                    <div>
                      <p className="text-sm font-medium text-zion-cyan">{service.pricing.custom}</p>
                    </div>
                  ) : (
                    <div>
          <div>
                        <span className="text-xl font-bold text-primary">{service.pricing.currency}</span>
                        <span className="text-xl font-bold">{service.pricing.monthly}</span>
                        <span className="text-sm text-muted-foreground">/mo</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {service.pricing.currency}{service.pricing.yearly}/year
                      </p>
                    </div>
                  )}

                </div>
              </CardContent>

              <div>
                <Button />
                  <Link />
                    <span>Learn More</span>
                    <ArrowRight />
                  </Link>
                </Button>

                {/* Key Benefits */}

                <div>
                  <h4 className="text-white font-semibold mb-2">Key Benefits</h4>
                  <div>
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div>
                        <CheckCircle />
                        {benefit}

                      </div>
                    ))}

                  </div>
                </div>
              </CardContent>
              </div>
            </Card>
          ))}

        </div>

        {/* CTA Section */}

        <div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our micro SAAS services to drive growth, 
              improve efficiency, and stay ahead of the competition.
            </p>
            <div>
              <Button />
                <Link />
                  <TrendingUp />
                  Explore All Services
                </Link>
              </Button>
              <Button />
                <Link />
                  <Users />
                  Get Consultation
                </Link>
              </Button>
            </div>
        {/* CTA Section */}

        <div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our micro SAAS solutions to drive growth, 
              improve efficiency, and stay ahead of the competition.
            </p>
            <div>
              <Link />
                <Button />
                  View All Services
                  <ArrowRight />
                </Button>
              </Link>
              <Button />
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
        {/* CTA Section */}

        <div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Accelerate Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their operations with our 
              innovative solutions. Get started today with a free consultation.
            </p>
            
            <div>
              <Button />
                <Link />
                  <span>Explore All Services</span>
                  <ArrowRight />
                </Link>
              </Button>
              
              <Button />
                <Link />
                  <span>Get Free Quote</span>
                </Link>
              </Button>
            </div>

            <div>
          <div>
                <CheckCircle />
                <span>Free Consultation</span>
              </div>
              <div>
                <CheckCircle />
                <span>24/7 Support</span>
              </div>
              <div>
                <CheckCircle />
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0
            transform: translateY(30px)
          }

          to {
            opacity: 1
            transform: translateY(0)
          }

        }

      `}</style>
                    <Badge />
                      {service.pricingModel === 'monthly' ? 'Monthly' : 
                       service.pricingModel === 'yearly' ? 'Yearly' :
                       service.pricingModel === 'one-time' ? 'One-time' :
                       service.pricingModel === 'hourly' ? 'Hourly' : 'Custom'}

                    </Badge>
                  </div>
                  
                  <CardTitle />
                    {service.title}

                  </CardTitle>
                  
                  <CardDescription />
                    {service.description}

                  </CardDescription>
                </CardHeader>
                
                <CardContent />
                  {/* Price and Rating */}

                  <div>
          <div>
                      {service.currency}{service.price}

                      <span className="text-sm text-zion-slate-light ml-1">
                        {service.pricingModel === 'monthly' ? '/mo' : 
                         service.pricingModel === 'yearly' ? '/yr' :
                         service.pricingModel === 'hourly' ? '/hr' : ''}

                      </span>
                    </div>
                    <div>
                      <Star />
                      <span className="text-white">{service.rating}</span>
                    </div>
                  </div>
                  
                  {/* AI Score */}

                  <div>
                    <span className="text-zion-slate-light">AI Score:</span>
                    <Badge />
                      {service.aiScore}/100
                    </Badge>
                  </div>
                  
                  {/* Key Benefits */}

                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="text-sm text-zion-slate-light flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          {benefit}

                        </li>
                      ))}

                    </ul>
                  </div>
                  
                  {/* Market Price */}

                  <div>
                    <p className="text-sm text-zion-slate-light mb-1">Market Price:</p>
                    <p className="text-white text-sm">{service.marketPrice}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

        </div>

        {/* CTA Section */}

        <motion.div 
          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          className="text-center"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution. 
              Get in touch today for a free consultation and competitive quote.
            </p>
            
            <div>
              <Button />
                size="lg" 
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
                asChild
              >
                <Link />
                  View All Services
                  <ArrowRight />
                </Link>
              </Button>
              <Button />
                size="lg" 
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark"
                onClick={() => window.open(`mailto: kleber@ziontechgroup.com?subject=Business Consultation Request`)}

              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
