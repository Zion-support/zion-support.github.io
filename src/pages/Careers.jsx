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
      description: "Access to courses, conferences, and resources to keep your skills sharp and up-to-date.",
      icon: "📚"
    },
    {
      title: "Competitive Compensation",
      description: "Attractive salary packages with equity options and performance-based bonuses.",
      icon: "💰"
    },
    {
      title: "Team Events",
      description: "Regular team building activities and social events to foster strong relationships.",
      icon: "🎉"
    },
    {
      title: "Career Growth",
      description: "Clear career progression paths and opportunities to take on new challenges.",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Join Our <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Build the future of AI and technology with us. We're looking for passionate individuals who want to make a difference.
          </p>
        </div>

        {/* Job Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(jobs).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 capitalize ${
                  activeTab === category
                    ? "bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25"
                    : "bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan border border-zion-cyan/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs[activeTab].map((job, index) => (
              <div
                key={index}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-zion-slate-light text-sm">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.department}</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-zion-cyan text-white text-sm font-medium rounded-lg hover:bg-zion-cyan/90 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
                <p className="text-zion-slate-light">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="mb-16">
          <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto mb-8">
              We believe in fostering an inclusive, collaborative environment where innovation thrives. 
              Our team values creativity, continuous learning, and making a positive impact on the world.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">50+</div>
                <div className="text-zion-slate-light">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">15+</div>
                <div className="text-zion-slate-light">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>
                <div className="text-zion-slate-light">Remote Work</div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">How to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-zion-cyan text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Submit Application</h3>
              <p className="text-zion-slate-light">Send us your resume and cover letter through our application portal.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-zion-cyan text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Interview Process</h3>
              <p className="text-zion-slate-light">Meet with our team through technical and cultural interviews.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-zion-cyan text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Join the Team</h3>
              <p className="text-zion-slate-light">Welcome aboard! Start your journey with Zion Tech Group.</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Don't See the Right Role?</h3>
            <p className="text-zion-slate-light mb-6">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="px-8 py-3 bg-zion-cyan text-white font-medium rounded-lg hover:bg-zion-cyan/90 transition-all duration-300 transform hover:scale-105">
              Send Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
