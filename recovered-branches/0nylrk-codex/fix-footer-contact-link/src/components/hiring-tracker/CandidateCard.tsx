
import { useState } from "react",""
import { Draggable } from "react-beautiful-dnd",""
import { formatDistanceToNow } from "date-fns",""
import { Link } from "react-router-dom",""
import { JobApplication } from "@/types/jobs",""
import { Card, CardContent } from "@/components/ui/card",""
import { Avatar } from "@/components/ui/avatar","
import {;
  MessageSquare,;
  User,;
  FileText,;
  MoreVertical,;
  Calendar,;
  AlertTriangle,;
  BriefcaseIcon,;"
} from "lucide-react";"
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
"
import { Button } from "@/components/ui/button";""
import { Textarea } from "@/components/ui/textarea";"
import {
  // TODO: Implement
}
  MessageSquare;
  User;
  FileText;
  MoreVertical;
  Calendar;
  AlertTriangle;
  BriefcaseIcon;"
} from "lucide-react","
  // TODO: Implement
  // TODO: Implement
DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger;"
} from "@/components/ui/dropdown-menu";""
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";""
import { toast } from "@/hooks/use-toast";""
import { HireConfirmationModal } from "./HireConfirmationModal";"
interface CandidateCardProps {
  // TODO: Implement
  application: JobApplication;"
import { Button } from "@/components/ui/button",""
import { Textarea } from "@/components/ui/textarea","
  // TODO: Implement
  MessageSquare,
  User, 
  FileText, 
  MoreVertical, 
  Calendar,
  AlertTriangle,
  // TODO: Implement
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
DropdownMenuTrigger,;"
interface CandidateCardProps {;"
import { useState  } from './react';
import { Draggable  } from './react - beautiful - dnd';
import { formatDistanceToNow  } from './date - fns';
import { Link  } from './react-router-dom';
import { JobApplication  } from '@/types / jobs';
import { Card, CardContent  } from '@/components / ui / card';
import { Avatar  } from '@/components / ui / avatar';
import { Button  } from '@/components / ui / button';
import { Textarea  } from '@/components / ui / textarea';
  // TODO: Implement
  // TODO: Implement




  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",""
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",""
import { toast } from "@/hooks/use-toast",""
import { HireConfirmationModal } from "./HireConfirmationModal","
  // TODO: Implement
  application: JobApplication;,
  index: number;





  

  const handleSaveNotes = () => {
    // Here you would save the notes to the database;"
    // For now, we'll just show a toast;
    toast({

)
export function CandidateCard(): any ({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application && application.notes || "");"
  const [showHireModal, setShowHireModal] = useState(false);

      title: "Notes saved",""
      description: "Your notes have been saved""
    }),
    setShowNotes(false)
  },
  
