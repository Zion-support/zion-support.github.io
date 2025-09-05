<<<<<<< HEAD
import { SEO } from "@/components/SEO",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import Link from "next/link",;
import { CAREER_JOBS } from "@/data/careersJobs",;
;
export default function Careers() {;
  const applyEmail = "careers@ziontechgroup.com",;
  const jobs = CAREER_JOBS,;
;
  const whyWork =;
    "At Zion, we’re building more than a marketplace—we’re cultivating a community where forward-thinking engineers, product visionaries, and creatives collaborate to pioneer accessible AI technology. You’ll join a remote-first team dedicated to removing barriers and shaping solutions that empower everyday innovators. Our culture emphasizes trust, continuous learning, and meaningful impact, giving you the freedom to take ownership and experiment. We believe diverse perspectives fuel groundbreaking ideas, so we welcome talent from every background. You’ll work alongside passionate peers who care about real-world results, not just buzzwords. Zion’s growth means endless opportunities to expand your skills, explore new roles, and contribute to open-source initiatives. If you’re driven by curiosity and want to leave a lasting mark on the future of technology, Zion offers a supportive environment where your contributions truly matter. Come help us redefine what’s possible and make advanced AI accessible to all. Join us to transform ideas into reality today.",;
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
    },;
    {;
      title:"Impactful Projects",;
      description:"Contribute to innovations that make advanced technology accessible worldwide.",;
      icon:(;
        <svg className="w-10 h-10 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">;
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />;
        </svg>;
      );
    }
  ],;
;
  return (;
    <>;
      <SEO;
        title="Careers at Zion - Join Our Team";
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform.";
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
              <p className="text-zion-slate-light text-lg whitespace-pre-line">;
                {whyWork}
              </p>;
            </div>;
            <div className="rounded-lg overflow-hidden relative w-full h-full">;
              <img;
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600&q=80";
                alt="Team collaboration";
                className="object-cover";
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
                          <Button;
                            asChild;
                            className="w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                          >;
                            <Link href={`/careers/${job.id}`}>View Details</Link>;
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
import Link from "next/link",
import { CAREER_JOBS } from "@/data/careersJobs",
export default function Careers() {
  const applyEmail = "careers@ziontechgroup.com",
  const jobs = CAREER_JOBS,

  const whyWork =
    "At Zion, we’re building more than a marketplace—we’re cultivating a community where forward-thinking engineers, product visionaries, and creatives collaborate to pioneer accessible AI technology. You’ll join a remote-first team dedicated to removing barriers and shaping solutions that empower everyday innovators. Our culture emphasizes trust, continuous learning, and meaningful impact, giving you the freedom to take ownership and experiment. We believe diverse perspectives fuel groundbreaking ideas, so we welcome talent from every background. You’ll work alongside passionate peers who care about real-world results, not just buzzwords. Zion’s growth means endless opportunities to expand your skills, explore new roles, and contribute to open-source initiatives. If you’re driven by curiosity and want to leave a lasting mark on the future of technology, Zion offers a supportive environment where your contributions truly matter. Come help us redefine what’s possible and make advanced AI accessible to all. Join us to transform ideas into reality today.",import Link from "next/link";

export default function Careers() {_const _applyEmail = "careers@ziontechgroup.com";
  const _jobs = CAREER_JOBS;

  const _whyWork =
    "At Zion, _we’re building more than a marketplace—we’re cultivating a community where forward-thinking engineers, _product visionaries, _and creatives collaborate to pioneer accessible AI technology. You’ll join a remote-first team dedicated to removing barriers and shaping solutions that empower everyday innovators. Our culture emphasizes trust, _continuous learning, _and meaningful impact, _giving you the freedom to take ownership and experiment. We believe diverse perspectives fuel groundbreaking ideas, _so we welcome talent from every background. You’ll work alongside passionate peers who care about real-world results, _not just buzzwords. Zion’s growth means endless opportunities to expand your skills, _explore new roles, _and contribute to open-source initiatives. If you’re driven by curiosity and want to leave a lasting mark on the future of technology, _Zion offers a supportive environment where your contributions truly matter. Come help us redefine what’s possible and make advanced AI accessible to all. Join us to transform ideas into reality today.";

  // Benefits list
  const _benefits = [
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
          <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z&quot; />
        </svg>
      )
    },
    {
      title: &quot;Impactful Projects&quot;,
      description: &quot;Contribute to innovations that make advanced technology accessible worldwide.&quot;,
      icon: (
        <svg className=&quot;w-10 h-10 text-zion-cyan&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
          <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />        </svg>
      )
    }
  ],

  return (_<>
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
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Why Work at Zion?</h2>
              <p className=&quot;text-zion-slate-light text-lg whitespace-pre-line&quot;>
                {whyWork}              </p>
            </div>
            <div className=&quot;rounded-lg overflow-hidden relative w-full h-full&quot;>
              <img
                src=&quot;https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600&q=80&quot;
                alt=&quot;Team collaboration&quot;
                className=&quot;object-cover&quot;
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
                          <Button
                            asChild
                            className=&quot;w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;
                          >
                            <Link href={_`/careers/${job.id}`}>View Details</Link>
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
              We're always looking for talented individuals who are passionate about AI and technology.;
              Send us your resume and let's start a conversation. You can also;
              apply directly by emailing us at;
              <a;
                href={`mailto:${applyEmail}`}
                className="text-zion-cyan hover:text-zion-purple transition-colors";
              >;
                {applyEmail}
              </a>;
              .;
            </p>;
            <Button;
              asChild;
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
            >;
              <a href={`mailto:${applyEmail}`}>Send General Application</a>;
            </Button>;
          </div>;
        </div>;
      </main>;
    </>;
  ),;
=======
            </Tabs>
          </div>
          
          <div className=&quot;bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Don't see the right position?</h2>
            <p className=&quot;text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto&quot;>
              We're always looking for talented individuals who are passionate about AI and technology.
              Send us your resume and let's start a conversation. You can also
              apply directly by emailing us at
              <a
                href={`mailto:${applyEmail}`}
                className=&quot;text-zion-cyan hover:text-zion-purple transition-colors&quot;
              >
                {applyEmail}
              </Link>              .
            </p>
            <Button
              asChild
              className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;
            >
              <a href={`mailto:${applyEmail}`}>Send General Application</Link>            </Button>
          </div>
        </div>
      </main>
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
