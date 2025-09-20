import React, { useState } from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import { ;
  Briefcase,;
  Users, ;
  Heart, ;
  Zap, ;
  Globe, ;
  Award, ;
  Mail, ;
  MapPin, ;
  Clock, ;
  DollarSign,;
  ChevronDown,;
  ExternalLink;
} from "lucide-react"
const Careers: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null),;
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all'),;

  const departments = [;
    { id: 'all', name: 'All Departments', count: 12 };
    { id: 'engineering', name: 'Engineering', count: 5 };
    { id: 'sales', name: 'Sales & Business Development', count: 3 };
    { id: 'marketing', name: 'Marketing', count: 2 };
    { id: 'operations', name: 'Operations', count: 2 };
  ];
  const jobListings = [;
    {;
      id: 'senior-ai-engineer',title: 'Senior AI Engineer',department: 'engineering',location: 'Remote / San Francisco, CA',;
      type: 'Full-time',salary: '$120,000 - $180,000',;
      experience: '5+ years',description: 'Join our AI team to develop cutting-edge machine learning solutions and autonomous systems.',requirements: [;
        'Strong background in machine learning and deep learningExperience with Python, TensorFlow, and PyTorch',;
        'Knowledge of cloud platforms (AWS, Azure, GCP)Experience with MLOps and model deployment',;
        'Strong problem-solving and communication skills'
      ],;
      responsibilities: [;
        'Design and implement AI/ML solutionsOptimize model performance and scalability'
        'Collaborate with cross-functional teamsMentor junior engineers',;
        'Stay current with AI/ML trends and technologies'
      ],;
      benefits: [;
        'Competitive salary and equityFlexible work arrangements'
        'Professional development budgetHealth, dental, and vision insurance',;
        '401(k) with company match'
      ];
    },;
    {;
      id: 'ai-sales-engineer',title: 'AI Sales Engineer',department: 'sales',location: 'Remote / New York, NY',;
      type: 'Full-time',salary: '$90,000 - $140,000',;
      experience: '3+ years',description: 'Help clients understand and implement our AI solutions through technical expertise and sales acumen.',requirements: [;
        'Technical background in AI/ML or software engineeringExperience in B2B sales or sales engineering'
        'Strong presentation and communication skillsAbility to understand client needs and propose solutions',;
        'Experience with CRM systems'
      ],;
      responsibilities: [;
        'Conduct technical demonstrations and presentationsDevelop proof-of-concept solutions'
        'Collaborate with sales and engineering teamsProvide technical support during sales process',;
        'Build relationships with technical stakeholders'
      ],;
      benefits: [;
        'Base salary plus commissionPerformance bonuses'
        'Company car allowanceHealth and wellness benefits',;
        'Professional development opportunities'
      ];
    },;
    {;
      id: 'product-marketing-manager',title: 'Product Marketing Manager',department: 'marketing',location: 'Remote / Austin, TX',;
      type: 'Full-time',salary: '$80,000 - $120,000',;
      experience: '4+ years',description: 'Drive product positioning, messaging, and go-to-market strategies for our AI solutions.',;
      requirements: [;
        'Experience in B2B SaaS product marketingStrong analytical and creative skills'
        'Experience with market research and competitive analysisExcellent written and verbal communication',;
        'Understanding of AI/ML technologies'
      ],;
      responsibilities: [;
        'Develop product positioning and messagingCreate marketing collateral and campaigns'
        'Conduct market research and competitive analysisWork with product and sales teams',;
        'Track and analyze marketing metrics'
      ],;
      benefits: [;
        'Competitive salary and benefitsRemote work flexibility'
        'Marketing budget for tools and resourcesHealth and wellness benefits',;
        'Professional development opportunities'
      ];
    },;
    {;
      id: 'devops-engineer',title: 'DevOps Engineer',department: 'engineering',location: 'Remote / Seattle, WA',;
      type: 'Full-time',salary: '$100,000 - $150,000',;
      experience: '3+ years',description: 'Build and maintain our cloud infrastructure and deployment pipelines.',requirements: [;
        'Experience with AWS, Azure, or GCPKnowledge of Docker, Kubernetes, and CI/CD',;
        'Experience with infrastructure as code (Terraform)Strong scripting skills (Python, Bash)',;
        'Understanding of security best practices'
      ],;
      responsibilities: [;
        'Manage cloud infrastructure and servicesAutomate deployment and scaling processes'
        'Monitor system performance and reliabilityImplement security and compliance measures',;
        'Collaborate with development teams'
      ],;
      benefits: [;
        'Competitive salary and equityRemote work flexibility'
        'Cloud certification reimbursementHealth and wellness benefits',;
        'Professional development budget'
      ];
    };
  ],;

  const companyValues = [;
    {;
      icon: <Zap className="w-8 h-8 text-zion-cyan" />,title: 'Innovation First',description: 'We push boundaries and embrace cutting-edge technologies to solve complex problems.'
    };
    {;
      icon: <Users className="w-8 h-8 text-zion-cyan" />,title: 'Collaboration',description: 'We believe in the power of diverse teams working together to achieve extraordinary results.'
    };
    {;
      icon: <Heart className="w-8 h-8 text-zion-cyan" />,title: 'Customer Focus',description: 'Our customers\' success is our success. We build solutions that truly make a difference.'
    };
    {;
      icon: <Globe className="w-8 h-8 text-zion-cyan" />,title: 'Global Impact',description: 'We\'re committed to creating technology that benefits society and the environment.'
    };
  ];
  const filteredJobs = selectedDepartment === 'all' ;
    ? jobListings ;
    : jobListings.filter(job => job.department === selectedDepartment),;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Careers - Zion Tech Group"
        description="Join our team of technology experts and help shape the future of AI-powered business solutions. Explore exciting career opportunities in AI, engineering, sales, and more."
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
          >;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Join Our;
              <span className="text-zion-cyan"> Mission</[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Help us revolutionize how businesses leverage AI and technology. ;
              Work with cutting-edge solutions and make a real impact on the world.;
            </[^>]*>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">;
              <div className="flex items-center gap-2">;
                <[^>]*/>
                <span>100+ Team Members</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2">;
                <[^>]*/>
                <span>Remote First</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2">;
                <[^>]*/>
                <span>Industry Leader</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Company Values */};
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</[^>]*>
            <p className="text-gray-400 max-w-2xl mx-auto">;
              These core principles guide everything we do and shape our company culture.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {companyValues.map((value, index) => (;
              <motion.div
                key={value.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="flex justify-center mb-4">;
                  {value.icon};
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</[^>]*>
                <p className="text-gray-400">{value.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Job Listings */};
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</[^>]*>
            <p className="text-gray-400 max-w-2xl mx-auto">;
              Find the perfect role that matches your skills and career goals.;
            </[^>]*>
          </[^>]*>

          {/* Department Filter */};
          <div className="flex flex-wrap justify-center gap-2 mb-8">;
            {departments.map((dept) => (;
              <button;
                key={dept.id};
                onClick={() => setSelectedDepartment(dept.id)};
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${;
                  selectedDepartment === dept.id
                    ? 'bg-zion-cyan text-slate-900'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`};
              >;
                {dept.name} ({dept.count});
              </[^>]*>
            ))};
          </[^>]*>

          {/* Jobs Grid */};
          <div className="space-y-6">;
            {filteredJobs.map((job, index) => (;
              <motion.div
                key={job.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">;
                  <div className="flex-1">;
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</[^>]*>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">;
                      <div className="flex items-center gap-1">;
                        <[^>]*/>
                        <span>{job.location}</[^>]*>
                      </[^>]*>
                      <div className="flex items-center gap-1">;
                        <[^>]*/>
                        <span>{job.type}</[^>]*>
                      </[^>]*>
                      <div className="flex items-center gap-1">;
                        <[^>]*/>
                        <span>{job.salary}</[^>]*>
                      </[^>]*>
                      <div className="flex items-center gap-1">;
                        <[^>]*/>
                        <span>{job.experience}</[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                  <button;
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    className="[^"]*"
                  >;
                    {expandedJob === job.id ? 'Show Less' : 'View Details'}
                    <ChevronDown ;
                      className={`w-4 h-4 transition-transform ${;
                        expandedJob === job.id ? 'rotate-180' : ''
                      }`} ;
                    />;
                  </[^>]*>
                </[^>]*>

                <p className="text-gray-300 mb-4">{job.description}</[^>]*>

                {expandedJob === job.id && (;&& (; (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }};
                    animate={{ opacity: 1, height: 'auto' }};
                    exit={{ opacity: 0, height: 0 }};
                    transition={{ duration: 0.3 }};
                    className="[^"]*"
                  >;
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                      <div>;
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</[^>]*>
                        <ul className="space-y-2">;
                          {job.requirements.map((req, idx) => (;
                            <li key={idx} className="flex items-start gap-2 text-gray-300">;
                              <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></[^>]*>
                              <span>{req}</[^>]*>
                            </[^>]*>
                          ))};
                        </[^>]*>
                      </[^>]*>
                      <div>;
                        <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</[^>]*>
                        <ul className="space-y-2">;
                          {job.responsibilities.map((resp, idx) => (;
                            <li key={idx} className="flex items-start gap-2 text-gray-300">;
                              <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></[^>]*>
                              <span>{resp}</[^>]*>
                            </[^>]*>
                          ))};
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>

                    <div>;
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</[^>]*>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">;
                        {job.benefits.map((benefit, idx) => (;
                          <div key={idx} className="flex items-center gap-2 text-gray-300">;
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></[^>]*>
                            <span>{benefit}</[^>]*>
                          </[^>]*>
                        ))};
                      </[^>]*>
                    </[^>]*>

                    <div className="flex flex-col sm:flex-row gap-3">;
                      <button className="px-6 py-3 bg-zion-cyan text-slate-900 rounded-lg hover:bg-zion-cyan/90 transition-colors font-medium">;
                        Apply Now;
                      </[^>]*>
                      <button className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-colors font-medium">;
                        Save Job;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                )};
              </[^>]*>
            ))};
          </[^>]*>

          {filteredJobs.length === 0 && (;&& (; (
            <div className="text-center py-12">;
              <p className="text-gray-400 text-lg">No positions available in this department at the moment.</[^>]*>
              <p className="text-gray-500 mt-2">Check back later or explore other departments!</[^>]*>
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>

      {/* Application Process */};
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">Application Process</[^>]*>
            <p className="text-gray-400 max-w-2xl mx-auto">;
              Our streamlined process ensures a smooth experience from application to offer.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {[;
              {;
                step: '1',title: 'Apply',description: 'Submit your resume and cover letter through our portal'
              };
              {;
                step: '2',title: 'Review',description: 'Our team reviews your application within 48 hours'
              };
              {;
                step: '3',title: 'Interview',description: 'Multiple rounds including technical and cultural fit'
              };
              {;
                step: '4',title: 'Offer',description: 'Receive your offer and join the Zion Tech family'
              };
            ].map((step, index) => (;
              <motion.div
                key={step.step};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="w-16 h-16 bg-zion-cyan text-slate-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">;
                  {step.step};
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</[^>]*>
                <p className="text-gray-400">{step.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-3xl font-bold text-white mb-4">Don't See the Right Fit?</[^>]*>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">;
              We're always looking for talented individuals to join our team. ;
              Send us your resume and we'll keep you in mind for future opportunities.;
            </[^>]*>
            ;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-zion-cyan text-slate-900 rounded-lg hover:bg-zion-cyan/90 transition-colors font-medium flex items-center justify-center gap-2">;
                <[^>]*/>
                Send Resume;
              </[^>]*>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-colors font-medium flex items-center justify-center gap-2">;
                <[^>]*/>
                Contact HR;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default Careers;