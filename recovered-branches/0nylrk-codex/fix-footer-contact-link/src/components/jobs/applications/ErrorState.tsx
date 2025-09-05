
<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card",
=======
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface ErrorStateProps {
  error: string
}

export function ErrorState({ error }: ErrorStateProps) {
  return (
    <Card className=&quot;border-red-200&quot;>
      <CardContent className=&quot;p-6 text-center&quot;>
        <h3 className=&quot;text-lg font-medium text-red-600 mb-1&quot;>Something went wrong</h3>
        <p className=&quot;text-muted-foreground&quot;>{error}</p>
=======

interface ErrorStateProps {_error: string;}

export function ErrorState(_{_error}: ErrorStateProps) {_return (
    <Card className="border-red-200">
      <CardContent className="p-6 text-center">
        <h3 className="text-lg font-medium text-red-600 mb-1">Something went wrong</h3>
        <p className="text-muted-foreground">{error}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </CardContent>
    </Card>
  )
}
