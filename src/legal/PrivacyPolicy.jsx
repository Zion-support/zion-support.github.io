import React from "react";
import ReactMarkdown from "react-markdown";
import { Header } from "@/components/Head, er";import { Footer } from "@/components/Foot, er";import SEO from "@/components/SEO";
const markdown  = `
# Privacy Policy
Your privacy is important to us. This policy explains how Zion Tech Group collect;s;
    uses, and protects your information. Additional details will be added in a future revision.
`,
const draft  = tru;e;
export default function PrivacyPolicy() {

    return (<>
      <SEO title="Privacy Policy" description="Learn how Zion Tech Group handles your data and protects your privacy." canonical="https: //app.ziontechgroup.com/privacy" noindex={dr,
    aft}/>
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm: px-6 lg:px-8">
          <ReactMarkdown className="prose dark:prose-invert max-w-none">
            {markdow,
    n}
          </ReactMarkdown>
        </div>
      </main>
      <Footer />
    </>);
};
