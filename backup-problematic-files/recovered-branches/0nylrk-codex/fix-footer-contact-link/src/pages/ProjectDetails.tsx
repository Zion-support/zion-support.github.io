import { useState, useEffect } from "react",;""
import { useParams, useNavigate, Link } from "react-router-dom",;""
import { format } from "date-fns",;""
import { useAuth } from "@/hooks/useAuth",;""
import { useProjects } from "@/hooks/useProjects",;""
import { AppHeader } from "@/layout/AppHeader",;""
import { Footer } from "@/components/Footer",;""
import { SEO } from "@/components/SEO",;""
import { ProtectedRoute } from "@/components/ProtectedRoute",;""
import { Project, ProjectStatus } from "@/types/projects",;""
import { Button } from "@/components/ui/button",;"
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;"
  CardTitle} from "@/components/ui/card",;"
import {;
  Tabs,;
  TabsContent,;
  TabsList,;"
  TabsTrigger} from "@/components/ui/tabs",;"
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle,;"
  AlertDialogTrigger} from "@/components/ui/alert-dialog",;""
import { Avatar } from "@/components/ui/avatar",;""
import { Badge } from "@/components/ui/badge",;""
import { Textarea } from "@/components/ui/textarea",;""
import { toast } from "@/hooks/use-toast",;""
import { supabase } from "@/integrations/supabase/client",;""
import { ProjectReviewSection } from "@/components/projects/reviews/ProjectReviewSection",;"
import {;
  AlertCircle,;
  Calendar,;
  CheckCircle2,;
  Clock,;
  FileText,;
  Layers,;
  MessageSquare,;
  Video,;
  User,;"
  XCircle} from "lucide-react",;"
;
function ProjectDetailsContent() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { projectId } = useParams() as { projectId?:string },;
  const { user } = useAuth(),;
  const navigate = useNavigate(),;
  const { getProjectById, updateProjectStatus } = useProjects(),;
  ;
  const [project, setProject] = useState<Project | null>(null),;
</Project>
  const [notes, setNotes] = useState<any[]>([]),;
</any>"
      case "offer_sent":return <Badge variant="outline">Offer Sent</Badge>,;""
        return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>,;""
        return <Badge variant="secondary">Changes Requested</Badge>,;""
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>,;""
        return <Badge variant="default">Completed</Badge>,;""
        return <Badge variant="destructive">Canceled</Badge>,;""
        return <Badge variant="outline">{status}</Badge>,;""
      <div className="container mx-auto py-8">;"
</div>"
        <div className="flex justify-center items-center h-64">;"
</div>"
          <div className="text-center">;"
</div>"
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>;"
            <p>Loading project details...</p>;
          </div>;
        </div>;
      </div>;"
      <div className="container mx-auto py-8">;"
</div>
        <Card>;
</Card>"
          <CardContent className="flex flex-col items-center justify-center py-10">;"
</CardContent>"
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />;"
</AlertCircle>"
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>;""
            <p className="text-muted-foreground mb-4">;"
</p>
            </p>;"
            <Button onClick={() => navigate("/dashboard")}>;"
</Button>
            </Button>;
          </CardContent>;
        </Card>;
      </div>;
    <>;
      <SEO ;"
        title={`Project:${project.job?.title || 'Project Details'} | Zion AI Marketplace`} ;''
        description="View and manage your project details and collaboration.";"
      />;
</SEO>
      <AppHeader />;
</AppHeader>"
      <main className="container mx-auto px-4 py-8">;"
</main>"
        <div className="mb-6">;"
</div>"
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">;"
</div>
            <div>;
</div>"
              <h1 className="text-3xl font-bold">{project.job?.title || "Project"}</h1>;""
              <div className="flex items-center gap-2 mt-1">;"
</div>"
                <span className="text-muted-foreground">;"
</span>
                </span>;
              </div>;
            </div>;"
      <div className="container mx-auto py-8">;"
