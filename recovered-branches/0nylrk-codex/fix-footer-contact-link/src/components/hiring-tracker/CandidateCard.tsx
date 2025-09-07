<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { JobApplication } from "@/types/jobs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { JobApplication } from "@/types/jobs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState } from "react",
import { Draggable } from "react-beautiful-dnd",
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { JobApplication } from "@/types/jobs",
import { Card, CardContent } from "@/components/ui/card",
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Avatar } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import { Avatar } from "@/components/ui/avatar",
";
import { Button } from "@/components/ui/button";"
<<<<<<< HEAD
import { Textarea } from "@/components/ui/textarea";"
import {
  }
>>>>>>> merged-prs-20250907-203621
  MessageSquare,
  User, 
  FileText, 
  MoreVertical, 
  Calendar,
  AlertTriangle,
  BriefcaseIcon
<<<<<<< HEAD
} from "lucide-react",
import {
=======
} from "lucide-react";"
  }
>>>>>>> merged-prs-20250907-203621
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";
import { toast } from "@/hooks/use-toast";
import { HireConfirmationModal } from "./HireConfirmationModal";
interface CandidateCardProps {
<<<<<<< HEAD
  application: JobApplication,
  index: number}

export function CandidateCard({ application, index }: CandidateCardProps) {
  const [showNotes, setShowNotes] = useState($2);
  const [notes, setNotes] = useState($2);
  const [showHireModal, setShowHireModal] = useState($2);
  // Check if application is stalled (no activity for 7 days)
  const isStalled = $2;
  const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast($2);
    setShowNotes(false)
  },
  
  const handleHireConfirmed = $2;
      description: "Offer has been sent to the talent."
    })
  },
  
=======
  }
  "application": JobApplication;
  "index": number;
}
=======
import { Textarea } from "@/components/ui/textarea";
import {};
  MessageSquare;
  User;
  FileText;
  MoreVertical;
  Calendar;
  AlertTriangle;
  BriefcaseIcon"
} from "lucide-react",
import {};
  MessageSquare;
  User;
  FileText;
  MoreVertical;
  Calendar;
  AlertTriangle;
  BriefcaseIcon"
} from "lucide-react";
>>>>>>> origin/chore/fix-lint-and-merge

import { useState } from "react",;
import { Draggable } from "react-beautiful-dnd",;
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { JobApplication } from "@/types/jobs",;
import { Card, CardContent } from "@/components/ui/card",;
import { Avatar } from "@/components/ui/avatar",  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",;
import { toast } from "@/hooks/use-toast",;
import { HireConfirmationModal } from "./HireConfirmationModal",;

  const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({

export function CandidateCard(): any ({ application, index }: CandidateCardProps) {;
  const [notes, setNotes] = useState(application && application.notes || "");

      title: "Notes saved",
      description: "Your notes have been saved"

import { useState } from "react",""
import { Draggable } from "react-beautiful-dnd",""
import { formatDistanceToNow } from "date-fns",""
import { Link } from "react-router-dom",""
import { JobApplication } from "@/types/jobs",""
import { Card, CardContent } from "@/components/ui/card",""
import { Avatar } from "@/components/ui/avatar","
<<<<<<< HEAD
=======
=======
import { Avatar } from "@/components/ui/avatar",

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {;
  MessageSquare,;
  User,;
  FileText,;
  MoreVertical,;
  Calendar,;
  AlertTriangle,;
  BriefcaseIcon,;
} from "lucide-react";
<<<<<<< HEAD
=======
<<<<<<< HEAD

import { useState } from "react",;
import { Draggable } from "react-beautiful-dnd",;
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { JobApplication } from "@/types/jobs",;
import { Card, CardContent } from "@/components/ui/card",;
import { Avatar } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { ;
  MessageSquare,;
  User, ;
  FileText, ;
  MoreVertical, ;
  Calendar,;
  AlertTriangle,;
  BriefcaseIcon;
} from "lucide-react",;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {;
  BriefcaseIcon,;"
} from "lucide-react";"
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;

BriefcaseIcon,;
} from "lucide-react";
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
<<<<<<< HEAD
  DropdownMenuTrigger,;

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
} from "@/components/ui/dropdown-menu";
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";
import { toast } from "@/hooks/use-toast";
import { HireConfirmationModal } from "./HireConfirmationModal";
interface CandidateCardProps {;
import { useState  } from './react';
import { Draggable  } from './react - beautiful - dnd';
import { formatDistanceToNow  } from './date - fns';
import { Link  } from './react-router-dom';
import { JobApplication  } from '@/types / jobs';
import { Card, CardContent  } from '@/components / ui / card';
import { Avatar  } from '@/components / ui / avatar';
import { Button  } from '@/components / ui / button';
import { Textarea  } from '@/components / ui / textarea';
import {

<<<<<<< HEAD
=======

  MessageSquare,
  User,
  FileText,
  MoreVertical,
  Calendar,
  AlertTriangle,


  BriefcaseIcon
} from "lucide-react",


import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare;
  User;
  FileText;
  MoreVertical;
  Calendar;
  AlertTriangle;
  BriefcaseIcon
} from "lucide-react",
import {

  MessageSquare
  User
  FileText
  MoreVertical
  Calendar
  AlertTriangle
  BriefcaseIcon
} from "lucide-react";
import {
DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
=======
  DropdownMenuTrigger,;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
} from "@/components/ui/dropdown-menu";
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";
import { toast } from "@/hooks/use-toast";
import { HireConfirmationModal } from "./HireConfirmationModal";
<<<<<<< HEAD
interface CandidateCardProps {
  application: JobApplication;
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { 
  MessageSquare,
  User, 
  FileText, 
  MoreVertical, 
  Calendar,
  AlertTriangle,
  BriefcaseIcon,;
} from "lucide-react";
  BriefcaseIcon
} from "lucide-react",
=======
interface CandidateCardProps {;
import { useState  } from './react';
import { Draggable  } from './react - beautiful - dnd';
import { formatDistanceToNow  } from './date - fns';
import { Link  } from './react-router-dom';
import { JobApplication  } from '@/types / jobs';
import { Card, CardContent  } from '@/components / ui / card';
import { Avatar  } from '@/components / ui / avatar';
import { Button  } from '@/components / ui / button';
import { Textarea  } from '@/components / ui / textarea';
import {

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  MessageSquare,
  User,
  FileText,
  MoreVertical,
  Calendar,
  AlertTriangle,

  BriefcaseIcon
} from "lucide-react",
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
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
  BriefcaseIcon
} from "lucide-react",
import {

  MessageSquare
  User
  FileText
  MoreVertical
  Calendar
  AlertTriangle
  BriefcaseIcon
} from "lucide-react";
import {
DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { toast } from "@/hooks/use-toast";
import { HireConfirmationModal } from "./HireConfirmationModal";

  MessageSquare,
  User, 
  FileText, 
  MoreVertical, 
  Calendar,
  AlertTriangle,
  BriefcaseIcon,;
} from "lucide-react";
  BriefcaseIcon
} from "lucide-react",
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
<<<<<<< HEAD

