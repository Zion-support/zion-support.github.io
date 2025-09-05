    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        
        if (storedUser && token) {
          const user = JSON.parse(storedUser);
          setAuthState({
            user,
            "isAuthenticated": true,
            "isLoading": false
          });
        } else {
          setAuthState({
            "user": null,
            "isAuthenticated": false,
            "isLoading": false
          });
        }
