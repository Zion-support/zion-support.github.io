<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FilePlus } from 'lucide-react';
import { EmptyResumeProps } from './types';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FilePlus } from 'lucide-react'
import { EmptyResumeProps } from "./types";
export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) => {
  return (
<<<<<<< HEAD
    <Card className='w-full max-w-2xl mx-auto'>
      <CardContent className='py-8'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold mb-2'>Create Your Resume</h2>
          <p className='text-muted-foreground mb-6'>
            Create a professional resume to showcase your skills and experience
          </p>
          <Button onClick={onCreateClick} className='gap-2'>
            <FilePlus className='h-4 w-4' />
=======

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FilePlus } from 'lucide-react'
import { EmptyResumeProps } from "./types";
export const EmptyResumeState = ({ onCreateClick }: EmptyResumeProps) => {
  return (
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Create Your Resume</h2>
          <p className="text-muted-foreground mb-6">Create a professional resume to showcase your skills and experience</p>
          <Button 
            onClick={onCreateClick}
            className="gap-2"
          >
            <FilePlus className="h-4 w-4" />
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            Create Resume
          </Button>
        </div>
      </CardContent>
    </Card>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
"
=======
  )

};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
