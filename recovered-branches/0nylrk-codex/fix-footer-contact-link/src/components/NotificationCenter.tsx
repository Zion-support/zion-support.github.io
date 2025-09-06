 const [open, setOpen] = useState (false);
const [error, setError] = useState<string | null> (null);
//Refresh notifications when popover opens useEffect ( () => {
  if (open) {
  const loadNotifications = async () => {
  try {
  
}
};
}
}, [open, fetchNotifications]);
}
};
const handleFilterChange = (newFilter: FilterType) => {
  setFilter (newFilter as any) 
};
open 
}onOpenChange= {
  setOpen 
}> <PopoverTrigger asChild> {
  unreadCount > 9 ? '9+' : unreadCount 
}</span>) 
}</Button> </PopoverTrigger> <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col" > <NotificationHeader unreadCount= {
  unreadCount 
}onMarkAllAsRead= {
  handleMarkAllAsRead 
}/> <NotificationFilter filter= {
  filter as FilterType 
}onFilterChange= {
  handleFilterChange 
}/> <NotificationList loading= {
  loading 
}error= {
  error 
}notifications= {
  filteredNotifications 
}onMarkAsRead= {
  markAsRead 
}onDismiss= {
  dismissNotification 
}onRetry= {
  fetchNotifications 
}/> <NotificationFooter onClose= {
  () => setOpen (false) 
}/> </PopoverContent> </Popover>) 
};
