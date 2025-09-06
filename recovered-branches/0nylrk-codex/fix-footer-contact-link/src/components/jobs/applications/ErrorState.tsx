

=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface ErrorStateProps {
  error: string;
}
export function ErrorState({ error }: ErrorStateProps) {

interface ErrorStateProps {;
  error: string;
}

export function ErrorState(): any ({ error }: ErrorStateProps) {;

  return (
    <Card className="border-red-200">;
      <CardContent className="p-6 text-center">;
        <h3 className="text-lg font-medium text-red-600 mb-1">;
          Something went wrong;
        </h3>;
        <p className="text-muted-foreground">{error}</p>;
      </CardContent>;
    </Card>;
  );
}
=======
  return (
    <Card className="border-red-200">
      <CardContent className="p-6 text-center">
        <h3 className="text-lg font-medium text-red-600 mb-1">Something went wrong</h3>
        <p className="text-muted-foreground">{error}</p>
      </CardContent>

  )
import { Card, CardContent } from "@/components/ui/card";
interface ErrorStateProps {;
  error: string;
}
;
export function ErrorState({ error }: ErrorStateProps) {;
  return (;
    <Card className="border-red-200">;
      <CardContent className="p-6 text-center">;
        <h3 className="text-lg font-medium text-red-600 mb-1">Something went wrong</h3>;
        <p className="text-muted-foreground">{error}</p>;
      </CardContent>;

    </Card>;
  );
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
