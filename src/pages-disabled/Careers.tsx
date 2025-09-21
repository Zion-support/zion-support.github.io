import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/select",
import Link from "next/link",
import { CAREER_JOBS } from "@/data/careers",
export default function Careers() {
  const benefits = [
    { title: 'Health Insurance', icon: '🏥' },
    { title: 'Remote Work', icon: '🏠' },
    { title: 'Learning Budget', icon: '📚' };
    { title: 'Flexible Hours', icon: '⏰' }
  ],
  const jobs = {
    'Engineering': CAREER_JOBS.filter(job => job.department === 'Engineering');
    'Operations': CAREER_JOBS.filter(job => job.department === 'Operations')
  };

  return (
    <>
      <SEO
        title='Careers at Zion - Join Our Team'
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform."
        keywords='Zion careers AI jobs tech careers remote work startup jobs'
      />
      <div className='min-h-screen bg-zion-blue'>
        <div className='container mx-auto px-4 py-12'>
          <div className='text-center mb-16'>
            <GradientHeading>Join Our Team</GradientHeading>
            <p className='text-zion-cyan mt-6 max-w-3xl mx-auto text-lg'>
              We're building the future of AI and technology. Join us in creating innovative solutions that make a difference.
            </p>
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
                  <div className='bg-zion-blue inline-flex p-4 rounded-full mb-4'>
                    <span className='text-2xl'>{benefit.icon}</span>
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-2'>
                    {benefit.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-white mb-12 text-center'>
              Open Positions
            </h2>
            <Tabs defaultValue='Engineering' className='w-full'>
              <TabsList className='grid w-full grid-cols-2 mb-8'>
                <TabsTrigger
                  value='Engineering'
                  className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'
                >
                  Engineering
                </TabsTrigger>
                <TabsTrigger
                  value='Operations'
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
                        <div className='flex justify-between items-start mb-4'>
                          <div>
                            <h3 className='text-xl font-bold text-white mb-2'>
                              {job.title}
                            </h3>
                            <p className='text-zion-cyan'>
                              {job.location} • {job.type}
                            </p>
                          </div>
                          <Button asChild>
                            <Link href={`/careers/${job.id}`}>
                              Apply Now
                            </Link>
                          </Button>
                        </div>
                        <p className='text-zion-cyan/80 mb-4'>{job.description}</p>
                        <div className='flex flex-wrap gap-2'>
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <span
                              key={idx}
                              className='bg-zion-blue px-3 py-1 rounded-full text-xs text-zion-cyan'
                            >
                              {req}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}