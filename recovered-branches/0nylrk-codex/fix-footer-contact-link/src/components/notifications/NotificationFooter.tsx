<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface NotificationFooterProps {
  onClose: () => void;
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({
  onClose,
}) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    onClose();
    navigate('/notifications');
  };

  return (
    <div className='p-3 text-center border-t border-zion-blue-light'>
      <Button
        variant='link'
        size='sm'
        className='text-zion-slate-light text-xs'
        onClick={handleViewAll}
      >
        View all notifications
      </Button>
    </div>
  );
=======
 return (<div className="p-3 text-center border-t border-zion-blue-light" > <Button > View all notifications </Button> </div>) 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};
