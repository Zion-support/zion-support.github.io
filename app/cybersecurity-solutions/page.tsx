<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  ArrowRight, 
  Home, 
  Search, 
  AlertTriangle, 
  Users, 
  Star, 
  Shield, 
  Database, 
  CheckCircle, 
  Brain, 
  Lock, 
  Activity, 
  FileText, 
  Eye 
} from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-a070

const CybersecuritySolutions = () => {
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];

  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const capabilities: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];
=======
import { Eye, AlertTriangle, Users, Database, Check } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1

export default function CybersecuritySolutionsPage() {
  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive security audits to identify vulnerabilities and assess your current security posture",
      icon: <Eye className="w-8 h-8" />,
      features: ["Vulnerability scanning", "Penetration testing", "Risk assessment", "Compliance audit"],
      price: "From $2,499/assessment",
    },
    {
      title: "Threat Detection",
      description: "Advanced threat detection and response systems to identify and neutralize security threats in real-time",
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ["AI-powered detection", "Real-time monitoring", "Automated response", "Threat intelligence"],
      price: "From $1,999/month",
    },
    {
      title: "Identity Management",
      description: "Secure identity and access management solutions to control user access and prevent unauthorized access",
      icon: <Users className="w-8 h-8" />,
      features: ["Multi-factor authentication", "Single sign-on", "Access governance", "Privileged access"],
      price: "From $1,299/month",
    },
    {
      title: "Data Protection",
      description: "Comprehensive data protection solutions to secure sensitive information and ensure compliance",
      icon: <Database className="w-8 h-8" />,
      features: ["Data encryption", "Backup security", "Data loss prevention", "Compliance monitoring"],
      price: "From $1,799/month",
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$2,999",
      period: "/month",
      description: "Basic security protection for small to medium businesses",
      features: [
        "Security assessment",
        "Basic threat monitoring",
        "Email security",
        "Firewall management",
        "Standard support",
        "Monthly reports"
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "/month",
      description: "Advanced security solutions for growing businesses",
      features: [
        "Comprehensive security assessment",
        "Advanced threat detection",
        "Identity management",
        "Data protection",
        "Priority support",
        "Weekly reports",
        "Incident response",
        "Security training"
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      description: "Complete security suite for large organizations",
      features: [
        "Full security audit",
        "AI-powered threat detection",
        "Advanced identity management",
        "Comprehensive data protection",
        "24/7 dedicated support",
        "Real-time reporting",
        "Custom security policies",
        "Dedicated security team",
        "Compliance management"
      ],
      popular: false,
    }
  ];
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-6053

<<<<<<< HEAD
export default function CybersecuritySolutionsPage() {
<<<<<<< HEAD
  const capabilities = [
    {
      title: "AI-Powered Security",
      description: "Advanced threat detection and prevention using artificial intelligence",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Real-time Monitoring",
      description: "24/7 security monitoring and incident response",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with continuous verification and least privilege access",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and incident response to protect your business",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Compliance Ready",
      description: "Meet industry compliance requirements including GDPR, HIPAA, SOX, and PCI DSS",
      icon: <FileText className="w-6 h-6" />
    }
  ];
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business from threats and ensure compliance." />
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity solutions solutions by Zion Tech Group" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
      </Helmet>
<<<<<<< HEAD

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

<<<<<<< HEAD
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">Advanced Cybersecurity Solutions</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              Cybersecurity Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Protect your business with our comprehensive cybersecurity solutions. From AI-powered threat detection
            to zero trust architecture, we provide enterprise-grade security that adapts to evolving threats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Shield className="w-5 h-5" />}
            >
              Get Protected
            </FuturisticButton>
            <FuturisticButton
              href="#services"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Solutions
            </FuturisticButton>
          </div>
=======
      
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your business with our comprehensive cybersecurity solutions designed to defend against evolving threats.
          </p>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-cyan-400 font-semibold">{service.price}</div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Our Cybersecurity Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our advanced security technologies and expert team provide comprehensive protection against the most sophisticated cyber threats
=======
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`relative group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-red-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
=======
        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-cyan-500' : 'border-white/20'
              }`}>
                <div className="text-center mb-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <div className="text-gray-300">{plan.period}</div>
                  <p className="text-gray-300 mt-4">{plan.description}</p>
                </div>
<<<<<<< HEAD

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
=======
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD

                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "#contact"}
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations are using our cybersecurity solutions to protect their critical assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't wait for a breach to happen. Protect your organization with our comprehensive cybersecurity solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Shield className="w-5 h-5" />}
              >
                Get Protected Now
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Schedule Security Audit
              </FuturisticButton>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Free security assessment • Custom solutions • 24/7 support</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
