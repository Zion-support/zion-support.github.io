
                <Button size="sm">Apply Now</Button>
                <Button size="sm" variant="outline">View Details</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
=======
import { ChevronRight, FileText, Image, Clock, Zap, BookOpen } from 'lucide-react'
import Link from "next/link";
import React from "react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ChevronRight, FileText, Image, Clock, Zap, BookOpen } from 'lucide-react'
import Link from "next/link",
xport function TalentDashboard() {
ursor/fix-website-loading-errors-and-merge-6662
              <div className='flex gap-2 mt-3'>
                <Button size='sm'>Apply Now</Button>
                <Button size='sm' variant='outline'>
                  View Details
                </Button>              </div>              <div className="flex gap-2 mt-3">
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea

      <section>
        <h2 className="text-lg font-medium mb-4">Application Tracker</h2>
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-xs text-muted-foreground">Active Applications</div>
              </div>
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-xs text-muted-foreground">Interviews Scheduled</div>
              </div>
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-xs text-muted-foreground">Jobs Saved</div>
              </div>
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-xs text-muted-foreground">Jobs Viewed</div>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-4">
              View All Applications
            </Button>
          </CardContent>
        </Card>
      </section>
