
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
  return (
    <div className=&quot;p-3 text-center border-t border-zion-blue-light&quot;>
      <Button
        variant=&quot;link&quot;
        size=&quot;sm&quot;
        className=&quot;text-zion-slate-light text-xs&quot;
        onClick={handleViewAll}      >
        View all notifications
      </Button>
    </div>
  )
},
