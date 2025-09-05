
import React from "react";

interface MobileHeaderProps {_title: string;
  showBack?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;
  onSettingsClick?: () => void;}

export function MobileHeader(_{_title, _showBack = false, _showNotifications = false, _showSettings = false, _className, _onNotificationsClick, _onSettingsClick}: MobileHeaderProps) {_const _navigate = useNavigate();

  return (
    <header className={cn(
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border", _className
    )}>
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center">
          {_showBack && (_<Button 
              variant="ghost" 
              size="icon" 
              className="mr-2" 
              onClick={() => navigate(-1)}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          )}
          <h1 className="text-lg font-medium leading-none truncate">
            {_title}
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          {_showNotifications && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onNotificationsClick}
            >
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          )}
          {_showSettings && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onSettingsClick}
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
