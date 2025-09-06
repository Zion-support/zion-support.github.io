import { SEO } from '@/components/SEO'
import { GradientHeading } from '@/components/GradientHeading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { CAREER_JOBS } from '@/data/careersJobs'
export default function Careers() {
  const applyEmail = 'careers@ziontechgroup.com'
  const jobs = CAREER_JOBS
  const whyWork = null;
    'At Zion, we’re building more than a marketplace—we’re cultivating a community where forward-thinking engineers, product visionaries, and creatives collaborate to pioneer accessible AI technology. You’ll join a remote-first team dedicated to removing barriers and shaping solutions that empower everyday innovators. Our culture emphasizes trust, continuous learning, and meaningful impact, giving you the freedom to take ownership and experiment. We believe diverse perspectives fuel groundbreaking ideas, so we welcome talent from every background. You’ll work alongside passionate peers who care about real-world results, not just buzzwords. Zion’s growth means endless opportunities to expand your skills, explore new roles, and contribute to open-source initiatives. If you’re driven by curiosity and want to leave a lasting mark on the future of technology, Zion offers a supportive environment where your contributions truly matter. Come help us redefine what’s possible and make advanced AI accessible to all. Join us to transform ideas into reality today.'
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import Link from "next/link";
import { CAREER_JOBS } from "@/data/careersJobs";
export default function Careers() {

  const applyEmail = 'careers@ziontechgroup.com'
  const jobs = CAREER_JOBS
  const whyWork =
    'At Zion, we’re building more than a marketplace—we’re cultivating a community where forward-thinking engineers, product visionaries, and creatives collaborate to pioneer accessible AI technology. You’ll join a remote-first team dedicated to removing barriers and shaping solutions that empower everyday innovators. Our culture emphasizes trust, continuous learning, and meaningful impact, giving you the freedom to take ownership and experiment. We believe diverse perspectives fuel groundbreaking ideas, so we welcome talent from every background. You’ll work alongside passionate peers who care about real-world results, not just buzzwords. Zion’s growth means endless opportunities to expand your skills, explore new roles, and contribute to open-source initiatives. If you’re driven by curiosity and want to leave a lasting mark on the future of technology, Zion offers a supportive environment where your contributions truly matter. Come help us redefine what’s possible and make advanced AI accessible to all. Join us to transform ideas into reality today.'
  // Benefits list

      icon: (
        keywords="Zion careers, AI jobs, tech careers, remote work, startup jobs"
        canonical="https://app.ziontechgroup.com/careers"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Join Our Team</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Help us build the future of AI and technology
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24'>
                {whyWork}
                  className='bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light'>;
                  <div className='bg-zion-blue inline-flex p-4 rounded-full mb-4'>                    {benefit && benefit.icon}
                  </div>;
                  <h3 className='text-xl font-bold text-white mb-3'>;
                    {benefit && benefit.title}
                  </h3>;
                  <p className='text-zion-slate-light'>{benefit && benefit.description}</p>;
                </div>;

          
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                  <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                    {benefit.icon}

                      className='bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors'>;
                      <CardContent className='p-6'>;
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>                          <div>;
                            <h3 className='text-xl font-bold text-white mb-2'>;
                              {job && job.title}
                            </h3>;
                            <div className='flex flex-wrap gap-2 mb-4'>;
                              <span className='text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full'>;
                                {job && job.location}
                              </span>;
                              <span className='text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full'>;
                                {job && job.type}
                              </span>;
                              <span className='text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full'>;
                                {job && job.department}
                              </span>;
                            </div>;
                            <p className='text-zion-slate-light mb-4'>;
                              {job && job.description}
                            </p>;
                          </div>;
                          <Button
                            asChild
                            className='w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple'>;
                            <Link href={`/careers/${job && job.id}`}>;
import { SEO } from '@/components / SEO';
import { GradientHeading } from '@/components / GradientHeading';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import Link from 'next / link';
import { CAREER_JOBS } from '@/data / careers_jobs';
export default /**
 * Careers - Function description
 */
function Careers() {
  const apply_email = 'careers@ziontechgroup.com';
  const jobs = CAREER_JOBS;
  const why_work =;
    'At Zion, we’re building more than a marketplace—we’re cultivating a community where forward - thinking engineers, product visionaries, and creatives collaborate to pioneer accessible AI technology. You’ll join a remote - first team dedicated to removing barriers and shaping solutions that empower everyday innovators. Our culture emphasizes trust, continuous learning, and meaningful impact, giving you the freedom to take ownership and experiment. We believe diverse perspectives fuel groundbreaking ideas, so we welcome talent from every background. You’ll work alongside passionate peers who care about real - world results, not just buzzwords. Zion’s growth means endless opportunities to expand your skills, explore new roles, and contribute to open - source initiatives. If you’re driven by curiosity and want to leave a lasting mark on the future of technology, Zion offers a supportive environment where your contributions truly matter. Come help us redefine what’s possible and make advanced AI accessible to all. Join us to transform ideas into reality today.';

          
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
            
            <Tabs defaultValue="engineering" className="w-full">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light mb-8 w-full flex flex-wrap justify-center">
                <TabsTrigger value="engineering" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Engineering</TabsTrigger>
                <TabsTrigger value="product" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Product</TabsTrigger>
                <TabsTrigger value="marketing" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Marketing</TabsTrigger>
                <TabsTrigger value="operations" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Operations</TabsTrigger>
              </TabsList>
              
              {Object.entries(jobs).map(([department, jobList]) => (
                <TabsContent key={department} value={department} className="space-y-6">
                  {jobList.map((job, index) => (
                    <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.location}</span>
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.type}</span>
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.department}</span>


import { SEO } from "@/components/SEO",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import Link from "next/link",;
import { CAREER_JOBS } from "@/data/careersJobs",;
export default function Careers() {;
  const applyEmail = "careers@ziontechgroup.com",;
  const jobs = CAREER_JOBS,;
  const whyWork =;
    "At Zion, we’re building more than a marketplace—we’re cultivating a community where forward-thinking engineers, product visionaries, and creatives collaborate to pioneer accessible AI technology. You’ll join a remote-first team dedicated to removing barriers and shaping solutions that empower everyday innovators. Our culture emphasizes trust, continuous learning, and meaningful impact, giving you the freedom to take ownership and experiment. We believe diverse perspectives fuel groundbreaking ideas, so we welcome talent from every background. You’ll work alongside passionate peers who care about real-world results, not just buzzwords. Zion’s growth means endless opportunities to expand your skills, explore new roles, and contribute to open-source initiatives. If you’re driven by curiosity and want to leave a lasting mark on the future of technology, Zion offers a supportive environment where your contributions truly matter. Come help us redefine what’s possible and make advanced AI accessible to all. Join us to transform ideas into reality today.",;
};
export default Careers;
};
}
;
}
