
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from './react';
import { Button  } from '@/components / ui / button';
import { use_navigate  } from './react-router-dom';

interface NotificationFooterProps {

  on_close: () => void;

}

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
>>>>>>> origin/cursor/delete-old-data-records-6bba


interface NotificationFooterProps {

  onClose: () => void;
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
        onClick={handleViewAll}

  )

      >
        View all notifications
      </Button>
    </div>
  );
}

  )
      >;

        View all notifications;
      </Button>;
    </div>;

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  );

  );


<<<<<<< HEAD

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
