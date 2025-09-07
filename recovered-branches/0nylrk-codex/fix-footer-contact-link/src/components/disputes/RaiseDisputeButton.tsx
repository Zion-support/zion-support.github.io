<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
=======
<<<<<<< HEAD

=======
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";
import {DisputeForm} from "./DisputeForm";
import {useNavigate} from "react-router-dom";
import {ShieldAlert} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

import {Button} from "@/components/ui/button";"
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";"
import {DisputeForm} from "./DisputeForm";"
import {useNavigate} from "react-router-dom";"
import {ShieldAlert} from "lucide-react";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
import React, { useState } from "react","
import { Button } from "@/components/ui/button",
"
import React, { useState } from "react","
import { Button } from "@/components/ui/button","
import React, { useState } from "react","
import { Button } from "@/components/ui/button",

"
import React, { useState } from "react","
import { Button } from "@/components/ui/button",

<<<<<<< HEAD
=======

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import React, { useState } from "react",
import { Button } from "@/components/ui/button",

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
import {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


import { 

import {Button} from "@/components/ui/button";""
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";""
import {DisputeForm} from "./DisputeForm";""
import {useNavigate} from "react-router-dom";""
import {ShieldAlert} from "lucide-react";""
import React, { useState } from "react",""
import { Button } from "@/components/ui/button",""
import { Button } from "@/components/ui/button","
import {
  // TODO: Implement
}
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle;
  DialogDescription;
  DialogOverlay"
} from "@/components/ui/dialog","
import { DisputeForm } from "./DisputeForm",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay} from "@/components/ui/dialog";
import {DisputeForm} from "./DisputeForm";
import {useNavigate} from "react-router-dom";
import {ShieldAlert} from "lucide-react";
interface RaiseDisputeButtonProps {;
  projectId: string,;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import { useNavigate } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
interface RaiseDisputeButtonProps {

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  milestoneId?: string;
=======
milestoneId?: string;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import { DisputeForm } from "./DisputeForm",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useNavigate } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
interface RaiseDisputeButtonProps {


  projectId: string

  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
=======
  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  className?: string;
}

import { useNavigate } from "react-router-dom",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ShieldAlert } from "lucide-react",

