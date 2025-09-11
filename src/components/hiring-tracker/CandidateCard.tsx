<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react'
// Local stub is used in place of the @hello-pangea/dnd package which isn't
// available in this environment.

import { Draggable } from '@/lib/dnd-stub'
import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link'
import { JobApplication } from '@/types/jobs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed to avoid conflict
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  MessageSquare
  User
  FileText
  MoreVertical
  Calendar
  AlertTriangle
  BriefcaseIcon
  MessageSquare,
  User,
  FileText,
  MoreVertical,
  Calendar,
  AlertTriangle,;
  BriefcaseIcon;
} from 'lucide-react';// Local stub is used in place of the @hello-pangea/dnd package which isn't
// available in this environment.
import { Draggable } from "@/lib/dnd-stub"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
import { JobApplication } from "@/types/jobs"
import { Card, CardContent } from "@/components/ui/card"

import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react'

  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { ScoreBadge } from '@/components/jobs/applications/ScoreBadge'
import { toast } from '@/hooks/use-toast';
import { HireConfirmationModal } from './HireConfirmationModal';
import Image from 'next/image'; // Import next/image

interface CandidateCardProps {
  application: JobApplication;
  index: number
export function CandidateCard({ application, index }: CandidateCardProps) {

  const [showNotes, setShowNotes] = useState(false)
  const [notes, setNotes] = useState(application.notes |'')
  const [showHireModal, setShowHireModal] = useState(false)
  const [avatarError, setAvatarError] = useState(false)
  // Check if application is stalled (no activity for 7 days)
  const isStalled = null;
    application.updated_at &&
    new Date(application.updated_at).getTime() <
      Date.now() - 7 * 24 * 60 * 60 * 1000
import { useState } from "react",
// Local stub is used in place of the @hello-pangea/dnd package which isn't
// available in this environment.
import { Draggable } from "@/lib/dnd-stub",
import { formatDistanceToNow } from "date-fns",
import Link from "next/link",
import { JobApplication } from "@/types/jobs",
import { Card, CardContent } from "@/components/ui/card",
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react'
  const handleSaveNotes = () => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({
      title: 'Notes saved'
      description: 'Your notes have been saved'
      title: 'Notes saved'
      description: 'Your notes have been saved'
      title: 'Notes saved',
      description: 'Your notes have been saved',
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({


      title: 'Notes saved',
      description: 'Your notes have been saved',


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    })
    setShowNotes(false)
  }
  const handleHireConfirmed = () => {
    // Hiring process completed via the modal
    toast({
      title: 'Hiring process initiated'
      description: 'Offer has been sent to the talent.'
    })
  }
<<<<<<< HEAD
<<<<<<< HEAD
  const candidateName = application.talent_profile?.full_name |'Candidate'
  const candidateName = application.talent_profile?.full_name |'Candidate'
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { useState } from 'react';

=======


import { useState } from 'react';

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const candidateName = application.talent_profile?.full_name || 'Candidate'
  return (
    <>
      <Draggable draggableId={application.id} index={index}>
        {provided => (
          <Card
            className='mb-2 p-0 shadow-sm border'
            ref={provided.innerRef}            {...provided.draggableProps}

      title: "Notes saved",
      description: "Your notes have been saved"
    }),
    setShowNotes(false)
  },
  
  const handleHireConfirmed = () => {
    // Hiring process completed via the modal
    toast({
      title: "Hiring process initiated",
      description: "Offer has been sent to the talent."
    })
  },
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const candidateName = application.talent_profile?.full_name || "Candidate",
  
  return (
    <>
      <Draggable draggableId={application.id} index={index}>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {provided => (
          <Card
            className='mb-2 p-0 shadow-sm border'
            ref={provided.innerRef}            {...provided.draggableProps}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {(provided) => (
          <Card 
            className="mb-2 p-0 shadow-sm border"
import { useState } from "react",;
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Local stub is used in place of the @hello-pangea/dnd package which isn't;
// available in this environment.;
import { Draggable } from '@/lib/dnd-stub';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { JobApplication } from '@/types/jobs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed to avoid conflict;
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {;
  MessageSquare,;
  User,;
  FileText,;
  MoreVertical,;
  Calendar,;
  AlertTriangle,;
  BriefcaseIcon,;
} from 'lucide-react';// Local stub is used in place of the @hello-pangea/dnd package which isn't;
// available in this environment.;
import { Draggable } from "@/lib/dnd-stub";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { JobApplication } from "@/types/jobs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict;
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react';
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
} from '@/components/ui/dropdown-menu';
import { ScoreBadge } from '@/components/jobs/applications/ScoreBadge';
import { toast } from '@/hooks/use-toast';
import { HireConfirmationModal } from './HireConfirmationModal';
import Image from 'next/image'; // Import next/image;
interface CandidateCardProps {;
  application: JobApplication;
  index: number;

export function CandidateCard(): any ({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application && application.notes || '');
  const [showHireModal, setShowHireModal] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  // Check if application is stalled (no activity for 7 days);
  const isStalled =;
    application && application.updated_at &&;
    new Date(application && application.updated_at).getTime() <;
      Date && Date.now() - 7 * 24 * 60 * 60 * 1000;

  const handleSaveNotes = () => {;
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({;
      title: 'Notes saved',;
      description: 'Your notes have been saved',;
    });
    setShowNotes(false);
  };

  const handleHireConfirmed = () => {;
    // Hiring process completed via the modal;
    toast({;
      title: 'Hiring process initiated',;
      description: 'Offer has been sent to the talent.',;
    });
  };

  const candidateName = application && application.talent_profile?.full_name || 'Candidate';

  return (
    <>;

      <Draggable draggableId={application.id} index={index}>;
        {(provided) => (;
          <Card;
            className="mb-2 p-0 shadow-sm border";
            ref={provided.innerRef}
            {...provided.draggableProps}


            {...provided.dragHandleProps}
          >
            <CardContent className='p-3'>
              {/* Candidate Header */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='flex justify-between items-start mb-2'>
                <div className='flex items-center gap-2'>
                  <AvatarPrimitive className='h-8 w-8'>
                    {' '}
                    {/* Using renamed AvatarPrimitive */}
                    {application.talent_profile?.profile_picture_url &&
                    !avatarError ? (
                      <Image
                        src={application.talent_profile.profile_picture_url}
                        alt={candidateName}
                        width={32} // Match h-8 w-8
                        height={32} // Match h-8 w-8
                        className='rounded-full object-cover' // Ensure rounded and object-cover
                        onError={() => setAvatarError(true)}                        priority={false} // Avatars are usually not LCP
                      />
                    ) : (
                      <User className='h-4 w-4' />
                    )}
                  </AvatarPrimitive>
                  <div>
                    <h4 className='font-medium text-sm'>{candidateName}</h4>
                    <p className='text-xs text-muted-foreground'>
                      {application.talent_profile?.professional_title |
                        'Applicant'}
                    </p>
                  </div>
                </div>
<<<<<<< HEAD
import { useState } from 'react';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Local stub is used in place of the @hello-pangea/dnd package which isn't;
// available in this environment.;
import { Draggable } from '@/lib/dnd-stub';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { JobApplication } from '@/types/jobs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed to avoid conflict;
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {;
  MessageSquare,;
  User,;
  FileText,;
  MoreVertical,;
  Calendar,;
  AlertTriangle,;
  BriefcaseIcon,;
} from 'lucide-react';// Local stub is used in place of the @hello-pangea/dnd package which isn't;
// available in this environment.;
import { Draggable } from "@/lib/dnd-stub";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { JobApplication } from "@/types/jobs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict;
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
<<<<<<< HEAD
import { useState } from "react",;
// Local stub is used in place of the @hello-pangea/dnd package which isn't;
// available in this environment.;
import { Draggable } from "@/lib/dnd-stub",;
import { formatDistanceToNow } from "date-fns",;
import Link from "next/link",;
import { JobApplication } from "@/types/jobs",;
import { Card, CardContent } from "@/components/ui/card",;
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react';
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
<<<<<<< HEAD
=======
  DropdownMenuTrigger,;
} from '@/components/ui/dropdown-menu';
import { ScoreBadge } from '@/components/jobs/applications/ScoreBadge';
import { toast } from '@/hooks/use-toast';
import { HireConfirmationModal } from './HireConfirmationModal';
import Image from 'next/image'; // Import next/image;
interface CandidateCardProps {;
  application: JobApplication;
  index: number;

export function CandidateCard(): any ({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application && application.notes || '');
  const [showHireModal, setShowHireModal] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  // Check if application is stalled (no activity for 7 days);
  const isStalled =;
    application && application.updated_at &&;
    new Date(application && application.updated_at).getTime() <;
      Date && Date.now() - 7 * 24 * 60 * 60 * 1000;

  const handleSaveNotes = () => {;
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({;
      title: 'Notes saved',;
      description: 'Your notes have been saved',;
    });
    setShowNotes(false);
  };

  const handleHireConfirmed = () => {;
    // Hiring process completed via the modal;
    toast({;
      title: 'Hiring process initiated',;
      description: 'Offer has been sent to the talent.',;
    });
  };

  const candidateName = application && application.talent_profile?.full_name || 'Candidate';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
    <>;

      <Draggable draggableId={application.id} index={index}>;
        {(provided) => (;
          <Card;
            className="mb-2 p-0 shadow-sm border";
            ref={provided.innerRef}
            {...provided.draggableProps}


            {...provided.dragHandleProps}
          >
            <CardContent className='p-3'>
              {/* Candidate Header */}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;
                  <AvatarPrimitive className="h-8 w-8"> {/* Using renamed AvatarPrimitive */}
                    {application.talent_profile?.profile_picture_url && !avatarError ? (;
                      <Image;
                        src={application.talent_profile.profile_picture_url} ;
                        alt={candidateName}
                        width={32} // Match h-8 w-8;
                        height={32} // Match h-8 w-8;
                        className="rounded-full object-cover" // Ensure rounded and object-cover;
                        onError={() => setAvatarError(true)}
                        priority={false} // Avatars are usually not LCP;
                      />;
                    ) : (;
                      <User className="h-4 w-4" />;
                    )}
                  </AvatarPrimitive>;
                  <div>;
                    <h4 className="font-medium text-sm">;
                      {candidateName}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {application.talent_profile?.professional_title || "Applicant"}
                    </p>
                  </div>
                </div>
                
<<<<<<< HEAD
<<<<<<< HEAD
                <DropdownMenu>
=======

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <Button variant='ghost' className='h-8 w-8 p-0'>
                      <MoreVertical className='h-4 w-4' />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
<<<<<<< HEAD
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
=======

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='h-8 w-8 p-0'>
                      <MoreVertical className='h-4 w-4' />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
<<<<<<< HEAD
                      {showNotes ? "Hide notes" : "Add notes"}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>
                      <BriefcaseIcon className="h-4 w-4 mr-2" aria-hidden="true" /> Hire Candidate
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/messages?talentId=${application.talent_id}`}>
                        Message
                      </Link>
                    </DropdownMenuItem>
                    {application.resume?.file_url && (
                      <DropdownMenuItem asChild>
                        <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">
                          View Resume
                        </Link>
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              {/* Application Info */}
              <div className='flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2'>
                <div className='flex items-center'>
                  <Calendar className='h-3 w-3 mr-1' />
                  {formatDistanceToNow(new Date(application.created_at), {
                    addSuffix: true
                  })}
                </div>
                {isStalled && (
                  <div className='flex items-center text-amber-500'>
                    <AlertTriangle className='h-3 w-3 mr-1' />
                    Stalled
                  </div>
                )}
              </div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
                  </AvatarPrimitive>;
                  <div>;
                    <h4 className='font-medium text-sm'>{candidateName}</h4>;
                    <p className='text-xs text-muted-foreground'>;
                      {application && application.talent_profile?.professional_title ||;
                        'Applicant'}
                    </p>;
                  </div>;
                </div>;
                <DropdownMenu>;
                  <DropdownMenuTrigger asChild>;
                    <Button variant='ghost' className='h-8 w-8 p-0'>;
                      <MoreVertical className='h-4 w-4' />;
                    </Button>;
                  </DropdownMenuTrigger>;
                  <DropdownMenuContent align='end'>;
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;
                      {showNotes ? 'Hide notes' : 'Add notes'}
                    </DropdownMenuItem>;
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;
                      <BriefcaseIcon
                        className='h-4 w-4 mr-2'
                        aria-hidden='true'
                      />{' '}
                      Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem asChild>;
                      <Link
                        href={`/messages?talentId=${application && application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application && application.resume?.file_url && (;
                      <DropdownMenuItem asChild>;
                        <a
                          href={application && application.resume.file_url}
                          target='_blank'
                          rel='noopener noreferrer'>;
                          View Resume;
                        </a>;
                      </DropdownMenuItem>;
                    )}



                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;
              {/* Application Info */}
=======
                  </AvatarPrimitive>;
                  <div>;
                    <h4 className='font-medium text-sm'>{candidateName}</h4>;
                    <p className='text-xs text-muted-foreground'>;
                      {application && application.talent_profile?.professional_title ||;
                        'Applicant'}
                    </p>;
                  </div>;
                </div>;

                <DropdownMenu>;
                  <DropdownMenuTrigger asChild>;
                    <Button variant='ghost' className='h-8 w-8 p-0'>;
                      <MoreVertical className='h-4 w-4' />;
                    </Button>;
                  </DropdownMenuTrigger>;
                  <DropdownMenuContent align='end'>;
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;
                      {showNotes ? 'Hide notes' : 'Add notes'}
                    </DropdownMenuItem>;
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;
                      <BriefcaseIcon
                        className='h-4 w-4 mr-2'
                        aria-hidden='true'
                      />{' '}
                      Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem asChild>;
                      <Link
                        href={`/messages?talentId=${application && application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application && application.resume?.file_url && (;
                      <DropdownMenuItem asChild>;
                        <a
                          href={application && application.resume.file_url}
                          target='_blank'
                          rel='noopener noreferrer'>;
                          View Resume;
                        </a>;
                      </DropdownMenuItem>;
                    )}



                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;

              {/* Application Info */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2'>;
                <div className='flex items-center'>;
                  <Calendar className='h-3 w-3 mr-1' />;
                  {formatDistanceToNow(new Date(application && application.created_at), {;
                    addSuffix: true,;
                  })}
                </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {isStalled && (;
                  <div className='flex items-center text-amber-500'>;
                    <AlertTriangle className='h-3 w-3 mr-1' />;
                    Stalled;
                  </div>;
                )}
              </div>;

<<<<<<< HEAD
              {/* Match Score */}
<<<<<<< HEAD
              {application.match_score !== null &&
                application.match_score !== undefined && (
                  <div className='mb-2'>
                    <ScoreBadge application={application} />
                  </div>
                )}
              {/* Notes Section */}
              {showNotes && (
                <div className='mt-2'>
=======
              {application && application.match_score !== null &&;
                application && application.match_score !== undefined && (;
                  <div className='mb-2'>;
                    <ScoreBadge application={application} />;
                  </div>;
                )}
              {/* Notes Section */}
              {showNotes && (;
                <div className='mt-2'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <Textarea
                    placeholder='Add private notes about this candidate...'
                    className='text-xs min-h-[60px]'
                    value={notes}
<<<<<<< HEAD
                    onChange={e => setNotes(e.target.value)}                  />
                  <div className='flex justify-end mt-2'>
                    <Button size='sm' onClick={handleSaveNotes}>
                      Save Notes
                    </Button>
                  </div>
                </div>
              )}
              {/* Action Buttons */}
              <div className='flex justify-between mt-2 gap-1'>
                <Button variant='outline' size='sm' className='flex-1' asChild>
                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;
              {/* Application Info */}
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">;
                <div className="flex items-center">;
                  <Calendar className="h-3 w-3 mr-1" />;
                  {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
                </div>
                
                {isStalled && (<div className="flex items-center text-amber-500">
                    <AlertTriangle className="h-3 w-3 mr-1"/>
                    Stalled
                  </div>)}
              </div>
              
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Match Score */}
              {application && application.match_score !== null &&;
                application && application.match_score !== undefined && (;
                  <div className='mb-2'>;
                    <ScoreBadge application={application} />;
                  </div>;
                )}
              {/* Notes Section */}
              {showNotes && (;
                <div className='mt-2'>;
                  <Textarea
                    placeholder='Add private notes about this candidate...'
                    className='text-xs min-h-[60px]'
                    value={notes}
                    onChange={e => setNotes(e && e.target.value)}                  />;
                  <div className='flex justify-end mt-2'>;
                    <Button size='sm' onClick={handleSaveNotes}>;
                      Save Notes;
                    </Button>;
                  </div>;
                </div>;
              )}
              {/* Action Buttons */}

              <div className="flex justify-between mt-2 gap-1">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
<<<<<<< HEAD
<<<<<<< HEAD
                  <Link href={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message
                  </Link>
                </Button>
                <Button variant='outline' size='sm' className='flex-1' asChild>
=======


                  <Link href={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className='h-3 w-3 mr-1' /> Message
                  </Link>
                </Button>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
<<<<<<< HEAD
                  {application.resume?.file_url ? (
                    <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-3 w-3 mr-1" /> Resume
                    </Link>
                  ) : (
                    <span>
                      <FileText className="h-3 w-3 mr-1" /> No Resume
                    </span>
                  )}
                </Button>
  handleHireConfirmed
}/> </>)
}'"}
ursor/fix-website-loading-errors-and-merge-6662

                  <Link href={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className='h-3 w-3 mr-1' /> Message
                  </Link>
                </Button>


                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                  {application.resume?.file_url ? (
              <div className='flex justify-between mt-2 gap-1'>;
                <Button variant='outline' size='sm' className='flex-1' asChild>;
                  <Link href={`/messages?talentId=${application && application.talent_id}`}>;
                    <MessageSquare className='h-3 w-3 mr-1' /> Message;
                  </Link>;
                </Button>;
                <Button variant='outline' size='sm' className='flex-1' asChild>;
                  {application && application.resume?.file_url ? (;
                    <a
                      href={application && application.resume.file_url}
                      target='_blank'
                      rel='noopener noreferrer'>;
                      <FileText className='h-3 w-3 mr-1' /> Resume;
                    </a>;
                  ) : (;
                    <span>;
                      <FileText className='h-3 w-3 mr-1' /> No Resume;
                    </span>;
                  )}
                </Button>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Button
                  variant='default'
                  size='sm'
                  className='flex-1'
<<<<<<< HEAD
                  onClick={() => setShowHireModal(true)}                >
                  <BriefcaseIcon className='h-3 w-3 mr-1' /> Hire
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </Draggable>
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal
        isOpen = {showHireModal,}
        onClose = {() => setShowHireModal(false),}
        application = {application,}
        onConfirm = {handleHireConfirmed,}
      />
    </>
  )
  //Here you would save the notes to the database //For now, we'll just show a toast toast ({
  setShowNotes (false)
}
  //Hiring process completed via the modal toast ({
  application.id
}index= {
  index
}> {
  (provided) => (<Card className="mb-2 p-0 shadow-sm border" ref= {
  provided.innerRef
}{
  ...provided.draggableProps
}{
  ...provided.dragHandleProps "
}> <CardContent className="p-3"> {
  /* Candidate Header */ "
}<div className="flex justify-between items-start mb-2"> <div className="flex items-center gap-2"> <AvatarPrimitive className="h-8 w-8"> {
  /* Using renamed AvatarPrimitive */
}{
  application.talent profile?.profile picture url && !avatarError ? (<Image src= {
  application.talent profile.profile picture url
}alt= {
  candidateName
}width= {
  32
}//Match h-8 w-8 height= {
  32 "
}//Match h-8 w-8 className="rounded-full object-cover" //Ensure rounded and object-cover onError= {
  () => setAvatarError (true)
}priority= {
  false "
}//Avatars are usually not LCP />) : (<User className="h-4 w-4" />) "
}</AvatarPrimitive> <div> <h4 className="font-medium text-sm"> {
  candidateName "
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem asChild> <Link href= {
  `/messages?talentId=$ {
  application.talent id
}`
}> Message </Link> </DropdownMenuItem> {
  application.resume?.file url && (<DropdownMenuItem asChild> <a href= {
  application.resume.file url "
}target="blank" rel="noopener noreferrer"> View Resume </Link> </DropdownMenuItem>)
}</DropdownMenuContent> </DropdownMenu> </div> {
  /* Application Info */ "
}<div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2"> <div className="flex items-center"> <Calendar className="h-3 w-3 mr-1" /> {
  formatDistanceToNow (new Date (application.created at), {
  addSuffix: true
})
}</div> {"
  isStalled && (<div className="flex items-center text-amber-500"> <AlertTriangle className="h-3 w-3 mr-1" /> Stalled </div>)
}</div> {
  /* Match Score */
}{"
  application.match score !== null && application.match score !== undefined && (<div className="mb-2"> <ScoreBadge application= {
  application
}/> </div>) "
}<Textarea placeholder="Add private notes about this candidate..." className="text-xs min-h-[60px]" value= {
  notes
}onChange= {
  (e) => setNotes (e.target.value)
}/> </div> </div>) "
}<Button variant="outline" size="sm" className="flex-1" asChild > </Link> </Button> <Button variant="outline" size="sm" className="flex-1" asChild > <FileText className="h-3 w-3 mr-1" /> Resume </Link>) : (<span> <FileText className="h-3 w-3 mr-1" /> No Resume </span>) "
}</Button> <Button variant="default" size="sm" className="flex-1" onClick={
  () => setShowHireModal (true) "
}> <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire </Button> </div> </CardContent> </Card>)
}</Draggable> {
  /* Hire Confirmation Modal */
}<HireConfirmationModal isOpen= {
  showHireModal
}onClose= {
  () => setShowHireModal (false)
}application= {
  application
}onConfirm= {
  handleHireConfirmed
}/> </>)
}'"}
=======
                  onClick={() => setShowHireModal(true)}                >;
                  <BriefcaseIcon className='h-3 w-3 mr-1' /> Hire;
                </Button>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  handleHireConfirmed 
}/> </>) 
}'"};
;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                
                <Button 
=======


                  <Link href={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className='h-3 w-3 mr-1' /> Message
                  </Link>
                </Button>
                <Button variant='outline' size='sm' className='flex-1' asChild>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >


                  {application.resume?.file_url ? (
              <div className='flex justify-between mt-2 gap-1'>;
                <Button variant='outline' size='sm' className='flex-1' asChild>;
                  <Link href={`/messages?talentId=${application && application.talent_id}`}>;
                    <MessageSquare className='h-3 w-3 mr-1' /> Message;
                  </Link>;
                </Button>;

                <Button variant='outline' size='sm' className='flex-1' asChild>;
                  {application && application.resume?.file_url ? (;
                    <a
                      href={application && application.resume.file_url}
                      target='_blank'
                      rel='noopener noreferrer'>;
                      <FileText className='h-3 w-3 mr-1' /> Resume;
                    </a>;
                  ) : (;
                    <span>;
                      <FileText className='h-3 w-3 mr-1' /> No Resume;
                    </span>;
                  )}
                </Button>
                <Button
                  variant='default'
                  size='sm'
                  className='flex-1'

  handleHireConfirmed 
}/> </>) 
}'"};
;

                
                <Button 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  variant="default" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => setShowHireModal(true)}
                >;
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </Draggable>;
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal
        isOpen = {showHireModal,}
        onClose = {() => setShowHireModal(false),}
        application = {application,}
        onConfirm = {handleHireConfirmed,}
import { useState } from 'react';
// Local stub is used in place of the @hello - pangea / dnd package which isn't;
// available in this environment.;
import { Draggable } from '@/lib / dnd - stub';
import { formatDistanceToNow } from 'date - fns';
import Link from 'next / link';
import { JobApplication } from '@/types / jobs';
import { Card, CardContent } from '@/components / ui / card';
import { Avatar as AvatarPrimitive } from '@/components / ui / avatar'; // Renamed to avoid conflict;
import { Button } from '@/components / ui / button';
import { Textarea } from '@/components / ui / textarea';
import {
  MessageSquare,
  User,
  FileText,
  MoreVertical,
  Calendar,
  AlertTriangle,
  BriefcaseIcon,
} from 'lucide-react';// Local stub is used in place of the @hello - pangea / dnd package which isn't;
// available in this environment.;
import { Draggable  } from '@/lib / dnd - stub';
import { formatDistanceToNow  } from './date - fns';
import Link from './next / link';
import { JobApplication  } from '@/types / jobs';
import { Card, CardContent  } from '@/components / ui / card';
import { Avatar as AvatarPrimitive  } from '@/components / ui / avatar';, // Renamed to avoid conflict;
import { Button  } from '@/components / ui / button';
import { Textarea  } from '@/components / ui / textarea';
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react';
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
import { ScoreBadge } from '@/components / jobs / applications / ScoreBadge';
import { toast } from '@/hooks / use - toast';
import { HireConfirmationModal } from './HireConfirmationModal';
import Image from 'next / image'; // Import next / image;
interface CandidateCardProps {
  application: JobApplication;
  index: number;
export /**
 * CandidateCard - Function description
 */
function CandidateCard() {
  const [show_notes, setShowNotes] = useState (false);
  const [notes, set_notes] = useState (application.notes || '');
  const [showHireModal, setShowHireModal] = useState (false);
  const [avatar_error, setAvatarError] = useState (false);
  // Check if application is stalled (no activity for 7 days);
  const is_stalled =;
    application.updated_at &&;
    new Date (application.updated_at).get_time () <;
      Date.now () - 7 * 24 * 60 * 60 * 1000;
  const handleSaveNotes = () =>: any {
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast ({
      title: 'Notes saved',
      description: 'Your notes have been saved',
    });
    setShowNotes (false);
  }
  const handleHireConfirmed = () =>: any {
    // Hiring process completed via the modal;
    toast ({
      title: 'Hiring process initiated',
      description: 'Offer has been sent to the talent.',
    });
  }
  const candidate_name = application.talent_profile?.full_name || 'Candidate';
  return (
    <>;
      <Draggable draggable_id={application.id} index={index}>;
        {provided => (
          <Card;
            className='mb - 2 p - 0 shadow - sm border';
            ref={provided.inner_ref}            {...provided.draggable_props}
            {...provided.dragHandleProps}
          >;
            <CardContent className='p - 3'>;
              {/* Candidate Header */}
              <div className='flex justify - between items - start mb - 2'>;
                <div className='flex items - center gap - 2'>;
                  <AvatarPrimitive className='h - 8 w - 8'>;
                    {' '}
                    {/* Using renamed AvatarPrimitive */}
                    {application.talent_profile?.profile_picture_url &&;
                    !avatar_error ? (
                      <Image;
                        src={application.talent_profile.profile_picture_url}
                        alt={candidate_name}
                        width={32} // Match h - 8 w - 8;
                        height={32} // Match h - 8 w - 8;
                        className='rounded - full object - cover' // Ensure rounded and object - cover;
                        on_error={() => setAvatarError (true)}                        priority={false} // Avatars are usually not LCP;
                      />) : (
                      <User className='h - 4 w - 4' />)}
                  </AvatarPrimitive>;
                  <div>;
                    <h4 className='font - medium text - sm'>{candidate_name}</h4>;
                    <p className='text - xs text - muted - foreground'>;
                      {application.talent_profile?.professional_title ||;
                        'Applicant'}
                    </p>;
                  </div>;
                </div>;
                <DropdownMenu>;
                  <DropdownMenuTrigger as_child>;
                    <Button variant='ghost' className='h - 8 w - 8 p - 0'>;
                      <MoreVertical className='h - 4 w - 4' />;
                    </Button>;
                  </DropdownMenuTrigger>;
                  <DropdownMenuContent align='end'>;
                    <DropdownMenuItem on_click={() => setShowNotes (!show_notes)}>;
                      {show_notes ? 'Hide notes' : 'Add notes'}
                    </DropdownMenuItem>;
                    <DropdownMenuItem on_click={() => setShowHireModal (true)}>;
                      <BriefcaseIcon;
                        className='h - 4 w - 4 mr - 2';
                        aria - hidden='true';
                      />{' '}
                      Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem as_child>;
                      <Link;
                        href={`/messages?talent_id=${application.talent_id}`}
                      >;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application.resume?.file_url && (
                      <DropdownMenuItem as_child>;
                        <a;
                          href={application.resume.file_url}
                          target='_blank';
                          rel='noopener noreferrer';
                        >;
                          View Resume;
                        </a>;
                      </DropdownMenuItem>)}
                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;
              {/* Application Info */}
              <div className='flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2'>;
                <div className='flex items - center'>;
                  <Calendar className='h - 3 w - 3 mr - 1' />;
                  {formatDistanceToNow (new Date (application.created_at), {
                    add_suffix: true,
                  })}
                </div>;
                {is_stalled && (
                  <div className='flex items - center text - amber - 500'>;
                    <AlertTriangle className='h - 3 w - 3 mr - 1' />;
                    Stalled;
                  </div>)}
              </div>;
              {/* Match Score */}
              {application.match_score !== null &&;
                application.match_score !== undefined && (
                  <div className='mb - 2'>;
                    <ScoreBadge application={application} />;
                  </div>)}
              {/* Notes Section */}
              {show_notes && (
                <div className='mt - 2'>;
                  <Textarea;
                    placeholder='Add private notes about this candidate...';
                    className='text - xs min - h-[60px]';
                    value={notes}
                    on_change={e => set_notes (e.target.value)}                  />;
                  <div className='flex justify - end mt - 2'>;
                    <Button size='sm' on_click={handleSaveNotes}>;
                      Save Notes;
                    </Button>;
                  </div>;
                </div>)}
              {/* Action Buttons */}
              <div className='flex justify - between mt - 2 gap - 1'>;
                <Button variant='outline' size='sm' className='flex - 1' as_child>;
                  <Link href={`/messages?talent_id=${application.talent_id}`}>;
                    <MessageSquare className='h - 3 w - 3 mr - 1' /> Message;
                  </Link>;
                </Button>;
                <Button variant='outline' size='sm' className='flex - 1' as_child>;
                  {application.resume?.file_url ? (
                    <a;
                      href={application.resume.file_url}
                      target='_blank';
                      rel='noopener noreferrer';
                    >;
                      <FileText className='h - 3 w - 3 mr - 1' /> Resume;
                    </a>) : (
                    <span>;
                      <FileText className='h - 3 w - 3 mr - 1' /> No Resume;
                    </span>)}
                </Button>;
                <Button;
                  variant='default';
                  size='sm';
                  className='flex - 1';
                  on_click={() => setShowHireModal (true)}                >;
                  <BriefcaseIcon className='h - 3 w - 3 mr - 1' /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>)}
      </Draggable>
      
=======

      </Draggable>;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal
        isOpen = {showHireModal,}
        onClose = {() => setShowHireModal(false),}
        application = {application,}
        onConfirm = {handleHireConfirmed,}

import { useState } from 'react';
// Local stub is used in place of the @hello - pangea / dnd package which isn't;
// available in this environment.;
import { Draggable } from '@/lib / dnd - stub';
import { formatDistanceToNow } from 'date - fns';
import Link from 'next / link';
import { JobApplication } from '@/types / jobs';
import { Card, CardContent } from '@/components / ui / card';
import { Avatar as AvatarPrimitive } from '@/components / ui / avatar'; // Renamed to avoid conflict;
import { Button } from '@/components / ui / button';
import { Textarea } from '@/components / ui / textarea';
import {
  MessageSquare,
  User,
  FileText,
  MoreVertical,
  Calendar,
  AlertTriangle,
  BriefcaseIcon,
} from 'lucide-react';// Local stub is used in place of the @hello - pangea / dnd package which isn't;
// available in this environment.;
import { Draggable  } from '@/lib / dnd - stub';
import { formatDistanceToNow  } from './date - fns';
import Link from './next / link';
import { JobApplication  } from '@/types / jobs';
import { Card, CardContent  } from '@/components / ui / card';
import { Avatar as AvatarPrimitive  } from '@/components / ui / avatar';, // Renamed to avoid conflict;
import { Button  } from '@/components / ui / button';
import { Textarea  } from '@/components / ui / textarea';
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react';
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
import { ScoreBadge } from '@/components / jobs / applications / ScoreBadge';
import { toast } from '@/hooks / use - toast';
import { HireConfirmationModal } from './HireConfirmationModal';
import Image from 'next / image'; // Import next / image;
interface CandidateCardProps {
  application: JobApplication;
  index: number;
export /**
 * CandidateCard - Function description
 */
function CandidateCard() {
  const [show_notes, setShowNotes] = useState (false);
  const [notes, set_notes] = useState (application.notes || '');
  const [showHireModal, setShowHireModal] = useState (false);
  const [avatar_error, setAvatarError] = useState (false);
  // Check if application is stalled (no activity for 7 days);
  const is_stalled =;
    application.updated_at &&;
    new Date (application.updated_at).get_time () <;
      Date.now () - 7 * 24 * 60 * 60 * 1000;
  const handleSaveNotes = () =>: any {
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast ({
      title: 'Notes saved',
      description: 'Your notes have been saved',
    });
    setShowNotes (false);
  }
  const handleHireConfirmed = () =>: any {
    // Hiring process completed via the modal;
    toast ({
      title: 'Hiring process initiated',
      description: 'Offer has been sent to the talent.',
    });
  }
  const candidate_name = application.talent_profile?.full_name || 'Candidate';
  return (
    <>;
      <Draggable draggable_id={application.id} index={index}>;
        {provided => (
          <Card;
            className='mb - 2 p - 0 shadow - sm border';
            ref={provided.inner_ref}            {...provided.draggable_props}
            {...provided.dragHandleProps}
          >;
            <CardContent className='p - 3'>;
              {/* Candidate Header */}
              <div className='flex justify - between items - start mb - 2'>;
                <div className='flex items - center gap - 2'>;
                  <AvatarPrimitive className='h - 8 w - 8'>;
                    {' '}
                    {/* Using renamed AvatarPrimitive */}
                    {application.talent_profile?.profile_picture_url &&;
                    !avatar_error ? (
                      <Image;
                        src={application.talent_profile.profile_picture_url}
                        alt={candidate_name}
                        width={32} // Match h - 8 w - 8;
                        height={32} // Match h - 8 w - 8;
                        className='rounded - full object - cover' // Ensure rounded and object - cover;
                        on_error={() => setAvatarError (true)}                        priority={false} // Avatars are usually not LCP;
                      />) : (
                      <User className='h - 4 w - 4' />)}
                  </AvatarPrimitive>;
                  <div>;
                    <h4 className='font - medium text - sm'>{candidate_name}</h4>;
                    <p className='text - xs text - muted - foreground'>;
                      {application.talent_profile?.professional_title ||;
                        'Applicant'}
                    </p>;
                  </div>;
                </div>;
                <DropdownMenu>;
                  <DropdownMenuTrigger as_child>;
                    <Button variant='ghost' className='h - 8 w - 8 p - 0'>;
                      <MoreVertical className='h - 4 w - 4' />;
                    </Button>;
                  </DropdownMenuTrigger>;
                  <DropdownMenuContent align='end'>;
                    <DropdownMenuItem on_click={() => setShowNotes (!show_notes)}>;
                      {show_notes ? 'Hide notes' : 'Add notes'}
                    </DropdownMenuItem>;
                    <DropdownMenuItem on_click={() => setShowHireModal (true)}>;
                      <BriefcaseIcon;
                        className='h - 4 w - 4 mr - 2';
                        aria - hidden='true';
                      />{' '}
                      Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem as_child>;
                      <Link;
                        href={`/messages?talent_id=${application.talent_id}`}
                      >;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application.resume?.file_url && (
                      <DropdownMenuItem as_child>;
                        <a;
                          href={application.resume.file_url}
                          target='_blank';
                          rel='noopener noreferrer';
                        >;
                          View Resume;
                        </a>;
                      </DropdownMenuItem>)}
                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;
              {/* Application Info */}
              <div className='flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2'>;
                <div className='flex items - center'>;
                  <Calendar className='h - 3 w - 3 mr - 1' />;
                  {formatDistanceToNow (new Date (application.created_at), {
                    add_suffix: true,
                  })}
                </div>;
                {is_stalled && (
                  <div className='flex items - center text - amber - 500'>;
                    <AlertTriangle className='h - 3 w - 3 mr - 1' />;
                    Stalled;
                  </div>)}
              </div>;
              {/* Match Score */}
              {application.match_score !== null &&;
                application.match_score !== undefined && (
                  <div className='mb - 2'>;
                    <ScoreBadge application={application} />;
                  </div>)}
              {/* Notes Section */}
              {show_notes && (
                <div className='mt - 2'>;
                  <Textarea;
                    placeholder='Add private notes about this candidate...';
                    className='text - xs min - h-[60px]';
                    value={notes}
                    on_change={e => set_notes (e.target.value)}                  />;
                  <div className='flex justify - end mt - 2'>;
                    <Button size='sm' on_click={handleSaveNotes}>;
                      Save Notes;
                    </Button>;
                  </div>;
                </div>)}
              {/* Action Buttons */}
              <div className='flex justify - between mt - 2 gap - 1'>;
                <Button variant='outline' size='sm' className='flex - 1' as_child>;
                  <Link href={`/messages?talent_id=${application.talent_id}`}>;
                    <MessageSquare className='h - 3 w - 3 mr - 1' /> Message;
                  </Link>;
                </Button>;
                <Button variant='outline' size='sm' className='flex - 1' as_child>;
                  {application.resume?.file_url ? (
                    <a;
                      href={application.resume.file_url}
                      target='_blank';
                      rel='noopener noreferrer';
                    >;
                      <FileText className='h - 3 w - 3 mr - 1' /> Resume;
                    </a>) : (
                    <span>;
                      <FileText className='h - 3 w - 3 mr - 1' /> No Resume;
                    </span>)}
                </Button>;
                <Button;
                  variant='default';
                  size='sm';
                  className='flex - 1';
                  on_click={() => setShowHireModal (true)}                >;
                  <BriefcaseIcon className='h - 3 w - 3 mr - 1' /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>)}
      </Draggable>;
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        is_open = {showHireModal, }
        on_close = {() => setShowHireModal (false), }
        application = {application, }
        on_confirm = {handleHireConfirmed, }
      />;
    </>);

  //Here you would save the notes to the database //For now, we'll just show a toast toast ({
  setShowNotes (false);
}
  //Hiring process completed via the modal toast ({
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  application.id;
}index= {
  index;
}> {
  (provided) => (<Card className="mb - 2 p - 0 shadow - sm border" ref= {
  provided.inner_ref;
}{
  ...provided.draggable_props;
}{
  ...provided.dragHandleProps ";
}> <CardContent className="p - 3"> {
  /* Candidate Header */ ";
}<div className="flex justify - between items - start mb - 2"> <div className="flex items - center gap - 2"> <AvatarPrimitive className="h - 8 w - 8"> {
  /* Using renamed AvatarPrimitive */;
}{
  application.talent profile?.profile picture url && !avatar_error ? (<Image src= {
  application.talent profile.profile picture url;
}alt= {
  candidate_name;
}width= {
  32;
}//Match h - 8 w - 8 height= {
  32 ";
}//Match h - 8 w - 8 className="rounded - full object - cover" //Ensure rounded and object - cover on_error= {
  () => setAvatarError (true);
}priority= {
  false ";
}//Avatars are usually not LCP />) : (<User className="h - 4 w - 4" />) ";
}</AvatarPrimitive> <div> <h4 className="font - medium text - sm"> {
  candidate_name ";
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger as_child> <Button variant="ghost" className="h - 8 w - 8 p - 0"> <MoreVertical className="h - 4 w - 4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem as_child> <Link href= {
  `/messages?talent_id=$ {
  application.talent id;
}`;
}> Message </Link> </DropdownMenuItem> {
  application.resume?.file url && (<DropdownMenuItem as_child> <a href= {
  application.resume.file url ";
}target="blank" rel="noopener noreferrer"> View Resume </Link> </DropdownMenuItem>);
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}</DropdownMenuContent> </DropdownMenu> </div> {
  /* Application Info */ ";
}<div className="flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2"> <div className="flex items - center"> <Calendar className="h - 3 w - 3 mr - 1" /> {
  formatDistanceToNow (new Date (application.created at), {
<<<<<<< HEAD
      />;
    </>;
  );
=======

      />;
    </>;
  );

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  //Here you would save the notes to the database //For now, we'll just show a toast toast ({;
  setShowNotes (false);
};
  //Hiring process completed via the modal toast ({;
  application && application.id ;
}index= {;
  index ;
}> {;
  (provided) => (<CardclassName="mb-2 p-0 shadow-sm border" ref= {
  provided && provided.innerRef 
}{
  ...provided && provided.draggableProps 
}{
  ...provided && provided.dragHandleProps "
<<<<<<< HEAD
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",;
import { toast } from "@/hooks/use-toast",;
import { HireConfirmationModal } from "./HireConfirmationModal",;
import Image from 'next/image', // Import next/image;
;
interface CandidateCardProps {;
  application:JobApplication,;
  index:number;
}
;
export function CandidateCard({ application, index } CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false),;
  const [notes, setNotes] = useState(application.notes || ""),;
  const [showHireModal, setShowHireModal] = useState(false),;
  const [avatarError, setAvatarError] = useState(false),;
;
  // Check if application is stalled (no activity for 7 days);
  const isStalled = application.updated_at && ;
    new Date(application.updated_at).getTime() < ;
    (Date.now() - 7 * 24 * 60 * 60 * 1000),;
  ;
  const handleSaveNotes = () => {;
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({;
      title:"Notes saved",;
      description:"Your notes have been saved";
    }),;
    setShowNotes(false),;
  },;
  ;
  const handleHireConfirmed = () => {;
    // Hiring process completed via the modal;
    toast({;
      title:"Hiring process initiated",;
      description:"Offer has been sent to the talent.";
    }),;
  },;
;
  const candidateName = application.talent_profile?.full_name || "Candidate",;
  ;
  return (;
    <>;
      <Draggable draggableId={application.id} index={index}>;
        {(provided) => (;
          <Card ;
            className="mb-2 p-0 shadow-sm border";
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >;
            <CardContent className="p-3">;
              {/* Candidate Header */}
              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;
                  <AvatarPrimitive className="h-8 w-8"> {/* Using renamed AvatarPrimitive */}
                    {application.talent_profile?.profile_picture_url && !avatarError ? (;
                      <Image;
                        src={application.talent_profile.profile_picture_url} ;
                        alt={candidateName}
                        width={32} // Match h-8 w-8;
                        height={32} // Match h-8 w-8;
                        className="rounded-full object-cover" // Ensure rounded and object-cover;
                        onError={() => setAvatarError(true)}
                        priority={false} // Avatars are usually not LCP;
                      />;
                    ) :(;
                      <User className="h-4 w-4" />;                    )}
                  </AvatarPrimitive>;
                  <div>;
                    <h4 className="font-medium text-sm">;
                      {candidateName}
                    </h4>;
                    <p className="text-xs text-muted-foreground">;
                      {application.talent_profile?.professional_title || "Applicant"}
                    </p>;
                  </div>;
                </div>;
                ;
                <DropdownMenu>;
                  <DropdownMenuTrigger asChild>;
                    <Button variant="ghost" className="h-8 w-8 p-0">;
                      <MoreVertical className="h-4 w-4" />;
                    </Button>;
                  </DropdownMenuTrigger>;
                  <DropdownMenuContent align="end">;
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;
                      {showNotes ? "Hide notes" :"Add notes"}
                    </DropdownMenuItem>;
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;
                      <BriefcaseIcon className="h-4 w-4 mr-2" aria-hidden="true" /> Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem asChild>;
                      <Link href={`/messages?talentId=${application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application.resume?.file_url && (;
                      <DropdownMenuItem asChild>;
                        <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">;
                          View Resume;
                        </a>;
                      </DropdownMenuItem>;
                    )}
                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;
              ;
              {/* Application Info */}
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">;
                <div className="flex items-center">;
                  <Calendar className="h-3 w-3 mr-1" />;
                  {formatDistanceToNow(new Date(application.created_at), { addSuffix:true })}
                </div>;
                ;
                {isStalled && (;
                  <div className="flex items-center text-amber-500">;
                    <AlertTriangle className="h-3 w-3 mr-1" />;
                    Stalled;
                  </div>;
                )}
              </div>;
              ;
              {/* Match Score */}
              {application.match_score !== null && application.match_score !== undefined && (;
                <div className="mb-2">;
                  <ScoreBadge application={application} />;
                </div>;              )}
              ;
              {/* Notes Section */}
              {showNotes && (;
                <div className="mt-2">;
                  <Textarea ;
                    placeholder="Add private notes about this candidate..." ;
                    className="text-xs min-h-[60px]";
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />;
                  <div className="flex justify-end mt-2">;
                    <Button size="sm" onClick={handleSaveNotes}>Save Notes</Button>;
                  </div>;
                </div>;              )}
              ;
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">;
                <Button ;
                  variant="outline" ;
                  size="sm" ;
                  className="flex-1";
                  asChild;
                >;
                  <Link href={`/messages?talentId=${application.talent_id}`}>;
                    <MessageSquare className="h-3 w-3 mr-1" /> Message;
                  </Link>;
                </Button>;
                ;
                <Button ;
                  variant="outline" ;
                  size="sm" ;
                  className="flex-1";
                  asChild;
                >;
                  {application.resume?.file_url ? (;
                    <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">;
                      <FileText className="h-3 w-3 mr-1" /> Resume;
                    </a>;
                  ) :(;
                    <span>;
                      <FileText className="h-3 w-3 mr-1" /> No Resume;
                    </span>;
                  )}
                </Button>;
                ;
                <Button ;
                  variant="default" ;
                  size="sm" ;
                  className="flex-1";
                  onClick={() => setShowHireModal(true)}
                >;
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        )}
      </Draggable>;
  application.talent profile?.profile picture url && !avatarError ? (<Image src= {;
  application.talent profile.profile picture url ;
}alt= {;
  candidateName ;
}width= {;
  32 ;
}//Match h-8 w-8 height= {;
  32 ";
}//Match h-8 w-8 className="rounded-full object-cover" //Ensure rounded and object-cover onError= {;
=======
}> <CardContent className="p-3"> {;
  /* Candidate Header */ ";
}<div className="flex justify-between items-start mb-2"> <div className="flex items-center gap-2"> <AvatarPrimitive className="h-8 w-8"> {;
  /* Using renamed AvatarPrimitive */ ;
}{;
  application && application.talent profile?.profile picture url && !avatarError ? (<Imagesrc= {
  application && application.talent profile && profile.profile picture url 
}alt= {
  candidateName 
}width= {
  32 
}//Match h-8 w-8 height= {
  32 "
}//Match h-8 w-8 className="rounded-full object-cover" //Ensure rounded and object-cover onError= {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  () => setAvatarError (true) ;
}priority= {;
  false ";
}//Avatars are usually not LCP />) : (<User className="h-4 w-4" />) ";
}</AvatarPrimitive> <div> <h4 className="font-medium text-sm"> {;
  candidateName ";
<<<<<<< HEAD
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem asChild> <Link href= {;
  `/messages?talentId=$ {;
  application.talent id ;
}` ;
}> Message </Link> </DropdownMenuItem> {;
  application.resume?.file url && (<DropdownMenuItem asChild> <a href= {;
  application.resume.file url ";
=======
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem asChild> <Linkhref= {
  `/messages?talentId=$ {
  application && application.talent id 
}` 
}> Message </Link> </DropdownMenuItem> {;
  application && application.resume?.file url && (<DropdownMenuItem asChild> <ahref= {
  application && application.resume.file url "
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}target="blank" rel="noopener noreferrer"> View Resume </Link> </DropdownMenuItem>) ;
}</DropdownMenuContent> </DropdownMenu> </div> {;
  /* Application Info */ ";
}<div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2"> <div className="flex items-center"> <Calendar className="h-3 w-3 mr-1" /> {;
<<<<<<< HEAD
  formatDistanceToNow (new Date (application.created at), {;
=======
  formatDistanceToNow (new Date (application && application.created at), {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  addSuffix: true ;
}) ;
}</div> {";
  isStalled && (<div className="flex items-center text-amber-500"> <AlertTriangle className="h-3 w-3 mr-1" /> Stalled </div>) ;
}</div> {;
  /* Match Score */ ;
}{";
<<<<<<< HEAD
  application.match score !== null && application.match score !== undefined && (<div className="mb-2"> <ScoreBadge application= {;
  application ;
}/> </div>) ";
}<Textarea placeholder="Add private notes about this candidate..." className="text-xs min-h-[60px]" value= {;
  notes ;
}onChange= {;
  (e) => setNotes (e.target.value) ;
}/> </div> </div>) ";
}<Button variant="outline" size="sm" className="flex-1" asChild > </Link> </Button> <Button variant="outline" size="sm" className="flex-1" asChild > <FileText className="h-3 w-3 mr-1" /> Resume </Link>) : (<span> <FileText className="h-3 w-3 mr-1" /> No Resume </span>) ";
}</Button> <Button variant="default" size="sm" className="flex-1" onClick={;
=======
  application && application.match score !== null && application && application.match score !== undefined && (<div className="mb-2"> <ScoreBadgeapplication= {
  application 
}/> </div>) ";
}<Textareaplaceholder="Add private notes about this candidate..." className="text-xs min-h-[60px]" value= {
  notes 
}onChange= {
  (e) => setNotes (e && e.target.value) ;
}/> </div> </div>) ";
}<Button variant="outline" size="sm" className="flex-1" asChild > </Link> </Button> <Button variant="outline" size="sm" className="flex-1" asChild > <FileText className="h-3 w-3 mr-1" /> Resume </Link>) : (<span> <FileText className="h-3 w-3 mr-1" /> No Resume </span>) ";
}</Button> <Buttonvariant="default" size="sm" className="flex-1" onClick={
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  () => setShowHireModal (true) ";
}> <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire </Button> </div> </CardContent> </Card>) ;
}</Draggable> {;
  /* Hire Confirmation Modal */ ;
<<<<<<< HEAD
}<HireConfirmationModal isOpen= {;
  showHireModal ;
}onClose= {;
=======
}<HireConfirmationModalisOpen= {
  showHireModal 
}onClose= {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  () => setShowHireModal (false) ;
}application= {;
  application ;
}onConfirm= {;
  handleHireConfirmed ;
}/> </>) ;
<<<<<<< HEAD
=======
}'"}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  add_suffix: true;
});
}</div> {";
  is_stalled && (<div className="flex items - center text - amber - 500"> <AlertTriangle className="h - 3 w - 3 mr - 1" /> Stalled </div>);
}</div> {
  /* Match Score */;
}{";
  application.match score !== null && application.match score !== undefined && (<div className="mb - 2"> <ScoreBadge application= {
  application;
}/> </div>) ";
}<Textarea placeholder="Add private notes about this candidate..." className="text - xs min - h-[60px]" value= {
  notes;
}on_change= {
  (e) => set_notes (e.target.value);
}/> </div> </div>) ";
}<Button variant="outline" size="sm" className="flex - 1" as_child > </Link> </Button> <Button variant="outline" size="sm" className="flex - 1" as_child > <FileText className="h - 3 w - 3 mr - 1" /> Resume </Link>) : (<span> <FileText className="h - 3 w - 3 mr - 1" /> No Resume </span>) ";
}</Button> <Button variant="default" size="sm" className="flex - 1" on_click={
  () => setShowHireModal (true) ";
}> <BriefcaseIcon className="h - 3 w - 3 mr - 1" /> Hire </Button> </div> </CardContent> </Card>);
}</Draggable> {
  /* Hire Confirmation Modal */;
}<HireConfirmationModal is_open= {
  showHireModal;
}on_close= {
  () => setShowHireModal (false);
}application= {
  application;
}on_confirm= {
  handleHireConfirmed;
}/> </>);
}'"}
      </Draggable>;
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
        application={application}
        onConfirm={handleHireConfirmed}
      />;
    </>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
}'"
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
