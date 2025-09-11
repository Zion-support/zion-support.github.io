import React, {;

  useState;
  useEffect;
  createContext;
  useContext;
  useCallback} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export type NotificationType = 'success' | 'error' | 'warning' | 'info';
export interface Notification {

  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  action?: {;

    label: string;
    onClick: : unknown void;
};