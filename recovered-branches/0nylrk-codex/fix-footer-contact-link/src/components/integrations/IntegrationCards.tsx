
import React from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ArrowRight, Check, ExternalLink } from "lucide-react",

interface IntegrationCardProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  status?: "connected" | "disconnected" | "pending",
  href?: string,
  onConnect?: () => void
interface IntegrationCardProps {_title: string;
  description: string;
  icon: React.ReactNode;
  status?: &quot;connected&quot; | &quot;disconnected&quot; | &quot;pending&quot;;
  href?: string;
  onConnect?: () => void;
}

export function IntegrationCard({
  title,
  description,
  icon,
  status = &quot;disconnected&quot;,
  href,
  onConnect}: IntegrationCardProps) {
  return (
    <Card className=&quot;overflow-hidden&quot;>
      <CardHeader className=&quot;pb-2&quot;>
        <div className=&quot;flex justify-between items-start&quot;>
          <div className=&quot;flex items-center gap-3&quot;>
            <div className=&quot;h-9 w-9 flex items-center justify-center bg-muted rounded-md&quot;>
              {icon}
            </div>
            <div>
              <h3 className=&quot;font-semibold&quot;>{title}</h3>
            </div>
          </div>
          {status === &quot;connected&quot; ? (
            <Badge variant=&quot;outline&quot; className=&quot;bg-green-100 text-green-800 gap-1&quot;>
              <Check className=&quot;h-3.5 w-3.5&quot; />              <span>Connected</span>
            </Badge>
          ) : status === &quot;pending&quot; ? (
            <Badge variant=&quot;outline&quot; className=&quot;bg-yellow-100 text-yellow-800&quot;>Pending</Badge>
          ) : (
            <Badge variant=&quot;outline&quot;>Not Connected</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className=&quot;pb-4&quot;>
        <p className=&quot;text-sm text-muted-foreground&quot;>{description}</p>
      </CardContent>
      <CardFooter className=&quot;pt-0&quot;>
        {status === &quot;connected&quot; ? (
          <Button variant=&quot;outline&quot; className=&quot;w-full&quot; asChild>
            <a href={href} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;flex items-center gap-1&quot;>              <span>Manage</span>
              <ExternalLink className=&quot;h-3.5 w-3.5&quot; />
            </Link>
          </Button>
        ) : (
          <Button variant=&quot;default&quot; className=&quot;w-full&quot; onClick={onConnect}>            <span>Connect</span>
            <ArrowRight className=&quot;ml-1.5 h-3.5 w-3.5&quot; />
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export function IntegrationCards() {
  return (
    <div className=&quot;grid md:grid-cols-3 gap-6&quot;>      {/* Integration cards would go here */}
    </div>
  )
}
