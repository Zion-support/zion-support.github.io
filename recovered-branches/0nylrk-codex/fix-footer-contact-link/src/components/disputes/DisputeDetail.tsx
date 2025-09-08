
<<<<<<< HEAD
=======
const { disputeId } = useParams() as { disputeId?: string };
  const navigate = useNavigate();
  const { user } = useAuth();
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const [resolution, setResolution] = useState({;
    summary: "",;
    resolution_type: "compromise"}),;
  const [activeTab, setActiveTab] = useState("overview");

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsLoading(true);
      try {;
        const disputeData = await getDisputeById(disputeId);
        if (!disputeData) {;
          toast && toast.error("Dispute not found");
          navigate("/dashboard/disputes");
          return;
        }
        setDispute(disputeData);

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        const messagesData = await getDisputeMessages(disputeId);
        setMessages(messagesData);
      } catch (error) {;
        console && console.error("Error loading dispute data:", error);
        toast && toast.error("Failed to load dispute");
      } finally {;
        setIsLoading(false);
      }

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const success = await updateDisputeStatus(disputeId, status);
    if (success && dispute) {;
      setDispute({ ...dispute, status });
    }


<<<<<<< HEAD

=======
    const loadDisputeData = async () => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsLoading(true),
      try {}
        const disputeData = await getDisputeById(disputeId),
        if (!disputeData) {"
          toast.error("Dispute not found"),"
          navigate("/dashboard/disputes"),
          return;
        }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        setDispute(disputeData),
        
        const messagesData = await getDisputeMessages(disputeId),

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        setMessages(messagesData)
      } catch (error) {"
        console.error("Error loading dispute data:", error),"
        toast.error("Failed to load dispute")
      } finally {}
        setIsLoading(false)

<<<<<<< HEAD

      }
    }
    loadDisputeData()
  }, [disputeId, navigate, getDisputeById, getDisputeMessages]);
  const handleStatusChange = async (status: DisputeStatus) => {
    if (!disputeId) return
    const success = await updateDisputeStatus(disputeId, status);
    if (success && dispute) {
      setDispute({ ...dispute, status })

    }

=======
      }
    }
    if (!disputeId) return;
};
import React, { useState, useEffect } from "react";"
import { useParams, useNavigate } from "react-router-dom";"
import { useDisputes } from "@/hooks/useDisputes",;"
import { disputeReasonLabels, DisputeMessage, DisputeStatus } from "@/types/disputes",;"
import { Button } from "@/components/ui/button",;"
import { Textarea } from "@/components/ui/textarea",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
import { Separator } from "@/components/ui/separator",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;"
import { format, formatDistanceToNow } from "date-fns",;"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",;"
import { ShieldAlert, ArrowDown, Check, X, MessageSquare, Download } from "lucide-react",;"
import { useAuth } from "@/hooks/useAuth",;"
import { toast } from "sonner",;"
export function DisputeDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState, useEffect } from "react",;
import { useParams, useNavigate } from "react-router-dom",;
import { useDisputes } from "@/hooks/useDisputes",;
import { disputeReasonLabels, DisputeMessage, DisputeStatus } from "@/types/disputes",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Separator } from "@/components/ui/separator",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { format, formatDistanceToNow } from "date-fns",;
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",;
import { ShieldAlert, ArrowDown, Check, X, MessageSquare, Download } from "lucide-react",;
import { useAuth } from "@/hooks/useAuth",;

import { toast } from "sonner",;
export function DisputeDetail() { return null; }
  const { disputeId } = useParams() as { disputeId?: string },;
  const navigate = useNavigate(),;
  const { user } = useAuth(),;
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes(),;
  const [dispute, setDispute] = useState<any>(null),;
  const [messages, setMessages] = useState<DisputeMessage[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [message, setMessage] = useState(""),;"
  const [isSending, setIsSending] = useState(false),;
  const [resolution, setResolution] = useState({;
    }
    "summary": "",;"
    "resolution_type": "compromise"}),;"
  const [activeTab, setActiveTab] = useState("overview"),;"
  // Check if user is admin (placeholder - implement proper admin check);
  const isAdmin = user?.userType === "admin",;"
  useEffect(() => {;
    }
    if (!disputeId) return,;
    const loadDisputeData = async () => {;
      }
      setIsLoading(true),;
      try {;
        }
        const disputeData = await getDisputeById(disputeId),;
        if (!disputeData) {;
          }
          toast.error("Dispute not found"),;"
          navigate("/dashboard/disputes"),;"
          return;
        }
        setDispute(disputeData),;
        const messagesData = await getDisputeMessages(disputeId),;
        setMessages(messagesData);
      } catch (error) {;
        }
        console.error("Error loading dispute "data":", error),;"
        toast.error("Failed to load dispute");"
      } finally {;
        }
        setIsLoading(false);
      }
    },;
    loadDisputeData();
  }, [disputeId, navigate, getDisputeById, getDisputeMessages]),;
  const handleStatusChange = async ("status": DisputeStatus) => {;
    }
    if (!disputeId) return,;
    const success = await updateDisputeStatus(disputeId, status),;
    if (success && dispute) {;
      }
      setDispute({ ...dispute, status });
    }
  },

<<<<<<< HEAD

  const handleResolveDispute = async () => {}

    if (!disputeId) return,

=======
  const handleResolveDispute = async () => {
    }
    if (!disputeId) return,
  const { disputeId } = useParams() as { disputeId?: string },
  const navigate = useNavigate($2);
  const { user } = useAuth($2);
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes($2);
  const [dispute, setDispute] = useState<any>(null),
  const [messages, setMessages] = useState<DisputeMessage[]>([]),
  const [isLoading, setIsLoading] = useState($2);
  const [message, setMessage] = useState($2);
  const [isSending, setIsSending] = useState($2);
  const [resolution, setResolution] = useState($2);
  const [activeTab, setActiveTab] = useState($2);
  // Check if user is admin (placeholder - implement proper admin check)
  const isAdmin = $2;
  useEffect(() => {
    if (!disputeId) return,


    
    loadDisputeData()
  }, [disputeId, navigate, getDisputeById, getDisputeMessages]),
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const handleStatusChange = $2;
    const success = await updateDisputeStatus($2);
    if (success && dispute) {
      setDispute({ ...dispute, status })
    }
  },

  const handleResolveDispute = $2;
    if (!resolution.summary) {
<<<<<<< HEAD
=======
      toast.error($2);
      return
    }
    
    const success = await resolveDispute($2);
    if (!resolution.summary) {
>>>>>>> origin/cursor/delete-old-data-records-6bba
      toast.error("Please provide a resolution summary");
      return
    }

    const success = await resolveDispute(disputeId, resolution),

    if (!resolution.summary) {"
      toast.error("Please provide a resolution summary"),
      return;
    }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (success && dispute) {
      setDispute({
        ...dispute
        status: "resolved"
        resolution_summary: resolution.summary
        resolution_type: resolution.resolution_type
        resolved_at: new Date().toISOString()
      })
    }

