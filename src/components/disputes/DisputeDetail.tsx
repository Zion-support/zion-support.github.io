<<<<<<< HEAD
<<<<<<< HEAD

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
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { useDisputes } from '@/hooks/useDisputes';
import { logErrorToProduction } from '@/utils/productionLogger'; import { useRouter } from 'next/router'
import { useDisputes } from "@/hooks/useDisputes"
import {logErrorToProduction} from '@/utils/productionLogger'
import {
  Dispute,
  disputeReasonLabels,
  DisputeMessage,
  DisputeStatus,
  ResolutionType,
  ResolutionType,
  ResolutionType,
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
    }
    loadDisputeData()
  }, [disputeId, getDisputeById, getDisputeMessages, router])
  const handleStatusChange = async (status: DisputeStatus) => {
    if (!disputeId) return;
    const success = await updateDisputeStatus(disputeId, status)
import {
  Dispute,
  disputeReasonLabels,
  DisputeMessage,
  DisputeStatus,
  ResolutionType,;
} from '@/types/disputes';
}

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
        setIsLoading(false)
      }
    },
    
    loadDisputeData()
  }, [disputeId, getDisputeById, getDisputeMessages, router]),

  const handleStatusChange = async (status: DisputeStatus) => {
    if (!disputeId) return,

    const success = await updateDisputeStatus(disputeId, status),
    if (success) {
      // Update the dispute object with the new status
      setDispute({ ...dispute!, status: status })
    } else {
      // Update the dispute object with the new status
      setDispute({ ...dispute!, status: status })
    } else {
      return
    const success = await resolveDispute(disputeId, {
      summary: resolution.summary
      toast.error('Failed to update dispute status')
    }
  }
  const handleResolveDispute = async () => {
    if (!disputeId) return;
    if (!resolution.summary) {
      toast.error('Please provide a resolution summary')
      return;
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
      summary: resolution.summary
      summary: resolution.summary,
      resolution_type:
        (resolution.resolution_type as ResolutionType) |'compromise'
    })
    if (success && dispute) {
      setDispute({
        ...dispute
        resolution_summary: resolution.summary
        resolution_type: resolution.resolution_type
        resolved_at: new Date().toISOString()
      resolution_type: (resolution.resolution_type as ResolutionType) || "compromise"}),
      resolution_type: (resolution.resolution_type as ResolutionType) || "compromise"}),
    if (success && dispute) {
      setDispute({
        ...dispute,
        resolution_summary: resolution.summary,
        resolution_type: resolution.resolution_type,
    if (!disputeId |!message.trim()) return
    setIsSending(true)
        setIsLoading (false);

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
        resolved_at: new Date().toISOString(),
      })
    } else {
      toast.error('Failed to resolve dispute')
    }
  }
  const handleSendMessage = async () => {
    if (!disputeId |!message.trim()) return
    if (!disputeId || !message.trim()) return;
    setIsSending(true)
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
      setIsSending (false);
  },;
;
  const handleResolveDispute = async () => {;
    if (!disputeId) return,;
    ;
    if (!resolution.summary) {;
      toast.error("Please provide a resolution summary"),;
      return,;
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
      setIsSending(false)
    }
  }
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

    try {
      const success = await addDisputeMessage (dispute_id, message, is_admin);
      // Check condition
if ( {) {
  $2
}
        // Refresh messages;
        const updated_messages = await getDisputeMessages (dispute_id);
        set_messages (updated_messages);
        set_message ('');
      }
    } catch (error) {
      logErrorToProduction ('Error sending message:', { data: error });
    } finally {
      setIsSending (false);
    }
  }
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {logErrorToProduction} from '@/utils/productionLogger';
import {;
  Dispute,;
  disputeReasonLabels,;
  DisputeMessage,;
  DisputeStatus,;
  ResolutionType,;
} from '@/types/disputes';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState('overview');
  // Check if user is admin (placeholder - implement proper admin check);
  const isAdmin = user?.userType === 'admin';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const [activeTab, setActiveTab] = useState('overview');

  // Check if user is admin (placeholder - implement proper admin check);
  const isAdmin = user?.userType === 'admin';

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const messagesData = await getDisputeMessages(disputeId);
        setMessages(messagesData);
      } catch (error) {;
        logErrorToProduction('Error loading dispute data:', { data: error });
        toast && toast.error('Failed to load dispute');
      } finally {;
        setIsLoading(false);
      }
    };
