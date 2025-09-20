import { useCallback  } from "react";
import React, { useState } from "react"
import { motion   } from "framer-motion";
import { SEO   } from "../components/SEO";
import {
  Briefcase;
  Users,
  Heart,
  Zap,
  Globe,
  Award,
  Mail,
  MapPin,
  Clock,
  DollarSign;
  ChevronDown;
  ExternalLink;
}
}
 } from "lucide-react";
const,
  Career: s: React.FC = () () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null)
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all')

  const departments = [
  { id: 'all', na,
  m: e: 'All Departments', cou,
  n: t: 12 },
  },
  { id: 'engineering', na,
  m: e: 'Engineering', cou,
  n: t: 5 },
  },
  { id: 'sales', na,
  m: e: 'Sales & Business Development', cou,
  n: t: 3 },
  },
  { id: 'marketing', na,
  m: e: 'Marketing', cou,
  n: t: 2 },
  },
  { id: 'operations', na,
  m: e: 'Operations', cou,
  n: t: 2 },
  },
  ]
  const jobListings = [
  {
  id: 'senior-ai-engineer',tit,
  l: e: 'Senior AI Engineer',departme,
  n: t: 'engineering',locati,
  o: n: 'Remote / San Francisco, CA'
      ty,
  p: e: 'Full-time',sala,
  r: y: '$120,000 - $180,000'
      experien,
  c: e: '5+ years',descripti,
  o: n: 'Join our AI team to develop cutting-edge machine learning solutions and autonomous systems.',requiremen,
  t: s: [
  'Strong background in machine learning and deep learningExperience with Python, TensorFlow, and PyTorch'
        'Knowledge of cloud platforms (AWS, Azure, GCP)Experience with MLOps and model deployment'
        'Strong problem-solving and communication skills'
]
      responsibiliti,
  e: s: [
  'Design and implement AI/ML solutionsOptimize model performance and scalability'
        'Collaborate with cross-functional teamsMentor junior engineers'
        'Stay current with AI/ML trends and technologies'
]
      benefit,
  s: [
  'Competitive salary and equityFlexible work arrangements'
        'Professional development budgetHealth, dental, and vision insurance'
        '401(k) with company match'
],
  },
  {
  id: 'ai-sales-engineer',tit,
  l: e: 'AI Sales Engineer',departme,
  n: t: 'sales',locati,
  o: n: 'Remote / New York, NY'
      ty,
  p: e: 'Full-time',sala,
  r: y: '$90,000 - $140,000'
      experien,
  c: e: '3+ years',descripti,
  o: n: 'Help clients understand and implement our AI solutions through technical expertise and sales acumen.',requiremen,
  t: s: [
  'Technical background in AI/ML or software engineeringExperience in B2B sales or sales engineering'
        'Strong presentation and communication skillsAbility to understand client needs and propose solutions'
        'Experience with CRM systems'
]
      responsibiliti,
  e: s: [
  'Conduct technical demonstrations and presentationsDevelop proof-of-concept solutions'
        'Collaborate with sales and engineering teamsProvide technical support during sales process'
        'Build relationships with technical stakeholders'
]
      benefit,
  s: [
  'Base salary plus commissionPerformance bonuses'
        'Company car allowanceHealth and wellness benefits'
        'Professional development opportunities'
],
  },
  {
  id: 'product-marketing-manager',tit,
  l: e: 'Product Marketing Manager',departme,
  n: t: 'marketing',locati,
  o: n: 'Remote / Austin, TX'
      ty,
  p: e: 'Full-time',sala,
  r: y: '$80,000 - $120,000'
      experien,
  c: e: '4+ years',descripti,
  o: n: 'Drive product positioning, messaging, and go-to-market strategies for our AI solutions.'
      requiremen,
  t: s: [
  'Experience in B2B SaaS product marketingStrong analytical and creative skills'
        'Experience with market research and competitive analysisExcellent written and verbal communication'
        'Understanding of AI/ML technologies'
]
      responsibiliti,
  e: s: [
  'Develop product positioning and messagingCreate marketing collateral and campaigns'
        'Conduct market research and competitive analysisWork with product and sales teams'
        'Track and analyze marketing metrics'
]
      benefit,
  s: [
  'Competitive salary and benefitsRemote work flexibility'
        'Marketing budget for tools and resourcesHealth and wellness benefits'
        'Professional development opportunities'
],
  },
  {
  id: 'devops-engineer',tit,
  l: e: 'DevOps Engineer',departme,
  n: t: 'engineering',locati,
  o: n: 'Remote / Seattle, WA'
      ty,
  p: e: 'Full-time',sala,
  r: y: '$100,000 - $150,000'
      experien,
  c: e: '3+ years',descripti,
  o: n: 'Build and maintain our cloud infrastructure and deployment pipelines.',requiremen,
  t: s: [
  'Experience with AWS, Azure, or GCPKnowledge of Docker, Kubernetes, and CI/CD'
        'Experience with infrastructure as code (Terraform)Strong scripting skills (Python, Bash)'
        'Understanding of security best practices'
]
      responsibiliti,
  e: s: [
  'Manage cloud infrastructure and servicesAutomate deployment and scaling processes'
        'Monitor system performance and reliabilityImplement security and compliance measures'
        'Collaborate with development teams'
]
      benefit,
  s: [
  'Competitive salary and equityRemote work flexibility'
        'Cloud certification reimbursementHealth and wellness benefits'
        'Professional development budget'
],
  },
  ]

  const companyValues = [
  {
  ic,
  o: n: <Zap className="w-8 h-8 text-zion-cyan" />,tit,
  l: e: 'Innovation First',descripti,
  o: n: 'We push boundaries and embrace cutting-edge technologies to solve complex problems.'
},
  {
  ic,
  o: n: <Users className="w-8 h-8 text-zion-cyan" />,tit,
  l: e: 'Collaboration',descripti,
  o: n: 'We believe in the power of diverse teams working together to achieve extraordinary results.'
},
  {
  ic,
  o: n: <Heart className="w-8 h-8 text-zion-cyan" />,tit,
  l: e: 'Customer Focus',descripti,
  o: n: 'Our customers\' success is our success. We build solutions that truly make a difference.'
},
  {
  ic,
  o: n: <Globe className="w-8 h-8 text-zion-cyan" />,tit,
  l: e: 'Global Impact',descripti,
  o: n: 'We\'re committed to creating technology that benefits society and the environment.'
},
  ]
  const filteredJobs = selectedDepartment === 'all' 
    ? jobListings;
    : jobListings.filter(job => job.department === selectedDepartment)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="Careers - Zion Tech Group"
        description="Join our team of technology experts and help shape the future of AI-powered business solutions. Explore exciting career opportunities in AI, engineering, sales, and more."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
          >
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Join Our;
              <span className="text-zion-cyan"> Mission</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us revolutionize how businesses leverage AI and technology. 
              Work with cutting-edge solutions and make a real impact on the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>100+ Team Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Remote First</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Industry Leader</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-12";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These core principles guide everything we do and shape our company culture.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
  <motion.div;
                key={value.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="text-center p-6 rounded-lg bg-slate-800/50 border border-slate-700,
  hove: r:border-zion-cyan/50 transition-colors";"
              >
                <div className="flex justify-center mb-4">
                  {value.icon},
  }
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-12";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find the perfect role that matches your skills and career goals.
            </p>
          </motion.div>

          {/* Department Filter */},
  }
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {departments.map((dept) => (
  <button;
                key={dept.id},
  }
                onClick={onClick={() => setSelectedDepartment(dept.id)},
  },
  }
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
  selectedDepartment === dept.id;
                    ? 'bg-zion-cyan text-slate-900'
                    : 'bg-slate-800 text-gray-300,
  hove: r:bg-slate-700'
}`}
              >
                {dept.name} ({dept.count})
              </button>
            ))}
          </div>

          {/* Jobs Grid */},
  }
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
  <motion.div;
                key={job.id},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-slate-800/50 border border-slate-700 rounded-lg p-6,
  hove: r: border-zion-cyan/50 transition-colors";"
              >
                <div className="flex flex-col,
  l: g:flex-row,
  l: g:items-center l,
  g:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  <button;
                    onClick={onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)},
  },
  }
                    className="className="mt-4,
  l: g: mt-0 px-4 py-2 bg-zion-cyan text-slate-900 rounded-lg hove,
  r:bg-zion-cyan/90 transition-colors flex items-center gap-2";"
                  >
                    {expandedJob === job.id ? 'Show Less' : 'View Details'},
  }
                    <ChevronDown;
                      className={`w-4 h-4 transition-transform ${
  expandedJob === job.id ? 'rotate-180' : ''
}`} 
                    />
                  </button>
                </div>

                <p className="text-gray-300 mb-4">{job.description}</p>

                {expandedJob === job.id && (
  <motion.div;
                    initial={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                    animate={ opaci,
  t: y: 1, heig,
  h: t: 'auto' },
  }
                    exit={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                    transition={ durati,
  o: n: 0.3 },
  }
                    className="className="border-t border-slate-700 pt-4 space-y-6";"
                  >
                    <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
  <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
  <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-3">
                        {job.benefits.map((benefit, idx) => (
  <div key={idx} className="flex items-center gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col,
  s: m: flex-row gap-3">
                      <button className="px-6 py-3 bg-zion-cyan text-slate-900 rounded-lg,
  hove: r:bg-zion-cyan/90 transition-colors font-medium">
                        Apply Now;
                      </button>
                      <button className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg hove,
  r:bg-zion-cyan/10 transition-colors font-medium">
                        Save Job;
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
  <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No positions available in this department at the moment.</p>
              <p className="text-gray-500 mt-2">Check back later or explore other departments!</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-12";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Application Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our streamlined process ensures a smooth experience from application to offer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-4 gap-8">
            {[
  {
  ste,
  p: '1',tit,
  l: e: 'Apply',descripti,
  o: n: 'Submit your resume and cover letter through our portal'
},
  {
  st,
  e: p: '2',tit,
  l: e: 'Review',descripti,
  o: n: 'Our team reviews your application within 48 hours'
},
  {
  st,
  e: p: '3',tit,
  l: e: 'Interview',descripti,
  o: n: 'Multiple rounds including technical and cultural fit'
},
  {
  st,
  e: p: '4',tit,
  l: e: 'Offer',descripti,
  o: n: 'Receive your offer and join the Zion Tech family'
},
  ].map((step, index) => (
  <motion.div;
                key={step.step},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="text-center";"
              >
                <div className="w-16 h-16 bg-zion-cyan text-slate-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step},
  }
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-3xl font-bold text-white mb-4">Don't See the Right Fit?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-zion-cyan text-slate-900 rounded-lg,
  hove: r:bg-zion-cyan/90 transition-colors font-medium flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Send Resume;
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg hove,
  r:bg-zion-cyan/10 transition-colors font-medium flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Contact HR;
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default Careers;