<<<<<<< HEAD


  },

  const handleSendMessage = async () => {}
    if (!disputeId || !message.trim()) return,
    
    setIsSending(true),



    try {

      toast.error("Please provide a resolution summary");
      return
    }

    const success = await resolveDispute(disputeId, resolution),

    if (!resolution.summary) {
      toast.error("Please provide a resolution summary"),
      return

      const success = await addDisputeMessage(disputeId, message, isAdmin),
      if (success) {}
        // Refresh messages;
        const updatedMessages = await getDisputeMessages(disputeId),
        setMessages(updatedMessages),"
        setMessage("")
      }
    } catch (error) {"
      console.error("Error sending message:", error)
    } finally {}
      setIsSending(false)



      toast && toast.error("Please provide a resolution summary");
      return;
    }



    const success = await resolveDispute(disputeId, resolution);
    if (success && dispute) {;
      setDispute({;
        ...dispute,;"
        status: "resolved",;
        resolution_summary: resolution.summary,;
        resolution_type: resolution.resolution_type,;
        resolved_at: new Date().toISOString();
      });
    }

  };


    setIsSending(true);

    try {;
      const success = await addDisputeMessage(disputeId, message, isAdmin),;
      if (success) {;
        // Refresh messages;
        const updatedMessages = await getDisputeMessages(disputeId),;
        setMessages(updatedMessages),;
        setMessage("");
      }
    } catch (error) {;
      console.error("Error sending message:", error);
    } finally {;
      setIsSending(false);
    }


      <div className="p-8 text-center">;

        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>;
        <p>Loading dispute details...</p>;
      </div>;
    );





    return (
      <div className="p-8 text-center">
        <p>Dispute not found</p>
        <Button onClick={() => navigate("/dashboard/disputes")} className="mt-4">
          Back to Disputes
        </Button>
      </div>
    )
  }
  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {



      case "open": return "default",
      case "under_review": return "secondary",


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      case "resolved": return "outline", // Changed from "success" to "outline"
      case "closed": return "outline",
      default: return "default"

    return (

  }

    return (

      <div className="p-8 text-center">
        <p>Dispute not found</p>"
        <Button onClick={() => navigate("/dashboard/disputes")} className="mt-4">
          Back to Disputes;
        </Button>
      </div>
    )
  }

      case "under_review": return "secondary",
"
      case "resolved": return "outline", // Changed from "success" to "outline""
      case "closed": return "outline","
      "default": return "default""
;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="p-8 text-center">;
        <p>Dispute not found</p>;"

        <Button onClick={() => navigate("/dashboard/disputes")} className="mt-4">;
          Back to Disputes;
        </Button>;
      </div>;
    );
  }
<<<<<<< HEAD



=======
  const getStatusBadgeVariant = (status: DisputeStatus) => {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    switch (status) {;
      case "open": return "default";
      case "under_review": return "secondary",;
      case "resolved": return "outline", // Changed from "success" to "outline";


import React, { useState, useEffect } from './react';
import { use_params, use_navigate } from './react-router-dom';
import { use_disputes } from '@/hooks / use_disputes';
import { disputeReasonLabels, DisputeMessage, DisputeStatus } from '@/types / disputes';
import { Button } from '@/components / ui / button';
import { Textarea } from '@/components / ui / textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Separator } from '@/components / ui / separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { format, formatDistanceToNow } from './date - fns';
import { Alert, AlertDescription, AlertTitle } from '@/components / ui / alert';
import { ShieldAlert, ArrowDown, Check, X, MessageSquare, Download } from './lucide-react';
import { use_auth } from '@/hooks / use_auth';

import { toast } from './sonner';
export /**;
 * DisputeDetail - Function description;
 */
function DisputeDetail() {
  // use_params may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  }
  const { dispute_id } = use_params () as { dispute_id?: string }
  const navigate = use_navigate ();
  const { user } = use_auth ();
  const { getDisputeById, updateDisputeStatus, resolve_dispute, getDisputeMessages, addDisputeMessage } = use_disputes ();
;
  const [dispute, set_dispute] = useState < any>(null);
  const [messages, set_messages] = useState < DisputeMessage[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const [message, set_message] = useState ("");"
  const [is_sending, setIsSending] = useState (false);
  const [resolution, set_resolution] = useState ({
    }
    "summary": "","
    "resolution_type": "compromise"}),"
  const [active_tab, setActiveTab] = useState ("overview");"
;
  // Check if user is admin (placeholder - implement proper admin check);
  const is_admin = user?.user_type === "admin";"
;
  useEffect (() => {
    // Check condition
}
<<<<<<< HEAD

    const loadDisputeData = async () => {}

=======
if (return) {
  $2
}
    const loadDisputeData = async () => {
      }
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsLoading (true);
      try {
        }
        const dispute_data = await getDisputeById (dispute_id);
        // Check condition,
if ( {) {
  $2
}
          toast.error ("Dispute not found");"
          navigate ("/dashboard / disputes");"
          return;
        }
        set_dispute (dispute_data);
;
        const messages_data = await getDisputeMessages (dispute_id);
        set_messages (messages_data);
      } catch (error) {
        }
        console.error ("Error loading dispute "data":", error);"
        toast.error ("Failed to load dispute");"
      } finally {
        }
        setIsLoading (false);
      }
    }
;
    loadDisputeData ();
  }, [dispute_id, navigate, getDisputeById, getDisputeMessages]);
;
  const handleStatusChange = async ("status": DisputeStatus) => {
    // Check condition
}
if (return, ) {
  $2
}
    const success = await updateDisputeStatus (dispute_id, status);
    // Check condition,
if ( {) {
  $2
}
      set_dispute ({ ...dispute, status });
    }
  }
;
<<<<<<< HEAD

  const handleResolveDispute = async () => {}
    // Check condition;
if (return) {}
  $2;

=======
  const handleResolveDispute = async () => {
    // Check condition
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
if (return) {
  $2
}
    // Check condition,
if ( {) {
  $2
}
      toast.error ("Please provide a resolution summary");"
      return;
    }
    const success = await resolve_dispute (dispute_id, resolution);
    // Check condition,
if ( {) {
  $2
}
      set_dispute ({
        ...dispute
        }
        "status": "resolved","
        "resolution_summary": resolution.summary,
        "resolution_type": resolution.resolution_type,
        "resolved_at": new Date ().toISOString ();
      });
    }
  }
;
  const handleSendMessage = async () => {
    }
    if () return) {
  $2
}
    setIsSending (true);
    try {
      }
      const success = await addDisputeMessage (dispute_id, message, is_admin);
      // Check condition,
if ( {) {
  $2
}
        // Refresh messages;
        const updated_messages = await getDisputeMessages (dispute_id);
        set_messages (updated_messages);
        set_message ("");"
      }
    } catch (error) {
      }
      console.error ("Error sending "message":", error);"
    } finally {
      }
      setIsSending (false);
<<<<<<< HEAD


