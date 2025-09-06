import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { format } from "date-fns"
import { useAuth } from "@/hooks/
import { useProjects } from "@/hooks/
import { AppHeader } from "@/layout/
import { Footer } from "@/components/
import { SEO } from "@/components/
import { ProtectedRoute } from "@/components/
import { Project, ProjectStatus } from "@/types/
import { Button } from "@/components/ui/
  CardTitle} from "@/components/ui/
  TabsTrigger} from "@/components/ui/
  AlertDialogTrigger} from "@/components/ui/
import { Avatar } from "@/components/ui/
import { Badge } from "@/components/ui/
import { Textarea } from "@/components/ui/
import { toast } from "@/hooks/
import { supabase } from "@/integrations/supabase/
import { ProjectReviewSection } from "@/components/projects/reviews/
        navigate("/
            <Button onClick={() => navigate("/
    navigate("/
                        
<p>Loading project details...</p> </div> </div> </div> <Card> <CardContent className="flex flex-col items-center justify-center py-10" > <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" /> <h2 className="text-xl font-bold mb-2" >Project Not Found
  () => navigate ("/
/Check if user is either the client or the talent container mx-auto px-4 py-8"> <div className=" mb-6"> <div className=" flex flex-col md: any
</TabsList> <TabsContent value=" details"> <Card> <CardHeader> <CardTitle>Project Scope</CardTitle> <CardDescription> Project details and expectations </CardDescription> </CardHeader> <CardContent> <div className=" space-y-4"> <div></div> </div> <div></Badge> </div> <div></div> </div> </div> </CardContent> </Card> </TabsContent> <TabsContent value=" timeline"> <Card> <CardHeader> <CardTitle>Project Timeline</CardTitle> <CardDescription> Key dates and milestones </CardDescription> </CardHeader> <CardContent> <div className=" space-y-4"> <div className=" flex items-start gap-3 p-3 bg-muted/30 rounded-md"> <Calendar className=" h-5 w-5 text-primary mt-0.5"/> <div></div> </div> <div className=" flex items-start gap-3 p-3 bg-muted/30 rounded-md"> <Clock className=" h-5 w-5 text-primary mt-0.5"/> <div></div> </div> </div> </div> </CardContent> </Card> </TabsContent> <TabsContent value=" documents"> <Card> <CardHeader> <CardTitle>Project Documents</CardTitle> <CardDescription> Agreements and relevant files </CardDescription> </CardHeader> <CardContent> <div> <h3 className=" font-semibold">Project Agreement</h3> <p className=" text-sm text-muted-foreground"> Uploaded when project was created </p> </div> 
target=" blank"rel=" noopener noreferrer"> View </Link> </Button> </div>) : (<div className=" text-center py-8"> <FileText className=" h-10 w-10 text-muted-foreground mx-auto mb-2"/> <h3 className=" font-semibold">No Documents Yet
</CardContent> </Card> 
</Avatar> </div>) ) : (<div className=" text-center py-8"> 
</div> </CardContent> </Card> </TabsContent> </TabsContent> </Tabs> 
</div> </div> </div> </CardContent> </Card> <CardHeader> <CardTitle>Project Status</CardTitle> </CardHeader> <CardContent></span> </div> </div> </CardContent> 