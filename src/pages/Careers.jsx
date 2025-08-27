import { useState } from "react";
export default function Careers() {
  const [activeTab, setActiveTab] = useState("engineering");
  
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
      icon: "🏠"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs to keep you at your best.",
      icon: "❤️"
    },
    {
      title: "Continuous Learning",
      description: "Education stipends and dedicated learning time to help you grow professionally.",
      icon: "📚"
    },
    {
      title: "Competitive Compensation",
      description: "Salary packages that recognize your value, plus equity options to share in our success.",
      icon: "💰"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Join Our <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
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
          <div className="rounded-lg overflow-hidden bg-zion-slate-dark/50 border border-zion-cyan/20">
            <div className="w-full h-64 flex items-center justify-center text-zion-slate-light">
              Team Collaboration Image
            </div>
          </div>
        </div>
        
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 p-8 rounded-xl hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
          
          <div className="w-full">
            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 mb-8 w-full flex flex-wrap justify-center rounded-lg p-2">
              {Object.keys(jobs).map((department) => (
                <button
                  key={department}
                  onClick={() => setActiveTab(department)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 capitalize ${
                    activeTab === department
                      ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/40'
                      : 'text-zion-slate-light hover:text-white hover:bg-zion-slate-dark/50'
                  }`}
                >
                  {department}
                </button>
              ))}
            </div>
            
            <div className="space-y-6">
              {jobs[activeTab].map((job, index) => (
                <div key={index} className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs text-zion-slate-light bg-zion-slate-dark/70 px-2 py-1 rounded-full">{job.location}</span>
                        <span className="text-xs text-zion-slate-light bg-zion-slate-dark/70 px-2 py-1 rounded-full">{job.type}</span>
                        <span className="text-xs text-zion-slate-light bg-zion-slate-dark/70 px-2 py-1 rounded-full">{job.department}</span>
                      </div>
                      <p className="text-zion-slate-light mb-4">{job.description}</p>
                    </div>
                    <button className="w-full md:w-auto mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-zion-slate-dark/50 to-zion-slate-dark/30 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Don't see the right position?</h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about AI and technology. 
            Send us your resume and let's start a conversation.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
            Send General Application
          </button>
        </div>
      </div>
    </div>
  );
}
