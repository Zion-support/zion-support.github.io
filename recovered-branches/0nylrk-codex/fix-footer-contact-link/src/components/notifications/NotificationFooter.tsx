<<<<<<< HEAD
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
    <div className="p-3 text-center border-t border-zion-blue-light">;
=======
  on_close: () => void;
}

import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
interface NotificationFooterProps {
  onClose: () => void;
}
export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {
  const navigate = useNavigate(),
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  
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
<<<<<<< HEAD
    navigate("/notifications");
  };

  return (
    <div className="p-3 text-center border-t border-zion-blue-light">
      <Button
=======
    navigate("/notifications")
};

  return (
    <div className="p-3 text-center border-t border-zion-blue-light">
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        variant="link"
        size="sm"
        className="text-zion-slate-light text-xs"

        onClick={handleViewAll}>;
<<<<<<< HEAD
  );
  );
};
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
    <div className="p - 3 text - center border - t border - zion - blue - light">;
      <Button;
        variant="link";
        size="sm";
        className="text - zion - slate - light text - xs";
=======
    <div className="p - 3 text - center border - t border - zion - blue-light">;
      <Button;
        variant="link";
        size="sm";
        className="text - zion - slate - light text-xs";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
