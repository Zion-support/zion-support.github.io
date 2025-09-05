
import React from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { toast } from "@/hooks/use-toast",import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle} from "@/components/ui/card",
import { Sparkles } from 'lucide-react'
import { Progress } from "@/components/ui/progress",
export function UsageStats() {
  const handleSaveChanges = () => {
    toast({
      title: "Limits updated",
      description: "The new usage limits have been saved successfully."})
  },  };

  return (
    <div className=&quot;space-y-8&quot;>
      <div>
        <h3 className=&quot;text-xl font-medium mb-4&quot;>Usage Limits & Settings</h3>
        <p className=&quot;text-muted-foreground mb-6&quot;>
          Configure usage limits for your team to manage your subscription resources.
        </p>
      </div>

      <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-6&quot;>
        <Card>
          <CardHeader>
            <CardTitle>Job Postings</CardTitle>
            <CardDescription>
              Set monthly limits for job postings across your organization
            </CardDescription>
          </CardHeader>
          <CardContent className=&quot;space-y-4&quot;>
            <div>
              <div className=&quot;flex items-center justify-between mb-2&quot;>
                <div className=&quot;text-sm font-medium&quot;>Monthly job posting limit</div>
                <Badge variant=&quot;outline&quot;>25 / 50</Badge>
              </div>
              <Progress value={50} className=&quot;h-2&quot; />            </div>
            <div className=&quot;grid gap-4&quot;>
              <div className=&quot;grid grid-cols-3 items-center gap-4&quot;>
                <div className=&quot;text-sm&quot;>New limit:</div>
                <div className=&quot;col-span-2&quot;>
                  <Input type=&quot;number&quot; min=&quot;1&quot; defaultValue=&quot;50&quot; />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size=&quot;sm&quot; onClick={handleSaveChanges}>Save Changes</Button>          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Candidate Contacts</CardTitle>
            <CardDescription>
              Limit the number of direct candidate contacts per month
            </CardDescription>
          </CardHeader>
          <CardContent className=&quot;space-y-4&quot;>
            <div>
              <div className=&quot;flex items-center justify-between mb-2&quot;>
                <div className=&quot;text-sm font-medium&quot;>Monthly contact credits</div>
                <Badge variant=&quot;outline&quot;>178 / 500</Badge>
              </div>
              <Progress value={35.6} className=&quot;h-2&quot; />            </div>
            <div className=&quot;grid gap-4&quot;>
              <div className=&quot;grid grid-cols-3 items-center gap-4&quot;>
                <div className=&quot;text-sm&quot;>New limit:</div>
                <div className=&quot;col-span-2&quot;>
                  <Input type=&quot;number&quot; min=&quot;1&quot; defaultValue=&quot;500&quot; />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size=&quot;sm&quot; onClick={handleSaveChanges}>Save Changes</Button>          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>AI Features</CardTitle>
            <CardDescription>
              Set the AI usage limits for matching and content generation
            </CardDescription>
          </CardHeader>
          <CardContent className=&quot;space-y-4&quot;>
            <div>
              <div className=&quot;flex items-center justify-between mb-2&quot;>
                <div className=&quot;text-sm font-medium&quot;>AI matching credits</div>
                <Badge variant=&quot;outline&quot;>435 / 1000</Badge>
              </div>
              <Progress value={43.5} className=&quot;h-2&quot; />            </div>
            <div className=&quot;grid gap-4&quot;>
              <div className=&quot;grid grid-cols-3 items-center gap-4&quot;>
                <div className=&quot;text-sm&quot;>New limit:</div>
                <div className=&quot;col-span-2&quot;>
                  <Input type=&quot;number&quot; min=&quot;1&quot; defaultValue=&quot;1000&quot; />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size=&quot;sm&quot; onClick={handleSaveChanges}>Save Changes</Button>          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Budget Controls</CardTitle>
            <CardDescription>
              Set spending caps for premium features and services
            </CardDescription>
          </CardHeader>
          <CardContent className=&quot;space-y-4&quot;>
            <div>
              <div className=&quot;flex items-center justify-between mb-2&quot;>
                <div className=&quot;text-sm font-medium&quot;>Monthly budget</div>
                <Badge variant=&quot;outline&quot;>$1,250 / $5,000</Badge>
              </div>
              <Progress value={25} className=&quot;h-2&quot; />            </div>
            <div className=&quot;grid gap-4&quot;>
              <div className=&quot;grid grid-cols-3 items-center gap-4&quot;>
                <div className=&quot;text-sm&quot;>Monthly budget:</div>
                <div className=&quot;col-span-2&quot;>
                  <Input type=&quot;number&quot; min=&quot;0&quot; step=&quot;100&quot; defaultValue=&quot;5000&quot; />
                </div>
              </div>
              <div className=&quot;grid grid-cols-3 items-center gap-4&quot;>
                <div className=&quot;text-sm&quot;>Alert threshold:</div>
                <div className=&quot;col-span-2&quot;>
                  <select className=&quot;w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring&quot;>
                    <option value=&quot;75&quot;>75% of limit</option>
                    <option value=&quot;80&quot;>80% of limit</option>
                    <option value=&quot;90&quot;>90% of limit</option>
                    <option value=&quot;95&quot;>95% of limit</option>
                  </select>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size=&quot;sm&quot; onClick={handleSaveChanges}>Save Changes</Button>          </CardFooter>
        </Card>
      </div>
      
      <div className=&quot;bg-muted/50 rounded-lg p-6 flex items-center justify-between&quot;>
        <div className=&quot;flex items-center gap-4&quot;>
          <div className=&quot;h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center&quot;>
            <Sparkles className=&quot;h-5 w-5 text-primary&quot; />
          </div>
          <div>
            <h3 className=&quot;font-medium&quot;>Need higher limits?</h3>
            <p className=&quot;text-sm text-muted-foreground&quot;>
              Contact your account manager to discuss custom limits for your enterprise.
            </p>
          </div>
        </div>
        <Button>Contact Us</Button>
      </div>
    </div>
  )
}
