<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState, useEffect } from "react";
import { useRouter  } from 'next/router';
import { useDisputes } from "@/hooks/useDisputes";
import { logErrorToProduction } from '@/utils/productionLogger';
import {
  Dispute
  disputeReasonLabels
  DisputeMessage
  DisputeStatus
  ResolutionType
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { useDisputes } from '@/hooks/useDisputes';
import { logErrorToProduction } from '@/utils/productionLogger'; import { useRouter } from 'next/router'
import { useDisputes } from "@/hooks/useDisputes"
import {logErrorToProduction} from '@/utils/productionLogger'
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
  Dispute,
  disputeReasonLabels,
  DisputeMessage,
  DisputeStatus,
<<<<<<< HEAD
<<<<<<< HEAD

=======
  ResolutionType,
=======
  ResolutionType,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
} from '@/types/disputes'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { format, formatDistanceToNow } from 'date-fns'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ArrowDown, Check, MessageSquare, Download } from 'lucide-react'
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
export function DisputeDetail() {

<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
  const router = useRouter()
  const { disputeId } = router.query as { disputeId?: string }
  const { user } = useAuth()
  const {
    getDisputeById
    updateDisputeStatus
    resolveDispute
    getDisputeMessages
    addDisputeMessage
  } = useDisputes()
  const [dispute, setDispute] = useState<Dispute | null>(null)
  const [messages, setMessages] = useState<DisputeMessage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [adminNote, setAdminNote] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [resolution, setResolution] = useState<{
    summary: string
    resolution_type: ResolutionType
  }>({
    summary: ''
    resolution_type: 'compromise'
  })
  const [activeTab, setActiveTab] = useState('overview')
  // Check if user is admin (placeholder - implement proper admin check)
  const isAdmin = user?.userType === 'admin'
  useEffect(() => {
    if (!disputeId) return;
    const loadDisputeData = async () => {
      setIsLoading(true)
      try {
        const disputeData = await getDisputeById(disputeId)
        if (!disputeData) {
          toast.error('Dispute not found')
          router.push('/dashboard/disputes')
          return;
        }
        setDispute(disputeData)
        const messagesData = await getDisputeMessages(disputeId)
        setMessages(messagesData)
      } catch (error) {
        logErrorToProduction('Error loading dispute data:', { data: error })
        toast.error('Failed to load dispute')
      } finally {
        setIsLoading(false)
      }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
    loadDisputeData()
  }, [disputeId, getDisputeById, getDisputeMessages, router])
  const handleStatusChange = async (status: DisputeStatus) => {
    if (!disputeId) return;
    const success = await updateDisputeStatus(disputeId, status)
<<<<<<< HEAD
========
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { use_router } from 'next / router';
import { use_disputes } from '@/hooks / use_disputes';
import { logErrorToProduction } from '@/utils / production_logger'; import { use_router } from 'next / router';
import { use_disputes  } from '@/hooks / use_disputes';
import {logErrorToProduction} from '@/utils / production_logger';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
  Dispute,
  disputeReasonLabels,
  DisputeMessage,
  DisputeStatus,
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  ResolutionType,;
} from '@/types/disputes';

import React, { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import { useDisputes } from "@/hooks/useDisputes",
import {logErrorToProduction} from '@/utils/productionLogger',
import {
 Dispute, disputeReasonLabels, DisputeMessage, DisputeStatus, ResolutionType
} from "@/types/disputes",

import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Separator } from "@/components/ui/separator",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { format, formatDistanceToNow } from "date-fns",
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",
import { ArrowDown, Check, MessageSquare, Download } from 'lucide-react'
import { useAuth } from "@/hooks/useAuth",
import { toast } from "sonner",
export function DisputeDetail() {
  const router = useRouter(),
  const { disputeId } = router.query as { disputeId?: string },
  const { user } = useAuth(),
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes(),

  const [dispute, setDispute] = useState<Dispute | null>(null),
  const [messages, setMessages] = useState<DisputeMessage[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [message, setMessage] = useState(""),
  const [adminNote, setAdminNote] = useState(""),
  const [isSending, setIsSending] = useState(false),
  const [resolution, setResolution] = useState<{ summary: string, resolution_type: ResolutionType }>({
  summary: "",
  resolution_type: "compromise"}),
   
  const [activeTab, setActiveTab] = useState("overview"),

  // Check if user is admin (placeholder - implement proper admin check)
  const isAdmin = user?.userType === "admin",
  
  useEffect(() => {
    if (!disputeId) return,

<<<<<<< HEAD
========
  ResolutionType,
} from '@/types / disputes';
import { Button } from '@/components / ui / button';
import { Textarea } from '@/components / ui / textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Separator } from '@/components / ui / separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { format, formatDistanceToNow } from 'date - fns';
import { Alert, AlertDescription, AlertTitle } from '@/components / ui / alert';
import { ArrowDown, Check, MessageSquare, Download } from 'lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { toast } from 'sonner';
export /**
 * DisputeDetail - Function description
 */
function DisputeDetail() {
  const router = use_router ();
  const { dispute_id } = router.query as { dispute_id?: string }
  const { user } = use_auth ();
  const {
    getDisputeById,
    updateDisputeStatus,
    resolve_dispute,
    getDisputeMessages,
    addDisputeMessage,
  } = use_disputes ();
  const [dispute, set_dispute] = useState < Dispute | null>(null);
  const [messages, set_messages] = useState < DisputeMessage[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const [message, set_message] = useState ('');
  const [admin_note, setAdminNote] = useState ('');
  const [is_sending, setIsSending] = useState (false);
  const [resolution, set_resolution] = useState<{
    summary: string;
    resolution_type: ResolutionType;
  }>({
    summary: '',
    resolution_type: 'compromise',
  });
  const [active_tab, setActiveTab] = useState ('overview');
  // Check if user is admin (placeholder - implement proper admin check);
  const is_admin = user?.user_type === 'admin';
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const loadDisputeData = async () => {
      setIsLoading(true),
      try {
        const disputeData = await getDisputeById(disputeId),
        if (!disputeData) {
          toast.error("Dispute not found"),
          router.push("/dashboard/disputes"),
          return
        }
        setDispute(disputeData),
        
        const messagesData = await getDisputeMessages(disputeId),
        setMessages(messagesData)
      } catch (error) {
        logErrorToProduction('Error loading dispute data:', { data: error }),
        toast.error("Failed to load dispute")
      } finally {
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        setIsLoading(false)
      }
    },
    
    loadDisputeData()
  }, [disputeId, getDisputeById, getDisputeMessages, router]),

  const handleStatusChange = async (status: DisputeStatus) => {
    if (!disputeId) return,

    const success = await updateDisputeStatus(disputeId, status),
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (success) {
      // Update the dispute object with the new status
      setDispute({ ...dispute!, status: status })
    } else {
<<<<<<< HEAD

      return

    }
    const success = await resolveDispute(disputeId, {

      resolution_type:
        (resolution.resolution_type as ResolutionType) |'compromise'
    })

=======
>>>>>>>     if (success) {
      // Update the dispute object with the new status
      setDispute({ ...dispute!, status: status })
    } else {
      return
>>>>>>>     }
    const success = await resolveDispute(disputeId, {
      summary: resolution.summary
=======
<<<<<<< HEAD
      toast.error('Failed to update dispute status')
    }
  }
  const handleResolveDispute = async () => {
    if (!disputeId) return;
    if (!resolution.summary) {
      toast.error('Please provide a resolution summary')
<<<<<<< HEAD
=======
      return;
=======
      toast.error("Failed to update dispute status")
    }
  },

  const handleResolveDispute = async () => {
    if (!disputeId) return,
    
    if (!resolution.summary) {
      toast.error("Please provide a resolution summary"),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      return
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    }
    const success = await resolveDispute(disputeId, {
<<<<<<< HEAD
      summary: resolution.summary
=======
      summary: resolution.summary,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      resolution_type:
        (resolution.resolution_type as ResolutionType) |'compromise'
    })
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (success && dispute) {
      setDispute({
        ...dispute
        resolution_summary: resolution.summary
        resolution_type: resolution.resolution_type
        resolved_at: new Date().toISOString()
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
      resolution_type: (resolution.resolution_type as ResolutionType) || "compromise"}),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (success && dispute) {
      setDispute({
        ...dispute,
        resolution_summary: resolution.summary,
        resolution_type: resolution.resolution_type,
<<<<<<< HEAD
<<<<<<< HEAD

=======
    if (!disputeId |!message.trim()) return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    setIsSending(true)
========
        setIsLoading (false);
=======

import React, { useState, useEffect } from "react",;
import { useRouter } from 'next/router',;
import { useDisputes } from "@/hooks/useDisputes",;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
 Dispute, disputeReasonLabels, DisputeMessage, DisputeStatus, ResolutionType;
} from "@/types/disputes",;
;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Separator } from "@/components/ui/separator",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { format, formatDistanceToNow } from "date-fns",;
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",;
import { ArrowDown, Check, MessageSquare, Download } from 'lucide-react';
import { useAuth } from "@/hooks/useAuth",;
import { toast } from "sonner",;
;
export function DisputeDetail() {;
  const router = useRouter(),;
  const { disputeId } = router.query as { disputeId?:string },;
  const { user } = useAuth(),;
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes(),;
;
  const [dispute, setDispute] = useState<Dispute | null>(null),;
  const [messages, setMessages] = useState<DisputeMessage[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [message, setMessage] = useState(""),;
  const [adminNote, setAdminNote] = useState(""),;
  const [isSending, setIsSending] = useState(false),;
  const [resolution, setResolution] = useState<{ summary:string, resolution_type:ResolutionType }>({;
  summary:"",;
  resolution_type:"compromise"}),;
   ;
  const [activeTab, setActiveTab] = useState("overview"),;
;
  // Check if user is admin (placeholder - implement proper admin check);
  const isAdmin = user?.userType === "admin",;
  ;
  useEffect(() => {;
    if (!disputeId) return,;
;
    const loadDisputeData = async () => {;
      setIsLoading(true),;
      try {;
        const disputeData = await getDisputeById(disputeId),;
        if (!disputeData) {;
          toast.error("Dispute not found"),;
          router.push("/dashboard/disputes"),;
          return,;
        }
        setDispute(disputeData),;
        ;
        const messagesData = await getDisputeMessages(disputeId),;
        setMessages(messagesData),;
      } catch (error) {;
        logErrorToProduction('Error loading dispute data:', { data:error }),;
        toast.error("Failed to load dispute"),;
      } finally {;
        setIsLoading(false),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      }
    },;
    ;
    loadDisputeData(),;
  }, [disputeId, getDisputeById, getDisputeMessages, router]),;
;
  const handleStatusChange = async (status:DisputeStatus) => {;
    if (!disputeId) return,;
;
    const success = await updateDisputeStatus(disputeId, status),;
    if (success) {;
      // Update the dispute object with the new status;
      setDispute({ ...dispute!, status:status }),;
    } else {;
      toast.error("Failed to update dispute status"),;
    }
<<<<<<< HEAD
    loadDisputeData ();
  }, [dispute_id, getDisputeById, getDisputeMessages, router]);
  const handleStatusChange = async (status: DisputeStatus) => {
    // Check condition
if (return) {
  $2
}
    const success = await updateDisputeStatus (dispute_id, status);
    // Check condition
if ( {) {
  $2
}
      // Update the dispute object with the new status;
      set_dispute ({ ...dispute!, status: status });
    } else {
      toast.error ('Failed to update dispute status');
    }
  }
  const handleResolveDispute = async () => {
    // Check condition
if (return) {
  $2
}
    // Check condition
if ( {) {
  $2
}
      toast.error ('Please provide a resolution summary');
      return;
    }
    const success = await resolve_dispute (dispute_id, {
      summary: resolution.summary,
      resolution_type:;
        (resolution.resolution_type as ResolutionType) || 'compromise',
    });
    // Check condition
if ( {) {
  $2
}
      set_dispute ({
        ...dispute,
        resolution_summary: resolution.summary,
        resolution_type: resolution.resolution_type,
        resolved_at: new Date ().toISOString (),
      });
    } else {
      toast.error ('Failed to resolve dispute');
    }
  }
  const handleSendMessage = async () => {
    if () return) {
  $2
}
    setIsSending (true);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
=======
        resolved_at: new Date().toISOString(),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      })
    } else {
      toast.error('Failed to resolve dispute')
    }
  }
  const handleSendMessage = async () => {
<<<<<<< HEAD
    if (!disputeId |!message.trim()) return
=======
    if (!disputeId || !message.trim()) return;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    setIsSending(true)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    try {
      const success = await addDisputeMessage(disputeId, message, isAdmin)
      if (success) {
        // Refresh messages
        const updatedMessages = await getDisputeMessages(disputeId)
        setMessages(updatedMessages)
        setMessage('')
      }
    } catch (error) {
      logErrorToProduction('Error sending message:', { data: error })
    } finally {
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx
      setIsSending(false)
========
      setIsSending (false);
=======
  },;
;
  const handleResolveDispute = async () => {;
    if (!disputeId) return,;
    ;
    if (!resolution.summary) {;
      toast.error("Please provide a resolution summary"),;
      return,;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
    }
    ;
    const success = await resolveDispute(disputeId, {;
      summary:resolution.summary,;
      resolution_type:(resolution.resolution_type as ResolutionType) || "compromise"}),;
    if (success && dispute) {;
      setDispute({;
        ...dispute,;
        resolution_summary:resolution.summary,;
        resolution_type:resolution.resolution_type,;
        resolved_at:new Date().toISOString()}),;
    } else {;
      toast.error("Failed to resolve dispute"),;
    }
  },;
;
  const handleSendMessage = async () => {;
    if (!disputeId || !message.trim()) return,;
    ;
    setIsSending(true),;
    try {;
      const success = await addDisputeMessage(disputeId, message, isAdmin),;
      if (success) {;
        // Refresh messages;
        const updatedMessages = await getDisputeMessages(disputeId),;
        setMessages(updatedMessages),;
        setMessage(""),;
      }
    } catch (error) {;
      logErrorToProduction('Error sending message:', { data:error }),;
    } finally {;
      setIsSending(false),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    }
  },;
;
  if (isLoading) {;
    return (;
      <div className="p-8 text-center">;
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>;
        <p>Loading dispute details...</p>;
      </div>;
    ),;
  }
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

=======
=======
      setIsSending(false)
    }
  }
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast.error("Failed to update dispute status")
    }
  },

  const handleResolveDispute = async () => {
    if (!disputeId) return,
    
    if (!resolution.summary) {
      toast.error("Please provide a resolution summary"),
      return
    }
    
    const success = await resolveDispute(disputeId, {
      summary: resolution.summary,
      resolution_type: (resolution.resolution_type as ResolutionType) || "compromise"}),
    if (success && dispute) {
      setDispute({
        ...dispute,
        resolution_summary: resolution.summary,
        resolution_type: resolution.resolution_type,
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        resolved_at: new Date().toISOString()})
    } else {
      toast.error("Failed to resolve dispute")
    }
  },

  const handleSendMessage = async () => {
    if (!disputeId || !message.trim()) return,
    
    setIsSending(true),
    try {
      const success = await addDisputeMessage(disputeId, message, isAdmin),
      if (success) {
        // Refresh messages
        const updatedMessages = await getDisputeMessages(disputeId),
        setMessages(updatedMessages),
        setMessage("")
import React, { useState, useEffect } from "react",;
import { useRouter } from 'next/router',;
import { useDisputes } from "@/hooks/useDisputes",;
import {logErrorToProduction} from '@/utils/productionLogger',;
<<<<<<< HEAD
========
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='p - 8 text - center'>;
        <div className='w - 8 h - 8 mx - auto mb - 4 animate - spin border - 4 border - primary border - t-transparent rounded - full'></div>;
        <p > Loading dispute details...</p>;
      </div>);
  }
import {logErrorToProduction} from '@/utils/productionLogger';
import {;
  Dispute,;
  disputeReasonLabels,;
  DisputeMessage,;
  DisputeStatus,;
  ResolutionType,;
} from '@/types/disputes';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format, formatDistanceToNow } from 'date-fns';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowDown, Check, MessageSquare, Download } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
export function DisputeDetail() {;
  const router = useRouter();
  const { disputeId } = router && router.query as { disputeId?: string };
  const { user } = useAuth();
  const {;
    getDisputeById,;
    updateDisputeStatus,;
    resolveDispute,;
    getDisputeMessages,;
    addDisputeMessage,;
  } = useDisputes();
  const [dispute, setDispute] = useState<Dispute | null>(null);
  const [messages, setMessages] = useState<DisputeMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [adminNote, setAdminNote] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [resolution, setResolution] = useState<{;
    summary: string;
    resolution_type: ResolutionType;
  }>({;
    summary: '',;
    resolution_type: 'compromise',;
  });
  const [activeTab, setActiveTab] = useState('overview');
  // Check if user is admin (placeholder - implement proper admin check);
  const isAdmin = user?.userType === 'admin';
  useEffect(() => {;
    if (!disputeId) return;
    const loadDisputeData = async () => {;
      setIsLoading(true);
      try {;
        const disputeData = await getDisputeById(disputeId);
        if (!disputeData) {;
          toast && toast.error('Dispute not found');
          router && router.push('/dashboard/disputes');
          return;
        }
        setDispute(disputeData);
        const messagesData = await getDisputeMessages(disputeId);
        setMessages(messagesData);
      } catch (error) {;
        logErrorToProduction('Error loading dispute data:', { data: error });
        toast && toast.error('Failed to load dispute');
      } finally {;
        setIsLoading(false);
      }
    };
    loadDisputeData();
  }, [disputeId, getDisputeById, getDisputeMessages, router]);
  const handleStatusChange = async (status: DisputeStatus) => {;
    if (!disputeId) return;
    const success = await updateDisputeStatus(disputeId, status);
=======
import {;
 Dispute, disputeReasonLabels, DisputeMessage, DisputeStatus, ResolutionType;
} from "@/types/disputes",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Separator } from "@/components/ui/separator",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { format, formatDistanceToNow } from "date-fns",;
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",;
import { ArrowDown, Check, MessageSquare, Download } from 'lucide-react';
import { useAuth } from "@/hooks/useAuth",;
import { toast } from "sonner",;
export function DisputeDetail() {;
  const router = useRouter(),;
  const { disputeId } = router.query as { disputeId?: string },;
  const { user } = useAuth(),;
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes(),;
  const [dispute, setDispute] = useState<Dispute | null>(null),;
  const [messages, setMessages] = useState<DisputeMessage[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [message, setMessage] = useState(""),;
  const [adminNote, setAdminNote] = useState(""),;
  const [isSending, setIsSending] = useState(false),;
  const [resolution, setResolution] = useState<{ summary: string, resolution_type: ResolutionType }>({;
  summary: "",;
  resolution_type: "compromise"}),;
  const [activeTab, setActiveTab] = useState("overview"),;
  // Check if user is admin (placeholder - implement proper admin check);
  const isAdmin = user?.userType === "admin",;
  useEffect(() => {;
    if (!disputeId) return,;
    const loadDisputeData = async () => {;
      setIsLoading(true),;
      try {;
        const disputeData = await getDisputeById(disputeId),;
        if (!disputeData) {;
          toast.error("Dispute not found"),;
          router.push("/dashboard/disputes"),;
          return;
        }
        setDispute(disputeData),;
        const messagesData = await getDisputeMessages(disputeId),;
        setMessages(messagesData);
      } catch (error) {;
        logErrorToProduction('Error loading dispute data:', { data: error }),;
        toast.error("Failed to load dispute");
      } finally {;
        setIsLoading(false);
      }
    },;
    loadDisputeData();
  }, [disputeId, getDisputeById, getDisputeMessages, router]),;
  const handleStatusChange = async (status: DisputeStatus) => {;
    if (!disputeId) return,;
    const success = await updateDisputeStatus(disputeId, status),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (success) {;
      // Update the dispute object with the new status;
      setDispute({ ...dispute!, status: status });
    } else {;
<<<<<<< HEAD
      toast && toast.error('Failed to update dispute status');
    }
  };
  const handleResolveDispute = async () => {;
    if (!disputeId) return;
    if (!resolution && resolution.summary) {;
      toast && toast.error('Please provide a resolution summary');
      return;
    }
    const success = await resolveDispute(disputeId, {;
      summary: resolution && resolution.summary,;
      resolution_type:;
        (resolution && resolution.resolution_type as ResolutionType) || 'compromise',;
    });
    if (success && dispute) {;
      setDispute({;
        ...dispute,;
        resolution_summary: resolution && resolution.summary,;
        resolution_type: resolution && resolution.resolution_type,;
        resolved_at: new Date().toISOString(),;
      });
    } else {;
      toast && toast.error('Failed to resolve dispute');
    }
  };
  const handleSendMessage = async () => {;
    if (!disputeId || !message && message.trim()) return;
    setIsSending(true);
    try {;
      const success = await addDisputeMessage(disputeId, message, isAdmin);
      if (success) {;
        // Refresh messages;
        const updatedMessages = await getDisputeMessages(disputeId);
        setMessages(updatedMessages);
        setMessage('');
=======
      toast.error("Failed to update dispute status");
    }
  },;
  const handleResolveDispute = async () => {;
    if (!disputeId) return,;
    if (!resolution.summary) {;
      toast.error("Please provide a resolution summary"),;
      return;
    }
;
    const success = await resolveDispute(disputeId, {;
      summary: resolution.summary,;
      resolution_type: (resolution.resolution_type as ResolutionType) || "compromise"}),;
    if (success && dispute) {;
      setDispute({;
        ...dispute,;
        resolution_summary: resolution.summary,;
        resolution_type: resolution.resolution_type,;
        resolved_at: new Date().toISOString()});
    } else {;
      toast.error("Failed to resolve dispute");
    }
  },;
  const handleSendMessage = async () => {;
    if (!disputeId || !message.trim()) return,;
    setIsSending(true),;
    try {;
      const success = await addDisputeMessage(disputeId, message, isAdmin),;
      if (success) {;
        // Refresh messages;
        const updatedMessages = await getDisputeMessages(disputeId),;
        setMessages(updatedMessages),;
        setMessage("");
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
    } catch (error) {;
      logErrorToProduction('Error sending message:', { data: error });
    } finally {;
      setIsSending(false);
    }
<<<<<<< HEAD
  };
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

<<<<<<< HEAD
  if (isLoading) {
=======
>>>>>>>   if (isLoading) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  if (isLoading) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
    return (
      <div className='p-8 text-center'>;
        <div className='w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full'></div>;
        <p>Loading dispute details...</p>;
      </div>;
    );
  }
  if (!dispute) {;
    return (
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

      <div className="p-8 text-center">
        <p>Dispute not found</p>
<<<<<<< HEAD

=======
=======
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>
        <p>Loading dispute details...</p>
      </div>
    )
  }
  if (!dispute) {
    return (
      <div className="p-8 text-center">
        <p>Dispute not found</p>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Button
          onClick={() => router.push('/dashboard/disputes')}
          className='mt-4'
        >          Back to Disputes
<<<<<<< HEAD
>>>>>>>         </Button>
      </div>
    )
  }
      case 'open':
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
        <Button onClick={() => router.push("/dashboard/disputes")} className="mt-4">
          Back to Disputes
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </Button>
      </div>
    )
  }
<<<<<<< HEAD

<<<<<<< HEAD
      case 'open':
        return 'default';
=======
========
      <div className='p-8 text-center'>;
        <p>Dispute not found</p>;
        <Button
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
          onClick={() => router && router.push('/dashboard/disputes')}
          className='mt-4';
        >          Back to Disputes;
        </Button>;
      </div>;
    );
  }
  const getStatusBadgeVariant = (status: DisputeStatus,) => {;
    switch (status) {;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='p - 8 text - center'>;
        <p > Dispute not found</p>;
        <Button;
          on_click={() => router.push ('/dashboard / disputes')}
          className='mt - 4';
        >          Back to Disputes;
        </Button>;
      </div>);
  }
  const getStatusBadgeVariant = (status: DisputeStatus, ) =>: any {
    switch (status) {
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
      case 'open':;
>>>>>>>         return 'default';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx
=======
<<<<<<< HEAD
  const getStatusBadgeVariant = (status: DisputeStatus,) => {
    switch (status) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      case 'open':
        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        return 'outline'; // Changed from "success" to "outline"
      case 'closed':
        return 'outline'
      default:
        return 'default'
    }
  }
<<<<<<< HEAD

<<<<<<< HEAD
=======
  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD

  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      case "open": return "default",
      case "under_review": return "secondary",
      case "resolved": return "outline", // Changed from "success" to "outline"
      case "closed": return "outline",
      default: return "default"
    }
  },

<<<<<<< HEAD
<<<<<<< HEAD
  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Dispute Case</h1>
            <Badge variant={getStatusBadgeVariant(dispute.status)}>
              {dispute.status.replace('_ ')}
            </Badge>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

            </Button>
          )}
        </div>
      </div>

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <p className='text-muted-foreground'>
            Reported{' '}
            {formatDistanceToNow(new Date(dispute?.created_at |''), {
              addSuffix: true
            })}
          </p>
        </div>
        <div className='flex gap-2'>
