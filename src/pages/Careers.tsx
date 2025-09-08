import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart, 
  Zap, 
  Brain,
  Shield,
  Cloud,
  Code,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Award} from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120k - $180k",
      description: "Join our AI team to build cutting-edge machine learning models and algorithms that power our marketplace recommendations.",
      requirements: ["5+ years ML/AI experience", "Python, TensorFlow, PyTorch", "PhD in Computer Science preferred"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$90k - $140k",
      description: "Build beautiful, responsive user interfaces using React and modern web technologies.",
      requirements: ["3+ years React experience", "TypeScript, Tailwind CSS", "Performance optimization skills"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "Remote / Austin",
      type: "Full-time",
      salary: "$100k - $150k",
      description: "Drive product strategy and execution for our marketplace platform.",
      requirements: ["5+ years PM experience", "Marketplace/B2B experience", "Data-driven decision making"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Seattle",
      type: "Full-time",
      salary: "$110k - $160k",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: ["AWS/Azure experience", "Kubernetes, Docker", "CI/CD expertise"],
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote / Los Angeles",
      type: "Full-time",
      salary: "$70k - $100k",
      description: "Develop and execute marketing campaigns to grow our user base and brand awareness.",
      requirements: ["3+ years marketing experience", "Digital marketing skills", "Analytics and reporting"],
      posted: "1 week ago"
    },
    {
      id: 6,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / Chicago",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "Ensure customer satisfaction and help users maximize value from our platform.",
      requirements: ["3+ years CS experience", "Strong communication skills", "Problem-solving mindset"],
      posted: "4 days ago"
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Learning & Growth',
      description: 'Professional development budget, conferences, and certification programs'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation Time',
      description: '20% time for personal projects and innovation initiatives'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Team',
      description: 'Work with talented professionals from around the world'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Events',
      description: 'Regular team building, hackathons, and social events'
    }
  ];
  const values = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technology to solve complex problems.'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client service.'
    },
    {
      title: 'Collaboration',
      description: 'We believe the best solutions come from diverse teams working together.'
    },
    {
      title: 'Impact',
      description: 'We focus on creating meaningful solutions that make a real difference.'
    }
  ];
  const contactInfo = [
    { icon: Mail, label: "Email", value: "careers@ziontechgroup.com", href: "mailto:careers@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPinIcon, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" }
  ];

  return (
    <>
      <SEO 
        title="Careers - Join Zion Tech Group" 
        description="Join our team and help build the future of AI and technology marketplace. Explore open positions and learn about our culture." 
        keywords="careers, jobs, Zion Tech Group, AI jobs, tech jobs, remote jobs"
        canonical="https://ziontechgroup.com/careers"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <GradientHeading>Join Our Team</GradientHeading>
            <p className="mt-6 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Help us build the world's first free marketplace dedicated to high-tech and artificial intelligence. 
              We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-zion-cyan bg-zion-cyan/10">
                Remote First
              </Badge>
              <Badge variant="secondary" className="text-zion-purple bg-zion-purple/10">
                AI & Tech
              </Badge>
              <Badge variant="secondary" className="text-zion-cyan bg-zion-cyan/10">
                Growth Mindset
              </Badge>
              <Badge variant="secondary" className="text-zion-purple bg-zion-purple/10">
                Innovation
              </Badge>
            </div>
          </div>

          {/* Company Culture */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-zion-cyan">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-zion-slate-light">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <Card key={position.id} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-cyan/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-zion-cyan">{position.title}</CardTitle>
                        <CardDescription className="text-zion-slate-light mt-2">
                          {position.department} • {position.location}
                        </CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-zion-purple text-zion-purple">
                          {position.type}
                        </Badge>
                        <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                          {position.salary}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zion-slate-light mb-4">{position.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4">
                        {position.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Posted {position.posted}
                        </span>
                      </div>
                      <Button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-20 text-center">
            <Card className="bg-zion-blue-dark border-zion-cyan/30 text-white max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-zion-cyan">Don't See the Right Fit?</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-zion-purple hover:bg-zion-purple/80 text-white">
                  Send General Application
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <section className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light max-w-2xl mx-auto">
              <p className="text-zion-slate-light mb-4">
                Questions about working at Zion Tech Group? We'd love to hear from you.
              </p>
              <div className="space-y-2 text-zion-slate-light">
                <p><strong>Email:</strong> careers@ziontechgroup.com</p>
                <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/company/zion-tech-group" className="text-zion-cyan hover:underline">Follow us on LinkedIn</a></p>
                <p><strong>Location:</strong> Remote-first, with offices in major tech hubs</p>
              </div>
            </div>
          </section>
    <>
      <SEO
        title="Careers at Zion - Join Our Team"
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform."
        keywords="Zion careers, AI jobs, tech careers, remote work, startup jobs"
        canonical="https://ziontechgroup.com/careers"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Join Our Team</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Help us build the future of AI and technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Work at Zion?</h2>
              <p className="text-zion-slate-light text-lg mb-6">
                At Zion, we're not just building a marketplace; we're creating a new paradigm for how AI and 
                technology are accessed, shared, and implemented globally.
              </p>
              <p className="text-zion-slate-light text-lg mb-6">
                Our team is passionate about democratizing access to cutting-edge technology and connecting 
                talented individuals with meaningful opportunities. We value innovation, collaboration, and 
                impact in everything we do.
              </p>
              <p className="text-zion-slate-light text-lg">
                If you're excited about shaping the future of AI and technology while working in a dynamic, 
                remote-first environment with a mission-driven team, we'd love to meet you.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                  <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
            
            <Tabs defaultValue="engineering" className="w-full">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light mb-8 w-full flex flex-wrap justify-center">
                <TabsTrigger value="engineering" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Engineering</TabsTrigger>
                <TabsTrigger value="product" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Product</TabsTrigger>
                <TabsTrigger value="marketing" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Marketing</TabsTrigger>
                <TabsTrigger value="operations" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Operations</TabsTrigger>
              </TabsList>
              
              {Object.entries(jobs).map(([department, jobList]) => (
                <TabsContent key={department} value={department} className="space-y-6">
                  {jobList.map((job, index) => (
                    <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.location}</span>
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.type}</span>
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.department}</span>
                            </div>
                            <p className="text-zion-slate-light mb-4">{job.description}</p>
                          </div>
                          <Button className="w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                            Apply Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Don't see the right position?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about AI and technology. 
              Send us your resume and let's start a conversation.
            </p>
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
              Send General Application
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