</div>
        <Card>;
</Card>"
          <CardContent className="flex flex-col items-center justify-center py-10">;"
</CardContent>"
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />;"
</AlertCircle>"
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>;""
            <p className="text-muted-foreground mb-4">;"
</p>
            </p>;"
            <Button onClick={() => navigate("/dashboard")}>;"
</Button>
            </Button>;
          </CardContent>;
        </Card>;
      </div>;
    <>;
      <SEO ;"
        title={`Project:${project.job?.title || 'Project Details'} | Zion AI Marketplace`} ;''
        description="View and manage your project details and collaboration.";"
      />;
</SEO>
      <AppHeader />;
</AppHeader>"
      <main className="container mx-auto px-4 py-8">;"
</main>"
        <div className="mb-6">;"
</div>"
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">;"
</div>
            <div>;
</div>"
              <h1 className="text-3xl font-bold">{project.job?.title || "Project"}</h1>;""
              <div className="flex items-center gap-2 mt-1">;"
</div>"
                <span className="text-muted-foreground">;"
</span>
                </span>;
              </div>;
            </div>;"
            <div className="space-x-2">;"
</div>
                <>;
                  <AlertDialog>;
</AlertDialog>
                    <AlertDialogTrigger asChild>;
</AlertDialogTrigger>"
                      <Button variant="default">;"
</Button>"
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Accept Offer;"
</CheckCircle2>
                      </Button>;
                    </AlertDialogTrigger>;
                    <AlertDialogContent>;
</AlertDialogContent>
                      <AlertDialogHeader>;
</AlertDialogHeader>
                        <AlertDialogTitle>Accept Project Offer?</AlertDialogTitle>;
                        <AlertDialogDescription>;
</AlertDialogDescription>
                        </AlertDialogDescription>;
                      </AlertDialogHeader>;
                      <AlertDialogFooter>;
</AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>;"
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>;"
</AlertDialogAction>
                        </AlertDialogAction>;
                      </AlertDialogFooter>;
                    </AlertDialogContent>;
                  </AlertDialog>;"
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>;"
</Button>"
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes;"
</MessageSquare>
                  </Button>;
                </>;
              )}
              ;"
              {(isClient || isTalent) && project.status === "in_progress" && (;"
                <AlertDialog>;
</AlertDialog>
                  <AlertDialogTrigger asChild>;
</AlertDialogTrigger>"
                    <Button variant="default">;"
</Button>"
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed;"
</CheckCircle2>
                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent>;
</AlertDialogContent>
                    <AlertDialogHeader>;
</AlertDialogHeader>
                      <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle>;
                      <AlertDialogDescription>;
</AlertDialogDescription>
                      </AlertDialogDescription>;
                    </AlertDialogHeader>;
                    <AlertDialogFooter>;
</AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>;)"
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>;"
</AlertDialogAction>
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
                </AlertDialog>;"
                <Button variant="default" asChild>;"
</Button>
                  <Link to={`/project/${project.id}/milestones`}>;
</Link>"
                    <Layers className="mr-2 h-4 w-4" /> Milestones;"
</Layers>
                  </Link>;
                </Button>;"
                <Button variant="outline" asChild>;"
</Button>
                  <Link to={`/project/${project.id}/room`}>;
</Link>"
                    <Video className="mr-2 h-4 w-4" /> Project Room;"
</Video>
                  </Link>;
                </Button>;
                <Button ;"
                  variant="outline" ;"
                  onClick={() => navigate(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
</Button>"
                  <MessageSquare className="mr-2 h-4 w-4" /> Message;"
</MessageSquare>
                </Button>;
            </div>;
          </div>;
        </div>;"
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;"
</div>"
          <div className="order-2 lg:order-1 lg:col-span-2">;"
</div>"
            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>;"
</Tabs>"
              <TabsList className="mb-6">;"
</TabsList>"
                <TabsTrigger value="details">Project Details</TabsTrigger>;""
                <TabsTrigger value="timeline">Timeline</TabsTrigger>;""
                <TabsTrigger value="documents">Documents</TabsTrigger>;""
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>;""
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>;"
              </TabsList>;"
              <TabsContent value="details">;"
</TabsContent>
                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle>Project Scope</CardTitle>;
                    <CardDescription>;
</CardDescription>
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
</CardContent>"
                    <div className="space-y-4">;"
</div>
                      <div>;
</div>"
                        <h3 className="font-semibold mb-2">Project Description</h3>;""
                        <div className="bg-muted/30 p-4 rounded-md">;"
</div>"
                          <p className="whitespace-pre-wrap">{project.scope_summary}</p>;"
                        </div>;
                      </div>;
                      <div>;
</div>"
                        <h3 className="font-semibold mb-2">Payment Terms</h3>;""
                        <Badge variant="outline" className="capitalize">;"
</Badge>
                        </Badge>;
                      </div>;
                      <div>;
</div>"
                        <h3 className="font-semibold mb-2">Job Details</h3>;""
                        <div className="bg-muted/30 p-4 rounded-md">;"
</div>"
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>;"
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;"
              <TabsContent value="timeline">;"
</TabsContent>
                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle>Project Timeline</CardTitle>;
                    <CardDescription>;
</CardDescription>
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
</CardContent>"
                    <div className="space-y-4">;"
</div>"
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;"
</div>"
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />;"
</Calendar>
                        <div>;
</div>"
                          <h3 className="font-semibold">Start Date</h3>;""
                          <p>{format(new Date(project.start_date), "PPP")}</p>;"
                        </div>;
                      </div>;"
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;"
</div>"
                        <Clock className="h-5 w-5 text-primary mt-0.5" />;"
</Clock>
                        <div>;
</div>"
                          <h3 className="font-semibold">Project Status</h3>;""
                          <div className="mt-1">;"
</div>
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;"
              <TabsContent value="documents">;"
</TabsContent>
                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle>Project Documents</CardTitle>;
                    <CardDescription>;
</CardDescription>
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
</CardContent>"
                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">;"
</div>"
                        <div className="flex items-center gap-3">;"
</div>"
                          <FileText className="h-5 w-5 text-primary" />;"
</FileText>
                          <div>;
</div>"
                            <h3 className="font-semibold">Project Agreement</h3>;""
                            <p className="text-sm text-muted-foreground">;"
</p>
                            </p>;
                          </div>;
                        </div>;"
                        <Button variant="outline" size="sm" asChild>;"
</Button>"
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">;"
</a>
                          </a>;
                        </Button>;
                      </div>;"
                      <div className="text-center py-8">;"
</div>"
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />;"
</FileText>"
                        <h3 className="font-semibold">No Documents Yet</h3>;""
                        <p className="text-sm text-muted-foreground">;"
</p>
                        </p>;
                      </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;"
              <TabsContent value="notes">;"
</TabsContent>
                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle>Project Notes</CardTitle>;
                    <CardDescription>;
</CardDescription>
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
</CardContent>"
                    <div className="space-y-4">;"
</div>"
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">;"
</div>"
                            <div key={note.id} className="bg-muted/30 p-3 rounded-md">;"
</div>"
                              <div className="flex items-center gap-2 mb-2">;"
</div>"
                                <Avatar className="h-6 w-6">;"
</Avatar>
                                    <img;
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                                    />;
</img>"
                                    <User className="h-4 w-4" />;"
</User>
                                </Avatar>;"
                                <span className="font-medium text-sm">;"
</span>
                                </span>;"
                                <span className="text-xs text-muted-foreground">;"
</span>
                                </span>;
                              </div>;"
                              <p className="text-sm whitespace-pre-wrap">{note.content}</p>;"
                            </div>;"
                          <div className="text-center py-8">;"
</div>"
                            <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />;"
</MessageSquare>"
                            <p className="text-muted-foreground">;"
</p>
                            </p>;
                          </div>;
                      </div>;
                        <div>;
</div>
                          <Textarea;"
                            placeholder="Add a note or update to the project...";"
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
</Textarea>
                          <Button;
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() || isSubmittingNote}
                          >;
</Button>
                          </Button>;
                        </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;"
              <TabsContent value="reviews">;"
</TabsContent>
                <ProjectReviewSection project={project} />;
</ProjectReviewSection>
              </TabsContent>;
            </Tabs>;
          </div>;"
          <div className="order-1 lg:order-2 lg:col-span-1">;"
</div>
            <Card>;
</Card>
              <CardHeader>;
</CardHeader>
                <CardTitle>Project Participants</CardTitle>;
              </CardHeader>;
              <CardContent>;
</CardContent>"
                <div className="space-y-6">;"
</div>"
                  <div className="flex items-start gap-4">;"
</div>"
                    <Avatar className="h-10 w-10">;"
</Avatar>
                        <img;
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                        />;
</img>"
                        <User className="h-6 w-6" />;"
</User>
                    </Avatar>;
                    <div>;
</div>"
                      <h3 className="font-semibold">;"
</h3>
                      </h3>;"
                      <p className="text-sm text-muted-foreground">;"
</p>
                      </p>;
                        <Button;"
                          variant="outline";""
                          size="sm";""
                          className="mt-2";"
                          onClick={() => navigate(`/messages?talentId=${project.talent_id}`)}
</Button>"
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;"
</MessageSquare>
                        </Button>;
                    </div>;
                  </div>;"
                  <div className="flex items-start gap-4">;"
</div>"
                    <Avatar className="h-10 w-10">;"
</Avatar>
                        <img;
                          src={project.client_profile.avatar_url}
                          alt={project.client_profile.display_name}
                        />;
</img>"
                        <User className="h-6 w-6" />;"
</User>
                    </Avatar>;
                    <div>;
</div>"
                      <h3 className="font-semibold">;"
</h3>
                      </h3>;"
                      <p className="text-sm text-muted-foreground">Project Owner</p>;"
                        <Button;"
                          variant="outline";""
                          size="sm";""
                          className="mt-2";"
                          onClick={() => navigate(`/messages?clientId=${project.client_id}`)}
</Button>"
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;"
</MessageSquare>
                        </Button>;                      )}
                    </div>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;"
            <Card className="mt-6">;"
