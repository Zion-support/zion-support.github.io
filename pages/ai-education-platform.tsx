

import React from 'react',;
import SEO from '../components/SEO',;
import React from 'react'
import SEO from '../components/SEO'


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

export default function AIEducationPlatformPage() {
  return (
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="AI Education Platform | Zion Tech Group" description="Personalized learning with AI" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">AI Education Platform</h1>
        <p className="text-gray-300">Adaptive learning and skill development powered by AI. Details coming soon.</p>
      </div>
    </div>
  )
};
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
