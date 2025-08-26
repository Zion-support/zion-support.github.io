<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Globe, 
  Shield, 
  Heart, 
  Zap,
  Award,
  BookOpen,
  Coffee,
  Home,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function Careers() {
  const [activeTab, setActiveTab] = useState('engineering');

  const jobs = {
    engineering: [
      {
        title: "Senior Frontend Engineer",
        location: "Remote",
        type: "Full-time",
        department: "Engineering",
        description: "Join our frontend team to build beautiful, responsive, and accessible user interfaces for our AI-powered marketplace."
      },
      {
        title: "AI Research Engineer",
        location: "San Francisco, CA",
        type: "Full-time",
        department: "Engineering",
        description: "Work on cutting-edge AI technologies to power our matching algorithms and recommendation systems."
      },
      {
        title: "Full Stack Developer",
        location: "Remote",
        type: "Full-time",
        department: "Engineering",
        description: "Develop end-to-end features across our platform, working with modern technologies like React, Node.js, and PostgreSQL."
      }
    ],
    product: [
      {
        title: "Product Manager",
        location: "New York, NY",
        type: "Full-time",
        department: "Product",
        description: "Lead product development initiatives to enhance our marketplace experience for both talent and clients."
      },
      {
        title: "UX/UI Designer",
        location: "Remote",
        type: "Full-time",
        department: "Product",
        description: "Create intuitive and engaging user experiences that make complex technology accessible to all users."
      }
    ],
    marketing: [
      {
        title: "Growth Marketing Manager",
        location: "Remote",
        type: "Full-time",
        department: "Marketing",
        description: "Drive user acquisition and engagement strategies across multiple channels to grow our marketplace."
      },
      {
        title: "Content Strategist",
        location: "London, UK",
        type: "Full-time",
        department: "Marketing",
        description: "Develop compelling content that educates and inspires our audience about the future of AI and technology."
      }
    ],
    operations: [
      {
        title: "Community Manager",
        location: "Remote",
        type: "Full-time",
        department: "Operations",
        description: "Build and nurture our growing community of AI specialists, developers, and tech enthusiasts."
      },
      {
        title: "Talent Acquisition Specialist",
        location: "Remote",
        type: "Full-time",
        department: "Operations",
        description: "Help connect the right talent with the right opportunities on our platform through personalized matching."
      }
    ]
  };

  const benefits = [
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours to support your productivity and work-life balance.",
      icon: Home
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs to keep you healthy and happy.",
      icon: Heart
    },
    {
      title: "Learning & Growth",
      description: "Continuous learning opportunities, conference attendance, and career development programs.",
      icon: BookOpen
    },
    {
      title: "Team & Culture",
      description: "Collaborative environment with regular team events, hackathons, and innovation challenges.",
      icon: Users
    },
    {
      title: "Global Impact",
      description: "Work on technology that connects people worldwide and drives innovation across industries.",
      icon: Globe
    },
    {
      title: "Competitive Benefits",
      description: "Competitive salary, equity, and retirement benefits to reward your contributions.",
      icon: Shield
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace new technologies to solve complex challenges.",
      icon: Zap
    },
    {
      title: "Customer Success",
      description: "Everything we do is focused on helping our customers achieve their goals.",
      icon: Award
    },
    {
      title: "Collaboration",
      description: "We believe the best solutions come from working together and sharing knowledge.",
      icon: Users
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our business practices.",
      icon: Shield
    }
  ];

  const tabs = [
    { id: 'engineering', label: 'Engineering', count: jobs.engineering.length },
    { id: 'product', label: 'Product', count: jobs.product.length },
    { id: 'marketing', label: 'Marketing', count: jobs.marketing.length },
    { id: 'operations', label: 'Operations', count: jobs.operations.length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
              Help us build the future of AI and technology. Join a team of innovators, 
              problem-solvers, and visionaries who are transforming how businesses connect and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
              >
                View Open Positions
              </Link>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
                Learn About Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20 text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We're committed to creating an environment where you can thrive, grow, and make a real impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Find the perfect role that matches your skills, passion, and career goals.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-zion-blue-light/10 text-zion-slate-light hover:bg-zion-blue-light/20'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobs[activeTab as keyof typeof jobs].map((job, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-zion-slate-light text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                    {job.department}
                  </span>
                </div>
                <p className="text-zion-slate-light mb-4">{job.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? We're always looking for talented individuals 
            who share our passion for innovation and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
            >
              Contact Us
            </Link>
            <button className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
              Send Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
=======
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Careers() {
    // Sample job listings
    const jobs = {
        engineering: [
            {
                title: "Senior Frontend Engineer",
                location: "Remote",
                type: "Full-time",
                department: "Engineering",
                description: "Join our frontend team to build beautiful, responsive, and accessible user interfaces for our AI-powered marketplace."
            },
            {
                title: "AI Research Engineer",
                location: "San Francisco, CA",
                type: "Full-time",
                department: "Engineering",
                description: "Work on cutting-edge AI technologies to power our matching algorithms and recommendation systems."
            },
            {
                title: "Full Stack Developer",
                location: "Remote",
                type: "Full-time",
                department: "Engineering",
                description: "Develop end-to-end features across our platform, working with modern technologies like React, Node.js, and PostgreSQL."
            }
        ],
        product: [
            {
                title: "Product Manager",
                location: "New York, NY",
                type: "Full-time",
                department: "Product",
                description: "Lead product development initiatives to enhance our marketplace experience for both talent and clients."
            },
            {
                title: "UX/UI Designer",
                location: "Remote",
                type: "Full-time",
                department: "Product",
                description: "Create intuitive and engaging user experiences that make complex technology accessible to all users."
            }
        ],
        marketing: [
            {
                title: "Growth Marketing Manager",
                location: "Remote",
                type: "Full-time",
                department: "Marketing",
                description: "Drive user acquisition and engagement strategies across multiple channels to grow our marketplace."
            },
            {
                title: "Content Strategist",
                location: "London, UK",
                type: "Full-time",
                department: "Marketing",
                description: "Develop compelling content that educates and inspires our audience about the future of AI and technology."
            }
        ],
        operations: [
            {
                title: "Community Manager",
                location: "Remote",
                type: "Full-time",
                department: "Operations",
                description: "Build and nurture our growing community of AI specialists, developers, and tech enthusiasts."
            },
            {
                title: "Talent Acquisition Specialist",
                location: "Remote",
                type: "Full-time",
                department: "Operations",
                description: "Help connect the right talent with the right opportunities on our platform through personalized matching."
            }
        ]
    };
    // Benefits list
    const benefits = [
        {
            title: "Flexible Work",
            description: "Remote-first culture with flexible hours to support your productivity and work-life balance.",
            icon: (<svg className="w-10 h-10 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>)
        },
        {
            title: "Health & Wellness",
            description: "Comprehensive health insurance and wellness programs to keep you at your best.",
            icon: (<svg className="w-10 h-10 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>)
        },
        {
            title: "Continuous Learning",
            description: "Education stipends and dedicated learning time to help you grow professionally.",
            icon: (<svg className="w-10 h-10 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>)
        },
        {
            title: "Competitive Compensation",
            description: "Salary packages that recognize your value, plus equity options to share in our success.",
            icon: (<svg className="w-10 h-10 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>)
        }
    ];
    return (<>
      <SEO title="Careers at Zion - Join Our Team" description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform." keywords="Zion careers, AI jobs, tech careers, remote work, startup jobs" canonical="https://ziontechgroup.com/careers"/>
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
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600" alt="Team collaboration" className="object-cover w-full h-full"/>
            </div>
          </div>
          
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (<div key={index} className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                  <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </div>))}
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
              
              {Object.entries(jobs).map(([department, jobList]) => (<TabsContent key={department} value={department} className="space-y-6">
                  {jobList.map((job, index) => (<Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors">
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
                    </Card>))}
                </TabsContent>))}
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
    </>);
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
}
