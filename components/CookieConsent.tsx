


  const [preferences, setPreferences] = useState({;
    necessary: true,;
    analytics: false,;
    marketing: false,;
    functional: false,;
  });
  useEffect(() => {;
    const consent = localStorage && localStorage.getItem("cookie-consent");
    if (!consent) {;
      setIsVisible(true);
    }
  }, []);
  const acceptAll = () => {;
    const allAccepted = {;
      necessary: true,;
      analytics: true,;
      marketing: true,;
      functional: true,;
    };


            </div>;




      </div>;

