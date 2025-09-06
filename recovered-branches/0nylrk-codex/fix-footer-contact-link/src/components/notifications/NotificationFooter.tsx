<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import React from './react';
import { Button  } from '@/components / ui / button';
import { use_navigate  } from './react-router-dom';

interface NotificationFooterProps {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  on_close: () => void;
}

import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
<<<<<<< HEAD
=======
<<<<<<< HEAD


  onClose: () => void
}

=======
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface NotificationFooterProps {
  onClose: () => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();

=======
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;

interface NotificationFooterProps {;
  onClose: () => void;
}
<<<<<<< HEAD

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();

  const handleViewAll = () => {;
    onClose();
    navigate('/notifications');
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="p-3 text-center border-t border-zion-blue-light">;
=======

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {
  const navigate = useNavigate(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  
  const handleViewAll = () => {
    onClose(),
    navigate('/notifications')
  },
  
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <Button
        variant="link"
        size="sm"
        className="text-zion-slate-light text-xs"

        onClick={handleViewAll}>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
        onClick={handleViewAll}

=======
        onClick={handleViewAll}
<<<<<<< HEAD
      >
        View all notifications
      </Button>
    </div>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  )

=======
=======
        onClick={handleViewAll}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      >;

        View all notifications;
      </Button>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
