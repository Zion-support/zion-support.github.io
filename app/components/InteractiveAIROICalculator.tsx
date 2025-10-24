import React, { useState } from 'react';

const InteractiveAIROICalculator: React.FC = () => {
  const [currentCost, setCurrentCost] = useState(100000);
  const [efficiencyGain, setEfficiencyGain] = useState(70);
  const [timeframe, setTimeframe] = useState(12);
  
  const calculateROI = () => {
    const annualSavings = (currentCost * efficiencyGain) / 100;
    const totalSavings = annualSavings * (timeframe / 12);
    const roi = ((totalSavings - currentCost) / currentCost) * 100;
    return Math.max(0, roi);
  };
  
  const roi = calculateROI();
<<<<<<< HEAD
=======
  
>>>>>>> cursor/fix-errors-and-merge-to-main-96db
  return (
    <section className='bg-white py-16 rounded-2xl shadow-lg'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-gray-900 mb-8'>
          AI ROI Calculator
        </h2>
<<<<<<< HEAD
        <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
          Calculate the potential return on investment for implementing AI solutions in your business.
        </p>
        
        <div className='max-w-4xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Input Section */}
=======
        <div className='max-w-4xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-8'>
>>>>>>> cursor/fix-errors-and-merge-to-main-96db
            <div className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Current Annual Cost ($)
                </label>
                <input
                  type='number'
                  value={currentCost}
<<<<<<< HEAD
                  onChange={(e) => setCurrentCost(Number(e.target.value))}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              
=======
                  onChange={e => setCurrentCost(Number(e.target.value))}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-96db
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Expected Efficiency Gain (%)
                </label>
                <input
<<<<<<< HEAD
                  type='number'
                  value={efficiencyGain}
                  onChange={(e) => setEfficiencyGain(Number(e.target.value))}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              
=======
                  type='range'
                  min='10'
                  max='90'
                  value={efficiencyGain}
                  onChange={e => setEfficiencyGain(Number(e.target.value))}
                  className='w-full'
                />
                <div className='text-center text-sm text-gray-600'>
                  {efficiencyGain}%
                </div>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-96db
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Implementation Timeline (months)
                </label>
                <input
<<<<<<< HEAD
                  type='number'
                  value={timeframe}
                  onChange={(e) => setTimeframe(Number(e.target.value))}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
            </div>
            
            {/* Results Section */}
            <div className='space-y-6'>
              <div className='bg-gray-50 p-6 rounded-lg'>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>ROI Analysis</h3>
                
                <div className='space-y-4'>
                  <div className='flex justify-between items-center p-4 bg-white rounded-lg shadow-sm'>
                    <span className='text-gray-700'>Annual Savings:</span>
                    <span className='text-green-600 font-semibold'>
                      ${((currentCost * efficiencyGain) / 100).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className='flex justify-between items-center p-4 bg-white rounded-lg shadow-sm'>
                    <span className='text-gray-700'>Total Savings ({timeframe} months):</span>
                    <span className='text-green-600 font-semibold'>
                      ${((currentCost * efficiencyGain * timeframe) / 1200).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className='flex justify-between items-center p-4 bg-white rounded-lg shadow-sm'>
                    <span className='text-gray-700'>ROI:</span>
                    <span className={`font-semibold ${roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {roi.toFixed(1)}%
                    </span>
                  </div>
=======
                  type='range'
                  min='3'
                  max='24'
                  value={timeframe}
                  onChange={e => setTimeframe(Number(e.target.value))}
                  className='w-full'
                />
                <div className='text-center text-sm text-gray-600'>
                  {timeframe} months
                </div>
              </div>
            </div>
            
            <div className='bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
                ROI Projection
              </h3>
              <div className='text-center mb-6'>
                <div className='text-6xl font-bold text-blue-600 mb-2'>
                  {roi.toFixed(0)}%
                </div>
                <div className='text-gray-600'>Return on Investment</div>
              </div>
              
              <div className='space-y-4'>
                <div className='flex justify-between items-center p-4 bg-white rounded-lg shadow-sm'>
                  <span className='text-gray-700'>Annual Savings:</span>
                  <span className='font-semibold text-green-600'>
                    ${((currentCost * efficiencyGain) / 100).toLocaleString()}
                  </span>
                </div>
                <div className='flex justify-between items-center p-4 bg-white rounded-lg shadow-sm'>
                  <span className='text-gray-700'>Total Savings ({timeframe} months):</span>
                  <span className='font-semibold text-green-600'>
                    ${((currentCost * efficiencyGain * timeframe) / 1200).toLocaleString()}
                  </span>
                </div>
                <div className='flex justify-between items-center p-4 bg-white rounded-lg shadow-sm'>
                  <span className='text-gray-700'>Net Profit:</span>
                  <span className='font-semibold text-blue-600'>
                    ${(((currentCost * efficiencyGain * timeframe) / 1200) - currentCost).toLocaleString()}
                  </span>
>>>>>>> cursor/fix-errors-and-merge-to-main-96db
                </div>
              </div>
              
              <div className='mt-6 text-center'>
                <button className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
<<<<<<< HEAD
                  Get Detailed Report
=======
                  Get Detailed Analysis
>>>>>>> cursor/fix-errors-and-merge-to-main-96db
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default InteractiveAIROICalculator;
=======
export default InteractiveAIROICalculator;
>>>>>>> cursor/fix-errors-and-merge-to-main-96db
