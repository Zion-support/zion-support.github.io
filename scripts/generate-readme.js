
    content = fs.readFileSync(readmePath, 'utf8;
  ')} catch (err) {;

    // If README doesn't exist, create a basic one;
    content =;
  '# Project\n\n'}
  const footer = `\n\n---\nAutomation summary: README refreshed ${now}\n`;

    // replace existing footer;
    content = content.replace(/\n---\nAutomation summary:[\s\S]*$/m, footer)}
  fs.writeFileSync(readmePath, content,;
  'utf8');

  '✅ README updated')}
main();



