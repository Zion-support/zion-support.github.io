import React, { useState } from 'react';';
import { Header } from '@/components/Header';';
import { Footer } from '@/components/Footer';';
import { SEO } from '@/components/SEO';';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';';
import { Button } from '@/components/ui/button';';
import { Badge } from '@/components/ui/badge';';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';';
import React from 'react';';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import React from 'react';';
import { Link } from 'react-router-dom';';
import { Button } from '@/components/ui/button';';
import { TrustedBySection } from '@/components/TrustedBySection';';
import { QuoteFormSection } from '@/components/QuoteFormSection';';
import React from 'react';';
import { Link } from 'react-router-dom';';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Shield,
  Lock,
  Eye,
  service.category.includes('Cybersecurity') || '
  service.category.includes('Security') || '
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
} from 'lucide-react'';
import { ENHANCED_SERVICES } from '@/data/enhancedServices';'
// Filter cybersecurity services;
const CYBERSECURITY_SERVICES = ENHANCED_SERVICES.filter(service =>
  service.category.includes('Cybersecurity') || '
  service.category.includes('Security') ||'
  service.category.includes('Zero Trust')'
);
const SECURITY_SERVICE_CATEGORIES = [
  // TODO: Add items
]
  // TODO: Add items
]
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: 'threat-detection','
    name: 'Threat Detection & Response','
    description: 'AI-powered security monitoring and incident response','
    icon: Eye,
    services: CYBERSECURITY_SERVICES.filter(s => s.title.includes('Threat Detection'))'
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: 'zero-trust','
    name: 'Zero Trust Security','
    description: 'Identity verification and access management','
    icon: Lock,
    services: CYBERSECURITY_SERVICES.filter(s => s.title.includes('Zero Trust'))'
  }
];
export default function CybersecurityServicesPage() {;
const [selectedCategory, setSelectedCategory] = useState('all');';
const getCategoryIcon = (category: string) => {;
const categoryData = SECURITY_SERVICE_CATEGORIES.find(cat => cat.id === category)
    return categoryData?.icon || Shield
  }
  const getPricingModelLabel = (model: string) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    switch (model) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      case 'one-time': return 'One-time''
      case 'monthly': return 'Monthly''
      case 'hourly': return 'Hourly''
      case 'project-based': return 'Project-based''
      default: return model
    }
  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark"relative overflow-hidden"
<div className="
<div className="relative z-10 container mx-auto px-4 py-20 text-center text-white"flex items-center justify-center mb-6"
<Shield className="
<h1 className="text-5 xl md:text-7 xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"text-xl md:text-2 xl mb-8 text-zion-cyan-light max-w-4 xl mx-auto"
            Protect Your Business with Enterprise-Grade Security Solutions
          </p>
<p className="
            From threat detection to compliance management, we provide comprehensive cybersecurity that keeps your business safe in an evolving digital landscape.
          </p>

          {/* Contact CTA */}
          <div className="flex flex-wrap justify-center gap-4 mb-12"lg" className="
<Phone className="mr-2 h-5 w-5"lg" variant=" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3"mr-2 h-5 w-5"
              kleber@ziontechgroup.com
            </Button></div>

          {/* Security Stats */}
          <div className="
<div className="text-center"text-3 xl font-bold text-zion-cyan mb-2"
<div className="
<div className="text-center"text-3 xl font-bold text-zion-cyan mb-2"
<div className="
<div className="text-center"text-3 xl font-bold text-zion-cyan mb-2"
<div className="
<div className="text-center"text-3 xl font-bold text-zion-cyan mb-2"
<div className="
</div></div>
</div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16"w-full"
<TabsList className="
<TabsTrigger value="overview"text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple"
              Overview
            </TabsTrigger>
<TabsTrigger value=" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple"compliance" className="
              Compliance
            </TabsTrigger>
<TabsTrigger value="threats"text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple"
              Threats
            </TabsTrigger>
<TabsTrigger value=" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple"overview" className="
<div className="text-center"text-4 xl font-bold text-white mb-6"
<p className="
                In today's interconnected world, cybersecurity is not just about protecting data—it's about protecting your business, reputation, and future.'
              </p></div>
<div className="grid md:grid-cols-3 gap-8"bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center"
<CardContent className="
<Shield className="h-16 w-16 mx-auto mb-4 text-zion-cyan"text-2 xl font-bold text-white mb-4"
<p className="
                    Advanced threat detection and prevention systems that identify and neutralize cyber attacks before they can cause damage.
                  </p></CardContent>
</Card>
<Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center"p-8"
<Lock className="
<h3 className="text-2 xl font-bold text-white mb-4"text-zion-cyan-light"
                    Comprehensive data protection including encryption, access controls, and secure backup solutions to safeguard your critical information.
                  </p></CardContent>
</Card>
<Card className="
<CardContent className="p-8"h-16 w-16 mx-auto mb-4 text-zion-cyan"
<h3 className="
<p className="text-zion-cyan-light"bg-white/5 backdrop-blur-sm rounded-2 xl p-8"
<h3 className="
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"text-center"
<Eye className="
<h4 className="font-semibold text-white mb-2"text-sm text-zion-cyan-light"
<div className="
<Shield className="h-12 w-12 mx-auto mb-3 text-zion-cyan"font-semibold text-white mb-2"
<p className="
<div className="text-center"h-12 w-12 mx-auto mb-3 text-zion-cyan"
<h4 className="
<p className="text-sm text-zion-cyan-light"text-center"
<TrendingUp className="
<h4 className="font-semibold text-white mb-2"text-sm text-zion-cyan-light"
</div></div>
</TabsContent>
<div className="
          {/* Services Tab */}
          <TabsContent value="services"space-y-12"
<div className="
<h2 className="text-4 xl font-bold text-white mb-6"text-xl text-zion-cyan-light max-w-3 xl mx-auto"
                Comprehensive security solutions designed to protect your business from modern cyber threats.
              </p></div>
