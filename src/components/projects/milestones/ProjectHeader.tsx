<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
import { useRouter  } from 'next/router';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'
interface ProjectHeaderProps {
  title: string
export function ProjectHeader({ title }: ProjectHeaderProps) {
  const router = useRouter(); // Changed from useNavigate to useRouter
=======
import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
interface ProjectHeaderProps {;
  title: string;

export function ProjectHeader(): any ({ title }: ProjectHeaderProps) {;
  const router = useRouter(); // Changed from useNavigate to useRouter;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b'>;
      <div className='flex items-center'>;
        <Button
          variant='ghost'
          size='sm'
          className='mr-2'
          onClick={() => router && router.back()} // Changed to router && router.back()        >;
          <ArrowLeft className='h-4 w-4 mr-1' />;
          Back;
        </Button>;
        <h1 className='text-2xl md:text-3xl font-bold truncate max-w-xl'>;
          {title}
<<<<<<< HEAD
        </h1>
      </div>
    </div>
  )
}
=======
        </h1>;
      </div>;
    </div>;
  );
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

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
  ),
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import React from 'react';
import { use_router } from 'next / router';
import { Button } from '@/components / ui / button';
import { ArrowLeft } from 'lucide-react';
interface ProjectHeaderProps {
  title: string;
export /**
 * ProjectHeader - Function description
 */
function ProjectHeader() {
  const router = use_router (); // Changed from use_navigate to use_router;
  return (
    <div className='flex flex - col md:flex - row justify - between items - start md:items - center py - 4 border - b'>;
      <div className='flex items - center'>;
        <Button;
          variant='ghost';
          size='sm';
          className='mr - 2';
          on_click={() => router.back ()} // Changed to router.back ()        >;
          <ArrowLeft className='h - 4 w - 4 mr - 1' />;
          Back;
        </Button>;
        <h1 className='text - 2xl md:text - 3xl font - bold truncate max - w-xl'>;
          {title}
        </h1>;
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
