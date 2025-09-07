

import { useState } from 'react',;''
import { Button } from '@/components/ui/button',;''
import { Loader2, Sparkles } from 'lucide-react',;''
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer',;''
import { useResume } from '@/hooks/useResume',;''
import { BulkAddSkillsProps } from './types',;''
import { Alert, AlertDescription } from '@/components/ui/alert',;''
import { Textarea } from '@/components/ui/textarea',;'
;
export const BulkAddSkills = ({ resumeId, onSuccess } BulkAddSkillsProps) => {;'
  const [bulkSkills, setBulkSkills] = useState(''),;'
  const [error, setError] = useState<string | null>(null),;
</string>'
    <div className="bg-muted/40 p-6 rounded-lg">;"
</div>"
      <h3 className="text-md font-medium mb-4">Bulk Add & AI Categorization</h3>;""
      <div className="space-y-4">;"
</div>"
        <div className="space-y-2">;"
</div>"
          <label className="text-sm font-medium">Enter multiple skills (comma separated)</label>;"
          <Textarea ;"
            className="min-h-24";""
            placeholder="Python, React, TypeScript, Project Management, Communication...";"
            value={bulkSkills}
            onChange={(e) => setBulkSkills(e.target.value)}
</Textarea>
        </div>;
        <Button ;
          onClick={handleCategorizeSkills}
          disabled={isEnhancing || !bulkSkills.trim()}"
          className="gap-2";"
        >;
</Button>"
            <Loader2 className="h-4 w-4 animate-spin" />;"
</Loader2>"
            <Sparkles className="h-4 w-4" />;"
</Sparkles>
        </Button>;"
        <p className="text-xs text-muted-foreground mt-1">;"
</p>
        </p>;"
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}"
      </div>;
    </div>;"