</Card>
              <CardHeader>;
</CardHeader>
                <CardTitle>Project Status</CardTitle>;
              </CardHeader>;
              <CardContent>;
</CardContent>"
                <div className="space-y-2">;"
</div>"
                  <div className="flex justify-between items-center">;"
</div>"
                    <span className="text-sm font-medium">Current Status:</span>;"
                    <div>{getStatusBadge(project.status)}</div>;
                  </div>;"
                  <div className="flex justify-between items-center">;"
</div>"
                    <span className="text-sm font-medium">Creation Date:</span>;""
                    <span className="text-sm">;"
</span>
                    </span>;
                  </div>;"
                  <div className="flex justify-between items-center">;"
</div>"
                    <span className="text-sm font-medium">Start Date:</span>;""
                    <span className="text-sm">;"
</span>
                    </span>;
                  </div>;
                </div>;
              </CardContent>;"
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;"
</CardFooter>"
                  <p className="text-sm text-amber-600 flex items-center gap-1">;"
</p>"
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.;"
</AlertCircle>
                  </p>;
                  <Button ;"
                    variant="outline";"
                    onClick={() => navigate(`/messages?talentId=${project.talent_id}`)}
</Button>"
                    <MessageSquare className="mr-2 h-4 w-4" /> Discuss Changes;"
</MessageSquare>
                  </Button>;
                </CardFooter>;"
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;"
</CardFooter>"
                  <p className="text-sm text-muted-foreground">;"