import React, { useState, useEffect } from "react",;
import { useParams, useNavigate } from "react-router-dom",;
import { useDisputes } from "@/hooks/useDisputes",;
import { disputeReasonLabels, DisputeMessage, DisputeStatus } from "@/types/disputes",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Separator } from "@/components/ui/separator",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { format, formatDistanceToNow } from "date-fns",;
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",;
import { ShieldAlert, ArrowDown, Check, X, MessageSquare, Download } from "lucide-react",;
import { useAuth } from "@/hooks/useAuth",;
import { toast } from "sonner",;
;
export function DisputeDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { disputeId } = useParams() as { disputeId?:string },;
  const navigate = useNavigate(),;
  const { user } = useAuth(),;
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes(),;
  ;
  const [dispute, setDispute] = useState<any>(null),;
  const [messages, setMessages] = useState<DisputeMessage[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [message, setMessage] = useState(""),;
  const [isSending, setIsSending] = useState(false),;
  const [resolution, setResolution] = useState({;
    summary:"",;
    resolution_type:"compromise"}),;
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
          navigate("/dashboard/disputes"),;
          return,;
        }
        setDispute(disputeData),;
        ;
        const messagesData = await getDisputeMessages(disputeId),;
        setMessages(messagesData),;
      } catch (error) {;
        console.error("Error loading dispute data:", error),;
        toast.error("Failed to load dispute"),;
      } finally {;
        setIsLoading(false),;
      }
    },;
    ;
    loadDisputeData(),;
  }, [disputeId, navigate, getDisputeById, getDisputeMessages]),;
;
  const handleStatusChange = async (status:DisputeStatus) => {;
    if (!disputeId) return,;
    ;
    const success = await updateDisputeStatus(disputeId, status),;
    if (success && dispute) {;
      setDispute({ ...dispute, status }),;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  }
;
<<<<<<< HEAD
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
;

  const handleResolveDispute = async () => {;

=======
      case "closed": return "outline";
      default: return "default";
    }
import React, { useState, useEffect } from "react",;
import { useParams, useNavigate } from "react-router-dom",;
import { useDisputes } from "@/hooks/useDisputes",;
import { disputeReasonLabels, DisputeMessage, DisputeStatus } from "@/types/disputes",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Separator } from "@/components/ui/separator",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { format, formatDistanceToNow } from "date-fns",;
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",;
import { ShieldAlert, ArrowDown, Check, X, MessageSquare, Download } from "lucide-react",;
import { useAuth } from "@/hooks/useAuth",;

import { toast } from "sonner",;
;
  // Check condition,
if ( {) {
  $2
}
return (;
      <div className="p - 8 text-center">;"
        <div className="w - 8 h - 8 mx - auto mb - 4 animate - spin border - 4 border - primary border - t-transparent rounded-full"></div>;"
        <p > Loading dispute details...</p>;
      </div>);
  }
  // Check condition,
if ( {) {
  $2
}
return (;
      <div className="p - 8 text-center">;"
        <p > Dispute not found</p>;
        <Button on_click={() => navigate ("/dashboard / disputes")} className="mt-4">;"
          Back to Disputes;
        </Button>;
      </div>);
  }
  const getStatusBadgeVariant = ("status": DisputeStatus) =>: any {
    }
    switch (status) {
      }
      case "open": return "default";"
      case "under_review": return "secondary","
      case "resolved": return "outline", // Changed from './success'; to "outline";"
      case "closed": return "outline";"
      "default": return "default";"
    }
import React, { useState, useEffect } from "react",;"
import { useParams, useNavigate } from "react-router-dom",;"
import { useDisputes } from "@/hooks/useDisputes",;"
import { disputeReasonLabels, DisputeMessage, DisputeStatus } from "@/types/disputes",;"
import { Button } from "@/components/ui/button",;"
import { Textarea } from "@/components/ui/textarea",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
import { Separator } from "@/components/ui/separator",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;"
import { format, formatDistanceToNow } from "date-fns",;"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",;"
import { ShieldAlert, ArrowDown, Check, X, MessageSquare, Download } from "lucide-react",;"
import { useAuth } from "@/hooks/useAuth",;"
import { toast } from "sonner",;"
;
export function DisputeDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  }
  const { disputeId } = useParams() as { disputeId?:string },;
  const navigate = useNavigate(),;
  const { user } = useAuth(),;
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes(),;
  ;
  const [dispute, setDispute] = useState<any>(null),;
  const [messages, setMessages] = useState<DisputeMessage[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [message, setMessage] = useState(""),;"
  const [isSending, setIsSending] = useState(false),;
  const [resolution, setResolution] = useState({;
    }
    "summary":"",;"
    "resolution_type":"compromise"}),;"
  const [activeTab, setActiveTab] = useState("overview"),;"
;
  // Check if user is admin (placeholder - implement proper admin check);
  const isAdmin = user?.userType === "admin",;"
  ;
  useEffect(() => {;
    }
    if (!disputeId) return,;
;
    const loadDisputeData = async () => {;
      }
      setIsLoading(true),;
      try {;
        }
        const disputeData = await getDisputeById(disputeId),;
        if (!disputeData) {;
          }
          toast.error("Dispute not found"),;"
          navigate("/dashboard/disputes"),;"
          return,;
        }
        setDispute(disputeData),;
        ;
        const messagesData = await getDisputeMessages(disputeId),;
        setMessages(messagesData),;
      } catch (error) {;
        }
        console.error("Error loading dispute "data":", error),;"
        toast.error("Failed to load dispute"),;"
      } finally {;
        }
        setIsLoading(false),;
      }
    },;
    ;
    loadDisputeData(),;
  }, [disputeId, navigate, getDisputeById, getDisputeMessages]),;
;
  const handleStatusChange = async ("status":DisputeStatus) => {;
    }
    if (!disputeId) return,;
    ;
    const success = await updateDisputeStatus(disputeId, status),;
    if (success && dispute) {;
      }
      setDispute({ ...dispute, status }),;
    }
  },;
;
  const handleResolveDispute = async () => {;
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (!disputeId) return,;
    ;
    if (!resolution.summary) {;
      }
      toast.error("Please provide a resolution summary"),;"
      return,;
    }
    ;
    const success = await resolveDispute(disputeId, resolution),;
    if (success && dispute) {;
      }
      setDispute({ ;
        ...dispute, ;
        }
        "status":"resolved", ;"
        "resolution_summary":resolution.summary,;
        "resolution_type":resolution.resolution_type,;
        "resolved_at":new Date().toISOString();
      }),;
    }
  },;
;
  const handleSendMessage = async () => {;
    }
    if (!disputeId || !message.trim()) return,;
    ;
    setIsSending(true),;
    try {;
<<<<<<< HEAD

=======
      }
>>>>>>> origin/cursor/delete-old-data-records-6bba
      const success = await addDisputeMessage(disputeId, message, isAdmin),;
      if (success) {;
        // Refresh messages;
        }
        const updatedMessages = await getDisputeMessages(disputeId),;
