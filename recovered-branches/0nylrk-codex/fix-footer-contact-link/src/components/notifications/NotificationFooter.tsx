<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFooter.tsx

=======
import React from './react';
import { Button  } from '@/components / ui / button';
import { use_navigate  } from './react-router-dom';

interface NotificationFooterProps {
  on_close: () => void;
}

========
import React from './react';
import { Button  } from '@/components / ui / button';
import { use_navigate  } from './react-router-dom';
interface NotificationFooterProps {
  on_close: () => void;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFooter.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFooter.tsx

<<<<<<< HEAD
export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {
  const navigate = useNavigate(),

=======
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
  
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleViewAll = () => {
    onClose(),
    navigate('/notifications')
  },

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFooter.tsx
export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();
  const handleViewAll = () => {;
    onClose();
    navigate('/notifications');
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFooter.tsx

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFooter.tsx
  return (
    <div className="p-3 text-center border-t border-zion-blue-light">;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Button
        variant="link"
        size="sm"
        className="text-zion-slate-light text-xs"
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFooter.tsx
<<<<<<< HEAD
        onClick={handleViewAll}

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFooter.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFooter.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFooter.tsx
=======
        onClick={handleViewAll}
>
        View all notifications
      </Button>
    </div>

  );
}

  );

};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