DropdownMenuTrigger,;
=======
<<<<<<< HEAD
DropdownMenuTrigger,;
} from "@/components/ui/dropdown-menu";
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";
import { toast } from "@/hooks/use-toast";
import { HireConfirmationModal } from "./HireConfirmationModal";
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",
import { toast } from "@/hooks/use-toast",
import { HireConfirmationModal } from "./HireConfirmationModal",
const [showNotes, setShowNotes] = useState(false);
interface CandidateCardProps {
  application: JobApplication,
  index: number
}

<<<<<<< HEAD
DropdownMenuTrigger,;
=======
export function CandidateCard({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application.notes || "");
  const [showHireModal, setShowHireModal] = useState(false);

export function CandidateCard({ application, index }: CandidateCardProps) {
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application.notes |"");
  const [showHireModal, setShowHireModal] = useState(false);
  // Check if application is stalled (no activity for 7 days)

  const isStalled =
    application.updated_at &&
    new Date(application.updated_at).getTime() <
      Date.now() - 7 * 24 * 60 * 60 * 1000;
  const [showNotes, setShowNotes] = useState(false),
  const [notes, setNotes] = useState(application.notes || ""),
  const [showHireModal, setShowHireModal] = useState(false),
  
  // Check if application is stalled (no activity for 7 days)
  const isStalled = application.updated_at && 
    new Date(application.updated_at).getTime() < 
    (Date.now() - 7 * 24 * 60 * 60 * 1000),
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

} from "@/components/ui/dropdown-menu";

import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";
"
import { toast } from "@/hooks/use-toast";"
import { HireConfirmationModal } from "./HireConfirmationModal";

import { useState  } from './react';'
import { Draggable  } from './react - beautiful - dnd';'
import { formatDistanceToNow  } from './date - fns';'
import { Link  } from './react-router-dom';'
import { JobApplication  } from '@/types / jobs';'
import { Card, CardContent  } from '@/components / ui / card';'
import { Avatar  } from '@/components / ui / avatar';'
import { Button  } from '@/components / ui / button';'
import { Textarea  } from '@/components / ui / textarea';
import {}

  MessageSquare,
  User,
  FileText,
  MoreVertical,
  Calendar,
  AlertTriangle,

interface CandidateCardProps {
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  application: JobApplication;
  index: number;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

export function CandidateCard(): any ({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application && application.notes || "");
  const [showHireModal, setShowHireModal] = useState(false);

<<<<<<< HEAD
      title: "Notes saved"
      description: "Your notes have been saved"
    });
    setShowNotes(false);
  }
  const handleHireConfirmed = () => {
    // Hiring process completed via the modal
    toast({
      title: "Hiring process initiated"
      description: "Offer has been sent to the talent."
    });
  }
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      title: "Notes saved",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      description: "Your notes have been saved"
    }),
    setShowNotes(false)
  },
  
  const handleHireConfirmed = () => {}
    // Hiring process completed via the modal;
    toast({"
      title: "Hiring process initiated","
      description: "Offer has been sent to the talent."
    })
  },
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
  
