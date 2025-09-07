import {useState, useEffect} from \"react\";
import {useParams, useNavigate, Link} from \"react-router-dom\";
import {format} from \"date-fns\";
import {useAuth} from \"@/hooks/useAuth\";
import {useProjects} from \"@/hooks/useProjects\";
import {AppHeader} from \"@/layout/AppHeader\";
import {Footer} from \"@/components/Footer\";
import {SEO} from \"@/components/SEO\";
import {ProtectedRoute} from \"@/components/ProtectedRoute\";
import {Project, ProjectStatus} from \"@/types/projects\";
import {Button} from \"@/components/ui/button\";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from \"@/components/ui/card\";
import {Tabs, TabsContent, TabsList, TabsTrigger} from \"@/components/ui/tabs\";
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger} from \"@/components/ui/alert-dialog\";
import {Avatar} from \"@/components/ui/avatar\";
import {Badge} from \"@/components/ui/badge\";
import {Textarea} from \"@/components/ui/textarea\";
import {toast} from \"@/hooks/use-toast\";
import {supabase} from \"@/integrations/supabase/client\";
import {ProjectReviewSection} from \"@/components/projects/reviews/ProjectReviewSection\";
import {AlertCircle, Calendar, CheckCircle2, Clock, FileText, Layers, MessageSquare, Video, User, XCircle} from \"lucide-react\";
function ProjectDetailsContent() {;
  // useParams may be untyped in this environment, so avoid passing a;}
  // type argument and cast the result instead to prevent TS2347 errors.;}
  const { projectId } = useParams() as { projectId?: string };  const { user } = useAuth();
  const navigate = useNavigate();
  const { getProjectById, updateProjectStatus } = useProjects();
function ProjectDetailsContent() {
  // useParams may be untyped in this environment, so avoid passing a}
  // type argument and cast the result instead to prevent TS2347 errors.}
  const { projectId } = useParams() as { projectId?: string },
  const { user } = useAuth(),
  const navigate = useNavigate(),
  const { getProjectById, updateProjectStatus } = useProjects(),
  const [project, setProject] = useState<Project | null />(null),
  const [isLoading, setIsLoading] = useState(true),
  const [notes, setNotes] = useState<any[] />([]),
  const [newNote, setNewNote] = useState(\"\"),
  const [isSubmittingNote, setIsSubmittingNote] = useState(false),
  const [activeTab, setActiveTab] = useState(\"details\"),
  // Load project data;
useEffect(() => {
    async function loadProject() {
      if (!projectId) return,
      setIsLoading(true),
      const projectData = await getProjectById(projectId),
      if (projectData) {        // Now fetch notes;}
fetchProjectNotes(projectId)}
      } else {
        toast({
          title: \"title\",}
    description: \"The requested project could not be found.\"}
          variant: \"destructive\"})
        navigate(\"/dashboard\")    try {}
      const { data, error } = await supabase;
        .from (\"project_notes\");
        .select (`;
          *;
    } catch (err) {}
      console.error (\"Error fetching project notes:\", err);}
    }
  }
    } finally {}
      setIsSubmittingNote (false);}
    }
  }
    switch (status) {        // Now fetch notes;}
        fetchProjectNotes(projectId);}
      } else {;
        toast({;
          title: \"Project not found\",,}
  description: \"The requested project could not be found.\",;}
          variant: \"destructive\"}),;
        navigate(\"/dashboard\");
      setIsLoading(false);
    }    return (
      <div className=\"container mx-auto py-8\" />;
        <Card />;
          <CardContent className=\"flex flex-col items-center justify-center py-10\" />;
            <AlertCircle className=\"h-10 w-10 text-muted-foreground mb-4\" />;
            <h2 className=\"text-xl font-bold mb-2\" />Project Not Found</h2>;
            <p className=\"text-muted-foreground mb-4\" />;
              The project you're looking for doesn't exist or you don't have access to it.;
            </p>;
            <Button onClick={() = /> navigate(\"/dashboard\")}>;
        return <Badge className=\"bg - green - 100 text - green-800\" />Offer Accepted</Badge>;
      case \"changes_requested\":;
        return <Badge variant=\"secondary\" />Changes Requested</Badge>;
      case \"in_progress\":;
        return <Badge className=\"bg - blue - 100 text - blue-800\" />In Progress</Badge>;
      case \"completed\":;
        return <Badge variant=\"default\" />Completed</Badge>;
      case \"canceled\":;
        return <Badge variant=\"destructive\" />Canceled</Badge>,
      default:;
        return <Badge variant=\"outline\" />{status}</Badge>;
    }
  }
;
  // Check condition;
if ( {) {}
  $2}
}
    return (
      <div className=\"container mx - auto py-8\" />;
        <div className=\"flex justify - center items - center h-64\" />;
          <div className=\"text-center\" />;
            <div className=\"animate - spin h - 8 w - 8 border - 4 border - primary border - t-transparent rounded - full mx - auto mb-4\" /></div>;
            <p  /> Loading project details...</p>;
          </div>;
        </div>;
      </div>);  }
  },
  if (isLoading) {
    return (
      <div className=\"container mx - auto py-8\" />;
        <Card />;
          <CardContent className=\"flex flex - col items - center justify - center py-10\" />;
            <AlertCircle className=\"h - 10 w - 10 text - muted - foreground mb-4\" />;
            <h2 className=\"text - xl font - bold mb-2\" />Project Not Found</h2>;
            <p className=\"text - muted - foreground mb-4\" />;
              The project you're looking for doesn't exist or you don't have access to it.;}
            </p>;}
            <Button on_click={() = /> navigate (\"/dashboard\")}>;
            </Button>;
          </CardContent>;
        </Card>;
  return (
    <>
      <SEO;
title={`Project: ${project.job?.title |'Project Details'} | Zion AI Marketplace`}
        description=\"View and manage your project details and collaboration.\"
      />
      <AppHeader />
      <main className=\"container mx-auto px-4 py-8\" />
        <div className=\"mb-6\" />
          <div className=\"flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2\" />
            <div />
              <h1 className=\"text-3xl font-bold\" />{project.job?.title |\"Project\"}</h1>
              <div className=\"flex items-center gap-2 mt-1\" />
                {getStatusBadge(project.status)}
                <span className=\"text-muted-foreground\" />
                  Started on {format(new Date(project.start_date), \"PPP\")}
                </span>
              </div>
            </div>
            {/* Action Buttons Based on Role and Status */}
            <div className=\"space-x-2\" />
              {isTalent && isOfferPending && (
                <>
                  <AlertDialog />
                    <AlertDialogTrigger asChild />
                      <Button variant=\"default\" />
                        <CheckCircle2 className=\"mr-2 h-4 w-4\" /> Accept Offer;
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent />
                      <AlertDialogHeader />
                        <AlertDialogTitle />Accept Project Offer?</AlertDialogTitle>
                        <AlertDialogDescription />
                          By accepting this offer, you agree to the project terms and timeline.
                          This will initiate the contract and start the project.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter />}
                        <AlertDialogCancel />Cancel</AlertDialogCancel>}
                        <AlertDialogAction onClick={() = /> handleStatusChange(\"offer_accepted\")}>
                          Accept Offer;
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <Button variant=\"outline\" onClick={() = /> handleStatusChange(\"changes_requested\")}>
                    <MessageSquare className=\"mr-2 h-4 w-4\" /> Request Changes;
                  </Button>
                </>
              )}
              {(isClient |isTalent) && project.status === \"in_progress\" && (
                <AlertDialog />
                  <AlertDialogTrigger asChild />
                    <Button variant=\"default\" />
                      <CheckCircle2 className=\"mr-2 h-4 w-4\" /> Mark as Completed;
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent />
                    <AlertDialogHeader />
                      <AlertDialogTitle />Mark Project as Completed?</AlertDialogTitle>
                      <AlertDialogDescription />
                        This will finalize the project and mark it as complete.
                        Make sure all deliverables have been provided and approved.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter />}
                      <AlertDialogCancel />Cancel</AlertDialogCancel>}
                      <AlertDialogAction onClick={() = /> handleStatusChange(\"completed\")}>
                        Mark as Completed;
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
              {isActiveProject && (}
                <Button variant=\"default\" asChild />}
                  <Link to={`/project/${project.id}/milestones`} />
                    <Layers className=\"mr-2 h-4 w-4\" /> Milestones;
                  </Link>
                </Button>
              )}
              {isActiveProject && (}
                <Button variant=\"outline\" asChild />}
                  <Link to={`/project/${project.id}/room`} />
                    <Video className=\"mr-2 h-4 w-4\" /> Project Room;
                  </Link>
                </Button>
              )}
              {(isClient |isTalent) && [\"offer_sent\", \"offer_accepted\", \"in_progress\"].includes(project.status) && (
                <Button;}
variant=\"outline\"}
                  onClick={() = /> navigate(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
                >
                  <MessageSquare className=\"mr-2 h-4 w-4\" /> Message;
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className=\"grid grid-cols-1 lg:grid-cols-3 gap-8\" />
          <div className=\"order-2 lg:order-1 lg:col-span-2\" />
            <Tabs defaultValue=\"details\" value={activeTab} onValueChange={setActiveTab} />
              <TabsList className=\"mb-6\" />
                <TabsTrigger value=\"details\" />Project Details</TabsTrigger>
                <TabsTrigger value=\"timeline\" />Timeline</TabsTrigger>
                <TabsTrigger value=\"documents\" />Documents</TabsTrigger>
                <TabsTrigger value=\"notes\" />Shared Notes</TabsTrigger>
                {project.status === \"completed\" && (}
                  <TabsTrigger value=\"reviews\" />Reviews</TabsTrigger>}
                )}
              </TabsList>
              <TabsContent value=\"details\" />
                <Card />
                  <CardHeader />
                    <CardTitle />Project Scope</CardTitle>
                    <CardDescription />
                      Project details and expectations;
                    </CardDescription>
                  </CardHeader>
                  <CardContent />
                    <div className=\"space-y-4\" />
                      <div />
                        <h3 className=\"font-semibold mb-2\" />Project Description</h3>
                        <div className=\"bg-muted/30 p-4 rounded-md\" />
                          <p className=\"whitespace-pre-wrap\" />{project.scope_summary}</p>
                        </div>
                      </div>
                      <div />
                        <h3 className=\"font-semibold mb-2\" />Payment Terms</h3>
                        <Badge variant=\"outline\" className=\"capitalize\" />
                          {project.payment_terms} Payment;
                        </Badge>
                      </div>
                      <div />
                        <h3 className=\"font-semibold mb-2\" />Job Details</h3>
                        <div className=\"bg-muted/30 p-4 rounded-md\" />
                          <p className=\"whitespace-pre-wrap\" />{project.job?.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value=\"timeline\" />
                <Card />
                  <CardHeader />
                    <CardTitle />Project Timeline</CardTitle>
                    <CardDescription />
                      Key dates and milestones;
                    </CardDescription>
                  </CardHeader>
                  <CardContent />
                    <div className=\"space-y-4\" />
                      <div className=\"flex items-start gap-3 p-3 bg-muted/30 rounded-md\" />
                        <Calendar className=\"h-5 w-5 text-primary mt-0.5\" />
                        <div />
                          <h3 className=\"font-semibold\" />Start Date</h3>
                          <p />{format(new Date(project.start_date), \"PPP\")}</p>
                        </div>
                      </div>
                      <div className=\"flex items-start gap-3 p-3 bg-muted/30 rounded-md\" />
                        <Clock className=\"h-5 w-5 text-primary mt-0.5\" />
                        <div />
                          <h3 className=\"font-semibold\" />Project Status</h3>
                          <div className=\"mt-1\" />
                            {getStatusBadge(project.status)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value=\"documents\" />
                <Card />
                  <CardHeader />
                    <CardTitle />Project Documents</CardTitle>
                    <CardDescription />
                      Agreements and relevant files;
                    </CardDescription>
                  </CardHeader>
                  <CardContent />
                    {project.agreement_url ? (
                      <div className=\"flex items-center justify-between bg-muted/30 p-4 rounded-md\" />
                        <div className=\"flex items-center gap-3\" />
                          <FileText className=\"h-5 w-5 text-primary\" />
                          <div />
                            <h3 className=\"font-semibold\" />Project Agreement</h3>
                            <p className=\"text-sm text-muted-foreground\" />
                              Uploaded when project was created;
                            </p>
                          </div>
                        </div>}
                        <Button variant=\"outline\" size=\"sm\" asChild />}
                          <a href={project.agreement_url} target=\"_blank\" rel=\"noopener noreferrer\" />
                            View;
                          </Link>                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <div className=\"text-center py-8\" />
                        <FileText className=\"h-10 w-10 text-muted-foreground mx-auto mb-2\" />
                        <h3 className=\"font-semibold\" />No Documents Yet</h3>
                        <p className=\"text-sm text-muted-foreground\" />
                          No documents have been uploaded to this project.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value=\"notes\" />
                <Card />
                  <CardHeader />
                    <CardTitle />Project Notes</CardTitle>
                    <CardDescription />
                      Shared notes and updates;
                    </CardDescription>
                  </CardHeader>
                  <CardContent />
                    <div className=\"space-y-4\" />
                      <div className=\"space-y-4 max-h-[400px] overflow-y-auto mb-4\" />
      </div>);
  }
  // Check if user is either the client or the talent;
  const is_client = user?.id === project.client_id;
  const is_talent = user?.id === project.talent_id;
;
  // Check condition;
if ( {) {}
  $2}
}
    navigate (\"/unauthorized\");
    return null;
  }
  const isOfferPending = project.status === \"offer_sent\";
  const isOfferAccepted = [\"offer_accepted\", \"in_progress\", \"completed\"].includes (project.status);
  const isActiveProject = [\"offer_accepted\", \"in_progress\"].includes (project.status);
;
  return (
    <>;
      <SEO;
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`}
        description=\"View and manage your project details and collaboration.\";
      />;
      <AppHeader />;
      <main className=\"container mx - auto px - 4 py-8\" />;
        <div className=\"mb-6\" />;
          <div className=\"flex flex - col md:flex - row justify - between md:items - center gap - 4 mb-2\" />;
            <div />;
              <h1 className=\"text - 3xl font-bold\" />{project.job?.title || \"Project\"}</h1>;
              <div className=\"flex items - center gap - 2 mt-1\" />;
                {getStatusBadge (project.status)}
                <span className=\"text - muted-foreground\" />;
                  Started on {format (new Date (project.start_date), \"PPP\")}
                </span>;
              </div>;
            </div>;
            {/* Action Buttons Based on Role and Status */}
            <div className=\"space-x-2\" />;
              {is_talent && isOfferPending && (
                <>;
                  <AlertDialog />;
                    <AlertDialogTrigger as_child />;
                      <Button variant=\"default\" />;
                        <CheckCircle2 className=\"mr - 2 h - 4 w-4\" /> Accept Offer;
                      </Button>;
                    </AlertDialogTrigger>;
                    <AlertDialogContent />;
                      <AlertDialogHeader />;
                        <AlertDialogTitle  /> Accept Project Offer?</AlertDialogTitle>;
                        <AlertDialogDescription />;
                          By accepting this offer, you agree to the project terms and timeline.;
                          This will initiate the contract and start the project.;
                        </AlertDialogDescription>;
                      </AlertDialogHeader>;
                      <AlertDialogFooter />;}
                        <AlertDialogCancel  /> Cancel</AlertDialogCancel>;}
                        <AlertDialogAction on_click={() = /> handleStatusChange (\"offer_accepted\")}>;
                          Accept Offer;
                        </AlertDialogAction>;
                      </AlertDialogFooter>;
                    </AlertDialogContent>;
                  </AlertDialog>;
                <AlertDialog />;
                  <AlertDialogTrigger as_child />;
                    <Button variant=\"default\" />;
                      <CheckCircle2 className=\"mr - 2 h - 4 w-4\" /> Mark as Completed;
                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent />;
                    <AlertDialogHeader />;
                      <AlertDialogTitle  /> Mark Project as Completed?</AlertDialogTitle>;
                      <AlertDialogDescription />;
                        This will finalize the project and mark it as complete.;
                        Make sure all deliverables have been provided and approved.;
                      </AlertDialogDescription>;
                    </AlertDialogHeader>;
                    <AlertDialogFooter />;
                      <AlertDialogCancel  /> Cancel</AlertDialogCancel>;
                      <AlertDialogAction on_click={() = /> handleStatusChange (\"completed\")}>;
                        Mark as Completed;
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
                >;
                  <MessageSquare className=\"mr - 2 h - 4 w-4\" /> Message;
                </Button>)}
            </div>;
          </div>;
        </div>;
                <TabsTrigger value=\"details\" />Project Details</TabsTrigger>;
                <TabsTrigger value=\"timeline\" />Timeline</TabsTrigger>;
                <TabsTrigger value=\"documents\" />Documents</TabsTrigger>;
                <TabsTrigger value=\"notes\" />Shared Notes</TabsTrigger>;
              <TabsContent value=\"details\" />;
                <Card />;
                  <CardHeader />;
                    <CardTitle  /> Project Scope</CardTitle>;
                    <CardDescription />;
                      Project details and expectations;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent />;
                    <div className=\"space-y-4\" />;
                      <div />;
                      <div />;
                        <h3 className=\"font - semibold mb-2\" />Payment Terms</h3>;
                        <Badge variant=\"outline\" className=\"capitalize\" />;
                          {project.payment_terms} Payment;
                        </Badge>;
                      </div>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value=\"timeline\" />;
                <Card />;
                  <CardHeader />;
                    <CardTitle  /> Project Timeline</CardTitle>;
                    <CardDescription />;
                      Key dates and milestones;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent />;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value=\"documents\" />;
                <Card />;
                  <CardHeader />;
                    <CardTitle  /> Project Documents</CardTitle>;
                    <CardDescription />;
                      Agreements and relevant files;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent />;
                          <div />;
                            <h3 className=\"font-semibold\" />Project Agreement</h3>;
                            <p className=\"text - sm text - muted-foreground\" />;
                              Uploaded when project was created;
                            </p>;
                          </div>;
                        </div>;
                          <a href={project.agreement_url} target=\"_blank\" rel=\"noopener noreferrer\" />;
                            View;
                          </a>;
                        </Button>;
                          No documents have been uploaded to this project.;
                        </p>;
                      </div>)}
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value=\"notes\" />;
                <Card />;
                  <CardHeader />;
                    <CardTitle  /> Project Notes</CardTitle>;
                    <CardDescription />;
                      Shared notes and updates;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent />;
    navigate(\"/unauthorized\");
    return null;
  }
                        {notes.length > 0 ? (}
                          notes.map ((note) => (}
                            <div key={note.id} className=\"bg - muted / 30 p - 3 rounded-md\" />;
                              <div className=\"flex items - center gap - 2 mb-2\" />;
                                <Avatar className=\"h - 6 w-6\" />;
                                  {note.created_by_profile?.avatar_url ? (
            <div className=\"space-x-2\" />;
              {isTalent && isOfferPending && (;
                <>;
                  <AlertDialog />;
                    <AlertDialogTrigger asChild />;
                      <Button variant=\"default\" />;
                        <CheckCircle2 className=\"mr-2 h-4 w-4\" /> Accept Offer;
                      </Button>;
                    </AlertDialogTrigger>;
                    <AlertDialogContent />;
                      <AlertDialogHeader />;
                        <AlertDialogTitle />Accept Project Offer?</AlertDialogTitle>;
                        <AlertDialogDescription />;
                          By accepting this offer, you agree to the project terms and timeline. ;
                          This will initiate the contract and start the project.;
                        </AlertDialogDescription>;
                      </AlertDialogHeader>;
                      <AlertDialogFooter />;}
                        <AlertDialogCancel />Cancel</AlertDialogCancel>;}
                        <AlertDialogAction onClick={() = /> handleStatusChange(\"offer_accepted\")}>;
                          Accept Offer;
                        </AlertDialogAction>;
                      </AlertDialogFooter>;
                    </AlertDialogContent>;
                  </AlertDialog>;
                  <Button variant=\"outline\" onClick={() = /> handleStatusChange(\"changes_requested\")}>;
                    <MessageSquare className=\"mr-2 h-4 w-4\" /> Request Changes;
                  </Button>;
                </>;
              )}
              {(isClient || isTalent) && project && project.status === \"in_progress\" && (;                <AlertDialog />;
                  <AlertDialogTrigger asChild />;
                    <Button variant=\"default\" />;
                      <CheckCircle2 className=\"mr-2 h-4 w-4\" /> Mark as Completed;
                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent />;
                    <AlertDialogHeader />;
                      <AlertDialogTitle />Mark Project as Completed?</AlertDialogTitle>;
                      <AlertDialogDescription />;
                        This will finalize the project and mark it as complete. ;
                        Make sure all deliverables have been provided and approved.;
                      </AlertDialogDescription>;
                    </AlertDialogHeader>;
                    <AlertDialogFooter />;}
                      <AlertDialogCancel />Cancel</AlertDialogCancel>;}
                      <AlertDialogAction onClick={() = /> handleStatusChange(\"completed\")}>;
                        Mark as Completed;
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
                </AlertDialog>;
              )}
              {isActiveProject && (;}
                <Button variant=\"default\" asChild />;}
                  <Link to={`/project/${project && project.id}/milestones`} />;                    <Layers className=\"mr-2 h-4 w-4\" /> Milestones;
                  </Link>;
                </Button>;
              )}
              {isActiveProject && (;}
                <Button variant=\"outline\" asChild />;}
                  <Link to={`/project/${project && project.id}/room`} />;                    <Video className=\"mr-2 h-4 w-4\" /> Project Room;
                  </Link>;
                </Button>;
              )}
              {(isClient || isTalent) && [\"offer_sent\", \"offer_accepted\", \"in_progress\"].includes(project && project.status) && (;
                <Button;}
variant=\"outline\" }
                  onClick={() = /> navigate(`/messages?talentId=${project && project.talent_id}&clientId=${project && project.client_id}`)}                >;
                  <MessageSquare className=\"mr-2 h-4 w-4\" /> Message;
                </Button>;
              )}
            </div>;
          </div>;
        </div>;
        <div className=\"grid grid-cols-1 lg:grid-cols-3 gap-8\" />;
          <div className=\"order-2 lg:order-1 lg:col-span-2\" />;
            <Tabs defaultValue=\"details\" value={activeTab} onValueChange={setActiveTab} />;
              <TabsList className=\"mb-6\" />;
                <TabsTrigger value=\"details\" />Project Details</TabsTrigger>;
                <TabsTrigger value=\"timeline\" />Timeline</TabsTrigger>;
                <TabsTrigger value=\"documents\" />Documents</TabsTrigger>;
                <TabsTrigger value=\"notes\" />Shared Notes</TabsTrigger>;
                {project && project.status === \"completed\" && (;}
                  <TabsTrigger value=\"reviews\" />Reviews</TabsTrigger>;}
                )}
              </TabsList>;
              <TabsContent value=\"details\" />;
                <Card />;
                  <CardHeader />;
                    <CardTitle />Project Scope</CardTitle>;
                    <CardDescription />;
                      Project details and expectations;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent />;
                    <div className=\"space-y-4\" />;
                      <div />;
                        <h3 className=\"font-semibold mb-2\" />Project Description</h3>;
                        <div className=\"bg-muted/30 p-4 rounded-md\" />;
                          <p className=\"whitespace-pre-wrap\" />{project && project.scope_summary}</p>;
                        </div>;
                      </div>;
                      <div />;
                        <h3 className=\"font-semibold mb-2\" />Payment Terms</h3>;
                        <Badge variant=\"outline\" className=\"capitalize\" />;
                          {project && project.payment_terms} Payment;
                        </Badge>;
                      </div>;
                      <div />;
                        <h3 className=\"font-semibold mb-2\" />Job Details</h3>;
                        <div className=\"bg-muted/30 p-4 rounded-md\" />;
                          <p className=\"whitespace-pre-wrap\" />{project && project.job?.description}</p>;                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value=\"timeline\" />;
                <Card />;
                  <CardHeader />;
                    <CardTitle />Project Timeline</CardTitle>;
                    <CardDescription />;
                      Key dates and milestones;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent />;
                    <div className=\"space-y-4\" />;
                      <div className=\"flex items-start gap-3 p-3 bg-muted/30 rounded-md\" />;
                        <Calendar className=\"h-5 w-5 text-primary mt-0 && 0.5\" />;
                        <div />;
                          <h3 className=\"font-semibold\" />Start Date</h3>;
                          <p />{format(new Date(project && project.start_date), \"PPP\")}</p>;
                        </div>;
                      </div>;
                      <div className=\"flex items-start gap-3 p-3 bg-muted/30 rounded-md\" />;
                        <Clock className=\"h-5 w-5 text-primary mt-0 && 0.5\" />;
                        <div />;
                          <h3 className=\"font-semibold\" />Project Status</h3>;
                          <div className=\"mt-1\" />;
                            {getStatusBadge(project && project.status)}                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value=\"documents\" />;
                <Card />;
                  <CardHeader />;
                    <CardTitle />Project Documents</CardTitle>;
                    <CardDescription />;
                      Agreements and relevant files;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent />;
                    {project && project.agreement_url ? (;                      <div className=\"flex items-center justify-between bg-muted/30 p-4 rounded-md\" />;
                        <div className=\"flex items-center gap-3\" />;
                          <FileText className=\"h-5 w-5 text-primary\" />;
                          <div />;
                            <h3 className=\"font-semibold\" />Project Agreement</h3>;
                            <p className=\"text-sm text-muted-foreground\" />;
                              Uploaded when project was created;
                            </p>;
                          </div>;
                        </div>;}
                        <Button variant=\"outline\" size=\"sm\" asChild />;}
                          <a href={project && project.agreement_url} target=\"_blank\" rel=\"noopener noreferrer\" />;                            View;
                          </a>;
                        </Button>;
                      </div>;
                    ) : (;                      <div className=\"text-center py-8\" />;
                        <FileText className=\"h-10 w-10 text-muted-foreground mx-auto mb-2\" />;
                        <h3 className=\"font-semibold\" />No Documents Yet</h3>;
                        <p className=\"text-sm text-muted-foreground\" />;
                          No documents have been uploaded to this project.;
                        </p>;
                      </div>;
                    )}
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value=\"notes\" />;
                <Card />;
                  <CardHeader />;
                    <CardTitle />Project Notes</CardTitle>;
                    <CardDescription />;
                      Shared notes and updates;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent />;
                    <div className=\"space-y-4\" />;
                      <div className=\"space-y-4 max-h-[400px] overflow-y-auto mb-4\" />;
                        {notes && notes.length > 0 ? (;}
                          notes && notes.map((note) => (;}
                            <div key={note && note.id} className=\"bg-muted/30 p-3 rounded-md\" />;
                              <div className=\"flex items-center gap-2 mb-2\" />;
                                <Avatar className=\"h-6 w-6\" />;
                                  {note && note.created_by_profile?.avatar_url ? (;}
                                    <img;}
src={note && note.created_by_profile.avatar_url}
                                      alt={note && note.created_by_profile.display_name}
                                    />;
                                  ) : (;
                                    <User className=\"h-4 w-4\" />;
                                  )}
                            <MessageSquare className=\"h-8 w-8 text-muted-foreground mx-auto mb-2\" />;
                            <p className=\"text-muted-foreground\" />;
                              No notes yet. Add the first note to this project.;
                            </p>;
                          </div>;
                        )}
                      </div>;
                      {isOfferAccepted && (;
                        <div />;
                          <Textarea;}
placeholder=\"Add a note or update to the project...\"}
                            value={newNote}
                            onChange={(e) = /> setNewNote(e && e.target.value)}
                            className=\"min-h-[100px] mb-2\";
                          />;
                          <Button;
onClick={handleSubmitNote}
                            disabled={!newNote && newNote.trim() || isSubmittingNote} />;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                        />
                      ) : (
                        <User className=\"h-6 w-6\" />
                      )}
                    </Avatar>
                    <div />
                      <h3 className=\"font-semibold\" />
                        {project.talent_profile?.full_name |\"Talent\"}
                      </h3>
                      <p className=\"text-sm text-muted-foreground\" />
                        {project.talent_profile?.professional_title |\"Professional\"}
                      </p>
                      {isClient && (
                        <Button;
variant=\"outline\"
                          size=\"sm\"}
                          className=\"mt-2\"}
                          onClick={() = /> navigate(`/messages?talentId=${project.talent_id}`)}
                        >
                          <MessageSquare className=\"mr-1 h-3 w-3\" /> Message;
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className=\"flex items-start gap-4\" />
                    <Avatar className=\"h-10 w-10\" />
                      {project.client_profile?.avatar_url ? (}
                        <img;}
src={project.client_profile.avatar_url}
                          alt={project.client_profile.display_name}
                        />
                      ) : (
                        <User className=\"h-6 w-6\" />
                      )}
                    </Avatar>
                    <div />
                      <h3 className=\"font-semibold\" />
                        {project.client_profile?.display_name |\"Client\"}
                      </h3>
                      <p className=\"text-sm text-muted-foreground\" />Project Owner</p>
                      {isTalent && (
                        <Button;
variant=\"outline\"
                          size=\"sm\"
                          className=\"mt-2\"                        <Button;
variant=\"outline\"
                          size=\"sm\"}
                          className=\"mt-2\"}
            {/* Project Status Card */}
            <Card className=\"mt-6\" />
              <CardHeader />
                <CardTitle />Project Status</CardTitle>
              </CardHeader>
              <CardContent />
                <div className=\"space-y-2\" />
                  <div className=\"flex justify-between items-center\" />
                    <span className=\"text-sm font-medium\" />Current Status:</span>
                    <div />{getStatusBadge(project.status)}</div>
                  </div>
                  <div className=\"flex justify-between items-center\" />
                    <span className=\"text-sm font-medium\" />Creation Date:</span>
                    <span className=\"text-sm\" />
                      {format(new Date(project.created_at), \"PPP\")}
                    </span>
                  </div>
                  <div className=\"flex justify-between items-center\" />
                    <span className=\"text-sm font-medium\" />Start Date:</span>
                    <span className=\"text-sm\" />
                      {format(new Date(project.start_date), \"PPP\")}
                    </span>
                  </div>
                </div>
              </CardContent>
              {/* Conditional Footer Based on Status */}
              {project.status === \"changes_requested\" && isClient && (
                <CardFooter className=\"flex-col items-start gap-2 border-t pt-6\" />
                  <p className=\"text-sm text-amber-600 flex items-center gap-1\" />
                    <AlertCircle className=\"h-4 w-4\" /> The talent has requested changes to this offer.
                  </p>                    </div>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;            </Card>;
          </div>;
        </div>;
      </main>;
      <Footer />;
    </>;}
  );}
}    </>);
}
export default /**
 * ProjectDetails - Function description;
 */
function ProjectDetails() {
  return (
    <ProtectedRoute />;
      <ProjectDetailsContent />;}
    </ProtectedRoute>);}
}