
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { FilePlus } from 'lucide-react'
import { EmptyResumeProps } from "./types",
=======
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { FilePlus } from 'lucide-react'
import { EmptyResumeProps } from &quot;./types&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) => {
  return (
    <Card className=&quot;w-full max-w-2xl mx-auto&quot;>
      <CardContent className=&quot;py-8&quot;>
        <div className=&quot;text-center&quot;>
          <h2 className=&quot;text-2xl font-bold mb-2&quot;>Create Your Resume</h2>
          <p className=&quot;text-muted-foreground mb-6&quot;>Create a professional resume to showcase your skills and experience</p>
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
