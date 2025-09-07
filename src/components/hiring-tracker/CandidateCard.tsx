const handleSaveNotes = () => {
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({


      title: 'Notes saved',
      description: 'Your notes have been saved',')
    })
    setShowNotes(false)
  }
  const handleHireConfirmed = () => {
    // Hiring process completed via the modal;
      title: 'Hiring process initiated,
  description: 'Offer has been sent to the talent.)


import { useState } from 'react';
  const candidateName = application.talent_profile?.full_name || 'Candidate
  return (
    <>
      <Draggable draggableId={application.id} index={index}>

          <Card;
            className='mb-2 p-0 shadow-sm border
            ref={provided.innerRef}            {...provided.draggableProps}

      title: "Notes saved",""
      description: "Your notes have been saved"")
    }),
  },
  


          <Card;"
            className="mb-2 p-0 shadow-sm border"""
import { useState } from "react",;""
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
import { Draggable } from "@/lib/dnd-stub";""
import { formatDistanceToNow } from "date-fns";""
import Link from "next/link";""
import { JobApplication } from "@/types/jobs";""
import { Card, CardContent } from "@/components/ui/card";""
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict;""
import { Button } from "@/components/ui/button";""
import { Textarea } from "@/components/ui/textarea";""
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react';
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
  application: JobApplication;,
  index: number;