<div className="
              {CYBERSECURITY_SERVICES.map((service) => (
  // TODO: Add parameters
)
                <SecurityServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* Additional Security Services */}
            <div className="grid md:grid-cols-3 gap-8"bg-white/10 backdrop-blur-sm border-zion-cyan/30"
<CardHeader>
<CardTitle className="
<Search className="h-6 w-6 text-zion-cyan"text-zion-cyan-light mb-4"
                    Comprehensive security assessments to identify vulnerabilities before attackers do.
                  </p>
<div className="
<div className="flex items-center gap-2"h-4 w-4 text-green-400"
<span className="
<div className="flex items-center gap-2"h-4 w-4 text-green-400"
<span className="
<div className="flex items-center gap-2"h-4 w-4 text-green-400"
<span className="
</div>
<Button className="w-full mt-4 bg-zion-purple hover:bg-zion-purple-dark text-white"bg-white/10 backdrop-blur-sm border-zion-cyan/30"
<CardHeader>
<CardTitle className="
<Monitor className="h-6 w-6 text-zion-cyan"text-zion-cyan-light mb-4"
                    24/7 security monitoring and threat intelligence to detect and respond to incidents in real-time.
                  </p>
<div className="
<div className="flex items-center gap-2"h-4 w-4 text-green-400"
<span className="
<div className="flex items-center gap-2"h-4 w-4 text-green-400"
<span className="
<div className="flex items-center gap-2"h-4 w-4 text-green-400"
<span className="
</div>
<Button className="w-full mt-4 bg-zion-purple hover:bg-zion-purple-dark text-white"bg-white/10 backdrop-blur-sm border-zion-cyan/30"
<CardHeader>
<CardTitle className="
<FileText className="h-6 w-6 text-zion-cyan"text-zion-cyan-light mb-4"
                    Employee security awareness training to create a human firewall against social engineering attacks.
                  </p>
<div className="
<div className="flex items-center gap-2"h-4 w-4 text-green-400"
<span className="
<div className="flex items-center gap-2"h-4 w-4 text-green-400"
<span className="
<div className="flex items-center gap-2"h-4 w-4 text-green-400"
<span className="
</div>
<Button className="w-full mt-4 bg-zion-purple hover:bg-zion-purple-dark text-white"compliance" className="
<div className="text-center"text-4 xl font-bold text-white mb-6"
<p className="
                Ensure your business meets industry standards and regulatory requirements with our comprehensive compliance solutions.
              </p></div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"h-8 w-8"
                title=""
                description=""
                requirements={[", "Privacy rights"Breach notification", "]}"
                industries={[", "Healthcare"Finance", "]}"
              />
<ComplianceCard
                icon={<Shield className="
                title="SOC 2 Type II"
                description="Service Organization Control 2 certification for security, availability, and confidentiality."
                requirements={["Security controls"Availability monitoring", ", "Processing integrity"
                industries={["SaaS companies"Cloud providers", ", "IT services"
              />
<ComplianceCard
                icon={<Lock className="h-8 w-8"HIPAA Compliance""Health Insurance Portability and Accountability Act compliance for healthcare organizations.""Patient privacy", ", "Access controls"Audit trails"]}"Healthcare", ", "Health insurance"Telemedicine"]}"h-8 w-8"
                title=""
                description=""
                requirements={[", "Network security"Access control", "]}"
                industries={[", "E-commerce"Payment processing", "]}"
              />
<ComplianceCard
                icon={<Server className="
                title="ISO 27001"
                description="International standard for information security management systems."
                requirements={["Risk assessment"Security controls", ", "Continuous improvement"
                industries={["Technology"Manufacturing", ", "Government"
              />
<ComplianceCard
                icon={<Database className="h-8 w-8"CCPA Compliance""California Consumer Privacy Act compliance for consumer data protection.""Consumer rights", ", "Opt-out mechanisms"Data security"]}"California businesses", ", "Data brokers"Large corporations"]}"threats" className="
<div className="text-center"text-4 xl font-bold text-white mb-6"
<p className="
                Understanding the threat landscape is the first step in building effective cybersecurity defenses.
              </p></div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"h-8 w-8"
                title=""
                description=""
                impact=""
                prevention={[", "Email filtering"User training", "]}"
                trend=""
              />
<ThreatCard
                icon={<Users className="
                title="Social Engineering"
                description="Manipulation tactics to trick users into revealing sensitive information."
                impact="Medium - Data breaches, unauthorized access, reputation damage"
                prevention={["Security training"Multi-factor authentication", ", "Incident reporting"
                trend="Most common attack vector"
              />
<ThreatCard
                icon={<Network className="h-8 w-8"DDoS Attacks""Distributed denial-of-service attacks that overwhelm systems with traffic.""Medium - Service disruption, revenue loss, customer dissatisfaction""Traffic filtering", ", "Rate limiting"Incident response"]}"Increasing in sophistication""h-8 w-8"
                title=""
                description=""
                impact=""
                prevention={[", "Encryption"Monitoring", "]}"
                trend=""
              />
<ThreatCard
                icon={<Smartphone className="
                title="Mobile Threats"
                description="Attacks targeting mobile devices and applications."
                impact="Medium - Data theft, device compromise, privacy violations"
                prevention={["Mobile device management"App security", ", "Regular updates"
                trend="Growing with mobile adoption"
              />
<ThreatCard
                 icon={<Network className="h-8 w-8"Supply Chain Attacks""Compromising software or hardware through third-party vendors.""High - Widespread compromise, trust erosion, regulatory scrutiny""Vendor assessment", ", "Supply chain monitoring"Incident response"]}"Increasingly sophisticated""pricing" className="
<div className="text-center"text-4 xl font-bold text-white mb-6"
<p className="
                Transparent pricing for comprehensive cybersecurity solutions that fit your business needs and budget.
              </p></div>
<div className="grid md:grid-cols-3 gap-8"Essential Security""$3,999""Basic cybersecurity protection for small businesses""Security assessment","Basic monitoring","Employee training","Incident response","Email support""Professional Security""$9,999""Comprehensive security solution for growing businesses""Advanced threat detection","24/7 monitoring","Penetration testing","Compliance support","Priority support","Security training""Enterprise Security""$24,999""Full-scale security transformation for large organizations""Custom security architecture","Advanced threat hunting","Full compliance suite","Dedicated security team","24/7 support","Custom training programs","Ongoing optimization""bg-white/5 backdrop-blur-sm rounded-2 xl p-8"
<h3 className="
<div className="grid md:grid-cols-2 gap-8"text-xl font-semibold text-white mb-4"
<div className="
<div className="flex justify-between"text-zion-cyan-light"
<span className="
<div className="flex justify-between"text-zion-cyan-light"
<span className="
<div className="flex justify-between"text-zion-cyan-light"
<span className="
<div className="flex justify-between"text-zion-cyan-light"
<span className="
</div></div>
<div>
<h4 className="text-xl font-semibold text-white mb-4"space-y-3"
<div className="
<span className="text-zion-cyan-light"text-white font-semibold"
<div className="
<span className="text-zion-cyan-light"text-white font-semibold"
<div className="
<span className="text-zion-cyan-light"text-white font-semibold"
<div className="
<span className="text-zion-cyan-light"text-white font-semibold"
</div></div>
</div></div>
</TabsContent></Tabs>
</div>

      {/* CTA Section */}
      <div className="
<div className="container mx-auto px-4 text-center"text-4 xl md:text-5 xl font-bold text-white mb-6"
            Secure Your Business Today
          </h2>
<p className="
            Don't wait until it's too late. Protect your business with enterprise-grade cybersecurity solutions.'
          </p>
<div className="flex flex-wrap justify-center gap-4"lg" className="
<Shield className="mr-2 h-5 w-5"lg" variant=" className="border-white text-white hover:bg-white/10 px-8 py-3"mr-2 h-5 w-5"
              Schedule Consultation
            </Button></div>
</section>

      {/* Contact Section */}
      <div className="
<div className="container mx-auto px-4"text-center mb-12"
<h2 className="
<p className="text-xl text-zion-cyan-light max-w-3 xl mx-auto"grid md:grid-cols-3 gap-8 max-w-4 xl mx-auto"
<div className="
<Phone className="h-12 w-12 mx-auto mb-4 text-zion-cyan"text-xl font-semibold text-white mb-2"
<p className="
<p className="text-sm text-zion-cyan-light"text-center"
<Mail className="
<h3 className="text-xl font-semibold text-white mb-2"text-zion-cyan-light"
<p className="
<div className="text-center"h-12 w-12 mx-auto mb-4 text-zion-cyan"
<h3 className="
<p className="text-zion-cyan-light"text-sm text-zion-cyan-light"
</div></div>
</div></div>
  )
}

// Security Service Card Component
function SecurityServiceCard({ service }: { service: any }) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return (
  // TODO: Add parameters
)
    <Card className="
<CardHeader>
<div className="flex items-start justify-between mb-2"secondary" className="
            {service.category}
          </Badge>
          {service.featured && (
  // TODO: Add parameters
)
            <Badge variant="secondary"bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
              Featured
            </Badge>
          )}
        </div>
<CardTitle className="
<CardDescription className="text-zion-cyan-light"space-y-4"
<div className="
<div className="text-2 xl font-bold text-zion-cyan"flex items-center gap-1"
<Star className="
<span className="text-white"text-zion-cyan-light"
</div>
<div className="
<span className="text-zion-cyan-light"flex items-center gap-2"
<div className="
<$2 />
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full"text-zion-cyan font-semibold"
</div>
<div className="
            {service.tags.slice(0, 3).map((tag: string) => (
  // TODO: Add parameters
)
              <Badge key={tag} variant="outline"text-xs border-zion-cyan/30 text-zion-cyan-light"
                {tag}
              </Badge>
            ))}
          </div>
<Button className="
            Learn More
          </Button></div>
</CardContent></Card>
  )
}

// Compliance Card Component
function ComplianceCard({ icon, title, description, requirements, industries }: {
  // TODO: Add properties
}
  // TODO: Add properties
}
  icon: React.ReactNode
  title: string
  description: string
  requirements: string[]
  industries: string[]
}) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return (
  // TODO: Add parameters
)
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300"text-center"
<div className="
          {icon}
        </div>
<CardTitle className="text-xl text-white"text-zion-cyan-light"
          {description}
        </CardDescription></CardHeader>
<CardContent>
<div className="
<div>
<h4 className="font-semibold text-white mb-2"space-y-1"
              {requirements.map((req, index) => (
  // TODO: Add parameters
)
                <div key={index} className="
<CheckCircle className="h-3 w-3 text-green-400"text-sm text-zion-cyan-light"
              ))}
            </div></div>
<div>
<h4 className="
<div className="flex flex-wrap gap-1"outline" className="
                  {industry}
                </Badge>
              ))}
            </div></div>
</div></CardContent>
</Card>
  )
}

// Threat Card Component
function ThreatCard({ icon, title, description, impact, prevention, trend }: {
  // TODO: Add properties
}
  // TODO: Add properties
}
  icon: React.ReactNode
  title: string
  description: string
  impact: string
  prevention: string[]
  trend: string
}) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return (
  // TODO: Add parameters
)
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300"text-center"
<div className="
          {icon}
        </div>
<CardTitle className="text-xl text-white"text-zion-cyan-light"
          {description}
        </CardDescription></CardHeader>
<CardContent>
<div className="
<div>
<h4 className="font-semibold text-white mb-2"text-sm text-zion-cyan-light"
<div>
<h4 className="
<div className="space-y-1"flex items-center gap-2"
<CheckCircle className="
<span className="text-sm text-zion-cyan-light"font-semibold text-white mb-2"
<p className="
</div></CardContent>
</Card>
  )
}

// Pricing Card Component
function PricingCard({ title, price, description, features, popular }: {
  // TODO: Add properties
}
  // TODO: Add properties
}
  title: string
  price: string
  description: string
  features: string[]
  popular: boolean
}) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return (
  // TODO: Add parameters
)
    <Card className={`relative ${popular ? 'border-zion-cyan border-2' : 'border-zion-cyan/30'} bg-white/10 backdrop-blur-sm hover:border-zion-cyan/60 transition-all duration-300`}>'
      {popular && (
  // TODO: Add parameters
)
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"bg-zion-cyan text-white px-4 py-1"
      )}
      <CardHeader className="
<CardTitle className="text-2 xl text-white"text-zion-cyan-light"
<div className="
<CardContent>
<div className="space-y-3"flex items-center gap-2"
<CheckCircle className="
<span className="text-zion-cyan-light"w-full mt-6 bg-zion-purple hover:bg-zion-purple-dark text-white"
          Get Started
        </Button></CardContent>
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
} from "";
import { TrustedBySection } from ";";"threat-detection","AI-Powered Threat Detection","Advanced cybersecurity using machine learning to detect and prevent sophisticated cyber threats in real-time.","$","/month","Real-time threat detection","Behavioral analysis","Automated response","Threat intelligence","Compliance monitoring","24/7 SOC support""h-8 w-8"
    category: ","
    badge: ","
    link: ","
    image: ""
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: ","
    title: ","
    description: ","
    price: 4200,
    currency: ","
    period: ","
    features: [
  // TODO: Add items
]
  // TODO: Add items
]
      ","
      ","
      ","
      ","
      ","
      ""
    ],
    icon: <Lock className="
    category: "Architecture"
    badge: "Enterprise"
    link: "/services"
    image: "https://images.unsplash.com/photo-1563013544-824 ae1 b704 d3?auto=format&fit=crop&w=800&h=500"
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: "penetration-testing"
    title: "Penetration Testing & Vulnerability Assessment"
    description: "Comprehensive security testing to identify vulnerabilities and assess your security posture."
    price: 2500,
    currency: "$"
    period: "/assessment"
    features: [
  // TODO: Add items
]
  // TODO: Add items
]
      "External penetration testing"
      "Internal security assessment"
      "Web application testing"
      "Social engineering"
      "Detailed reporting"
      "Remediation guidance"
    ],
    icon: <AlertTriangle className="h-8 w-8"Testing","Critical","/services","https://images.unsplash.com/photo-1510511459019-5 dda7724 fd87?auto=format&fit=crop&w=800&h=500""incident-response","Incident Response & Forensics","Rapid response to security incidents with digital forensics and recovery services.","$","/incident","24/7 incident response","Digital forensics","Evidence preservation","Recovery planning","Legal support","Post-incident analysis""h-8 w-8"
    category: ","
    badge: ","
    link: ","
    image: ""
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: ","
    title: ","
    description: ","
    price: 1800,
    currency: ","
    period: ","
    features: [
  // TODO: Add items
]
  // TODO: Add items
]
      ","
      ","
      ","
      ","
      ","
      ""
    ],
    icon: <Shield className="
    category: "Compliance"
    badge: "Required"
    link: "/services"
    image: "https://images.unsplash.com/photo-1510511459019-5 dda7724 fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: "security-training"
    title: "Security Awareness Training"
    description: "Comprehensive training programs to educate employees on cybersecurity best practices and threat awareness."
    price: 450,
    currency: "$"
    period: "/user/month"
    features: [
  // TODO: Add items
]
  // TODO: Add items
]
      "Interactive training modules"
      "Phishing simulations"
      "Security assessments"
      "Progress tracking"
      "Compliance reporting"
      "Custom content"
    ],
    icon: <Users className="h-8 w-8"Training","Essential","/services","https://images.unsplash.com/photo-1510511459019-5 dda7724 fd87?auto=format&fit=crop&w=800&h=500""Proactive Protection","Identify and prevent threats before they can cause damage to your business","h-6 w-6"
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: ","
    description: ","
    icon: <Lock className="
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: "24/7 Monitoring"
    description: "Round-the-clock security monitoring and incident response capabilities"
    icon: <Eye className="h-6 w-6"Cost Reduction","Prevent costly security breaches and minimize financial impact","h-6 w-6"
  }
];
const securityThreats = [
  // TODO: Add items
]
  // TODO: Add items
]
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: ","
    description: ","
    icon: <AlertTriangle className="
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: "Data Breaches"
    description: "Safeguard sensitive information from unauthorized access and exfiltration"
    icon: <Database className="h-6 w-6"Phishing Scams","Train employees to recognize and avoid sophisticated social engineering attacks","h-6 w-6"
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: ","
    description: ","
    icon: <Network className="
  }
];
export default function CybersecurityServicesPage() {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-background"bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20"
<div className="
<div className="max-w-4 xl mx-auto"text-5 xl md:text-6 xl font-bold text-white mb-6"
              Cybersecurity Solutions for the
              <span className="
                Digital Age
              </span></h1>
<p className="text-xl text-zion-slate-light mb-8 max-w-3 xl mx-auto"flex flex-wrap justify-center gap-4"
<Link to=">"
<Button size=" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3"/contact">"lg" variant=" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3"w-4 h-4"'"w-4 h-4"'"w-4 h-4"'"w-4 h-4"
    }
  const getPricingModelText = (model: string) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    switch (model) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      case 'one-time': return 'One-time''
      case 'monthly': return 'Monthly''
      case 'hourly': return 'Hourly''
      case 'project-based': return 'Project-based''
      default: return model
    }
  return (
  // TODO: Add parameters
)
    <Card className="
