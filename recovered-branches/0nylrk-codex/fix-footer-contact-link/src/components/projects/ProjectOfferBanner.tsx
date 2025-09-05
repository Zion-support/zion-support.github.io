
<<<<<<< HEAD
import { useEffect, useState } from "react",
import { useNavigate } from "react-router-dom",
import { Bell, Calendar, X } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
=======
import { useEffect, useState } from &quot;react&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { Bell, Calendar, X } from &quot;lucide-react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { useProjects } from &quot;@/hooks/useProjects&quot;;
import { Project } from &quot;@/types/projects&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function ProjectOfferBanner() {
  const navigate = useNavigate(),
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
    navigate(`/project/${projectId}`)
  },
  
  if (isLoading || pendingOffers.length === 0 || pendingOffers.every(p => dismissed.has(p.id))) {
    return null
  }
  
  return (
    <div className=&quot;mb-6 space-y-3&quot;>
      {pendingOffers
        .filter(offer => !dismissed.has(offer.id))
        .map(offer => (
          <Card 
            key={offer.id} 
            className=&quot;border-2 border-primary bg-primary/5&quot;
            onClick={() => handleViewOffer(offer.id)}
          >
            <CardContent className=&quot;p-4 flex items-center justify-between&quot;>
              <div className=&quot;flex items-center gap-2&quot;>
                <div className=&quot;bg-primary/10 rounded-full p-2&quot;>
                  <Bell className=&quot;h-4 w-4 text-primary&quot; />
                </div>
                <div>
                  <h4 className=&quot;font-semibold&quot;>🎉 New Project Offer!</h4>
                  <p className=&quot;text-sm text-muted-foreground&quot;>
                    You've been selected for &quot;{offer.job?.title}&quot;. Review and accept to get started.
                  </p>
                </div>
              </div>
              
              <div className=&quot;flex items-center gap-2&quot;>
                <Button size=&quot;sm&quot; className=&quot;whitespace-nowrap&quot;>
                  View Offer
                </Button>
                <Button 
                  size=&quot;sm&quot; 
                  variant=&quot;ghost&quot;
                  onClick={(e) => handleDismiss(offer.id, e)}
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
