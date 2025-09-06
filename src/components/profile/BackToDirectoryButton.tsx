<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import Link from "next/link";
export function BackToDirectoryButton() {
import { ArrowLeft } from 'lucide-react';
export function BackToDirectoryButton() {;
  return (
    <div className='container mx-auto px-4 md:px-6 mb-12'>;
      <Button variant='outline' asChild className='my-8'>;
        <Link href='/talents''
          Back to Talent Directory
        </Link />
      </Button>
    </div>
  );
};
  );
};
=======

import React from 'react',
import { Button } from "@/components/ui/button",
import Link from "next/link",
import { ArrowLeft } from 'lucide-react'

export function BackToDirectoryButton() {
  return (
    <div className="container mx-auto px-4 md: px-6 mb-12">
      <Button variant="outline" asChild className="my-8">
        <Link href="/talents" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" />
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          Back to Talent Directory
        </Link>
      </Button>
    </div>
  )
<<<<<<< HEAD
          className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'>;
          <ArrowLeft className='mr-2 h-4 w-4' />          Back to Talent Directory    <div className="container mx-auto px-4 md: px-6 mb-12">;",
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
import React from 'react',;
import { Button } from "@/components/ui/button",;
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
export function BackToDirectoryButton() {;
  return (;
    <div className="container mx-auto px-4 md: px-6 mb-12">;
      <Button variant="outline" asChild className="my-8">;
<<<<<<< HEAD
        <Link href="/talents" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" />;
=======
        <Link href="/talents" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          <ArrowLeft className="mr-2 h-4 w-4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>;
  );
}
<<<<<<< HEAD
          Back to Talent Directory
        </Link>
      </Button>
    </div>
  );
}
import React from 'react';
import { Button } from '@/components / ui / button';
import Link from 'next / link';
import { ArrowLeft } from 'lucide-react';
import { Button  } from '@/components / ui / button';
import Link from './next / link';
export /**
 * BackToDirectoryButton - Function description
 */
function BackToDirectoryButton() {
  return (
    <div className='container mx - auto px - 4 md:px - 6 mb - 12'>;
      <Button variant='outline' as_child className='my - 8'>;
        <Link ;
          href='/talents';
          className='border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white';' />;
          <ArrowLeft className='mr - 2 h - 4 w - 4' />          Back to Talent Directory    <div className="container mx - auto px - 4 md: px - 6 mb - 12">;
      <Button variant="outline" as_child className="my - 8">;
        <Link href="/talents" className="border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white" />;
          <ArrowLeft className="mr - 2 h - 4 w - 4" />;
        </Link>;
      </Button>;
    </div>);
}
  );
}
;
=======
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
