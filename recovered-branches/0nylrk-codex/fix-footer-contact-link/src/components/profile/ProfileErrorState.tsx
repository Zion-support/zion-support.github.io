



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ProfileErrorStateProps {
  error: string | null;
}
export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">
      <div className="text-red-400 mb-4 text-xl">
        {error |"Something went wrong"}
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

import React from 'react';
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import {ArrowLeft} from "lucide-react";
interface ProfileErrorStateProps {;
  error: string | null;
}

export function ProfileErrorState(): any ({ error }: ProfileErrorStateProps) {;
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>;
      <Button asChild>;
        <Link to="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">;
          <ArrowLeft className="mr-2 h-4 w-4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>;
  );
}

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
=======
  )

}

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
