<<<<<<< HEAD


=======
<<<<<<< HEAD
import React, { useState, useCallback, useEffect, useRef } from 'react';"";
import { motion } from 'framer-motion';"";
import { Users, MessageSquare, Sparkles, Save, Download, Loader2 } from 'lucide-react';"";
:src_backup/components/CollaborativeTextEditor.jsx
export const CollaborativeTextEditor = ({ roomId, userId, userName, initialContent = '', enableAI = true, enableCollaboration = true, enableVersioning = true, className = '', onSave, onExport }) => {const { trackEvent } = useAnalytics({        enableTracking: true, enableUserBehaviorTracking: true})
=======
<<<<<<< HEAD
import React, { useState, useCallback, useEffect, useRef } from 'react';"";
import { motion } from 'framer-motion';"";
import { Users, MessageSquare, Sparkles, Save, Download, Loader2 } from 'lucide-react';"";

export const CollaborativeTextEditor = ({ roomId, userId, userName, initialContent = '', enableAI = true, enableCollaboration = true, enableVersioning = true, className = '', onSave, onExport }) => ;
  const { trackEvent } = useAnalytics({        enableTracking: true, enableUserBehaviorTracking: tru,}
})
=======
<<<<<<< HEAD
import React, { useState, useCallback, useEffect, useRef } from 'react;";
import { motion } from framer-motion';";
import { Users, MessageSquare, Sparkles, Save, Download, Loader2 } from 'lucide-react;"";
<<<<<<< HEAD:src_backup/components/CollaborativeTextEditor.jsx
export const CollaborativeTextEditor = ({ roomId, userId, userName, initialContent = ', enableAI = true, enableCollaboration = true, enableVersioning = true, className = ', onSave, onExport }) => {const { trackEvent } = useAnalytics({        enableTracking: true, enableUserBehaviorTracking: true})
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export const CollaborativeTextEditor = ({ roomId, userId, userName, initialContent = '', enableAI = true, enableCollaboration = true, enableVersioning = true, className = '', onSave, onExport }) => ;
  const { trackEvent } = useAnalytics({        enableTracking: true, enableUserBehaviorTracking: tru,}
})
=======
import React, { useState, useCallback, useEffect, useRef } from 'react';\"\";
import { motion } from 'framer-motion';\"\";
import { Users, MessageSquare, Sparkles, Save, Download, Loader2 } from 'lucide-react';\"\";

export const CollaborativeTextEditor = ({ roomId, userId, userName, initialContent = '', enableAI = true, enableCollaboration = true, enableVersioning = true, className = '', onSave, onExport }) => ;
  const { trackEvent } = useAnalytics({        enableTracking: true, enableUserBehaviorTracking: tru,}
})
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
