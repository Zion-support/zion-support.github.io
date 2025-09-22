<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function ApiGettingStarted() {
  const authExample = `curl -X GET \\
  https: //api.zionai.com/v1/jobs \\
  -H "Authorization: Bearer YOUR_API_KEY"`,;
const quickStartJs = `import axios from 'axios';
import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import { CodeBlock } from "@/components/developers/CodeBlock";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import { CodeBlock } from "@/components/developers/CodeBlock";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export function ApiGettingStarted() {
  const authExample = `curl -X GET \\
  https: //api.zionai.com/v1/jobs \\
  -H "Authorization: Bearer YOUR_API_KEY"`,;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const quickStartJs = `import axios from 'axios';export function ApiGettingStarted() {

  const authExample = `curl -X GET \\
  https: //api.zionai.com/v1/jobs \\
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

import React from './react';
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";
import { CodeBlock } from '@/components / developers / CodeBlock';
export /**
 * ApiGettingStarted - Function description
 */
function ApiGettingStarted() {
  const auth_example = `curl -X GET \\;
  https: //api.zionai.com / v1 / jobs \\;

  -H "Authorization: Bearer YOUR_API_KEY"`,
  const quickStartJs = `import axios from 'axios',const quickStartJs = `import axios from 'axios';
=======
  -H "Authorization: Bearer YOUR_API_KEY"`,

const quickStartJs = `import axios from 'axios';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const response = await axios.get ('https://api.zionai.com / v1 / jobs', {

  -H "Authorization: Bearer YOUR_API_KEY"`,

  const quickStartJs = `import axios from 'axios',

const response = await axios.get('https://api.zionai.com/v1/jobs', {
  headers: {
    Authorization: \`Bearer \${API_KEY}\`;
  }

  -H "Authorization: Bearer YOUR_API_KEY"`
const quickStartJs = `import axios from 'axios';
  -H "Authorization: Bearer YOUR_API_KEY"`,
=======
import React from "react";"
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";"
import { CodeBlock } from "@/components/developers/CodeBlock";
export function ApiGettingStarted() {}
  const authExample = `curl -X GET \\
  https: //api.zionai.com/v1/jobs \\
;`
const quickStartJs = `import axios from 'axios';'
const response = await axios.get ('https://api.zionai.com / v1 / jobs', {}
"`
  -H "Authorization: Bearer YOUR_API_KEY"`,
'`
  const quickStartJs = `import axios from 'axios',

'
const response = await axios.get('https://api.zionai.com/v1/jobs', {}
  headers: {};`
    Authorization: \`Bearer \${API_KEY}\`;
  }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

const quickStartJs = `import axios from 'axios',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const response = await axios.get('https://api.zionai.com/v1/jobs', {
  headers: {
    Authorization: \`Bearer \${API_KEY}\`;
  }
console.log(response.data),`;
}),

}),
`
// // // console.log(response.data),`,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return (
<ApiDocsLayout>"
      <div className="max-w-3xl prose prose-invert">
        <h1>Getting Started</h1>

        <h2>Overview</h2>
        <p>
          The Zion AI Marketplace API provides programmatic access to jobs,
talent profiles, quotes, and projects. Our RESTful API lets you'
          integrate Zion's features into your own applications and workflows.
        </p>
        <h2>Authentication</h2>
        <p>
<<<<<<< HEAD
<<<<<<< HEAD
          All API requests must include your API key in the Authorization header. 
          You can generate API keys in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</Link>.
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          All API requests must include your API key in the Authorization
          header. You can generate API keys in the{" "}
=======
          All API requests must include your API key in the Authorization"
          header. You can generate API keys in the{" "}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <a href="/developers/portal" className="text-zion-cyan">
            Developer Portal;
          </a>
          .
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </p>
"
        <CodeBlock code={authExample} language="bash" showLineNumbers={false} />
"
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">"
          <h3 className="text-yellow-500 text-sm font-medium mt-0">
            Important;
          </h3>"
          <p className="text-sm text-yellow-300/90 mb-0">
            Keep your API keys secure! Never expose them in client-side code or;
            public repositories.
          </p>
        </div>
        <h2>Base URL</h2>
        <p>All API requests should be made to the following base URL:</p>"
        <div className="bg-zinc-900 p-4 rounded-md">"
          <code className="text-zion-cyan break-words">
            https://api.zionai.com/v1;
          </code>
        </div>

        <h2>Content Type</h2>
        <p>
          All requests must use <code>application/json</code> content type. Set;
          the;
          <code>Content-Type</code> header accordingly.
        </p>
        <h2>Quick Start</h2>'
        <p>Here's a simple example of fetching jobs using JavaScript:</p>

        <CodeBlock;
          code={quickStartJs}"
          language="javascript"
          showLineNumbers={true}
        />

        <h2>Available APIs</h2>
        <ul>
          <li>
            <strong>Jobs API</strong> - Post and retrieve job listings;
          </li>
          <li>
            <strong>Talent API</strong> - Search and retrieve talent profiles;
          </li>
          <li>
            <strong>Quotes API</strong> - Create and manage quote requests;
          </li>
          <li>
            <strong>Projects API</strong> - Manage projects and milestones;
          </li>
          <li>
            <strong>Webhooks API</strong> - Set up event notifications;
          </li>
        </ul>
        <h2>Postman Collection</h2>
        <p>
          Download our Postman collection to quickly test all available"
          endpoints:{" "}
        </p>"
        <div className="mt-4">
          <a"
            href="#""
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors"
          >
Download Postman Collection
          </a>
          </Link>
        </div>
      </div>
    </ApiDocsLayout>
)          </Link>
        </div>
      </div>
    </ApiDocsLayout>
<<<<<<< HEAD
  )
<<<<<<< HEAD

