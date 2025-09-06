<<<<<<< HEAD

import React from './react';
import { Button  } from '@/components / ui / button';
import { use_navigate  } from './react-router-dom';

interface NotificationFooterProps {
  on_close: () => void;
}

import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
>>>>>>> main
interface NotificationFooterProps {
  onClose: () => void;
}

<<<<<<< HEAD
export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();

=======
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;

interface NotificationFooterProps {;
  onClose: () => void;
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {
  const navigate = useNavigate(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
  const handleViewAll = () => {
    onClose(),
    navigate('/notifications')
  },
  
=======
export const NotificationFooter: React.FC<NotificationFooterProps> = ({
  onClose,
}) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    onClose();
    navigate("/notifications");
  };

>>>>>>> main
  return (
    <div className="p-3 text-center border-t border-zion-blue-light">;
      <Button
        variant="link"
        size="sm"
        className="text-zion-slate-light text-xs"

        onClick={handleViewAll}>;
=======
        onClick={handleViewAll}
<<<<<<< HEAD
      >
        View all notifications
      </Button>
    </div>
<<<<<<< HEAD
  )

=======
      >;

        View all notifications;
      </Button>;
    </div>;
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  );
>>>>>>> main
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
