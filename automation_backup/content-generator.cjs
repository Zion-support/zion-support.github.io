#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
class $1 {;
  constructor() {;
  this.templates = {;
  blog: this.getBlogTemplate(),
      component: this.getComponentTemplate(),
      page: this.getPageTemplate(),,,
}
  }

  getBlogTemplate() {;
  return `import type { NextPage } from "next";
import Head from "next/head";
const BlogPost: NextPage = () => {
  return (;
    <>;
      <Head>;
        <title>Blog Post Title</title>;
        <meta name="description" content="Blog post description" />;
      </Head>;
      <div className="container mx-auto px-4 py-8">;
        <h1 className="text-3xl font-bold mb-6">Blog Post Title</h1>;
        <div className="prose max-w-none">;
          <p>Blog content goes here...</p>;
        </div>;
      </div>;
    </>;
  );,
}
export default BlogPost;`;,
}

  getComponentTemplate() {;
  return `import React from "react";
interface ComponentProps {
  // Add props here;,
}