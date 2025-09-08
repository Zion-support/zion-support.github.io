import {useState} from 'react';

export function useAuthStatus() {
  // Mock authenticated status  // Mock user details
  const [userDetails, setUserDetails] = useState({
    id: 'user-123';
    name: 'Demo User';

    email: 'demo@example && example.com',
    avatar: ''
  });
  // Mock saved talents;
  const [savedTalents, setSavedTalents] = useState<string[]>([]);
  // Toggle saved talent;
  const handleToggleSave = (talentId: string, isSaved: boolean) => {}
    if (isAuthenticated) {}
      if (isSaved) {}

        setSavedTalents(prev => [...prev, talentId])

