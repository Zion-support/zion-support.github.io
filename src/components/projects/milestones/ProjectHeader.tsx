<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
export function ProjectHeader({ title }: ProjectHeaderProps) {
  const router = useRouter(); // Changed from useNavigate to useRouter
  return (

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import { useRouter  } from 'next/router';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'
interface ProjectHeaderProps {
  title: string
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
=======
return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b'>;
      <div className='flex items-center'>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <Button
          variant='ghost'
          size='sm'
          className='mr-2'
          onClick={() => router.back()} // Changed to router.back()        >
          <ArrowLeft className='h-4 w-4 mr-1' />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from 'react',;
import { useRouter } from 'next/router',;
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
interface ProjectHeaderProps {;
  title: string;
}

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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function ProjectHeader({ title }: ProjectHeaderProps) {
  const router = useRouter(); // Changed from useNavigate to useRouter
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b'>
      <div className='flex items-center'>
        <Button
          variant='ghost'
          size='sm'
          className='mr-2'
          onClick={() => router.back()} // Changed to router.back()        >
          <ArrowLeft className='h-4 w-4 mr-1' />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          Back
=======
>>>>>>>           Back
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold truncate max-w-xl">{title}</h1>
      </div>
    </div>
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
}
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
<<<<<<< HEAD
;
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