<div className="relative"w-full h-48 object-cover rounded-t-lg"
        />
        {service.featured && (
  // TODO: Add parameters
)
          <Badge className="
            Featured
          </Badge>
        )}
        <Badge className="absolute top-3 right-3 bg-green-600"flex items-start justify-between mb-2"
<div className="
<div className="text-right"text-2 xl font-bold text-red-600"
              {service.currency}{service.price.toLocaleString()}
            </div>
<div className="
              {getPricingModelLabel(service.pricingModel)}
            </div></div>
</div>
<CardTitle className="text-lg leading-tight"line-clamp-3"
          {service.description}
        </CardDescription></CardHeader>
<CardContent className="
        {/* Rating and Reviews */}
        <div className="flex items-center gap-2"flex items-center gap-1"
<Star className="
<span className="font-medium"text-muted-foreground"
            ({service.reviewCount} reviews)
          </span></div>

        {/* Market Price */}
        <div className="
<TrendingUp className="h-4 w-4 text-green-600"text-muted-foreground"
<span className="

        {/* Delivery Time */}
        <div className="flex items-center gap-2 text-sm"h-4 w-4 text-blue-600"
<span className="
<span className="font-medium"space-y-2"
<h4 className="
<ul className="space-y-1"flex items-center gap-2 text-sm text-muted-foreground"
<CheckCircle className="
                {feature}
              </li>
            ))}
          </ul></div>

        {/* Contact Information */}
        <div className="pt-4 border-t"space-y-2 text-sm"
