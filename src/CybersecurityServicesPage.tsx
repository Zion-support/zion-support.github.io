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
      {/* Hero Section */}
        <div className="absolute inset-0 bg-black/20"></div>
              Cybersecurity Services
            Protect Your Business with Enterprise-Grade Security Solutions
            From threat detection to compliance management, we provide comprehensive cybersecurity that keeps your business safe in an evolving digital landscape.
          
          {/* Contact CTA */}
              +1 302 464 0950
              kleber@ziontechgroup.com

          {/* Security Stats */}
              <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-cyan-light">Threat Detection</div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-cyan-light">Monitoring</div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-zion-cyan-light">Breach Reduction</div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">100%</div>
              <div className="text-zion-cyan-light">Compliance</div>

      {/* Main Content */}

          {/* Overview Tab */}
              <h2 className="text-4xl font-bold text-white mb-6">Why Cybersecurity is Critical</h2>
                In today's interconnected world, cybersecurity is not just about protecting data—it's about protecting your business, reputation, and future.

                  <h3 className="text-2xl font-bold text-white mb-4">Threat Protection</h3>
                    Advanced threat detection and prevention systems that identify and neutralize cyber attacks before they can cause damage.

                  <h3 className="text-2xl font-bold text-white mb-4">Data Security</h3>
                    Comprehensive data protection including encryption, access controls, and secure backup solutions to safeguard your critical information.

                  <h3 className="text-2xl font-bold text-white mb-4">Compliance & Risk</h3>
                    Ensure regulatory compliance and minimize risk exposure with our comprehensive security frameworks and audit support.

            {/* Security Framework */}
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Security Framework</h3>
                  <h4 className="font-semibold text-white mb-2">Detect</h4>
                  <p className="text-sm text-zion-cyan-light">Advanced threat detection and monitoring</p>
                  <h4 className="font-semibold text-white mb-2">Protect</h4>
                  <p className="text-sm text-zion-cyan-light">Multi-layered defense systems</p>
                  <h4 className="font-semibold text-white mb-2">Respond</h4>
                  <p className="text-sm text-zion-cyan-light">Rapid incident response and recovery</p>
                  <h4 className="font-semibold text-white mb-2">Recover</h4>
                  <p className="text-sm text-zion-cyan-light">Business continuity and resilience</p>

          {/* Services Tab */}
              <h2 className="text-4xl font-bold text-white mb-6">Cybersecurity Service Portfolio</h2>
                Comprehensive security solutions designed to protect your business from modern cyber threats.

              {CYBERSECURITY_SERVICES.map((service) => (
              ))}

            {/* Additional Security Services */}
                    Penetration Testing
                    Comprehensive security assessments to identify vulnerabilities before attackers do.
                      <span className="text-sm text-zion-cyan-light">Network penetration testing</span>
                      <span className="text-sm text-zion-cyan-light">Web application testing</span>
                      <span className="text-sm text-zion-cyan-light">Social engineering assessments</span>
                    Learn More

                    Security Monitoring
                    24/7 security monitoring and threat intelligence to detect and respond to incidents in real-time.
                      <span className="text-sm text-zion-cyan-light">SIEM implementation</span>
                      <span className="text-sm text-zion-cyan-light">Threat intelligence feeds</span>
                      <span className="text-sm text-zion-cyan-light">Incident response automation</span>
                    Learn More

                    Security Training
                    Employee security awareness training to create a human firewall against social engineering attacks.
                      <span className="text-sm text-zion-cyan-light">Phishing simulation</span>
                      <span className="text-sm text-zion-cyan-light">Security best practices</span>
                      <span className="text-sm text-zion-cyan-light">Compliance training</span>
                    Learn More

          {/* Compliance Tab */}
              <h2 className="text-4xl font-bold text-white mb-6">Compliance & Regulatory Standards</h2>
                Ensure your business meets industry standards and regulatory requirements with our comprehensive compliance solutions.

                icon={<FileText className="h-8 w-8" />}
                title="GDPR Compliance"
                description="European data protection regulation compliance with privacy-by-design principles."
                requirements={["Data protection", "Privacy rights", "Breach notification", "Data processing"]}
                industries={["All EU businesses", "Healthcare", "Finance", "E-commerce"]}
              />
                icon={<Shield className="h-8 w-8" />}
                title="SOC 2 Type II"
                description="Service Organization Control 2 certification for security, availability, and confidentiality."
                requirements={["Security controls", "Availability monitoring", "Confidentiality", "Processing integrity"]}
                industries={["SaaS companies", "Cloud providers", "Data centers", "IT services"]}
              />
                icon={<Lock className="h-8 w-8" />}
                title="HIPAA Compliance"
                description="Health Insurance Portability and Accountability Act compliance for healthcare organizations."
                requirements={["Patient privacy", "Data security", "Access controls", "Audit trails"]}
                industries={["Healthcare", "Medical devices", "Health insurance", "Telemedicine"]}
              />
                icon={<CreditCard className="h-8 w-8" />}
                title="PCI DSS"
                description="Payment Card Industry Data Security Standard for payment processing security."
                requirements={["Card data protection", "Network security", "Access control", "Regular testing"]}
                industries={["Retail", "E-commerce", "Payment processing", "Financial services"]}
              />
                icon={<Server className="h-8 w-8" />}
                title="ISO 27001"
                description="International standard for information security management systems."
                requirements={["Risk assessment", "Security controls", "Management system", "Continuous improvement"]}
                industries={["Technology", "Manufacturing", "Financial services", "Government"]}
              />
                icon={<Database className="h-8 w-8" />}
                title="CCPA Compliance"
                description="California Consumer Privacy Act compliance for consumer data protection."
                requirements={["Consumer rights", "Data transparency", "Opt-out mechanisms", "Data security"]}
                industries={["California businesses", "Online services", "Data brokers", "Large corporations"]}
              />

          {/* Threats Tab */}
              <h2 className="text-4xl font-bold text-white mb-6">Modern Cyber Threats</h2>
                Understanding the threat landscape is the first step in building effective cybersecurity defenses.

                icon={<AlertTriangle className="h-8 w-8" />}
                title="Ransomware Attacks"
                description="Malicious software that encrypts files and demands payment for decryption."
                impact="High - Data loss, business disruption, financial loss"
                prevention={["Regular backups", "Email filtering", "User training", "Patch management"]}
                trend="Increasing 150% annually"
              />
                icon={<Users className="h-8 w-8" />}
                title="Social Engineering"
                description="Manipulation tactics to trick users into revealing sensitive information."
                impact="Medium - Data breaches, unauthorized access, reputation damage"
                prevention={["Security training", "Multi-factor authentication", "Verification procedures", "Incident reporting"]}
                trend="Most common attack vector"
              />
                icon={<Network className="h-8 w-8" />}
                title="DDoS Attacks"
                description="Distributed denial-of-service attacks that overwhelm systems with traffic."
                impact="Medium - Service disruption, revenue loss, customer dissatisfaction"
                prevention={["Traffic filtering", "CDN protection", "Rate limiting", "Incident response"]}
                trend="Increasing in sophistication"
              />
                icon={<Database className="h-8 w-8" />}
                title="Data Breaches"
                description="Unauthorized access to sensitive information and intellectual property."
                impact="High - Financial loss, legal consequences, brand damage"
                prevention={["Access controls", "Encryption", "Monitoring", "Regular audits"]}
                trend="Costing $4.35M average"
              />
                icon={<Smartphone className="h-8 w-8" />}
                title="Mobile Threats"
                description="Attacks targeting mobile devices and applications."
                impact="Medium - Data theft, device compromise, privacy violations"
                prevention={["Mobile device management", "App security", "User training", "Regular updates"]}
                trend="Growing with mobile adoption"
              />
                 icon={<Network className="h-8 w-8" />}
                 title="Supply Chain Attacks"
                 description="Compromising software or hardware through third-party vendors."
                 impact="High - Widespread compromise, trust erosion, regulatory scrutiny"
                 prevention={["Vendor assessment", "Code signing", "Supply chain monitoring", "Incident response"]}
                 trend="Increasingly sophisticated"
               />

          {/* Pricing Tab */}
              <h2 className="text-4xl font-bold text-white mb-6">Cybersecurity Service Pricing</h2>
                Transparent pricing for comprehensive cybersecurity solutions that fit your business needs and budget.

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

            {/* ROI Calculator */}
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Security Investment ROI</h3>
                  <h4 className="text-xl font-semibold text-white mb-4">Cost of Breach Prevention</h4>
                      <span className="text-zion-cyan-light">Average breach cost:</span>
                      <span className="text-white font-semibold">$4.35M</span>
                      <span className="text-zion-cyan-light">Security investment:</span>
                      <span className="text-white font-semibold">$9,999</span>
                      <span className="text-zion-cyan-light">ROI ratio:</span>
                      <span className="text-white font-semibold">435:1</span>
                      <span className="text-zion-cyan-light">Risk reduction:</span>
                      <span className="text-white font-semibold">90%+</span>
                  <h4 className="text-xl font-semibold text-white mb-4">Additional Benefits</h4>
                      <span className="text-zion-cyan-light">Compliance cost savings:</span>
                      <span className="text-white font-semibold">$50K-200K</span>
                      <span className="text-zion-cyan-light">Insurance premium reduction:</span>
                      <span className="text-white font-semibold">20-40%</span>
                      <span className="text-zion-cyan-light">Customer trust increase:</span>
                      <span className="text-white font-semibold">Significant</span>
                      <span className="text-zion-cyan-light">Competitive advantage:</span>
                      <span className="text-white font-semibold">High</span>

      {/* CTA Section */}
            Secure Your Business Today
            Don't wait until it's too late. Protect your business with enterprise-grade cybersecurity solutions.
              Security Assessment
              Schedule Consultation

      {/* Contact Section */}
            <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
              Ready to strengthen your cybersecurity posture? Contact our security experts today.
          
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan-light">+1 302 464 0950</p>
              <p className="text-sm text-zion-cyan-light">Mon-Fri 9AM-6PM EST</p>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>
              <p className="text-sm text-zion-cyan-light">24/7 Response</p>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan-light">364 E Main St STE 1008</p>
              <p className="text-sm text-zion-cyan-light">Middletown DE 19709</p>
  )
}

