
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Loader2 } from &quot;lucide-react&quot;;

export function LoadingState() {
  return (
    <div className=&quot;flex justify-center items-center p-8&quot;>
      <Loader2 className=&quot;h-8 w-8 animate-spin text-primary&quot; />
    </div>
  );
}
