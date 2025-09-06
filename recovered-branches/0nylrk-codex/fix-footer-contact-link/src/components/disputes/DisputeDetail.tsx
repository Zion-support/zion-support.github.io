
import React, { useState, useEffect } from "react",
import { useParams, useNavigate } from "react-router-dom",
import { useDisputes } from "@/hooks/useDisputes",
import { disputeReasonLabels, DisputeMessage, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Separator } from "@/components/ui/separator",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { format, formatDistanceToNow } from "date-fns",
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",
import { ShieldAlert, ArrowDown, Check, X, MessageSquare, Download } from "lucide-react",
import { useAuth } from "@/hooks/useAuth",
import { toast } from "sonner";
export function DisputeDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { disputeId } = useParams() as { disputeId?: string };
  const navigate = null;
                                setMessage("")
                              })
                            }
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
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Parties Involved</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={dispute.client_profile?.avatar_url} />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Client</p>
                  <p className="text-sm text-muted-foreground">
                    {dispute.client_profile?.display_name || "Unknown Client"}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
              </div>
              
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={dispute.talent_profile?.avatar_url} />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Talent</p>
                  <p className="text-sm text-muted-foreground">
                    {dispute.talent_profile?.display_name || "Unknown Talent"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
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
                <span>{dispute.raised_by === dispute.client_profile?.id ? "Client" : "Talent"}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
;