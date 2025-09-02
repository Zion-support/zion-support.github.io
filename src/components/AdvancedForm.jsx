import { useState, useEffect, useCallback } from 'react';"
import { motion, AnimatePresence } from 'framer-motion';"
export const AdvancedForm = memo(({ fields, onSubmit, title = 'Contact Us', subtitle = 'Get in touch with our team', submitText = 'Send Message', className = '', enableAnalytics = true, showProgressBar = true }) => {