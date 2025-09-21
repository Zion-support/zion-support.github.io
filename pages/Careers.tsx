import { SEO } from "../components/SEO";
import { GradientHeading } from "../components/GradientHeading";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Link from "next/link";
import { CAREER_JOBS } from "../data/careerJobs";
import { Briefcase, DollarSign, Heart, Lightbulb } from 'lucide-react';
import React from 'react';

const whyWork = `At Zion, we're building the future of AI and technology. Join a team of passionate innovators who are creating groundbreaking solutions that will shape tomorrow's digital landscape.

We offer:
• Competitive compensation and equity packages
• Flexible remote work opportunities
• Cutting-edge technology stack
• Collaborative and inclusive culture
• Professional development opportunities`;

const benefits = [
  {
    title: 'Competitive Compensation',
    description: 'Attractive salaries and performance-based bonuses.',
    icon: <DollarSign className='h-6 w-6 text-zion-purple' />,
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision plans.',
    icon: <Heart className='h-6 w-6 text-zion-purple' />,
  },
  {
    title: 'Professional Growth',
    description: 'Opportunities for learning, development, and career advancement.',
    icon: <Lightbulb className='h-6 w-6 text-zion-purple' />,
  },
  {
    title: 'Innovative Environment',
    description: 'Work on cutting-edge AI and technology projects.',
    icon: <Briefcase className='h-6 w-6 text-zion-purple' />,
  },
];

function Careers() {
  const jobs = CAREER_JOBS.reduce((acc, job) => {
    if (!acc[job.department]) {
      acc[job.department] = [];
    }
    acc[job.department].push(job);
    return acc;
  }, {});
  const applyEmail = 'careers@ziontechgroup.com';

return (
    <>
      <SEO
title='Careers at Zion - Join Our Team'
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform."
        keywords='Zion careers AI jobs tech careers remote work startup jobs'
        canonical='https://app.ziontechgroup.com/careers'
      />
      <main className='min-h-screen bg-zion-blue pt-24 pb-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <GradientHeading>Join Our Team</GradientHeading>
            <p className='mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto'>
              Help us build the future of AI and technology
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24'>
            <div>
              <h2 className='text-3xl font-bold text-white mb-6'>
                Why Work at Zion?
              </h2>
              <p className='text-zion-slate-light text-lg whitespace-pre-line'>
                {whyWork}
              </p>
            </div>
            <div className='rounded-lg overflow-hidden relative w-full h-full'>
              <img
src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600&q=80'
                alt='Team collaboration'
                className='object-cover'
              />
            </div>
          </div>
          <div className='mb-24'>
            <h2 className='text-3xl font-bold text-white mb-12 text-center'>
              Our Benefits
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {benefits.map((benefit, index) => (
                <div
key={index}
                  className='bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light'
                >
                  <div className='bg-zion-blue inline-flex p-4 rounded-full mb-4'>                    {benefit.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-3'>
                    {benefit.title}
                  </h3>
                  <p className='text-zion-slate-light'>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='mb-24'>
            <h2 className='text-3xl font-bold text-white mb-12 text-center'>
              Open Positions
            </h2>
            <Tabs defaultValue='engineering' className='w-full'>
              <TabsList className='bg-zion-blue-dark border border-zion-blue-light mb-8 w-full flex flex-wrap justify-center'>
                <TabsTrigger
value='engineering'
                  className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'
                >
                  Engineering
                </TabsTrigger>
                <TabsTrigger
value='product'
                  className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'
                >
                  Product
                </TabsTrigger>
                <TabsTrigger
value='marketing'
                  className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'
                >
                  Marketing
                </TabsTrigger>
                <TabsTrigger
value='operations'
                  className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'
                >
                  Operations
                </TabsTrigger>
              </TabsList>
              {Object.entries(jobs).map(([department, jobList]) => (
                <TabsContent
key={department}
                  value={department}
                  className='space-y-6'
                >
                  {jobList.map((job, index) => (
                    <Card
key={index}
                      className='bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors'
                    >
                      <CardContent className='p-6'>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>                          <div>
                            <h3 className='text-xl font-bold text-white mb-2'>
                              {job.title}
                            </h3>
                            <div className='flex flex-wrap gap-2 mb-4'>
                              <span className='text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full'>
                                {job.location}
                              </span>
                              <span className='text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full'>
                                {job.type}
                              </span>
                              <span className='text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full'>
                                {job.department}
                              </span>
                            </div>
                            <p className='text-zion-slate-light mb-4'>
                              {job.description}
                            </p>
                          </div>
                          <Button
asChild
                            className='w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple'
                          >
                            <Link href={`/careers/${job.id}`}>
                              View Details
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
          <div className='bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center'>
            <h2 className='text-3xl font-bold text-white mb-6'>
              Don't see the right position?
            </h2>
            <p className='text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto'>
              We're always looking for talented individuals who are passionate,
about AI and technology. Send us your resume and let's start a,
conversation. You can also apply directly by emailing us at
              <a
href={`mailto:${applyEmail}`}
                className='text-zion-cyan hover:text-zion-purple transition-colors'
              >
                {applyEmail}
              </a>
              .
            </p>
            <Button
asChild
              className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple'
            >
              <a href={`mailto:${applyEmail}`}>Send General Application</a>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
export default Careers;