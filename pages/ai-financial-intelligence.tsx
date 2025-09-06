

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function AIFinancialIntelligencePage() {
  return (
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="AI Financial Intelligence | Zion Tech Group" description="AI for financial analytics" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">AI Financial Intelligence</h1>
        <p className="text-gray-300">Risk analysis and forecasting powered by AI. Details coming soon.</p>
      </div>
    </div>
  )
};
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