<<<<<<< HEAD
<<<<<<< HEAD
    loadDisputeData();
  }, [disputeId, getDisputeById, getDisputeMessages, router]);
  const handleStatusChange = async (status: DisputeStatus) => {;
    if (!disputeId) return;
    const success = await updateDisputeStatus(disputeId, status);
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    loadDisputeData();
  }, [disputeId, getDisputeById, getDisputeMessages, router]);

  const handleStatusChange = async (status: DisputeStatus) => {;
    if (!disputeId) return;
    const success = await updateDisputeStatus(disputeId, status);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (success) {;
      // Update the dispute object with the new status;
      setDispute({ ...dispute!, status: status });
    } else {;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    } catch (error) {;
      logErrorToProduction('Error sending message:', { data: error });
    } finally {;
      setIsSending(false);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
  };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (isLoading) {;

      summary: resolution.summary,

  if (isLoading) {
<<<<<<< HEAD
  if (isLoading) {;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  if (isLoading) {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return (
      <div className='p-8 text-center'>;
        <div className='w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full'></div>;
        <p>Loading dispute details...</p>;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
  if (!dispute) {;
    return (
  },

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
=======

  if (!dispute) {;
    return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="p-8 text-center">
        <p>Dispute not found</p>
        <Button
          onClick={() => router.push('/dashboard/disputes')}
          className='mt-4'
        >          Back to Disputes
        <Button onClick={() => router.push("/dashboard/disputes")} className="mt-4">
          Back to Disputes
<<<<<<< HEAD
=======

  if (!dispute) {;
    return (

      <div className="p-8 text-center">
        <p>Dispute not found</p>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Button onClick={() => router.push("/dashboard/disputes")} className="mt-4">
          Back to Disputes
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        </Button>
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='p-8 text-center'>;
        <p>Dispute not found</p>;
        <Button
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      case 'open':;
<<<<<<< HEAD
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
  const getStatusBadgeVariant = (status: DisputeStatus,) => {
    switch (status) {
      case 'open':
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      case 'open':;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return 'outline'; // Changed from "success" to "outline"
      case 'closed':
        return 'outline'
      default:
        return 'default'
    }
  }
<<<<<<< HEAD
  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
=======

        return 'outline'; // Changed from './success'; to "outline";

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        return 'outline'; // Changed from './success'; to "outline";

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

          <Button
            variant='outline'
            onClick={() => router && router.push('/dashboard/disputes')}
          >;
            Back to List;
          </Button>;
          {isAdmin && dispute?.status === 'open' && (;
            <Button onClick={() => handleStatusChange('under_review')}>              Start Review;
            </Button>;

<<<<<<< HEAD
  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
=======

        return 'outline'; // Changed from "success" to "outline"
      case 'closed':
        return 'outline'
      default:
        return 'default'
    }
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      case "open": return "default",
      case "under_review": return "secondary",
      case "resolved": return "outline", // Changed from "success" to "outline"
      case "closed": return "outline",
      default: return "default"
    }
  },

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <p className='text-muted-foreground'>
            Reported{' '}
            {formatDistanceToNow(new Date(dispute?.created_at |''), {
              addSuffix: true
            })}
          </p>
        </div>
<<<<<<< HEAD
        <div className='flex gap-2'>
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
          <Button
            variant='outline'
            onClick={() => router.push('/dashboard/disputes')}
          >
            Back to List
          </Button>
          {isAdmin && dispute?.status === 'open' && (
            <Button onClick={() => handleStatusChange('under_review')}>              Start Review
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <p className="text-muted-foreground">
            Reported {formatDistanceToNow(new Date(dispute?.created_at || ""), { addSuffix: true })}
          </p>
        </div>
<<<<<<< HEAD
        <div className='flex gap-2'>
          <Button
            variant='outline'
            onClick={() => router.push('/dashboard/disputes')}
          >
            Back to List
          </Button>
          {isAdmin && dispute?.status === 'open' && (
            <Button onClick={() => handleStatusChange('under_review')}>              Start Review
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            </Button>
          )}


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      {dispute.status === "resolved" && dispute.resolution_summary && (
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <Check className="h-4 w-4" />
          <AlertTitle>This dispute has been resolved</AlertTitle>
<<<<<<< HEAD
        
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => router.push("/dashboard/disputes")}>
            Back to List
          </Button>
          {isAdmin && dispute?.status === "open" && (
            <Button onClick={() => handleStatusChange("under_review")}>
              Start Review
            </Button>
          )}
        </div>
      </div>
      {dispute.status === 'resolved' && dispute.resolution_summary && (
        <Alert className='bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900'>
          <Check className='h-4 w-4' />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <AlertTitle>This dispute has been resolved</AlertTitle>
          <AlertDescription>{dispute.resolution_summary}</AlertDescription>
        </Alert>
      )}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2'>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      {dispute.status === "resolved" && dispute.resolution_summary && (
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <Check className="h-4 w-4" />
          <AlertTitle>This dispute has been resolved</AlertTitle>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <AlertTitle>This dispute has been resolved</AlertTitle>
          <AlertDescription>{dispute.resolution_summary}</AlertDescription>
        </Alert>
      )}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2'>

      {dispute.status === "resolved" && dispute.resolution_summary && (
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <Check className="h-4 w-4" />
          <AlertTitle>This dispute has been resolved</AlertTitle>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="attachments">Attachments</TabsTrigger>
              {isAdmin && <TabsTrigger value="admin">Admin Notes</TabsTrigger>}
            </TabsList>
            <TabsContent value='overview' className='space-y-6'>
ursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className='mb-6'>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='messages'>Messages</TabsTrigger>
              <TabsTrigger value='attachments'>Attachments</TabsTrigger>
              {isAdmin && <TabsTrigger value='admin'>Admin Notes</TabsTrigger>}
            </TabsList>
<<<<<<< HEAD


=======
            <TabsContent value='overview' className='space-y-6'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            
            <TabsContent value="overview" className="space-y-6">


              <Card>
<<<<<<< HEAD
=======
                <CardHeader>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <CardTitle>Dispute Details</CardTitle>
                  <CardDescription>
                    Information about this dispute case
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
<<<<<<< HEAD
            <TabsContent value='overview' className='space-y-6'>
            
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dispute Details</CardTitle>
                  <CardDescription>Information about this dispute case</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Reason</h3>
                    <p>{
                      disputeReasonLabels[
                        dispute.reason_code
                      ] ?? dispute.reason_code
                    }</p>
                  </div>
                  
                  
                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="whitespace-pre-wrap">{dispute.description}</p>
                  </div>
                    <h3 className="font-medium">Description</h3>
                    <p className="whitespace-pre-wrap">{dispute.description}</p>
                  </div>
                  <div>
                    <h3 className='font-medium'>Project</h3>
                    <p>{dispute.project?.title |'Unknown Project'}</p>
                    <p className='text-sm text-muted-foreground'>
                      {dispute.project?.scope_summary}
=======
                  <div>
                    <h3 className='font-medium'>Reason</h3>
                    <p>
                      {disputeReasonLabels[dispute.reason_code] ??
                        dispute.reason_code}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </p>
                  </div>


                  


                  <div>
                    <h3 className='font-medium'>Description</h3>
                    <p className='whitespace-pre-wrap'>{dispute.description}</p>
                  </div>

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

<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  
                  <div>
                    <h3 className="font-medium">Project</h3>
                    <p>{dispute.project?.title || "Unknown Project"}</p>
                    <p className="text-sm text-muted-foreground">{dispute.project?.scope_summary}</p>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
                  
                  {dispute.milestone_id && (
                    <div>
                      <h3 className="font-medium">Related Milestone</h3>
                      <p className="text-sm">Milestone ID: {dispute.milestone_id}</p>
                    </div>
                  )}
                  <div>
                    <h3 className='font-medium'>Timeline</h3>
                    <ul className='space-y-2 mt-2'>
                      <li className='flex gap-2 items-center'>
=======

                  

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {dispute.milestone_id && (
                    <div>;
                      <h3 className='font - medium'>Related Milestone</h3>;
                      <p className='text - sm'>;
                        Milestone ID: {dispute.milestone_id}
<<<<<<< HEAD
<<<<<<< HEAD
        </div>;
      </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        </div>;
      </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {dispute && dispute.status === 'resolved' && dispute && dispute.resolution_summary && (;
        <Alert className='bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900'>;
          <Check className='h-4 w-4' />;
          <AlertTitle>This dispute has been resolved</AlertTitle>;
          <AlertDescription>{dispute && dispute.resolution_summary}</AlertDescription>;
        </Alert>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>;
        <div className='lg:col-span-2'>;
          <Tabs value={activeTab} onValueChange={setActiveTab}>;
            <TabsList className='mb-6'>;
              <TabsTrigger value='overview'>Overview</TabsTrigger>;
              <TabsTrigger value='messages'>Messages</TabsTrigger>;
              <TabsTrigger value='attachments'>Attachments</TabsTrigger>;
              {isAdmin && <TabsTrigger value='admin'>Admin Notes</TabsTrigger>}
            </TabsList>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div>;
                    <h3 className='font-medium'>Description</h3>;
                    <p className='whitespace-pre-wrap'>{dispute && dispute.description}</p>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div>;
                    <h3 className='font-medium'>Project</h3>;
                    <p>{dispute && dispute.project?.title || 'Unknown Project'}</p>;
                    <p className='text-sm text-muted-foreground'>;
                      {dispute && dispute.project?.scope_summary}
                    </p>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {dispute && dispute.milestone_id && (;
                    <div>;
                      <h3 className='font-medium'>Related Milestone</h3>;
                      <p className='text-sm'>;
                        Milestone ID: {dispute && dispute.milestone_id}
                      </p>;
                    </div>;
                  )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <div>;
                    <h3 className='font-medium'>Timeline</h3>;
                    <ul className='space-y-2 mt-2'>;
                      <li className='flex gap-2 items-center'>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  <div>
                    <h3 className='font-medium'>Timeline</h3>
                    <ul className='space-y-2 mt-2'>
                      <li className='flex gap-2 items-center'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <Badge
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          {format(;
                            new Date(dispute && dispute.created_at),;
                            "MMM d, yyyy 'at' h:mm a";
                          )}
                        </span>;
                      </li>;
<<<<<<< HEAD
<<<<<<< HEAD
                      {dispute && dispute.status !== 'open' && (;
                        <li className='flex gap-2 items-center'>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                      {dispute && dispute.status !== 'open' && (;
                        <li className='flex gap-2 items-center'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <Badge
                            variant='outline'
                            className='h-6 w-6 rounded-full p-0 flex items-center justify-center'>;
                            2;
                          </Badge>;
                          <span>Under review</span>;
                        </li>;
                      )}
<<<<<<< HEAD
<<<<<<< HEAD
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
                      {dispute.status !== 'open' && (
                        <li className='flex gap-2 items-center'>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                      {dispute && dispute.resolved_at && (;
                        <li className='flex gap-2 items-center'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

                            )}
                          </span>;
                        </li>;

                  
                  <div>
                    <h3 className="font-medium">Timeline</h3>
                    <ul className="space-y-2 mt-2">
                      <li className="flex gap-2 items-center">
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1</Badge>
                        <span>Created on {format(new Date(dispute.created_at), "MMM d, yyyy 'at' h:mm a")}</span>
                      </li>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {dispute.status !== 'open' && (
                        <li className='flex gap-2 items-center'>
                          <Badge
                            variant='outline'
                            className='h-6 w-6 rounded-full p-0 flex items-center justify-center'
                          >
                            2
                          </Badge>
                      
                      {dispute.status !== "open" && (
                        <li className="flex gap-2 items-center">
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>
                          <span>Under review</span>
                        </li>
                      )}
                      
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {dispute.resolved_at && (
                        <li className="flex gap-2 items-center">
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
                            {dispute.status !== "open" ? "3" : "2"}
                          </Badge>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <span>
                            Resolved on{' '}
                            {format(
                              new Date(dispute.resolved_at)
                              "MMM d, yyyy 'at' h:mm a"
<<<<<<< HEAD
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
                            )}
                          </span>
                        </li>
                      )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            )}
                          </span>
                          <span>Resolved on {format(new Date(dispute.resolved_at), "MMM d, yyyy 'at' h:mm a")}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              {dispute.status === 'resolved' && (
<<<<<<< HEAD
              {dispute.status === 'resolved' && (
              
              {dispute.status === "resolved" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Resolution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='whitespace-pre-wrap'>
                      {dispute.resolution_summary}
                    </p>
                      <div className="mt-4">
                        <Badge>
                    <p className='whitespace-pre-wrap'>
                      {dispute.resolution_summary}
                    </p>
                    <p className="whitespace-pre-wrap">{dispute.resolution_summary}</p>
                    
                    {dispute.resolution_type && (
                      <div className="mt-4">
                        <Badge>
                          Resolution:{' '}
                          {dispute.resolution_type.replace('_', ' ')}
                        </Badge>
                      </div>
                          Resolution: {dispute.resolution_type.replace('_ ')}
                        </Badge>;
                      </div>;
                    )}
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            <TabsContent value='messages' className='space-y-6'>
                    {dispute.resolution_type && (
                      <div className='mt-4'>
                        <Badge>
=======

                          <span>Resolved on {format(new Date(dispute.resolved_at), "MMM d, yyyy 'at' h:mm a")}</span>

                        </li>
                      )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
                    </ul>;
                  </div>;
                </CardContent>;
              </Card>;


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              
              {dispute.status === "resolved" && (


                <Card>
                  <CardHeader>
                    <CardTitle>Resolution</CardTitle>
                  </CardHeader>
                  <CardContent>
<<<<<<< HEAD

=======
                    <p className='whitespace-pre-wrap'>
                      {dispute.resolution_summary}
                    </p>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <p className="whitespace-pre-wrap">{dispute.resolution_summary}</p>
                    

                    {dispute.resolution_type && (
                      <div className='mt-4'>
                        <Badge>
<<<<<<< HEAD

                    </ul>;
                  </div>;
                </CardContent>;
              </Card>;
              {dispute && dispute.status === 'resolved' && (;
              ;
              {dispute.status === "resolved" && (;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Resolution</CardTitle>;
                  </CardHeader>;
                  <CardContent>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          Resolution:{' '}
                          {dispute && dispute.resolution_type.replace('_', ' ')}
                        </Badge>;
                      </div>;

                          Resolution: {dispute.resolution_type.replace('_ ')}
                        </Badge>;
                      </div>;

                    )}
<<<<<<< HEAD
                    <p className="whitespace-pre-wrap">{dispute.resolution_summary}</p>;
                    ;
                    {dispute.resolution_type && (;
                      <div className="mt-4">;
                        <Badge>;
                          Resolution:{dispute.resolution_type.replace('_ ')}
                        </Badge>;
                      </div>;                    )}
                  </CardContent>;
                </Card>;
              )}
              <Card>
=======
                  </CardContent>;
                </Card>;
              )}
            </TabsContent>
            <TabsContent value='messages' className='space-y-6'>
            
            <TabsContent value="messages" className="space-y-6">


              <Card>
                <CardHeader>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
            <TabsContent value='messages' className='space-y-6'>
            
            <TabsContent value="messages" className="space-y-6">
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </div>
                    ) : (
                      messages
                        .filter(msg => !msg.is_admin_note)
<<<<<<< HEAD
<<<<<<< HEAD
                        .map(msg => {
                          const isCurrentUser = user?.id === msg.user_id
                                                      >
            </TabsContent>;
                        .map(msg => {
                          const isCurrentUser = user?.id === msg.user_id
                                                      >
=======

            </TabsContent>;

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        .map(msg => {
                          const isCurrentUser = user?.id === msg.user_id
                                                      >
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              <div
                                className={`max-w-[80%] ${
                                  isCurrentUser
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted'
<<<<<<< HEAD
<<<<<<< HEAD
                                } p-4 rounded-lg`}
                              >
                                <div className='flex items-center gap-2 mb-2'>
                                  <Avatar className='h-6 w-6'>
                                    <AvatarImage
                                      src={msg.user_profile?.avatar_url}
                                      alt={
                                        msg.user_profile?.display_name |
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
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                } p-4 rounded-lg`}>;
                                <div className='flex items-center gap-2 mb-2'>;
                                  <Avatar className='h-6 w-6'>;
                                    <AvatarImage
                                      src={msg && msg.user_profile?.avatar_url}
                                      alt={

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                        msg && msg.user_profile?.display_name ||
                                        'User avatar'
                                      }
                                    />;

                        .map((msg) => {
                          const isCurrentUser = user?.id === msg.user_id,
                          return (
                            <div
                              key={msg.id}
                              className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                            >;
                              <div;
                                className={`max-w-[80%] ${;
                                  isCurrentUser;
                                    ? 'bg-primary text-primary-foreground';
                                    : 'bg-muted';
                                } p-4 rounded-lg`}
                              >;
                                <div className="flex items-center gap-2 mb-2">;
                                  <Avatar className="h-6 w-6">;
                                    <AvatarImage src={msg.user_profile?.avatar_url} alt={msg.user_profile?.display_name || "User avatar"} />;

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
<<<<<<< HEAD
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
                        .map((msg) => {
                          const isCurrentUser = user?.id === msg.user_id,
                          return (
                            <div
                              key={msg.id}
                              className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                            >;
                              <div;
                                className={`max-w-[80%] ${;
                                  isCurrentUser;
                                    ? 'bg-primary text-primary-foreground';
                                    : 'bg-muted';
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
=======
                        });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



                    )}
                  </div>;
                </CardContent>;
                <CardFooter>;
<<<<<<< HEAD
                          );
                        });
<<<<<<< HEAD
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full space-y-4">
=======
                  <div className='w-full space-y-4'>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Textarea
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
<<<<<<< HEAD
=======



                    )}
                  </div>;
                </CardContent>;
                <CardFooter>;
                  <div className='w-full space-y-4'>;
                    <Textarea


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      placeholder="Type your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[100px]";
                      disabled={isSending}
                    />
                    <div className="flex justify-end">
                      <Button onClick={handleSendMessage} disabled={isSending || !message.trim()}>
                        {isSending ? "Sending..." : "Send Message"}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD
            <TabsContent value='attachments'>
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
            <TabsContent value='attachments'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            
            <TabsContent value="attachments">


              <Card>
<<<<<<< HEAD
=======
                <CardHeader>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
            <TabsContent value='attachments'>
            
            <TabsContent value="attachments">
              <Card>
                <CardHeader>
                  <CardTitle>Attachments</CardTitle>
                  <CardDescription>Files related to this dispute</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">No attachments available</p>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD
              <TabsContent value="admin" className="space-y-6">
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            


            {isAdmin && (
              <TabsContent value='admin' className='space-y-6'>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                <Card>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <Card>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <CardHeader>
                    <CardTitle>Admin Actions</CardTitle>
                    <CardDescription>
                      Handle this dispute as an administrator
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-6'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <div>
            
            {isAdmin && (
              <TabsContent value="admin" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Admin Actions</CardTitle>
                    <CardDescription>Handle this dispute as an administrator</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className='font-medium mb-2'>Change Status</h3>
                      <div className='flex gap-2'>
                        <Button
                          variant='outline'
                          onClick={() => handleStatusChange('open')}
                          disabled={dispute.status === 'open'}
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
                        <Button
                          variant='outline'
                          onClick={() => handleStatusChange('closed')}
                          disabled={dispute.status === 'closed'}                        >
                          Close Dispute
                        </Button>
                      </div>
                    </div>
                    {dispute.status !== 'resolved' && (
                    
                    {dispute.status !== "resolved" && (
                      <div>
                        <h3 className="font-medium mb-2">Resolve Dispute</h3>
                        <div className="space-y-4">
                          <Textarea
                    {dispute.status !== 'resolved' && (
                        <h3 className="font-medium mb-2">Resolve Dispute</h3>
                        <div className="space-y-4">
                          <Textarea
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
                            placeholder="Enter resolution summary..."
                            value={resolution.summary}
                            onChange={(e) => setResolution({ ...resolution, summary: e.target.value })}
                            className="min-h-[100px]"
                          />
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>
                              <select
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
                        </div>
                      </div>
                    )}
                                className="w-full p-2 border rounded"
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
                      </div>
                    )}
                    
                        </div>
                      </div>
                    )}
                    
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <div>
                      <h3 className="font-medium mb-2">Admin Notes</h3>
                      <div className="space-y-4 max-h-[300px] overflow-y-auto p-2">
                        {messages
                          .filter(msg => msg.is_admin_note)
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
                      onChange={e => setMessage(e && e.target.value)}
                      className='min-h-[100px]';
                      disabled={isSending}                    />;
                    <div className='flex justify-end'>;
                      <Button
                        onClick={handleSendMessage}
=======
                    <div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </Button>;
                    </div>;
                  </div>;
                </CardFooter>;
              </Card>;
            </TabsContent>;
<<<<<<< HEAD
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
=======

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>;
                </CardContent>;
              </Card>;
            </TabsContent>;

<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
            {is_admin && (
              <TabsContent value='admin' className='space - y-6'>;
                <Card>;
                  <CardHeader>;
                    <CardTitle > Admin Actions</CardTitle>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <CardDescription>;
                      Handle this dispute as an administrator;
                    </CardDescription>;
                  </CardHeader>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


                        >
                          Mark as Open
                        </Button>
                        <Button
                          variant='outline'
                          onClick={() => handleStatusChange('under_review')}
                          disabled={dispute && dispute.status === 'under_review'}
                        >;
                          Mark as Under Review;
                        </Button>;
                        <Button
                          variant='outline'
                          onClick={() => handleStatusChange('closed')}
<<<<<<< HEAD

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
                          Close Dispute;
                        </Button>;
                      </div>;
                    </div>;


=======
                          disabled={dispute.status === 'closed'}                        >
                          Close Dispute
                        </Button>
                      </div>
                    </div>
                    {dispute.status !== 'resolved' && (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    
                    {dispute.status !== "resolved" && (


                      <div>
                        <h3 className="font-medium mb-2">Resolve Dispute</h3>
                        <div className="space-y-4">
                          <Textarea
<<<<<<< HEAD

=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            placeholder="Enter resolution summary..."
                            value={resolution.summary}
                            onChange={(e) => setResolution({ ...resolution, summary: e.target.value })}
                            className="min-h-[100px]"
                          />
                          
                          <div className="grid grid-cols-2 gap-4">

                            <div>
                              <label className='text-sm font-medium mb-1 block'>
                                Resolution Type
                              </label>
                              <select



                                className="w-full p-2 border rounded"
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h3 className='font-medium mb-2'>Admin Notes</h3>
                      <div className='space-y-4 max-h-[300px] overflow-y-auto p-2'>
                        {messages
                          .filter(msg => msg.is_admin_note)

                          disabled={dispute && dispute.status === 'closed'}                        >;
                          Close Dispute;
                        </Button>;
                      </div>;
                    </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              </div>
                              <p className='whitespace-pre-wrap text-sm'>
                                {msg.message}
                              </p>
                            </div>
<<<<<<< HEAD


<<<<<<< HEAD
                              </div>
                              <span className="text-xs opacity-70">
                                {format(new Date(msg.created_at), 'MMM d, h:mm a')}
                              </span>
                            </div>
                          ))}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                          ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            <p className="whitespace-pre-wrap text-sm">{msg.message}</p>
                          </div>
                        ))}
                        
<<<<<<< HEAD
<<<<<<< HEAD
                        {!messages.some(msg => msg.is_admin_note) && (
                          <p className="text-sm text-muted-foreground italic">No admin notes yet</p>
                        )}
                      </div>
                      <Separator className='my-4' />
                      <div className='space-y-4'>
                        <Textarea
                          placeholder='Add an admin note (only visible to administrators)...'
                          value={adminNote}
                          onChange={e => setAdminNote(e.target.value)}                        />
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {!messages.some(msg => msg.is_admin_note) && (
                          <p className='text-sm text-muted-foreground italic'>
                            No admin notes yet
                          </p>
                        )}
                      </div>
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
                      <Separator className='my-4' />
                      <div className='space-y-4'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <Textarea
                          placeholder='Add an admin note (only visible to administrators)...'
                          value={adminNote}
                          onChange={e => setAdminNote(e && e.target.value)}                        />;

                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-4">
                        <Textarea
                          placeholder="Add an admin note (only visible to administrators)..."
                          value={adminNote}
                          onChange={(e) => setAdminNote(e.target.value)}
                        />

                        <Button
                          variant='outline'
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                              }) }
=======

                              }) }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-4">
                        <Textarea
                          placeholder="Add an admin note (only visible to administrators)..."
                          value={adminNote}
                          onChange={(e) => setAdminNote(e.target.value)}
                        />
                        <Button
                          variant="outline"
                          onClick={() => {
                            if (adminNote.trim()) {
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                              addDisputeMessage(disputeId!, adminNote, true).then(() => {
                                getDisputeMessages(disputeId!).then(setMessages),
                                setAdminNote("")
                              })
                            }

<<<<<<< HEAD
<<<<<<< HEAD
                          }}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          }}
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
        <div className='space-y-6'>
<<<<<<< HEAD
=======
        
        <div className="space-y-6">


          <Card>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <CardHeader>
              <CardTitle>Parties Involved</CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='flex items-start gap-4'>
                <Avatar className='h-10 w-10'>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          }}
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
                        >;
                          Add Admin Note;
                        </Button>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
        <div className='space-y-6'>
        
        <div className="space-y-6">
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Card>
            <CardHeader>
              <CardTitle>Parties Involved</CardTitle>
            </CardHeader>
<<<<<<< HEAD
              </TabsContent>;
            )}
          </Tabs>;
        </div>;
        ;
        <div className="space-y-6">;
=======

          </Tabs>;
        </div>;

        <div className='space-y-6'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Card>;
            <CardHeader>;
              <CardTitle>Parties Involved</CardTitle>;
            </CardHeader>;
<<<<<<< HEAD
                  <AvatarImage
                    src={dispute && dispute.client_profile?.avatar_url}
                    alt={
=======
            <CardContent className='space-y-6'>;
              <div className='flex items-start gap-4'>;
                <Avatar className='h-10 w-10'>;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <AvatarImage
                    src={dispute && dispute.client_profile?.avatar_url}
                    alt={

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='flex justify-center'>;
                <ArrowDown className='h-6 w-6 text-muted-foreground' />;
              </div>;
              <div className='flex items-start gap-4'>;
                <Avatar className='h-10 w-10'>;
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <div className='flex justify-center'>;
                <ArrowDown className='h-6 w-6 text-muted-foreground' />;
              </div>;

              <div className='flex items-start gap-4'>;
                <Avatar className='h-10 w-10'>;

                  <AvatarImage
                    src={dispute && dispute.talent_profile?.avatar_url}
                    alt={
<<<<<<< HEAD


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                      dispute.talent_profile?.display_name |'Talent avatar'
                    }
                  />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div>
                  <p className='font-medium'>Talent</p>
                  <p className='text-sm text-muted-foreground'>
                    {dispute.talent_profile?.display_name |'Unknown Talent'}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              
              <div className="flex justify-center">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
              </div>
              
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={dispute.talent_profile?.avatar_url} alt={dispute.talent_profile?.display_name || "Talent avatar"} />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Talent</p>
                  <p className="text-sm text-muted-foreground">
                    {dispute.talent_profile?.display_name || "Unknown Talent"}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          


          <Card>
<<<<<<< HEAD
=======
            <CardHeader>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
          
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
                  <AvatarImage
                    src={dispute && dispute.talent_profile?.avatar_url}
                    alt={
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      dispute && dispute.talent_profile?.display_name || 'Talent avatar'
                    }
                  />;
                  <AvatarFallback>T</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className='font-medium'>Talent</p>;
                  <p className='text-sm text-muted-foreground'>;
                    {dispute && dispute.talent_profile?.display_name || 'Unknown Talent'}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
          ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Card>;
            <CardHeader>;
              <CardTitle>Case Information</CardTitle>;
            </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  if (!disputeId |!message.trim () ) return
=======

    </div>);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
}, [disputeId, getDisputeById, getDisputeMessages, router])
}
const handleResolveDispute = async () => {
<<<<<<< HEAD
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
  if (!disputeId |!message.trim () ) return
  if (!disputeId || !message.trim () ) return;
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
;
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
=======

    </div>);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
;
;

;

<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

;

;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
