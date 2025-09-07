
import React from "react";""
import { Card, CardContent } from "@/components/ui/card";""
import { Button } from "@/components/ui/button";""
import { Badge } from "@/components/ui/badge";""
import { ChevronRight, Plus, UserCheck, FileText, Bell } from "lucide-react";""
import { Link } from "react-router-dom";"
export function ClientDashboard() {
  return ("
    <div className="space-y-6 px-4 pb-24">"
</div>"
      <section className="mt-4">"
</section>"
        <Button className="w-full py-6" size="lg">"
</Button>"
          <Plus className="mr-2 h-5 w-5" /> Post a New Job;"
</Plus>
        </Button>
      </section>

      <section>
</section>"
        <div className="flex items-center justify-between mb-4">"
</div>"
          <h2 className="text-lg font-medium">Active Projects</h2>""
          <Link to="/mobile/projects">"
</Link>"
            <Button variant="ghost" size="sm" className="h-8 gap-1">"
</Button>"
              View all <ChevronRight className="h-4 w-4" />"
</ChevronRight>
            </Button>
          </Link>
        </div>

        <Card>
</Card>"
          <CardContent className="p-4">"
</CardContent>"
            <div className="space-y-4">"
</div>"
              <div className="flex justify-between items-start">"
</div>
                <div>
</div>"
                  <h3 className="font-medium">Website Redesign</h3>""
                  <div className="text-sm text-muted-foreground">"
</div>

                  </div>
                </div>
                <Badge />3 Milestones</Badge>
              </div>

"
              <div className="space-y-1">"
</div>"
                <div className="flex justify-between text-sm">"
</div>
                  <span>Progress</span>"
                  <span className="font-medium">60%</span>"
                </div>"
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">"
</div>
                  <div;"
                    className="h-full bg-primary rounded-full"""
                    style={{ width: "60%" }}"
                  ></div>
                </div>
              </div>
"
              <div className="flex justify-between items-center">"
</div>"
                <div className="flex -space-x-2">"
</div>"
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">"
</div>"
                    <UserCheck className="h-4 w-4" />"
</UserCheck>
                  </div>"
                  <div className="w-7 h-7 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center">"
</div>"
                    <UserCheck className="h-4 w-4" />"
</UserCheck>
                  </div>
                </div>"
                <Button size="sm" variant="outline">"
</Button>

                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>


      <section>
</section>"
        <div className="flex items-center justify-between mb-4">"
</div>"
          <h2 className="text-lg font-medium">Suggested Talents</h2>""
          <Link to="/mobile/browse">"
</Link>"
            <Button variant="ghost" size="sm" className="h-8 gap-1">"
</Button>"
              View all <ChevronRight className="h-4 w-4" />"
</ChevronRight>
            </Button>
          </Link>
        </div>
"
        <div className="space-y-3">"
</div>
          <Card>
</Card>"
            <CardContent className="p-4">"
</CardContent>"
              <div className="flex justify-between">"
</div>"
                <div className="flex items-center gap-3">"
</div>"
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">"
</div>"
                    <UserCheck className="h-6 w-6 text-primary" />"
</UserCheck>
                  </div>
                  <div>
</div>"
                    <h3 className="font-medium">Sarah Johnson</h3>""
                    <p className="text-sm text-muted-foreground">"
</p>

                    </p>
                  </div>
                </div>"
                <div className="bg-primary/10 text-primary font-medium self-start rounded-full px-2 py-1 text-xs">"
</div>
                </div>

              </div>"
              <div className="mt-3 flex gap-1 flex-wrap">"
</div>"
                <Badge variant="outline" className="text-xs">"
</Badge>
                </Badge>"
                <Badge variant="outline" className="text-xs">"
</Badge>
                </Badge>"
                <Badge variant="outline" className="text-xs">"
</Badge>
                </Badge>
              </div>"
              <div className="flex gap-2 mt-3">"
</div>"
                <Button size="sm">View Profile</Button>""
                <Button size="sm" variant="outline">"
</Button>

                </Button>
              </div>
            </CardContent>
          </Card>


          <Card>
</Card>"
            <CardContent className="p-4">"
</CardContent>"
              <div className="flex justify-between">"
</div>"
                <div className="flex items-center gap-3">"
</div>"
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">"
</div>"
                    <UserCheck className="h-6 w-6 text-primary" />"
</UserCheck>
                  </div>
                  <div>
</div>"
                    <h3 className="font-medium">Michael Chen</h3>""
                    <p className="text-sm text-muted-foreground">"
</p>

                    </p>
                  </div>
                </div>"
                <div className="bg-primary/10 text-primary font-medium self-start rounded-full px-2 py-1 text-xs">"
</div>
                </div>

              </div>"
              <div className="mt-3 flex gap-1 flex-wrap">"
</div>"
                <Badge variant="outline" className="text-xs">"
</Badge>
                </Badge>"
                <Badge variant="outline" className="text-xs">"
</Badge>
                </Badge>"
                <Badge variant="outline" className="text-xs">"
</Badge>
                </Badge>
              </div>"
              <div className="flex gap-2 mt-3">"
</div>"
                <Button size="sm">View Profile</Button>""
                <Button size="sm" variant="outline">"
</Button>

                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      <section>
</section>"
        <div className="flex items-center justify-between mb-4">"
</div>"
          <h2 className="text-lg font-medium">Recent Updates</h2>"
        </div>

        <Card>
</Card>"
          <CardContent className="p-4 space-y-4">"
</CardContent>"
            <div className="flex gap-3 items-start">"
</div>"
              <div className="bg-primary/10 p-2 rounded-full">"
</div>"
                <Bell className="h-5 w-5 text-primary" />"
</Bell>
              </div>
              <div>
</div>"
                <p className="text-sm">"
</p>
                  <strong>Website Redesign: </strong> Sarah submitted Milestone;
                </p>"
                <p className="text-xs text-muted-foreground">2 hours ago</p>"
              </div>
            </div>
"
            <div className="flex gap-3 items-start">"
</div>"
              <div className="bg-primary/10 p-2 rounded-full">"
</div>"
                <FileText className="h-5 w-5 text-primary" />"
</FileText>
              </div>
              <div>
</div>"
                <p className="text-sm">"
</p>
                  <strong>Mobile App Development:</strong> 3 new applicants for;
                </p>"
                <p className="text-xs text-muted-foreground">1 day ago</p>"
              </div>
            </div>
"
            <Button variant="outline" className="w-full">"
</Button>

            </Button>
          </CardContent>
        </Card>
      </section>

    </div>)"

