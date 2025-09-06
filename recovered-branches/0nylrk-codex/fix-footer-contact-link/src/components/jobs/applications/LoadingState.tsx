<<<<<<< HEAD
=======
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
export function LoadingState() {
  return (
    <div className="flex justify-center items-center p-8">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}