<<<<<<< HEAD
        setMessages(updatedMessages),;"
        setMessage(""),;

=======
        setMessages(updatedMessages),;
        setMessage(""),;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
    } catch (error) {;
      }
      console.error("Error sending "message":", error),;"
    } finally {;
      }
      setIsSending(false),;
    }
  },;
;
  if (isLoading) {;
    }
    return (;
      <div className="p-8 text-center">;"
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>;"
        <p>Loading dispute details...</p>;
      </div>;
    ),;
  }
;
      case "closed": return "outline";"
      "default": return "default";"
    }

<<<<<<< HEAD
  return (;
    <div className="container mx-auto p-4 space-y-6">;

      <div className="flex flex-wrap items-center justify-between gap-4">;
        <div>;"
          <div className="flex items-center gap-2">;"
            <h1 className="text-2xl font-bold">Dispute Case</h1>;

            <Badge variant={getStatusBadgeVariant(dispute.status)}>;


              {dispute.status.replace('_ ')}
            </Badge>
          </div>"
          <p className="text-muted-foreground">
            Reported {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
          </p>
        </div>"
        <div className="flex gap-2">"
          <Button variant="outline" onClick={() => navigate("/dashboard/disputes")}>
            Back to List;
          </Button>"
          {isAdmin && dispute.status === "open" && ("
            <Button onClick={() => handleStatusChange("under_review")}>
              Start Review;


            </Button>
          )}
        </div>
      </div>



;
  return ("
    <div className="container mx - auto p - 4 space - y-6">;"
      <div className="flex flex - wrap items - center justify - between gap - 4">;
        <div>;"
          <div className="flex items - center gap - 2">;"
            <h1 className="text - 2xl font - bold">Dispute Case</h1>;
            <Badge variant={getStatusBadgeVariant (dispute.status)}>;'
              {dispute.status.replace ('_ ')}
            </Badge>;
          </div>;"
          <p className="text - muted - foreground">;
            Reported {formatDistanceToNow (new Date (dispute.created_at), { add_suffix: true })}
          </p>;
        </div>;"
        <div className="flex gap - 2">;"
          <Button variant="outline" on_click={() => navigate ("/dashboard / disputes")}>;
            Back to List;
          </Button>;"
          {is_admin && dispute.status === "open" && ("

            <Button on_click={() => handleStatusChange ("under_review")}>;
              Start Review;
            </Button>)}
        </div>;
      </div>;

      {dispute.status === "resolved" && dispute.resolution_summary && (
        <Alert className="bg - green - 50 border - green - 200 dark:bg - green - 900 / 20 dark:border - green - 900">;
          <Check className="h - 4 w - 4" />;
          <AlertTitle > This dispute has been resolved</AlertTitle>;
          <AlertDescription>;
            {dispute.resolution_summary}
      

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <Card>;
                <CardHeader>;
                  <CardTitle > Dispute Details</CardTitle>;
                  <CardDescription > Information about this dispute case</CardDescription>;

<<<<<<< HEAD
                </CardHeader>;
                <CardContent className="space - y-4">;
                  <div>;
                    <h3 className="font - medium">Reason</h3>;
                    <p>{disputeReasonLabels[dispute.reason_code as any] || dispute.reason_code}</p>;
                  </div>;
                  <div>;
                    <h3 className="font - medium">Description</h3>;
                    <p className="whitespace - pre - wrap">{dispute.description}</p>;
                  </div>;
                  <div>;
                    <h3 className="font - medium">Project</h3>;
                    <p>{dispute.project?.title || "Unknown Project"}</p>;
                    <p className="text - sm text - muted - foreground">{dispute.project?.scope_summary}</p>;
                  </div>;
                  {dispute.milestone_id && (
                    <div>;
                      <h3 className="font - medium">Related Milestone</h3>;
                      <p className="text - sm">Milestone ID: {dispute.milestone_id}</p>;
                    </div>)}
                  <div>;
                    <h3 className="font - medium">Timeline</h3>;
                    <ul className="space - y-2 mt - 2">;
                      <li className="flex gap - 2 items - center">;
                        <Badge variant="outline" className="h - 6 w - 6 rounded - full p - 0 flex items - center justify - center">1</Badge>;
                        <span > Created on {format (new Date (dispute.created_at), "MMM d, yyyy 'at' h:mm a")}</span>;
                      </li>;
                      {dispute.status !== "open" && (
                        <li className="flex gap - 2 items - center">;
                          <Badge variant="outline" className="h - 6 w - 6 rounded - full p - 0 flex items - center justify - center">2</Badge>;
                          <span > Under review</span>;
                        </li>)}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                      {dispute.resolved_at && (
                        <li className="flex gap - 2 items - center">;
                          <Badge variant="outline" className="h - 6 w - 6 rounded - full p - 0 flex items - center justify - center">;

                            {dispute.status !== "open" ? "3" : "2"}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="container mx-auto p-4 space-y-6">;
      <div className="flex flex-wrap items-center justify-between gap-4">;
        <div>;
          <div className="flex items-center gap-2">;
            <h1 className="text-2xl font-bold">Dispute Case</h1>;
            <Badge variant={getStatusBadgeVariant(dispute && dispute.status)}>;
              {dispute && dispute.status.replace('_ ')}
            </Badge>;
          </div>;
          <p className="text-muted-foreground">;
            Reported {formatDistanceToNow(new Date(dispute && dispute.created_at), { addSuffix: true })}
          </p>;
        </div>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="flex gap-2">;

          <Button variant="outline" onClick={() => navigate("/dashboard/disputes")}>;
            Back to List;
          </Button>;"
          {isAdmin && dispute && dispute.status === "open" && (;"
            <Button onClick={() => handleStatusChange("under_review")}>;
              Start Review;
            </Button>;
          )}
        </div>;
      </div>;

<<<<<<< HEAD


=======
      {dispute && dispute.status === "resolved" && dispute && dispute.resolution_summary && (;
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">;
          <Check className="h-4 w-4" />;
          <AlertTitle>This dispute has been resolved</AlertTitle>;
          <AlertDescription>;
            {dispute && dispute.resolution_summary}
          </AlertDescription>;
        </Alert>;
      )}
  if (!dispute) {;
    return (;
      <div className="p-8 text-center">;
        <p>Dispute not found</p>;
        <Button onClick={() => navigate("/dashboard/disputes")} className="mt-4">;
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
            Reported {formatDistanceToNow(new Date(dispute.created_at), { addSuffix:true })}
          </p>;
        </div>;
        ;
        <div className="flex gap-2">;
          <Button variant="outline" onClick={() => navigate("/dashboard/disputes")}>;
            Back to List;
          </Button>;
          {isAdmin && dispute.status === "open" && (;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;

        <div className="lg:col-span-2">;
          <Tabs value={activeTab} onValueChange={setActiveTab}>;"
            <TabsList className="mb-6">;"
              <TabsTrigger value="overview">Overview</TabsTrigger>;"
              <TabsTrigger value="messages">Messages</TabsTrigger>;"
              <TabsTrigger value="attachments">Attachments</TabsTrigger>;"
              {is_admin && <TabsTrigger value="admin">Admin Notes</TabsTrigger>}"
            </TabsList>;
<<<<<<< HEAD



=======
            <TabsContent value="overview" className="space-y-6">;"
              <Card>;
                <CardHeader>;
                  <CardTitle > Dispute Details</CardTitle>;
                  <CardDescription > Information about this dispute case</CardDescription>;
                </CardHeader>;
                <CardContent className="space-y-4">;"
                  <div>;
                    <h3 className="font-medium">Reason</h3>;"
                    <p>{disputeReasonLabels[dispute.reason_code as any] || dispute.reason_code}</p>;
                  </div>;
                  <div>;
                    <h3 className="font-medium">Description</h3>;"
                    <p className="whitespace - pre-wrap">{dispute.description}</p>;"
                  </div>;
                  <div>;
                    <h3 className="font-medium">Project</h3>;"
                    <p>{dispute.project?.title || "Unknown Project"}</p>;"
                    <p className="text - sm text - muted-foreground">{dispute.project?.scope_summary}</p>;"
                  </div>;
                  {dispute.milestone_id && (
                    <div>;
                      <h3 className="font-medium">Related Milestone</h3>;"
                      <p className="text-sm">Milestone "ID": {dispute.milestone_id}</p>;"
                    </div>)}
                  <div>;
                    <h3 className="font-medium">Timeline</h3>;"
                    <ul className="space - y-2 mt-2">;"
                      <li className="flex gap - 2 items-center">;"
                        <Badge variant="outline" className="h - 6 w - 6 rounded - full p - 0 flex items - center justify-center">1</Badge>;"
                        <span > Created on {format (new Date (dispute.created_at), "MMM d, yyyy 'at' "h":mm a")}</span>;"
                      </li>;
                      {dispute.status !== "open" && ("
                        <li className="flex gap - 2 items-center">;"
                          <Badge variant="outline" className="h - 6 w - 6 rounded - full p - 0 flex items - center justify-center">2</Badge>;"
                          <span > Under review</span>;
                        </li>)}
                        <li className="flex gap - 2 items-center">;"
                          <Badge variant="outline" className="h - 6 w - 6 rounded - full p - 0 flex items - center justify-center">;"
                            {dispute.status !== "open" ? "3" : "2"}"
        <div className="flex gap-2">;"
          <Button variant="outline" onClick={() => navigate("/dashboard/disputes")}>;"
            Back to List;
          </Button>;
          {isAdmin && dispute && dispute.status === "open" && (;"
            <Button onClick={() => handleStatusChange("under_review")}>;"
              Start Review;
            </Button>;
          )}
        </div>;
      </div>;
      <div className="grid grid-cols-1 "lg":grid-cols-3 gap-6">;"
        <div className=""lg":col-span-2">;"
          <Tabs value={activeTab} onValueChange={setActiveTab}>;
            <TabsList className="mb-6">;"
              <TabsTrigger value="overview">Overview</TabsTrigger>;"
              <TabsTrigger value="messages">Messages</TabsTrigger>;"
              <TabsTrigger value="attachments">Attachments</TabsTrigger>;"
              {isAdmin && <TabsTrigger value="admin">Admin Notes</TabsTrigger>}"
            </TabsList>;
            <TabsContent value="overview" className="space-y-6">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <TabsContent value="overview" className="space-y-6">;
              <Card>;
                <CardHeader>;
                  <CardTitle>Dispute Details</CardTitle>;
                  <CardDescription>Information about this dispute case</CardDescription>;
<<<<<<< HEAD
                </CardHeader>;"
                <CardContent className="space-y-4">;
                  <div>;"
                    <h3 className="font-medium">Reason</h3>;


=======
                </CardHeader>;
                <CardContent className="space-y-4">;"
                  <div>;
                    <h3 className="font-medium">Reason</h3>;"
                    <p>{disputeReasonLabels[dispute && dispute.reason_code as any] || dispute && dispute.reason_code}</p>;
                  </div>;

                  <div>;
                    <h3 className="font-medium">Description</h3>;"
                    <p className="whitespace-pre-wrap">{dispute && dispute.description}</p>;"
                  </div>;

                  <div>;
                    <h3 className="font-medium">Project</h3>;"
                    <p>{dispute && dispute.project?.title || "Unknown Project"}</p>;"
                    <p className="text-sm text-muted-foreground">{dispute && dispute.project?.scope_summary}</p>;"
                  </div>;

                  {dispute && dispute.milestone_id && (;
                    <div>;
                      <h3 className="font-medium">Related Milestone</h3>;"
                      <p className="text-sm">Milestone "ID": {dispute && dispute.milestone_id}</p>;"
                    </div>;
                  )}
                  <div>;
                    <h3 className="font-medium">Timeline</h3>;"
                    <ul className="space-y-2 mt-2">;"
                      <li className="flex gap-2 items-center">;"
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1</Badge>;"
                        <span>Created on {format(new Date(dispute && dispute.created_at), "MMM d, yyyy 'at' "h":mm a")}</span>;"
                      </li>;
                      {dispute && dispute.status !== "open" && (;                        <li className="flex gap-2 items-center">;"
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>;"
                          <span>Under review</span>;
                        </li>;
                      )}
                        <li className="flex gap-2 items-center">;

>>>>>>> origin/cursor/delete-old-data-records-6bba
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>;
                          <span>Under review</span>;
                        </li>;
                      )}


<<<<<<< HEAD
=======
                      {dispute && dispute.resolved_at && (;
                        <li className="flex gap-2 items-center">;"
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">;"
                            {dispute && dispute.status !== "open" ? "3" : "2"}"
                          </Badge>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                      )}
                    </ul>;
                  </div>;
                </CardContent>;
              </Card>;
<<<<<<< HEAD



=======
              {dispute && dispute.status === "resolved" && (;                <Card>;"
                <Card>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <CardHeader>;
                    <CardTitle>Resolution</CardTitle>;
                  </CardHeader>;
                  <CardContent>;


                    )}
                  </CardContent>;
                </Card>;
              )}
<<<<<<< HEAD



=======
                          </Badge>;
                          <span > Resolved on {format (new Date (dispute.resolved_at), "MMM d, yyyy 'at' h:mm a")}</span>;
                        </li>)}
                    </ul>;
                  </div>;
                </CardContent>;
              </Card>;
              {dispute.status === "resolved" && (
                <Card>;
                  <CardHeader>;
                    <CardTitle > Resolution</CardTitle>;
                  </CardHeader>;
                  <CardContent>;
                    <p className="whitespace - pre - wrap">{dispute.resolution_summary}</p>;
                    {dispute.resolution_type && (
                      <div className="mt - 4">;
                        <Badge>;
                          Resolution: {dispute.resolution_type.replace ('_ ')}
                        </Badge>;
                      </div>)}
                  </CardContent>;
                </Card>)}
            </TabsContent>;
            <TabsContent value="messages" className="space - y-6">;
              <Card>;
                <CardHeader>;
                  <CardTitle > Messages</CardTitle>;
                  <CardDescription > Communication regarding this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <div className="space - y-6 max - h-[600px] overflow - y-auto p - 2">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    {messages.length === 0 ? (
                      <div className="text - center py-12">;"
                        <MessageSquare className="mx - auto h - 12 w - 12 text - muted - foreground mb-2" />;"
                        <p className="text - muted-foreground">No messages yet</p>;"
                      </div>) : (
                      }
                      messages;
                        .filter (msg => { return !msg.is_admin_note); }
                        .map ((msg) => {
<<<<<<< HEAD

                          const isCurrentUser = user?.id === msg.user_id;
=======
                          }
                          const isCurrentUser = user?.id === msg.user_id;                    )}
                  </div>;
                </CardContent>;
                <CardFooter>;
                  <div className="w-full space-y-4">;"
              </Card>;"
              {dispute.status === "resolved" && (
                <Card>;
                  <CardHeader>;
                    <CardTitle > Resolution</CardTitle>;
                  </CardHeader>;
                  <CardContent>;"
                    <p className="whitespace - pre - wrap">{dispute.resolution_summary}</p>;
                    {dispute.resolution_type && ("
                      <div className="mt - 4">;
                        <Badge>;'
                          Resolution: {dispute.resolution_type.replace ('_ ')}
                        </Badge>;
                      </div>)}
                  </CardContent>;
                </Card>)}
            </TabsContent>;"
            <TabsContent value="messages" className="space - y-6">;
              <Card>;
                <CardHeader>;
                  <CardTitle > Messages</CardTitle>;
                  <CardDescription > Communication regarding this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;"
                  <div className="space - y-6 max - h-[600px] overflow - y-auto p - 2">;

                    {messages.length === 0 ? ("
                      <div className="text - center py - 12">;"
                        <MessageSquare className="mx - auto h - 12 w - 12 text - muted - foreground mb - 2" />;"
                        <p className="text - muted - foreground">No messages yet</p>;
                      </div>) : (
                      messages;
                        .filter (msg => !msg.is_admin_note);
                        .map ((msg) => {}
                          const isCurrentUser = user?.id === msg.user_id;
"
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <TabsContent value="messages" className="space-y-6">;
              <Card>;
                <CardHeader>;
                  <CardTitle>Messages</CardTitle>;
                  <CardDescription>Communication regarding this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;"
                  <div className="space-y-6 max-h-[600px] overflow-y-auto p-2">;
<<<<<<< HEAD


                                } p-4 rounded-lg`}>;
                                <div className="flex items-center gap-2 mb-2">;

=======

"
                      <div className="text-center py-12">;"
                        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" />;"
                        <p className="text-muted-foreground">No messages yet</p>;
                      </div>;

                                } p-4 rounded-lg`}>;"
                                <div className="flex items-center gap-2 mb-2">;"

>>>>>>> origin/cursor/delete-old-data-records-6bba
                                  <Avatar className="h-6 w-6">;
                                    <AvatarImage src={msg && msg.user_profile?.avatar_url} />;
                                    <AvatarFallback>;'
                                      {msg && msg.user_profile?.display_name?.[0] || '?'}
                                    </AvatarFallback>;
                                  </Avatar>;"
                                  <span className="text-sm font-medium">;'
                                    {msg && msg.user_profile?.display_name || 'Unknown User'}
                                  </span>;"
                                  <span className="text-xs opacity-70">;'
                                    {format(new Date(msg && msg.created_at), 'MMM d, h:mm a')}
                                  </span>;
                                </div>;"
                                <p className="whitespace-pre-wrap">{msg && msg.message}</p>;
                              </div>;
                            </div>;
                          );

<<<<<<< HEAD

=======
                          return (


>>>>>>> origin/cursor/delete-old-data-records-6bba
                    )}

                  </div>;
                </CardContent>;
                <CardFooter>;"
                  <div className="w-full space-y-4">;


                              key={msg.id}

                              className={`flex ${isCurrentUser ? 'justify - end' : 'justify - start'}`}
                            >;
                              <div;`
                                className={`max - w-[80%] ${}
                                  isCurrentUser;'
                                    ? 'bg - primary text - primary - foreground';'
                                    : 'bg - muted';`
                                } p - 4 rounded - lg`}

                                    <AvatarImage src={msg.user_profile?.avatar_url} />;
                                    <AvatarFallback>;'
                                      {msg.user_profile?.display_name?.[0] || '?'}
                                    </AvatarFallback>;

                              </div>;
                            </div>);
                        }))}
                  </div>;
                </CardContent>;

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
                <CardFooter>;
                  <div className="w - full space-y-4">;"
                    <Textarea;
                      placeholder="Type your message here...";"
                      value={message}
                      on_change={(e) => set_message (e.target.value)}
                      className="min-h-[100px]";"
                      disabled={is_sending}
                    />;
                    <div className="flex justify-end">;"
                      <Button on_click={handleSendMessage} disabled={is_sending || !message.trim ()}>;
