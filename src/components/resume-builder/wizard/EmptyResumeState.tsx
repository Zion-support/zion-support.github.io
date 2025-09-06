

import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { FilePlus } from 'lucide-react'
import { EmptyResumeProps } from "./types",
export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">

      <CardContent className="py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Create Your Resume</h2>
          <p className="text-muted-foreground mb-6">Create a professional resume to showcase your skills and experience</p>

=======
            Create Resume


          <Button 
            onClick={onCreateClick}
            className="gap-2"
          >
            <FilePlus className="h-4 w-4" />

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          </Button>
        </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
