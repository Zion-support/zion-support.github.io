<<<<<<< HEAD
import { SEO } from "@/components/SEO",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { AppLayout } from "@/layout/AppLayout",;
;
export default function Careers() {;
  // Sample job listings;
  const jobs = {;
    engineering:[;
      {;
        title:"Senior Frontend Engineer",;
        location:"Remote",;
        type:"Full-time",;
        department:"Engineering",;
        description:"Join our frontend team to build beautiful, responsive, and accessible user interfaces for our AI-powered marketplace.";
      },;
      {;
        title:"AI Research Engineer",;
        location:"San Francisco, CA",;
        type:"Full-time",;
        department:"Engineering",;
        description:"Work on cutting-edge AI technologies to power our matching algorithms and recommendation systems.";
      },;
      {;
        title:"Full Stack Developer",;
        location:"Remote",;
        type:"Full-time",;
        department:"Engineering",;
        description:"Develop end-to-end features across our platform, working with modern technologies like React, Node.js, and PostgreSQL.";
      }
    ],;
    product:[;
      {;
        title:"Product Manager",;
        location:"New York, NY",;
        type:"Full-time",;
        department:"Product",;
        description:"Lead product development initiatives to enhance our marketplace experience for both talent and clients.";
      },;
      {;
        title:"UX/UI Designer",;
        location:"Remote",;
        type:"Full-time",;
        department:"Product",;
        description:"Create intuitive and engaging user experiences that make complex technology accessible to all users.";
      }
    ],;
    marketing:[;
      {;
        title:"Growth Marketing Manager",;
        location:"Remote",;
        type:"Full-time",;
        department:"Marketing",;
        description:"Drive user acquisition and engagement strategies across multiple channels to grow our marketplace.";
      },;
      {;
        title:"Content Strategist",;
        location:"London, UK",;
        type:"Full-time",;
        department:"Marketing",;
        description:"Develop compelling content that educates and inspires our audience about the future of AI and technology.";
      }
    ],;
    operations:[;
      {;
        title:"Community Manager",;
        location:"Remote",;
        type:"Full-time",;
        department:"Operations",;
        description:"Build and nurture our growing community of AI specialists, developers, and tech enthusiasts.";
      },;
      {;
        title:"Talent Acquisition Specialist",;
        location:"Remote",;
        type:"Full-time",;
        department:"Operations",;
        description:"Help connect the right talent with the right opportunities on our platform through personalized matching.";
      }
    ];
  },;
;
  // Benefits list;
  const benefits = [;
    {;
      title:"Flexible Work",;
      description:"Remote-first culture with flexible hours to support your productivity and work-life balance.",;
      icon:(;
        <svg className="w-10 h-10 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">;
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />;
        </svg>;
      );
    },;
    {;
      title:"Health & Wellness",;
      description:"Comprehensive health insurance and wellness programs to keep you at your best.",;
      icon:(;
        <svg className="w-10 h-10 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">;
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />;
        </svg>;
      );
    },;
    {;
      title:"Continuous Learning",;
      description:"Education stipends and dedicated learning time to help you grow professionally.",;
      icon:(;
        <svg className="w-10 h-10 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">;
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />;
        </svg>;
      );
    },;
    {;
      title:"Competitive Compensation",;
      description:"Salary packages that recognize your value, plus equity options to share in our success.",;
      icon:(;
        <svg className="w-10 h-10 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">;
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />;
        </svg>;
      );
    }
  ],;
;
  return (;
    <AppLayout>;
      <SEO ;
        title="Careers at Zion - Join Our Team" ;
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform." ;
        keywords="Zion careers, AI jobs, tech careers, remote work, startup jobs";
        canonical="https://app.ziontechgroup.com/careers";
      />;
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <GradientHeading>Join Our Team</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
              Help us build the future of AI and technology;
            </p>;
          </div>;
          ;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">;
            <div>;
              <h2 className="text-3xl font-bold text-white mb-6">Why Work at Zion?</h2>;
              <p className="text-zion-slate-light text-lg mb-6">;
                At Zion, we're not just building a marketplace, we're creating a new paradigm for how AI and ;
                technology are accessed, shared, and implemented globally.;
              </p>;
              <p className="text-zion-slate-light text-lg mb-6">;
                Our team is passionate about democratizing access to cutting-edge technology and connecting ;
                talented individuals with meaningful opportunities. We value innovation, collaboration, and ;
                impact in everything we do.;
              </p>;
              <p className="text-zion-slate-light text-lg">;
                If you're excited about shaping the future of AI and technology while working in a dynamic, ;
                remote-first environment with a mission-driven team, we'd love to meet you.;
              </p>;
            </div>;
            <div className="rounded-lg overflow-hidden">;
              <img ;
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600" ;
                alt="Team collaboration" ;
                className="object-cover w-full h-full";
              />;
            </div>;
          </div>;
          ;
          <div className="mb-24">;
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Benefits</h2>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {benefits.map((benefit, index) => (;
                <div key={index} className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">;
                  <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">;
                    {benefit.icon}
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>;
                  <p className="text-zion-slate-light">{benefit.description}</p>;
                </div>;
              ))}
            </div>;
          </div>;
          ;
          <div className="mb-24">;
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>;
            ;
            <Tabs defaultValue="engineering" className="w-full">;
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light mb-8 w-full flex flex-wrap justify-center">;
                <TabsTrigger value="engineering" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Engineering</TabsTrigger>;
                <TabsTrigger value="product" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Product</TabsTrigger>;
                <TabsTrigger value="marketing" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Marketing</TabsTrigger>;
                <TabsTrigger value="operations" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Operations</TabsTrigger>;
              </TabsList>;
              ;
              {Object.entries(jobs).map(([department, jobList]) => (;
                <TabsContent key={department} value={department} className="space-y-6">;
                  {jobList.map((job, index) => (;
                    <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors">;
                      <CardContent className="p-6">;
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">;
                          <div>;
                            <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>;
                            <div className="flex flex-wrap gap-2 mb-4">;
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.location}</span>;
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.type}</span>;
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.department}</span>;
                            </div>;
                            <p className="text-zion-slate-light mb-4">{job.description}</p>;
                          </div>;
                          <Button className="w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
                            Apply Now;
                          </Button>;
                        </div>;
                      </CardContent>;
                    </Card>;
=======
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { AppLayout } from "@/layout/AppLayout",export default function Careers() {
  // Sample job listings
  const jobs = {
    engineering: [
      {
        title: &quot;Senior Frontend Engineer&quot;,
        location: &quot;Remote&quot;,
        type: &quot;Full-time&quot;,
        department: &quot;Engineering&quot;,
        description: &quot;Join our frontend team to build beautiful, responsive, and accessible user interfaces for our AI-powered marketplace.&quot;
      },
      {
        title: &quot;AI Research Engineer&quot;,
        location: &quot;San Francisco, CA&quot;,
        type: &quot;Full-time&quot;,
        department: &quot;Engineering&quot;,
        description: &quot;Work on cutting-edge AI technologies to power our matching algorithms and recommendation systems.&quot;
      },
      {
        title: &quot;Full Stack Developer&quot;,
        location: &quot;Remote&quot;,
        type: &quot;Full-time&quot;,
        department: &quot;Engineering&quot;,
        description: &quot;Develop end-to-end features across our platform, working with modern technologies like React, Node.js, and PostgreSQL.&quot;
      }
    ],
    product: [
      {
        title: &quot;Product Manager&quot;,
        location: &quot;New York, NY&quot;,
        type: &quot;Full-time&quot;,
        department: &quot;Product&quot;,
        description: &quot;Lead product development initiatives to enhance our marketplace experience for both talent and clients.&quot;
      },
      {
        title: &quot;UX/UI Designer&quot;,
        location: &quot;Remote&quot;,
        type: &quot;Full-time&quot;,
        department: &quot;Product&quot;,
        description: &quot;Create intuitive and engaging user experiences that make complex technology accessible to all users.&quot;
      }
    ],
    marketing: [
      {
        title: &quot;Growth Marketing Manager&quot;,
        location: &quot;Remote&quot;,
        type: &quot;Full-time&quot;,
        department: &quot;Marketing&quot;,
        description: &quot;Drive user acquisition and engagement strategies across multiple channels to grow our marketplace.&quot;
      },
      {
        title: &quot;Content Strategist&quot;,
        location: &quot;London, UK&quot;,
        type: &quot;Full-time&quot;,
        department: &quot;Marketing&quot;,
        description: &quot;Develop compelling content that educates and inspires our audience about the future of AI and technology.&quot;
      }
    ],
    operations: [
      {
        title: &quot;Community Manager&quot;,
        location: &quot;Remote&quot;,
        type: &quot;Full-time&quot;,
        department: &quot;Operations&quot;,
        description: &quot;Build and nurture our growing community of AI specialists, developers, and tech enthusiasts.&quot;
      },
      {
        title: &quot;Talent Acquisition Specialist&quot;,
        location: &quot;Remote&quot;,
        type: &quot;Full-time&quot;,
        department: &quot;Operations&quot;,
        description: &quot;Help connect the right talent with the right opportunities on our platform through personalized matching.&quot;
      }

export default function Careers() {_// Sample job listings
  const _jobs = {
    engineering: [
      {
        title: "Senior Frontend Engineer", _location: "Remote", _type: "Full-time", _department: "Engineering", _description: "Join our frontend team to build beautiful, _responsive, _and accessible user interfaces for our AI-powered marketplace."},
      {_title: "AI Research Engineer", _location: "San Francisco, _CA", _type: "Full-time", _department: "Engineering", _description: "Work on cutting-edge AI technologies to power our matching algorithms and recommendation systems."},
      {_title: "Full Stack Developer", _location: "Remote", _type: "Full-time", _department: "Engineering", _description: "Develop end-to-end features across our platform, _working with modern technologies like React, _Node.js, _and PostgreSQL."}
    ],
    product: [
      {_title: "Product Manager", _location: "New York, _NY", _type: "Full-time", _department: "Product", _description: "Lead product development initiatives to enhance our marketplace experience for both talent and clients."},
      {_title: "UX/UI Designer", _location: "Remote", _type: "Full-time", _department: "Product", _description: "Create intuitive and engaging user experiences that make complex technology accessible to all users."}
    ],
    marketing: [
      {_title: "Growth Marketing Manager", _location: "Remote", _type: "Full-time", _department: "Marketing", _description: "Drive user acquisition and engagement strategies across multiple channels to grow our marketplace."},
      {_title: "Content Strategist", _location: "London, _UK", _type: "Full-time", _department: "Marketing", _description: "Develop compelling content that educates and inspires our audience about the future of AI and technology."}
    ],
    operations: [
      {_title: "Community Manager", _location: "Remote", _type: "Full-time", _department: "Operations", _description: "Build and nurture our growing community of AI specialists, _developers, _and tech enthusiasts."},
      {_title: "Talent Acquisition Specialist", _location: "Remote", _type: "Full-time", _department: "Operations", _description: "Help connect the right talent with the right opportunities on our platform through personalized matching."}
    ]
  },

  // Benefits list
  const benefits = [
    {
      title: &quot;Flexible Work&quot;,
      description: &quot;Remote-first culture with flexible hours to support your productivity and work-life balance.&quot;,
      icon: (
        <svg className=&quot;w-10 h-10 text-zion-cyan&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
          <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6&quot; />
        </svg>
      )
    },
    {
      title: &quot;Health & Wellness&quot;,
      description: &quot;Comprehensive health insurance and wellness programs to keep you at your best.&quot;,
      icon: (
        <svg className=&quot;w-10 h-10 text-zion-purple&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
          <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z&quot; />
        </svg>
      )
    },
    {
      title: &quot;Continuous Learning&quot;,
      description: &quot;Education stipends and dedicated learning time to help you grow professionally.&quot;,
      icon: (
        <svg className=&quot;w-10 h-10 text-zion-cyan&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
          <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot; />
        </svg>
      )
    },
    {
      title: &quot;Competitive Compensation&quot;,
      description: &quot;Salary packages that recognize your value, plus equity options to share in our success.&quot;,
      icon: (
        <svg className=&quot;w-10 h-10 text-zion-purple&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
          <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z&quot; />        </svg>
      )
    }
  ],

  return (_<AppLayout>
      <SEO 
        title=&quot;Careers at Zion - Join Our Team&quot; 
        description=&quot;Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform.&quot; 
        keywords=&quot;Zion careers, AI jobs, tech careers, remote work, startup jobs&quot;
        canonical=&quot;https://app.ziontechgroup.com/careers&quot;      />
      <main className=&quot;min-h-screen bg-zion-blue pt-24 pb-20&quot;>
        <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <GradientHeading>Join Our Team</GradientHeading>
            <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto&quot;>
              Help us build the future of AI and technology
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24&quot;>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Work at Zion?</h2>
              <p className="text-zion-slate-light text-lg mb-6">
                At Zion, we're not just building a marketplace, we're creating a new paradigm for how AI and                 technology are accessed, shared, and implemented globally.
                At Zion, _we're not just building a marketplace; we're creating a new paradigm for how AI and 
                technology are accessed, _shared, _and implemented globally.
              </p>
              <p className=&quot;text-zion-slate-light text-lg mb-6&quot;>
                Our team is passionate about democratizing access to cutting-edge technology and connecting 
                talented individuals with meaningful opportunities. We value innovation, _collaboration, _and 
                impact in everything we do.
              </p>
              <p className=&quot;text-zion-slate-light text-lg&quot;>
                If you're excited about shaping the future of AI and technology while working in a dynamic, 
                remote-first environment with a mission-driven team, we'd love to meet you.              </p>
            </div>
            <div className=&quot;rounded-lg overflow-hidden&quot;>
              <img 
                src=&quot;https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600&quot; 
                alt=&quot;Team collaboration&quot; 
                className=&quot;object-cover w-full h-full&quot;
              />
            </div>
          </div>
          
          <div className=&quot;mb-24&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-12 text-center&quot;>Our Benefits</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light&quot;>
                  <div className=&quot;bg-zion-blue inline-flex p-4 rounded-full mb-4&quot;>
                    {benefit.icon}
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{benefit.title}</h3>
                  <p className=&quot;text-zion-slate-light&quot;>{benefit.description}</p>                </div>
              ))}
            </div>
          </div>
          
          <div className=&quot;mb-24&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-12 text-center&quot;>Open Positions</h2>
            
            <Tabs defaultValue=&quot;engineering&quot; className=&quot;w-full&quot;>
              <TabsList className=&quot;bg-zion-blue-dark border border-zion-blue-light mb-8 w-full flex flex-wrap justify-center&quot;>
                <TabsTrigger value=&quot;engineering&quot; className=&quot;data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple&quot;>Engineering</TabsTrigger>
                <TabsTrigger value=&quot;product&quot; className=&quot;data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple&quot;>Product</TabsTrigger>
                <TabsTrigger value=&quot;marketing&quot; className=&quot;data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple&quot;>Marketing</TabsTrigger>
                <TabsTrigger value=&quot;operations&quot; className=&quot;data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple&quot;>Operations</TabsTrigger>
              </TabsList>
              
              {Object.entries(jobs).map(([department, jobList]) => (
                <TabsContent key={department} value={department} className=&quot;space-y-6&quot;>
                  {jobList.map((job, index) => (
                    <Card key={index} className=&quot;bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors&quot;>
                      <CardContent className=&quot;p-6&quot;>
                        <div className=&quot;flex flex-col md:flex-row md:items-center md:justify-between&quot;>
                          <div>
                            <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{job.title}</h3>
                            <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
                              <span className=&quot;text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full&quot;>{job.location}</span>
                              <span className=&quot;text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full&quot;>{job.type}</span>
                              <span className=&quot;text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full&quot;>{job.department}</span>
                            </div>
                            <p className=&quot;text-zion-slate-light mb-4&quot;>{job.description}</p>                          </div>
                          <Button className=&quot;w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;>
                            Apply Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                  ))}
                </TabsContent>;
              ))}
<<<<<<< HEAD
            </Tabs>;
          </div>;
          ;
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">;
            <h2 className="text-3xl font-bold text-white mb-6">Don't see the right position?</h2>;
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">;
              We're always looking for talented individuals who are passionate about AI and technology. ;
              Send us your resume and let's start a conversation.;
            </p>;
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
              Send General Application;
            </Button>;
          </div>;
        </div>;
      </main>;
    </AppLayout>;
  );
=======
            </Tabs>
          </div>
          
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md: p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Don't see the right position?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">              We're always looking for talented individuals who are passionate about AI and technology. 
              Send us your resume and let's start a conversation.
            </p>
            <Button className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;>
              Send General Application
            </Button>
          </div>
        </div>
      </main>
    </AppLayout>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
