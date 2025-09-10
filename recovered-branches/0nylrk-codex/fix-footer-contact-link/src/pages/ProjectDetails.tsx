import {useState, useEffect} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {format} from "date-fns";
import {useAuth} from "@/hooks/useAuth";
import {useProjects} from "@/hooks/useProjects";
import {AppHeader} from "@/layout/AppHeader";
import {Footer} from "@/components/Footer";
import {SEO} from "@/components/SEO";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {Project, ProjectStatus} from "@/types/projects";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger} from "@/components/ui/alert-dialog";
import {Avatar} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {ProjectReviewSection} from "@/components/projects/reviews/ProjectReviewSection";
import {AlertCircle, Calendar, CheckCircle2, Clock, FileText, Layers, MessageSquare, Video, User, XCircle} from "lucide-react";

function ProjectDetailsContent() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { projectId } = useParams() as { projectId?: string };  const { user } = useAuth();
  const navigate = useNavigate();
  const { getProjectById, updateProjectStatus } = useProjects();
      if (projectData) {        // Now fetch notes
        fetchProjectNotes(projectId)
      } else {
        toast({

          title: "Project not found"
          description: "The requested project could not be found."
          variant: "destructive"})
        navigate("/dashboard")    try {
      const { data, error } = await supabase;
        .from ("project_notes");
        .select (`;
          *;
    } catch (err) {
      console.error ("Error fetching project notes:", err);
    }
  }
    } finally {
      setIsSubmittingNote (false);
    }
  }
    switch (status) {        // Now fetch notes;
        fetchProjectNotes(projectId);
      } else {;
        toast({;
          title: "Project not found",,
  description: "The requested project could not be found.",;
          variant: "destructive"}),;
        navigate("/dashboard");
      setIsLoading(false);
    }    return (
      <div className="container mx-auto py-8">;
        <Card>;
          <CardContent className="flex flex-col items-center justify-center py-10">;
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />;
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>;
            <p className="text-muted-foreground mb-4">;
              The project you're looking for doesn't exist or you don't have access to it.;
            </p>;
            <Button onClick={() => navigate("/dashboard")}>;
        return <Badge className="bg - green - 100 text - green-800">Offer Accepted</Badge>;
      case "changes_requested":;
        return <Badge variant="secondary">Changes Requested</Badge>;
      case "in_progress":;
        return <Badge className="bg - blue - 100 text - blue-800">In Progress</Badge>;
      case "completed":;
        return <Badge variant="default">Completed</Badge>;
      case "canceled":;
        return <Badge variant="destructive">Canceled</Badge>,
      default:;
        return <Badge variant="outline">{status}</Badge>;
    }
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="container mx - auto py-8">;
        <div className="flex justify - center items - center h-64">;
          <div className="text-center">;
            <div className="animate - spin h - 8 w - 8 border - 4 border - primary border - t-transparent rounded - full mx - auto mb-4"></div>;
                          </Link>                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                        <h3 className="font-semibold">No Documents Yet</h3>
                        <p className="text-sm text-muted-foreground">
                          No documents have been uploaded to this project.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>



                          Accept Offer;
                        </AlertDialogAction>;
                      </AlertDialogFooter>;
                    </AlertDialogContent>;
                  </AlertDialog>;
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>;

                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes;
                  </Button>;
                </>;
              )}

              {(isClient || isTalent) && project && project.status === "in_progress" && (;                <AlertDialog>;
                  <AlertDialogTrigger asChild>;
                    <Button variant="default">;

                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed;
                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent>;
                    <AlertDialogHeader>;
                      <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle>;
                      <AlertDialogDescription>;
                        This will finalize the project and mark it as complete. ;
                        Make sure all deliverables have been provided and approved.;
                      </AlertDialogDescription>;
                    </AlertDialogHeader>;
                    <AlertDialogFooter>;
                            {getStatusBadge(project && project.status)}                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="documents">;
                              Uploaded when project was created;
                            </p>;
                          </div>;
                        </div>;
                        <Button variant="outline" size="sm" asChild>;
                          <a href={project && project.agreement_url} target="_blank" rel="noopener noreferrer">;                            View;
                          </a>;
                        </Button>;
                      </div>;
                    ) : (;                      <div className="text-center py-8">;
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />;
                        <h3 className="font-semibold">No Documents Yet</h3>;

                        <p className="text-sm text-muted-foreground">;
                          No documents have been uploaded to this project.;
                        </p>;
                      </div>;
                    )}
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="notes">;

                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Notes</CardTitle>;
                    <CardDescription>;
                      Shared notes and updates;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;

                    <div className="space-y-4">;
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">;
                        {notes && notes.length > 0 ? (;
                          notes && notes.map((note) => (;
                            <div key={note && note.id} className="bg-muted/30 p-3 rounded-md">;
                              <div className="flex items-center gap-2 mb-2">;
                                <Avatar className="h-6 w-6">;
                                  {note && note.created_by_profile?.avatar_url ? (;
                                    <img
}
src={note && note.created_by_profile.avatar_url}
                                      alt={note && note.created_by_profile.display_name} />;
                                  ) : (;
                            disabled={!newNote && newNote.trim() || isSubmittingNote}>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">
                        {project.client_profile?.display_name |"Client"}
                      </h3>
                      <p className="text-sm text-muted-foreground">Project Owner</p>
                      {isTalent && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
            {/* Project Status Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
              </CardHeader>
              <CardContent>"
                <div className="space-y-2">"
                  <div className="flex justify-between items-center">"
                    <span className="text-sm font-medium">Current Status:</span>
                    <div>{getStatusBadge(project.status)}</div>
                  </div>"
                  <div className="flex justify-between items-center">"
                    <span className="text-sm font-medium">Creation Date:</span>"
                    <span className="text-sm">"
                      {format(new Date(project.created_at), "PPP")}
                    </span>
                  </div>"
                  <div className="flex justify-between items-center">"
                    <span className="text-sm font-medium">Start Date:</span>"
                    <span className="text-sm">"
                      {format(new Date(project.start_date), "PPP")}




}    </>);
}
export default /**;
 * ProjectDetails - Function description;
 */
function ProjectDetails() {}
  return (
    <ProtectedRoute>;
      <ProjectDetailsContent />;
    </ProtectedRoute>);
}