<<<<<<< HEAD
title: "Notes saved"
      description: "Your notes have been saved"
    });
    setShowNotes(false);
  }
  const handleHireConfirmed = () => {
    // Hiring process completed via the modal
    toast({
      title: "Hiring process initiated"
      description: "Offer has been sent to the talent."
    });
  }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <>
      <Draggable draggableId={application.id} index={index}>
        {(provided) => (
<<<<<<< HEAD
          <Card "
            className="mb-2 p-0 shadow-sm border"

  const handleSaveNotes = () => {;
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({;
      title: "Notes saved",
      description: "Your notes have been saved",;
    });
    setShowNotes(false);
  };

  const handleHireConfirmed = () => {;
    // Hiring process completed via the modal;
    toast({;

  }

  return (
    <>;
      <Draggable draggableId={application && application.id} index={index}>;

            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >"
            <CardContent className="p-3">

              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;

                  <Avatar className="h-8 w-8">;
                    {application && application.talent_profile?.profile_picture_url ? (;
                      <img
</Card>"
            <CardContent className="p-3">"
</CardContent>"
              <div className="flex justify-between items-start mb-2">;"
</div>"
                <div className="flex items-center gap-2">;"
</div>"
                  <Avatar className="h-8 w-8">;"
</Avatar>
                      <img;
                        src={application && application.talent_profile.profile_picture_url}
                        alt={
=======
<<<<<<< HEAD
          <Card 
            className="mb-2 p-0 shadow-sm border"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardContent className="p-3">
              {/* Candidate Header */}
=======
          <Card "
            className="mb-2 p-0 shadow-sm border"
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from "react",;
import { Draggable } from "react-beautiful-dnd",;
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { JobApplication } from "@/types/jobs",;
import { Card, CardContent } from "@/components/ui/card",;
import { Avatar } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  MessageSquare,;
  User,;
  FileText,;
  MoreVertical,;
  Calendar,;
  AlertTriangle,;
  BriefcaseIcon;
} from "lucide-react",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",;
import { toast } from "@/hooks/use-toast",;
import { HireConfirmationModal } from "./HireConfirmationModal",;
interface CandidateCardProps {;
  application: JobApplication,;
  index: number;
}
;
export function CandidateCard({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false),;
  const [notes, setNotes] = useState(application.notes || ""),;
  const [showHireModal, setShowHireModal] = useState(false),;

  // Check if application is stalled (no activity for 7 days);
  const isStalled =;
    application && application.updated_at &&;
    new Date(application && application.updated_at).getTime() <;
      Date && Date.now() - 7 * 24 * 60 * 60 * 1000;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",;
import { toast } from "@/hooks/use-toast",;
import { HireConfirmationModal } from "./HireConfirmationModal",;
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
  ;
  // Check if application is stalled (no activity for 7 days);
  const isStalled = application.updated_at && ;
    new Date(application.updated_at).getTime() < ;
    (Date.now() - 7 * 24 * 60 * 60 * 1000),;
  ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleSaveNotes = () => {;
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({;
<<<<<<< HEAD
      title: "Notes saved",
=======
<<<<<<< HEAD
=======
      title: "Notes saved",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      description: "Your notes have been saved",;
    });
    setShowNotes(false);
  };

  const handleHireConfirmed = () => {;
    // Hiring process completed via the modal;
    toast({;

  }

  return (
    <>;
      <Draggable draggableId={application && application.id} index={index}>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >"
            <CardContent className="p-3">
<<<<<<< HEAD

=======
          <Card
            className="mb-2 p-0 shadow-sm border"
            ref={provided && provided.innerRef}
            {...provided && provided.draggableProps}
            {...provided && provided.dragHandleProps}>;
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

              {/* Candidate Header */}
<<<<<<< HEAD
<div className="flex justify-between items-start mb-2">
              {/* Candidate Header */}
>>>>>>> merged-prs-20250907-203621
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    {application.talent_profile?.profile_picture_url ? (
                      <img
                        src={application.talent_profile.profile_picture_url}
                        alt={
                          application.talent_profile.full_name |"Candidate"
                        }
                      />
                    ) : (
                      <User className="h-4 w-4" />
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;

                  <Avatar className="h-8 w-8">;
<<<<<<< HEAD
                    {application && application.talent_profile?.profile_picture_url ? (;
                      <img
</Card>"
            <CardContent className="p-3">"
</CardContent>"
              <div className="flex justify-between items-start mb-2">;"
</div>"
                <div className="flex items-center gap-2">;"
</div>"
                  <Avatar className="h-8 w-8">;"
</Avatar>
                      <img;
                        src={application && application.talent_profile.profile_picture_url}
                        alt={
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        }
                      />;

                      <img;
                        src={application && application.talent_profile.profile_picture_url}
                        alt={}
                        }
                      />;
                    ) : (;

                      <User className="h-4 w-4" />;

<<<<<<< HEAD
                    )}
                  </Avatar>
                  <div>"
                    <h4 className="font-medium text-sm">"
                      {application.talent_profile?.full_name |"Candidate"}
                    </h4>"
                    <p className="text-xs text-muted-foreground">

                      {application.talent_profile?.professional_title || "Applicant"}
</img>"
                      <User className="h-4 w-4" />;"
</User>
                  </Avatar>
                  <div>
</div>"
                    <h4 className="font-medium text-sm">"
</h4>
                    </h4>"
                    <p className="text-xs text-muted-foreground">"
</p>"
              <div className="flex justify-between items-start mb-2">;"
</div>"
                <div className="flex items-center gap-2">;"
</div>"
                  <Avatar className="h-8 w-8">;"
</Avatar>
                      <img ;
                        src={application.talent_profile.profile_picture_url} ;"
                        alt={application.talent_profile.full_name || "Candidate"} ;"
                      />;
</img>"
                      <User className="h-4 w-4" />;"
</User>
                    </p>
                  </div>
                </div>
                    </p>
                  </div>
                </div>
                    </p>
=======
                    )}
                  </Avatar>
                  <div>"
                    <h4 className="font-medium text-sm">"
                      {application.talent_profile?.full_name |"Candidate"}
                    </h4>"
                    <p className="text-xs text-muted-foreground">
=======
                    {application.talent_profile?.profile_picture_url ? (;
                      <img;
                        src={application.talent_profile.profile_picture_url} ;
                        alt={application.talent_profile.full_name || "Candidate"} ;
                      />;
                    ) : (;
                      <User className="h-4 w-4" />;
>>>>>>> merged-prs-20250907-203621
                    )}
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-sm">
                      {application.talent_profile?.full_name |"Candidate"}
                    </h4>
                    <p className="text-xs text-muted-foreground">
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;
                  <Avatar className="h-8 w-8">;
                          application && application.talent_profile.full_name || "Candidate"
                        }
                      />;
                    ) : (;
                    {application.talent_profile?.profile_picture_url ? (;
                      <img ;
                        src={application.talent_profile.profile_picture_url} ;
                        alt={application.talent_profile.full_name || "Candidate"} ;
                      />;
                    ) :(;
                      <User className="h-4 w-4" />;



                    )}
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                      {application.talent_profile?.professional_title |
                        "Applicant"}
                    </p>
                  </div>
                </div>
                      {application.talent_profile?.professional_title || "Applicant"}
{application.talent_profile?.professional_title |
                        "Applicant"}
                    </p>
                  </div>
                </div>
                
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                      {application.talent_profile?.professional_title || "Applicant"}
</img>"
                      <User className="h-4 w-4" />;"
</User>
                  </Avatar>
                  <div>
</div>"
                    <h4 className="font-medium text-sm">"
</h4>
                    </h4>"
                    <p className="text-xs text-muted-foreground">"
</p>"
              <div className="flex justify-between items-start mb-2">;"
</div>"
                <div className="flex items-center gap-2">;"
</div>"
                  <Avatar className="h-8 w-8">;"
</Avatar>
                      <img ;
                        src={application.talent_profile.profile_picture_url} ;"
                        alt={application.talent_profile.full_name || "Candidate"} ;"
                      />;
</img>"
                      <User className="h-4 w-4" />;"
</User>
                    </p>
                  </div>
                </div>
                    </p>
                  </div>
                </div>
                    </p>
                  </div>
                </div>

                      {application.talent_profile?.professional_title |

                        "Applicant"}
                    </p>
                  </div>
                </div>"
                      {application.talent_profile?.professional_title || "Applicant"}
                    </p>
                  </div>
                </div>

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <DropdownMenu>

                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
<<<<<<< HEAD
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
=======

                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>"
                  <DropdownMenuContent align="end">
<<<<<<< HEAD

=======
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                      {showNotes ? "Hide notes" : "Add notes"}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>
                      <BriefcaseIcon className="h-4 w-4 mr-2" /> Hire Candidate
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={`/messages?talentId=${application.talent_id}`}>
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
                  </Avatar>;
                  <div>;
                    <h4 className="font-medium text-sm">;
                      {application.talent_profile?.full_name || "Candidate"}
                    </h4>;
                    <p className="text-xs text-muted-foreground">;
                      {application.talent_profile?.professional_title || "Applicant"}
                    </p>;
                  </div>;
                </div>;
                ;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </Avatar>;
                  <div>;"
                    <h4 className="font-medium text-sm">;"
                      {application && application.talent_profile?.full_name || "Candidate"}
                    </h4>;"
                    <p className="text-xs text-muted-foreground">;
                      {application && application.talent_profile?.professional_title ||;"

                        "Applicant"}
                    </p>;
                  </div>;
                </div>;

<<<<<<< HEAD
                      {showNotes ? "Hide notes" : "Add notes"}

                    </DropdownMenuItem>;
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;"
                      <BriefcaseIcon className="h-4 w-4 mr-2" /> Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem asChild>;

                        </a>;
                      </DropdownMenuItem>;
                    )}

                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;

              {/* Match Score */}

              {application.match_score !== null && application.match_score !== undefined && (;"
                <div className="mb-2">;
                  <ScoreBadge application={application} />;
                </div>;
              )}
;

              {/* Notes Section */}
              {showNotes && (;"
                <div className="mt-2">;
                  <Textarea"
                    placeholder="Add private notes about this candidate...""
                    className="text-xs min-h-[60px]"
                    value={notes}
                    onChange={(e) => setNotes(e && e.target.value)}
                  />;"
                  <div className="flex justify-end mt-2">;"
                    <Button size="sm" onClick={handleSaveNotes}>;
                      Save Notes;
                    </Button>;
                  </div>;
                </div>;
              )}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <DropdownMenu>;
                  <DropdownMenuTrigger asChild>;
                    <Button variant="ghost" className="h-8 w-8 p-0">;
                      <MoreVertical className="h-4 w-4" />;
                    </Button>;
                  </DropdownMenuTrigger>;
                  <DropdownMenuContent align="end">;
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;
<<<<<<< HEAD
                      {showNotes ? "Hide notes" : "Add notes"}

=======
<<<<<<< HEAD
                      {showNotes ? "Hide notes" :"Add notes"}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      {showNotes ? "Hide notes" : "Add notes"}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    </DropdownMenuItem>;
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;
                      <BriefcaseIcon className="h-4 w-4 mr-2" /> Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem asChild>;
<<<<<<< HEAD
                      <Link to={`/messages?talentId=${application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application.resume?.file_url && (;
                      <DropdownMenuItem asChild>;
                        <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">;
=======
                      <Link to={`/messages?talentId=${application && application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application && application.resume?.file_url && (;
                      <DropdownMenuItem asChild>;
                        <a
                          href={application && application.resume.file_url}
                          target="_blank"
                          rel="noopener noreferrer">;
<<<<<<< HEAD
<Link to={`/messages?talentId=${application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application.resume?.file_url && (;
                      <DropdownMenuItem asChild>;
                        <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          View Resume;
                          rel="noopener noreferrer">;                          View Resume;
                        </a>;
                      </DropdownMenuItem>;
                    )}
<<<<<<< HEAD
                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;
              ;
=======

                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Application Info */}
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">;
                <div className="flex items-center">;
                  <Calendar className="h-3 w-3 mr-1" />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  {formatDistanceToNow(new Date(application.created_at), { addSuffix:true })}
                </div>;
                ;
=======
                  {formatDistanceToNow(new Date(application && application.created_at), {;
                    addSuffix: true,;
                  })}
                </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {isStalled && (;
                  <div className="flex items-center text-amber-500">;
                    <AlertTriangle className="h-3 w-3 mr-1" />;
                    Stalled;
                  </div>;
                )}
              </div>;

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              {/* Match Score */}
              {application.match_score !== null && application.match_score !== undefined && (;
                <div className="mb-2">;
                  <ScoreBadge application={application} />;
                </div>;
              )}
;

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
              {/* Action Buttons */}

{/* Action Buttons */}

=======



<<<<<<< HEAD
              {/* Action Buttons */}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button 
                  variant="outline" 
                  size="sm" 

                  className="flex-1"
                  asChild;
                >

<<<<<<< HEAD
=======


</DropdownMenuContent>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              {/* Application Info */}
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
<<<<<<< HEAD
                  {formatDistanceToNow(new Date(application.created_at), { addSuffix: true})}
=======
                  {formatDistanceToNow(new Date(application.created_at), {
                    addSuffix: true
                  })}
>>>>>>> merged-prs-20250907-203621
                </div>
                {isStalled && (
                  <div className="flex items-center text-amber-500">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Stalled
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </div>
                </div>

                      {application.talent_profile?.professional_title |

                        "Applicant"}
                    </p>
                  </div>
                </div>"
                      {application.talent_profile?.professional_title || "Applicant"}
                    </p>
                  </div>
                </div>

                <DropdownMenu>

                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">

                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>"
                  <DropdownMenuContent align="end">

                  </Avatar>;
                  <div>;"
                    <h4 className="font-medium text-sm">;"
                      {application && application.talent_profile?.full_name || "Candidate"}
                    </h4>;"
                    <p className="text-xs text-muted-foreground">;
                      {application && application.talent_profile?.professional_title ||;"

                        "Applicant"}
                    </p>;
                  </div>;
                </div>;

                      {showNotes ? "Hide notes" : "Add notes"}

                    </DropdownMenuItem>;
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;"
                      <BriefcaseIcon className="h-4 w-4 mr-2" /> Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem asChild>;

                        </a>;
                      </DropdownMenuItem>;
                    )}

                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;

              {/* Match Score */}
<<<<<<< HEAD

              {application.match_score !== null && application.match_score !== undefined && (;"
                <div className="mb-2">;
                  <ScoreBadge application={application} />;
                </div>;
              )}
;

              {/* Notes Section */}
              {showNotes && (;"
                <div className="mt-2">;
                  <Textarea"
                    placeholder="Add private notes about this candidate...""
                    className="text-xs min-h-[60px]"
                    value={notes}
                    onChange={(e) => setNotes(e && e.target.value)}
                  />;"
                  <div className="flex justify-end mt-2">;"
                    <Button size="sm" onClick={handleSaveNotes}>;
                      Save Notes;
                    </Button>;
                  </div>;
                </div>;
              )}

                <DropdownMenu>;
                  <DropdownMenuTrigger asChild>;
                    <Button variant="ghost" className="h-8 w-8 p-0">;
                      <MoreVertical className="h-4 w-4" />;
                    </Button>;
                  </DropdownMenuTrigger>;
                  <DropdownMenuContent align="end">;
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;
                      {showNotes ? "Hide notes" : "Add notes"}

                      {showNotes ? "Hide notes" : "Add notes"}
                    </DropdownMenuItem>;
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;
                      <BriefcaseIcon className="h-4 w-4 mr-2" /> Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem asChild>;
                      <Link to={`/messages?talentId=${application && application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application && application.resume?.file_url && (;
                      <DropdownMenuItem asChild>;
                        <a
                          href={application && application.resume.file_url}
                          target="_blank"
                          rel="noopener noreferrer">;
<Link to={`/messages?talentId=${application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application.resume?.file_url && (;
                      <DropdownMenuItem asChild>;
                        <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">;
                          View Resume;
                          rel="noopener noreferrer">;                          View Resume;
                        </a>;
                      </DropdownMenuItem>;
                    )}

                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;

              {/* Application Info */}
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">;
                <div className="flex items-center">;
                  <Calendar className="h-3 w-3 mr-1" />;

                {isStalled && (;
                  <div className="flex items-center text-amber-500">;
                    <AlertTriangle className="h-3 w-3 mr-1" />;
                    Stalled;
                  </div>;
                )}
              </div>;

=======
              {application.match_score !== null &&
                application.match_score !== undefined && (
                  <div className="mb-2">
                    <ScoreBadge application={application} />
                  </div>
                )}

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {/* Match Score */}
              {application.match_score !== null && application.match_score !== undefined && (;
                <div className="mb-2">;
                  <ScoreBadge application={application} />;
                </div>;
              )}
;
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

              {/* Action Buttons */}

{/* Action Buttons */}

;
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button 
                  variant="outline" 
                  size="sm" 

                  className="flex-1"
                  asChild;
                >

                  <Link to={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message

                  </Link>
                </Button>

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button variant="outline" size="sm" className="flex-1" asChild>
<<<<<<< HEAD
                  <Link to={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="flex-1" asChild>
=======
;
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <Link to={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message

                  </Link>
                </Button>

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
"
                <Button variant="outline" size="sm" className="flex-1" asChild>

                <Button "
                  variant="outline" "
                  size="sm" "
<<<<<<< HEAD
                  className="flex-1"
                  asChild;
                >

                  {application.resume?.file_url ? (

                    <MessageSquare className="h-3 w-3 mr-1" /> Message;
                  </Link>;
                </Button>;
"
                <Button variant="outline" size="sm" className="flex-1" asChild>;
                  {application && application.resume?.file_url ? (;

=======
=======
<<<<<<< HEAD
                <Button variant="outline" size="sm" className="flex-1" asChild>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                
                <Button 
                  variant="outline" 
                  size="sm" 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  className="flex-1"
                  asChild;
                >
<<<<<<< HEAD
              {/* Action Buttons */}
=======

                  {application.resume?.file_url ? (
<<<<<<< HEAD

                    <MessageSquare className="h-3 w-3 mr-1" /> Message;
                  </Link>;
                </Button>;
"
                <Button variant="outline" size="sm" className="flex-1" asChild>;
                  {application && application.resume?.file_url ? (;

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="flex justify-between mt-2 gap-1">;
                <Button variant="outline" size="sm" className="flex-1" asChild>;
                  <Link to={`/messages?talentId=${application && application.talent_id}`}>;
                    <MessageSquare className="h-3 w-3 mr-1" /> Message;
                  </Link>;
                </Button>;
<<<<<<< HEAD
                <Button variant="outline" size="sm" className="flex-1" asChild>;
                  {application && application.resume?.file_url ? (;
=======

                <Button variant="outline" size="sm" className="flex-1" asChild>;
                  {application && application.resume?.file_url ? (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <a
                      href={application && application.resume.file_url}
                      target="_blank"
                      rel="noopener noreferrer">;
                      <FileText className="h-3 w-3 mr-1" /> Resume;
                    </a>;
                  ) : (;
<<<<<<< HEAD
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
                  <Link to={`/messages?talentId=${application.talent_id}`}>;
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <span>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      <FileText className="h-3 w-3 mr-1" /> No Resume;
                    </span>;
                  )}

<<<<<<< HEAD
                </Button>

                <Button"
                  variant="default""
                  size="sm"

                  onClick={() => setShowHireModal(true)}
                >;"

  const [notes, set_notes] = useState (application.notes || "");
  const [showHireModal, setShowHireModal] = useState (false);
;
  // Check if application is stalled (no activity for 7 days);
  const is_stalled =;
    application.updated_at &&;
      </Draggable>;
    new Date (application.updated_at).get_time () <;
      Date.now () - 7 * 24 * 60 * 60 * 1000;
;

      description: "Your notes have been saved",

    });
    setShowNotes (false);
  }
;

      description: "Offer has been sent to the talent.",

    });
  }
;
  return (
    <>;
      <Draggable draggable_id={application.id} index={index}>;

            className="mb - 2 p - 0 shadow - sm border";

            ref={provided.inner_ref}
            {...provided.draggable_props}
            {...provided.dragHandleProps}

                  <Avatar className="h - 8 w - 8">;
                    {application.talent_profile?.profile_picture_url ? (
                      <img;
                        src={application.talent_profile.profile_picture_url}

                      />) : (
</img>)"
                      <User className="h - 4 w - 4" />)}"
</User>
                  </Avatar>;
                  <div>;

                    </p>;
                  </div>;
                </div>;
                <DropdownMenu>;

                  <DropdownMenuTrigger as_child>;
</DropdownMenuTrigger>"
                    <Button variant="ghost" className="h - 8 w - 8 p - 0">;"
</Button>"
                      <MoreVertical className="h - 4 w - 4" />;"
</MoreVertical>
                    </Button>;
                  </DropdownMenuTrigger>;"
                  <DropdownMenuContent align="end">;"
</DropdownMenuContent>
                    <DropdownMenuItem on_click={() => setShowNotes (!show_notes)}>;
</DropdownMenuItem>
                    </DropdownMenuItem>;
                    <DropdownMenuItem on_click={() => setShowHireModal (true)}>;
</DropdownMenuItem>"
                      <BriefcaseIcon className="h - 4 w - 4 mr - 2" /> Hire Candidate;"
</BriefcaseIcon>
                    </DropdownMenuItem>;
                    <DropdownMenuItem as_child>;

                      <Link to={`/messages?talent_id=${application.talent_id}`}>;
</Link>
                      </Link>;
                    </DropdownMenuItem>;
                      <DropdownMenuItem as_child>;
</DropdownMenuItem>
                        <a;

                          rel="noopener noreferrer";

                        >;
</a>
                        </a>;
                      </DropdownMenuItem>)}
                  </DropdownMenuContent>;
                </DropdownMenu>;

                    <AlertTriangle className="h - 3 w - 3 mr - 1" />;
                    Stalled;
                  </div>)}
              </div>;
              {/* Match Score */}
              {application.match_score !== null &&;

                  <div className="mb - 2">;
                    <ScoreBadge application={application} />;
                  </div>)}
              {/* Notes Section */}

                    <Button size="sm" on_click={handleSaveNotes}>;
                      Save Notes;
                    </Button>;
                  </div>;
                </div>)}

                  <Link to={`/messages?talent_id=${application.talent_id}`}>;
</Link>"
                    <MessageSquare className="h - 3 w - 3 mr - 1" /> Message;"
</MessageSquare>
                  </Link>;
                </Button>;"
                <Button variant="outline" size="sm" className="flex - 1" as_child>;"
</Button>
                    <a;
                      href={application.resume.file_url}"
                      target="_blank";""
                      rel="noopener noreferrer";"
                    >;
</a>"
                      <FileText className="h - 3 w - 3 mr - 1" /> Resume;"
</FileText>
                    </a>) : (
                    <span>;
</span>"
                      <FileText className="h - 3 w - 3 mr - 1" /> No Resume;"
</FileText>)
                    </span>)}
                </Button>;
                <Button;"
                  variant="default";""
                  size="sm";""
                  className="flex - 1";"
                  on_click={() => setShowHireModal (true)}

                </Button>;
              </div>;
            </CardContent>;
          </Card>)}
      </Draggable>;

      </Draggable>;

      </Draggable>;

      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        is_open={showHireModal}
        on_close={() => setShowHireModal (false)}
        application={application}

=======
<<<<<<< HEAD
=======
                </Button>;


<<<<<<< HEAD
                </Button>;
=======
                <Button
                  variant="default"
                  size="sm"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </Button>

                <Button"
                  variant="default""
                  size="sm"

<<<<<<< HEAD
                  onClick={() => setShowHireModal(true)}
                >;"
=======
<<<<<<< HEAD
                  className="flex-1"
                ;
                <Button ;
                  variant="default" ;
                  size="sm" ;
                  className="flex-1";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  className="flex-1"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  onClick={() => setShowHireModal(true)}
                >;
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        )}
<<<<<<< HEAD
      </Draggable>;


      </Draggable>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const [notes, set_notes] = useState (application.notes || "");
  const [showHireModal, setShowHireModal] = useState (false);
;
  // Check if application is stalled (no activity for 7 days);
  const is_stalled =;
    application.updated_at &&;
      </Draggable>;
    new Date (application.updated_at).get_time () <;
      Date.now () - 7 * 24 * 60 * 60 * 1000;
;

      description: "Your notes have been saved",

    });
    setShowNotes (false);
  }
;

      description: "Offer has been sent to the talent.",

    });
  }
;
  return (
    <>;
      <Draggable draggable_id={application.id} index={index}>;

            className="mb - 2 p - 0 shadow - sm border";

            ref={provided.inner_ref}
            {...provided.draggable_props}
            {...provided.dragHandleProps}

                  <Avatar className="h - 8 w - 8">;
                    {application.talent_profile?.profile_picture_url ? (
                      <img;
                        src={application.talent_profile.profile_picture_url}

                      />) : (
</img>)"
                      <User className="h - 4 w - 4" />)}"
</User>
                  </Avatar>;
                  <div>;

                    </p>;
                  </div>;
                </div>;
                <DropdownMenu>;

                  <DropdownMenuTrigger as_child>;
</DropdownMenuTrigger>"
                    <Button variant="ghost" className="h - 8 w - 8 p - 0">;"
</Button>"
                      <MoreVertical className="h - 4 w - 4" />;"
</MoreVertical>
                    </Button>;
                  </DropdownMenuTrigger>;"
                  <DropdownMenuContent align="end">;"
</DropdownMenuContent>
                    <DropdownMenuItem on_click={() => setShowNotes (!show_notes)}>;
</DropdownMenuItem>
                    </DropdownMenuItem>;
                    <DropdownMenuItem on_click={() => setShowHireModal (true)}>;
</DropdownMenuItem>"
                      <BriefcaseIcon className="h - 4 w - 4 mr - 2" /> Hire Candidate;"
</BriefcaseIcon>
                    </DropdownMenuItem>;
                    <DropdownMenuItem as_child>;

                      <Link to={`/messages?talent_id=${application.talent_id}`}>;
</Link>
                      </Link>;
                    </DropdownMenuItem>;
                      <DropdownMenuItem as_child>;
</DropdownMenuItem>
                        <a;

                          rel="noopener noreferrer";

                        >;
</a>
                        </a>;
                      </DropdownMenuItem>)}
                  </DropdownMenuContent>;
                </DropdownMenu>;

                    <AlertTriangle className="h - 3 w - 3 mr - 1" />;
                    Stalled;
                  </div>)}
              </div>;
              {/* Match Score */}
              {application.match_score !== null &&;

                  <div className="mb - 2">;
                    <ScoreBadge application={application} />;
                  </div>)}
              {/* Notes Section */}

                    <Button size="sm" on_click={handleSaveNotes}>;
                      Save Notes;
                    </Button>;
                  </div>;
                </div>)}

                  <Link to={`/messages?talent_id=${application.talent_id}`}>;
</Link>"
                    <MessageSquare className="h - 3 w - 3 mr - 1" /> Message;"
</MessageSquare>
                  </Link>;
                </Button>;"
                <Button variant="outline" size="sm" className="flex - 1" as_child>;"
</Button>
                    <a;
                      href={application.resume.file_url}"
                      target="_blank";""
                      rel="noopener noreferrer";"
                    >;
</a>"
                      <FileText className="h - 3 w - 3 mr - 1" /> Resume;"
</FileText>
                    </a>) : (
                    <span>;
</span>"
                      <FileText className="h - 3 w - 3 mr - 1" /> No Resume;"
</FileText>)
                    </span>)}
                </Button>;
                <Button;"
                  variant="default";""
                  size="sm";""
                  className="flex - 1";"
                  on_click={() => setShowHireModal (true)}

                </Button>;
              </div>;
            </CardContent>;
          </Card>)}
      </Draggable>;

<<<<<<< HEAD
      </Draggable>;

      </Draggable>;

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        is_open={showHireModal}
        on_close={() => setShowHireModal (false)}
        application={application}
<<<<<<< HEAD

      />;
    </>);
}

      ;
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
<Button variant="outline" size="sm" className="flex-1" asChild>

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
                <Button
                  variant="default"
                  size="sm"
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => setShowHireModal(true)}
                >
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire
      <HireConfirmationModal;"
<Button variant="outline" size="sm" className="flex-1" asChild>"
</HireConfirmationModal>"
                    <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">"
</a>"
                      <FileText className="h-3 w-3 mr-1" /> Resume;"
</FileText>
                    </Link>
                    <span>
</span>"
                      <FileText className="h-3 w-3 mr-1" /> No Resume;"
</FileText>

                    </span>
                </Button>

                <Button;"
                  variant="default"""
                  size="sm""
                <Button;"
                  variant="default"""
                  size="sm"""
                  className="flex-1""
                  onClick={() => setShowHireModal(true)}
</Button>"
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;"
</BriefcaseIcon>

                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </Draggable>
      </Draggable>;
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
        application={application}
        onConfirm={handleHireConfirmed}
/>
      </Draggable>

      </Draggable>;
      <HireConfirmationModal;
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
</HireConfirmationModal>
    </>

      />
    </>
  );
}
=======
<<<<<<< HEAD
      />;
    </>;


  );
        on_confirm={handleHireConfirmed}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      />;
    </>);
}

      ;
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
<Button variant="outline" size="sm" className="flex-1" asChild>

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
                <Button
                  variant="default"
                  size="sm"
<<<<<<< HEAD
                <Button 
                  variant="default" 
                  size="sm" 
=======
<<<<<<< HEAD
=======
                
                <Button 
                  variant="default" 
                  size="sm" 
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  className="flex-1"
                  onClick={() => setShowHireModal(true)}
                >
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire
<<<<<<< HEAD
      <HireConfirmationModal;"
<Button variant="outline" size="sm" className="flex-1" asChild>"
</HireConfirmationModal>"
                    <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">"
</a>"
                      <FileText className="h-3 w-3 mr-1" /> Resume;"
</FileText>
                    </Link>
                    <span>
</span>"
                      <FileText className="h-3 w-3 mr-1" /> No Resume;"
</FileText>

                    </span>
                </Button>

                <Button;"
                  variant="default"""
                  size="sm""
                <Button;"
                  variant="default"""
                  size="sm"""
                  className="flex-1""
                  onClick={() => setShowHireModal(true)}
</Button>"
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;"
</BriefcaseIcon>

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </Draggable>
      </Draggable>;
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
        application={application}
        onConfirm={handleHireConfirmed}
/>
<<<<<<< HEAD
      </Draggable>

      </Draggable>;
      <HireConfirmationModal;
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
</HireConfirmationModal>
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </>

      />
    </>
<<<<<<< HEAD
  );
}
=======
=======

        onConfirm={handleHireConfirmed}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />;
    </>;
  );
<<<<<<< HEAD
}
=======
=======
        on_confirm={handleHireConfirmed}
      />;
    </>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
