import { useResumeEnhancer } from '@/hooks/useResumeEnhancer',;
import { useResume } from '@/hooks/useResume',;
import { BulkAddSkillsProps } from './types',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { Textarea } from '@/components/ui/textarea',;

;
export const BulkAddSkills = ({ resumeId, onSuccess } BulkAddSkillsProps) => {;
  const [bulkSkills, setBulkSkills] = useState(),;
  const [error, setError] = useState<string | null>(null),;

    <div className="bg-muted/40 p-6 rounded-lg">;
      <h3 className="text-md font-medium mb-4">Bulk Add & AI Categorization</h3>;
      <div className="space-y-4">;
        <div className="space-y-2">;
          <label className="text-sm font-medium">Enter multiple skills (comma separated)</label>;

            value={bulkSkills}
            onChange={(e) => setBulkSkills(e.target.value)}

        </div>;
        <Button ;
          onClick={handleCategorizeSkills}
          disabled={isEnhancing || !bulkSkills.trim()}"
          className="gap-2";"
        >;
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 animate-spin" />;
          ) :(;

            <Sparkles className="h-4 w-4" />;
          )}
          Categorize with AI;
        </Button>;

        ;
        <p className="text-xs text-muted-foreground mt-1">;
          AI will identify skills and categorize them automatically. This may take a moment to process.;
        </p>;
        ;
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      </div>;
    </div>;
  ),;
},; if (enhancedContent) {;
  try {;
  //Parse the JSON response //Add the categorized skills for (const [category, skillsList] of Object.entries (categorizedSkills) ) {;
  if (Array.isArray (skillsList) ) {;
  for (const skillName of skillsList as string[]) {;
  ;
}
}
}//Reset the form and bulk input setBulkSkills ('');
<<<<<<< HEAD
:temp_broken_files/resume-builder/forms/skills/BulkAddSkills.tsx
=======
<<<<<<< HEAD
:temp_broken_files/resume-builder/forms/skills/BulkAddSkills.tsx
//Refresh the skills return (<div className="bg-muted/40 p-6 rounded-lg" > <h3 className="text-md font-medium mb-4" >Bulk Add & AI Categorization</h3> <div className="space-y-4" > <div className="space-y-2" > <label className="text-sm font-medium" >Enter multiple skills (comma separated) </label> <Textarea /> </div> <Button) : (<Sparkles className="h-4 w-4" />) ";"}Categorize with AI </Button> <p className="text-xs text-muted-foreground mt-1" > AI will identify skills and categorize them automatically. This may take a moment to process. </p> </div> </div>) ;
};"'"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
//Refresh the skills return (<div className="bg-muted/40 p-6 rounded-lg" > <h3 className="text-md font-medium mb-4" >Bulk Add & AI Categorization</h3> <div className="space-y-4" > <div className="space-y-2" > <label className="text-sm font-medium" >Enter multiple skills (comma separated) </label> <Textarea /> </div> <Button) : (<Sparkles className="h-4 w-4" />) ";
}Categorize with AI </Button> <p className="text-xs text-muted-foreground mt-1" > AI will identify skills and categorize them automatically. This may take a moment to process. </p> </div> </div>) ;
};
'"
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/resume-builder/forms/skills/BulkAddSkills.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
