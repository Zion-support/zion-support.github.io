'use client;'
import React from 'react; import { Helmet } from 'react-helmet-async'; export default function FixAllCorruptedPages.js() {} return ( <>Helme t><//titl e>Fix All Corrupted Pages.js - Zion Tech Group</titl e><//meta nam e="description" conten t="Professional fix all corrupted pages.js services by Zion Tech Group." />"" </Helme t><//div classNam e="min-h-screen bg-white">"" {/* Hero Section */} <section classNam e="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">"" <div classNam e="max-w-6xl mx-auto text-center">
      </div>
    </React.Fragment>
  );
}`;

    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files and fix corrupted ones
const allPageFiles = getAllPageFiles();
let fixedCount = 0;

allPageFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (isCorrupted(content)) {
      fixPage(filePath);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} corrupted pages out of ${allPageFiles.length} total pages.`);