export function CandidateCard(): any ({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application && application.notes || );
  const [showHireModal, setShowHireModal] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  // Check if application is stalled (no activity for 7 days);
  const isStalled =;
    application && application.updated_at &&;
    new Date(application && application.updated_at).getTime() <;
      Date && Date.now() - 7 * 24 * 60 * 60 * 1000;

  const handleSaveNotes = () => {;

    <>;

      <Draggable draggableId={application.id} index={index}>;

            className="mb-2 p-0 shadow-sm border";"
            ref={provided.innerRef}
            {...provided.draggableProps}


            {...provided.dragHandleProps}
          >
"
            <CardContent className='p-3'>

              <div className="flex justify-between items-start mb-2">;"
</div>"
                <div className="flex items-center gap-2">;"
                  <AvatarPrimitive className="h-8 w-8"> {/* Using renamed AvatarPrimitive */}"

                      <Image;
                        src={application.talent_profile.profile_picture_url} ;
                        alt={candidateName}
                        width={32} // Match h-8 w-8;
                        height={32} // Match h-8 w-8;"
                        className="rounded-full object-cover" // Ensure rounded and object-cover;"
                        onError={() => setAvatarError(true)}
                      <User className="h-4 w-4" />;"

                  ;
                  <div>;
                    <h4 className="font-medium text-sm">;"
</h4>
                    </h4>"
                    <p className="text-xs text-muted-foreground">"
</p>
                  </div>
                

                <DropdownMenu>

                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='h-8 w-8 p-0'>

                      <MoreVertical className='h-4 w-4' />

                    
                  
                  <DropdownMenuContent align='end'>

                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>

                    <h4 className='font-medium text-sm'>{candidateName}</h4>;
                    <p className='text-xs text-muted-foreground'>;
                    </p>;
                  </div>;
                <DropdownMenu>;

                  <DropdownMenuTrigger asChild>;

                    <Button variant='ghost' className='h-8 w-8 p-0'>;

                      <MoreVertical className='h-4 w-4' />;

                  <DropdownMenuContent align='end'>;

                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;

                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;

                      <BriefcaseIcon;
                        className='h-4 w-4 mr-2
                        aria-hidden='true
                      />{' '}

                    <DropdownMenuItem asChild>;

                      <Link;
                        href={`/messages?talentId=${application && application.talent_id}`}>;


                        <a;
                          href={application && application.resume.file_url}
                          target='_blank
                          rel='noopener noreferrer'>;
</a>
                        </a>;
              <div className='flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2'>;
                <div className='flex items-center'>;
                  <Calendar className='h-3 w-3 mr-1' />;

                  <div className='flex items-center text-amber-500'>;
                    <AlertTriangle className='h-3 w-3 mr-1' />;

                  <div className='mb-2'>;
                    <ScoreBadge application={application} />;

                <div className='mt-2'>;
                  <Textarea;
                    placeholder='Add private notes about this candidate...
                    className='text-xs min-h-[60px]
                    value={notes}
                    onChange={e => setNotes(e && e.target.value)}                  />;

                  <div className='flex justify-end mt-2'>;
                    <Button size='sm' onClick={handleSaveNotes}>;

              <div className="flex justify-between mt-2 gap-1">"
                <Button;"
                  variant="outline"""
                  size="sm"""
                  className="flex-1""
                  asChild;


`;
                  <Link href={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className='h-3 w-3 mr-1' /> Message;

                  
                


                
                <Button;
              <div className='flex justify-between mt-2 gap-1'>;
                <Button variant='outline' size='sm' className='flex-1' asChild>;
                  <Link href={`/messages?talentId=${application && application.talent_id}`}>;



                      <FileText className='h-3 w-3 mr-1' /> Resume;

                    <span>;
</span>
                      <FileText className='h-3 w-3 mr-1' /> No Resume;

                    </span>;
                  variant='default
                  size='sm
                  className='flex-1
                  onClick={() => setShowHireModal(true)}                >;

                  <BriefcaseIcon className='h-3 w-3 mr-1' /> Hire;

                
}/> </>) 
}'"};"

                
                  variant="default"""
                  onClick={() => setShowHireModal(true)}
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;"

      <HireConfirmationModal;
        isOpen = {showHireModal,}
        onClose = {() => setShowHireModal(false),}

    new Date (application.updated_at).get_time () <;
      Date.now () - 7 * 24 * 60 * 60 * 1000;
  const handleSaveNotes = () =>: any {
  // TODO: Implement
    // Here you would save the notes to the database;"
    // For now, we'll just show a toast;
    toast ({
    });
    setShowNotes (false);
  const handleHireConfirmed = () =>: any {
  // TODO: Implement
    // Hiring process completed via the modal;
      title: 'Hiring process initiated',
      description: 'Offer has been sent to the talent.',')
  const candidate_name = application.talent_profile?.full_name || 'Candidate';
      <Draggable draggable_id={application.id} index={index}>;

            className='mb - 2 p - 0 shadow - sm border';
            ref={provided.inner_ref}            {...provided.draggable_props}
          >;

            <CardContent className='p - 3'>;

              <div className='flex justify - between items - start mb - 2'>;
                <div className='flex items - center gap - 2'>;
                  <AvatarPrimitive className='h - 8 w - 8'>;

                        src={application.talent_profile.profile_picture_url}
                        alt={candidate_name}
                        width={32} // Match h - 8 w - 8;
                        height={32} // Match h - 8 w - 8;
                        className='rounded - full object - cover' // Ensure rounded and object - cover;')
                        on_error={() => setAvatarError (true)}                        priority={false} // Avatars are usually not LCP;

                      <User className='h - 4 w - 4' />)}

                    <h4 className='font - medium text - sm'>{candidate_name}</h4>;
                    <p className='text - xs text - muted - foreground'>;

                  <DropdownMenuTrigger as_child>;

                    <Button variant='ghost' className='h - 8 w - 8 p - 0'>;

                      <MoreVertical className='h - 4 w - 4' />;


                    <DropdownMenuItem on_click={() => setShowNotes (!show_notes)}>;

                    <DropdownMenuItem on_click={() => setShowHireModal (true)}>;

                        className='h - 4 w - 4 mr - 2';
                        aria - hidden='true';

                    <DropdownMenuItem as_child>;

                      <Link;`;
                        href={`/messages?talent_id=${application.talent_id}`}


                          href={application.resume.file_url}
                          target='_blank';
                          rel='noopener noreferrer';
                      )}
              <div className='flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2'>;
                <div className='flex items - center'>;
                  <Calendar className='h - 3 w - 3 mr - 1' />;

                  <div className='flex items - center text - amber - 500'>;
                    <AlertTriangle className='h - 3 w - 3 mr - 1' />;

                  </div>)}
                  <div className='mb - 2'>;

                <div className='mt - 2'>;
                    placeholder='Add private notes about this candidate...';
                    className='text - xs min - h-[60px]';
                    on_change={e => set_notes (e.target.value)}                  />;

                  <div className='flex justify - end mt - 2'>;
                    <Button size='sm' on_click={handleSaveNotes}>;

              <div className='flex justify - between mt - 2 gap - 1'>;
                <Button variant='outline' size='sm' className='flex - 1' as_child>;
                  <Link href={`/messages?talent_id=${application.talent_id}`}>;

                    <MessageSquare className='h - 3 w - 3 mr - 1' /> Message;


                      <FileText className='h - 3 w - 3 mr - 1' /> Resume;

                    </a>) : (
                      <FileText className='h - 3 w - 3 mr - 1' /> No Resume;
)
                    </span>)}
                  variant='default';
                  size='sm';
                  className='flex - 1';
                  on_click={() => setShowHireModal (true)}                >;

                  <BriefcaseIcon className='h - 3 w - 3 mr - 1' /> Hire;

        is_open = {showHireModal, }
        on_close = {() => setShowHireModal (false), }

    </>);

  //Here you would save the notes to the database //For now, we'll just show a toast toast ({')
  //Hiring process completed via the modal toast ({

  application.id;
}index= {
  index;
}> {)
  (provided) => (<Card className="mb - 2 p - 0 shadow - sm border" ref= {"
  provided.inner_ref;
}{
  ...provided.draggable_props;
}{"
  ...provided.dragHandleProps ";""
}> <CardContent className="p - 3"> {"
}<div className="flex justify - between items - start mb - 2"> <div className="flex items - center gap - 2"> <AvatarPrimitive className="h - 8 w - 8"> {"
  application.talent profile?.profile picture url && !avatar_error ? (<Image src= {
  application.talent profile.profile picture url;
}alt= {
  candidate_name;
}width= {
  32;
}//Match h - 8 w - 8 height= {"
  32 ";""
}//Match h - 8 w - 8 className="rounded - full object - cover" //Ensure rounded and object - cover on_error= {")
  () => setAvatarError (true);
}//Avatars are usually not LCP />) : (<User className="h - 4 w - 4" />) ";"
} <div> <h4 className="font - medium text - sm"> {"
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger as_child> <Button variant="ghost" className="h - 8 w - 8 p - 0"> <MoreVertical className="h - 4 w - 4" />    <DropdownMenuItem as_child> <Link href= {"

}> Message   {
  application.resume?.file url && (<DropdownMenuItem as_child> <a href= {
)"
}target="blank" rel="noopener noreferrer"> View Resume  );"
}  </div> {"
}<div className="flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2"> <div className="flex items - center"> <Calendar className="h - 3 w - 3 mr - 1" /> {"
    </>;
  );
  //Here you would save the notes to the database //For now, we'll just show a toast toast ({;')
};
  //Hiring process completed via the modal toast ({;
  application && application.id ;
}index= {;
  index ;
}> {;)
  (provided) => (<CardclassName="mb-2 p-0 shadow-sm border" ref= {"
  provided && provided.innerRef;
  ...provided && provided.draggableProps;
  ...provided && provided.dragHandleProps """
}> <CardContent className="p-3"> {;"
}<div className="flex justify-between items-start mb-2"> <div className="flex items-center gap-2"> <AvatarPrimitive className="h-8 w-8"> {;"
  application && application.talent profile?.profile picture url && !avatarError ? (<Imagesrc= {
  application && application.talent profile && profile.profile picture url;
  candidateName;
}//Match h-8 w-8 height= {"
  32 """
}//Match h-8 w-8 className="rounded-full object-cover" //Ensure rounded and object-cover onError= {")
  () => setAvatarError (true) ;
}//Avatars are usually not LCP />) : (<User className="h-4 w-4" />) ";"
} <div> <h4 className="font-medium text-sm"> {;"
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" />    <DropdownMenuItem asChild> <Linkhref= {"

}> Message   {;
  application && application.resume?.file url && (<DropdownMenuItem asChild> <ahref= {
}target="blank" rel="noopener noreferrer"> View Resume  ) ;"
}  </div> {;"
}<div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2"> <div className="flex items-center"> <Calendar className="h-3 w-3 mr-1" /> {;"
}</div> {";""
  isStalled && (<div className="flex items-center text-amber-500"> <AlertTriangle className="h-3 w-3 mr-1" /> Stalled </div>) ;"
}</div> {;"
  application && application.match score !== null && application && application.match score !== undefined && (<div className="mb-2"> <ScoreBadgeapplication= {"
</div>)"
}/> </div>) ";""
}<Textareaplaceholder="Add private notes about this candidate..." className="text-xs min-h-[60px]" value= {"
  notes;
}onChange= {
  (e) => setNotes (e && e.target.value) ;
}/> </div> </div>) ";""
}<Button variant="outline" size="sm" className="flex-1" asChild >   <Button variant="outline" size="sm" className="flex-1" asChild > <FileText className="h-3 w-3 mr-1" /> Resume ) : (<span> <FileText className="h-3 w-3 mr-1" /> No Resume </span>) ";""
} <Buttonvariant="default" size="sm" className="flex-1" onClick={""
  () => setShowHireModal (true) ";"
}> <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire  </div>  ) ;"

} {;
}<HireConfirmationModalisOpen= {
  showHireModal;
}onClose= {
  () => setShowHireModal (false) ;

}/> </>) ;"
}'"}"
  add_suffix: true;
});"
  is_stalled && (<div className="flex items - center text - amber - 500"> <AlertTriangle className="h - 3 w - 3 mr - 1" /> Stalled </div>);"
}</div> {"
  application.match score !== null && application.match score !== undefined && (<div className="mb - 2"> <ScoreBadge application= {"
}<Textarea placeholder="Add private notes about this candidate..." className="text - xs min - h-[60px]" value= {"
}on_change= {
  (e) => set_notes (e.target.value);
}<Button variant="outline" size="sm" className="flex - 1" as_child >   <Button variant="outline" size="sm" className="flex - 1" as_child > <FileText className="h - 3 w - 3 mr - 1" /> Resume ) : (<span> <FileText className="h - 3 w - 3 mr - 1" /> No Resume </span>) ";""
} <Button variant="default" size="sm" className="flex - 1" on_click={""
}> <BriefcaseIcon className="h - 3 w - 3 mr - 1" /> Hire  </div>  );"

} {
}<HireConfirmationModal is_open= {
}on_close= {
  () => setShowHireModal (false);

}/> </>);"
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}

;"`;