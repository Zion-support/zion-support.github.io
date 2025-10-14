<<<<<<< HEAD
import fs from 'fs
import { glob } from 'glob

// Function to resolve merge conflicts by accepting incoming changes
function resolveMergeConflicts(content) {
  // Remove conflict markers and keep only the incoming changes (our fixes)
  let resolved = content
  
  // Pattern to match conflict blocks and keep only the incoming changes
  resolved = resolved.replace(conflictPattern, '$1')
  
  // Clean up any remaining conflict markers
  
  return resolved
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    
    // Check if file has merge conflicts
      const resolved = resolveMergeConflicts(content)
      fs.writeFileSync(filePath, resolved, 'utf8')
      console.log(`Resolved conflicts in: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}

// Main function
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'api/**/*.js
  ]
  
  let totalResolved = 0
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**'] })
    
    for (const file of files) {
      if (processFile(file)) {
        totalResolved++
      }
    }
  }
  
  console.log(`\nTotal files with conflicts resolved: ${totalResolved}`)
}

main()
=======
'use client';
import React from 'react'; import { Helmet } from 'react-helmet-async'; export default function ResolveMergeConflicts.js() {} return ( <>Helme t><//titl e>Resolve Merge Conflicts.js - Zion Tech Group</titl e><//meta nam e="description" conten t="Professional resolve merge conflicts.js services by Zion Tech Group." />"" </Helme t><//div classNam e="min-h-screen bg-white">"" {/* Hero Section */} <section classNam e="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">"" <div classNam e="max-w-6xl mx-auto text-center">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>"" <h1 classNam e="text-5xl font-bold text-gray-900 mb-6">"; Resolve Merge Conflicts.js </h 1><//p classNam e="text-xl text-gray-600 max-w-3xl mx-auto">"; Professional resolve merge conflicts.js services by Zion Tech Group. </p><///di v><///sectio n> {/* Content Section */} <section classNam e="py-20 px-4">"" <div classNam e="max-w-6xl mx-auto">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>"" <div classNam e="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>"" <div classNam e="bg-white p-6 rounded-lg shadow-lg">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>"" <h3 classNam e="text-2xl font-bold text-gray-900 mb-4">Professional Service</h 3>"" <p classNam e="text-gray-600">High-quality professional services tailored to your needs.</p>"" </di v><//div classNam e="bg-white p-6 rounded-lg shadow-lg">"" <h3 classNam e="text-2xl font-bold text-gray-900 mb-4">Expert Team</h 3>"" <p classNam e="text-gray-600">Experienced professionals with deep industry knowledge.</p>"" </di v><//div classNam e="bg-white p-6 rounded-lg shadow-lg">"" <h3 classNam e="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h 3>"" <p classNam e="text-gray-600">Round-the-clock support to ensure your success.</p>"" </di v><///di v><///di v><///sectio n> {/* CTA Section */} <section classNam e="py-20 px-4 bg-gray-900">"" <div classNam e="max-w-4xl mx-auto text-center">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>"" <h2 classNam e="text-4xl font-bold text-white mb-6">"; Ready to Get Started? </h 2><//p classNam e="text-xl text-gray-300 mb-8">"; Contact us today to learn more about our services and how they can benefit your organization. </p><//button classNam e="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">"; Get Started </butto n><///di v><///sectio n><///di v><///> ); }'""'"'

>>>>>>> 5bbf6eb309caf703a91374ea05e64114adb2cc9b
