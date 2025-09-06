<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function BackToDirectoryButton() {
  return (
    <div className='container mx-auto px-4 md:px-6 mb-12'>
      <Button variant='outline' asChild className='my-8'>
        <Link
          href='/talents'
          className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
        >
          <ArrowLeft className='mr-2 h-4 w-4' />
          Back to Talent Directory
        </Link>
      </Button>
    </div>
  );
}
=======
 import {;
  {;
  {;
  ArrowLeft ;
}from 'lucide-react' export function BackToDirectoryButton () {;
  return (<Button variant="outline" asChild className="my-8"> <Link href="/talents" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"> <ArrowLeft className="mr-2 h-4 w-4" /> '"
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
