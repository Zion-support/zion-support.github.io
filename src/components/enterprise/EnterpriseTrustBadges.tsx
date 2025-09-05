
import React from &quot;react&quot;;
import { Shield, Lock, Award, CheckCircle } from 'lucide-react'

export function EnterpriseTrustBadges() {
  return (
    <section className=&quot;py-10 px-4 md:px-6 border-t border-b border-border&quot;>
      <div className=&quot;container mx-auto max-w-6xl&quot;>
        <div className=&quot;text-center mb-8&quot;>
          <h3 className=&quot;text-xl font-medium mb-2&quot;>Enterprise-Grade Security & Compliance</h3>
          <p className=&quot;text-muted-foreground&quot;>We maintain the highest standards of data protection and compliance</p>
        </div>
        <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6&quot;>
          <div className=&quot;flex items-center justify-center gap-2 p-4 rounded-lg border border-border&quot;>
            <Shield className=&quot;h-5 w-5 text-primary&quot; />
            <span className=&quot;font-medium&quot;>GDPR Compliant</span>
          </div>
          <div className=&quot;flex items-center justify-center gap-2 p-4 rounded-lg border border-border&quot;>
            <Lock className=&quot;h-5 w-5 text-primary&quot; />
            <span className=&quot;font-medium&quot;>SOC 2 Type II</span>
          </div>
          <div className=&quot;flex items-center justify-center gap-2 p-4 rounded-lg border border-border&quot;>
            <Award className=&quot;h-5 w-5 text-primary&quot; />
            <span className=&quot;font-medium&quot;>ISO 27001</span>
          </div>
          <div className=&quot;flex items-center justify-center gap-2 p-4 rounded-lg border border-border&quot;>
            <CheckCircle className=&quot;h-5 w-5 text-primary&quot; />
            <span className=&quot;font-medium&quot;>HIPAA Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}
