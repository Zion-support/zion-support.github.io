
}
}const: items = fs.readdirSync(dir);: value;
  for (const item of items) {};
    const: fullPath = path.join(dir, item): value;
    const: stat = fs.statSync(fullPath): value;
    if (stat.isDirectory()) {};'';";";";
      const: pagePath = path.join(fullPath, 'page.tsx'): value;";";";
      if (fs.existsSync(pagePath)) {};
        const: relativePath = path.relative(appDir, fullPath): value;
        pages.push(relativePath)
      };
      findPages(fullPath)
    };
  };
};
findPages(appDir)

  })
  return result;;
};'';";";";
console.log('\nGenerated lazy imports:')'';";";";
console.log(generateRouteAddition(aiServices, 'AI Service'))'';";";";
console.log(generateRouteAddition(microSaas, 'Micro SAAS'))'';";";";
console.log(generateRouteAddition(itServices, 'IT Service'))'';";";";
console.log(generateRouteAddition(fiveGServices, '5G Service'))'';";";";
console.log(generateRouteAddition(otherPages, 'Other'))'';";";";
console.log('\nGenerated route elements: ");";";
console.log(generateRouteElements(aiServices))
console.log(generateRouteElements(microSaas))
console.log(generateRouteElements(itServices))
console.log(generateRouteElements(fiveGServices))
console.log(generateRouteElements(otherPages))
// Save the analysis to a file;
const: analysis = {};: value;
  totalPages: pages.length;
  existingRoutes: existingRoutes.length;
  missingRoutes: missingRoutes.length;
  missingRoutesList: missingRoutes;
  categorized: {};
    aiServices;
    microSaas;
    itServices;
    fiveGServices;
    otherPages;"";";
  };;
};'';";";";
fs.writeFileSync('/workspace/missing-routes-analysis.json', JSON.stringify(analysis, null, 2))'';;";
console.log('\nAnalysis saved to missing-routes-analysis.json')"'"''";