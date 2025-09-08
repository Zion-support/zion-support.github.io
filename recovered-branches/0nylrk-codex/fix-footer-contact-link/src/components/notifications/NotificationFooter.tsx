import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
interface NotificationFooterProps {
  onClose: () => void;
}
<<<<<<< HEAD

export const NotificationFooter: React.FC<NotificationFooterProps> = ({
  onClose,
}) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    onClose();
    navigate("/notifications");
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  onClose: () => void
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();

<<<<<<< HEAD

      <Button
=======

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {
  const navigate = useNavigate(),

  const handleViewAll = () => {}
    onClose(),
    navigate('/notifications')
  },
  
export const NotificationFooter: React.FC<NotificationFooterProps> = ({}
  onClose,
}) => {};
  const navigate = useNavigate();

  return ("
    <div className="p-3 text-center border-t border-zion-blue-light">

>>>>>>> origin/cursor/delete-old-data-records-6bba

        variant="link"
        size="sm"

        className="text-zion-slate-light text-xs"

        onClick={handleViewAll}>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
        onClick={handleViewAll}
      >
        View all notifications
      </Button>
    </div>
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  );
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
};

=======
};

};


>>>>>>> origin/cursor/delete-old-data-records-6bba
export const NotificationFooter: React.FC < NotificationFooterProps> = ({

  on_close,
}) => {};
  const navigate = use_navigate ();
;
  const handleViewAll = () =>: any {}
    on_close ();"
    navigate ("/notifications");
  }
;

        on_click={handleViewAll}
      >;
        View all notifications;
      </Button>;
    </div>);
}
;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
};


};
>>>>>>> origin/cursor/delete-old-data-records-6bba
