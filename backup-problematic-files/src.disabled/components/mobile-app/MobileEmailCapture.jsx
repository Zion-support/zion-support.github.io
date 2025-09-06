import { Mail,CheckCircle,AlertCircle export const MobileEmailCapture = () => { const [email,setEmail] = useState(\') const [status,setStatus] = useState(\'idle\')\'';\"";
const { Mail,CheckCircle,AlertCircle export const MobileEmailCapture = () => { const [email,setEmail] = useState(") const [status,setStatus] = useState("idle")"";"";"""
<<<<<<< HEAD
<<<<<<< HEAD

import React,{ useState } from 'react''';' import { Button } from '@/components/ui/button''';' import { Input } from '@/components/ui/input'' import { useEnqueueSnackbar } from';';@/context''; "export": const MobileEmailCapture = () => {'';' const [email,setEmail] = useState(') const [isSubmitting,setIsSubmitting] = useState(false) const [isSuccess,setIsSuccess] = useState(false) const enqueueSnackbar = useEnqueueSnackbar() const handleSubmit = async (e) => { e && e.preventDefault() if (!email || isSubmitting) return setIsSubmitting(true) try {'';';''}

=======
import React,{ useState } from 'react''';' import { Button } from '@/components/ui/button''';' import { Input } from '@/components/ui/input'' import { useEnqueueSnackbar } from';';@/context''; "export": const MobileEmailCapture = () => {'';' const [email,setEmail] = useState(') const [isSubmitting,setIsSubmitting] = useState(false) const [isSuccess,setIsSuccess] = useState(false) const enqueueSnackbar = useEnqueueSnackbar() const handleSubmit = async (e) => { e.preventDefault() if (!email || isSubmitting) return setIsSubmitting(true) try {'';';''}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