<<<<<<< HEAD
========
        return 'outline'; // Changed from './success'; to "outline";
      case 'closed':;
        return 'outline';
      default:;
        return 'default';
            {formatDistanceToNow(new Date(dispute?.created_at || ''), {;
              addSuffix: true,;
            })}
          </p>;
        </div>;
        <div className='flex gap-2'>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Button
            variant='outline'
            onClick={() => router.push('/dashboard/disputes')}
          >
            Back to List
          </Button>
          {isAdmin && dispute?.status === 'open' && (
            <Button onClick={() => handleStatusChange('under_review')}>              Start Review
<<<<<<< HEAD
=======
=======
          <p className="text-muted-foreground">
            Reported {formatDistanceToNow(new Date(dispute?.created_at || ""), { addSuffix: true })}
          </p>
        </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className='flex gap-2'>
          <Button
            variant='outline'
            onClick={() => router.push('/dashboard/disputes')}
          >
            Back to List
          </Button>
          {isAdmin && dispute?.status === 'open' && (
            <Button onClick={() => handleStatusChange('under_review')}>              Start Review
<<<<<<< HEAD
>>>>>>>             </Button>
          )}
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx
        </div>
      </div>
            </Button>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
          )}



      {dispute.status === "resolved" && dispute.resolution_summary && (
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <Check className="h-4 w-4" />
          <AlertTitle>This dispute has been resolved</AlertTitle>
>>>>>>>           <AlertTitle>This dispute has been resolved</AlertTitle>
=======
=======
        
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => router.push("/dashboard/disputes")}>
            Back to List
          </Button>
          {isAdmin && dispute?.status === "open" && (
            <Button onClick={() => handleStatusChange("under_review")}>
              Start Review
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </Button>
          )}
        </div>
      </div>
<<<<<<< HEAD
      {dispute.status === 'resolved' && dispute.resolution_summary && (
        <Alert className='bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900'>
          <Check className='h-4 w-4' />
<<<<<<< HEAD
          <AlertTitle>This dispute has been resolved</AlertTitle>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <AlertDescription>{dispute.resolution_summary}</AlertDescription>
        </Alert>
      )}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2'>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

      {dispute.status === "resolved" && dispute.resolution_summary && (
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <Check className="h-4 w-4" />
          <AlertTitle>This dispute has been resolved</AlertTitle>
=======
          <AlertTitle>This dispute has been resolved</AlertTitle>
          <AlertDescription>{dispute.resolution_summary}</AlertDescription>
        </Alert>
      )}

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2'>
=======

      {dispute.status === "resolved" && dispute.resolution_summary && (
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <Check className="h-4 w-4" />
          <AlertTitle>This dispute has been resolved</AlertTitle>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <AlertDescription>
  },;
  if (isLoading) {;
    return (;
      <div className="p-8 text-center">;
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>;
        <p>Loading dispute details...</p>;
      </div>;
    );
  }
;
  if (!dispute) {;
    return (;
      <div className="p-8 text-center">;
        <p>Dispute not found</p>;
        <Button onClick={() => router.push("/dashboard/disputes")} className="mt-4">;
          Back to Disputes;
        </Button>;
      </div>;
    );
  }
;
  const getStatusBadgeVariant = (status: DisputeStatus) => {;
    switch (status) {;
      case "open": return "default",;
      case "under_review": return "secondary",;
      case "resolved": return "outline", // Changed from "success" to "outline";
      case "closed": return "outline",;
      default: return "default";
    }
  },;
  return (;
    <div className="container mx-auto p-4 space-y-6">;
      <div className="flex flex-wrap items-center justify-between gap-4">;
        <div>;
          <div className="flex items-center gap-2">;
            <h1 className="text-2xl font-bold">Dispute Case</h1>;
            <Badge variant={getStatusBadgeVariant(dispute.status)}>;
              {dispute.status.replace('_ ')}
            </Badge>;
          </div>;
          <p className="text-muted-foreground">;
            Reported {formatDistanceToNow(new Date(dispute?.created_at || ""), { addSuffix: true })}
          </p>;
        </div>;
        <div className="flex gap-2">;
          <Button variant="outline" onClick={() => router.push("/dashboard/disputes")}>;
            Back to List;
          </Button>;
          {isAdmin && dispute?.status === "open" && (;
            <Button onClick={() => handleStatusChange("under_review")}>;
              Start Review;
            </Button>;
          )}
        </div>;
      </div>;
      {dispute.status === "resolved" && dispute.resolution_summary && (;
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">;
          <Check className="h-4 w-4" />;
          <AlertTitle>This dispute has been resolved</AlertTitle>;
          <AlertDescription>;
            {dispute.resolution_summary}
          </AlertDescription>;
        </Alert>;
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
<<<<<<< HEAD
<<<<<<< HEAD

          <Tabs value={activeTab} onValueChange={setActiveTab}>
=======
>>>>>>>           <Tabs value={activeTab} onValueChange={setActiveTab}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <Tabs value={activeTab} onValueChange={setActiveTab}>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="attachments">Attachments</TabsTrigger>
              {isAdmin && <TabsTrigger value="admin">Admin Notes</TabsTrigger>}
            </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD

=======
            <TabsContent value='overview' className='space-y-6'>
>>>>>>>               <Card>
ursor/fix-website-loading-errors-and-merge-6662
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className='mb-6'>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='messages'>Messages</TabsTrigger>
              <TabsTrigger value='attachments'>Attachments</TabsTrigger>
              {isAdmin && <TabsTrigger value='admin'>Admin Notes</TabsTrigger>}
            </TabsList>


            
            <TabsContent value="overview" className="space-y-6">


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <Card>
>>>>>>>                 <CardHeader>
                  <CardTitle>Dispute Details</CardTitle>
                  <CardDescription>
                    Information about this dispute case
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
=======
            <TabsContent value='overview' className='space-y-6'>
=======
            
            <TabsContent value="overview" className="space-y-6">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <Card>
                <CardHeader>
                  <CardTitle>Dispute Details</CardTitle>
                  <CardDescription>Information about this dispute case</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <div>
                    <h3 className="font-medium">Reason</h3>
                    <p>{
                      disputeReasonLabels[
                        dispute.reason_code
                      ] ?? dispute.reason_code
                    }</p>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
                  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="whitespace-pre-wrap">{dispute.description}</p>
                  </div>
<<<<<<< HEAD

=======
>>>>>>>                   <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="whitespace-pre-wrap">{dispute.description}</p>
                  </div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <div>
                    <h3 className='font-medium'>Project</h3>
                    <p>{dispute.project?.title |'Unknown Project'}</p>
                    <p className='text-sm text-muted-foreground'>
                      {dispute.project?.scope_summary}
                    </p>
                  </div>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <div>
                    <h3 className='font-medium'>Description</h3>
                    <p className='whitespace-pre-wrap'>{dispute.description}</p>
                  </div>

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
    }
  }
  return (
    <div className='container mx - auto p - 4 space - y-6'>;
      <div className='flex flex - wrap items - center justify - between gap - 4'>;
        <div>;
          <div className='flex items - center gap - 2'>;
            <h1 className='text - 2xl font - bold'>Dispute Case</h1>;
            <Badge variant={getStatusBadgeVariant (dispute.status)}>;
              {dispute.status.replace ('_', ' ')}
            </Badge>;
          </div>;
          <p className='text - muted - foreground'>;
            Reported{' '}
            {formatDistanceToNow (new Date (dispute?.created_at || ''), {
              add_suffix: true,
            })}
          </p>;
        </div>;
        <div className='flex gap - 2'>;
          <Button;
            variant='outline';
            on_click={() => router.push ('/dashboard / disputes')}
          >;
            Back to List;
          </Button>;
          {is_admin && dispute?.status === 'open' && (
            <Button on_click={() => handleStatusChange ('under_review')}>              Start Review;
            </Button>)}
        </div>;
      </div>;
      {dispute.status === 'resolved' && dispute.resolution_summary && (
        <Alert className='bg - green - 50 border - green - 200 dark:bg - green - 900 / 20 dark:border - green - 900'>;
          <Check className='h - 4 w - 4' />;
          <AlertTitle > This dispute has been resolved</AlertTitle>;
          <AlertDescription>{dispute.resolution_summary}</AlertDescription>;
        </Alert>)}
      <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 6'>;
        <div className='lg:col - span - 2'>;
          <Tabs value={active_tab} onValueChange={setActiveTab}>;
            <TabsList className='mb - 6'>;
              <TabsTrigger value='overview'>Overview</TabsTrigger>;
              <TabsTrigger value='messages'>Messages</TabsTrigger>;
              <TabsTrigger value='attachments'>Attachments</TabsTrigger>;
              {is_admin && <TabsTrigger value='admin'>Admin Notes</TabsTrigger>}
            </TabsList>;
            <TabsContent value='overview' className='space - y-6'>;
              <Card>;
                <CardHeader>;
                  <CardTitle > Dispute Details</CardTitle>;
                  <CardDescription>;
                    Information about this dispute case;
                  </CardDescription>;
                </CardHeader>;
                <CardContent className='space - y-4'>;
                  <div>;
                    <h3 className='font - medium'>Reason</h3>;
                    <p>;
                      {disputeReasonLabels[dispute.reason_code] ??;
                        dispute.reason_code}
                    </p>;
                  </div>;
                  <div>;
                    <h3 className='font - medium'>Description</h3>;
                    <p className='whitespace - pre - wrap'>{dispute.description}</p>;
                  </div>;
                  <div>;
                    <h3 className='font - medium'>Project</h3>;
                    <p>{dispute.project?.title || 'Unknown Project'}</p>;
                    <p className='text - sm text - muted - foreground'>;
                      {dispute.project?.scope_summary}
                    </p>;
                  </div>;
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx


>>>>>>>                   
>>>>>>>                   <div>
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                  
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                  <div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <h3 className="font-medium">Project</h3>
                    <p>{dispute.project?.title || "Unknown Project"}</p>
                    <p className="text-sm text-muted-foreground">{dispute.project?.scope_summary}</p>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD

                  {dispute.milestone_id && (
=======
>>>>>>>                   {dispute.milestone_id && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  {dispute.milestone_id && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div>
                      <h3 className="font-medium">Related Milestone</h3>
                      <p className="text-sm">Milestone ID: {dispute.milestone_id}</p>
                    </div>
                  )}
<<<<<<< HEAD
<<<<<<< HEAD

                          <span>Under review</span>
                        </li>
                      )}

                      {dispute.resolved_at && (
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <div>
                    <h3 className='font-medium'>Timeline</h3>
                    <ul className='space-y-2 mt-2'>
                      <li className='flex gap-2 items-center'>
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
                  {dispute.milestone_id && (
                    <div>;
                      <h3 className='font - medium'>Related Milestone</h3>;
                      <p className='text - sm'>;
                        Milestone ID: {dispute.milestone_id}
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
        </div>;
      </div>;
      {dispute && dispute.status === 'resolved' && dispute && dispute.resolution_summary && (;
        <Alert className='bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900'>;
          <Check className='h-4 w-4' />;
          <AlertTitle>This dispute has been resolved</AlertTitle>;
          <AlertDescription>{dispute && dispute.resolution_summary}</AlertDescription>;
        </Alert>;
      )}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>;
        <div className='lg:col-span-2'>;
          <Tabs value={activeTab} onValueChange={setActiveTab}>;
            <TabsList className='mb-6'>;
              <TabsTrigger value='overview'>Overview</TabsTrigger>;
              <TabsTrigger value='messages'>Messages</TabsTrigger>;
              <TabsTrigger value='attachments'>Attachments</TabsTrigger>;
              {isAdmin && <TabsTrigger value='admin'>Admin Notes</TabsTrigger>}
            </TabsList>;
            <TabsContent value='overview' className='space-y-6'>;
              <Card>;
                <CardHeader>;
                  <CardTitle>Dispute Details</CardTitle>;
                  <CardDescription>;
                    Information about this dispute case;
                  </CardDescription>;
                </CardHeader>;
                <CardContent className='space-y-4'>;
                  <div>;
                    <h3 className='font-medium'>Reason</h3>;
                    <p>;
                      {disputeReasonLabels[dispute && dispute.reason_code] ??;
                        dispute && dispute.reason_code}
                    </p>;
                  </div>;
                  <div>;
                    <h3 className='font-medium'>Description</h3>;
                    <p className='whitespace-pre-wrap'>{dispute && dispute.description}</p>;
                  </div>;
                  <div>;
                    <h3 className='font-medium'>Project</h3>;
                    <p>{dispute && dispute.project?.title || 'Unknown Project'}</p>;
                    <p className='text-sm text-muted-foreground'>;
                      {dispute && dispute.project?.scope_summary}
                    </p>;
                  </div>;
                  {dispute && dispute.milestone_id && (;
                    <div>;
                      <h3 className='font-medium'>Related Milestone</h3>;
                      <p className='text-sm'>;
                        Milestone ID: {dispute && dispute.milestone_id}
                      </p>;
                    </div>;
                  )}
                  <div>;
                    <h3 className='font-medium'>Timeline</h3>;
                    <ul className='space-y-2 mt-2'>;
                      <li className='flex gap-2 items-center'>;
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

>>>>>>>                         <Badge
========
                        <Badge
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
                          variant='outline'
                          className='h-6 w-6 rounded-full p-0 flex items-center justify-center'>;
                      </p>;
                    </div>)}
                  <div>;
                    <h3 className='font - medium'>Timeline</h3>;
                    <ul className='space - y-2 mt - 2'>;
                      <li className='flex gap - 2 items - center'>;
                        <Badge;
                          variant='outline';
                          className='h - 6 w - 6 rounded - full p - 0 flex items - center justify - center';
                        >;
                          1;
                        </Badge>;
                        <span>;
                          Created on{' '}
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
                          {format(;
                            new Date(dispute && dispute.created_at),;
                            "MMM d, yyyy 'at' h:mm a";
                          )}
                        </span>;
                      </li>;
                      {dispute && dispute.status !== 'open' && (;
                        <li className='flex gap-2 items-center'>;
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
                          <Badge
                            variant='outline'
                            className='h-6 w-6 rounded-full p-0 flex items-center justify-center'>;
                            2;
                          </Badge>;
                          <span>Under review</span>;
                        </li>;
                      )}
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx
=======
                        <Badge
                          variant='outline'
                          className='h-6 w-6 rounded-full p-0 flex items-center justify-center'
                        >
                          1
                        </Badge>
                        <span>
                          Created on{' '}
                          {format(
                            new Date(dispute.created_at)
                            "MMM d, yyyy 'at' h:mm a"
                          )}
                        </span>
                      </li>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      {dispute.status !== 'open' && (
                        <li className='flex gap-2 items-center'>
                          <Badge
                            variant='outline'
                            className='h-6 w-6 rounded-full p-0 flex items-center justify-center'
                          >
                            2
                          </Badge>
                          <span>Under review</span>
                        </li>
                      )}
<<<<<<< HEAD
                      
>>>>>>>                       {dispute.resolved_at && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                  
                  <div>
                    <h3 className="font-medium">Timeline</h3>
                    <ul className="space-y-2 mt-2">
                      <li className="flex gap-2 items-center">
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1</Badge>
                        <span>Created on {format(new Date(dispute.created_at), "MMM d, yyyy 'at' h:mm a")}</span>
                      </li>
<<<<<<< HEAD
                      {dispute.status !== 'open' && (
                        <li className='flex gap-2 items-center'>
                          <Badge
                            variant='outline'
                            className='h-6 w-6 rounded-full p-0 flex items-center justify-center'
                          >
                            2
                          </Badge>
=======
                      
                      {dispute.status !== "open" && (
                        <li className="flex gap-2 items-center">
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                          <span>Under review</span>
                        </li>
                      )}
                      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                      {dispute.resolved_at && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        <li className="flex gap-2 items-center">
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
                            {dispute.status !== "open" ? "3" : "2"}
                          </Badge>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          <span>
                            Resolved on{' '}
                            {format(
                              new Date(dispute.resolved_at)
                              "MMM d, yyyy 'at' h:mm a"
<<<<<<< HEAD
========
                      {dispute && dispute.resolved_at && (;
                        <li className='flex gap-2 items-center'>;
                          <Badge
                            variant='outline'
                            className='h-6 w-6 rounded-full p-0 flex items-center justify-center'>;
                            {dispute && dispute.status !== 'open' ? '3' : '2'}
                          </Badge>;
                          <span>;
                            Resolved on{' '}
                            {format(;
                              new Date(dispute && dispute.resolved_at),;
                              "MMM d, yyyy 'at' h:mm a";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
                            )}
                          </span>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        </li>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                      )}
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx
=======
                            )}
                          </span>
=======
                          <span>Resolved on {format(new Date(dispute.resolved_at), "MMM d, yyyy 'at' h:mm a")}</span>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                        </li>
                      )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </ul>
                  </div>
                </CardContent>
              </Card>
<<<<<<< HEAD
<<<<<<< HEAD

                <Card>
=======
              {dispute.status === 'resolved' && (
>>>>>>>                 <Card>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              {dispute.status === 'resolved' && (
=======
              
              {dispute.status === "resolved" && (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <Card>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <CardHeader>
                    <CardTitle>Resolution</CardTitle>
                  </CardHeader>
                  <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD

                    {dispute.resolution_type && (
                      <div className="mt-4">
                        <Badge>

                    )}
=======
                    <p className='whitespace-pre-wrap'>
                      {dispute.resolution_summary}
                    </p>
>>>>>>>                     {dispute.resolution_type && (
                      <div className="mt-4">
                        <Badge>
=======
                    <p className='whitespace-pre-wrap'>
                      {dispute.resolution_summary}
                    </p>
=======
                    <p className="whitespace-pre-wrap">{dispute.resolution_summary}</p>
                    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    {dispute.resolution_type && (
                      <div className="mt-4">
                        <Badge>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          Resolution:{' '}
                          {dispute.resolution_type.replace('_', ' ')}
                        </Badge>
                      </div>
<<<<<<< HEAD
>>>>>>>                     )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                          Resolution: {dispute.resolution_type.replace('_ ')}
                        </Badge>;
                      </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </CardContent>
                </Card>
              )}
            </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD

=======
            <TabsContent value='messages' className='space-y-6'>
>>>>>>>               <Card>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                    {dispute.resolution_type && (
                      <div className='mt-4'>
                        <Badge>

========
                          {format (
                            new Date (dispute.created_at),
                            "MMM d, yyyy 'at' h:mm a")}
                        </span>;
                      </li>;
                      {dispute.status !== 'open' && (
                        <li className='flex gap - 2 items - center'>;
                          <Badge;
                            variant='outline';
                            className='h - 6 w - 6 rounded - full p - 0 flex items - center justify - center';
                          >;
                            2;
                          </Badge>;
                          <span > Under review</span>;
                        </li>)}
                      {dispute.resolved_at && (
                        <li className='flex gap - 2 items - center'>;
                          <Badge;
                            variant='outline';
                            className='h - 6 w - 6 rounded - full p - 0 flex items - center justify - center';
                          >;
                            {dispute.status !== 'open' ? '3' : '2'}
                          </Badge>;
                          <span>;
                            Resolved on{' '}
                            {format (
                              new Date (dispute.resolved_at),
                              "MMM d, yyyy 'at' h:mm a")}
                          </span>;
                        </li>)}
=======
;
  if (!dispute) {;
    return (;
      <div className="p-8 text-center">;
        <p>Dispute not found</p>;
        <Button onClick={() => router.push("/dashboard/disputes")} className="mt-4">;
          Back to Disputes;
        </Button>;
      </div>;
    ),;
  }
;
  const getStatusBadgeVariant = (status:DisputeStatus) => {;
    switch (status) {;
      case "open":return "default",;
      case "under_review":return "secondary",;
      case "resolved":return "outline", // Changed from "success" to "outline";
      case "closed":return "outline",;
      default:return "default";
    }
  },;
;
  return (;
    <div className="container mx-auto p-4 space-y-6">;
      <div className="flex flex-wrap items-center justify-between gap-4">;
        <div>;
          <div className="flex items-center gap-2">;
            <h1 className="text-2xl font-bold">Dispute Case</h1>;
            <Badge variant={getStatusBadgeVariant(dispute.status)}>;
              {dispute.status.replace('_ ')}
            </Badge>;
          </div>;
          <p className="text-muted-foreground">;
            Reported {formatDistanceToNow(new Date(dispute?.created_at || ""), { addSuffix:true })}
          </p>;
        </div>;
        ;
        <div className="flex gap-2">;
          <Button variant="outline" onClick={() => router.push("/dashboard/disputes")}>;
            Back to List;
          </Button>;
          {isAdmin && dispute?.status === "open" && (;
            <Button onClick={() => handleStatusChange("under_review")}>;
              Start Review;
            </Button>;
          )}
        </div>;
      </div>;
;
      {dispute.status === "resolved" && dispute.resolution_summary && (;
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">;
          <Check className="h-4 w-4" />;
          <AlertTitle>This dispute has been resolved</AlertTitle>;
          <AlertDescription>;
            {dispute.resolution_summary}
          </AlertDescription>;
        </Alert>;
      )}
      ;
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
        <div className="lg:col-span-2">;
          <Tabs value={activeTab} onValueChange={setActiveTab}>;
            <TabsList className="mb-6">;
              <TabsTrigger value="overview">Overview</TabsTrigger>;
              <TabsTrigger value="messages">Messages</TabsTrigger>;
              <TabsTrigger value="attachments">Attachments</TabsTrigger>;
              {isAdmin && <TabsTrigger value="admin">Admin Notes</TabsTrigger>}
            </TabsList>;
            ;
            <TabsContent value="overview" className="space-y-6">;
              <Card>;
                <CardHeader>;
                  <CardTitle>Dispute Details</CardTitle>;
                  <CardDescription>Information about this dispute case</CardDescription>;
                </CardHeader>;
                <CardContent className="space-y-4">;
                  <div>;
                    <h3 className="font-medium">Reason</h3>;
                    <p>{;
                      disputeReasonLabels[;
                        dispute.reason_code;
                      ] ?? dispute.reason_code;
                    }</p>;
                  </div>;
                  ;
                  <div>;
                    <h3 className="font-medium">Description</h3>;
                    <p className="whitespace-pre-wrap">{dispute.description}</p>;
                  </div>;
                  ;
                  <div>;
                    <h3 className="font-medium">Project</h3>;
                    <p>{dispute.project?.title || "Unknown Project"}</p>;
                    <p className="text-sm text-muted-foreground">{dispute.project?.scope_summary}</p>;
                  </div>;
                  ;
                  {dispute.milestone_id && (;
                    <div>;
                      <h3 className="font-medium">Related Milestone</h3>;
                      <p className="text-sm">Milestone ID:{dispute.milestone_id}</p>;
                    </div>;
                  )}
                  ;
                  <div>;
                    <h3 className="font-medium">Timeline</h3>;
                    <ul className="space-y-2 mt-2">;
                      <li className="flex gap-2 items-center">;
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1</Badge>;
                        <span>Created on {format(new Date(dispute.created_at), "MMM d, yyyy 'at' h:mm a")}</span>;
                      </li>;
                      ;
                      {dispute.status !== "open" && (;
                        <li className="flex gap-2 items-center">;
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>;
                          <span>Under review</span>;
                        </li>;
                      )}
                      ;
                      {dispute.resolved_at && (;
                        <li className="flex gap-2 items-center">;
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">;
                            {dispute.status !== "open" ? "3" :"2"}
                          </Badge>;
                          <span>Resolved on {format(new Date(dispute.resolved_at), "MMM d, yyyy 'at' h:mm a")}</span>;
                        </li>;
                      )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </ul>;
                  </div>;
                </CardContent>;
              </Card>;
<<<<<<< HEAD
              {dispute.status === 'resolved' && (
                <Card>;
                  <CardHeader>;
                    <CardTitle > Resolution</CardTitle>;
                  </CardHeader>;
                  <CardContent>;
                    <p className='whitespace - pre - wrap'>;
                      {dispute.resolution_summary}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
                    </ul>;
                  </div>;
                </CardContent>;
              </Card>;
              {dispute && dispute.status === 'resolved' && (;
=======
              ;
              {dispute.status === "resolved" && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <Card>;
                  <CardHeader>;
                    <CardTitle>Resolution</CardTitle>;
                  </CardHeader>;
                  <CardContent>;
<<<<<<< HEAD
                    <p className='whitespace-pre-wrap'>;
                      {dispute && dispute.resolution_summary}
                    </p>;
                    {dispute && dispute.resolution_type && (;
                      <div className='mt-4'>;
                        <Badge>;
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
                          Resolution:{' '}
                          {dispute && dispute.resolution_type.replace('_', ' ')}
                        </Badge>;
                      </div>;
                          Resolution: {dispute.resolution_type.replace('_ ')}
                        </Badge>;
                      </div>;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                    )}
=======
                    <p className="whitespace-pre-wrap">{dispute.resolution_summary}</p>;
                    ;
                    {dispute.resolution_type && (;
                      <div className="mt-4">;
                        <Badge>;
                          Resolution:{dispute.resolution_type.replace('_ ')}
                        </Badge>;
                      </div>;                    )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </CardContent>;
                </Card>;
              )}
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx


            
            <TabsContent value="messages" className="space-y-6">


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <Card>
>>>>>>>                 <CardHeader>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>
                    Communication regarding this dispute
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-6 max-h-[600px] overflow-y-auto p-2'>
                    {messages.length === 0 ? (
                      <div className='text-center py-12'>
                        <MessageSquare className='mx-auto h-12 w-12 text-muted-foreground mb-2' />
                        <p className='text-muted-foreground'>No messages yet</p>
=======
            <TabsContent value='messages' className='space-y-6'>
=======
            
            <TabsContent value="messages" className="space-y-6">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <Card>
                <CardHeader>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>Communication regarding this dispute</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 max-h-[600px] overflow-y-auto p-2">
                    {messages.length === 0 ? (
                      <div className="text-center py-12">
                        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">No messages yet</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </div>
                    ) : (
                      messages
                        .filter(msg => !msg.is_admin_note)
<<<<<<< HEAD
<<<<<<< HEAD

                    )}
=======
                        .map(msg => {
                          const isCurrentUser = user?.id === msg.user_id
                                                      >
========
            </TabsContent>;
<<<<<<< HEAD
            <TabsContent value='messages' className='space-y-6'>;
              <Card>;
                <CardHeader>;
                  <CardTitle>Messages</CardTitle>;
                  <CardDescription>;
                    Communication regarding this dispute;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <div className='space-y-6 max-h-[600px] overflow-y-auto p-2'>;
                    {messages && messages.length === 0 ? (;
                      <div className='text-center py-12'>;
                        <MessageSquare className='mx-auto h-12 w-12 text-muted-foreground mb-2' />;
                        <p className='text-muted-foreground'>No messages yet</p>;
                      </div>;
                    ) : (;
                      messages;
                        .filter(msg => !msg && msg.is_admin_note);
                        .map(msg => {;
                          const isCurrentUser = user?.id === msg && msg.user_id;
                                                      >;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
=======
                        .map(msg => {
                          const isCurrentUser = user?.id === msg.user_id
                                                      >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                              <div
                                className={`max-w-[80%] ${
                                  isCurrentUser
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted'
<<<<<<< HEAD
                                } p-4 rounded-lg`}>;
                                <div className='flex items-center gap-2 mb-2'>;
                                  <Avatar className='h-6 w-6'>;
                                    <AvatarImage
                                      src={msg && msg.user_profile?.avatar_url}
                                      alt={
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

                                        msg && msg.user_profile?.display_name ||
=======
                                } p-4 rounded-lg`}
                              >
                                <div className='flex items-center gap-2 mb-2'>
                                  <Avatar className='h-6 w-6'>
                                    <AvatarImage
                                      src={msg.user_profile?.avatar_url}
                                      alt={
                                        msg.user_profile?.display_name |
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                                        'User avatar'
                                      }
                                    />
                                    <AvatarFallback>
                                      {msg.user_profile?.display_name?.[0] |
                                        '?'}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className='text-sm font-medium'>
                                    {msg.user_profile?.display_name |
                                      'Unknown User'}
                                  </span>
                                  <span className='text-xs opacity-70'>
                                    {format(
                                      new Date(msg.created_at)
                                      'MMM d, h:mm a'
                                    )}
                                  </span>
                                </div>
                                <p className='whitespace-pre-wrap'>
                                  {msg.message}
                                </p>
                              </div>
                            </div>
                          )
                        })
<<<<<<< HEAD
>>>>>>>                     )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full space-y-4">
                    <Textarea
<<<<<<< HEAD

=======
                      placeholder='Type your message here...'
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className='min-h-[100px]'
                      disabled={isSending}                    />
                    <div className='flex justify-end'>
                      <Button
                        onClick={handleSendMessage}
                        disabled={isSending |!message.trim()}
                      >
                        {isSending ? 'Sending...' : 'Send Message'}
>>>>>>>                       </Button>
ursor/fix-website-loading-errors-and-merge-6662
========
                                        msg && msg.user_profile?.display_name ||
                                        'User avatar'
                                      }
                                    />;
                                    <AvatarFallback>;
                                      {msg && msg.user_profile?.display_name?.[0] ||;
                                        '?'}
                                    </AvatarFallback>;
                                  </Avatar>;
                                  <span className='text-sm font-medium'>;
                                    {msg && msg.user_profile?.display_name ||;
                                      'Unknown User'}
                                  </span>;
                                  <span className='text-xs opacity-70'>;
                                    {format(;
                                      new Date(msg && msg.created_at),;
                                      'MMM d, h:mm a';
                                    )}
                                  </span>;
                                </div>;
                                <p className='whitespace-pre-wrap'>;
                                  {msg && msg.message}
                                </p>;
                              </div>;
                            </div>;
                          );
=======
            ;
            <TabsContent value="messages" className="space-y-6">;
              <Card>;
                <CardHeader>;
                  <CardTitle>Messages</CardTitle>;
                  <CardDescription>Communication regarding this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <div className="space-y-6 max-h-[600px] overflow-y-auto p-2">;
                    {messages.length === 0 ? (;
                      <div className="text-center py-12">;
                        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" />;
                        <p className="text-muted-foreground">No messages yet</p>;
                      </div>;
                    ) :(;
                      messages;
                        .filter(msg => !msg.is_admin_note);
                        .map((msg) => {;
                          const isCurrentUser = user?.id === msg.user_id,;
                          return (;
                            <div;
                              key={msg.id}
                              className={`flex ${isCurrentUser ? 'justify-end' :'justify-start'}`}
=======
=======
                        .map((msg) => {
                          const isCurrentUser = user?.id === msg.user_id,
                          return (
                            <div
                              key={msg.id}
                              className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                            >;
                              <div;
                                className={`max-w-[80%] ${;
                                  isCurrentUser;
                                    ? 'bg-primary text-primary-foreground';
<<<<<<< HEAD
                                    :'bg-muted';
=======
                                    : 'bg-muted';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                                } p-4 rounded-lg`}
                              >;
                                <div className="flex items-center gap-2 mb-2">;
                                  <Avatar className="h-6 w-6">;
                                    <AvatarImage src={msg.user_profile?.avatar_url} alt={msg.user_profile?.display_name || "User avatar"} />;
                                    <AvatarFallback>;
                                      {msg.user_profile?.display_name?.[0] || '?'}
                                    </AvatarFallback>;
                                  </Avatar>;
                                  <span className="text-sm font-medium">;
                                    {msg.user_profile?.display_name || 'Unknown User'}
                                  </span>;
                                  <span className="text-xs opacity-70">;
                                    {format(new Date(msg.created_at), 'MMM d, h:mm a')}
                                  </span>;
                                </div>;
                                <p className="whitespace-pre-wrap">{msg.message}</p>;
                              </div>;
                            </div>;
<<<<<<< HEAD
                          ),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        });
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
                    )}
                  </div>;
                </CardContent>;
                <CardFooter>;
<<<<<<< HEAD
                  <div className='w-full space-y-4'>;
                    <Textarea


                      placeholder="Type your message here..."
                      value={message}
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx
=======
                          );
                        });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full space-y-4">
                    <Textarea
<<<<<<< HEAD
                      placeholder='Type your message here...'
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className='min-h-[100px]'
                      disabled={isSending}                    />
                    <div className='flex justify-end'>
                      <Button
                        onClick={handleSendMessage}
                        disabled={isSending |!message.trim()}
                      >
                        {isSending ? 'Sending...' : 'Send Message'}
=======
                      placeholder="Type your message here..."
                      value={message}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[100px]";
                      disabled={isSending}
                    />
                    <div className="flex justify-end">
                      <Button onClick={handleSendMessage} disabled={isSending || !message.trim()}>
                        {isSending ? "Sending..." : "Send Message"}
<<<<<<< HEAD


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      </Button>
>>>>>>>                     </div>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      </Button>
                    </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD

=======
            <TabsContent value='attachments'>
>>>>>>>               <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <Card>
>>>>>>>                 <CardHeader>
                  <CardTitle>Attachments</CardTitle>
                  <CardDescription>
                    Files related to this dispute
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='text-center py-12'>
                    <Download className='mx-auto h-12 w-12 text-muted-foreground mb-2' />
                    <p className='text-muted-foreground'>
                      No attachments available
                    </p>
=======
            <TabsContent value='attachments'>
=======
            
            <TabsContent value="attachments">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <Card>
                <CardHeader>
                  <CardTitle>Attachments</CardTitle>
                  <CardDescription>Files related to this dispute</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">No attachments available</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD

            {isAdmin && (
=======
>>>>>>>             {isAdmin && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <TabsContent value="admin" className="space-y-6">
ursor/fix-website-loading-errors-and-merge-6662
            {isAdmin && (
              <TabsContent value='admin' className='space-y-6'>
>>>>>>>                 <Card>
                  <CardHeader>
                    <CardTitle>Admin Actions</CardTitle>
                    <CardDescription>
                      Handle this dispute as an administrator
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-6'>
                    <div>
<<<<<<< HEAD

                        >
=======
=======
=======
            
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {isAdmin && (
              <TabsContent value="admin" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Admin Actions</CardTitle>
                    <CardDescription>Handle this dispute as an administrator</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <h3 className='font-medium mb-2'>Change Status</h3>
                      <div className='flex gap-2'>
                        <Button
                          variant='outline'
                          onClick={() => handleStatusChange('open')}
                          disabled={dispute.status === 'open'}
<<<<<<< HEAD
>>>>>>>                         >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                          Mark as Open
                        </Button>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                        <Button
                          variant='outline'
                          onClick={() => handleStatusChange('under_review')}
                          disabled={dispute && dispute.status === 'under_review'}
                        >;
                          Mark as Under Review;
                        </Button>;
=======
=======
                      <h3 className="font-medium mb-2">Change Status</h3>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          onClick={() => handleStatusChange("open")}
                          disabled={dispute.status === "open"}
                        >
                          Mark as Open
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => handleStatusChange("under_review")}
                          disabled={dispute.status === "under_review"}
                        >
                          Mark as Under Review
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => handleStatusChange("closed")}
                          disabled={dispute.status === "closed"}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        >
                          Mark as Open
                        </Button>
                        <Button
                          variant='outline'
                          onClick={() => handleStatusChange('under_review')}
                          disabled={dispute.status === 'under_review'}
                        >
                          Mark as Under Review
                        </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        <Button
                          variant='outline'
                          onClick={() => handleStatusChange('closed')}
                          disabled={dispute.status === 'closed'}                        >
                          Close Dispute
                        </Button>
                      </div>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
                    {dispute.status !== 'resolved' && (
=======
                    
                    {dispute.status !== "resolved" && (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <div>
                        <h3 className="font-medium mb-2">Resolve Dispute</h3>
                        <div className="space-y-4">
                          <Textarea
<<<<<<< HEAD

                            <div>
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>
                              <select

                                className="w-full p-2 border rounded"
=======
                    {dispute.status !== 'resolved' && (
>>>>>>>                       <div>
                        <h3 className="font-medium mb-2">Resolve Dispute</h3>
                        <div className="space-y-4">
                          <Textarea
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                            placeholder='Enter resolution summary...'
                            value={resolution.summary}
                            onChange={e =>
                              setResolution({
                                ...resolution
                                summary: e.target.value
                              })
                            }
                            className='min-h-[100px]'                          />
                          <div className='grid grid-cols-2 gap-4'>
<<<<<<< HEAD
>>>>>>>                             <div>
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>
                              <select
                        </div>
                      </div>
                    )}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                            <div>
                              <label className='text-sm font-medium mb-1 block'>
                                Resolution Type
                              </label>
                              <select



>>>>>>>                                 className="w-full p-2 border rounded"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                            placeholder="Enter resolution summary..."
                            value={resolution.summary}
                            onChange={(e) => setResolution({ ...resolution, summary: e.target.value })}
                            className="min-h-[100px]"
                          />
                          
                          <div className="grid grid-cols-2 gap-4">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                            <div>
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>
                              <select
<<<<<<< HEAD
                                className='w-full p-2 border rounded'
                                value={resolution.resolution_type |''}
                                onChange={e =>
                                  setResolution({
                                    ...resolution
                                    resolution_type: e.target
                                      .value as ResolutionType
                                  })
                                }                              >
                                <option value='client_favor'>
                                  In Client's Favor
                                </option>
                                <option value='talent_favor'>
                                  In Talent's Favor
                                </option>
                                <option value='compromise'>Compromise</option>
                                <option value='dismissed'>Dismissed</option>
                              </select>
                            </div>
                          </div>
                          <Button onClick={handleResolveDispute}>
                            Resolve Dispute
                          </Button>
<<<<<<< HEAD
                        </div>
                      </div>
                    )}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                                className="w-full p-2 border rounded"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                                value={resolution.resolution_type || ""}
                                onChange={(e) => setResolution({ ...resolution, resolution_type: e.target.value as ResolutionType })}
                              >
                                <option value="client_favor">In Client's Favor</option>
                                <option value="talent_favor">In Talent's Favor</option>
                                <option value="compromise">Compromise</option>
                                <option value="dismissed">Dismissed</option>
                              </select>
                            </div>
                          </div>
                          
                          <Button onClick={handleResolveDispute}>Resolve Dispute</Button>
<<<<<<< HEAD
<<<<<<< HEAD

                        </div>
                      </div>
                    )}

                    <div>
=======
>>>>>>>                         </div>
                      </div>
                    )}
                    
>>>>>>>                     <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                        </div>
                      </div>
                    )}
                    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                    <div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <h3 className="font-medium mb-2">Admin Notes</h3>
                      <div className="space-y-4 max-h-[300px] overflow-y-auto p-2">
                        {messages
                          .filter(msg => msg.is_admin_note)
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          .map(msg => (
                            <div
                              key={msg.id}
                              className='bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900'
                            >
                              <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center gap-2'>
                                  <Avatar className='h-6 w-6'>
                                    <AvatarImage
                                      src={msg.user_profile?.avatar_url}
                                      alt={
                                        msg.user_profile?.display_name |
                                        'Admin avatar'
                                      }
                                    />
                                    <AvatarFallback>
                                      {msg.user_profile?.display_name?.[0] |
                                        'A'}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className='text-sm font-medium'>
                                    {msg.user_profile?.display_name |'Admin'}
                                  </span>
                                </div>
                                <span className='text-xs opacity-70'>
                                  {format(
                                    new Date(msg.created_at)
                                    'MMM d, h:mm a'
                                  )}                                </span>
<<<<<<< HEAD
>>>>>>>                               </div>
                              <span className="text-xs opacity-70">
                                {format(new Date(msg.created_at), 'MMM d, h:mm a')}
                              </span>
                            </div>
                          ))}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                    <div>
                      <h3 className='font-medium mb-2'>Admin Notes</h3>
                      <div className='space-y-4 max-h-[300px] overflow-y-auto p-2'>
                        {messages
                          .filter(msg => msg.is_admin_note)

========
                      onChange={e => setMessage(e && e.target.value)}
                      className='min-h-[100px]';
                      disabled={isSending}                    />;
                    <div className='flex justify-end'>;
                      <Button
                        onClick={handleSendMessage}
                        disabled={isSending || !message && message.trim()}>;
                        {isSending ? 'Sending...' : 'Send Message'}
                    </p>;
                    {dispute.resolution_type && (
                      <div className='mt - 4'>;
                        <Badge>;
                          Resolution:{' '}
                          {dispute.resolution_type.replace ('_', ' ')}
                        </Badge>;
                      </div>)}
                  </CardContent>;
                </Card>)}
            </TabsContent>;
            <TabsContent value='messages' className='space - y-6'>;
              <Card>;
                <CardHeader>;
                  <CardTitle > Messages</CardTitle>;
                  <CardDescription>;
                    Communication regarding this dispute;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <div className='space - y-6 max - h-[600px] overflow - y-auto p - 2'>;
                    {messages.length === 0 ? (
                      <div className='text - center py - 12'>;
                        <MessageSquare className='mx - auto h - 12 w - 12 text - muted - foreground mb - 2' />;
                        <p className='text - muted - foreground'>No messages yet</p>;
                      </div>) : (
                      messages;
                        .filter (msg => !msg.is_admin_note);
                        .map (msg => {
                          const isCurrentUser = user?.id === msg.user_id;
                                                      >;
                              <div;
                                className={`max - w-[80%] ${
                                  isCurrentUser;
                                    ? 'bg - primary text - primary - foreground';
                                    : 'bg - muted';
                                } p - 4 rounded - lg`}
                              >;
                                <div className='flex items - center gap - 2 mb - 2'>;
                                  <Avatar className='h - 6 w - 6'>;
                                    <AvatarImage;
                                      src={msg.user_profile?.avatar_url}
                                      alt={
                                        msg.user_profile?.display_name ||;
                                        'User avatar';
                                      }
                                    />;
                                    <AvatarFallback>;
                                      {msg.user_profile?.display_name?.[0] ||;
                                        '?'}
                                    </AvatarFallback>;
                                  </Avatar>;
                                  <span className='text - sm font - medium'>;
                                    {msg.user_profile?.display_name ||;
                                      'Unknown User'}
                                  </span>;
                                  <span className='text - xs opacity - 70'>;
                                    {format (
                                      new Date (msg.created_at),
                                      'MMM d, h:mm a')}
                                  </span>;
                                </div>;
                                <p className='whitespace - pre - wrap'>;
                                  {msg.message}
                                </p>;
                              </div>;
                            </div>);
                        }))}
                  </div>;
                </CardContent>;
                <CardFooter>;
                  <div className='w - full space - y-4'>;
                    <Textarea;
                      placeholder='Type your message here...';
                      value={message}
                      on_change={e => set_message (e.target.value)}
                      className='min - h-[100px]';
                      disabled={is_sending}                    />;
                    <div className='flex justify - end'>;
                      <Button;
                        on_click={handleSendMessage}
                        disabled={is_sending || !message.trim ()}
                      >;
                        {is_sending ? 'Sending...' : 'Send Message'}
=======
                  <div className="w-full space-y-4">;
                    <Textarea;
                      placeholder="Type your message here...";
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[100px]";
                      disabled={isSending}
                    />;
                    <div className="flex justify-end">;
                      <Button onClick={handleSendMessage} disabled={isSending || !message.trim()}>;
                        {isSending ? "Sending..." :"Send Message"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      </Button>;
                    </div>;
                  </div>;
                </CardFooter>;
              </Card>;
            </TabsContent>;
<<<<<<< HEAD
            <TabsContent value='attachments'>;
              <Card>;
                <CardHeader>;
                  <CardTitle > Attachments</CardTitle>;
                  <CardDescription>;
                    Files related to this dispute;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <div className='text - center py - 12'>;
                    <Download className='mx - auto h - 12 w - 12 text - muted - foreground mb - 2' />;
                    <p className='text - muted - foreground'>;
                      No attachments available;
                    </p>;
=======
            ;
            <TabsContent value="attachments">;
              <Card>;
                <CardHeader>;
                  <CardTitle>Attachments</CardTitle>;
                  <CardDescription>Files related to this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <div className="text-center py-12">;
                    <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" />;
                    <p className="text-muted-foreground">No attachments available</p>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </div>;
                </CardContent>;
              </Card>;
            </TabsContent>;
<<<<<<< HEAD
            {is_admin && (
              <TabsContent value='admin' className='space - y-6'>;
                <Card>;
                  <CardHeader>;
                    <CardTitle > Admin Actions</CardTitle>;
                    <CardDescription>;
                      Handle this dispute as an administrator;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent className='space - y-6'>;
                    <div>;
                      <h3 className='font - medium mb - 2'>Change Status</h3>;
                      <div className='flex gap - 2'>;
                        <Button;
                          variant='outline';
                          on_click={() => handleStatusChange ('open')}
                          disabled={dispute.status === 'open'}
                        >;
                          Mark as Open;
                        </Button>;
                        <Button;
                          variant='outline';
                          on_click={() => handleStatusChange ('under_review')}
                          disabled={dispute.status === 'under_review'}
                        >;
                          Mark as Under Review;
                        </Button>;
                        <Button;
                          variant='outline';
                          on_click={() => handleStatusChange ('closed')}
                          disabled={dispute.status === 'closed'}                        >;
=======
            ;
            {isAdmin && (;
              <TabsContent value="admin" className="space-y-6">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Admin Actions</CardTitle>;
                    <CardDescription>Handle this dispute as an administrator</CardDescription>;
                  </CardHeader>;
                  <CardContent className="space-y-6">;
                    <div>;
                      <h3 className="font-medium mb-2">Change Status</h3>;
                      <div className="flex gap-2">;
                        <Button ;
                          variant="outline" ;
                          onClick={() => handleStatusChange("open")}
                          disabled={dispute.status === "open"}
                        >;
                          Mark as Open;
                        </Button>;
                        <Button ;
                          variant="outline" ;
                          onClick={() => handleStatusChange("under_review")}
                          disabled={dispute.status === "under_review"}
                        >;
                          Mark as Under Review;
                        </Button>;
                        <Button ;
                          variant="outline" ;
                          onClick={() => handleStatusChange("closed")}
                          disabled={dispute.status === "closed"}
                        >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          Close Dispute;
                        </Button>;
                      </div>;
                    </div>;
<<<<<<< HEAD
                    {dispute.status !== 'resolved' && (
                      <div>;
                        <h3 className='font - medium mb - 2'>Resolve Dispute</h3>;
                        <div className='space - y-4'>;
                          <Textarea;
                            placeholder='Enter resolution summary...';
                            value={resolution.summary}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
                          disabled={dispute && dispute.status === 'closed'}                        >;
                          Close Dispute;
                        </Button>;
                      </div>;
                    </div>;
                    {dispute && dispute.status !== 'resolved' && (;
                      <div>;
                        <h3 className='font-medium mb-2'>Resolve Dispute</h3>;
                        <div className='space-y-4'>;
                          <Textarea
                            placeholder='Enter resolution summary...'
                            value={resolution && resolution.summary}
                            onChange={e =>;
                              setResolution({;
                                ...resolution,;
                                summary: e && e.target.value,;
                              });
                            }
                            className='min-h-[100px]'                          />;
                          <div className='grid grid-cols-2 gap-4'>;
                            <div>;
                              <label className='text-sm font-medium mb-1 block'>;
                                Resolution Type;
                              </label>;
                              <select
                                className='w-full p-2 border rounded'
                                value={resolution && resolution.resolution_type || ''}
                                onChange={e =>;
                                  setResolution({;
                                    ...resolution,;
                                    resolution_type: e && e.target;
                                      .value as ResolutionType,;
                            on_change={e =>;
                              set_resolution ({
                                ...resolution,
                                summary: e.target.value,
                              });
                            }
                            className='min - h-[100px]'                          />;
                          <div className='grid grid - cols - 2 gap - 4'>;
                            <div>;
                              <label className='text - sm font - medium mb - 1 block'>;
                                Resolution Type;
                              </label>;
                              <select;
                                className='w - full p - 2 border rounded';
                                value={resolution.resolution_type || ''}
                                on_change={e =>;
                                  set_resolution ({
                                    ...resolution,
                                    resolution_type: e.target;
                                      .value as ResolutionType,
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
                                  });
                                }                              >;
                                <option value='client_favor'>;
                                  In Client's Favor;
                                </option>;
                                <option value='talent_favor'>;
                                  In Talent's Favor;
                                </option>;
                                <option value='compromise'>Compromise</option>;
                                <option value='dismissed'>Dismissed</option>;
                              </select>;
                            </div>;
                          </div>;
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          .map((msg) => (
                          <div key={msg.id} className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage src={msg.user_profile?.avatar_url} alt={msg.user_profile?.display_name || "Admin avatar"} />
                                  <AvatarFallback>
                                    {msg.user_profile?.display_name?.[0] || 'A'}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-medium">
                                  {msg.user_profile?.display_name || 'Admin'}
                                </span>
<<<<<<< HEAD


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                              </div>
                              <p className='whitespace-pre-wrap text-sm'>
                                {msg.message}
                              </p>
                            </div>

<<<<<<< HEAD
                        {!messages.some(msg => msg.is_admin_note) && (
                          <p className="text-sm text-muted-foreground italic">No admin notes yet</p>
                        )}
                      </div>

                        <Button
                          variant="outline"
                          onClick={() => {
                            if (adminNote.trim()) {

                              addDisputeMessage(disputeId!, adminNote, true).then(() => {
=======

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                              </div>
                              <span className="text-xs opacity-70">
                                {format(new Date(msg.created_at), 'MMM d, h:mm a')}
                              </span>
                            </div>
<<<<<<< HEAD
                          ))}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                            <p className="whitespace-pre-wrap text-sm">{msg.message}</p>
                          </div>
                        ))}
                        
<<<<<<< HEAD


>>>>>>>                         {!messages.some(msg => msg.is_admin_note) && (
                          <p className='text-sm text-muted-foreground italic'>
                            No admin notes yet
                          </p>
                        )}
                      </div>
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                        {!messages.some(msg => msg.is_admin_note) && (
                          <p className="text-sm text-muted-foreground italic">No admin notes yet</p>
                        )}
                      </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <Separator className='my-4' />
                      <div className='space-y-4'>
                        <Textarea
                          placeholder='Add an admin note (only visible to administrators)...'
                          value={adminNote}
                          onChange={e => setAdminNote(e.target.value)}                        />
<<<<<<< HEAD
>>>>>>>                         <Button
                          variant="outline"
                          onClick={() => {
                            if (adminNote.trim()) {

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                        <Button
                          variant='outline'

========
                                        msg && msg.user_profile?.display_name ||
                                        'Admin avatar'
                                      }
                                    />;
                                    <AvatarFallback>;
                                      {msg && msg.user_profile?.display_name?.[0] ||;
                                        'A'}
                                    </AvatarFallback>;
                                  </Avatar>;
                                  <span className='text-sm font-medium'>;
                                    {msg && msg.user_profile?.display_name || 'Admin'}
                                  </span>;
                                </div>;
                                <span className='text-xs opacity-70'>;
                                  {format(;
                                    new Date(msg && msg.created_at),;
                                    'MMM d, h:mm a';
                                  )}                                </span>;
                              </div>;
                              <p className='whitespace-pre-wrap text-sm'>;
                                {msg && msg.message}
                              </p>;
                            </div>;
                          ))}
                        {!messages && messages.some(msg => msg && msg.is_admin_note) && (;
                          <p className='text-sm text-muted-foreground italic'>;
                            No admin notes yet;
                          </p>;
                        )}
                      </div>;
                      <Separator className='my-4' />;
                      <div className='space-y-4'>;
                        <Textarea
                          placeholder='Add an admin note (only visible to administrators)...'
                          value={adminNote}
                          onChange={e => setAdminNote(e && e.target.value)}                        />;
                        <Button
                          variant='outline'
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
                          <Button on_click={handleResolveDispute}>;
                            Resolve Dispute;
                          </Button>;
                        </div>;
                      </div>)}
                    <div>;
                      <h3 className='font - medium mb - 2'>Admin Notes</h3>;
                      <div className='space - y-4 max - h-[300px] overflow - y-auto p - 2'>;
                        {messages;
                          .filter (msg => msg.is_admin_note);
                          .map (msg => (
                            <div;
                              key={msg.id}
                              className='bg - yellow - 50 border - l-4 border - yellow - 200 p - 4 dark:bg - yellow - 900 / 20 dark:border - yellow - 900';
                            >;
                              <div className='flex items - center justify - between mb - 2'>;
                                <div className='flex items - center gap - 2'>;
                                  <Avatar className='h - 6 w - 6'>;
                                    <AvatarImage;
                                      src={msg.user_profile?.avatar_url}
                                      alt={
                                        msg.user_profile?.display_name ||;
                                        'Admin avatar';
                                      }
                                    />;
                                    <AvatarFallback>;
                                      {msg.user_profile?.display_name?.[0] ||;
                                        'A'}
                                    </AvatarFallback>;
                                  </Avatar>;
                                  <span className='text - sm font - medium'>;
                                    {msg.user_profile?.display_name || 'Admin'}
                                  </span>;
                                </div>;
                                <span className='text - xs opacity - 70'>;
                                  {format (
                                    new Date (msg.created_at),
                                    'MMM d, h:mm a')}                                </span>;
                              </div>;
                              <p className='whitespace - pre - wrap text - sm'>;
                                {msg.message}
                              </p>;
                            </div>))}
                        {!messages.some (msg => msg.is_admin_note) && (
                          <p className='text - sm text - muted - foreground italic'>;
                            No admin notes yet;
                          </p>)}
                      </div>;
                      <Separator className='my - 4' />;
                      <div className='space - y-4'>;
                        <Textarea;
                          placeholder='Add an admin note (only visible to administrators)...';
                          value={admin_note}
                          on_change={e => setAdminNote (e.target.value)}                        />;
                        <Button;
                          variant='outline';
                          on_click={() => {
                            if () {) {
  $2
}
                              addDisputeMessage (
                                dispute_id!,
                                admin_note,
                                true).then (() => {
                                getDisputeMessages (dispute_id!).then (
                                  set_messages);
                                setAdminNote ('');
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

                              }) }

========
                              }) }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
                          onClick={() => {;
                            if (adminNote && adminNote.trim()) {;
                              addDisputeMessage(;
                                disputeId!,;
                                adminNote,;
                                true;
                              ).then(() => {;
                                getDisputeMessages(disputeId!).then(;
                                  setMessages;
                                );
                                setAdminNote('');
                              });                            }
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

>>>>>>>                               addDisputeMessage(disputeId!, adminNote, true).then(() => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-4">
                        <Textarea
                          placeholder="Add an admin note (only visible to administrators)..."
                          value={adminNote}
                          onChange={(e) => setAdminNote(e.target.value)}
                        />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        <Button
                          variant="outline"
                          onClick={() => {
                            if (adminNote.trim()) {
<<<<<<< HEAD
                              addDisputeMessage(
                                disputeId!
                                adminNote
                                true
                              ).then(() => {
                                getDisputeMessages(disputeId!).then(
                                  setMessages
                                )
                                setAdminNote('')
                              }) }
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                              addDisputeMessage(disputeId!, adminNote, true).then(() => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                                getDisputeMessages(disputeId!).then(setMessages),
                                setAdminNote("")
                              })
                            }
<<<<<<< HEAD
<<<<<<< HEAD

                          }}
=======
>>>>>>>                           }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                          }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        >
                          Add Admin Note
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
        <div className='space-y-6'>
>>>>>>>           <Card>
            <CardHeader>
              <CardTitle>Parties Involved</CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='flex items-start gap-4'>
                <Avatar className='h-10 w-10'>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
                          }}
=======
                    ;
                    {dispute.status !== "resolved" && (;
                      <div>;
                        <h3 className="font-medium mb-2">Resolve Dispute</h3>;
                        <div className="space-y-4">;
                          <Textarea;
                            placeholder="Enter resolution summary...";
                            value={resolution.summary}
                            onChange={(e) => setResolution({ ...resolution, summary:e.target.value })}
                            className="min-h-[100px]";
                          />;
                          ;
                          <div className="grid grid-cols-2 gap-4">;
                            <div>;
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>;
                              <select;
                                className="w-full p-2 border rounded";
                                value={resolution.resolution_type || ""}
                                onChange={(e) => setResolution({ ...resolution, resolution_type:e.target.value as ResolutionType })}
                              >;
                                <option value="client_favor">In Client's Favor</option>;
                                <option value="talent_favor">In Talent's Favor</option>;
                                <option value="compromise">Compromise</option>;
                                <option value="dismissed">Dismissed</option>;
                              </select>;
                            </div>;
                          </div>;
                          ;
                          <Button onClick={handleResolveDispute}>Resolve Dispute</Button>;
                        </div>;
                      </div>;
                    )}
                    ;
                    <div>;
                      <h3 className="font-medium mb-2">Admin Notes</h3>;
                      <div className="space-y-4 max-h-[300px] overflow-y-auto p-2">;
                        {messages;
                          .filter(msg => msg.is_admin_note);
                          .map((msg) => (;
                          <div key={msg.id} className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900">;
                            <div className="flex items-center justify-between mb-2">;
                              <div className="flex items-center gap-2">;
                                <Avatar className="h-6 w-6">;
                                  <AvatarImage src={msg.user_profile?.avatar_url} alt={msg.user_profile?.display_name || "Admin avatar"} />;
                                  <AvatarFallback>;
                                    {msg.user_profile?.display_name?.[0] || 'A'}
                                  </AvatarFallback>;
                                </Avatar>;
                                <span className="text-sm font-medium">;
                                  {msg.user_profile?.display_name || 'Admin'}
                                </span>;
                              </div>;
                              <span className="text-xs opacity-70">;
                                {format(new Date(msg.created_at), 'MMM d, h:mm a')}
                              </span>;
                            </div>;
                            <p className="whitespace-pre-wrap text-sm">{msg.message}</p>;
                          </div>;
                        ))}
                        ;
                        {!messages.some(msg => msg.is_admin_note) && (;
                          <p className="text-sm text-muted-foreground italic">No admin notes yet</p>;
                        )}
                      </div>;
                      ;
                      <Separator className="my-4" />;
                      ;
                      <div className="space-y-4">;
                        <Textarea;
                          placeholder="Add an admin note (only visible to administrators)...";
                          value={adminNote}
                          onChange={(e) => setAdminNote(e.target.value)}
                        />;
                        <Button;
                          variant="outline";
                          onClick={() => {;
                            if (adminNote.trim()) {;
                              addDisputeMessage(disputeId!, adminNote, true).then(() => {;
                                getDisputeMessages(disputeId!).then(setMessages),;
                                setAdminNote(""),;
                              }),;
                            }                          }}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        >;
                          Add Admin Note;
                        </Button>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx


        
        <div className="space-y-6">


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        <div className='space-y-6'>
=======
        
        <div className="space-y-6">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Card>
            <CardHeader>
              <CardTitle>Parties Involved</CardTitle>
            </CardHeader>
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
          </Tabs>;
        </div>;
        <div className='space-y-6'>;
=======
              </TabsContent>;
            )}
          </Tabs>;
        </div>;
        ;
        <div className="space-y-6">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <Card>;
            <CardHeader>;
              <CardTitle>Parties Involved</CardTitle>;
            </CardHeader>;
<<<<<<< HEAD
            <CardContent className='space-y-6'>;
              <div className='flex items-start gap-4'>;
                <Avatar className='h-10 w-10'>;
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

>>>>>>>                   <AvatarImage
                    src={dispute && dispute.client_profile?.avatar_url}
                    alt={

========
                  <AvatarImage
                    src={dispute && dispute.client_profile?.avatar_url}
                    alt={
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
                      dispute && dispute.client_profile?.display_name || 'Client avatar'
                    }
                  />;
                  <AvatarFallback>C</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className='font-medium'>Client</p>;
                  <p className='text-sm text-muted-foreground'>;
                    {dispute && dispute.client_profile?.display_name || 'Unknown Client'}
                  </p>;
                </div>;
              </div>;
              <div className='flex justify-center'>;
                <ArrowDown className='h-6 w-6 text-muted-foreground' />;
              </div>;
              <div className='flex items-start gap-4'>;
                <Avatar className='h-10 w-10'>;
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

                  <AvatarImage
                    src={dispute && dispute.talent_profile?.avatar_url}
=======
<<<<<<< HEAD
            <CardContent className='space-y-6'>
              <div className='flex items-start gap-4'>
                <Avatar className='h-10 w-10'>
                  <AvatarImage
                    src={dispute.client_profile?.avatar_url}
                    alt={
                      dispute.client_profile?.display_name |'Client avatar'
                    }
                  />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <div>
                  <p className='font-medium'>Client</p>
                  <p className='text-sm text-muted-foreground'>
                    {dispute.client_profile?.display_name |'Unknown Client'}
                  </p>
                </div>
              </div>
              <div className='flex justify-center'>
                <ArrowDown className='h-6 w-6 text-muted-foreground' />
              </div>
              <div className='flex items-start gap-4'>
                <Avatar className='h-10 w-10'>
                  <AvatarImage
                    src={dispute.talent_profile?.avatar_url}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    alt={
                      dispute.talent_profile?.display_name |'Talent avatar'
                    }
                  />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div>
                  <p className='font-medium'>Talent</p>
                  <p className='text-sm text-muted-foreground'>
                    {dispute.talent_profile?.display_name |'Unknown Talent'}
<<<<<<< HEAD
=======
=======
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={dispute.client_profile?.avatar_url} alt={dispute.client_profile?.display_name || "Client avatar"} />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Client</p>
                  <p className="text-sm text-muted-foreground">
                    {dispute.client_profile?.display_name || "Unknown Client"}
                  </p>
                </div>
              </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className='flex justify-center'>
                <ArrowDown className='h-6 w-6 text-muted-foreground' />
              </div>
              <div className='flex items-start gap-4'>
                <Avatar className='h-10 w-10'>
                  <AvatarImage
                    src={dispute.talent_profile?.avatar_url}
                    alt={
                      dispute.talent_profile?.display_name || 'Talent avatar'
                    }
                  />
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
              
              <div className="flex justify-center">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
              </div>
              
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={dispute.talent_profile?.avatar_url} alt={dispute.talent_profile?.display_name || "Talent avatar"} />
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Talent</p>
                  <p className="text-sm text-muted-foreground">
                    {dispute.talent_profile?.display_name || "Unknown Talent"}
<<<<<<< HEAD
<<<<<<< HEAD

                  </p>
=======
>>>>>>>                   </p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                  </p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>
              </div>
            </CardContent>
          </Card>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>           <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <Card>
>>>>>>>             <CardHeader>
              <CardTitle>Case Information</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4 text-sm'>
              <div className='flex justify-between'>
                <span className='font-medium'>Case ID:</span>
                <span className='font-mono'>{dispute.id}</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-medium'>Created:</span>
                <span>
                  {format(new Date(dispute.created_at), 'MMM d, yyyy')}
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='font-medium'>Status:</span>
                <Badge variant={getStatusBadgeVariant(dispute.status)}>
                  {dispute.status.replace('_', ' ')}
                </Badge>
              </div>
              <div className='flex justify-between'>
                <span className='font-medium'>Raised by:</span>
                <span>
                  {dispute.client_profile &&
                  dispute.talent_profile &&
                  dispute.raised_by === (dispute.client_profile as any).id
                    ? 'Client'
                    : dispute.talent_profile &&
                        dispute.raised_by === (dispute.talent_profile as any).id
                      ? 'Talent'
                      : 'Unknown'}
                </span>
=======
=======
          
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <Card>
            <CardHeader>
              <CardTitle>Case Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Case ID:</span>
                <span className="font-mono">{dispute.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Created:</span>
                <span>{format(new Date(dispute.created_at), "MMM d, yyyy")}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status:</span>
                <Badge variant={getStatusBadgeVariant(dispute.status)}>
                  {dispute.status.replace('_ ')}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Raised by:</span>
                <span>{dispute.client_profile && dispute.talent_profile && dispute.raised_by === (dispute.client_profile as any).id ? "Client" : dispute.talent_profile && dispute.raised_by === (dispute.talent_profile as any).id ? "Talent" : "Unknown"}</span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
========
                  <AvatarImage
                    src={dispute && dispute.talent_profile?.avatar_url}
                    alt={
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
                      dispute && dispute.talent_profile?.display_name || 'Talent avatar'
                    }
                  />;
                  <AvatarFallback>T</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className='font-medium'>Talent</p>;
                  <p className='text-sm text-muted-foreground'>;
                    {dispute && dispute.talent_profile?.display_name || 'Unknown Talent'}
=======
            <CardContent className="space-y-6">;
              <div className="flex items-start gap-4">;
                <Avatar className="h-10 w-10">;
                  <AvatarImage src={dispute.client_profile?.avatar_url} alt={dispute.client_profile?.display_name || "Client avatar"} />;
                  <AvatarFallback>C</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className="font-medium">Client</p>;
                  <p className="text-sm text-muted-foreground">;
                    {dispute.client_profile?.display_name || "Unknown Client"}
                  </p>;
                </div>;
              </div>;
              ;
              <div className="flex justify-center">;
                <ArrowDown className="h-6 w-6 text-muted-foreground" />;
              </div>;
              ;
              <div className="flex items-start gap-4">;
                <Avatar className="h-10 w-10">;
                  <AvatarImage src={dispute.talent_profile?.avatar_url} alt={dispute.talent_profile?.display_name || "Talent avatar"} />;
                  <AvatarFallback>T</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className="font-medium">Talent</p>;
                  <p className="text-sm text-muted-foreground">;
                    {dispute.talent_profile?.display_name || "Unknown Talent"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
<<<<<<< HEAD
=======
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <Card>;
            <CardHeader>;
              <CardTitle>Case Information</CardTitle>;
            </CardHeader>;
<<<<<<< HEAD
            <CardContent className='space-y-4 text-sm'>;
              <div className='flex justify-between'>;
                <span className='font-medium'>Case ID:</span>;
                <span className='font-mono'>{dispute && dispute.id}</span>;
              </div>;
              <div className='flex justify-between'>;
                <span className='font-medium'>Created:</span>;
                <span>;
                  {format(new Date(dispute && dispute.created_at), 'MMM d, yyyy')}
                </span>;
              </div>;
              <div className='flex justify-between'>;
                <span className='font-medium'>Status:</span>;
                <Badge variant={getStatusBadgeVariant(dispute && dispute.status)}>;
                  {dispute && dispute.status.replace('_', ' ')}
                </Badge>;
              </div>;
              <div className='flex justify-between'>;
                <span className='font-medium'>Raised by:</span>;
                <span>;
                  {dispute && dispute.client_profile &&;
                  dispute && dispute.talent_profile &&;
                  dispute && dispute.raised_by === (dispute && dispute.client_profile as any).id;
                    ? 'Client';
                    : dispute && dispute.talent_profile &&;
                        dispute && dispute.raised_by === (dispute && dispute.talent_profile as any).id;
                      ? 'Talent';
                      : 'Unknown'}
              </TabsContent>)}
          </Tabs>;
        </div>;
        <div className='space - y-6'>;
          <Card>;
            <CardHeader>;
              <CardTitle > Parties Involved</CardTitle>;
            </CardHeader>;
            <CardContent className='space - y-6'>;
              <div className='flex items - start gap - 4'>;
                <Avatar className='h - 10 w - 10'>;
                  <AvatarImage;
                    src={dispute.client_profile?.avatar_url}
                    alt={
                      dispute.client_profile?.display_name || 'Client avatar';
                    }
                  />;
                  <AvatarFallback > C</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className='font - medium'>Client</p>;
                  <p className='text - sm text - muted - foreground'>;
                    {dispute.client_profile?.display_name || 'Unknown Client'}
                  </p>;
                </div>;
              </div>;
              <div className='flex justify - center'>;
                <ArrowDown className='h - 6 w - 6 text - muted - foreground' />;
              </div>;
              <div className='flex items - start gap - 4'>;
                <Avatar className='h - 10 w - 10'>;
                  <AvatarImage;
                    src={dispute.talent_profile?.avatar_url}
                    alt={
                      dispute.talent_profile?.display_name || 'Talent avatar';
                    }
                  />;
                  <AvatarFallback > T</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className='font - medium'>Talent</p>;
                  <p className='text - sm text - muted - foreground'>;
                    {dispute.talent_profile?.display_name || 'Unknown Talent'}
                  </p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
          <Card>;
            <CardHeader>;
              <CardTitle > Case Information</CardTitle>;
            </CardHeader>;
            <CardContent className='space - y-4 text - sm'>;
              <div className='flex justify - between'>;
                <span className='font - medium'>Case ID:</span>;
                <span className='font - mono'>{dispute.id}</span>;
              </div>;
              <div className='flex justify - between'>;
                <span className='font - medium'>Created:</span>;
                <span>;
                  {format (new Date (dispute.created_at), 'MMM d, yyyy')}
                </span>;
              </div>;
              <div className='flex justify - between'>;
                <span className='font - medium'>Status:</span>;
                <Badge variant={getStatusBadgeVariant (dispute.status)}>;
                  {dispute.status.replace ('_', ' ')}
                </Badge>;
              </div>;
              <div className='flex justify - between'>;
                <span className='font - medium'>Raised by:</span>;
                <span>;
                  {dispute.client_profile &&;
                  dispute.talent_profile &&;
                  dispute.raised_by === (dispute.client_profile as any).id;
                    ? 'Client';
                    : dispute.talent_profile &&;
                        dispute.raised_by === (dispute.talent_profile as any).id;
                      ? 'Talent';
                      : 'Unknown'}
                </span>;
=======
            <CardContent className="space-y-4 text-sm">;
              <div className="flex justify-between">;
                <span className="font-medium">Case ID:</span>;
                <span className="font-mono">{dispute.id}</span>;
              </div>;
              <div className="flex justify-between">;
                <span className="font-medium">Created:</span>;
                <span>{format(new Date(dispute.created_at), "MMM d, yyyy")}</span>;
              </div>;
              <div className="flex justify-between">;
                <span className="font-medium">Status:</span>;
                <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                  {dispute.status.replace('_ ')}
                </Badge>;
              </div>;
              <div className="flex justify-between">;
                <span className="font-medium">Raised by:</span>;
                <span>{dispute.client_profile && dispute.talent_profile && dispute.raised_by === (dispute.client_profile as any).id ? "Client" :dispute.talent_profile && dispute.raised_by === (dispute.talent_profile as any).id ? "Talent" :"Unknown"}</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </div>;
<<<<<<<< HEAD:src/components/disputes/DisputeDetail.tsx

    </div>);

}
<<<<<<< HEAD

=======
  if (!disputeId |!message.trim () ) return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
<<<<<<< HEAD
}, [disputeId, getDisputeById, getDisputeMessages, router])
}
const handleResolveDispute = async () => {
  if (!disputeId) return;
if (!resolution.summary) {
}const success = await resolveDispute (disputeId, {
  summary: resolution.summary
if (success && dispute) {
  setDispute ({
  ...dispute
resolution summary: resolution.summary
resolution type: resolution.resolution type
resolved at: new Date () .toISOString ()
})
}else {
}
const handleSendMessage = async () => {
<<<<<<< HEAD
  if (!disputeId |!message.trim () ) return
=======
  if (!disputeId || !message.trim () ) return;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
try {
}catch (error) {
  logErrorToProduction ('Error sending message:', {
  data: error
})
}finally {
  setIsSending (false)
}
if (isLoading) {"
  return (<div className=" p-8 text-center"> <div className=" w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div> <p>Loading dispute details...</p> </div>)
}if (!dispute) {"
  return (<div className=" p-8 text-center"> () => router.push (" /dashboard/disputes") "
}className=" mt-4"> Back to Disputes </Button> </div>)
};"
container mx-auto p-4 space-y-6" > <div className="flex flex-wrap items-center justify-between gap-4" > <div> Start Review </Button>) "
}</div> </div> <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900"> <Check className="h-4 w-4" /> <AlertTitle>This dispute has been resolved</AlertTitle> <AlertDescription> {
  dispute.resolution summary
}</AlertDescription> </Alert>) "
}<div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> <div className="lg:col-span-2"> </TabsList> <TabsContent value="overview" className="space-y-6"> <Card> <CardHeader> <CardTitle>Dispute Details</CardTitle> <CardDescription>Information about this dispute case</CardDescription> </CardHeader> <CardContent className="space-y-4"> <div> <h3 className="font-medium">Reason</h3> <p> {
  disputeReasonLabels[ dispute.reason code ] ?? dispute.reason code "
}</p> </div> <div> <h3 className="font-medium">Description</h3> <p className="whitespace-pre-wrap"> {
  dispute.description
}</p> </div> <div> </div> {"
  dispute.milestone id && (<div> <h3 className="font-medium">Related Milestone</h3> <p className="text-sm">Milestone ID: {
  dispute.milestone id
}</p> </div>) "
}<div> <h3 className="font-medium">Timeline</h3> <ul className="space-y-2 mt-2"> <span>Under review</span> </li>)
}</li>) "
}</ul> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Resolution</CardTitle> </CardHeader> <CardContent> <p className="whitespace-pre-wrap"> {
  dispute.resolution summary
}</p> </Badge> </div>)
}</CardContent> </Card>) "
}</TabsContent> <TabsContent value="messages" className="space-y-6"> <Card> <CardHeader> <CardTitle>Messages</CardTitle> <CardDescription>Communication regarding this dispute</CardDescription> </CardHeader> <CardContent> <div className="space-y-6 max-h-[600px] overflow-y-auto p-2"> {"
  messages.length === 0 ? (<div className="text-center py-12"> <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground">No messages yet</p> </div>) : (messages .filter (msg => !msg.is admin note)
}> <div className= {
  `max-w-[80%] $ {'
  isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-muted'
}p-4 rounded-lg` "
}> <div className="flex items-center gap-2 mb-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {
  msg.user profile?.avatar url
}alt= {"
  msg.user profile?.display name |"User avatar"
}/> <AvatarFallback> {'
  msg.user profile?.display name?.[0] |'?' "
}</AvatarFallback> </Avatar> <span className="text-sm font-medium"> {'
  msg.user profile?.display name |'Unknown User' "
}</span> <span className="text-xs opacity-70"> {'
  format (new Date (msg.created at),  'MMM d, h:mm a') "
}</span> </div> <p className="whitespace-pre-wrap"> {
  msg.message
}</p> </div> </div>)
}) ) "
}</div> </CardContent> <CardFooter> <div className="w-full space-y-4" > <Textarea className="min-h-[100px]" disabled= {
  isSending "
}/> </Button> </div> </div> </CardFooter> </Card> </TabsContent> <TabsContent value="attachments"> <Card> <CardHeader> <CardTitle>Attachments</CardTitle> <CardDescription>Files related to this dispute</CardDescription> </CardHeader> <CardContent> <div className="text-center py-12"> <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground" >No attachments available</p> </div> </CardContent> </Card> </TabsContent> <Card> <CardHeader> <CardTitle>Admin Actions</CardTitle> <CardDescription>Handle this dispute as an administrator</CardDescription> </CardHeader> <CardContent className="space-y-6"> <div> <h3 className="font-medium mb-2">Change Status</h3> <div className="flex gap-2" > <Button > Mark as Open </Button> <Button > Mark as Under Review </Button> <Button > Close Dispute </Button> </div> </div> <h3 className="font-medium mb-2">Resolve Dispute</h3> <div className="space-y-4" > <Textarea placeholder="Enter resolution summary..." value= {
  resolution.summary
}onChange= {
  (e) => setResolution ({
  ...resolution, summary: e.target.value
}) '"
}className="min-h-[100px]" /> <div className="grid grid-cols-2 gap-4"> <div> <label className="text-sm font-medium mb-1 block">Resolution Type</label> <select > <option value="client favor" >In Client's Favor</option> <option value="talent favor" >In Talent's Favor</option> <option value="compromise" >Compromise</option> <option value="dismissed" >Dismissed</option> </select> </div> </div> <Button onClick={
  handleResolveDispute
}>Resolve Dispute</Button> </div> </div>)
}<div> <AvatarFallback> {'
  msg.user profile?.display name?.[0] |'A'
}</AvatarFallback> </Avatar>) "
}</div> <Separator className="my-4" /> <div className="space-y-4" > <Textarea
}> Add Admin Note </Button> </div> </div> </CardContent> </Card> </TabsContent>) "
}</Tabs> </div> <div className="space-y-6"> <Card> <CardHeader> <CardTitle>Parties Involved</CardTitle> </CardHeader> <CardContent className="space-y-6"> <div className="flex items-start gap-4"> <Avatar className="h-10 w-10"> <AvatarImage src= {
  dispute.client profile?.avatar url
}alt= {"
  dispute.client profile?.display name |"Client avatar" "
}/> <AvatarFallback>C</AvatarFallback> </Avatar> <div> <p className="font-medium">Client</p> </p> </div> </div> <div className="flex justify-center"> <ArrowDown className="h-6 w-6 text-muted-foreground" /> </div> <div className="flex items-start gap-4"> <Avatar className="h-10 w-10"> <AvatarImage src= {
  dispute.talent profile?.avatar url
}alt= {"
  dispute.talent profile?.display name |"Talent avatar" "
}/> <AvatarFallback>T</AvatarFallback> </Avatar> <div> <p className="font-medium">Talent</p> </p> </div> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Case Information</CardTitle> </CardHeader> <CardContent className="space-y-4 text-sm"> <div className="flex justify-between"> <span className="font-medium">Case ID:</span> <span className="font-mono"> {
  dispute.id "
}</span> </div> <div className="flex justify-between"> </div> </CardContent> </Card> </div> </div> </div>)
}'"  )
}
<<<<<<< HEAD
<<<<<<< HEAD

;

=======
;
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
    </div>);
}
}, [dispute_id, getDisputeById, getDisputeMessages, router]);
}
const handleResolveDispute = async () => {
  // Check condition
if (return) {
  $2
}
// Check condition
if ( {) {
  $2
}
}const success = await resolve_dispute (dispute_id, {
  summary: resolution.summary;
// Check condition
if ( {) {
  $2
}
  set_dispute ({
  ...dispute;
resolution summary: resolution.summary;
resolution type: resolution.resolution type;
resolved at: new Date () .toISOString ();
});
}else {
}
const handleSendMessage = async () => {
  if () return) {
  $2
}
try {
}catch (error) {
  logErrorToProduction ('Error sending message:', {
  data: error;
});
}finally {
  setIsSending (false);
}
// Check condition
if ( {") {
  $2
}
  return (<div className=" p - 8 text - center"> <div className=" w - 8 h - 8 mx - auto mb - 4 animate - spin border - 4 border - primary border - t-transparent rounded - full"></div> <p > Loading dispute details...</p> </div>);
}// Check condition
if ( {") {
  $2
}
  return (<div className=" p - 8 text - center"> () => router.push (" /dashboard / disputes") ";
}className=" mt - 4"> Back to Disputes </Button> </div>);
}";
container mx - auto p - 4 space - y-6" > <div className="flex flex - wrap items - center justify - between gap - 4" > <div> Start Review </Button>) ";
}</div> </div> <Alert className="bg - green - 50 border - green - 200 dark:bg - green - 900 / 20 dark:border - green - 900"> <Check className="h - 4 w - 4" /> <AlertTitle > This dispute has been resolved</AlertTitle> <AlertDescription> {
  dispute.resolution summary;
}</AlertDescription> </Alert>) ";
}<div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6"> <div className="lg:col - span - 2"> </TabsList> <TabsContent value="overview" className="space - y-6"> <Card> <CardHeader> <CardTitle > Dispute Details</CardTitle> <CardDescription > Information about this dispute case</CardDescription> </CardHeader> <CardContent className="space - y-4"> <div> <h3 className="font - medium">Reason</h3> <p> {
  disputeReasonLabels[ dispute.reason code ] ?? dispute.reason code ";
}</p> </div> <div> <h3 className="font - medium">Description</h3> <p className="whitespace - pre - wrap"> {
  dispute.description;
}</p> </div> <div> </div> {";
  dispute.milestone id && (<div> <h3 className="font - medium">Related Milestone</h3> <p className="text - sm">Milestone ID: {
  dispute.milestone id;
}</p> </div>) ";
}<div> <h3 className="font - medium">Timeline</h3> <ul className="space - y-2 mt - 2"> <span > Under review</span> </li>);
}</li>) ";
}</ul> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle > Resolution</CardTitle> </CardHeader> <CardContent> <p className="whitespace - pre - wrap"> {
  dispute.resolution summary;
}</p> </Badge> </div>);
}</CardContent> </Card>) ";
}</TabsContent> <TabsContent value="messages" className="space - y-6"> <Card> <CardHeader> <CardTitle > Messages</CardTitle> <CardDescription > Communication regarding this dispute</CardDescription> </CardHeader> <CardContent> <div className="space - y-6 max - h-[600px] overflow - y-auto p - 2"> {";
  messages.length === 0 ? (<div className="text - center py - 12"> <MessageSquare className="mx - auto h - 12 w - 12 text - muted - foreground mb - 2" /> <p className="text - muted - foreground">No messages yet</p> </div>) : (messages .filter (msg => !msg.is admin note);
}> <div className= {
  `max - w-[80%] $ {';
  isCurrentUser ? 'bg - primary text - primary - foreground' : 'bg - muted';
}p - 4 rounded - lg` ";
}> <div className="flex items - center gap - 2 mb - 2"> <Avatar className="h - 6 w - 6"> <AvatarImage src= {
  msg.user profile?.avatar url;
}alt= {";
  msg.user profile?.display name || "User avatar";
}/> <AvatarFallback> {';
  msg.user profile?.display name?.[0] || '?' ";
}</AvatarFallback> </Avatar> <span className="text - sm font - medium"> {';
  msg.user profile?.display name || 'Unknown User' ";
}</span> <span className="text - xs opacity - 70"> {';
  format (new Date (msg.created at),  'MMM d, h:mm a') ";
}</span> </div> <p className="whitespace - pre - wrap"> {
  msg.message;
}</p> </div> </div>);
}) ) ";
}</div> </CardContent> <CardFooter> <div className="w - full space - y-4" > <Textarea className="min - h-[100px]" disabled= {
  is_sending ";
}/> </Button> </div> </div> </CardFooter> </Card> </TabsContent> <TabsContent value="attachments"> <Card> <CardHeader> <CardTitle > Attachments</CardTitle> <CardDescription > Files related to this dispute</CardDescription> </CardHeader> <CardContent> <div className="text - center py - 12"> <Download className="mx - auto h - 12 w - 12 text - muted - foreground mb - 2" /> <p className="text - muted - foreground" >No attachments available</p> </div> </CardContent> </Card> </TabsContent> <Card> <CardHeader> <CardTitle > Admin Actions</CardTitle> <CardDescription > Handle this dispute as an administrator</CardDescription> </CardHeader> <CardContent className="space - y-6"> <div> <h3 className="font - medium mb - 2">Change Status</h3> <div className="flex gap - 2" > <Button > Mark as Open </Button> <Button > Mark as Under Review </Button> <Button > Close Dispute </Button> </div> </div> <h3 className="font - medium mb - 2">Resolve Dispute</h3> <div className="space - y-4" > <Textarea placeholder="Enter resolution summary..." value= {
  resolution.summary;
}on_change= {
  (e) => set_resolution ({
  ...resolution, summary: e.target.value;
}) '";
}className="min - h-[100px]" /> <div className="grid grid - cols - 2 gap - 4"> <div> <label className="text - sm font - medium mb - 1 block">Resolution Type</label> <select > <option value="client favor" >In Client's Favor</option> <option value="talent favor" >In Talent's Favor</option> <option value="compromise" >Compromise</option> <option value="dismissed" >Dismissed</option> </select> </div> </div> <Button on_click={
  handleResolveDispute;
}>Resolve Dispute</Button> </div> </div>);
}<div> <AvatarFallback> {';
  msg.user profile?.display name?.[0] || 'A';
}</AvatarFallback> </Avatar>) ";
}</div> <Separator className="my - 4" /> <div className="space - y-4" > <Textarea;
}> Add Admin Note </Button> </div> </div> </CardContent> </Card> </TabsContent>) ";
}</Tabs> </div> <div className="space - y-6"> <Card> <CardHeader> <CardTitle > Parties Involved</CardTitle> </CardHeader> <CardContent className="space - y-6"> <div className="flex items - start gap - 4"> <Avatar className="h - 10 w - 10"> <AvatarImage src= {
  dispute.client profile?.avatar url;
}alt= {";
  dispute.client profile?.display name || "Client avatar" ";
}/> <AvatarFallback > C</AvatarFallback> </Avatar> <div> <p className="font - medium">Client</p> </p> </div> </div> <div className="flex justify - center"> <ArrowDown className="h - 6 w - 6 text - muted - foreground" /> </div> <div className="flex items - start gap - 4"> <Avatar className="h - 10 w - 10"> <AvatarImage src= {
  dispute.talent profile?.avatar url;
}alt= {";
  dispute.talent profile?.display name || "Talent avatar" ";
}/> <AvatarFallback > T</AvatarFallback> </Avatar> <div> <p className="font - medium">Talent</p> </p> </div> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle > Case Information</CardTitle> </CardHeader> <CardContent className="space - y-4 text - sm"> <div className="flex justify - between"> <span className="font - medium">Case ID:</span> <span className="font - mono"> {
  dispute.id ";
}</span> </div> <div className="flex justify - between"> </div> </CardContent> </Card> </div> </div> </div>);
}'"  );
}
=======
    </div>;
  ),; export function DisputeDetail () {;
  const router = useRouter ();
const {;
  disputeId ;
}= router.query as {;
  disputeId?: string ;
};
const {;
  user ;
}= useAuth ();
const {;
  getDisputeById, updateDisputeStatus, resolveDispute,  getDisputeMessages, addDisputeMessage ;
}= useDisputes ();
overview");
//Check if user is admin (placeholder - implement proper admin check) ;
}setDispute (disputeData);
const messagesData = await getDisputeMessages (disputeId);
setMessages (messagesData) ;
}catch (error) {;
  ;
}finally {;
  setIsLoading (false) ;
}
};
}, [disputeId, getDisputeById, getDisputeMessages, router]);
}
};
const handleResolveDispute = async () => {;
  if (!disputeId) return;
if (!resolution.summary) {;
  ;
}const success = await resolveDispute (disputeId, {;
  summary: resolution.summary;
if (success && dispute) {;
  setDispute ({;
  ...dispute;
resolution summary: resolution.summary;
resolution type: resolution.resolution type;
resolved at: new Date () .toISOString () ;
}) ;
}else {;
  ;
}
};
const handleSendMessage = async () => {;
  if (!disputeId || !message.trim () ) return;
try {;
  ;
}
}catch (error) {;
  logErrorToProduction ('Error sending message:', {;
  data: error ;
}) ;
}finally {;
  setIsSending (false) ;
}
};
if (isLoading) {";
  return (<div className=" p-8 text-center"> <div className=" w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div> <p>Loading dispute details...</p> </div>) ;
}if (!dispute) {";
  return (<div className=" p-8 text-center"> () => router.push (" /dashboard/disputes") ";
}className=" mt-4"> Back to Disputes </Button> </div>) ;
}
}
};";
container mx-auto p-4 space-y-6" > <div className="flex flex-wrap items-center justify-between gap-4" > <div> Start Review </Button>) ";
}</div> </div> <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900"> <Check className="h-4 w-4" /> <AlertTitle>This dispute has been resolved</AlertTitle> <AlertDescription> {;
  dispute.resolution summary ;
}</AlertDescription> </Alert>) ";
}<div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> <div className="lg:col-span-2"> </TabsList> <TabsContent value="overview" className="space-y-6"> <Card> <CardHeader> <CardTitle>Dispute Details</CardTitle> <CardDescription>Information about this dispute case</CardDescription> </CardHeader> <CardContent className="space-y-4"> <div> <h3 className="font-medium">Reason</h3> <p> {;
  disputeReasonLabels[ dispute.reason code ] ?? dispute.reason code ";
}</p> </div> <div> <h3 className="font-medium">Description</h3> <p className="whitespace-pre-wrap"> {;
  dispute.description ;
}</p> </div> <div> </div> {";
  dispute.milestone id && (<div> <h3 className="font-medium">Related Milestone</h3> <p className="text-sm">Milestone ID: {;
  dispute.milestone id ;
}</p> </div>) ";
}<div> <h3 className="font-medium">Timeline</h3> <ul className="space-y-2 mt-2"> <span>Under review</span> </li>) ;
}</li>) ";
}</ul> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Resolution</CardTitle> </CardHeader> <CardContent> <p className="whitespace-pre-wrap"> {;
  dispute.resolution summary ;
}</p> </Badge> </div>) ;
}</CardContent> </Card>) ";
}</TabsContent> <TabsContent value="messages" className="space-y-6"> <Card> <CardHeader> <CardTitle>Messages</CardTitle> <CardDescription>Communication regarding this dispute</CardDescription> </CardHeader> <CardContent> <div className="space-y-6 max-h-[600px] overflow-y-auto p-2"> {";
  messages.length === 0 ? (<div className="text-center py-12"> <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground">No messages yet</p> </div>) : (messages .filter (msg => !msg.is admin note) return (<div key= {;
  msg.id ;
}className= {;
  `flex $ {';
  isCurrentUser ? 'justify-end' : 'justify-start' ;
}` ;
}> <div className= {;
  `max-w-[80%] $ {';
  isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-muted' ;
}p-4 rounded-lg` ";
}> <div className="flex items-center gap-2 mb-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {;
  msg.user profile?.avatar url ;
}alt= {";
  msg.user profile?.display name || "User avatar" ;
}/> <AvatarFallback> {';
  msg.user profile?.display name?.[0] || '?' ";
}</AvatarFallback> </Avatar> <span className="text-sm font-medium"> {';
  msg.user profile?.display name || 'Unknown User' ";
}</span> <span className="text-xs opacity-70"> {';
  format (new Date (msg.created at),  'MMM d, h:mm a') ";
}</span> </div> <p className="whitespace-pre-wrap"> {;
  msg.message ;
}</p> </div> </div>) ;
}) ) ";
}</div> </CardContent> <CardFooter> <div className="w-full space-y-4" > <Textarea className="min-h-[100px]" disabled= {;
  isSending ";
}/> </Button> </div> </div> </CardFooter> </Card> </TabsContent> <TabsContent value="attachments"> <Card> <CardHeader> <CardTitle>Attachments</CardTitle> <CardDescription>Files related to this dispute</CardDescription> </CardHeader> <CardContent> <div className="text-center py-12"> <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground" >No attachments available</p> </div> </CardContent> </Card> </TabsContent> <Card> <CardHeader> <CardTitle>Admin Actions</CardTitle> <CardDescription>Handle this dispute as an administrator</CardDescription> </CardHeader> <CardContent className="space-y-6"> <div> <h3 className="font-medium mb-2">Change Status</h3> <div className="flex gap-2" > <Button > Mark as Open </Button> <Button > Mark as Under Review </Button> <Button > Close Dispute </Button> </div> </div> <h3 className="font-medium mb-2">Resolve Dispute</h3> <div className="space-y-4" > <Textarea placeholder="Enter resolution summary..." value= {;
  resolution.summary ;
}onChange= {;
  (e) => setResolution ({;
  ...resolution, summary: e.target.value ;
}) '";
}className="min-h-[100px]" /> <div className="grid grid-cols-2 gap-4"> <div> <label className="text-sm font-medium mb-1 block">Resolution Type</label> <select > <option value="client favor" >In Client's Favor</option> <option value="talent favor" >In Talent's Favor</option> <option value="compromise" >Compromise</option> <option value="dismissed" >Dismissed</option> </select> </div> </div> <Button onClick={;
  handleResolveDispute ;
}>Resolve Dispute</Button> </div> </div>) ;
}<div> <AvatarFallback> {';
  msg.user profile?.display name?.[0] || 'A' ;
}</AvatarFallback> </Avatar>) ";
}</div> <Separator className="my-4" /> <div className="space-y-4" > <Textarea ;
}
}
}> Add Admin Note </Button> </div> </div> </CardContent> </Card> </TabsContent>) ";
}</Tabs> </div> <div className="space-y-6"> <Card> <CardHeader> <CardTitle>Parties Involved</CardTitle> </CardHeader> <CardContent className="space-y-6"> <div className="flex items-start gap-4"> <Avatar className="h-10 w-10"> <AvatarImage src= {;
  dispute.client profile?.avatar url ;
}alt= {";
  dispute.client profile?.display name || "Client avatar" ";
}/> <AvatarFallback>C</AvatarFallback> </Avatar> <div> <p className="font-medium">Client</p> </p> </div> </div> <div className="flex justify-center"> <ArrowDown className="h-6 w-6 text-muted-foreground" /> </div> <div className="flex items-start gap-4"> <Avatar className="h-10 w-10"> <AvatarImage src= {;
  dispute.talent profile?.avatar url ;
}alt= {";
  dispute.talent profile?.display name || "Talent avatar" ";
}/> <AvatarFallback>T</AvatarFallback> </Avatar> <div> <p className="font-medium">Talent</p> </p> </div> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Case Information</CardTitle> </CardHeader> <CardContent className="space-y-4 text-sm"> <div className="flex justify-between"> <span className="font-medium">Case ID:</span> <span className="font-mono"> {;
  dispute.id ";
}</span> </div> <div className="flex justify-between"> </div> </CardContent> </Card> </div> </div> </div>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeDetail.tsx
=======
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
