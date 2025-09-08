





import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react',







    filteredNotifications,






  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
    markAllAsRead,;
    dismissNotification, ;
    loading,;





      },;


  const handleMarkAllAsRead = async () => {
    try {
      };

      loadNotifications();
    }

      };
      loadNotifications();
    }







      await markAllAsRead();


  return (
    <Popover open={open} onOpenChange={setOpen}>;
      <PopoverTrigger asChild>;
        <Button variant="ghost" size="icon" className="relative">;
          <Bell className="h-5 w-5 text-zion-slate-light" />;
          {unreadCount > 0 && (;

            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">;


        </Button>;
      </PopoverTrigger>;
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">;
        <NotificationHeader


        
        <NotificationFilter 
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />

        <NotificationList 





        />;













