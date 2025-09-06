
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
<<<<<<< HEAD
  const navigate = useNavigate();
  const handleViewAll = () => {
=======
  const navigate = useNavigate();
  const handleViewAll = () => {
    onClose();
    navigate("/notifications");
  }
=======


  onClose: () => void
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;

interface NotificationFooterProps {;
  onClose: () => void;
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();

  const handleViewAll = () => {;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    onClose();
    navigate("/notifications");
  }
  return (
    <div className="p-3 text-center border-t border-zion-blue-light">;
      <Button
        variant="link"
        size="sm"
        className="text-zion-slate-light text-xs"
<<<<<<< HEAD
        onClick={handleViewAll}
      >
        View all notifications
      </Button>
    </div>
  );
}

=======
        onClick={handleViewAll}
<<<<<<< HEAD
      >
        View all notifications
      </Button>
    </div>
<<<<<<< HEAD
  );
}

        onClick={handleViewAll}>;
=======
        onClick={handleViewAll}

  )
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      >;

        View all notifications;
      </Button>;
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
