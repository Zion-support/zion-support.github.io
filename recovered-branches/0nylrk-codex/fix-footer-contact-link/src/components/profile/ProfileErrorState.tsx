import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
interface ProfileErrorStateProps {
  error: string | null;
}
export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">
      <div className="text-red-400 mb-4 text-xl">
        {error || "Something went wrong"}
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
  );
}

export function ProfileErrorState(): any ({ error }: ProfileErrorStateProps) {;
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>;
      <Button asChild>;
        <Link to="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">;
  )
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { ArrowLeft } from "lucide-react";
}
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>;
      <Button asChild>;
        <Link to="/talents" className="bg-zion-purple hover:bg-zion-purple-dark">;
<<<<<<< HEAD
          <ArrowLeft className="mr-2 h-4 w-4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>;
  );
}


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
    <div className="min - h-screen bg - zion - blue flex flex - col justify - center items - center p - 4">;
      <div className="text - red - 400 mb - 4 text - xl">;
=======
    <div className="min - h-screen bg - zion - blue flex flex - col justify - center items - center p-4">;
      <div className="text - red - 400 mb - 4 text-xl">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        {error || "Something went wrong"}
      </div>;
      <Button as_child>;
        <Link;
          to="/talents";
<<<<<<< HEAD
          className="bg - zion - purple hover: bg - zion - purple - dark";
        >;
          <ArrowLeft className="mr - 2 h - 4 w - 4" />;
=======
          className="bg - zion - purple hover: bg - zion - purple-dark";
        >;
          <ArrowLeft className="mr - 2 h - 4 w-4" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>);
}
<<<<<<< HEAD

  )
  )


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  )
  )

}

<<<<<<< HEAD
;

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
;}
;

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
