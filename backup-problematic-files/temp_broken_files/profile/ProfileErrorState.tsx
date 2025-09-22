
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
<<<<<<< HEAD
        <Link to="/talents" className="bg-zion-purple hover:bg-zion-purple-dark">;
=======
        <Link href="/talents" className="bg-zion-purple hover:bg-zion-purple-dark">;
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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


  return (<div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4" > <div className="text-red-400 mb-4 text-xl" > {";
  error || "Something went wrong" ;
}</div> ;
}'"


