
import { Card, CardContent } from "@/components/ui/card";
import { Card, CardContent } from "@/components/ui/card";


=======


import { Card, CardContent } from "@/components/ui/card",

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