// Security Service Card Component
function SecurityServiceCard({ service }: { service: any }) {
  return (
            {service.category}
          {service.featured && (
          )}
        <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
          {service.description}
              {service.currency}{service.price?.toLocaleString()}
              <span className="text-white">{service.rating}</span>
              <span className="text-zion-cyan-light">({service.reviewCount})</span>
          
            <span className="text-zion-cyan-light">Security Score:</span>
                <$2 />
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" 
                  style={{ width: `${service.aiScore}%` }}
                ></div>
              <span className="text-zion-cyan font-semibold">{service.aiScore}%</span>

            {service.tags.slice(0, 3).map((tag: string) => (
                {tag}
            ))}

            Learn More
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
          {icon}
        <CardTitle className="text-xl text-white">{title}</CardTitle>
          {description}
            <h4 className="font-semibold text-white mb-2">Key Requirements:</h4>
              {requirements.map((req, index) => (
                  <span className="text-sm text-zion-cyan-light">{req}</span>
              ))}
            <h4 className="font-semibold text-white mb-2">Industries:</h4>
              {industries.map((industry, index) => (
                  {industry}
              ))}
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
          {icon}
        <CardTitle className="text-xl text-white">{title}</CardTitle>
          {description}
            <h4 className="font-semibold text-white mb-2">Impact:</h4>
            <p className="text-sm text-zion-cyan-light">{impact}</p>
            <h4 className="font-semibold text-white mb-2">Prevention:</h4>
              {prevention.map((item, index) => (
                  <span className="text-sm text-zion-cyan-light">{item}</span>
              ))}
            <h4 className="font-semibold text-white mb-2">Trend:</h4>
            <p className="text-sm text-zion-cyan-light">{trend}</p>
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
      {popular && (
          <Badge className="bg-zion-cyan text-white px-4 py-1">Most Popular</Badge>
      )}
        <CardTitle className="text-2xl text-white">{title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">{description}</CardDescription>
        <div className="text-4xl font-bold text-zion-cyan mt-4">{price}</div>
          {features.map((feature, index) => (
              <span className="text-zion-cyan-light">{feature}</span>
          ))}
          Get Started
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
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Compliance Assurance",
    description: "Meet industry standards and regulatory requirements with confidence",
    icon: <Lock className="h-6 w-6" />
  },
  {
    title: "24/7 Monitoring",
    description: "Round-the-clock security monitoring and incident response capabilities",
    icon: <Eye className="h-6 w-6" />
  },
  {
    title: "Cost Reduction",
    description: "Prevent costly security breaches and minimize financial impact",
    icon: <TrendingUp className="h-6 w-6" />
  }
]
const securityThreats = [
  {
    title: "Ransomware Attacks",
    description: "Protect against encryption-based attacks that can cripple your business operations",
    icon: <AlertTriangle className="h-6 w-6" />
  },
  {
    title: "Data Breaches",
    description: "Safeguard sensitive information from unauthorized access and exfiltration",
    icon: <Database className="h-6 w-6" />
  },
  {
    title: "Phishing Scams",
    description: "Train employees to recognize and avoid sophisticated social engineering attacks",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Insider Threats",
    description: "Monitor and control access to prevent malicious or accidental insider incidents",
    icon: <Network className="h-6 w-6" />
  }
]
export default function CybersecurityServicesPage() {
  return (
      {/* Hero Section */}
              Cybersecurity Solutions for the
                Digital Age
              Protect your business with enterprise-grade cybersecurity solutions. From threat detection to compliance, 
              we deliver comprehensive security services that keep your assets safe and your business compliant.
                  Secure Your Business
                  Security Assessment
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
      case 'monthly': return <Clock className="w-4 h-4" />
      case 'hourly': return <Zap className="w-4 h-4" />
      case 'project-based': return <Zap className="w-4 h-4" />
      default: return <DollarSign className="w-4 h-4" />
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
          src={service.images[0]}
          alt={service.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {service.featured && (
        )}
          AI Score: {service.aiScore}
      
          <div className="text-2xl">🔒</div>
              {service.currency}{service.price.toLocaleString()}
              {getPricingModelLabel(service.pricingModel)}
        
        <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
          {service.description}
      
        {/* Rating and Reviews */}
            <span className="font-medium">{service.rating}</span>
            ({service.reviewCount} reviews)
        
        {/* Market Price */}
          <span className="text-muted-foreground">Market Price:</span>
          <span className="font-medium">{service.marketPrice}</span>
        
        {/* Delivery Time */}
          <span className="text-muted-foreground">Delivery:</span>
          <span className="font-medium">{service.deliveryTime}</span>
        
        {/* Key Features */}
          <h4 className="font-medium text-sm">Key Features:</h4>
            {service.features.slice(0, 3).map((feature: string, index: number) => (
                {feature}
            ))}
        
        {/* Contact Information */}
              <span>{service.contactInfo.phone}</span>
              <span>{service.contactInfo.email}</span>
        
        {/* Action Buttons */}
            Get Security Quote
            Learn More

      {/* Search and Filters */}
                placeholder="Search security services, compliance, or threats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            
                <SelectItem value="all">All Security Categories</SelectItem>
                {securitySubcategories.map(sub => (
                  <SelectItem key={sub} value={sub}>{sub}</SelectItem>
                ))}

                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $500</SelectItem>
                <SelectItem value="medium">$500 - $1K</SelectItem>
                <SelectItem value="high">Over $1K</SelectItem>

      {/* Security Services Grid */}
              {filteredServices.length} Security Services Found
              Discover comprehensive security solutions to protect your business and maintain compliance

            {filteredServices.map((service) => (
                      {service.subcategory}
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-xs">({service.reviewCount})</span>
                  
                  <CardTitle className="text-xl text-zion-blue mb-2">{service.title}</CardTitle>
                    {service.description}

                  {/* Pricing */}
                      {getPricingModelIcon(service.pricingModel)}
                        {getPricingModelText(service.pricingModel)}
                        {service.currency}{service.price.toLocaleString()}
                      {service.pricingModel === 'monthly' && (
                        <div className="text-xs text-zion-slate-light">per month</div>
                      )}

                  {/* AI Score */}
                    <span className="text-sm text-zion-slate-light">Security Score</span>
                      {service.aiScore}/100

                  {/* Features Preview */}
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Features</h4>
                      {service.features.slice(0, 3).map((feature, index) => (
                          {feature}
                      ))}
                      {service.features.length > 3 && (
                          +{service.features.length - 3} more
                      )}

                  {/* Benefits */}
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Benefits</h4>
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                          <span>{benefit}</span>
                      ))}

                  {/* Use Cases */}
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Use Cases</h4>
                      {service.useCases.slice(0, 3).map((useCase, index) => (
                          {useCase}
                      ))}

                  {/* Target Audience */}
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Perfect For</h4>
                      {service.targetAudience.slice(0, 3).map((audience, index) => (
                          {audience}
                      ))}

                  {/* Action Buttons */}
                        Learn More
                    
                      {service.website && (
                        <$2 />
                          href={service.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                      )}
                      

                  {/* Additional Info */}
                      {service.documentation && (
                          <span>Docs</span>
                      )}
                      {service.support && (
                          <span>Support</span>
                      )}
                      {service.compliance && service.compliance.length > 0 && (
                          <span>{service.compliance.length} Compliance</span>
                      )}
                      {service.sla && (
                          <span>SLA</span>
                      )}
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
} from "lucide-react"
import { CYBERSECURITY_SERVICES } from "@/data/expandedServices"
const CybersecurityServicesPage = () => {
  return (
      {/* Hero Section */}
              Cybersecurity Solutions
              Protect your business with enterprise-grade cybersecurity services and threat intelligence
                  Get Security Assessment
                  Contact Security Team

      {/* Contact Information Banner */}
                <span>+1 302 464 0950</span>
                <span>kleber@ziontechgroup.com</span>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              <$2 />
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:underline font-medium"
              >
                ziontechgroup.com

      {/* Security Threats Overview */}
              Modern Security Threats
              Stay protected against evolving cyber threats with our comprehensive security solutions
          
              <h3 className="text-xl font-semibold mb-2">Ransomware Attacks</h3>
              <p className="text-gray-600">Protect against data encryption and extortion attempts with advanced threat detection</p>
            
              <h3 className="text-xl font-semibold mb-2">Social Engineering</h3>
              <p className="text-gray-600">Defend against phishing, pretexting, and other human-based attack vectors</p>
            
              <h3 className="text-xl font-semibold mb-2">Supply Chain Attacks</h3>
              <p className="text-gray-600">Secure your software and hardware supply chain against compromise</p>
            
              <h3 className="text-xl font-semibold mb-2">Data Breaches</h3>
              <p className="text-gray-600">Prevent unauthorized access and protect sensitive information</p>

      {/* Cybersecurity Services Grid */}
              Cybersecurity Services
              Comprehensive security solutions to protect your business from all angles

            {CYBERSECURITY_SERVICES.map((service) => (
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  {service.featured && (
                  )}
                      {service.category}
                      <span>{service.rating}</span>
                      <span className="text-gray-400">({service.reviewCount})</span>
                  <CardTitle className="text-xl leading-tight">{service.title}</CardTitle>
                    {service.description}
                      {service.currency}{service.price?.toLocaleString()}
                      <span>{service.availability}</span>
                  
                    {service.tags.map((tag) => (
                        {tag}
                    ))}

                      <span>AI Score: {service.aiScore}%</span>
                        Learn More
            ))}

          {filteredServices.length === 0 && (
              <h3 className="text-xl font-semibold text-zion-slate-light mb-2">No security services found</h3>
              <p className="text-zion-slate-light mb-4">Try adjusting your search criteria or browse all security categories</p>
              <Button onClick={() => {
                setSearchQuery('')
                setSelectedSubcategory('all')
                setPriceRange('all')
              }}>
                Clear Filters
          )}

      {/* Security Statistics */}
            <h2 className="text-3xl font-bold text-white mb-4">Security by the Numbers</h2>
              Our security solutions protect businesses worldwide

              <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-white font-semibold">Threat Detection Rate</div>
              <div className="text-zion-slate-light text-sm">Advanced AI-powered threat detection</div>
            
              <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-white font-semibold">Security Monitoring</div>
              <div className="text-zion-slate-light text-sm">Round-the-clock threat monitoring</div>
            
              <div className="text-4xl font-bold text-zion-cyan mb-2">15min</div>
              <div className="text-white font-semibold">Response Time</div>
              <div className="text-zion-slate-light text-sm">Average incident response time</div>
            
              <div className="text-4xl font-bold text-zion-cyan mb-2">100%</div>
              <div className="text-white font-semibold">Compliance Success</div>
              <div className="text-zion-slate-light text-sm">Regulatory compliance rate</div>
      {/* Security Services Grid */}
              Comprehensive Security Services
              Choose from our range of cybersecurity services designed to address specific 
              security challenges and protect your business assets.
          
            {securityServices.map((service) => (
                      {service.icon}
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                
                <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    {service.features.slice(0, 3).map((feature, index) => (
                        {feature}
                    ))}
                
                      <span className="font-semibold">{service.currency}{service.price.toLocaleString()}</span>
                      <span>{service.duration}</span>
                
                    Get Quote
            ))}

      {/* Security Technologies */}
              Advanced Security Technologies
              We leverage cutting-edge security technologies and tools to deliver 
              comprehensive protection for your business.
          
            {securityTechnologies.map((tech, index) => (
                <h3 className="text-white font-semibold text-sm">{tech}</h3>
            ))}

      {/* Compliance Standards */}
              Compliance & Standards
              Our security solutions help you meet industry standards and regulatory 
              requirements across multiple sectors.
          
            {complianceStandards.map((standard, index) => (
                <h3 className="text-white font-semibold text-sm">{standard}</h3>
            ))}

      {/* Threat Intelligence */}
              Threat Intelligence & Monitoring
              Stay ahead of emerging threats with our comprehensive threat intelligence 
              and 24/7 security monitoring services.
          
            {threatIntelligence.map((intel, index) => (
                <h3 className="text-white font-semibold text-sm">{intel}</h3>
            ))}

      {/* Why Choose ZionTech for Security */}
              Why Choose ZionTech Group for Cybersecurity?
              We combine deep security expertise with industry knowledge to deliver 
              solutions that protect your business and build customer trust.
          
              <h3 className="text-white text-xl font-bold mb-3">Certified Experts</h3>
                CISSP, CISM, and CEH certified security professionals with 
                extensive experience in enterprise security.
            
              <h3 className="text-white text-xl font-bold mb-3">Proven Track Record</h3>
                Successfully protected over 500+ businesses from cyber threats 
                with zero major security breaches.
            
              <h3 className="text-white text-xl font-bold mb-3">24/7 Support</h3>
                Round-the-clock security monitoring and incident response 
                to protect your business at all times.

      {/* Security Pricing */}
              Transparent Security Pricing
              Competitive pricing for enterprise-grade security solutions with 
              flexible payment options and comprehensive protection.
          
              <h3 className="text-white text-2xl font-bold mb-4">Essential Security</h3>
                $3,800<span className="text-lg text-zion-slate-light">/project</span>
                <li>Basic security assessment</li>
                <li>Vulnerability scanning</li>
                <li>Security policy review</li>
                <li>Email support</li>
                  Get Started
            
                  Most Popular
              <h3 className="text-white text-2xl font-bold mb-4">Professional Security</h3>
                $7,200<span className="text-lg text-zion-slate-light">/project</span>
                <li>Comprehensive security audit</li>
                <li>Penetration testing</li>
                <li>Security architecture review</li>
                <li>Priority support</li>
                  Get Started
            
              <h3 className="text-white text-2xl font-bold mb-4">Enterprise Security</h3>
                $15,000<span className="text-lg text-zion-slate-light">/project</span>
                <li>Full security transformation</li>
                <li>SOC setup and management</li>
                <li>24/7 monitoring and response</li>
                <li>Dedicated security team</li>
                  Contact Sales

      {/* Contact Information */}
            Ready to Secure Your Business?
            Contact our cybersecurity experts today to discuss how we can help you 
            protect your business from evolving threats.
          
              <h3 className="text-white font-bold mb-2">Visit Us</h3>
                364 E Main St STE 1008<br />
                Middletown DE 19709
            
              <h3 className="text-white font-bold mb-2">Call Us</h3>
                +1 302 464 0950
            
              <h3 className="text-white font-bold mb-2">Email Us</h3>
                kleber@ziontechgroup.com
          
                Request Security Quote
                Schedule Security Consultation

    </>
  )
}

      {/* Security Framework */}
              Security Framework & Standards
              Our security approach follows industry best practices and compliance standards

              <h3 className="text-xl font-semibold mb-3 text-gray-900">SOC 2 Type II</h3>
              <p className="text-gray-600">Security, availability, and processing integrity controls for service organizations</p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">ISO 27001</h3>
              <p className="text-gray-600">International standard for information security management systems</p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">PCI DSS</h3>
              <p className="text-gray-600">Payment card industry data security standard compliance</p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">NIST Framework</h3>
              <p className="text-gray-600">Cybersecurity framework for critical infrastructure protection</p>

      {/* Security Process */}
              Our Security Process
              Systematic approach to identifying, assessing, and mitigating security risks

                1
              <h3 className="text-xl font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600">Comprehensive security audit and vulnerability assessment</p>

                2
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">Develop security roadmap and prioritize remediation efforts</p>

                3
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Deploy security controls and monitoring solutions</p>

                4
              <h3 className="text-xl font-semibold mb-2">Monitoring</h3>
              <p className="text-gray-600">Continuous threat monitoring and incident response</p>

      {/* Security Tools & Technologies */}
              Security Tools & Technologies
              State-of-the-art security tools and platforms for comprehensive protection

                <CardTitle>Threat Detection</CardTitle>
                    <span>SIEM platforms</span>
                    <span>EDR solutions</span>
                    <span>Network monitoring</span>

                <CardTitle>Vulnerability Management</CardTitle>
                    <span>Automated scanning</span>
                    <span>Penetration testing</span>
                    <span>Code analysis</span>

                <CardTitle>Access Control</CardTitle>
                    <span>Multi-factor authentication</span>
                    <span>Identity management</span>
                    <span>Privileged access</span>

                <CardTitle>Network Security</CardTitle>
                    <span>Firewall management</span>
                    <span>VPN solutions</span>
                    <span>Intrusion prevention</span>

                <CardTitle>Data Protection</CardTitle>
                    <span>Encryption at rest</span>
                    <span>Data loss prevention</span>
                    <span>Backup security</span>

                <CardTitle>Application Security</CardTitle>
                    <span>SAST/DAST testing</span>
                    <span>API security</span>
                    <span>Secure development</span>

      {/* Call to Action */}
            Secure Your Business Today
            Don't wait until it's too late. Our cybersecurity experts are ready to help you build 
            a robust security posture and protect your valuable assets.
                Get Security Assessment
                Contact Security Team

      {/* Footer Contact */}
              <h3 className="text-2xl font-bold mb-6 text-red-400">ZionTech Group</h3>
                Your trusted cybersecurity partner. We help businesses protect their digital assets 
                with comprehensive security solutions and expert guidance.
            
              <h3 className="text-xl font-semibold mb-6 text-red-400">Contact Information</h3>
                  <span>+1 302 464 0950</span>
                  <span>kleber@ziontechgroup.com</span>
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
          
            <p>&copy; 2024 ZionTech Group. All rights reserved. | <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">ziontechgroup.com</a></p>
  )
}
export default CybersecurityServicesPage
}
</div></div></div></div></div></div></div></div></div></div>