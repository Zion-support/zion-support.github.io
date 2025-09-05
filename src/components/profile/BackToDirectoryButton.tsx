
import React from 'react';
import { Button } from &quot;@/components/ui/button&quot;;
import Link from &quot;next/link&quot;;
import { ArrowLeft } from 'lucide-react'

export function BackToDirectoryButton() {
  return (
    <div className=&quot;container mx-auto px-4 md:px-6 mb-12&quot;>
      <Button variant=&quot;outline&quot; asChild className=&quot;my-8&quot;>
        <Link href=&quot;/talents&quot; className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;>
          <ArrowLeft className=&quot;mr-2 h-4 w-4&quot; />
          Back to Talent Directory
        </Link>
      </Button>
    </div>
  );
}
