<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import React from 'react';
import { useRouter  } from 'next/router';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'
interface ProjectHeaderProps {
  title: string
<<<<<<< HEAD
export function ProjectHeader({ title }: ProjectHeaderProps) {
  const router = useRouter(); // Changed from useNavigate to useRouter
import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
interface ProjectHeaderProps {;
  title: string;

export function ProjectHeader(): any ({ title }: ProjectHeaderProps) {;
  const router = useRouter(); // Changed from useNavigate to useRouter;
=======
=======
<<<<<<< HEAD
import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
interface ProjectHeaderProps {
  title: string;
export function ProjectHeader({ title }: ProjectHeaderProps) {;
  const router = useRouter(); // Changed from useNavigate to useRouter
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

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
=======

        </h1>;
      </div>;
    </div>;
  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ProjectHeader({ title }: ProjectHeaderProps) {
  const router = useRouter(); // Changed from useNavigate to useRouter
  return (
<<<<<<< HEAD
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b'>
      <div className='flex items-center'>
        <Button
          variant='ghost'
          size='sm'
          className='mr-2'
          onClick={() => router.back()} // Changed to router.back()        >
          <ArrowLeft className='h-4 w-4 mr-1' />
=======
import React from 'react',;
import { useRouter } from 'next/router',;
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
interface ProjectHeaderProps {;
  title: string;
}

export function ProjectHeader({ title }: ProjectHeaderProps) {
  const router = useRouter(), // Changed from useNavigate to useRouter
  
  return (
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mr-2"
          onClick={() => router.back()} // Changed to router.back()
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          Back
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold truncate max-w-xl">{title}</h1>
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      </div>
    </div>
  )
}

}
<<<<<<< HEAD

}

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
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
