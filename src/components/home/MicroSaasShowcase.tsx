import React from 'react';';
import { motion } from 'framer-motion';';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
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
} from "lucide-react";
import { getFeaturedServices } from "@/data/microSaasServices";";
export function MicroSaasShowcase() {;
const featuredServices = getFeaturedServices().slice(0, 6);
const getCategoryIcon = (category: string) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    switch (category) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      case ":"
        return <Bot className="
      case "IT Services"
        return <Shield className="w-8 h-8"Micro SAAS":"w-8 h-8"
      case ":"
        return <Code className="
      case "Analytics"
        return <Database className="w-8 h-8"Security":"w-8 h-8"
      case ":"
        return <Cloud className="
      case "Automation"
        return <Zap className="w-8 h-8"w-8 h-8"
    }
  const getCategoryColor = (category: string) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    switch (category) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      case ":"
        return ""
      case ":"
        return ""
      case ":"
        return ""
      case ":"
        return ""
      case ":"
        return ""
      case ":"
        return ""
      case ":"
        return ""
      case ":"
        return ""
      default:
        return ""
    }
  return (
  // TODO: Add parameters
)
    <section className="
      {/* Background effects */}
      <div className="absolute inset-0"absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zion-purple/10 via-transparent to-zion-cyan/10"
<div className="
<div className="absolute bottom-20 left-20 w-80 h-80 bg-zion-cyan/5 rounded-full filter blur-3 xl"container relative z-10 mx-auto px-4"
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }
          whileInView={{ opacity: 1, y: 0 }
          transition={{ duration: 0.8 }
          className="
        >
<h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6"text-xl text-zion-slate-light max-w-3 xl mx-auto mb-8"
            Discover innovative solutions that transform businesses. From AI-powered chatbots to comprehensive IT consulting,
            we offer cutting-edge services at competitive prices.
          </p>

          {/* Contact Info */}
          <div className="
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center"flex flex-col items-center"
<div className="
<Globe className="w-5 h-5 text-zion-cyan"text-zion-slate-light text-sm"
<span className="
<div className="flex flex-col items-center"w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center mb-2"
<Users className="
<span className="text-zion-slate-light text-sm"text-white font-semibold"
<div className="
<div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center mb-2"w-5 h-5 text-zion-cyan"
<span className="
<span className="text-white font-semibold"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          {featuredServices.map((service, index) => (
  // TODO: Add parameters
)
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }
              whileInView={{ opacity: 1, y: 0 }
              transition={{ duration: 0.6, delay: index * 0.1 }
            >
<Card className="
<CardHeader className="pb-4"flex items-center justify-between mb-4"
<div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                      {getCategoryIcon(service.category)}
                    </div>
                        className={`w-4 h-4 ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                          i < Math.floor(service.rating)
                            ? 'text-yellow-400 fill-current''
                            : 'text-zion-slate-light''
                        }`}
                      />
                    ))}
                  </div>
<span className="
                    {service.rating} ({service.reviewCount} reviews)
                  </span></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"group hover:shadow-2 xl transition-all duration-500 border-zion-purple/20 hover:border-zion-purple/40 overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
              style={{
  // TODO: Add properties
}
  // TODO: Add properties
}
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6 s ease-out forwards''
              }
            >
<div className="
<img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"absolute top-3 left-3"
                  {categoryIcons[service.category as keyof typeof categoryIcons]}
                </div>
<div className="
<Star className="h-3 w-3 fill-yellow-400 text-yellow-400"text-xs font-medium"
</div>
<CardHeader className="
<CardTitle className="text-lg group-hover:text-zion-cyan transition-colors line-clamp-2"text-sm text-muted-foreground line-clamp-2"
                  {service.description}
                </p>
<div className="
                  {service.tags.slice(0, 2).map((tag, tagIndex) => (
  // TODO: Add parameters
)
                    <Badge key={tagIndex} variant="secondary"text-xs bg-zion-purple/10 text-zion-purple hover:bg-zion-purple/20"
                      {tag}
                    </Badge>
                  ))}
                </div></CardHeader>
<CardContent className="
                {/* Key Benefits */}
                <div>
<h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-zion-cyan"h-4 w-4"
                    Key Benefits
                  </h4>
<ul className="
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
  // TODO: Add parameters
)
                      <li key={benefitIndex} className="text-xs text-muted-foreground flex items-start gap-2"h-3 w-3 text-zion-cyan mt-0.5 flex-shrink-0"
<span>{benefit}</span></li>
                    ))}
                  </ul></div>

                {/* Pricing */}
                <div className="
                  {service.pricing.custom ? (
  // TODO: Add parameters
)
                    <div className="text-center"text-sm font-medium text-zion-cyan"
                  ) : (
  // TODO: Add parameters
)
                    <div className="
<div className="flex items-center justify-center gap-1 mb-1"text-xl font-bold text-primary"
<span className="
<span className="text-sm text-muted-foreground"text-xs text-muted-foreground"
                        {service.pricing.currency}{service.pricing.yearly}/year
                      </p></div>
                  )}
                </div></CardContent>
