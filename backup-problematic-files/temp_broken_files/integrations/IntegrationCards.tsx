
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ArrowRight, Check, ExternalLink } from "lucide-react",;
;
interface IntegrationCardProps {;
  title:string,;
  description:string,;
  icon:React.ReactNode,;
  status?:"connected" | "disconnected" | "pending",;
  href?:string,;
  onConnect?:() => void;
}
;
export function IntegrationCard({;
  title,;
  description,;
  icon,;
  status = "disconnected",;
  href,;
  onConnect} IntegrationCardProps) {;
  return (;
    <Card className="overflow-hidden">;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div className="flex items-center gap-3">;
            <div className="h-9 w-9 flex items-center justify-center bg-muted rounded-md">;
              {icon}
            </div>;
            <div>;
              <h3 className="font-semibold">{title}</h3>;
            </div>;
          </div>;
          {status === "connected" ? (;
            <Badge variant="outline" className="bg-green-100 text-green-800 gap-1">;

            <Badge variant="outline">Not Connected</Badge>;
          )}
        </div>;
      </CardHeader>;
      <CardContent className="pb-4">;
        <p className="text-sm text-muted-foreground">{description}</p>;
      </CardContent>;
      <CardFooter className="pt-0">;
        {status === "connected" ? (;
          <Button variant="outline" className="w-full" asChild>;
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">;
              <span>Manage</span>;

          </Button>;
        )}
      </CardFooter>;
    </Card>;