<<<<<<< HEAD
                        {is_sending ? "Sending..." : "Send Message"}

=======
                        {is_sending ? "Sending..." : "Send Message"}                      </Button>;"
                      </Button>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </div>;
                  </div>;
                </CardFooter>;
              </Card>;
            </TabsContent>;

<<<<<<< HEAD

                        >;
                          Close Dispute;
                        </Button>;
                      </div>;
                    </div>;

                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full space-y-4">
                    <Textarea
                      placeholder="Type your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[100px]"
                      disabled={isSending}
                    />
                    <div className="flex justify-end">
                      <Button onClick={handleSendMessage} disabled={isSending |!message.trim()}>
                        {isSending ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
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
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            {isAdmin && (
              <TabsContent value="admin" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Admin Actions</CardTitle>
                    <CardDescription>Handle this dispute as an administrator</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
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
                          Close Dispute
                        </Button>
                      </div>
                    </div>
                    {dispute.status !== "resolved" && (
                      <div>
                        <h3 className="font-medium mb-2">Resolve Dispute</h3>
                        <div className="space-y-4">
                          <Textarea
                            placeholder="Enter resolution summary..."
                            value={resolution.summary}
                            onChange={(e) => setResolution({ ...resolution, summary: e.target.value })}
                            className="min-h-[100px]"
                          />
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>
                              <select
                                className="w-full p-2 border rounded"
                                value={resolution.resolution_type}
                                onChange={(e) => setResolution({ ...resolution, resolution_type: e.target.value })}
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
                      </div>
                    )}


                    <div>
                      <h3 className="font-medium mb-2">Admin Notes</h3>
                      <div className="space-y-4 max-h-[300px] overflow-y-auto p-2">
                        {messages
                          .filter(msg => msg.is_admin_note)
                          .map((msg) => (
                          <div key={msg.id} className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage src={msg.user_profile?.avatar_url} />
                                  <AvatarFallback>
                                    {msg.user_profile?.display_name?.[0] |'A'}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-medium">
                                  {msg.user_profile?.display_name |'Admin'}

=======
"
            <TabsContent value="attachments">;
              <Card>;
                <CardHeader>;
                  <CardTitle>Attachments</CardTitle>;
                  <CardDescription>Files related to this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;"
                  <div className="text-center py-12">;"
                    <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" />;"
                    <p className="text-muted-foreground">No attachments available</p>;
              <Card>;
                <CardHeader>;
                  <CardTitle > Attachments</CardTitle>;
                  <CardDescription > Files related to this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <div className="text - center py-12">;"
                    <Download className="mx - auto h - 12 w - 12 text - muted - foreground mb-2" />;"
                    <p className="text - muted-foreground">No attachments available</p>;                  </div>;"
                </CardContent>;
              </Card>;
            </TabsContent>;
                  </div>;
                </CardContent>;
              </Card>;
            </TabsContent>;


            {isAdmin && (;"
              <TabsContent value="admin" className="space-y-6">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Admin Actions</CardTitle>;
                    <CardDescription>Handle this dispute as an administrator</CardDescription>;
                  </CardHeader>;"
                  <CardContent className="space-y-6">;
                    <div>;"
                      <h3 className="font-medium mb-2">Change Status</h3>;"
                      <div className="flex gap-2">;
                        <Button"
                          variant="outline" "
                          onClick={() => handleStatusChange("open")}"
                          disabled={dispute && dispute.status === "open"}
                        >;
                          Mark as Open;
                        </Button>;
                        <Button"
                          variant="outline" "
                          onClick={() => handleStatusChange("under_review")}"
                          disabled={dispute && dispute.status === "under_review"}
                        >;
                          Mark as Under Review;
                        </Button>;
                        <Button"
                          variant="outline" "
                          onClick={() => handleStatusChange("closed")}"
                          disabled={dispute && dispute.status === "closed"}
            {is_admin && (
              <TabsContent value="admin" className="space-y-6">;"
                <Card>;
                  <CardHeader>;
                    <CardTitle > Admin Actions</CardTitle>;
                    <CardDescription > Handle this dispute as an administrator</CardDescription>;
                  </CardHeader>;
                  <CardContent className="space-y-6">;"
                    <div>;
                      <h3 className="font - medium mb-2">Change Status</h3>;"
                      <div className="flex gap-2">;"
                        <Button;
                          }
                          variant="outline";"
                          on_click={() => handleStatusChange ("open")}                          disabled={dispute.status === "open"}"
                        >;
                          Mark as Open;
                        </Button>;
                        <Button;
                          variant="outline";"
                          on_click={() => handleStatusChange ("under_review")}                          disabled={dispute.status === "under_review"}"
                        >;
                          Mark as Under Review;
                        </Button>;
                        <Button;
                          variant="outline";"
                          on_click={() => handleStatusChange ("closed")}                          disabled={dispute.status === "closed"}"
                          disabled={dispute.status === "closed"}
                        >;
                          Close Dispute;
                        </Button>;

                      </div>;
                    </div>;"

                    {dispute && dispute.status !== "resolved" && (;
                      <div>;"
                        <h3 className="font-medium mb-2">Resolve Dispute</h3>;"
                        <div className="space-y-4">;
                          <Textarea"
                            placeholder="Enter resolution summary..."
                            value={resolution && resolution.summary}
                            onChange={(e) => setResolution({ ...resolution, summary: e && e.target.value })}"
                            className="min-h-[100px]";

                          />;"
                          <div className="grid grid-cols-2 gap-4">;
                            <div>;"
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>;
                              <select"
                                className="w-full p-2 border rounded"
                                value={resolution && resolution.resolution_type}
                                onChange={(e) => setResolution({ ...resolution, resolution_type: e && e.target.value })}


                                <option value="dismissed">Dismissed</option>;
                              </select>;
                            </div>;
                          </div>;

                          <Button onClick={handleResolveDispute}>Resolve Dispute</Button>;
                        </div>;
                      </div>;
                    )}


                                setMessage("")

                              })
                                getDisputeMessages(disputeId!).then(setMessages),"
                                setMessage("")
                              })

                      <div className="mt-4 space-y-4">;
                        <Textarea;"
                          placeholder="Add an admin note (only visible to administrators)...";
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />;
                        <Button;"
                          variant="outline";
                          onClick={() => {;
                              addDisputeMessage(disputeId!, message, true).then(() => {;
                                getDisputeMessages(disputeId!).then(setMessages);"
                                setMessage("");
                              });

                            }                      </div>;
                      ;

                      <div className="mt-4 space-y-4">;
                        <Textarea;"
                          placeholder="Add an admin note (only visible to administrators)...";
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />;

                                getDisputeMessages(disputeId!).then(setMessages),"
                                setMessage("")
                              })

                            }
                          .filter(msg => msg.is_admin_note);
                          .map((msg) => (;
                          <div key={msg.id} className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900">;
                            <div className="flex items-center justify-between mb-2">;
                              <div className="flex items-center gap-2">;
                                <Avatar className="h-6 w-6">;
                                  <AvatarImage src={msg.user_profile?.avatar_url} />;
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
                      <div className="mt-4 space-y-4">;
                        <Textarea;
                          placeholder="Add an admin note (only visible to administrators)...";
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />;
                        <Button ;
                          variant="outline" ;
                          onClick={() => {;
                            if (message.trim()) {;
                              addDisputeMessage(disputeId!, message, true).then(() => {;
                                getDisputeMessages(disputeId!).then(setMessages),;
                                setMessage(""),;
                              }),;                            }
                          }}
                        >
                          Add Admin Note;
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </div>"
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Parties Involved</CardTitle>
            </CardHeader>"
            <CardContent className="space-y-6">"
              <div className="flex items-start gap-4">"
                <Avatar className="h-10 w-10">"
                  <AvatarImage src={dispute.client_profile?.avatar_url} />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Client</p>"
                  <p className="text-sm text-muted-foreground">"
                    {dispute.client_profile?.display_name |"Unknown Client"}"
                  </p>
                </div>
              </div>
              <div className="flex justify-center">"
                <ArrowDown className="h-6 w-6 text-muted-foreground" />"
              </div>
              <div className="flex items-start gap-4">"
                <Avatar className="h-10 w-10">"
                  <AvatarImage src={dispute.talent_profile?.avatar_url} />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Talent</p>"
                  <p className="text-sm text-muted-foreground">"
                    {dispute.talent_profile?.display_name |"Unknown Talent"}"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Case Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">"
              <div className="flex justify-between">"
                <span className="font-medium">Case "ID":</span>"
                <span className="font-mono">{dispute.id}</span>"
              </div>
              <div className="flex justify-between">"
                <span className="font-medium">"Created":</span>"
                <span>{format(new Date(dispute.created_at), "MMM d, yyyy")}</span>"
              </div>
              <div className="flex justify-between">"
                <span className="font-medium">"Status":</span>"
                <Badge variant={getStatusBadgeVariant(dispute.status)}>
                  {dispute.status.replace('_ ')}'
                </Badge>
              </div>
              <div className="flex justify-between">"
                <span className="font-medium">Raised "by":</span>"
                <span>{dispute.raised_by === dispute.client_profile?.id ? "Client" : "Talent"}</span>"
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
;
                            }
                          .filter(msg => { return msg.is_admin_note); }
                          .map((msg) => (;
                          <div key={msg.id} className="bg-yellow-50 border-l-4 border-yellow-200 p-4 "dark":bg-yellow-900/20 "dark":border-yellow-900">;"
                            <div className="flex items-center justify-between mb-2">;"
                              <div className="flex items-center gap-2">;"
                                <Avatar className="h-6 w-6">;"
                                  <AvatarImage src={msg.user_profile?.avatar_url} />;
                                  <AvatarFallback>;
                                    {msg.user_profile?.display_name?.[0] || 'A'}'
                                  </AvatarFallback>;
                                </Avatar>;
                                <span className="text-sm font-medium">;"
                                  {msg.user_profile?.display_name || 'Admin'}'
                                </span>;
                              </div>;
                              <span className="text-xs opacity-70">;"
                                {format(new Date(msg.created_at), 'MMM d, "h":mm a')}'
                              </span>;
                            </div>;
                            <p className="whitespace-pre-wrap text-sm">{msg.message}</p>;"
                          </div>;
                        ))}
                        ;
                        {!messages.some(msg => { return msg.is_admin_note) && (; }
                          <p className="text-sm text-muted-foreground italic">No admin notes yet</p>;"
                        )}
                      </div>;
                      ;
                      <div className="mt-4 space-y-4">;"
                        <Textarea;
                          placeholder="Add an admin note (only visible to administrators)...";"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />;
                        <Button ;
                          variant="outline" ;"
                          onClick={() => {;
                            }
                            if (message.trim()) {;
                              }
                              addDisputeMessage(disputeId!, message, true).then(() => {;
                                }
                                getDisputeMessages(disputeId!).then(setMessages),;
                                setMessage(""),;"
                              }),;                            }

<<<<<<< HEAD
                          }}
                        >;
                          Add Admin Note;
                        </Button>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;



