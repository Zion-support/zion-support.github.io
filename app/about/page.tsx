import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Lightbulb, 
  Heart,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value."
    },
    {
      icon: Shield,
      title: "Security",
      description: "Security is at the core of everything we do. We implement enterprise-grade security measures to protect your data and systems."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring transparent communication and shared success throughout every project."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering high-quality solutions that exceed expectations and drive measurable results."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "15+ years in technology leadership, former CTO at Fortune 500 companies."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Expert in cloud architecture and AI/ML solutions with 12+ years experience."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Security",
      description: "Cybersecurity specialist with certifications in CISSP and CISM."
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      description: "Full-stack developer with expertise in modern web technologies."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are a leading technology company dedicated to transforming businesses through innovative solutions and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We believe that technology should be an enabler, not a barrier, and we work tirelessly to make that vision a reality for our clients.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our team of experts combines deep technical knowledge with business acumen to deliver solutions that not only meet your current needs but also position you for future success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-blue-600 text-white">Innovation</Badge>
                <Badge variant="secondary" className="bg-green-600 text-white">Excellence</Badge>
                <Badge variant="secondary" className="bg-purple-600 text-white">Integrity</Badge>
                <Badge variant="secondary" className="bg-orange-600 text-white">Collaboration</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The experts behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-400 font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm text-center">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}