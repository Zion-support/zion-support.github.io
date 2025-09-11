


import { FilePlus } from "lucide-react",
import { EmptyResumeProps } from "./types",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Create Your Resume</h2>
          <p className="text-muted-foreground mb-6">
            Create a professional resume to showcase your skills and experience
          </p>
          <Button onClick={onCreateClick} className="gap-2">
            <FilePlus className="h-4 w-4" />
            Create Resume
          </Button>
        </div>
      </CardContent>
    </Card>

  );
}
=======
=======import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {FilePlus} from "lucide-react";
import {EmptyResumeProps} from "./types";
=======
};
=======

};

=======  )
},
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { FilePlus } from "lucide-react",;
import { EmptyResumeProps } from "./types",;

export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) => {;
  return (
    </Card>;
  ),;
},; export const EmptyResumeState = ({
  onCreateClick 
}: EmptyResumeProps) => {
  return (<Card className="w-full max-w-2xl mx-auto" > <CardContent className="py-8" > <div className="text-center" > <h2 className="text-2xl font-bold mb-2" >Create Your Resume</h2> <p className="text-muted-foreground mb-6" >Create a professional resume to showcase your skills and experience</p> onCreateClick 
}className="gap-2" > <FilePlus className="h-4 w-4" /> Create Resume </Button> </div> </CardContent> </Card>) 
};
);

}
};

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
