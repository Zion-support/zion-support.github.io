
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

  const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({


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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

  const candidateName = application.talent_profile?.full_name || "Candidate",

  return (
    <>
      <Draggable draggableId={application.id} index={index}>

            {...provided.dragHandleProps}
          >
            <CardContent className='p-3'>
              {/* Candidate Header */}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='h-8 w-8 p-0'>
                      <MoreVertical className='h-4 w-4' />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
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

                  <Link href={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className='h-3 w-3 mr-1' /> Message
                  </Link>
                </Button>

<<<<<<< HEAD
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
