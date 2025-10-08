import React, { useState } from 'react';

export const InteractiveAIROICalculator: React.FC = () => {
  const [investment, setInvestment] = useState(10000);
  const [roi, setRoi] = useState(0);

  const calculateROI = () => {
    setRoi(investment * 0.3);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">AI ROI Calculator</h2>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <label className="block mb-4">
            <span className="text-gray-700">Investment Amount:</span>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </label>
          <button
            onClick={calculateROI}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Calculate ROI
          </button>
          <div className="mt-4 text-center">
            <p className="text-2xl font-bold text-green-600">${roi.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAIROICalculator;
