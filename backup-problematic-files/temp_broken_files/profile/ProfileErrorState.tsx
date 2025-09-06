
import React from 'react',;
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
import { ArrowLeft } from 'lucide-react';
;
interface ProfileErrorStateProps {;
  error:string | null;
}
;
export function ProfileErrorState({ error } ProfileErrorStateProps) {;
  return (;
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>;
      <Button asChild>;
        <Link href="/talents" className="bg-zion-purple hover:bg-zion-purple-dark">;
          <ArrowLeft className="mr-2 h-4 w-4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>;
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
:temp_broken_files/profile/ProfileErrorState.tsx
  return (<div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4" > <div className="text-red-400 mb-4 text-xl" >{";"  error || "Something went wrong" ;
}</div> ;"}'"
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  return (<div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4" > <div className="text-red-400 mb-4 text-xl" > {";
  error || "Something went wrong" ;
}</div> ;
}'"
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/ProfileErrorState.tsx
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
