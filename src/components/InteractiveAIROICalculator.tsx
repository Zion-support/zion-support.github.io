'use client';
import React, { useState } from 'react';
const,
  InteractiveAIROICalculator: React.FC = () => {return (}
    <div>Coming Soon</div>)
  );
}
  const [currentCost, setCurrentCost] = useState(100000);
  const [efficiencyGain, setEfficiencyGain] = useState(70);
  const [timeframe, setTimeframe] = useState(12);
  const calculateROI = () => {
    return Math.max(0, roi)
  }return (
    <section className='bg-white py-16 rounded-2xl shadow-lg'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-gray-900 mb-8'>
          AI ROI Calculator</span>
        <div className='max-w-4xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Current Annual Cost ($)
                </label>
                <input
                  type='number'
                  value={currentCost}
                  onChange={e => setCurrentCost(Number(e.target.value))}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg,
  focus:ring-2,
  focus:ring-blue-500,
  focus:border-transparent'
// />
          </div>
Expected Efficiency Gain (%)
                  type='range'
                  min='10'
                  max='90'
                  value={efficiencyGain}
                  onChange={e => setEfficiencyGain(Number(e.target.value))}
                  className='w-full'
<div className='text-center text-sm text-gray-600'></div>
                  {efficiencyGain}%
                  Implementation Timeframe (months)
                <select></select>
                  value={timeframe}
                  onChange={e => setTimeframe(Number(e.target.value))}
                >
                  <option value={6}>6 months</option>
                  <option value={12}>12 months</option>
                  <option value={18}>18 months</option>
                  <option value={24}>24 months</option>
                </select>
            <div className='bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl'></div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6 text-center'></h3>
// Your ROI Projection</h3>
              <div className='text-center'></div>
                <div className='text-6xl font-bold text-blue-600 mb-4'></div>
                  {roi.toFixed(0)}%
                <p className='text-gray-600 text-sm'></p>
                  Expected return on investment over {timeframe} months</p>
    </section>
  );
<<<<<<< HEAD
export default InteractiveAIROICalculator</div>
  </div>
  </div>
  </h2>
  </div>
=======
export default InteractiveAIROICalculator;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