<div className="
<Phone className="h-3 w-3 text-muted-foreground"flex items-center gap-2"
<Mail className="
<span>{service.contactInfo.email}</span></div>
</div></div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4"flex-1 bg-red-600 hover:bg-red-700"
            Get Security Quote
          </Button>
<Button variant=" className="flex-1"py-8 bg-zion-blue"
<div className="
<div className="flex flex-col lg:flex-row gap-4"flex-1 relative"
<Search className="
<Input
                placeholder="Search security services, compliance, or threats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"w-full lg:w-48 bg-zion-blue-dark border-zion-blue-light text-white"
<SelectValue placeholder=" /></SelectTrigger>"
<SelectContent>
<SelectItem value=">All Security Categories</SelectItem>"
                {securitySubcategories.map(sub => (
  // TODO: Add parameters
)
                  <SelectItem key={sub} value={sub}>{sub}</SelectItem>
                ))}
              </SelectContent></Select>
<Select value={priceRange} onValueChange={setPriceRange}>
<SelectTrigger className="
<SelectValue placeholder="Price"
<SelectContent>
<SelectItem value="all"
<SelectItem value="low"
<SelectItem value="medium"
<SelectItem value="high"
</Select></div>
</div></section>

      {/* Security Services Grid */}
      <section className="py-16"container mx-auto px-4"
