=======
title: string;  showBack?: boolean;  title: string
  showBack?: boolean
  showNotifications?: boolean
  showSettings?: boolean
  className?: string
  onNotificationsClick?: () => void
interface MobileHeaderProps {
  title: string,
  showBack?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


  onSettingsClick?: () => void
export function MobileHeader({
  title
export function MobileHeader({
  title
  showBack = false
  showNotifications = false
  showSettings = false
  className
  onNotificationsClick
  onSettingsClick}: MobileHeaderProps) {
  const router = useRouter()
  return (
    <header className={cn(
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border"

  title,
  showBack = false,
  showNotifications = false,
  showSettings = false,
  className,
  onNotificationsClick,
  onSettingsClick}: MobileHeaderProps) {
  const router = useRouter(),

  return (
    <header className={cn(
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border",

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      className
    )}>
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center">
          {showBack && (

            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
interface MobileHeaderProps {;
  title: string;  showBack?: boolean;  title: string,;
            >
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          )}
          {showSettings && (
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

              variant="ghost"

              variant="ghost" 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              size="icon"
              onClick={onSettingsClick}
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
<<<<<<< HEAD
;
}
}
}
<<<<<<< HEAD
