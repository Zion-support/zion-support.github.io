<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import { useRouter  } from 'next/router';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'
interface ProjectHeaderProps {
  title: string
import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
interface ProjectHeaderProps {
  title: string;
export function ProjectHeader({ title }: ProjectHeaderProps) {;
  const router = useRouter(); // Changed from useNavigate to useRouter

  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b'>
      <div className='flex items-center'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
return (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b'>;
      <div className='flex items-center'>;
        <Button
          variant='ghost'
          size='sm'
          className='mr-2'
<<<<<<< HEAD
<<<<<<< HEAD
          onClick={() => router && router.back()} // Changed to router && router.back()        >;
          <ArrowLeft className='h-4 w-4 mr-1' />;
          Back;
        </Button>;
        <h1 className='text-2xl md:text-3xl font-bold truncate max-w-xl'>;
          {title}

        </h1>;
      </div>;
    </div>;
  );

  )
=======
          onClick={() => router.back()} // Changed to router.back()        >
          <ArrowLeft className='h-4 w-4 mr-1' />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

}
<<<<<<< HEAD
;
=======

export function ProjectHeader({ title }: ProjectHeaderProps) {
  const router = useRouter(); // Changed from useNavigate to useRouter
  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b'>
      <div className='flex items-center'>
        <Button
          variant='ghost'
          size='sm'
          className='mr-2'
          onClick={() => router.back()} // Changed to router.back()        >
          <ArrowLeft className='h-4 w-4 mr-1' />
import React from 'react',;
import { useRouter } from 'next/router',;
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
interface ProjectHeaderProps {;
  title: string;
}

=======
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function ProjectHeader({ title }: ProjectHeaderProps) {
  const router = useRouter(); // Changed from useNavigate to useRouter
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
<<<<<<< HEAD
}
}
ursor/fix-website-loading-errors-and-merge-6662
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