<div className="
<h2 className="text-3 xl font-bold text-zion-blue mb-4"text-zion-slate-light"
              Discover comprehensive security solutions to protect your business and maintain compliance
            </p></div>
<div className="
            {filteredServices.map((service) => (
  // TODO: Add parameters
)
              <Card key={service.id} className="h-full border-zion-blue-light hover:border-red-500/50 transition-all duration-300 hover:shadow-xl"pb-4"
<div className="
<Badge variant="secondary"bg-red-500/20 text-red-600 border-red-500/30"
                      {service.subcategory}
                    </Badge>
<div className="
<Star className="w-4 h-4 fill-yellow-400 text-yellow-400"text-sm font-medium"
<span className="
</div>
<CardTitle className="text-xl text-zion-blue mb-2"text-zion-slate-light line-clamp-2"
                    {service.description}
                  </CardDescription></CardHeader>
<CardContent className="
                  {/* Pricing */}
                  <div className="flex items-center justify-between"flex items-center gap-2"
                      {getPricingModelIcon(service.pricingModel)}
                      <span className="
                        {getPricingModelText(service.pricingModel)}
                      </span></div>
<div className="text-right"text-2 xl font-bold text-red-600"
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      {service.pricingModel === 'monthly' && ('
                        <div className="
                      )}
                    </div></div>

                  {/* AI Score */}
                  <div className="flex items-center justify-between"text-sm text-zion-slate-light"
<Badge className="
<Shield className="w-3 h-3 mr-1"text-sm font-semibold text-zion-blue mb-2"
<div className="
                      {service.features.slice(0, 3).map((feature, index) => (
  // TODO: Add parameters
)
                        <Badge key={index} variant="outline"text-xs border-zion-blue-light text-zion-slate-light"
                          {feature}
                        </Badge>
                      ))}
                      {service.features.length > 3 && (
  // TODO: Add parameters
)
                        <Badge variant=" className="text-xs border-zion-blue-light text-zion-slate-light"text-sm font-semibold text-zion-blue mb-2"
<div className="
                      {service.benefits.slice(0, 2).map((benefit, index) => (
  // TODO: Add parameters
)
                        <div key={index} className="flex items-start gap-2 text-sm text-zion-slate-light"w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
<span>{benefit}</span></div>
                      ))}
                    </div></div>

                  {/* Use Cases */}
                  <div>
<h4 className="
<div className="flex flex-wrap gap-1"outline" className="
                          {useCase}
                        </Badge>
                      ))}
                    </div></div>

                  {/* Target Audience */}
                  <div>
<h4 className="text-sm font-semibold text-zion-blue mb-2"flex flex-wrap gap-1"
                      {service.targetAudience.slice(0, 3).map((audience, index) => (
  // TODO: Add parameters
)
                        <Badge key={index} variant=" className="text-xs border-zion-blue-light text-zion-slate-light"flex flex-col gap-2 pt-4"
<Link to={`/services/${service.id}`}>
<Button className="
<Lightbulb className="w-4 h-4 mr-2"flex gap-2"
                      {service.website && (
  // TODO: Add parameters
)
                        <$2 />
                          href={service.website}
                          target=" "
                          rel=""
                          className="
                        >
<Button variant="outline"w-full border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10"
<ExternalLink className="
                            Demo
                          </Button></a>
                      )}

                      <Link to="/contact"flex-1"
<Button variant=" className="w-full border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10"w-4 h-4 mr-2"
                          Contact
                        </Button></Link>
</div></div>

                  {/* Additional Info */}
                  <div className="
<div className="grid grid-cols-2 gap-4 text-xs text-zion-slate-light"flex items-center gap-1"
<BookOpen className="
<span>Docs</span></div>
                      )}
                      {service.support && (
  // TODO: Add parameters
)
                        <div className="flex items-center gap-1"w-3 h-3"
<span>Support</span></div>
                      )}
                      {service.compliance && service.compliance.length > 0 && (
  // TODO: Add parameters
)
                        <div className="
<Shield className="w-3 h-3"flex items-center gap-1"
<TrendingUp className="
<span>SLA</span></div>
                      )}
                    </div></div>
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
} from "lucide-react";
import { CYBERSECURITY_SERVICES } from "@/data/expandedServices";";
const CybersecurityServicesPage = () => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
  return (
  // TODO: Add parameters
)
    <div className="
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white"container mx-auto px-4 py-20"
<div className="
<div className="mb-6"h-20 w-20 mx-auto text-red-200"
<h1 className="
              Cybersecurity Solutions
            </h1>
