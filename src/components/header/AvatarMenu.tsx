
export interface AvatarMenuProps {
  avatarUrl?: string;
  onLogout?: () => void}

export function AvatarMenu({ avatarUrl, onLogout }: AvatarMenuProps) {

  const initials = (user.displayName || 'U').charAt(0);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-8 w-8 cursor-pointer">
          {avatarUrl ? (
            <AvatarImage src={avatarUrl} alt={user.displayName || 'User'} />
          ) : (
            <AvatarFallback>{initials}</AvatarFallback>
          )}
        </>
      )}
    </Popover>
  )}
