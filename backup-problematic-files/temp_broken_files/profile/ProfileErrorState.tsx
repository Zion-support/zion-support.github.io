import React from 'react',;
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
<<<<<<< HEAD
import { ArrowLeft } from 'lucide-react';
=======

import { ArrowLeft } from 'lucide-react';

>>>>>>> merged-prs-20250907-203621
;
interface ProfileErrorStateProps {;
  error:string | null;
}
<<<<<<< HEAD
;
export function ProfileErrorState({ error } ProfileErrorStateProps) {;
  return (;
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>;
      <Button asChild>;
        <Link href="/talents" className="bg-zion-purple hover:bg-zion-purple-dark">;
=======
export function ProfileErrorState({ error } ProfileErrorStateProps) {;
  return (;
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;"
</div>"
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>;"
      <Button asChild>;

>>>>>>> merged-prs-20250907-203621
          <ArrowLeft className="mr-2 h-4 w-4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
<<<<<<< HEAD
    </div>;
<<<<<<< HEAD
=======
=======
    </div>;
>>>>>>> merged-prs-20250907-203621
  );}
 import {;
  {;
  {;
  ArrowLeft ;
}from 'lucide-react' interface ProfileErrorStateProps {;
  error: string | null ;
}export function ProfileErrorState ({;
  error ;
}: ProfileErrorStateProps) {;
<<<<<<< HEAD
  return (<div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4" > <div className="text-red-400 mb-4 text-xl" >{";"  error || "Something went wrong" ;
}</div> ;"}'"
=======
<<<<<<< HEAD
:temp_broken_files/profile/ProfileErrorState.tsx
  return (<div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4" > <div className="text-red-400 mb-4 text-xl" >{";"  error || "Something went wrong" ;
}</div> ;"}'"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (<div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4" > <div className="text-red-400 mb-4 text-xl" > {";
  error || "Something went wrong" ;
}</div> ;
}'"
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/ProfileErrorState.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