<p className="text-xl md:text-2 xl mb-8 text-red-100"flex flex-col sm:flex-row gap-4 justify-center"
<Link to=">"
<Button size=" className="bg-white hover:bg-gray-100 text-red-600 font-semibold"ml-2 h-5 w-5"
</Link>
<Link to=">"
<Button size=" variant="outline"border-white text-white hover:bg-white/10"
                  Contact Security Team
                </Button></Link>
</div></div>
</div></div>

      {/* Contact Information Banner */}
      <div className="
<div className="container mx-auto px-4 py-6"flex flex-col md:flex-row items-center justify-between gap-4"
<div className="
<div className="flex items-center gap-2"h-4 w-4 text-red-600"
<span>+1 302 464 0950</span></div>
<div className="
<Mail className="h-4 w-4 text-red-600"flex items-center gap-2"
<MapPin className="
<span>364 E Main St STE 1008, Middletown DE 19709</span></div>
</div>
<div className="flex items-center gap-2"h-4 w-4 text-red-600"
<$2 />
                href=" "
                target=" "
                rel=""
                className="
              >
                ziontechgroup.com
              </a></div>
</div></div>
</div>

      {/* Security Threats Overview */}
      <div className="py-16 bg-white"container mx-auto px-4"
<div className="
<h2 className="text-3 xl md:text-4 xl font-bold text-gray-900 mb-4"text-xl text-gray-600 max-w-3 xl mx-auto"
              Stay protected against evolving cyber threats with our comprehensive security solutions
            </p></div>
<div className="
<div className="text-center"bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
<AlertTriangle className="
<h3 className="text-xl font-semibold mb-2"text-gray-600"
<div className="
<div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"h-8 w-8 text-orange-600"
<h3 className="
<p className="text-gray-600"text-center"
<div className="
<Server className="h-8 w-8 text-yellow-600"text-xl font-semibold mb-2"
<p className="
<div className="text-center"bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
<Database className="
<h3 className="text-xl font-semibold mb-2"text-gray-600"
</div></div>
</div>

      {/* Cybersecurity Services Grid */}
      <div className="
<div className="container mx-auto px-4"text-center mb-16"
<h2 className="
              Cybersecurity Services
            </h2>
<p className="text-xl text-gray-600 max-w-3 xl mx-auto"grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            {CYBERSECURITY_SERVICES.map((service) => (
  // TODO: Add parameters
)
              <Card key={service.id} className="
<div className="relative"w-full h-64 object-cover rounded-t-lg"
                  />
                  {service.featured && (
  // TODO: Add parameters
)
                    <Badge className="
                      Featured
                    </Badge>
                  )}
                </div>
<CardHeader>
<div className="flex items-start justify-between mb-2"bg-red-100 text-red-800 border-red-200"
                      {service.category}
                    </Badge>
<div className="
<Star className="h-4 w-4 fill-yellow-400 text-yellow-400"text-gray-400"
</div>
<CardTitle className="
<CardDescription className="text-base leading-relaxed"flex items-center justify-between mb-4"
<div className="
                      {service.currency}{service.price?.toLocaleString()}
                    </div>
<div className="flex items-center gap-2 text-sm text-gray-600"h-4 w-4"
<span>{service.availability}</span></div>
</div>
<div className="
                    {service.tags.map((tag) => (
  // TODO: Add parameters
)
                      <Badge key={tag} variant="secondary"text-xs"
                        {tag}
                      </Badge>
                    ))}
                  </div>
<div className="
<div className="flex items-center gap-2 text-sm text-gray-600"h-4 w-4"
<span>AI Score: {service.aiScore}%</span></div>
<Link to={`/services/${service.id}`}>
<Button size=" className="bg-red-600 hover:bg-red-700"text-center py-16"
<h3 className="
<p className="text-zion-slate-light mb-4"py-16 bg-zion-blue"
<div className="
<div className="text-center mb-12"text-3 xl font-bold text-white mb-4"
<p className="
              Our security solutions protect businesses worldwide
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"text-center"
<div className="
<div className="text-white font-semibold"text-zion-slate-light text-sm"
<div className="
<div className="text-4 xl font-bold text-zion-cyan mb-2"text-white font-semibold"
<div className="
<div className="text-center"text-4 xl font-bold text-zion-cyan mb-2"
<div className="
<div className="text-zion-slate-light text-sm"text-center"
<div className="
<div className="text-white font-semibold"text-zion-slate-light text-sm"
      {/* Security Services Grid */}
      <section className="
<div className="container mx-auto px-4"text-center mb-16"
<h2 className="
              Comprehensive Security Services
            </h2>
