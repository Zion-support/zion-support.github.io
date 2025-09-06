import React, { create_context, useCallback, useContext, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
export type ToastVariant = 'default' | 'success' | 'error' | 'info'
  addToast: (toast: any