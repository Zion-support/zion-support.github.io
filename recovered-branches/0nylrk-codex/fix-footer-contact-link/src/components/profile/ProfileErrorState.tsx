<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileErrorState.tsx


<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import { Button } from "@/components/ui/button",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from 'react',
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface ProfileErrorStateProps {
  error: string | null;
}
export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">
      <div className="text-red-400 mb-4 text-xl">
<<<<<<< HEAD
        {error |"Something went wrong"}
=======
{error |"Something went wrong"}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
  );
}
  )
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { ArrowLeft } from "lucide-react";
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileErrorState.tsx
import React from 'react';
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import {ArrowLeft} from "lucide-react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface ProfileErrorStateProps {;
  error: string | null;
}
export function ProfileErrorState(): any ({ error }: ProfileErrorStateProps) {;
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>;
      <Button asChild>;
        <Link to="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">;
=======

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
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>;
      <Button asChild>;
        <Link to="/talents" className="bg-zion-purple hover:bg-zion-purple-dark">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <ArrowLeft className="mr-2 h-4 w-4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<< HEAD

}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileErrorState.tsx

=======
}

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileErrorState.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileErrorState.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
=======
  )

}

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileErrorState.tsx
=======
  );
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  );
}
;
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
