import React, { useState } from "react";

export const AIContentGenerator: React.FC = () => {
  const [topic, setTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");

  const generateContent = async () => {
    setIsGenerating(true);
    // Simulate content generation
    setTimeout(() => {
      setGeneratedContent(`Generated content about ${topic}`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">AI Content Generator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Topic</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter a topic..."
          />
        </div>
        <button
          onClick={generateContent}
          disabled={!topic || isGenerating}
          className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
        >
          {isGenerating ? "Generating..." : "Generate Content"}
        </button>
        {generatedContent && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium mb-2">Generated Content:</h4>
            <p>{generatedContent}</p>
          </div>
        )}
      </div>
    </div>
  );
};