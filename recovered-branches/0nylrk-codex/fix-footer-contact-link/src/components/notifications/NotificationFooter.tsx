<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
import { Button  } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

import React from './react';
import { Button  } from '@/components / ui / button';
import { use_navigate  } from './react-router-dom';

interface NotificationFooterProps {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  on_close: () => void;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface NotificationFooterProps {
=======
import React from "react";"
import { Button } from "@/components/ui/button";"
import { useNavigate } from "react-router-dom";
interface NotificationFooterProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  onClose: () => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
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
export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;

interface NotificationFooterProps {;
  onClose: () => void;
}
export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();

  const handleViewAll = () => {;
    onClose();
    navigate("/notifications");
  };

  return (
    <div className="p-3 text-center border-t border-zion-blue-light">;
=======

=======
interface NotificationFooterProps {
  onClose: () => void;
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {
  const navigate = useNavigate(),
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  const handleViewAll = () => {}
    onClose(),
    navigate('/notifications')
  },

export const NotificationFooter: React.FC<NotificationFooterProps> = ({}
  onClose,
}) => {};
  const navigate = useNavigate();

const handleViewAll = () => {
    onClose();
navigate("/notifications")
};

  return ("
    <div className="p-3 text-center border-t border-zion-blue-light">
variant="link"
        size="sm"
        className="text-zion-slate-light text-xs"

        onClick={handleViewAll}>;
<<<<<<< HEAD
  );

  );

};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
};
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
  );
};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const NotificationFooter: React.FC < NotificationFooterProps> = ({
=======
export const NotificationFooter: React.FC < NotificationFooterProps> = ({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  on_close,
}) => {};
  const navigate = use_navigate ();
;
  const handleViewAll = () =>: any {}
    on_close ();"
    navigate ("/notifications");
  }
;
return (
    <div className="p - 3 text - center border - t border - zion - blue - light">;
      <Button;
        variant="link";
        size="sm";
className="text - zion - slate - light text-xs";
        on_click={handleViewAll}
      >;
        View all notifications;
      </Button>;
    </div>);
}
;

  );

};

};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
