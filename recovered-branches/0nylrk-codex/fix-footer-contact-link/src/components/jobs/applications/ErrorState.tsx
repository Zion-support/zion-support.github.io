
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card",;
;
interface ErrorStateProps {;
  error:string;
}
;
export function ErrorState({ error } ErrorStateProps) {;
  return (;
    <Card className="border-red-200">;
      <CardContent className="p-6 text-center">;
        <h3 className="text-lg font-medium text-red-600 mb-1">Something went wrong</h3>;
        <p className="text-muted-foreground">{error}</p>;
      </CardContent>;
    </Card>;
  ),;
=======
import { Card, CardContent } from "@/components/ui/card",
interface ErrorStateProps {
  error: string
}

export function ErrorState({ error }: ErrorStateProps) {
  return (
    <Card className=&quot;border-red-200&quot;>
      <CardContent className=&quot;p-6 text-center&quot;>
        <h3 className=&quot;text-lg font-medium text-red-600 mb-1&quot;>Something went wrong</h3>
        <p className=&quot;text-muted-foreground&quot;>{error}</p>

interface ErrorStateProps {_error: string;}

export function ErrorState(_{_error}: ErrorStateProps) {_return (
    <Card className="border-red-200">
      <CardContent className="p-6 text-center">
        <h3 className="text-lg font-medium text-red-600 mb-1">Something went wrong</h3>
        <p className="text-muted-foreground">{error}</p>
      </CardContent>
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
