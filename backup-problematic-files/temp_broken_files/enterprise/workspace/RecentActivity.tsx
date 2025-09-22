
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
;
export function RecentActivity() {;
  // Mock activity data;
  const activities = [;
    {;

      case "comment":;
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment</Badge>,;
      default:;
        return <Badge variant="outline">Activity</Badge>;
    }

    <Card>;
      <CardHeader>;
        <CardTitle>Recent Activity</CardTitle>;
        <CardDescription>Latest actions from your team</CardDescription>;
      </CardHeader>;
      <CardContent className="p-0">;
        <div className="divide-y divide-border">;

              </div>;
              <div className="flex-1">;
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">;
                  <p className="text-sm">;

                  </div>;
                </div>;
              </div>;
            </div>;
          ))}
        </div>;

            View All Activity;
          </button>;
        </div>;
      </CardContent>;

}