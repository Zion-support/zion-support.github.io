<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  onClose: () => void
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();

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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  onClose: () => void
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();
<<<<<<< HEAD
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;
=======

=======
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface NotificationFooterProps {;
  onClose: () => void;
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {
  const navigate = useNavigate(),
  
  const handleViewAll = () => {
    onClose(),
    navigate('/notifications')
  },
<<<<<<< HEAD
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
=======
  
  return (
    <div className="p-3 text-center border-t border-zion-blue-light">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Button
        variant="link"
        size="sm"
        className="text-zion-slate-light text-xs"
<<<<<<< HEAD

        onClick={handleViewAll}>;
        onClick={handleViewAll}

  )

=======
        onClick={handleViewAll}

        onClick={handleViewAll}>;
=======
        onClick={handleViewAll}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      >
        View all notifications
      </Button>
    </div>
  );
}

  )
<<<<<<< HEAD
      >;

        View all notifications;
      </Button>;
    </div>;
  );



};
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

  );

};

};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
      >;

        View all notifications;
      </Button>;
    </div>;
  );




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
