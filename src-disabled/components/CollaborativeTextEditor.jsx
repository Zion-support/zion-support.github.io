import React, { useState, useCallback, useEffect, useRef } from 'react;";
import { motion } from framer-motion';";
import { Users, MessageSquare, Sparkles, Save, Download, Loader2 } from 'lucide-react;"";
<<<<<<< HEAD:src_backup/components/CollaborativeTextEditor.jsx
export const CollaborativeTextEditor = ({ roomId, userId, userName, initialContent = ', enableAI = true, enableCollaboration = true, enableVersioning = true, className = ', onSave, onExport }) => {const { trackEvent } = useAnalytics({        enableTracking: true, enableUserBehaviorTracking: true})

export const CollaborativeTextEditor = ({ roomId, userId, userName, initialContent = ', enableAI = true, enableCollaboration = true, enableVersioning = true, className = '', onSave, onExport }) => ;
  const { trackEvent } = useAnalytics({        enableTracking: true, enableUserBehaviorTracking: tru}
})
