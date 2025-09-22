
import React from "react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { ChevronRight, FileText, Image, Clock, Zap, BookOpen } from "lucide-react",;
import { Link } from "react-router-dom",;
;
export function TalentDashboard() {;
  return (;
    <div className="space-y-6 px-4 pb-24">;
      <section>;
        <div className="flex items-center justify-between mb-4">;
          <h2 className="text-lg font-medium">New Job Matches</h2>;
          <Link to="/mobile/browse">;
            <Button variant="ghost" size="sm" className="h-8 gap-1">;
              View all <ChevronRight className="h-4 w-4" />;
            </Button>;
          </Link>;
        </div>;

        <div className="space-y-3">;
          <Card>;
            <CardContent className="p-4">;
              <div className="flex justify-between items-start">;
                <div className="space-y-1">;
                  <h3 className="font-medium">Senior React Developer</h3>;
                  <div className="text-sm text-muted-foreground">TechCorp Inc.</div>;
                  <div className="flex items-center gap-1 mt-1">;
                    <Badge variant="secondary" className="text-xs">Remote</Badge>;
                    <Badge variant="secondary" className="text-xs">Full-time</Badge>;
                  </div>;
                </div>;
                <div className="flex flex-col items-end">;
                  <div className="bg-primary/10 text-primary font-medium rounded-full px-2 py-1 text-xs">;
                    92% match;
                  </div>;
                  <span className="text-xs text-muted-foreground mt-1">2 days ago</span>;
                </div>;
              </div>;
              <div className="flex gap-2 mt-3">;

                <Button size="sm">Apply Now</Button>;
                <Button size="sm" variant="outline">View Details</Button>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </section>;

              View All Applications;
            </Button>;
          </CardContent>;
        </Card>;
      </section>;

            View all;
          </Button>;
        </div>;
        <Card>;

              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </section>;
