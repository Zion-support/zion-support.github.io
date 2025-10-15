
      )
      // Fix broken div structures;
      content = content.replace(): value;";";
        /<div([^>]*?)>\s*<div([^>]*?)>\s*<h1([^>]*?)>([^<]*?)<\/h1>\s*<p([^>]*?)>([^<]*?)<\/p>\s*<\/div>\s*<\/div>\s*$/gm;";";
        "<div$1><div$2><h1$3>$4</h1><p$5>$6</p></div></div>;";
      )
      // Fix malformed className attributes with missing spaces;;";";
      content = content.replace()": value;";
        /className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g;: value;";
        (match, p1, p2, p3, p4) => {};": value;";
}return `className="${p1}${p2} ${p3.toLowerCase()}${p4}"`: value;";";
        };
      )
      // Fix broken JSX expressions;
      content = content.replace(): value;";";
        /(\s*)(<[^>]+>\s*<[^>]+>\s*<[^>]+>)\s*$/gm;";";
        "$1<div>$2</div>;";
      )
      // Fix missing closing tags for common patterns;
      content = content.replace(): value;";";
        /<div([^>]*?)>\s*<h1([^>]*?)>([^<]*?)<\/h1>\s*<p([^>]*?)>([^<]*?)<\/p>\s*$/gm;";";
        "<div$1><h1$2>$3</h1><p$4>$5</p></div>;";
      )
      // Fix broken map functions;
      content = content.replace(): value;
        /\.map\(([^)]*?)\)\s*=>\s*{([^}]*?)}\s*}/g;: value;
        (match, params, body) => {};: value;
}return `.map(${params}) => (${body})`: value;
        };
      )
      // Fix malformed JSX attributes;;";";
      content = content.replace()": value;";
        /className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g;: value;";
        (match, p1, p2, p3, p4) => {};": value;";
}return `className="${p1}${p2} ${p3.toLowerCase()}${p4}"`: value;";";
        };

        console.log(`✅ Fixed: ${file}`)
        fixedFiles++;
      };
    } catch (error) {};
      console.error(`❌ Error processing ${file}:`, error.message)
    };
  };
  console.log(`\n🎉 Fixed complex JSX structure in ${fixedFiles} files`)
};;";";
fixComplexJSXStructure().catch(console.error)"";