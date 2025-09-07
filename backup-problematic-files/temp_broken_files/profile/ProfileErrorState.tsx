

import React from 'react',;''
import { Button } from "@/components/ui/button",;""
import Link from "next/link",;""
import { ArrowLeft } from 'lucide-react';'

;
interface ProfileErrorStateProps {;}
  error:string | null;}
}
;
export function ProfileErrorState({ error } ProfileErrorStateProps) {;

  return (;'
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;"
</div>"
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>;"
      <Button asChild>;
</Button>"
        <Link href="/talents" className="bg-zion-purple hover:bg-zion-purple-dark">;"
</Link>"
          <ArrowLeft className="mr-2 h-4 w-4" />;"
</ArrowLeft>
        </Link>;
      </Button>;
    </div>;"
  return (<div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4" > <div className="text-red-400 mb-4 text-xl" >{";"  error || "Something went wrong" ;"
</div>"
}</div> ;"}'"""
  return (<div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4" > <div className="text-red-400 mb-4 text-xl" > {";"
</div>
}</div> ;)"

