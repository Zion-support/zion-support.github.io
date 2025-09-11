


<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function ApiGettingStarted() {
  const authExample = `curl -X GET \\
  https: //api.zionai.com/v1/jobs \\
  -H "Authorization: Bearer YOUR_API_KEY"`,;
const quickStartJs = `import axios from 'axios';
<<<<<<< HEAD
import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import { CodeBlock } from "@/components/developers/CodeBlock";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function ApiGettingStarted() {

  const authExample = `curl -X GET \\
  https: //api.zionai.com/v1/jobs \\
<<<<<<< HEAD
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const quickStartJs = `import axios from 'axios';
const response = await axios.get ('https://api.zionai.com / v1 / jobs', {
=======
const response = await axios.get ('https://api.zionai.com / v1 / jobs', {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  -H "Authorization: Bearer YOUR_API_KEY"`,

  const quickStartJs = `import axios from 'axios',

<<<<<<< HEAD
<<<<<<< HEAD
  -H "Authorization: Bearer YOUR_API_KEY"`
const quickStartJs = `import axios from 'axios';
  -H "Authorization: Bearer YOUR_API_KEY"`,

  const quickStartJs = `import axios from 'axios',
  -H "Authorization: Bearer YOUR_API_KEY"`,

  const quickStartJs = `import axios from 'axios',


=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  -H "Authorization: Bearer YOUR_API_KEY"`,

  const quickStartJs = `import axios from 'axios',
const response = await axios.get('https://api.zionai.com/v1/jobs', {
<<<<<<< HEAD
<<<<<<< HEAD
  headers: {
    Authorization: \`Bearer \${API_KEY}\`
  }
});
console.log(response.data),`;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  headers: {
    Authorization: \`Bearer \${API_KEY}\`;
  }
<<<<<<< HEAD


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
});
console.log(response.data),`;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}),

// // // console.log(response.data),`,

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <ApiDocsLayout>
      <div className="max-w-3xl prose prose-invert">
        <h1>Getting Started</h1>
        <h2>Overview</h2>
        <p>
          The Zion AI Marketplace API provides programmatic access to jobs, talent profiles
          quotes, and projects. Our RESTful API lets you integrate Zion's features into your
          own applications and workflows.
        </p>
        <h2>Authentication</h2>
        <p>
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          All API requests must include your API key in the Authorization header. 
          You can generate API keys in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</Link>.


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          All API requests must include your API key in the Authorization header.
          You can generate API keys in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a>.
          All API requests must include your API key in the Authorization header. 
          You can generate API keys in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</Link>.
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </p>
        <CodeBlock code={authExample} language="bash" showLineNumbers={false} />
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">
          <h3 className="text-yellow-500 text-sm font-medium mt-0">Important</h3>
          <p className="text-sm text-yellow-300/90 mb-0">
            Keep your API keys secure! Never expose them in client-side code or public repositories.
          </p>
        </div>
        <h2>Base URL</h2>
        <p>All API requests should be made to the following base URL:</p>
        <div className="bg-zinc-900 p-4 rounded-md">
          <code className="text-zion-cyan break-words">https://api.zionai.com/v1</code>
        </div>
        <h2>Content Type</h2>
        <p>
          All requests must use <code>application/json</code> content type. Set the
          <code>Content-Type</code> header accordingly.
        </p>
        <h2>Quick Start</h2>
        <p>Here's a simple example of fetching jobs using JavaScript:</p>
        <CodeBlock code={quickStartJs} language="javascript" showLineNumbers={true} />
        <h2>Available APIs</h2>
        <ul>
          <li><strong>Jobs API</strong> - Post and retrieve job listings</li>
          <li><strong>Talent API</strong> - Search and retrieve talent profiles</li>
          <li><strong>Quotes API</strong> - Create and manage quote requests</li>
          <li><strong>Projects API</strong> - Manage projects and milestones</li>
          <li><strong>Webhooks API</strong> - Set up event notifications</li>
        </ul>
        <h2>Postman Collection</h2>
        <p>
          Download our Postman collection to quickly test all available endpoints: </p>
        <div className="mt-4">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors"
          >
            Download Postman Collection
<<<<<<< HEAD
<<<<<<< HEAD
          </Link>
=======
          </a>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          </a>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>
      </div>
    </ApiDocsLayout>
  )
<<<<<<< HEAD

<<<<<<< HEAD
});
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
    return this.props.children;
  }
}
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
=======
    
    return this.props.children;
  }
}

import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
export default ApiGettingStarted;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;

export function ApiGettingStarted() {;
  const authExample = `curl -X GET \\;
  https: //api && api.zionai.com/v1/jobs \\;
  -H "Authorization: Bearer YOUR_API_KEY"`,;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const quickStartJs = `import axios from 'axios';
const response = await axios && axios.get('https://api && api.zionai.com/v1/jobs', {;
  headers: {;
    Authorization: \`Bearer \${API_KEY}\`;
  }
});
<<<<<<< HEAD
<<<<<<< HEAD
console && console.log(response && response.data),`;
=======

console && console.log(response && response.data),`;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

console && console.log(response && response.data),`;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Getting Started</h1>;

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <h2>Overview</h2>;
        <p>;
          The Zion AI Marketplace API provides programmatic access to jobs, talent profiles, ;
          quotes, and projects. Our RESTful API lets you integrate Zion's features into your ;
          own applications and workflows.;
        </p>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <h2>Authentication</h2>;
        <p>;
          All API requests must include your API key in the Authorization header. ;
          You can generate API keys in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a>.;
        </p>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

        <CodeBlock code={authExample} language="bash" showLineNumbers={false} />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        <CodeBlock code={authExample} language="bash" showLineNumbers={false} />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">;
          <h3 className="text-yellow-500 text-sm font-medium mt-0">Important</h3>;
          <p className="text-sm text-yellow-300/90 mb-0">;
            Keep your API keys secure! Never expose them in client-side code or public repositories.;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <h2>Postman Collection</h2>;
        <p>;
          Download our Postman collection to quickly test all available endpoints: </p>;
        <div className="mt-4">;
<<<<<<< HEAD
<<<<<<< HEAD
;
        <h2>Postman Collection</h2>;
        <p>;
          Download our Postman collection to quickly test all available endpoints:</p>;
        <div className="mt-4">;
          <a ;
            href="#" ;
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors";
          >;
          <a;
            href="#";
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors";
          >;
=======
          <a
            href="#" 
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <a
            href="#" 
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Download Postman Collection;
          </a>;
        </div>;
      </div>;
    </ApiDocsLayout>;
<<<<<<< HEAD
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
<<<<<<< HEAD
}
;
export default ApiGettingStarted;
=======
=======
  );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

;


export default ApiGettingStarted;
<<<<<<< HEAD

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
          <a;
            href="#";
            className="inline - flex items - center px - 4 py - 2 rounded - md bg - zion - purple text - white hover:bg - zion - purple / 90 transition - colors";
          >;
            Download Postman Collection;
          </a>;
        </div>;
      </div>;
    </ApiDocsLayout>);
}
export default ApiGettingStarted;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
