import React, { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEO } from '@/components/SEO'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { TrustedBySection } from '@/components/TrustedBySection'
import { QuoteFormSection } from '@/components/QuoteFormSection'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Lock, 
  Eye, 
  service.category.includes('Cybersecurity') || 
  service.category.includes('Security') || 
  AlertTriangle, 
  Users, 
  Globe, 
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Zap,
  Brain,
  Network,
  Smartphone,
  CreditCard,
  Clock,
  Award,
  BarChart3,
  FileText,
  Server,
  Database,
  Key,
  Search,
  Monitor,
  AlertCircle,
  TrendingUp,
  DollarSign
} from 'lucide-react'
import { ENHANCED_SERVICES } from '@/data/enhancedServices'
// Filter cybersecurity services
const CYBERSECURITY_SERVICES = ENHANCED_SERVICES.filter(service => 
  service.category.includes('Cybersecurity') || 
  service.category.includes('Security') ||
  service.category.includes('Zero Trust')
)
const SECURITY_SERVICE_CATEGORIES = [
  {
    id: 'threat-detection',
    name: 'Threat Detection & Response',
    description: 'AI-powered security monitoring and incident response',
    icon: Eye,
    services: CYBERSECURITY_SERVICES.filter(s => s.title.includes('Threat Detection'))
  },
  {
    id: 'zero-trust',
    name: 'Zero Trust Security',
    description: 'Identity verification and access management',
    icon: Lock,
    services: CYBERSECURITY_SERVICES.filter(s => s.title.includes('Zero Trust'))
  }

]

