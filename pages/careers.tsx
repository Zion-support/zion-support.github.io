import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Heart,
  Lightbulb,
  Shield,
  Zap,
  Globe,
  Award,
  Coffee,
  Laptop,
  Calendar,
  DollarSign,
  GraduationCap
} from 'lucide-react';

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Above-market compensation with performance bonuses"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance"
    },
    {
      icon: Laptop,
      title: "Remote Work",
      description: "Flexible remote work options and home office stipend"
    },
    {
      icon: Calendar,
      title: "Flexible PTO",
      description: "Unlimited paid time off and flexible scheduling"
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "$2,000 annual budget for courses, conferences, and books"
    },
    {
      icon: Coffee,
      title: "Team Events",
      description: "Regular team building activities and company retreats"
    }
  ];

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "5+ years",
      description: "We're looking for a passionate full-stack developer to join our engineering team and help build scalable web applications.",
      requirements: [
        "5+ years of experience with React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong understanding of database design and optimization",
        "Experience with CI/CD pipelines and DevOps practices"
      ],
      id: "senior-fullstack-developer"
    },
    {
      title: "AI/ML Engineer",
      department: "AI & Data",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Join our AI team to develop cutting-edge machine learning models and AI-powered solutions for our clients.",
      requirements: [
        "3+ years of experience in machine learning and AI development",
        "Proficiency in Python, TensorFlow, and PyTorch",
        "Experience with cloud ML platforms (AWS SageMaker, Azure ML)",
        "Strong background in statistics and data science"
      ],
      id: "ai-ml-engineer"
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Help us build and maintain robust, scalable infrastructure that powers our applications and services.",
      requirements: [
        "4+ years of experience with cloud infrastructure (AWS, Azure, or GCP)",
        "Proficiency with Docker, Kubernetes, and containerization",
        "Experience with Infrastructure as Code (Terraform, CloudFormation)",
        "Strong knowledge of monitoring and logging tools"
      ],
      id: "devops-engineer"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Create beautiful, intuitive user experiences that delight our clients and their customers.",
      requirements: [
        "3+ years of experience in UX/UI design",
        "Proficiency in Figma, Sketch, or Adobe Creative Suite",
        "Experience with user research and usability testing",
        "Strong portfolio showcasing design thinking and problem-solving"
      ],
      id: "ux-ui-designer"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Lead product strategy and development, working closely with engineering and design teams to deliver exceptional products.",
      requirements: [
        "4+ years of product management experience",
        "Strong analytical and problem-solving skills",
        "Experience with agile development methodologies",
        "Excellent communication and leadership abilities"
      ],
      id: "product-manager"
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Bridge the gap between our technical solutions and client needs, helping to close deals and ensure customer success.",
      requirements: [
        "3+ years of experience in technical sales or sales engineering",
        "Strong technical background in software development or IT",
        "Excellent presentation and communication skills",
        "Experience with enterprise software sales"
      ],
      id: "sales-engineer"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in everything we do"
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We strive for excellence in every project and interaction"
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals at Zion Tech Group. Explore career opportunities in technology, engineering, and innovation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Be part of a dynamic team that's shaping the future of technology. 
                We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#open-positions">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    View Open Positions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer more than just a job - we offer a career path with growth opportunities, 
                amazing benefits, and a supportive work environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our current job openings and find the perfect role for you.
              </p>
            </div>
            
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{position.type}</span>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">
                          {position.experience}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{position.description}</p>
                    </div>
                    <div className="lg:ml-8">
                      <Link href={`/careers/${position.id}`}>
                        <Button className="w-full lg:w-auto">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
                <p className="text-xl text-blue-100 mb-8">
                  At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. 
                  We believe that great products come from great teams.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-yellow-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Recognition & Growth</h3>
                      <p className="text-blue-100">We celebrate achievements and provide clear career advancement paths.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-yellow-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Diverse & Inclusive</h3>
                      <p className="text-blue-100">We value diversity and create an inclusive environment for everyone.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Lightbulb className="w-6 h-6 text-yellow-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Innovation First</h3>
                      <p className="text-blue-100">We encourage experimentation and support new ideas.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Join Our Team</h3>
                <p className="text-blue-100 mb-6">
                  Ready to start your journey with us? We'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <Link href="/contact">
                    <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                      Get In Touch
                    </Button>
                  </Link>
                  <Link href="#open-positions">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-600">
                      View All Positions
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Careers;