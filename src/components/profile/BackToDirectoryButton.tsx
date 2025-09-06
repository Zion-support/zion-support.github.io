
import React from 'react',
import { Button } from "@/components/ui/button";
import Link from "next/link";
<<<<<<< HEAD
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
export function BackToDirectoryButton() {
=======
import { ArrowLeft } from 'lucide-react';
export function BackToDirectoryButton() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='container mx-auto px-4 md:px-6 mb-12'>;
      <Button variant='outline' asChild className='my-8'>;
        <Link
          href='/talents'
<<<<<<< HEAD
          className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
        >
          <ArrowLeft className='mr-2 h-4 w-4' />          Back to Talent Directory    <div className="container mx-auto px-4 md: px-6 mb-12">
      <Button variant="outline" asChild className="my-8">
        <Link href="/talents" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}
  )
}
=======
          className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'>;
          <ArrowLeft className='mr-2 h-4 w-4' />          Back to Talent Directory    <div className="container mx-auto px-4 md: px-6 mb-12">;
      <Button variant="outline" asChild className="my-8">;
        <Link href="/talents" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">;
          <ArrowLeft className="mr-2 h-4 w-4" />;
        </Link>;
      </Button>;
    </div>;
  );
}
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
