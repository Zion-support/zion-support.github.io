import React from "react";""
import { Button } from "@/components/ui/button";"
interface NotificationHeaderProps {
  // TODO: Implement
}
  unreadCount: number;,
  onMarkAllAsRead: () => Promise<void>;
</void>
export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
"
    <div className="flex justify-between items-center p-4 border-b border-zion-blue-light">"
</div>"
      <h3 className="font-medium text-white">Notifications</h3>"
        <Button;"
          variant="ghost"""
          size="sm""
          onClick={onMarkAllAsRead}"
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark">;"

        ;
    </div>)
  onMarkAllAsRead: () => Promise < void>;
export const NotificationHeader: React.FC < NotificationHeaderProps> = ({
  unread_count,
  onMarkAllAsRead,)
}) => {
  return ("
    <div className="flex justify - between items - center p - 4 border - b border - zion - blue - light">;"
      <h3 className="font - medium text - white">Notifications</h3>;"
          variant="ghost";""
          size="sm";"
          on_click={onMarkAllAsRead}"
          className="text - xs text - zion - cyan hover:text - white hover:bg - zion - blue - dark";"
        >;
)
        )}
    </div>);