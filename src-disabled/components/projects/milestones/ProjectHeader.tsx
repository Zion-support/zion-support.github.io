<<<<<<< HEAD:src_backup/components/projects/milestones/ProjectHeader.tsx
<<<<<<< HEAD:src/components/projects/milestones/ProjectHeader.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b'>;
      <div className='flex items-center'>;
=======
return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b'>;
      <div className='flex items-center'>;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/ProjectHeader.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/projects/milestones/ProjectHeader.tsx
import React from 'react';
import { useRouter  } from 'next/router';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'

interface ProjectHeaderProps {
  title: string
export function ProjectHeader({ title }: ProjectHeaderProps) {
  const router = useRouter(); // Changed from useNavigate to useRouter
  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b'>
      <div className='flex items-center'>
<<<<<<< HEAD:src/components/projects/milestones/ProjectHeader.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/ProjectHeader.tsx
        <Button
          variant='ghost''
          size='sm''
          className='mr-2''
          onClick={() => router && router.back()} // Changed to router && router.back()        >;
          <ArrowLeft className='h-4 w-4 mr-1' />;
          Back;
        </Button>;
        <h1 className='text-2xl md:text-3xl font-bold truncate max-w-xl'>;
          {title}
<<<<<<< HEAD:src_backup/components/projects/milestones/ProjectHeader.tsx
<<<<<<< HEAD:src/components/projects/milestones/ProjectHeader.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/projects/milestones/ProjectHeader.tsx
        </h1>;
      </div>;
    </div>;
  );
<<<<<<< HEAD:src_backup/components/projects/milestones/ProjectHeader.tsx

  )
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

}
<<<<<<< HEAD
=======
  )

}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/projects/milestones/ProjectHeader.tsx

export function ProjectHeader({ title }: ProjectHeaderProps) {
  const router = useRouter(), // Changed from useNavigate to useRouter
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mr-2"
          onClick={() => router.back()} // Changed to router.back()
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold truncate max-w-xl">{title}</h1>
      </div>
    </div>
  )
}
<<<<<<< HEAD:src_backup/components/projects/milestones/ProjectHeader.tsx
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======

}
;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/ProjectHeader.tsx
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/projects/milestones/ProjectHeader.tsx
        </h1>
      </div>
    </div>
  );
<<<<<<< HEAD:src/components/projects/milestones/ProjectHeader.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/ProjectHeader.tsx