<p className="text-zion-slate-light text-lg max-w-2 xl mx-auto"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            {securityServices.map((service) => (
  // TODO: Add parameters
)
              <div key={service.id} className="
<div className="flex items-center mb-4"p-3 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-lg mr-4"
<div className="
                      {service.icon}
                    </div></div>
<div>
<span className="text-zion-cyan text-sm font-medium"text-white text-xl font-bold mb-3"
<p className="
<div className="mb-4"text-white font-semibold mb-2"
<ul className="
                    {service.features.slice(0, 3).map((feature, index) => (
  // TODO: Add parameters
)
                      <li key={index} className="text-zion-slate-light text-sm flex items-center"w-4 h-4 text-zion-cyan mr-2 flex-shrink-0"
                        {feature}
                      </li>
                    ))}
                  </ul></div>
<div className="
<div className="flex items-center justify-between text-sm"flex items-center text-zion-cyan"
<DollarSign className="
<span className="font-semibold"flex items-center text-zion-slate-light"
<Clock className="
<span>{service.duration}</span></div>
</div></div>
<Link to="/request-quote"
<Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"py-20 bg-zion-blue"
<div className="
<div className="text-center mb-16"text-3 xl md:text-4 xl font-bold text-white mb-4"
              Advanced Security Technologies
            </h2>
<p className="
              We leverage cutting-edge security technologies and tools to deliver
              comprehensive protection for your business.
            </p></div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6"text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300"
<div className="
<Shield className="w-8 h-8 text-white"text-white font-semibold text-sm"
            ))}
          </div></div>
</section>

      {/* Compliance Standards */}
      <section className="
<div className="container mx-auto px-4"text-center mb-16"
<h2 className="
              Compliance & Standards
            </h2>
<p className="text-zion-slate-light text-lg max-w-2 xl mx-auto"grid grid-cols-2 md:grid-cols-4 gap-6"
            {complianceStandards.map((standard, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4"w-8 h-8 text-white"
<h3 className="
            ))}
          </div></div>
</section>

      {/* Threat Intelligence */}
      <section className="py-20 bg-zion-blue"container mx-auto px-4"
<div className="
<h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"text-zion-slate-light text-lg max-w-2 xl mx-auto"
              Stay ahead of emerging threats with our comprehensive threat intelligence
              and 24/7 security monitoring services.
            </p></div>
<div className="
            {threatIntelligence.map((intel, index) => (
  // TODO: Add parameters
)
              <div key={index} className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300"w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4"
<Eye className="
<h3 className="text-white font-semibold text-sm"py-20 bg-zion-blue-dark"
<div className="
<div className="text-center mb-16"text-3 xl md:text-4 xl font-bold text-white mb-4"
              Why Choose ZionTech Group for Cybersecurity?
            </h2>
<p className="
              We combine deep security expertise with industry knowledge to deliver
              solutions that protect your business and build customer trust.
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"text-center p-6"
<div className="
<Star className="w-10 h-10 text-white"text-white text-xl font-bold mb-3"
<p className="
                CISSP, CISM, and CEH certified security professionals with
                extensive experience in enterprise security.
              </p></div>
<div className="text-center p-6"w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6"
<Shield className="
<h3 className="text-white text-xl font-bold mb-3"text-zion-slate-light"
                Successfully protected over 500+ businesses from cyber threats
                with zero major security breaches.
              </p></div>
<div className="
<div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6"w-10 h-10 text-white"
<h3 className="
<p className="text-zion-slate-light"py-20 bg-zion-blue"
<div className="
<div className="text-center mb-16"text-3 xl md:text-4 xl font-bold text-white mb-4"
              Transparent Security Pricing
            </h2>
<p className="
              Competitive pricing for enterprise-grade security solutions with
              flexible payment options and comprehensive protection.
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5 xl mx-auto"bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center"
<h3 className="
<div className="text-4 xl font-bold text-zion-cyan mb-6"text-lg text-zion-slate-light"
<ul className="
<li>Basic security assessment</li>
<li>Vulnerability scanning</li>
<li>Security policy review</li>
<li>Email support</li></ul>
<Link to="/request-quote"
<Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"bg-gradient-to-br from-zion-purple to-zion-purple-dark border border-zion-purple rounded-lg p-8 text-center relative"
<div className="
<span className="bg-zion-cyan text-zion-blue px-4 py-2 rounded-full text-sm font-bold"text-white text-2 xl font-bold mb-4"
<div className="
                $7,200<span className="text-lg text-zion-slate-light"text-white space-y-2 mb-8"
<li>Comprehensive security audit</li>
<li>Penetration testing</li>
<li>Security architecture review</li>
<li>Priority support</li></ul>
<Link to=">"
<Button className="
                  Get Started
                </Button></Link>
</div>
<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center"text-white text-2 xl font-bold mb-4"
<div className="
                $15,000<span className="text-lg text-zion-slate-light"text-zion-slate-light space-y-2 mb-8"
<li>Full security transformation</li>
<li>SOC setup and management</li>
<li>24/7 monitoring and response</li>
<li>Dedicated security team</li></ul>
<Link to=">"
<Button className="
                  Contact Sales
                </Button></Link>
</div></div>
</div></section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-dark"container mx-auto px-4 text-center"
<h2 className="
            Ready to Secure Your Business?
          </h2>
<p className="text-zion-slate-light text-lg mb-8 max-w-2 xl mx-auto"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4 xl mx-auto mb-12"
<div className="
<div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4"w-8 h-8 text-white"
<h3 className="
<p className="text-zion-slate-light text-sm"text-center p-6"
<div className="
<Users className="w-8 h-8 text-white"text-white font-bold mb-2"
<p className="
                +1 302 464 0950
              </p></div>
<div className="text-center p-6"w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4"
<Zap className="
<h3 className="text-white font-bold mb-2"text-zion-cyan font-semibold"
                kleber@ziontechgroup.com
              </p></div>
</div>
<div className="
<Link to="/request-quote"
<Button size="lg"bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3"
                Request Security Quote
              </Button></Link>
<Link to=">"
<Button variant=" size="lg"border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3"
                Schedule Security Consultation
              </Button></Link>
</div></div>
</section>
<TrustedBySection />
<QuoteFormSection /></>
  )
}
        </div></div>

      {/* Security Framework */}
      <div className="
<div className="container mx-auto px-4"text-center mb-16"
<h2 className="
              Security Framework & Standards
            </h2>
