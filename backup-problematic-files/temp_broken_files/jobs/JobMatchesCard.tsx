
import { useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { DollarSign, Calendar, CheckCircle, XCircle } from "lucide-react",;
import { format } from "date-fns",;
import { JobMatch } from "@/types/jobs",;
;
interface JobMatchCardProps {;
  match:JobMatch,;
  onApply:(matchId:string, jobId:string) => void,;
  onDecline:(matchId:string) => void,;
  showApplied?:boolean;
}
;
export function JobMatchesCard({ match, onApply, onDecline, showApplied = false } JobMatchCardProps) {;
  const job = match.job,;
  ;
  if (!job) return null,;
  ;
  return (;
    <Card className="overflow-hidden border-l-4 border-l-blue-500">;
      <CardHeader className="p-4 pb-2">;
        <div className="flex justify-between items-start">;
          <div>;

                </span>;
              )}
            </CardDescription>;
          </div>;
          <Badge variant="outline" className="flex items-center">;

          </Badge>;
        </div>;
      </CardHeader>;
      <CardContent className="p-4 pt-0">;
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">;

          </div>;
        </div>;
      </CardContent>;
      <CardFooter className="p-4 pt-0">;

          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">;
            <CheckCircle className="h-4 w-4 mr-2" />;
            Applied;
          </div>;

          <div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md">;
            <XCircle className="h-4 w-4 mr-2" />;
            Declined;
          </div>;

            >;
              Decline;
            </Button>;
          </div>;
        )}
      </CardFooter>;
    </Card>;
