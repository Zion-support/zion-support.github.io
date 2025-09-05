
<<<<<<< HEAD
import { useState } from 'react',
export function useAuthStatus() {
  // Mock authenticated status
  const [isAuthenticated, setIsAuthenticated] = useState(false),
  
  // Mock user details
  const [userDetails, setUserDetails] = useState({
    id: 'user-123',
    name: 'Demo User',
    email: 'demo@example.com',
    avatar: ''
  }),
=======

export function useAuthStatus() {_// Mock authenticated status
  const [isAuthenticated, _setIsAuthenticated] = useState(false);
  
  // Mock user details
  const [userDetails, _setUserDetails] = useState({
    id: 'user-123', _name: 'Demo User', _email: 'demo@example.com', _avatar: ''});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Mock saved talents
  const [savedTalents, setSavedTalents] = useState<string[]>([]),
  
  // Toggle saved talent
  const _handleToggleSave = (_talentId: string, _isSaved: boolean) => {_if (isAuthenticated) {
      if (isSaved) {
<<<<<<< HEAD
        setSavedTalents(prev => [...prev, talentId])
      } else {
        setSavedTalents(prev => prev.filter(id => id !== talentId))
      }
    } else {
      // In a real app, we might show a login prompt
<<<<<<< HEAD
      // // // console.log('User needs to log in to save talents')
=======
      // console.log('User needs to log in to save talents');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  // For demo purposes, let's provide a login/logout toggle
  const toggleAuth = () => {
    setIsAuthenticated(prev => !prev)
  },
  
  return {
    isAuthenticated,
    userDetails,
    savedTalents,
    handleToggleSave,
    toggleAuth
  }
=======
        setSavedTalents(prev => [...prev, _talentId]);} else {_setSavedTalents(prev => prev.filter(id => id !== talentId));}
    } else {_// In a real app, _we might show a login prompt}
  };
  
  // For demo purposes, let's provide a login/logout toggle
  const _toggleAuth = () => {_setIsAuthenticated(prev => !prev);};
  
  return {_isAuthenticated, _userDetails, _savedTalents, _handleToggleSave, _toggleAuth};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
