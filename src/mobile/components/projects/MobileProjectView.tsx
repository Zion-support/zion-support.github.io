id: string;
    title: string;
    client: {
      name: string;
      avatar?: string
    },
    startDate: string;
    endDate?: string;
    status: string;
    totalAmount: string;
    progress: number;

import React from 'react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import {
  CheckCircle,
  ChevronRight,
  FileText,
  MessageSquare,
  Video,
} from 'lucide-react';
import { Progress } from '@/components / ui / progress';
import { SeverityIndicator } from '../common / SeverityIndicator';
import { use_router } from 'next / router';
import { toast } from 'sonner';

import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from 'lucide-react'
import { Progress } from "@/components/ui/progress",
import { SeverityIndicator } from "../common/SeverityIndicator",
import { useRouter } from 'next/router',
import { toast } from "sonner",

interface Milestone {
  id: string,
  title: string,
  dueDate: string,
  status: "completed" | "in_progress" | "pending",
  paymentStatus: "paid" | "pending" | "overdue",
  amount: string
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from 'lucide-react';
import { Progress } from "@/components/ui/progress",;
import { SeverityIndicator } from "../common/SeverityIndicator",;
import { useRouter } from 'next/router',;
import { toast } from "sonner",;
interface Milestone {;
  id: string,;
  title: string,;
  dueDate: string,;
  status: "completed" | "in_progress" | "pending",;
  paymentStatus: "paid" | "pending" | "overdue",;
  amount: string;
}
;
interface ProjectViewProps {;
  project: {;
    client: {;
      name: string,;
      avatar?: string;
    },;
    startDate: string,;
    endDate?: string,;
    status: string,;
    totalAmount: string,;
    progress: number,;
    description: string;
  milestones: Milestone[];

  };

export function MobileProjectView(): any ({ project, milestones }: ProjectViewProps) {;
  const router = useRouter();

  const startProjectCall = () => {;
    const roomId = `project-${project && project.id}`;
    toast && toast.success('Starting project call', {;
      description: 'Initializing video connection...',;
    });

    router && router.push(`/call/${roomId}`);

  const messageClient = () => {;
    toast && toast.info('Opening message thread with client', {;
      description: `Messaging ${project && project.client.name}...`,;
    // Navigate to messaging with this client;

export function MobileProjectView({ project, milestones }: ProjectViewProps) {
  const router = useRouter(),

  const startProjectCall = () => {
    const roomId = `project-${project.id}`,
    toast.success("Starting project call", {
      description: "Initializing video connection..."
    }),

    router.push(`/call/${roomId}`)

  const messageClient = () => {
    toast.info("Opening message thread with client", {
      description: `Messaging ${project.client.name}...`
    // Navigate to messaging with this client

  return (
    <div className="space-y-6 px-4 pb-24">
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium">{project.title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={project.client.avatar} alt={project.client.name} />
                    <AvatarFallback>{project.client.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{project.client.name}</span>
                </div>
              <Badge>{project.status}</Badge>
            <div className='space-y-1'>
              <div className='flex justify-between items-center text-sm'>

            <div className="space-y-1">
              <div className="flex justify-between items-center text-sm">

                <span>Progress</span>
                <span className="font-medium">{project.progress}%</span>
              <Progress value={project.progress} className="h-2" />
            <div className='grid grid-cols-2 gap-3 text-sm'>

            <div className="grid grid-cols-2 gap-3 text-sm">

                <p className="text-muted-foreground">Start Date</p>
                <p className="font-medium">{project.startDate}</p>
                <p className='text-muted-foreground'>End Date</p>
                <p className='font-medium'>{project.endDate |'Not set'}</p>
                <p className="text-muted-foreground">End Date</p>
                <p className="font-medium">{project.endDate || "Not set"}</p>
                <p className="text-muted-foreground">Total Amount</p>
                <p className="font-medium">{project.totalAmount}</p>
                <p className="text-muted-foreground">Status</p>
                <p className="font-medium capitalize">{project.status}</p>

              <p className="text-sm text-muted-foreground mb-1">Description</p>
              <p className="text-sm">{project.description}</p>
            <div className='flex gap-2'>
              <Button size='sm' variant='outline' className='gap-1 flex-1'>
                <FileText className='h-4 w-4' /> Contract
              </Button>
              <Button
                size='sm'
                variant='outline'
                className='gap-1 flex-1'
                onClick={messageClient}              >
                <MessageSquare className='h-4 w-4' /> Message
                className='gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light'
                onClick={startProjectCall}              >
                <Video className='h-4 w-4' /> Call

            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="gap-1 flex-1">
                <FileText className="h-4 w-4" /> Contract
                size="sm" 
                variant="outline" 
                className="gap-1 flex-1"
                onClick={messageClient}
              >
                <MessageSquare className="h-4 w-4" /> Message
                className="gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light"
                onClick={startProjectCall}
                <Video className="h-4 w-4" /> Call

        </CardContent>
      </Card>
      <section>
        <h2 className='text-lg font-medium mb-4'>Milestones</h2>
        <div className='space-y-3'>
          {milestones.map(milestone => (            <Card key={milestone.id}>
              <CardContent className='p-4'>
                <div className='flex justify-between items-start mb-2'>
                  <div className='flex items-center gap-2'>
                    {milestone.status === 'completed' ? (
                      <CheckCircle className='h-5 w-5 text-green-500' />

        <h2 className="text-lg font-medium mb-4">Milestones</h2>
        <div className="space-y-3">
          {milestones.map((milestone) => (
            <Card key={milestone.id}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    {milestone.status === "completed" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />

                    ) : (
                      <div className='h-5 w-5 rounded-full border-2 border-muted-foreground'></div>
                onClick={startProjectCall}>;
                <Video className='h-4 w-4' /> Call;
              </Button>;
            </div>;
        </CardContent>;
      </Card>;

      <section>;
        <h2 className='text-lg font-medium mb-4'>Milestones</h2>;
        <div className='space-y-3'>;
          {milestones && milestones.map(milestone => (            <Card key={milestone && milestone.id}>;
              <CardContent className='p-4'>;
                <div className='flex justify-between items-start mb-2'>;
                  <div className='flex items-center gap-2'>;
                    {milestone && milestone.status === 'completed' ? (;
                      <CheckCircle className='h-5 w-5 text-green-500' />;
                    ) : (;
                      <div className='h-5 w-5 rounded-full border-2 border-muted-foreground'></div>;
                    )}

                    }>;
                    {milestone && milestone.paymentStatus}
                  </Badge>;

                <div className='pl-7'>;
                  <div className='flex justify-between text-sm'>;
                    <span className='text-muted-foreground'>Due Date:</span>;
                    <span>{milestone && milestone.dueDate}</span>;
                    <span className='text-muted-foreground'>Amount:</span>;
                    <span>{milestone && milestone.amount}</span>;
                    <span className='text-muted-foreground'>Status:</span>;
                    <span className='capitalize'>;
                      {milestone && milestone.status.replace('_', ' ')}
                    </span>;

                    className='w-full mt-3 gap-1'>;
                    View Details <ChevronRight className='h-4 w-4' />;
          ))}

      </section>;
  );

    <div className='space - y-6 px - 4 pb - 24'>;
                    <h3 className="font-medium">{milestone.title}</h3>
                  <Badge
                    variant={
                      milestone.paymentStatus === 'paid'
                        ? 'default'
                        : milestone.paymentStatus === 'overdue'
                          ? 'destructive'
                          : 'outline'
                    }                  >
                    {milestone.paymentStatus}
                  </Badge>
                <div className='pl-7'>
                  <div className='flex justify-between text-sm'>
                    <span className='text-muted-foreground'>Due Date:</span>
                      milestone.paymentStatus === "paid" ? "default" : 
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline"
export function MobileProjectView({ project, milestones }: ProjectViewProps) {;
  const router = useRouter(),;
    const roomId = `project-${project.id}`,;
    toast.success("Starting project call", {;
      description: "Initializing video connection...";
    }),;
    router.push(`/call/${roomId}`);
    toast.info("Opening message thread with client", {;
      description: `Messaging ${project.client.name}...`;
  return (;
    <div className="space-y-6 px-4 pb-24">;
      <Card>;
        <CardContent className="p-4">;
          <div className="space-y-4">;
            <div className="flex items-center justify-between">;
              <div>;
                <h2 className="text-lg font-medium">{project.title}</h2>;
                <div className="flex items-center gap-2 mt-1">;
                  <Avatar className="h-6 w-6">;
                    <AvatarImage src={project.client.avatar} alt={project.client.name} />;
                    <AvatarFallback>{project.client.name[0]}</AvatarFallback>;
                  </Avatar>;
                  <span className="text-sm">{project.client.name}</span>;
              <Badge>{project.status}</Badge>;
            <div className="space-y-1">;
              <div className="flex justify-between items-center text-sm">;
                <span>Progress</span>;
                <span className="font-medium">{project.progress}%</span>;
              <Progress value={project.progress} className="h-2" />;
            <div className="grid grid-cols-2 gap-3 text-sm">;
                <p className="text-muted-foreground">Start Date</p>;
                <p className="font-medium">{project.startDate}</p>;
                <p className="text-muted-foreground">End Date</p>;
                <p className="font-medium">{project.endDate || "Not set"}</p>;
                <p className="text-muted-foreground">Total Amount</p>;
                <p className="font-medium">{project.totalAmount}</p>;
                <p className="text-muted-foreground">Status</p>;
                <p className="font-medium capitalize">{project.status}</p>;
              <p className="text-sm text-muted-foreground mb-1">Description</p>;
              <p className="text-sm">{project.description}</p>;
            <div className="flex gap-2">;
              <Button size="sm" variant="outline" className="gap-1 flex-1">;
                <FileText className="h-4 w-4" /> Contract;
              <Button;
                size="sm";
                variant="outline";
                className="gap-1 flex-1";
              >;
                <MessageSquare className="h-4 w-4" /> Message;
                className="gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light";
                <Video className="h-4 w-4" /> Call;
        <h2 className="text-lg font-medium mb-4">Milestones</h2>;
        <div className="space-y-3">;
          {milestones.map((milestone) => (;
            <Card key={milestone.id}>;
                <div className="flex justify-between items-start mb-2">;
                  <div className="flex items-center gap-2">;
                    {milestone.status === "completed" ? (;
                      <CheckCircle className="h-5 w-5 text-green-500" />;
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground"></div>;
                    <h3 className="font-medium">{milestone.title}</h3>;
                  <Badge;

                    variant={;
                      milestone.paymentStatus === "paid" ? "default" :;
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline";

                <div className="pl-7">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Due Date:</span>

                    <span>{milestone.dueDate}</span>
                    <span className="text-muted-foreground">Amount:</span>
                    <span>{milestone.amount}</span>
                    <span className="text-muted-foreground">Status:</span>
                    <span className="capitalize">{milestone.status.replace('_ ')}</span>
                    className="w-full mt-3 gap-1"
                    View Details <ChevronRight className="h-4 w-4" />

                <div className="pl-7">;
                  <div className="flex justify-between text-sm">;
                    <span className="text-muted-foreground">Due Date:</span>;
                    <span>{milestone.dueDate}</span>;
                    <span className="text-muted-foreground">Amount:</span>;
                    <span>{milestone.amount}</span>;
                    <span className="text-muted-foreground">Status:</span>;
                    <span className="capitalize">{milestone.status.replace('_ ')}</span>;
                    className="w-full mt-3 gap-1";
                    View Details <ChevronRight className="h-4 w-4" />;