=======
          <Card>;
            <CardHeader>;
              <CardTitle>Parties Involved</CardTitle>;
            </CardHeader>;
            <CardContent className="space-y-6">;"
              <div className="flex items-start gap-4">;"
                <Avatar className="h-10 w-10">;"
                  <AvatarImage src={dispute && dispute.client_profile?.avatar_url} />;                  <AvatarFallback>C</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className="font-medium">Client</p>;"
                  <p className="text-sm text-muted-foreground">;"

                  </p>;

                </div>;
              </div>;
            </CardContent>;
          </Card>;


  setIsLoading (false) 
}
          <p className="text-muted-foreground">"
</p>
        <div className="flex gap-2">"
          <Button variant="outline" onClick={() => navigate("/dashboard/disputes")}>"


            <Button onClick={() => handleStatusChange("under_review")}>"

status: "resolved";
resolution summary: resolution.summary;
resolution type: resolution.resolution type;
resolved at: new Date () .toISOString () 
}) 

}className="mt-4" > Back to Disputes </Button> </div>) 
}
}
};


}` 
}> <div className= {`;
  `max-w-[80%] $ {
  isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-muted`;
}p-4 rounded-lg` 
}> <div className="flex items-center gap-2 mb-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {"
}/> <AvatarFallback> {
}  <span className="text-sm font-medium"> {"
</span>"
}</span> <span className="text-xs opacity-70"> {"
}</span> </div> <p className="whitespace-pre-wrap"> {"
</p>)
}</p> </div> </div>) "
}</div>  <CardFooter> <div className="w-full space-y-4" > <Textarea className="min-h-[100px]" disabled= {"
}/>  </div> </div>    <TabsContent value="attachments"> <Card> <CardHeader> <CardTitle>Attachments <CardDescription>Files related to this dispute  <CardContent> <div className="text-center py-12"> <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground" >No attachments available</p> </div>    <Card> <CardHeader> <CardTitle>Admin Actions <CardDescription>Handle this dispute as an administrator  <CardContent className="space-y-6"> <div> <h3 className="font-medium mb-2">Change Status</h3> <div className="flex gap-2" > <Button > Mark as Open  <Button > Mark as Under Review  <Button > Close Dispute  </div> </div> <h3 className="font-medium mb-2">Resolve Dispute</h3> <div className="space-y-4" > <Textarea placeholder="Enter resolution summary..." value= {"
  resolution.summary;
}onChange= {
  (e) => setResolution ({
  ...resolution, summary: e.target.value;)
}) "
}className="min-h-[100px]" /> <div className="grid grid-cols-2 gap-4"> <div> <label className="text-sm font-medium mb-1 block">Resolution Type</label> <select > <option value="client favor" >In Client's Favor</option> <option value="talent favor" >In Talent's Favor</option> <option value="compromise" >Compromise</option> <option value="dismissed">Dismissed</option> </select> </div> </div> <Button onClick= {"
  handleResolveDispute;
}>Resolve Dispute </div> </div>) "
}<div> <h3 className="font-medium mb-2">Admin Notes</h3> <div className="space-y-4 max-h-[300px] overflow-y-auto p-2"> {"

  messages .filter (msg => msg.is admin note) .map ( (msg) => (<div key= {
  msg.id 
}className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900"> <div className="flex items-center justify-between mb-2"> <div className="flex items-center gap-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {
  msg.user profile?.avatar url 
}/> <AvatarFallback> {
  msg.user profile?.display name?.[0] || 'A' 
}</AvatarFallback> </Avatar> <span className="text-sm font-medium"> {
  msg.user profile?.display name || 'Admin' 
}</span> </div> <span className="text-xs opacity-70"> {
  format (new Date (msg.created at), 'MMM d, h:mm a') 
}</span> </div> <p className="whitespace-pre-wrap text-sm"> {
  msg.message 
}</p> </div>) ) 
}{
  !messages.some (msg => msg.is admin note) && (<p className="text-sm text-muted-foreground italic">No admin notes yet</p>) 
}</div> <div className="mt-4 space-y-4" > <Textarea 
}
}
}> Add Admin Note </Button> </div> </div> </CardContent> </Card> </TabsContent>) 


}</Tabs> </div> <div className="space-y-6" > <Card> <CardHeader> <CardTitle>Parties Involved</CardTitle> </CardHeader> </p> </div> </div> <div className="flex justify-center" > <ArrowDown className="h-6 w-6 text-muted-foreground" /> </div> </p> </div> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Case Information</CardTitle> </CardHeader> </div> </CardContent> </Card> </div> </div> </div>) 
}
}
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