</p>
                  </p>;
                </CardFooter>;"
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;"
</CardFooter>"
                  <p className="text-sm text-green-600 flex items-center gap-1">;"
</p>"
                    <CheckCircle2 className="h-4 w-4" /> This project has been completed.;"
</CheckCircle2>
                  </p>;
                </CardFooter>;"
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;"
</CardFooter>"
                  <p className="text-sm text-red-600 flex items-center gap-1">;"
</p>"
                    <XCircle className="h-4 w-4" /> This project has been canceled.;"
</XCircle>
                  </p>;
                </CardFooter>;
            </Card>;
          </div>;
        </div>;
      </main>;
      <Footer />;
</Footer>
    </>;
  ),;
}
;
export default function ProjectDetails() {;
  return (;
    <ProtectedRoute>;
</ProtectedRoute>
      <ProjectDetailsContent />;
</ProjectDetailsContent>
    </ProtectedRoute>;"
case "offer accepted": return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>;""
case "changes requested": return <Badge variant="secondary">Changes Requested</Badge>;""
case "in progress": return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;""
case "completed": return <Badge variant="default">Completed</Badge>;""
case "canceled": return <Badge variant="destructive">Canceled</Badge>;""
default: return <Badge variant="outline"> {"
</Badge>
}</Badge> "
<p>Loading project details...</p> </div> </div> </div> <Card> <CardContent className="flex flex-col items-center justify-center py-10" > <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" /> <h2 className="text-xl font-bold mb-2" >Project Not Found</h2> <p className="text-muted-foreground mb-4" > The project you're looking for doesn't exist or you don't have access to it. </p> <Button onClick= {')'
  () => navigate ("/dashboard")"
}> Return to Dashboard </Button> </CardContent> </Card> </div>) "
}//Check if user is either the client or the talent container mx-auto px-4 py-8"> <div className=" mb-6"> <div className=" flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2"> <div> </span> </div> </div> <AlertDialog> <AlertDialogTrigger asChild> <Button variant=" default"> <CheckCircle2 className=" mr-2 h-4 w-4"/> Accept Offer </Button> </AlertDialogTrigger> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Accept Project Offer?</AlertDialogTitle> <AlertDialogDescription> By accepting this offer, you agree to the project terms and timeline. This will initiate the contract and start the project. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction onClick= {""
  () => handleStatusChange (" offer accepted")"
}> Accept Offer </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Button> </>) "
}<AlertDialogTrigger asChild> <Button variant=" default"> <CheckCircle2 className=" mr-2 h-4 w-4"/> Mark as Completed </Button> </AlertDialogTrigger> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle> <AlertDialogDescription> This will finalize the project and mark it as complete. Make sure all deliverables have been provided and approved. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction onClick= {""
  () => handleStatusChange (" completed")"
}> Mark as Completed </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog>) 
}<Link to= {
  `/project/$ {
  project.id;
}/milestones` "
}> <Layers className=" mr-2 h-4 w-4"/> Milestones </Link> </Button>)"
}<Link to= {
  `/project/$ {
  project.id;
}/room` "
}> <Video className=" mr-2 h-4 w-4"/> Project Room </Link> </Button>)""
}> <MessageSquare className=" mr-2 h-4 w-4"/> Message </Button>)"
</MessageSquare>
}</div> </div> </div>) "
}</TabsList> <TabsContent value=" details"> <Card> <CardHeader> <CardTitle>Project Scope</CardTitle> <CardDescription> Project details and expectations </CardDescription> </CardHeader> <CardContent> <div className=" space-y-4"> <div> </div> </div> <div> </Badge> </div> <div> </div> </div> </div> </CardContent> </Card> </TabsContent> <TabsContent value=" timeline"> <Card> <CardHeader> <CardTitle>Project Timeline</CardTitle> <CardDescription> Key dates and milestones </CardDescription> </CardHeader> <CardContent> <div className=" space-y-4"> <div className=" flex items-start gap-3 p-3 bg-muted/30 rounded-md"> <Calendar className=" h-5 w-5 text-primary mt-0.5"/> <div> </div> </div> <div className=" flex items-start gap-3 p-3 bg-muted/30 rounded-md"> <Clock className=" h-5 w-5 text-primary mt-0.5"/> <div> </div> </div> </div> </div> </CardContent> </Card> </TabsContent> <TabsContent value=" documents"> <Card> <CardHeader> <CardTitle>Project Documents</CardTitle> <CardDescription> Agreements and relevant files </CardDescription> </CardHeader> <CardContent> <div> <h3 className=" font-semibold">Project Agreement</h3> <p className=" text-sm text-muted-foreground"> Uploaded when project was created </p> </div> </div> <Button variant=" outline"size=" sm"asChild> <a href= {"
  project.agreement url;"
}target=" blank"rel=" noopener noreferrer"> View </Link> </Button> </div>) : (<div className=" text-center py-8"> <FileText className=" h-10 w-10 text-muted-foreground mx-auto mb-2"/> <h3 className=" font-semibold">No Documents Yet</h3> <p className=" text-sm text-muted-foreground"> No documents have been uploaded to this project. </p> </div>)""
}</CardContent> </Card> </TabsContent> <TabsContent value=" notes"> <Card> <CardHeader> <CardTitle>Project Notes</CardTitle> <CardDescription> Shared notes and updates </CardDescription> </CardHeader> <CardContent> <img src= {"
</TabsContent>"
}/>) : (<User className=" h-4 w-4"/>)"
</User>"
}</Avatar> </div>) ) ) : (<div className=" text-center py-8"> <MessageSquare className=" h-8 w-8 text-muted-foreground mx-auto mb-2"/> <p className=" text-muted-foreground"> No notes yet. Add the first note to this project. </p> </div>)"
}</div> {"
  isOfferAccepted && (<div> <Textarea placeholder=" Add a note or update to the project..."value= {"
</div>
}/> <Button onClick= {
  handleSubmitNote;
}disabled= {)
  !newNote.trim () || isSubmittingNote;
}> </Button> </div>) "
}</div> </CardContent> </Card> </TabsContent> </TabsContent> </Tabs> </div> <div className=" order-1 lg:order-2 lg:col-span-1"> <Card> <CardHeader> <CardTitle>Project Participants</CardTitle> </CardHeader> <CardContent> <img src= {"
</div>"
}/>) : (<User className=" h-6 w-6"/>)"
</User>
}</Avatar> <div> onClick= {
</div>"
}> <MessageSquare className=" mr-1 h-3 w-3"/> Message </Button>)"
</MessageSquare>
}</div> </div> <img src= {
  project.client profile.avatar url;
}alt= {
  project.client profile.display name;"
}/>) : (<User className=" h-6 w-6"/>)"
</img>
}</Avatar> <div> onClick= {
</div>"
}> <MessageSquare className=" mr-1 h-3 w-3"/> Message </Button>)"
</MessageSquare>"
}</div> </div> </div> </CardContent> </Card> <CardHeader> <CardTitle>Project Status</CardTitle> </CardHeader> <CardContent> </span> </div> </div> </CardContent> </p> <Button variant=" outline"onClick= {"
  () => navigate (`/messages?talentId=$ {
  project.talent id;)
}`) "
}className=" w-full"> <MessageSquare className=" mr-2 h-4 w-4" /> Discuss Changes </Button> </CardFooter>)"
</MessageSquare>
}Waiting for the talent to accept your offer. </p> </CardFooter>) 
}</p> </CardFooter>) 
}</p> </CardFooter>) 
}</Card> </div> </div> </main> <Footer /> </>) 
</Footer>
  return (<ProtectedRoute> <ProjectDetailsContent /> </ProtectedRoute> 
)"