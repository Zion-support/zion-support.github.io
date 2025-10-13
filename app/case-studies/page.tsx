import { ArrowRight, Star, Check, Users, TrendingUp, Award, Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      client: "TechStart Inc.",
      industry: "E-commerce",
      challenge: "Legacy platform struggling with scalability and performance issues",
      solution: "Complete platform migration to modern cloud infrastructure with AI-powered analytics",
      results: [
        "300% increase in page load speed",
        "150% boost in conversion rates",
        "99.9% uptime achieved",
        "50% reduction in operational costs"
      ],
      technologies: ["React", "Node.js", "AWS", "AI Analytics"],
      duration: "6 months",
      team: "8 developers",
      rating: 5,
      testimonial: "Zion Tech Group transformed our entire e-commerce platform. The results exceeded our expectations and we've seen incredible growth since the launch.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc."
    },
    {
      title: "AI-Powered Customer Service Automation",
      client: "Global Finance Corp",
      industry: "Financial Services",
      challenge: "High customer service costs and inconsistent response times",
      solution: "Implemented AI chatbots and automated workflows with 24/7 support",
      results: [
        "80% reduction in response time",
        "60% decrease in support costs",
        "95% customer satisfaction rate",
        "24/7 multilingual support"
      ],
      technologies: ["AI/ML", "Natural Language Processing", "Cloud Infrastructure"],
      duration: "4 months",
      team: "6 developers",
      rating: 5,
      testimonial: "The AI solution has revolutionized our customer service. We can now handle 10x more inquiries with better quality responses.",
      author: "Michael Chen",
      role: "CTO, Global Finance Corp"
    },
    {
      title: "5G Network Infrastructure Deployment",
      client: "Smart City Solutions",
      industry: "Smart Cities",
      challenge: "Deploying 5G infrastructure across multiple city districts",
      solution: "Complete 5G network design and implementation with IoT integration",
      results: [
        "10x faster data speeds",
        "99.9% network reliability",
        "50,000+ connected devices",
        "Real-time data analytics"
      ],
      technologies: ["5G", "IoT", "Edge Computing", "Data Analytics"],
      duration: "12 months",
      team: "15 engineers",
      rating: 5,
      testimonial: "Zion Tech Group delivered a world-class 5G infrastructure that has transformed our city's connectivity and enabled countless smart city applications.",
      author: "Emily Rodriguez",
      role: "City Technology Director"
    },
    {
      title: "Cybersecurity Enhancement Program",
      client: "Healthcare Plus",
      industry: "Healthcare",
      challenge: "Strengthening security posture to meet HIPAA compliance requirements",
      solution: "Comprehensive security audit and implementation of advanced threat protection",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security breaches",
        "Real-time threat monitoring",
        "Automated incident response"
      ],
      technologies: ["Cybersecurity", "AI Threat Detection", "Compliance Management"],
      duration: "3 months",
      team: "5 security experts",
      rating: 5,
      testimonial: "The security enhancements have given us complete peace of mind. We're now fully compliant and protected against evolving threats.",
      author: "Dr. James Wilson",
      role: "IT Director, Healthcare Plus"
    },
    {
      title: "Data Analytics Platform Development",
      client: "Retail Analytics Co.",
      industry: "Retail",
      challenge: "Creating a unified analytics platform for multiple retail locations",
      solution: "Custom analytics platform with real-time reporting and predictive insights",
      results: [
        "Real-time analytics dashboard",
        "40% improvement in inventory management",
        "25% increase in sales",
        "Predictive demand forecasting"
      ],
      technologies: ["Data Analytics", "Machine Learning", "Cloud Computing"],
      duration: "5 months",
      team: "7 data scientists",
      rating: 5,
      testimonial: "The analytics platform has transformed how we understand our business. We can now make data-driven decisions that directly impact our bottom line.",
      author: "Lisa Thompson",
      role: "VP of Operations, Retail Analytics Co."
    },
    {
      title: "Cloud Migration and Optimization",
      client: "Manufacturing Solutions Ltd",
      industry: "Manufacturing",
      challenge: "Migrating legacy systems to cloud and optimizing operations",
      solution: "Complete cloud migration with process automation and monitoring",
      results: [
        "70% reduction in IT costs",
        "99.9% system availability",
        "Automated backup and recovery",
        "Scalable infrastructure"
      ],
      technologies: ["Cloud Migration", "DevOps", "Automation"],
      duration: "8 months",
      team: "10 engineers",
      rating: 5,
      testimonial: "The cloud migration was seamless and the cost savings have been remarkable. Our systems are now more reliable and scalable than ever.",
      author: "Robert Davis",
      role: "IT Manager, Manufacturing Solutions Ltd"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Transformations</title>
        <meta
          name="description"
          content="Explore our successful projects and client transformations across various industries. See how we've helped businesses achieve their goals with cutting-edge technology solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, client transformations, AI solutions, cloud migration, cybersecurity, 5G implementation, data analytics"
        />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Explore our successful projects and client transformations across various industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Star className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">100+ Successful Projects</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Case
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Studies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how we've transformed businesses across various industries with our cutting-edge technology solutions. 
              From AI implementations to cloud migrations, see the real impact of our work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Our Services
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped businesses achieve their goals with innovative technology solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">{study.industry}</span>
                      </div>
                      <div className="flex items-center">
                        {[...Array(study.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="mb-4">
                      <p className="text-cyan-400 font-semibold">{study.client}</p>
                      <p className="text-sm text-gray-400">{study.duration} • {study.team}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                      
                      <h4 className="text-white font-semibold mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm mb-3">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-white/20 pt-4">
                      <p className="text-gray-300 italic mb-3">"{study.testimonial}"</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-semibold">{study.author}</p>
                          <p className="text-sm text-gray-400">{study.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the ranks of successful businesses that have transformed their operations with our technology solutions. 
              Let's discuss how we can help you achieve your goals.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Our Services
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}