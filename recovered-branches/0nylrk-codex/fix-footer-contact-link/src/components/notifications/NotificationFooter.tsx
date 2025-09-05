
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;
interface NotificationFooterProps {;
  onClose: () => void;
}
<<<<<<< HEAD

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {
  const navigate = useNavigate(),
  
  const handleViewAll = () => {
    onClose(),
    navigate('/notifications')
  },
  
  return (
    <div className=&quot;p-3 text-center border-t border-zion-blue-light&quot;>
      <Button
        variant=&quot;link&quot;
        size=&quot;sm&quot;
        className=&quot;text-zion-slate-light text-xs&quot;
=======
;
export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate(),;
  const handleViewAll = () => {;
    onClose(),;
    navigate('/notifications');
  };
  return (;
    <div className="p-3 text-center border-t border-zion-blue-light">;
      <Button;
        variant="link";
        size="sm";
        className="text-zion-slate-light text-xs";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        onClick={handleViewAll}
      >;
        View all notifications;
      </Button>;
    </div>;
  );
};