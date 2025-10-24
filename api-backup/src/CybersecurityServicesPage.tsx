import React, { useState } from 'react';
import { Header  } from '@/components/Header';
import { Footer  } from '@/components/Footer';import { SEO  } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger  } from '@/components/ui/accordion';import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';import { Badge  } from '@/components/ui/badge';
import { Link  } from 'react-router-dom';import React from 'react';
import { Link  } from 'react-router-dom';
import { Button  } from '@/components/ui/button';import { TrustedBySection  } from '@/components/TrustedBySection';
import { QuoteFormSection  } from '@/components/QuoteFormSection';import React from 'react';
import { Link  } from 'react-router-dom';
import { Button  } from '@/components/ui/button';import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Badge  } from '@/components/ui/badge';import { Shield, 
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
  DollarSign;
 } from 'lucide-react';
import { ENHANCED_SERVICES  } from '@/data/enhancedServices';// Filter cybersecurity services
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
  const getCategoryIcon = (category: string) =>
                {
    const categoryData = SECURITY_SERVICE_CATEGORIES.find(cat => cat.id === category)
    return categoryData?.icon || Shield
  }
  const getPricingModelLabel = (model: string) =>
                {
    switch (model) {
      case 'one-time': return 'One-time'
      case 'monthly': return 'Monthly'
      case 'hourly': return 'Hourly'
      case 'project-based': return 'Project-based'
      default: return model
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark"></div>
                {/* Hero Section */}
                <div className="relative overflow-hidden"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white"></div>
          <div className="flex items-center justify-center mb-6"></div>
            <Shield className="h-16 w-16 text-zion-cyan mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"></h1>
              Cybersecurity Services
            </h1>
                </div>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto"></p>
            Protect Your Business with Enterprise-Grade Security Solutions
          </p>
          <p className="text-lg text-zion-cyan-light mb-12 max-w-3xl mx-auto"></p>
            From threat detection to compliance management, we provide comprehensive cybersecurity that keeps your business safe in an evolving digital landscape.
          </p>
                {/* Contact CTA */}
                <div className="flex flex-wrap justify-center gap-4 mb-12"></div>
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3"></Button>
              <Phone className="mr-2 h-5 w-5" />
              +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3"></Button>
              <Mail className="mr-2 h-5 w-5" />
              kleber@ziontechgroup.com
            </Button>
                </div>
                {/* Security Stats */}
                <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto"></div>
            <div className="text-center"></div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-cyan-light">Threat Detection</div>
                </div>
            <div className="text-center"></div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-cyan-light">Monitoring</div>
                </div>
            <div className="text-center"></div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-zion-cyan-light">Breach Reduction</div>
                </div>
            <div className="text-center"></div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">100%</div>
              <div className="text-zion-cyan-light">Compliance</div>
                </div>
          </div>
                </div>
      </div>
                {/* Main Content */}
                <div className="container mx-auto px-4 py-16"></div>
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full"></Tabs>
          <TabsList className="grid w-full grid-cols-5 mb-12 bg-white/10 backdrop-blur-sm"></TabsList>
            <TabsTrigger value="overview" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple"></TabsTrigger>
              Overview
            </TabsTrigger>
            <TabsTrigger value="services" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple"></TabsTrigger>
              Services
            </TabsTrigger>
            <TabsTrigger value="compliance" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple"></TabsTrigger>
              Compliance
            </TabsTrigger>
            <TabsTrigger value="threats" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple"></TabsTrigger>
              Threats
            </TabsTrigger>
            <TabsTrigger value="pricing" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple"></TabsTrigger>
              Pricing
            </TabsTrigger>
                </TabsList>
                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-12"></TabsContent>
            <div className="text-center"></div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Cybersecurity is Critical</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto"></p>
                In today's interconnected world, cybersecurity is not just about protecting data—it's about protecting your business, reputation, and future.
              </p>
                </div>

            <div className="grid md:grid-cols-3 gap-8"></div>
              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center"></Card>
                <CardContent className="p-8"></CardContent>
                  <Shield className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
                  <h3 className="text-2xl font-bold text-white mb-4">Threat Protection</h3>
                  <p className="text-zion-cyan-light"></p>
                    Advanced threat detection and prevention systems that identify and neutralize cyber attacks before they can cause damage.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center"></Card>
                <CardContent className="p-8"></CardContent>
                  <Lock className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
                  <h3 className="text-2xl font-bold text-white mb-4">Data Security</h3>
                  <p className="text-zion-cyan-light"></p>
                    Comprehensive data protection including encryption, access controls, and secure backup solutions to safeguard your critical information.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center"></Card>
                <CardContent className="p-8"></CardContent>
                  <Users className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
                  <h3 className="text-2xl font-bold text-white mb-4">Compliance & Risk</h3>
                  <p className="text-zion-cyan-light"></p>
                    Ensure regulatory compliance and minimize risk exposure with our comprehensive security frameworks and audit support.
                  </p>
                </CardContent>
              </Card>
                </div>
                {/* Security Framework */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Security Framework</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
                <div className="text-center"></div>
                  <Eye className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Detect</h4>
                  <p className="text-sm text-zion-cyan-light">Advanced threat detection and monitoring</p>
                </div>
                <div className="text-center"></div>
                  <Shield className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Protect</h4>
                  <p className="text-sm text-zion-cyan-light">Multi-layered defense systems</p>
                </div>
                <div className="text-center"></div>
                  <AlertCircle className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Respond</h4>
                  <p className="text-sm text-zion-cyan-light">Rapid incident response and recovery</p>
                </div>
                <div className="text-center"></div>
                  <TrendingUp className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Recover</h4>
                  <p className="text-sm text-zion-cyan-light">Business continuity and resilience</p>
                </div>
              </div>
                </div>
          </TabsContent>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {/* Services Tab */}
                <TabsContent value="services" className="space-y-12"></TabsContent>
            <div className="text-center"></div>
              <h2 className="text-4xl font-bold text-white mb-6">Cybersecurity Service Portfolio</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto"></p>
                Comprehensive security solutions designed to protect your business from modern cyber threats.
              </p>
                </div>

            <div className="grid md:grid-cols-2 gap-8"></div>
                {CYBERSECURITY_SERVICES.map((service) => (
                <SecurityServiceCard key={service.id} service={service} />
              ))}
                </div>
                {/* Additional Security Services */}
                <div className="grid md:grid-cols-3 gap-8"></div>
              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30"></Card>
                <CardHeader></CardHeader>
                  <CardTitle className="text-white flex items-center gap-2"></CardTitle>
                    <Search className="h-6 w-6 text-zion-cyan" />
                    Penetration Testing
                  </CardTitle>
                </CardHeader>
                <CardContent></CardContent>
                  <p className="text-zion-cyan-light mb-4"></p>
                    Comprehensive security assessments to identify vulnerabilities before attackers do.
                  </p>
                  <div className="space-y-2"></div>
                    <div className="flex items-center gap-2"></div>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Network penetration testing</span>
                </div>
                    <div className="flex items-center gap-2"></div>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Web application testing</span>
                </div>
                    <div className="flex items-center gap-2"></div>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Social engineering assessments</span>
                </div>
                  </div>
                  <Button className="w-full mt-4 bg-zion-purple hover:bg-zion-purple-dark text-white"></Button>
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30"></Card>
                <CardHeader></CardHeader>
                  <CardTitle className="text-white flex items-center gap-2"></CardTitle>
                    <Monitor className="h-6 w-6 text-zion-cyan" />
                    Security Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent></CardContent>
                  <p className="text-zion-cyan-light mb-4"></p>
                    24/7 security monitoring and threat intelligence to detect and respond to incidents in real-time.
                  </p>
                  <div className="space-y-2"></div>
                    <div className="flex items-center gap-2"></div>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">SIEM implementation</span>
                </div>
                    <div className="flex items-center gap-2"></div>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Threat intelligence feeds</span>
                </div>
                    <div className="flex items-center gap-2"></div>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Incident response automation</span>
                </div>
                  </div>
                  <Button className="w-full mt-4 bg-zion-purple hover:bg-zion-purple-dark text-white"></Button>
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30"></Card>
                <CardHeader></CardHeader>
                  <CardTitle className="text-white flex items-center gap-2"></CardTitle>
                    <FileText className="h-6 w-6 text-zion-cyan" />
                    Security Training
                  </CardTitle>
                </CardHeader>
                <CardContent></CardContent>
                  <p className="text-zion-cyan-light mb-4"></p>
                    Employee security awareness training to create a human firewall against social engineering attacks.
                  </p>
                  <div className="space-y-2"></div>
                    <div className="flex items-center gap-2"></div>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Phishing simulation</span>
                </div>
                    <div className="flex items-center gap-2"></div>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Security best practices</span>
                </div>
                    <div className="flex items-center gap-2"></div>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-zion-cyan-light">Compliance training</span>
                </div>
                  </div>
                  <Button className="w-full mt-4 bg-zion-purple hover:bg-zion-purple-dark text-white"></Button>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
                </div>
          </TabsContent>
                {/* Compliance Tab */}
                <TabsContent value="compliance" className="space-y-12"></TabsContent>
            <div className="text-center"></div>
              <h2 className="text-4xl font-bold text-white mb-6">Compliance & Regulatory Standards</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto"></p>
                Ensure your business meets industry standards and regulatory requirements with our comprehensive compliance solutions.
              </p>
                </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <ComplianceCard
                icon={<FileText className="h-8 w-8" />}
                title="GDPR Compliance"
                description="European data protection regulation compliance with privacy-by-design principles."
                requirements={["Data protection", "Privacy rights", "Breach notification", "Data processing"]}
                industries={["All EU businesses", "Healthcare", "Finance", "E-commerce"]}
              />
              <ComplianceCard
                icon={<Shield className="h-8 w-8" />}
                title="SOC 2 Type II"
                description="Service Organization Control 2 certification for security, availability, and confidentiality."
                requirements={["Security controls", "Availability monitoring", "Confidentiality", "Processing integrity"]}
                industries={["SaaS companies", "Cloud providers", "Data centers", "IT services"]}
              />
              <ComplianceCard
                icon={<Lock className="h-8 w-8" />}
                title="HIPAA Compliance"
                description="Health Insurance Portability and Accountability Act compliance for healthcare organizations."
                requirements={["Patient privacy", "Data security", "Access controls", "Audit trails"]}
                industries={["Healthcare", "Medical devices", "Health insurance", "Telemedicine"]}
              />
              <ComplianceCard
                icon={<CreditCard className="h-8 w-8" />}
                title="PCI DSS"
                description="Payment Card Industry Data Security Standard for payment processing security."
                requirements={["Card data protection", "Network security", "Access control", "Regular testing"]}
                industries={["Retail", "E-commerce", "Payment processing", "Financial services"]}
              />
              <ComplianceCard
                icon={<Server className="h-8 w-8" />}
                title="ISO 27001"
                description="International standard for information security management systems."
                requirements={["Risk assessment", "Security controls", "Management system", "Continuous improvement"]}
                industries={["Technology", "Manufacturing", "Financial services", "Government"]}
              />
              <ComplianceCard
                icon={<Database className="h-8 w-8" />}
                title="CCPA Compliance"
                description="California Consumer Privacy Act compliance for consumer data protection."
                requirements={["Consumer rights", "Data transparency", "Opt-out mechanisms", "Data security"]}
                industries={["California businesses", "Online services", "Data brokers", "Large corporations"]}
              />
            </div>
                </TabsContent>
                {/* Threats Tab */}
                <TabsContent value="threats" className="space-y-12"></TabsContent>
            <div className="text-center"></div>
              <h2 className="text-4xl font-bold text-white mb-6">Modern Cyber Threats</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto"></p>
                Understanding the threat landscape is the first step in building effective cybersecurity defenses.
              </p>
                </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <ThreatCard
                icon={<AlertTriangle className="h-8 w-8" />}
                title="Ransomware Attacks"
                description="Malicious software that encrypts files and demands payment for decryption."
                impact="High - Data loss, business disruption, financial loss"
                prevention={["Regular backups", "Email filtering", "User training", "Patch management"]}
                trend="Increasing 150% annually"
              />
              <ThreatCard
                icon={<Users className="h-8 w-8" />}
                title="Social Engineering"
                description="Manipulation tactics to trick users into revealing sensitive information."
                impact="Medium - Data breaches, unauthorized access, reputation damage"
                prevention={["Security training", "Multi-factor authentication", "Verification procedures", "Incident reporting"]}
                trend="Most common attack vector"
              />
              <ThreatCard
                icon={<Network className="h-8 w-8" />}
                title="DDoS Attacks"
                description="Distributed denial-of-service attacks that overwhelm systems with traffic."
                impact="Medium - Service disruption, revenue loss, customer dissatisfaction"
                prevention={["Traffic filtering", "CDN protection", "Rate limiting", "Incident response"]}
                trend="Increasing in sophistication"
              />
              <ThreatCard
                icon={<Database className="h-8 w-8" />}
                title="Data Breaches"
                description="Unauthorized access to sensitive information and intellectual property."
                impact="High - Financial loss, legal consequences, brand damage"
                prevention={["Access controls", "Encryption", "Monitoring", "Regular audits"]}
                trend="Costing $4.35M average"
              />
              <ThreatCard
                icon={<Smartphone className="h-8 w-8" />}
                title="Mobile Threats"
                description="Attacks targeting mobile devices and applications."
                impact="Medium - Data theft, device compromise, privacy violations"
                prevention={["Mobile device management", "App security", "User training", "Regular updates"]}
                trend="Growing with mobile adoption"
              />
                             <ThreatCard
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
                <TabsContent value="pricing" className="space-y-12"></TabsContent>
            <div className="text-center"></div>
              <h2 className="text-4xl font-bold text-white mb-6">Cybersecurity Service Pricing</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto"></p>
                Transparent pricing for comprehensive cybersecurity solutions that fit your business needs and budget.
              </p>
                </div>

            <div className="grid md:grid-cols-3 gap-8"></div>
              <PricingCard
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
              <PricingCard
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
              <PricingCard
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
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Security Investment ROI</h3>
              <div className="grid md:grid-cols-2 gap-8"></div>
                <div></div>
                  <h4 className="text-xl font-semibold text-white mb-4">Cost of Breach Prevention</h4>
                  <div className="space-y-3"></div>
                    <div className="flex justify-between"></div>
                      <span className="text-zion-cyan-light">Average breach cost:</span>
                      <span className="text-white font-semibold">$4.35M</span>
                </div>
                    <div className="flex justify-between"></div>
                      <span className="text-zion-cyan-light">Security investment:</span>
                      <span className="text-white font-semibold">$9,999</span>
                </div>
                    <div className="flex justify-between"></div>
                      <span className="text-zion-cyan-light">ROI ratio:</span>
                      <span className="text-white font-semibold">435:1</span>
                </div>
                    <div className="flex justify-between"></div>
                      <span className="text-zion-cyan-light">Risk reduction:</span>
                      <span className="text-white font-semibold">90%+</span>
                </div>
                  </div>
                </div>
                <div></div>
                  <h4 className="text-xl font-semibold text-white mb-4">Additional Benefits</h4>
                  <div className="space-y-3"></div>
                    <div className="flex justify-between"></div>
                      <span className="text-zion-cyan-light">Compliance cost savings:</span>
                      <span className="text-white font-semibold">$50K-200K</span>
                </div>
                    <div className="flex justify-between"></div>
                      <span className="text-zion-cyan-light">Insurance premium reduction:</span>
                      <span className="text-white font-semibold">20-40%</span>
                </div>
                    <div className="flex justify-between"></div>
                      <span className="text-zion-cyan-light">Customer trust increase:</span>
                      <span className="text-white font-semibold">Significant</span>
                </div>
                    <div className="flex justify-between"></div>
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
                <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16"></div>
        <div className="container mx-auto px-4 text-center"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
            Secure Your Business Today
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto"></p>
            Don't wait until it's too late. Protect your business with enterprise-grade cybersecurity solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4"></div>
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan px-8 py-3"></Button>
              <Shield className="mr-2 h-5 w-5" />
              Security Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3"></Button>
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
                </div>
        </section>
                {/* Contact Section */}
                <div className="bg-zion-blue-dark py-16"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto"></p>
              Ready to strengthen your cybersecurity posture? Contact our security experts today.
            </p>
                </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"></div>
            <div className="text-center"></div>
              <Phone className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan-light">+1 302 464 0950</p>
              <p className="text-sm text-zion-cyan-light">Mon-Fri 9AM-6PM EST</p>
                </div>
            <div className="text-center"></div>
              <Mail className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>
              <p className="text-sm text-zion-cyan-light">24/7 Response</p>
                </div>
            <div className="text-center"></div>
              <MapPin className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
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
function SecurityServiceCard({ service }: { service: any }) {return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300"></Card>
      <CardHeader></CardHeader>
        <div className="flex items-start justify-between mb-2"></div>
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30"></Badge>
                {service.category}
                </Badge>
                {service.featured && (
            <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30"></Badge>
              Featured
            </Badge>
          )}
                </div>
        <CardTitle className="text-xl text-white mb-2"></CardTitle>
                {service.title}
                </CardTitle>
        <CardDescription className="text-zion-cyan-light"></CardDescription>
                {service.description}
                </CardDescription>
                </CardHeader>
      <CardContent></CardContent>
        <div className="space-y-4"></div>
          <div className="flex items-center justify-between"></div>
            <div className="text-2xl font-bold text-zion-cyan"></div>
                {service.currency}{service.price?.toLocaleString()}
                </div>
            <div className="flex items-center gap-1"></div>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-white"></span>
                {service.rating}
                </span>
              <span className="text-zion-cyan-light">({service.reviewCount})</span>
                </div>
          </div>
          
          <div className="flex items-center justify-between"></div>
            <span className="text-zion-cyan-light">Security Score:</span>
            <div className="flex items-center gap-2"></div>
              <div className="w-16 bg-zion-blue-light rounded-full h-2"></div>
                <$2 />
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" 
                  style={{ width: `${service.aiScore}%` }}
                ></div>
                </div>
              <span className="text-zion-cyan font-semibold"></span>
                {service.aiScore}%</span>
                </div>
          </div>

          <div className="flex flex-wrap gap-2"></div>
                {service.tags.slice(0, 3).map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan-light"></Badge>
                {tag}
                </Badge>
            ))}
                </div>

          <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white"></Button>
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
}) {return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300"></Card>
      <CardHeader className="text-center"></CardHeader>
        <div className="mx-auto mb-4 text-zion-cyan"></div>
                {icon}
                </div>
        <CardTitle className="text-xl text-white"></CardTitle>
                {title}
                </CardTitle>
        <CardDescription className="text-zion-cyan-light"></CardDescription>
                {description}
                </CardDescription>
                </CardHeader>
      <CardContent></CardContent>
        <div className="space-y-4"></div>
          <div></div>
            <h4 className="font-semibold text-white mb-2">Key Requirements:</h4>
            <div className="space-y-1"></div>
                {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-2"></div>
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  <span className="text-sm text-zion-cyan-light"></span>
                {req}
                </span>
                </div>
              ))}
                </div>
                </div>
          <div></div>
            <h4 className="font-semibold text-white mb-2">Industries:</h4>
            <div className="flex flex-wrap gap-1"></div>
                {industries.map((industry, index) => (
                <Badge key={index} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan-light"></Badge>
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
}) {return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300"></Card>
      <CardHeader className="text-center"></CardHeader>
        <div className="mx-auto mb-4 text-zion-cyan"></div>
                {icon}
                </div>
        <CardTitle className="text-xl text-white"></CardTitle>
                {title}
                </CardTitle>
        <CardDescription className="text-zion-cyan-light"></CardDescription>
                {description}
                </CardDescription>
                </CardHeader>
      <CardContent></CardContent>
        <div className="space-y-4"></div>
          <div></div>
            <h4 className="font-semibold text-white mb-2">Impact:</h4>
            <p className="text-sm text-zion-cyan-light"></p>
                {impact}
                </p>
                </div>
          <div></div>
            <h4 className="font-semibold text-white mb-2">Prevention:</h4>
            <div className="space-y-1"></div>
                {prevention.map((item, index) => (
                <div key={index} className="flex items-center gap-2"></div>
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  <span className="text-sm text-zion-cyan-light"></span>
                {item}
                </span>
                </div>
              ))}
                </div>
                </div>
          <div></div>
            <h4 className="font-semibold text-white mb-2">Trend:</h4>
            <p className="text-sm text-zion-cyan-light"></p>
                {trend}
                </p>
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
    <Card className={`relative ${popular ? 'border-zion-cyan border-2' : 'border-zion-cyan/30'} bg-white/10 backdrop-blur-sm hover:border-zion-cyan/60 transition-all duration-300`}></Card>
                {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
          <Badge className="bg-zion-cyan text-white px-4 py-1">Most Popular</Badge>
                </div>
      )}
                <CardHeader className="text-center pt-8"></CardHeader>
        <CardTitle className="text-2xl text-white"></CardTitle>
                {title}
                </CardTitle>
        <CardDescription className="text-zion-cyan-light"></CardDescription>
                {description}
                </CardDescription>
        <div className="text-4xl font-bold text-zion-cyan mt-4"></div>
                {price}
                </div>
                </CardHeader>
      <CardContent></CardContent>
        <div className="space-y-3"></div>
                {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2"></div>
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-zion-cyan-light"></span>
                {feature}
                </span>
                </div>
          ))}
                </div>
        <Button className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-dark text-white"></Button>
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
export default function CybersecurityServicesPage() {return (
    <div className="min-h-screen bg-background"></div>
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20"></section>
        <div className="container mx-auto px-4 text-center"></div>
          <div className="max-w-4xl mx-auto"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
              Cybersecurity Solutions for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light"></span>
                Digital Age
              </span>
                </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"></p>
              Protect your business with enterprise-grade cybersecurity solutions. From threat detection to compliance, 
              we deliver comprehensive security services that keep your assets safe and your business compliant.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <Link to="/request-quote"></Link>
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3"></Button>
                  Secure Your Business
                </Button>
                </Link>
              <Link to="/contact"></Link>
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3"></Button>
                  Security Assessment
                </Button>
                </Link>
import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import { Button  } from '@/components/ui/button';import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Badge  } from '@/components/ui/badge';import { Input  } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';import { Search, 
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
  ShieldCheck;
 } from 'lucide-react';
