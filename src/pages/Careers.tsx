<<<<<<< HEAD
=======
import React from 'react';
<<<<<<< HEAD
import { SEO } from '../components/SEO';

const Careers: React.FC = () => {
  return(<>
      <SEO title="Careers - Zion Tech Group" />
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>
          <p className="text-lg text-gray-600">Content coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default Careers;
=======
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Heart, 
  Zap,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead AI initiatives and develop cutting-edge machine learning solutions",
      requirements: [
        "Advanced degree in Computer Science or related field",
        "Experience with TensorFlow, PyTorch, and cloud platforms",
        "Strong background in NLP and computer vision",
        "Experience leading technical teams"
      ]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "3+ years",
      description: "Protect our clients with advanced cybersecurity solutions",
      requirements: [
        "Certifications in CISSP, CEH, or similar",
        "Experience with penetration testing and security audits",
        "Knowledge of compliance frameworks (SOC 2, ISO 27001)",
        "Strong analytical and problem-solving skills"
      ]
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud & Infrastructure",
      location: "Remote / Global",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement scalable cloud solutions for enterprise clients",
      requirements: [
        "Expertise in AWS, Azure, and Google Cloud",
        "Experience with Kubernetes and containerization",
        "Strong understanding of DevOps practices",
        "Excellent communication and client-facing skills"
      ]
    },
    {
      title: "Full Stack Developer",
      department: "Software Development",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      description: "Build modern web applications and digital solutions",
      requirements: [
        "Proficiency in React, Node.js, and modern web technologies",
        "Experience with cloud platforms and databases",
        "Understanding of agile development methodologies",
        "Passion for clean code and user experience"      ]
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Remote First",
      description: "Work from anywhere in the world"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs"
    },
    {
      icon: Zap,
      title: "Learning & Growth",
      description: "Continuous learning opportunities and career development"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Collaborate with talented professionals worldwide"    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We push boundaries and embrace new technologies"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships"
    },
    {
      title: "Impact",
      description: "We create solutions that make a real difference"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future with cutting-edge technology and innovative solutions
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join Zion Tech Group and be part of a team that's transforming businesses 
              through AI, cloud computing, and digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of being part of the Zion Tech Group team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our team and help us build the future of technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {position.department}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {position.experience}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>                </div>
                
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Send Resume
            </Link>
            <Link 
              to="/about"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>        </div>
      </section>
    </div>
  );
}
import React from "react"
const Careers: React.FC = () => {
  return(<>
      <SEO title="Careers - Zion Tech Group"  />"
      <div className="min-h-screen bg-white py-20">"
        <div className="max-w-4xl mx-auto px-4">"
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>"
          <p className="text-lg text-gray-600">Content coming soon...</p>
        </div>
    </>,
  )}

export default Careers;"
,"});,"})","});,"})"
;,"});,"})"
export default function Page() {,"});,"})"
const Careers: React.FC = () => {,"});,"})"
  return (<>;,"});,"})"
      <SEO title="Careers - Zion Tech Group"  />;,"});,"})"
      <div className="min-h-screen bg-white py-20">;,"});,"})"
        <div className="max-w-4xl mx-auto px-4">;,"});,"})"
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>;,"});,"})"
          <p className="text-lg text-gray-600">Content coming soon...</p>;,"});,"})"
        </div>;,"});,"})"
    </>"});,"})"
  );,"});,"});"
};,"});,"})"
export default Careers,"});,"})""
      <div: className="min - h-screen bg-white py-20">","
        <div: className="max - w-4xl mx-auto px-4">","
          <h1: className="text - 4xl font-bold text-gray-900 mb-8">Careers</h1>","
          <p: className="text-lg text-gray-600">Content coming soon...</p>",,,,
