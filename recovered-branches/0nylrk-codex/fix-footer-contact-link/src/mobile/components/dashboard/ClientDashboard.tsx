
import React from &quot;react&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { ChevronRight, Plus, UserCheck, FileText, Bell } from &quot;lucide-react&quot;;
import { Link } from &quot;react-router-dom&quot;;

export function ClientDashboard() {
  return (
    <div className=&quot;space-y-6 px-4 pb-24&quot;>
      <section className=&quot;mt-4&quot;>
        <Button className=&quot;w-full py-6&quot; size=&quot;lg&quot;>
          <Plus className=&quot;mr-2 h-5 w-5&quot; /> Post a New Job
        </Button>
      </section>
      
      <section>
        <div className=&quot;flex items-center justify-between mb-4&quot;>
          <h2 className=&quot;text-lg font-medium&quot;>Active Projects</h2>
          <Link to=&quot;/mobile/projects&quot;>
            <Button variant=&quot;ghost&quot; size=&quot;sm&quot; className=&quot;h-8 gap-1&quot;>
              View all <ChevronRight className=&quot;h-4 w-4&quot; />
            </Button>
          </Link>
        </div>
        
        <Card>
          <CardContent className=&quot;p-4&quot;>
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;flex justify-between items-start&quot;>
                <div>
                  <h3 className=&quot;font-medium&quot;>Website Redesign</h3>
                  <div className=&quot;text-sm text-muted-foreground&quot;>In Progress • Due in 12 days</div>
                </div>
                <Badge>3 Milestones</Badge>
              </div>
              
              <div className=&quot;space-y-1&quot;>
                <div className=&quot;flex justify-between text-sm&quot;>
                  <span>Progress</span>
                  <span className=&quot;font-medium&quot;>60%</span>
                </div>
                <div className=&quot;h-2 bg-primary/20 rounded-full overflow-hidden&quot;>
                  <div className=&quot;h-full bg-primary rounded-full&quot; style={{width: '60%'}}></div>
                </div>
              </div>
              
              <div className=&quot;flex justify-between items-center&quot;>
                <div className=&quot;flex -space-x-2&quot;>
                  <div className=&quot;w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center&quot;>
                    <UserCheck className=&quot;h-4 w-4&quot; />
                  </div>
                  <div className=&quot;w-7 h-7 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center&quot;>
                    <UserCheck className=&quot;h-4 w-4&quot; />
                  </div>
                </div>
                <Button size=&quot;sm&quot; variant=&quot;outline&quot;>View Details</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      
      <section>
        <div className=&quot;flex items-center justify-between mb-4&quot;>
          <h2 className=&quot;text-lg font-medium&quot;>Suggested Talents</h2>
          <Link to=&quot;/mobile/browse&quot;>
            <Button variant=&quot;ghost&quot; size=&quot;sm&quot; className=&quot;h-8 gap-1&quot;>
              View all <ChevronRight className=&quot;h-4 w-4&quot; />
            </Button>
          </Link>
        </div>
        
        <div className=&quot;space-y-3&quot;>
          <Card>
            <CardContent className=&quot;p-4&quot;>
              <div className=&quot;flex justify-between&quot;>
                <div className=&quot;flex items-center gap-3&quot;>
                  <div className=&quot;w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center&quot;>
                    <UserCheck className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <div>
                    <h3 className=&quot;font-medium&quot;>Sarah Johnson</h3>
                    <p className=&quot;text-sm text-muted-foreground&quot;>UX Designer • 5 years exp</p>
                  </div>
                </div>
                <div className=&quot;bg-primary/10 text-primary font-medium self-start rounded-full px-2 py-1 text-xs&quot;>
                  95% match
                </div>
              </div>
              <div className=&quot;mt-3 flex gap-1 flex-wrap&quot;>
                <Badge variant=&quot;outline&quot; className=&quot;text-xs&quot;>UI/UX</Badge>
                <Badge variant=&quot;outline&quot; className=&quot;text-xs&quot;>Figma</Badge>
                <Badge variant=&quot;outline&quot; className=&quot;text-xs&quot;>User Testing</Badge>
              </div>
              <div className=&quot;flex gap-2 mt-3&quot;>
                <Button size=&quot;sm&quot;>View Profile</Button>
                <Button size=&quot;sm&quot; variant=&quot;outline&quot;>Message</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className=&quot;p-4&quot;>
              <div className=&quot;flex justify-between&quot;>
                <div className=&quot;flex items-center gap-3&quot;>
                  <div className=&quot;w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center&quot;>
                    <UserCheck className=&quot;h-6 w-6 text-primary&quot; />
                  </div>
                  <div>
                    <h3 className=&quot;font-medium&quot;>Michael Chen</h3>
                    <p className=&quot;text-sm text-muted-foreground&quot;>Full Stack Dev • 8 years exp</p>
                  </div>
                </div>
                <div className=&quot;bg-primary/10 text-primary font-medium self-start rounded-full px-2 py-1 text-xs&quot;>
                  89% match
                </div>
              </div>
              <div className=&quot;mt-3 flex gap-1 flex-wrap&quot;>
                <Badge variant=&quot;outline&quot; className=&quot;text-xs&quot;>React</Badge>
                <Badge variant=&quot;outline&quot; className=&quot;text-xs&quot;>Node.js</Badge>
                <Badge variant=&quot;outline&quot; className=&quot;text-xs&quot;>AWS</Badge>
              </div>
              <div className=&quot;flex gap-2 mt-3&quot;>
                <Button size=&quot;sm&quot;>View Profile</Button>
                <Button size=&quot;sm&quot; variant=&quot;outline&quot;>Message</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section>
        <div className=&quot;flex items-center justify-between mb-4&quot;>
          <h2 className=&quot;text-lg font-medium&quot;>Recent Updates</h2>
        </div>
        
        <Card>
          <CardContent className=&quot;p-4 space-y-4&quot;>
            <div className=&quot;flex gap-3 items-start&quot;>
              <div className=&quot;bg-primary/10 p-2 rounded-full&quot;>
                <Bell className=&quot;h-5 w-5 text-primary&quot; />
              </div>
              <div>
                <p className=&quot;text-sm&quot;>
                  <strong>Website Redesign:</strong> Sarah submitted Milestone 2 for review
                </p>
                <p className=&quot;text-xs text-muted-foreground&quot;>2 hours ago</p>
              </div>
            </div>
            
            <div className=&quot;flex gap-3 items-start&quot;>
              <div className=&quot;bg-primary/10 p-2 rounded-full&quot;>
                <FileText className=&quot;h-5 w-5 text-primary&quot; />
              </div>
              <div>
                <p className=&quot;text-sm&quot;>
                  <strong>Mobile App Development:</strong> 3 new applicants for your job post
                </p>
                <p className=&quot;text-xs text-muted-foreground&quot;>1 day ago</p>
              </div>
            </div>
            
            <Button variant=&quot;outline&quot; className=&quot;w-full&quot;>View All Notifications</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
