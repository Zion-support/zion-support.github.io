<<<<<<< HEAD
export function ApiGettingStarted() {
  const authExample = `curl -X GET \\
  https: //api.zionai.com/v1/jobs \\
  -H "Authorization: Bearer YOUR_API_KEY"`,;
const quickStartJs = `import axios from 'axios';
=======
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import { CodeBlock } from "@/components/developers/CodeBlock";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export function ApiGettingStarted() {

  const authExample = `curl -X GET \\
  https: //api.zionai.com/v1/jobs \\
<<<<<<< HEAD
  -H "Authorization: Bearer YOUR_API_KEY"`
const quickStartJs = `import axios from 'axios';
  -H "Authorization: Bearer YOUR_API_KEY"`,

  const quickStartJs = `import axios from 'axios',
=======
<<<<<<< HEAD
<<<<<<< HEAD

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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const quickStartJs = `import axios from 'axios';
const response = await axios.get ('https://api.zionai.com / v1 / jobs', {

  -H "Authorization: Bearer YOUR_API_KEY"`,

  const quickStartJs = `import axios from 'axios',

<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  -H "Authorization: Bearer YOUR_API_KEY"`,

  const quickStartJs = `import axios from 'axios',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const response = await axios.get('https://api.zionai.com/v1/jobs', {
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  headers: {
    Authorization: \`Bearer \${API_KEY}\`;
  }


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  -H "Authorization: Bearer YOUR_API_KEY"`
const quickStartJs = `import axios from 'axios';
  -H "Authorization: Bearer YOUR_API_KEY"`,

  const quickStartJs = `import axios from 'axios',
  -H "Authorization: Bearer YOUR_API_KEY"`,

  const quickStartJs = `import axios from 'axios',
const response = await axios.get('https://api.zionai.com/v1/jobs', {
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  headers: {
    Authorization: \`Bearer \${API_KEY}\`;
  }
});
console.log(response.data),`;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}),

// // // console.log(response.data),`,

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  return (
    <ApiDocsLayout>
      <div className="max-w-3xl prose prose-invert">
        <h1>Getting Started</h1>

        <h2>Overview</h2>
        <p>
          The Zion AI Marketplace API provides programmatic access to jobs,
          talent profiles, quotes, and projects. Our RESTful API lets you
          integrate Zion's features into your own applications and workflows.
        </p>
        <h2>Authentication</h2>
        <p>
<<<<<<< HEAD
=======
          All API requests must include your API key in the Authorization
          header. You can generate API keys in the{" "}
          <a href="/developers/portal" className="text-zion-cyan">
            Developer Portal
          </a>
          .
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        </p>

        <CodeBlock code={authExample} language="bash" showLineNumbers={false} />

        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">
          <h3 className="text-yellow-500 text-sm font-medium mt-0">
            Important
          </h3>
          <p className="text-sm text-yellow-300/90 mb-0">
            Keep your API keys secure! Never expose them in client-side code or
            public repositories.
          </p>
        </div>
        <h2>Base URL</h2>
        <p>All API requests should be made to the following base URL:</p>
        <div className="bg-zinc-900 p-4 rounded-md">
          <code className="text-zion-cyan break-words">
            https://api.zionai.com/v1
          </code>
        </div>

        <h2>Content Type</h2>
        <p>
          All requests must use <code>application/json</code> content type. Set
          the
          <code>Content-Type</code> header accordingly.
        </p>
        <h2>Quick Start</h2>
        <p>Here's a simple example of fetching jobs using JavaScript:</p>

        <CodeBlock
          code={quickStartJs}
          language="javascript"
          showLineNumbers={true}
        />

        <h2>Available APIs</h2>
        <ul>
          <li>
            <strong>Jobs API</strong> - Post and retrieve job listings
          </li>
          <li>
            <strong>Talent API</strong> - Search and retrieve talent profiles
          </li>
          <li>
            <strong>Quotes API</strong> - Create and manage quote requests
          </li>
          <li>
            <strong>Projects API</strong> - Manage projects and milestones
          </li>
          <li>
            <strong>Webhooks API</strong> - Set up event notifications
          </li>
        </ul>
        <h2>Postman Collection</h2>
        <p>
          Download our Postman collection to quickly test all available
          endpoints:{" "}
        </p>
        <div className="mt-4">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors"
          >
            Download Postman Collection
<<<<<<< HEAD
          </Link>
        </div>
      </div>
    </ApiDocsLayout>
  )
=======
<<<<<<< HEAD
<<<<<<< HEAD
          </a>
=======
          </Link>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          </Link>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        </div>
      </div>
    </ApiDocsLayout>
  );
}

import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";

import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;

