
import React from "react"
import ApiDocsLayout from "@/components/developers/
import { CodeBlock } from "@/components/developers/
          You can generate API keys in the 
quotes, and projects. Our RESTful API lets you integrate Zion's features into your own applications and workflows. </p> <h2>Authentication</h2> <p> All API requests must include your API key in the Authorization header. You can generate API keys in the <a href=" /developers/portal"className=" text-zion-cyan">Developer Portal</Link>. </p> <div className=" bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6"> <h3 className=" text-yellow-500 text-sm font-medium mt-0">Important</h3> <p className=" text-sm text-yellow-300/90 mb-0"> Keep your API keys secure! Never expose them in client-side code or public repositories. </p> </div> </div> <h2>Content Type</h2> <p> All requests must use <code>application/json</code> content type. Set the <code>Content-Type</code> header accordingly. </p> <h2>Quick Start