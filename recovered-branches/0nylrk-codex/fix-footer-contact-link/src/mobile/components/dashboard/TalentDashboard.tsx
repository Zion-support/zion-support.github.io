
import React from "react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ChevronRight, FileText, Image, Clock, Zap, BookOpen } from "lucide-react",
import { Link } from "react-router-dom",export function TalentDashboard() {
  return (
    <div className=&quot;space-y-6 px-4 pb-24&quot;>
import React from "react";

export function TalentDashboard() {_return (
    <div className="space-y-6 px-4 pb-24">
      <section>
        <div className=&quot;flex items-center justify-between mb-4&quot;>
          <h2 className=&quot;text-lg font-medium&quot;>New Job Matches</h2>
          <Link to=&quot;/mobile/browse&quot;>
            <Button variant=&quot;ghost&quot; size=&quot;sm&quot; className=&quot;h-8 gap-1&quot;>
              View all <ChevronRight className=&quot;h-4 w-4&quot; />
            </Button>
          </Link>
        </div>
        
        <div className=&quot;space-y-3&quot;>
          <Card>
            <CardContent className=&quot;p-4&quot;>
              <div className=&quot;flex justify-between items-start&quot;>
                <div className=&quot;space-y-1&quot;>
                  <h3 className=&quot;font-medium&quot;>Senior React Developer</h3>
                  <div className=&quot;text-sm text-muted-foreground&quot;>TechCorp Inc.</div>
                  <div className=&quot;flex items-center gap-1 mt-1&quot;>
                    <Badge variant=&quot;secondary&quot; className=&quot;text-xs&quot;>Remote</Badge>
                    <Badge variant=&quot;secondary&quot; className=&quot;text-xs&quot;>Full-time</Badge>
                  </div>
                </div>
                <div className=&quot;flex flex-col items-end&quot;>
                  <div className=&quot;bg-primary/10 text-primary font-medium rounded-full px-2 py-1 text-xs&quot;>
                    92% match
                  </div>
                  <span className=&quot;text-xs text-muted-foreground mt-1&quot;>2 days ago</span>
                </div>
              </div>
              <div className=&quot;flex gap-2 mt-3&quot;>
                <Button size=&quot;sm&quot;>Apply Now</Button>
                <Button size=&quot;sm&quot; variant=&quot;outline&quot;>View Details</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className=&quot;p-4&quot;>
              <div className=&quot;flex justify-between items-start&quot;>
                <div className=&quot;space-y-1&quot;>
                  <h3 className=&quot;font-medium&quot;>UX/UI Designer</h3>
                  <div className=&quot;text-sm text-muted-foreground&quot;>Creative Studios</div>
                  <div className=&quot;flex items-center gap-1 mt-1&quot;>
                    <Badge variant=&quot;secondary&quot; className=&quot;text-xs&quot;>Hybrid</Badge>
                    <Badge variant=&quot;secondary&quot; className=&quot;text-xs&quot;>Contract</Badge>
                  </div>
                </div>
                <div className=&quot;flex flex-col items-end&quot;>
                  <div className=&quot;bg-primary/10 text-primary font-medium rounded-full px-2 py-1 text-xs&quot;>
                    87% match
                  </div>
                  <span className=&quot;text-xs text-muted-foreground mt-1&quot;>4 hours ago</span>
                </div>
              </div>
              <div className=&quot;flex gap-2 mt-3&quot;>
                <Button size=&quot;sm&quot;>Apply Now</Button>
                <Button size=&quot;sm&quot; variant=&quot;outline&quot;>View Details</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section>
        <h2 className=&quot;text-lg font-medium mb-4&quot;>Application Tracker</h2>
        <Card>
          <CardContent className=&quot;p-4&quot;>
            <div className=&quot;grid grid-cols-2 gap-4&quot;>
              <div className=&quot;text-center p-3 bg-primary/5 rounded-lg&quot;>
                <div className=&quot;text-2xl font-bold text-primary&quot;>3</div>
                <div className=&quot;text-xs text-muted-foreground&quot;>Active Applications</div>
              </div>
              <div className=&quot;text-center p-3 bg-primary/5 rounded-lg&quot;>
                <div className=&quot;text-2xl font-bold text-primary&quot;>2</div>
                <div className=&quot;text-xs text-muted-foreground&quot;>Interviews Scheduled</div>
              </div>
              <div className=&quot;text-center p-3 bg-primary/5 rounded-lg&quot;>
                <div className=&quot;text-2xl font-bold text-primary&quot;>5</div>
                <div className=&quot;text-xs text-muted-foreground&quot;>Jobs Saved</div>
              </div>
              <div className=&quot;text-center p-3 bg-primary/5 rounded-lg&quot;>
                <div className=&quot;text-2xl font-bold text-primary&quot;>12</div>
                <div className=&quot;text-xs text-muted-foreground&quot;>Jobs Viewed</div>
              </div>
            </div>
            <Button variant=&quot;outline&quot; className=&quot;w-full mt-4&quot;>
              View All Applications
            </Button>
          </CardContent>
        </Card>
      </section>
      
      <section>
        <h2 className=&quot;text-lg font-medium mb-4&quot;>Quick Actions</h2>
        <div className=&quot;grid grid-cols-2 gap-4&quot;>
          <Button variant=&quot;outline&quot; className=&quot;h-auto py-4 flex flex-col gap-1&quot;>
            <FileText className=&quot;h-5 w-5 mb-1&quot; />
            <span>Update Resume</span>
          </Button>
          <Button variant=&quot;outline&quot; className=&quot;h-auto py-4 flex flex-col gap-1&quot;>
            <Image className=&quot;h-5 w-5 mb-1&quot; />
            <span>Portfolio</span>
          </Button>
          <Button variant=&quot;outline&quot; className=&quot;h-auto py-4 flex flex-col gap-1&quot;>
            <Clock className=&quot;h-5 w-5 mb-1&quot; />
            <span>Availability</span>
          </Button>
          <Button variant=&quot;outline&quot; className=&quot;h-auto py-4 flex flex-col gap-1&quot;>
            <Zap className=&quot;h-5 w-5 mb-1&quot; />
            <span>AI Resume Boost</span>
          </Button>
        </div>
      </section>
      
      <section>
        <div className=&quot;flex items-center justify-between mb-4&quot;>
          <h2 className=&quot;text-lg font-medium&quot;>Learning Hub</h2>
          <Button variant=&quot;ghost&quot; size=&quot;sm&quot; className=&quot;h-8&quot;>
            View all
          </Button>
        </div>
        <Card>
          <CardContent className=&quot;p-4&quot;>
            <div className=&quot;flex items-center gap-3&quot;>
              <div className=&quot;bg-primary/10 p-3 rounded-full&quot;>
                <BookOpen className=&quot;h-6 w-6 text-primary&quot; />
              </div>
              <div>
                <h3 className=&quot;font-medium&quot;>Improve your profile visibility</h3>
                <p className=&quot;text-sm text-muted-foreground&quot;>5 tips for getting noticed by clients</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}