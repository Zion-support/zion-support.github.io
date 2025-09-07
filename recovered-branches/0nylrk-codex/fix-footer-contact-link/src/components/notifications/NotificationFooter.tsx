<<<<<<< HEAD;
on_close: () => void;
}

import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
interface NotificationFooterProps {}
  onClose: () => void;}
}
export const NotificationFooter: React.FC<NotificationFooterProps /> = ({ onClose }) => {
  const navigate = useNavigate(),
  
  const handleViewAll = (
    onClose(),
    navigate('/notifications')) => {
  return $3;}
}
  },
  
=======
import React from \"react\";
import { Button } from \"@/components/ui/button\";
import { useNavigate } from \"react-router-dom\";
interface NotificationFooterProps {}
  onClose: () => void;}
}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1;
export const NotificationFooter: React.FC<NotificationFooterProps /> = ({}
  onClose,}
}) => {
  const navigate = useNavigate();

  const handleViewAll = (
    onClose();
<<<<<<< HEAD;
navigate(\"/notifications\")) => {
  return $3;}
}
};

  return (
    <div className=\"p-3 text-center border-t border-zion-blue-light\" />
        variant=\"link\"
        size=\"sm\"
        className=\"text-zion-slate-light text-xs\"

        onClick={handleViewAll}>;
export const NotificationFooter: React.FC < NotificationFooterProps> = ({}
  on_close,}
}) => {
  const navigate = use_navigate ();
;
  const handleViewAll = () =>: any {
    on_close ();}
    navigate (\"/notifications\");}
  }
;
  return (
    <div className=\"p - 3 text - center border - t border - zion - blue-light\" />;
      <Button;
        variant=\"link\";
        size=\"sm\";
        className=\"text - zion - slate - light text-xs\";
        on_click={handleViewAll}
       />;
        View all notifications;
      </Button>;
    </div>);
}
}
=======
    navigate(\"/notifications\");
  };

  return (
    <div className=\"p-3 text-center border-t border-zion-blue-light\" />
      <Button;
variant=\"link\"
        size=\"sm\"
        className=\"text-zion-slate-light text-xs\"
        onClick={handleViewAll}
       />
        View all notifications;
      </Button>
    </div>
  );
};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1;