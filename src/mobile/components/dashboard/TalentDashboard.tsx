<<<<<<< HEAD
<<<<<<< HEAD
export function TalentDashboard() {
  return (
=======
import React from "react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ChevronRight, FileText, Image, Clock, Zap, BookOpen } from 'lucide-react'
import Link from "next/link",
xport function TalentDashboard() {
ursor/fix-website-loading-errors-and-merge-6662
import React from 'react'
import {
  Card
  CardContent
  CardHeader
  CardTitle
  CardDescription
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
  ChevronRight
  FileText
  Image
  Clock
  Zap
  BookOpen
} from 'lucide-react'
import Link from 'next/link'
import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, FileText, Image, Clock, Zap, BookOpen } from 'lucide-react'
import Link from "next/link"

import { ChevronRight, FileText, Image, Clock, Zap, BookOpen } from 'lucide-react'
import Link from "next/link";
import React from "react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ChevronRight, FileText, Image, Clock, Zap, BookOpen } from 'lucide-react'
import Link from "next/link",
export function TalentDashboard() {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    <div className="space-y-6 px-4 pb-24">
=======
export function TalentDashboard() {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-lg font-medium'>New Job Matches</h2>
          <Link href='/mobile/marketplace'>
            <Button variant='ghost' size='sm' className='h-8 gap-1'>
              View all <ChevronRight className='h-4 w-4' />
            </Button>
          </Link>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

          <Card>
=======
        <div className='space-y-3'>
        
        <div className="space-y-3">
          <Card>
        <div className='space-y-3'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          <Card>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-medium">Senior React Developer</h3>
                  <div className="text-sm text-muted-foreground">TechCorp Inc.</div>
                  <div className="flex items-center gap-1 mt-1">
                    <Badge variant="secondary" className="text-xs">Remote</Badge>
                    <Badge variant="secondary" className="text-xs">Full-time</Badge>
                  </div>
                </div>
                <div className='flex flex-col items-end'>
                  <div className='bg-primary/10 text-primary font-medium rounded-full px-2 py-1 text-xs'>
                    92% match
                  </div>
                </div>
              </div>
<<<<<<< HEAD
              <div className="flex gap-2 mt-3">
                <Button size="sm">Apply Now</Button>
                <Button size="sm" variant="outline">View Details</Button>
              </div>
            </CardContent>
          </Card>
<<<<<<< HEAD

=======
ursor/fix-website-loading-errors-and-merge-6662
          
          
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          

          


          <Card>
<<<<<<< HEAD
            <CardContent className="p-4">
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          <Card>
            <CardContent className="p-4">
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-medium">UX/UI Designer</h3>
                  <div className="text-sm text-muted-foreground">Creative Studios</div>
                  <div className="flex items-center gap-1 mt-1">
                    <Badge variant="secondary" className="text-xs">Hybrid</Badge>
                    <Badge variant="secondary" className="text-xs">Contract</Badge>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="bg-primary/10 text-primary font-medium rounded-full px-2 py-1 text-xs">
                    87% match
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">4 hours ago</span>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <div className='flex gap-2 mt-3'>
                <Button size='sm'>Apply Now</Button>
                <Button size='sm' variant='outline'>
                  View Details
<<<<<<< HEAD
                </Button>              </div>              <div className="flex gap-2 mt-3">
              <div className="flex gap-2 mt-3">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <div className="flex gap-2 mt-3">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


                <Button size="sm">Apply Now</Button>
<<<<<<< HEAD
                <Button size="sm" variant="outline">View Details</Button>
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD

=======
ursor/fix-website-loading-errors-and-merge-6662
      <section>
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-xs text-muted-foreground">Active Applications</div>
              </div>
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-xs text-muted-foreground">Interviews Scheduled</div>
              </div>
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-xs text-muted-foreground">Jobs Saved</div>
              </div>
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-xs text-muted-foreground">Jobs Viewed</div>
              </div>
            </div>
            <Button variant='outline' className='w-full mt-4'>              View All Applications      <section>
      
      <section>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


      <section>
        <h2 className='text-lg font-medium mb-4'>Application Tracker</h2>
        <Card>
          <CardContent className='p-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='text-center p-3 bg-primary/5 rounded-lg'>
                <div className='text-2xl font-bold text-primary'>3</div>
                <div className='text-xs text-muted-foreground'>
                  Active Applications
                </div>
              </div>
              <div className='text-center p-3 bg-primary/5 rounded-lg'>
                <div className='text-2xl font-bold text-primary'>2</div>
                <div className='text-xs text-muted-foreground'>
                  Interviews Scheduled
                </div>
              </div>
              <div className='text-center p-3 bg-primary/5 rounded-lg'>
                <div className='text-2xl font-bold text-primary'>5</div>
                <div className='text-xs text-muted-foreground'>Jobs Saved</div>
              </div>
              <div className='text-center p-3 bg-primary/5 rounded-lg'>
                <div className='text-2xl font-bold text-primary'>12</div>
                <div className='text-xs text-muted-foreground'>Jobs Viewed</div>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <Button variant='outline' className='w-full mt-4'>              View All Applications      <section>
        <h2 className="text-lg font-medium mb-4">Application Tracker</h2>
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-xs text-muted-foreground">Active Applications</div>
              </div>
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-xs text-muted-foreground">Interviews Scheduled</div>
              </div>
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-xs text-muted-foreground">Jobs Saved</div>
              </div>
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-xs text-muted-foreground">Jobs Viewed</div>
              </div>
            </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a




            <Button variant="outline" className="w-full mt-4">
<<<<<<< HEAD
              View All Applications
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            </Button>
          </CardContent>
        </Card>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    <div className='space-y-6 px-4 pb-24'>;
      <section>;
        <div className='flex items-center justify-between mb-4'>;
          <h2 className='text-lg font-medium'>New Job Matches</h2>;
          <Link href='/mobile/marketplace'>;
            <Button variant='ghost' size='sm' className='h-8 gap-1'>;
              View all <ChevronRight className='h-4 w-4' />;
            </Button>;
          </Link>;
        </div>;

        <div className='space-y-3'>;
          <Card>;
            <CardContent className='p-4'>;
              <div className='flex justify-between items-start'>;
                <div className='space-y-1'>;
                  <h3 className='font-medium'>Senior React Developer</h3>;
                  <div className='text-sm text-muted-foreground'>;
                    TechCorp Inc.;
                  </div>;
                  <div className='flex items-center gap-1 mt-1'>;
                    <Badge variant='secondary' className='text-xs'>;
                      Remote;
                    </Badge>;
                    <Badge variant='secondary' className='text-xs'>;
                      Full-time;
                    </Badge>;
                  </div>;
                </div>;
                <div className='flex flex-col items-end'>;
                  <div className='bg-primary/10 text-primary font-medium rounded-full px-2 py-1 text-xs'>;
                    92% match;
                  </div>;
                  <span className='text-xs text-muted-foreground mt-1'>;
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
  ChevronRight,
  FileText,
  Image,
  Clock,
  Zap,
  BookOpen,
} from 'lucide-react';
import Link from 'next / link';
import React from './react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
import { ChevronRight, FileText, Image, Clock, Zap, BookOpen } from 'lucide-react';
import Link from './next / link';
export /**
 * TalentDashboard - Function description
 */
function TalentDashboard() {
  return (
    <div className='space - y-6 px - 4 pb - 24'>;
      <section>;
        <div className='flex items - center justify - between mb - 4'>;
          <h2 className='text - lg font - medium'>New Job Matches</h2>;
          <Link href='/mobile / marketplace'>;
            <Button variant='ghost' size='sm' className='h - 8 gap - 1'>;
              View all <ChevronRight className='h - 4 w - 4' />;
            </Button>;
          </Link>;
        </div>;
        <div className='space - y-3'>;
          <Card>;
            <CardContent className='p - 4'>;
              <div className='flex justify - between items - start'>;
                <div className='space - y-1'>;
                  <h3 className='font - medium'>Senior React Developer</h3>;
                  <div className='text - sm text - muted - foreground'>;
                    TechCorp Inc.;
                  </div>;
                  <div className='flex items - center gap - 1 mt - 1'>;
                    <Badge variant='secondary' className='text - xs'>;
                      Remote;
                    </Badge>;
                    <Badge variant='secondary' className='text - xs'>;
                      Full - time;
                    </Badge>;
                  </div>;
                </div>;
                <div className='flex flex - col items - end'>;
                  <div className='bg - primary / 10 text - primary font - medium rounded - full px - 2 py - 1 text - xs'>;
                    92% match;
                  </div>;
                  <span className='text - xs text - muted - foreground mt - 1'>;
                    2 days ago;
                  </span>;
                </div>;
              </div>;

              <div className='flex gap - 2 mt - 3'>;

                <Button size='sm'>Apply Now</Button>;
                <Button size='sm' variant='outline'>;
                  View Details;
                </Button>              </div>;
            </CardContent>;
          </Card>;

          <Card>;
            <CardContent className='p - 4'>;
              <div className='flex justify - between items - start'>;
                <div className='space - y-1'>;
                  <h3 className='font - medium'>UX / UI Designer</h3>;
                  <div className='text - sm text - muted - foreground'>;
                    Creative Studios;
                  </div>;
                  <div className='flex items - center gap - 1 mt - 1'>;
                    <Badge variant='secondary' className='text - xs'>;
                      Hybrid;
                    </Badge>;
                    <Badge variant='secondary' className='text - xs'>;

                      Contract;
                    </Badge>;
                  </div>;
                </div>;

                <div className='flex flex - col items - end'>;
                  <div className='bg - primary / 10 text - primary font - medium rounded - full px - 2 py - 1 text - xs'>;
                    87% match;
                  </div>;
                  <span className='text - xs text - muted - foreground mt - 1'>;

                    4 hours ago;
                  </span>;
                </div>;
              </div>;

              <div className='flex gap - 2 mt - 3'>;
                <Button size='sm'>Apply Now</Button>;
                <Button size='sm' variant='outline'>;
                  View Details;
                </Button>              </div>              <div className="flex gap - 2 mt - 3">;

                <Button size="sm">Apply Now</Button>;
                <Button size="sm" variant="outline">View Details</Button>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </section>;

      <section>;
        <h2 className='text - lg font - medium mb - 4'>Application Tracker</h2>;
        <Card>;
          <CardContent className='p - 4'>;
            <div className='grid grid - cols - 2 gap - 4'>;
              <div className='text - center p - 3 bg - primary / 5 rounded - lg'>;
                <div className='text - 2xl font - bold text - primary'>3</div>;
                <div className='text - xs text - muted - foreground'>;
                  Active Applications;
                </div>;
              </div>;
              <div className='text - center p - 3 bg - primary / 5 rounded - lg'>;
                <div className='text - 2xl font - bold text - primary'>2</div>;
                <div className='text - xs text - muted - foreground'>;
                  Interviews Scheduled;
                </div>;
              </div>;
              <div className='text - center p - 3 bg - primary / 5 rounded - lg'>;
                <div className='text - 2xl font - bold text - primary'>5</div>;
                <div className='text - xs text - muted - foreground'>Jobs Saved</div>;
              </div>;
              <div className='text - center p - 3 bg - primary / 5 rounded - lg'>;
                <div className='text - 2xl font - bold text - primary'>12</div>;
                <div className='text - xs text - muted - foreground'>Jobs Viewed</div>;
              </div>;
            </div>;
            <Button variant='outline' className='w - full mt - 4'>              View All Applications      <section>;
        <h2 className="text - lg font - medium mb - 4">Application Tracker</h2>;
        <Card>;
          <CardContent className="p - 4">;
            <div className="grid grid - cols - 2 gap - 4">;
              <div className="text - center p - 3 bg - primary / 5 rounded - lg">;
                <div className="text - 2xl font - bold text - primary">3</div>;
                <div className="text - xs text - muted - foreground">Active Applications</div>;
              </div>;
              <div className="text - center p - 3 bg - primary / 5 rounded - lg">;
                <div className="text - 2xl font - bold text - primary">2</div>;
                <div className="text - xs text - muted - foreground">Interviews Scheduled</div>;
              </div>;
              <div className="text - center p - 3 bg - primary / 5 rounded - lg">;
                <div className="text - 2xl font - bold text - primary">5</div>;
                <div className="text - xs text - muted - foreground">Jobs Saved</div>;
              </div>;
              <div className="text - center p - 3 bg - primary / 5 rounded - lg">;
                <div className="text - 2xl font - bold text - primary">12</div>;
                <div className="text - xs text - muted - foreground">Jobs Viewed</div>;
              </div>;
            </div>;
            <Button variant="outline" className="w - full mt - 4">;

              View All Applications;
            </Button>;
          </CardContent>;
        </Card>;
      </section>;

      
      <section>
        <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">

          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-1"
            aria-label="Update Resume">;
            <FileText className="h-5 w-5 mb-1" aria-hidden="true" />;
            <span>Update Resume</span>;
          </Button>;
          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-1"
            aria-label="View Portfolio">;
            <Image className="h-5 w-5 mb-1" aria-hidden="true" />;
            <span>Portfolio</span>;
          </Button>;
          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-1"


            aria-label="Set Availability"
          >
            <Clock className="h-5 w-5 mb-1" aria-hidden="true" />
            <span>Availability</span>
          </Button>
<<<<<<< HEAD




          <Button variant="outline" className="h-auto py-4 flex flex-col gap-1" aria-label="AI Resume Boost">
=======
          <Button
            variant='outline'
            className='h-auto py-4 flex flex-col gap-1'
            aria-label='AI Resume Boost'
          >
            <Zap className='h-5 w-5 mb-1' aria-hidden='true' />            <span>AI Resume Boost</span>
          </Button>
        </div>
      </section>      <section>
        <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-1"
            aria-label="Update Resume"
          >
            <FileText className="h-5 w-5 mb-1" aria-hidden="true" />
            <span>Update Resume</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-1"
            aria-label="View Portfolio"
          >
            <Image className="h-5 w-5 mb-1" aria-hidden="true" />
            <span>Portfolio</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-1"
            aria-label="Set Availability"
          >
            <Clock className="h-5 w-5 mb-1" aria-hidden="true" />
            <span>Availability</span>
          </Button>
ursor/fix-website-loading-errors-and-merge-6662
          <Button variant="outline" className="h-auto py-4 flex flex-col gap-1" aria-label="AI Resume Boost">
      
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <section>
        <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-1"
            aria-label="Update Resume"
          >
            <FileText className="h-5 w-5 mb-1" aria-hidden="true" />
            <span>Update Resume</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-1"
            aria-label="View Portfolio"
          >
            <Image className="h-5 w-5 mb-1" aria-hidden="true" />
            <span>Portfolio</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-1"
            aria-label="Set Availability"
          >
            <Clock className="h-5 w-5 mb-1" aria-hidden="true" />
            <span>Availability</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col gap-1" aria-label="AI Resume Boost">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <Zap className="h-5 w-5 mb-1" aria-hidden="true" />
            <span>AI Resume Boost</span>
          </Button>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD

      

=======
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-lg font-medium'>Learning Hub</h2>
          <Button variant='ghost' size='sm' className='h-8'>            View all
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Learning Hub</h2>
          <Button variant="ghost" size="sm" className="h-8">


            View all
          </Button>
        </div>
        <Card>
<<<<<<< HEAD
          <CardContent className="p-4">


=======
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Learning Hub</h2>
          <Button variant="ghost" size="sm" className="h-8">
          </Button>
        </div>
        <Card>
          <CardContent className='p-4'>
            <div className='flex items-center gap-3'>
              <div
                className='bg-primary/10 p-3 rounded-full'
                aria-hidden='true'
              >
                <BookOpen className='h-6 w-6 text-primary' />
              </div>
              <div>
                <h3 className='font-medium'>Improve your profile visibility</h3>
                <p className='text-sm text-muted-foreground'>
                  5 tips for getting noticed by clients
                </p>              </div>          <CardContent className="p-4">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full" aria-hidden="true">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Improve your profile visibility</h3>
                <p className="text-sm text-muted-foreground">5 tips for getting noticed by clients</p>
<<<<<<< HEAD
=======
      
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Learning Hub</h2>
          <Button variant="ghost" size="sm" className="h-8">
            View all
          </Button>
        </div>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full" aria-hidden="true">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Improve your profile visibility</h3>
                <p className="text-sm text-muted-foreground">5 tips for getting noticed by clients</p>
              </div>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </div>
          </CardContent>
        </Card>
      </section>
import React from "react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { ChevronRight, FileText, Image, Clock, Zap, BookOpen } from 'lucide-react';
import Link from "next/link";
export function TalentDashboard() {;
  return (;
    <div className="space-y-6 px-4 pb-24">;
      <section>;
        <div className="flex items-center justify-between mb-4">;
          <h2 className="text-lg font-medium">New Job Matches</h2>;
          <Link href="/mobile/marketplace">;
            <Button variant="ghost" size="sm" className="h-8 gap-1">;
              View all <ChevronRight className="h-4 w-4" />;
            </Button>;
          </Link>;
        </div>;
        <div className="space-y-3">;
          <Card>;
            <CardContent className="p-4">;
              <div className="flex justify-between items-start">;
                <div className="space-y-1">;
                  <h3 className="font-medium">Senior React Developer</h3>;
                  <div className="text-sm text-muted-foreground">TechCorp Inc.</div>;
                  <div className="flex items-center gap-1 mt-1">;
                    <Badge variant="secondary" className="text-xs">Remote</Badge>;
                    <Badge variant="secondary" className="text-xs">Full-time</Badge>;
                  </div>;
                </div>;
                <div className="flex flex-col items-end">;
                  <div className="bg-primary/10 text-primary font-medium rounded-full px-2 py-1 text-xs">;
                    92% match;
                  </div>;
                  <span className="text-xs text-muted-foreground mt-1">2 days ago</span>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
          <Card>;
                <Button size="sm">Apply Now</Button>;
                <Button size="sm" variant="outline">View Details</Button>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </section>;
      <section>;
              View All Applications;
            </Button>;
          </CardContent>;
        </Card>;
      </section>;
            <FileText className="h-5 w-5 mb-1" aria-hidden="true" />;
            <span>Update Resume</span>;
          </Button>;
          <Button;
            variant="outline";
            className="h-auto py-4 flex flex-col gap-1";
            aria-label="View Portfolio";
          >;
            <Image className="h-5 w-5 mb-1" aria-hidden="true" />;
            <span>Portfolio</span>;
          </Button>;
<<<<<<< HEAD
          <Button;
            variant="outline";
            className="h-auto py-4 flex flex-col gap-1";
            aria-label="Set Availability";
          >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            aria-label="Set Availability"
          >
            <Clock className="h-5 w-5 mb-1" aria-hidden="true" />
            <span>Availability</span>
          </Button>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a




          <Button variant="outline" className="h-auto py-4 flex flex-col gap-1" aria-label="AI Resume Boost">
            <Zap className="h-5 w-5 mb-1" aria-hidden="true" />
            <span>AI Resume Boost</span>
          </Button>
        </div>
      </section>
      <section>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full" aria-hidden="true">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Improve your profile visibility</h3>
                <p className="text-sm text-muted-foreground">5 tips for getting noticed by clients</p>

              </div>

            </div>
          </CardContent>
        </Card>
      </section>
          <Button;
            variant="outline";
            className="h-auto py-4 flex flex-col gap-1";
            aria-label="Set Availability";
          >;
            <Clock className="h-5 w-5 mb-1" aria-hidden="true" />;
            <span>Availability</span>;
          </Button>;
          <Button variant="outline" className="h-auto py-4 flex flex-col gap-1" aria-label="AI Resume Boost">;
            <Zap className="h-5 w-5 mb-1" aria-hidden="true" />;
            <span>AI Resume Boost</span>;
          </Button>;
        </div>;
      </section>;

      <section>;
        <div className='flex items-center justify-between mb-4'>;
          <h2 className='text-lg font-medium'>Learning Hub</h2>;
          <Button variant='ghost' size='sm' className='h-8'>            View all;
          </Button>;
        </div>;
        <Card>      ;
      <section>;
        <div className="flex items-center justify-between mb-4">;
          <h2 className="text-lg font-medium">Learning Hub</h2>;
          <Button variant="ghost" size="sm" className="h-8">;
<<<<<<< HEAD
          </Button>;
        </div>;
        <Card>;
          <CardContent className='p-4'>;
            <div className='flex items-center gap-3'>;
              <div
                className='bg-primary/10 p-3 rounded-full'
                aria-hidden='true'>;
                <BookOpen className='h-6 w-6 text-primary' />;
              </div>;
              <div>;
                <h3 className='font-medium'>Improve your profile visibility</h3>;
                <p className='text-sm text-muted-foreground'>;
                  5 tips for getting noticed by clients;
                </p>              </div>          <CardContent className="p-4">;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <div className="flex items-center gap-3">;
              <div className="bg-primary/10 p-3 rounded-full" aria-hidden="true">;
                <BookOpen className="h-6 w-6 text-primary" />;
              </div>;
              <div>;
                <h3 className="font-medium">Improve your profile visibility</h3>;
                <p className="text-sm text-muted-foreground">5 tips for getting noticed by clients</p>;
            </div>;
          </CardContent>;
        </Card>;
      </section>;
<<<<<<< HEAD
<<<<<<< HEAD

  );
}

=======
    </div>;
  );
}
;
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    </div>);
}

    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  )
=======
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  )
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
