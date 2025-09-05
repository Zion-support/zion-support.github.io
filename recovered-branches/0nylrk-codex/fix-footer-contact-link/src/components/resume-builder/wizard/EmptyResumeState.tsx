
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { FilePlus } from "lucide-react",;
import { EmptyResumeProps } from "./types",;
;
export const EmptyResumeState = ({ onCreateClick } EmptyResumeProps) => {;
  return (;
    <Card className="w-full max-w-2xl mx-auto">;
      <CardContent className="py-8">;
        <div className="text-center">;
          <h2 className="text-2xl font-bold mb-2">Create Your Resume</h2>;
          <p className="text-muted-foreground mb-6">Create a professional resume to showcase your skills and experience</p>;
          <Button ;
            onClick={onCreateClick}
            className="gap-2";
          >;
            <FilePlus className="h-4 w-4" />;
            Create Resume;
          </Button>;
        </div>;
      </CardContent>;
    </Card>;
  ),;
},;
=======
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { FilePlus } from "lucide-react",
import { EmptyResumeProps } from "./types",export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) => {
  return (
    <Card className=&quot;w-full max-w-2xl mx-auto&quot;>
      <CardContent className=&quot;py-8&quot;>
        <div className=&quot;text-center&quot;>
          <h2 className=&quot;text-2xl font-bold mb-2&quot;>Create Your Resume</h2>
          <p className=&quot;text-muted-foreground mb-6&quot;>Create a professional resume to showcase your skills and experience</p>

export const _EmptyResumeState = (_{_onCreateClick}: EmptyResumeProps) => {_return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Create Your Resume</h2>
          <p className="text-muted-foreground mb-6">Create a professional resume to showcase your skills and experience</p>
          <Button 
            onClick={onCreateClick}
            className=&quot;gap-2&quot;
          >
            <FilePlus className=&quot;h-4 w-4&quot; />
            Create Resume
          </Button>
        </div>
      </CardContent>
    </Card>
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
