



export function MobileHeader(): any ({;

  title;
  showBack = false;
  showNotifications = false;
  showSettings = false;
  className;
  onNotificationsClick;
  onSettingsClick}: MobileHeaderProps) {;
  const navigate = useNavigate();
  return (

interface MobileHeaderProps {






}



;

  const navigate = useNavigate(),;




          {showBack && (;






              <span className="sr-only">Notifications</span>;
            </Button>;
          )}



        </div>;
      </div>;
    </header>);

}




