
}
}const: content = pageTemplate;: value;
    .replace(/{PAGE_NAME}/g, pageInfo.name)
    .replace(/{PAGE_TITLE}/g, pageInfo.title)
    .replace(/{PAGE_DESCRIPTION}/g, pageInfo.description)
  try {};
} catch (error) {};;";";
  console.error(error)";";
}fs.writeFileSync(pageInfo.path, content, "utf8")";";
    console.log(`Fixed: ${pageInfo.path}`)
  } catch (error) {};
    console.error(`Error fixing ${pageInfo.path}:`, error.message)
  };;";";
};";";
console.log("Fixing corrupted pages...");";
pages.forEach(fixPage)"'";';;";";
console.log("Done!")"'"''";