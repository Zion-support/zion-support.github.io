

import { useEffect, useState } from "react",
import { useNavigate } from "react-router-dom",
import { Bell, Calendar, X } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",

  useEffect(() => {
    if (projects && !isLoading) {
      const offers = projects.filter(p => p.status === 'offer_sent');
      setPendingOffers(offers)

  }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
    <div className="mb-6 space-y-3">
      {pendingOffers
        .filter(offer => !dismissed.has(offer.id))
        .map(offer => (
          <Card
            key={offer.id}
            className="border-2 border-primary bg-primary/5"
            onClick={() => handleViewOffer(offer.id)}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 rounded-full p-2">
                  <Bell className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">🎉 New Project Offer!</h4>
                  <p className="text-sm text-muted-foreground">
                    You've been selected for "{offer.job?.title}". Review and accept to get started.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" className="whitespace-nowrap">
                  View Offer
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => handleDismiss(offer.id, e)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
                  variant="ghost"
                  onClick={(e) => handleDismiss(offer && offer.id, e)}
                >;
                  <X className="h-4 w-4" />;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        ))}

    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import { useEffect, useState } from './react';
import { use_navigate } from './react-router-dom';
import { Bell, Calendar, X } from './lucide-react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { use_projects } from '@/hooks / use_projects';
import { Project } from '@/types / projects';
export /**
 * ProjectOfferBanner - Function description
 */
function ProjectOfferBanner() {
  const navigate = use_navigate ();
  const { projects, is_loading } = use_projects ();
  const [pending_offers, setPendingOffers] = useState < Project[]>([]);
  const [dismissed, set_dismissed] = useState < Set < string>>(new Set ());
;



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