=======
  className?: string
}
export function RaiseDisputeButton({
  projectId;

  milestoneId
  variant = "outline"
  size;
  className
}: RaiseDisputeButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
import { useNavigate } from "react-router-dom",
import { ShieldAlert } from "lucide-react",
<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  className?: string;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface RaiseDisputeButtonProps {
=======
";
import { useNavigate } from "react-router-dom";"
import { ShieldAlert } from "lucide-react";
interface RaiseDisputeButtonProps {}
  milestoneId?: string;"
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";"
  size?: "default" | "sm" | "lg" | "icon";


  className?: string;
}

interface RaiseDisputeButtonProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  projectId: string,
  milestoneId?: string,"
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link","
  size?: "default" | "sm" | "lg" | "icon",
  className?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
  milestoneId,
  variant = "outline",
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
<<<<<<< HEAD
=======
export function RaiseDisputeButton({ ;
  projectId;
export function RaiseDisputeButton({ 
  projectId,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  milestoneId, 
=======
import { ShieldAlert } from "lucide-react",  milestoneId, 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  variant = "outline", 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  size,
  className
=======
import { ShieldAlert } from "lucide-react",  milestoneId, 
=======
import { ShieldAlert } from "lucide-react",

className?: string
}
export function RaiseDisputeButton({
  projectId;

  milestoneId
  variant = "outline"
  size;
  className
}: RaiseDisputeButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
import { useNavigate } from "react-router-dom",
import { ShieldAlert } from "lucide-react",
  className?: string;
}
interface RaiseDisputeButtonProps {
  projectId: string,
  milestoneId?: string,
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",
  className?: string
}

export function RaiseDisputeButton({ 
  projectId,

export function RaiseDisputeButton({ ;
  projectId;
export function RaiseDisputeButton({ 
  projectId,
  milestoneId, 
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  variant = "outline", 
  size,
  className 
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}: RaiseDisputeButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false),
  const navigate = useNavigate(),
<<<<<<< HEAD

=======
  
=======
  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}
  milestoneId?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


<<<<<<< HEAD
  },
  

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleDisputeCreated = (disputeId: string) => {
=======

  milestoneId, "
  variant = "outline", 
  size,
  className;
}: RaiseDisputeButtonProps) {}
  const handleDisputeCreated = (disputeId: string) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setIsDialogOpen(false)
    navigate(`/dashboard/disputes/${disputeId}`)
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <>
      <Button;
=======

  },
  
  return (
    <>
      <Button
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  return (
    <>
      <Button;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        variant={variant}
        size={size}
        className={className})
        onClick={() => setIsDialogOpen(true)}
<<<<<<< HEAD
<<<<<<< HEAD
      >"
        <ShieldAlert className="h-4 w-4 mr-2" />
        Raise Dispute;
      </Button>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>"
=======
      >
        <ShieldAlert className="h-4 w-4 mr-2" />
        Raise Dispute
      </Button>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <DialogContent className="sm:max-w-[550px]">
=======
        <ShieldAlert className="h-4 w-4 mr-2" />"

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <DialogHeader>

            <DialogTitle>Raise a Dispute
            <DialogDescription>
<<<<<<< HEAD
              Please provide details about the issue you're experiencing with this project.
            </DialogDescription>
          </DialogHeader>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <DisputeForm
          
          <DisputeForm 
          <DisputeForm 
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import {;
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    <>;
        className={className} "
import React, { useState } from "react",;""
import { Button } from "@/components/ui/button",;"
import { ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
  DialogDescription,;
<<<<<<< HEAD
  DialogOverlay;
} from "@/components/ui/dialog",;
import { DisputeForm } from "./DisputeForm",;
import { useNavigate } from "react-router-dom",;
import { ShieldAlert } from "lucide-react",;
<<<<<<< HEAD
interface RaiseDisputeButtonProps {;
  projectId: string,;
  milestoneId?: string,;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link",;
  size?: "default" | "sm" | "lg" | "icon",;
  className?: string;
}
;
export function RaiseDisputeButton({;
  projectId,;
  milestoneId,;
  variant = "outline",;
  size,;
  className;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export function RaiseDisputeButton(): any ({ ;
  projectId;
  milestoneId, ;"
  variant = "outline", ;
  size;
  className ;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
} from "@/components/ui/dialog",;""
import { DisputeForm } from "./DisputeForm",;""
import { useNavigate } from "react-router-dom",;""
import { ShieldAlert } from "lucide-react",;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
  projectId:string,;
  milestoneId?:string,;"
  variant?:"default" | "outline" | "secondary" | "destructive" | "ghost" | "link",;""
  size?:"default" | "sm" | "lg" | "icon",;"
  className?:string;
export function RaiseDisputeButton({ ;
  projectId,;
  milestoneId, ;"
  variant = "outline", ;"
  size,;
<<<<<<< HEAD
  className ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  className ;)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}: RaiseDisputeButtonProps) {;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleDisputeCreated = (disputeId: string) => {;
<<<<<<< HEAD
<<<<<<< HEAD
    setIsDialogOpen(false),;`
=======
    setIsDialogOpen(false),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    navigate(`/dashboard/disputes/${disputeId}`);
  };

  return (
    <>;
      <Button;
<<<<<<< HEAD
        variant={variant} 
        size={size} 
        className={className} 
"
import React, { useState } from "react",;"
import { Button } from "@/components/ui/button",;
import { ;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
  DialogDescription,;
  DialogOverlay;"
} from "@/components/ui/dialog",;"
import { DisputeForm } from "./DisputeForm",;"
import { useNavigate } from "react-router-dom",;"
import { ShieldAlert } from "lucide-react",;
;
interface RaiseDisputeButtonProps {;
  projectId:string,;
  milestoneId?:string,;"
  variant?:"default" | "outline" | "secondary" | "destructive" | "ghost" | "link",;"
  size?:"default" | "sm" | "lg" | "icon",;
  className?:string;
}
;
export function RaiseDisputeButton() { return null; }`
    navigate(`/dashboard/disputes/${disputeId}`);
  };

  return (
    <>;

        onClick={() => setIsDialogOpen(true)}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      >;
        <ShieldAlert className="h-4 w-4 mr-2" />;
        Raise Dispute;
      </Button>;      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
=======
      >;"
        <ShieldAlert className="h-4 w-4 mr-2" />;
        Raise Dispute;
      </Button>;




      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <DialogContent className="sm:max-w-[550px]">;
          <DialogHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
            <DialogTitle>Raise a Dispute</DialogTitle>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogOverlay } from '@/components / ui / dialog';
import { DisputeForm } from './DisputeForm';
import { use_navigate } from './react-router-dom';
import { ShieldAlert } from './lucide-react';
interface RaiseDisputeButtonProps {
  project_id: string,
  milestone_id?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  class_name?: string;
}
export /**
 * RaiseDisputeButton - Function description
 */
function RaiseDisputeButton() {
  const [isDialogOpen, setIsDialogOpen] = useState (false);
  const navigate = use_navigate ();
;
  const handleDisputeCreated = (dispute_id: string) =>: any {
    setIsDialogOpen (false),
    navigate (`/dashboard / disputes/${dispute_id}`);
  }
;
  return (
    <>;
      <Button;
        variant={variant}
        size={size}
        className={class_name}
        on_click={() => setIsDialogOpen (true)}
      >;
        <ShieldAlert className="h - 4 w - 4 mr - 2" />;
        Raise Dispute;
      </Button>;
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className="sm:max - w-[550px]">;
          <DialogHeader>;
            <DialogTitle > Raise a Dispute</DialogTitle>;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



            <DialogDescription>;'
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        variant={variant} ;
        size={size} ;
        className={className} ;
        className={className} 
        <ShieldAlert className="h-4 w-4 mr-2" />;"

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
        <DialogContent className="sm:max-w-[550px]">;"

          <DialogHeader>;

            <DialogTitle>Raise a Dispute;
            <DialogDescription>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              Please provide details about the issue you're experiencing with this project.;
            </DialogDescription>;
          </DialogHeader>;


          
<<<<<<< HEAD
          <DisputeForm;
          <DisputeForm;
=======
          <DisputeForm 
          <DisputeForm 


          <DisputeForm
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            projectId={projectId}
            milestoneId={milestoneId}
            onDisputeCreated={handleDisputeCreated}
            onCancel={() => setIsDialogOpen(false)}

          />;
        </DialogContent>;
      </Dialog>;
    </>;
  );
}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD


          <DisputeForm;
<<<<<<< HEAD
=======
            <DialogTitle>Raise a Dispute</DialogTitle>;          <DisputeForm;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            <DialogTitle>Raise a Dispute</DialogTitle>;          <DisputeForm;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <DisputeForm;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            project_id={project_id}
            milestone_id={milestone_id}
            onDisputeCreated={handleDisputeCreated}
            on_cancel={() => setIsDialogOpen (false)}
          />;
        </DialogContent>;
      </Dialog>;
    </>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          ;
          <DisputeForm ;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            projectId={projectId}
            milestoneId={milestoneId}
            onDisputeCreated={handleDisputeCreated}
            onCancel={() => setIsDialogOpen(false)}

    </>;
  );

            project_id={project_id}
            milestone_id={milestone_id}
            on_cancel={() => setIsDialogOpen (false)}

    </>);
          <DisputeForm ;

  ),;}
  // TODO: Implement
DialogOverlay interface RaiseDisputeButtonProps {
  // TODO: Implement
milestoneId?: string;
return (<> <Button variant= {
  variant;
}size= {
  size;
}className= {
  className;
}onClick= {)
  () => setIsDialogOpen (true) 
}> <ShieldAlert className="h-4 w-4 mr-2" /> Raise Dispute  <DialogHeader> <DialogTitle>Raise a Dispute <DialogDescription> Please provide details about the issue you're experiencing with this project.   <DisputeForm projectId= {

}/>   </>) 
          />
    </>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
