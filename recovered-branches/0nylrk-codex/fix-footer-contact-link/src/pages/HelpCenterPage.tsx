
import React from &quot;react&quot;;
import HelpCenter from &quot;@/components/support/HelpCenter&quot;;
import { SEO } from &quot;@/components/SEO&quot;;

export default function HelpCenterPage() {
  return (
    <>
      <SEO 
        title=&quot;Help Center | Zion AI Marketplace&quot;
        description=&quot;Find answers to common questions about using the Zion AI Marketplace platform. Browse help articles or contact our support team.&quot;
        keywords=&quot;help center, support, FAQ, tutorial, guide, Zion AI Marketplace&quot;
      />
      <HelpCenter />
    </>
  );
}
