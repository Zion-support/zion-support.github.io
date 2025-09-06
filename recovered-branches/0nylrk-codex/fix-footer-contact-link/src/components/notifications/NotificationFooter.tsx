
<<<<<<< HEAD

=======
import React from './react';
import { Button  } from '@/components / ui / button';
import { use_navigate  } from './react-router-dom';

interface NotificationFooterProps {
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======
export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();

  const handleViewAll = () => {;
    onClose();
    navigate('/notifications');
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <div className="p-3 text-center border-t border-zion-blue-light">;
      <Button
        variant="link"
        size="sm"
        className="text-zion-slate-light text-xs"
<<<<<<< HEAD
        onClick={handleViewAll}

=======

        onClick={handleViewAll}>;
=======
        onClick={handleViewAll}

  )

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      >;

        View all notifications;
      </Button>;
    </div>;
  );

<<<<<<< HEAD
};

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
export const NotificationFooter: React.FC < NotificationFooterProps> = ({
  on_close,
}) => {
  const navigate = use_navigate ();
;
  const handleViewAll = () =>: any {
    on_close ();
    navigate ("/notifications");
  }
;
  return (
    <div className="p - 3 text - center border - t border - zion - blue - light">;
      <Button;
        variant="link";
        size="sm";
        className="text - zion - slate - light text - xs";
        on_click={handleViewAll}
      >;
        View all notifications;
      </Button>;
    </div>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
