import React from 'react';

export const TranslatableJobForm: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Job Form</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input 
            type="text" 
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter job title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea 
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
            placeholder="Enter job description"
          />
        </div>
        <button 
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};