export: default Careers
  return (<>
      <SEO title="Careers - Zion Tech Group"  />;"
      <div className="min-h-screen bg-white py-20">;"
        <div className="max-w-4xl mx-auto px-4">,"
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>,"
          <p className="text-lg text-gray-600">Content coming soon...</p>,,
        </div>,
    </>"
export default function Page()   {const Careers: React.FC = () => {",,../components/SEO";&apos;&apos
export default function Page() {}

const Careers: React.FC = () =>  {,
  return (}<>"
      <;<SEO title="&apos;Careers" - Zion Tech Group&apos;       />&apos;"
      <div className="&apos;min-h-screen" bg-white py-20&apos;>&apos,"
        <div className="&apos;max-w-4xl" mx-auto px-4&apos;>&apos,"
          <h1 className="&apos;text-4xl" font-bold text-gray-900 mb-8&apos;>Careers&apos;</h1>"
          <p className="&apos;text-lg" text-gray-600&apos;>Content coming soon...&apos;</p>
    <;</>
"
const Careers: React.FC = () => {"
  return (<>"""
      <SEO title="Careers - Zion Tech Group" /" >"""
      <div className="min-h-screen bg-white py-20">"""
        <div className="max-w-4xl mx-auto px-4">"""
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>"""
const Careers: React.FC = () => {"""
      <SEO title="Careers - Zion Tech Group" /"" >"""
  return (<>""
      <SEO title="Careers - Zion Tech Group" /" >""
      <div className="min-h-screen bg-white py-20">""
        <div className="max-w-4xl mx-auto px-4">""
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>""
          <p className="text-lg text-gray-600">Content coming soon...</p>,,
  )}"
""
}"export default function Careers() { const [activeDepartment, setActiveDepartment] = useState("all") const [searchQuery, setSearchQuery] = useState("") const [selectedLocation, setSelectedLocation] = useState("all")  const departments = []  const locations = []  const jobListings = [], benefits: [",Competitive salary and equityFlexible remote work optionsComprehensive health coverage,Professional development budget" ], posted: "2 days ago", urgent: true } { id: 2, title: "AI Research Scientist", department: "ai-ml", location: "san-francisco", type "Full-time", experience: "3+ years", salary: "$140k - $200k", description: "Research and develop cutting-edge AI algorithms for healthcare, finance, and manufacturing applications.", requirements: [",PhD in Computer Science, Mathematics, or related field,Strong background in machine learning and deep learning,Experience with PyTorch, TensorFlow, or similar frameworks,Published research in top-tier conferences" ], benefits: [",Competitive salary and equityAccess to cutting-edge computing resourcesConference attendance and publication support,Collaboration with leading researchers" ], posted: "1 week ago", urgent: false } { id: 3, title: "Cybersecurity Engineer", department: "cybersecurity", location: "remote", type "Full-time", experience: "4+ years", salary: "$110k - $160k", description: "Design and implement security solutions to protect our infrastructure and customer data.", requirements: [",Experience with security tools and frameworksKnowledge of network security and encryptionExperience with compliance frameworks(SOC2, ISO27001),Familiarity with threat modeling and risk assessment" ], benefits: [",Competitive salary and equityRemote work flexibilitySecurity certifications support,Latest security tools and training" ], posted: "3 days ago", urgent: true } { id: 4, title: "Data Scientist", department: "data-science", location: "new-york", type "Full-time", experience: "2+ years", salary: "$90k - $140k", description: "Analyze complex datasets to extract insights and build predictive models for business applications.", requirements: [",Strong statistical and mathematical backgroundExperience with Python, R, or similar languages,Knowledge of SQL and data warehousing,Experience with machine learning algorithms" ], benefits: [",Competitive salary and equityHybrid work modelData science conference attendance,Access to large-scale datasets" ], posted: "1 week ago", urgent: false } { id: 5, title: "Product Manager", department: "product", location: "remote", type "Full-time", experience: "3+ years", salary: "$100k - $150k", description: "Lead product strategy and development for our AI-powered solutions across different industries.", requirements: [",Experience in B2B SaaS product managementStrong analytical and problem-solving skillsExperience with agile development methodologies,Technical background or ability to work with technical teams" ], benefits: [",Competitive salary and equityRemote work flexibilityProduct management training and certification,Direct impact on company strategy" ], posted: "2 weeks ago", urgent: false } { id: 6, title: "UX/UI Designer", department: "design", location: "london", type "Full-time", experience: "3+ years", salary: "£60k - £90k", description: "Create intuitive and beautiful user experiences for our AI-powered applications.", requirements: [",Strong portfolio demonstrating UX/UI skillsExperience with design tools(Figma, Sketch, etc.),Understanding of user research and testing,Experience with design systems and component libraries" ], benefits: [",Competitive salary and equityHybrid work modelDesign tools and software provided,Creative freedom and innovation focus" ], posted: "1 week ago", urgent: false } ]  const filteredJobs = jobListings.filter(job => { const matchesDepartment = activeDepartment === "all" || job.department === activeDepartment const matchesLocation = selectedLocation === "all" || job.location === selectedLocation const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.description.toLowerCase().includes(searchQuery.toLowerCase()) || job.requirements.some(req => req.toLowerCase().includes(searchQuery.toLowerCase())) return matchesDepartment && matchesLocation && matchesSearch })  const companyValues = []  const benefits = []  const culture = []  return ( <> <SEO title="Careers - Zion Tech Group" description="Join our team of innovators and help shape the future of technology.Explore exciting career opportunities at Zion Tech Group." keywords="careers, jobs, employment, Zion Tech Group careers, technology jobs, AI jobs, cybersecurity careers"/" > {}"" <section className="relative py-20 overflow-hidden">"" <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>"" <div className="container mx-auto px-6 relative z-10">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; animate="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8  }}" className="text-center"" >"" <h1 className="text-5xl md: text-6xl font-bold text-white mb-6"> Join Our{" "}"" <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">"; Mission" </span>" </h1>"" <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">"; Help us build the future of technology.Join a team of innovators, problem-solvers,"; and visionaries who are transforming industries through AI and cutting-edge solutions." </p>"" <div className="mt-8">"" <Link " to="#open-positions" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover: from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"" >"" <Briefcase className="w-5 h-5 mr-2" /" > View Open Positions </Link> </div>" </motion.div>" </div>" </section> {}"" <section className="py-20">"" <div className="container mx-auto px-6">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8  }}" className="text-center mb-16"" >"" <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>"" <p className="text-xl text-gray-300 max-w-3xl mx-auto">" The principles that guide everything we do and the culture we build together." </p>" </motion.div>"" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"> {companyValues.map((value, index) => ( <motion .div" key={value.title}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="text-center"" >"" <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">"" <value .icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" /" >"" <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>"" <p className="text-gray-300 leading-relaxed">{value.description}</p> </div> </motion.div> ))}" </div>" </div>" </section> {}"" <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">"" <div className="container mx-auto px-6">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8  }}" className="text-center mb-16"" >"" <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us?</h2>"" <p className="text-xl text-gray-300 max-w-3xl mx-auto">" We believe in taking care of our team so they can do their best work and grow their careers." </p>" </motion.div>"" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"> {benefits.map((benefit, index) => ( <motion .div" key={benefit.title}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="group"" >"" <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 group-hover: border-cyan-400/50 transition-all duration-300">"" <benefit .icon className="w-12 h-12 text-cyan-400 mb-4" /" >"" <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>"" <p className="text-gray-300 leading-relaxed">{benefit.description}</p> </div> </motion.div> ))}" </div>" </div>" </section> {}"" <section className="py-20">"" <div className="container mx-auto px-6">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8  }}" className="text-center mb-16"" >"" <h2 className="text-4xl font-bold text-white mb-4">Our Culture</h2>"" <p className="text-xl text-gray-300 max-w-3xl mx-auto">" We foster an environment where creativity, collaboration, and innovation thrive." </p>" </motion.div>"" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"> {culture.map((item, index) => ( <motion .div" key={item.title}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="text-center"" >"" <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/20">"" <item .icon className="w-12 h-12 text-purple-400 mx-auto mb-4" /" >"" <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>"" <p className="text-gray-300 leading-relaxed">{item.description}</p> </div> </motion.div> ))}" </div>" </div>" </section> {}"" <section id="open-positions" className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">"" <div className="container mx-auto px-6">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8  }}" className="mb-12"" >"" <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>"" <p className="text-xl text-gray-300">Find the perfect role for your skills and career goals</p>" </motion.div> {}"" <div className="mb-8 space-y-4"> {}"" <div className="relative max-w-md">"" <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /" >" <input " type="text" placeholder="Search jobs..."; value="{searchQuery}" onChange="{(e)" = / / / / /" > setSearchQuery(e.target.value)}" className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20" />" </div> {}"" <div className="flex flex-wrap gap-4"> {}"" <div className="flex flex-wrap gap-2"> {departments.map((dept) => ( <button key="{dept.id}" onClick="{()" =" > setActiveDepartment(dept.id)} className="{"flex" items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${ activeDepartment === dept.id ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-400" : "bg-slate-800/50 border-slate-600/50 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300""}"}">"" <span>{dept.name}</span>"" <span className="text-xs bg-slate-700/50 px-2 py-1 rounded-full"> {dept.count} </span>" </button>"))}" </div> {}"" <div className="flex flex-wrap gap-2"> {locations.map((location) => ( <button key="{location.id}" onClick="{()" =" > setSelectedLocation(location.id)} className="{"flex" items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${ selectedLocation === location.id" ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-400""; : "bg-slate-800/50 border-slate-600/50 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300""}"} >"" <MapPin className="w-4 h-4" /" >"" <span>{location.name}</span>"" <span className="text-xs bg-slate-700/50 px-2 py-1 rounded-full"> {location.count} </span> </button> ))}" </div>" </div>" </div> {}"" <div className="space-y-6"> {filteredJobs.map((job, index) => ( <motion .div" key={job.id}"; initial="{{" opacity: 0, y: 20 }}"; whileInView = "{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="group"" >"" <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 group-hover: border-cyan-400/50 transition-all duration-300"> {}"" <div className="flex flex-col lg: flex-row lg:items-center lg:justify-between mb-4">"" <div className="flex-1">"" <div className="flex items-center gap-3 mb-2">"" <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">"{job.title}" </h3> {job.urgent && ("" <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full border border-red-400/30">" Urgent" </span>")}" </div>"" <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">"" <span className="flex items-center gap-1">"" <Briefcase className="w-4 h-4" /" >"{job.department}" </span>"" <span className="flex items-center gap-1">"" <MapPin className="w-4 h-4" /" >"{locations.find(l => l.id === job.location)?.name}" </span>"" <span className="flex items-center gap-1">"" <Clock className="w-4 h-4" /" >"{job.type}" </span>"" <span className="flex items-center gap-1">"" <Users className="w-4 h-4" /" >"{job.experience}" </span>"" <span className="flex items-center gap-1">"" <DollarSign className="w-4 h-4" /" >" {job.salary}" </span>" </div>" </div>"" <div className="{"mt-4" lg: mt-0">" <Link to={"/careers/${job.id}"}"
"">
  { id: 1, title: "Senior Software Engineer - Full Stack", department: "engineering", location: "remote", type "Full-time", experience: "5+ years", salary: "$120k - $180k", description: "Build scalable web applications and APIs using modern technologies.Lead technical decisions and mentor junior developers.", requirements: [",Strong experience with React, Node.js, and TypeScript,Experience with cloud platforms(AWS, Azure, or GCP),Knowledge of microservices architecture,Experience with CI/CD pipelines and DevOps practices" ], benefits: [",Competitive salary and equityFlexible remote work optionsComprehensive health coverage,Professional development budget" ], posted: "2 days ago", urgent: true } { id: 2, title: "AI Research Scientist", department: "ai-ml", location: "san-francisco", type "Full-time", experience: "3+ years", salary: "$140k - $200k", description: "Research and develop cutting-edge AI algorithms for healthcare, finance, and manufacturing applications.", requirements: [",PhD in Computer Science, Mathematics, or related field,Strong background in machine learning and deep learning,Experience with PyTorch, TensorFlow, or similar frameworks,Published research in top-tier conferences" ], benefits: [",Competitive salary and equityAccess to cutting-edge computing resourcesConference attendance and publication support,Collaboration with leading researchers" ], posted: "1 week ago", urgent: false } { id: 3, title: "Cybersecurity Engineer", department: "cybersecurity", location: "remote", type "Full-time", experience: "4+ years", salary: "$110k - $160k", description: "Design and implement security solutions to protect our infrastructure and customer data.", requirements: [",Experience with security tools and frameworksKnowledge of network security and encryptionExperience with compliance frameworks(SOC2, ISO27001),Familiarity with threat modeling and risk assessment" ], benefits: [",Competitive salary and equityRemote work flexibilitySecurity certifications support,Latest security tools and training" ], posted: "3 days ago", urgent: true } { id: 4, title: "Data Scientist", department: "data-science", location: "new-york", type "Full-time", experience: "2+ years", salary: "$90k - $140k", description: "Analyze complex datasets to extract insights and build predictive models for business applications.", requirements: [",Strong statistical and mathematical backgroundExperience with Python, R, or similar languages,Knowledge of SQL and data warehousing,Experience with machine learning algorithms" ], benefits: [",Competitive salary and equityHybrid work modelData science conference attendance,Access to large-scale datasets" ], posted: "1 week ago", urgent: false } { id: 5, title: "Product Manager", department: "product", location: "remote", type "Full-time", experience: "3+ years", salary: "$100k - $150k", description: "Lead product strategy and development for our AI-powered solutions across different industries.", requirements: [",Experience in B2B SaaS product managementStrong analytical and problem-solving skillsExperience with agile development methodologies,Technical background or ability to work with technical teams" ], benefits: [",Competitive salary and equityRemote work flexibilityProduct management training and certification,Direct impact on company strategy" ], posted: "2 weeks ago", urgent: false } { id: 6, title: "UX/UI Designer", department: "design", location: "london", type "Full-time", experience: "3+ years", salary: "£60k - £90k", description: "Create intuitive and beautiful user experiences for our AI-powered applications.", requirements: [",Strong portfolio demonstrating UX/UI skillsExperience with design tools(Figma, Sketch, etc.),Understanding of user research and testing,Experience with design systems and component libraries" ], benefits: [",Competitive salary and equityHybrid work modelDesign tools and software provided,Creative freedom and innovation focus" ], posted: "1 week ago", urgent: false } ]  const filteredJobs = jobListings.filter(job ="} > { const matchesDepartment = activeDepartment === "all" || job.department === activeDepartment const matchesLocation = selectedLocation === "all" || job.location === selectedLocation const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.description.toLowerCase().includes(searchQuery.toLowerCase()) || job.requirements.some(req => req.toLowerCase().includes(searchQuery.toLowerCase())) return matchesDepartment && matchesLocation && matchesSearch })  const companyValues = []  return ( <> <SEO title="Careers - Zion Tech Group" description="Join our team of innovators and help shape the future of technology.Explore exciting career opportunities at Zion Tech Group." keywords="careers, jobs, employment, Zion Tech Group careers, technology jobs, AI jobs, cybersecurity careers""/" > {}""" <section className="relative py-20 overflow-hidden">""" <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>""" <div className="container mx-auto px-6 relative z-10">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; animate="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8  }}" className="text-center"" >""" <h1 className="text-5xl md: text-6xl font-bold text-white mb-6"> Join Our{" "}""" <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">"; Mission" </span>"" </h1>""" <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">"; Help us build the future of technology.Join a team of innovators, problem-solvers,"; and visionaries who are transforming industries through AI and cutting-edge solutions."" </p>""" <div className="mt-8">"" <Link " to="#open-positions" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover: from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"" >""" <Briefcase className="w-5 h-5 mr-2" /" > View Open Positions </Link> </div>" </motion.div>" </div>" </section> {}""" <section className="py-20">""" <div className="container mx-auto px-6">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8  }}" className="text-center mb-16"" >""" <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>""" <p className="text-xl text-gray-300 max-w-3xl mx-auto">" The principles that guide everything we do and the culture we build together." </p>" </motion.div>""" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"> {companyValues.map((value, index) => ( <motion .div" key={value.title}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="text-center"" >""" <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">""" <value .icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" /" >""" <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>""" <p className="text-gray-300 leading-relaxed">{value.description}</p> </div> </motion.div> ))}" </div>" </div>" </section> {}""" <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">""" <div className="container mx-auto px-6">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8  }}" className="text-center mb-16"" >""" <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us?</h2>""" <p className="text-xl text-gray-300 max-w-3xl mx-auto">" We believe in taking care of our team so they can do their best work and grow their careers." </p>" </motion.div>""" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"> {benefits.map((benefit, index) => ( <motion .div" key={benefit.title}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="group"" >""" <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 group-hover: border-cyan-400/50 transition-all duration-300">""" <benefit .icon className="w-12 h-12 text-cyan-400 mb-4" /" >""" <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>""" <p className="text-gray-300 leading-relaxed">{benefit.description}</p> </div> </motion.div> ))}" </div>" </div>" </section> {}""" <section className="py-20">""" <div className="container mx-auto px-6">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8  }}" className="text-center mb-16"" >""" <h2 className="text-4xl font-bold text-white mb-4">Our Culture</h2>""" <p className="text-xl text-gray-300 max-w-3xl mx-auto">" We foster an environment where creativity, collaboration, and innovation thrive." </p>" </motion.div>""" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"> {culture.map((item, index) => ( <motion .div" key={item.title}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="text-center"" >""" <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/20">""" <item .icon className="w-12 h-12 text-purple-400 mx-auto mb-4" /" >""" <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>""" <p className="text-gray-300 leading-relaxed">{item.description}</p> </div> </motion.div> ))}" </div>" </div>" </section> {}""" <section id="open-positions" className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">""" <div className="container mx-auto px-6">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8  }}" className="mb-12"" >""" <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>""" <p className="text-xl text-gray-300">Find the perfect role for your skills and career goals</p>" </motion.div> {}""" <div className="mb-8 space-y-4"> {}""" <div className="relative max-w-md">""" <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /" >"" <input " type="text" placeholder="Search jobs...""; value="{searchQuery}" onChange="{(e)" = / / / / /" > setSearchQuery(e.target.value)}" className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20" />" </div> {}""" <div className="flex flex-wrap gap-4"> {}""" <div className="flex flex-wrap gap-2"> {departments.map((dept) => ( <button key="{dept.id}" onClick="{()" =" > setActiveDepartment(dept.id)} className="{"flex" items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${ activeDepartment === dept.id ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-400"" : "bg-slate-800/50 border-slate-600/50 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300""}"}">"" <span>{dept.name}</span>""" <span className="text-xs bg-slate-700/50 px-2 py-1 rounded-full"> {dept.count} </span>" </button>"))}" </div> {}""" <div className="flex flex-wrap gap-2"> {locations.map((location) => ( <button key="{location.id}" onClick="{()" =" > setSelectedLocation(location.id)} className="{"flex" items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${ selectedLocation === location.id" ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-400""; : "bg-slate-800/50 border-slate-600/50 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300""}"} >""" <MapPin className="w-4 h-4" /" >"" <span>{location.name}</span>""" <span className="text-xs bg-slate-700/50 px-2 py-1 rounded-full"> {location.count} </span> </button> ))}" </div>" </div>" </div> {}""" <div className="space-y-6"> {filteredJobs.map((job, index) => ( <motion .div" key={job.id}"; initial="{{" opacity: 0, y: 20 }}"; whileInView = "{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="group"" >""" <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 group-hover: border-cyan-400/50 transition-all duration-300"> {}""" <div className="flex flex-col lg: flex-row lg:items-center lg:justify-between mb-4">""" <div className="flex-1">""" <div className="flex items-center gap-3 mb-2">""" <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">"{job.title}" </h3> {job.urgent && (""" <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full border border-red-400/30">" Urgent" </span>")}"" </div>""" <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">""" <span className="flex items-center gap-1">""" <Briefcase className="w-4 h-4" /" >"{job.department}"" </span>""" <span className="flex items-center gap-1">""" <MapPin className="w-4 h-4" /" >"{locations.find(l => l.id === job.location)?.name}"" </span>""" <span className="flex items-center gap-1">""" <Clock className="w-4 h-4" /" >"{job.type}"" </span>""" <span className="flex items-center gap-1">""" <Users className="w-4 h-4" /" >"{job.experience}"" </span>""" <span className="flex items-center gap-1">""" <DollarSign className="w-4 h-4" /" >" {job.salary}" </span>" </div>"" </div>""" <div className="mt-4 lg: mt-0">" <Link to="{"/careers/${job.id}"};"
">
}}}}"""
>>>>>>> main
>>>>>>> main
