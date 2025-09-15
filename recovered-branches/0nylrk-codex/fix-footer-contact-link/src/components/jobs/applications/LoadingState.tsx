
<<<<<<< HEAD
import { CardContent } from "@/components/ui/card";
=======
import { Card, CardContent } from "@/components/ui/card";
>>>>>>> origin/auto/autonomy-17186719616
import { Loader2 } from "lucide-react";

export function LoadingState() {
  return (
    <div className="flex justify-center items-center p-8">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}
