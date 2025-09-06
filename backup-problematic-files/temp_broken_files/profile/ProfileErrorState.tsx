
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileErrorState.tsx
=======
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { ArrowLeft } from "lucide-react",;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from 'react',;
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
import { ArrowLeft } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/profile/ProfileErrorState.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileErrorState.tsx
        <Link to="/talents" className="bg-zion-purple hover:bg-zion-purple-dark">;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        <Link href="/talents" className="bg-zion-purple hover:bg-zion-purple-dark">;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/profile/ProfileErrorState.tsx
=======
        <Link href="/talents" className="bg-zion-purple hover:bg-zion-purple-dark">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <ArrowLeft className="mr-2 h-4 w-4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileErrorState.tsx

=======
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
:temp_broken_files/profile/ProfileErrorState.tsx
  return (<div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4" > <div className="text-red-400 mb-4 text-xl" >{";"  error || "Something went wrong" ;
}</div> ;"}'"
  return (<div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4" > <div className="text-red-400 mb-4 text-xl" > {";
  error || "Something went wrong" ;
}</div> ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/ProfileErrorState.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
