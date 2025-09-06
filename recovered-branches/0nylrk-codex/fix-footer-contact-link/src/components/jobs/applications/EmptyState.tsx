
import { Button  } from '@/components / ui / button';
import { Card, CardContent  } from '@/components / ui / card';
import { Link  } from './react-router-dom';
export /**
 * EmptyState - Function description
 */
function EmptyState() {
  return (
    <Card className="bg - muted / 30">;
      <CardContent className="pt - 6 text - center">;
        <h3 className="text - lg font - medium mb - 2">No Applications Yet</h3>;
        <p className="text - muted - foreground mb - 4">;
          You haven't submitted any applications yet. Browse available jobs to;
          get started!;
        </p>;
        <Button className="mt - 4" as_child>;
          <Link to="/jobs">Browse Jobs</Link>;
        </Button>;
      </CardContent>;
    </Card>);


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card",
import { Link } from "react-router-dom",
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function EmptyState() {
  return (
    <Card className="bg-muted/30">
      <CardContent className="pt-6 text-center">
        <h3 className="text-lg font-medium mb-2">No Applications Yet</h3>
        <p className="text-muted-foreground mb-4">
          You haven't submitted any applications yet. Browse available jobs to get started!
        </p>
        <Button className="mt-4" asChild>
          <Link to="/jobs">Browse Jobs</Link>
        </Button>
      </CardContent>
<<<<<<< HEAD
    </Card>
  );
}
    </Card>;
  );
}
    </Card>
  )
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Link } from "react-router-dom";
}

import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Link } from "react-router-dom",;
;
export function EmptyState() {;
  return (;
    <Card className="bg-muted/30">;
      <CardContent className="pt-6 text-center">;
        <h3 className="text-lg font-medium mb-2">No Applications Yet</h3>;
        <p className="text-muted-foreground mb-4">;
          You haven't submitted any applications yet. Browse available jobs to get started!;
        </p>;
        <Button className="mt-4" asChild>;
          <Link to="/jobs">Browse Jobs</Link>;
        </Button>;
      </CardContent>;
    </Card>;

  ),;
} export function EmptyState () {
  return (<Card className="bg-muted/30" > <CardContent className="pt-6 text-center" > <h3 className="text-lg font-medium mb-2" >No Applications Yet</h3> <p className="text-muted-foreground mb-4" > mt-4"asChild> <Link to=" /jobs" >Browse Jobs</Link> </Button> </CardContent> </Card> 
  );
}
;
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