<p className="text-xl text-gray-600 max-w-3 xl mx-auto"grid md:grid-cols-2 lg:grid-cols-4 gap-8"
<div className="
<div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"h-8 w-8 text-white"
<h3 className="
<p className="text-gray-600"text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50"
<div className="
<FileText className="h-8 w-8 text-white"text-xl font-semibold mb-3 text-gray-900"
<p className="
<div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50"bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
<Key className="
<h3 className="text-xl font-semibold mb-3 text-gray-900"text-gray-600"
<div className="
<div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"h-8 w-8 text-white"
<h3 className="
<p className="text-gray-600"py-16 bg-gray-50"
<div className="
<div className="text-center mb-16"text-3 xl md:text-4 xl font-bold text-gray-900 mb-4"
              Our Security Process
            </h2>
<p className="
              Systematic approach to identifying, assessing, and mitigating security risks
            </p></div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"text-center"
<div className="
                1
              </div>
<h3 className="text-xl font-semibold mb-2"text-gray-600"
<div className="
<div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"text-xl font-semibold mb-2"
<p className="
<div className="text-center"bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                3
              </div>
<h3 className="
<p className="text-gray-600"text-center"
<div className="
                4
              </div>
<h3 className="text-xl font-semibold mb-2"text-gray-600"
</div></div>
</div>

      {/* Security Tools & Technologies */}
      <div className="
<div className="container mx-auto px-4"text-center mb-16"
<h2 className="
              Security Tools & Technologies
            </h2>
<p className="text-xl text-gray-600 max-w-3 xl mx-auto"grid md:grid-cols-2 lg:grid-cols-3 gap-8"
<Card className="
<CardHeader>
<div className="bg-red-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4"h-6 w-6 text-red-600"
<CardTitle>Threat Detection</CardTitle></CardHeader>
<CardContent>
<ul className="
<li className="flex items-center gap-2"h-4 w-4 text-green-500"
<span>SIEM platforms</span></li>
<li className="
<CheckCircle className="h-4 w-4 text-green-500"flex items-center gap-2"
<CheckCircle className="
<span>Network monitoring</span></li>
</ul></CardContent>
</Card>
<Card className="hover:shadow-lg transition-shadow"bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4"
<AlertTriangle className="
<CardTitle>Vulnerability Management</CardTitle></CardHeader>
<CardContent>
<ul className="space-y-2 text-sm text-gray-600"flex items-center gap-2"
<CheckCircle className="
<span>Automated scanning</span></li>
<li className="flex items-center gap-2"h-4 w-4 text-green-500"
<span>Penetration testing</span></li>
<li className="
<CheckCircle className="h-4 w-4 text-green-500"hover:shadow-lg transition-shadow"
<CardHeader>
<div className="
<Lock className="h-6 w-6 text-green-600"space-y-2 text-sm text-gray-600"
<li className="
<CheckCircle className="h-4 w-4 text-green-500"flex items-center gap-2"
<CheckCircle className="
<span>Identity management</span></li>
<li className="flex items-center gap-2"h-4 w-4 text-green-500"
<span>Privileged access</span></li>
</ul></CardContent>
</Card>
<Card className="
<CardHeader>
<div className="bg-purple-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4"h-6 w-6 text-purple-600"
<CardTitle>Network Security</CardTitle></CardHeader>
<CardContent>
<ul className="
<li className="flex items-center gap-2"h-4 w-4 text-green-500"
<span>Firewall management</span></li>
<li className="
<CheckCircle className="h-4 w-4 text-green-500"flex items-center gap-2"
<CheckCircle className="
<span>Intrusion prevention</span></li>
</ul></CardContent>
</Card>
<Card className="hover:shadow-lg transition-shadow"bg-yellow-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4"
<Database className="
<CardTitle>Data Protection</CardTitle></CardHeader>
<CardContent>
<ul className="space-y-2 text-sm text-gray-600"flex items-center gap-2"
<CheckCircle className="
<span>Encryption at rest</span></li>
<li className="flex items-center gap-2"h-4 w-4 text-green-500"
<span>Data loss prevention</span></li>
<li className="
<CheckCircle className="h-4 w-4 text-green-500"hover:shadow-lg transition-shadow"
<CardHeader>
<div className="
<Code className="h-6 w-6 text-cyan-600"space-y-2 text-sm text-gray-600"
<li className="
<CheckCircle className="h-4 w-4 text-green-500"flex items-center gap-2"
<CheckCircle className="
<span>API security</span></li>
<li className="flex items-center gap-2"h-4 w-4 text-green-500"
<span>Secure development</span></li>
</ul></CardContent>
</Card></div>
</div></div>

      {/* Call to Action */}
      <div className="
<div className="container mx-auto px-4 text-center"text-3 xl md:text-4 xl font-bold mb-6"
            Secure Your Business Today
          </h2>
<p className="
            Don't wait until it's too late. Our cybersecurity experts are ready to help you build '
            a robust security posture and protect your valuable assets.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"/request-quote">"lg" className="
                Get Security Assessment
                <ArrowRight className="ml-2 h-5 w-5"/contact">"lg" variant=" className="border-white text-white hover:bg-white/10"bg-gray-900 text-white py-12"
<div className="
<div className="grid md:grid-cols-2 gap-8"text-2 xl font-bold mb-6 text-red-400"
<p className="
                Your trusted cybersecurity partner. We help businesses protect their digital assets
                with comprehensive security solutions and expert guidance.
              </p>
<div className="flex space-x-4"https://ziontechgroup.com" target=" rel="noopener noreferrer"text-red-400 hover:text-red-300"
<Globe className="
</div></div>
<div>
<h3 className="text-xl font-semibold mb-6 text-red-400"space-y-4"
<div className="
<Phone className="h-5 w-5 text-red-400"flex items-center gap-3"
<Mail className="
<span>kleber@ziontechgroup.com</span></div>
<div className="flex items-center gap-3"h-5 w-5 text-red-400"
<span>364 E Main St STE 1008<br />Middletown DE 19709</span></div>
</div></div>
</div>
<div className="
<p>&copy; 2024 ZionTech Group. All rights reserved. | <a href="https://ziontechgroup.com"_blank" rel=" className="text-red-400 hover:underline"
</div></div>
</div></div>
  )
}
export default CybersecurityServicesPage;
}
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>)))