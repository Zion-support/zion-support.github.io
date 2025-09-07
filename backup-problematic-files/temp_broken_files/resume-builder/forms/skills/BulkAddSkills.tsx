
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Sparkles } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';
import { useResume } from '@/hooks/useResume';
import { BulkAddSkillsProps } from './types';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';
;
export const BulkAddSkills = ({ resumeId, onSuccess } BulkAddSkillsProps) => {;
  const [bulkSkills, setBulkSkills] = useState(),;
  const [error, setError] = useState<string | null>(null),;
</string>
    <div className="bg-muted/40 p-6 rounded-lg">;"
</div>"
      <h3 className="text-md font-medium mb-4">Bulk Add & AI Categorization</h3>;""
      <div className="space-y-4">;"
        <div className="space-y-2">;"
          <label className="text-sm font-medium">Enter multiple skills (comma separated)</label>;"
          <Textarea ;"
            className="min-h-24";""
            placeholder="Python, React, TypeScript, Project Management, Communication...";"
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
:temp_broken_files/resume-builder/forms/skills/BulkAddSkills.tsx
//Refresh the skills return (<div className="bg-muted/40 p-6 rounded-lg" > <h3 className="text-md font-medium mb-4" >Bulk Add & AI Categorization</h3> <div className="space-y-4" > <div className="space-y-2" > <label className="text-sm font-medium" >Enter multiple skills (comma separated) </label> <Textarea /> </div> <Button) : (<Sparkles className="h-4 w-4" />) ";"}Categorize with AI </Button> <p className="text-xs text-muted-foreground mt-1" > AI will identify skills and categorize them automatically. This may take a moment to process. </p> </div> </div>) 
};"'"
//Refresh the skills return (<div className="bg-muted/40 p-6 rounded-lg" > <h3 className="text-md font-medium mb-4" >Bulk Add & AI Categorization</h3> <div className="space-y-4" > <div className="space-y-2" > <label className="text-sm font-medium" >Enter multiple skills (comma separated) </label> <Textarea /> </div> <Button) : (<Sparkles className="h-4 w-4" />) ";
}Categorize with AI </Button> <p className="text-xs text-muted-foreground mt-1" > AI will identify skills and categorize them automatically. This may take a moment to process. </p> </div> </div>) 
};
'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/resume-builder/forms/skills/BulkAddSkills.tsx
"
            <Loader2 className="h-4 w-4 animate-spin" />;"
</Loader2>"
            <Sparkles className="h-4 w-4" />;"

        ;"
        <p className="text-xs text-muted-foreground mt-1">;"
</p>
        </p>;"
        {error && <Alert variant="destructive"><AlertDescription>{error}}"
    </div>;"
//Refresh the skills return (<div className="bg-muted/40 p-6 rounded-lg" > <h3 className="text-md font-medium mb-4" >Bulk Add & AI Categorization</h3> <div className="space-y-4" > <div className="space-y-2" > <label className="text-sm font-medium" >Enter multiple skills (comma separated) </label> <Textarea /> </div> <Button) : (<Sparkles className="h-4 w-4" />) ";"}Categorize with AI  <p className="text-xs text-muted-foreground mt-1" > AI will identify skills and categorize them automatically. This may take a moment to process. </p> </div> </div>) ;""
//Refresh the skills return (<div className="bg-muted/40 p-6 rounded-lg" > <h3 className="text-md font-medium mb-4" >Bulk Add & AI Categorization</h3> <div className="space-y-4" > <div className="space-y-2" > <label className="text-sm font-medium" >Enter multiple skills (comma separated) </label> <Textarea /> </div> <Button) : (<Sparkles className="h-4 w-4" />) ";""
}Categorize with AI  <p className="text-xs text-muted-foreground mt-1" > AI will identify skills and categorize them automatically. This may take a moment to process. </p> </div> </div>) ;""
pr-12325
