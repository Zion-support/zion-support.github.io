import { useState } from 'react'
// Local stub is used in place of the @hello-pangea/dnd package which isn't
// available in this environment.

import { Draggable } from '@/lib/dnd-stub'
import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link'
<<<<<<< HEAD
import { JobApplication } from '@/types/jobs'
import { Card, CardContent } from '@/components/ui/card'
=======
import { JobApplication } from '@/types/jobs';
import { Card, CardContent } from '@/components/ui/card';
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed to avoid conflict
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  MessageSquare
  User
  FileText
  MoreVertical
  Calendar
  AlertTriangle
  BriefcaseIcon
<<<<<<< HEAD
=======
=======
  MessageSquare,
  User,
  FileText,
  MoreVertical,
  Calendar,
  AlertTriangle,;
  BriefcaseIcon;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
import { toast } from '@/hooks/use-toast'
import { HireConfirmationModal } from './HireConfirmationModal'
=======
import { toast } from '@/hooks/use-toast';
import { HireConfirmationModal } from './HireConfirmationModal';
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
  const isStalled =
    application.updated_at &&
    new Date(application.updated_at).getTime() <
      Date.now() - 7 * 24 * 60 * 60 * 1000
=======
  const isStalled = null;
    application.updated_at &&
    new Date(application.updated_at).getTime() <
      Date.now() - 7 * 24 * 60 * 60 * 1000
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({
<<<<<<< HEAD
      title: 'Notes saved'
      description: 'Your notes have been saved'
=======
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Notes saved'
      description: 'Your notes have been saved'
=======
      title: 'Notes saved',
      description: 'Your notes have been saved',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
  const candidateName = application.talent_profile?.full_name |'Candidate'
import { useState } from 'react';
=======
<<<<<<< HEAD
  const candidateName = application.talent_profile?.full_name |'Candidate'
=======
  const candidateName = application.talent_profile?.full_name || 'Candidate'
  return (
    <>
      <Draggable draggableId={application.id} index={index}>
        {provided => (
          <Card
            className='mb-2 p-0 shadow-sm border'
            ref={provided.innerRef}            {...provided.draggableProps}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  const candidateName = application.talent_profile?.full_name || "Candidate",
  
  return (
    <>
      <Draggable draggableId={application.id} index={index}>

        {(provided) => (
          <Card 
            className="mb-2 p-0 shadow-sm border"
import { useState } from "react",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
      <Draggable draggableId={application && application.id} index={index}>;
        {provided => (;
          <Card
            className='mb-2 p-0 shadow-sm border'
            ref={provided && provided.innerRef}            {...provided && provided.draggableProps}
            {...provided && provided.dragHandleProps}>;
            <CardContent className='p-3'>;
=======

      <Draggable draggableId={application.id} index={index}>;
        {(provided) => (;
          <Card;
            className="mb-2 p-0 shadow-sm border";
            ref={provided.innerRef}
            {...provided.draggableProps}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {...provided.dragHandleProps}
          >
            <CardContent className='p-3'>
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
              {/* Candidate Header */}
              <div className='flex justify-between items-start mb-2'>;
                <div className='flex items-center gap-2'>;
                  <AvatarPrimitive className='h-8 w-8'>;
                    {' '}
                    {/* Using renamed AvatarPrimitive */}
                    {application && application.talent_profile?.profile_picture_url &&;
                    !avatarError ? (;
                      <Image
                        src={application && application.talent_profile.profile_picture_url}
                        alt={candidateName}
                        width={32} // Match h-8 w-8
                        height={32} // Match h-8 w-8
                        className='rounded-full object-cover' // Ensure rounded and object-cover
                        onError={() => setAvatarError(true)}                        priority={false} // Avatars are usually not LCP;
                      />;
                    ) : (;
                      <User className='h-4 w-4' />;
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
=======
                
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='h-8 w-8 p-0'>
                      <MoreVertical className='h-4 w-4' />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
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
<<<<<<< HEAD
              <div className='flex justify-between mt-2 gap-1'>
                <Button variant='outline' size='sm' className='flex-1' asChild>
=======

              <div className="flex justify-between mt-2 gap-1">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                  <Link href={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className='h-3 w-3 mr-1' /> Message
                  </Link>
                </Button>
<<<<<<< HEAD
                <Button variant='outline' size='sm' className='flex-1' asChild>
=======


                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                  {application.resume?.file_url ? (
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
<<<<<<< HEAD
                  onClick={() => setShowHireModal(true)}                >;
                  <BriefcaseIcon className='h-3 w-3 mr-1' /> Hire;
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
<<<<<<< HEAD
  handleHireConfirmed
}/> </>)
}'"}
=======
  handleHireConfirmed 
}/> </>) 
}'"};
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => setShowHireModal(true)}
                >;
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
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
  setShowNotes (false);
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
  /* Application Info */ ";
}<div className="flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2"> <div className="flex items - center"> <Calendar className="h - 3 w - 3 mr - 1" /> {
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
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
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
