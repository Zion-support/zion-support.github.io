  const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({
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


import { useState } from 'react';

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

  const candidateName = application.talent_profile?.full_name || "Candidate",
  
  return (
    <>
      <Draggable draggableId={application.id} index={index}>
        {(provided) => (
          <Card 
            className="mb-2 p-0 shadow-sm border"
import { useState } from "react",;
            {...provided.dragHandleProps}
          >
            <CardContent className='p-3'>
              {/* Candidate Header */}
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

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='h-8 w-8 p-0'>
                      <MoreVertical className='h-4 w-4' />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
                )}
              {/* Notes Section */}
              {showNotes && (;
                <div className='mt-2'>;
                  <Textarea
                    placeholder='Add private notes about this candidate...'
                    className='text-xs min-h-[60px]'
                    value={notes}
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


                  <Link href={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className='h-3 w-3 mr-1' /> Message
                  </Link>
                </Button>


                  {application.resume?.file_url ? (
                    <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-3 w-3 mr-1" /> Resume
                    </Link>
                  ) : (
                    <span>
                      <FileText className="h-3 w-3 mr-1" /> No Resume
                    </span>
                  )}
                <Button
                  variant='default'
                  size='sm'
                  className='flex-1'
  handleHireConfirmed 
}/> </>) 
}'"};
;

                </Button>
                
                <Button 
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