export function ApiGettingStarted() {;
  const authExample = `curl -X GET \\;
  https: //api && api.zionai.com/v1/jobs \\;
  -H "Authorization: Bearer YOUR_API_KEY"`,;

  const quickStartJs = `import axios from 'axios';
const response = await axios && axios.get('https://api && api.zionai.com/v1/jobs', {;
  headers: {;
    Authorization: \`Bearer \${API_KEY}\`;
  }
});

console && console.log(response && response.data),`;

  return (
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Getting Started</h1>;

<<<<<<< HEAD
        <h2>Overview</h2>;
        <p>;
          The Zion AI Marketplace API provides programmatic access to jobs, talent profiles, ;
          quotes, and projects. Our RESTful API lets you integrate Zion's features into your ;
          own applications and workflows.;
        </p>;

=======
import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
;
export function ApiGettingStarted() {;
  const authExample = `curl -X GET \\;
  https://api.zionai.com/v1/jobs \\;
  -H "Authorization:Bearer YOUR_API_KEY"`,;
;
  const quickStartJs = `import axios from 'axios',;
;
const response = await axios.get('https://api.zionai.com/v1/jobs', {;
  headers:{;
    Authorization:\`Bearer \${API_KEY}\`;
  }
}),;
;
// // // console.log(response.data),`,;
;
}
export default ApiGettingStarted;

import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
export function ApiGettingStarted() {;
  const authExample = `curl -X GET \\;
  https: //api.zionai.com/v1/jobs \\;
  -H "Authorization: Bearer YOUR_API_KEY"`,;
  const quickStartJs = `import axios from 'axios',;
const response = await axios.get('https://api.zionai.com/v1/jobs', {;
  headers: {;
    Authorization: \`Bearer \${API_KEY}\`;
  }
}),;
// // // console.log(response.data),`,;
  return (;
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Getting Started</h1>;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <h2>Authentication</h2>;
        <p>;
          All API requests must include your API key in the Authorization header. ;
          You can generate API keys in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a>.;
        </p>;
<<<<<<< HEAD

        <CodeBlock code={authExample} language="bash" showLineNumbers={false} />;

=======
        ;
        <CodeBlock code={authExample} language="bash" showLineNumbers={false} />;
        ;
        <h2>Overview</h2>;
        <p>;
          The Zion AI Marketplace API provides programmatic access to jobs, talent profiles;
          quotes, and projects. Our RESTful API lets you integrate Zion's features into your;
          own applications and workflows.;
        </p>;
        <h2>Authentication</h2>;
        <p>;
          All API requests must include your API key in the Authorization header.;
          You can generate API keys in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a>.;
        </p>;
        <CodeBlock code={authExample} language="bash" showLineNumbers={false} />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">;
          <h3 className="text-yellow-500 text-sm font-medium mt-0">Important</h3>;
          <p className="text-sm text-yellow-300/90 mb-0">;
            Keep your API keys secure! Never expose them in client-side code or public repositories.;
          </p>;
        </div>;
<<<<<<< HEAD

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

=======
;
        <h2>Base URL</h2>;
        <p>All API requests should be made to the following base URL:</p>;
        <div className="bg-zinc-900 p-4 rounded-md">;
          <code className="text-zion-cyan break-words">https://api.zionai.com/v1</code>;
        </div>;
;
        <h2>Quick Start</h2>;
        <p>Here's a simple example of fetching jobs using JavaScript:</p>;
        ;
        <CodeBlock code={quickStartJs} language="javascript" showLineNumbers={true} />;
;
        <h2>Content Type</h2>;
        <p>;
          All requests must use <code>application/json</code> content type. Set the;
          <code>Content-Type</code> header accordingly.;
        </p>;
        <h2>Quick Start</h2>;
        <p>Here's a simple example of fetching jobs using JavaScript:</p>;
        <CodeBlock code={quickStartJs} language="javascript" showLineNumbers={true} />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <h2>Available APIs</h2>;
        <ul>;
          <li><strong>Jobs API</strong> - Post and retrieve job listings</li>;
          <li><strong>Talent API</strong> - Search and retrieve talent profiles</li>;
          <li><strong>Quotes API</strong> - Create and manage quote requests</li>;
          <li><strong>Projects API</strong> - Manage projects and milestones</li>;
          <li><strong>Webhooks API</strong> - Set up event notifications</li>;
        </ul>;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <h2>Postman Collection</h2>;
        <p>;
          Download our Postman collection to quickly test all available endpoints: </p>;
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
}

;


export default ApiGettingStarted;

=======
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
=======
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
          <a;
            href="#";
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors";
          >;
            Download Postman Collection;
          </a>;
        </div>;
      </div>;
<<<<<<< HEAD
    </ApiDocsLayout>);
}
export default ApiGettingStarted;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    </ApiDocsLayout>;
  );}
;
export default ApiGettingStarted,;
 export function ApiGettingStarted () {
  const authExample = `curl -X GET \\ https://api.zionai.com/v1/jobs \\ -H "Authorization: Bearer YOUR API KEY" `;
headers: {
  Authorization: \`Bearer \$ {
  API KEY 
}\` 
}
});
max-w-3xl prose prose-invert"> <h1>Getting Started</h1> <h2>Overview</h2> <p> The Zion AI Marketplace API provides programmatic access to jobs, talent profiles;
quotes, and projects. Our RESTful API lets you integrate Zion's features into your own applications and workflows. </p> <h2>Authentication</h2> <p> All API requests must include your API key in the Authorization header. You can generate API keys in the <a href=" /developers/portal"className=" text-zion-cyan">Developer Portal</Link>. </p> <div className=" bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6"> <h3 className=" text-yellow-500 text-sm font-medium mt-0">Important</h3> <p className=" text-sm text-yellow-300/90 mb-0"> Keep your API keys secure! Never expose them in client-side code or public repositories. </p> </div> </div> <h2>Content Type</h2> <p> All requests must use <code>application/json</code> content type. Set the <code>Content-Type</code> header accordingly. </p> <h2>Quick Start</h2> <p>Here's a simple example of fetching jobs using JavaScript:</p> <h2>Available APIs</h2> <ul> <li><strong>Jobs API</strong> - Post and retrieve job listings</li> <li><strong>Talent API</strong> - Search and retrieve talent profiles</li> <li><strong>Quotes API</strong> - Create and manage quote requests</li> <li><strong>Projects API</strong> - Manage projects and milestones</li> <li><strong>Webhooks API</strong> - Set up event notifications</li> </ul> <h2>Postman Collection</h2> <p> <a href=" #"className=" inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors" > Download Postman Collection </Link> </div> </div> </ApiDocsLayout>) 
}export default ApiGettingStarted;
  );
}
;
export default ApiGettingStarted;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
});
}


export default ApiGettingStarted;
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
