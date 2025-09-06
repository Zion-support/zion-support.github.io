
import {
  Dispute,
  disputeReasonLabels,
  DisputeMessage,
  DisputeStatus,

  ResolutionType,;
} from '@/types/disputes';

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import React, { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import { useDisputes } from "@/hooks/useDisputes",
import {logErrorToProduction} from '@/utils/productionLogger',
import {
 Dispute, disputeReasonLabels, DisputeMessage, DisputeStatus, ResolutionType
} from "@/types/disputes",
<<<<<<< HEAD
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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

      return

    }
    const success = await resolveDispute(disputeId, {

      resolution_type:
        (resolution.resolution_type as ResolutionType) |'compromise'
    })

    if (success && dispute) {
      setDispute({
        ...dispute,
        resolution_summary: resolution.summary,
        resolution_type: resolution.resolution_type,

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
      setIsSending(false)
    }
  }

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  if (isLoading) {

    return (
      <div className='p-8 text-center'>;
        <div className='w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full'></div>;
        <p>Loading dispute details...</p>;
      </div>;
    );
  }

  if (!dispute) {;
    return (

      <div className="p-8 text-center">
        <p>Dispute not found</p>
=======
        <Button
          onClick={() => router.push('/dashboard/disputes')}
          className='mt-4'
        >          Back to Disputes
        <Button onClick={() => router.push("/dashboard/disputes")} className="mt-4">
          Back to Disputes
<<<<<<< HEAD

        </Button>
      </div>
    )
  }

<<<<<<< HEAD
      case 'open':
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
        return 'outline'; // Changed from "success" to "outline"
      case 'closed':
        return 'outline'
      default:
        return 'default'
    }
  }

      case "open": return "default",
      case "under_review": return "secondary",
      case "resolved": return "outline", // Changed from "success" to "outline"
      case "closed": return "outline",
      default: return "default"
    }
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

              <Card>
                <CardHeader>
                  <CardTitle>Dispute Details</CardTitle>
                  <CardDescription>
                    Information about this dispute case
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div>
                    <h3 className="font-medium">Reason</h3>
                    <p>{
                      disputeReasonLabels[
                        dispute.reason_code
                      ] ?? dispute.reason_code
                    }</p>
                  </div>

                  


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="whitespace-pre-wrap">{dispute.description}</p>
                  </div>

                  <div>
                    <h3 className="font-medium">Project</h3>
                    <p>{dispute.project?.title || "Unknown Project"}</p>
                    <p className="text-sm text-muted-foreground">{dispute.project?.scope_summary}</p>
                  </div>

                      {dispute.resolved_at && (

                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
=======
              {dispute.status === 'resolved' && (
              
              {dispute.status === "resolved" && (

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                <Card>
                  <CardHeader>
                    <CardTitle>Resolution</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                          disabled={dispute.status === 'closed'}                        >
                          Close Dispute
                        </Button>
                      </div>
                    </div>
=======
                    {dispute.status !== 'resolved' && (
                    
                    {dispute.status !== "resolved" && (

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                      <div>
                        <h3 className="font-medium mb-2">Resolve Dispute</h3>
                        <div className="space-y-4">
                          <Textarea
