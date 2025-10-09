'use client';
import React, { useState } from 'react';
const InteractiveAIROICalculator: React.FC = () =>{
  const [currentCost, setCurrentCost] = useState(100000);
  const [efficiencyGain, setEfficiencyGain] = useState(70);
  const [timeframe, setTimeframe] = useState(12);
              return Math.max(0, roi)
  }
    return (
    <section className='bg-white py-16 rounded-2xl shadow-lg'>
      <div>
        <h2 className='text-4xl font-bold text-center text-gray-900 mb-8'>AI ROI Calculator</h2>
        <div>
          <div>
            <div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Current Annual Cost ($)
                </label>
                <input
                  type='number'
                  value={currentCost}
                  onChange={e => setCurrentCost(Number(e.target.value))}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Expected Efficiency Gain (%)
                </label>
                <input
                  type='range'
                  min='10'
                  max='90'
                  value={efficiencyGain}
                  onChange={e => setEfficiencyGain(Number(e.target.value))}
                  className='w-full'
                />
                <div>
                  {efficiencyGain}%
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Implementation Timeframe (months)
                </label>
                <select
                  value={timeframe}
                  onChange={e => setTimeframe(Number(e.target.value))}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                >
                  <option value={6}>6 months</option>
                  <option value={12}>12 months</option>
                  <option value={18}>18 months</option>
                  <option value={24}>24 months</option>
                </select>
              </div>
            </div>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6 text-center'>Your ROI Projection</h3>
              <div>
                <div>
                  {roi.toFixed(0)}%
                </div>
                <p className='text-gray-600 text-sm'>Expected return on investment over {timeframe} months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
export default InteractiveAIROICalculator