  const handleHireConfirmed = () => {
    // Hiring process completed via the modal;
    toast({"
      title: "Hiring process initiated",""
      description: "Offer has been sent to the talent."")
    })
  

  return (
    <>
      <Draggable draggableId={application.id} index={index}>

          <Card;"
            className="mb-2 p-0 shadow-sm border"""
import { useState } from "react",;""
import { Draggable } from "react-beautiful-dnd",;""
import { formatDistanceToNow } from "date-fns",;""
import { Link } from "react-router-dom",;""
import { JobApplication } from "@/types/jobs",;""
import { Card, CardContent } from "@/components/ui/card",;""
import { Avatar } from "@/components/ui/avatar",;""
import { Button } from "@/components/ui/button",;""
import { Textarea } from "@/components/ui/textarea",;"
} from "lucide-react",;"
  DropdownMenuItem,;"
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;""
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",;""
import { toast } from "@/hooks/use-toast",;""
import { HireConfirmationModal } from "./HireConfirmationModal",;"
interface CandidateCardProps {;
  application: JobApplication,;
;)
export function CandidateCard({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false),;"
  const [notes, setNotes] = useState(application.notes || ""),;"
  const [showHireModal, setShowHireModal] = useState(false),;

  // Check if application is stalled (no activity for 7 days);
  const isStalled =;
    application && application.updated_at &&;
    new Date(application && application.updated_at).getTime() <;
      Date && Date.now() - 7 * 24 * 60 * 60 * 1000;

  const handleSaveNotes = () => {;

    <>;
      <Draggable draggableId={application && application.id} index={index}>;

            className="mb-2 p-0 shadow-sm border";"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardContent className="p-3">"
              <div className="flex justify-between items-start mb-2">;"
</div>"
                <div className="flex items-center gap-2">;"
                  <Avatar className="h-8 w-8">;"

                      <img;
                        src={application && application.talent_profile.profile_picture_url}
                        alt={
                      />;
</img>"
                      <User className="h-4 w-4" />;"

                  
                  <div>
                    <h4 className="font-medium text-sm">"
</h4>
                    </h4>"
                    <p className="text-xs text-muted-foreground">"
</p>"

                      <img ;
                        src={application.talent_profile.profile_picture_url} ;"
                        alt={application.talent_profile.full_name || "Candidate"} ;"

                    </p>
                  </div>
                
                <DropdownMenu>

                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">"
                      <MoreVertical className="h-4 w-4" />"

                    
                  <DropdownMenuContent align="end">"

                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>

                  ;
                  <div>;
                    <h4 className="font-medium text-sm">;"
                    </h4>;"
                    <p className="text-xs text-muted-foreground">;"
                    </p>;
                  </div>;
                <DropdownMenu>;

                  <DropdownMenuTrigger asChild>;
                    <Button variant="ghost" className="h-8 w-8 p-0">;"
                      <MoreVertical className="h-4 w-4" />;"

                  ;"
                  <DropdownMenuContent align="end">;"

                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;

                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;
                      <BriefcaseIcon className="h-4 w-4 mr-2" /> Hire Candidate;"

                    <DropdownMenuItem asChild>;

                      <Link to={`/messages?talentId=${application && application.talent_id}`}>;


                        <a;
                          href={application && application.resume.file_url}"
                          target="_blank"""
                          rel="noopener noreferrer">;"
</a>
                        </a>;
              </div>;"
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">;"
                <div className="flex items-center">;"
                  <Calendar className="h-3 w-3 mr-1" />;"

                  <div className="flex items-center text-amber-500">;"
                    <AlertTriangle className="h-3 w-3 mr-1" />;"

                <div className="mb-2">;"
                  <ScoreBadge application={application} />;

                <div className="mt-2">;"
                  <Textarea;"
                    placeholder="Add private notes about this candidate..."""
                    className="text-xs min-h-[60px]""
                    value={notes}
                    onChange={(e) => setNotes(e && e.target.value)}
                  <div className="flex justify-end mt-2">;"
                    <Button size="sm" onClick={handleSaveNotes}>;"

              <div className="flex justify-between mt-2 gap-1">"
                <Button variant="outline" size="sm" className="flex-1" asChild>"
                <Button;"
                  variant="outline"""
                  size="sm"""
                  className="flex-1""
                  asChild;



`;
                  <Link to={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message;"

                  
                


              <div className="flex justify-between mt-2 gap-1">;"
                <Button variant="outline" size="sm" className="flex-1" asChild>;"


</a>"
                      <FileText className="h-3 w-3 mr-1" /> Resume;"

                    <span>;
</span>"
                      <FileText className="h-3 w-3 mr-1" /> No Resume;"

                    </span>;
                  variant="default"""
                  size="sm""
                

                  onClick={() => setShowHireModal(true)}
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;"

    new Date (application.updated_at).get_time () <;
      Date.now () - 7 * 24 * 60 * 60 * 1000;
  const handleSaveNotes = () =>: any {
  // TODO: Implement
    // Here you would save the notes to the database;"
    // For now, we'll just show a toast;
    toast ({
      description: "Your notes have been saved",")
    });
    setShowNotes (false);
  const handleHireConfirmed = () =>: any {
  // TODO: Implement
    // Hiring process completed via the modal;
    toast ({"
      description: "Offer has been sent to the talent.",")
      <Draggable draggable_id={application.id} index={index}>;

            className="mb - 2 p - 0 shadow - sm border";"
            ref={provided.inner_ref}
            {...provided.draggable_props}
          >;
            <CardContent className="p - 3">;"
              <div className="flex justify - between items - start mb - 2">;"
                <div className="flex items - center gap - 2">;"
                  <Avatar className="h - 8 w - 8">;"

                        src={application.talent_profile.profile_picture_url}
                        alt={"
                          application.talent_profile.full_name || "Candidate";"
                      />) : (
</img>)"
                      <User className="h - 4 w - 4" />)}"

                    <h4 className="font - medium text - sm">;"
                    <p className="text - xs text - muted - foreground">;"

                  <DropdownMenuTrigger as_child>;
                    <Button variant="ghost" className="h - 8 w - 8 p - 0">;"
                      <MoreVertical className="h - 4 w - 4" />;"


                    <DropdownMenuItem on_click={() => setShowNotes (!show_notes)}>;

                    <DropdownMenuItem on_click={() => setShowHireModal (true)}>;
                      <BriefcaseIcon className="h - 4 w - 4 mr - 2" /> Hire Candidate;"

                    <DropdownMenuItem as_child>;
                      <Link to={`/messages?talent_id=${application.talent_id}`}>;


                          href={application.resume.file_url}"
                          target="_blank";""
                          rel="noopener noreferrer";"
                      )}
              <div className="flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2">;"
                <div className="flex items - center">;"
                  <Calendar className="h - 3 w - 3 mr - 1" />;"

                  <div className="flex items - center text - amber - 500">;"
                    <AlertTriangle className="h - 3 w - 3 mr - 1" />;"

                  </div>)}
                  <div className="mb - 2">;"

                  </div>)}"
                <div className="mt - 2">;"
                    placeholder="Add private notes about this candidate...";""
                    className="text - xs min - h-[60px]";"
                    on_change={(e) => set_notes (e.target.value)}
                  <div className="flex justify - end mt - 2">;"
                    <Button size="sm" on_click={handleSaveNotes}>;"

              <div className="flex justify - between mt - 2 gap - 1">;"
                <Button variant="outline" size="sm" className="flex - 1" as_child>;"
                    <MessageSquare className="h - 3 w - 3 mr - 1" /> Message;"


                      <FileText className="h - 3 w - 3 mr - 1" /> Resume;"

                    </a>) : (
                      <FileText className="h - 3 w - 3 mr - 1" /> No Resume;"
                    </span>)}
                  variant="default";""
                  size="sm";""
                  className="flex - 1";"
                  on_click={() => setShowHireModal (true)}
                  <BriefcaseIcon className="h - 3 w - 3 mr - 1" /> Hire;"

      <HireConfirmationModal;
        is_open={showHireModal}
        on_close={() => setShowHireModal (false)}

    </>;


  );
        on_confirm={handleHireConfirmed}
    </>);
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;"
                    <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">"

                    
                    <span>

                    </span>
                

                
            
          
      
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}

    </>

      />
"`;