import React from 'react';
<<<<<<< HEAD:src/components/home/ContactInfo.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FuturisticCard, NeonText } from "@/components/ui/FuturisticBackground";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Clock, 
  Users, 
  Shield, 
  Zap,
  ExternalLink
} from "lucide-react";

export function ContactInfo() {
  const contactMethods = [
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: <Phone className="h-8 w-8 text-zion-cyan" />,
      value: "+1 302 464 0950",
      action: "tel:+13024640950",
      badge: "24/7 Available",
      color: "#00ffff"
    },
    {
      title: "Email Support",
      description: "Get detailed responses to your inquiries",
      icon: <Mail className="h-8 w-8 text-zion-purple" />,
      value: "kleber@ziontechgroup.com",
      action: "mailto:kleber@ziontechgroup.com",
      badge: "Response < 2hrs",
      color: "#8c15e9"
    },
    {
      title: "Office Location",
      description: "Visit our headquarters for in-person meetings",
      icon: <MapPin className="h-8 w-8 text-zion-cyan" />,
      value: "364 E Main St STE 1008, Middletown DE 19709",
      action: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
      badge: "Open Mon-Fri",
      color: "#00ffff"
    },
    {
      title: "Main Website",
      description: "Explore our complete company portfolio",
      icon: <Globe className="h-8 w-8 text-zion-purple" />,
      value: "ziontechgroup.com",
      action: "https://ziontechgroup.com",
      badge: "Official Site",
      color: "#8c15e9"
    }
  ];

  const companyStats = [
    {
      label: "Years Experience",
      value: "10+",
      icon: <Clock className="h-6 w-6 text-zion-cyan" />
    },
    {
      label: "Team Members",
      value: "50+",
      icon: <Users className="h-6 w-6 text-zion-purple" />
    },
    {
      label: "Projects Completed",
      value: "500+",
      icon: <Shield className="h-6 w-6 text-zion-cyan" />
    },
    {
      label: "Client Satisfaction",
      value: "98%",
      icon: <Zap className="h-6 w-6 text-zion-purple" />
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-blue-dark/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            <NeonText color="#00ffff" glowIntensity="high">
              Get In Touch
            </NeonText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Our team of experts is here to help you succeed with cutting-edge technology solutions.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <FuturisticCard 
              key={index} 
              glowColor={method.color}
              intensity="medium"
              className="group hover:scale-105 transition-transform duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-black/20 backdrop-blur-sm">
                    {method.icon}
                  </div>
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    {method.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {method.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {method.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="p-4 bg-black/20 rounded-lg border border-zion-cyan/20">
                  <p className="text-lg font-mono text-zion-cyan break-all">
                    {method.value}
                  </p>
                </div>
                
                <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <a href={method.action} target="_blank" rel="noopener noreferrer">
                    <span>Contact via {method.title.split(' ')[0]}</span>
                    <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </CardContent>
            </FuturisticCard>
          ))}
        </div>

        {/* Company Statistics */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">
            <NeonText color="#ff00ff" glowIntensity="medium">
              Why Choose Zion Tech Group?
            </NeonText>
          </h3>
          <p className="text-muted-foreground">
            Proven track record of delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {companyStats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  <div className="p-2 rounded-lg bg-black/20 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 rounded-2xl p-8 border border-zion-purple/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need a quick consultation or want to discuss a major project, 
              our team is ready to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                <Link to="/request-quote">
                  Request Free Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Link to="/contact">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
            
            {/* Additional contact options */}
            <div className="mt-6 pt-6 border-t border-zion-purple/20">
              <p className="text-sm text-muted-foreground mb-3">
                Prefer to call? We're available 24/7 for urgent matters
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center justify-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="flex items-center justify-center gap-2 text-zion-purple hover:text-zion-purple-light transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  kleber@ziontechgroup.com
                </a>
              </div>
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  MessageSquare,
  ExternalLink,
  Star
} from "lucide-react";
export function ContactInfo() {
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Contact our experts today for a free consultation.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Phone className="h-5 w-5 text-zion-cyan" />
                  Contact Details
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-zion-purple" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-zion-cyan">+1 302 464 0950</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-zion-purple" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-zion-cyan">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-zion-purple" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-zion-purple" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Website</p>
                    <a
                      href="https://ziontechgroup.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center gap-1"
                    >
                      ziontechgroup.com
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="h-5 w-5 text-zion-cyan" />
                  Business Hours
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  We're available when you need us
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-zion-slate-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-zion-cyan">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-zion-cyan">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-zion-cyan">By Appointment</span>
                  </div>
                  <div className="pt-2 border-t border-zion-blue-light">
                    <div className="flex justify-between">
                      <span className="text-zion-cyan font-medium">24/7 Support</span>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                        Available
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Quick Actions & Services */}
          <div className="space-y-6">
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-zion-cyan" />
                  Quick Actions
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Get started with our most popular services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/request-quote">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                    Request Free Quote
                  </Button>
                </Link>
                <Link to="/comprehensive-services">
                  <Button variant="outline" className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                    View All Services
                  </Button>
                </Link>
                <Link to="/it-onsite-services">
                  <Button variant="outline" className="w-full border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light/10">
                    IT Onsite Services
                  </Button>
                </Link>
                <div className="pt-4 border-t border-zion-blue-light">
                  <p className="text-zion-slate-light text-sm mb-3">Need immediate assistance?</p>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-zion-cyan" />
                    <span className="text-zion-cyan font-medium">Call us now: +1 302 464 0950</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Star className="h-5 w-5 text-zion-cyan" />
                  Why Choose Zion Tech Group?
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  What makes us different from the competition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-zion-slate-light">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>Global reach with local expertise</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>24/7 support and monitoring</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>Certified professionals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>Competitive pricing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>Proven track record</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Join hundreds of satisfied clients who have transformed their businesses with our technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light px-8 py-3">
                  Get Free Consultation
                </Button>
              </Link>
              <a href="tel:+13024640950">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple px-8 py-3">
                  Call Now: +1 302 464 0950
                </Button>
              </a>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ContactInfo.tsx
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}