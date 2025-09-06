<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/hiring-tracker/CandidateCard.tsx

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  MessageSquare
  User
  FileText
  MoreVertical
  Calendar
  AlertTriangle
  BriefcaseIcon
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  MessageSquare,
  User,
  FileText,
  MoreVertical,
  Calendar,
  AlertTriangle,;
  BriefcaseIcon;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const handleSaveNotes = () => {
=======
const handleSaveNotes = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>   const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({
      title: 'Notes saved'
      description: 'Your notes have been saved'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      title: 'Notes saved'
      description: 'Your notes have been saved'
      title: 'Notes saved',
      description: 'Your notes have been saved',
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
  const candidateName = application.talent_profile?.full_name |'Candidate'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const candidateName = application.talent_profile?.full_name |'Candidate'
=======

import { useState } from 'react';

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  const candidateName = application.talent_profile?.full_name || 'Candidate'
  return (
    <>
      <Draggable draggableId={application.id} index={index}>
        {provided => (
          <Card
            className='mb-2 p-0 shadow-sm border'
            ref={provided.innerRef}            {...provided.draggableProps}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

=======
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const candidateName = application.talent_profile?.full_name || "Candidate",
  
  return (
    <>
      <Draggable draggableId={application.id} index={index}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            {...provided.dragHandleProps}
          >
            <CardContent className='p-3'>
              {/* Candidate Header */}

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        {provided => (
          <Card
            className='mb-2 p-0 shadow-sm border'
            ref={provided.innerRef}            {...provided.draggableProps}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             {...provided.dragHandleProps}
          >
            <CardContent className='p-3'>
              {/* Candidate Header */}
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        {(provided) => (
          <Card 
            className="mb-2 p-0 shadow-sm border"
import { useState } from "react",;
<<<<<<< HEAD
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
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react';
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",;
import { toast } from "@/hooks/use-toast",;
import { HireConfirmationModal } from "./HireConfirmationModal",;
import Image from 'next/image', // Import next/image;
interface CandidateCardProps {;
  application: JobApplication,;
  index: number;
}
;
export function CandidateCard({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false),;
  const [notes, setNotes] = useState(application.notes || ""),;
  const [showHireModal, setShowHireModal] = useState(false),;
  const [avatarError, setAvatarError] = useState(false),;
  // Check if application is stalled (no activity for 7 days);
  const isStalled = application.updated_at &&;
    new Date(application.updated_at).getTime() <;
    (Date.now() - 7 * 24 * 60 * 60 * 1000),;
  const handleSaveNotes = () => {;
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({;
      title: "Notes saved",;
      description: "Your notes have been saved";
    }),;
    setShowNotes(false);
  },;
  const handleHireConfirmed = () => {;
    // Hiring process completed via the modal;
    toast({;
      title: "Hiring process initiated",;
      description: "Offer has been sent to the talent.";
    });
  };
  const candidateName = application.talent_profile?.full_name || "Candidate";
  return (;
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>>                 <DropdownMenu>
ursor/fix-website-loading-errors-and-merge-6662
========
import { useState } from 'react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/hiring-tracker/CandidateCard.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react';
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
<<<<<<< HEAD
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/hiring-tracker/CandidateCard.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                <DropdownMenu>
>>>>>>>                   <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='h-8 w-8 p-0'>
                      <MoreVertical className='h-4 w-4' />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                  <Link href={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message
                  </Link>
                </Button>

                  {application.resume?.file_url ? (
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
========
=======
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
                  </AvatarPrimitive>;
                  <div>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;
              {/* Application Info */}
              <div className='flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2'>;
                <div className='flex items-center'>;
                  <Calendar className='h-3 w-3 mr-1' />;
                  {formatDistanceToNow(new Date(application && application.created_at), {;
                    addSuffix: true,;
                  })}
                </div>;
                {isStalled && (;
                  <div className='flex items-center text-amber-500'>;
                    <AlertTriangle className='h-3 w-3 mr-1' />;
                    Stalled;
                  </div>;
                )}
              </div>;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/hiring-tracker/CandidateCard.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              {/* Match Score */}
              {application.match_score !== null &&
                application.match_score !== undefined && (
                  <div className='mb-2'>
                    <ScoreBadge application={application} />
                  </div>
                )}
              {/* Notes Section */}
              {showNotes && (
                <div className='mt-2'>
                  <Textarea
                    placeholder='Add private notes about this candidate...'
                    className='text-xs min-h-[60px]'
                    value={notes}
                    onChange={e => setNotes(e.target.value)}                  />
                  <div className='flex justify-end mt-2'>
                    <Button size='sm' onClick={handleSaveNotes}>
                      Save Notes
                    </Button>
                  </div>
                </div>
              )}
              {/* Action Buttons */}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/hiring-tracker/CandidateCard.tsx
              <div className='flex justify-between mt-2 gap-1'>
                <Button variant='outline' size='sm' className='flex-1' asChild>
>>>>>>>                   <Link href={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message
                  </Link>
                </Button>
                <Button variant='outline' size='sm' className='flex-1' asChild>
>>>>>>>                   {application.resume?.file_url ? (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
                </div>;
                {isStalled && (;
                  <div className="flex items-center text-amber-500">;
                    <AlertTriangle className="h-3 w-3 mr-1" />;
                    Stalled;
                  </div>;
                )}
              </div>;
              {/* Match Score */}
              {application.match_score !== null && application.match_score !== undefined && (;
                <div className="mb-2">;
                  <ScoreBadge application={application} />;
                </div>;
              )}
;
              {/* Notes Section */}
              {showNotes && (
                <div className="mt-2">
                  <Textarea 
                    placeholder="Add private notes about this candidate..." 
                    className="text-xs min-h-[60px]"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                  <div className="flex justify-end mt-2">
                    <Button size="sm" onClick={handleSaveNotes}>Save Notes</Button>
                  </div>
                </div>
              )}
;
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
                  <Link href={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-3 w-3 mr-1" /> Resume
                    </Link>
                  ) : (
                    <span>
                      <FileText className="h-3 w-3 mr-1" /> No Resume
                    </span>
                  )}
                </Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
  handleHireConfirmed
}/> </>)
}'"}
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                  {application.resume?.file_url ? (
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/hiring-tracker/CandidateCard.tsx
=======
                  {application.resume?.file_url ? (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<<< HEAD:src/components/hiring-tracker/CandidateCard.tsx

                </Button>;


========
                </Button>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/hiring-tracker/CandidateCard.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <Button
                  variant='default'
                  size='sm'
                  className='flex-1'
<<<<<<< HEAD
                  onClick={() => setShowHireModal(true)}                >;
                  <BriefcaseIcon className='h-3 w-3 mr-1' /> Hire;
                </Button>

=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  handleHireConfirmed 
}/> </>) 
}'"};
;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>>                 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => setShowHireModal(true)}
                >;
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        )}
<<<<<<<< HEAD:src/components/hiring-tracker/CandidateCard.tsx

      </Draggable>;


========
      </Draggable>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/hiring-tracker/CandidateCard.tsx
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal
        isOpen = {showHireModal,}
        onClose = {() => setShowHireModal(false),}
        application = {application,}
        onConfirm = {handleHireConfirmed,}
<<<<<<<< HEAD:src/components/hiring-tracker/CandidateCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/hiring-tracker/CandidateCard.tsx
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
<<<<<<<< HEAD:src/components/hiring-tracker/CandidateCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/hiring-tracker/CandidateCard.tsx
  //Here you would save the notes to the database //For now, we'll just show a toast toast ({
  setShowNotes (false);
}
  //Hiring process completed via the modal toast ({
<<<<<<<< HEAD:src/components/hiring-tracker/CandidateCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/hiring-tracker/CandidateCard.tsx
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
<<<<<<<< HEAD:src/components/hiring-tracker/CandidateCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/hiring-tracker/CandidateCard.tsx
}</DropdownMenuContent> </DropdownMenu> </div> {
  /* Application Info */ ";
}<div className="flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2"> <div className="flex items - center"> <Calendar className="h - 3 w - 3 mr - 1" /> {
  formatDistanceToNow (new Date (application.created at), {
<<<<<<<< HEAD:src/components/hiring-tracker/CandidateCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/hiring-tracker/CandidateCard.tsx
      />;
    </>;
  );
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
=======
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        )}
      </Draggable>;
<<<<<<< HEAD
      ;
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
        application={application}
        onConfirm={handleHireConfirmed}
      />;
    </>;
  ),;}
 import { ;
  {;
  {;
  MessageSquare, User, FileText, MoreVertical, Calendar,  AlertTriangle, BriefcaseIcon ;
 } from "lucide-react";
import {;
  DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;';
import Image from 'next/image';
//Import next/image   //Here you would save the notes to the database //For now, we'll just show a toast toast ({;
  setShowNotes (false);
};
  //Hiring process completed via the modal toast ({;
  application.id ;
}index= {;
  index ;
}> {;
  (provided) => (<Card className="mb-2 p-0 shadow-sm border" ref= {;
  provided.innerRef ;
}{;
  ...provided.draggableProps ;
}{;
  ...provided.dragHandleProps ";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}> <CardContent className="p-3"> {;
  /* Candidate Header */ ";
}<div className="flex justify-between items-start mb-2"> <div className="flex items-center gap-2"> <AvatarPrimitive className="h-8 w-8"> {;
  /* Using renamed AvatarPrimitive */ ;
}{;
<<<<<<< HEAD
  application && application.talent profile?.profile picture url && !avatarError ? (<Imagesrc= {
  application && application.talent profile && profile.profile picture url 
}alt= {
  candidateName 
}width= {
  32 
}//Match h-8 w-8 height= {
  32 "
}//Match h-8 w-8 className="rounded-full object-cover" //Ensure rounded and object-cover onError= {
=======
  application.talent profile?.profile picture url && !avatarError ? (<Image src= {;
  application.talent profile.profile picture url ;
}alt= {;
  candidateName ;
}width= {;
  32 ;
}//Match h-8 w-8 height= {;
  32 ";
}//Match h-8 w-8 className="rounded-full object-cover" //Ensure rounded and object-cover onError= {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  () => setAvatarError (true) ;
}priority= {;
  false ";
}//Avatars are usually not LCP />) : (<User className="h-4 w-4" />) ";
}</AvatarPrimitive> <div> <h4 className="font-medium text-sm"> {;
  candidateName ";
<<<<<<< HEAD
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem asChild> <Linkhref= {
  `/messages?talentId=$ {
  application && application.talent id 
}` 
}> Message </Link> </DropdownMenuItem> {;
  application && application.resume?.file url && (<DropdownMenuItem asChild> <ahref= {
  application && application.resume.file url "
=======
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem asChild> <Link href= {;
  `/messages?talentId=$ {;
  application.talent id ;
}` ;
}> Message </Link> </DropdownMenuItem> {;
  application.resume?.file url && (<DropdownMenuItem asChild> <a href= {;
  application.resume.file url ";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}target="blank" rel="noopener noreferrer"> View Resume </Link> </DropdownMenuItem>) ;
}</DropdownMenuContent> </DropdownMenu> </div> {;
  /* Application Info */ ";
}<div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2"> <div className="flex items-center"> <Calendar className="h-3 w-3 mr-1" /> {;
<<<<<<< HEAD
  formatDistanceToNow (new Date (application && application.created at), {;
=======
  formatDistanceToNow (new Date (application.created at), {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  addSuffix: true ;
}) ;
}</div> {";
  isStalled && (<div className="flex items-center text-amber-500"> <AlertTriangle className="h-3 w-3 mr-1" /> Stalled </div>) ;
}</div> {;
  /* Match Score */ ;
}{";
<<<<<<< HEAD
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  () => setShowHireModal (true) ";
}> <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire </Button> </div> </CardContent> </Card>) ;
}</Draggable> {;
  /* Hire Confirmation Modal */ ;
<<<<<<< HEAD
}<HireConfirmationModalisOpen= {
  showHireModal 
}onClose= {
=======
}<HireConfirmationModal isOpen= {;
  showHireModal ;
}onClose= {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  () => setShowHireModal (false) ;
}application= {;
  application ;
}onConfirm= {;
  handleHireConfirmed ;
}/> </>) ;
<<<<<<< HEAD
}'"}
<<<<<<<< HEAD:src/components/hiring-tracker/CandidateCard.tsx

<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/hiring-tracker/CandidateCard.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/hiring-tracker/CandidateCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>>       </Draggable>;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      </Draggable>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/hiring-tracker/CandidateCard.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