=======
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
    </div>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional cybersecurity solutions services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced cybersecurity solutions solutions. 
              Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
  );
<<<<<<< HEAD
};

export default CybersecuritySolutions;
=======
import React from 'react';';';
import {Helmet}}from 'react-helmet-async';';'
;
const CybersecuritySolutionsPage: React.FC = () => {,
  return(<>)
      <Helmet />
<title>Cybersecurity Solutions - Zion Tech Group</title>
<meta name="description" content="Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and compliance management." />"
<meta name="keywords" content="cybersecurity solutions, threat detection, vulnerability assessment, security monitoring, compliance management, data protection" /></Helmet>"
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
<div className="container mx-auto px-4 py-16">"
<div className="text-center mb-16">"
<h1 className="text-5xl font-bold text-white mb-6">Cybersecurity Solutions;</h1></h1>"
<p className="text-xl text-gray-300 max-w-3xl mx-auto">Protect your organization with comprehensive cybersecurity solutions including;</p>"
              threat detection, vulnerability assessment, and 24/7 security monitoring.
            </p></div>
</div></section>
<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16">,</div>"
<div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">"
<h3 className="text-2xl font-bold text-cyan-400 mb-4">Threat Detection</h3>"
<p className="text-gray-300 mb-4">Advanced threat detection systems to identify and respond to security threats in real-time.</p></p>"
<ul className="text-sm text-gray-400 space-y-2">"
<li>• Real-time monitoring</li>
<li>• Behavioral analysis</li>
<li>• Threat intelligence</li>
<li>• Automated response</li></ul>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">"
<h3 className="text-2xl font-bold text-cyan-400 mb-4">Vulnerability Assessment</h3>"
<p className="text-gray-300 mb-4">Comprehensive vulnerability scanning and assessment to identify security weaknesses.</p></p>"
<ul className="text-sm text-gray-400 space-y-2">"
<li>• Network scanning</li>
<li>• Penetration testing</li>
<li>• Code analysis</li>
<li>• Risk prioritization</li></ul>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">"
<h3 className="text-2xl font-bold text-cyan-400 mb-4">Security Monitoring</h3>"
<p className="text-gray-300 mb-4">24/7 security operations center (SOC) monitoring and incident response.</p></p>"
<ul className="text-sm text-gray-400 space-y-2">"
<li>• 24/7 monitoring</li>
<li>• Incident response</li>
<li>• Log analysis</li>
<li>• Threat hunting</li></ul>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">"
<h3 className="text-2xl font-bold text-cyan-400 mb-4">Compliance Management</h3>"
<p className="text-gray-300 mb-4">Ensure compliance with industry regulations and security standards.</p></p>"
<ul className="text-sm text-gray-400 space-y-2">"
<li>• GDPR compliance</li>
<li>• HIPAA compliance</li>
<li>• SOX compliance</li>
<li>• Audit preparation</li></ul>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">"
<h3 className="text-2xl font-bold text-cyan-400 mb-4">Data Protection</h3>"
<p className="text-gray-300 mb-4">Advanced data protection and encryption solutions for sensitive information.</p></p>"
<ul className="text-sm text-gray-400 space-y-2">"
<li>• Data encryption</li>
<li>• Access controls</li>
<li>• Data loss prevention</li>
<li>• Backup solutions</li></ul>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">"
<h3 className="text-2xl font-bold text-cyan-400 mb-4">Security Training</h3>"
<p className="text-gray-300 mb-4">Comprehensive security awareness training for your employees.</p></p>"
<ul className="text-sm text-gray-400 space-y-2">"
<li>• Phishing simulation</li>
<li>• Security awareness</li>
<li>• Best practices</li>
<li>• Incident reporting</li></ul>
</div></div>
<div className="text-center">"
<button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">,</button>"
              Secure Your Organization;
            </button></div>
</div></div>
</>
  );};

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
<div className="max-w-4xl mx-auto text-center">"
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">"
            Secure Your Business
          </h2>
<p className="text-xl text-gray-300 mb-8">"
            Get started with our comprehensive cybersecurity solutions.
          </p>
<button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">"
<ArrowRight className="w-5 h-5 mr-2" />"
            Get Started
          </button></div>
</section>
<Footer /></div>
  )
}
;
export default CybersecuritySolutionsPage;
>>>>>>> cursor/delete-records-a75e
=======
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'border border-white/20 text-white hover:bg-white/10'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
