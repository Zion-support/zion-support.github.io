
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
import React from 'react';
import SEO from '../components/SEO';
export default function AICreativityStudioPage() {
  return (
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="AI Creativity Studio | Zion Tech Group" description="AI tools for creative workflows" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">AI Creativity Studio</h1>
        <p className="text-gray-300">Creative automation tools for content, video, and design. Details coming soon.</p>
      </div>
    </div>
  )
};
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
