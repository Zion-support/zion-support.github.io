
        if (content.includes("<Helmet>") && !content.includes("<>")"
"
  content = content.replace(/<Helmet>/g, "<>\n        <Helmet>")"


