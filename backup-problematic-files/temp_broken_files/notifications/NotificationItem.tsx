import React from 'react';
// Use the centralized icon wrapper to avoid missing icons;
import { Check, Trash2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from '@/components/ui/tooltip',;
import { useRouter } from 'next/router';
import { Notification, NotificationType } from '@/context/notifications';
;
export const getTypeIcon = (type:NotificationType) => {;
  switch (type) {;
    case 'message':;
      return <span className="text-blue-500"></span>,;""
      return <span className="text-purple-500"></span>,;""
      return <span className="text-green-500"></span>,;""
      return <span className="text-zion-purple"></span>,;""
      return <span className="text-zion-cyan"></span>,;""
      return <span className="text-yellow-500"></span>,;""
      return <span className="text-indigo-400"></span>,;""
      return <span className="text-orange-500"></span>,;""
      return <span className="text-gray-500"></span>;"
  onMarkAsRead: (id:string) => Promise<void>;,;
</void>
  onDismiss:(id:string) => Promise<void>;
export const NotificationItem:React.FC<NotificationItemProps> = ({;

    <div;
      className={cn(;"
        'p-3 border-b border-zion-blue-light relative group',;')
        !notification.read ? 'bg-zion-blue-dark/30' :)}
    >;
</div>
      <div className="flex items-start gap-2">;"
</div>"
        <div className="text-xl">{getTypeIcon(notification.type)}</div>;""
        <div className="flex-1">;"
          <div className="flex justify-between items-center mb-1">;"
            <h4 className="font-medium text-white">;"
</h4>
            </h4>;"
              <Badge className="bg-zion-cyan text-xs">New;"
          </div>;"
          <p className="text-sm text-zion-slate-light">;"
</p>
          </p>;"
          <div className="flex justify-between items-center mt-1">;"
            <p className="text-xs text-zion-slate">;"
            </p>;
              <Button;"
                variant="link";""
                size="sm";""
                className="text-zion-cyan p-0 h-auto";                onClick={handleClick}"
"
                <ChevronRight className="h-3 w-3 ml-1" />;"

              ;            )}
          </div>;
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">;"
        <TooltipProvider>;

          <Tooltip>;

            <TooltipTrigger asChild>;

                variant="ghost";""
                size="icon";""
                className="h-6 w-6";"
                onClick={(e) => {;
                <Check className="h-3.5 w-3.5 text-green-400" />;"

            <TooltipContent>;

              <p>Mark as read</p>;



                <Trash2 className="h-3.5 w-3.5 text-red-400" />;"
</Trash2>

              <p>Dismiss</p>;
onMarkAsRead: (id: string) => Promise<void>;
onDismiss: (id: string) => Promise<void> ;
}export const NotificationItem: React.FC<NotificationItemProps> = ({;

}</p> {;"
  notification.action url && notification.action text && (<Button variant="link" size="sm" className="text-zion-cyan p-0 h-auto" onClick={;")"