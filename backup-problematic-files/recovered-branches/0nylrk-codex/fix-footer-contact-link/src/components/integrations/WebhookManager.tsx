
import React, { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/
import { Button } from "@/components/ui/
import { Input } from "@/components/ui/
import { Label } from "@/components/ui/
import { ClickableBadge } from "@/components/ui/
import { useWebhooks, WebhookEventType } from "@/hooks/
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/
                placeholder="https: any
Reset form return (<div className="space-y-8"> <Card> <CardHeader> <CardTitle>Create Webhook</CardTitle> <CardDescription> Define webhooks to notify external systems when events occur in Zion. </CardDescription> </CardHeader> <CardContent className="space-y-4"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div className="space-y-2"> <Label htmlFor=" webhook-name">Webhook Name</Label> <Input /> </div> </div> <div className="space-y-2"> <Label>Events
</SelectContent> </Select> <PlusCircle className="h-4 w-4 mr-2"/> Add </Button> </div> </div> <div className="space-y-2"> <Label htmlFor=" webhook-secret">Secret (optional) </Label> 
 <Save className="h-4 w-4 mr-2"/> Create Webhook </Button> </CardFooter> 
  loading ? (<p>Loading webhooks...
</p>) : webhooks.length = = 0 ? (<p>No webhooks configured yet. Create your first webhook above.
</CardDescription> 
</span> 
</Button> </div> </div> </div> 
</div> 
</div> </div> 
  testResult && (<Card className="mt-4 border-blue-200"> <CardHeader> <CardTitle className="text-lg">Webhook Test Result</CardTitle> 
</span> </div> <div> <span className="font-medium">Response: any