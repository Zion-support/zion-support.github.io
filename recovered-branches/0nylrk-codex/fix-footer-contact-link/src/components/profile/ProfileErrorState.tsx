

<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import React from 'react';
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import {ArrowLeft} from "lucide-react";
import React from 'react',
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom",
import { ArrowLeft } from "lucide-react",
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ProfileErrorStateProps {
  error: string | null;
}
export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">
      <div className="text-red-400 mb-4 text-xl">
<<<<<<< HEAD
<<<<<<< HEAD
{error |"Something went wrong"}
=======
        {error |"Something went wrong"}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        {error |"Something went wrong"}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>
      <Button asChild>
        <Link
          to="/talents"
          className="bg-zion-purple hover: bg-zion-purple-dark"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Talent Directory
        </Link>
      </Button>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
  )
  )
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { ArrowLeft } from "lucide-react";

import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { ArrowLeft } from "lucide-react",;
;
interface ProfileErrorStateProps {;
  error:string | null;
}
;
export function ProfileErrorState({ error } ProfileErrorStateProps) {;
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React from 'react';
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import {ArrowLeft} from "lucide-react";
interface ProfileErrorStateProps {;
  error: string | null;
}

export function ProfileErrorState(): any ({ error }: ProfileErrorStateProps) {;
  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>;
      <Button asChild>;
        <Link to="/talents" className="bg-zion-purple hover:bg-zion-purple-dark">;
=======
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>;
      <Button asChild>;
        <Link to="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <ArrowLeft className="mr-2 h-4 w-4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>;
<<<<<<< HEAD
}

=======
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from './react';
import { Button  } from '@/components / ui / button';
import { Link  } from './react-router-dom';
import { ArrowLeft  } from './lucide-react';
interface ProfileErrorStateProps {
  error: string | null;
}
export /**
 * ProfileErrorState - Function description
 */
function ProfileErrorState() {
  return (
    <div className="min - h-screen bg - zion - blue flex flex - col justify - center items - center p - 4">;
      <div className="text - red - 400 mb - 4 text - xl">;
        {error || "Something went wrong"}
      </div>;
      <Button as_child>;
        <Link;
          to="/talents";
          className="bg - zion - purple hover: bg - zion - purple - dark";
        >;
          <ArrowLeft className="mr - 2 h - 4 w - 4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>);
}
<<<<<<< HEAD

  )
  )

}

;

<<<<<<< HEAD
  );}
 interface ProfileErrorStateProps {
  error: string | null 
}export function ProfileErrorState ({
  error 
}: ProfileErrorStateProps) {
  return (<div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4" > <div className="text-red-400 mb-4 text-xl" > {
  error || "Something went wrong" 
}</div> 
}
  );
}
}
;

  );
}
;
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
=======
  )

}

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
