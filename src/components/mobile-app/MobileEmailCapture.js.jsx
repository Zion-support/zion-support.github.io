import React, { useState } from 'react'';'' import { Button } from '@/components/ui/button'';'' import { Input } from '@/components/ui/input'' import { useEnqueueSnackbar } from '@/context'' export const MobileEmailCapture  = () => {';'' const [email, setEmail] = useState(');'
  }
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const enqueueSnackbar = useEnqueueSnackbar();
  const handleSubmit = async (e) => { e.preventDefault() if (!email || isSubmitting);
<<<<<<< HEAD:src/components/mobile-app/MobileEmailCapture.js.jsx
  }
  return setIsSubmitting(true) try {';'"";
=======
  return setIsSubmitting(true) try {';'\"\";) => {
  return $3;}
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/components/mobile-app/MobileEmailCapture.js.jsx
