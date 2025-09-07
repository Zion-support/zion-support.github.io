import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import { CodeBlock } from "@/components/developers/CodeBlock";
export function ApiGettingStarted() {
  const authExample = $2;
  const quickStartJs = $2;
const response = await axios.get($2);
console.log(response.data),`,

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
          All API requests must include your API key in the Authorization header. 
          You can generate API keys in the <a href = $2;