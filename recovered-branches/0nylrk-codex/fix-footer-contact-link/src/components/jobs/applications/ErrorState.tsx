
import { Card, CardContent } from &quot;@/components/ui/card&quot;;

interface ErrorStateProps {
  error: string;
}

export function ErrorState({ error }: ErrorStateProps) {
  return (
    <Card className=&quot;border-red-200&quot;>
      <CardContent className=&quot;p-6 text-center&quot;>
        <h3 className=&quot;text-lg font-medium text-red-600 mb-1&quot;>Something went wrong</h3>
        <p className=&quot;text-muted-foreground&quot;>{error}</p>
      </CardContent>
    </Card>
  );
}