export default ApiGettingStarted;
}

;

export default ApiGettingStarted;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
"
import React from "react";"
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";"
import {CodeBlock} from "@/components/developers/CodeBlock";
"
import React from "react",;"
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;"
import { CodeBlock } from "@/components/developers/CodeBlock",;

export function ApiGettingStarted() { return null; }`
    Authorization: \`Bearer \${API_KEY}\`;
  }
});
`
console && console.log(response && response.data),`;

  return (
    <ApiDocsLayout>;"
      <div className="max-w-3xl prose prose-invert">;
        <h1>Getting Started</h1>;

<h2>Overview</h2>;
        <p>;
          The Zion AI Marketplace API provides programmatic access to jobs, talent profiles, ;
          quotes, and projects. Our RESTful API lets you integrate Zion's features into your ;
          own applications and workflows.;
        </p>;

        <h2>Authentication</h2>;
        <p>;
          All API requests must include your API key in the Authorization header. ;"
          You can generate API keys in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a>.;
        </p>;
<CodeBlock code={authExample} language="bash" showLineNumbers={false} />;

        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">;
          <h3 className="text-yellow-500 text-sm font-medium mt-0">Important</h3>;
          <p className="text-sm text-yellow-300/90 mb-0">;
            Keep your API keys secure! Never expose them in client-side code or public repositories.;
          </p>;
        </div>;

<h2>Base URL</h2>;
        <p>All API requests should be made to the following base URL:</p>;
        <div className="bg-zinc-900 p-4 rounded-md">;
          <code className="text-zion-cyan break-words">https://api && api.zionai.com/v1</code>;
        </div>;

        <h2>Content Type</h2>;
        <p>;
          All requests must use <code>application/json</code> content type. Set the ;
          <code>Content-Type</code> header accordingly.;
        </p>;

        <h2>Quick Start</h2>;
        <p>Here's a simple example of fetching jobs using JavaScript:</p>;

        <CodeBlock code={quickStartJs} language="javascript" showLineNumbers={true} />;

        <h2>Available APIs</h2>;
        <ul>;
          <li><strong>Jobs API</strong> - Post and retrieve job listings</li>;
          <li><strong>Talent API</strong> - Search and retrieve talent profiles</li>;
          <li><strong>Quotes API</strong> - Create and manage quote requests</li>;
          <li><strong>Projects API</strong> - Manage projects and milestones</li>;
          <li><strong>Webhooks API</strong> - Set up event notifications</li>;
        </ul>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        <h2>Postman Collection</h2>;
        <p>;
          Download our Postman collection to quickly test all available endpoints: </p>;"
        <div className="mt-4">;
<<<<<<< HEAD
          <a
            href="#" 
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors">;
            Download Postman Collection;
          </a>;
        </div>;
      </div>;
    </ApiDocsLayout>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

;

export default ApiGettingStarted;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
;
console.log (response.data), `;
;
  return (
    <ApiDocsLayout>;
      <div className="max - w-3xl prose prose - invert">;
        <h1 > Getting Started</h1>;
        <h2 > Overview</h2>;
        <p>;
          The Zion AI Marketplace API provides programmatic access to jobs, talent profiles,
          quotes, and projects. Our RESTful API lets you integrate Zion's features into your;
          own applications and workflows.;
        </p>;
        <h2 > Authentication</h2>;
        <p>;
          All API requests must include your API key in the Authorization header.;
          You can generate API keys in the <a href="/developers / portal" className="text - zion - cyan">Developer Portal</a>.;
        </p>;
        <CodeBlock code={auth_example} language="bash" showLineNumbers={false} />;
        <div className="bg - yellow - 900 / 20 border border - yellow - 700 / 50 rounded - md p - 4 my - 6">;
          <h3 className="text - yellow - 500 text - sm font - medium mt - 0">Important</h3>;
          <p className="text - sm text - yellow - 300 / 90 mb - 0">;
            Keep your API keys secure! Never expose them in client - side code or public repositories.;
          </p>;
        </div>;
        <h2 > Base URL</h2>;
        <p > All API requests should be made to the following base URL:</p>;
        <div className="bg - zinc - 900 p - 4 rounded - md">;
          <code className="text - zion - cyan break - words">https://api.zionai.com / v1</code>;
        </div>;
        <h2 > Content Type</h2>;
        <p>;
          All requests must use <code > application / json</code> content type. Set the;
          <code > Content - Type</code> header accordingly.;
        </p>;
        <h2 > Quick Start</h2>;
        <p > Here's a simple example of fetching jobs using JavaScript:</p>;
        <CodeBlock code={quickStartJs} language="javascript" showLineNumbers={true} />;
        <h2 > Available APIs</h2>;
        <ul>;
          <li><strong > Jobs API</strong> - Post and retrieve job listings</li>;
          <li><strong > Talent API</strong> - Search and retrieve talent profiles</li>;
          <li><strong > Quotes API</strong> - Create and manage quote requests</li>;
          <li><strong > Projects API</strong> - Manage projects and milestones</li>;
          <li><strong > Webhooks API</strong> - Set up event notifications</li>;
        </ul>;
        <h2 > Postman Collection</h2>;
        <p>;
          Download our Postman collection to quickly test all available endpoints: </p>;
        <div className="mt - 4">;

;
        <h2>Postman Collection</h2>;
        <p>;
          Download our Postman collection to quickly test all available endpoints:</p>;
        <div className="mt-4">;
          <a ;
            href="#" ;
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors";
          >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <a;
            href="#";
=======

          <a;"
            href="#";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors";
          >;
            Download Postman Collection;
          </a>;
        </div>;
      </div>;
</ApiDocsLayout>);
}
export default ApiGettingStarted;
;

});
}

export default ApiGettingStarted;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
