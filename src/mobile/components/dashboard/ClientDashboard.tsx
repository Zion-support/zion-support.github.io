export function ClientDashboard() {
  return (
    <div className="space-y-6 px-4 pb-24">
      <section className="mt-4">
        <Button className="w-full py-6" size="lg">
          <Plus className="mr-2 h-5 w-5" /> Post a New Job
        </Button>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Active Projects</h2>
          <Link href="/mobile/projects">
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              View all <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Website Redesign</h3>
                  <div className="text-sm text-muted-foreground">In Progress • Due in 12 days</div>
                <Badge>3 Milestones</Badge>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">

                  <span>Progress</span>
                  <span className="font-medium">60%</span>
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{width: '60%'}}></div>

              <div className="flex justify-between items-center">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                    <UserCheck className="h-4 w-4" />

                  <div className="w-7 h-7 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center">

                <Button size="sm" variant="outline">View Details</Button>
          </CardContent>
        </Card>

          <h2 className="text-lg font-medium">Suggested Talents</h2>
          <Link href="/mobile/marketplace">
        <div className='space-y-3'>

        <div className="space-y-3">

              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-primary" />
                    <h3 className="font-medium">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">UX Designer • 5 years exp</p>
                <div className="bg-primary/10 text-primary font-medium self-start rounded-full px-2 py-1 text-xs">
                  95% match
              <div className="mt-3 flex gap-1 flex-wrap">
                <Badge variant="outline" className="text-xs">UI/UX</Badge>
                <Badge variant="outline" className="text-xs">Figma</Badge>
                <Badge variant="outline" className="text-xs">User Testing</Badge>
              <div className="flex gap-2 mt-3">
                <Button size="sm">View Profile</Button>
                <Button size="sm" variant="outline">Message</Button>

                    <h3 className="font-medium">Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">Full Stack Dev • 8 years exp</p>
                  89% match
              <div className='mt-3 flex gap-1 flex-wrap'>
                <Badge variant='outline' className='text-xs'>
                  React
                </Badge>
                  Node.js
                  AWS
                </Badge>              <div className="mt-3 flex gap-1 flex-wrap">

                <Badge variant="outline" className="text-xs">React</Badge>
                <Badge variant="outline" className="text-xs">Node.js</Badge>
                <Badge variant="outline" className="text-xs">AWS</Badge>

          <h2 className="text-lg font-medium">Recent Updates</h2>

          <CardContent className="p-4 space-y-4">
            <div className="flex gap-3 items-start">
              <div className="bg-primary/10 p-2 rounded-full">
                <Bell className="h-5 w-5 text-primary" />
                <p className="text-sm">
                  <strong>Website Redesign: </strong> Sarah submitted Milestone 2 for review
                </p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
            <div className='flex gap-3 items-start'>
              <div className='bg-primary/10 p-2 rounded-full'>
                <FileText className='h-5 w-5 text-primary' />

                <FileText className="h-5 w-5 text-primary" />

                  <strong>Mobile App Development:</strong> 3 new applicants for your job post
                <p className="text-xs text-muted-foreground">1 day ago</p>
            <Button variant='outline' className='w-full'>
              View All Notifications
            </Button>          </CardContent>      <section>

            <Button variant="outline" className="w-full">View All Notifications</Button>

import { ChevronRight, Plus, UserCheck, FileText, Bell } from 'lucide-react';
import Link from "next/link";
export function ClientDashboard() {;
  return (;
    <div className="space-y-6 px-4 pb-24">;
      <section className="mt-4">;
        <Button className="w-full py-6" size="lg">;
          <Plus className="mr-2 h-5 w-5" /> Post a New Job;
        </Button>;
      </section>;
      <section>;
        <div className="flex items-center justify-between mb-4">;
          <h2 className="text-lg font-medium">Active Projects</h2>;
          <Link href="/mobile/projects">;
            <Button variant="ghost" size="sm" className="h-8 gap-1">;
              View all <ChevronRight className="h-4 w-4" />;
          </Link>;
        </div>;
        <Card>;
          <CardContent className="p-4">;
            <div className="space-y-4">;
              <div className="flex justify-between items-start">;
                <div>;
                  <h3 className="font-medium">Website Redesign</h3>;
                  <div className="text-sm text-muted-foreground">In Progress • Due in 12 days</div>;
                <Badge>3 Milestones</Badge>;
              <div className="space-y-1">;
                <div className="flex justify-between text-sm">;
                  <span>Progress</span>;
                  <span className="font-medium">60%</span>;
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">;
                  <div className="h-full bg-primary rounded-full" style={{width: '60%'}}></div>;
              <div className="flex justify-between items-center">;
                <div className="flex -space-x-2">;
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">;
                    <UserCheck className="h-4 w-4" />;
                  <div className="w-7 h-7 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center">;
import React from 'react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import Link from 'next / link';
import React from './react';
import { Card, CardContent  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
import Link from './next / link';
export /**
 * ClientDashboard - Function description
 */
function ClientDashboard() {
    <div className='space - y-6 px - 4 pb - 24'>;
      <section className='mt - 4'>;
        <Button className='w - full py - 6' size='lg'>;
          <Plus className='mr - 2 h - 5 w - 5' /> Post a New Job;
        <div className='flex items - center justify - between mb - 4'>;
          <h2 className='text - lg font - medium'>Active Projects</h2>;
          <Link href='/mobile / projects'>;
            <Button variant='ghost' size='sm' className='h - 8 gap - 1'>;
              View all <ChevronRight className='h - 4 w - 4' />;
          <CardContent className='p - 4'>;
            <div className='space - y-4'>;
              <div className='flex justify - between items - start'>;
                  <h3 className='font - medium'>Website Redesign</h3>;
                  <div className='text - sm text - muted - foreground'>;
                    In Progress • Due in 12 days;
                <Badge > 3 Milestones</Badge>;
              <div className='space - y-1'>;
                <div className='flex justify - between text - sm'>;
                  <span > Progress</span>;
                  <span className='font - medium'>60%</span>;
                <div className='h - 2 bg - primary / 20 rounded - full overflow - hidden'>;
                  <div;
                    className='h - full bg - primary rounded - full';
                    style={{ width: '60%' }}
                  ></div>;
              <div className='flex justify - between items - center'>;
                <div className='flex -space - x-2'>;
                  <div className='w - 7 h - 7 rounded - full bg - primary / 20 flex items - center justify - center'>;
                    <UserCheck className='h - 4 w - 4' />;
                  <div className='w - 7 h - 7 rounded - full bg - secondary / 20 border - 2 border - background flex items - center justify - center'>;
                <Button size='sm' variant='outline'>;
                  View Details;
                </Button>              </div > import { ChevronRight, Plus, UserCheck, FileText, Bell } from 'lucide-react';
    <div className="space - y-6 px - 4 pb - 24">;
      <section className="mt - 4">;
        <Button className="w - full py - 6" size="lg">;
          <Plus className="mr - 2 h - 5 w - 5" /> Post a New Job;
        <div className="flex items - center justify - between mb - 4">;
          <h2 className="text - lg font - medium">Active Projects</h2>;
          <Link href="/mobile / projects">;
            <Button variant="ghost" size="sm" className="h - 8 gap - 1">;
              View all <ChevronRight className="h - 4 w - 4" />;
          <CardContent className="p - 4">;
            <div className="space - y-4">;
              <div className="flex justify - between items - start">;
                  <h3 className="font - medium">Website Redesign</h3>;
                  <div className="text - sm text - muted - foreground">In Progress • Due in 12 days</div>;
              <div className="space - y-1">;
                <div className="flex justify - between text - sm">;
                  <span className="font - medium">60%</span>;
                <div className="h - 2 bg - primary / 20 rounded - full overflow - hidden">;
                  <div className="h - full bg - primary rounded - full" style={{width: '60%'}}></div>;
              <div className="flex justify - between items - center">;
                <div className="flex -space - x-2">;
                  <div className="w - 7 h - 7 rounded - full bg - primary / 20 flex items - center justify - center">;
                    <UserCheck className="h - 4 w - 4" />;
                  <div className="w - 7 h - 7 rounded - full bg - secondary / 20 border - 2 border - background flex items - center justify - center">;

                <Button size="sm" variant="outline">View Details</Button>;
          </CardContent>;
        </Card>;

          <h2 className='text - lg font - medium'>Suggested Talents</h2>;
          <Link href='/mobile / marketplace'>;
        <div className='space - y-3'>;
              <div className='flex justify - between'>;
                <div className='flex items - center gap - 3'>;
                  <div className='w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center'>;
                    <UserCheck className='h - 6 w - 6 text - primary' />;
                    <h3 className='font - medium'>Sarah Johnson</h3>;
                    <p className='text - sm text - muted - foreground'>;

                      UX Designer • 5 years exp;
                    </p>;

                <div className='bg - primary / 10 text - primary font - medium self - start rounded - full px - 2 py - 1 text - xs'>;
                  95% match;
              <div className='mt - 3 flex gap - 1 flex - wrap'>;
                <Badge variant='outline' className='text - xs'>;
                  UI / UX;
                </Badge>;
                  Figma;
                  User Testing;
              <div className='flex gap - 2 mt - 3'>;

                <Button size='sm'>View Profile</Button>;
                  Message;
                </Button>              </div>;

                    <h3 className='font - medium'>Michael Chen</h3>;

                      Full Stack Dev • 8 years exp;

                  89% match;
                  React;
                  Node.js;
                  AWS;
                </Badge>              <div className="mt - 3 flex gap - 1 flex - wrap">;
                <Badge variant="outline" className="text - xs">React</Badge>;
                <Badge variant="outline" className="text - xs">Node.js</Badge>;
                <Badge variant="outline" className="text - xs">AWS</Badge>;
              <div className="flex gap - 2 mt - 3">;
                <Button size="sm">View Profile</Button>;
                <Button size="sm" variant="outline">Message</Button>;

  );
}

          <h2 className='text - lg font - medium'>Recent Updates</h2>;
          <CardContent className='p - 4 space - y-4'>;
            <div className='flex gap - 3 items - start'>;
              <div className='bg - primary / 10 p - 2 rounded - full'>;
                <Bell className='h - 5 w - 5 text - primary' />;
                <p className='text - sm'>;
                  <strong > Website Redesign:</strong> Sarah submitted Milestone 2;
                  for review;
                <p className='text - xs text - muted - foreground'>2 hours ago</p>;
                <FileText className='h - 5 w - 5 text - primary' />;
                  <strong > Mobile App Development:</strong> 3 new applicants for;
                  your job post;
                <p className='text - xs text - muted - foreground'>1 day ago</p>;
            <Button variant='outline' className='w - full'>;
              View All Notifications;
            </Button>          </CardContent>      <section>;
          <h2 className="text - lg font - medium">Recent Updates</h2>;
          <CardContent className="p - 4 space - y-4">;
            <div className="flex gap - 3 items - start">;
              <div className="bg - primary / 10 p - 2 rounded - full">;
                <Bell className="h - 5 w - 5 text - primary" />;
                <p className="text - sm">;
                  <strong > Website Redesign: </strong> Sarah submitted Milestone 2 for review;
                <p className="text - xs text - muted - foreground">2 hours ago</p>;
                <FileText className="h - 5 w - 5 text - primary" />;
                  <strong > Mobile App Development:</strong> 3 new applicants for your job post;
                <p className="text - xs text - muted - foreground">1 day ago</p>;
            <Button variant="outline" className="w - full">View All Notifications</Button>;
    </div>);