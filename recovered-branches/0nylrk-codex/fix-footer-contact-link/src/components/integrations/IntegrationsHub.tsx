
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IntegrationCards } from "./IntegrationCards";
import { ZapierIntegration } from "./ZapierIntegration";
import { Badge } from "@/components/ui/badge";
        <div className="flex gap-2">
          <Button variant="outline">View Documentation</Button>
          <Button>Connect New Integration</Button>
        </div>
      </div>      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Status</CardTitle>
              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>              <Badge variant="outline" className="bg-green-100 text-green-800">Healthy</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Connected Services</span>                <span className="text-muted-foreground">Connected Services</span>
                <span className="font-medium">7 / 12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Last Sync</span>
                <span className="font-medium">2 mins ago</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Pending Webhooks</span>
                <span className="font-medium">0</span>