<div className="
<Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple group"h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
</Button>

                {/* Key Benefits */}
                <div>
<h4 className="
<div className="space-y-1"flex items-center gap-2 text-sm text-zion-slate-light"
<CheckCircle className="
                        {benefit}
                      </div>
                    ))}
                  </div></div>
</CardContent></div>
</Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center"bg-gradient-to-r from-zion-purple-dark/50 via-zion-purple/50 to-zion-cyan/50 rounded-2 xl p-8 md:p-12 border border-zion-purple/30"
<h3 className="
              Ready to Transform Your Business?
            </h3>
<p className="text-zion-slate-light text-lg mb-8 max-w-3 xl mx-auto"flex flex-wrap justify-center gap-4"
<Button asChild size=" className="bg-zion-cyan hover:bg-zion-cyan-light text-black font-semibold px-8 py-3"/micro-saas-services">"h-5 w-5 mr-2"
                  Explore All Services
                </Link></Button>
<Button asChild size=" variant="outline"border-white text-white hover:bg-white hover:text-zion-purple font-semibold px-8 py-3"
<Link to=">"
<Users className="
                  Get Consultation
                </Link></Button>
</div>
        {/* CTA Section */}
        <div className="text-center"bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-3 xl p-8 border border-zion-purple/30"
<h3 className="
              Ready to Get Started?
            </h3>
<p className="text-zion-slate-light mb-6 max-w-2 xl mx-auto"flex flex-wrap justify-center gap-4"
<Link to=">"
<Button size=" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"w-5 h-5 ml-2"
</Link>
<Button size=" variant="outline"border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                Contact Sales
              </Button></div>
</div></div>
</div>
        {/* CTA Section */}
        <div className="
<div className="bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20 p-8 rounded-2 xl border border-zion-blue/30 max-w-4 xl mx-auto"text-2 xl md:text-3 xl font-bold mb-4"
              Ready to Accelerate Your Business?
            </h3>
<p className="
              Join thousands of businesses that have transformed their operations with our
              innovative solutions. Get started today with a free consultation.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"lg" className="
<Link to="/micro-saas-services"
<span>Explore All Services</span>
<ArrowRight className="h-4 w-4 ml-2"outline" size=" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white"/request-quote">"mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
<div className="
<CheckCircle className="h-4 w-4 text-zion-cyan"flex items-center gap-2"
<CheckCircle className="
<span>24/7 Support</span></div>
<div className="flex items-center gap-2"h-4 w-4 text-zion-cyan"
<span>Enterprise Security</span></div>
</div></div>
</div></div>
<style>{`
        @keyframes fadeInUp {
  // TODO: Add properties
}
  // TODO: Add properties
}
          from {
  // TODO: Add properties
}
  // TODO: Add properties
}
            opacity: 0
            transform: translateY(30 px)
          }
          to {
  // TODO: Add properties
}
  // TODO: Add properties
}
            opacity: 1
            transform: translateY(0)
          }
      `}</style>
<Badge className="
                      {service.pricingModel === 'monthly' ? 'Monthly' : '
                       service.pricingModel === 'yearly' ? 'Yearly' :'
                       service.pricingModel === 'one-time' ? 'One-time' :'
                       service.pricingModel === 'hourly' ? 'Hourly' : 'Custom'}'
                    </Badge></div>
<CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors"text-zion-slate-light"
                    {service.description}
                  </CardDescription></CardHeader>
<CardContent className="
                  {/* Price and Rating */}
                  <div className="flex items-center justify-between"text-2 xl font-bold text-white"
                      {service.currency}{service.price}
                      <span className="
                        {service.pricingModel === 'monthly' ? '/mo' : '
                         service.pricingModel === 'yearly' ? '/yr' :'
                         service.pricingModel === 'hourly' ? '/hr' : '}''
                      </span></div>
<div className="flex items-center gap-1"w-4 h-4 text-yellow-400 fill-current"
<span className="
</div>

                  {/* AI Score */}
                  <div className="flex items-center justify-between"text-zion-slate-light"
<Badge className="
                      {service.aiScore}/100
                    </Badge></div>

                  {/* Key Benefits */}
                  <div>
<h4 className="text-white font-semibold mb-2"space-y-1"
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
  // TODO: Add parameters
)
                        <li key={idx} className="
<div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"bg-zion-blue-dark/50 rounded-lg p-3"
<p className="
<p className="text-white text-sm"text-center"
        >
<div className="
<h3 className="text-2 xl md:text-3 xl font-bold text-white mb-4"text-zion-slate-light mb-6 max-w-2 xl mx-auto"
              Our team of experts is ready to help you implement the perfect solution.
              Get in touch today for a free consultation and competitive quote.
            </p>
<div className="
<Button
                size="lg"
                className="bg-zion-purple hover:bg-zion-purple-light text-white"/micro-saas-services">"ml-2 h-4 w-4"
</Button>
<Button
                size=" "
                variant=" "
                className="
                onClick={() => window.open(`mailto:kleber@ziontechgroup.com?subject=Business Consultation Request`)}
              >
                Get Free Consultation
              </Button></div>
</div></motion.div>
</div></section>
  )
