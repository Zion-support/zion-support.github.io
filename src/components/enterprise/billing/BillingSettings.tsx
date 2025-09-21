import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Switch } from "@/components/ui/switch",
import { Label } from "@/components/ui/label",
import { Separator } from "@/components/ui/separator",
import { Bell, CreditCard, FileText, Settings } from "lucide-react",
export function BillingSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Billing Settings
          </CardTitle>
          <CardDescription>
            Manage your billing preferences and notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-renewal">Auto-renewal</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically renew your subscription
                </p>
              </div>
              <Switch id="auto-renewal" defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-invoices">Email invoices</Label>
                <p className="text-sm text-muted-foreground">
                  Receive invoices via email
                </p>
              </div>
              <Switch id="email-invoices" defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="payment-reminders">Payment reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified before payment due dates
                </p>
              </div>
              <Switch id="payment-reminders" defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Payment Methods
            </CardTitle>
            <CardDescription>
              Manage your payment methods
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button  className="w-full">
              <CreditCard className="h-4 w-4 mr-2" />
              Manage Payment Methods
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Invoices
            </CardTitle>
            <CardDescription>
              View and download invoices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button  className="w-full">
              <FileText className="h-4 w-4 mr-2" />
              View Invoices
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );