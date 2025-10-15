
  return ()
    <div>Content</div>
  )

    fs.mkdirSync(pageDir, { recursive: true })
  // Overwrite page file with correct template
  fs.writeFileSync(pageFile, pageTemplate(pageName, title, componentName)