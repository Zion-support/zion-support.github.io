
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
        <Button
          variant='ghost'
          size='sm'
          className='mr-2'
          onClick={() => router.back()} // Changed to router.back()        >
          <ArrowLeft className='h-4 w-4 mr-1' />
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mr-2"
          onClick={() => router.back()} // Changed to router.back()
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          Back
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold truncate max-w-xl">{title}</h1>
      </div>
    </div>
  )
}
}
;
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
