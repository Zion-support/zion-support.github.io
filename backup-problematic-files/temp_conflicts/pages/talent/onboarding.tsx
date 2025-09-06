import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
  availability: any
    if (currentStep = = 'Basic Info'
      if (!formData.fullName.trim() return 'Full Name is required.'
      if (!formData.professionalTitle.trim() return 'Professional Title is required.'
    if (currentStep = = 'Experience'
      if (!formData.bio.trim() return 'Short Bio is required.'
      if (!formData.yearsOfExperience.trim() return 'Years of Experience is required.'
    if (currentStep = = 'Skills & Tech'
      if (!formData.skills.trim() return 'Please list at least one skill.'
    if (currentStep = = 'Availability'
      if (!formData.availability) return 'Please select your current availability.'
      if (!formData.timezone.trim() return 'Preferred Timezone is required.'
      const response = await fetch('/api/talent/
        headers:{ 'Content-Type': any