import { EXPANDED_SERVICES, type ExpandedService  } from '@/data/expandedServices';import { TrustedBySection } from '@/components/TrustedBySection'
export default function CybersecurityServicesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<string>('all')
  // Filter only security services
  const securityServices = EXPANDED_SERVICES.filter(service => 
    service.category === 'Security Services'
  )
  const filteredServices = securityServices.filter(service =>
                {
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
  const getPricingModelIcon = (model: string) =>
                {
    switch (model) {
      case 'monthly': return <Clock className="w-4 h-4" />
      case 'hourly': return <Zap className="w-4 h-4" />
      case 'project-based': return <Zap className="w-4 h-4" />
      default: return <DollarSign className="w-4 h-4" />
    }
  }
  const getPricingModelText = (model: string) =>
                {
    switch (model) {
      case 'one-time': return 'One-time'
      case 'monthly': return 'Monthly'
      case 'hourly': return 'Hourly'
      case 'project-based': return 'Project-based'
      default: return model
    }
  }
  return (
    <Card className="hover:shadow-lg transition-shadow border-red-500/20"></Card>
      <div className="relative"></div>
        <img
          src={service.images[0]}
          alt={service.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
                {service.featured && (
          <Badge className="absolute top-3 left-3 bg-red-600"></Badge>
            Featured
          </Badge>
        )}
                <Badge className="absolute top-3 right-3 bg-green-600"></Badge>
          AI Score: {service.aiScore}
                </Badge>
                </div>
      
      <CardHeader></CardHeader>
        <div className="flex items-start justify-between mb-2"></div>
          <div className="text-2xl">🔒</div>
          <div className="text-right"></div>
            <div className="text-2xl font-bold text-red-600"></div>
                {service.currency}{service.price.toLocaleString()}
                </div>
            <div className="text-sm text-muted-foreground"></div>
                {getPricingModelLabel(service.pricingModel)}
                </div>
                </div>
        </div>
        
        <CardTitle className="text-lg leading-tight"></CardTitle>
                {service.title}
                </CardTitle>
        <CardDescription className="line-clamp-3"></CardDescription>
                {service.description}
                </CardDescription>
                </CardHeader>
      
      <CardContent className="space-y-4"></CardContent>
                {/* Rating and Reviews */}
                <div className="flex items-center gap-2"></div>
          <div className="flex items-center gap-1"></div>
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium"></span>
                {service.rating}
                </span>
                </div>
          <span className="text-muted-foreground"></span>
            ({service.reviewCount} reviews)
          </span>
                </div>
                {/* Market Price */}
                <div className="flex items-center gap-2 text-sm"></div>
          <TrendingUp className="h-4 w-4 text-green-600" />
          <span className="text-muted-foreground">Market Price:</span>
          <span className="font-medium"></span>
                {service.marketPrice}
                </span>
                </div>
                {/* Delivery Time */}
                <div className="flex items-center gap-2 text-sm"></div>
          <Clock className="h-4 w-4 text-blue-600" />
          <span className="text-muted-foreground">Delivery:</span>
          <span className="font-medium"></span>
                {service.deliveryTime}
                </span>
                </div>
                {/* Key Features */}
                <div className="space-y-2"></div>
          <h4 className="font-medium text-sm">Key Features:</h4>
          <ul className="space-y-1"></ul>
                {service.features.slice(0, 3).map((feature: string, index: number) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground"></li>
                <CheckCircle className="h-3 w-3 text-green-600" />
                {feature}
                </li>
            ))}
                </ul>
                </div>
                {/* Contact Information */}
                <div className="pt-4 border-t"></div>
          <div className="space-y-2 text-sm"></div>
            <div className="flex items-center gap-2"></div>
              <Phone className="h-3 w-3 text-muted-foreground" />
              <span></span>
                {service.contactInfo.phone}
                </span>
                </div>
            <div className="flex items-center gap-2"></div>
              <Mail className="h-3 w-3 text-muted-foreground" />
              <span></span>
                {service.contactInfo.email}
                </span>
                </div>
          </div>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-2 pt-4"></div>
          <Button className="flex-1 bg-red-600 hover:bg-red-700"></Button>
            Get Security Quote
          </Button>
          <Button variant="outline" className="flex-1"></Button>
            Learn More
          </Button>
                </div>
      </section>
                {/* Search and Filters */}
                <section className="py-8 bg-zion-blue"></section>
        <div className="container mx-auto px-4"></div>
          <div className="flex flex-col lg:flex-row gap-4"></div>
            <div className="flex-1 relative"></div>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
              <Input
                placeholder="Search security services, compliance, or threats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>
            
            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}></Select>
              <SelectTrigger className="w-full lg:w-48 bg-zion-blue-dark border-zion-blue-light text-white"></SelectTrigger>
                <SelectValue placeholder="Security Category" />
              </SelectTrigger>
              <SelectContent></SelectContent>
                <SelectItem value="all">All Security Categories</SelectItem>
                {securitySubcategories.map(sub => (
                  <SelectItem key={sub} value={sub}></SelectItem>
                {sub}
                </SelectItem>
                ))}
                </SelectContent>
                </Select>

            <Select value={priceRange} onValueChange={setPriceRange}></Select>
              <SelectTrigger className="w-full lg:w-32 bg-zion-blue-dark border-zion-blue-light text-white"></SelectTrigger>
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent></SelectContent>
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
                <section className="py-16"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl font-bold text-zion-blue mb-4"></h2>
                {filteredServices.length} Security Services Found
            </h2>
            <p className="text-zion-slate-light"></p>
              Discover comprehensive security solutions to protect your business and maintain compliance
            </p>
                </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"></div>
                {filteredServices.map((service) => (
              <Card key={service.id} className="h-full border-zion-blue-light hover:border-red-500/50 transition-all duration-300 hover:shadow-xl"></Card>
                <CardHeader className="pb-4"></CardHeader>
                  <div className="flex items-start justify-between mb-3"></div>
                    <Badge variant="secondary" className="bg-red-500/20 text-red-600 border-red-500/30"></Badge>
                {service.subcategory}
                </Badge>
                    <div className="flex items-center gap-1 text-zion-slate-light"></div>
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium"></span>
                {service.rating}
                </span>
                      <span className="text-xs">({service.reviewCount})</span>
                </div>
                  </div>
                  
                  <CardTitle className="text-xl text-zion-blue mb-2"></CardTitle>
                {service.title}
                </CardTitle>
                  <CardDescription className="text-zion-slate-light line-clamp-2"></CardDescription>
                {service.description}
                </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4"></CardContent>
                {/* Pricing */}
                <div className="flex items-center justify-between"></div>
                    <div className="flex items-center gap-2"></div>
                {getPricingModelIcon(service.pricingModel)}
                <span className="text-sm text-zion-slate-light"></span>
                {getPricingModelText(service.pricingModel)}
                </span>
                </div>
                    <div className="text-right"></div>
                      <div className="text-2xl font-bold text-red-600"></div>
                {service.currency}{service.price.toLocaleString()}
                </div>
                {service.pricingModel === 'monthly' && (
                        <div className="text-xs text-zion-slate-light">per month</div>
                      )}
                </div>
                </div>
                {/* AI Score */}
                <div className="flex items-center justify-between"></div>
                    <span className="text-sm text-zion-slate-light">Security Score</span>
                    <Badge className="bg-gradient-to-r from-red-500 to-red-700 text-white"></Badge>
                      <Shield className="w-3 h-3 mr-1" />
                {service.aiScore}/100
                    </Badge>
                </div>
                {/* Features Preview */}
                <div></div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-1"></div>
                {service.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light"></Badge>
                {feature}
                </Badge>
                      ))}
                      {service.features.length > 3 && (
                        <Badge variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light"></Badge>
                          +{service.features.length - 3} more
                        </Badge>
                      )}
                </div>
                </div>
                {/* Benefits */}
                <div></div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Benefits</h4>
                    <div className="space-y-1"></div>
                {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-zion-slate-light"></div>
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span></span>
                {benefit}
                </span>
                </div>
                      ))}
                </div>
                </div>
                {/* Use Cases */}
                <div></div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Use Cases</h4>
                    <div className="flex flex-wrap gap-1"></div>
                {service.useCases.slice(0, 3).map((useCase, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light"></Badge>
                {useCase}
                </Badge>
                      ))}
                </div>
                </div>
                {/* Target Audience */}
                <div></div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Perfect For</h4>
                    <div className="flex flex-wrap gap-1"></div>
                {service.targetAudience.slice(0, 3).map((audience, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light"></Badge>
                {audience}
                </Badge>
                      ))}
                </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col gap-2 pt-4"></div>
                    <Link to={`/services/${service.id}`}></Link>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white"></Button>
                        <Lightbulb className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                </Link>
                    
                    <div className="flex gap-2"></div>
                {service.website && (
                        <$2 />
                          href={service.website} ;
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" className="w-full border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10"></Button>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                </a>
                      )}
                <Link to="/contact" className="flex-1"></Link>
                        <Button variant="outline" className="w-full border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10"></Button>
                          <Mail className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                </Link>
                    </div>
                </div>
                {/* Additional Info */}
                <div className="pt-4 border-t border-zion-blue-light"></div>
                    <div className="grid grid-cols-2 gap-4 text-xs text-zion-slate-light"></div>
                {service.documentation && (
                        <div className="flex items-center gap-1"></div>
                          <BookOpen className="w-3 h-3" />
                          <span>Docs</span>
                </div>
                      )}
                      {service.support && (
                        <div className="flex items-center gap-1"></div>
                          <Phone className="w-3 h-3" />
                          <span>Support</span>
                </div>
                      )}
                      {service.compliance && service.compliance.length > 0 && (
                        <div className="flex items-center gap-1"></div>
                          <Shield className="w-3 h-3" />
                          <span></span>
                {service.compliance.length} Compliance</span>
                </div>
                      )}
                      {service.sla && (
                        <div className="flex items-center gap-1"></div>
                          <TrendingUp className="w-3 h-3" />
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
const CybersecurityServicesPage  = () => {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50"></div>
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white"></div>
        <div className="container mx-auto px-4 py-20"></div>
          <div className="text-center max-w-4xl mx-auto"></div>
            <div className="mb-6"></div>
              <Shield className="h-20 w-20 mx-auto text-red-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6"></h1>
              Cybersecurity Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100"></p>
              Protect your business with enterprise-grade cybersecurity services and threat intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link to="/request-quote"></Link>
                <Button size="lg" className="bg-white hover:bg-gray-100 text-red-600 font-semibold"></Button>
                  Get Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </Link>
              <Link to="/contact"></Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10"></Button>
                  Contact Security Team
                </Button>
                </Link>
            </div>
                </div>
        </div>
                </div>
                {/* Contact Information Banner */}
                <div className="bg-white border-b border-gray-200"></div>
        <div className="container mx-auto px-4 py-6"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4"></div>
            <div className="flex items-center gap-6 text-sm text-gray-600"></div>
              <div className="flex items-center gap-2"></div>
                <Phone className="h-4 w-4 text-red-600" />
                <span>+1 302 464 0950</span>
                </div>
              <div className="flex items-center gap-2"></div>
                <Mail className="h-4 w-4 text-red-600" />
                <span>kleber@ziontechgroup.com</span>
                </div>
              <div className="flex items-center gap-2"></div>
                <MapPin className="h-4 w-4 text-red-600" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
            </div>
            <div className="flex items-center gap-2"></div>
              <Globe className="h-4 w-4 text-red-600" />
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
                <div className="py-16 bg-white"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
              Modern Security Threats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
              Stay protected against evolving cyber threats with our comprehensive security solutions
            </p>
                </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"></div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ransomware Attacks</h3>
              <p className="text-gray-600">Protect against data encryption and extortion attempts with advanced threat detection</p>
                </div>
            
            <div className="text-center"></div>
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"></div>
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Engineering</h3>
              <p className="text-gray-600">Defend against phishing, pretexting, and other human-based attack vectors</p>
                </div>
            
            <div className="text-center"></div>
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"></div>
                <Server className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Supply Chain Attacks</h3>
              <p className="text-gray-600">Secure your software and hardware supply chain against compromise</p>
                </div>
            
            <div className="text-center"></div>
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"></div>
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Breaches</h3>
              <p className="text-gray-600">Prevent unauthorized access and protect sensitive information</p>
                </div>
          </div>
                </div>
      </div>
                {/* Cybersecurity Services Grid */}
                <div className="py-16 bg-gray-50"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
              Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
              Comprehensive security solutions to protect your business from all angles
            </p>
                </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {CYBERSECURITY_SERVICES.map((service) => (
              <Card key={service.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-500/20"></Card>
                <div className="relative"></div>
                  <img 
                    src={service.images[0]} ;
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                {service.featured && (
                    <Badge className="absolute top-4 right-4 bg-red-600 text-white"></Badge>
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader></CardHeader>
                  <div className="flex items-start justify-between mb-2"></div>
                    <Badge className="bg-red-100 text-red-800 border-red-200"></Badge>
                {service.category}
                </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600"></div>
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span></span>
                {service.rating}
                </span>
                      <span className="text-gray-400">({service.reviewCount})</span>
                </div>
                  </div>
                  <CardTitle className="text-xl leading-tight"></CardTitle>
                {service.title}
                </CardTitle>
                  <CardDescription className="text-base leading-relaxed"></CardDescription>
                {service.description}
                </CardDescription>
                </CardHeader>
                <CardContent></CardContent>
                  <div className="flex items-center justify-between mb-4"></div>
                    <div className="text-3xl font-bold text-red-600"></div>
                {service.currency}{service.price?.toLocaleString()}
                </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600"></div>
                      <Clock className="h-4 w-4" />
                      <span></span>
                {service.availability}
                </span>
                </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4"></div>
                {service.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs"></Badge>
                {tag}
                </Badge>
                    ))}
                </div>

                  <div className="flex items-center justify-between"></div>
                    <div className="flex items-center gap-2 text-sm text-gray-600"></div>
                      <BarChart3 className="h-4 w-4" />
                      <span>AI Score: {service.aiScore}%</span>
                </div>
                    <Link to={`/services/${service.id}`}></Link>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700"></Button>
                        Learn More
                      </Button>
                </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
                </div>
                {filteredServices.length === 0 && (
            <div className="text-center py-16"></div>
              <h3 className="text-xl font-semibold text-zion-slate-light mb-2">No security services found</h3>
              <p className="text-zion-slate-light mb-4">Try adjusting your search criteria or browse all security categories</p>
              <Button onClick={() =></Button>
                {
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
                <section className="py-16 bg-zion-blue"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl font-bold text-white mb-4">Security by the Numbers</h2>
            <p className="text-zion-slate-light text-lg"></p>
              Our security solutions protect businesses worldwide
            </p>
                </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-white font-semibold">Threat Detection Rate</div>
              <div className="text-zion-slate-light text-sm">Advanced AI-powered threat detection</div>
                </div>
            
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-white font-semibold">Security Monitoring</div>
              <div className="text-zion-slate-light text-sm">Round-the-clock threat monitoring</div>
                </div>
            
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">15min</div>
              <div className="text-white font-semibold">Response Time</div>
              <div className="text-zion-slate-light text-sm">Average incident response time</div>
                </div>
            
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">100%</div>
              <div className="text-white font-semibold">Compliance Success</div>
              <div className="text-zion-slate-light text-sm">Regulatory compliance rate</div>
                {/* Security Services Grid */}
                <section className="py-20 bg-zion-blue-dark"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Comprehensive Security Services
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto"></p>
              Choose from our range of cybersecurity services designed to address specific 
              security challenges and protect your business assets.
            </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {securityServices.map((service) => (
              <div key={service.id} className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]"></div>
                <div className="flex items-center mb-4"></div>
                  <div className="p-3 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-lg mr-4"></div>
                    <div className="text-white"></div>
                {service.icon}
                </div>
                </div>
                  <div></div>
                    <span className="text-zion-cyan text-sm font-medium"></span>
                {service.category}
                </span>
                </div>
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3"></h3>
                {service.title}
                </h3>
                <p className="text-zion-slate-light mb-4"></p>
                {service.description}
                </p>
                
                <div className="mb-4"></div>
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1"></ul>
                {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center"></li>
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                {feature}
                </li>
                    ))}
                </ul>
                </div>
                
                <div className="border-t border-zion-blue-light pt-4 mb-4"></div>
                  <div className="flex items-center justify-between text-sm"></div>
                    <div className="flex items-center text-zion-cyan"></div>
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span className="font-semibold"></span>
                {service.currency}{service.price.toLocaleString()}
                </span>
                </div>
                    <div className="flex items-center text-zion-slate-light"></div>
                      <Clock className="w-4 h-4 mr-1" />
                      <span></span>
                {service.duration}
                </span>
                </div>
                  </div>
                </div>
                
                <Link to="/request-quote"></Link>
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"></Button>
                    Get Quote
                  </Button>
                </Link>
              </div>
            ))}
                </div>
                </div>
      </section>
                {/* Security Technologies */}
                <section className="py-20 bg-zion-blue"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Advanced Security Technologies
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto"></p>
              We leverage cutting-edge security technologies and tools to deliver 
              comprehensive protection for your business.
            </p>
                </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6"></div>
                {securityTechnologies.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm"></h3>
                {tech}
                </h3>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* Compliance Standards */}
                <section className="py-20 bg-zion-blue-dark"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Compliance & Standards
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto"></p>
              Our security solutions help you meet industry standards and regulatory 
              requirements across multiple sectors.
            </p>
                </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6"></div>
                {complianceStandards.map((standard, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm"></h3>
                {standard}
                </h3>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* Threat Intelligence */}
                <section className="py-20 bg-zion-blue"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Threat Intelligence & Monitoring
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto"></p>
              Stay ahead of emerging threats with our comprehensive threat intelligence 
              and 24/7 security monitoring services.
            </p>
                </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6"></div>
                {threatIntelligence.map((intel, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm"></h3>
                {intel}
                </h3>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* Why Choose ZionTech for Security */}
                <section className="py-20 bg-zion-blue-dark"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Why Choose ZionTech Group for Cybersecurity?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto"></p>
              We combine deep security expertise with industry knowledge to deliver 
              solutions that protect your business and build customer trust.
            </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            <div className="text-center p-6"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Certified Experts</h3>
              <p className="text-zion-slate-light"></p>
                CISSP, CISM, and CEH certified security professionals with 
                extensive experience in enterprise security.
              </p>
                </div>
            
            <div className="text-center p-6"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-zion-slate-light"></p>
                Successfully protected over 500+ businesses from cyber threats 
                with zero major security breaches.
              </p>
                </div>
            
            <div className="text-center p-6"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-zion-slate-light"></p>
                Round-the-clock security monitoring and incident response 
                to protect your business at all times.
              </p>
                </div>
          </div>
                </div>
      </section>
                {/* Security Pricing */}
                <section className="py-20 bg-zion-blue"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Transparent Security Pricing
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto"></p>
              Competitive pricing for enterprise-grade security solutions with 
              flexible payment options and comprehensive protection.
            </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"></div>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center"></div>
              <h3 className="text-white text-2xl font-bold mb-4">Essential Security</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6"></div>
                $3,800<span className="text-lg text-zion-slate-light">/project</span>
                </div>
              <ul className="text-zion-slate-light space-y-2 mb-8"></ul>
                <li>Basic security assessment</li>
                <li>Vulnerability scanning</li>
                <li>Security policy review</li>
                <li>Email support</li>
                </ul>
              <Link to="/request-quote"></Link>
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"></Button>
                  Get Started
                </Button>
                </Link>
            </div>
            
            <div className="bg-gradient-to-br from-zion-purple to-zion-purple-dark border border-zion-purple rounded-lg p-8 text-center relative"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                <span className="bg-zion-cyan text-zion-blue px-4 py-2 rounded-full text-sm font-bold"></span>
                  Most Popular
                </span>
                </div>
              <h3 className="text-white text-2xl font-bold mb-4">Professional Security</h3>
              <div className="text-4xl font-bold text-white mb-6"></div>
                $7,200<span className="text-lg text-zion-slate-light">/project</span>
                </div>
              <ul className="text-white space-y-2 mb-8"></ul>
                <li>Comprehensive security audit</li>
                <li>Penetration testing</li>
                <li>Security architecture review</li>
                <li>Priority support</li>
                </ul>
              <Link to="/request-quote"></Link>
                <Button className="w-full bg-white text-zion-purple hover:bg-zion-slate-light"></Button>
                  Get Started
                </Button>
                </Link>
            </div>
            
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center"></div>
              <h3 className="text-white text-2xl font-bold mb-4">Enterprise Security</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6"></div>
                $15,000<span className="text-lg text-zion-slate-light">/project</span>
                </div>
              <ul className="text-zion-slate-light space-y-2 mb-8"></ul>
                <li>Full security transformation</li>
                <li>SOC setup and management</li>
                <li>24/7 monitoring and response</li>
                <li>Dedicated security team</li>
                </ul>
              <Link to="/request-quote"></Link>
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"></Button>
                  Contact Sales
                </Button>
                </Link>
            </div>
                </div>
        </div>
                </section>
                {/* Contact Information */}
                <section className="py-20 bg-zion-blue-dark"></section>
        <div className="container mx-auto px-4 text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Ready to Secure Your Business?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto"></p>
            Contact our cybersecurity experts today to discuss how we can help you 
            protect your business from evolving threats.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"></div>
            <div className="text-center p-6"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm"></p>
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
                </div>
            
            <div className="text-center p-6"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Call Us</h3>
              <p className="text-zion-cyan font-semibold"></p>
                +1 302 464 0950
              </p>
                </div>
            
            <div className="text-center p-6"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Email Us</h3>
              <p className="text-zion-cyan font-semibold"></p>
                kleber@ziontechgroup.com
              </p>
                </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4"></div>
            <Link to="/request-quote"></Link>
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3"></Button>
                Request Security Quote
              </Button>
                </Link>
            <Link to="/contact"></Link>
              <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3"></Button>
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
                <div className="py-16 bg-white"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
              Security Framework & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
              Our security approach follows industry best practices and compliance standards
            </p>
                </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-red-50 to-pink-50"></div>
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"></div>
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">SOC 2 Type II</h3>
              <p className="text-gray-600">Security, availability, and processing integrity controls for service organizations</p>
                </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50"></div>
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"></div>
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">ISO 27001</h3>
              <p className="text-gray-600">International standard for information security management systems</p>
                </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50"></div>
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"></div>
                <Key className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">PCI DSS</h3>
              <p className="text-gray-600">Payment card industry data security standard compliance</p>
                </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-violet-50"></div>
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"></div>
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">NIST Framework</h3>
              <p className="text-gray-600">Cybersecurity framework for critical infrastructure protection</p>
                </div>
          </div>
                </div>
      </div>
                {/* Security Process */}
                <div className="py-16 bg-gray-50"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
              Our Security Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
              Systematic approach to identifying, assessing, and mitigating security risks
            </p>
                </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"></div>
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600">Comprehensive security audit and vulnerability assessment</p>
                </div>

            <div className="text-center"></div>
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"></div>
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">Develop security roadmap and prioritize remediation efforts</p>
                </div>

            <div className="text-center"></div>
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"></div>
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Deploy security controls and monitoring solutions</p>
                </div>

            <div className="text-center"></div>
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"></div>
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Monitoring</h3>
              <p className="text-gray-600">Continuous threat monitoring and incident response</p>
                </div>
          </div>
                </div>
      </div>
                {/* Security Tools & Technologies */}
                <div className="py-16 bg-white"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
              Security Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
              State-of-the-art security tools and platforms for comprehensive protection
            </p>
                </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            <Card className="hover:shadow-lg transition-shadow"></Card>
              <CardHeader></CardHeader>
                <div className="bg-red-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4"></div>
                  <Eye className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Threat Detection</CardTitle>
                </CardHeader>
              <CardContent></CardContent>
                <ul className="space-y-2 text-sm text-gray-600"></ul>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>SIEM platforms</span>
                </li>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>EDR solutions</span>
                </li>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Network monitoring</span>
                </li>
                </ul>
                </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow"></Card>
              <CardHeader></CardHeader>
                <div className="bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4"></div>
                  <AlertTriangle className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Vulnerability Management</CardTitle>
                </CardHeader>
              <CardContent></CardContent>
                <ul className="space-y-2 text-sm text-gray-600"></ul>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Automated scanning</span>
                </li>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Penetration testing</span>
                </li>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Code analysis</span>
                </li>
                </ul>
                </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow"></Card>
              <CardHeader></CardHeader>
                <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4"></div>
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Access Control</CardTitle>
                </CardHeader>
              <CardContent></CardContent>
                <ul className="space-y-2 text-sm text-gray-600"></ul>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Multi-factor authentication</span>
                </li>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Identity management</span>
                </li>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Privileged access</span>
                </li>
                </ul>
                </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow"></Card>
              <CardHeader></CardHeader>
                <div className="bg-purple-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4"></div>
                  <Network className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Network Security</CardTitle>
                </CardHeader>
              <CardContent></CardContent>
                <ul className="space-y-2 text-sm text-gray-600"></ul>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Firewall management</span>
                </li>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>VPN solutions</span>
                </li>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Intrusion prevention</span>
                </li>
                </ul>
                </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow"></Card>
              <CardHeader></CardHeader>
                <div className="bg-yellow-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4"></div>
                  <Database className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>Data Protection</CardTitle>
                </CardHeader>
              <CardContent></CardContent>
                <ul className="space-y-2 text-sm text-gray-600"></ul>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Encryption at rest</span>
                </li>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Data loss prevention</span>
                </li>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Backup security</span>
                </li>
                </ul>
                </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow"></Card>
              <CardHeader></CardHeader>
                <div className="bg-cyan-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4"></div>
                  <Code className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Application Security</CardTitle>
                </CardHeader>
              <CardContent></CardContent>
                <ul className="space-y-2 text-sm text-gray-600"></ul>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>SAST/DAST testing</span>
                </li>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>API security</span>
                </li>
                  <li className="flex items-center gap-2"></li>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Secure development</span>
                </li>
                </ul>
                </CardContent>
            </Card>
                </div>
        </div>
                </div>
                {/* Call to Action */}
                <div className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white"></div>
        <div className="container mx-auto px-4 text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6"></h2>
            Secure Your Business Today
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto"></p>
            Don't wait until it's too late. Our cybersecurity experts are ready to help you build 
            a robust security posture and protect your valuable assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link to="/request-quote"></Link>
              <Button size="lg" className="bg-white hover:bg-gray-100 text-red-600 font-semibold"></Button>
                Get Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
                </Link>
            <Link to="/contact"></Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10"></Button>
                Contact Security Team
              </Button>
                </Link>
          </div>
                </div>
      </div>
                {/* Footer Contact */}
                <div className="bg-gray-900 text-white py-12"></div>
        <div className="container mx-auto px-4"></div>
          <div className="grid md:grid-cols-2 gap-8"></div>
            <div></div>
              <h3 className="text-2xl font-bold mb-6 text-red-400">ZionTech Group</h3>
              <p className="text-gray-300 mb-6"></p>
                Your trusted cybersecurity partner. We help businesses protect their digital assets 
                with comprehensive security solutions and expert guidance.
              </p>
              <div className="flex space-x-4"></div>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300"></a>
                  <Globe className="h-6 w-6" />
                </a>
                </div>
            </div>
            
            <div></div>
              <h3 className="text-xl font-semibold mb-6 text-red-400">Contact Information</h3>
              <div className="space-y-4"></div>
                <div className="flex items-center gap-3"></div>
                  <Phone className="h-5 w-5 text-red-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-3"></div>
                  <Mail className="h-5 w-5 text-red-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3"></div>
                  <MapPin className="h-5 w-5 text-red-400" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
                </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">;
            <p>&copy; 2024 ZionTech Group. All rights reserved. | <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">ziontechgroup.com</a>
                </p>
          </div>
                </div>
      </div>
                </div>
  )
}
export default CybersecurityServicesPage
}
                </div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div>