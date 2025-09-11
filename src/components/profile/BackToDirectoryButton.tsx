import { Button } from "@/components/ui/button";
import Link from "next/link";
=======

import React from 'react',
import { Button } from "@/components/ui/button",
import Link from "next/link",
import { ArrowLeft } from 'lucide-react'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======




export function BackToDirectoryButton() {
import { ArrowLeft } from 'lucide-react';
export function BackToDirectoryButton() {;
  return (
    <div className='container mx-auto px-4 md:px-6 mb-12'>;
      <Button variant='outline' asChild className='my-8'>;
        <Link
          href='/talents'


          Back to Talent Directory

        </Link>
      </Button>
    </div>
  );
};
  );
};
          Back to Talent Directory

        </Link>
      </Button>
    </div>
  )

          className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'>;
          <ArrowLeft className='mr-2 h-4 w-4' />          Back to Talent Directory    <div className="container mx-auto px-4 md: px-6 mb-12">;


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import React from 'react',;
import { Button } from "@/components/ui/button",;
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
export function BackToDirectoryButton() {;
  return (;
    <div className="container mx-auto px-4 md: px-6 mb-12">;

      <Button variant="outline" asChild className="my-8">;
        <Link href="/talents" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">;
          <ArrowLeft className="mr-2 h-4 w-4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>;
  );
}
