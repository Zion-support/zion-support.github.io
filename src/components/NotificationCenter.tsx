    unreadCount, 
    markAsRead, 


  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  };

<<<<<<< HEAD
=======
  return (
    <Popover open={open} onOpenChange={(v) => setOpen(v ?? false)}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Open notifications">
          <Bell className="h-5 w-5 text-zion-slate-light" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">
        <NotificationHeader 
          unreadCount={unreadCount} 
          onMarkAllAsRead={handleMarkAllAsRead} 
        />
        
        <NotificationFilter 
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />
        
        <NotificationList 
          loading={loading}
          error={error}
          notifications={filteredNotifications}
          onMarkAsRead={markAsRead}
          onDismiss={dismissNotification}
          onRetry={fetchNotifications}
        />
        
        <NotificationFooter onClose={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  )
};
<<<<<<< HEAD

}, [open, loadedOnce, fetchNotifications]);
}catch (err) {;
  logErrorToProduction ('Failed to mark notifications as read:', {;
  data: err ;
});
enqueueSnackbar ( (err as any) ?.response?.data?.message || (err instanceof Error ? err.message : String (err) ), {';
  variant: 'error' ;
}) ;

};

  (v) => setOpen (v ?? false) ;
}> <PopoverTrigger asChild> {';
  unreadCount > 9 ? '9+' : unreadCount ;
}</span>) ;
}</Button> </PopoverTrigger> <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col" > <NotificationHeader unreadCount= {;
  unreadCount ;
}onMarkAllAsRead= {;
  handleMarkAllAsRead ;
}/> <NotificationFilter filter= {;
  filter as FilterType ;
}onFilterChange= {;
  handleFilterChange ;
}/> <NotificationList loading= {;
  loading ;
}error= {;
  error ;
}notifications= {;
  filteredNotifications ;
}onMarkAsRead= {;
  markAsRead ;
}onDismiss= {;
  dismissNotification ;
}onRetry= {;
  fetchNotifications ;
}/> <NotificationFooter onClose= {;
  () => setOpen (false) ;
}/> </PopoverContent> </Popover>) ;
};
'"
=======

<<<<<<< HEAD
    unreadCount, 
    markAsRead, 
<<<<<<< HEAD




>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
