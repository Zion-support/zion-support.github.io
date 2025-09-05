
<<<<<<< HEAD
import React from 'react',
import { Button } from '@/components/ui/button',
import { useNavigate } from 'react-router-dom',
interface NotificationFooterProps {
  onClose: () => void
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {
  const navigate = useNavigate(),
  
  const handleViewAll = () => {
    onClose(),
    navigate('/notifications')
  },
=======
import React from 'react';

interface NotificationFooterProps {_onClose: () => void;}

export const NotificationFooter: React.FC<NotificationFooterProps> = (_{_onClose}) => {_const _navigate = useNavigate();
  
  const _handleViewAll = () => {
    onClose();
    navigate('/notifications');};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <div className=&quot;p-3 text-center border-t border-zion-blue-light&quot;>
      <Button
<<<<<<< HEAD
        variant=&quot;link&quot;
        size=&quot;sm&quot;
        className=&quot;text-zion-slate-light text-xs&quot;
        onClick={handleViewAll}
=======
        variant="link"
        size="sm"
        className="text-zion-slate-light text-xs"
        onClick={_handleViewAll}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        View all notifications
      </Button>
    </div>
  )
},
