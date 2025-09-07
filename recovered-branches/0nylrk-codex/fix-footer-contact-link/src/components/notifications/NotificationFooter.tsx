<<<<<<< HEAD
import React from 'react';
import { Button  } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
interface NotificationFooterProps {
  onClose: () => void
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {
  const navigate = useNavigate($2);
  const handleViewAll = () => {
    onClose($2);
    navigate('/notifications')
  },
  
  const handleViewAll = () => {
    onClose(),
    navigate('/notifications')
  },
  
export const NotificationFooter: React.FC<NotificationFooterProps> = ({
  onClose,
}) => {
  const navigate = useNavigate();
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from './react';
import { Button  } from '@/components / ui / button';
import { use_navigate  } from './react-router-dom';

interface NotificationFooterProps {

  on_close: () => void;

}

<<<<<<< HEAD
import React from './react';
import { Button  } from '@/components / ui / button';
import { use_navigate  } from './react-router-dom';
interface NotificationFooterProps {
  on_close: () => void;
}
import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
<<<<<<< HEAD
=======
=======
import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface NotificationFooterProps {

  onClose: () => void;
}
>>>>>>> merged-prs-20250907-203621

  const handleViewAll = () => {
    onClose();
    navigate("/notifications");
<<<<<<< HEAD
  };

  return (
    <div className = $2;
=======
  }
  onClose: () => void
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();

<<<<<<< HEAD
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

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;

interface NotificationFooterProps {;
  onClose: () => void;
}
<<<<<<< HEAD
import React from 'react';
import { Button  } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
interface NotificationFooterProps {
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
  onClose: () => void
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();
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
export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();
=======

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleViewAll = () => {;
    onClose();
    navigate('/notifications');
  };
<<<<<<< HEAD
  return (
    <div className="p-3 text-center border-t border-zion-blue-light">;
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
interface NotificationFooterProps {
  onClose: () => void;
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({
  onClose,
}) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    onClose();
    navigate("/notifications");
  };

  
  return (
    <div className="p-3 text-center border-t border-zion-blue-light">
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="p-3 text-center border-t border-zion-blue-light">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        variant="link"
        size="sm"

        className="text-zion-slate-light text-xs"

        onClick={handleViewAll}>;
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  );

  );

<<<<<<< HEAD
};

};

=======

};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;
;
interface NotificationFooterProps {;
  onClose:() => void;
}
;
export const NotificationFooter:React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate(),;
  ;
  const handleViewAll = () => {;
    onClose(),;
    navigate('/notifications'),;
  },;
  ;
  return (;
    <div className="p-3 text-center border-t border-zion-blue-light">;
      <Button;
        variant="link";
        size="sm";
        className="text-zion-slate-light text-xs";
        onClick={handleViewAll}
      >;
        View all notifications;
      </Button>;
    </div>;
  ),;
},; return (<div className="p-3 text-center border-t border-zion-blue-light" > <Button > View all notifications </Button> </div>) 
};
        onClick={handleViewAll}
>
        View all notifications
      </Button>
    </div>

  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  );

};

<<<<<<< HEAD
};
=======
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
