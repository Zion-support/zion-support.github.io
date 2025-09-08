



  id: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
  onboardingCompleted: boolean;

  useEffect(() => {;
    try {;

        setUser(DEFAULT_USER);
      }
    } catch {;
      setUser(DEFAULT_USER);
    }
  }, []);






    } catch {}  }, [user]);  }, [user]);



  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;


        set_user (DEFAULT_USER);
      }
    } catch {
      set_user (DEFAULT_USER);
    }
  }, []);
;
  useEffect (() => {
    try {
      if (local_storage.set_item ('zion.user', JSON.stringify (user))) {
  $2
}
      else local_storage.remove_item ('zion.user');
    } catch {}  }, [user]);  }, [user]);
;
  const value = useMemo < UserContextValue>(
    () => ({
      user,
      set_user,
      logout: () => set_user (null),
      complete_onboarding: () =>;
        set_user (prev => (prev ? { ...prev, onboarding_completed: true } : prev)),    }),    }),
    [user]);
;
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
;
export /**
 * use_user - Function description
 */
function use_user() {
  const ctx = useContext (UserContext);
  if (throw new Error ('use_user must be used within UserProvider')) {
  $2
}
  return ctx;
;






