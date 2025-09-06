



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4






interface ErrorStateProps {
  error: string;
}
export function ErrorState({ error }: ErrorStateProps) {

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


    </Card>


    </Card>;
  );
}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


