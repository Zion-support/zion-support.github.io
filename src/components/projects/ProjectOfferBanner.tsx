
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from "react",
import { useRouter } from 'next/router',
import { Bell, Calendar, X } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
=======
import { useEffect, useState } from &quot;react&quot;;
import { useRouter } from 'next/router';
import { Bell, Calendar, X } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { useProjects } from &quot;@/hooks/useProjects&quot;;
import { Project } from &quot;@/types/projects&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function ProjectOfferBanner() {
  const router = useRouter(),
  const { projects, isLoading } = useProjects(),
  const [pendingOffers, setPendingOffers] = useState<Project[]>([]),
  const [dismissed, setDismissed] = useState<Set<string>>(new Set()),
  
  useEffect(() => {
    if (projects && !isLoading) {
      const offers = projects.filter(p => p.status === 'offer_sent'),
      setPendingOffers(offers)
    }
  }, [projects, isLoading]),
  
  const handleDismiss = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation(),
    setDismissed(prev => {
      const updated = new Set(prev),
      updated.add(projectId),
      return updated
    })
  },
  
  const handleViewOffer = (projectId: string) => {
    router.push(`/project/${projectId}`)
  },
  
  if (isLoading || pendingOffers.length === 0 || pendingOffers.every(p => dismissed.has(p.id))) {
    return null
  }
  
  return (
    <div className=&quot;mb-6 space-y-3&quot;>
      {pendingOffers
=======

export function ProjectOfferBanner() {_const _router = useRouter();
  const { projects, _isLoading} = useProjects();
  const [pendingOffers, setPendingOffers] = useState<Project[]>([]);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());
  
  useEffect__(() => {_if (projects && !isLoading) {
      const _offers = projects.filter(p => p.status === 'offer_sent');
      setPendingOffers(offers);}
  }, [projects, isLoading]);
  
  const _handleDismiss = (_projectId: string, _e: React.MouseEvent) => {_e.stopPropagation();
    setDismissed(prev => {
      const _updated = new Set(prev);
      updated.add(projectId);
      return updated;});
  };
  
  const _handleViewOffer = (_projectId: string) => {_router.push(`/project/${projectId}`);
  };
  
  if (isLoading || pendingOffers.length === 0 || pendingOffers.every(p => dismissed.has(p.id))) {_return null;}
  
  return (
    <div className="mb-6 space-y-3">
      {_pendingOffers
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        .filter(offer => !dismissed.has(offer.id))
        .map(_offer => (
          <Card 
            key={offer.id} 
<<<<<<< HEAD
            className=&quot;border-2 border-primary bg-primary/5&quot;
            onClick={() => handleViewOffer(offer.id)}
=======
            className="border-2 border-primary bg-primary/5"
            onClick={_() => handleViewOffer(offer.id)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <CardContent className=&quot;p-4 flex items-center justify-between&quot;>
              <div className=&quot;flex items-center gap-2&quot;>
                <div className=&quot;bg-primary/10 rounded-full p-2&quot;>
                  <Bell className=&quot;h-4 w-4 text-primary&quot; />
                </div>
                <div>
<<<<<<< HEAD
                  <h4 className=&quot;font-semibold&quot;>🎉 New Project Offer!</h4>
                  <p className=&quot;text-sm text-muted-foreground&quot;>
                    You've been selected for &quot;{offer.job?.title}&quot;. Review and accept to get started.
=======
                  <h4 className="font-semibold">🎉 New Project Offer!</h4>
                  <p className="text-sm text-muted-foreground">
                    You've been selected for "{_offer.job?.title}". Review and accept to get started.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </p>
                </div>
              </div>
              
              <div className=&quot;flex items-center gap-2&quot;>
                <Button size=&quot;sm&quot; className=&quot;whitespace-nowrap&quot;>
                  View Offer
                </Button>
                <Button 
<<<<<<< HEAD
                  size=&quot;sm&quot; 
                  variant=&quot;ghost&quot;
                  onClick={(e) => handleDismiss(offer.id, e)}
=======
                  size="sm" 
                  variant="ghost"
                  onClick={_(_e) => handleDismiss(offer.id, _e)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <X className=&quot;h-4 w-4&quot; />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  )
}
