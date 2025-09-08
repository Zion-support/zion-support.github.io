
import React from "react";
import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
import React from "react",
import { Card } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
interface Conversation {

  id: string
  name: string  avatar?: string;
  lastMessage: string,;
  timestamp: string,;
  unreadCount: number,;
  isTyping?: boolean;
}

interface MobileConversationListProps {;
  conversations: Conversation[],;

  activeConversation?: string;    <div className="space-y-4">;
      <div className="px-4 mb-2">;
        <div className="relative">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />;
          <Input
            placeholder="Search messages..."
            className="pl-9"
          />;
        </div>;
      </div>;
      <div className="px-4 pb-4 space-y-2">;
        <div className="flex space-x-2">;
          <Badge variant="secondary" className="rounded-full px-3">All</Badge>;
          <Badge variant="outline" className="rounded-full px-3">Unread</Badge>;
          <Badge variant="outline" className="rounded-full px-3">Interviews</Badge>;
          <Badge variant="outline" className="rounded-full px-3">Projects</Badge>;
        </div>;
      </div>;
                    </Badge>;

                  )}
                </div>;
              </div>;
            </div>;"
            <div className="border-t border-border ml-12"></div>;
          </div>;
        ))}

      </div>;
    </div>;
  );
}
