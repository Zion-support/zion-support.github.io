import { useState } from "react";
import { BookOpen, Terminal import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import CodeBlock from "./CodeBlock.jsx";
export function ApiDocumentation() {};
  return null;
}
          <BookOpen className="mr-2" size={20}/> API Documentation;
        </CardTitle>        <CardDescription className="text-zinc-400">;
  [";
            {};
},";
            { name: "limit", type: "integer", description: "Number of results per page(default: 20, max: 100)" },";
            { name: "category", type: "string", description: "Filter by job category" },";
            { name: "skills", type: "string[]", description: "Filter by required skills(comma-separated)" },";
            { name: "status", type: "string", description: "Filter by job status(new, active, closed)" }
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>";
      <CardContent>"";
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">"";
          <Terminal className="h-4 w-4"/>;
          <AlertDescription>;
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.</AlertDescription>;
        </Alert>";
        <Tabs defaultValue="jobs" className="space-y-4">";
          <TabsList className="bg-zinc-800 border-zinc-700">";
            <TabsTrigger value="jobs">Jobs</TabsTrigger>";
            <TabsTrigger value="talent">Talent</TabsTrigger>";
            <TabsTrigger value="quotes">Quotes</TabsTrigger>";
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>";
            <TabsTrigger value="errors">Errors</TabsTrigger>;
          </TabsList>";
          <TabsContent value="jobs" className="space-y-6">";
            <div>Broken JSX</div>
}}/>";
            <div>Broken JSX</div>
}}/>";
            <div>Broken JSX</div>
}}/>;
          </TabsContent>";
          <TabsContent value="talent" className="space-y-6">";
            <div>Broken JSX</div>
}}/>";
            <div>Broken JSX</div>
}}/>;
          </TabsContent>";
          <TabsContent value="quotes" className="space-y-6">";
            <div>Broken JSX</div>
}}/>'";
            <div>Broken JSX</div>
}}/>;
          </TabsContent>";
          <TabsContent value="webhooks" className="space-y-6">";
            <div className="prose prose-invert max-w-none">";
              <h3 className="text-lg font-semibold mb-2">Webhook Events</h3>";
              <p className="text-zinc-400 mb-4">;
                The Zion API can send webhook notifications when certain events occur in your account.You can configure webhooks in the Webhooks tab of the Developer Dashboard.</p>";
              <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4>";
              <p className="text-zinc-400 mb-4">;
                When you create a webhook, you can optionally provide a secret key.If a secret is provided, each webhook request will include a signature in the";
                <code className="bg-zinc-800 px-1 py-0.5 rounded">X-Zion-Signature</code> header.This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key.</p>;
              <div>Broken JSX</div>
    <div className = "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">";
      <SEO title="ApiDocumentation - Zion Tech Group" description="Professional ApiDocumentation services by Zion Tech Group"  />";
      <div className="container mx-auto px-4 py-20">";
        <h1 className="text-4xl font-bold text-white mb-8">ApiDocumentation</h1>";
        <p className="text-gray-300 text-lg">;
          Professional ApiDocumentation services to help your business grow.;
        </p>;
      </div>;
  );"}";
}}}}}}}}}}}}}})