export default function CybersecurityServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const getCategoryIcon = (category: string) => {
    const categoryData = SECURITY_SERVICE_CATEGORIES.find(cat => cat.id === category)
    return categoryData?.icon || Shield
  }

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'one-time': return 'One-time'
      case 'monthly': return 'Monthly'
      case 'hourly': return 'Hourly'
      case 'project-based': return 'Project-based'
      default: return model
    }

  }

  return (
    <div>
      {/* Hero Section */}

      <div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div>
          <div>
            <Shield />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Cybersecurity Services
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
            Protect Your Business with Enterprise-Grade Security Solutions
          </p>
          <p className="text-lg text-zion-cyan-light mb-12 max-w-3xl mx-auto">
            From threat detection to compliance management, we provide comprehensive cybersecurity that keeps your business safe in an evolving digital landscape.
          </p>
          
          {/* Contact CTA */}

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

          {/* Security Stats */}

          <div>
          <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-cyan-light">Threat Detection</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-cyan-light">Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-zion-cyan-light">Breach Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">100%</div>
              <div className="text-zion-cyan-light">Compliance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}

      <div>
        <Tabs />
          <TabsList />
            <TabsTrigger />
              Overview
            </TabsTrigger>
            <TabsTrigger />
              Services
            </TabsTrigger>
            <TabsTrigger />
              Compliance
            </TabsTrigger>
            <TabsTrigger />
              Threats
            </TabsTrigger>
            <TabsTrigger />
              Pricing
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}

          <TabsContent />
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Cybersecurity is Critical</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                In today's interconnected world, cybersecurity is not just about protecting data—it's about protecting your business, reputation, and future.
              </p>
            </div>

            <div>
              <Card />
                <CardContent />
                  <Shield />
                  <h3 className="text-2xl font-bold text-white mb-4">Threat Protection</h3>
                  <p className="text-zion-cyan-light">
                    Advanced threat detection and prevention systems that identify and neutralize cyber attacks before they can cause damage.
                  </p>
                </CardContent>
              </Card>

              <Card />
                <CardContent />
                  <Lock />
                  <h3 className="text-2xl font-bold text-white mb-4">Data Security</h3>
                  <p className="text-zion-cyan-light">
                    Comprehensive data protection including encryption, access controls, and secure backup solutions to safeguard your critical information.
                  </p>
                </CardContent>
              </Card>

              <Card />
                <CardContent />
                  <Users />
                  <h3 className="text-2xl font-bold text-white mb-4">Compliance & Risk</h3>
                  <p className="text-zion-cyan-light">
                    Ensure regulatory compliance and minimize risk exposure with our comprehensive security frameworks and audit support.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Security Framework */}

            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Security Framework</h3>
              <div>
          <div>
                  <Eye />
                  <h4 className="font-semibold text-white mb-2">Detect</h4>
                  <p className="text-sm text-zion-cyan-light">Advanced threat detection and monitoring</p>
                </div>
                <div>
                  <Shield />
                  <h4 className="font-semibold text-white mb-2">Protect</h4>
                  <p className="text-sm text-zion-cyan-light">Multi-layered defense systems</p>
                </div>
                <div>
                  <AlertCircle />
                  <h4 className="font-semibold text-white mb-2">Respond</h4>
                  <p className="text-sm text-zion-cyan-light">Rapid incident response and recovery</p>
                </div>
                <div>
                  <TrendingUp />
                  <h4 className="font-semibold text-white mb-2">Recover</h4>
                  <p className="text-sm text-zion-cyan-light">Business continuity and resilience</p>
                </div>
              </div>
            </div>
          </TabsContent>

            <div>
          {/* Services Tab */}

          <TabsContent />
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Cybersecurity Service Portfolio</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Comprehensive security solutions designed to protect your business from modern cyber threats.
              </p>
            </div>

            <div>
              {CYBERSECURITY_SERVICES.map((service) => (
                <SecurityServiceCard />
              ))}

            </div>

            {/* Additional Security Services */}

            <div>
              <Card />
                <CardHeader />
                  <CardTitle />
                    <Search />
                    Penetration Testing
                  </CardTitle>
                </CardHeader>
                <CardContent />
                  <p className="text-zion-cyan-light mb-4">
                    Comprehensive security assessments to identify vulnerabilities before attackers do.
                  </p>
                  <div>
          <div>
                      <CheckCircle />
                      <span className="text-sm text-zion-cyan-light">Network penetration testing</span>
                    </div>
                    <div>
                      <CheckCircle />
                      <span className="text-sm text-zion-cyan-light">Web application testing</span>
                    </div>
                    <div>
                      <CheckCircle />
                      <span className="text-sm text-zion-cyan-light">Social engineering assessments</span>
                    </div>
                  </div>
                  <Button />
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card />
                <CardHeader />
                  <CardTitle />
                    <Monitor />
                    Security Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent />
                  <p className="text-zion-cyan-light mb-4">
                    24/7 security monitoring and threat intelligence to detect and respond to incidents in real-time.
                  </p>
                  <div>
          <div>
                      <CheckCircle />
                      <span className="text-sm text-zion-cyan-light">SIEM implementation</span>
                    </div>
                    <div>
                      <CheckCircle />
                      <span className="text-sm text-zion-cyan-light">Threat intelligence feeds</span>
                    </div>
                    <div>
                      <CheckCircle />
                      <span className="text-sm text-zion-cyan-light">Incident response automation</span>
                    </div>
                  </div>
                  <Button />
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card />
                <CardHeader />
                  <CardTitle />
                    <FileText />
                    Security Training
                  </CardTitle>
                </CardHeader>
                <CardContent />
                  <p className="text-zion-cyan-light mb-4">
                    Employee security awareness training to create a human firewall against social engineering attacks.
                  </p>
                  <div>
          <div>
                      <CheckCircle />
                      <span className="text-sm text-zion-cyan-light">Phishing simulation</span>
                    </div>
                    <div>
                      <CheckCircle />
                      <span className="text-sm text-zion-cyan-light">Security best practices</span>
                    </div>
                    <div>
                      <CheckCircle />
                      <span className="text-sm text-zion-cyan-light">Compliance training</span>
                    </div>
                  </div>
                  <Button />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Compliance Tab */}

          <TabsContent />
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Compliance & Regulatory Standards</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Ensure your business meets industry standards and regulatory requirements with our comprehensive compliance solutions.
              </p>
            </div>

            <div>
              <ComplianceCard />
                icon={<FileText className="h-8 w-8" />}

                title="GDPR Compliance"
                description="European data protection regulation compliance with privacy-by-design principles."
                requirements={["Data protection", "Privacy rights", "Breach notification", "Data processing"]}

                industries={["All EU businesses", "Healthcare", "Finance", "E-commerce"]}

              />
              <ComplianceCard />
                icon={<Shield className="h-8 w-8" />}

                title="SOC 2 Type II"
                description="Service Organization Control 2 certification for security, availability, and confidentiality."
                requirements={["Security controls", "Availability monitoring", "Confidentiality", "Processing integrity"]}

                industries={["SaaS companies", "Cloud providers", "Data centers", "IT services"]}

              />
              <ComplianceCard />
                icon={<Lock className="h-8 w-8" />}

                title="HIPAA Compliance"
                description="Health Insurance Portability and Accountability Act compliance for healthcare organizations."
                requirements={["Patient privacy", "Data security", "Access controls", "Audit trails"]}

                industries={["Healthcare", "Medical devices", "Health insurance", "Telemedicine"]}

              />
              <ComplianceCard />
                icon={<CreditCard className="h-8 w-8" />}

                title="PCI DSS"
                description="Payment Card Industry Data Security Standard for payment processing security."
                requirements={["Card data protection", "Network security", "Access control", "Regular testing"]}

                industries={["Retail", "E-commerce", "Payment processing", "Financial services"]}

              />
              <ComplianceCard />
                icon={<Server className="h-8 w-8" />}

                title="ISO 27001"
                description="International standard for information security management systems."
                requirements={["Risk assessment", "Security controls", "Management system", "Continuous improvement"]}

                industries={["Technology", "Manufacturing", "Financial services", "Government"]}

              />
              <ComplianceCard />
                icon={<Database className="h-8 w-8" />}

                title="CCPA Compliance"
                description="California Consumer Privacy Act compliance for consumer data protection."
                requirements={["Consumer rights", "Data transparency", "Opt-out mechanisms", "Data security"]}

                industries={["California businesses", "Online services", "Data brokers", "Large corporations"]}

              />
            </div>
          </TabsContent>

          {/* Threats Tab */}

          <TabsContent />
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Modern Cyber Threats</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Understanding the threat landscape is the first step in building effective cybersecurity defenses.
              </p>
            </div>

            <div>
              <ThreatCard />
                icon={<AlertTriangle className="h-8 w-8" />}

                title="Ransomware Attacks"
                description="Malicious software that encrypts files and demands payment for decryption."
                impact="High - Data loss, business disruption, financial loss"
                prevention={["Regular backups", "Email filtering", "User training", "Patch management"]}

                trend="Increasing 150% annually"
              />
              <ThreatCard />
                icon={<Users className="h-8 w-8" />}

                title="Social Engineering"
                description="Manipulation tactics to trick users into revealing sensitive information."
                impact="Medium - Data breaches, unauthorized access, reputation damage"
                prevention={["Security training", "Multi-factor authentication", "Verification procedures", "Incident reporting"]}

                trend="Most common attack vector"
              />
              <ThreatCard />
                icon={<Network className="h-8 w-8" />}

                title="DDoS Attacks"
                description="Distributed denial-of-service attacks that overwhelm systems with traffic."
                impact="Medium - Service disruption, revenue loss, customer dissatisfaction"
                prevention={["Traffic filtering", "CDN protection", "Rate limiting", "Incident response"]}

                trend="Increasing in sophistication"
              />
              <ThreatCard />
                icon={<Database className="h-8 w-8" />}

                title="Data Breaches"
                description="Unauthorized access to sensitive information and intellectual property."
                impact="High - Financial loss, legal consequences, brand damage"
                prevention={["Access controls", "Encryption", "Monitoring", "Regular audits"]}

                trend="Costing $4.35M average"
              />
              <ThreatCard />
                icon={<Smartphone className="h-8 w-8" />}

                title="Mobile Threats"
                description="Attacks targeting mobile devices and applications."
                impact="Medium - Data theft, device compromise, privacy violations"
                prevention={["Mobile device management", "App security", "User training", "Regular updates"]}

                trend="Growing with mobile adoption"
              />
                             <ThreatCard />
                 icon={<Network className="h-8 w-8" />}

                 title="Supply Chain Attacks"
                 description="Compromising software or hardware through third-party vendors."
                 impact="High - Widespread compromise, trust erosion, regulatory scrutiny"
                 prevention={["Vendor assessment", "Code signing", "Supply chain monitoring", "Incident response"]}

                 trend="Increasingly sophisticated"
               />
            </div>
          </TabsContent>

          {/* Pricing Tab */}

          <TabsContent />
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Cybersecurity Service Pricing</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Transparent pricing for comprehensive cybersecurity solutions that fit your business needs and budget.
              </p>
            </div>

            <div>
              <PricingCard />
                title="Essential Security"
                price="$3,999"
                description="Basic cybersecurity protection for small businesses"
                features={[
                  "Security assessment",
                  "Basic monitoring",
                  "Employee training",
                  "Incident response",
                  "Email support"
                ]}

                popular={false}

              />
              <PricingCard />
                title="Professional Security"
                price="$9,999"
                description="Comprehensive security solution for growing businesses"
                features={[
                  "Advanced threat detection",
                  "24/7 monitoring",
                  "Penetration testing",
                  "Compliance support",
                  "Priority support",
                  "Security training"
                ]}

                popular={true}

              />
              <PricingCard />
                title="Enterprise Security"
                price="$24,999"
                description="Full-scale security transformation for large organizations"
                features={[
                  "Custom security architecture",
                  "Advanced threat hunting",
                  "Full compliance suite",
                  "Dedicated security team",
                  "24/7 support",
                  "Custom training programs",
                  "Ongoing optimization"
                ]}

                popular={false}

              />
            </div>

            {/* ROI Calculator */}

            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Security Investment ROI</h3>
              <div>
          <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Cost of Breach Prevention</h4>
                  <div>
          <div>
                      <span className="text-zion-cyan-light">Average breach cost:</span>
                      <span className="text-white font-semibold">$4.35M</span>
                    </div>
                    <div>
                      <span className="text-zion-cyan-light">Security investment:</span>
                      <span className="text-white font-semibold">$9,999</span>
                    </div>
                    <div>
                      <span className="text-zion-cyan-light">ROI ratio:</span>
                      <span className="text-white font-semibold">435:1</span>
                    </div>
                    <div>
                      <span className="text-zion-cyan-light">Risk reduction:</span>
                      <span className="text-white font-semibold">90%+</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Additional Benefits</h4>
                  <div>
          <div>
                      <span className="text-zion-cyan-light">Compliance cost savings:</span>
                      <span className="text-white font-semibold">$50K-200K</span>
                    </div>
                    <div>
                      <span className="text-zion-cyan-light">Insurance premium reduction:</span>
                      <span className="text-white font-semibold">20-40%</span>
                    </div>
                    <div>
                      <span className="text-zion-cyan-light">Customer trust increase:</span>
                      <span className="text-white font-semibold">Significant</span>
                    </div>
                    <div>
                      <span className="text-zion-cyan-light">Competitive advantage:</span>
                      <span className="text-white font-semibold">High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}

      <div>
          <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
            Don't wait until it's too late. Protect your business with enterprise-grade cybersecurity solutions.
          </p>
          <div>
            <Button />
              <Shield />
              Security Assessment
            </Button>
            <Button />
              <Phone />
              Schedule Consultation
            </Button>
          </div>
        </section>

      {/* Contact Section */}

      <div>
          <div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              Ready to strengthen your cybersecurity posture? Contact our security experts today.
            </p>
          </div>
          
          <div>
          <div>
              <Phone />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan-light">+1 302 464 0950</p>
              <p className="text-sm text-zion-cyan-light">Mon-Fri 9AM-6PM EST</p>
            </div>
            <div>
              <Mail />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>
              <p className="text-sm text-zion-cyan-light">24/7 Response</p>
            </div>
            <div>
              <MapPin />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan-light">364 E Main St STE 1008</p>
              <p className="text-sm text-zion-cyan-light">Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Security Service Card Component
function SecurityServiceCard({ service }: { service: any }) {
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
          
          <div>
            <span className="text-zion-cyan-light">Security Score:</span>
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

          <div>
            {service.tags.slice(0, 3).map((tag: string) => (
              <Badge />
                {tag}

              </Badge>
            ))}

          </div>

          <Button />
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Compliance Card Component
function ComplianceCard({ icon, title, description, requirements, industries }: {
  icon: React.ReactNode
  title: string
  description: string
  requirements: string[]

  industries: string[]

}) {
  return (
    <Card />
      <CardHeader />
        <div>
          {icon}

        </div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription />
          {description}

        </CardDescription>
      </CardHeader>
      <CardContent />
        <div>
          <div>
            <h4 className="font-semibold text-white mb-2">Key Requirements:</h4>
            <div>
              {requirements.map((req, index) => (
                <div>
                  <CheckCircle />
                  <span className="text-sm text-zion-cyan-light">{req}</span>
                </div>
              ))}

            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Industries:</h4>
            <div>
              {industries.map((industry, index) => (
                <Badge />
                  {industry}

                </Badge>
              ))}

            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Threat Card Component
function ThreatCard({ icon, title, description, impact, prevention, trend }: {
  icon: React.ReactNode
  title: string
  description: string
  impact: string
  prevention: string[]

  trend: string
}) {
  return (
    <Card />
      <CardHeader />
        <div>
          {icon}

        </div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription />
          {description}

        </CardDescription>
      </CardHeader>
      <CardContent />
        <div>
          <div>
            <h4 className="font-semibold text-white mb-2">Impact:</h4>
            <p className="text-sm text-zion-cyan-light">{impact}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Prevention:</h4>
            <div>
              {prevention.map((item, index) => (
                <div>
                  <CheckCircle />
                  <span className="text-sm text-zion-cyan-light">{item}</span>
                </div>
              ))}

            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Trend:</h4>
            <p className="text-sm text-zion-cyan-light">{trend}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Pricing Card Component
function PricingCard({ title, price, description, features, popular }: {
  title: string
  price: string
  description: string
  features: string[]

  popular: boolean
}) {
  return (
    <Card />
      {popular && (
        <div>
          <Badge className="bg-zion-cyan text-white px-4 py-1">Most Popular</Badge>
        </div>
      )}

      <CardHeader />
        <CardTitle className="text-2xl text-white">{title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">{description}</CardDescription>
        <div className="text-4xl font-bold text-zion-cyan mt-4">{price}</div>
      </CardHeader>
      <CardContent />
        <div>
          {features.map((feature, index) => (
            <div>
              <CheckCircle />
              <span className="text-zion-cyan-light">{feature}</span>
            </div>
          ))}

        </div>
        <Button />
          Get Started
        </Button>
      </CardContent>
    </Card>
  )
  Zap, 
  AlertTriangle,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Network,
  Database,
  Smartphone,
  TrendingUp as Activity,
  Users
} from "lucide-react"
import { TrustedBySection } from "@/components/TrustedBySection"
const cybersecurityServices = [
  {
    id: "threat-detection",
    title: "AI-Powered Threat Detection",
    description: "Advanced cybersecurity using machine learning to detect and prevent sophisticated cyber threats in real-time.",
    price: 1200,
    currency: "$",
    period: "/month",
    features: [
      "Real-time threat detection",
      "Behavioral analysis",
      "Automated response",
      "Threat intelligence",
      "Compliance monitoring",
      "24/7 SOC support"
    ],
    icon: <Eye className="h-8 w-8" />,
    category: "Threat Detection",
    badge: "Popular",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "zero-trust",
    title: "Zero-Trust Security Framework",
    description: "Implementation of zero-trust security architecture with identity verification, micro-segmentation, and continuous monitoring.",
    price: 4200,
    currency: "$",
    period: "/month",
    features: [
      "Identity verification",
      "Micro-segmentation",
      "Continuous monitoring",
      "Access control",
      "Network isolation",
      "Security policies"
    ],
    icon: <Lock className="h-8 w-8" />,
    category: "Architecture",
    badge: "Enterprise",
    link: "/services",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing & Vulnerability Assessment",
    description: "Comprehensive security testing to identify vulnerabilities and assess your security posture.",
    price: 2500,
    currency: "$",
    period: "/assessment",
    features: [
      "External penetration testing",
      "Internal security assessment",
      "Web application testing",
      "Social engineering",
      "Detailed reporting",
      "Remediation guidance"
    ],
    icon: <AlertTriangle className="h-8 w-8" />,
    category: "Testing",
    badge: "Critical",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "incident-response",
    title: "Incident Response & Forensics",
    description: "Rapid response to security incidents with digital forensics and recovery services.",
    price: 3500,
    currency: "$",
    period: "/incident",
    features: [
      "24/7 incident response",
      "Digital forensics",
      "Evidence preservation",
      "Recovery planning",
      "Legal support",
      "Post-incident analysis"
    ],
    icon: <Activity className="h-8 w-8" />,
    category: "Response",
    badge: "Emergency",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "compliance-audit",
    title: "Compliance & Audit Services",
    description: "Ensure compliance with industry standards including SOC 2, ISO 27001, GDPR, and HIPAA.",
    price: 1800,
    currency: "$",
    period: "/month",
    features: [
      "Compliance assessment",
      "Policy development",
      "Audit preparation",
      "Gap analysis",
      "Training programs",
      "Ongoing support"
    ],
    icon: <Shield className="h-8 w-8" />,
    category: "Compliance",
    badge: "Required",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "security-training",
    title: "Security Awareness Training",
    description: "Comprehensive training programs to educate employees on cybersecurity best practices and threat awareness.",
    price: 450,
    currency: "$",
    period: "/user/month",
    features: [
      "Interactive training modules",
      "Phishing simulations",
      "Security assessments",
      "Progress tracking",
      "Compliance reporting",
      "Custom content"
    ],
    icon: <Users className="h-8 w-8" />,
    category: "Training",
    badge: "Essential",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  }

]

const securityBenefits = [
  {
    title: "Proactive Protection",
    description: "Identify and prevent threats before they can cause damage to your business",
    icon: <Shield />
  },
  {
    title: "Compliance Assurance",
    description: "Meet industry standards and regulatory requirements with confidence",
    icon: <Lock />
  },
  {
    title: "24/7 Monitoring",
    description: "Round-the-clock security monitoring and incident response capabilities",
    icon: <Eye />
  },
  {
    title: "Cost Reduction",
    description: "Prevent costly security breaches and minimize financial impact",
    icon: <TrendingUp />
  }

]

const securityThreats = [
  {
    title: "Ransomware Attacks",
    description: "Protect against encryption-based attacks that can cripple your business operations",
    icon: <AlertTriangle />
  },
  {
    title: "Data Breaches",
    description: "Safeguard sensitive information from unauthorized access and exfiltration",
    icon: <Database />
  },
  {
    title: "Phishing Scams",
    description: "Train employees to recognize and avoid sophisticated social engineering attacks",
    icon: <Users />
  },
  {
    title: "Insider Threats",
    description: "Monitor and control access to prevent malicious or accidental insider incidents",
    icon: <Network />
  }

]

export default function CybersecurityServicesPage() {
  return (
    <div>
      {/* Hero Section */}

      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">
        <div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Solutions for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
                Digital Age
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Protect your business with enterprise-grade cybersecurity solutions. From threat detection to compliance, 
              we deliver comprehensive security services that keep your assets safe and your business compliant.
            </p>
            <div>
              <Link />
                <Button />
                  Secure Your Business
                </Button>
              </Link>
              <Link />
                <Button />
                  Security Assessment
                </Button>
              </Link>
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Search, 
  Star, 
  Clock, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  BookOpen,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Lightbulb,
  Lock,
  Eye,
  AlertTriangle,
  Server,
  Network,
  Key,
  ShieldCheck
} from 'lucide-react'
import { EXPANDED_SERVICES, type ExpandedService } from '@/data/expandedServices'
import { TrustedBySection } from '@/components/TrustedBySection'
export default function CybersecurityServicesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<string>('all')
  // Filter only security services
  const securityServices = EXPANDED_SERVICES.filter(service => 
    service.category === 'Security Services'
  )
  const filteredServices = securityServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory
    let matchesPrice = true
    if (priceRange === 'low') matchesPrice = service.price < 500
    else if (priceRange === 'medium') matchesPrice = service.price >= 500 && service.price < 1000
    else if (priceRange === 'high') matchesPrice = service.price >= 1000
    return matchesSearch && matchesSubcategory && matchesPrice
  })
  const getPricingModelIcon = (model: string) => {
    switch (model) {
      case 'monthly': return <Clock />
      case 'hourly': return <Zap />
      case 'project-based': return <Zap />
      default: return <DollarSign />
    }

  }

  const getPricingModelText = (model: string) => {
    switch (model) {
      case 'one-time': return 'One-time'
      case 'monthly': return 'Monthly'
      case 'hourly': return 'Hourly'
      case 'project-based': return 'Project-based'
      default: return model
    }

  }

  return (
    <Card />
      <div>
        <img
          src={service.images[0]}

          alt={service.title}

          className="w-full h-48 object-cover rounded-t-lg"
        />
        {service.featured && (
          <Badge />
            Featured
          </Badge>
        )}

        <Badge />
          AI Score: {service.aiScore}

        </Badge>
      </div>
      
      <CardHeader />
        <div>
          <div className="text-2xl">🔒</div>
          <div>
          <div>
              {service.currency}{service.price.toLocaleString()}

            </div>
            <div>
              {getPricingModelLabel(service.pricingModel)}

            </div>
          </div>
        </div>
        
        <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
        <CardDescription />
          {service.description}

        </CardDescription>
      </CardHeader>
      
      <CardContent />
        {/* Rating and Reviews */}

        <div>
          <div>
            <Star />
            <span className="font-medium">{service.rating}</span>
          </div>
          <span className="text-muted-foreground">
            ({service.reviewCount} reviews)
          </span>
        </div>
        
        {/* Market Price */}

        <div>
          <TrendingUp />
          <span className="text-muted-foreground">Market Price:</span>
          <span className="font-medium">{service.marketPrice}</span>
        </div>
        
        {/* Delivery Time */}

        <div>
          <Clock />
          <span className="text-muted-foreground">Delivery:</span>
          <span className="font-medium">{service.deliveryTime}</span>
        </div>
        
        {/* Key Features */}

        <div>
          <h4 className="font-medium text-sm">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 3).map((feature: string, index: number) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle />
                {feature}

              </li>
            ))}

          </ul>
        </div>
        
        {/* Contact Information */}

        <div>
          <div>
            <div>
              <Phone />
              <span>{service.contactInfo.phone}</span>
            </div>
            <div>
              <Mail />
              <span>{service.contactInfo.email}</span>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}

        <div>
          <Button />
            Get Security Quote
          </Button>
          <Button />
            Learn More
          </Button>
        </div>
      </section>

      {/* Search and Filters */}

      <section className="py-8 bg-zion-blue">
        <div>
          <div>
            <div>
              <Search />
              <Input />
                placeholder="Search security services, compliance, or threats..."
                value={searchQuery}

                onChange={(e) => setSearchQuery(e.target.value)}

                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder: text-zion-slate-light"
              />
            </div>
            
            <Select />
              <SelectTrigger />
                <SelectValue />
              </SelectTrigger>
              <SelectContent />
                <SelectItem value="all">All Security Categories</SelectItem>
                {securitySubcategories.map(sub => (
                  <SelectItem key={sub} value={sub}>{sub}</SelectItem>
                ))}

              </SelectContent>
            </Select>

            <Select />
              <SelectTrigger />
                <SelectValue />
              </SelectTrigger>
              <SelectContent />
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $500</SelectItem>
                <SelectItem value="medium">$500 - $1K</SelectItem>
                <SelectItem value="high">Over $1K</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Security Services Grid */}

      <section className="py-16">
        <div>
          <div>
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              {filteredServices.length} Security Services Found
            </h2>
            <p className="text-zion-slate-light">
              Discover comprehensive security solutions to protect your business and maintain compliance
            </p>
          </div>

          <div>
            {filteredServices.map((service) => (
              <Card />
                <CardHeader />
                  <div>
                    <Badge />
                      {service.subcategory}

                    </Badge>
                    <div>
                      <Star />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-xs">({service.reviewCount})</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl text-zion-blue mb-2">{service.title}</CardTitle>
                  <CardDescription />
                    {service.description}

                  </CardDescription>
                </CardHeader>

                <CardContent />
                  {/* Pricing */}

                  <div>
          <div>
                      {getPricingModelIcon(service.pricingModel)}

                      <span className="text-sm text-zion-slate-light">
                        {getPricingModelText(service.pricingModel)}

                      </span>
                    </div>
                    <div>
          <div>
                        {service.currency}{service.price.toLocaleString()}

                      </div>
                      {service.pricingModel === 'monthly' && (
                        <div className="text-xs text-zion-slate-light">per month</div>
                      )}

                    </div>
                  </div>

                  {/* AI Score */}

                  <div>
                    <span className="text-sm text-zion-slate-light">Security Score</span>
                    <Badge />
                      <Shield />
                      {service.aiScore}/100
                    </Badge>
                  </div>

                  {/* Features Preview */}

                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Features</h4>
                    <div>
                      {service.features.slice(0, 3).map((feature, index) => (
                        <Badge />
                          {feature}

                        </Badge>
                      ))}

                      {service.features.length > 3 && (
                        <Badge />
                          +{service.features.length - 3} more
                        </Badge>
                      )}

                    </div>
                  </div>

                  {/* Benefits */}

                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Benefits</h4>
                    <div>
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div>
                          <CheckCircle />
                          <span>{benefit}</span>
                        </div>
                      ))}

                    </div>
                  </div>

                  {/* Use Cases */}

                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Use Cases</h4>
                    <div>
                      {service.useCases.slice(0, 3).map((useCase, index) => (
                        <Badge />
                          {useCase}

                        </Badge>
                      ))}

                    </div>
                  </div>

                  {/* Target Audience */}

                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Perfect For</h4>
                    <div>
                      {service.targetAudience.slice(0, 3).map((audience, index) => (
                        <Badge />
                          {audience}

                        </Badge>
                      ))}

                    </div>
                  </div>

                  {/* Action Buttons */}

                  <div>
                    <Link />
                      <Button />
                        <Lightbulb />
                        Learn More
                      </Button>
                    </Link>
                    
                    <div>
                      {service.website && (
                        <$2 />
                          href={service.website}

                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button />
                            <ExternalLink />
                            Demo
                          </Button>
                        </a>
                      )}

                      <Link />
                        <Button />
                          <Mail />
                          Contact
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Additional Info */}

                  <div>
          <div>
                      {service.documentation && (
                        <div>
                          <BookOpen />
                          <span>Docs</span>
                        </div>
                      )}

                      {service.support && (
                        <div>
                          <Phone />
                          <span>Support</span>
                        </div>
                      )}

                      {service.compliance && service.compliance.length > 0 && (
                        <div>
                          <Shield />
                          <span>{service.compliance.length} Compliance</span>
                        </div>
                      )}

                      {service.sla && (
                        <div>
                          <TrendingUp />
                          <span>SLA</span>
                        </div>
                      )}

                    </div>
                  </div>
  AlertTriangle, 
  BarChart3, 
  Star, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Globe,
  Users,
  Circle,
  Zap,
  Server,
  Network,
  Code,
  FileText,
  ShieldCheck,
  Key,
  Database,
  Monitor
} from "lucide-react"
import { CYBERSECURITY_SERVICES } from "@/data/expandedServices"
const CybersecurityServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}

      <div>
          <div>
          <div>
          <div>
              <Shield />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Protect your business with enterprise-grade cybersecurity services and threat intelligence
            </p>
            <div>
              <Link />
                <Button />
                  Get Security Assessment
                  <ArrowRight />
                </Button>
              </Link>
              <Link />
                <Button />
                  Contact Security Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}

      <div>
          <div>
          <div>
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
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div>
              <Globe />
              <$2 />
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:underline font-medium"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Security Threats Overview */}

      <div>
          <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modern Security Threats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay protected against evolving cyber threats with our comprehensive security solutions
            </p>
          </div>
          
          <div>
          <div>
              <div>
                <AlertTriangle />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ransomware Attacks</h3>
              <p className="text-gray-600">Protect against data encryption and extortion attempts with advanced threat detection</p>
            </div>
            
            <div>
          <div>
                <Users />
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Engineering</h3>
              <p className="text-gray-600">Defend against phishing, pretexting, and other human-based attack vectors</p>
            </div>
            
            <div>
          <div>
                <Server />
              </div>
              <h3 className="text-xl font-semibold mb-2">Supply Chain Attacks</h3>
              <p className="text-gray-600">Secure your software and hardware supply chain against compromise</p>
            </div>
            
            <div>
          <div>
                <Database />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Breaches</h3>
              <p className="text-gray-600">Prevent unauthorized access and protect sensitive information</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cybersecurity Services Grid */}

      <div>
          <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions to protect your business from all angles
            </p>
          </div>

          <div>
            {CYBERSECURITY_SERVICES.map((service) => (
              <Card />
                <div>
                  <img 
                    src={service.images[0]}

                    alt={service.title}

                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  {service.featured && (
                    <Badge />
                      Featured
                    </Badge>
                  )}

                </div>
                <CardHeader />
                  <div>
                    <Badge />
                      {service.category}

                    </Badge>
                    <div>
                      <Star />
                      <span>{service.rating}</span>
                      <span className="text-gray-400">({service.reviewCount})</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">{service.title}</CardTitle>
                  <CardDescription />
                    {service.description}

                  </CardDescription>
                </CardHeader>
                <CardContent />
                  <div>
          <div>
                      {service.currency}{service.price?.toLocaleString()}

                    </div>
                    <div>
                      <Clock />
                      <span>{service.availability}</span>
                    </div>
                  </div>
                  
                  <div>
                    {service.tags.map((tag) => (
                      <Badge />
                        {tag}

                      </Badge>
                    ))}

                  </div>

                  <div>
          <div>
                      <BarChart3 />
                      <span>AI Score: {service.aiScore}%</span>
                    </div>
                    <Link />
                      <Button />
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}

          </div>

          {filteredServices.length === 0 && (
            <div>
              <h3 className="text-xl font-semibold text-zion-slate-light mb-2">No security services found</h3>
              <p className="text-zion-slate-light mb-4">Try adjusting your search criteria or browse all security categories</p>
              <Button onClick={() => {
                setSearchQuery('')
                setSelectedSubcategory('all')
                setPriceRange('all')
              }}>
                Clear Filters
              </Button>
            </div>
          )}

        </div>
      </section>

      {/* Security Statistics */}

      <section className="py-16 bg-zion-blue">
        <div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Security by the Numbers</h2>
            <p className="text-zion-slate-light text-lg">
              Our security solutions protect businesses worldwide
            </p>
          </div>

          <div>
          <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-white font-semibold">Threat Detection Rate</div>
              <div className="text-zion-slate-light text-sm">Advanced AI-powered threat detection</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-white font-semibold">Security Monitoring</div>
              <div className="text-zion-slate-light text-sm">Round-the-clock threat monitoring</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">15min</div>
              <div className="text-white font-semibold">Response Time</div>
              <div className="text-zion-slate-light text-sm">Average incident response time</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">100%</div>
              <div className="text-white font-semibold">Compliance Success</div>
              <div className="text-zion-slate-light text-sm">Regulatory compliance rate</div>
      {/* Security Services Grid */}

      <section className="py-20 bg-zion-blue-dark">
        <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose from our range of cybersecurity services designed to address specific 
              security challenges and protect your business assets.
            </p>
          </div>
          
          <div>
            {securityServices.map((service) => (
              <div>
          <div>
                  <div>
          <div>
                      {service.icon}

                    </div>
                  </div>
                  <div>
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                  </div>
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <CheckCircle />
                        {feature}

                      </li>
                    ))}

                  </ul>
                </div>
                
                <div>
          <div>
                    <div>
                      <DollarSign />
                      <span className="font-semibold">{service.currency}{service.price.toLocaleString()}</span>
                    </div>
                    <div>
                      <Clock />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                
                <Link />
                  <Button />
                    Get Quote
                  </Button>
                </Link>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Security Technologies */}

      <section className="py-20 bg-zion-blue">
        <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Technologies
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We leverage cutting-edge security technologies and tools to deliver 
              comprehensive protection for your business.
            </p>
          </div>
          
          <div>
            {securityTechnologies.map((tech, index) => (
              <div>
          <div>
                  <Shield />
                </div>
                <h3 className="text-white font-semibold text-sm">{tech}</h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Compliance Standards */}

      <section className="py-20 bg-zion-blue-dark">
        <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance & Standards
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our security solutions help you meet industry standards and regulatory 
              requirements across multiple sectors.
            </p>
          </div>
          
          <div>
            {complianceStandards.map((standard, index) => (
              <div>
          <div>
                  <Lock />
                </div>
                <h3 className="text-white font-semibold text-sm">{standard}</h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Threat Intelligence */}

      <section className="py-20 bg-zion-blue">
        <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Threat Intelligence & Monitoring
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Stay ahead of emerging threats with our comprehensive threat intelligence 
              and 24/7 security monitoring services.
            </p>
          </div>
          
          <div>
            {threatIntelligence.map((intel, index) => (
              <div>
          <div>
                  <Eye />
                </div>
                <h3 className="text-white font-semibold text-sm">{intel}</h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose ZionTech for Security */}

      <section className="py-20 bg-zion-blue-dark">
        <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose ZionTech Group for Cybersecurity?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We combine deep security expertise with industry knowledge to deliver 
              solutions that protect your business and build customer trust.
            </p>
          </div>
          
          <div>
          <div>
              <div>
                <Star />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Certified Experts</h3>
              <p className="text-zion-slate-light">
                CISSP, CISM, and CEH certified security professionals with 
                extensive experience in enterprise security.
              </p>
            </div>
            
            <div>
          <div>
                <Shield />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-zion-slate-light">
                Successfully protected over 500+ businesses from cyber threats 
                with zero major security breaches.
              </p>
            </div>
            
            <div>
          <div>
                <Zap />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-zion-slate-light">
                Round-the-clock security monitoring and incident response 
                to protect your business at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Pricing */}

      <section className="py-20 bg-zion-blue">
        <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Security Pricing
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Competitive pricing for enterprise-grade security solutions with 
              flexible payment options and comprehensive protection.
            </p>
          </div>
          
          <div>
          <div>
              <h3 className="text-white text-2xl font-bold mb-4">Essential Security</h3>
              <div>
                $3,800<span className="text-lg text-zion-slate-light">/project</span>
              </div>
              <ul className="text-zion-slate-light space-y-2 mb-8">
                <li>Basic security assessment</li>
                <li>Vulnerability scanning</li>
                <li>Security policy review</li>
                <li>Email support</li>
              </ul>
              <Link />
                <Button />
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div>
          <div>
                <span className="bg-zion-cyan text-zion-blue px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Professional Security</h3>
              <div>
                $7,200<span className="text-lg text-zion-slate-light">/project</span>
              </div>
              <ul className="text-white space-y-2 mb-8">
                <li>Comprehensive security audit</li>
                <li>Penetration testing</li>
                <li>Security architecture review</li>
                <li>Priority support</li>
              </ul>
              <Link />
                <Button />
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Enterprise Security</h3>
              <div>
                $15,000<span className="text-lg text-zion-slate-light">/project</span>
              </div>
              <ul className="text-zion-slate-light space-y-2 mb-8">
                <li>Full security transformation</li>
                <li>SOC setup and management</li>
                <li>24/7 monitoring and response</li>
                <li>Dedicated security team</li>
              </ul>
              <Link />
                <Button />
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}

      <section className="py-20 bg-zion-blue-dark">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Contact our cybersecurity experts today to discuss how we can help you 
            protect your business from evolving threats.
          </p>
          
          <div>
          <div>
              <div>
                <Globe />
              </div>
              <h3 className="text-white font-bold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
            
            <div>
          <div>
                <Users />
              </div>
              <h3 className="text-white font-bold mb-2">Call Us</h3>
              <p className="text-zion-cyan font-semibold">
                +1 302 464 0950
              </p>
            </div>
            
            <div>
          <div>
                <Zap />
              </div>
              <h3 className="text-white font-bold mb-2">Email Us</h3>
              <p className="text-zion-cyan font-semibold">
                kleber@ziontechgroup.com
              </p>
            </div>
          </div>
          
          <div>
            <Link />
              <Button />
                Request Security Quote
              </Button>
            </Link>
            <Link />
              <Button />
                Schedule Security Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustedBySection />
      <QuoteFormSection />
    </>
  )
}

        </div>
      </div>

      {/* Security Framework */}

      <div>
          <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Framework & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our security approach follows industry best practices and compliance standards
            </p>
          </div>

          <div>
          <div>
              <div>
                <ShieldCheck />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">SOC 2 Type II</h3>
              <p className="text-gray-600">Security, availability, and processing integrity controls for service organizations</p>
            </div>

            <div>
          <div>
                <FileText />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">ISO 27001</h3>
              <p className="text-gray-600">International standard for information security management systems</p>
            </div>

            <div>
          <div>
                <Key />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">PCI DSS</h3>
              <p className="text-gray-600">Payment card industry data security standard compliance</p>
            </div>

            <div>
          <div>
                <Monitor />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">NIST Framework</h3>
              <p className="text-gray-600">Cybersecurity framework for critical infrastructure protection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Process */}

      <div>
          <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Security Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to identifying, assessing, and mitigating security risks
            </p>
          </div>

          <div>
          <div>
              <div>
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600">Comprehensive security audit and vulnerability assessment</p>
            </div>

            <div>
          <div>
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">Develop security roadmap and prioritize remediation efforts</p>
            </div>

            <div>
          <div>
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Deploy security controls and monitoring solutions</p>
            </div>

            <div>
          <div>
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Monitoring</h3>
              <p className="text-gray-600">Continuous threat monitoring and incident response</p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Tools & Technologies */}

      <div>
          <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art security tools and platforms for comprehensive protection
            </p>
          </div>

          <div>
            <Card />
              <CardHeader />
                <div>
                  <Eye />
                </div>
                <CardTitle>Threat Detection</CardTitle>
              </CardHeader>
              <CardContent />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>SIEM platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>EDR solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Network monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card />
              <CardHeader />
                <div>
                  <AlertTriangle />
                </div>
                <CardTitle>Vulnerability Management</CardTitle>
              </CardHeader>
              <CardContent />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Automated scanning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Penetration testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Code analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card />
              <CardHeader />
                <div>
                  <Lock />
                </div>
                <CardTitle>Access Control</CardTitle>
              </CardHeader>
              <CardContent />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Multi-factor authentication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Identity management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Privileged access</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card />
              <CardHeader />
                <div>
                  <Network />
                </div>
                <CardTitle>Network Security</CardTitle>
              </CardHeader>
              <CardContent />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Firewall management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>VPN solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Intrusion prevention</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card />
              <CardHeader />
                <div>
                  <Database />
                </div>
                <CardTitle>Data Protection</CardTitle>
              </CardHeader>
              <CardContent />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Encryption at rest</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Data loss prevention</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Backup security</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card />
              <CardHeader />
                <div>
                  <Code />
                </div>
                <CardTitle>Application Security</CardTitle>
              </CardHeader>
              <CardContent />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>SAST/DAST testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>API security</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Secure development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}

      <div>
          <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Don't wait until it's too late. Our cybersecurity experts are ready to help you build 
            a robust security posture and protect your valuable assets.
          </p>
          <div>
            <Link />
              <Button />
                Get Security Assessment
                <ArrowRight />
              </Button>
            </Link>
            <Link />
              <Button />
                Contact Security Team
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Contact */}

      <div>
          <div>
          <div>
          <div>
              <h3 className="text-2xl font-bold mb-6 text-red-400">ZionTech Group</h3>
              <p className="text-gray-300 mb-6">
                Your trusted cybersecurity partner. We help businesses protect their digital assets 
                with comprehensive security solutions and expert guidance.
              </p>
              <div>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">
                  <Globe />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-red-400">Contact Information</h3>
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
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <p>&copy; 2024 ZionTech Group. All rights reserved. | <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CybersecurityServicesPage
}

</div></div></div></div></div></div></div></div></div></div>