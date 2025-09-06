:src.disabled/context/auth/AuthProvider.jsx
' \' \' \' \' \' \''\''\";\";
" " " " " " """"";";'"'"
origin/cursor/integrate-build-improve-and-re-verify-c7b5
' \' \' \' \' \' \''\''\";\";
" " " " " " """"";";'"'"
:temp_exclude/src.disabled/context/auth/AuthProvider.jsx
=======
' \' \' \' \' \' \''\''\";\";
" " " " " " """"";";'"'"
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4:temp_exclude/src.disabled/context/auth/AuthProvider.jsx
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import React,{ useEffect } from 'react''';' import { supabase,getFromProfiles } from '../../integrations/supabase/client''';' import { useAuthOperations } from '../../hooks/useAuthOperations''';' import { AuthContext } from './AuthContext''';' import { cleanupAuthState } from '../../utils/authUtils'''; import { useNavigate,useLocation } from';';react-router-dom''';' import { useAuthState } from './useAuthState''';' import { useAuthEventHandlers } from './useAuthEventHandlers''';' import { mapProfileToUser } from './profileMapper''';' import { loginUser,registerUser } from '@/services/authService''';' import { safeStorage } from '@/utils/safeStorage''';' import { toast } from '@/hooks/use-toast''';';''
