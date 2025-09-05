
import React from 'react';

interface NotificationFooterProps {_onClose: () => void;}

export const NotificationFooter: React.FC<NotificationFooterProps> = (_{_onClose}) => {_const _navigate = useNavigate();
  
  const _handleViewAll = () => {
    onClose();
    navigate('/notifications');};
  
  return (
    <div className="p-3 text-center border-t border-zion-blue-light">
      <Button
        variant="link"
        size="sm"
        className="text-zion-slate-light text-xs"
        onClick={_handleViewAll}
      >
        View all notifications
      </Button>
    </div>
  );
};
