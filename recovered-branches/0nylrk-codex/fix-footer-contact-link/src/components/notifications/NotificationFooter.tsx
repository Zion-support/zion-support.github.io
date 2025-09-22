
import React from 'react';
import { Button  } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

import React from './react';
import { Button  } from '@/components / ui / button';
import { use_navigate  } from './react-router-dom';

interface NotificationFooterProps {
  on_close: () => void;

}

import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
interface NotificationFooterProps {
import React from "react";"
import { Button } from "@/components/ui/button";"
import { useNavigate } from "react-router-dom";
interface NotificationFooterProps {}
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

interface NotificationFooterProps {
  onClose: () => void;
}
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
  );

  );

};
  );
};
  );
  );
};
export const NotificationFooter: React.FC < NotificationFooterProps> = ({
export const NotificationFooter: React.FC < NotificationFooterProps> = ({}
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
