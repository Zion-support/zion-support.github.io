
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

                    </ul>;
                  </div>;
                </CardContent>;
              </Card>;

                <Card>;
                  <CardHeader>;
                    <CardTitle>Resolution</CardTitle>;
                  </CardHeader>;
                  <CardContent>;

                  </CardContent>;
                </Card>;
              )}
            </TabsContent>;

                        });
                    )}
                  </div>;
                </CardContent>;
                <CardFooter>;

                      </Button>;
                    </div>;
                  </div>;
                </CardFooter>;
              </Card>;
            </TabsContent>;

                  </div>;
                </CardContent>;
              </Card>;
            </TabsContent>;

                          Close Dispute;
                        </Button>;
                      </div>;
                    </div>;

                        >;
                          Add Admin Note;
                        </Button>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;

          <Card>;
            <CardHeader>;
              <CardTitle>Parties Involved</CardTitle>;
            </CardHeader>;

                  </p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;

          <Card>;
            <CardHeader>;
              <CardTitle>Case Information</CardTitle>;
            </CardHeader>;

              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </div>;
