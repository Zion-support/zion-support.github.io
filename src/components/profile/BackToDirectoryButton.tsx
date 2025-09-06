
import React from 'react',
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
=======
import { Button } from "@/components/ui/button",
import Link from "next/link",
import { ArrowLeft } from 'lucide-react'

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export function BackToDirectoryButton() {
  return (
    <div className="container mx-auto px-4 md: px-6 mb-12">
      <Button variant="outline" asChild className="my-8">
        <Link href="/talents" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" />
<<<<<<< HEAD
=======
          Back to Talent Directory
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        </Link>
      </Button>
    </div>
  )
<<<<<<< HEAD
}
  )
}
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
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
