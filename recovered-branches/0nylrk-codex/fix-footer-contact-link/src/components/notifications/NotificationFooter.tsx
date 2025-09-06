
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
  };

  return (
    <div className="p-3 text-center border-t border-zion-blue-light">;


interface NotificationFooterProps {
  onClose: () => void;
}
  
  const handleViewAll = () => {
    onClose(),
    navigate('/notifications')
  },
  
export const NotificationFooter: React.FC<NotificationFooterProps> = ({
  onClose
  onClose
}) => {
  const navigate = useNavigate();

  const handleViewAll = () => {

    onClose();
    navigate("/notifications");
  };

  return (
    <div className="p-3 text-center border-t border-zion-blue-light">


      <Button
        variant="link"
        size="sm"
        className="text-zion-slate-light text-xs"

        onClick={handleViewAll}>;

        onClick={handleViewAll}

      >
        View all notifications
      </Button>
    </div>
  );
};






};
export const NotificationFooter: React.FC < NotificationFooterProps> = ({
  on_close
  );
  );
};
export const NotificationFooter: React.FC < NotificationFooterProps> = ({
  on_close
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


import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;
;
interface NotificationFooterProps {;
  onClose:() => void;
}
;
export const NotificationFooter:React.FC<NotificationFooterProps> = ({ onClose }) => {;
  const navigate = useNavigate();
  const navigate = useNavigate();
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


