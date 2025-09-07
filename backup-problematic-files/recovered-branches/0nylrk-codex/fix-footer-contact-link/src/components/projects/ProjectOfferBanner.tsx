

import { useEffect, useState } from "react",;""
import { useNavigate } from "react-router-dom",;""
import { Bell, Calendar, X } from "lucide-react",;""
import { Button } from "@/components/ui/button",;""
import { Card, CardContent } from "@/components/ui/card",;""
import { useProjects } from "@/hooks/useProjects",;""
import { Project } from "@/types/projects",;"

;
export function ProjectOfferBanner() {;}
  const navigate = useNavigate(),;}
  const { projects, isLoading } = useProjects(),;

  const [pendingOffers, setPendingOffers] = useState<Project[]>([]),;
</Project>
  const [dismissed, setDismissed] = useState<Set<string>>(new Set()),;
</Set>"
    <div className="mb-6 space-y-3">;"
</div>
          <Card ;
            key={offer.id} ;"
            className="border-2 border-primary bg-primary/5";"
            onClick={() => handleViewOffer(offer.id)}
</Card>"
            <CardContent className="p-4 flex items-center justify-between">;"
</CardContent>"
              <div className="flex items-center gap-2">;"
</div>"
                <div className="bg-primary/10 rounded-full p-2">;"
</div>"
                  <Bell className="h-4 w-4 text-primary" />;"
</Bell>
                </div>;
                <div>;
</div>"
                  <h4 className="font-semibold"> New Project Offer!</h4>;""
                  <p className="text-sm text-muted-foreground">;"
</p>
                  </p>;
                </div>;
              </div>;"
              <div className="flex items-center gap-2">;"
</div>"
                <Button size="sm" className="whitespace-nowrap">;"
</Button>
                </Button>;
                <Button ;"
                  size="sm" ;""
                  variant="ghost";"
                  onClick={(e) => handleDismiss(offer.id, e)}
</Button>"
                  <X className="h-4 w-4" />;"
</X>

                </Button>;
              </div>;
            </CardContent>;
          </Card>;
    </div>;

const [pendingOffers, setPendingOffers] = useState<Project[]> ([]);
</Project>
const [dismissed, setDismissed] = useState<Set<string>> (new Set () );
</Set>"
}return (<div className="mb-6 space-y-3" > {"
</div>)"
}> <CardContent className="p-4 flex items-center justify-between" > <div className="flex items-center gap-2" > <div className="bg-primary/10 rounded-full p-2" > <Bell className="h-4 w-4 text-primary" /> </div> <div> </p> </div> </div> <div className="flex items-center gap-2" > <Button size="sm" className="whitespace-nowrap" > View Offer </Button> <Button > <X className="h-4 w-4" /> </Button> </div> </CardContent> </Card>) )"
}</div>) "

