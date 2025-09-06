
import React from 'react';
import { Button  } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
interface NotificationFooterProps {
<<<<<<< HEAD

  onClose: () => void;
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({
  onClose
}) => {
  const navigate = useNavigate();
  const handleViewAll = () => {
    onClose();
    navigate("/notifications");
  }


=======
  on_close: () => void;
}

import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
=======


  onClose: () => void
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;

interface NotificationFooterProps {;
  onClose: () => void;
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {
  const navigate = useNavigate(),
  
  const handleViewAll = () => {
    onClose(),
    navigate('/notifications')
  },
  
  return (
    <div className="p-3 text-center border-t border-zion-blue-light">;
      <Button
        variant="link"
        size="sm"
        className="text-zion-slate-light text-xs"
<<<<<<< HEAD

        onClick={handleViewAll}

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

        onClick={handleViewAll}>;

<<<<<<< HEAD
=======
  )

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      >;

        View all notifications;
      </Button>;
    </div>;
  );


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
};
