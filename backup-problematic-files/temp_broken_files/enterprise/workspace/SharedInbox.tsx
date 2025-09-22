
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
;
export function SharedInbox() {;
  // Mock messages;
  const messages = [;
    {;

    <Card>;
      <CardHeader>;
        <div className="flex items-center justify-between">;
          <div>;
            <CardTitle>Shared Inbox</CardTitle>;
            <CardDescription>Team messages and notifications</CardDescription>;
          </div>;

        </div>;
      </CardHeader>;
      <CardContent className="p-0">;
        <div className="divide-y divide-border">;

          <div className="p-4 text-center text-muted-foreground">;
            No new messages;
          </div>;
        )}

            View All Messages;
          </button>;
        </div>;
      </CardContent>;
